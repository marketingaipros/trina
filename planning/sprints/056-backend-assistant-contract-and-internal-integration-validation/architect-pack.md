# Sprint 056 Architect Pack - Backend Assistant Contract and Internal Integration Validation Plan

## Sprint Name

Backend Assistant Contract and Internal Integration Validation Plan

## Goal

Validate the current working app/backend path so the app can move from `HOLD` to client UAT candidate without unnecessary rebuilding.

The app was already working before this sprint sequence started, and the client has used it before. The client is waiting to regain access. Do not expand scope. Do not redesign the app. Do not add new features.

## Scope Summary

This sprint verifies:

- Runtime source.
- Backend assistant contract.
- Auth/session behavior.
- Integration wiring.
- Internal smoke validation.
- UAT candidate readiness.

This sprint does not implement new runtime behavior.

## Required Files

This Architect Pack creates or updates:

- `planning/STATE.md`
- `planning/DECISIONS.md`, only if a durable decision changes
- `planning/RISKS.md`, if risks change
- `planning/QUESTIONS.md`, if questions remain
- `docs/ARCHITECTURE.md`, if runtime/backend source is confirmed
- `docs/API.md`, for assistant/backend contract
- `docs/VALIDATION.md`, for internal validation steps
- `planning/sprints/056-backend-assistant-contract-and-internal-integration-validation/requirements.md`
- `planning/sprints/056-backend-assistant-contract-and-internal-integration-validation/blueprint.md`
- `planning/sprints/056-backend-assistant-contract-and-internal-integration-validation/acceptance.md`
- `planning/sprints/056-backend-assistant-contract-and-internal-integration-validation/handoff-prompt.md`

## Current Contract To Validate

Current repo evidence shows:

- Frontend runtime: Vite React app.
- Assistant UI: `components/VoiceDashboard.tsx`.
- Frontend assistant service: `src/lib/barbieAI.js`.
- Current typed assistant call: `askBarbie(message)`.
- Current backend assistant callable: Firebase Function `chatWithBarbie`.
- Current callable request shape: `{ "message": "string" }`.
- Current primary success shape: `{ "reply": "string" }`.
- Current reminder success shape can include `notificationId` and `eventId`.
- Current auth/session path: Firebase Auth through `ensureBarbieAuth()`.
- Current voice path: browser speech recognition transcript capture, not native audio upload.

## Boundaries

- No UI redesign.
- No feature expansion.
- No FlutterFlow rebuild unless needed for validation and explicitly approved.
- No production deploy unless explicitly approved.
- No credentials committed.
- No CEO Briefing files touched.
- No native builds unless explicitly approved.
- Keep this focused on validation and handoff readiness.

## Validation Plan

Run:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
node --check functions/index.js
```

For internal runtime smoke:

```bash
npm run dev -- --host 127.0.0.1
```

Smoke test:

1. App launches.
2. Auth/session works or exact blocker is recorded.
3. Typed assistant call reaches `chatWithBarbie` and returns a usable response.
4. Reminder prompt with explicit time returns expected reminder behavior.
5. Voice transcript works or typed fallback is confirmed non-blocking.
6. Core client workflow completes without blocking errors.

## Acceptance Target

If the app can launch, authenticate as expected, call the assistant/backend successfully, and complete the core client workflow without blocking errors, recommend moving from `HOLD` to `CLIENT UAT CANDIDATE`.

If any launch, auth/session, assistant/backend, or core workflow blocker remains, keep `HOLD` and document the smallest next validation or fix sprint.

## Handoff

Use `handoff-prompt.md` in this folder for the Builder validation pass.
