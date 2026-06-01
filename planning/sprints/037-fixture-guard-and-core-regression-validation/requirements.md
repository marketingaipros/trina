# Sprint 037 Requirements — Fixture Guard and Core Regression Validation

## Purpose

Sprint 037 hardens the local validation fixture introduced in Sprint 036 and verifies the core app paths still behave correctly.

Sprint 036 added a local-only path for proving reminder-backed notification rendering:

- `?trinaReminderFixture=1`
- `?trinaStart=notifications`

Sprint 037 must confirm this path is safe, repeatable, documented, and does not regress Dashboard, Notifications, Assistant typed capture, Tasks rendering, bottom navigation, or mobile layout.

## Background

Sprint 036 closed the prior validation gap by making the populated reminder notification path testable in the browser.

The next risk is not feature completeness.

The next risk is validation drift:

- the fixture could become unclear to future builders
- the query parameters could be mistaken for production functionality
- the local proof path could break without being noticed
- core navigation and task flow could regress while the fixture still passes

## Scope

### In scope

- Confirm the reminder fixture is local/dev validation only.
- Confirm the fixture does not create production product behavior.
- Confirm the fixture path is documented in `docs/VALIDATION.md`.
- Confirm Dashboard badge count aligns with the Notifications list when the fixture is active.
- Confirm Notifications empty/fallback state still renders when the fixture is not active.
- Confirm `?trinaStart=notifications` still opens Notifications directly.
- Confirm Assistant typed task capture still creates a visible task.
- Confirm Tasks view still renders created tasks.
- Confirm bottom nav active state still works.
- Confirm mobile viewport around `390x844` has no fixed bottom-nav overlap.
- Update planning state to mark Sprint 037 as active and then ready for completion after validation.

### Out of scope

- CEO Briefing work.
- FlutterFlow CEO Briefing evidence.
- Backend work.
- Firebase work.
- Package or dependency changes.
- Native app changes.
- Build, release, or deployment work.
- Notification product expansion.
- Reminder scheduling engine work.
- Live data integration.
- Auth or permission work.
- New dashboard sections.

## Preferred Result

Prefer docs/validation/planning updates only if inspection shows the Sprint 036 fixture is already safe and clear.

Runtime changes are allowed only if Codex finds a concrete fixture safety issue or validation gap that cannot be closed with documentation.

## Runtime Change Standard

If runtime changes are needed, they must be narrow and limited to files directly involved in the Sprint 036 fixture or core validation path.

Do not refactor unrelated app code.

Do not redesign UI.

Do not add dependencies.

## Success Definition

Sprint 037 succeeds when a future Builder can read the project files and know:

1. Why the fixture exists.
2. How to run the fixture path.
3. Why the fixture is local validation only.
4. What core regression checks must pass around it.
5. That CEO Briefing and deferred areas remain untouched.
