# Sprint 051 Architect Pack - Release Candidate Build Warning Triage and Stability Gate

**Project:** Trina / Barbie
**Sprint:** 051-release-candidate-build-warning-triage-and-stability-gate
**Created:** 2026-06-07
**Architect Layer:** ChatGPT
**Builder Layer:** Codex
**Status:** Architect Pack only. Planning/docs application only until implementation is explicitly approved.

---

## 1. Architect Summary

Sprint 050 completed the mobile runtime regression sweep and left the app in a release-readiness posture, with the production build passing while still reporting known Vite warnings.

Sprint 051 is a release-candidate stability gate focused on triaging those build warnings before a launch decision. The goal is to separate harmless release warnings from warnings that indicate a concrete stability, loading, auth, or bundle-risk issue.

This sprint must start read-first. Runtime edits are not part of the planning/docs application. During a later approved implementation phase, runtime edits are allowed only if inspection confirms a small, direct fix for a warning-related release risk.

This sprint is not a redesign, feature sprint, backend/Firebase change, dependency change, deploy sprint, native build sprint, or CEO Briefing recovery sprint.

---

## 2. Files This Architect Pack Should Create Or Update

### Create

- `planning/sprints/051-release-candidate-build-warning-triage-and-stability-gate/requirements.md`
- `planning/sprints/051-release-candidate-build-warning-triage-and-stability-gate/blueprint.md`
- `planning/sprints/051-release-candidate-build-warning-triage-and-stability-gate/acceptance.md`
- `planning/sprints/051-release-candidate-build-warning-triage-and-stability-gate/handoff-prompt.md`

### Update

- `planning/STATE.md`
- `planning/RISKS.md`
- `docs/VALIDATION.md`

### Do not update unless a direct documented need is found

- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`

---

## 3. Architect-Facing Requirements

### Goal

Triage the current release-candidate build warnings, decide whether each warning is acceptable for release or needs a small fix, and preserve the stable Sprint 050 runtime baseline.

### Scope

Codex should inspect:

- Current build output and warning text.
- `services/authService.ts` import ownership and any mixed static/dynamic import paths.
- Bundle-size warning context from the Vite build output.
- Existing validation docs and risks that mention build warnings.
- Core app behavior only as needed to confirm any warning-related fix.

### Primary checks

- `npm run build` still passes.
- Known Vite warnings are captured exactly enough for release triage.
- The `services/authService.ts` mixed static/dynamic import warning is classified as accepted, watch, or fix-required based on source inspection.
- The large bundle warning is classified as accepted, watch, or fix-required based on release risk.
- Any runtime fix, if later approved, is small and directly tied to a confirmed warning-related stability issue.
- Existing labels, handlers, routing, data flow, auth behavior, and pink/white Barbie UI are preserved.

### Out of scope

- CEO Briefing.
- Creating, restoring, or modifying `references/flutterflow/sprint-009/ceo-briefing.png`.
- New features.
- UI redesign.
- New routes.
- New dependencies.
- Firebase/backend/auth/native config/release/deployment changes.
- Data model changes.
- Large refactors.
- Mobile app packaging.
- Deploy commands.

---

## 4. Builder-Facing Implementation Plan

### Step 1 - Read project state and sprint files

Codex must read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/051-release-candidate-build-warning-triage-and-stability-gate/requirements.md`
- `planning/sprints/051-release-candidate-build-warning-triage-and-stability-gate/blueprint.md`
- `planning/sprints/051-release-candidate-build-warning-triage-and-stability-gate/acceptance.md`
- `planning/sprints/051-release-candidate-build-warning-triage-and-stability-gate/handoff-prompt.md`

Then Codex must summarize the sprint before implementation.

### Step 2 - Capture baseline warning state

Run the documented validation commands for a warning triage baseline:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run build
git status --branch --short
```

Record build warnings without treating existing non-fatal warnings as failures before source inspection.

### Step 3 - Inspect warning sources

Inspect likely files only:

- `services/authService.ts`
- files that import `services/authService.ts`
- `vite.config.ts`, if build configuration context is needed
- `package.json`, for script context only

Use `rg` to find static and dynamic imports before deciding whether any code change is warranted.

### Step 4 - Decide accepted warning vs small fix

For each warning:

- Identify the warning.
- Identify the likely source.
- Decide whether it is release-acceptable, watch-only, or fix-required.
- If fix-required, identify the smallest safe runtime/source edit.

Do not implement runtime changes until the user approves the summary.

### Step 5 - Validate after approved implementation

After any approved fix, run:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
git diff --cached --name-only
```

### Step 6 - Update closeout docs

Update Sprint 051 acceptance and validation notes with:

- Warnings observed.
- Classification and rationale.
- Whether runtime/source files changed.
- Final command results.
- Remaining release risks, if any.

No staging, commit, push, deploy, native build, or CEO Briefing work is allowed without explicit approval.
