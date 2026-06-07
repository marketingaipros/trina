# Sprint 050 Architect Pack — Mobile Runtime Regression Sweep and Release Readiness

**Project:** Trina / Barbie
**Sprint:** 050-mobile-runtime-regression-sweep-and-release-readiness
**Created:** 2026-06-02
**Architect Layer:** ChatGPT
**Builder Layer:** Codex
**Status:** Architect Pack only. Do not implement until this pack has been applied to the project folder.

---

## 1. Architect Summary

Sprint 049 standardized compact touch targets across Calendar and Tasks. Sprint 050 should now verify that the accumulated mobile/runtime polish work still holds together across the core app after the recent touch-target and short-height changes.

This is a narrow regression and release-readiness sprint.

The Builder should inspect and validate the core runtime surfaces, document any confirmed defects, and make only small targeted fixes if a regression is found during the Sprint 050 inspection.

This sprint should not become a redesign, dashboard rebuild, feature sprint, backend change, Firebase change, dependency change, routing change, or CEO Briefing recovery sprint.

---

## 2. Files This Architect Pack Should Create Or Update

### Create

- `planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/requirements.md`
- `planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/blueprint.md`
- `planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/acceptance.md`
- `planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/handoff-prompt.md`

### Update

- `planning/STATE.md`
- `planning/RISKS.md`
- `docs/VALIDATION.md`

### Update only if Codex finds a direct documented need

- `planning/QUESTIONS.md`

### Do not update unless an actual architecture/API contract changes

- `docs/ARCHITECTURE.md`
- `docs/API.md`

---

## 3. Architect-Facing Requirements

### Goal

Confirm the app remains stable, usable, and visually consistent after Sprints 040-049, with special focus on mobile viewport behavior, core navigation, short-height layouts, and recently hardened compact touch targets.

### Scope

Codex should validate these views where present and reachable:

- Home / Dashboard
- Calendar
- Tasks
- Finance
- Knowledge Base
- Notifications
- App shell / bottom navigation

### Primary checks

- No horizontal overflow at narrow mobile widths.
- Fixed bottom navigation does not cover primary inputs, actions, or empty-state CTAs.
- Core navigation still works.
- Loading, empty, and error states remain reachable and readable where existing fixtures or state paths allow.
- Calendar and Tasks still preserve the Sprint 049 touch-target standard.
- Existing pink/white Barbie visual style is preserved.
- Existing labels and event handlers are preserved.
- No unrelated runtime, backend, Firebase, dependency, routing, or native config changes are introduced.

### Allowed runtime changes

Only small, targeted fixes are allowed when the Builder confirms a real regression during inspection.

Examples of allowed fixes:

- Minor spacing, wrapping, or padding adjustment to prevent mobile overflow.
- Minor bottom padding adjustment to avoid bottom-nav overlap.
- Minor min-height or min-width correction for a compact control missed by Sprint 049.
- Small accessibility label preservation or correction if an existing control regressed.

### Out of scope

- CEO Briefing.
- Restoring or creating `references/flutterflow/sprint-009/ceo-briefing.png`.
- New features.
- UI redesign.
- New routes.
- New dependencies.
- Firebase/backend/native/package config changes.
- Auth changes.
- Data model changes.
- Large component refactors.
- Dashboard redesign.
- Automated screenshot tooling unless it already exists and is documented.

---

## 4. Builder-Facing Implementation Plan

### Step 1 — Read project state and sprint files

Codex must read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/requirements.md`
- `planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/blueprint.md`
- `planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/acceptance.md`
- `planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/handoff-prompt.md`

Then Codex must summarize the sprint before implementation.

### Step 2 — Inspect relevant files

Inspect likely runtime files:

- `App.tsx`
- `components/VoiceDashboard.tsx`
- `components/CalendarView.tsx`
- `components/TasksView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`
- `components/NotificationsView.tsx`

Only modify files where a direct Sprint 050 issue is found.

### Step 3 — Run baseline validation

Before runtime edits, run:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git status --branch --short
```

If lint/build fails due to an existing unrelated issue, document it and do not broaden scope without approval.

### Step 4 — Browser/mobile smoke validation

Use the local app workflow already documented in `docs/VALIDATION.md`.

Validate at minimum:

- `390x844`
- `360x740`

Check:

- Home / Dashboard
- Calendar
- Tasks
- Finance
- Knowledge Base
- Notifications, if present/reachable
- Bottom navigation

For each view, confirm:

- No horizontal overflow.
- Primary actions remain reachable.
- Fixed bottom nav does not hide important controls.
- Text remains readable.
- Scroll behavior works on short mobile height.
- Recently changed Calendar and Tasks controls still meet or intentionally approximate `44px`.

### Step 5 — Apply small fixes only if needed

If a defect is confirmed:

- Make the smallest possible targeted runtime change.
- Preserve existing behavior and handlers.
- Preserve current visual system.
- Avoid fixed widths that create overflow.
- Do not change routing or data flow.

### Step 6 — Update docs/state

Update:

- `planning/STATE.md`
- `planning/RISKS.md`
- `docs/VALIDATION.md`
- Sprint 050 `acceptance.md`

