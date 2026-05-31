# Trina Sprint 017 Architect Pack

**Sprint:** 017-flutterflow-final-prototype-evidence-readiness  
**Project:** Trina  
**Date:** 2026-05-31  
**Architect Layer:** ChatGPT  
**Builder Layer:** Codex  
**Pack Type:** Docs/planning readiness checkpoint only  

---

## Purpose

Create a docs/planning-only Sprint 017 Architect Pack that prepares Trina for final FlutterFlow prototype evidence capture.

This sprint does not perform FlutterFlow build work directly. It tightens the checklist, evidence rules, click-path confirmation steps, and Builder handoff so the next Builder action is controlled, auditable, and protected from placeholder or fake evidence.

The project folder remains the source of truth.

---

## Sprint Name

`017-flutterflow-final-prototype-evidence-readiness`

---

## Sprint Goal

Prepare the project for final FlutterFlow prototype evidence capture by tightening the screen validation checklist, evidence storage rules, and click-path confirmation steps before any new build or screenshot work.

---

## Scope

Sprint 017 is limited to planning and documentation updates.

In scope:

- Review Sprint 016 stabilization notes.
- Define the final FlutterFlow prototype validation path.
- Confirm which FlutterFlow prototype screens must exist.
- Confirm which screenshots are required.
- Keep CEO Briefing deferred unless real evidence is available.
- Update planning/docs only.
- Prepare a Builder handoff for evidence readiness.
- Clarify where future real screenshot evidence should be stored.
- Clarify that evidence must come from actual FlutterFlow preview/designer state, not placeholders.
- Clarify that validation should distinguish between:
  - confirmed existing screens
  - deferred screens
  - missing evidence
  - future capture targets

---

## Out of Scope

Codex must not touch:

- Runtime app code
- Generated FlutterFlow export code
- Firebase
- Hermes
- Backend code
- Package files
- Native mobile files
- Build outputs
- Release files
- Placeholder screenshots
- Fake evidence
- `references/flutterflow/sprint-009/ceo-briefing.png` unless a real screenshot is captured outside this docs-only sprint
- Any FlutterFlow CLI export or generated-code process
- Any production deployment work

---

## Files This Architect Pack Should Create or Update

Codex should create or update only these files unless the existing repo structure requires a narrowly justified docs/planning adjustment.

### Create

```text
planning/sprints/017-flutterflow-final-prototype-evidence-readiness/requirements.md
planning/sprints/017-flutterflow-final-prototype-evidence-readiness/blueprint.md
planning/sprints/017-flutterflow-final-prototype-evidence-readiness/acceptance.md
planning/sprints/017-flutterflow-final-prototype-evidence-readiness/handoff-prompt.md
```

### Update

```text
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/FLUTTERFLOW_BUILD_HANDOFF.md
docs/VALIDATION.md
references/flutterflow/sprint-009/click-path-notes.md
```

### Do Not Create

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Do not create this file unless there is real screenshot evidence from FlutterFlow. Sprint 017 is a readiness sprint, not an evidence capture sprint.

---

# File: planning/STATE.md

## Update Intent

Update `planning/STATE.md` to show Sprint 017 as the active planning/docs sprint after Sprint 016 was committed and pushed.

## Required Content

Add or update the current state with:

