# Sprint 069 Requirements - Client UAT Feedback Loop

## Purpose

Sprint 069 moves the restored Barbie web app from internal validation to limited client UAT.

Sprint 068 approved the current web app for limited return-to-use. The client can now use the live web app while remaining follow-up work is planned separately.

## Approved Customer URL

https://barbie-92edc.web.app/

## User Story

As the project owner, I want the client to test the current Barbie app in real use so we can confirm what works, collect feedback, and decide the next sprint based on actual client experience instead of assumptions.

## In Scope

- Record Sprint 069 as active client UAT.
- Document what the client can use now.
- Document what is not part of the current approval.
- Create a simple UAT checklist.
- Create a simple feedback intake format.
- Track client-reported issues as follow-up candidates.
- Preserve the approved Sprint 068 status.

## Out of Scope

- Runtime/source changes
- Voice input fixes
- Text-to-speech/talk-back restoration
- Browser/native push implementation
- Flutter/FlutterFlow migration
- iPhone/native app packaging
- Auth changes
- Firebase settings changes
- Firestore rules changes
- Cloud Functions changes
- UI redesign
- Production SaaS hardening

## Client Can Use Now

- Open the live web app.
- Ask typed questions.
- Receive Barbie/model answers.
- Create in-app reminders.
- See due reminders while in the app.
- Dismiss reminders.
- Use feedback email link.

## Known Follow-Ups

- Voice/mic reliability
- Barbie speaking answers out loud
- Browser/native push behavior
- Mobile install/iPhone packaging
- Flutter/FlutterFlow direction

## Required Outcome

Sprint 069 must end with one of:

- `PASS - client UAT started and feedback loop established`
- `HOLD - client UAT blocked`
