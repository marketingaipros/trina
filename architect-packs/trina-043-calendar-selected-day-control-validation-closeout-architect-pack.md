# Architect Pack — Sprint 043 Calendar Selected-Day Control Validation Closeout

**Project:** TrinaOS Voice / Trina
**Sprint:** 043
**Sprint name:** calendar-selected-day-control-validation-closeout
**Created:** 2026-06-02
**Architect Layer:** ChatGPT
**Builder Layer:** Codex

---

## 1. Architect Summary

Sprint 043 closes the only documented Sprint 042 caveat:

> Calendar selected-day edit/delete controls were not live-clicked on a populated selected-day row at `390x844`, even though code keeps 44px controls and selected-day smoke showed no horizontal overflow.

This sprint should stay narrow.

The goal is not to redesign Calendar, add new calendar features, or broaden the fixture system. The goal is to create or use the smallest safe local validation path that allows the Builder to verify Calendar selected-day row controls live at the mobile target viewport.

Sprint 043 should confirm:

- A populated selected-day Calendar row can be reproduced safely.
- Edit/delete controls can be live-clicked at `390x844` or nearest available viewport.
- Controls preserve Sprint 040 touch/accessibility expectations.
- No horizontal overflow appears in the selected-day populated row state.
- Sprint 042 query-param fixture approach remains local/dev-only and production-safe.

---

## 2. Files This Architect Pack Creates Or Updates

Codex should apply this Architect Pack by creating or updating these planning/documentation files only first:

```text
planning/STATE.md
planning/RISKS.md
planning/QUESTIONS.md, only if new ambiguity is discovered
planning/DECISIONS.md, only if fixture behavior decision needs refinement
docs/VALIDATION.md
planning/sprints/043-calendar-selected-day-control-validation-closeout/requirements.md
planning/sprints/043-calendar-selected-day-control-validation-closeout/blueprint.md
planning/sprints/043-calendar-selected-day-control-validation-closeout/acceptance.md
planning/sprints/043-calendar-selected-day-control-validation-closeout/handoff-prompt.md
```

Possible runtime file later, only after Codex reads the sprint files and summarizes the plan:

```text
components/CalendarView.tsx
```

Inspect-only unless Codex justifies otherwise:

```text
App.tsx
components/Navigation.tsx
components/Dashboard.tsx
components/VoiceDashboard.tsx
components/TasksView.tsx
components/NotificationsView.tsx
components/FinanceView.tsx
components/KnowledgeBaseView.tsx
```

Do not touch:

```text
references/flutterflow/sprint-009/ceo-briefing.png
references/flutterflow/sprint-009/ceo-briefing.*
package.json
package-lock.json
vite.config.*
firebase*
supabase*
backend files
native files
build config files
```

---

# File: planning/sprints/043-calendar-selected-day-control-validation-closeout/requirements.md

