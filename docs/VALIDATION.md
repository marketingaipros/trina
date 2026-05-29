# Validation Plan

## Overview

Sprint 002 validated whether Barbie / TrinaOS Voice was stable enough for a V1 baseline without expanding scope into Gmail send or new product features. Sprint 003 prepares a controlled production release readiness decision.

## V1 Validation Principles

- Validate existing behavior before adding new behavior.
- Do not treat V2 features as V1 blockers.
- Do not expose secrets in docs, logs, or chat.
- Every launch-critical path should have a clear pass, fail, or blocked status.
- Any failed or blocked item should create a follow-up question, risk, or sprint candidate.

## Validation Checklist

| Area | Validation Method | Expected Result | Status | Notes |
|---|---|---|---|---|
| Frontend build | Run `npm run build` | Build completes and outputs `dist` | Pass | Build completed. Vite reported a large bundle warning for `dist/assets/index-*.js` and a mixed static/dynamic import warning for `services/authService.ts`, but no build failure. |
| Lint | Run `npm run lint` | No blocking lint errors | Pass | `tsc --noEmit` completed with exit code 0. |
| Firebase Hosting | Inspect `firebase.json` and build output | Hosting serves `dist` with SPA fallback | Pass | `hosting.public` is `dist`; SPA rewrite points `**` to `/index.html`. No deploy was run. |
| Firebase Functions syntax | Run appropriate function syntax/lint checks | Functions code is valid | Pass | `node --check functions/index.js` completed with exit code 0. |
| Auth | Inspect callable function auth requirements and frontend usage | Protected functions require authenticated user | Pass with caveat | Callable functions inspected require `request.auth` through `getUserId()` or equivalent checks. Frontend attempts anonymous auth and falls back to Google popup when anonymous is disabled. |
| Chat | Validate frontend-to-backend chat path | User can send message and receive expected assistant response | Pass by inspection | Text submit calls `askBarbie()`, which calls callable `chatWithBarbie`. Runtime OpenRouter success still depends on deployed function secret and network availability. |
| Reminders | Validate reminder creation path | Reminder can be created and stored in expected location | Pass by inspection | `chatWithBarbie` parses reminder intent before OpenRouter and writes user-owned docs to lowercase `notifications`, plus message logs. |
| Reminder popups | Validate popup, snooze, dismiss behavior | Reminder notifications behave as expected | Pass by inspection | Frontend listener queries `notifications` by `userId`, `status == pending`, and `type == reminder`; dismiss and snooze hide local popup immediately and update Firestore. |
| Firestore rules | Inspect and, if possible, test rules | User-owned data is protected | Pass by inspection | Rules require authenticated user ownership for `messages`, `notifications`, `events`, and user calendar paths. Backend-only collections are denied to clients. Rules emulator tests were not run in this sprint. |
| Telegram readiness | Confirm function exists, secret dependency is documented, and setup command exists | Telegram path is ready or blocked with reason | Blocked | `telegramWebhook` exists and validates `x-telegram-bot-api-secret-token`/query token against `TELEGRAM_BOT_TOKEN`; live status is blocked until secret and webhook setup are confirmed. |
| Gmail V2 boundary | Inspect email intent/send behavior | Gmail send remains disabled for V1 | Pass with caveat | `chatWithBarbie` returns V2-disabled responses for email intent and confirmation phrases. A callable `sendGmailEmail` still exists for backend Gmail operations and should remain out of V1 UI/intent scope. |
| Mobile readiness | Inspect Capacitor config and native folders | Mobile packaging path is documented | Blocked | Capacitor config uses `webDir: dist`, iOS/Android folders exist, and mic/notification permissions are present. Native Firebase config files were not found, and device/emulator testing was not run. |
| Debug logging | Inspect debug log writes | Privacy risk is known and documented | Risk accepted for sprint | `chatWithBarbie` writes raw user message text to `debugLogs` at function start. This is useful for troubleshooting but needs a retention/redaction decision before long-term production use. |

## Sprint 002 Validation Results