```markdown
# Project State

## Current Sprint

Sprint 017 — FlutterFlow Final Prototype Evidence Readiness

## Current Status

Sprint 016 was completed as a docs/planning stabilization checkpoint and pushed to `origin/main`.

Sprint 017 is a docs/planning-only readiness sprint. Its purpose is to tighten the final FlutterFlow prototype validation path, screenshot evidence rules, and click-path confirmation steps before any future evidence capture or FlutterFlow build work.

## Recently Completed

- Sprint 016 docs/planning stabilization checkpoint was committed and pushed.
- Sprint 016 kept CEO Briefing evidence deferred.
- No placeholder screenshot was created.
- No runtime app code, generated FlutterFlow export, Firebase, Hermes, backend, package/native, build, or release files were changed.

## Next Action

Apply the Sprint 017 Architect Pack to create the Sprint 017 planning folder and update validation/handoff documentation.

After the pack is applied, Codex must summarize:

1. What Sprint 017 is supposed to accomplish.
2. Which docs/planning files it expects to modify.
3. What validation checks it will run.
4. Any blockers or ambiguities.

Codex must not start implementation-style work beyond docs/planning updates until the summary is approved.

## Blockers / Deferred Items

- CEO Briefing screenshot evidence remains deferred.
- `references/flutterflow/sprint-009/ceo-briefing.png` must not be created unless real screenshot evidence is captured.
- Final prototype evidence is not complete until required screenshots and click-path confirmations are captured from actual FlutterFlow state.
```

---

# File: planning/DECISIONS.md

## Update Intent

Record durable decisions around evidence quality and placeholder prevention.

## Required Content

Add decision entries similar to:

```markdown
## Sprint 017 Decisions

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-05-31 | Sprint 017 is docs/planning-only evidence readiness, not evidence capture. | The project needs a clean validation checklist and evidence storage rules before final prototype capture. | Codex must not create screenshots or modify runtime/exported code in Sprint 017. |
| 2026-05-31 | CEO Briefing remains deferred unless real FlutterFlow evidence exists. | Placeholder evidence would corrupt validation history. | `ceo-briefing.png` must not be created as a placeholder. |
| 2026-05-31 | Screenshot evidence must come from actual FlutterFlow Designer or Preview state. | Evidence should prove real prototype status, not planned or mocked status. | Docs must distinguish confirmed evidence from deferred or missing evidence. |
| 2026-05-31 | Final prototype validation must confirm screens, navigation, storage location, and screenshot naming before capture. | Reduces confusion and prevents evidence files from being scattered or mislabeled. | `docs/VALIDATION.md` and FlutterFlow handoff docs must define the required validation path. |
```

---

# File: planning/RISKS.md

## Update Intent

Add risks tied to evidence confusion, false completion, and screenshot naming/storage.

## Required Content

Add or update risk rows similar to:

```markdown
## Sprint 017 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Placeholder screenshot is accidentally created and treated as evidence. | Medium | High | Sprint 017 explicitly forbids placeholder screenshots and keeps CEO Briefing deferred unless real evidence exists. | Open |
| Final prototype is marked complete without all screen evidence. | Medium | High | `docs/VALIDATION.md` must list required screens, required screenshots, and click-path confirmation steps. | Open |
| Evidence files are stored in inconsistent locations. | Medium | Medium | Sprint 017 must define evidence storage rules before future capture work. | Open |
| FlutterFlow UI state differs from documented planning state. | Medium | Medium | Validation must separate confirmed FlutterFlow state from planned or deferred work. | Open |
| Codex modifies runtime/exported files during a docs-only readiness sprint. | Low | High | Sprint 017 handoff must include a strict allowlist and protected-file list. | Open |
```

---

# File: planning/QUESTIONS.md

## Update Intent

Track open questions that affect future evidence capture.

## Required Content

Add or update questions similar to:

```markdown
## Sprint 017 Open Questions

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| Which FlutterFlow screens are currently confirmed in Designer or Preview? | Operator / FlutterFlow Builder | Before final evidence capture | Open | Sprint 017 should define the expected list, but actual confirmation requires FlutterFlow access. |
| Where should final prototype screenshots be stored if they are not tied to Sprint 009 evidence? | Architect / Operator | Before capture | Open | Recommended: use a dedicated `references/flutterflow/sprint-017/` or future evidence sprint folder unless maintaining Sprint 009 evidence continuity is required. |
| Should CEO Briefing evidence remain in Sprint 009 references or move to a new final evidence folder once real evidence exists? | Architect / Operator | Before capture | Open | Keep deferred until real screenshot exists. |
| What exact filenames should be used for each required screenshot? | Architect / Builder | Before capture | Open | Sprint 017 should propose stable names in `docs/VALIDATION.md`. |
```