Record:

- What was validated.
- Which viewport sizes were checked.
- Whether runtime changes were made.
- Any existing warnings.
- Any remaining risks.

### Step 7 — Final validation

Run:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
git diff --cached --name-only
```

No staging, commit, or push during implementation unless explicitly requested later.

---

## 5. Acceptance Criteria

Sprint 050 is complete when all of the following are true:

- The Builder inspected the core runtime views listed in this pack.
- `390x844` mobile validation is complete.
- `360x740` mobile validation is complete.
- No horizontal overflow is observed in validated views.
- Bottom navigation does not cover primary inputs, actions, or empty-state CTAs in validated views.
- Calendar and Tasks still satisfy the Sprint 049 compact touch-target standard.
- Any runtime changes are narrow and directly tied to confirmed Sprint 050 issues.
- No CEO Briefing files are touched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- No Firebase, backend, package/dependency, routing, native config, auth, or data model changes are made.
- `npm run lint` passes.
- `npm run build` passes or only reports documented existing non-blocking Vite warnings.
- `git diff --check` passes.
- `git diff --cached --name-only` is empty before any explicit staging instruction.
- `planning/STATE.md`, `planning/RISKS.md`, `docs/VALIDATION.md`, and Sprint 050 `acceptance.md` reflect the final validation status.

---

## 6. Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Mobile polish changes may introduce small spacing regressions on short-height viewports. | Medium | Medium | Validate both `390x844` and `360x740`; keep fixes small. | Active |
| Calendar grid alignment may regress if touch-target classes are adjusted again. | Low | Medium | Inspect Calendar but avoid changing unless a confirmed issue exists. | Active |
| Wrapping filter chips may alter vertical density. | Medium | Low | Confirm scroll behavior and bottom-nav clearance. | Active |
| Release-readiness sweep may tempt broader cleanup. | Medium | Medium | Keep Sprint 050 limited to regression validation and small confirmed fixes. | Active |
| Existing Vite warnings may distract from sprint scope. | High | Low | Document existing warnings; do not solve unless already in scope. | Active |

---

## 7. Decisions

No new durable product decisions are required for this sprint.

Preserve existing decisions:

- The app remains a local/internal runtime polish project.
- CEO Briefing remains protected and out of scope.
- The project folder remains the source of truth.
- Builder does not invent scope.
- Runtime changes require targeted sprint justification.

---

## 8. Open Questions

No blocking questions.

If Codex finds a confirmed defect that requires a larger refactor, it should stop and report the issue instead of implementing beyond Sprint 050 scope.

---

# File Drafts To Apply

## `planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/requirements.md`

```markdown
# Sprint 050 Requirements — Mobile Runtime Regression Sweep and Release Readiness

## Purpose

Validate that the app remains stable, usable, and visually consistent after the recent mobile accessibility, short-height, and compact touch-target polish sprints.

Sprint 050 is a regression and release-readiness sprint. It should inspect the core runtime views and make only small targeted fixes if a confirmed mobile/runtime regression is found.

## Goals

- Validate core mobile runtime behavior at `390x844`.
- Validate short/narrow mobile runtime behavior at `360x740`.
- Confirm no horizontal overflow in core views.
- Confirm fixed bottom navigation does not block primary inputs, actions, or empty-state CTAs.
- Confirm Calendar and Tasks still meet or intentionally approximate the Sprint 049 `44px` compact touch-target standard.
- Preserve the existing pink/white Barbie UI, handlers, labels, and behavior.
- Update validation and state documentation with the final result.

## Views To Inspect

- Home / Dashboard
- Calendar
- Tasks
- Finance
- Knowledge Base
- Notifications, if present/reachable
- App shell / bottom navigation

## Allowed Runtime Changes

Only small targeted fixes are allowed if inspection confirms a real issue.

Allowed examples:

- Minor spacing or wrapping fix.
- Minor bottom padding fix.
- Minor compact touch-target correction.
- Minor overflow prevention.

## Out Of Scope

- CEO Briefing.
- Creating or restoring `references/flutterflow/sprint-009/ceo-briefing.png`.
- New features.
- Redesign.
- New routes.
- New dependencies.
- Firebase/backend/native/package config changes.
- Auth changes.
- Data model changes.
- Large component refactors.
```

## `planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/blueprint.md`

```markdown
# Sprint 050 Blueprint — Mobile Runtime Regression Sweep and Release Readiness

## Read First

Before implementation, read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/requirements.md`
- `planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/blueprint.md`
- `planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/acceptance.md`

## Inspect

Inspect these files before deciding whether runtime edits are needed:

- `App.tsx`
- `components/VoiceDashboard.tsx`
- `components/CalendarView.tsx`
- `components/TasksView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`
- `components/NotificationsView.tsx`

## Baseline Validation

Run:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git status --branch --short
```

## Browser Validation

Validate:

- `390x844`
- `360x740`

Check:

- no horizontal overflow
- bottom navigation clearance
- reachable primary actions
- readable empty/loading/error states where applicable
- Calendar day cells and chips still satisfy Sprint 049 target sizing
- Task filters and compact controls still satisfy Sprint 049 target sizing

