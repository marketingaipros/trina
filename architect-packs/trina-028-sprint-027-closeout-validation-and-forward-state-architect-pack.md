# Trina Architect Pack — Sprint 028: Sprint 027 Closeout Validation and Forward State

**Project:** Trina / trinaos-voice
**Sprint:** 028-sprint-027-closeout-validation-and-forward-state
**Role:** Architect Layer
**Date:** 2026-05-31
**Status:** Corrected Architect Pack

---

## 1. Purpose

Create the corrected Sprint 028 planning/docs pack for Trina after the repository was found to contain a mislabeled Sprint 028 Architect Pack file whose contents were actually Sprint 023 App Completion Forward Build material.

Sprint 028 is a documentation and planning correction sprint. It closes the Sprint 027 review loop, records the Sprint 023 reset state, protects the CEO Briefing deferral, and prepares the next highest-value runtime implementation target without starting implementation.

The handoff remains the project folder, not the chat thread.

---

## 2. Current Observed State

Codex reported the following current repository state before this corrected pack is applied:

```text
## main...origin/main
 D architect-packs/trina-023-app-completion-forward-build-architect-pack.md
 M planning/STATE.md
 M planning/sprints/023-app-completion-forward-build/acceptance.md
 M planning/sprints/023-app-completion-forward-build/blueprint.md
 M planning/sprints/023-app-completion-forward-build/handoff-prompt.md
 M planning/sprints/023-app-completion-forward-build/requirements.md
?? architect-packs/trina-028-sprint-027-closeout-validation-and-forward-state-architect-pack.md.md
```

Important observations:

- The only Sprint 028-named pack currently in the repo is misnamed and has a double `.md.md` extension.
- That file contains Sprint 023 content, not Sprint 028 closeout content.
- The tracked Sprint 023 Architect Pack appears deleted in Git status.
- Sprint 023 planning files were modified in the prior reset pass.
- Runtime implementation has not started.
- CEO Briefing remains deferred and must not be touched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

---

## 3. Files to Create or Update

Codex should create or update the following files only:

```text
architect-packs/trina-028-sprint-027-closeout-validation-and-forward-state-architect-pack.md
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/VALIDATION.md
planning/sprints/028-sprint-027-closeout-validation-and-forward-state/requirements.md
planning/sprints/028-sprint-027-closeout-validation-and-forward-state/blueprint.md
planning/sprints/028-sprint-027-closeout-validation-and-forward-state/acceptance.md
planning/sprints/028-sprint-027-closeout-validation-and-forward-state/handoff-prompt.md
```

Codex should also repair these file hygiene issues if present:

```text
architect-packs/trina-023-app-completion-forward-build-architect-pack.md
architect-packs/trina-028-sprint-027-closeout-validation-and-forward-state-architect-pack.md.md
```

Repair rules:

- Restore `architect-packs/trina-023-app-completion-forward-build-architect-pack.md` if it was accidentally deleted and still exists in Git history.
- Remove the bad untracked `architect-packs/trina-028-sprint-027-closeout-validation-and-forward-state-architect-pack.md.md` file because it is a mislabeled duplicate containing Sprint 023 content.
- Create the corrected Sprint 028 pack at the single-extension path: `architect-packs/trina-028-sprint-027-closeout-validation-and-forward-state-architect-pack.md`.

---

## 4. Files Not to Modify

Do not modify runtime app code in this sprint.

Protected files and areas:

```text
App.tsx
components/*
src/*
package.json
package-lock.json
references/flutterflow/sprint-009/ceo-briefing.png
```

Do not create, edit, or fake CEO Briefing screenshot evidence.

Do not export FlutterFlow code.

Do not create Firebase, Hermes, backend, native, release, or deployment work.

Do not start the next runtime polish implementation in this sprint.

---

## 5. Architect-Facing Requirements

### Goal

Correct the Sprint 028 planning handoff so the project folder contains a real Sprint 028 closeout pack instead of a mislabeled Sprint 023 duplicate.

### Business Reason

Trina needs to move forward toward app completion without returning to the CEO Briefing blocker. The planning layer must clearly show that CEO Briefing is deferred and that the next implementation target is core app polish.

### Scope

