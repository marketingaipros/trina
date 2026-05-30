# Architect Pack — Sprint 010 FlutterFlow CEO Briefing Screen Fix

**Project:** Trina — Barbie  
**Sprint:** `010-flutterflow-ceo-briefing-screen-fix`  
**Pack type:** FlutterFlow prototype evidence fix  
**Architect layer:** ChatGPT  
**Builder layer:** Codex / operator-assisted FlutterFlow workflow  
**Date:** 2026-05-30  

---

## 1. Architect Intent

Sprint 010 closes the remaining FlutterFlow prototype evidence gap from Sprint 009.

Sprint 009 successfully produced and committed screenshot evidence for:

- Dashboard
- Assistant
- Strategic Advisor Mode
- Finance
- Settings

The CEO Briefing screen remains pending because FlutterFlow Designer had generation/import issues during Sprint 009.

Sprint 010 should rebuild only the missing CEO Briefing prototype screen, wire the prototype navigation, capture `ceo-briefing.png`, and update the relevant evidence notes.

This sprint is FlutterFlow-only prototype work.

It must not become runtime implementation work.

---

## 2. Files This Architect Pack Creates or Updates

Codex should apply this pack as a docs/planning/evidence-tracking update only.

### Create

- `planning/sprints/010-flutterflow-ceo-briefing-screen-fix/requirements.md`
- `planning/sprints/010-flutterflow-ceo-briefing-screen-fix/blueprint.md`
- `planning/sprints/010-flutterflow-ceo-briefing-screen-fix/acceptance.md`
- `planning/sprints/010-flutterflow-ceo-briefing-screen-fix/handoff-prompt.md`

### Update

- `planning/STATE.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `references/flutterflow/sprint-009/click-path-notes.md`

### Evidence expected after manual FlutterFlow work

- `references/flutterflow/sprint-009/ceo-briefing.png`

### Do not create or modify

- Runtime app code
- React/Vite app code
- FlutterFlow generated code exports
- Firebase files/config/deploy/rules/functions
- Hermes/API implementation
- Package files
- Native folders
- Release files
- Secrets or `.env` files

---

## 3. Durable Decisions

Add or preserve the following decision if not already recorded.

### Decision: CEO Briefing evidence should close the Sprint 009 evidence gap

The missing CEO Briefing screenshot belongs with the Sprint 009 prototype evidence set because the other five FlutterFlow screenshots were stored there.

Sprint 010 should create the missing screen and store the screenshot at:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Sprint 010 may also document the work in its own sprint folder, but the screenshot should complete the Sprint 009 evidence set.

### Decision: Use FlutterFlow-only prototype work

Sprint 010 must not use generated FlutterFlow code exports, local runtime code, Firebase, Hermes/API, backend calls, auth, live AI, real voice capture, or real financial data.

---

## 4. Risks

Update `planning/RISKS.md` with these risks if missing.

| Risk | Impact | Mitigation | Status |
|---|---|---|---|
| FlutterFlow Designer import can create broken or duplicate theme/page artifacts. | Prototype testing can break or duplicate pages/components. | Build the CEO Briefing page manually inside the clean FlutterFlow project unless Designer import is clearly safe. | Open |
| Hidden or stale FlutterFlow initial route may point to `HomePage`. | Test mode can open a blank default screen. | Keep the initial page set to `Dashboard` before testing. | Mitigated from Sprint 009, monitor |
| Imported visual buttons may not fire actions in Preview/Test. | Click path may appear broken even when screen design exists. | Use real FlutterFlow Button/IconButton widgets for the CEO Briefing CTA and back/home navigation. | Open |
| CEO Briefing may be overbuilt. | Sprint expands into product/dashboard work. | Use mock/static content only and keep screen focused on prototype evidence. | Open |

---

## 5. Open Questions

Update `planning/QUESTIONS.md` with these if missing.

| Question | Owner | Needed By | Status | Notes |
|---|---|---|---|---|
| Should CEO Briefing become a richer production workflow later? | Architect | Future sprint | Open | Sprint 010 only builds the prototype screen. |
| Should CEO Briefing evidence live in Sprint 009 or Sprint 010 references? | Architect | Sprint 010 | Answered | Store `ceo-briefing.png` in `references/flutterflow/sprint-009/` to complete the Sprint 009 evidence set. |
| Should the final FlutterFlow project be exported to code? | Architect | Future sprint | Open | Out of scope for Sprint 010. |

---

# File: `planning/sprints/010-flutterflow-ceo-briefing-screen-fix/requirements.md`

```markdown
# Sprint 010 Requirements — FlutterFlow CEO Briefing Screen Fix

