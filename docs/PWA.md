# PWA Install Notes - Sprint 074

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
