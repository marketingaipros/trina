
/**
 * Google Workspace Integration Service
 * Handles Google OAuth code flow and Google Workspace API calls.
 */
import { connectGoogleAccount, sendGmailEmail } from '../src/lib/barbieAI.js';

const SCOPES = [
  'https://www.googleapis.com/auth/gmail.modify',
  'https://www.googleapis.com/auth/gmail.compose',
  'https://www.googleapis.com/auth/gmail.send',
  'https://www.googleapis.com/auth/calendar.events',
].join(' ');

const GMAIL_API_BASE = 'https://gmail.googleapis.com/gmail/v1/users/me';
const CALENDAR_API_BASE = 'https://www.googleapis.com/calendar/v3';
const PRIMARY_CALENDAR_ID = 'primary';
const DAYCARE_GOOGLE_ACCOUNT = process.env.DAYCARE_GOOGLE_ACCOUNT || 'learnandgrowcc@gmail.com';
const GOOGLE_CONNECTED_KEY = 'barbie_google_connected_once';

let codeClient: any = null;
let accessToken: string | null = null;
let serverConnected = typeof window !== 'undefined' && window.localStorage.getItem(GOOGLE_CONNECTED_KEY) === 'true';

export interface GoogleCalendarEventInput {
  title: string;
  date: string;
  time?: string;
  endTime?: string;
  description?: string;
  timezone?: string;
  reminders?: number[];
}

export const initGmailAuth = (clientId: string) => {
  return new Promise((resolve, reject) => {
    if (!(window as any).google) {
      reject(new Error("Google Identity Services not loaded"));
      return;
    }

    codeClient = (window as any).google.accounts.oauth2.initCodeClient({
      client_id: clientId,
      scope: SCOPES,
      login_hint: DAYCARE_GOOGLE_ACCOUNT,
      include_granted_scopes: true,
      access_type: 'offline',
      callback: async (response: any) => {
        if (response.error !== undefined) {
          reject(response);
          return;
        }

        try {
          const connection: any = await connectGoogleAccount({
            code: response.code,
            clientId,
            email: DAYCARE_GOOGLE_ACCOUNT,
            scopes: SCOPES,
          });
          accessToken = connection.accessToken || null;
          serverConnected = true;
          window.localStorage.setItem(GOOGLE_CONNECTED_KEY, 'true');
          resolve(true);
        } catch (error) {
          reject(error);
        }
      },
    });
    resolve(true);
  });
};

export const requestGmailToken = () => {
  if (codeClient) {
    const hasConnectedBefore = window.localStorage.getItem(GOOGLE_CONNECTED_KEY) === 'true';
    codeClient.requestCode({
      prompt: hasConnectedBefore ? '' : 'consent',
      hint: DAYCARE_GOOGLE_ACCOUNT,
      access_type: 'offline',
    });
  }
};

export const getAccessToken = () => accessToken || (serverConnected ? 'server-connected' : null);
export const isGoogleConnected = () => serverConnected || Boolean(accessToken);
export const getDaycareGoogleAccount = () => DAYCARE_GOOGLE_ACCOUNT;
export const sendEmail = (to: string, subject: string, body: string) => {
  return sendGmailEmail({ to, subject, body });
};

async function fetchGoogle(baseUrl: string, path: string, options: RequestInit = {}) {
  if (!accessToken) throw new Error(`Not authenticated with ${DAYCARE_GOOGLE_ACCOUNT}`);
  
  const response = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error?.message || "Gmail API Error");
  }

  return response.json();
}

async function fetchGmail(path: string, options: RequestInit = {}) {
  return fetchGoogle(GMAIL_API_BASE, path, options);
}

async function fetchCalendar(path: string, options: RequestInit = {}) {
  return fetchGoogle(CALENDAR_API_BASE, path, options);
}

export const listMessages = async (maxResults = 5) => {
  const data = await fetchGmail(`/messages?maxResults=${maxResults}&q=is:unread`);
  if (!data.messages) return [];
  
  const details = await Promise.all(
    data.messages.map((msg: any) => getMessage(msg.id))
  );
  return details;
};

