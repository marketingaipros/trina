# Sprint 037 Acceptance — Fixture Guard and Core Regression Validation

## Complete Criteria

Sprint 037 is complete only when all required criteria below are satisfied.

### Fixture guard

- [ ] The Sprint 036 reminder fixture remains local/dev validation only.
- [ ] `?trinaReminderFixture=1` creates a populated reminder-backed notification through a repeatable local path.
- [ ] `?trinaStart=notifications` opens Notifications directly through a repeatable local path.
- [ ] The fixture is not documented or treated as a production user feature.
- [ ] Normal Notifications empty/fallback state remains readable when the fixture is not active.

### Core app regression checks

- [ ] Dashboard/Home remains reachable.
- [ ] Notifications remains reachable.
- [ ] Dashboard notification count aligns with the populated Notifications list when the fixture is active.
- [ ] Assistant typed task capture still creates a visible task.
- [ ] Tasks view still renders created tasks.
- [ ] Bottom nav active state still works.
- [ ] Mobile viewport around `390x844` has no fixed bottom-nav overlap.

### Documentation and planning

- [ ] `docs/VALIDATION.md` includes the Sprint 037 repeatable validation path.
- [ ] `planning/STATE.md` reflects Sprint 037 accurately.
- [ ] `planning/RISKS.md` is updated if fixture or validation risks changed.
- [ ] `planning/QUESTIONS.md` is updated if fixture or validation questions were answered or remain open.
- [ ] `planning/DECISIONS.md` is updated only if a durable fixture policy decision was made.

### Guardrails

- [ ] CEO Briefing was not touched.
- [ ] `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- [ ] No backend files were modified.
- [ ] No Firebase files were modified.
- [ ] No package/dependency files were modified.
- [ ] No native files were modified.
- [ ] No build, release, or deployment files were modified.
- [ ] No staging, commit, or push was performed unless separately approved after completion review.

## Required validation commands

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

## Incomplete Criteria

Mark the sprint incomplete if any of these are true:

- The reminder fixture cannot be run through a repeatable local URL.
- The fixture is available in a way that looks like production functionality.
- Notifications empty/fallback state breaks.
- Dashboard count does not align with the fixture list.
- Assistant typed task capture regresses.
- Tasks view no longer shows created tasks.
- Mobile bottom nav overlaps important content.
- CEO Briefing is touched.
- `ceo-briefing.png` is created.
- Backend, Firebase, package, native, build, release, or deployment files are modified.
