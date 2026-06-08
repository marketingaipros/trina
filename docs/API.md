# API

## Sprint 057 API Validation Focus

Sprint 057 must manually validate or document blockers for the assistant request path:

```text
User typed input or voice transcript
-> UI send/capture action
-> askBarbie()
-> chatWithBarbie
-> backend/model provider
-> Barbie response rendered in UI
```

Required observations:

- What user input was sent.
- Whether a response appeared in the UI.
- Whether browser console errors appeared.
- Whether backend/function logs show the request.
- Whether missing auth/config/secrets blocked the response.

Do not change the API contract in this sprint unless a blocking mismatch is found and approved as a separate implementation change.

### Sprint 057 API Validation Outcome

Sprint 057 did not change the API contract.

Observed request path status:

```text
User typed input
-> UI send/capture action
-> askBarbie()
-> chatWithBarbie
-> backend/model provider
-> Barbie response rendered in UI
```

Validation outcome:

- Typed input using `What should I focus on today?` was partially proven in the UI.
- Local capture/task behavior was partially proven.
- Real Barbie backend/model response was not proven.
- Successful `chatWithBarbie` execution was not proven.
- Backend assistant Send is blocked by Firebase auth configuration.
- Firebase Anonymous sign-in is disabled.
- `127.0.0.1` is not authorized for OAuth operations.
- Mic starts, but no transcript was proven.

API closeout decision:

```json
{
  "environment": "local-vite",
  "authMode": "blocked",
  "typedAssistant": "blocked",
  "voiceTranscript": "blocked",
  "reminderFlow": "partial-local-capture-only",
  "coreWorkflow": "partial-local-capture-only",
  "blockingErrors": [
    "Firebase Anonymous sign-in is disabled",
    "127.0.0.1 is not authorized for OAuth operations",
    "Backend assistant Send is blocked by Firebase auth configuration"
  ],
  "recommendation": "HOLD"
}
```

The next API validation should prove `askBarbie()` -> `chatWithBarbie` -> backend/model response after Firebase auth configuration is resolved. Do not promote to `CLIENT UAT CANDIDATE` until that path and the required reminder/core workflow pass.

## Sprint 056 Backend Assistant Contract

Sprint 056 validates the current backend assistant contract before client UAT. It does not add or change APIs unless a later approved implementation sprint is created.

### Current Primary Assistant Endpoint

Firebase callable Function:

```text
chatWithBarbie
```

Frontend caller:

```text
components/VoiceDashboard.tsx -> src/lib/barbieAI.js askBarbie()
```

Current request:

```json
{
  "message": "string"
}
```

Current auth requirement:

- Firebase Auth is required.
- Frontend calls `ensureBarbieAuth()` before invoking the callable.
- Backend rejects missing `request.auth.uid` with `unauthenticated`.

Current successful general response:

```json
{
  "reply": "string"
}
```

Current reminder response may include:

```json
{
  "reply": "string",
  "notificationId": "string",
  "eventId": "string | null"
}
```

Current incomplete reminder response may include:

```json
{
  "reply": "string",
  "missing": ["remindAt"]
}
```

### Current Voice Contract

Current voice input is browser transcript capture, not a separate backend audio API.

Validation input:

```json
{
  "inputMode": "voice",
  "transcript": "string"
}
```

Runtime behavior to validate:

- Supported browsers request microphone permission.
- Speech recognition produces transcript text.
- Transcript text is routed through the existing local task/assistant behavior.
- If voice is unavailable or denied, typed fallback remains usable.

### Internal Integration Validation Contract

Sprint 056 should record each smoke result using this structure:

```json
{
  "environment": "local-vite | firebase-hosting | other",
  "tester": "placeholder-only",
  "authMode": "anonymous | google | existing-session | blocked",
  "typedAssistant": "pass | fail | blocked",
  "voiceTranscript": "pass | fail | blocked | not-supported-with-typed-fallback",
  "reminderFlow": "pass | fail | blocked",
  "coreWorkflow": "pass | fail | blocked",
  "blockingErrors": [],
  "recommendation": "HOLD | CLIENT_UAT_CANDIDATE"
}
```

Do not commit real credentials, tokens, passwords, private keys, service-account files, or client secrets.

### Sprint 056 Contract Validation Outcome

The current contract remains unchanged after validation:

