# Architect Pack — Sprint 012 FlutterFlow Demo Path Polish

**Project:** Trina / trinaos-voice  
**Sprint:** `012-flutterflow-demo-path-polish`  
**Date:** 2026-05-30  
**Architect Layer:** ChatGPT  
**Builder Layer:** Codex  
**Mode:** Planning/docs first, then manual FlutterFlow prototype polish only after checkpoint approval

---

## 0. Purpose

Sprint 012 prepares the Trina FlutterFlow prototype for a clean demo path without reopening the deferred CEO Briefing blocker.

The goal is to polish the accepted FlutterFlow prototype screen set, confirm page labels/navigation, define the final demo click path, and collect demo-ready evidence only for the accepted screens.

This sprint does **not** export FlutterFlow generated code, modify the runtime React/Vite app, create backend integrations, or revive the CEO Briefing evidence gap.

---

## 1. Files This Architect Pack Should Create

Create the Sprint 012 folder:

```text
planning/sprints/012-flutterflow-demo-path-polish/
```

Create these files:

```text
planning/sprints/012-flutterflow-demo-path-polish/requirements.md
planning/sprints/012-flutterflow-demo-path-polish/blueprint.md
planning/sprints/012-flutterflow-demo-path-polish/acceptance.md
planning/sprints/012-flutterflow-demo-path-polish/handoff-prompt.md
```

---

## 2. Files This Architect Pack May Update

Update as needed:

```text
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/FLUTTERFLOW_BUILD_HANDOFF.md
docs/VALIDATION.md
references/flutterflow/sprint-009/click-path-notes.md
```

Do not update unless needed:

```text
references/flutterflow/sprint-009/*.png
```

Screenshots are manual evidence and should only be changed after real FlutterFlow work.

---

## 3. Required Sprint 012 File Contents

## File: `planning/sprints/012-flutterflow-demo-path-polish/requirements.md`

```markdown
# Sprint 012 Requirements — FlutterFlow Demo Path Polish

## Goal

Polish the accepted FlutterFlow prototype demo path for Trina so the prototype can be shown without being blocked by the deferred CEO Briefing screen.

Sprint 012 should confirm the accepted screen set, final demo path, labels, navigation expectations, and screenshot evidence rules.

---

## Current Context

Sprint 011 confirmed that the broader FlutterFlow prototype can move forward while CEO Briefing remains deferred, not complete.

The accepted existing evidence set currently includes:

- `references/flutterflow/sprint-009/dashboard.png`
- `references/flutterflow/sprint-009/assistant.png`
- `references/flutterflow/sprint-009/strategic-advisor-mode.png`
- `references/flutterflow/sprint-009/finance.png`
- `references/flutterflow/sprint-009/settings.png`

Deferred evidence:

- `references/flutterflow/sprint-009/ceo-briefing.png`

CEO Briefing must remain deferred unless the operator later creates a real screen and screenshot.

---

## Primary User Story

As the project operator, I need a clean FlutterFlow prototype demo path so I can show Trina’s visual direction and core navigation without getting stuck on one deferred page.

---

## In Scope

- Confirm the accepted demo screen set.
- Define the demo click path.
- Confirm final labels for the accepted prototype screens.
- Polish navigation expectations for the accepted screen set.
- Keep all content mock/static.
- Preserve the existing Barbie-inspired Trina visual style.
- Capture or refresh screenshot evidence only for accepted screens if manual FlutterFlow work changes them.
- Update evidence notes after real screenshots exist.
- Keep CEO Briefing deferred, not complete.

---

## Accepted Demo Screen Set

The accepted Sprint 012 demo path should use these screens:

1. `Dashboard`
2. `Assistant`
3. `StrategicAdvisor`
4. `FinanceSnapshot`
5. `Settings`

CEO Briefing is not part of the accepted Sprint 012 demo path.

---

## Recommended Demo Path

Preferred demo flow:

```text
Dashboard
→ Assistant
→ Strategic Advisor Mode
→ Finance Snapshot
→ Settings
→ Dashboard
```

The prototype may also allow direct Dashboard navigation into each accepted screen.

---

## Label Direction

Use clear human-facing labels in the FlutterFlow UI.

Recommended labels:

| Internal / Existing Page | Demo Label |
|---|---|
| Dashboard | Dashboard |
| Assistant | Assistant |
| StrategicAdvisor | Strategic Advisor |
| FinanceSnapshot | Finance Snapshot |
| Settings | Settings |

Do not rename source files, generated FlutterFlow files, or repo paths in this sprint.

If labels are changed manually in FlutterFlow, update docs to record the display labels.

---

## Out of Scope

- CEO Briefing completion.
- Placeholder or fake CEO Briefing screenshot evidence.
- Runtime React/Vite app changes.
- FlutterFlow generated code export.
- Firebase setup, deploy, rules, functions, or config.
- Hermes/API/backend implementation.
- Authentication.
- Live AI/model calls.
- Real voice capture.
- Real financial data.
- Package file changes.
- Native iOS/Android folder changes.
- Production mobile release work.
- Secrets or `.env` files.

---

## Evidence Rules

Screenshots must be real FlutterFlow screenshots.

Do not create placeholder evidence.

Do not mark evidence complete unless the file exists at the documented path.

Do not include `.DS_Store` in the evidence contract.

---

## Success Definition

Sprint 012 is successful when the project has a documented accepted demo path, CEO Briefing remains safely deferred, and the next Builder/manual FlutterFlow step is clear.
```

