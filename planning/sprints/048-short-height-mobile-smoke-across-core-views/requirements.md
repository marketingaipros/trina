# Sprint 048 Requirements - Short-Height Mobile Smoke Across Core Views

## Goal

Inspect and, only if needed, narrowly polish short-height mobile layout behavior across core non-Home views.

## Background

Sprint 047 found that Home was clear at `390x844` but overlapped the fixed bottom nav at `360x740`. Sprint 048 extends that validation pattern to other core views.

## In Scope

- Tasks
- Calendar
- Finance
- Knowledge Base
- Notifications/reminders if reachable
- Bottom nav interaction with those views

## Viewports

- `390x844`
- `360x740`

## Checks

- No horizontal overflow
- No primary input or action hidden behind bottom nav
- Usable scrolling on short-height screens
- Existing touch target hardening is preserved
- No unrelated visual redesign

## Out of Scope

- New features
- Backend/Firebase/native/package/release changes
- CEO Briefing changes
- Broad app shell rewrite
- Navigation redesign

## Guardrails

- Do not modify CEO Briefing files.
- Do not recreate `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not stage, commit, or push without approval.
