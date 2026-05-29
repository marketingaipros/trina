# Sprint 009 Acceptance Criteria - FlutterFlow Screen Build Handoff

Sprint 009 is complete only when all criteria below are satisfied.

## Scope Acceptance

- Sprint 009 folder exists at `planning/sprints/009-flutterflow-screen-build-handoff/`.
- Sprint 009 includes:
  - `requirements.md`
  - `blueprint.md`
  - `acceptance.md`
  - `handoff-prompt.md`
- `planning/STATE.md` identifies Sprint 009 as the active sprint.
- Sprint 009 remains docs/planning only.

## FlutterFlow Handoff Acceptance

`docs/FLUTTERFLOW_BUILD_HANDOFF.md` defines:

- Visual identity rules.
- Six required screens.
- Screen-by-screen layout.
- Mobile navigation.
- Mock data.
- Stub behavior.
- Clickable prototype path.
- Screenshot/export storage.
- FlutterFlow builder checklist.

## Required Screen Acceptance

The handoff includes these screens:

- Dashboard / Home
- Assistant / Voice Command
- Strategic Advisor Mode
- CEO Briefing
- Finance
- Settings / Profile

## Mock Behavior Acceptance

The handoff documents these mock contracts as prototype-only:

- `mockStartDemoSession`
- `mockSendAssistantMessage`
- `mockMicListeningState`
- `mockLoadCEOBriefing`
- `mockLoadFinanceSnapshot`
- `mockLoadStrategicAdvisorMode`

## Storage Acceptance

The handoff recommends:

```text
references/flutterflow/sprint-009/
```

for lightweight proof assets.

Large generated exports are marked as not to be committed unless explicitly approved.

## Validation Acceptance

The Builder runs and reports:

```bash
git status --branch --short
find planning/sprints/009-flutterflow-screen-build-handoff -maxdepth 1 -type f | sort
test -f docs/FLUTTERFLOW_BUILD_HANDOFF.md && echo "handoff doc exists"
rg -n "009-flutterflow-screen-build-handoff|Dashboard|Assistant|Strategic Advisor Mode|CEO Briefing|Finance|Settings|mockStartDemoSession|mockSendAssistantMessage|mockMicListeningState|mockLoadCEOBriefing|mockLoadFinanceSnapshot|references/flutterflow/sprint-009|FlutterFlow only|No local React/Vite runtime code" planning docs
git diff --name-only
git diff --stat
```

## Safety Acceptance

No changes are made to:

- Runtime app code
- React/Vite implementation files
- Firebase files
- Hermes/API implementation files
- Package files
- Native folders
- Release files
- Generated FlutterFlow exports
- Secrets or env files

## Completion Report

The Builder must report:

1. Acceptance criteria status.
2. Files created.
3. Files updated.
4. Validation commands run.
5. Any risks or open questions.
6. Final git status.
7. Whether the docs are safe to stage.
