# Project State

## Current Sprint

Sprint 068 - Customer Return-to-Use Blocker Fixes

## Current Status

`APPROVE - give current app back to client`

Sprint 067 proved the current deployed app can load, connect anonymously, answer typed questions through the backend/model path, create a reminder, and display an in-app due reminder.

Sprint 067 did not approve return-to-use because several client-facing blockers remain.

## Sprint 068 Goal

Fix or close only the blockers that prevent giving the current app back to the client for limited return-to-use.

Required blocker areas:

1. Official customer URL/path.
2. Deployed app version mismatch.
3. Owner-approved access/login posture.
4. Browser/native push proof or clear in-app-only reminder limitation.
5. Mic/voice permission proof or clear voice-not-ready limitation.
6. Feedback path.
7. First tester assignment.
8. Owner/go-live approval record.

## Recently Completed

- Sprint 067 customer return-to-use proof completed as HOLD.
- Typed question/backend/model path passed.
- Reminder creation passed.
- In-app due reminder behavior passed.
- Deployed app loads at Firebase Hosting URLs.

## Next Action

Use the deployed Firebase Hosting customer URL for limited return-to-use and keep follow-up items documented. Sprint 068 deployed the current build to Firebase Hosting, verified both Firebase Hosting URLs now serve the current bundle, and passed live smoke for app load, typed backend/model response, reminder creation, in-app due reminder, dismiss, and visible feedback path.

## Blockers

- Production auth posture remains a documented follow-up beyond limited return-to-use.
- Browser/native push notification behavior remains unproven and is follow-up; in-app reminders are accepted for Sprint 068.
- Voice/mic path remains blocked/unproven because notification/mic permission state was denied in the smoke profile; typed fallback is accepted for Sprint 068.

## Sprint 068 Implementation Results

**Final recommendation:** `APPROVE - give current app back to client`.

Evidence recorded on 2026-06-08:

- `https://barbie-92edc.web.app/` returned `HTTP/2 200` and loaded the current customer UI.
- `https://barbie-92edc.firebaseapp.com/` returned `HTTP/2 200` and loaded the same customer UI.
- Deployed asset bundle now matches the current local build: `assets/index-C76Bx-lr.js` and `assets/index-hG8MW9TT.css`.
- Typed question `What should I focus on today?` passed on deployed web app with visible non-mocked Barbie response and callable success logs.
- Reminder creation passed on deployed web app with `Got it. I’ll remind you in 1 minute.`
- In-app due reminder passed on deployed web app with visible `Reminder`, `check the door`, `Dismiss`, and `Snooze 5 minutes`.
- Dismiss passed; the visible in-app reminder cleared after clicking `Dismiss`.
- Voice/mic remains blocked by browser permission and is follow-up.
- Browser/native push remains unproven and is follow-up.
- Live deployed app includes visible feedback instruction: `Need to report a problem? Email feedback to learnandgrowcc@gmail.com.`
- Firebase Hosting deploy completed successfully for project `barbie-92edc`.