- Record Sprint 027 closeout status.
- Record the Sprint 023 planning reset status.
- Clean up the mislabeled Sprint 028 `.md.md` artifact.
- Restore the tracked Sprint 023 Architect Pack if it was accidentally deleted.
- Create Sprint 028 planning files.
- Update `planning/STATE.md` to point to Sprint 028 as a planning/docs closeout and forward-state correction sprint.
- Update `docs/VALIDATION.md` with validation rules for the closeout and next implementation handoff.
- Keep CEO Briefing deferred and non-blocking.
- Prepare the next implementation target: navigation, return paths, active-state clarity, empty states, and fallback copy across the Vite React shell.

### Out of Scope

- Runtime code changes.
- CEO Briefing page work.
- CEO Briefing screenshot evidence.
- FlutterFlow export.
- Firebase, Hermes, backend, package, native, build, release, deployment work.
- New app features.

---

## 6. Builder-Facing Implementation Plan

### Step 1 — Inspect Current State

Run:

```bash
git status --branch --short
ls -la architect-packs | grep 'trina-0\(23\|28\)' || true
```

Confirm whether these files exist:

```text
architect-packs/trina-023-app-completion-forward-build-architect-pack.md
architect-packs/trina-028-sprint-027-closeout-validation-and-forward-state-architect-pack.md.md
architect-packs/trina-028-sprint-027-closeout-validation-and-forward-state-architect-pack.md
```

### Step 2 — Repair Architect Pack File Hygiene

If `architect-packs/trina-023-app-completion-forward-build-architect-pack.md` is deleted in Git status, restore it from Git:

```bash
git restore architect-packs/trina-023-app-completion-forward-build-architect-pack.md
```

If the bad double-extension file exists, remove it:

```bash
rm -f architect-packs/trina-028-sprint-027-closeout-validation-and-forward-state-architect-pack.md.md
```

Create the corrected Sprint 028 pack at:

```text
architect-packs/trina-028-sprint-027-closeout-validation-and-forward-state-architect-pack.md
```

The contents should match this Architect Pack.

### Step 3 — Create Sprint 028 Folder

Create:

```text
planning/sprints/028-sprint-027-closeout-validation-and-forward-state/
```

Add:

```text
requirements.md
blueprint.md
acceptance.md
handoff-prompt.md
```

### Step 4 — Update Planning State

Update `planning/STATE.md` to show:

- Sprint 028 is the active planning/docs closeout correction sprint.
- Sprint 023 planning reset has been applied and remains the forward app-completion baseline.
- Sprint 027 runtime implementation has been reviewed and the next target is core app polish.
- CEO Briefing is deferred, not complete, and not blocking app completion.
- Next implementation target is core app shell polish, not CEO Briefing.

### Step 5 — Update Decisions, Risks, Questions

Update `planning/DECISIONS.md` only if needed to record durable decisions:

- CEO Briefing remains deferred and non-blocking.
- Mislabeled Architect Packs must not be applied.
- The repo file contents win over filenames when conflicts exist.

Update `planning/RISKS.md` only if needed to record risks:

- Risk of applying mislabeled Architect Pack content.
- Risk of duplicate sprint pack names causing Codex confusion.
- Risk of drifting back into CEO Briefing instead of app completion.

Update `planning/QUESTIONS.md` only if needed:

- No user question should block this cleanup unless a file cannot be restored or the pack contents cannot be verified.

### Step 6 — Update Validation Docs

Update `docs/VALIDATION.md` with Sprint 028 validation checks:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Required validation outcome:

- No runtime files changed.
- No CEO Briefing screenshot exists.
- No FlutterFlow export exists.
- Bad `.md.md` Sprint 028 file is removed.
- Tracked Sprint 023 Architect Pack is restored if it was deleted.
- Correct Sprint 028 pack exists with a single `.md` extension.
- Sprint 028 folder contains the four sprint files.

---

## 7. Sprint 028 File Drafts

### planning/sprints/028-sprint-027-closeout-validation-and-forward-state/requirements.md

