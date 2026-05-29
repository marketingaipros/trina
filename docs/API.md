# API

## Firebase Callable Functions

### `chatWithBarbie`
Accepts:

```json
{ "message": "string" }
```

Requires Firebase Auth. Saves user messages to `messages`, routes reminder intent into `notifications`, routes email intent to a V2-disabled response, and otherwise calls OpenRouter through the backend.

### `generateAIText`
Accepts:

```json
{
  "systemInstruction": "string",
  "prompt": "string",
  "responseMimeType": "text/plain"
}
```

Requires Firebase Auth. Used by app features such as brain dump, weekly reset, finance insight, and smart briefing.

### `connectGoogleAccount`
Accepts Google OAuth code-flow data and stores refresh-token connection data server-side in `googleConnections/{uid}`.

### `sendGmailEmail`
Existing backend send function. For Barbie V1, assistant chat send flow is intentionally disabled and marked V2 to avoid blocking launch.

Sprint 002 validated that Gmail send remains outside V1 launch scope. Sprint 003 must document whether this callable should remain deployed, be guarded further, or be disabled while chat behavior stays V2-disabled.

### `registerDeviceToken`
Accepts native push token and platform. Stores device records under `users/{uid}/devices`.

## HTTPS Functions

### `telegramWebhook`
Telegram webhook endpoint. Requires token validation using the bot token as a secret query/header value. Saves Telegram user messages to Firestore, creates reminders when reminder intent is detected, otherwise routes to backend AI chat, and replies to Telegram.

Sprint 002 treated Telegram as readiness-validated, not live. Sprint 003 must confirm the Firebase secret and Telegram webhook setup before marking Telegram live.

## Sprint 003 API Release Notes

- Do not expose or document secret values.
- Do not re-enable Gmail send in chat behavior.
- Do not mark Telegram live until `TELEGRAM_BOT_TOKEN` and webhook setup are verified.
- Do not run deploy commands without explicit approval.

## Sprint 004 API Deploy Notes

- Controlled web V1 deploy may include Hosting, Functions, and Firestore rules only if explicitly approved.
- `chatWithBarbie` remains the V1 assistant entrypoint for web chat and reminders.
- `sendGmailEmail` may remain present as an authenticated callable, but Gmail send must remain V2-disabled from chat during Sprint 004.
- `telegramWebhook` remains outside required web V1 launch unless token and webhook setup are separately verified.
- No Firebase secrets should be accessed or documented during the deploy sprint without explicit approval.

## Scheduled Functions

### `sendDueReminderPushes`
Runs every minute. Scans pending reminders and sends mobile push notifications to registered devices when due.

## External APIs
- OpenRouter Chat Completions API.
- Google OAuth token exchange.
- Gmail API.
- Telegram Bot API.
- Firebase Auth REST API in legacy auth helper paths.

## FlutterFlow / Hermes Request Schema

FlutterFlow should send structured request objects to Hermes or a backend API placeholder. Full Hermes production integration should wait until the FlutterFlow UI and request schema are approved.

```json
{
  "client_id": "client_a",
  "client_name": "Client A",
  "app_theme": "barbie_ken_inspired",
  "request_type": "Personal task",
  "request_title": "Plan my week",
  "request_text": "Help me organize my priorities for this week.",
  "voice_note_url": null,
  "uploaded_file_url": null,
  "priority": "Normal",
  "due_date": "2026-06-05",
  "output_format": "Task list",
  "task_status": "New",
  "assigned_agent_or_workflow": "TBD",
  "timestamp": "2026-05-29T00:00:00Z",
  "notes": "Submitted from mobile app.",
  "approval_status": "Not Required"
}
```

## FlutterFlow Request Categories

- Personal task
- Scheduling help
- Business task
- Content request
- Sales request
- Research request
- File organization
- Workflow request
- Reminder
- Other

## FlutterFlow Task Status Options

- New
- Received
- In Progress
- Needs Client Info
- Ready for Review
- Revision Requested
- Approved
- Completed
- Archived

## FlutterFlow Approval Status Options

- Not Required
- Waiting for Client
- Approved
- Changes Requested

## FlutterFlow Mobile Assistant Chat Contract

Sprint 006 recommends that the mobile Chat screen call Hermes/API or AI Hub Orchestrator for assistant behavior. FlutterFlow should not directly call model providers, embed prompts, own memory reasoning, or execute connector actions.

### Assistant Chat Request

```json
{
  "userId": "string",
  "sessionId": "string",
  "message": "string",
  "clientTheme": "trina-barbie-v1",
  "source": "flutterflow-mobile",
  "metadata": {
    "screen": "chat",
    "locale": "en-US",
    "timezone": "America/Chicago"
  }
}
```

### Assistant Chat Response

```json
{
  "reply": "string",
  "sessionId": "string",
  "actions": [
    {
      "type": "task_created",
      "label": "string",
      "status": "pending"
    }
  ],
  "memoryHints": [
    {
      "category": "preference",
      "label": "string",
      "safeToDisplay": true
    }
  ],
  "error": null
}
```
