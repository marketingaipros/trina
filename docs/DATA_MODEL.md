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

## Planned FlutterFlow / Hermes Collections

These planned collections support the FlutterFlow client mobile direction. They are documentation targets, not implemented app/runtime code in Sprint 005.

### `users`
- `user_id`
- `client_id`
- `name`
- `email`
- `phone`
- `role`
- `profile_photo_url`
- `notification_preferences`
- `created_at`
- `updated_at`

### `clients`
- `client_id`
- `client_name`
- `app_name`
- `app_theme`
- `status`
- `primary_contact_user_id`
- `drive_folder_url`
- `created_at`
- `updated_at`

### `requests`
- `request_id`
- `client_id`
- `user_id`
- `request_type`
- `request_title`
- `request_text`
- `voice_note_url`
- `uploaded_file_url`
- `priority`
- `due_date`
- `output_format`
- `task_status`
- `approval_status`
- `assigned_agent_or_workflow`
- `notes`
- `created_at`
- `updated_at`

### `tasks`
- `task_id`
- `request_id`
- `client_id`
- `title`
- `description`
- `status`
- `priority`
- `due_date`
- `assigned_to`
- `source_request_id`
- `created_at`
- `updated_at`

### `files`
- `file_id`
- `client_id`
- `request_id`
- `file_name`
- `file_type`
- `file_url`
- `storage_location`
- `uploaded_by`
- `uploaded_at`
- `notes`

### `deliverables`
- `deliverable_id`
- `client_id`
- `request_id`
- `task_id`
- `title`
- `description`
- `file_url`
- `status`
- `approval_status`
- `version`
- `created_at`
- `updated_at`

### `themes`
- `theme_id`
- `client_id`
- `theme_name`
- `app_name`
- `primary_color`
- `secondary_color`
- `background_color`
- `accent_color`
- `card_style`
- `button_style`
- `icon_style`
- `typography_notes`
- `created_at`
- `updated_at`

### `approvals`
- `approval_id`
- `client_id`
- `deliverable_id`
- `request_id`
- `status`
- `requested_at`
- `responded_at`
- `response_notes`

### `settings`
- `setting_id`
- `client_id`
- `user_id`
- `setting_key`
- `setting_value`
- `updated_at`

## Mobile App Entities

These entities describe the Sprint 006 FlutterFlow mobile blueprint. They are not implemented as runtime schema changes in this sprint.

| Entity | Purpose | Owner |
|---|---|---|
| UserProfile | Stores user display/profile settings. | Firebase or Hermes/API, TBD |
| AssistantSession | Tracks active chat/session state. | Hermes/API |
| ChatMessage | Represents user/assistant chat messages. | Hermes/API with optional Firebase mirror |
| AssistantAction | Represents backend action metadata returned by assistant. | Hermes/API |
| Task | Represents tasks/reminders visible in mobile app. | Firebase or Hermes/API, TBD |
| MemorySummary | Safe display summary of user memory/profile context. | Hermes/API |
| ClientTheme | Stores selected visual/persona theme. | Firebase or app config |
| UploadedFileReference | Stores file metadata/reference, not raw reasoning context. | Firebase Storage or Hermes-controlled storage, TBD |
