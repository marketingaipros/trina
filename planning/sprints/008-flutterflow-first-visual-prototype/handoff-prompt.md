# Sprint 008 Builder Handoff Prompt - FlutterFlow First Visual Prototype

You are the Builder operating inside the Trina repo.

Repo path:

`/Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice`

Apply Sprint 008 from the Architect Pack:

`architect-packs/trina-008-flutterflow-first-visual-prototype-architect-pack.md`

## First Read

Before making changes, read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/VALIDATION.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `planning/sprints/007-flutterflow-first-screen-build-handoff/requirements.md`
- `planning/sprints/007-flutterflow-first-screen-build-handoff/blueprint.md`
- `planning/sprints/007-flutterflow-first-screen-build-handoff/acceptance.md`
- `planning/sprints/007-flutterflow-first-screen-build-handoff/handoff-prompt.md`

Then summarize:

1. What Sprint 008 is supposed to accomplish.
2. Which files you expect to create or update.
3. What validation steps you will run.
4. Any blockers or ambiguities.

Stop after the summary and wait for approval before editing.

## Sprint Goal

Create the planning/docs package for the first FlutterFlow visual prototype.

This is a FlutterFlow-first visual prototype scope sprint, but the local repo step is docs/planning only.

Do not create FlutterFlow screens inside this repo.

## Create

- `planning/sprints/008-flutterflow-first-visual-prototype/requirements.md`
- `planning/sprints/008-flutterflow-first-visual-prototype/blueprint.md`
- `planning/sprints/008-flutterflow-first-visual-prototype/acceptance.md`
- `planning/sprints/008-flutterflow-first-visual-prototype/handoff-prompt.md`

## Update As Needed

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/VALIDATION.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`

## Do Not Modify

- React/Vite runtime code.
- FlutterFlow generated exports.
- Production mobile release files.
- Firebase config.
- Deploy config.
- Hermes/API implementation.
- Native app folders.
- `.env.local`.
- Package files.
- Build outputs.
- Secrets.

Do not stage, commit, or push.

## Required Content

Document:

- First six-screen prototype scope.
- Screenshot-derived visual identity.
- `trina-barbie-v1` theme tokens.
- Mobile adaptation of the left-side quick action/navigation concept.
- Large central microphone action.
- `Strategic Advisor Mode`.
- `CEO Briefing`.
- Finance quick action.
- Mock data.
- API stubs.
- Validation checklist.
- Out-of-scope items.

## Validation Commands

Run:

```bash
git status --branch --short
find planning/sprints/008-flutterflow-first-visual-prototype -maxdepth 1 -type f | sort
test -f docs/FLUTTERFLOW_BUILD_HANDOFF.md && echo "handoff doc exists"
rg -n "008-flutterflow-first-visual-prototype|Strategic Advisor Mode|CEO Briefing|Finance|mockStartDemoSession|mockSendAssistantMessage|mockMicListeningState|trina-barbie-v1|FlutterFlow only|No local React/Vite runtime code" planning docs
git diff --name-only
git diff --stat
```

Do not run app, Firebase, deploy, package install, build, FlutterFlow export, or production mobile release commands.

## Final Report

After applying the pack, report:

1. Files created.
2. Files updated.
3. Files skipped.
4. Validation commands run.
5. Confirmation that no runtime/app code changed.
6. Confirmation that no FlutterFlow screens, generated exports, or production mobile release files were created.
7. Confirmation that no live Firebase, Gmail, backend API, auth, deploy, stage, commit, or push action occurred.
8. Whether Sprint 008 acceptance criteria are satisfied.
9. Remaining risks or questions.
