# Sprint 056 Requirements - Backend Assistant Contract and Internal Integration Validation Plan

## Purpose

Validate the current working app/backend path so Barbie / TrinaOS Voice can move from `HOLD` to a client UAT candidate without unnecessary rebuilding.

The app was working before this sprint sequence started, and the client has used it before. Sprint 056 should prove whether the existing runtime path can safely be handed back to the client.

## Goal

Confirm that the app can:

- Launch in the selected internal validation environment.
- Authenticate or reuse a valid session as expected.
- Call the assistant/backend through the current contract.
- Complete the core client workflow without blocking errors.
- Produce a clear recommendation: keep `HOLD` or move to `CLIENT UAT CANDIDATE`.

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
- Current auth/session path: Firebase Auth through `ensureBarbieAuth()`, with anonymous sign-in first and Google popup fallback when allowed.
- Current voice path: browser speech recognition transcript capture, not native audio upload.

## In Scope

Sprint 056 may inspect and validate:

- Current Vite runtime launch.
- Current Firebase Auth/session behavior.
- Current `askBarbie()` to `chatWithBarbie` call path.
- Current backend assistant response.
- Current reminder/task flow for a daycare-owner workflow.
- Current browser voice transcript behavior and typed fallback.
- Current Firestore/Functions integration symptoms that appear during smoke validation.
- Existing docs and planning updates needed for handoff readiness.
- Internal validation environment, tester, issue channel, and go-live approver placeholders or confirmations.

## Out of Scope

- No UI redesign.
- No feature expansion.
- No FlutterFlow rebuild.
- No production deploy unless explicitly approved.
- No native builds unless explicitly approved.
- No credentials committed.
- No CEO Briefing files touched.
- No Hermes integration implementation unless a later sprint explicitly approves it.
- No new backend endpoints.
- No broad Firebase setup changes.
- No client UAT handoff before internal validation passes.

## Required File Updates

Create or update these files as needed:

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

## Completion Standard

Sprint 056 is complete when the next Builder can:

1. Name the current runtime/backend contract.
2. Run the internal smoke plan without guessing.
3. Record pass/fail/blocked results for launch, auth/session, assistant/backend, voice/fallback, and core workflow.
4. Recommend either `HOLD` or `CLIENT UAT CANDIDATE` based on evidence.
5. Confirm no protected surfaces were touched.