```markdown
# Sprint 043 Requirements — Calendar Selected-Day Control Validation Closeout

## Purpose

Close the remaining Sprint 042 Calendar caveat by proving selected-day edit/delete row controls work live on a populated selected-day row at the mobile target viewport.

Sprint 042 established local, query-param, non-production fixtures for hard-to-reproduce UI state validation. Sprint 043 applies that pattern narrowly to the Calendar selected-day populated-row case if the existing app state cannot reproduce it reliably.

## Background

Sprint 042 validated mobile state coverage for empty states, AI/error states, disabled states, Knowledge Base fallbacks, horizontal overflow, and Sprint 040 touch/accessibility preservation at `390x844`.

One caveat remained:

- Calendar selected-day edit/delete row controls were not live-clicked on a populated selected-day row at `390x844`.
- The code still preserved 44px controls.
- The selected-day browser check showed no horizontal overflow.
- The missing proof was live-click validation against a populated selected-day row.

## Scope

In scope:

- Inspect current Calendar selected-day behavior.
- Determine whether existing local data or existing Sprint 042 fixtures can produce a populated selected-day row safely.
- If needed, add the smallest local/dev-only Calendar fixture to reproduce a populated selected-day row.
- Live-click selected-day edit and delete controls at `390x844` or nearest available viewport.
- Confirm selected-day populated row has no horizontal overflow.
- Confirm touch target/accessibility expectations remain intact.
- Update validation and state documentation.

Out of scope:

- Calendar redesign.
- New Calendar features.
- Package or dependency changes.
- Backend, Firebase, Supabase, native, or build config changes.
- Production data changes.
- Broad fixture framework refactor.
- General release-readiness work beyond this caveat.
- CEO Briefing work.

## Required Behavior

The Builder must prove one of these paths:

### Preferred path: no runtime change

If an existing safe local state can populate a selected-day row:

- Use that state.
- Live-click edit/delete controls.
- Document the exact steps in `docs/VALIDATION.md`.
- Do not change runtime code.

### Fallback path: narrow local/dev-only fixture

If existing state cannot reliably populate the selected-day row:

- Add the smallest possible Calendar-only fixture path.
- Use the existing Sprint 042 local/dev-only query-param pattern.
- Guard it from production behavior.
- Keep it narrow to selected-day populated-row validation.
- Avoid changing normal Calendar behavior.

Suggested fixture name, if needed:

```text
?trinaStateFixture=calendar-selected-day
```

## Target Viewport

Primary viewport:

```text
390x844
```

If tooling cannot use exact viewport, use the nearest available viewport and document the exact viewport used.

## Protected Areas

Do not touch CEO Briefing.

This file must remain absent:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

No staging, commit, or push during implementation until explicitly approved.

## Success Standard

Sprint 043 is complete when:

- Calendar selected-day populated row is reproduced.
- Edit control is live-clicked successfully.
- Delete control is live-clicked successfully or safely validated through a confirm/cancel path without destructive unintended state.
- No horizontal overflow appears at the selected-day populated row state.
- Touch target/accessibility expectations remain preserved.
- Validation results are documented.
- Remaining risks or caveats are documented.
```

---

# File: planning/sprints/043-calendar-selected-day-control-validation-closeout/blueprint.md

```markdown
# Sprint 043 Blueprint — Calendar Selected-Day Control Validation Closeout

## Implementation Approach

Use an inspect-first workflow.

Do not begin by editing code. First determine whether the current app can already reproduce the selected-day populated-row state.

## Step 1 — Read Current Project Context

Read:

```text
AGENTS.md
CODEX.md
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/VALIDATION.md
planning/sprints/043-calendar-selected-day-control-validation-closeout/requirements.md
planning/sprints/043-calendar-selected-day-control-validation-closeout/blueprint.md
planning/sprints/043-calendar-selected-day-control-validation-closeout/acceptance.md
```

Then summarize the plan before implementation.

## Step 2 — Inspect Calendar Implementation

Inspect:

```text
components/CalendarView.tsx
```

Look for:

- How selected-day rows are rendered.
- How events are sourced.
- How edit/delete controls are wired.
- Whether touch targets remain at or above 44px.
- Whether existing dev fixtures can populate the selected-day row.
- Whether delete has a confirm path or destructive behavior requiring a safe validation route.

## Step 3 — Inspect Existing Fixture Surfaces

Inspect only as needed:

```text
App.tsx
storageService or relevant local data service files, if Calendar uses them
existing test/script/fixture surfaces, if present
```

Do not modify these files unless clearly justified and approved by sprint scope.

## Step 4 — Choose Validation Path

### Path A — Existing state is enough

If existing local/dev state can create a selected-day event:

- Do not modify runtime.
- Use browser/manual smoke at `390x844`.
- Live-click edit and delete controls.
- Document the exact steps and result.

### Path B — Narrow Calendar fixture required

If existing state is not reliable:

Modify only:

```text
components/CalendarView.tsx
```

Add a narrow non-production query-param fixture, consistent with Sprint 042.

Recommended behavior:

```text
?trinaStateFixture=calendar-selected-day
```

The fixture should:

- Work only outside production.
- Populate a selected-day row with safe local fixture data.
- Preserve normal Calendar behavior when the query param is absent.
- Avoid persistence unless the existing component pattern requires it.
- Avoid destructive default actions.
- Be easy to remove later if a broader fixture helper is introduced.

Do not centralize fixture logic in Sprint 043 unless inspection proves duplication is now causing a concrete validation problem. This sprint should remain narrow.

## Step 5 — Browser Validation

Run browser/manual smoke at:

```text
390x844
```

Validate:

- Calendar selected-day populated row renders.
- Edit control can be clicked.
- Delete control can be clicked or safely cancel-confirmed.
- No horizontal overflow appears.
- Control sizes and spacing remain mobile-safe.
- No bottom nav overlap regression.
- No unrelated view regressions introduced.

## Step 6 — Command Validation

Run:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

Document any known warnings, especially if Vite chunk/bundle warnings remain unchanged.

## Step 7 — Documentation Updates

Update:

```text
docs/VALIDATION.md
planning/STATE.md
planning/RISKS.md
```

Update `planning/QUESTIONS.md` only if a real unresolved ambiguity remains.

Update `planning/DECISIONS.md` only if Sprint 043 changes or refines the Sprint 042 fixture decision.

## Expected Final File Changes

Likely changed files:

```text
components/CalendarView.tsx, only if fixture was needed
docs/VALIDATION.md
planning/STATE.md
planning/RISKS.md
planning/sprints/043-calendar-selected-day-control-validation-closeout/requirements.md
planning/sprints/043-calendar-selected-day-control-validation-closeout/blueprint.md
planning/sprints/043-calendar-selected-day-control-validation-closeout/acceptance.md
planning/sprints/043-calendar-selected-day-control-validation-closeout/handoff-prompt.md
architect-packs/trina-043-calendar-selected-day-control-validation-closeout-architect-pack.md
```

Possible changed file:

```text
planning/DECISIONS.md, only if decision refinement is needed
planning/QUESTIONS.md, only if ambiguity remains
```

No other runtime files should change without explicit justification.
```

