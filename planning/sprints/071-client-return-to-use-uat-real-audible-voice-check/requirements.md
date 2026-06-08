# Sprint 071 Requirements - Client Return-to-Use UAT + Real Audible Voice Check

## Status

Planned.

## Goal

Decide whether the client can use the current browser app again for the main return-to-use flow.

## Client-use scope

The app must support:

1. Typed questions.
2. Visible Barbie/model answers.
3. Real audible talk-back from a real browser/device audio path.
4. Reminder creation.
5. In-app reminder display.
6. Reminder dismiss.
7. Feedback link visibility.

## Business context

The app was already working before recent structure/framework work. The near-term goal is not to rebuild it. The near-term goal is to safely return the current app to client use while future work continues.

## Must prove

- Exact current app URL/path the client should use.
- Whether the deployed/current client URL reflects Sprint 070 behavior.
- Typed Q&A still works.
- Barbie/model answer appears visibly.
- Talk-back can be heard out loud on a real browser/device.
- Spoken text matches the visible answer.
- Stop/disable works.
- Reminder create/display/dismiss works.
- Feedback link remains visible.

## Out of scope

- Speech-to-text.
- Wake word.
- Native voice.
- Flutter migration.
- FlutterFlow work.
- iOS or Android packaging.
- Closed-app push notifications.
- Backend/model contract changes.
- Firebase changes.
- UI redesign.
- Deploy, unless separately approved in a deploy sprint.

## Protection rules

- Do not touch Sprint 064 files.
- Do not touch Firebase, FlutterFlow, native/mobile packaging, credentials, deploy files, or CEO Briefing files.
- Do not stage, commit, push, or deploy unless separately instructed.
