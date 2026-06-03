# Sprint 047 Architect Pack — Home Typed Action Row Responsive Spacing

**Project:** TrinaOS Voice / Trina
**Sprint:** 047
**Sprint name:** `047-home-typed-action-row-responsive-spacing`
**Pack type:** Architect Pack
**Date:** 2026-06-02
**Architect layer:** ChatGPT
**Builder layer:** Codex

---

## 0. Purpose

Sprint 046 raised the Home typed `Capture` and `Send` buttons to the required `44px` mobile touch target with a tightly scoped change in `components/VoiceDashboard.tsx`.

Sprint 047 should inspect and polish the same Home typed action row for mobile responsiveness around spacing, wrapping, and usable input width.

This is not a redesign sprint.

The goal is to make the Home typed input row feel stable and usable at narrow mobile widths after the Sprint 046 touch-target change.

---

## 1. Files Codex Should Create Or Update

Codex should apply this Architect Pack by creating or updating only the files listed below unless it finds an existing state mismatch that requires asking first.

### Required planning/docs updates

- `planning/STATE.md`
- `planning/RISKS.md`
- `docs/VALIDATION.md`
- `planning/sprints/047-home-typed-action-row-responsive-spacing/requirements.md`
- `planning/sprints/047-home-typed-action-row-responsive-spacing/blueprint.md`
- `planning/sprints/047-home-typed-action-row-responsive-spacing/acceptance.md`
- `planning/sprints/047-home-typed-action-row-responsive-spacing/handoff-prompt.md`

### Runtime files expected during implementation, not during pack application

Codex should not modify runtime files while applying this pack.

During the later implementation step, the expected runtime owner is likely:

- `components/VoiceDashboard.tsx`

Codex may inspect other nearby files only to confirm ownership:

- `App.tsx`
- `components/BrainDumpView.tsx`
- shared style/config files if referenced by the Home typed action row

---

## 2. Scope Boundaries

### In scope

- Inspect the Home typed input/action row at mobile width.
- Preserve Sprint 046 `44px` minimum button height.
- Improve row stability if the input and two buttons crowd, overflow, or become hard to use.
- Use the smallest scoped style change.
- Prefer local class/style adjustments on the Home typed action row owner.
- Validate at `390x844` and, if practical, one narrower width such as `360x740` or equivalent.
- Confirm Dashboard/Home, Tasks, Calendar, Finance, Knowledge Base, and Notifications/reminders still smoke.

### Out of scope

- No Home redesign.
- No label changes.
- No handler changes.
- No typed input behavior changes.
- No disabled/loading behavior changes.
- No color direction changes.
- No bottom nav redesign.
- No dashboard layout rewrite.
- No broad shared button style changes unless proven to be the actual narrow owner and approved by scope.
- No CEO Briefing work.
- Do not create or restore `references/flutterflow/sprint-009/ceo-briefing.png`.

---

## 3. Architect-Facing Requirements

1. Continue the mobile polish sequence after Sprint 046.
2. Keep the sprint small and local.
3. Treat Sprint 046 as accepted baseline behavior.
4. Protect the Home typed buttons from regressing below `44px` height.
5. Improve mobile usability only where the typed row is crowded, cramped, wraps badly, or risks horizontal overflow.
6. Preserve the current product direction and app shell behavior.
7. Keep CEO Briefing untouched.

---

## 4. Builder-Facing Implementation Plan

### Step 1 — Read and summarize before changing files

