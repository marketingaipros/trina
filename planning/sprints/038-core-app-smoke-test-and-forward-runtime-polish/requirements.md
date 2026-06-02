# Sprint 038 Requirements - Core App Smoke Test and Forward Runtime Polish

## Purpose

Sprint 038 validates the current core Trina app after Sprint 037 fixture regression validation and performs only small, concrete runtime polish if the smoke pass finds a real issue.

The sprint keeps the project moving forward without reopening CEO Briefing work.

## Background

Sprint 037 confirmed the local reminder notification fixture is safe, repeatable, local/dev-only, and does not regress key app paths.

Sprint 038 extends that stability check across the broader core app surface:

- Dashboard/Home
- Assistant / Voice Entry
- Typed task capture
- Tasks
- Notifications
- Bottom navigation
- Calendar
- Finance
- Knowledge Base
- Mobile viewport around `390x844`

## Goals

- Confirm the current app is broadly usable across core routes.
- Confirm typed task capture still creates a visible task.
- Confirm reminder-backed Notifications still work with the dev-only fixture flag.
- Confirm bottom navigation state remains clear.
- Confirm mobile layout does not overlap fixed bottom navigation.
- Apply only small runtime polish if a concrete issue is found.
- Update validation/state docs with Sprint 038 results.

## Non-Goals

- Do not work on CEO Briefing.
- Do not create CEO Briefing evidence.
- Do not create `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not touch backend, Firebase, package, native, build, release, or deployment files.
- Do not add dependencies.
- Do not refactor app architecture.
- Do not redesign the app.
- Do not create new features.
- Do not change authentication or data persistence.

## Required Validation Commands

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

## Manual Smoke Checks

- Dashboard/Home reachable.
- Assistant / Voice Entry reachable from Dashboard.
- Assistant typed task capture creates a visible task.
- Tasks view renders created task.
- Notifications reachable.
- Notifications fallback/empty state readable without fixture.
- Reminder-backed notification visible with `?trinaReminderFixture=1`.
- Direct Notifications start works with `?trinaReminderFixture=1&trinaStart=notifications`.
- Dashboard badge count aligns with Notifications list.
- Bottom nav active state works.
- Calendar reachable.
- Finance reachable.
- Knowledge Base reachable.
- Mobile viewport around `390x844` has no fixed bottom-nav overlap.

## Documentation Requirements

Update:

- `planning/STATE.md`
- `docs/VALIDATION.md`

Update only if Sprint 038 findings require it:

- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `planning/DECISIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