## Goal

Rebuild the missing CEO Briefing FlutterFlow prototype screen, wire its prototype navigation, capture screenshot evidence, and close the Sprint 009 CEO Briefing evidence gap.

## Background

Sprint 009 created the first Trina mobile FlutterFlow prototype and committed evidence for the working screens:

- Dashboard
- Assistant
- Strategic Advisor Mode
- Finance
- Settings

CEO Briefing remained pending because FlutterFlow Designer had generation/import issues.

Sprint 010 exists only to complete that missing screen and evidence.

## User Story

As the operator reviewing Trina’s mobile prototype, I need a CEO Briefing screen that fits the existing FlutterFlow prototype style, so I can see the complete executive assistant flow and preserve screenshot evidence in the project folder.

## In Scope

- FlutterFlow-only prototype work.
- Rebuild or create the CEO Briefing screen inside the clean FlutterFlow project.
- Use mock/static content only.
- Match the existing Trina Barbie-inspired prototype style.
- Connect Dashboard CEO Briefing button to CEO Briefing.
- Connect CEO Briefing CTA to Assistant.
- Add a clear way back to Dashboard.
- Capture screenshot:
  - `references/flutterflow/sprint-009/ceo-briefing.png`
- Update `references/flutterflow/sprint-009/click-path-notes.md` to mark CEO Briefing evidence present.
- Update sprint state/validation notes as needed.

## Out of Scope

- Runtime app code.
- React/Vite implementation.
- FlutterFlow generated code exports.
- Firebase setup, config, deploy, rules, or functions.
- Hermes/API implementation.
- Backend calls.
- Authentication.
- Live AI.
- Real voice capture.
- Real financial data.
- Package file edits.
- Native folder edits.
- Release work.
- Production mobile deployment.

## CEO Briefing Screen Requirements

The CEO Briefing screen should include:

- Page title: `CEO Briefing`
- Visual style matching the existing prototype:
  - Soft pink/white background
  - Hot pink accents
  - Rounded cards
  - Executive assistant feel
- Sections:
  - `Today's Priorities`
  - `Follow-ups`
  - `Decisions Needed`
  - `Next Best Move`
- CTA button:
  - `Ask Trina to Prioritize`
  - Navigates to `Assistant`
- Back/home control:
  - Navigates to `Dashboard`

## Mock Content

Use clear static copy. Suggested content:

### Today's Priorities

- Review high-priority emails.
- Confirm the next strategic session.
- Resolve pipeline risk before end of day.

### Follow-ups

- Follow up with two active opportunities.
- Review unread executive summary.
- Check pending finance note.

### Decisions Needed

- Pick the highest-value follow-up.
- Decide whether to move pipeline review earlier.
- Confirm today’s top operating priority.

### Next Best Move

- Focus on the opportunity most likely to affect this week’s pipeline.

## Evidence

The screenshot must be stored as:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Do not create a placeholder with words like `pending` in the file name.

## Success Standard

Sprint 010 is complete when the CEO Briefing screen exists, the click path works in FlutterFlow Test/Run mode, `ceo-briefing.png` is saved in the evidence folder, and no protected files or generated exports are changed.
```

---

# File: `planning/sprints/010-flutterflow-ceo-briefing-screen-fix/blueprint.md`

```markdown
# Sprint 010 Blueprint — FlutterFlow CEO Briefing Screen Fix

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
```

---

# File: `planning/sprints/010-flutterflow-ceo-briefing-screen-fix/acceptance.md`

```markdown
# Sprint 010 Acceptance Criteria — FlutterFlow CEO Briefing Screen Fix

Sprint 010 is complete only when all applicable criteria are met.

## Scope Acceptance

- CEO Briefing screen is created or rebuilt in FlutterFlow.
- Work remains FlutterFlow prototype-only.
- Mock/static content is used.
- No runtime app code is modified.
- No Firebase work is performed.
- No Hermes/API work is performed.
- No generated FlutterFlow export files are committed.
- No package, native, release, or secret files are modified.

## Screen Acceptance

- CEO Briefing page exists in the FlutterFlow project.
- CEO Briefing matches the existing Trina prototype style.
- CEO Briefing includes:
  - `Today's Priorities`
  - `Follow-ups`
  - `Decisions Needed`
  - `Next Best Move`
  - `Ask Trina to Prioritize`
- CEO Briefing has a clear way back to Dashboard.

## Navigation Acceptance

The following prototype paths work in FlutterFlow Test/Run mode:

```text
Dashboard -> CEO Briefing
CEO Briefing -> Ask Trina to Prioritize -> Assistant
CEO Briefing -> Dashboard
```

