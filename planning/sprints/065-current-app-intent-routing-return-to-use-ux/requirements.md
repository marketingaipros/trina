# Sprint 065 Requirements - Current App Intent Routing and Return-to-Use UX

## Purpose

Fix or clarify the current app intent routing that blocks customer return-to-use.

Sprint 064 confirmed the current app/current UI can load locally and typed `Send` can reach the backend/model. It also confirmed a blocker: `Capture` saves ordinary language as a local task and opens Task Tracker, while the voice transcript path appears routed to task capture instead of normal assistant answers.

Sprint 065 must make the existing app safe enough for owner-reviewed return-to-use UAT.

## User Need

The customer needs to:

- talk or type input
- get answers
- create reminders/events
- receive due notifications or have notification limitations clearly documented
- provide feedback

## Required Outcomes

1. Normal questions must go to Barbie/backend/model answer path.
2. Task capture must be explicit and not confused with asking Barbie.
3. Voice behavior must be validated and either:
   - routed to the assistant answer path, or
   - clearly labeled as task capture only if not fixed in this sprint.
4. Reminder creation must still work after routing changes.
5. In-app due reminder delivery must still work.
6. Feedback path must be added or clearly documented for UAT.
7. Customer URL/access path must be identified or remain a release blocker.
8. Client UAT / V1 Beta must remain `HOLD` until validation passes and owner approval is recorded.

## In Scope

- Current app/current UI only.
- Intent routing between ask/send, capture/task, reminder/event, and voice transcript paths.
- Button label/help text changes needed to remove confusion.
- Minimal feedback path suitable for UAT.
- Return-to-use smoke validation.
- Planning/docs updates tied to Sprint 065.

## Out of Scope

- Flutter/FlutterFlow migration.
- Full redesign.
- Native iOS/Android packaging.
- PWA packaging.
- App Store/TestFlight work.
- Firebase settings changes.
- Deploys unless separately approved.
- Credentials/secrets.
- CEO Briefing files.

## Known Sprint 064 Evidence

- Local tested path: `http://127.0.0.1:3000/`
- Likely deployed path: `https://barbie-92edc.web.app/`
- Deployed URL returned `HTTP/2 200`, but current repo match was not proven.
- Typed `Send` returned an answer.
- `Capture` on `What should I do next?` saved a local task and opened Task Tracker.
- Reminder through `Send` worked.
- In-app due reminder worked.
- Browser/native push unproven.
- Feedback path missing.
