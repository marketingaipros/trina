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

## CEO Briefing Evidence Status

CEO Briefing screenshot evidence is deferred.

The failed/blank CEO Briefing page with `Try Again` is treated as blocked evidence, not pass evidence.

The next app-completion sprint must not require `references/flutterflow/sprint-009/ceo-briefing.png` unless the operator explicitly reopens CEO Briefing.

## Sprint 024 Validation Plan

Sprint 024 validation proves that the visible non-CEO app shell can be used without obvious broken paths.

## Sprint 024 Implementation Notes

Runtime implementation is limited to approved non-CEO shell stabilization files.

Implemented stabilization:

- Mounted the existing bottom navigation shell so visible non-CEO paths are reachable outside the Dashboard quick buttons.
- Aligned bottom navigation targets to Home, Tasks, Finance, Calendar, Notifications, and Context.
- Included pending reminders in the Notifications view so reminder paths render in the visible notification center.
- Guarded browser reminder notification creation so unsupported, blocked, denied, or throwing notification states do not crash the app.
- Hardened reminder time parsing so invalid reminder timestamps are treated as unavailable instead of invalid dates.

CEO Briefing remains deferred and no screenshot evidence is required or created for Sprint 024.

## Sprint 024 Validation Results

Date: 2026-05-31

### Commands Run

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
```

### Command Results

- `npm run lint`: Pass. TypeScript completed with exit code 0.
- `npm run build`: Pass. Vite production build completed.
- `git diff --check`: Pass. No whitespace errors reported.
- `git status --branch --short`: Reported in Sprint 024 closeout.

### Build Warnings

- Vite still reports the pre-existing mixed static/dynamic import warning for `services/authService.ts`.
- Vite still reports the production JavaScript chunk is larger than the default 500 kB warning threshold.

### Manual Browser Smoke Test

Local URL:

```text
http://127.0.0.1:3000/
```

Observed results:

- Dashboard loads without runtime errors.
- Bottom navigation renders and routes to Home, Tasks, Finance, Calendar, Alerts, and Context.
- Dashboard quick buttons for Finance, Tasks, Brain Dump, Calendar, Knowledge Base, and Notifications remain visible.
- Assistant/voice entry renders on Dashboard. Microphone click opens the browser microphone permission prompt without crashing, and text fallback remains visible.
- Tasks screen renders and shows existing task data.
- Finance screen renders and shows the existing financial snapshot.
- Calendar screen renders and shows the calendar grid and empty-state handling for the selected date.
- Notifications/reminders screen renders with a clear empty state when no active notifications are present.
- Context / Knowledge Base renders as the current settings-equivalent/context path and shows a clear empty state.
- Browser reminder notification creation is guarded in code so unsupported, denied, blocked, or throwing browser notification states do not crash the app.

### Acceptance Status

Sprint 024 acceptance criteria passed for the current visible non-CEO app shell.

Remaining follow-up:

- No automated browser test exists for due-reminder delivery timing or real browser notification permission permutations.
- A future sprint should choose the next feature-complete target: Assistant/voice entry, Tasks/notifications workflow, or Dashboard navigation polish.

## Required Commands

Run:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
```

If any command is unavailable or fails because of pre-existing issues, document:

1. The exact command.
2. The result.
3. Whether the failure is caused by Sprint 024 changes or pre-existing project state.
4. The recommended follow-up.

## Sprint 025 Planning/Docs Cleanup Validation

Sprint 025 uses docs-safe validation only:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Sprint 025 validation must also confirm:

- Changed files stay within planning/docs/reference/architect-pack surfaces.
- CEO Briefing remains deferred and non-blocking.
- No screenshot evidence is created.
- No runtime app code, Firebase, backend, Hermes, package, native, release, build, or export files are modified.

## Sprint 026 Assistant Flow Stabilization Validation

Sprint 026 starts with an apply-pack/docs-only checkpoint before runtime implementation.

Apply-pack validation uses docs-safe checks only:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Implementation validation, after explicit approval, should run the safe project checks that exist in this repo:

```bash
npm run lint
npm run build
```

Manual implementation smoke checks should verify:

1. Dashboard or navigation exposes the Assistant / voice entry path.
2. The user can reach a task/reminder capture surface.
3. Empty input is handled safely.
4. A created or simulated task/reminder is visible in Tasks, Notifications, reminders, or the relevant local surface.
5. The user can return to the main app surface without a dead end.
6. Notifications/reminders remain safe when browser notification permission is unavailable, blocked, denied, or unsupported.
7. CEO Briefing remains deferred, non-blocking, out of scope, and without screenshot evidence.

Do not create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

## Sprint 032 - Browser Smoke, Accessibility, and Device Validation

Sprint 032 validates the current Trina app shell after Sprint 031 accessibility polish.

This is a validation sprint, not a broad implementation sprint.

### Required Automated Checks

Run:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
git diff --name-only
git diff --cached --name-only
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Expected result:

- lint passes
- build passes or only known existing Vite warnings remain
- diff check passes
- staged files are empty unless explicitly approved later
- CEO Briefing screenshot file remains absent

### Browser Smoke Checks

Validate in the available browser environment:

1. Dashboard / Home loads.
2. Bottom navigation reaches all active app areas.
3. Assistant / Voice Entry is reachable from Dashboard/Home.
4. Tasks is reachable from navigation.
5. Notifications is reachable from navigation.
6. Calendar is reachable from navigation.
7. Finance is reachable from navigation.
8. Knowledge Base is reachable from navigation.
9. Home/back controls return to expected locations.
10. No blank screen or broken route appears during core navigation.

