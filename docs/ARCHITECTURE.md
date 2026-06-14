# Architecture

## Sprint 073 Voice Talk-Back Path

Barbie voice talk-back must follow this flow:

1. User submits a typed or voice request.
2. App receives the final assistant answer.
3. The final visible answer is rendered in the UI.
4. The speech playback source is set from the same final answer text.
5. Browser speech synthesis is triggered only after required browser permission/user gesture conditions are satisfied.
6. The UI exposes whether Barbie is speaking, stopped, unavailable, or blocked.
7. Stop/cancel interrupts active speech cleanly.

### Required Guardrails

- Do not speak placeholder text.
- Do not speak stale prior responses.
- Do not speak hidden/internal/debug text.
- Do not mark voice as working from headless automation alone.
- Do not block typed Q&A or reminders if speech synthesis is unavailable.

### Voice Verification Boundary

Headless Chromium can validate that UI controls and code paths run, but it cannot prove that the user can hear Barbie speak through physical speakers. Release approval requires a physical device/browser test or a controlled audio-output proof.

## Sprint 058 Architecture Focus - Auth-Gated Barbie Backend Path

The current release blocker is not static rendering. The release blocker is the auth-gated Barbie backend/model path.

Expected runtime flow:

```text
Browser UI
-> typed assistant input
-> askBarbie()
-> ensureBarbieAuth()
-> Firebase callable function
-> chatWithBarbie
-> backend/model provider
-> Barbie response returned to browser
```

Sprint 058 must prove this path with browser and backend evidence before client UAT or mobile packaging.

The app should not be considered client-ready if the UI renders but `chatWithBarbie` cannot return a real backend/model response.

## Sprint 057 Runtime Architecture Focus

The currently observed app path is the Vite React web app running locally at `127.0.0.1:3000`.

Sprint 057 must validate the live browser path before any packaging decision:

- React UI renders locally.
- UI input calls the assistant client path.
- Assistant client path reaches the Firebase Functions/backend contract.
- Backend/model path returns a usable Barbie response.
- Reminder/core workflow is usable enough for UAT or documented as blocked.
- Voice/mic path is tested if available, with typed fallback documented.

Release packaging is a separate architecture decision after browser smoke:

- Web app: fastest UAT path.
- PWA/home-screen app: web-based install-like path for iPhone.
- Wrapped iPhone app: requires separate packaging/signing/device validation.
- FlutterFlow/native: only appropriate if it is the chosen source path or offers a safer mobile release route than wrapping the existing app.

## Sprint 056 Runtime / Backend Validation Architecture

Sprint 056 treats the current Vite React + Firebase Functions app as the path to validate before client UAT. It does not redesign, rebuild, or replace the app.

### Current Assistant Flow

```text
Vite React app
  -> components/VoiceDashboard.tsx
  -> src/lib/barbieAI.js / askBarbie()
  -> Firebase Auth session
  -> Firebase callable Function chatWithBarbie
  -> Firestore messages / notifications / events
  -> OpenRouter for general assistant replies
```

Typed messages are the primary assistant validation path. Browser voice capture currently produces transcript text through `SpeechRecognition` / `webkitSpeechRecognition`; Sprint 056 validates that current behavior and fallback, not a new native voice backend.

### Current Auth / Session Flow

The frontend initializes Firebase from `VITE_FIREBASE_*` environment variables. `ensureBarbieAuth()` reuses the current Firebase Auth user, attempts anonymous sign-in when needed, and falls back to Google popup when anonymous sign-in is disabled and popup is allowed. The callable backend requires `request.auth.uid` before assistant work proceeds.

### Validation Boundary

Sprint 056 may validate local launch, Firebase Auth/session, callable Function behavior, reminder/task workflow, and browser smoke behavior. It must not:

- Add new backend routes.
- Add Hermes integration code.
- Redesign UI.
- Rebuild FlutterFlow.
- Deploy production.
- Run native builds.
- Store credentials.
- Touch CEO Briefing files.

### UAT Candidate Rule

The app may move from `HOLD` to `CLIENT UAT CANDIDATE` only after internal validation confirms the existing app can launch, authenticate, call the assistant/backend successfully, and complete the core client workflow without blocking errors.

### Sprint 056 Validation Outcome

Sprint 056 confirmed the local Vite app can be served and that the current architecture path remains unchanged:

```text
Vite React app
  -> askBarbie()
  -> Firebase Auth
  -> Firebase callable Function chatWithBarbie
  -> Firestore / OpenRouter-backed assistant behavior
```

The live UI smoke was not fully completed because browser automation could not reliably operate the local Chrome app tab in this environment. No runtime/source defect was confirmed, and no architecture change is recommended from Sprint 056.

## Runtime Source and Integration Status - Sprint 055

### Active Runtime Source

The active inspected runtime source is the local Vite React app in this repo.

Repo evidence:

- `package.json` uses Vite scripts for `dev`, `build`, and `preview`, and TypeScript validation for `lint`.
- `index.tsx`, `App.tsx`, `components/`, and `services/` contain the current frontend runtime.
- `firebase.json` serves `dist`, the Vite build output.
- `capacitor.config.ts` points native wrappers at `dist`.

This confirms the active repo runtime for inspection and build validation. It does not confirm that this repo is the operator-approved client UAT release source.

### FlutterFlow Role

FlutterFlow remains `Unknown / requires operator confirmation` for release involvement.

Repo evidence shows historical/planned FlutterFlow work in planning docs and `references/flutterflow/`, but Sprint 055 did not find a committed generated FlutterFlow export, confirmed FlutterFlow project ID/name, or documented export/deploy process. Do not treat FlutterFlow as active release source until the operator confirms it.

### Firebase Role

Firebase is `Configured but not validated`.

Repo evidence:

- `.firebaserc` sets the default project to `barbie-92edc`.
- `firebase.json` defines Hosting, Functions codebase `trinaosvoice`, and Firestore rules.
- `firestore.rules` exists.
- `functions/index.js` contains callable and HTTPS backend functions.
- Frontend services reference Firebase Auth, Firestore, callable Functions, and push behavior.

Sprint 055 did not deploy, run emulators, inspect secret values, or validate live Firebase behavior.

### Hermes / Backend Role

Hermes-specific runtime integration is `Planned but not implemented`.

Project docs describe Hermes/API as the intended assistant/backend integration layer, but repo inspection did not find a Hermes runtime module, endpoint implementation, or connected service. The current web typed assistant path uses Firebase callable Functions such as `chatWithBarbie`; future Hermes/API integration needs an explicit request/response contract before implementation.

### Current Connectivity Classification

The current app is partially connected:

- Frontend runtime exists and builds through Vite.
- Firebase client/backend code exists.
- Firebase live deployment and secret-backed behavior are not validated in Sprint 055.
- Hermes/backend integration is not implemented in runtime code.
- FlutterFlow release involvement remains unresolved.

## Overview
Barbie / TrinaOS Voice is a Vite React app backed by Firebase. The browser app provides the assistant UI, reminder popup handling, local task/calendar/finance views, and Firebase callable access. Secret-backed AI, Gmail, Telegram, and push-notification operations live in Firebase Functions.

## Frontend
- Framework: React 19 with Vite.
- Styling: Tailwind CSS plus component-level class styling.
- Main entry: `index.tsx`.
- Root component: `App.tsx`.
- Main assistant UI: `components/VoiceDashboard.tsx`.
- Dashboard navigation: `components/Dashboard.tsx`.
- Feature views: tasks, finance, weekly reset, notifications, brain dump, calendar, knowledge base.

## Backend
- Firebase Functions v2 in `functions/index.js`.
- Runtime: Node 24.
- Admin SDK initializes once and writes to Firestore.
- Callable functions require Firebase Auth through `request.auth`.
- Telegram webhook is an HTTPS function using a secret token.

## Firebase Services
- Firebase Auth for user identity.
- Firestore for messages, reminders, user calendar events, connection records, and debug logs.
- Firebase Functions for AI, Gmail, Telegram, device token registration, and scheduled pushes.
- Firebase Hosting serves `dist`.
- Firebase Cloud Messaging is partially wired for mobile push notifications.

## Mobile
- Capacitor app exists for iOS and Android.
- App ID: `com.learnandgrow.barbie`.
- App name: `Barbie`.
- Web directory: `dist`.
- Native Firebase mobile config files are not part of the repo and must not be committed.

## Planned Client Mobile Architecture

The planned client-facing mobile app should be built frontend-first in FlutterFlow. The existing local React/Vite/Firebase app remains the current/reference implementation and should be preserved until the owner decides whether it becomes an internal/admin app, remains a reference app, or is retired after a FlutterFlow MVP.

```text
FlutterFlow Mobile App
        -> structured request
Hermes Backend AI Brain
        -> route / classify / process
AI Hub Orchestrator
        -> task workflows / agents / storage actions
Google Drive / File Storage / Deliverables
        -> status and result updates
FlutterFlow Mobile App
```

## FlutterFlow Responsibility

- Client-facing mobile UI.
- Screen navigation.
- Theme variables.
- Request forms.
- Task tracker views.
- Deliverables library views.
- Profile/preferences UI.
- API calls to backend placeholders.

## Hermes Responsibility

- Receive structured requests.
- Classify intent.
- Handle or route task processing.
- Generate or organize outputs.
- Update task status and approval state.

## AI Hub Orchestrator Responsibility

- Route requests to the correct agent or workflow.
- Track workflow ownership.
- Coordinate QA and next action.

## Google Drive Responsibility

- Store project deliverables, client folders, source materials, and handoff assets.
- Organize files outside the client-facing app.

## Forward App Architecture State