---

# File: docs/FLUTTERFLOW_BUILD_HANDOFF.md

## Update Intent

Tighten the FlutterFlow handoff so a Builder or operator knows what must be true before final prototype evidence capture.

## Required Content

Add or update a section like:

```markdown
## Sprint 017 — Final Prototype Evidence Readiness

Sprint 017 prepares the FlutterFlow prototype for final evidence capture. This sprint does not perform runtime implementation, FlutterFlow export, Firebase/Hermes/backend work, or release work.

### Required Prototype Screens to Confirm

The final prototype validation path must confirm the current status of these screens:

1. Dashboard / Home
2. Assistant
3. Tasks / Priorities
4. Memory / Context, if present in the current prototype scope
5. CEO Briefing, only if real FlutterFlow evidence exists
6. Any additional screens explicitly listed in the current Sprint 016 stabilization notes

Each screen should be marked as one of:

- Confirmed in FlutterFlow
- Needs build/fix
- Deferred
- Evidence missing

### Required Navigation / Click Path Checks

The final prototype evidence plan must confirm:

1. Dashboard opens successfully in FlutterFlow Preview.
2. Primary navigation from Dashboard reaches Assistant.
3. Primary navigation from Dashboard reaches Tasks / Priorities.
4. CEO Briefing button status is documented:
   - connected, if real FlutterFlow state confirms it
   - deferred, if not confirmed
   - missing, if expected but not present
5. Assistant return or next-step flow is documented.
6. Any mock/static content is labeled as prototype content.

### Evidence Rules

- Do not create placeholder screenshots.
- Do not claim evidence exists unless a real screenshot or exported proof exists.
- Do not create `references/flutterflow/sprint-009/ceo-briefing.png` unless it is a real screenshot.
- Screenshots must be named consistently.
- Evidence notes must say where each screenshot came from:
  - FlutterFlow Designer
  - FlutterFlow Preview
  - exported image
  - other documented source

### Future Evidence Capture Recommendation

If final evidence capture becomes the next sprint, use a dedicated evidence sprint folder such as:

```text
references/flutterflow/sprint-018/
```

or preserve continuity in:

```text
references/flutterflow/sprint-009/
```

only when the screenshot specifically closes a Sprint 009 evidence gap.
```

---

# File: docs/VALIDATION.md

## Update Intent

Define the final prototype evidence validation checklist.

## Required Content

Add or update a section like:

```markdown
## FlutterFlow Final Prototype Evidence Validation

### Purpose

This validation section defines what must be checked before Trina is treated as having final FlutterFlow prototype evidence.

### Screen Validation Matrix

| Screen | Required? | Evidence Required | Status | Notes |
|---|---:|---|---|---|
| Dashboard / Home | Yes | Screenshot from FlutterFlow Preview or Designer | Pending | Must show main prototype entry state. |
| Assistant | Yes | Screenshot from FlutterFlow Preview or Designer | Pending | Must show assistant interaction screen or static prototype equivalent. |
| Tasks / Priorities | Yes | Screenshot from FlutterFlow Preview or Designer | Pending | Must show task/prioritization workflow. |
| Memory / Context | Conditional | Screenshot if included in current prototype scope | Pending | Confirm against latest handoff docs. |
| CEO Briefing | Deferred unless real evidence exists | Screenshot only if real FlutterFlow state confirms it | Deferred | Do not create placeholder `ceo-briefing.png`. |

### Click-Path Validation Checklist

Before final prototype evidence is accepted:

- [ ] Dashboard screen is visible in FlutterFlow Preview or Designer.
- [ ] Assistant screen is reachable from Dashboard or documented navigation.
- [ ] Tasks / Priorities screen is reachable from Dashboard or documented navigation.
- [ ] CEO Briefing button status is documented accurately.
- [ ] Any deferred screen is clearly labeled deferred.
- [ ] Any mock/static data is labeled prototype content.
- [ ] Screenshot filenames match the validation checklist.
- [ ] Screenshot storage folder is documented.
- [ ] No placeholder screenshots are created.
- [ ] No generated FlutterFlow export or runtime code is modified as part of evidence readiness.

### Suggested Screenshot Filenames

Use stable lowercase names:

```text
dashboard.png
assistant.png
tasks-priorities.png
memory-context.png
ceo-briefing.png
```

Only create `ceo-briefing.png` if it is real evidence.

### Evidence Source Notes

Each screenshot should have a note identifying:

- capture date
- source environment
- screen name
- whether the screen is confirmed, deferred, or incomplete
- any known mismatch between FlutterFlow state and planning docs
```