---

## File: `planning/sprints/012-flutterflow-demo-path-polish/blueprint.md`

```markdown
# Sprint 012 Blueprint — FlutterFlow Demo Path Polish

## Objective

Create a clean Builder-ready plan for polishing the accepted FlutterFlow prototype demo path without letting the deferred CEO Briefing screen block forward movement.

---

## Files to Read First

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `references/flutterflow/sprint-009/click-path-notes.md`
- `planning/sprints/011-flutterflow-prototype-readiness-and-next-build-plan/requirements.md`
- `planning/sprints/011-flutterflow-prototype-readiness-and-next-build-plan/blueprint.md`
- `planning/sprints/011-flutterflow-prototype-readiness-and-next-build-plan/acceptance.md`

---

## Files to Create

- `planning/sprints/012-flutterflow-demo-path-polish/requirements.md`
- `planning/sprints/012-flutterflow-demo-path-polish/blueprint.md`
- `planning/sprints/012-flutterflow-demo-path-polish/acceptance.md`
- `planning/sprints/012-flutterflow-demo-path-polish/handoff-prompt.md`

---

## Files to Update

Update only as needed:

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `references/flutterflow/sprint-009/click-path-notes.md`

---

## Implementation Plan

### Step 1 — Confirm accepted demo path

Document that Sprint 012 accepts this demo set:

- Dashboard
- Assistant
- StrategicAdvisor
- FinanceSnapshot
- Settings

Document that CEO Briefing remains deferred and is not required for the Sprint 012 demo path.

### Step 2 — Define display labels

Document human-facing labels:

- Dashboard
- Assistant
- Strategic Advisor
- Finance Snapshot
- Settings

Do not rename repo files or generated FlutterFlow artifacts.

### Step 3 — Define navigation polish target

Document expected navigation:

```text
Dashboard → Assistant
Dashboard → Strategic Advisor
Dashboard → Finance Snapshot
Dashboard → Settings
Assistant → Dashboard
Strategic Advisor → Dashboard
Finance Snapshot → Dashboard
Settings → Dashboard
```

If a guided demo route exists or is manually created, preferred flow:

```text
Dashboard → Assistant → Strategic Advisor → Finance Snapshot → Settings → Dashboard
```

### Step 4 — Define screenshot evidence rules

Accepted evidence remains in:

```text
references/flutterflow/sprint-009/
```

Only refresh screenshots if real manual FlutterFlow changes occur.

Do not create placeholders.

Do not mark CEO Briefing complete.

### Step 5 — Update planning/docs

Update status docs to reflect:

- Sprint 012 is active.
- Prototype demo path polish is the next accepted work.
- CEO Briefing remains deferred.
- No runtime/generated/backend work is approved.

### Step 6 — Validation

Run:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
```

If screenshots are changed after manual FlutterFlow work, also run:

```bash
find references/flutterflow/sprint-009 -maxdepth 1 -type f | sort
```

---

## Manual FlutterFlow Work Rule

Codex cannot perform real FlutterFlow Designer work unless the operator provides files or exported artifacts.

If manual FlutterFlow work is needed, Codex should stop and tell the operator exactly what to do in FlutterFlow.

---

## Do Not Touch

