# Architect Pack — Sprint 046 Home Typed Action Touch Target Polish

**Project:** TrinaOS Voice / Trina app shell
**Sprint:** 046-home-typed-action-touch-target-polish
**Date:** 2026-06-02
**Architect Layer:** ChatGPT
**Builder Layer Target:** Codex

---

## 1. Architect Summary

Sprint 046 is a narrow runtime polish sprint that follows Sprint 045.

Sprint 045 intentionally left the Home typed `Capture` and `Send` buttons unchanged because they were outside that sprint’s secondary header/back/AI target scope. Sprint 046 targets only those remaining Home typed action controls and brings them to the mobile touch target baseline without redesigning the Home surface.

This sprint must preserve the clean Sprint 045 mobile runtime baseline:

- pink/white UI direction
- existing Home layout and content hierarchy
- current text input behavior
- existing Capture and Send labels/actions
- bottom navigation behavior
- CEO Briefing protection guard

This is not a redesign sprint.

---

## 2. Files This Architect Pack Must Create Or Update

Codex should apply this Architect Pack as planning/docs only first.

### Create

- `architect-packs/trina-046-home-typed-action-touch-target-polish-architect-pack.md`
- `planning/sprints/046-home-typed-action-touch-target-polish/requirements.md`
- `planning/sprints/046-home-typed-action-touch-target-polish/blueprint.md`
- `planning/sprints/046-home-typed-action-touch-target-polish/acceptance.md`
- `planning/sprints/046-home-typed-action-touch-target-polish/handoff-prompt.md`

### Update

- `planning/STATE.md`
- `docs/VALIDATION.md`
- `planning/RISKS.md`, only if Codex determines the touch target/overflow risk needs a durable note

### Do Not Update Unless Needed

- `planning/DECISIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`

No architecture, API, data model, authentication, routing, storage, or backend behavior changes are expected.

---

## 3. Architect-Facing Requirements

### Business Goal

Reduce remaining mobile usability friction on the Home surface by bringing the typed `Capture` and `Send` buttons from approximately `40px` tall to a `44px` minimum touch target where safe.

### User Goal

A mobile user should be able to tap the Home typed action buttons reliably at a `390x844` viewport without accidental misses, horizontal overflow, or bottom nav interference.

### In Scope

- Inspect the Home typed input/action area.
- Identify the exact component and styles that own the `Capture` and `Send` buttons.
- Increase the Home typed `Capture` and `Send` buttons to a minimum `44px` touch target.
- Preserve existing labels, actions, icons if any, disabled/loading states if any, and keyboard/input behavior.
- Validate Home at `390x844`.
- Smoke the same core surfaces used in Sprint 045 enough to confirm no regression:
  - Dashboard/Home
  - Tasks
  - Calendar
  - Finance
  - Knowledge Base
  - Notifications/reminders if reachable
- Preserve CEO Briefing guard.

### Out of Scope

- Redesigning the Home page.
- Changing the input model.
- Changing Capture or Send business logic.
- Adding new voice, AI, notification, task, calendar, finance, or knowledge base behavior.
- Changing bottom navigation.
- Changing CEO Briefing files.
- Creating `references/flutterflow/sprint-009/ceo-briefing.png`.
- Adding new dependencies.
- Refactoring unrelated components.

---

## 4. Builder-Facing Implementation Plan

### Step 1 — Read Current State

Codex must read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- Sprint 046 files after they are created

Codex must summarize the sprint before implementation.

### Step 2 — Inspect Home Ownership

Codex should inspect likely Home/runtime files, including but not limited to:

- `App.tsx`
- `components/VoiceDashboard.tsx`
- `components/BrainDumpView.tsx`
- any component that owns the typed Home `Capture` and `Send` buttons
- any shared button/style helper if the typed action buttons use one

Codex should identify the actual owner before changing code.

### Step 3 — Apply Minimal Runtime Change

Preferred change order:

1. Shared style or class only if the change is tightly scoped to these Home typed action buttons.
2. Reusable component prop/class adjustment only if the component already owns both buttons.
3. Local class/style change in the owning component if that is safest.

Expected style direction:

- Raise button height/min-height to `44px`.
- Preserve existing width behavior unless needed for layout safety.
- Keep the controls readable and aligned.
- Avoid horizontal overflow.
- Avoid crowding or blocking the bottom nav.

### Step 4 — Update Closeout Docs

After implementation and validation, Codex should update:

- `planning/STATE.md`
- `docs/VALIDATION.md`
- `planning/sprints/046-home-typed-action-touch-target-polish/acceptance.md`

Only update `planning/RISKS.md` if a durable follow-up risk remains.

---

## 5. Acceptance Criteria

