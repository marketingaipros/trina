# PWA Install Notes - Sprint 074

## Sprint 079 Louder Continuous Reminder Alarm

Sprint 079 keeps the installed iPhone PWA reminder strategy focused on active in-app reminders while the app is open.

Implemented local behavior:

- A due reminder starts a stronger repeating alarm when the reminder popup appears.
- The alarm continues while the reminder popup remains active.
- The alarm does not auto-stop after 30 seconds while the popup is still active.
- Dismiss stops the alarm.
- Snooze stops the alarm.
- Starting a new reminder alarm stops any previous alarm first.
- `Test Alert Sound` remains a single test alert on the existing sound-check path.

Implementation evidence:

- Runtime implementation changed `App.tsx` only.
- Added `playReminderAlarmBurst()` for due reminders.
- Reminder alarm starts with the popup and repeats every `1250ms`.
- Removed the active reminder `30000ms` auto-stop timer.
- Cleanup/unmount still stops the reminder alarm.

Current result:

```text
HOLD - local implementation and validation passed, but real iPhone installed-PWA UAT is still required before Sprint 079 can be marked PASS.
```

Honest PWA limitation:

```text
Barbie can make the in-app reminder alarm louder and more persistent while the app is open, but iPhone volume, Silent Mode, phone-call audio routing, locked/background state, and iOS browser/PWA audio rules can still limit or block sound. Final approval requires real installed iPhone PWA testing.
```

## Reminder Alarm Behavior

The installed iPhone PWA uses an in-app audible alert attempt for reminders while the app is open and active.

The alarm is best-effort and browser-dependent. It is not guaranteed during active phone calls, silent mode, locked/background state, low volume, routed audio, or iOS/PWA restrictions.

For active reminders, the app should attempt a repeating audible alarm while the reminder popup is visible. The alarm must stop when the user taps Dismiss or Snooze.

The visual reminder popup remains the reliable MVP proof of reminder delivery.

## Sprint 077 Reminder Sound Limitations on iPhone PWA

Barbie reminders are designed for active in-app use.

Reminder sound works best when:

- The app is opened from the home-screen icon.
- The app remains open.
- Phone volume is on.
- Silent mode is off.
- The user is not on an active phone call.

Known limitations:

- iPhone may mute, lower, route, or block browser/PWA audio during active calls.
- Sound is not guaranteed while the phone is locked or the app is backgrounded.
- Silent mode, low volume, or selected audio route can make the alert hard to hear.
- Visual reminder popup is the reliable MVP confirmation.
- Use `Test Alert Sound` before relying on audible reminders.

Recommended client guidance:

```text
Barbie reminders work best when the app is open, phone volume is on, and silent mode is off. Sound may not play during phone calls, when the phone is locked, or when iPhone browser/PWA audio is restricted. Use Test Alert Sound before relying on audible reminders.
```

## Sprint 076 iPhone Mic + Audible Reminder Alert Notes

Sprint 076 keeps typed reminders as the reliable test path while checking two phone-specific issues:

- Mic does not always pick up requests in the installed phone app.
- Reminder alert needs sound when it goes off.

For Sprint 076 reminder tests, keep the app open while waiting for the reminder.

Record:

```text
Device:
Installed PWA or browser:
Target URL:
App kept open while waiting: yes/no
Typed reminder phrase:
Typed reminder created: yes/no
Due reminder appeared: yes/no
Reminder sound heard: yes/no
Dismiss cleared reminder: yes/no
Mic test phrase:
Mic captured speech: yes/no/intermittent
Exact mic message/error:
```

Current source inspection shows the app already attempts a short Web Audio notification sound when an in-app reminder becomes due. Real iPhone installed-PWA UAT is required because iPhone may block sound until the user has interacted with the app.

## Current Install Surface

The current Barbie web app includes PWA install metadata:

- `/manifest.webmanifest`
- `/pwa-icon-192.png`
- `/pwa-icon-512.png`
- `/pwa-icon.svg`
- `/pwa-maskable-icon.svg`