### Task Flow Checks

Validate:

1. Typed Assistant input can create a visible task.
2. Empty Assistant input does not create a bad task.
3. Created task appears in Tasks.
4. Task complete/incomplete toggle remains usable.
5. Existing task local behavior is preserved.
6. No storage or persistence architecture is changed.

### Speech Capture Checks

Validate live if microphone permission is available:

1. Microphone control is visible and labeled.
2. Starting speech capture does not break Assistant.
3. Stopping speech capture does not break Assistant.
4. Speech capture path appears preserved.

If live microphone testing is blocked:

- Document the browser/device/permission blocker.
- Inspect relevant code path only.
- Do not rewrite speech capture.

### Accessibility / Touch Checks

Validate where practical:

1. Icon-only controls have meaningful accessible names.
2. Buttons with added titles/labels remain visually unchanged.
3. Date buttons describe selected/current/event-count context where applicable.
4. Edit/delete controls remain discoverable enough for browser users.
5. Touch/mobile emulation does not hide critical controls.
6. Focus order does not trap the user in core views.
7. Form open/close/cancel controls are understandable.
8. Audio controls are labeled clearly.

### Protected Scope Validation

Confirm:

```bash
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Also confirm no files were changed in:

- FlutterFlow export
- Firebase
- Hermes
- backend
- auth
- database
- live AI
- package/dependencies
- native/build/release/deployment
- CEO Briefing

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

## Sprint 028 Closeout and Forward-State Validation

Sprint 028 is a planning/docs cleanup and forward-state correction sprint. It must not start runtime implementation.

Run:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Required validation outcome:

- No runtime files changed.
- No CEO Briefing screenshot exists.
- No FlutterFlow export exists.
- Bad `.md.md` Sprint 028 file is removed.
- Tracked Sprint 023 Architect Pack is restored if it was deleted.
- Correct Sprint 028 pack exists with a single `.md` extension.
- Sprint 028 folder contains `requirements.md`, `blueprint.md`, `acceptance.md`, and `handoff-prompt.md`.

## Sprint 029 Core App Navigation and Empty-State Polish Validation

Sprint 029 starts with an apply-pack docs/planning step before runtime implementation. The apply-pack step must not modify runtime app files.

Apply-pack validation uses docs-safe checks only:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Required apply-pack outcome:

- Sprint 029 planning folder exists.
- Sprint 029 `requirements.md`, `blueprint.md`, `acceptance.md`, and `handoff-prompt.md` exist.
- `planning/STATE.md` points to Sprint 029 as the active planning/docs application step.
- Runtime app files remain unchanged.
- CEO Briefing remains deferred and untouched.
- No CEO Briefing screenshot evidence is created.
- Sprint 023 app-completion reset remains protected.

Implementation validation, after explicit approval, should run:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Manual implementation smoke checks should verify:

1. Dashboard/Home loads without runtime errors.
2. Bottom navigation routes to Home, Tasks, Notifications, Calendar, Finance, and Knowledge / Knowledge Base as currently named.
3. Active bottom navigation state matches the visible destination.
4. Dashboard exposes Assistant / Voice Entry.
5. Typed Assistant capture saves a task and opens or updates Tasks visibility.
6. Speech transcript capture still follows the existing capture path if browser support is present.
7. Tasks shows captured items.
8. Tasks empty state is useful when no tasks exist.
9. Notifications empty/fallback state is useful when no notifications exist or browser notifications are unavailable.
10. Calendar empty/fallback state is useful when no events exist.
11. Finance empty/fallback state is useful when live/real data is unavailable.
12. Knowledge Base empty/fallback state is useful when no context has been added.
13. Return-to-Dashboard/Home paths work from primary screens.
14. CEO Briefing remains deferred and is not part of the validation pass.

Sprint 029 implementation target:

- Bottom navigation keeps Home, Tasks, Finance, Calendar, Notifications, and Knowledge reachable with clearer active state styling.
- Dashboard keeps Assistant / Voice Entry reachable.
- Typed Assistant capture continues to save local tasks and open Tasks.
- Existing speech transcript capture continues to use the same local task path when browser support is present.
- Tasks, Notifications, Calendar, Finance, and Knowledge Base provide clearer empty or fallback copy.
- Return-to-Dashboard/Home affordances remain available from primary screens.
- CEO Briefing remains untouched and deferred.

## Sprint 030 Lightweight UI Smoke Coverage and Label Consistency Validation

Sprint 030 starts with an apply-pack docs/planning step before runtime or smoke implementation. The apply-pack step must not modify runtime app files.

Apply-pack validation uses docs-safe checks only:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Required apply-pack outcome:

- Sprint 030 planning folder exists.
- Sprint 030 `requirements.md`, `blueprint.md`, `acceptance.md`, and `handoff-prompt.md` exist.
- `planning/STATE.md` points to Sprint 030 as the active planning/docs application step.
- Runtime app files remain unchanged.
- CEO Briefing remains deferred and untouched.
- No CEO Briefing screenshot evidence is created.
- Sprint 023 app-completion reset remains protected.

Implementation validation, after explicit approval, should run:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Validate manually or with lightweight existing tooling:

1. Dashboard/Home is reachable.
2. Bottom navigation reaches:
   - Tasks
   - Finance
   - Calendar
   - Notifications
   - Knowledge Base / Knowledge
   - Home
3. Active bottom navigation state is visible and accurate.
4. Assistant / Voice Entry is reachable from Dashboard.
5. Typed Assistant capture creates a task.
6. Captured task appears in Tasks.
7. Empty/fallback states remain clear for:
   - Tasks
   - Notifications
   - Calendar
   - Finance
   - Knowledge Base
8. Knowledge Base naming is consistent:
   - Use `Knowledge Base` for full feature copy.
   - Use `Knowledge` only where compact nav labels are required.
   - Do not use `Context` as the user-facing label unless future scope changes it.
9. Speech capture path is verified in one of two ways:
   - Live-tested with microphone permission granted, or
   - Preserved by code inspection with a clear note that local browser permission prevented live testing.

Protected validation:

- CEO Briefing remains deferred.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- Do not mark CEO Briefing evidence complete.

## Sprint 031 Core App Polish and Task-Flow Hardening Validation

Sprint 031 starts with an apply-pack docs/planning step before runtime implementation. The apply-pack step must not modify runtime app files.

Apply-pack validation uses docs-safe checks only:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Required apply-pack outcome:

- Sprint 031 planning folder exists.
- Sprint 031 `requirements.md`, `blueprint.md`, `acceptance.md`, and `handoff-prompt.md` exist.
- `planning/STATE.md` points to Sprint 031 as the active planning/docs application step.
- Runtime app files remain unchanged.
- CEO Briefing remains deferred and untouched.
- No CEO Briefing screenshot evidence is created.
- Sprint 023 app-completion reset and Sprint 030 smoke-validation baseline remain protected.

Before implementation, Builder must read the required planning/docs stack and summarize:

1. What Sprint 031 is supposed to accomplish.
2. Which files it expects to modify.
3. What tests or validation it will run.
4. Any blockers or ambiguities.
5. How it will protect CEO Briefing deferral.
6. How it will avoid unrelated runtime, backend, Firebase, Hermes, package, native, build, release, deployment, auth, database, live AI, and FlutterFlow export files.

Implementation validation, after explicit approval, should run:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
git diff --name-only
git diff --cached --name-only
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Manual implementation smoke checks should verify:

1. Home / Dashboard is reachable.
2. Bottom navigation works and active state is visible.
3. Assistant / Voice Entry is reachable.
4. Typed Assistant capture creates a task.
5. Captured task is visible in Tasks.
6. Speech capture path is preserved by live test when microphone permission is available, or by code inspection when permission is blocked.
7. Notifications copy remains consistent.
8. Knowledge Base label consistency remains correct.
9. Calendar and Finance empty states remain understandable.
10. CEO Briefing remains untouched, deferred, and absent from required validation.

### Sprint 030 Implementation Notes

Sprint 030 inspection found no existing web UI, browser, component, or smoke-test script in `package.json`. The only available repo validation scripts are `npm run lint`, `npm run build`, and Vite preview/dev commands; the only discovered test file is the native Android example unit test. No package or dependency files were changed.

Automated smoke coverage was not added because the repo does not currently include clean web smoke-test tooling and Sprint 030 forbids dependency churn. The lightweight repeatable smoke path for this sprint is the manual checklist below plus code inspection for capture wiring.

Confirmed label alignment:

- Bottom navigation uses compact `Knowledge`.
- Dashboard and the Knowledge screen use full `Knowledge Base`.
- Notifications user-facing copy uses `Notifications`, not `Alerts`.
- No runtime user-facing `Context` label was found in the current app shell.

Confirmed capture preservation by code inspection:

- Typed Assistant capture in `components/VoiceDashboard.tsx` calls `captureLocalTask(typedMessage, 'typed')`.
- `captureLocalTask` calls the `onAssistantCapture` prop.
- `App.tsx` handles `onAssistantCapture` through `handleAssistantCapture`, which saves with `Storage.addTask(...)`, updates local task state, shows a confirmation toast, and routes to `AppMode.TASKS`.
- Speech recognition results in `components/VoiceDashboard.tsx` still call `captureLocalTask(transcript, 'voice')`, preserving the same transcript-to-task path.

Live speech capture remains environment-dependent because it requires a browser/device with microphone permission granted. If local browser permission is denied or unavailable, document the limitation and preserve the existing speech path by inspection rather than rewriting microphone behavior.

### Sprint 030 Manual Smoke Checklist

Use the current local app shell after running the required command validation:

1. Open the app locally with `npm run dev` or an equivalent approved local preview.
2. Confirm Dashboard/Home loads without runtime errors.
3. Confirm bottom navigation reaches Home, Tasks, Finance, Calendar, Notifications, and Knowledge.
4. Confirm active bottom navigation state is visible and matches the current surface.
5. Confirm Dashboard quick actions expose Finance, Tasks, Brain Dump, Calendar, Knowledge Base, and Notifications.
6. Confirm Assistant / Voice Entry is visible on Dashboard.
7. Type a task into the Assistant input and press Capture.
8. Confirm the app opens Tasks and the captured task is visible.
9. Confirm empty/fallback states remain clear for Tasks, Notifications, Calendar, Finance, and Knowledge Base.
10. Confirm Knowledge Base naming follows the product rule: `Knowledge Base` for full copy and `Knowledge` only for compact nav.
11. Confirm Notifications copy uses `Notifications`, not `Alerts`.
12. Test speech capture only in a browser/device where microphone permission can be granted. If permission is denied or unavailable, record that live speech capture was not completed and that the transcript-to-task path was preserved by code inspection.
13. Confirm CEO Briefing remains deferred and is not part of the smoke pass.
14. Confirm `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

