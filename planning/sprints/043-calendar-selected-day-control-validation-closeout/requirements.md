# Sprint 043 Requirements - Calendar Selected-Day Control Validation Closeout

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

### Preferred Path: No Runtime Change

If an existing safe local state can populate a selected-day row:

- Use that state.
- Live-click edit/delete controls.
- Document the exact steps in `docs/VALIDATION.md`.
- Do not change runtime code.

### Fallback Path: Narrow Local/Dev-Only Fixture

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
- No horizontal overflow appears in the selected-day populated row state.
- Touch target/accessibility expectations remain preserved.
- Validation results are documented.
- Remaining risks or caveats are documented.
