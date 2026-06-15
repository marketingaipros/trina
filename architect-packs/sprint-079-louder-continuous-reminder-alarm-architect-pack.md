# Sprint 079 Architect Pack — Louder Continuous Reminder Alarm

**Project:** TrinaOS Voice / Barbie PWA
**Sprint:** 079
**Sprint name:** louder-continuous-reminder-alarm
**Created:** 2026-06-14
**Architect Layer:** ChatGPT
**Builder Layer:** Codex
**Status:** Architect Pack ready for planning/docs application

---

## CEO / UAT Feedback Source

Real iPhone installed-PWA UAT feedback after Sprint 078:

> The alarm went off, but it was not loud enough. It needs to repeat or be louder. The focus should be making it louder and continuous until the person hits Dismiss or Snooze.

Sprint 078 proved that the reminder sound path can fire, but the alert is still too easy to miss. Sprint 079 should strengthen the alarm pattern and remove the 30-second auto-stop behavior for active reminders.

---

# Files This Architect Pack Should Create or Update

## Planning / State

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`, only if the Builder discovers unresolved implementation ambiguity

## Docs

- `docs/VALIDATION.md`
- `docs/PWA.md`

## Sprint Folder

Create:

```text
planning/sprints/079-louder-continuous-reminder-alarm/
├── requirements.md
├── blueprint.md
├── acceptance.md
└── handoff-prompt.md
```

## Runtime Files Expected During Implementation

Expected runtime file:

- `App.tsx`

Possible only if direct blocker is found:

- `components/Dashboard.tsx`
- `components/VoiceDashboard.tsx`
- `src/lib/reminderNotifications.js`

The Builder must stop and explain before editing any possible file outside `App.tsx`.

---

# Architect-Facing Requirements

## Business Goal

Make due reminders harder to miss on the installed iPhone PWA by changing the current bounded reminder alarm into a louder, more persistent in-app alarm that continues until the user chooses Dismiss or Snooze.

## User Problem

The current reminder alert fires, but it is still not noticeable enough. The client hears a short or weak alert, then it stops or fades from attention. A reminder alarm should keep calling attention to itself until the user acts.

## Scope

Sprint 079 must:

1. Keep the existing typed reminder setup flow working.
2. Keep the reminder popup behavior working.
3. Replace the Sprint 078 30-second auto-stop reminder alarm with a continuous alarm while the reminder popup is active.
4. Stop the alarm only when:
   - the user taps Dismiss
   - the user taps Snooze
   - the active reminder is cleared
   - the component unmounts
   - a new reminder alarm replaces the old one
5. Make the audible pattern more noticeable than Sprint 078.
6. Prevent stacked or overlapping alarm loops.
7. Keep `Test Alert Sound` available as a single test alert unless the existing UI clearly labels it as a reminder alarm test.
8. Keep iPhone/PWA limitations honest: the app can improve pattern, duration, frequency, and Web Audio gain, but it cannot override iPhone physical volume, Silent Mode, active phone call audio routing, or iOS browser/PWA autoplay rules.

## Out of Scope

Do not:

- Change mic behavior.
- Change speech recognition.
- Change Barbie response voice.
- Touch FlutterFlow.
- Touch native iOS or Android packaging.
- Touch Firebase rules, Functions, hosting config, or credentials.
- Add a database.
- Add auth.
- Add a complex notification system.
- Add background push notifications.
- Change unrelated sprint files.
- Mark Sprint 079 PASS without real iPhone installed-PWA UAT.

## Required Product Behavior

When a due reminder appears:

- The alarm should start immediately.
- The alarm should use a stronger repeating pattern.
- The alarm should continue while the reminder popup remains active.
- The alarm should not auto-stop after 30 seconds.
- The alarm should stop when Dismiss is tapped.
- The alarm should stop when Snooze is tapped.
- The alarm should stop during cleanup/unmount.
- Starting a new alarm should stop the old alarm first.

## Suggested Alarm Pattern

The Builder may implement a simple Web Audio pattern such as:

- Repeat cycle every 1000ms to 1500ms.
- Each cycle plays a short burst of multiple tones.
- Use a higher gain than Sprint 078, while avoiding clipping or distortion.
- Use a pattern that is clearly different from a single beep.
- Keep the function small and maintainable.

Example behavior description:

```text
BEEP-BEEP-BEEP pause
BEEP-BEEP-BEEP pause
continues until Dismiss or Snooze
```

The exact frequencies and timing may be chosen by the Builder after inspecting the current `playNotificationSound()` implementation.

---

# Builder-Facing Implementation Plan

## Step 1 — Read First

Read:

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

## Step 2 — Summarize Before Implementation

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

## Step 3 — Implement Only After Approval

Expected implementation location:

- `App.tsx`

Implementation expectations:

1. Preserve the existing `playNotificationSound()` if it is still useful for `Test Alert Sound`.
2. Add or revise reminder-specific alarm functions, likely:
   - `startReminderAlarm()`
   - `stopReminderAlarm()`
   - `playReminderAlarmBurst()` or similar
3. Remove or bypass the Sprint 078 30-second auto-stop behavior for due reminders.
4. Ensure the alarm loop is controlled by refs.
5. Ensure `startReminderAlarm()` stops any existing alarm before starting a new one.
6. Ensure Dismiss calls `stopReminderAlarm()`.
7. Ensure Snooze calls `stopReminderAlarm()`.
8. Ensure cleanup/unmount calls `stopReminderAlarm()`.
9. Keep timer cleanup safe.
10. Keep unsupported vibration non-fatal.

## Step 4 — Validation

Run:

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

## Step 5 — Documentation Update

After implementation evidence exists, update:

- `planning/STATE.md`
- `docs/VALIDATION.md`
- `docs/PWA.md`
- `planning/sprints/079-louder-continuous-reminder-alarm/acceptance.md`

Do not mark Sprint 079 PASS until real iPhone installed-PWA UAT confirms the alarm is loud/noticeable enough and stops correctly.

---

# Acceptance Criteria

Sprint 079 can be considered code-complete when:

1. `App.tsx` implements a reminder-specific alarm loop that continues while the due-reminder popup is active.
2. The reminder alarm no longer auto-stops after 30 seconds while the popup is still active.
3. The reminder alarm pattern is stronger and more noticeable than the Sprint 078 one-shot or 3-second beep loop.
4. Dismiss stops the alarm.
5. Snooze stops the alarm.
6. Component cleanup/unmount stops the alarm.
7. Starting a new reminder alarm stops any previous alarm loop first.
8. Typed reminder setup still works.
9. Reminder popup still appears.
10. `Test Alert Sound` still works as a single sound check or is clearly documented if behavior changes.
11. Mic behavior is untouched.
12. No FlutterFlow, native packaging, Firebase rules, credentials, CEO Briefing, or unrelated sprint files are changed.
13. Validation commands pass:
    - `git diff --check`
    - `test ! -f references/flutterflow/sprint-009/ceo-briefing.png`
    - `node ./node_modules/typescript/bin/tsc --noEmit`
    - `node ./node_modules/vite/bin/vite.js build`

Sprint 079 can be marked PASS only after:

1. Real iPhone installed-PWA UAT confirms the alarm is noticeable enough.
2. Real iPhone installed-PWA UAT confirms the alarm continues until Dismiss or Snooze.
3. Real iPhone installed-PWA UAT confirms Dismiss stops the sound.
4. Real iPhone installed-PWA UAT confirms Snooze stops the sound, if Snooze is available.
5. UAT result is recorded in `planning/sprints/079-louder-continuous-reminder-alarm/acceptance.md`.

If the alarm is still not loud enough after Sprint 079, the next sprint should evaluate whether the PWA approach is sufficient or whether a native wrapper / push notification / iOS-specific install strategy is needed.

---

# Decisions To Record

Add to `planning/DECISIONS.md` if not already present:

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-06-14 | Reminder alarm must continue until Dismiss or Snooze while the reminder popup is active. | Real iPhone UAT showed the bounded alert was still too easy to miss. | Sprint 079 removes the 30-second auto-stop for active reminders and makes the alarm pattern more persistent. |
| 2026-06-14 | PWA alarm loudness is limited by iPhone system settings and browser/PWA audio rules. | Web apps cannot override physical volume, Silent Mode, phone-call audio routing, or iOS autoplay limits. | The app can improve alarm pattern and gain, but final validation must happen on the real installed iPhone PWA. |

---

# Risks To Record

Add or update in `planning/RISKS.md`:

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| iPhone PWA audio may remain too quiet or constrained by system settings. | Medium | High | Use a stronger continuous Web Audio pattern and validate on real installed iPhone PWA. | Active |
| Continuous alarm loop could become annoying if it does not stop correctly. | Medium | High | Stop on Dismiss, Snooze, active reminder clear, cleanup/unmount, and before starting a new loop. | Active |
| Alarm loop could stack if multiple reminders trigger. | Medium | High | `startReminderAlarm()` must stop any existing loop before starting a new one. | Active |

---

# Questions

No open product question blocks Sprint 079.

Implementation question for Builder to answer during read-first summary:

- Does the current `App.tsx` structure make it safer to preserve `playNotificationSound()` for test sound and add a new reminder-only burst function, or should `playNotificationSound()` be parameterized?

---

# Codex Handoff Prompt

Use this prompt only after the Sprint 079 planning files have been created or updated in the project folder.

```text
Sprint 079 planning files are ready.

Read these files before making changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- docs/PWA.md
- planning/sprints/079-louder-continuous-reminder-alarm/requirements.md
- planning/sprints/079-louder-continuous-reminder-alarm/blueprint.md
- planning/sprints/079-louder-continuous-reminder-alarm/acceptance.md
- planning/sprints/079-louder-continuous-reminder-alarm/handoff-prompt.md

Then inspect:

- App.tsx

Do not modify files yet.

Summarize:

1. What Sprint 079 is supposed to accomplish.
2. Which files you expect to modify.
3. The exact alarm behavior you plan to implement.
4. How you will make the alarm louder or more noticeable.
5. How you will make it continuous until Dismiss or Snooze.
6. How you will prevent stacked or overlapping loops.
7. What validation commands you will run.
8. Any blockers or ambiguities.

Do not start implementation until I approve your summary.
```

---

# Operator Note

This sprint should stay focused on the alarm.

Do not let Codex expand this into notification permissions, native packaging, push notifications, background execution, Firebase changes, or mic repair. Those are separate sprint decisions if needed.