## Sprint 026 Implementation Notes

Implemented validation target:

- Dashboard Assistant text input can capture a local task without requiring live AI.
- Browser speech recognition transcript capture uses the same local task path when microphone support is available.
- Captured Assistant tasks are saved through the existing local task storage path and the app opens Tasks for visibility.
- Tasks empty state points users back to Assistant capture or the task add button.
- Notifications empty/fallback copy makes clear that browser notification support can be unavailable or blocked while in-app capture still works.

Sprint 026 validation must confirm:

```bash
npm run lint
npm run build
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Expected manual smoke result:

- Dashboard loads.
- Assistant capture is visible from Dashboard.
- Empty Assistant input cannot be captured or sent.
- Capture saves a local task and opens Tasks.
- The captured task appears in Tasks.
- Back navigation or bottom Home returns to Dashboard.
- Notifications remains usable when browser notifications are unsupported or denied.
- CEO Briefing remains deferred and untouched.

## Manual Smoke Test

After implementation, manually check these paths in the browser:

1. Dashboard loads without runtime errors.
2. Dashboard navigation cards/buttons route to intended non-CEO views.
3. Assistant and/or voice entry opens or shows an intentional placeholder.
4. Tasks screen renders without runtime errors.
5. Finance screen renders without runtime errors or clearly shows placeholder state.
6. Calendar screen renders without runtime errors or clearly shows placeholder state.
7. Notifications/reminders screen renders without runtime errors.
8. Reminder popup/notification behavior does not crash when permissions are unavailable, blocked, or not yet granted.
9. Settings-equivalent path renders or is clearly handled.
10. CEO Briefing remains deferred and is not treated as required pass evidence.

## Evidence Rules

Sprint 024 does not require screenshot evidence.

Do not create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Do not treat absent CEO Briefing screenshot evidence as a Sprint 024 failure.

## Sprint 023 App Completion Forward Build Validation

Sprint 023 uses docs-safe validation only:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png || echo "Review screenshot manually before treating as pass evidence"
```