Date: 2026-05-15

### Commands Run

```bash
cd /Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice
npm run build
npm run lint
node --check functions/index.js
```

### Command Results

- `npm run build`: Pass. Production build completed and wrote `dist`.
- `npm run lint`: Pass. TypeScript check completed with exit code 0.
- `node --check functions/index.js`: Pass. Function source parsed successfully.

### Build Warnings

- Vite warned that `services/authService.ts` is both dynamically and statically imported, so the dynamic import will not split it into a separate chunk.
- Vite warned that the built JavaScript chunk is larger than 500 kB after minification.

### No Deployment Performed

No Firebase deploy command was run during Sprint 002 validation.

## Validation Commands

```bash
cd /Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice
npm run build
npm run lint
node --check functions/index.js
```

## Deploy Commands

Deploy only when explicitly approved:

```bash
firebase deploy --only firestore:rules
firebase deploy --only functions
firebase deploy --only hosting
```

## Sprint 003 Production Release Readiness

Sprint 003 should turn the Sprint 002 baseline into a go-live decision path. It should not add features, re-enable Gmail send, redesign the UI, refactor production code, or deploy without explicit approval.

### Production Readiness Areas

| Area | Required Sprint 003 Status |
|---|---|
| Local build | Re-run or document current status after owner approval. |
| TypeScript/lint | Re-run or document current status after owner approval. |
| Functions syntax | Re-run or document current status after owner approval. |
| Firebase Hosting | Confirm `dist` build output and SPA rewrite are ready for approved deploy. |
| Firebase Functions | Confirm deploy readiness and required secrets without exposing secret values. |
| Firestore rules | Confirm user-owned access model still supports V1 flows. |
| Telegram | Confirm `TELEGRAM_BOT_TOKEN` secret and webhook setup before marking live. |
| Gmail | Keep chat behavior V2-disabled; document `sendGmailEmail` callable recommendation. |
| Debug logs | Decide retain, redact, reduce, or disable policy before long-term go-live. |
| Mobile | Decide web-only, Android, iOS, all three, or blocked; do not mark mobile live without device/emulator validation. |

### Go-Live Checklist Draft

- Confirm V1 platform scope.
- Confirm approved Firebase project and target.
- Confirm local build, lint, and function syntax pass.
- Confirm Hosting deploy readiness.
- Confirm Functions deploy readiness and required secrets are configured.
- Confirm Firestore rules deploy readiness.
- Confirm chat, reminder creation, reminder popup, dismiss, and snooze behavior.
- Confirm Gmail send remains V2-disabled in chat behavior.
- Decide whether the `sendGmailEmail` callable remains deployed, guarded, or disabled.
- Confirm Telegram token and webhook setup, or mark Telegram blocked/out of launch.
- Decide debug log policy for raw message text.
- Confirm mobile native Firebase config and device/emulator testing before mobile launch.
- Record final recommendation: ready for web V1 go-live, blocked, ready after owner-approved actions, or not ready due to incomplete production validation.

## Sprint 003 Production Release Readiness Results

Date: 2026-05-15

### Commands Run

```bash
cd /Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice
npm run build
npm run lint
node --check functions/index.js
firebase use
```

### Command Results

- `npm run build`: Pass. Production build completed and wrote `dist`.
- `npm run lint`: Pass. TypeScript check completed with exit code 0.
- `node --check functions/index.js`: Pass. Function source parsed successfully.
- `firebase use`: Pass. Current Firebase target is `barbie-92edc`.

### Production Readiness Status