---

# File: references/flutterflow/sprint-009/click-path-notes.md

## Update Intent

Preserve continuity with the prior CEO Briefing evidence gap while making clear it remains deferred.

## Required Content

Add or update a section like:

```markdown
## Sprint 017 Evidence Readiness Note

Sprint 017 does not close the Sprint 009 CEO Briefing evidence gap.

The CEO Briefing screenshot remains deferred unless a real FlutterFlow Designer or Preview screenshot is captured.

Do not create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

unless the file contains real screenshot evidence.

Sprint 017 prepares the validation checklist and click-path rules needed for a future evidence capture pass.

### Current CEO Briefing Evidence Status

| Item | Status | Notes |
|---|---|---|
| CEO Briefing screen existence | Deferred / unconfirmed | Requires real FlutterFlow confirmation. |
| Dashboard to CEO Briefing navigation | Deferred / unconfirmed | Must be validated in FlutterFlow. |
| CEO Briefing to Assistant navigation | Deferred / unconfirmed | Must be validated in FlutterFlow. |
| `ceo-briefing.png` screenshot | Missing by design | Must not be created as a placeholder. |
```

---

# File: planning/sprints/017-flutterflow-final-prototype-evidence-readiness/requirements.md

```markdown
# Sprint 017 Requirements — FlutterFlow Final Prototype Evidence Readiness

## Goal

Prepare Trina for final FlutterFlow prototype evidence capture by tightening validation checklists, evidence rules, screenshot storage expectations, and click-path confirmation steps before any new build or screenshot work.

## Background

Sprint 016 was completed as a docs/planning stabilization checkpoint. CEO Briefing remains deferred, and no placeholder screenshot was created.

Sprint 017 continues that discipline. It does not capture evidence or modify runtime systems. It prepares the project so a future evidence capture pass can be performed without confusion.

## In Scope

- Review Sprint 016 stabilization state.
- Define the final FlutterFlow prototype validation path.
- Confirm expected prototype screens in documentation.
- Define required screenshot evidence.
- Define screenshot naming rules.
- Define evidence storage rules.
- Keep CEO Briefing deferred unless real evidence exists.
- Update docs/planning only.
- Prepare a Builder handoff prompt for evidence readiness.

## Out of Scope

- Runtime app code.
- Generated FlutterFlow export code.
- Firebase work.
- Hermes work.
- Backend work.
- Package/native/build/release files.
- Placeholder screenshots.
- Fake evidence.
- Production deployment.
- FlutterFlow CLI export.
- Creating `references/flutterflow/sprint-009/ceo-briefing.png` without real evidence.

## Required Screens to Track

Sprint 017 should document the evidence status for:

1. Dashboard / Home
2. Assistant
3. Tasks / Priorities
4. Memory / Context, if included in current prototype scope
5. CEO Briefing, deferred unless real evidence exists

## Business Rules

- Evidence must be real.
- Deferred evidence must be labeled deferred.
- Missing evidence must not be replaced with placeholders.
- Codex must not modify protected runtime or generated-code files.
- The validation checklist must be clear enough for a future Builder/operator to capture evidence without guessing.

## Expected Output

By the end of Sprint 017, the repo should contain updated docs/planning files that clearly answer:

1. Which FlutterFlow screens need evidence?
2. Which screenshots are required?
3. Where screenshots should be stored?
4. What click paths must be validated?
5. What remains deferred?
6. What Codex must not touch?
```

