# Sprint 011 Builder Handoff Prompt

You are the Builder for Trina.

Sprint:

`011-flutterflow-prototype-readiness-and-next-build-plan`

This is a docs/planning-only sprint.

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
- `planning/sprints/010-flutterflow-ceo-briefing-screen-fix/requirements.md`
- `planning/sprints/010-flutterflow-ceo-briefing-screen-fix/blueprint.md`
- `planning/sprints/010-flutterflow-ceo-briefing-screen-fix/acceptance.md`
- `planning/sprints/010-flutterflow-ceo-briefing-screen-fix/handoff-prompt.md`
- `planning/sprints/011-flutterflow-prototype-readiness-and-next-build-plan/requirements.md`
- `planning/sprints/011-flutterflow-prototype-readiness-and-next-build-plan/blueprint.md`
- `planning/sprints/011-flutterflow-prototype-readiness-and-next-build-plan/acceptance.md`

## Task

Apply Sprint 011 exactly as described.

Create or update only the planning/docs/evidence-note files needed to record FlutterFlow prototype readiness and the next build plan.

The CEO Briefing screenshot is deferred, not complete. Do not create it. Do not mark it complete.

## Create

- `planning/sprints/011-flutterflow-prototype-readiness-and-next-build-plan/requirements.md`
- `planning/sprints/011-flutterflow-prototype-readiness-and-next-build-plan/blueprint.md`
- `planning/sprints/011-flutterflow-prototype-readiness-and-next-build-plan/acceptance.md`
- `planning/sprints/011-flutterflow-prototype-readiness-and-next-build-plan/handoff-prompt.md`

## Update

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `references/flutterflow/sprint-009/click-path-notes.md`

## Rules

- Do not modify runtime app code.
- Do not modify React/Vite files.
- Do not export FlutterFlow generated code.
- Do not touch Firebase, Hermes, backend, package, native, or release files.
- Do not create screenshots.
- Do not create placeholder evidence.
- Do not mark CEO Briefing complete.
- Do not stage.
- Do not commit.
- Do not push.

## Validation

Run:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
```

## Report

After the work, report:

1. Files created.
2. Files updated.
3. Files skipped and why.
4. Validation results.
5. Whether Sprint 011 acceptance is satisfied.
6. Current git status.
7. Recommended next sprint name and goal.

Stop after the report.
