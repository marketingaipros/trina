# Sprint 079 Acceptance - Louder Continuous Reminder Alarm

## Required Acceptance Criteria

- [x] `App.tsx` implements a reminder-specific alarm loop that continues while the due-reminder popup is active.
- [x] Reminder alarm no longer auto-stops after 30 seconds while the popup is still active.
- [x] Reminder alarm pattern is stronger and more noticeable than the Sprint 078 one-shot or 3-second beep loop.
- [x] Dismiss stops the alarm.
- [x] Snooze stops the alarm.
- [x] Component cleanup/unmount stops the alarm.
- [x] Starting a new reminder alarm stops any previous alarm loop first.
- [ ] Typed reminder setup still works.
- [ ] Reminder popup still appears.
- [x] `Test Alert Sound` still works as a single sound check or is clearly documented if behavior changes.
- [x] Mic behavior is untouched.
- [x] No FlutterFlow, native packaging, Firebase rules, credentials, CEO Briefing, or unrelated sprint files are changed.

## Required Validation

- [ ] `git status --branch --short` captured.
- [x] `git diff --check` passed.
- [x] `test ! -f references/flutterflow/sprint-009/ceo-briefing.png` passed.
- [x] `node ./node_modules/typescript/bin/tsc --noEmit` passed.
- [x] `node ./node_modules/vite/bin/vite.js build` passed.

## Local Implementation Evidence

- Runtime implementation changed `App.tsx` only.
- Added `playReminderAlarmBurst()` for due reminders.
- Kept `Test Alert Sound` on existing `playNotificationSound()` as a single sound check.
- Reminder alarm starts with the popup and repeats every `1250ms`.
- Removed the active reminder `30000ms` auto-stop timer.
- `startReminderAlarm()` stops any existing alarm before starting a new one.
- `handleDismissReminder()` calls `stopReminderAlarm()`.
- `handleSnoozeReminder()` calls `stopReminderAlarm()`.
- Cleanup/unmount still calls `stopReminderAlarm()`.
- Alarm should continue beyond 30 seconds while popup remains active.
- Dismiss should stop it.
- Snooze should stop it.
- Overlapping loops should be prevented.

Known baseline build warnings:

- Mixed static/dynamic import for `services/authService.ts`.
- Bundle chunk size over 500 kB.

## Real iPhone Installed-PWA UAT

Sprint 079 can be marked PASS only after real iPhone installed-PWA UAT confirms:

- [ ] Alarm is noticeable enough.
- [ ] Alarm continues until Dismiss or Snooze.
- [ ] Dismiss stops the sound.
- [ ] Snooze stops the sound, if Snooze is available.
- [ ] UAT result is recorded here.

## UAT Record

```text
Device:
Installed PWA or browser:
Target URL:
App opened from home-screen icon: yes/no
App kept open while waiting: yes/no
Phone on active call: yes/no
Volume on: yes/no
Silent mode off: yes/no
Test Alert Sound attempted: yes/no
Test Alert Sound heard: yes/no
Typed reminder phrase:
Typed reminder created: yes/no
Reminder popup appeared: yes/no
Alarm started when popup appeared: yes/no
Alarm continued beyond 30 seconds while popup remained active: yes/no
Dismiss stopped alarm: yes/no
Snooze stopped alarm: yes/no/not tested
Final result: PASS/HOLD
Notes:
```

## Current Result

```text
HOLD - implementation and local validation passed, but real iPhone installed-PWA UAT is still required.
```

## Status Rule

Do not mark Sprint 079 PASS without real iPhone installed-PWA UAT confirming the alarm is loud or noticeable enough, continuous until Dismiss/Snooze, and stops correctly.
