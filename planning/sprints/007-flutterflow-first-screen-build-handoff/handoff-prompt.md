# Sprint 007 Builder Handoff Prompt - FlutterFlow First Screen Build Handoff

You are the Builder operating inside the Trina repo.

Repo path:

`/Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice`

Apply Sprint 007 from the Architect Pack:

`architect-packs/trina-007-flutterflow-first-screen-build-handoff-architect-pack.md`

## First Read

Before making changes, read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/DATA_MODEL.md`
- `docs/VALIDATION.md`
- `planning/sprints/006-flutterflow-mobile-app-blueprint/requirements.md`
- `planning/sprints/006-flutterflow-mobile-app-blueprint/blueprint.md`
- `planning/sprints/006-flutterflow-mobile-app-blueprint/acceptance.md`

Then summarize:

1. What Sprint 007 is supposed to accomplish.
2. Which files you expect to create or update.
3. What validation steps you will run.
4. Any blockers or ambiguities.

Stop after the summary and wait for approval before editing.

## Sprint Goal

Create a FlutterFlow first-screen build handoff package.

This is a docs/planning sprint only.

Do not build the FlutterFlow app yet.

## Create

- `planning/sprints/007-flutterflow-first-screen-build-handoff/requirements.md`
- `planning/sprints/007-flutterflow-first-screen-build-handoff/blueprint.md`
- `planning/sprints/007-flutterflow-first-screen-build-handoff/acceptance.md`
- `planning/sprints/007-flutterflow-first-screen-build-handoff/handoff-prompt.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`

## Update As Needed

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`

## Do Not Modify

- React/Vite runtime code.
- FlutterFlow generated exports.
- Firebase config.
- Deploy config.
- Hermes/API implementation.
- Native app folders.
- `.env.local`.
- Package files.
- Build outputs.
- Screenshots.
- Secrets.

Do not stage, commit, or push.

## Required Handoff Content

Document:

- First FlutterFlow build screen list.
- Screen-by-screen build instructions.
- Theme tokens for `trina-barbie-v1`.
- Component list.
- Mock data.
- API stub rules.
- Validation checklist.
- Out-of-scope items.
- Builder prompt for FlutterFlow implementation.

## Validation Commands

Run:

```bash
git status --branch --short
find planning/sprints/007-flutterflow-first-screen-build-handoff -maxdepth 1 -type f | sort
test -f docs/FLUTTERFLOW_BUILD_HANDOFF.md && echo "handoff doc exists"
rg -n "Splash|Welcome|Demo Access|Home Dashboard|Chat Shell|Error / Offline|primaryPink|trina-barbie-v1|mock|stub" planning docs
git diff --name-only
git diff --stat
```

Do not run app, Firebase, deploy, package install, build, or FlutterFlow commands.

## Final Report

After applying the pack, report:

1. Files created.
2. Files updated.
3. Validation commands run.
4. Confirmation that no runtime/app code changed.
5. Whether Sprint 007 acceptance criteria are satisfied.
6. Remaining risks or questions.