Sprint 024 did not change the high-level architecture. Trina remains the existing Vite React app shell with Firebase-backed support services and a planned FlutterFlow client-mobile direction.

Forward app-completion work should keep the existing app shell stable, avoid new backend/Firebase/Hermes architecture unless explicitly approved, and use clear placeholder states where a visible path is not ready.

CEO Briefing remains deferred and is not part of the current active architecture path.

## Codex Responsibility

- Audit local repo state.
- Apply Architect Packs.
- Maintain planning and documentation files.
- Build helper scripts or backend glue only after approved sprint plans.

## Client-Facing Rule

Do not expose Hermes, Claude, Gemini, Google AI Studio, Codex, or internal orchestration details in the client UI.

## Deployment
- Hosting public directory: `dist`.
- SPA fallback rewrite points to `/index.html`.
- Firestore rules file: `firestore.rules`.
- Functions codebase: `trinaosvoice`.

## Sprint 054 Release Path Evidence

The current repo architecture supports a Vite web build that writes to `dist`.

Repo-observed release/config evidence:

- `firebase.json` configures Firebase Hosting to serve `dist` with SPA fallback.
- `.firebaserc` sets the default Firebase project to `barbie-92edc`.
- `capacitor.config.ts` configures Capacitor native wrappers to consume `dist`.

These facts do not by themselves confirm the operator-approved release source of truth or UAT target.

FlutterFlow remains a separate release-path question until the operator confirms whether it is active, historical, not needed, or still unresolved for this release.

## Sprint 002 Launch Readiness Notes
- Trina / Barbie / TrinaOS Voice V1 should be validated before adding features.
- V1 launch-critical paths are auth, chat, reminders, reminder popups, Firestore rules, Firebase Functions readiness, Hosting build output, and Telegram readiness.
- Gmail send is a V2 boundary and should remain disabled during Sprint 002.
- Telegram is not considered live until `TELEGRAM_BOT_TOKEN` exists and webhook setup is confirmed.
- Mobile packaging exists through Capacitor, but native mobile behavior requires platform config and device/emulator validation.

## Sprint 003 Production Release Readiness Notes
- Sprint 003 prepares a controlled V1 go-live decision and should not expand product scope.
- Deployment readiness must distinguish local validation from approved production deploys.
- Gmail send remains V2-disabled in chat behavior; the existing backend callable needs a documented launch recommendation.
- Telegram remains blocked until secret and webhook setup are confirmed.
- Mobile readiness depends on platform scope, native Firebase config files, and device/emulator validation.
- Debug logging policy must be decided before long-term production usage because debug records may include raw user message text.

## Sprint 004 Controlled Web Deploy Notes
- Sprint 004 is a deploy-readiness and controlled release sprint for web V1 only.
- Expected Firebase project target remains `barbie-92edc`.
- Deploy scope must be explicitly approved before any Firebase deploy command is run.
- Telegram, Android, iOS, and Gmail send remain outside the required V1 web launch path unless separately approved and validated.
- Post-deploy smoke testing should verify the live hosted app, auth, chat, reminders, Gmail V2-disabled behavior, and documented blocked channels.

## Sprint 005 FlutterFlow Direction Notes
- Sprint 005 is documentation and baseline alignment only.
- The client-facing mobile version is FlutterFlow-first.
- Hermes is the backend AI brain and AI Hub Orchestrator is the routing layer.
- FlutterFlow V1 may use mock data and placeholder API actions until UI and schema are approved.
- The existing React/Vite app must not be changed or replaced in this sprint.

## FlutterFlow Mobile App Blueprint

Sprint 006 defines the mobile app blueprint before any FlutterFlow build begins. The first mobile implementation should be a polished assistant shell with simple navigation, clear API boundaries, and configurable visual theming.

Recommended first screens:

- Splash / Loading
- Welcome / Intro
- Sign In / Demo Access
- Home Dashboard
- Chat
- Tasks / Reminders
- Memory / Profile
- Files / Uploads placeholder
- Settings
- Error / Offline

Post-login bottom navigation:

- Home
- Chat
- Tasks
- Memory
- Settings

FlutterFlow owns screens, navigation, forms, local UI state, display components, and theme variables. Firebase may support approved auth, profile, app state, storage references, and metadata. Hermes/API owns assistant reasoning, memory reasoning, action routing, business rules, sensitive context selection, and connector decisions. AI Hub Orchestrator routes between the mobile app, Hermes, Firebase, and future service connectors.

FlutterFlow should not directly call model providers or own assistant prompt logic.

## Sprint 008 FlutterFlow Visual Prototype Notes

Sprint 008 keeps FlutterFlow responsible for the first visual prototype only.

The local React/Vite/Firebase app remains the current/reference implementation and is not modified by the Sprint 008 docs step.

Sprint 008 does not change production architecture, connect live services, create generated FlutterFlow exports, or create production mobile release files.

The first prototype uses mock data and API stubs only while adapting the current app screenshot identity into a mobile FlutterFlow shell.