---

# File: planning/sprints/043-calendar-selected-day-control-validation-closeout/acceptance.md

```markdown
# Sprint 043 Acceptance — Calendar Selected-Day Control Validation Closeout

## A1 — Sprint Planning Files Exist

The sprint folder exists:

```text
planning/sprints/043-calendar-selected-day-control-validation-closeout/
```

It contains:

```text
requirements.md
blueprint.md
acceptance.md
handoff-prompt.md
```

Closeout status: Pending.

## A2 — Builder Summary Gate Completed

Before implementation, the Builder reads required project and sprint files and summarizes:

1. What Sprint 043 is supposed to accomplish.
2. Which files it expects to inspect or modify.
3. What validation steps it will run.
4. Any blockers or ambiguities.
5. Whether runtime changes are expected.

Implementation does not begin until approval is given.

Closeout status: Pending.

## A3 — Calendar Selected-Day Populated Row Reproduced

The Builder reproduces a Calendar selected-day populated row at `390x844` or nearest available viewport.

The validation path is documented:

- Existing state, or
- Narrow local/dev-only fixture.

Closeout status: Pending.

## A4 — Edit Control Live-Clicked

The selected-day row edit control is live-clicked successfully at the target viewport.

The result is documented in `docs/VALIDATION.md`.

Closeout status: Pending.

## A5 — Delete Control Live-Clicked Or Safely Confirmed

The selected-day row delete control is live-clicked at the target viewport.

If deletion is destructive, a safe confirm/cancel path may be used and documented.

Closeout status: Pending.

## A6 — No Horizontal Overflow

The selected-day populated row state has no horizontal overflow at the target viewport.

Closeout status: Pending.

## A7 — Touch And Accessibility Preservation

The selected-day edit/delete controls preserve Sprint 040 touch/accessibility expectations, including practical 44px mobile control targets where applicable.

Closeout status: Pending.

## A8 — Scope Protection

No unauthorized files are changed.

Must remain true:

- No package/dependency changes.
- No backend/Firebase/Supabase/native/build config changes.
- CEO Briefing untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` absent.

Closeout status: Pending.

## A9 — Required Validation Passes