Sprint 046 is complete only when all criteria below are satisfied.

### Planning / Scope

- Sprint 046 folder exists at `planning/sprints/046-home-typed-action-touch-target-polish/`.
- Sprint 046 contains:
  - `requirements.md`
  - `blueprint.md`
  - `acceptance.md`
  - `handoff-prompt.md`
- Architect Pack exists at `architect-packs/trina-046-home-typed-action-touch-target-polish-architect-pack.md`.
- `planning/STATE.md` identifies Sprint 046 as the active sprint during planning and records closeout after completion.
- `docs/VALIDATION.md` records Sprint 046 validation expectations and final results.

### Runtime

- Home typed `Capture` button has a minimum `44px` touch target where inspectable.
- Home typed `Send` button has a minimum `44px` touch target where inspectable.
- Existing labels remain unchanged.
- Existing actions remain unchanged.
- Existing input behavior remains unchanged.
- Existing disabled/loading behavior remains unchanged if present.
- No unrelated Home redesign is introduced.
- No unrelated surfaces are refactored.

### Mobile Layout

- Home validates at exact `390x844` viewport if available.
- No horizontal overflow appears on the validated Home surface.
- Bottom navigation remains usable.
- Bottom navigation does not block the typed action controls.
- The typed action controls remain visible and usable above the bottom nav.

### Regression Smoke

- Dashboard/Home is smoked.
- Tasks is smoked.
- Calendar is smoked.
- Finance is smoked.
- Knowledge Base is smoked.
- Notifications/reminders are smoked if reachable.
- No Sprint 045 secondary control regression is observed during smoke.

### Validation Commands

Codex must run and report:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
```

### Protected Scope

- CEO Briefing files remain untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- No files outside Sprint 046 scope are staged, committed, or pushed during implementation.

---

## 6. Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---:|---:|---|
| Raising button height could crowd the Home typed input row. | Medium | Medium | Make the smallest style change possible and validate at `390x844`. |
| Button width or spacing could create horizontal overflow. | Low-Medium | Medium | Preserve width behavior where possible and inspect overflow. |
| Shared style change could affect unrelated buttons. | Medium | Medium | Prefer local scoped change if shared class is too broad. |
| Capture/Send behavior could change accidentally. | Low | High | Do not alter handlers or state logic. Validate existing actions still trigger where inspectable. |

---

## 7. Questions

No blocking questions.

Assumption: the Home typed `Capture` and `Send` buttons are the same controls documented at the end of Sprint 045 as approximately `40px` tall.

---

## 8. Sprint Files To Create

### `planning/sprints/046-home-typed-action-touch-target-polish/requirements.md`

```markdown
# Sprint 046 Requirements — Home Typed Action Touch Target Polish

## Goal

Bring the remaining Home typed `Capture` and `Send` buttons to the mobile `44px` minimum touch target baseline without redesigning the Home surface.

## Background

Sprint 045 polished secondary header/back/AI controls and documented that the Home typed `Capture` and `Send` buttons still measured approximately `40px` tall. They were intentionally left unchanged because they were outside Sprint 045 scope.

Sprint 046 addresses that documented follow-up.

## In Scope

- Inspect the Home typed input/action area.
- Identify the component and styles that own the typed `Capture` and `Send` buttons.
- Increase both buttons to a minimum `44px` touch target where safe.
- Preserve labels, handlers, state behavior, input behavior, disabled/loading behavior, and visual direction.
- Validate Home at `390x844`.
- Smoke key app surfaces for regression.

## Out of Scope

- Home redesign.
- Input workflow changes.
- Capture/Send logic changes.
- New features.
- New dependencies.
- Bottom nav changes.
- CEO Briefing changes.

## Protected Files / Guards

Do not touch CEO Briefing files.

This file must remain absent:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```
```

### `planning/sprints/046-home-typed-action-touch-target-polish/blueprint.md`

```markdown
# Sprint 046 Blueprint — Home Typed Action Touch Target Polish

## Implementation Strategy

Make the smallest safe runtime change that raises the Home typed `Capture` and `Send` buttons to a minimum `44px` touch target.

## Inspect First

Inspect these likely files before changing code:

- `App.tsx`
- `components/VoiceDashboard.tsx`
- `components/BrainDumpView.tsx`
- any component that owns the Home typed action row
- any shared button/style component if used by those buttons

## Change Order

1. Use a tightly scoped shared class/style only if it affects only the Home typed action buttons.
2. Adjust a reusable local component if it directly owns both controls.
3. Use local per-button classes/styles if that is safest.

## Runtime Requirements

- Raise `Capture` to at least `44px` touch target.
- Raise `Send` to at least `44px` touch target.
- Preserve existing labels.
- Preserve existing event handlers.
- Preserve existing disabled/loading state behavior if present.
- Preserve current Home layout and pink/white direction.
- Avoid horizontal overflow.
- Keep controls clear of bottom nav.

## Validation

Run:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
```

