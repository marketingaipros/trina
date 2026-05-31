# Sprint 027 Requirements - Core App Completion Polish and Navigation Hardening

## Goal

Polish the current local Vite React app shell so the prototype feels complete around the already-working Sprint 026 Assistant capture path.

Sprint 027 should not add new systems. It should remove obvious dead ends, preserve Assistant capture behavior, tighten navigation, improve empty states, and keep browser capability fallbacks clear.

## Current Context

Sprint 026 made this core path usable:

```text
Dashboard or Navigation -> Assistant / Voice Entry -> Task or Reminder Capture -> Task/Notification Visibility -> Return Navigation
```

Sprint 027 continues app completion by hardening the surrounding app shell.

CEO Briefing remains deferred, untouched, non-blocking, and out of scope.

## User Story

As a Trina user, I want to move through the main prototype surfaces, capture a task or reminder through the Assistant path, see the result in the right place, and return to Dashboard/Home without hitting confusing dead ends.

## In Scope

- Main app navigation review and narrow polish.
- Preservation of the Sprint 026 Assistant -> Tasks capture flow.
- Return-to-Dashboard/Home behavior.
- Selected or active navigation-state clarity.
- Empty-state copy and behavior across primary local prototype surfaces.
- Browser capability fallback copy for speech recognition and notifications.
- Local-only behavior clarity.
- Sprint validation documentation after implementation.
- `planning/STATE.md` updates after implementation.

## Out of Scope

- CEO Briefing build, rebuild, routing, validation, screenshot, or evidence capture.
- Screenshot evidence creation.
- FlutterFlow Designer work.
- FlutterFlow export or generated code.
- Backend scheduling.
- Firebase schema, rules, auth, configuration, or deployment work.
- Hermes work.
- Native mobile work.
- Release work.
- Package additions or lockfile changes.
- Broad app redesign.
- New dashboard concept.
- New AI integration.
- Live voice assistant integration.
- New CRM, calendar, email, or external service integration.
- Full test infrastructure overhaul.

## Explicit CEO Briefing Guardrail

Do not touch CEO Briefing in Sprint 027.

Do not create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Do not build, rebuild, wire, validate, screenshot, or mark CEO Briefing complete.