export const getMessage = async (id: string) => {
  const msg = await fetchGmail(`/messages/${id}`);
  
  const headers = msg.payload.headers;
  const subject = headers.find((h: any) => h.name === 'Subject')?.value || 'No Subject';
  const from = headers.find((h: any) => h.name === 'From')?.value || 'Unknown Sender';
  const date = headers.find((h: any) => h.name === 'Date')?.value || '';
  
  // Simple body extraction
  let body = '';
  if (msg.payload.parts) {
    const part = msg.payload.parts.find((p: any) => p.mimeType === 'text/plain') || msg.payload.parts[0];
    if (part.body.data) {
      body = atob(part.body.data.replace(/-/g, '+').replace(/_/g, '/'));
    }
  } else if (msg.payload.body.data) {
    body = atob(msg.payload.body.data.replace(/-/g, '+').replace(/_/g, '/'));
  }

  return { id, threadId: msg.threadId, subject, from, date, body: body.substring(0, 500) };
};

export const replyToEmail = async (threadId: string, to: string, subject: string, text: string) => {
  return sendEmail(to, `Re: ${subject}`, text);
};

export const draftReplyToEmail = async (threadId: string, to: string, subject: string, text: string) => {
  const email = [
    `To: ${to}`,
    `Subject: Re: ${subject}`,
    'Content-Type: text/plain; charset="UTF-8"',
    '',
    text
  ].join('\n');

  const base64EncodedEmail = btoa(email).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

  return fetchGmail('/drafts', {
    method: 'POST',
    body: JSON.stringify({
      message: {
        threadId,
        raw: base64EncodedEmail
      }
    })
  });
};

export const archiveMessage = async (id: string) => {
  return fetchGmail(`/messages/${id}/modify`, {
    method: 'POST',
    body: JSON.stringify({
      removeLabelIds: ['INBOX']
    })
  });
};

const encodeCalendarId = (calendarId = PRIMARY_CALENDAR_ID) => encodeURIComponent(calendarId);

function buildGoogleCalendarPayload(event: GoogleCalendarEventInput) {
  const timezone = event.timezone || 'America/New_York';
  const reminders = event.reminders && event.reminders.length > 0 ? event.reminders : [15];

  const payload: any = {
    summary: event.title,
    description: event.description || '',
    reminders: {
      useDefault: false,
      overrides: reminders.map(minutes => ({ method: 'popup', minutes })),
    },
  };

  if (event.time) {
    payload.start = {
      dateTime: `${event.date}T${event.time}:00`,
      timeZone: timezone,
    };
    payload.end = {
      dateTime: `${event.date}T${event.endTime || event.time}:00`,
      timeZone: timezone,
    };
  } else {
    payload.start = { date: event.date };
    payload.end = { date: event.date };
  }

  return payload;
}

function mapGoogleCalendarEvent(event: any) {
  return {
    id: event.id,
    title: event.summary || 'Untitled event',
    description: event.description || '',
    start: event.start?.dateTime || event.start?.date,
    end: event.end?.dateTime || event.end?.date,
    htmlLink: event.htmlLink,
    status: event.status,
  };
}

export const listCalendarEvents = async (days = 7, calendarId = PRIMARY_CALENDAR_ID) => {
  const now = new Date();
  const timeMin = now.toISOString();
  const timeMaxDate = new Date(now);
  timeMaxDate.setDate(now.getDate() + days);

  const query = new URLSearchParams({
    timeMin,
    timeMax: timeMaxDate.toISOString(),
    singleEvents: 'true',
    orderBy: 'startTime',
    maxResults: '25',
  });

  const data = await fetchCalendar(`/calendars/${encodeCalendarId(calendarId)}/events?${query.toString()}`);
  return (data.items || []).map(mapGoogleCalendarEvent);
};

export const createCalendarEvent = async (
  event: GoogleCalendarEventInput,
  calendarId = PRIMARY_CALENDAR_ID
) => {
  const data = await fetchCalendar(`/calendars/${encodeCalendarId(calendarId)}/events`, {
    method: 'POST',
    body: JSON.stringify(buildGoogleCalendarPayload(event)),
  });
  return mapGoogleCalendarEvent(data);
};

export const updateCalendarEvent = async (
  googleEventId: string,
  event: GoogleCalendarEventInput,
  calendarId = PRIMARY_CALENDAR_ID
) => {
  const data = await fetchCalendar(`/calendars/${encodeCalendarId(calendarId)}/events/${encodeURIComponent(googleEventId)}`, {
    method: 'PATCH',
    body: JSON.stringify(buildGoogleCalendarPayload(event)),
  });
  return mapGoogleCalendarEvent(data);
};

export const deleteCalendarEvent = async (googleEventId: string, calendarId = PRIMARY_CALENDAR_ID) => {
  await fetchCalendar(`/calendars/${encodeCalendarId(calendarId)}/events/${encodeURIComponent(googleEventId)}`, {
    method: 'DELETE',
  });
  return { success: true };
};
