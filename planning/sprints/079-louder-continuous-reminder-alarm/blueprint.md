# Sprint 079 Blueprint - Louder Continuous Reminder Alarm

## Read-First Gate

Read these files before changing code:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `docs/PWA.md`
- `planning/sprints/079-louder-continuous-reminder-alarm/requirements.md`
- `planning/sprints/079-louder-continuous-reminder-alarm/blueprint.md`
- `planning/sprints/079-louder-continuous-reminder-alarm/acceptance.md`

Then inspect:

- `App.tsx`

Do not modify files during the read-first step.

## Summary Required Before Implementation

Before changing code, report:

1. What Sprint 079 is supposed to accomplish.
2. Which files you expect to modify.
3. The exact alarm behavior you plan to implement.
4. How you will make the alarm more noticeable.
5. How you will ensure the alarm continues until Dismiss/Snooze.
6. How you will prevent stacked loops.
7. What tests or validation commands you will run.
8. Any blockers or ambiguities.

Do not implement until approved.

## Expected Runtime File

Expected implementation location:

- `App.tsx`

Possible only if a direct blocker is found:

- `components/Dashboard.tsx`
- `components/VoiceDashboard.tsx`
- `src/lib/reminderNotifications.js`

Stop and explain before editing any possible file outside `App.tsx`.

## Implementation Expectations

- Preserve the existing `playNotificationSound()` if it remains useful for `Test Alert Sound`.
- Add or revise reminder-specific alarm functions, likely `startReminderAlarm()`, `stopReminderAlarm()`, and `playReminderAlarmBurst()` or similar.
- Remove or bypass the Sprint 078 30-second auto-stop behavior for due reminders.
- Control the alarm loop with refs.
- Ensure `startReminderAlarm()` stops any existing alarm before starting a new one.
- Ensure Dismiss calls `stopReminderAlarm()`.
- Ensure Snooze calls `stopReminderAlarm()`.
- Ensure cleanup/unmount calls `stopReminderAlarm()`.
- Keep timer cleanup safe.
- Keep unsupported vibration non-fatal.

## Validation

Run after approved implementation:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
node ./node_modules/typescript/bin/tsc --noEmit
node ./node_modules/vite/bin/vite.js build
```

Functional checks to report:

- Typed reminder still sets.
- Reminder popup still appears.
- Alarm starts when popup appears.
- Alarm continues beyond 30 seconds while popup remains active.
- Alarm stops on Dismiss.
- Alarm stops on Snooze.
- Alarm does not stack if another alarm starts.
- `Test Alert Sound` still works.
- Mic behavior was not changed.

## Documentation After Implementation

After implementation evidence exists, update:

- `planning/STATE.md`
- `docs/VALIDATION.md`
- `docs/PWA.md`
- `planning/sprints/079-louder-continuous-reminder-alarm/acceptance.md`

Do not mark Sprint 079 PASS until real iPhone installed-PWA UAT confirms the alarm is loud or noticeable enough and stops correctly.
