const admin = require("firebase-admin");
const {onCall, onRequest, HttpsError} = require("firebase-functions/v2/https");
const {onSchedule} = require("firebase-functions/v2/scheduler");
const {defineSecret} = require("firebase-functions/params");
const {setGlobalOptions} = require("firebase-functions/v2/options");
const logger = require("firebase-functions/logger");

admin.initializeApp();
setGlobalOptions({maxInstances: 10});

const OPENROUTER_API_KEY = defineSecret("OPENROUTER_API_KEY");
const GOOGLE_CLIENT_SECRET = defineSecret("GOOGLE_CLIENT_SECRET");
const TELEGRAM_BOT_TOKEN = defineSecret("TELEGRAM_BOT_TOKEN");
const db = admin.firestore();

const TIME_ZONE = "America/New_York";

function parseHour(hourText, meridiem) {
  let hour = Number(hourText);
  if (!Number.isFinite(hour) || hour < 1 || hour > 12) return null;

  const normalizedMeridiem = meridiem.toLowerCase();
  if (normalizedMeridiem === "pm" && hour !== 12) hour += 12;
  if (normalizedMeridiem === "am" && hour === 12) hour = 0;
  return hour;
}

function getLocalDateParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const lookup = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return {
    year: Number(lookup.year),
    month: Number(lookup.month),
    day: Number(lookup.day),
    hour: Number(lookup.hour),
    minute: Number(lookup.minute),
    second: Number(lookup.second),
  };
}

function buildZonedDate({dayOffset = 0, hour, minute = 0}) {
  const local = getLocalDateParts();
  const utcGuess = Date.UTC(local.year, local.month - 1, local.day + dayOffset, hour, minute, 0);
  const guessed = new Date(utcGuess);
  const guessedLocal = getLocalDateParts(guessed);
  const localAsUtc = Date.UTC(
    guessedLocal.year,
    guessedLocal.month - 1,
    guessedLocal.day,
    guessedLocal.hour,
    guessedLocal.minute,
    guessedLocal.second,
  );
  const offsetMs = localAsUtc - guessed.getTime();
  return new Date(utcGuess - offsetMs);
}

function cleanTitle(text) {
  const cleaned = text
    .replace(/^remind me\s+/i, "")
    .replace(/^notify me\s+/i, "")
    .replace(/^reminder\s+/i, "")
    .replace(/^schedule\s+/i, "")
    .replace(/^set\s+(a\s+)?/i, "")
    .replace(/^set\s+(a\s+)?reminder\s+/i, "")
    .replace(/\breminder\b/i, "")
    .replace(/^(for|to)\s+/i, "")
    .replace(/\s+/g, " ")
    .trim();

  if (/^(for|to)$/i.test(cleaned)) return "";
  return cleaned;
}

function hasReminderIntent(message) {
  return /\b(remind me|notify me|set\s+(a\s+)?(?:\d{1,4}\s+)?(?:min|mins|minute|minutes|hr|hrs|hour|hours)?\s*reminder|reminder)\b/i.test(message);
}

