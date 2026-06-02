# Trina Sprint 039 Architect Pack — Forward State and Next Runtime Priority Selection

**Sprint:** 039
**Name:** Forward State and Next Runtime Priority Selection
**Project:** Trina
**Date:** 2026-06-01
**Architect Layer:** ChatGPT
**Builder Layer:** Codex
**Status:** Architect Pack ready for Builder application

---

## Architect Intent

Sprint 039 is a planning and validation sprint after the clean Sprint 038 smoke-test pass.

The goal is to preserve the verified clean baseline, update project state, and select the next small runtime priority without starting implementation. This sprint should keep the repo stable and avoid unnecessary app changes.

Sprint 039 should answer one operational question:

> What is the safest next runtime sprint now that core app smoke validation passed?

This is not a feature build sprint.

---

## Scope Summary

### In Scope

- Record that Sprint 038 closed cleanly.
- Confirm the repo is clean on `main`.
- Review current planning files for the next safest runtime priority.
- Identify candidate Sprint 040 options.
- Recommend one focused Sprint 040 direction.
- Update validation documentation with Sprint 039 checkpoint results.
- Preserve all Sprint 038 protections.

### Out of Scope

- Runtime code changes.
- UI redesign.
- Backend changes.
- Firebase changes.
- Package/dependency changes.
- Native/mobile build changes.
- Release/deployment changes.
- CEO Briefing work.
- Screenshot/evidence generation.
- Creating `references/flutterflow/sprint-009/ceo-briefing.png`.
- Starting Sprint 040 implementation.

---

## Files This Architect Pack Should Create or Update

### Create

```text
planning/sprints/039-forward-state-and-next-runtime-priority-selection/requirements.md
planning/sprints/039-forward-state-and-next-runtime-priority-selection/blueprint.md
planning/sprints/039-forward-state-and-next-runtime-priority-selection/acceptance.md
planning/sprints/039-forward-state-and-next-runtime-priority-selection/handoff-prompt.md
```

### Update

```text
planning/STATE.md
docs/VALIDATION.md
```

### Update Only If Needed

```text
planning/RISKS.md
planning/QUESTIONS.md
planning/DECISIONS.md
```

Only update these if the review discovers a new durable risk, open question, or decision.

### Do Not Touch

```text
App.tsx
components/
src/
services/
types.ts
package.json
package-lock.json
vite.config.*
firebase.*
android/
ios/
build/
dist/
references/flutterflow/sprint-009/ceo-briefing.png
```

---

# File: `planning/STATE.md`

Update the current state to show Sprint 039 as active.

```markdown
# Project State

## Current Sprint

Sprint 039 — Forward State and Next Runtime Priority Selection

## Current Status

Sprint 038 closed cleanly and was pushed to `main`.

Sprint 038 confirmed the core app smoke-test baseline:

- Dashboard/Home reachable.
- Assistant / Voice Entry reachable.
- Typed task capture works.
- Tasks render captured local task.
- Notifications fallback state is readable.
- Reminder fixture paths work.
- Dashboard notification badge aligns with fixture data.
- Notifications list renders the fixture reminder.
- Bottom navigation active state works with `aria-current="page"`.
- Calendar, Finance, and Knowledge Base are reachable.
- Mobile layout around `390x844` has no horizontal overflow or bottom-nav overlap.

No runtime files were changed in Sprint 038.

## Active Work

Sprint 039 is a planning and validation checkpoint.

The Builder should verify the clean repo state, review the current planning files, and recommend the safest next focused runtime sprint.

## Recently Completed

- Sprint 038 Architect Pack applied.
- Sprint 038 smoke-test execution passed.
- Sprint 038 acceptance review passed.
- Sprint 038 closeout committed and pushed.

## Protected Scope

The CEO Briefing remains deferred.

Do not create or modify:

- `references/flutterflow/sprint-009/ceo-briefing.png`
- CEO Briefing evidence files
- backend files
- Firebase files
- package/dependency files
- native build files
- release/deployment files

## Next Action

Run Sprint 039 as a read-only review and planning checkpoint.

Recommend the next focused Sprint 040 runtime priority without implementing it.
```

---

# File: `docs/VALIDATION.md`

Add a Sprint 039 validation section.

```markdown
## Sprint 039 — Forward State and Next Runtime Priority Selection

### Purpose

Sprint 039 preserves the clean Sprint 038 smoke-test baseline and prepares the next focused runtime sprint.

This sprint is docs/planning only unless a documentation correction is required.

### Required Commands

```bash
git status --branch --short
git diff --name-only
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

