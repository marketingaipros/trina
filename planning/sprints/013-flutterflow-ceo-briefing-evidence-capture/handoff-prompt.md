# Sprint 013 Builder Handoff Prompt - FlutterFlow CEO Briefing Evidence Capture

You are the Builder for Trina.

Sprint:

```text
013-flutterflow-ceo-briefing-evidence-capture
```

This sprint is FlutterFlow-only manual prototype validation plus evidence capture.

Do not implement runtime code.

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
- `planning/sprints/013-flutterflow-ceo-briefing-evidence-capture/requirements.md`
- `planning/sprints/013-flutterflow-ceo-briefing-evidence-capture/blueprint.md`
- `planning/sprints/013-flutterflow-ceo-briefing-evidence-capture/acceptance.md`

## Checkpoint 1 - Summarize Before Changes

Before changing files, summarize:

1. What Sprint 013 is supposed to accomplish.
2. Which file will close the evidence gap.
3. Which FlutterFlow manual validation steps are required.
4. Which planning/docs/evidence-note files may change.
5. What is explicitly out of scope.
6. What validation commands will run.
7. Any blockers or ambiguities.

Stop and wait for approval before changing files unless the operator has already approved implementation.

## Approved Work After Checkpoint

After approval, create the Sprint 013 planning files if missing:

- `planning/sprints/013-flutterflow-ceo-briefing-evidence-capture/requirements.md`
- `planning/sprints/013-flutterflow-ceo-briefing-evidence-capture/blueprint.md`
- `planning/sprints/013-flutterflow-ceo-briefing-evidence-capture/acceptance.md`
- `planning/sprints/013-flutterflow-ceo-briefing-evidence-capture/handoff-prompt.md`

Then perform or coordinate manual FlutterFlow validation.

## Manual FlutterFlow Work

The operator must use the real FlutterFlow project.

Validate:

- CEO Briefing screen exists.
- The screen uses the existing Trina pink/white visual direction.
- The screen contains briefing-specific content.
- Dashboard can navigate to CEO Briefing, if that path exists.
- CEO Briefing can return to Dashboard.
- CEO Briefing CTA can navigate to Assistant, if that path exists.

Capture a real screenshot and save it as:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

## Evidence Notes

After the screenshot exists, update:

- `references/flutterflow/sprint-009/click-path-notes.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `planning/STATE.md`

Update `planning/DECISIONS.md`, `planning/RISKS.md`, and `planning/QUESTIONS.md` only if the evidence capture changes a durable decision, risk, or open question.

## Strict Rules

- Do not create placeholder screenshots.
- Do not mark CEO Briefing complete unless `references/flutterflow/sprint-009/ceo-briefing.png` exists.
- Do not modify runtime app code.
- Do not modify React/Vite code.
- Do not export FlutterFlow generated code.
- Do not touch Firebase, Hermes, backend, package, native, release, deploy, or secret files.
- Do not stage, commit, or push unless explicitly instructed.

## Validation

Run:

```bash
git status --branch --short
find references/flutterflow/sprint-009 -maxdepth 1 -type f | sort
test -f references/flutterflow/sprint-009/ceo-briefing.png && echo "ceo briefing evidence exists"
git diff --name-only
git diff --stat
git diff --check
```

If the screenshot exists, also run:

```bash
file references/flutterflow/sprint-009/ceo-briefing.png
```

## Final Report

Report:

1. Files created.
2. Files updated.
3. Evidence file status.
4. Manual FlutterFlow validation results.
5. Validation command results.
6. Whether Sprint 013 acceptance is satisfied.
7. Current git status.

Stop after the report.