Codex must read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/047-home-typed-action-row-responsive-spacing/requirements.md`
- `planning/sprints/047-home-typed-action-row-responsive-spacing/blueprint.md`
- `planning/sprints/047-home-typed-action-row-responsive-spacing/acceptance.md`

Then Codex must summarize:

1. What Sprint 047 is supposed to accomplish.
2. Which files it expects to inspect.
3. Which files it expects to modify.
4. What validation it will run.
5. Any blocker or ambiguity.

Codex must stop before implementation until approved.

### Step 2 — Inspect ownership

After approval, inspect the Home typed row implementation.

Confirm:

- where the input is rendered
- where `Capture` is rendered
- where `Send` is rendered
- whether the row uses flex, grid, fixed widths, gaps, or wrapping
- whether Sprint 046 `min-h-11` remains present on both buttons

### Step 3 — Make the smallest runtime change

If inspection shows crowding, overflow, poor wrapping, or input squeeze on mobile:

- adjust the local row layout only
- preserve button labels and handlers
- preserve `min-h-11`
- preserve color classes
- avoid unrelated shared style changes

Possible implementation patterns, depending on current code:

- allow the input to flex with a safe minimum width
- allow action buttons to keep usable width without forcing overflow
- use a narrow-screen wrap behavior only if it preserves clean usability
- adjust local gap/padding only where needed

Codex should choose based on the actual code.

### Step 4 — Update closeout docs after validation

After implementation and validation, update:

- `planning/STATE.md`
- `planning/RISKS.md`, if risk status changes
- `docs/VALIDATION.md`
- Sprint 047 acceptance file completion notes

---

## 5. Acceptance Criteria

Sprint 047 is complete only when all of the following are true:

- Home typed row has no horizontal overflow at `390x844`.
- Home typed row remains usable at one narrower mobile width if browser validation is available.
- `Capture` remains at least `44px` tall.
- `Send` remains at least `44px` tall.
- Typed input remains usable and is not visually crushed by the buttons.
- `Capture` and `Send` labels remain unchanged.
- Button handlers remain unchanged.
- Disabled/loading behavior remains unchanged.
- Bottom nav remains visible, usable, and unblocked.
- No broad redesign was introduced.
- No shared style change affects unrelated controls unless explicitly documented and necessary.
- Dashboard/Home smoke passes.
- Tasks smoke passes.
- Calendar smoke passes.
- Finance smoke passes.
- Knowledge Base smoke passes.
- Notifications/reminders smoke passes if reachable, using fixture mode if needed.
- `npm run lint` passes.
- `npm run build` passes, with existing warnings documented if they still appear.
- `git diff --check` passes.
- `test ! -f references/flutterflow/sprint-009/ceo-briefing.png` passes.
- CEO Briefing files remain untouched.
- Nothing is staged, committed, or pushed until explicitly approved.

---

## 6. Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Home typed row becomes cramped after Sprint 046 button-height increase. | Medium | Medium | Inspect row at mobile widths and apply the smallest local layout fix. | Open for Sprint 047 |
| A shared style change affects unrelated buttons or views. | Medium | Medium | Prefer local classes in `components/VoiceDashboard.tsx`; document any shared change before applying. | Open for Sprint 047 |
| Fixing narrow layout causes wrapping that blocks bottom nav or makes the input harder to use. | Medium | Medium | Validate at `390x844`, check bottom nav, and smoke core views. | Open for Sprint 047 |
| CEO Briefing asset is accidentally restored or touched. | Low | High | Run the absence guard before and after changes; do not work in CEO Briefing paths. | Guarded |

---

## 7. Decisions

No durable product decisions are changed by this sprint.

Sprint 047 continues the existing decision pattern:

- preserve the pink/white UI direction
- perform small mobile polish sprints
- avoid broad redesign while hardening runtime usability
- keep CEO Briefing out of active runtime polish unless explicitly scoped

`planning/DECISIONS.md` does not need an update unless Codex discovers a durable decision during implementation.

---

## 8. Required Validation Commands

Codex must run these after implementation:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
git diff --cached --name-only
```

Expected outcome:

- lint passes
- build passes or only known existing warnings remain
- no CEO Briefing PNG exists
- nothing staged
- only approved Sprint 047 files changed

---

## 9. Manual / Browser Validation

If browser validation is available, verify:

- Home at `390x844`
- Home at one narrower mobile width if practical
- typed input row has no horizontal overflow
- input remains usable
- `Capture` button is at least `44px` tall
- `Send` button is at least `44px` tall
- bottom nav remains visible, usable, and unblocked
- smoke Dashboard/Home
- smoke Tasks
- smoke Calendar
- smoke Finance
- smoke Knowledge Base
- smoke Notifications/reminders if reachable, using fixture mode if needed

---

## 10. Sprint Files To Create

Codex should create the following sprint folder:

```text
planning/sprints/047-home-typed-action-row-responsive-spacing/
```

And populate these files:

```text
requirements.md
blueprint.md
acceptance.md
handoff-prompt.md
```

The suggested file contents are below.

---

# File: `planning/sprints/047-home-typed-action-row-responsive-spacing/requirements.md`