---

# File: planning/sprints/017-flutterflow-final-prototype-evidence-readiness/blueprint.md

```markdown
# Sprint 017 Blueprint — FlutterFlow Final Prototype Evidence Readiness

## Objective

Create a clean docs/planning checkpoint that prepares Trina for final FlutterFlow prototype evidence capture without performing screenshot capture or runtime implementation.

## Files to Inspect

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `references/flutterflow/sprint-009/click-path-notes.md`
- `planning/sprints/016-flutterflow-functional-app-stabilization/requirements.md`
- `planning/sprints/016-flutterflow-functional-app-stabilization/blueprint.md`
- `planning/sprints/016-flutterflow-functional-app-stabilization/acceptance.md`
- `planning/sprints/016-flutterflow-functional-app-stabilization/handoff-prompt.md`

## Files to Create

- `planning/sprints/017-flutterflow-final-prototype-evidence-readiness/requirements.md`
- `planning/sprints/017-flutterflow-final-prototype-evidence-readiness/blueprint.md`
- `planning/sprints/017-flutterflow-final-prototype-evidence-readiness/acceptance.md`
- `planning/sprints/017-flutterflow-final-prototype-evidence-readiness/handoff-prompt.md`

## Files to Update

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `references/flutterflow/sprint-009/click-path-notes.md`

## Protected Files and Paths

Do not modify:

- Runtime app code
- Generated FlutterFlow export code
- Firebase files
- Hermes files
- Backend files
- Package files
- Native files
- Build output files
- Release files
- `.DS_Store`
- Placeholder images
- `references/flutterflow/sprint-009/ceo-briefing.png` unless it already exists as real evidence and only documentation around it is being updated

## Implementation Plan

1. Inspect Sprint 016 files and current docs/planning state.
2. Create the Sprint 017 planning folder and four required sprint files.
3. Update `planning/STATE.md` to mark Sprint 017 as the active docs/planning readiness sprint.
4. Update `planning/DECISIONS.md` with evidence quality decisions.
5. Update `planning/RISKS.md` with risks around placeholder evidence and false completion.
6. Update `planning/QUESTIONS.md` with open evidence capture questions.
7. Update `docs/FLUTTERFLOW_BUILD_HANDOFF.md` with final prototype validation path and evidence rules.
8. Update `docs/VALIDATION.md` with the screen matrix, click-path checklist, screenshot filenames, and source-note rules.
9. Update `references/flutterflow/sprint-009/click-path-notes.md` to keep CEO Briefing evidence deferred.
10. Run validation checks:
    - `git diff --check`
    - inspect changed file list
    - confirm no protected files changed
    - confirm no placeholder screenshot was created
11. Report changed files and whether acceptance criteria are satisfied.

## Notes

Sprint 017 is not complete if it creates fake evidence, changes runtime code, or claims CEO Briefing evidence exists without a real screenshot.
```

---

# File: planning/sprints/017-flutterflow-final-prototype-evidence-readiness/acceptance.md