```markdown
# Sprint 028 Requirements — Sprint 027 Closeout Validation and Forward State

## Goal

Correct the Sprint 028 planning handoff after a mislabeled Sprint 028 Architect Pack was found to contain Sprint 023 content.

## User Story

As the project operator, I need the repo to contain one correct Sprint 028 closeout pack and clean planning state so Codex can move forward without confusing Sprint 023 reset work, Sprint 027 closeout work, and the next runtime polish sprint.

## Scope

- Remove the bad untracked double-extension Sprint 028 pack if present.
- Restore the tracked Sprint 023 Architect Pack if it was accidentally deleted.
- Create the corrected Sprint 028 Architect Pack file.
- Create Sprint 028 sprint folder with requirements, blueprint, acceptance, and handoff prompt.
- Update planning state and validation docs.
- Keep CEO Briefing deferred and non-blocking.
- Stop before runtime implementation.

## Out of Scope

- Runtime app code.
- CEO Briefing page work.
- CEO Briefing screenshot evidence.
- FlutterFlow export.
- Firebase, Hermes, backend, native, release, deployment, or package work.

## Business Rules

- File contents are more important than filenames.
- Codex must not apply a pack whose contents do not match the sprint name.
- Only one corrected Sprint 028 pack should remain.
- The next implementation target is app shell polish, not CEO Briefing.
```

### planning/sprints/028-sprint-027-closeout-validation-and-forward-state/blueprint.md

```markdown
# Sprint 028 Blueprint — Sprint 027 Closeout Validation and Forward State

## Files to Inspect

- `git status --branch --short`
- `architect-packs/trina-023-app-completion-forward-build-architect-pack.md`
- `architect-packs/trina-028-sprint-027-closeout-validation-and-forward-state-architect-pack.md.md`, if present
- `planning/STATE.md`
- `docs/VALIDATION.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`

## Files to Create

- `architect-packs/trina-028-sprint-027-closeout-validation-and-forward-state-architect-pack.md`
- `planning/sprints/028-sprint-027-closeout-validation-and-forward-state/requirements.md`
- `planning/sprints/028-sprint-027-closeout-validation-and-forward-state/blueprint.md`
- `planning/sprints/028-sprint-027-closeout-validation-and-forward-state/acceptance.md`
- `planning/sprints/028-sprint-027-closeout-validation-and-forward-state/handoff-prompt.md`

## Files to Modify

- `planning/STATE.md`
- `docs/VALIDATION.md`
- `planning/DECISIONS.md`, only if durable decisions need recording
- `planning/RISKS.md`, only if risks need recording
- `planning/QUESTIONS.md`, only if questions need updating

## File Hygiene Steps

1. Restore deleted Sprint 023 pack if Git shows it deleted.
2. Delete the bad untracked `.md.md` Sprint 028 file if present.
3. Create the corrected Sprint 028 pack with one `.md` extension.
4. Create Sprint 028 sprint folder and four sprint files.
5. Update planning state and validation docs.
6. Run validation.
7. Stop before implementation.
```

### planning/sprints/028-sprint-027-closeout-validation-and-forward-state/acceptance.md

```markdown
# Sprint 028 Acceptance — Sprint 027 Closeout Validation and Forward State

## Complete Criteria

- Correct Sprint 028 Architect Pack exists at `architect-packs/trina-028-sprint-027-closeout-validation-and-forward-state-architect-pack.md`.
- Bad double-extension file `architect-packs/trina-028-sprint-027-closeout-validation-and-forward-state-architect-pack.md.md` is removed if it existed.
- Tracked Sprint 023 Architect Pack is restored if it was accidentally deleted.
- Sprint 028 folder exists under `planning/sprints/028-sprint-027-closeout-validation-and-forward-state/`.
- Sprint 028 folder contains `requirements.md`, `blueprint.md`, `acceptance.md`, and `handoff-prompt.md`.
- `planning/STATE.md` reflects Sprint 028 closeout/forward-state correction.
- CEO Briefing remains deferred, not complete, and not blocking.
- No runtime files changed.
- No CEO Briefing screenshot evidence was created.
- No FlutterFlow export was created.
- `git diff --check` passes.

## Validation Commands

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

## Failure Conditions

- Any runtime code changes are made.
- CEO Briefing is touched.
- Screenshot evidence is created or faked.
- The bad `.md.md` Sprint 028 file remains.
- The correct Sprint 028 pack is missing.
- Sprint 023 Architect Pack remains deleted accidentally.
```

### planning/sprints/028-sprint-027-closeout-validation-and-forward-state/handoff-prompt.md

