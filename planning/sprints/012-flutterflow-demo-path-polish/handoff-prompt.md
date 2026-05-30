# Sprint 012 Builder Handoff Prompt - FlutterFlow Demo Path Polish

You are the Builder for Sprint 012.

This is a planning/docs and prototype-polish checkpoint. Do not implement runtime code.

## Read First

Read these files before making changes:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `references/flutterflow/sprint-009/click-path-notes.md`
- `planning/sprints/012-flutterflow-demo-path-polish/requirements.md`
- `planning/sprints/012-flutterflow-demo-path-polish/blueprint.md`
- `planning/sprints/012-flutterflow-demo-path-polish/acceptance.md`

## Checkpoint 1 - Summarize Before Changes

Before making any changes, summarize:

1. What Sprint 012 is supposed to accomplish.
2. The accepted demo screen set.
3. The proposed demo path.
4. Which files you expect to modify.
5. Whether any manual FlutterFlow work is required.
6. What validation commands you will run.
7. Any blockers or ambiguities.

Stop and wait for approval before changing files.

## Approved Work After Checkpoint

After approval, update only planning/docs/evidence-note files needed to document:

- Accepted demo screen set.
- Demo path.
- Display label direction.
- CEO Briefing remains deferred.
- Evidence rules.
- Validation rules.

Allowed files:

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `references/flutterflow/sprint-009/click-path-notes.md`

If the Sprint 012 files do not already exist, create them exactly as defined by the Architect Pack.

## Manual FlutterFlow Work

If manual FlutterFlow polish is required, stop and provide operator steps.

Do not claim FlutterFlow work was completed unless real evidence exists.

## Strict Rules

- Do not create placeholder screenshots.
- Do not mark CEO Briefing complete.
- Do not modify runtime app code.
- Do not modify React/Vite code.
- Do not export FlutterFlow generated code.
- Do not touch Firebase, Hermes, backend, package, native, or release files.
- Do not touch secrets or `.env` files.
- Do not stage, commit, or push unless explicitly instructed.

## Validation

Run:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
```

If screenshots changed, also run:

```bash
find references/flutterflow/sprint-009 -maxdepth 1 -type f | sort
```

## Final Report

Report:

1. Files created.
2. Files updated.
3. Files skipped and why.
4. Validation results.
5. Whether Sprint 012 acceptance is satisfied.
6. Whether CEO Briefing remains deferred, not complete.
7. Current git status.