```markdown
# Sprint 047 Requirements — Home Typed Action Row Responsive Spacing

## Purpose

Sprint 047 polishes the Home typed input/action row after Sprint 046 increased the `Capture` and `Send` buttons to a minimum `44px` mobile touch target.

The goal is to make the row stable and usable on mobile without redesigning Home.

## Requirements

- Preserve Sprint 046 `44px` minimum touch target behavior for `Capture` and `Send`.
- Inspect the typed input row for mobile crowding, bad wrapping, or horizontal overflow.
- Apply the smallest scoped local style change needed to improve responsive behavior.
- Keep the typed input usable at mobile width.
- Preserve labels, handlers, disabled/loading behavior, input behavior, bottom nav behavior, and color direction.
- Keep CEO Briefing untouched.
- Do not create `references/flutterflow/sprint-009/ceo-briefing.png`.

## Out of Scope

- No Home redesign.
- No new features.
- No copy changes.
- No business logic changes.
- No broad shared component refactor.
- No bottom nav redesign.
- No CEO Briefing work.
```

---

# File: `planning/sprints/047-home-typed-action-row-responsive-spacing/blueprint.md`

```markdown
# Sprint 047 Blueprint — Home Typed Action Row Responsive Spacing

## Implementation Plan

1. Read the sprint files and summarize the plan before making changes.
2. Inspect `components/VoiceDashboard.tsx` and confirm the Home typed row owner.
3. Confirm the `Capture` and `Send` buttons still include the Sprint 046 `min-h-11` change.
4. Inspect row layout classes around the typed input and action buttons.
5. If needed, apply the smallest local responsive style adjustment to prevent crowding or overflow.
6. Avoid shared style changes unless proven necessary and documented.
7. Run command validation.
8. Run browser/manual validation if available.
9. Update closeout docs after validation.

## Expected Runtime File

- `components/VoiceDashboard.tsx`

## Inspection-Only Files, If Needed

- `App.tsx`
- `components/BrainDumpView.tsx`
- shared/local style files referenced by the Home typed row

## Guardrails

- Do not change labels.
- Do not change handlers.
- Do not change input behavior.
- Do not change disabled/loading behavior.
- Do not change bottom nav behavior.
- Do not change color direction.
- Do not touch CEO Briefing files.
- Do not stage, commit, or push.
```

---

# File: `planning/sprints/047-home-typed-action-row-responsive-spacing/acceptance.md`

```markdown
# Sprint 047 Acceptance — Home Typed Action Row Responsive Spacing

## Acceptance Criteria

- [ ] Home typed row has no horizontal overflow at `390x844`.
- [ ] Home typed row remains usable at one narrower mobile width if browser validation is available.
- [ ] `Capture` remains at least `44px` tall.
- [ ] `Send` remains at least `44px` tall.
- [ ] Typed input remains usable and is not visually crushed by the buttons.
- [ ] `Capture` and `Send` labels remain unchanged.
- [ ] Button handlers remain unchanged.
- [ ] Disabled/loading behavior remains unchanged.
- [ ] Bottom nav remains visible, usable, and unblocked.
- [ ] No broad redesign was introduced.
- [ ] No unrelated shared control styling was changed.
- [ ] Dashboard/Home smoke passes.
- [ ] Tasks smoke passes.
- [ ] Calendar smoke passes.
- [ ] Finance smoke passes.
- [ ] Knowledge Base smoke passes.
- [ ] Notifications/reminders smoke passes if reachable.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes, with existing warnings documented if present.
- [ ] `git diff --check` passes.
- [ ] `test ! -f references/flutterflow/sprint-009/ceo-briefing.png` passes.
- [ ] CEO Briefing stays untouched.
- [ ] Nothing is staged, committed, or pushed until approved.

## Completion Notes

TBD after implementation.
```

---

# File: `planning/sprints/047-home-typed-action-row-responsive-spacing/handoff-prompt.md`

```markdown
# Sprint 047 Handoff Prompt — Home Typed Action Row Responsive Spacing

Read the following files before making changes:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/047-home-typed-action-row-responsive-spacing/requirements.md`
- `planning/sprints/047-home-typed-action-row-responsive-spacing/blueprint.md`
- `planning/sprints/047-home-typed-action-row-responsive-spacing/acceptance.md`

