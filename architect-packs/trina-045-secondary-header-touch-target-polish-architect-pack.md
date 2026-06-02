# Architect Pack: Sprint 045 — Secondary Header Touch Target Polish

**Project:** Trina / trinaos-voice
**Sprint:** 045-secondary-header-touch-target-polish
**Created:** 2026-06-02
**Architect Layer:** ChatGPT
**Builder Layer:** Codex
**Pack Type:** Planning/docs first, then narrow runtime implementation only after readback approval

---

## 1. Architect Intent

Sprint 045 should turn Sprint 044's non-blocking mobile smoke observation into a narrow implementation sprint.

Sprint 044 confirmed the non-CEO mobile app shell passed smoke at exact `390x844` across Dashboard/Home, Tasks, Calendar, Finance, Knowledge Base, and Notifications/reminders. No blocking runtime defects were found, no horizontal overflow was observed, and no bottom-navigation overlap blocked primary controls.

The only follow-up candidate was that some secondary header, back, and AI action controls measured around `40x40`, while recent mobile hardening has been aiming at the `44x44` mobile touch target.

Sprint 045 should inspect those secondary controls, decide the smallest shared styling or component-level adjustment, apply it narrowly, and validate that the change does not create layout regressions.

---

## 2. Scope Boundary

### In Scope

- Inspect secondary header, back, and AI action controls in the non-CEO app shell.
- Identify where the approximately `40x40` controls are defined.
- Prefer a shared styling or component-level fix when safe.
- Bring the targeted secondary controls to a `44x44` minimum touch target where layout allows.
- Preserve existing labels, icons, actions, navigation, and state behavior.
- Validate mobile rendering at exact `390x844` where available.
- Update planning and validation docs after implementation.

### Out of Scope

- No CEO Briefing work.
- Do not create or restore `references/flutterflow/sprint-009/ceo-briefing.png`.
- No broad redesign of headers, navigation, dashboard cards, or page layouts.
- No new feature behavior.
- No new routes.
- No database, backend, Firebase, dependency, or package changes.
- No accessibility overhaul beyond the targeted touch-target polish.
- No unrelated lint cleanup.
- No changes to primary task-row controls unless they share the same safe touch-target primitive and already satisfy the intent.

---

## 3. Files To Create Or Update

Codex should apply this Architect Pack by creating or updating the following files first:

```text
architect-packs/trina-045-secondary-header-touch-target-polish-architect-pack.md
planning/STATE.md
docs/VALIDATION.md
planning/sprints/045-secondary-header-touch-target-polish/requirements.md
planning/sprints/045-secondary-header-touch-target-polish/blueprint.md
planning/sprints/045-secondary-header-touch-target-polish/acceptance.md
planning/sprints/045-secondary-header-touch-target-polish/handoff-prompt.md
```

Conditional files:

```text
planning/RISKS.md        # only if new risks are discovered or accepted
planning/QUESTIONS.md    # only if a blocker or unresolved decision appears
planning/DECISIONS.md    # only if Sprint 045 makes a durable touch-target standard decision
```

Runtime files are not part of the Architect Pack application step. They may be modified only after Codex reads the Sprint 045 files and the operator approves Codex's implementation summary.

Likely runtime inspection or modification candidates after approval:

```text
App.tsx
components/TasksView.tsx
components/CalendarView.tsx
components/FinanceView.tsx
components/KnowledgeBaseView.tsx
components/NotificationsView.tsx
components/*Header*.tsx
components/*Navigation*.tsx
components/*Button*.tsx
```

Codex must inspect actual repo files before choosing runtime targets.

---

## 4. File: planning/STATE.md Update

Append or update the current state to reflect:

```markdown
# Project State

## Current Sprint

Sprint 045 — Secondary Header Touch Target Polish

## Current Status

Sprint 044 closed and pushed. Sprint 044 mobile runtime smoke passed at exact `390x844` with no blocking defects, no runtime changes, and no CEO Briefing impact.

Sprint 045 is ready for Architect Pack application. The sprint will inspect and narrowly polish secondary header, back, and AI action controls that were observed around `40x40` during Sprint 044, with the goal of aligning them to the `44x44` mobile touch target where safe.

## Next Action

Apply Sprint 045 planning files only. Then have Codex read the sprint files and summarize the expected implementation plan before touching runtime files.

## Guardrails

- Do not touch CEO Briefing.
- Do not create `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not modify runtime files until the Sprint 045 summary gate is approved.
- Keep Sprint 045 narrow to secondary touch-target polish.
```

---

## 5. File: docs/VALIDATION.md Update

Add a Sprint 045 validation section:

```markdown
## Sprint 045 — Secondary Header Touch Target Polish Validation

Sprint 045 validates that targeted secondary header, back, and AI action controls meet or intentionally document the mobile touch-target standard after the narrow polish pass.

Required validation:

- Inspect target controls before changes and record where the touch target is below `44x44` or visually constrained.
- Apply the smallest safe styling or component-level change.
- Validate mobile viewport at exact `390x844` if available; otherwise document the actual measured viewport.
- Smoke Dashboard/Home, Tasks, Calendar, Finance, Knowledge Base, and Notifications/reminders if reachable.
- Confirm no horizontal overflow.
- Confirm bottom navigation remains usable and does not overlap primary controls.
- Confirm targeted secondary controls are at least `44x44` where changed.
- Confirm labels, aria-labels, visible text, or accessible names are preserved where inspectable.
- Confirm existing primary task row controls remain at least `44x44`.

Required commands:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
```

Expected result:

- Targeted secondary controls meet the `44x44` mobile touch target where safe.
- Any exception is documented with reason and follow-up recommendation.
- No unrelated runtime behavior changes are introduced.
- CEO Briefing remains untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
```

---

## 6. File: planning/sprints/045-secondary-header-touch-target-polish/requirements.md

```markdown
# Sprint 045 Requirements — Secondary Header Touch Target Polish

## Purpose

Sprint 045 addresses the Sprint 044 follow-up observation that some secondary header, back, and AI action controls measure around `40x40` on mobile.

The goal is to decide and implement the smallest safe polish needed to align those secondary controls with the `44x44` mobile touch target used by recent mobile hardening work.

## Background

Sprint 044 completed a mobile runtime smoke at exact `390x844`. Dashboard/Home, Tasks, Calendar, Finance, Knowledge Base, and Notifications/reminders rendered cleanly. No blocking runtime defects, horizontal overflow, or bottom-navigation overlap were found.

The only follow-up was a non-blocking observation: some secondary header/back/AI action controls measured around `40x40`.

## Requirements

1. Inspect the current secondary header, back, and AI action controls across reachable non-CEO app shell surfaces.
2. Identify the source of any controls below the `44x44` target.
3. Prefer a shared style or reusable control adjustment when safe.
4. Preserve existing behavior, labels, icons, navigation, and state transitions.
5. Keep layout stable at mobile viewport `390x844`.
6. Do not introduce horizontal overflow.
7. Do not create bottom-navigation overlap.
8. Do not change CEO Briefing or related reference files.
9. Update `docs/VALIDATION.md` with the validation result.
10. Update `planning/STATE.md` with Sprint 045 completion status and recommended next action.

## Non-Goals

- No broad visual redesign.
- No app shell restructure.
- No new feature behavior.
- No data model changes.
- No backend or Firebase changes.
- No dependency changes.
- No unrelated lint cleanup.

## Constraints

- Keep changes small and reviewable.
- Stop and report before making broader layout changes.
- Document any exception where `44x44` cannot be achieved safely.
- Maintain the existing CEO Briefing guardrail.
```

---

## 7. File: planning/sprints/045-secondary-header-touch-target-polish/blueprint.md