No service worker is installed in Sprint 074. This is intentional so the app does not cache stale Barbie answers or stale reminders.

## iPhone Safari

1. Open the approved Barbie URL in Safari.
2. Tap Share.
3. Tap Add to Home Screen.
4. Confirm the name `Barbie`.
5. Launch Barbie from the new home-screen icon.

## Android Chrome

1. Open the approved Barbie URL in Chrome.
2. Use the install prompt if Chrome shows one, or open the browser menu.
3. Tap Install app or Add to Home screen.
4. Confirm the name `Barbie`.
5. Launch Barbie from the new home-screen icon.

## Required UAT After Install

Record:

```text
Target URL installed from:
Target phone/browser:
Manifest reachable: yes/no
Icons reachable: yes/no
Install/add-to-home-screen completed: yes/no
Home-screen launch opened Barbie app: yes/no
Typed Q&A works after installed launch: yes/no
Audible Play works after installed launch: yes/no
Spoken text matches visible answer: yes/no
Stop/cancel works or speech ends cleanly: yes/no
Reminder create/appear/dismiss works: yes/no
Final result: PASS/HOLD
Notes:
```

## Sprint 075 Installed-Mode Reminder and Mic UAT

Sprint 074 real phone UAT found that installed launch, typed Q&A, visible answer, audible Play, spoken-text match, and Stop worked, but reminder appear/dismiss failed and mic reliability was intermittent.

## Sprint 075 Closeout UAT Evidence

Final status:

```text
PASS - installed PWA mic reminder UAT passed.
```

Real-phone installed PWA evidence:

```text
Typed reminder works.
Typed reminder sets correctly.
Mic worked after Hosting redeploy.
Spoken reminder was captured.
Reminder was booked.
Reminder went off.
Reminder was dismissed successfully.
Typed reminder flow already worked.
```

Conclusion:

- Installed PWA mic reminder UAT passed.
- Typed reminders work.
- Mic reminders work after Hosting redeploy.
- Reminder appear/dismiss works.
- Play/Stop remains protected by previous validation.
- Sprint 075 is complete and ready for commit.

Before Sprint 075 implementation, capture the exact failure using these phrases where possible:

```text
Remind me in 2 minutes to check the oven.
Set a reminder in 3 minutes to call Melissa.
Set a timer for 1 minute.
In 2 minutes, remind me to drink water.
```

Record whether each request was typed or spoken, whether Barbie created a reminder or only explained how to phrase it, whether the due reminder appeared, whether Dismiss cleared it, and what the mic state showed after failure or retry.

## Sprint 075 Second Real Phone UAT Evidence

Second installed-phone mic reminder test:

```text
Typed reminder worked.
Reminder appeared and dismissed correctly.
Mic reminder produced the same incorrect response.
Screenshot evidence again shows Barbie saying:
I can save that reminder for "in two minutes to check the oven". Please include a time like "in 2 minutes", "in 1 hour", "today at 3pm", or "tomorrow at 10am".
```

Conclusion:

- Reminder engine is working.
- Typed reminder flow is working.
- Installed PWA shell is working.
- The defect is in mic-transcribed reminder handling, likely parser normalization or route mismatch between mic transcript and typed Send flow.
- Sprint 074 remains `HOLD`.
- Sprint 075 should focus on mic reminder parsing/reliability.

## Sprint 075 Latest Real Phone UAT Evidence

Latest installed-phone test after Sprint 075 Hosting deploy:

```text
Typed reminder works.
Typed reminder sets correctly.
Reminder appears when due.
Dismiss works.
Installed PWA shows Recognition error: audio-capture when using mic.
User said mic phrase: in two minutes check the oven.
Mic reminder was not created.
Screenshot evidence shows the active error is microphone capture, not reminder parsing.
```

Conclusion:

- Typed reminder engine is working.
- The remaining blocker is installed-phone microphone capture returning `audio-capture`.
- Speech recognition is failing before usable transcript routing.
- Sprint 075 remains `HOLD` until installed-phone mic capture or an acceptable fallback path passes UAT.