| Area | Status | Notes |
|---|---|---|
| Web V1 launch scope | Ready after owner-approved deploy actions | Default V1 scope is web-first. Android and iOS remain blocked until native Firebase config and device/emulator testing are confirmed. |
| Firebase project target | Pass | `.firebaserc` and `firebase use` point to `barbie-92edc`. |
| Hosting readiness | Pass | `firebase.json` serves `dist` and includes SPA fallback. Hosting deploy was not run. |
| Functions readiness | Pass locally / deploy blocked | Syntax passed. Deploy readiness still depends on approved deploy and required configured secrets. Secrets were not accessed. |
| Firestore rules readiness | Pass by inspection / deploy blocked | Rules require authenticated user-owned access for client collections and deny backend-only collections. Rules deploy was not run. |
| Chat and reminders | Pass by inspection | Frontend calls `askBarbie()` and backend routes reminder intent before OpenRouter. |
| Reminder popups | Pass by inspection | Listener filters `notifications` by `userId`, `status`, and `type`; snooze/dismiss update Firestore. |
| Telegram | Blocked | `telegramWebhook` exists, but token and webhook setup were not confirmed. Secrets were not accessed. |
| Gmail send | V2-disabled in chat | Chat email intent returns V2-disabled replies. `sendGmailEmail` callable still exists and should be restricted or explicitly gated in a future sprint if not needed for V1. |
| Debug logs | Policy needed | `chatWithBarbie` writes raw message text to `debugLogs`. Recommended go-live policy: reduce or redact debug log message content before broad production use, or retain temporarily with a documented short retention window. |
| Mobile | Blocked for V1 native launch | Capacitor is configured and native permission strings exist. Native Firebase config files were not found, and device/emulator testing was not performed. |

### Build Warnings

- Vite still warns that `services/authService.ts` is both dynamically and statically imported, so the dynamic import will not split it into a separate chunk.
- Vite still warns that the built JavaScript chunk is larger than 500 kB after minification.

### Go-Live Checklist

- Pass: Local web build passes.
- Pass: TypeScript/lint passes.
- Pass: Functions syntax check passes.
- Pass: Firebase target confirmed as `barbie-92edc`.
- Pass: Hosting config points to `dist` with SPA fallback.
- Pass by inspection: Firestore rules protect user-owned V1 data.
- Pass by inspection: Chat, reminders, popup, snooze, and dismiss paths are wired.
- Pass: Gmail chat sending remains V2-disabled.
- Blocked: Firebase deploy approval is still needed before production release.
- Blocked: Telegram token and webhook setup are not confirmed.
- Blocked: Android/iOS native launch is not ready without native Firebase config and device/emulator testing.
- Owner decision needed: debug log policy for raw user message text.
- Recommendation: Ready for web V1 go-live after owner-approved Firebase deploy actions and debug logging policy decision. Telegram and native mobile should remain out of V1 launch unless separately verified.

## Sprint 004 Controlled Web V1 Deploy

Sprint 004 exists to perform a controlled Firebase web release only after explicit owner approval. This sprint should not add features, refactor production code, enable Gmail send, mark Telegram live without verified setup, or mark Android/iOS production-ready without device/emulator validation.

### Required Pre-Deploy Commands

```bash
cd /Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice
npm run build
npm run lint
node --check functions/index.js
firebase use
```

### Deploy Commands Requiring Explicit Approval

Preferred full web V1 deploy:

```bash
firebase deploy --only hosting,functions,firestore:rules
```

Allowed staged deploy commands if specifically approved:

```bash
firebase deploy --only firestore:rules
firebase deploy --only functions
firebase deploy --only hosting
```

### Post-Deploy Smoke Test Checklist

- Confirm Firebase deploy output reports success.
- Capture the live Hosting URL.
- Open the live app and confirm it does not show a blank screen.
- Confirm auth path works or anonymous auth fallback works.
- Confirm chat path responds.
- Confirm reminder creation writes through the expected path.
- Confirm reminder popup behavior is tested or documented as inspection-only.
- Confirm Gmail send remains V2-disabled from chat.
- Confirm Telegram remains blocked unless token and webhook setup are confirmed.
- Confirm Android/iOS remain blocked unless separately validated.
- Document debug logging policy or remaining decision.

### Sprint 004 Status

Status: Prepared, not run. No Sprint 004 validation or deploy commands have been run during the apply-pack step.

## Sprint 005 FlutterFlow Direction Validation