- Frontend caller: `components/VoiceDashboard.tsx`.
- Assistant service: `src/lib/barbieAI.js`.
- Backend callable: `chatWithBarbie`.
- Request shape: `{ "message": "string" }`.
- General success response: `{ "reply": "string" }`.
- Reminder success response: `{ "reply": "string", "notificationId": "string", "eventId": "string | null" }`.
- Auth requirement: Firebase Auth user is required by the backend callable.
- Voice contract: browser transcript capture plus typed fallback, not native audio upload.

Live UI contract execution was not fully proven in Sprint 056 because browser automation could not complete the local app interaction in this environment. The contract remains the correct path to validate in the next manual or browser-capable smoke pass.

## Sprint 055 Runtime / Backend Integration Notes

Sprint 055 does not add or change application APIs. It reconciles the existing and missing integration contracts before backend implementation work.

### Existing Repo-Observed Backend Surfaces

- Firebase callable Functions in `functions/index.js`, including `chatWithBarbie`, `generateAIText`, `connectGoogleAccount`, `sendGmailEmail`, and `registerDeviceToken`.
- HTTPS Telegram webhook in `functions/index.js`.
- Frontend service modules that call Firebase Auth, Firestore, callable Functions, and Google/Gmail API surfaces.
- Firebase Hosting and Functions configuration in `firebase.json`.

### Missing or Unconfirmed Contracts

- Hermes-specific endpoint URL, auth method, request schema, response schema, error shape, and environment ownership.
- Whether typed assistant requests should continue through Firebase Functions first, call Hermes directly, or use Firebase Functions as a bridge to Hermes.
- Whether voice assistant requests should send transcript text, audio references, native audio payloads, or browser SpeechRecognition output.
- Internal integration validation target: local emulator, deployed Firebase project, staging Hosting URL, or another environment.
- Client UAT access target/link/build.

### Proposed Sprint 056 Contract Scope

Sprint 056 should define the first backend assistant contract without adding client rollout scope:

```json
{
  "userId": "string",
  "sessionId": "string",
  "inputMode": "typed | voice",
  "transcript": "string",
  "audioUrl": "string | null",
  "intentHint": "chat | reminder | task | calendar | finance | knowledge | unknown",
  "clientContext": {
    "app": "trinaos-voice",
    "source": "vite-react | flutterflow | native-wrapper",
    "timezone": "string"
  }
}
```

Expected response shape to confirm:

```json
{
  "message": "string",
  "actions": [
    {
      "type": "create_reminder | create_task | update_status | none",
      "payload": {}
    }
  ],
  "status": "ok | needs_user_input | blocked | error",
  "traceId": "string"
}
```

Secrets, tokens, client credentials, signing keys, and real test-account passwords must stay out of repo files.

## Sprint 054 Release/UAT Interface Notes

Sprint 054 does not add application APIs. It clarifies the release/config interfaces needed before controlled client UAT.

Repo-observed interfaces:

- Firebase project config: `.firebaserc` sets the default project to `barbie-92edc`.
- Firebase Hosting output path: `firebase.json` serves `dist`.
- Firebase Hosting SPA fallback: `firebase.json` rewrites `**` to `/index.html`.
- Native wrapper web asset path: `capacitor.config.ts` uses `webDir: "dist"`.
- Build command: `npm run build`.
- Lint command: `npm run lint`.

Unconfirmed release/UAT contracts:

- Release source of truth: `<release-source-of-truth>`.
- FlutterFlow status: `<flutterflow-active-historical-or-unresolved>`.
- FlutterFlow project ID/name: `<project-id-placeholder>`.
- UAT link/build: `<uat-link-or-build-placeholder>`.
- Trusted tester: `<trusted-client-tester>`.
- UAT issue channel: `<uat-issue-channel>`.
- Go-live approver: `<go-live-approver>`.

Do not store actual API tokens, passwords, private signing keys, client credentials, production secrets, or demo account passwords in repo files.

## Sprint 053 Release Interface Notes

Sprint 053 may require documenting release/deployment interfaces. This does not mean new application APIs are being added.

For this sprint, "API/interface" includes:

- FlutterFlow export/deploy command interface.
- GitHub deployment source assumptions.
- Environment variable names required for export/build/deploy.
- Client UAT access link/build distribution method.
- Test account or demo data interface, if used.

Current release interface status: not yet confirmed.

Sprint 053 must identify which of these applies:

```text
A. GitHub repo is the deployment source.
B. FlutterFlow is the deployment/export source.
C. A separate hosting or app-store path is used.
D. Source/deployment path is unclear and rollout must be held.
```

Documentation rules:

Allowed placeholders:

```text
FLUTTERFLOW_PROJECT=<project-id-placeholder>
FLUTTERFLOW_API_TOKEN=<stored outside repo>
STAGING_URL=<url-placeholder>
TEST_ACCOUNT_EMAIL=<placeholder only>
```

Not allowed:

```text
Actual API tokens
Actual passwords
Private signing keys
Client credentials
Production secrets
```

By Sprint 053 closeout, this file should state:

- Confirmed source of truth for deployment.
- Confirmed target used for client UAT.
- Whether FlutterFlow export/deploy is required.
- Any commands used, with secrets replaced by placeholders.
- Any unresolved deployment blockers.

### Sprint 053 Release Interface Closeout

Sprint 053 inspected repo docs/config only and did not run deploy or native build commands.

Confirmed from repo config:

- `firebase.json` defines Firebase Hosting with `public: "dist"` and SPA fallback to `/index.html`.
- `.firebaserc` points the default Firebase project at `barbie-92edc`.
- `capacitor.config.ts` uses `webDir: "dist"` for native wrappers.
- `package.json` provides `build`, `preview`, `lint`, `cap:sync`, `cap:open:ios`, and `cap:open:android` scripts, but native scripts were not run.

Unresolved:

- Confirmed release source of truth remains unresolved.
- FlutterFlow involvement is likely from planning history, but not confirmed as the active export/deploy source.
- FlutterFlow project ID/name remains `<project-id-placeholder>`.
- UAT target remains `<uat-link-or-build-placeholder>`.
- Test account remains `TEST_ACCOUNT_EMAIL=<placeholder only>`.

Sprint 053 recommendation is `HOLD` until the release source of truth and UAT access method are confirmed.

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

## Sprint 024 API Outcome

Sprint 024 did not add API endpoints, backend contracts, Firebase contracts, or external service integrations. The forward app-completion path remains local/frontend-first until a future sprint explicitly approves API work.

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

## FlutterFlow Sprint 008 Prototype Stubs

Sprint 008 uses placeholder contracts only. These are not live endpoints and must not be wired to Firebase, Gmail, backend APIs, live auth, model providers, Telegram, Hermes, or AI Hub during the first visual prototype.

### `mockStartDemoSession`

Purpose: move the user from Welcome or Demo Access into the Home Dashboard demo state.

Request:

```json
{
  "mode": "demo",
  "clientTheme": "trina-barbie-v1"
}
```

Response:

```json
{
  "sessionId": "demo-session-001",
  "displayName": "Destrey",
  "status": "ready"
}
```

### `mockSendAssistantMessage`

Purpose: show how Chat Shell will later call Hermes/API without wiring a live endpoint.

Request:

```json
{
  "sessionId": "demo-session-001",
  "message": "Give me a CEO briefing for today.",
  "clientTheme": "trina-barbie-v1",
  "source": "flutterflow-mobile"
}
```

Response:

```json
{
  "reply": "Here is your focused briefing: review prototype progress, confirm finance priorities, and keep the next build scoped to the six approved screens.",
  "actions": [],
  "error": null
}
```

### `mockMicListeningState`

Purpose: let the central microphone action show visual feedback without real speech recognition.

Allowed states:

- `idle`
- `listening`
- `captured`
- `error`

## Sprint 009 FlutterFlow Mock Contracts

Sprint 009 does not add real APIs.

For FlutterFlow prototype planning, these mock contracts are approved as visual/stub behavior only:

| Mock Contract | Purpose | Input | Output | Notes |
|---|---|---|---|---|
| `mockStartDemoSession` | Start a local demo session in the prototype. | None or selected user profile. | Demo state object. | No auth, persistence, or backend call. |
| `mockSendAssistantMessage` | Simulate a chat/assistant response. | User message string or selected quick action. | Assistant response card and optional suggested action. | Must be clearly mock-only. |
| `mockMicListeningState` | Simulate mic listening/processing/done states. | Tap state. | UI state transition. | No real audio capture or transcription. |
| `mockLoadCEOBriefing` | Populate CEO briefing cards. | None. | Static briefing summary cards. | Uses sample text only. |
| `mockLoadFinanceSnapshot` | Populate finance screen cards. | None. | Static finance metrics. | Uses fake/demo numbers only. |
| `mockLoadStrategicAdvisorMode` | Populate strategic advisor prompt options. | None. | Prompt cards and sample answer. | No live model call. |

These names describe prototype intent only. They are not production API endpoints.