Sprint 023 validation must also confirm:

- Sprint 023 planning files exist.
- Changed files stay inside the Architect Pack allowlist.
- CEO Briefing is deferred and not reopened as active implementation work.
- No runtime app code, generated FlutterFlow export code, Firebase, Hermes, backend, package/native, build, release, deploy, or screenshot evidence files are changed.

## Sprint 016 Planning/Docs Validation

Sprint 016 uses docs-safe validation only:

```bash
git diff --check
git status --branch --short
```

Sprint 016 validation must also confirm:

- `planning/sprints/016-flutterflow-functional-app-stabilization/` exists.
- The Sprint 016 requirements, blueprint, acceptance, and handoff prompt files exist.
- Changed files stay inside the Sprint 016 planning/docs/evidence-note allowlist.
- CEO Briefing evidence remains deferred unless a real FlutterFlow screenshot exists.
- No placeholder `references/flutterflow/sprint-009/ceo-briefing.png` is created.
- No runtime app code, generated FlutterFlow export code, Firebase, Hermes, backend, package/native, build, or release files are changed.

## Sprint 017 FlutterFlow Final Prototype Evidence Validation

Sprint 017 is a docs/planning-only readiness checkpoint. It defines what must be checked before Trina is treated as having final FlutterFlow prototype evidence.

### Required Checks