The following pass:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

Known Vite warnings may remain if unchanged from prior sprints and documented.

Closeout status: Pending.

## A10 — Documentation Updated

Updated as needed:

```text
docs/VALIDATION.md
planning/STATE.md
planning/RISKS.md
```

Optional only if needed:

```text
planning/DECISIONS.md
planning/QUESTIONS.md
```

Closeout status: Pending.

## A11 — No Premature Git Actions

No staging, commit, or push occurs until explicitly approved.

Closeout status: Pending.
```

---

# File: planning/sprints/043-calendar-selected-day-control-validation-closeout/handoff-prompt.md

```markdown
# Sprint 043 Handoff Prompt — Calendar Selected-Day Control Validation Closeout

Use this prompt with Codex after the Sprint 043 Architect Pack has been applied to the project folder.

```text
Sprint 043 is ready for Builder review.

Do not implement yet.

Read these files first:

- AGENTS.md
- CODEX.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/043-calendar-selected-day-control-validation-closeout/requirements.md
- planning/sprints/043-calendar-selected-day-control-validation-closeout/blueprint.md
- planning/sprints/043-calendar-selected-day-control-validation-closeout/acceptance.md
- planning/sprints/043-calendar-selected-day-control-validation-closeout/handoff-prompt.md

Then summarize only:

1. What Sprint 043 is supposed to accomplish.
2. Which files you expect to inspect or modify.
3. What validation steps you expect to run.
4. Any blockers, risks, or ambiguities.
5. Whether runtime changes are expected.

Sprint 043 goal:
Close the remaining Sprint 042 Calendar caveat by proving selected-day edit/delete row controls can be live-clicked on a populated selected-day row at 390x844 or nearest available viewport.

Rules:
- Inspect first.
- Prefer no runtime changes if existing safe state can reproduce the populated selected-day row.
- If needed, add only the smallest local/dev-only Calendar fixture.
- Allowed runtime modification candidate: components/CalendarView.tsx only.
- Do not modify other runtime files without explicit justification and approval.
- Do not change packages, dependencies, backend, Firebase, Supabase, native files, or build config.
- Do not touch CEO Briefing.
- Do not create references/flutterflow/sprint-009/ceo-briefing.png.
- Do not stage, commit, or push.

Wait for approval before making any code or test changes.
```
```

---

# File: planning/STATE.md

```markdown
# Project State Update — Sprint 043

## Current Sprint

Sprint 043 — Calendar Selected-Day Control Validation Closeout

## Current Status

Sprint 042 is closed and pushed.

Sprint 043 is planned as a narrow closeout sprint to resolve the only remaining Sprint 042 caveat:

- Calendar selected-day edit/delete controls were not live-clicked on a populated selected-day row at `390x844`.

## Recently Completed

- Sprint 042 added local/dev-only mobile state validation fixtures.
- Sprint 042 validated empty states, AI/error states, disabled states, Knowledge Base fallbacks, horizontal overflow, and touch/accessibility preservation.
- Sprint 042 was pushed as commit `4ce423a feat: add sprint 042 mobile state validation fixtures`.

## Next Action

Apply Sprint 043 planning files, then have Codex read the sprint files and summarize the implementation plan before making changes.

## Known Caveat To Close

Calendar selected-day edit/delete controls need live-click validation on a populated selected-day row at `390x844` or nearest available viewport.
```

---

# File: planning/RISKS.md

```markdown
# Risk Update — Sprint 043

## Calendar Selected-Day Validation Caveat

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Calendar selected-day edit/delete controls may not have been live-click validated on a populated row at the mobile target viewport. | Medium | Medium | Sprint 043 will reproduce a populated selected-day row and live-click edit/delete controls at `390x844` or nearest available viewport. | Active in Sprint 043 |
| Adding fixture logic can increase production-code footprint. | Low | Low | Use the Sprint 042 query-param, non-production guard pattern. Keep any Calendar fixture narrow and local/dev-only. | Monitor |
| Delete control validation may be destructive if not handled safely. | Medium | Medium | Use a safe fixture row and confirm/cancel path if needed. Document exactly what was clicked. | Active in Sprint 043 |
```

---

# File: docs/VALIDATION.md

```markdown
# Validation Update — Sprint 043 Planned

