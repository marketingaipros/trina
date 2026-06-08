# Sprint 056 Handoff Prompt - Backend Assistant Contract and Internal Integration Validation Plan

Use this prompt with Codex.

```text
Apply Sprint 056 as a validation and handoff-readiness sprint only.

Sprint:
planning/sprints/056-backend-assistant-contract-and-internal-integration-validation/

Goal:
Validate the current working app/backend path so Barbie / TrinaOS Voice can move from HOLD to client UAT candidate without unnecessary rebuilding.

Important context:
The app was already working before this sprint sequence started, and the client has used it before. The client is waiting to regain access. Do not expand scope. Do not redesign the app. Do not add new features. This sprint is only to verify runtime source, backend assistant contract, auth/session behavior, integration wiring, and internal smoke validation.

Read first:
- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/ARCHITECTURE.md
- docs/API.md
- docs/VALIDATION.md
- planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/requirements.md
- planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/blueprint.md
- planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/acceptance.md
- planning/sprints/056-backend-assistant-contract-and-internal-integration-validation/requirements.md
- planning/sprints/056-backend-assistant-contract-and-internal-integration-validation/blueprint.md
- planning/sprints/056-backend-assistant-contract-and-internal-integration-validation/acceptance.md

Before editing, summarize:
1. Current release posture.
2. Current runtime source.
3. Current backend assistant contract.
4. Validation environment you will use.
5. Any missing operator inputs.

Inspect exact files before validating:
- package.json
- App.tsx
- components/VoiceDashboard.tsx
- src/lib/barbieAI.js
- services/authService.ts
- functions/index.js
- firebase.json
- .firebaserc
- firestore.rules

Current contract to validate:
- Typed assistant UI calls askBarbie(message).
- askBarbie ensures Firebase Auth and calls Firebase callable chatWithBarbie.
- chatWithBarbie accepts { message: string }.
- Backend requires request.auth.uid.
- General success returns { reply: string }.
- Reminder success may return { reply, notificationId, eventId }.
- Browser voice is transcript capture through SpeechRecognition / webkitSpeechRecognition; it is not native audio upload.

Allowed files to update for closeout:
- planning/STATE.md
- planning/DECISIONS.md, only if a durable decision changes
- planning/RISKS.md, if risks change
- planning/QUESTIONS.md, if questions remain
- docs/ARCHITECTURE.md
- docs/API.md
- docs/VALIDATION.md
- planning/sprints/056-backend-assistant-contract-and-internal-integration-validation/requirements.md
- planning/sprints/056-backend-assistant-contract-and-internal-integration-validation/blueprint.md
- planning/sprints/056-backend-assistant-contract-and-internal-integration-validation/acceptance.md
- planning/sprints/056-backend-assistant-contract-and-internal-integration-validation/handoff-prompt.md

Forbidden:
- No UI redesign.
- No feature expansion.
- No FlutterFlow rebuild.
- No production deploy unless explicitly approved.
- No credentials committed.
- No CEO Briefing files touched.
- No native builds unless explicitly approved.
- No Hermes integration implementation unless a later approved sprint explicitly changes scope.
- No client UAT handoff before internal validation evidence.

Run required validation:
- git status --branch --short
- git diff --check
- test ! -f references/flutterflow/sprint-009/ceo-briefing.png
- npm run lint
- npm run build
- node --check functions/index.js

For internal runtime smoke, run:
- npm run dev -- --host 127.0.0.1

Smoke test:
1. App launches.
2. Auth/session works or exact blocker is recorded.
3. Typed assistant call reaches chatWithBarbie and returns a usable response.
4. Reminder prompt with explicit time returns expected reminder behavior.
5. Voice transcript works or typed fallback is confirmed non-blocking.
6. Core client workflow completes without blocking errors.

Acceptance target:
If the app can launch, authenticate as expected, call the assistant/backend successfully, and complete the core client workflow without blocking errors, recommend moving from HOLD to CLIENT UAT CANDIDATE.

If blocked, keep HOLD and document the smallest next validation or fix sprint.

Closeout report:
1. Files created/updated.
2. Current assistant/backend contract.
3. Auth/session result.
4. Typed assistant/backend result.
5. Voice/fallback result.
6. Core workflow result.
7. Remaining risks/questions.
8. Validation commands and results.
9. CEO Briefing absence confirmation.
10. Confirmation no redesign, feature expansion, deploy, native build, credentials, or CEO Briefing work occurred.
11. Final recommendation: HOLD or CLIENT UAT CANDIDATE.

Do not commit or push unless I explicitly ask.
```
