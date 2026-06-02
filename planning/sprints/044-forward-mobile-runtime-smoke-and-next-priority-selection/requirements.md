# Sprint 044 Requirements — Forward Mobile Runtime Smoke And Next Priority Selection

## Purpose

Sprint 044 verifies the current non-CEO app shell after recent mobile state, accessibility, fixture, and Calendar selected-day validation work.

The sprint should prove whether the core mobile runtime remains stable enough to move into the next implementation sprint, then identify the next narrow priority using observed evidence.

## Background

Sprint 043 closed the Calendar selected-day edit/delete control validation caveat without runtime changes. Validation used the nearest available in-app browser viewport and confirmed selected-day controls were usable, accessible, and not overflowing.

The next project need is a forward smoke pass across the major non-CEO surfaces so the next sprint is selected from current app behavior instead of assumptions.

## User / Operator Need

As the project operator, I need a clean mobile smoke result and next-priority recommendation so I can keep moving sprint-by-sprint without reopening completed caveats or accidentally touching protected CEO Briefing assets.

## In Scope

- Inspect current planning state, risks, and validation records.
- Run a mobile smoke pass at `390x844` or nearest available viewport.
- Validate reachable non-CEO app shell surfaces:
  - Dashboard/Home
  - Tasks
  - Calendar
  - Finance
  - Knowledge Base
  - Notifications/reminder surface, if reachable
- Check for:
  - horizontal overflow
  - blocked controls
  - broken navigation
  - obvious empty/error/loading regressions
  - touch target regressions
  - missing accessible labels on recently hardened controls
- Document results in `docs/VALIDATION.md`.
- Update `planning/STATE.md` with Sprint 044 status and recommended next action.
- Update `planning/RISKS.md` if a risk is reduced, confirmed, or newly discovered.
- Recommend one narrow Sprint 045 candidate.

## Out Of Scope

- CEO Briefing changes.
- Runtime implementation changes unless explicitly approved after inspection.
- New fixtures unless explicitly approved after inspection.
- Backend, auth, Firebase, dependency, build system, native, deployment, or environment changes.
- Broad UI redesign.
- Multi-feature implementation.

## Preferred Outcome

Sprint 044 should complete as validation/documentation only.

If a blocking runtime defect is discovered, Codex should stop and report the defect instead of fixing it immediately.

## Required Protection

The file `references/flutterflow/sprint-009/ceo-briefing.png` must remain absent.
