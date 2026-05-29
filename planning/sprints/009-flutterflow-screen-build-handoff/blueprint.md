# Sprint 009 Blueprint - FlutterFlow Screen Build Handoff

## Objective

Create the screen-level FlutterFlow build handoff for Trina's first visual prototype.

This sprint is docs/planning only in the local repo.

## Files to Review

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/VALIDATION.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `planning/sprints/008-flutterflow-first-visual-prototype/requirements.md`
- `planning/sprints/008-flutterflow-first-visual-prototype/blueprint.md`
- `planning/sprints/008-flutterflow-first-visual-prototype/acceptance.md`
- `planning/sprints/008-flutterflow-first-visual-prototype/handoff-prompt.md`

## Files to Create

- `planning/sprints/009-flutterflow-screen-build-handoff/requirements.md`
- `planning/sprints/009-flutterflow-screen-build-handoff/blueprint.md`
- `planning/sprints/009-flutterflow-screen-build-handoff/acceptance.md`
- `planning/sprints/009-flutterflow-screen-build-handoff/handoff-prompt.md`

## Files to Update

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `docs/API.md`

## Implementation Plan

1. Confirm Sprint 008 has been applied and committed.
2. Create the Sprint 009 folder.
3. Create the four required Sprint 009 files.
4. Update `planning/STATE.md` to make Sprint 009 active.
5. Add Sprint 009 decisions, risks, and questions.
6. Update `docs/API.md` with mock/stub contracts only.
7. Update `docs/VALIDATION.md` with Sprint 009 validation checks.
8. Expand `docs/FLUTTERFLOW_BUILD_HANDOFF.md` with visual identity rules, six screen definitions, screen layouts, mock data, click behavior, navigation rules, screenshot/export storage, and the FlutterFlow builder checklist.
9. Run validation commands.
10. Report changed files and confirm no runtime files changed.

## Non-Negotiable Boundaries

Do not modify:

- local runtime app code
- Firebase
- Hermes/API implementation
- package files
- native app folders
- release files
- generated FlutterFlow exports
- env/secrets

## Validation Commands

```bash
git status --branch --short
find planning/sprints/009-flutterflow-screen-build-handoff -maxdepth 1 -type f | sort
test -f docs/FLUTTERFLOW_BUILD_HANDOFF.md && echo "handoff doc exists"
rg -n "009-flutterflow-screen-build-handoff|Dashboard|Assistant|Strategic Advisor Mode|CEO Briefing|Finance|Settings|mockStartDemoSession|mockSendAssistantMessage|mockMicListeningState|mockLoadCEOBriefing|mockLoadFinanceSnapshot|references/flutterflow/sprint-009|FlutterFlow only|No local React/Vite runtime code" planning docs
git diff --name-only
git diff --stat
```

## Expected Result

The repo should contain a complete docs/planning handoff for building the first FlutterFlow visual prototype in the next sprint.