### Required Review

The Builder must review:

- `planning/STATE.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `planning/DECISIONS.md`
- `docs/VALIDATION.md`
- Latest completed sprint folder
- Current Sprint 039 files

### Expected Result

- Repo state is understood.
- Sprint 038 clean baseline is preserved.
- No runtime files are changed.
- No protected files are touched.
- Next Sprint 040 direction is recommended.
- Any new risk, question, or decision is recorded only if discovered.

### Protected File Check

This must pass:

```bash
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

### Completion Standard

Sprint 039 is complete when:

- The clean `main` baseline is confirmed.
- Sprint 039 docs are created.
- `planning/STATE.md` reflects Sprint 039 status.
- `docs/VALIDATION.md` records Sprint 039 validation rules.
- Builder recommends one focused Sprint 040 direction.
- No implementation work has started.
```

---

# File: `planning/sprints/039-forward-state-and-next-runtime-priority-selection/requirements.md`

```markdown
# Sprint 039 Requirements — Forward State and Next Runtime Priority Selection

## Purpose

Sprint 039 is a controlled planning and validation checkpoint after the clean Sprint 038 smoke-test pass.

The goal is to preserve the clean app baseline and choose the safest next runtime priority for Sprint 040.

## Background

Sprint 038 confirmed that the current app shell and core views pass smoke validation without runtime changes.

That means the next sprint should not guess. It should be chosen from the current product priorities, known risks, and validation history.

## Requirements

### R1 — Confirm Clean Baseline

The Builder must confirm the repo is clean or explain any current changes.

Required command:

```bash
git status --branch --short
```

### R2 — Preserve Sprint 038 Protection Rules

The Builder must confirm:

- No CEO Briefing work starts.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- No backend files are modified.
- No Firebase files are modified.
- No package/dependency files are modified.
- No native/build/release/deployment files are modified.
- No runtime files are modified during Sprint 039.

### R3 — Review Current Planning State

The Builder must read:

- `planning/STATE.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `planning/DECISIONS.md`
- `docs/VALIDATION.md`
- Sprint 038 files
- Sprint 039 files

### R4 — Recommend Sprint 040 Direction

The Builder must recommend one focused Sprint 040 runtime direction.

The recommendation should include:

- Sprint name.
- Why this is the safest next step.
- Expected runtime files.
- Expected validation.
- Risks or blockers.
- Whether a new Architect Pack is required before implementation.

### R5 — Do Not Implement Sprint 040

Sprint 039 must not start implementation for Sprint 040.

The output is a recommendation, not code.

## Non-Goals

- No runtime polish unless a docs typo blocks clarity.
- No app code changes.
- No dependency updates.
- No release preparation.
- No screenshot evidence.
- No CEO Briefing work.

## Success Standard

Sprint 039 succeeds when the project has a clean forward plan and a recommended Sprint 040 target.
```

---

# File: `planning/sprints/039-forward-state-and-next-runtime-priority-selection/blueprint.md`

```markdown
# Sprint 039 Blueprint — Forward State and Next Runtime Priority Selection

## Builder Plan

### Step 1 — Read Required Files

Read:

```text
AGENTS.md
planning/STATE.md
planning/DECISIONS.md
planning/DOMAIN.md
planning/RISKS.md
planning/QUESTIONS.md
docs/VALIDATION.md
planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/requirements.md
planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/blueprint.md
planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/acceptance.md
planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/handoff-prompt.md
planning/sprints/039-forward-state-and-next-runtime-priority-selection/requirements.md
planning/sprints/039-forward-state-and-next-runtime-priority-selection/blueprint.md
planning/sprints/039-forward-state-and-next-runtime-priority-selection/acceptance.md
```

### Step 2 — Confirm Repo State

Run:

```bash
git status --branch --short
git diff --name-only
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

### Step 3 — Review Candidate Next Runtime Priorities

Review the current state and recent sprint history.

Candidate Sprint 040 directions may include:

1. A focused runtime polish sprint for a specific view.
2. A task/reminder flow hardening sprint.
3. A mobile layout/accessibility hardening sprint.
4. A validation-only checkpoint if no safe runtime target is ready.

The Builder should not invent product scope. It should recommend from evidence already present in the planning files.

### Step 4 — Document Recommendation

Update `planning/STATE.md` with:

- Sprint 039 checkpoint status.
- Clean baseline confirmation.
- Recommended Sprint 040 direction.
- Any blocker or ambiguity.

Update `docs/VALIDATION.md` with:

- Sprint 039 validation command results.
- Protected-file confirmation.
- Whether runtime files changed.

### Step 5 — Stop Before Implementation

Do not implement Sprint 040.

Report the recommendation to the operator for Architect approval.
```

---

# File: `planning/sprints/039-forward-state-and-next-runtime-priority-selection/acceptance.md`

```markdown
# Sprint 039 Acceptance — Forward State and Next Runtime Priority Selection

Sprint 039 is complete only when all criteria below are satisfied.

## A1 — Clean Baseline Confirmed

- `git status --branch --short` is reported.
- Any changed or untracked files are explained.
- No unexplained runtime files are present.

## A2 — Protected Files Preserved

- CEO Briefing files are untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- No backend files changed.
- No Firebase files changed.
- No package/dependency files changed.
- No native files changed.
- No build/release/deployment files changed.

## A3 — Sprint 039 Documentation Created

The following files exist:

- `planning/sprints/039-forward-state-and-next-runtime-priority-selection/requirements.md`
- `planning/sprints/039-forward-state-and-next-runtime-priority-selection/blueprint.md`
- `planning/sprints/039-forward-state-and-next-runtime-priority-selection/acceptance.md`
- `planning/sprints/039-forward-state-and-next-runtime-priority-selection/handoff-prompt.md`

## A4 — State and Validation Updated

The following files are updated:

- `planning/STATE.md`
- `docs/VALIDATION.md`

## A5 — Sprint 040 Recommendation Provided

The Builder reports one recommended Sprint 040 direction with:

- Proposed sprint name.
- Reason.
- Expected files.
- Expected validation steps.
- Risks or blockers.
- Confirmation that a new Architect Pack is required before implementation.

## A6 — No Implementation Started

- No runtime files changed.
- No code was modified.
- No Sprint 040 work was implemented.
- No staging, commit, or push occurred unless explicitly approved after acceptance review.
```

---

# File: `planning/sprints/039-forward-state-and-next-runtime-priority-selection/handoff-prompt.md`

```markdown
# Sprint 039 Handoff Prompt

Paste this into Codex after the Sprint 039 Architect Pack has been applied to the project folder.

```text
Read the following files before making changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/requirements.md
- planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/blueprint.md
- planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/acceptance.md
- planning/sprints/039-forward-state-and-next-runtime-priority-selection/requirements.md
- planning/sprints/039-forward-state-and-next-runtime-priority-selection/blueprint.md
- planning/sprints/039-forward-state-and-next-runtime-priority-selection/acceptance.md

Then summarize:

1. What Sprint 039 is supposed to accomplish.
2. Which files you expect to modify.
3. What validation commands you will run.
4. Any blockers or ambiguities.
5. Your initial recommendation for Sprint 040 direction, if clear from the files.

Rules:

- Do not start implementation.
- Do not stage, commit, or push.
- Do not modify runtime files.
- Do not touch CEO Briefing.
- Do not create `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not modify backend, Firebase, package, native, build, release, or deployment files.
- Wait for approval before editing files.
```
```

---

## Codex Apply-Pack Prompt

Use this prompt only after saving this Architect Pack.

```text
Apply the Sprint 039 Architect Pack to the project folder.

Create or update only the files listed in the pack:

- planning/STATE.md
- docs/VALIDATION.md
- planning/sprints/039-forward-state-and-next-runtime-priority-selection/requirements.md
- planning/sprints/039-forward-state-and-next-runtime-priority-selection/blueprint.md
- planning/sprints/039-forward-state-and-next-runtime-priority-selection/acceptance.md
- planning/sprints/039-forward-state-and-next-runtime-priority-selection/handoff-prompt.md

Do not modify runtime files.
Do not modify backend, Firebase, package, native, build, release, or deployment files.
Do not touch CEO Briefing.
Do not create `references/flutterflow/sprint-009/ceo-briefing.png`.
Do not stage, commit, or push.

After applying the pack, run:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

Report:

1. Files created.
2. Files updated.
3. Validation results.
4. Final git status.
```

---

## Architect Notes

Sprint 039 is intentionally small.

The project just passed a clean core smoke test. The next safe move is to decide what runtime work should happen next, not to randomly edit the app.

The Builder should not implement Sprint 040 until a separate Sprint 040 Architect Pack exists and has been applied to the project folder.