function stripReminderTiming(text) {
  return cleanTitle(
    text
      .replace(/\b(?:(?:in|for)\s+)?\d{1,4}\s*(?:min|mins|minute|minutes)\b/i, "")
      .replace(/\b(?:(?:in|for)\s+)?\d{1,4}\s*(?:hr|hrs|hour|hours)\b/i, "")
      .replace(/\b(today|tomorrow)\s+at\s+\d{1,2}(?::\d{2})?\s*(am|pm)\b/i, "")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function parseReminderIntent(message) {
  const normalized = message.trim();
  const lower = normalized.toLowerCase();
  if (!hasReminderIntent(normalized)) return null;

  const inMinutes = lower.match(/\b(?:(?:in|for)\s+)?(\d{1,4})\s*(min|mins|minute|minutes)\b/);
  if (inMinutes) {
    const minutes = Number(inMinutes[1]);
    const remindAt = new Date(Date.now() + minutes * 60 * 1000);
    const taskText = normalized
      .replace(/\b(?:(?:in|for)\s+)?\d{1,4}\s*(?:min|mins|minute|minutes)\b/i, "")
      .trim();

    const title = cleanTitle(taskText || normalized);
    return {
      title: title || "Reminder",
      message: normalized,
      remindAt,
      isEvent: false,
      reply: `Got it. I’ll remind you in ${minutes} ${minutes === 1 ? "minute" : "minutes"}.`,
    };
  }

  const inHours = lower.match(/\b(?:(?:in|for)\s+)?(\d{1,4})\s*(hr|hrs|hour|hours)\b/);
  if (inHours) {
    const hours = Number(inHours[1]);
    const remindAt = new Date(Date.now() + hours * 60 * 60 * 1000);
    const taskText = normalized
      .replace(/\b(?:(?:in|for)\s+)?\d{1,4}\s*(?:hr|hrs|hour|hours)\b/i, "")
      .trim();

    const title = cleanTitle(taskText || normalized);
    return {
      title: title || "Reminder",
      message: normalized,
      remindAt,
      isEvent: false,
      reply: `Got it. I’ll remind you in ${hours} ${hours === 1 ? "hour" : "hours"}.`,
    };
  }

  const dayAtTime = lower.match(/\b(today|tomorrow)\s+at\s+(\d{1,2})(?::(\d{2}))?\s*(am|pm)\b/);
  if (dayAtTime) {
    const [, dayText, hourText, minuteText, meridiem] = dayAtTime;
    const hour = parseHour(hourText, meridiem);
    if (hour === null) return null;

    const minute = minuteText ? Number(minuteText) : 0;
    const dayOffset = dayText === "tomorrow" ? 1 : 0;
    const remindAt = buildZonedDate({dayOffset, hour, minute});
    const taskText = normalized
      .replace(/\b(today|tomorrow)\s+at\s+\d{1,2}(?::\d{2})?\s*(am|pm)\b/i, "")
      .replace(/^(remind me|notify me|set a reminder|reminder)\s*(to)?\s*/i, "")
      .trim();

    const title = cleanTitle(taskText || normalized);
    return {
      title: title || "Reminder",
      message: normalized,
      remindAt,
      isEvent: false,
      reply: `Got it. I’ll remind you ${dayText} at ${hourText}${minuteText ? `:${minuteText}` : ""}${meridiem}.`,
    };
  }

  return null;
}

function getUserId(request) {
  if (!request.auth?.uid) {
    throw new HttpsError("unauthenticated", "Please sign in before using Barbie.");
  }
  return request.auth.uid;
}

function getUserEmail(request) {
  return request.auth?.token?.email || request.auth?.token?.firebase?.identities?.email?.[0] || null;
}

function splitScopes(scopes) {
  if (Array.isArray(scopes)) return scopes.filter(Boolean);
  return String(scopes || "")
    .split(/\s+/)
    .map((scope) => scope.trim())
    .filter(Boolean);
}

async function exchangeGoogleAuthCode({code, clientId}) {
  const body = new URLSearchParams({
    code,
    client_id: clientId,
    client_secret: GOOGLE_CLIENT_SECRET.value(),
    redirect_uri: "postmessage",
    grant_type: "authorization_code",
  });

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {"Content-Type": "application/x-www-form-urlencoded"},
    body,
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    logger.error("Google auth code exchange failed", {status: response.status, error: data.error_description || data.error});
    throw new HttpsError("internal", data.error_description || "Google authorization failed.");
  }

  return data;
}

async function exchangeRefreshToken({refreshToken, clientId}) {
  const body = new URLSearchParams({
    refresh_token: refreshToken,
    client_id: clientId,
    client_secret: GOOGLE_CLIENT_SECRET.value(),
    grant_type: "refresh_token",
  });

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {"Content-Type": "application/x-www-form-urlencoded"},
    body,
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    logger.error("Google refresh exchange failed", {status: response.status, error: data.error_description || data.error});
    throw new HttpsError("failed-precondition", "Google connection expired. Please reconnect Gmail.");
  }

  return data.access_token;
}

