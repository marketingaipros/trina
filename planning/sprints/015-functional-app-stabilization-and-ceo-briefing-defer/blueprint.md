# Sprint 015 Blueprint - Functional App Stabilization and CEO Briefing Defer

## Objective

Update the project source of truth so the team stops chasing the missing CEO Briefing page and moves toward functional app stabilization.

## Files to Review

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `references/flutterflow/sprint-009/click-path-notes.md`
- `planning/sprints/014-ceo-briefing-screenshot-evidence-capture/acceptance.md`

## Files to Create

- `planning/sprints/015-functional-app-stabilization-and-ceo-briefing-defer/requirements.md`
- `planning/sprints/015-functional-app-stabilization-and-ceo-briefing-defer/blueprint.md`
- `planning/sprints/015-functional-app-stabilization-and-ceo-briefing-defer/acceptance.md`
- `planning/sprints/015-functional-app-stabilization-and-ceo-briefing-defer/handoff-prompt.md`

## Files to Update

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `references/flutterflow/sprint-009/click-path-notes.md`

## Implementation Plan

1. Record the operator decision to defer CEO Briefing.
2. Update state to make Sprint 015 the active sprint.
3. Add a durable decision explaining why CEO Briefing is deferred.
4. Add risks around missing screens and prototype-vs-functional-app drift.
5. Add open questions for the Dashboard CEO Briefing button treatment.
6. Update FlutterFlow handoff docs to prioritize app functionality.
7. Update validation docs to include a core navigation audit.
8. Update click-path notes to mark CEO Briefing as deferred, not passing.
9. Stop before staging or committing.

## Validation Plan

Run:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
```

Confirm:

- No `ceo-briefing.png` placeholder was created.
- No runtime code changed.
- Sprint 015 files exist.
- Docs state CEO Briefing is deferred, not complete.
