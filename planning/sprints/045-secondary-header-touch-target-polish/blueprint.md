# Sprint 045 Blueprint - Secondary Header Touch Target Polish

## Implementation Strategy

Sprint 045 should be inspect-first, then narrow implementation.

The Builder must not start runtime edits until it reads the sprint files and receives approval on its summary.

## Step 1 - Inspect Current Controls

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

## Step 2 - Choose Smallest Safe Fix

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

## Step 3 - Implement Narrowly

Make only the runtime edits needed for the identified target controls.

Do not modify unrelated surfaces.
Do not change data, fixtures, routing, dependencies, or build config.
Do not touch CEO Briefing.

## Step 4 - Validate Mobile Runtime

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

## Step 5 - Update Docs

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

## Step 6 - Run Validation Commands

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