```bash
git diff --check
git status --branch --short
git diff --name-only
git diff --stat
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

### Screen Validation Matrix

| Screen | Required? | Evidence Required | Status | Notes |
|---|---:|---|---|---|
| Dashboard / Home | Yes | Screenshot from FlutterFlow Preview or Designer | Pending | Must show main prototype entry state. |
| Assistant | Yes | Screenshot from FlutterFlow Preview or Designer | Pending | Must show assistant interaction screen or static prototype equivalent. |
| Tasks / Priorities | Yes | Screenshot from FlutterFlow Preview or Designer | Pending | Must show task/prioritization workflow if included in current scope. |
| Memory / Context | Conditional | Screenshot if included in current prototype scope | Pending | Confirm against latest handoff docs. |
| CEO Briefing | Deferred unless real evidence exists | Screenshot only if real FlutterFlow state confirms it | Deferred | Do not create placeholder `ceo-briefing.png`. |

### Click-Path Validation Checklist

Before final prototype evidence is accepted:

- [ ] Dashboard screen is visible in FlutterFlow Preview or Designer.
- [ ] Assistant screen is reachable from Dashboard or documented navigation.
- [ ] Tasks / Priorities screen is reachable from Dashboard or documented navigation, if in current scope.
- [ ] CEO Briefing button status is documented accurately.
- [ ] Any deferred screen is clearly labeled deferred.
- [ ] Any mock/static data is labeled prototype content.
- [ ] Screenshot filenames match the validation checklist.
- [ ] Screenshot storage folder is documented or an approved open question is recorded.
- [ ] No placeholder screenshots are created.
- [ ] No generated FlutterFlow export or runtime code is modified as part of evidence readiness.

### Suggested Screenshot Filenames

Use stable lowercase names:

```text
dashboard.png
assistant.png
tasks-priorities.png
memory-context.png
ceo-briefing.png
```

Only create `ceo-briefing.png` if it is real evidence.

### Evidence Source Notes

Each screenshot should have a note identifying:

- capture date
- source environment
- screen name
- whether the screen is confirmed, deferred, or incomplete
- any known mismatch between FlutterFlow state and planning docs

### Evidence Folder Question

Final evidence storage remains unresolved until the Architect/operator approves a capture sprint. Recommended options:

- Use a dedicated future evidence folder such as `references/flutterflow/sprint-018/`.
- Preserve `references/flutterflow/sprint-009/` only for screenshots that specifically close Sprint 009 evidence gaps.

## Sprint 018 FlutterFlow Final Prototype Evidence Capture Validation

Sprint 018 uses docs-safe validation only. It does not run app build, Firebase deploy, FlutterFlow export, or native release commands.

### Required Checks

```bash
git diff --check
git status --branch --short
git diff --name-only
git diff --stat
test ! -f references/flutterflow/sprint-009/ceo-briefing.png || echo "CEO briefing screenshot exists"
```

### Evidence Completion Rules

- Document screenshot evidence only when the actual file exists.
- Do not create fake screenshots.
- Do not create placeholder evidence images.
- Keep CEO Briefing evidence missing or deferred unless `references/flutterflow/sprint-009/ceo-briefing.png` exists.
- Keep changed files limited to planning/docs/evidence notes.

### Sprint 018 Scope Check

Sprint 018 validation must confirm no changes were made to runtime app code, generated FlutterFlow exports, Firebase, Hermes/API, backend, package or lock files, native folders, build outputs, release files, secrets, or `.env` files.

## Sprint 019 CEO Briefing Evidence Resolution Validation

Sprint 019 uses docs-safe validation only. It does not run app build, Firebase deploy, FlutterFlow export, package installation, native build, or release commands.

### Required Checks

```bash
git status --branch --short
test -f references/flutterflow/sprint-009/ceo-briefing.png && echo "CEO briefing screenshot exists" || echo "CEO briefing screenshot absent"
git diff --name-only
git diff --stat
git diff --check
```

### Resolution Matrix

| Item | Sprint 019 Status | Notes |
|---|---|---|
| CEO Briefing screenshot evidence | Formal defer | No real screenshot exists in the project folder during this Builder pass. |
| Required future screenshot path | `references/flutterflow/sprint-009/ceo-briefing.png` | This exact path closes the Sprint 009 CEO Briefing evidence gap only when the file is real evidence. |
| `Dashboard -> CEO Briefing` | Deferred / unverified | Requires real FlutterFlow Designer or Preview validation. |
| `CEO Briefing -> Dashboard` | Deferred / unverified | Requires real FlutterFlow Designer or Preview validation. |
| `CEO Briefing -> Ask Trina to prioritize -> Assistant` | Deferred / unverified | Requires real FlutterFlow Designer or Preview validation. |
| Owner | Operator / FlutterFlow Builder | Must verify the real FlutterFlow project before capture. |

### Evidence Completion Rules

- Do not create `references/flutterflow/sprint-009/ceo-briefing.png` unless it is a real FlutterFlow screenshot.
- Do not mark CEO Briefing evidence complete while the PNG is absent.
- Do not create placeholder, fake, renamed-unrelated, generated, or text-only evidence.
- Keep Sprint 019 changed files limited to planning/docs/evidence notes and the Architect Pack.
- Confirm no runtime app code, generated FlutterFlow exports, Firebase, Hermes/API, backend, package or lock files, native folders, build outputs, release files, secrets, or `.env` files were changed.

## Sprint 020 FlutterFlow CEO Briefing Real Screenshot Pass Validation

Sprint 020 is an operator-led FlutterFlow Designer / Preview evidence pass. It does not run app build, Firebase deploy, FlutterFlow export, package installation, native build, or release commands.

### Required Checks

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git status --short
```

The broader Sprint 020 validation set may also include:

```bash
git status --branch --short
test -f references/flutterflow/sprint-009/ceo-briefing.png && echo "CEO briefing screenshot exists" || echo "CEO briefing screenshot absent"
git diff --name-only
git diff --stat
```

If and only if real screenshot evidence is captured, also run:

```bash
file references/flutterflow/sprint-009/ceo-briefing.png
```

### Required FlutterFlow Checks

| Item | Required Result | Current Builder-Pass Status | Notes |
|---|---|---|---|
| FlutterFlow project access | Operator can access the real project | Pass | Operator confirmed access. |
| Dashboard / Home visible | Visible in FlutterFlow Designer / Preview | Pass | Operator confirmed Dashboard / Home is visible. |
| CEO Briefing screen existence | Verified in FlutterFlow Designer / Preview or honestly failed/deferred | Fail | Operator confirmed CEO Briefing does not exist. |
| Renamed briefing equivalent | Document approved rename if found | Not present | Operator confirmed no approved renamed equivalent was found. |
| Actual screen label | `CEO Briefing` or documented accepted rename | Not present | No CEO Briefing screen or renamed equivalent exists. |
| CEO Briefing render | Screen renders correctly with briefing-specific content | Fail | No CEO Briefing screen exists, so briefing-specific content is absent. |
| `Dashboard -> CEO Briefing` | Pass only after real FlutterFlow validation | Fail | Operator confirmed the path does not work. |
| `CEO Briefing -> Dashboard` | Pass only after real FlutterFlow validation | Fail | Operator confirmed the path does not work because the screen is absent. |
| `CEO Briefing -> Ask Trina to Prioritize -> Assistant` | Pass only after real FlutterFlow validation | Fail | Operator confirmed the path does not work because the screen is absent. |
| `references/flutterflow/sprint-009/ceo-briefing.png` | Real FlutterFlow screenshot only | Absent / not captured | Operator confirmed no real screenshot was captured or saved. |

