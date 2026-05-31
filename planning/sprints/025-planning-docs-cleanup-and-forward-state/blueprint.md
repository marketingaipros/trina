# Sprint 025 Blueprint - Planning Docs Cleanup and Forward State

## Builder Plan

1. Capture current `git status --short`.
2. Review dirty planning/docs/reference files only.
3. Classify each dirty artifact as keep, supersede/edit, delete, or leave for operator decision.
4. Remove or supersede stale CEO Briefing active-build guidance.
5. Preserve Sprint 023/024 forward-build decisions.
6. Update `planning/STATE.md` with the current cleanup checkpoint and next action.
7. Update durable docs only where the cleanup requires it.
8. Validate the docs surface.

## Default Disposition

- Sprint 021 CEO Briefing build artifacts: delete if uncommitted and only reopening CEO work; otherwise mark superseded.
- Sprint 022 reset pack: absorb the useful decision into durable docs; do not create a new active Sprint 022 folder.
- Sprint 023 forward-build artifacts: keep if coherent, but mark historical/reset context.
- Sprint 024 forward-state docs: keep useful state if consistent with actual completed work.

## Validation

Run:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Do not stage, commit, or push unless explicitly instructed.
