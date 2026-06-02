# Sprint 038 Acceptance - Core App Smoke Test and Forward Runtime Polish

## Acceptance Criteria

Sprint 038 is complete only when all criteria below are met.

## Core App Smoke

- [ ] Dashboard/Home is reachable.
- [ ] Assistant / Voice Entry is reachable from Dashboard.
- [ ] Assistant typed task capture creates a visible task.
- [ ] Tasks view renders the created task.
- [ ] Notifications is reachable.
- [ ] Notifications fallback/empty state is readable without fixture.
- [ ] Reminder-backed notification is visible with `?trinaReminderFixture=1`.
- [ ] Direct Notifications start works with `?trinaReminderFixture=1&trinaStart=notifications`.
- [ ] Dashboard badge count aligns with Notifications list.
- [ ] Bottom nav active state works.
- [ ] Calendar is reachable.
- [ ] Finance is reachable.
- [ ] Knowledge Base is reachable.
- [ ] Mobile viewport around `390x844` has no fixed bottom-nav overlap.

## Scope Guardrails

- [ ] CEO Briefing files were not touched.
- [ ] `references/flutterflow/sprint-009/ceo-briefing.png` was not created.
- [ ] No backend files were changed.
- [ ] No Firebase files were changed.
- [ ] No package/dependency files were changed.
- [ ] No native/build/release/deployment files were changed.

## Runtime Change Control

- [ ] No runtime files were changed unless a concrete smoke-test issue required it.
- [ ] Any runtime change maps to a documented smoke-test finding.
- [ ] No broad refactor was performed.
- [ ] No app redesign was performed.
- [ ] No new feature was introduced.

## Validation Commands

The following commands pass or produce only documented known warnings:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

## Documentation

- [ ] `planning/STATE.md` updated with Sprint 038 status.
- [ ] `docs/VALIDATION.md` updated with Sprint 038 validation results.
- [ ] New risks, questions, or decisions were documented if discovered.
- [ ] If no new risks, questions, or decisions were discovered, the completion report says so clearly.

## Completion Rule

Do not mark Sprint 038 complete unless all acceptance criteria are satisfied.