### Evidence Completion Rules

- Do not create `references/flutterflow/sprint-009/ceo-briefing.png` unless it is a real FlutterFlow Designer or Preview screenshot.
- Do not mark CEO Briefing evidence complete while the PNG is absent.
- Do not create placeholder, fake, renamed-unrelated, generated, or text-only screenshot evidence.
- Keep Sprint 020 changed files limited to the Architect Pack, planning files, validation docs, handoff docs, and evidence notes unless a real screenshot is captured.
- Confirm no runtime app code, generated FlutterFlow exports, Firebase, Hermes/API, backend, package or lock files, native folders, build outputs, release files, secrets, or `.env` files were changed.

### Sprint 020 Evidence Result

The operator could access the real FlutterFlow project and confirmed Dashboard / Home is visible. CEO Briefing does not exist, no approved renamed equivalent was found, briefing-specific content is absent, all required CEO Briefing click paths failed, and no real screenshot was captured. `references/flutterflow/sprint-009/ceo-briefing.png` must remain absent.

## Sprint 021 FlutterFlow CEO Briefing Screen Build Validation - Deferred

Sprint 021 is historical validation context only. It previously prepared a FlutterFlow-only manual build handoff, but Sprint 023 supersedes that path and moves app completion forward around CEO Briefing.

Do not use Sprint 021 validation as an instruction to build, validate, or capture evidence for CEO Briefing during the immediate app-completion path.

### Required Checks

```bash
git status --branch --short
find planning/sprints/021-flutterflow-ceo-briefing-screen-build -maxdepth 1 -type f | sort
test -f docs/FLUTTERFLOW_BUILD_HANDOFF.md
test -f docs/VALIDATION.md
test -f references/flutterflow/sprint-009/click-path-notes.md
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git diff --stat
git diff --check
```

### Deferred FlutterFlow Checks

These checks are not required for the next app-completion step unless the operator explicitly reopens CEO Briefing:

| Item | Required Result | Current Local Status | Notes |
|---|---|---|---|
| CEO Briefing screen | Deferred unless explicitly reopened | Deferred | Do not build for current app-completion work. |
| Dashboard / Home -> CEO Briefing | Deferred unless explicitly reopened | Deferred | Not required for the next app-completion step. |
| CEO Briefing -> Dashboard / Home | Deferred unless explicitly reopened | Deferred | Not required for the next app-completion step. |
| CEO Briefing -> Ask Trina to Prioritize -> Assistant | Deferred unless explicitly reopened | Deferred | Not required for the next app-completion step. |
| `references/flutterflow/sprint-009/ceo-briefing.png` | Real FlutterFlow screenshot only | Absent unless real evidence exists | Do not fabricate screenshot evidence. |

### Evidence Completion Rules

- Do not create `references/flutterflow/sprint-009/ceo-briefing.png` unless it is a real FlutterFlow Designer or Preview screenshot captured after the screen exists.
- Do not mark CEO Briefing screenshot evidence complete while the PNG is absent.
- Do not create placeholder, fake, renamed-unrelated, generated, or text-only screenshot evidence.
- Keep Sprint 021 changed files limited to the Architect Pack, planning files, validation docs, handoff docs, and click-path notes.
- Confirm no runtime app code, generated FlutterFlow exports, Firebase, Hermes/API, backend, package or lock files, native folders, build outputs, release files, secrets, or `.env` files were changed.

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

## Sprint 009 Validation - FlutterFlow Screen Build Handoff

Sprint 009 is complete when the repo contains a Builder-ready FlutterFlow handoff and no runtime implementation changes.

### Required Checks

```bash
git status --branch --short
find planning/sprints/009-flutterflow-screen-build-handoff -maxdepth 1 -type f | sort
test -f docs/FLUTTERFLOW_BUILD_HANDOFF.md && echo "handoff doc exists"
rg -n "009-flutterflow-screen-build-handoff|Dashboard|Assistant|Strategic Advisor Mode|CEO Briefing|Finance|Settings|mockStartDemoSession|mockSendAssistantMessage|mockMicListeningState|mockLoadCEOBriefing|mockLoadFinanceSnapshot|references/flutterflow/sprint-009|FlutterFlow only|No local React/Vite runtime code" planning docs
git diff --name-only
git diff --stat
```

### Acceptance Validation

