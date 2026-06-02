# Sprint 046 Requirements — Home Typed Action Touch Target Polish

## Goal

Bring the remaining Home typed `Capture` and `Send` buttons to the mobile `44px` minimum touch target baseline without redesigning the Home surface.

## Background

Sprint 045 polished secondary header/back/AI controls and documented that the Home typed `Capture` and `Send` buttons still measured approximately `40px` tall. They were intentionally left unchanged because they were outside Sprint 045 scope.

Sprint 046 addresses that documented follow-up.

## In Scope

- Inspect the Home typed input/action area.
- Identify the component and styles that own the typed `Capture` and `Send` buttons.
- Increase both buttons to a minimum `44px` touch target where safe.
- Preserve labels, handlers, state behavior, input behavior, disabled/loading behavior, and visual direction.
- Validate Home at `390x844`.
- Smoke key app surfaces for regression.

## Out of Scope

- Home redesign.
- Input workflow changes.
- Capture/Send logic changes.
- New features.
- New dependencies.
- Bottom nav changes.
- CEO Briefing changes.

## Protected Files / Guards

Do not touch CEO Briefing files.

This file must remain absent:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```
