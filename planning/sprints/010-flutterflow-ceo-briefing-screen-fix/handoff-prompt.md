# Sprint 010 Builder Handoff Prompt - FlutterFlow CEO Briefing Screen Fix

You are working in the Trina repo.

Do not implement runtime app code.

Sprint 010 is a FlutterFlow prototype evidence fix.

## Read first

Read these files before making changes:

- `AGENTS.md`
- `CODEX.md`
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

## Task

First summarize the Sprint 010 plan.

Do not make changes until the summary is approved.

Your summary must include:

1. What Sprint 010 is supposed to accomplish.
2. Which files you expect to create or update.
3. Which FlutterFlow manual actions the operator must perform.
4. Which screenshot evidence is expected.
5. Which validation commands you will run.
6. What is explicitly out of scope.
7. Any blockers or ambiguities.

## After approval

If approved, apply only the planning/docs portion of the Architect Pack first.

Create or update:

- `planning/sprints/010-flutterflow-ceo-briefing-screen-fix/requirements.md`
- `planning/sprints/010-flutterflow-ceo-briefing-screen-fix/blueprint.md`
- `planning/sprints/010-flutterflow-ceo-briefing-screen-fix/acceptance.md`
- `planning/sprints/010-flutterflow-ceo-briefing-screen-fix/handoff-prompt.md`
- `planning/STATE.md`
- `planning/RISKS.md`, only if risk notes change
- `planning/QUESTIONS.md`, only if question notes change
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`, only if needed
- `docs/VALIDATION.md`, only if needed
- `references/flutterflow/sprint-009/click-path-notes.md`, only after evidence status changes

## Manual FlutterFlow work

The operator, not Codex, will manually create/fix the CEO Briefing screen in FlutterFlow.

Expected manual work:

- Create or rebuild `CEOBriefing`.
- Use mock/static content only.
- Match existing Trina prototype styling.
- Wire Dashboard CEO Briefing button to `CEOBriefing`.
- Wire CEO Briefing CTA to `Assistant`.
- Wire CEO Briefing back/home control to `Dashboard`.
- Confirm app initial page remains `Dashboard`.
- Capture `references/flutterflow/sprint-009/ceo-briefing.png`.

## Protected areas

Do not modify:

- Runtime app code
- React/Vite code
- Firebase files
- Hermes/API files
- Package files
- Native folders
- Release files
- Generated FlutterFlow exports
- Secrets or `.env` files

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

## Stop condition

Stop after reporting:

1. Files changed.
2. Whether CEO Briefing screenshot exists.
3. Whether only approved docs/planning/evidence files changed.
4. Validation command results.
5. Final git status.

Do not stage, commit, or push unless explicitly asked.
