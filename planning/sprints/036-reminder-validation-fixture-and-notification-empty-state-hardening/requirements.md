# Sprint 036 Requirements - Reminder Validation Fixture and Notification Empty-State Hardening

## Goal

Close the remaining Sprint 035 validation gap by proving the populated reminder-backed notification path in a repeatable local browser workflow.

Sprint 035 confirmed the notification/reminder flow by inspection and browser checks, but no live pending Firestore reminder existed in the local browser session. Sprint 036 should make this validation repeatable without expanding the product or touching backend systems.

## User / Operator Value

The operator needs confidence that Notifications can display real reminder-backed items, not only empty states or code-inspected paths.

Future builders need a clear validation path so they do not guess, overbuild, or introduce backend changes just to test notification UI behavior.

## Requirements

1. Inspect existing reminder/notification wiring before changing runtime code.
2. Determine whether populated reminder-backed notifications can be produced through existing local app behavior.
3. If existing behavior is enough, document the exact local validation path and avoid runtime changes.
4. If existing behavior is not enough, implement the smallest safe local-only fixture/helper needed to validate populated reminder rendering.
5. Keep Dashboard notification count and Notifications rendering aligned to the same source of truth.
6. Preserve Assistant typed task capture into visible Tasks.
7. Preserve Notifications empty/fallback copy.
8. Preserve mobile layout with fixed bottom navigation at about `390x844`.
9. Preserve bottom nav active state.
10. Avoid all out-of-scope systems.

## Non-Goals

- Do not build a new notification system.
- Do not add push notifications.
- Do not add email or SMS notification delivery.
- Do not create a scheduler.
- Do not modify Firebase rules or backend behavior.
- Do not add packages.
- Do not change native, build, release, or deployment files.
- Do not touch CEO Briefing.
- Do not create or modify `references/flutterflow/sprint-009/ceo-briefing.png`.

## Runtime Change Policy

Runtime changes are allowed only if inspection proves there is no existing repeatable way to validate populated reminder-backed notification rendering.

A no-runtime-change result is acceptable if Codex can document and demonstrate a repeatable browser validation path.
