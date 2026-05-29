# Data Model

## Firestore Collections

### `messages`
Stores user and assistant conversation records.

Known fields:
- `role`
- `content`
- `userId`
- `userEmail`
- `source`
- `model`
- `createdAt`
- `notificationId`
- `eventId`
- `telegramChatId`
- `telegramUserId`
- `telegramUsername`

### `notifications`
Stores reminder notifications.

Known fields:
- `title`
- `message`
- `remindAt`
- `status`
- `type`
- `userId`
- `userEmail`
- `source`
- `createdAt`
- `updatedAt`
- `completedAt`
- `snoozedAt`
- `lastPushSentAt`

### `events`
Stores backend-created event records when reminder/event parsing supports it.

Known fields:
- `title`
- `message`
- `startAt`
- `status`
- `type`
- `notificationId`
- `userId`
- `userEmail`
- `source`
- `createdAt`

### `users/{uid}/calendarEvents`
Stores app calendar events owned by a Firebase Auth user.

Known fields:
- `id`
- `title`
- `date`
- `time`
- `endTime`
- `description`
- `category`
- `recurring`
- `notifyBefore`
- `createdAt`
- `updatedAt`

### `googleConnections/{uid}`
Backend-owned Google OAuth refresh token connection records. Direct browser access is denied by rules.

### `pendingEmailSends/{uid}`
Backend-owned pending email state. V1 chat flow should not rely on real Gmail send.

### `sentEmails`
Backend-owned Gmail send audit logs.

### `debugLogs`
Debug records written by `chatWithBarbie` entry path.

### `users/{uid}/devices`
Backend-owned mobile push token records.

## Local Storage
The app also uses browser localStorage for local tasks, transactions, events, auth UID cache, and Google connection state.