- Sprint 009 folder exists.
- Sprint 009 contains exactly the four required sprint files.
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md` contains screen-by-screen build instructions.
- Mock/stub behavior is documented as non-production.
- Visual proof storage is documented.
- No runtime app code changed.
- No Firebase, Hermes/API implementation, package, native, release, generated export, secret, or env files changed.

## Sprint 010 Validation - FlutterFlow CEO Briefing Evidence Deferral

Sprint 010 Architect Pack was applied and the Sprint 010 review checkpoint passed. The real CEO Briefing screenshot is still missing at `references/flutterflow/sprint-009/ceo-briefing.png`.

Architect decision: CEO Briefing screenshot evidence is deferred, not complete, and is not required to move the broader Trina prototype forward. No placeholder or fake evidence should be created.

### Required Checks

```bash
git status --branch --short
find references/flutterflow/sprint-009 -maxdepth 1 -type f | sort
test -f references/flutterflow/sprint-009/ceo-briefing.png && echo "ceo briefing evidence exists"
git diff --name-only
git diff --stat
git diff --check
```

### Acceptance Validation

- Sprint 010 folder exists.
- Sprint 010 contains exactly the four required sprint files.
- CEO Briefing screenshot evidence is marked deferred, not complete.
- Missing evidence path remains `references/flutterflow/sprint-009/ceo-briefing.png`.
- Future CEO Briefing design direction includes `Today's Priorities`, `Follow-ups`, `Decisions Needed`, `Next Best Move`, and `Ask Trina to Prioritize`.
- Future naming candidates include Executive Briefing, Daily Briefing, Priority Briefing, Founder Briefing, or Command Briefing.
- The broader prototype may move forward with this evidence gap documented.
- `references/flutterflow/sprint-009/click-path-notes.md` must not mark CEO Briefing evidence present until actual evidence exists.
- No runtime app code, generated exports, Firebase, Hermes/API, backend, package, native, release, secret, or env files changed.

## Sprint 011 Validation - FlutterFlow Prototype Readiness

Sprint 011 is a planning/docs-only readiness checkpoint. It confirms the broader FlutterFlow prototype can move forward even while CEO Briefing remains deferred.

### Required Checks

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
```

### FlutterFlow Prototype Evidence Validation

Current accepted evidence should be validated by checking the screenshot files under:

```text
references/flutterflow/sprint-009/
```

Accepted evidence files:

- `dashboard.png`
- `assistant.png`
- `strategic-advisor-mode.png`
- `finance.png`
- `settings.png`

Deferred evidence:

- `ceo-briefing.png`

Validation rule:

CEO Briefing must not be marked complete unless this exact real screenshot file exists:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Placeholder evidence is not allowed.

Sprint 011 confirms the broader prototype can move forward even while CEO Briefing remains deferred.

## Sprint 012 Validation - FlutterFlow Demo Path Polish

Sprint 012 is a planning/docs-only demo-path polish checkpoint. It documents the accepted demo path around the deferred CEO Briefing screen.

### Required Checks

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
```

If screenshots changed after real manual FlutterFlow work, also run:

```bash
find references/flutterflow/sprint-009 -maxdepth 1 -type f | sort
```

### Demo Path Validation

Accepted demo screen set:

- Dashboard
- Assistant
- Strategic Advisor
- Finance Snapshot
- Settings

Preferred guided flow:

```text
Dashboard -> Assistant -> Strategic Advisor -> Finance Snapshot -> Settings -> Dashboard
```

Direct Dashboard hub navigation into each accepted screen is also acceptable.

### Acceptance Validation

