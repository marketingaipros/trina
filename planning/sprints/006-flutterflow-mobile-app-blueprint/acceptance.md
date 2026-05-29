# Sprint 006 Acceptance Criteria - FlutterFlow Mobile App Blueprint

Sprint 006 is complete only when all criteria below are satisfied.

## Scope Acceptance

- Sprint 006 folder exists at `planning/sprints/006-flutterflow-mobile-app-blueprint/`.
- The sprint includes:
  - `requirements.md`
  - `blueprint.md`
  - `acceptance.md`
  - `handoff-prompt.md`
- The sprint is documented as a planning/docs sprint only.
- No FlutterFlow project is created.
- No app/runtime code is changed.
- No Firebase config, deploy config, native folder, generated file, or `.env.local` file is changed.

## Product Blueprint Acceptance

- FlutterFlow is documented as the client-facing mobile frontend direction.
- Existing React/Vite/Firebase app is documented as current/reference/local implementation unless later reclassified.
- Hermes is documented as the backend AI brain.
- AI Hub Orchestrator is documented as the routing layer.
- Firebase is documented as supporting infrastructure where approved, not the owner of assistant reasoning.
- Theme configurability is documented.
- Barbie-inspired Trina styling is documented as a first theme option, not a permanent hard-coded product identity.

## Screen Blueprint Acceptance

The following screens are documented with purpose and V1 behavior:

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

## Navigation Acceptance

- Bottom navigation is defined for post-login/demo app use.
- Bottom navigation includes:
  - Home
  - Chat
  - Tasks
  - Memory
  - Settings
- Secondary routes are defined separately.
- Navigation is kept simple for V1.

## API/Data Acceptance

- `docs/API.md` includes a draft assistant chat request contract for FlutterFlow mobile.
- `docs/API.md` includes a draft assistant chat response contract.
- API docs state that FlutterFlow should not directly call model providers or own AI prompt logic.
- `docs/DATA_MODEL.md` includes first-pass mobile entities or equivalent:
  - UserProfile
  - AssistantSession
  - ChatMessage
  - AssistantAction
  - Task
  - MemorySummary
  - ClientTheme
  - UploadedFileReference

## Validation Acceptance

- `docs/VALIDATION.md` includes a FlutterFlow mobile blueprint validation checklist.
- Validation commands are run and reported.
- Report confirms no runtime/app code changed.
- Report confirms no commit or push was made unless explicitly approved by the user.

## State/Decision Acceptance

- `planning/STATE.md` reflects Sprint 006 as current or next active sprint.
- `planning/DECISIONS.md` captures durable Sprint 006 decisions.
- `planning/RISKS.md` captures mobile blueprint risks.
- `planning/QUESTIONS.md` captures unresolved auth, storage, theme, MVP, and code export questions.

## Completion Standard

The sprint is not complete just because files exist.

It is complete only when the FlutterFlow mobile app blueprint is clear enough for the next Builder/FlutterFlow implementation sprint to start without guessing.