## Sprint 043 Calendar Selected-Day Control Validation

Sprint 043 will close the remaining Sprint 042 validation caveat.

Target validation:

- Viewport: `390x844` or nearest available viewport.
- Surface: Calendar selected-day populated row.
- Controls: edit and delete.
- Checks:
  - populated selected-day row renders
  - edit control live-clicks successfully
  - delete control live-clicks or safely confirm/cancel validates
  - no horizontal overflow
  - mobile touch/accessibility expectations preserved
  - CEO Briefing remains untouched
  - `references/flutterflow/sprint-009/ceo-briefing.png` remains absent

Required commands:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

If a local fixture is needed, document the exact query param and the production guard.
```

---

# Optional File: planning/DECISIONS.md

Only update if Sprint 043 refines the Sprint 042 fixture rule.

Suggested entry if needed:

```markdown
| 2026-06-02 | Sprint 043 keeps Calendar selected-day validation fixtures narrow and local/dev-only. | The remaining validation caveat only requires a selected-day populated row at mobile viewport. | Avoids turning fixture support into a broad test framework or product feature. |
```

---

# Optional File: planning/QUESTIONS.md

Only update if Codex discovers an actual unresolved question.

Suggested entry if needed:

```markdown
| Date | Question | Owner | Status |
|---|---|---|---|
| 2026-06-02 | Is Calendar delete validation safe to complete through actual deletion, or should it use a confirm/cancel path only? | Builder/Architect | Open if unclear after inspection |
```

---

## 3. Codex Apply Prompt

Use this prompt to apply the Architect Pack to the project folder as planning/docs only.

```text
Apply the Sprint 043 Architect Pack as planning/docs only.

Create or update these files:

- planning/STATE.md
- planning/RISKS.md
- docs/VALIDATION.md
- planning/sprints/043-calendar-selected-day-control-validation-closeout/requirements.md
- planning/sprints/043-calendar-selected-day-control-validation-closeout/blueprint.md
- planning/sprints/043-calendar-selected-day-control-validation-closeout/acceptance.md
- planning/sprints/043-calendar-selected-day-control-validation-closeout/handoff-prompt.md

Only update these if needed:

- planning/DECISIONS.md
- planning/QUESTIONS.md

Also save this Architect Pack at:

architect-packs/trina-043-calendar-selected-day-control-validation-closeout-architect-pack.md

Rules:

- Planning/docs only.
- Do not modify runtime files yet.
- Do not change packages, dependencies, backend, Firebase, Supabase, native files, or build config.
- Do not touch CEO Briefing.
- Do not create references/flutterflow/sprint-009/ceo-briefing.png.
- Do not stage, commit, or push.

After applying, run:

- git diff --check
- test ! -f references/flutterflow/sprint-009/ceo-briefing.png
- git diff --name-only
- git status --branch --short

Report:

1. Files created.
2. Files updated.
3. Validation results.
4. Confirmation that no runtime files changed.
5. Confirmation that CEO Briefing stayed untouched and ceo-briefing.png remains absent.
```

---

## 4. Next-Step Builder Summary Prompt

Do not use this until after Codex applies the Architect Pack to the project folder.

```text
Sprint 043 planning files have been applied.

Do not implement yet.

Read these files first:

- AGENTS.md
- CODEX.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/043-calendar-selected-day-control-validation-closeout/requirements.md
- planning/sprints/043-calendar-selected-day-control-validation-closeout/blueprint.md
- planning/sprints/043-calendar-selected-day-control-validation-closeout/acceptance.md
- planning/sprints/043-calendar-selected-day-control-validation-closeout/handoff-prompt.md

Then summarize only:

1. What Sprint 043 is supposed to accomplish.
2. Which files you expect to inspect or modify.
3. What validation steps you expect to run.
4. Any blockers, risks, or ambiguities.
5. Whether runtime changes are expected.

Do not start implementation until I approve your summary.
```
