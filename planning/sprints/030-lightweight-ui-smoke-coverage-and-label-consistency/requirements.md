# Sprint 030 Requirements

## Sprint Name

`030-lightweight-ui-smoke-coverage-and-label-consistency`

## Goal

Add lightweight repeatable confidence around Trina's core app shell after Sprint 029 by validating navigation, Assistant capture, label consistency, and speech capture behavior without expanding scope or returning to CEO Briefing.

## Why This Matters

Sprint 029 improved the user-facing app shell. Sprint 030 should make that work safer to continue building on.

The project needs a simple way to confirm:

- navigation still reaches the right places
- typed Assistant capture still creates visible tasks
- empty/fallback states are still useful
- Knowledge Base naming is consistent
- speech capture is either live-tested or clearly documented as permission-limited
- CEO Briefing remains deferred and untouched

## In Scope

- Inspect current app/test setup.
- Add lightweight smoke validation using existing tooling if available.
- If no suitable tooling exists, add a simple documented manual smoke checklist instead of a heavy framework.
- Align user-facing labels around:
  - `Knowledge Base` as the full feature name
  - `Knowledge` as compact nav label only if needed
  - avoid `Context` for this feature unless future scope changes it
- Verify typed Assistant capture to Tasks.
- Verify captured tasks remain visible.
- Verify Dashboard/Home and bottom navigation reachability.
- Verify Assistant / Voice Entry reachability from Dashboard.
- Verify or preserve speech capture path.
- Update `planning/STATE.md` and `docs/VALIDATION.md` after implementation.

## Out of Scope

- CEO Briefing work.
- CEO Briefing screenshots or evidence.
- FlutterFlow work.
- Backend work.
- Firebase work.
- Hermes work.
- Auth work.
- Database work.
- Package/dependency churn unless already justified by existing tooling.
- Native/build/release/deployment work.
- Full E2E testing suite.
- New product features.
- New dashboard modules.
- CRM, invoicing, or multi-user permission work.

## Protected Files / Areas

Do not create or modify:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Do not make changes under backend, Firebase, Hermes, native, release, deployment, or package configuration areas.

## Success Standard

Sprint 030 is successful when the project has a repeatable lightweight validation path for the core app shell, naming is consistent, typed capture still works, speech capture is either live-tested or explicitly preserved with permission limitation documented, and CEO Briefing remains untouched.