Then summarize:

1. What Sprint 047 is supposed to accomplish.
2. Which files you expect to inspect.
3. Which files you expect to modify.
4. What tests or validation steps you will run.
5. Any blockers or ambiguities.
6. How you will keep CEO Briefing untouched, including confirming that `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

Do not start implementation yet.

Do not modify files yet.

Do not stage, commit, or push anything.

Wait for approval after the summary.
```

---

## 11. Suggested `planning/STATE.md` Update

Codex should update the current sprint/status area to reflect:

```markdown
## Current Status

Sprint 046 is complete and pushed to `origin/main`.

Sprint 047 planning is being applied for Home typed action row responsive spacing polish.

## Active Sprint

`planning/sprints/047-home-typed-action-row-responsive-spacing/`

## Recently Completed

- Sprint 046 polished Home typed `Capture` and `Send` button touch targets to `44px` minimum height.
- Sprint 046 validation passed and commit `377686d fix: polish sprint 046 home typed action touch targets` was pushed to `origin/main`.

## Next Actions

- Apply Sprint 047 planning files.
- Start Sprint 047 with a Builder summary gate before implementation.
```

Codex should preserve existing useful state content and avoid turning `STATE.md` into a long session log.

---

## 12. Suggested `planning/RISKS.md` Update

Codex should add or update Sprint 047 risks only if the risk table format supports it:

```markdown
| Home typed input row may crowd or overflow after button touch-target polish. | Medium | Medium | Inspect at mobile widths and apply the smallest local responsive layout adjustment. | Open for Sprint 047 |
| Local row polish could accidentally affect unrelated controls if shared styles are changed. | Medium | Medium | Prefer `components/VoiceDashboard.tsx` local class changes; avoid shared style edits. | Open for Sprint 047 |
```

Codex should not duplicate existing risk entries.

---

## 13. Suggested `docs/VALIDATION.md` Update

Codex should add a Sprint 047 validation section with command and manual targets:

```markdown
## Sprint 047 — Home Typed Action Row Responsive Spacing

Required command validation:

- `git diff --check`
- `test ! -f references/flutterflow/sprint-009/ceo-briefing.png`
- `npm run lint`
- `npm run build`
- `git diff --name-only`
- `git status --branch --short`
- `git diff --cached --name-only`

Manual/browser validation:

- Home at `390x844`
- Home at one narrower mobile width if practical
- typed input row has no horizontal overflow
- typed input remains usable
- `Capture` remains at least `44px` tall
- `Send` remains at least `44px` tall
- bottom nav remains visible, usable, and unblocked
- Dashboard/Home, Tasks, Calendar, Finance, Knowledge Base, and Notifications/reminders smoke checks

Protected scope:

- CEO Briefing files must remain untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` must remain absent.
```

---

## 14. Codex Apply-Pack Prompt

Use this prompt after saving this Architect Pack in the repo:

```text
Apply the Sprint 047 Architect Pack as planning/docs only.

Pack file:
architect-packs/trina-047-home-typed-action-row-responsive-spacing-architect-pack.md

Create or update only the Sprint 047 planning/docs files described in the pack:

- planning/STATE.md
- planning/RISKS.md
- docs/VALIDATION.md
- planning/sprints/047-home-typed-action-row-responsive-spacing/requirements.md
- planning/sprints/047-home-typed-action-row-responsive-spacing/blueprint.md
- planning/sprints/047-home-typed-action-row-responsive-spacing/acceptance.md
- planning/sprints/047-home-typed-action-row-responsive-spacing/handoff-prompt.md

Do not modify runtime files.
Do not stage, commit, or push.
Do not touch CEO Briefing files.
Do not create references/flutterflow/sprint-009/ceo-briefing.png.

After applying the pack, run:

git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
git diff --cached --name-only

Report:

1. Files created or updated.
2. Validation results.
3. Confirmation that runtime files were not modified.
4. Confirmation that nothing was staged, committed, or pushed.
5. Confirmation that CEO Briefing stayed untouched and the PNG remains absent.
```

---

## 15. Stop Point

After Codex applies this Architect Pack, the next step is not implementation.

The next step is the Sprint 047 summary gate using the sprint handoff prompt.

Codex must read the sprint files and summarize the plan before writing code.
