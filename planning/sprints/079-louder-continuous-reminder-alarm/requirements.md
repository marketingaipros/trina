# Sprint 079 Requirements - Louder Continuous Reminder Alarm

## Goal

Make due reminders harder to miss on the installed iPhone PWA by changing the current bounded reminder alarm into a louder, more persistent in-app alarm that continues until the user chooses Dismiss or Snooze.

## Background

Sprint 078 proved that the reminder sound path can fire, but real iPhone installed-PWA feedback showed the alert is still not loud enough. The alarm should keep calling attention to itself until the user acts.

## In Scope

- Keep the existing typed reminder setup flow working.
- Keep the reminder popup behavior working.
- Replace the Sprint 078 30-second auto-stop reminder alarm with a continuous alarm while the reminder popup is active.
- Stop the alarm only when the user taps Dismiss, taps Snooze, the active reminder is cleared, the component unmounts, or a new reminder alarm replaces the old one.
- Make the audible pattern more noticeable than Sprint 078.
- Prevent stacked or overlapping alarm loops.
- Keep `Test Alert Sound` available as a single test alert unless the existing UI clearly labels it as a reminder alarm test.
- Keep iPhone/PWA limitations honest.

## Out of Scope

- Mic behavior changes.
- Speech recognition changes.
- Barbie response voice changes.
- FlutterFlow changes.
- Native iOS or Android packaging.
- Firebase rules, Functions, hosting config, or credentials.
- Database, auth, complex notification system, or background push notification changes.
- Unrelated sprint files.
- Marking Sprint 079 PASS without real iPhone installed-PWA UAT.

## Required Product Behavior

When a due reminder appears:

1. The alarm starts immediately.
2. The alarm uses a stronger repeating pattern.
3. The alarm continues while the reminder popup remains active.
4. The alarm does not auto-stop after 30 seconds.
5. Dismiss stops the alarm.
6. Snooze stops the alarm.
7. Cleanup/unmount stops the alarm.
8. Starting a new alarm stops the old alarm first.

## Suggested Alarm Pattern

Use a simple Web Audio pattern such as:

- Repeat every 1000ms to 1500ms.
- Play a short burst of multiple tones each cycle.
- Use higher gain than Sprint 078 while avoiding clipping or distortion.
- Make the pattern clearly different from a single beep.

Example:

```text
BEEP-BEEP-BEEP pause
BEEP-BEEP-BEEP pause
continues until Dismiss or Snooze
```

The exact frequencies and timing should be chosen after inspecting the current `playNotificationSound()` implementation.
