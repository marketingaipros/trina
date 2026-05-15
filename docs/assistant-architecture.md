# Trina OS Voice Assistant Architecture

## Goal

Trina OS should behave like a dependable personal assistant for a daycare owner:

- remember business context and preferences in Firebase-backed memory
- manage calendar events and reminders from voice or UI
- deliver reminders even when the browser is closed
- support outbound channels such as Telegram, SMS, or email

## Current Frontend Contract

The React app keeps a local cache so it remains usable during auth/network outages, but Firebase is the source of truth for assistant memory and calendar events.

Calendar writes follow this path:

1. UI or voice tool calls `addEvent`, `updateEvent`, or `deleteEvent`.
2. The app updates local storage immediately for responsive UX.
3. If Firebase auth is connected, the app writes the event to Firestore under:

```text
users/{uid}/calendarEvents/{eventId}
```

Memory writes follow the existing Cloud Function path:

```text
save_memory -> memory Cloud Function -> Firestore-backed memory
learn_preference -> memory Cloud Function -> Firestore-backed memory
recall_memories -> memory Cloud Function
recall_preferences -> memory Cloud Function
```

## Reminder Delivery

Browser-only reminders are not enough for production because they only fire when the app tab is open. Production reminder delivery should run in Firebase or Cloud Run.

Recommended backend shape:

1. Store every reminder/event in Firestore with:
   - `date`
   - `time`
   - `timezone`
   - `notifyBefore`
   - `channels`
   - `lastNotifiedAt`
   - `status`
2. Run a scheduled Firebase Function every minute.
3. Query due events.
4. Send reminder messages through the selected channel.
5. Mark `lastNotifiedAt` so reminders are not duplicated.

## Telegram Channel

Telegram can be added while staying on Gemini. Gemini remains the reasoning/voice model; Telegram is only a delivery and command channel.

Backend pieces:

- Telegram bot token stored as a Firebase/Cloud secret.
- User's `telegramChatId` stored under `users/{uid}/notificationChannels/telegram`.
- Webhook endpoint for inbound Telegram messages.
- Scheduled reminder worker for outbound Telegram messages.

Typical flow:

```text
Trina says: "Remind me tomorrow at 3 to call Jayden's mom."
Gemini tool call: addEvent(...)
Firestore: users/{uid}/calendarEvents/{eventId}
Scheduler: finds event due
Telegram: sends reminder to telegramChatId
```

## Production Gaps

- Replace hardcoded test Firebase login with real sign-in.
- Add timezone to calendar events. Louisville is `America/New_York`.
- Add a backend reminder worker.
- Add Telegram channel registration and delivery.
- Add cloud sync for tasks and finance if those become core assistant memory.
- Replace placeholder Gmail OAuth client ID before email features are trusted.