## Implementation Rules

- Make no runtime changes unless a direct Sprint 050 issue is found.
- Keep changes small.
- Preserve handlers, labels, styling, and behavior.
- Do not touch CEO Briefing.
- Do not create `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not change Firebase, backend, dependencies, routing, native config, auth, or data model.

## Documentation Updates

Update:

- `planning/STATE.md`
- `planning/RISKS.md`
- `docs/VALIDATION.md`
- `planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/acceptance.md`

## Final Validation

Run:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
git diff --cached --name-only
```
```

## `planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/acceptance.md`

```markdown
# Sprint 050 Acceptance — Mobile Runtime Regression Sweep and Release Readiness

## Required Acceptance Criteria

- [ ] Core runtime views were inspected:
  - [ ] Home / Dashboard
  - [ ] Calendar
  - [ ] Tasks
  - [ ] Finance
  - [ ] Knowledge Base
  - [ ] Notifications, if present/reachable
  - [ ] Bottom navigation / app shell
- [ ] `390x844` browser/mobile validation completed.
- [ ] `360x740` browser/mobile validation completed.
- [ ] No horizontal overflow found in validated views.
- [ ] Bottom navigation does not hide primary inputs, actions, or empty-state CTAs.
- [ ] Calendar still satisfies Sprint 049 compact touch-target standard.
- [ ] Tasks still satisfy Sprint 049 compact touch-target standard.
- [ ] Any runtime changes are small and tied to confirmed Sprint 050 issues.
- [ ] No CEO Briefing files touched.
- [ ] `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- [ ] No Firebase/backend/package/dependency/routing/native config/auth/data model changes made.
- [ ] `git diff --check` passes.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes or only reports existing non-blocking Vite warnings.
- [ ] `git diff --cached --name-only` is empty before explicit staging.
- [ ] `planning/STATE.md` updated.
- [ ] `planning/RISKS.md` updated.
- [ ] `docs/VALIDATION.md` updated.

## Validation Notes

TBD by Builder.

## Files Changed

TBD by Builder.

## Final Status

TBD by Builder.
```

## `planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/handoff-prompt.md`

```markdown
# Sprint 050 Handoff Prompt — Mobile Runtime Regression Sweep and Release Readiness

Read the Sprint 050 planning files before making any runtime changes:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/requirements.md`
- `planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/blueprint.md`
- `planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/acceptance.md`

Then summarize:

1. What Sprint 050 is supposed to accomplish.
2. Which files you expect to inspect.
3. Which files you expect may need modification, if any.
4. The validation steps you will run.
5. Any blockers, ambiguities, or risks.

Do not start implementation until I approve your summary.

Hard guards:

- Do not touch CEO Briefing.
- Do not create or restore `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not change Firebase, backend, package/dependency, routing, native config, auth, or data model.
- Do not stage, commit, or push anything.
- Do not redesign the UI.
- Do not add new features.
```

---

# Codex Apply-Pack Prompt

Use this prompt first. It applies planning/docs only and does not start implementation.

```text
Apply the Sprint 050 Architect Pack as planning/docs only.

Create:

- planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/requirements.md
- planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/blueprint.md
- planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/acceptance.md
- planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/handoff-prompt.md

Update:

- planning/STATE.md
- planning/RISKS.md
- docs/VALIDATION.md

Update planning/QUESTIONS.md only if a direct open question is introduced.

Do not modify runtime files.
Do not touch CEO Briefing.
Do not create or restore references/flutterflow/sprint-009/ceo-briefing.png.
Do not change Firebase, backend, package/dependency, routing, native config, auth, or data model.
Do not stage, commit, or push anything.

After applying the planning/docs files, run:

1. git diff --check
2. test ! -f references/flutterflow/sprint-009/ceo-briefing.png
3. git diff --name-only
4. git status --branch --short
5. git diff --cached --name-only

Report:

1. Files created.
2. Files updated.
3. Validation results.
4. Confirmation that no runtime files changed.
5. Confirmation that CEO Briefing stayed untouched.
6. Confirmation that references/flutterflow/sprint-009/ceo-briefing.png remains absent.
7. Confirmation that nothing was staged, committed, or pushed.
```

---

# Next-Step Prompt After Codex Applies The Pack

Use this only after Codex applies the pack.

```text
Read the Sprint 050 planning files before making runtime changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/requirements.md
- planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/blueprint.md
- planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/acceptance.md
- planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/handoff-prompt.md

Then summarize:

1. What Sprint 050 is supposed to accomplish.
2. Which files you expect to inspect.
3. Which files you expect may need modification, if any.
4. The validation steps you will run.
5. Any blockers, ambiguities, or risks.

Do not start implementation until I approve your summary.

Hard guards:
- Do not touch CEO Briefing.
- Do not create or restore references/flutterflow/sprint-009/ceo-briefing.png.
- Do not change Firebase, backend, package/dependency, routing, native config, auth, or data model.
- Do not stage, commit, or push anything.
- Do not redesign the UI.
- Do not add new features.
```
