# Sprint 074 Requirements - PWA Mobile Install Wrapper

## Goal

Make the current working Barbie web app installable on the client's phone as a PWA/home-screen app.

## Business Reason

The client needs a fast path to use the working Barbie app from her phone without waiting for Flutter, native packaging, App Store approval, or Play Store approval.

## Current Working Baseline

Sprint 073 is PASS.

Confirmed:

- Typed Q&A works.
- Visible Barbie answer appears.
- Barbie speaks audibly.
- Spoken text matches visible answer.
- Stop/cancel works or speech ends cleanly.
- Reminder create/appear/dismiss works.

## Required Outcome

The user should be able to open the web app on a phone and add/install it to the home screen.

When launched from the home-screen icon, the app should behave like the same working Barbie web app.

## In Scope

- PWA manifest.
- App name and short name.
- App icons / install icons.
- Theme/background metadata.
- Mobile install metadata.
- Apple touch icon / mobile web app metadata if needed.
- Conservative service worker only if safe and necessary.
- Mobile layout smoke checks.
- PWA install instructions for iPhone and Android.
- Installed-PWA UAT checklist.

## Out of Scope

- Flutter.
- FlutterFlow.
- Native iOS build.
- Native Android build.
- App Store submission.
- Play Store submission.
- New dashboard redesign.
- Authentication changes.
- Firebase settings changes.
- Cloud Functions changes.
- Firestore rules changes.
- Reminder backend redesign.
- Push notification rebuild.
- CEO Briefing work.
- Sprint 064 or Sprint 072 cleanup.

## Non-Negotiables

- Do not break Sprint 073 behavior.
- Do not introduce stale answer speech.
- Do not auto-speak new answers.
- Play must speak the final visible answer only.
- Stop must work or speech must end cleanly.
- Reminder flow must still work.
- Keep scope boring and local to PWA/install support.
