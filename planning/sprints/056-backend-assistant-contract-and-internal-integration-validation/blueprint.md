# Sprint 056 Blueprint - Backend Assistant Contract and Internal Integration Validation Plan

## Implementation Type

Validation and handoff readiness only.

Do not rebuild the app. Do not redesign UI. Do not add features. Do not deploy or run native builds without explicit approval.

## Step 1 - Read Operating Context

Read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/VALIDATION.md`
- `planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/requirements.md`
- `planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/blueprint.md`
- `planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/acceptance.md`
- `planning/sprints/056-backend-assistant-contract-and-internal-integration-validation/requirements.md`
- `planning/sprints/056-backend-assistant-contract-and-internal-integration-validation/acceptance.md`

Before implementation or validation, summarize:

- Current release posture.
- Current runtime path.
- Current backend assistant contract.
- Validation environment.
- Any missing operator inputs.

## Step 2 - Confirm Current Contract By Inspection

Inspect exact files before validating:

- `package.json`
- `App.tsx`
- `components/VoiceDashboard.tsx`
- `src/lib/barbieAI.js`
- `services/authService.ts`
- `functions/index.js`
- `firebase.json`
- `.firebaserc`
- `firestore.rules`

Record:

- How the app launches.
- How auth/session is established.
- How typed assistant requests are sent.
- How `chatWithBarbie` authenticates and responds.
- How reminders are created.
- How voice transcript capture behaves.
- Which environment variables are required by name only.

Do not print or store secret values.

## Step 3 - Run Repo Safety Gates

Run:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Expected:

- No unexpected runtime/source changes.
- CEO Briefing PNG remains absent.
- Diff whitespace check passes.

## Step 4 - Run Static Validation

Run:

```bash
npm run lint
npm run build
node --check functions/index.js
```

Expected:

- Lint passes.
- Build passes.
- Only previously accepted watch-only Vite warnings appear unless new output is recorded.
- Functions source parses.

## Step 5 - Launch Internal Runtime Smoke

Run:

```bash
npm run dev -- --host 127.0.0.1
```

Open the local URL in browser.

Validate:

- App shell renders.
- No blank screen.
- No blocking console/runtime error.
- Existing pink/white Barbie UI remains unchanged.

## Step 6 - Validate Auth / Session

Validate the current expected path:

- Existing Firebase user session is reused, or
- anonymous sign-in succeeds, or
- Google popup fallback succeeds when anonymous sign-in is disabled and popup is allowed, or
- auth is blocked and exact error is recorded.

Record the result as:

```text
Auth/session: pass | fail | blocked
Mode observed: existing-session | anonymous | google-popup | blocked
Blocking error: <none-or-error>
```

## Step 7 - Validate Typed Assistant / Backend

Send one general typed prompt, for example:

```text
Help me plan the next thing I should do for the daycare this afternoon.
```

Expected:

- UI sends through existing typed assistant path.
- `askBarbie()` calls `chatWithBarbie`.
- Assistant returns a useful reply.
- No blocking runtime errors appear.

Record:

```text
Typed assistant/backend: pass | fail | blocked
Endpoint: chatWithBarbie
Response shape observed: reply | reminder | error
Blocking error: <none-or-error>
```

## Step 8 - Validate Reminder / Core Workflow

Send one reminder prompt with explicit time, for example:

```text
Remind me in 2 minutes to check the daycare sign-in sheet.
```

Expected:

- Backend recognizes reminder intent.
- Assistant returns a clear confirmation.
- Reminder/notification state appears in the app where expected.
- Core workflow can continue without a crash or blocked navigation.

Record:

```text
Reminder/core workflow: pass | fail | blocked
Notification ID observed: yes | no | not-visible
Blocking error: <none-or-error>
```

## Step 9 - Validate Voice Transcript Or Typed Fallback

Use a supported browser and allow microphone permission if available.

Expected:

- Voice transcript is captured and routed through current behavior, or
- browser/microphone support is unavailable and typed fallback remains clear and usable.

Record:

```text
Voice transcript: pass | fail | blocked | not-supported-with-typed-fallback
Typed fallback: pass | fail | blocked
Blocking error: <none-or-error>
```

## Step 10 - Decide HOLD vs UAT Candidate

Recommend `CLIENT UAT CANDIDATE` only if:

- App launch passes.
- Auth/session passes for the intended tester path.
- Typed assistant/backend call passes.
- Reminder/core workflow passes.
- Voice works or typed fallback is explicitly accepted as non-blocking.
- No blocking runtime errors remain.
- Internal tester, UAT issue channel, and go-live approver are known or explicitly handled by the operator.

Otherwise recommend `HOLD` and name the smallest next fix or validation sprint.

## Step 11 - Update Closeout Docs

Update only the approved docs/planning files with:

- Validation commands and results.
- Runtime/backend contract outcome.
- Auth/session outcome.
- Assistant/backend outcome.
- Voice/fallback outcome.
- Core workflow outcome.
- Final recommendation.
- Remaining questions or risks.

Do not touch CEO Briefing files, native files, deploy files, credentials, or runtime code unless a later approved sprint changes scope.