```markdown
# Sprint 017 Acceptance Criteria — FlutterFlow Final Prototype Evidence Readiness

Sprint 017 is complete only when all applicable criteria below are satisfied.

## Required Sprint Files

- [ ] `planning/sprints/017-flutterflow-final-prototype-evidence-readiness/requirements.md` exists.
- [ ] `planning/sprints/017-flutterflow-final-prototype-evidence-readiness/blueprint.md` exists.
- [ ] `planning/sprints/017-flutterflow-final-prototype-evidence-readiness/acceptance.md` exists.
- [ ] `planning/sprints/017-flutterflow-final-prototype-evidence-readiness/handoff-prompt.md` exists.

## Required Planning Updates

- [ ] `planning/STATE.md` reflects Sprint 017 as the active docs/planning readiness sprint.
- [ ] `planning/DECISIONS.md` records evidence quality and no-placeholder decisions.
- [ ] `planning/RISKS.md` records risks around placeholder evidence, false completion, and inconsistent screenshot storage.
- [ ] `planning/QUESTIONS.md` records open questions for final evidence capture.

## Required Documentation Updates

- [ ] `docs/FLUTTERFLOW_BUILD_HANDOFF.md` defines final prototype evidence readiness expectations.
- [ ] `docs/VALIDATION.md` includes a FlutterFlow final prototype evidence validation section.
- [ ] `docs/VALIDATION.md` lists required screens or screen categories.
- [ ] `docs/VALIDATION.md` lists click-path validation checks.
- [ ] `docs/VALIDATION.md` defines screenshot naming and storage expectations.
- [ ] `references/flutterflow/sprint-009/click-path-notes.md` clearly says CEO Briefing evidence remains deferred.

## Evidence Rules

- [ ] No placeholder screenshots are created.
- [ ] `references/flutterflow/sprint-009/ceo-briefing.png` is not created unless it is real screenshot evidence.
- [ ] Docs distinguish confirmed evidence from missing, deferred, or planned evidence.
- [ ] CEO Briefing remains deferred unless real evidence exists.

## Protected Scope

- [ ] No runtime app code changed.
- [ ] No generated FlutterFlow export code changed.
- [ ] No Firebase files changed.
- [ ] No Hermes files changed.
- [ ] No backend files changed.
- [ ] No package/native/build/release files changed.
- [ ] No `.DS_Store` staged or created intentionally.

## Validation

- [ ] `git diff --check` passes.
- [ ] Changed files are inside the Sprint 017 allowlist.
- [ ] Codex reports the final changed-file list.
- [ ] Codex reports any incomplete or uncertain acceptance criteria.
```

---

# File: planning/sprints/017-flutterflow-final-prototype-evidence-readiness/handoff-prompt.md

```markdown
# Sprint 017 Builder Handoff Prompt

You are the Builder for the Trina project.

Sprint 017 is a docs/planning-only readiness sprint.

Do not implement runtime behavior. Do not modify generated FlutterFlow code. Do not create screenshots. Do not create placeholder evidence.

## Read First

Read these files before making changes:

1. `AGENTS.md`
2. `planning/STATE.md`
3. `planning/DECISIONS.md`
4. `planning/RISKS.md`
5. `planning/QUESTIONS.md`
6. `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
7. `docs/VALIDATION.md`
8. `references/flutterflow/sprint-009/click-path-notes.md`
9. `planning/sprints/016-flutterflow-functional-app-stabilization/requirements.md`
10. `planning/sprints/016-flutterflow-functional-app-stabilization/blueprint.md`
11. `planning/sprints/016-flutterflow-functional-app-stabilization/acceptance.md`
12. `planning/sprints/016-flutterflow-functional-app-stabilization/handoff-prompt.md`
13. `planning/sprints/017-flutterflow-final-prototype-evidence-readiness/requirements.md`
14. `planning/sprints/017-flutterflow-final-prototype-evidence-readiness/blueprint.md`
15. `planning/sprints/017-flutterflow-final-prototype-evidence-readiness/acceptance.md`

## Task

Apply Sprint 017 exactly as described.

Create or update only the docs/planning files needed to prepare Trina for final FlutterFlow prototype evidence readiness.

## Allowed Files

You may create:

```text
planning/sprints/017-flutterflow-final-prototype-evidence-readiness/requirements.md
planning/sprints/017-flutterflow-final-prototype-evidence-readiness/blueprint.md
planning/sprints/017-flutterflow-final-prototype-evidence-readiness/acceptance.md
planning/sprints/017-flutterflow-final-prototype-evidence-readiness/handoff-prompt.md
```

You may update:

```text
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/FLUTTERFLOW_BUILD_HANDOFF.md
docs/VALIDATION.md
references/flutterflow/sprint-009/click-path-notes.md
```

## Forbidden Work

Do not modify:

- runtime app code
- generated FlutterFlow export code
- Firebase files
- Hermes files
- backend files
- package files
- native files
- build files
- release files
- `.DS_Store`

Do not create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

unless it is real FlutterFlow screenshot evidence. This sprint does not capture evidence, so the expected behavior is not to create it.

## Before Making Changes

Summarize:

1. What Sprint 017 is supposed to accomplish.
2. Which files you expect to create or update.
3. What validation checks you will run.
4. Any blockers or ambiguities.

Do not proceed until the operator approves your summary.

## After Making Changes

Report:

1. Files created.
2. Files updated.
3. Whether CEO Briefing remains deferred.
4. Whether any placeholder screenshots were created.
5. Whether any protected files changed.
6. `git diff --check` result.
7. Final `git status --short`.
8. Whether Sprint 017 acceptance criteria are complete, incomplete, or uncertain.
```

---

# Codex Apply Prompt

Use this only after saving this Architect Pack in the repo.

```text
You are the Builder for the Trina project.

Apply this Architect Pack:

architect-packs/trina-017-flutterflow-final-prototype-evidence-readiness-architect-pack.md

This is a docs/planning-only readiness sprint.

Do not write runtime app code.
Do not modify generated FlutterFlow export code.
Do not modify Firebase, Hermes, backend, package, native, build, or release files.
Do not create placeholder screenshots.
Do not create references/flutterflow/sprint-009/ceo-briefing.png unless it is real FlutterFlow screenshot evidence. Sprint 017 does not capture evidence, so do not create it.

First, read the Architect Pack and these files:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/FLUTTERFLOW_BUILD_HANDOFF.md
- docs/VALIDATION.md
- references/flutterflow/sprint-009/click-path-notes.md
- planning/sprints/016-flutterflow-functional-app-stabilization/requirements.md
- planning/sprints/016-flutterflow-functional-app-stabilization/blueprint.md
- planning/sprints/016-flutterflow-functional-app-stabilization/acceptance.md
- planning/sprints/016-flutterflow-functional-app-stabilization/handoff-prompt.md

Then summarize before making changes:

1. What Sprint 017 is supposed to accomplish.
2. Which files you expect to create or update.
3. What validation checks you will run.
4. Any blockers or ambiguities.

Do not apply changes until I approve your summary.
```

---

# Commit Scope Guidance

After Codex applies the pack and reports completion, the expected changed files should be limited to:

```text
architect-packs/trina-017-flutterflow-final-prototype-evidence-readiness-architect-pack.md
docs/FLUTTERFLOW_BUILD_HANDOFF.md
docs/VALIDATION.md
planning/DECISIONS.md
planning/QUESTIONS.md
planning/RISKS.md
planning/STATE.md
planning/sprints/017-flutterflow-final-prototype-evidence-readiness/requirements.md
planning/sprints/017-flutterflow-final-prototype-evidence-readiness/blueprint.md
planning/sprints/017-flutterflow-final-prototype-evidence-readiness/acceptance.md
planning/sprints/017-flutterflow-final-prototype-evidence-readiness/handoff-prompt.md
references/flutterflow/sprint-009/click-path-notes.md
```

Expected commit message after review:

```text
docs: add sprint 017 flutterflow evidence readiness checkpoint
```

Do not stage or commit until Codex reports the changed files and validation results.
