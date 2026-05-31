# Sprint 014 Builder Handoff Prompt - CEO Briefing Screenshot Evidence Capture

You are the Builder for Trina.

Sprint:

```text
014-ceo-briefing-screenshot-evidence-capture
```

This sprint is evidence capture only.

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
- `planning/sprints/013-flutterflow-ceo-briefing-evidence-capture/acceptance.md`
- `planning/sprints/014-ceo-briefing-screenshot-evidence-capture/requirements.md`
- `planning/sprints/014-ceo-briefing-screenshot-evidence-capture/blueprint.md`
- `planning/sprints/014-ceo-briefing-screenshot-evidence-capture/acceptance.md`

## Checkpoint 1 - Summarize Before Changes

Before changing files, summarize:

1. What Sprint 014 is supposed to accomplish.
2. Which Sprint 013 evidence gap it closes.
3. Which file will close the evidence gap.
4. Which FlutterFlow manual validation steps are required.
5. Which planning/docs/evidence-note files may change.
6. What is explicitly out of scope.
7. What validation commands will run.
8. Any blockers or ambiguities.

Stop and wait for approval before changing files unless the operator has already approved implementation.

## Approved Work After Checkpoint

After approval, create the Sprint 014 planning files if missing:

- `planning/sprints/014-ceo-briefing-screenshot-evidence-capture/requirements.md`
- `planning/sprints/014-ceo-briefing-screenshot-evidence-capture/blueprint.md`
- `planning/sprints/014-ceo-briefing-screenshot-evidence-capture/acceptance.md`
- `planning/sprints/014-ceo-briefing-screenshot-evidence-capture/handoff-prompt.md`

Then perform or coordinate manual FlutterFlow validation.

## Manual FlutterFlow Work

Use the real FlutterFlow prototype project.

Validate:

- CEO Briefing screen exists.
- The screen uses the existing Trina pink/white visual direction.
- The screen contains briefing-specific content.
- Dashboard can navigate to CEO Briefing.
- CEO Briefing can navigate back to Dashboard or the documented home route.
- CEO Briefing `Ask Trina to Prioritize` can navigate to Assistant.

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
- Do not create production release work.
- Do not stage, commit, or push unless explicitly instructed.

## Validation

Run:

```bash
git status --branch --short
find references/flutterflow/sprint-009 -maxdepth 1 -type f | sort
test -f references/flutterflow/sprint-009/ceo-briefing.png && echo "ceo briefing evidence exists"
file references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git diff --stat
git diff --check
```

If the screenshot has not yet been captured, skip the `file` command and report that the evidence file is still missing.

## Final Report

Report:

1. Files created.
2. Files updated.
3. Evidence file status.
4. Manual FlutterFlow validation results.
5. Validation command results.
6. Whether Sprint 014 acceptance is satisfied.
7. Current git status.

Stop after the report.