- Runtime app code
- React/Vite files
- FlutterFlow generated exports
- Firebase files
- Hermes/API/backend files
- Package files
- Native folders
- Release files
- Secrets or `.env` files
```

---

## File: `planning/sprints/012-flutterflow-demo-path-polish/acceptance.md`

```markdown
# Sprint 012 Acceptance Criteria — FlutterFlow Demo Path Polish

Sprint 012 is complete when all applicable criteria are satisfied.

---

## Planning Acceptance

- Sprint 012 folder exists.
- `requirements.md` exists.
- `blueprint.md` exists.
- `acceptance.md` exists.
- `handoff-prompt.md` exists.
- `planning/STATE.md` identifies Sprint 012 as the current/next active planning checkpoint.
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md` documents the accepted demo path or points to the Sprint 012 files.
- `docs/VALIDATION.md` documents validation rules for the demo path/evidence.

---

## Scope Acceptance

- Accepted demo screen set is documented.
- CEO Briefing remains deferred, not complete.
- No placeholder CEO Briefing evidence is created.
- No runtime app code is modified.
- No FlutterFlow generated code is exported or modified.
- No Firebase, Hermes, backend, package, native, release, or secret files are modified.

---

## Demo Path Acceptance

The accepted demo path is documented as one of the following:

Preferred guided flow:

```text
Dashboard → Assistant → Strategic Advisor → Finance Snapshot → Settings → Dashboard
```

Or direct Dashboard hub flow:

```text
Dashboard → each accepted screen → Dashboard
```

---

## Evidence Acceptance

- Existing accepted screenshot evidence remains documented.
- Any refreshed screenshot evidence must be a real FlutterFlow screenshot.
- `.DS_Store` is not included in the evidence contract.
- CEO Briefing screenshot remains documented as deferred unless the real file exists.

---

## Validation Acceptance

Run and report:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
```

If screenshots changed, also run and report:

```bash
find references/flutterflow/sprint-009 -maxdepth 1 -type f | sort
```

`git diff --check` must pass.
```

---

## File: `planning/sprints/012-flutterflow-demo-path-polish/handoff-prompt.md`

```markdown
# Sprint 012 Builder Handoff Prompt — FlutterFlow Demo Path Polish

You are the Builder for Sprint 012.

This is a planning/docs and prototype-polish checkpoint. Do not implement runtime code.

---

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
- `planning/sprints/012-flutterflow-demo-path-polish/requirements.md`
- `planning/sprints/012-flutterflow-demo-path-polish/blueprint.md`
- `planning/sprints/012-flutterflow-demo-path-polish/acceptance.md`

---

## Checkpoint 1 — Summarize Before Changes

Before making any changes, summarize:

1. What Sprint 012 is supposed to accomplish.
2. The accepted demo screen set.
3. The proposed demo path.
4. Which files you expect to modify.
5. Whether any manual FlutterFlow work is required.
6. What validation commands you will run.
7. Any blockers or ambiguities.

Stop and wait for approval before changing files.

---

## Approved Work After Checkpoint

After approval, update only planning/docs/evidence-note files needed to document:

- Accepted demo screen set.
- Demo path.
- Display label direction.
- CEO Briefing remains deferred.
- Evidence rules.
- Validation rules.

Allowed files:

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `references/flutterflow/sprint-009/click-path-notes.md`

If the Sprint 012 files do not already exist, create them exactly as defined by the Architect Pack.

---

## Manual FlutterFlow Work

If manual FlutterFlow polish is required, stop and provide operator steps.

Do not claim FlutterFlow work was completed unless real evidence exists.

---

## Strict Rules

- Do not create placeholder screenshots.
- Do not mark CEO Briefing complete.
- Do not modify runtime app code.
- Do not modify React/Vite code.
- Do not export FlutterFlow generated code.
- Do not touch Firebase, Hermes, backend, package, native, or release files.
- Do not touch secrets or `.env` files.
- Do not stage, commit, or push unless explicitly instructed.

---

## Validation

Run:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
```

If screenshots changed, also run:

```bash
find references/flutterflow/sprint-009 -maxdepth 1 -type f | sort
```

---

## Final Report

Report:

1. Files created.
2. Files updated.
3. Files skipped and why.
4. Validation results.
5. Whether Sprint 012 acceptance is satisfied.
6. Whether CEO Briefing remains deferred, not complete.
7. Current git status.
```

---

## 4. planning/STATE.md Update Direction

Update `planning/STATE.md` to state:

- Sprint 011 was committed and pushed.
- Sprint 012 is the next active planning checkpoint.
- Sprint 012 focuses on FlutterFlow demo path polish.
- CEO Briefing remains deferred, not complete.
- No runtime or generated-code work is approved.

---

## 5. planning/DECISIONS.md Update Direction

Add a durable decision:

```markdown
| 2026-05-30 | Sprint 012 will polish the accepted FlutterFlow demo path without requiring CEO Briefing. | CEO Briefing naming and design may change later, and it should not block prototype progress. | Sprint 012 demo readiness uses Dashboard, Assistant, Strategic Advisor, Finance Snapshot, and Settings as the accepted screen set. |
```

---

## 6. planning/RISKS.md Update Direction

Add or preserve risks:

- CEO Briefing remains deferred and should not be accidentally marked complete.
- FlutterFlow manual polish may diverge from repo docs if evidence is not captured after changes.
- Page labels may change later, so source-level renames should be avoided in this sprint.

---

## 7. planning/QUESTIONS.md Update Direction

Add or preserve open questions:

- What final page names should be used for production?
- Should CEO Briefing become Executive Briefing, Daily Briefing, Priority Briefing, Founder Briefing, or Command Briefing later?
- Which accepted FlutterFlow screens need refreshed screenshots after manual polish?
- What is the next real prototype build target after demo path polish?

---

## 8. docs/FLUTTERFLOW_BUILD_HANDOFF.md Update Direction

Update to include:

- Accepted Sprint 012 demo screen set.
- Recommended demo path.
- CEO Briefing deferred note.
- Static/mock-only rule.
- No generated-code export rule.

---

## 9. docs/VALIDATION.md Update Direction

Update to include Sprint 012 validation:

- Validate accepted demo path documentation.
- Validate screenshot evidence only if real screenshots are refreshed.
- Keep CEO Briefing deferred unless real evidence exists.
- Run `git diff --check`.

---

## 10. references/flutterflow/sprint-009/click-path-notes.md Update Direction

Only update if needed to clarify:

- Accepted Sprint 012 demo path does not require CEO Briefing.
- CEO Briefing remains deferred, not complete.
- Existing screenshots remain the accepted evidence baseline unless refreshed by real FlutterFlow work.

---

## 11. Codex Apply Prompt

```text
Apply the Sprint 012 Architect Pack as planning/docs only.

Architect Pack file:

architect-packs/trina-012-flutterflow-demo-path-polish-architect-pack.md

Goal:

Create the Sprint 012 planning files and update planning/docs/evidence notes so the Trina FlutterFlow prototype has a clear accepted demo path that is not blocked by the deferred CEO Briefing screen.

Create:

- planning/sprints/012-flutterflow-demo-path-polish/requirements.md
- planning/sprints/012-flutterflow-demo-path-polish/blueprint.md
- planning/sprints/012-flutterflow-demo-path-polish/acceptance.md
- planning/sprints/012-flutterflow-demo-path-polish/handoff-prompt.md

Update as needed:

- planning/STATE.md
- planning/DECISIONS.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/FLUTTERFLOW_BUILD_HANDOFF.md
- docs/VALIDATION.md
- references/flutterflow/sprint-009/click-path-notes.md

Rules:

- Planning/docs/evidence-note updates only.
- Do not modify runtime app code.
- Do not modify React/Vite files.
- Do not export or modify FlutterFlow generated code.
- Do not touch Firebase, Hermes, backend, package, native, or release files.
- Do not create screenshots.
- Do not create placeholder evidence.
- Do not mark CEO Briefing complete.
- Do not stage, commit, or push.
- Do not include `.DS_Store` in the evidence contract.

After applying, run:

- git status --branch --short
- git diff --name-only
- git diff --stat
- git diff --check

Report:

1. Files created.
2. Files updated.
3. Files skipped and why.
4. Validation results.
5. Whether Sprint 012 acceptance is satisfied in the working tree.
6. Confirmation that CEO Briefing remains deferred, not complete.
7. Confirmation that no implementation/generated/backend files were touched.
8. Current git status.
```

---

## 12. Next Step After Apply

After Codex applies this pack, the next action is:

1. Review Codex report.
2. If clean, stage/commit/push Sprint 012 planning/docs.
3. Then create the next Architect Pack for the actual manual FlutterFlow polish/evidence work, or continue to the next prototype expansion sprint.

Do not ask Codex to implement FlutterFlow or runtime changes until this pack is applied and committed.
