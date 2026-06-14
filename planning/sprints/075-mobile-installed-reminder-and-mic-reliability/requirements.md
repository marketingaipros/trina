# Sprint 075 Requirements - Mobile Installed Reminder + Mic Reliability Fix

## Sprint Goal

Fix the installed mobile PWA experience so Barbie reliably handles reminder requests and microphone input after launch from the home-screen icon.

This sprint must preserve the working Sprint 073 and Sprint 074 behavior:

- Installed app opens from home-screen icon.
- Typed Q&A works.
- Visible answer appears.
- Play speaks audibly.
- Spoken text matches visible answer.
- Stop ends speech cleanly.
- Reminder create/appear/dismiss works.
- No service worker caching is added unless strictly required.
- No rebuild into FlutterFlow or native packaging.

## Business Goal

The client should be able to use Barbie from the phone home screen like a lightweight mobile app.

The app must feel practical, not confusing. When the user says or types a reminder request, Barbie should set the reminder when enough information exists. Barbie should not default to teaching the user how to phrase reminders.

## UAT Failure Being Fixed

Real phone UAT after Sprint 074:

```text
Opened from home-screen icon: yes
Typed question: pass
Visible answer appeared: pass
Play made Barbie speak: pass
Spoken text matched answer: pass
Stop worked: pass
Reminder appeared and dismissed: fail
Mic is working sometimes and sometimes not.
Requesting a reminder caused Barbie to explain wording instead of setting the timer/reminder.
```

## In Scope

- Improve reminder intent detection for typed and spoken inputs.
- Ensure reminder creation works from installed PWA mode.
- Ensure due reminder appears and can be dismissed in installed mode.
- Improve microphone start/listen/retry behavior on mobile browsers where possible.
- Add clear UI feedback when mic permission, browser support, or recognition startup fails.
- Preserve typed fallback so the app remains usable even when microphone recognition is unreliable.
- Update validation docs with real phone UAT requirements.

## Out of Scope

- No Firebase settings changes.
- No Firestore rules changes.
- No Cloud Functions changes unless existing source inspection proves reminders depend on an already-planned deployed function path.
- No FlutterFlow work.
- No iOS/Android native packaging.
- No app rebuild.
- No new database.
- No service worker/offline caching unless strictly required and approved.
- No credentials or secrets changes.
- No Sprint 064 or Sprint 072 file edits.
- No CEO Briefing work.

## Reminder Intent Requirements

Barbie should recognize practical reminder phrases such as:

```text
Remind me in 5 minutes to check the oven.
Set a reminder in 10 minutes to call Melissa.
Remind me tomorrow at 9 AM to send the invoice.
Set a timer for 3 minutes.
In 15 minutes, remind me to take a break.
```

Expected behavior:

- If the reminder request includes time and task, create the reminder.
- If the request includes time but no task, ask what the reminder should say.
- If the request includes task but no time, ask when to remind the user.
- If the request is too vague, ask one focused follow-up question.
- Do not respond with only instructions like "say: remind me in 10 minutes..."
- Do not create fake reminders if required fields are missing.

## Mic Requirements

The microphone experience should:

- Work when the browser supports speech recognition.
- Request mic permission only as needed.
- Give clear feedback when listening starts.
- Give clear feedback if listening fails, times out, or permission is blocked.
- Allow the user to retry.
- Keep typed input as the reliable fallback.
- Not block Play/Stop speech controls.

## Acceptance Summary

Sprint 075 can pass only when real phone UAT confirms:

- Home-screen app launches.
- Typed reminder request creates a reminder.
- Spoken reminder request creates a reminder where speech recognition works.
- Reminder appears when due.
- Reminder dismisses cleanly.
- Mic behavior is either reliable or gives clear fallback/error feedback.
- Existing Q&A, Play, spoken-text match, Stop, and visible answer behavior still pass.