## Evidence Acceptance

- Screenshot exists at:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

- `references/flutterflow/sprint-009/click-path-notes.md` is updated to mark CEO Briefing evidence present.
- No placeholder file such as `ceo-briefing.png pending.png` exists.

## Documentation Acceptance

- `planning/STATE.md` reflects Sprint 010 status.
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md` notes that CEO Briefing was fixed in Sprint 010, if relevant.
- `docs/VALIDATION.md` reflects the validation/evidence process, if relevant.
- `planning/RISKS.md` and `planning/QUESTIONS.md` are updated only if risks/questions changed.

## Validation Commands

The Builder/operator should run:

```bash
git status --branch --short
find references/flutterflow/sprint-009 -maxdepth 1 -type f | sort
test -f references/flutterflow/sprint-009/ceo-briefing.png && echo "ceo briefing evidence exists"
git diff --name-only
git diff --stat
git diff --check
```

## Commit Readiness

Before commit, only the approved planning/docs/evidence files should be staged.

Approved commit candidates may include:

- `references/flutterflow/sprint-009/ceo-briefing.png`
- `references/flutterflow/sprint-009/click-path-notes.md`
- Sprint 010 planning files
- relevant planning/docs updates

Do not stage unrelated files.
```

---

# File: `planning/sprints/010-flutterflow-ceo-briefing-screen-fix/handoff-prompt.md`

```markdown
# Sprint 010 Builder Handoff Prompt — FlutterFlow CEO Briefing Screen Fix

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
```

---

## 6. Codex Apply Prompt

Use this after downloading this Architect Pack into the project folder.

```text
Apply Sprint 010 Architect Pack as a docs/planning-only change.

Pack file:
architect-packs/trina-010-flutterflow-ceo-briefing-screen-fix-architect-pack.md

Sprint:
010-flutterflow-ceo-briefing-screen-fix

Rules:
- Do not implement runtime app code.
- Do not modify React/Vite code.
- Do not modify Firebase files.
- Do not modify Hermes/API files.
- Do not modify package files.
- Do not modify native folders.
- Do not create release files.
- Do not export FlutterFlow generated code.
- Do not stage, commit, or push.
- Apply planning/docs changes only.

Create or update these files as needed:

- planning/sprints/010-flutterflow-ceo-briefing-screen-fix/requirements.md
- planning/sprints/010-flutterflow-ceo-briefing-screen-fix/blueprint.md
- planning/sprints/010-flutterflow-ceo-briefing-screen-fix/acceptance.md
- planning/sprints/010-flutterflow-ceo-briefing-screen-fix/handoff-prompt.md
- planning/STATE.md
- planning/RISKS.md, only if risks change
- planning/QUESTIONS.md, only if questions change
- docs/FLUTTERFLOW_BUILD_HANDOFF.md, only if needed
- docs/VALIDATION.md, only if needed

Do not create ceo-briefing.png yet.
That screenshot comes after manual FlutterFlow work.

After applying, run:

git status --branch --short
find planning/sprints/010-flutterflow-ceo-briefing-screen-fix -maxdepth 1 -type f | sort
git diff --name-only
git diff --stat
git diff --check

Report:

1. Files created
2. Files updated
3. Files skipped
4. Validation results
5. Final git status

Stop. Do not stage, commit, or push.
```

---

## 7. After Pack Apply: Builder Review Prompt

Use this only after Codex applies the Architect Pack files.

```text
Sprint 010 Builder review checkpoint.

Do not implement anything yet.

Read these files first:

- AGENTS.md
- CODEX.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/FLUTTERFLOW_BUILD_HANDOFF.md
- docs/VALIDATION.md
- references/flutterflow/sprint-009/click-path-notes.md
- planning/sprints/010-flutterflow-ceo-briefing-screen-fix/requirements.md
- planning/sprints/010-flutterflow-ceo-briefing-screen-fix/blueprint.md
- planning/sprints/010-flutterflow-ceo-briefing-screen-fix/acceptance.md
- planning/sprints/010-flutterflow-ceo-briefing-screen-fix/handoff-prompt.md

Your task is only to summarize the Sprint 010 handoff before any implementation or evidence changes.

Report:

1. What Sprint 010 is supposed to accomplish.
2. Which files you expect to modify.
3. Which FlutterFlow manual steps the operator must complete.
4. What screenshot evidence is expected.
5. What validation checklist should be used.
6. What is explicitly out of scope.
7. Any blockers, conflicts, or ambiguities.

Do not stage, commit, push, create app code, or modify files during this review.

Stop after the summary and wait for approval.
```