function encodeEmail(text) {
  return Buffer.from(text, "utf8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function buildRawEmail({to, subject, body}) {
  return encodeEmail([
    `To: ${to}`,
    `Subject: ${subject}`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "",
    body,
  ].join("\r\n"));
}

async function sendEmailForUser({userId, userEmail, to, subject, body}) {
  const connectionRef = db.collection("googleConnections").doc(userId);
  const connectionSnap = await connectionRef.get();

  if (!connectionSnap.exists || !connectionSnap.data()?.refreshToken) {
    throw new HttpsError("failed-precondition", "Gmail is not connected. Please connect Gmail first.");
  }

  const connection = connectionSnap.data();
  const accessToken = await exchangeRefreshToken({
    refreshToken: connection.refreshToken,
    clientId: connection.clientId,
  });

  const response = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({raw: buildRawEmail({to, subject, body})}),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    logger.error("Gmail send failed", {status: response.status, error: data.error || data});
    throw new HttpsError("internal", data.error?.message || "Gmail could not send the email.");
  }

  await db.collection("sentEmails").add({
    userId,
    userEmail,
    to,
    subject,
    body,
    gmailMessageId: data.id || null,
    threadId: data.threadId || null,
    sentAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  return data;
}

function isSendEmailIntent(message) {
  return /\bsend\s+(an\s+)?email\s+to\b/i.test(message) ||
    /\bsend\s+email\b/i.test(message) ||
    /\bemail\s+.+/i.test(message);
}

function parseEmailDraft(message) {
  const normalized = String(message || "").replace(/\r\n/g, "\n").replace(/\r/g, "\n").trim();
  const emailPattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;
  const to = normalized.match(new RegExp(`\\bto\\s+(${emailPattern.source})\\b`, "i"))?.[1] ||
    normalized.match(emailPattern)?.[0] ||
    "";

  const fieldMatches = [...normalized.matchAll(/^\s*(subject|body)\s*:\s*([\s\S]*?)(?=^\s*(?:subject|body)\s*:|\s*$)/gim)];
  const fields = fieldMatches.reduce((acc, match) => {
    acc[match[1].toLowerCase()] = String(match[2] || "").trim();
    return acc;
  }, {});

  const subject = fields.subject ||
    normalized.match(/\bsubject\s+(.+?)(?:\s+body\b|\s+saying\b|\s+that\b|$)/i)?.[1]?.trim() ||
    "";
  const body = fields.body ||
    normalized.match(/\bbody\s+(.+)$/is)?.[1]?.trim() ||
    normalized.match(/\bsaying\s+(.+)$/is)?.[1]?.trim() ||
    normalized.match(/\bthat\s+(.+)$/is)?.[1]?.trim() ||
    "";

  return {
    to,
    subject,
    body,
    missing: [
      !to ? "recipient email" : null,
      !subject ? "subject" : null,
      !body ? "message body" : null,
    ].filter(Boolean),
  };
}

async function handleSendEmailIntent({message, userId, userEmail, messages}) {
  const pendingRef = db.collection("pendingEmailSends").doc(userId);
  const lower = message.toLowerCase();

  if (/^(yes|yes send|yes send it|send it|confirm|confirmed|go ahead|please send)$/i.test(lower.trim())) {
    const reply = "Gmail sending is coming in V2. I can still help draft the message, but I will not send emails in Barbie V1.";
    await messages.add({
      role: "assistant",
      content: reply,
      userId,
      userEmail,
      source: "gmail-v2-disabled",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    return {reply, disabledFeature: "gmail-send-v2"};
  }

  if (/^__legacy_yes_send_disabled__$/i.test(lower.trim())) {
    logger.info("YES SEND detected", {userId, userEmail});
    const pendingSnap = await pendingRef.get();
    const pending = pendingSnap.data();
    if (!pendingSnap.exists || pending?.status !== "pending_confirmation") return null;

    let sendResult;
    try {
      sendResult = await sendEmailForUser({
        userId,
        userEmail,
        to: pending.to,
        subject: pending.subject,
        body: pending.body,
      });
      logger.info("sendGmail result", {
        messageId: sendResult.id || null,
        threadId: sendResult.threadId || null,
        to: pending.to,
      });
      logger.info("Gmail send result", {
        messageId: sendResult.id || null,
        threadId: sendResult.threadId || null,
        to: pending.to,
      });
    } catch (error) {
      logger.error("sendGmail error", {userId, userEmail, to: pending.to, error: error.message || error});
      throw error;
    }

    await pendingRef.set({
      ...pending,
      userEmail,
      status: "sent",
      sentAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    const reply = `Sent. I emailed ${pending.to}.`;
    await messages.add({
      role: "assistant",
      content: reply,
      userId,
      userEmail,
      source: "gmail-send",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    return {reply};
  }

  if (/^(no|cancel|never mind|don't send|do not send)$/i.test(lower.trim())) {
    const pendingSnap = await pendingRef.get();
    if (!pendingSnap.exists) return null;
    await pendingRef.set({
      status: "cancelled",
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    }, {merge: true});

    const reply = "No problem. I cancelled that email.";
    await messages.add({
      role: "assistant",
      content: reply,
      userId,
      userEmail,
      source: "gmail-send",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    return {reply};
  }

  if (!isSendEmailIntent(message)) return null;

  logger.info("email intent detected");
  const draft = parseEmailDraft(message);
  logger.info("parsed recipient", {to: draft.to || null});
  logger.info("parsed subject", {subject: draft.subject || null});
  logger.info("parsed body", {hasBody: Boolean(draft.body), bodyPreview: draft.body ? draft.body.slice(0, 120) : null});
  logger.info("email parser success/failure", {
    success: draft.missing.length === 0,
    missing: draft.missing,
  });

  const reply = draft.missing.length > 0 ?
    `Gmail sending is coming in V2. I can help draft it, but I still need the ${draft.missing[0]}.` :
    `Gmail sending is coming in V2. I drafted the email to ${draft.to}, but I will not send emails in Barbie V1.`;
  await messages.add({
    role: "assistant",
    content: reply,
    userId,
    userEmail,
    source: "gmail-v2-disabled",
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });
  return {
    reply,
    disabledFeature: "gmail-send-v2",
    draft: draft.missing.length === 0 ? {to: draft.to, subject: draft.subject, body: draft.body} : null,
    missing: draft.missing,
  };
}

async function createReminderFromMessage({message, userId, userEmail, source}) {
  const reminder = parseReminderIntent(message);
  if (!reminder) return null;

  const baseDocument = {
    title: reminder.title,
    message: reminder.message,
    remindAt: admin.firestore.Timestamp.fromDate(reminder.remindAt),
    status: "pending",
    type: "reminder",
    userId,
    userEmail,
    source,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  };

  const notificationRef = await db.collection("notifications").add(baseDocument);
  logger.info("Notification doc ID", {notificationId: notificationRef.id, source});

  await db.collection("messages").add({
    role: "assistant",
    content: reminder.reply,
    userId,
    userEmail,
    source: `${source}-reminder-parser`,
    notificationId: notificationRef.id,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  return {
    reply: reminder.reply,
    notificationId: notificationRef.id,
  };
}

async function generateBarbieChatReply(message) {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENROUTER_API_KEY.value()}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://barbie-92edc.web.app",
      "X-Title": "Barbie / TrinaOS Voice",
    },
    body: JSON.stringify({
      model: "openai/gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are Barbie, Trina's practical daycare-owner assistant. Be concise, warm, operational, and focused on reminders, calendar, family communication, staff tasks, and daycare business follow-through.",
        },
        {role: "user", content: message},
      ],
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    logger.error("OpenRouter request failed", {
      status: response.status,
      error: data.error || data,
    });
    throw new Error(data.error?.message || `OpenRouter request failed with status ${response.status}.`);
  }

  const reply = data.choices?.[0]?.message?.content || "";
  if (!reply) {
    throw new Error("OpenRouter returned an empty reply.");
  }

  return {reply, model: data.model || "openai/gpt-4o-mini"};
}

async function sendTelegramMessage({chatId, text}) {
  const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN.value()}/sendMessage`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      chat_id: chatId,
      text,
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok || data.ok === false) {
    logger.error("Telegram sendMessage failed", {status: response.status, error: data});
    throw new Error(data.description || "Telegram sendMessage failed.");
  }

  return data;
}

exports.connectGoogleAccount = onCall(
  {
    secrets: [GOOGLE_CLIENT_SECRET],
    region: "us-central1",
    cors: true,
  },
  async (request) => {
    const userId = getUserId(request);
    const userEmail = getUserEmail(request);
    const code = String(request.data?.code || "").trim();
    const clientId = String(request.data?.clientId || "").trim();
    const email = String(request.data?.email || "").trim();
    const scopes = splitScopes(request.data?.scopes);

    if (!code || !clientId) {
      throw new HttpsError("invalid-argument", "Google authorization code and client ID are required.");
    }

    const tokenData = await exchangeGoogleAuthCode({code, clientId});
    const connectionRef = db.collection("googleConnections").doc(userId);
    const existingSnap = await connectionRef.get();
    const existing = existingSnap.data() || {};
    const refreshToken = tokenData.refresh_token || existing.refreshToken;

    if (!refreshToken) {
      throw new HttpsError("failed-precondition", "Google did not return a refresh token. Please reconnect and approve consent.");
    }

    const document = {
      userId,
      userEmail,
      email,
      refreshToken,
      clientId,
      scopes,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    if (!existingSnap.exists) {
      document.connectedAt = admin.firestore.FieldValue.serverTimestamp();
    }

    await connectionRef.set(document, {merge: true});

    return {connected: true, email, scopes, accessToken: tokenData.access_token || null};
  },
);

exports.sendGmailEmail = onCall(
  {
    secrets: [GOOGLE_CLIENT_SECRET],
    region: "us-central1",
    cors: true,
  },
  async (request) => {
    const userId = getUserId(request);
    const userEmail = getUserEmail(request);
    const to = String(request.data?.to || "").trim();
    const subject = String(request.data?.subject || "").trim();
    const body = String(request.data?.body || "").trim();

    if (!to || !subject || !body) {
      throw new HttpsError("invalid-argument", "to, subject, and body are required.");
    }

    const result = await sendEmailForUser({userId, userEmail, to, subject, body});
    return {success: true, messageId: result.id || null, threadId: result.threadId || null};
  },
);

exports.registerDeviceToken = onCall(
  {
    region: "us-central1",
    cors: true,
  },
  async (request) => {
    const userId = getUserId(request);
    const userEmail = getUserEmail(request);
    const token = String(request.data?.token || "").trim();
    const platform = String(request.data?.platform || "unknown").trim();

    if (!token) {
      throw new HttpsError("invalid-argument", "token is required.");
    }

    const tokenId = Buffer.from(token).toString("base64url").slice(0, 120);
    await db.collection("users").doc(userId).collection("devices").doc(tokenId).set({
      token,
      userId,
      userEmail,
      platform,
      enabled: true,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      lastSeenAt: admin.firestore.FieldValue.serverTimestamp(),
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    }, {merge: true});

    return {registered: true};
  },
);

exports.telegramWebhook = onRequest(
  {
    secrets: [TELEGRAM_BOT_TOKEN, OPENROUTER_API_KEY],
    region: "us-central1",
    cors: false,
  },
  async (req, res) => {
    try {
      if (req.method !== "POST") {
        res.status(405).send("Method not allowed");
        return;
      }

      const botToken = TELEGRAM_BOT_TOKEN.value();
      const providedToken = String(req.get("x-telegram-bot-api-secret-token") || req.query.token || "");
      if (!providedToken || providedToken !== botToken) {
        logger.warn("Telegram webhook rejected invalid token");
        res.status(401).send("Unauthorized");
        return;
      }

      const telegramMessage = req.body?.message || req.body?.edited_message;
      const text = String(telegramMessage?.text || "").trim();
      const chatId = telegramMessage?.chat?.id;
      const from = telegramMessage?.from || {};

      if (!chatId || !text) {
        res.status(200).json({ok: true, ignored: true});
        return;
      }

      const userId = `telegram:${from.id || chatId}`;
      const userEmail = null;
      const source = "telegram";
      const messages = db.collection("messages");

      await messages.add({
        role: "user",
        content: text,
        userId,
        userEmail,
        telegramChatId: String(chatId),
        telegramUserId: from.id ? String(from.id) : null,
        telegramUsername: from.username || null,
        source,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      let replyPayload = await createReminderFromMessage({
        message: text,
        userId,
        userEmail,
        source,
      });

      if (!replyPayload) {
        if (isSendEmailIntent(text)) {
          const reply = "Gmail sending is coming in V2. Barbie V1 can still help with chat and reminders here.";
          await messages.add({
            role: "assistant",
            content: reply,
            userId,
            userEmail,
            telegramChatId: String(chatId),
            source: "telegram-gmail-v2-disabled",
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
          });
          replyPayload = {reply};
        } else {
          const ai = await generateBarbieChatReply(text);
          await messages.add({
            role: "assistant",
            content: ai.reply,
            userId,
            userEmail,
            telegramChatId: String(chatId),
            source,
            model: ai.model,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
          });
          replyPayload = {reply: ai.reply};
        }
      }

      await sendTelegramMessage({chatId, text: replyPayload.reply});
      res.status(200).json({ok: true});
    } catch (error) {
      logger.error("telegramWebhook failed", {error: error.message || error});
      res.status(500).json({ok: false, error: "Telegram webhook failed."});
    }
  },
);

exports.sendDueReminderPushes = onSchedule(
  {
    schedule: "every 1 minutes",
    timeZone: TIME_ZONE,
    region: "us-central1",
  },
  async () => {
    const now = admin.firestore.Timestamp.now();
    const snapshot = await db.collection("notifications")
      .where("status", "==", "pending")
      .where("type", "==", "reminder")
      .get();

    const dueReminders = snapshot.docs.filter((docSnap) => {
      const reminder = docSnap.data();
      const remindAt = reminder.remindAt;
      if (!remindAt || remindAt.toMillis() > now.toMillis()) return false;
      const lastPushSentAt = reminder.lastPushSentAt;
      return !lastPushSentAt || lastPushSentAt.toMillis() < remindAt.toMillis();
    });

    for (const reminderSnap of dueReminders) {
      const reminder = reminderSnap.data();
      const userId = reminder.userId;
      if (!userId) continue;

      const devicesSnap = await db.collection("users").doc(userId).collection("devices")
        .where("enabled", "==", true)
        .get();
      const tokens = devicesSnap.docs.map((docSnap) => docSnap.data().token).filter(Boolean);
      if (tokens.length === 0) continue;

      const response = await admin.messaging().sendEachForMulticast({
        tokens,
        notification: {
          title: "Reminder",
          body: reminder.title || reminder.message || "You have a reminder.",
        },
        data: {
          notificationId: reminderSnap.id,
          type: "reminder",
        },
      });

      logger.info("Reminder push sent", {
        notificationId: reminderSnap.id,
        successCount: response.successCount,
        failureCount: response.failureCount,
      });

      await reminderSnap.ref.set({
        lastPushSentAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      }, {merge: true});
    }
  },
);

exports.generateAIText = onCall(
  {
    secrets: [OPENROUTER_API_KEY],
    region: "us-central1",
    cors: true,
  },
  async (request) => {
    getUserId(request);
    const systemInstruction = String(request.data?.systemInstruction || "").trim();
    const prompt = String(request.data?.prompt || "").trim();
    const responseMimeType = String(request.data?.responseMimeType || "text/plain").trim();

    if (!prompt) {
      throw new HttpsError("invalid-argument", "prompt is required.");
    }

    const messages = [];
    if (systemInstruction) {
      messages.push({role: "system", content: systemInstruction});
    }
    messages.push({role: "user", content: prompt});

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY.value()}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://barbie-92edc.web.app",
        "X-Title": "Barbie / TrinaOS Voice",
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        messages,
        response_format: responseMimeType === "application/json" ? {type: "json_object"} : undefined,
      }),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      logger.error("AI text generation failed", {status: response.status, error: data.error || data});
      throw new HttpsError("internal", data.error?.message || "AI text generation failed.");
    }

    const text = data.choices?.[0]?.message?.content || "";
    if (!text) {
      throw new HttpsError("internal", "AI returned an empty response.");
    }

    return {text, model: data.model || "openai/gpt-4o-mini"};
  },
);

exports.chatWithBarbie = onCall(
  {
    secrets: [OPENROUTER_API_KEY, GOOGLE_CLIENT_SECRET],
    region: "us-central1",
    cors: true,
  },
  async (request) => {
    const message = String(request.data?.message || "").trim();

    if (!message) {
      throw new HttpsError("invalid-argument", "message is required.");
    }

    const userId = request.auth?.uid || null;
    const userEmail = getUserEmail(request);
    logger.info("chatWithBarbie received message", {userId, userEmail, hasAuth: Boolean(request.auth), message});

    await db.collection("debugLogs").add({
      userId,
      userEmail,
      message,
      phase: "chatWithBarbie_start",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    if (!userId) {
      throw new HttpsError("unauthenticated", "Please sign in before using Barbie.");
    }

    logger.info("request.auth.uid", {uid: userId});
    const messages = db.collection("messages");

    await messages.add({
      role: "user",
      content: message,
      userId,
      userEmail,
      source: "barbie-ui",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    const emailIntent = isSendEmailIntent(message) || /^(yes|yes send|yes send it|send it|confirm|confirmed|go ahead|please send)$/i.test(message.toLowerCase().trim());
    logger.info("email intent true/false", {emailIntent});

    if (hasReminderIntent(message)) {
      logger.info("Reminder intent detected");
    }

    const reminder = parseReminderIntent(message);

    if (reminder) {
      logger.info("Parsed title", {title: reminder.title});
      logger.info("Parsed remindAt", {remindAt: reminder.remindAt.toISOString()});

      const baseDocument = {
        title: reminder.title,
        message: reminder.message,
        remindAt: admin.firestore.Timestamp.fromDate(reminder.remindAt),
        status: "pending",
        type: "reminder",
        userId,
        userEmail,
        source: "chatWithBarbie",
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      };

      const notificationRef = await db.collection("notifications").add(baseDocument);
      logger.info("Notification doc ID", {notificationId: notificationRef.id});

      let eventId = null;
      if (reminder.isEvent) {
        const eventRef = await db.collection("events").add({
          title: reminder.title,
          message: reminder.message,
          startAt: admin.firestore.Timestamp.fromDate(reminder.remindAt),
          status: "scheduled",
          type: "event",
          notificationId: notificationRef.id,
          userId,
          userEmail,
          source: "chatWithBarbie",
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });
        eventId = eventRef.id;
      }

      await messages.add({
        role: "assistant",
        content: reminder.reply,
        userId,
        userEmail,
        source: "reminder-parser",
        notificationId: notificationRef.id,
        eventId,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      return {
        reply: reminder.reply,
        notificationId: notificationRef.id,
        eventId,
      };
    }

    if (hasReminderIntent(message)) {
      const title = stripReminderTiming(message) || "Reminder";
      const reply = `I can save that reminder for "${title}". Please include a time like "in 2 minutes", "in 1 hour", "today at 3pm", or "tomorrow at 10am".`;

      logger.info("Parsed title", {title});
      logger.info("Parsed remindAt", {remindAt: null});

      await messages.add({
        role: "assistant",
        content: reply,
        userId,
        userEmail,
        source: "reminder-parser",
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      return {reply, missing: ["remindAt"]};
    }

    const emailResponse = await handleSendEmailIntent({message, userId, userEmail, messages});
    if (emailResponse) return emailResponse;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY.value()}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://barbie-92edc.web.app",
        "X-Title": "Barbie / TrinaOS Voice",
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are Barbie, Trina's practical daycare-owner assistant. Be concise, warm, operational, and focused on reminders, calendar, family communication, staff tasks, and daycare business follow-through.",
          },
          {role: "user", content: message},
        ],
      }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      logger.error("OpenRouter request failed", {
        status: response.status,
        error: data.error || data,
      });
      throw new HttpsError(
        "internal",
        data.error?.message || `OpenRouter request failed with status ${response.status}.`,
      );
    }

    const reply = data.choices?.[0]?.message?.content || "";

    if (!reply) {
      throw new HttpsError("internal", "OpenRouter returned an empty reply.");
    }

    await messages.add({
      role: "assistant",
      content: reply,
      userId,
      userEmail,
      source: "openrouter",
      model: data.model || "openai/gpt-4o-mini",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return {reply};
  },
);