Browser/mobile validation:

- Validate Home at `390x844` if available.
- Inspect typed `Capture` and `Send` dimensions.
- Confirm no horizontal overflow.
- Confirm bottom nav remains usable and unblocked.
- Smoke Dashboard/Home, Tasks, Calendar, Finance, Knowledge Base, and Notifications/reminders if reachable.
```

### `planning/sprints/046-home-typed-action-touch-target-polish/acceptance.md`

```markdown
# Sprint 046 Acceptance — Home Typed Action Touch Target Polish

## Status

Pending implementation.

## Acceptance Criteria

### Runtime

- [ ] Home typed `Capture` button is at least `44px` tall or has a minimum `44px` touch target where inspectable.
- [ ] Home typed `Send` button is at least `44px` tall or has a minimum `44px` touch target where inspectable.
- [ ] Existing labels are preserved.
- [ ] Existing actions/handlers are preserved.
- [ ] Existing typed input behavior is preserved.
- [ ] Existing disabled/loading behavior is preserved if present.
- [ ] No unrelated Home redesign is introduced.

### Mobile Layout

- [ ] Home validates at exact `390x844` viewport if available.
- [ ] No horizontal overflow is found on Home.
- [ ] Bottom navigation remains usable.
- [ ] Bottom navigation does not block the typed action controls.

### Regression Smoke

- [ ] Dashboard/Home smoked.
- [ ] Tasks smoked.
- [ ] Calendar smoked.
- [ ] Finance smoked.
- [ ] Knowledge Base smoked.
- [ ] Notifications/reminders smoked if reachable.
- [ ] No Sprint 045 secondary touch target regression observed.

### Validation Commands

- [ ] `git diff --check` passes.
- [ ] `test ! -f references/flutterflow/sprint-009/ceo-briefing.png` passes.
- [ ] `npm run lint` passes or any existing non-blocking warnings are documented.
- [ ] `npm run build` passes or any existing non-blocking warnings are documented.
- [ ] `git diff --name-only` reviewed.
- [ ] `git status --branch --short` reviewed.

### Protected Scope

- [ ] CEO Briefing files untouched.
- [ ] `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- [ ] No extra files staged, committed, or pushed.
```

### `planning/sprints/046-home-typed-action-touch-target-polish/handoff-prompt.md`

```markdown
# Sprint 046 Handoff Prompt — Home Typed Action Touch Target Polish

Read these files before making changes:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/046-home-typed-action-touch-target-polish/requirements.md`
- `planning/sprints/046-home-typed-action-touch-target-polish/blueprint.md`
- `planning/sprints/046-home-typed-action-touch-target-polish/acceptance.md`

Then summarize:

1. What Sprint 046 is supposed to accomplish.
2. Which runtime files you expect to inspect or modify.
3. What tests or validation steps you will run.
4. Any blockers, risks, or ambiguities.
5. Confirmation that CEO Briefing files will not be touched.
6. Confirmation that `references/flutterflow/sprint-009/ceo-briefing.png` must remain absent.

Do not implement until the summary is approved.

After approval, implement the smallest safe runtime change to bring the Home typed `Capture` and `Send` buttons to a minimum `44px` touch target.

Do not redesign Home.
Do not change Capture/Send behavior.
Do not stage, commit, or push until explicitly instructed.
```

---

## 9. Codex Apply Prompt

Use this prompt to apply the Architect Pack as planning/docs only.

```text
Apply the Sprint 046 Architect Pack as planning/docs only.

Create/update only the files listed in the Architect Pack:

Create:
- architect-packs/trina-046-home-typed-action-touch-target-polish-architect-pack.md
- planning/sprints/046-home-typed-action-touch-target-polish/requirements.md
- planning/sprints/046-home-typed-action-touch-target-polish/blueprint.md
- planning/sprints/046-home-typed-action-touch-target-polish/acceptance.md
- planning/sprints/046-home-typed-action-touch-target-polish/handoff-prompt.md

Update:
- planning/STATE.md
- docs/VALIDATION.md
- planning/RISKS.md only if needed

Do not modify runtime files.
Do not stage, commit, or push.
Do not touch CEO Briefing files.
Keep references/flutterflow/sprint-009/ceo-briefing.png absent.

After applying the planning/docs files, run and report:

- git diff --check
- test ! -f references/flutterflow/sprint-009/ceo-briefing.png
- git diff --name-only
- git status --branch --short
- git diff --cached --name-only
```
