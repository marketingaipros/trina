# Barbie Google and Telegram Setup

## Confirmed Choices

- Google account: `learnandgrowcc@gmail.com`
- Google OAuth app name: `Barbie`
- Gmail access: read, draft replies, send replies
- Calendar access: read, create, update, delete events
- Reminder channels: Telegram and Google Calendar reminders
- Firebase project: `barbie-92edc`

## Values Needed From Setup

Add these to `.env.local` after creating credentials:

```text
GOOGLE_CLIENT_ID=<Barbie web OAuth client id>
TELEGRAM_BOT_TOKEN=<Telegram bot token from BotFather>
```

## Google Cloud Setup

1. Open Google Cloud Console for Firebase project `barbie-92edc`.
2. Configure OAuth consent screen:
   - App name: `Barbie`
   - User support email: `learnandgrowcc@gmail.com`
   - Authorized user: `learnandgrowcc@gmail.com`
3. Enable APIs:
   - Gmail API
   - Google Calendar API
4. Create OAuth Client:
   - Type: Web application
   - Authorized JavaScript origins:
     - `http://localhost:3000`
     - `http://localhost:3001`
     - `http://localhost:3002`
     - production app URL when deployed
5. Copy the OAuth Client ID into `.env.local`.

## Telegram Setup

1. In Telegram, message `@BotFather`.
2. Create a bot named `Barbie`.
3. Copy the bot token into `.env.local`.
4. Have Trina send one message to the bot.
5. Backend worker should read the bot updates once to capture `telegramChatId`.

## Production Reminder Worker

The frontend can create Google Calendar reminders, but Telegram reminders need a backend worker:

1. Scheduled Firebase Function runs every minute.
2. It queries due Firestore calendar events.
3. It sends Telegram messages with the bot token.
4. It marks each event as notified to prevent duplicates.