- Sprint 012 folder exists.
- Sprint 012 contains exactly the four required sprint files.
- `planning/STATE.md` identifies Sprint 012 as the active planning checkpoint.
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md` documents the accepted demo path or points to the Sprint 012 files.
- `references/flutterflow/sprint-009/click-path-notes.md` documents the Sprint 012 accepted demo path.
- CEO Briefing remains deferred, not complete.
- No placeholder CEO Briefing evidence is created.
- `.DS_Store` is not included in the evidence contract.
- No runtime app code, React/Vite code, generated FlutterFlow export, Firebase, Hermes/API, backend, package, native, release, secret, or env files changed.

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

## Sprint 008 FlutterFlow First Visual Prototype Validation

Sprint 008 is a docs/planning application step for the first FlutterFlow visual prototype. It should not run app, Firebase, deploy, package installation, build, FlutterFlow export, or production mobile release commands.

### Commands

```bash
git status --branch --short
find planning/sprints/008-flutterflow-first-visual-prototype -maxdepth 1 -type f | sort
test -f docs/FLUTTERFLOW_BUILD_HANDOFF.md && echo "handoff doc exists"
rg -n "008-flutterflow-first-visual-prototype|Strategic Advisor Mode|CEO Briefing|Finance|mockStartDemoSession|mockSendAssistantMessage|mockMicListeningState|trina-barbie-v1|FlutterFlow only|No local React/Vite runtime code" planning docs
git diff --name-only
git diff --stat
```

### Checklist

| Area | Validation Method | Status | Notes |
|---|---|---|---|
| Sprint files | Confirm the Sprint 008 folder includes requirements, blueprint, acceptance, and handoff prompt. | Pending | Sprint 008 |
| Screen scope | Confirm Splash, Welcome, Demo Access, Home Dashboard, Chat Shell, and Error/Offline are defined. | Pending | Sprint 008 |
| Screenshot identity | Confirm pale pink background, hot pink CTA, rounded cards, central mic, left-nav adaptation, `Strategic Advisor Mode`, `CEO Briefing`, and Finance quick action are documented. | Pending | Sprint 008 |
| Theme | Confirm `trina-barbie-v1` tokens are documented and reusable. | Pending | Sprint 008 |
| Data/API boundary | Confirm mock data and API stubs only; no live Firebase, Gmail, backend API, auth, or model calls. | Pending | Sprint 008 |
| Runtime safety | Confirm no local runtime app code, generated exports, or production mobile release files changed. | Pending | Sprint 008 |

## Sprint 013 FlutterFlow CEO Briefing Deferred Evidence Validation

Sprint 013 is a documented deferred-evidence checkpoint. It should not run app, Firebase, deploy, package installation, build, FlutterFlow export, backend, native, or release commands.

CEO Briefing evidence remains deferred until this file exists:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

### Commands

```bash
git status --branch --short
find references/flutterflow/sprint-009 -maxdepth 1 -type f | sort
test -f references/flutterflow/sprint-009/ceo-briefing.png && echo "ceo briefing evidence exists"
git diff --name-only
git diff --stat
git diff --check
```

If the screenshot exists, also run:

```bash
file references/flutterflow/sprint-009/ceo-briefing.png
```

### Checklist

| Area | Validation Method | Status | Notes |
|---|---|---|---|
| Sprint files | Confirm the Sprint 013 folder includes requirements, blueprint, acceptance, and handoff prompt. | Pending | Sprint 013 |
| Evidence file | Confirm `references/flutterflow/sprint-009/ceo-briefing.png` exists before marking evidence complete. | Deferred | No real screenshot is available. |
| Forward progress | Confirm missing CEO Briefing evidence is not treated as an active blocker. | Pending | Next action is to create the next Architect Pack for actual app build progress. |
| Manual FlutterFlow validation | Confirm CEO Briefing or a documented briefing equivalent exists in the real FlutterFlow project only when future evidence capture resumes. | Deferred | Not required before the next Architect Pack. |
| Navigation | Record Dashboard to CEO Briefing, CEO Briefing to Dashboard, and CEO Briefing CTA to Assistant as tested, missing, or untested only when future evidence capture resumes. | Deferred | Not required before the next Architect Pack. |
| Runtime safety | Confirm no runtime app code, generated FlutterFlow exports, Firebase, backend, package, native, release, deploy, or secret files changed. | Pending | Sprint 013 |

## Sprint 014 CEO Briefing Screenshot Evidence Capture Validation

Sprint 014 is an evidence-capture-only checkpoint for the deferred Sprint 013 CEO Briefing screenshot gap.

Required evidence path:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Run and report:

```bash
git status --branch --short
find references/flutterflow/sprint-009 -maxdepth 1 -type f | sort
test -f references/flutterflow/sprint-009/ceo-briefing.png && echo "ceo briefing evidence exists"
git diff --name-only
git diff --stat
git diff --check
```

If the screenshot exists, also run:

```bash
file references/flutterflow/sprint-009/ceo-briefing.png
```

Manual FlutterFlow validation required before completion:

| Area | Validation Method | Status | Notes |
|---|---|---|---|
| Sprint files | Confirm the Sprint 014 folder includes requirements, blueprint, acceptance, and handoff prompt. | Pending | Sprint 014 |
| Evidence file | Confirm `references/flutterflow/sprint-009/ceo-briefing.png` exists before marking evidence complete. | Blocked | No real screenshot is available in the local repo context, and no placeholder was created. |
| Dashboard navigation | Confirm `Dashboard -> CEO Briefing` in the real FlutterFlow prototype. | Blocked | No real FlutterFlow project session, FlutterFlow URL, or operator-verified result is available. |
| Return navigation | Confirm `CEO Briefing -> Dashboard` or documented home route. | Blocked | No real FlutterFlow project session, FlutterFlow URL, or operator-verified result is available. |
| Prioritize CTA navigation | Confirm `CEO Briefing -> Ask Trina to Prioritize -> Assistant`. | Blocked | No real FlutterFlow project session, FlutterFlow URL, or operator-verified result is available. |
| Runtime safety | Confirm no runtime app code, generated FlutterFlow exports, Firebase, backend, package, native, release, deploy, or secret files changed. | Pending | Sprint 014 |

## Sprint 015 Functional App Stabilization Validation

Sprint 015 validation should focus on whether the app can be used through its core paths.

### Required Validation Areas

- Dashboard opens and shows intended primary actions.
- Existing buttons route to real screens or are documented as blocked.
- Missing screens are documented truthfully.
- No placeholder screenshot is used as evidence.
- CEO Briefing remains deferred until a real screen exists.

### Manual FlutterFlow Validation Checklist

| Path / Item | Expected Result | Status |
|---|---|---|
| Dashboard primary navigation | Opens real screens or clearly documented placeholders | Pending |
| Assistant path | Opens Assistant screen if included in current prototype | Pending |
| Settings path | Opens Settings screen if included in current prototype | Pending |
| Finance path | Opens Finance screen if included in current prototype | Pending |
| Strategic Advisor path | Opens Strategic Advisor screen if included in current prototype | Pending |
| CEO Briefing path | Deferred because page does not exist | Deferred |

## Sprint 027 Core App Completion Polish Validation

Sprint 027 starts with an apply-pack/docs-only checkpoint before runtime implementation.

Apply-pack validation uses docs-safe checks only:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Implementation validation, after explicit approval, should run:

```bash
npm run lint
npm run build
```

Manual implementation smoke checks should verify:

1. Dashboard/Home remains reachable from primary navigation.
2. Assistant / Voice Entry remains reachable.
3. Sprint 026 Assistant text capture still creates a local task and opens Tasks.
4. Supported speech transcript capture still follows the same safe local task path.
5. Empty Assistant input keeps Capture and Send disabled.
6. Tasks and Notifications empty/fallback states remain understandable.
7. Return navigation to Dashboard/Home is reliable.
8. Primary non-CEO app surfaces do not show obvious dead ends.
9. CEO Briefing remains deferred, untouched, out of scope, and without screenshot evidence.

Do not create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```