Sprint 005 is a documentation-only baseline and direction alignment sprint. It should not change app/runtime code, deploy, stage, commit, push, print secrets, or modify `.env.local`.

### Baseline Checks

```bash
git status --branch --short
git remote -v
git branch --show-current
find planning -maxdepth 3 -type f | sort
find docs -maxdepth 2 -type f | sort
find architect-packs -maxdepth 1 -type f | sort
cat package.json
```

### Acceptance Checks

- Confirm local repo baseline is documented.
- Confirm Git remote is documented.
- Confirm existing app stack is documented.
- Confirm FlutterFlow-first client mobile decision is recorded in `planning/DECISIONS.md`.
- Confirm Hermes backend request schema exists in `docs/API.md`.
- Confirm planned data collections exist in `docs/DATA_MODEL.md`.
- Confirm FlutterFlow QA criteria exist in this file.
- Confirm existing React/Vite app is clearly distinguished from planned FlutterFlow frontend.
- Confirm no app code is changed.
- Confirm no files are deleted, moved, renamed, staged, committed, or pushed.
- Confirm `.env.local` is not printed or exposed.
- Confirm `planning/STATE.md` clearly identifies the next action.

## FlutterFlow MVP QA Checklist

- Mobile layout works on common phone sizes.
- Bottom navigation includes Home, Ask, Tasks, Files, Profile.
- Required screens exist.
- Request form captures required schema fields.
- Task statuses match approved status options.
- Approval statuses match approved status options.
- Theme variables are reusable.

## FlutterFlow First-Screen Prototype Validation

| Area | Validation Method | Status | Notes |
|---|---|---|---|
| First screens | Confirm Splash, Welcome, Demo Access, Home Dashboard, Chat Shell, and Error/Offline are defined in handoff. | Pending | Sprint 007 |
| Scope boundary | Confirm Tasks, Memory, Files, Settings, and Theme Preview are placeholder/future only. | Pending | Sprint 007 |
| Theme | Confirm `trina-barbie-v1` tokens are documented and reusable. | Pending | Sprint 007 |
| Mock data | Confirm prototype uses mock/demo data only. | Pending | Sprint 007 |
| API stubs | Confirm live backend calls are out of scope and placeholder API rules are documented. | Pending | Sprint 007 |
| Runtime safety | Confirm no local runtime app code or generated FlutterFlow exports changed. | Pending | Sprint 007 |
- Client A, B, and C theme variations can be created without duplicating app logic.
- File upload placeholder exists.
- Voice/text input placeholder exists.
- Backend API placeholder exists.
- Client does not see Hermes, Claude, Gemini, Google AI Studio, Codex, or internal agent names.
- Visual polish is acceptable for client review.
- Accessibility basics are checked: contrast, touch target size, readable labels.

## FlutterFlow Mobile Blueprint Validation

Sprint 006 is a docs/planning-only blueprint sprint. It should not run app, deploy, Firebase, package installation, build, or FlutterFlow commands.

### Commands

```bash
git status --branch --short
find planning/sprints/006-flutterflow-mobile-app-blueprint -maxdepth 1 -type f | sort
rg -n "FlutterFlow|Hermes|AI Hub Orchestrator|Firebase|Chat|Home Dashboard|clientTheme|assistant" planning docs
git diff --name-only
git diff --stat
```

### Checklist

| Area | Validation Method | Status | Notes |
|---|---|---|---|
| Screens | Confirm required screen list is documented before build. | Pending | Sprint 006 |
| Navigation | Confirm bottom nav and secondary routes are defined. | Pending | Sprint 006 |
| API boundary | Confirm FlutterFlow calls Hermes/API or Orchestrator for AI behavior. | Pending | Sprint 006 |
| Data ownership | Confirm Firebase vs Hermes/API responsibilities are documented. | Pending | Sprint 006 |
| Theme | Confirm first theme is configurable and not hard-coded as permanent identity. | Pending | Sprint 006 |
| Safety | Confirm no runtime code/config was changed during blueprint sprint. | Pending | Sprint 006 |
