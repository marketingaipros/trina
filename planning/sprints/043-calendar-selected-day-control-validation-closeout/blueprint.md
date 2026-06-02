# Sprint 043 Blueprint - Calendar Selected-Day Control Validation Closeout

## Implementation Approach

Use an inspect-first workflow.

Do not begin by editing code. First determine whether the current app can already reproduce the selected-day populated-row state.

## Step 1 - Read Current Project Context

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

## Step 2 - Inspect Calendar Implementation

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

## Step 3 - Inspect Existing Fixture Surfaces

Inspect only as needed:

```text
App.tsx
storageService or relevant local data service files, if Calendar uses them
existing test/script/fixture surfaces, if present
```

Do not modify these files unless clearly justified and approved by sprint scope.

## Step 4 - Choose Validation Path

### Path A - Existing State Is Enough

If existing local/dev state can create a selected-day event:

- Do not modify runtime.
- Use browser/manual smoke at `390x844`.
- Live-click edit and delete controls.
- Document the exact steps and result.

### Path B - Narrow Calendar Fixture Required

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

## Step 5 - Browser Validation

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

## Step 6 - Command Validation

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

## Step 7 - Documentation Updates

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

Possible changed files:

```text
planning/DECISIONS.md, only if decision refinement is needed
planning/QUESTIONS.md, only if ambiguity remains
```

No other runtime files should change without explicit justification.