```markdown
# Sprint 045 Blueprint — Secondary Header Touch Target Polish

## Implementation Strategy

Sprint 045 should be inspect-first, then narrow implementation.

The Builder must not start runtime edits until it reads the sprint files and receives approval on its summary.

## Step 1 — Inspect Current Controls

Inspect reachable non-CEO surfaces and identify secondary controls around `40x40`, especially:

- header back buttons
- close buttons
- AI action buttons
- compact icon-only header controls
- secondary action buttons near page titles or section headers

Likely files to inspect include:

```text
App.tsx
components/TasksView.tsx
components/CalendarView.tsx
components/FinanceView.tsx
components/KnowledgeBaseView.tsx
components/NotificationsView.tsx
components/*Header*.tsx
components/*Navigation*.tsx
components/*Button*.tsx
```

Use actual repo structure as source of truth.

## Step 2 — Choose Smallest Safe Fix

Prefer one of these approaches, in this order:

1. Shared class/style adjustment if the same control pattern is reused.
2. Reusable button/header component adjustment if a component owns the target controls.
3. Local style adjustment only where the pattern is not shared.

Target behavior:

- minimum width: `44px`
- minimum height: `44px`
- preserve visible size if possible through padding/min-size rather than larger icons
- preserve accessible labels and existing click handlers
- avoid layout shifts that crowd headers or create overflow

## Step 3 — Implement Narrowly

Make only the runtime edits needed for the identified target controls.

Do not modify unrelated surfaces.
Do not change data, fixtures, routing, dependencies, or build config.
Do not touch CEO Briefing.

## Step 4 — Validate Mobile Runtime

Validate at exact `390x844` if available. If not, document the actual viewport used.

Smoke these surfaces:

- Dashboard/Home
- Tasks
- Calendar
- Finance
- Knowledge Base
- Notifications/reminders if reachable

Check:

- target controls are at least `44x44` where changed
- navigation still works
- no horizontal overflow
- bottom navigation remains usable
- primary controls are not blocked
- accessible labels/names remain present where inspectable
- no empty/error/loading regressions are introduced

## Step 5 — Update Docs

Update:

```text
docs/VALIDATION.md
planning/STATE.md
```

Update only if evidence requires it:

```text
planning/RISKS.md
planning/QUESTIONS.md
planning/DECISIONS.md
```

## Step 6 — Run Validation Commands

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
```

## Stop Conditions

Stop and report if:

- the touch-target issue is tied to a broader layout system requiring redesign
- a `44x44` change creates overflow or header crowding
- a runtime defect unrelated to Sprint 045 appears
- CEO Briefing files appear in the diff
- `references/flutterflow/sprint-009/ceo-briefing.png` appears
```

---

## 8. File: planning/sprints/045-secondary-header-touch-target-polish/acceptance.md

```markdown
# Sprint 045 Acceptance Criteria — Secondary Header Touch Target Polish

Sprint 045 is complete only when all applicable criteria are satisfied.

## Planning / Process

- [ ] Sprint 045 planning files exist:
  - `requirements.md`
  - `blueprint.md`
  - `acceptance.md`
  - `handoff-prompt.md`
- [ ] Architect Pack exists in `architect-packs/`.
- [ ] Codex completed an inspect-first summary before runtime changes.
- [ ] Operator approved the summary before runtime changes.

## Runtime Scope

- [ ] Secondary header, back, and AI action controls were inspected across reachable non-CEO app shell surfaces.
- [ ] Target controls below the `44x44` mobile touch target were identified or explicitly found not present.
- [ ] Any implemented runtime change is limited to the targeted touch-target polish.
- [ ] Existing labels, icons, click handlers, navigation, and state behavior are preserved.
- [ ] No CEO Briefing files were modified.
- [ ] `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

## Mobile Validation

- [ ] Mobile validation ran at exact `390x844`, or the actual measured viewport is documented.
- [ ] Dashboard/Home was smoked.
- [ ] Tasks was smoked.
- [ ] Calendar was smoked.
- [ ] Finance was smoked.
- [ ] Knowledge Base was smoked.
- [ ] Notifications/reminders was smoked if reachable.
- [ ] No horizontal overflow was observed.
- [ ] Bottom navigation remained usable.
- [ ] No bottom-nav overlap blocked primary controls.
- [ ] Targeted secondary controls are at least `44x44` where changed, or exceptions are documented.
- [ ] Accessible labels/names are preserved where inspectable.
- [ ] Existing primary controls remain reachable.

## Documentation

- [ ] `docs/VALIDATION.md` records Sprint 045 validation.
- [ ] `planning/STATE.md` records Sprint 045 status and recommended next action.
- [ ] `planning/RISKS.md` is updated only if a new material risk is discovered.
- [ ] `planning/QUESTIONS.md` is updated only if a blocker or unresolved question remains.
- [ ] `planning/DECISIONS.md` is updated only if a durable touch-target standard decision is made.

## Commands

- [ ] `git diff --check` passes.
- [ ] `test ! -f references/flutterflow/sprint-009/ceo-briefing.png` passes.
- [ ] `npm run lint` passes or any known non-blocking issue is documented.
- [ ] `npm run build` passes or any known non-blocking warning is documented.
- [ ] `git diff --name-only` contains only approved Sprint 045 files.
- [ ] `git status --branch --short` is reviewed before staging.

## Closeout

- [ ] The final report lists changed files.
- [ ] The final report confirms whether runtime files changed.
- [ ] The final report confirms CEO Briefing stayed untouched.
- [ ] The final report confirms `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- [ ] The final report recommends the next narrow sprint priority.
```

---

## 9. File: planning/sprints/045-secondary-header-touch-target-polish/handoff-prompt.md

```markdown
# Sprint 045 Handoff Prompt — Secondary Header Touch Target Polish

Use this prompt with Codex after the Sprint 045 Architect Pack has been applied to the project folder.

```text
Read the following files before making changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/045-secondary-header-touch-target-polish/requirements.md
- planning/sprints/045-secondary-header-touch-target-polish/blueprint.md
- planning/sprints/045-secondary-header-touch-target-polish/acceptance.md

Then summarize:

1. What Sprint 045 is supposed to accomplish.
2. Which files you expect to inspect or modify.
3. The smallest safe implementation approach you expect to use.
4. What tests or validation steps you will run.
5. Any blockers, ambiguities, or risky assumptions.

Do not start implementation yet.
Do not stage, commit, or push anything.
Do not touch CEO Briefing.
Do not recreate references/flutterflow/sprint-009/ceo-briefing.png.
Do not modify runtime files until I approve your summary.
```
```

---

## 10. Codex Apply-Pack Prompt

Use this prompt first. It applies the Architect Pack to the folder as planning/docs only.

```text
Apply the Sprint 045 Architect Pack as planning/docs only.

Create or update only these files:

- architect-packs/trina-045-secondary-header-touch-target-polish-architect-pack.md
- planning/STATE.md
- docs/VALIDATION.md
- planning/sprints/045-secondary-header-touch-target-polish/requirements.md
- planning/sprints/045-secondary-header-touch-target-polish/blueprint.md
- planning/sprints/045-secondary-header-touch-target-polish/acceptance.md
- planning/sprints/045-secondary-header-touch-target-polish/handoff-prompt.md

Only update these if the Architect Pack evidence requires it:

- planning/RISKS.md
- planning/QUESTIONS.md
- planning/DECISIONS.md

Rules:

- Do not modify runtime files yet.
- Do not stage, commit, or push.
- Do not touch CEO Briefing.
- Do not recreate references/flutterflow/sprint-009/ceo-briefing.png.
- Preserve existing planning history and append/update cleanly.
- Keep Sprint 045 narrow to secondary header/back/AI touch-target polish.

After applying, run:

- git diff --check
- test ! -f references/flutterflow/sprint-009/ceo-briefing.png
- git diff --name-only
- git status --branch --short

Report:

1. Files created.
2. Files updated.
3. Validation results.
4. Confirmation no runtime files changed.
5. Confirmation CEO Briefing stayed untouched.
6. Confirmation references/flutterflow/sprint-009/ceo-briefing.png remains absent.
7. Confirmation nothing was staged, committed, or pushed.
```

---

## 11. Architect Notes

Sprint 045 should stay small. The purpose is not to redesign mobile headers. It is to resolve one documented follow-up from Sprint 044 and keep the runtime moving forward without breaking the clean app shell smoke result.

The sprint should produce either:

1. a narrow implementation that brings targeted controls to `44x44`, or
2. a documented decision that no safe change should be made without broader layout work.

In either case, the handoff remains the folder, not the conversation.
