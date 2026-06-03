# Sprint 047 Requirements - Home Typed Action Row Responsive Spacing

## Goal

Inspect and polish the Home typed input/action row for narrow mobile spacing, wrapping, and input usability after Sprint 046 raised the typed `Capture` and `Send` buttons to the `44px` mobile touch-target baseline.

This is not a redesign sprint.

## Background

Sprint 046 completed a tightly scoped change in `components/VoiceDashboard.tsx` that added `min-h-11` to the Home typed `Capture` and `Send` buttons.

Sprint 047 continues the same mobile polish sequence by validating whether the taller buttons cause crowding, overflow, awkward wrapping, or a visually crushed typed input at narrow mobile widths.

## In Scope

- Inspect the Home typed input/action row at mobile width.
- Confirm the row owner and styling before editing runtime code.
- Preserve Sprint 046 `44px` minimum button height.
- Improve row stability if the input and two buttons crowd, overflow, or wrap poorly.
- Preserve typed input usability at `390x844` and one narrower width if practical.
- Keep any later runtime change small and local.
- Smoke Dashboard/Home, Tasks, Calendar, Finance, Knowledge Base, and Notifications/reminders after implementation.

## Out of Scope

- Home redesign.
- Label changes.
- Handler changes.
- Typed input behavior changes.
- Disabled/loading behavior changes.
- Color direction changes.
- Bottom nav redesign.
- Dashboard layout rewrite.
- Broad shared button style changes unless proven necessary and explicitly documented.
- New dependencies.
- CEO Briefing work.

## Protected Files / Guards

Do not touch CEO Briefing files.

This file must remain absent:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```
