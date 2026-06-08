# Sprint 070 Requirements - Voice Talk-Back Restore

## Goal

Restore or prove browser talk-back response so Barbie can speak answers out loud after responding, without breaking the currently working typed Q&A and reminder flow.

## Background

Sprint 069 closed as PASS with client/UAT evidence:

```text
All on the list is working.
```

The current deployed web app is usable for the basic client flow:

- Open app.
- Type question.
- Get Barbie/model answer.
- Create in-app reminder.
- See reminder in app.
- Dismiss reminder.
- Use feedback loop.

The missing experience item is voice talk-back.

## User Need

The client wants the app to feel like Barbie can talk back again.

For this sprint, talk-back means:

- The user types a message.
- Barbie/model returns a visible answer.
- The app can speak that answer out loud through the browser.

It does not mean:

- Speech-to-text input.
- Wake word.
- Full phone-style voice conversation.
- Native iOS/Android voice features.
- Closed-app notification audio.
- FlutterFlow implementation.

## In Scope

- Inspect current app source for existing talk-back/voice/speech synthesis code.
- Determine whether talk-back is missing, disabled, hidden, or broken.
- Restore the smallest safe talk-back behavior in the current web app if needed and explicitly approved.
- Add or preserve a user-controlled voice enable/disable behavior.
- Ensure only visible Barbie/model answers are spoken.
- Validate that typed Q&A still works.
- Validate that in-app reminders still work.
- Validate that reminder dismiss still works.
- Update docs/planning with evidence and limitations.

## Out of Scope

- FlutterFlow migration.
- Native mobile packaging.
- iOS build.
- Android build.
- Closed-app push notifications.
- Speech-to-text input.
- Wake word.
- New paid TTS provider.
- Credential changes.
- Firebase deploy.
- Production deploy unless separately approved.
- Any work on Sprint 064 untracked files.

## Success Definition

Sprint 070 succeeds when:

- Talk-back can speak a visible Barbie/model answer in at least one approved browser/device.
- User can disable or stop talk-back.
- Typed Q&A still works.
- In-app reminders still work.
- Reminder dismiss still works.
- No hidden/internal text is spoken.
- Validation evidence is recorded.
