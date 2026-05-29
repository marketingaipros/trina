# Sprint 006 Builder Handoff Prompt - FlutterFlow Mobile App Blueprint

You are the Builder operating inside the Trina repo.

Repo path:

`/Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice`

Apply Sprint 006 from the Architect Pack:

`architect-packs/trina-006-flutterflow-mobile-app-blueprint-architect-pack.md`

## First Read

Before making changes, read:

- `AGENTS.md`
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

Then summarize:

1. What Sprint 006 is supposed to accomplish.
2. Which files you expect to create or update.
3. What validation steps you will run.
4. Any blockers or ambiguities.

Stop after the summary and wait for approval before editing.

## Sprint Goal

Create a FlutterFlow mobile app blueprint for Trina.

This is a documentation/planning sprint only.

Do not build the FlutterFlow app yet.

## Create

- `planning/sprints/006-flutterflow-mobile-app-blueprint/requirements.md`
- `planning/sprints/006-flutterflow-mobile-app-blueprint/blueprint.md`
- `planning/sprints/006-flutterflow-mobile-app-blueprint/acceptance.md`
- `planning/sprints/006-flutterflow-mobile-app-blueprint/handoff-prompt.md`

## Update As Needed

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/DATA_MODEL.md`
- `docs/VALIDATION.md`

## Do Not Modify

- React/Vite runtime code.
- FlutterFlow generated code.
- Firebase config.
- Deploy config.
- Native app folders.
- `.env.local`.
- Package files.
- Build outputs.
- Screenshots.
- App implementation files.

Do not stage, commit, or push.

## Required Blueprint Content

Document:

- FlutterFlow mobile screen list.
- Navigation model.
- Core user flows.
- Firebase vs Hermes/API data ownership.
- AI Hub Orchestrator routing role.
- Draft assistant chat request/response contract.
- First client visual theme direction.
- Theme configurability rule.
- Mobile blueprint validation checklist.
- Remaining open questions.

## Validation Commands

Run:

```bash
git status --branch --short
find planning/sprints/006-flutterflow-mobile-app-blueprint -maxdepth 1 -type f | sort
rg -n "FlutterFlow|Hermes|AI Hub Orchestrator|Firebase|Chat|Home Dashboard|clientTheme|assistant" planning docs
git diff --name-only
git diff --stat
```

Do not run app, deploy, Firebase, or package installation commands.

## Final Report

After applying the pack, report:

1. Files created.
2. Files updated.
3. Validation commands run.
4. Confirmation that no app/runtime code changed.
5. Whether Sprint 006 acceptance criteria are satisfied.
6. Remaining risks or questions.