```markdown
# Sprint 028 Handoff Prompt — Sprint 027 Closeout Validation and Forward State

Read the corrected Sprint 028 Architect Pack first:

- `architect-packs/trina-028-sprint-027-closeout-validation-and-forward-state-architect-pack.md`

Then apply the pack to the project folder.

Rules:

- Do not use the bad double-extension Sprint 028 file if it exists.
- Restore the tracked Sprint 023 Architect Pack if it was accidentally deleted.
- Remove the bad `architect-packs/trina-028-sprint-027-closeout-validation-and-forward-state-architect-pack.md.md` file if present.
- Create or update only the planning/docs files listed in the corrected pack.
- Do not modify runtime code.
- Do not touch CEO Briefing.
- Do not create screenshot evidence.
- Do not export FlutterFlow code.
- Stop before implementation.

Report:

1. Files created.
2. Files modified.
3. Files deleted or restored.
4. Files skipped and why.
5. Validation commands run.
6. Current git status.
```

---

## 8. Acceptance Criteria

Sprint 028 is complete only when:

- The bad mislabeled Sprint 028 `.md.md` file is gone.
- The deleted Sprint 023 Architect Pack is restored if Git still shows it deleted.
- A correct Sprint 028 Architect Pack exists with one `.md` extension.
- Sprint 028 has all four required sprint files.
- Planning state is corrected.
- Validation docs are updated.
- CEO Briefing remains deferred and untouched.
- Runtime implementation has not started.
- Validation passes.

---

## 9. Codex Handoff Prompt

```text
Apply the corrected Sprint 028 Architect Pack.

Use this corrected file as the source of truth:
architect-packs/trina-028-sprint-027-closeout-validation-and-forward-state-architect-pack.md

First, inspect current repo state:

- git status --branch --short
- ls -la architect-packs | grep 'trina-0\(23\|28\)' || true

Then perform only the Sprint 028 planning/docs cleanup:

1. Restore `architect-packs/trina-023-app-completion-forward-build-architect-pack.md` if Git shows it deleted.
2. Remove `architect-packs/trina-028-sprint-027-closeout-validation-and-forward-state-architect-pack.md.md` if it exists, because it is a bad mislabeled duplicate containing Sprint 023 content.
3. Ensure the corrected Sprint 028 Architect Pack exists at:
   `architect-packs/trina-028-sprint-027-closeout-validation-and-forward-state-architect-pack.md`
4. Create or update:
   - `planning/STATE.md`
   - `planning/DECISIONS.md`, only if decisions need recording
   - `planning/RISKS.md`, only if risks need recording
   - `planning/QUESTIONS.md`, only if questions need updating
   - `docs/VALIDATION.md`
   - `planning/sprints/028-sprint-027-closeout-validation-and-forward-state/requirements.md`
   - `planning/sprints/028-sprint-027-closeout-validation-and-forward-state/blueprint.md`
   - `planning/sprints/028-sprint-027-closeout-validation-and-forward-state/acceptance.md`
   - `planning/sprints/028-sprint-027-closeout-validation-and-forward-state/handoff-prompt.md`

Do not modify runtime code.
Do not modify App.tsx or components/*.
Do not touch CEO Briefing.
Do not create or fake screenshot evidence.
Do not export FlutterFlow code.
Do not create Firebase, Hermes, backend, native, release, deployment, or package work.
Stop before implementation.

Run validation:

- git status --branch --short
- git diff --name-only
- git diff --stat
- git diff --check
- test ! -f references/flutterflow/sprint-009/ceo-briefing.png

Report:

1. Files created.
2. Files modified.
3. Files deleted or restored.
4. Files skipped and why.
5. Validation command results.
6. Current git status.
```

---

## 10. Next Step After Sprint 028 Is Applied

After Codex applies this corrected Sprint 028 pack, do not implement code yet.

The next action is to ask Codex to read the next runtime sprint files and summarize before implementation.

The likely next implementation sprint should target:

```text
App.tsx
components/Navigation.tsx
components/Dashboard.tsx
components/VoiceDashboard.tsx
components/TasksView.tsx
components/NotificationsView.tsx
components/CalendarView.tsx
components/FinanceView.tsx
components/KnowledgeBaseView.tsx
```

The goal of that later implementation should be:

- tighten navigation
- tighten return paths
- clarify active navigation state
- improve empty states
- improve fallback copy
- keep Assistant and Tasks capture paths intact
- continue deferring CEO Briefing
