# Sprint 005 Blueprint - Local Repo Baseline + FlutterFlow Direction

## Objective

Update the project documentation and sprint structure so the Builder knows the correct source of truth and the correct frontend strategy.

## Files to Inspect

- `AGENTS.md`
- `CODEX.md`
- `README.md`
- `package.json`
- `.gitignore`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/DATA_MODEL.md`
- `docs/VALIDATION.md`
- `architect-packs/`
- `planning/sprints/`

## Safe Commands

```bash
git status --branch --short
git remote -v
git branch --show-current
find planning -maxdepth 3 -type f | sort
find docs -maxdepth 2 -type f | sort
find architect-packs -maxdepth 1 -type f | sort
cat package.json
```

Do not print `.env.local` contents.

## Files to Create or Update

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `planning/FILE_INVENTORY.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/DATA_MODEL.md`
- `docs/VALIDATION.md`
- `planning/sprints/005-local-repo-baseline-flutterflow-direction/requirements.md`
- `planning/sprints/005-local-repo-baseline-flutterflow-direction/blueprint.md`
- `planning/sprints/005-local-repo-baseline-flutterflow-direction/acceptance.md`
- `planning/sprints/005-local-repo-baseline-flutterflow-direction/handoff-prompt.md`

## Implementation Plan

1. Read current planning and docs.
2. Record the repo baseline without changing app code.
3. Merge this FlutterFlow-first direction into decisions and architecture.
4. Add Hermes API request schema to `docs/API.md`.
5. Add data collections to `docs/DATA_MODEL.md`.
6. Add QA checks to `docs/VALIDATION.md`.
7. Update `planning/STATE.md` with next action.
8. Report changed files and any uncertainty.

## Build Rule

No production app code should be changed in this sprint.
