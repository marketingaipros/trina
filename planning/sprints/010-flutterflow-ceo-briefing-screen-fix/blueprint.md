# Sprint 010 Blueprint - FlutterFlow CEO Briefing Screen Fix

## Objective

Create the missing CEO Briefing prototype screen in FlutterFlow and preserve screenshot evidence without modifying runtime app code.

## Files to Review

- `AGENTS.md`
- `CODEX.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `references/flutterflow/sprint-009/click-path-notes.md`
- `planning/sprints/009-flutterflow-screen-build-handoff/requirements.md`
- `planning/sprints/009-flutterflow-screen-build-handoff/blueprint.md`
- `planning/sprints/009-flutterflow-screen-build-handoff/acceptance.md`

## Files to Create

- `planning/sprints/010-flutterflow-ceo-briefing-screen-fix/requirements.md`
- `planning/sprints/010-flutterflow-ceo-briefing-screen-fix/blueprint.md`
- `planning/sprints/010-flutterflow-ceo-briefing-screen-fix/acceptance.md`
- `planning/sprints/010-flutterflow-ceo-briefing-screen-fix/handoff-prompt.md`

## Files to Update

- `planning/STATE.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `references/flutterflow/sprint-009/click-path-notes.md`

## Evidence File Expected After Manual FlutterFlow Work

- `references/flutterflow/sprint-009/ceo-briefing.png`

## Manual FlutterFlow Build Plan

### 1. Open the clean FlutterFlow project

Use the clean Trina FlutterFlow prototype project created after the broken import attempt.

Confirm:

- Errors are `0`.
- Initial page is set to `Dashboard`.
- Existing working pages are present:
  - Dashboard
  - Assistant
  - StrategicAdvisor
  - FinanceSnapshot
  - Settings

### 2. Create the CEO Briefing page

Preferred approach:

- Create the page manually inside FlutterFlow.
- Avoid Designer re-import unless the operator confirms it is safe and isolated.
- Use real FlutterFlow widgets for key buttons.

Suggested page name:

```text
CEOBriefing
```

Suggested route:

```text
ceo-briefing
```

### 3. Build the screen layout

Use this structure:

- Top bar:
  - Back/home icon or text link to `Dashboard`
  - Title: `CEO Briefing`
- Main content:
  - Card: `Today's Priorities`
  - Card: `Follow-ups`
  - Card: `Decisions Needed`
  - Card: `Next Best Move`
- CTA:
  - Button: `Ask Trina to Prioritize`

### 4. Wire navigation

Set these actions:

```text
Dashboard CEO Briefing button -> Navigate To -> CEOBriefing
CEOBriefing Ask Trina to Prioritize -> Navigate To -> Assistant
CEOBriefing back/home control -> Navigate To -> Dashboard
```

Use:

```text
Allow Back Navigation: ON
Replace Route: OFF
```

Avoid `Navigate Back` for prototype core paths.

### 5. Test

Use FlutterFlow Test/Run mode.

Test:

```text
Dashboard -> CEO Briefing -> Ask Trina to Prioritize -> Assistant
CEO Briefing -> Dashboard
```

Confirm the app still starts at `Dashboard`.

### 6. Capture evidence

Save the screenshot as:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Do not use placeholder names.

### 7. Update evidence notes

Update:

```text
references/flutterflow/sprint-009/click-path-notes.md
```

Mark CEO Briefing as present.

Document:

- CEO Briefing was rebuilt in Sprint 010.
- Screenshot saved as `ceo-briefing.png`.
- Dashboard -> CEO Briefing -> Assistant click path tested, if confirmed.

### 8. Validation commands

Run:

```bash
git status --branch --short
find references/flutterflow/sprint-009 -maxdepth 1 -type f | sort
test -f references/flutterflow/sprint-009/ceo-briefing.png && echo "ceo briefing evidence exists"
git diff --name-only
git diff --stat
git diff --check
```

## Protected Areas

Do not modify:

- `src/`
- runtime app code
- Firebase files
- Hermes/API files
- `package.json`
- package lock files
- native folders
- release files
- generated FlutterFlow exports
- `.env` or secrets
