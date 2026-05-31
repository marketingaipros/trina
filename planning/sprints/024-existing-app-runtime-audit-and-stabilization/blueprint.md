# Sprint 024 Blueprint - Existing App Runtime Audit and Stabilization

## Objective

Audit and stabilize the current frontend app shell across visible non-CEO paths.

## Pre-Implementation Rule

Before runtime edits, Codex must read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/VALIDATION.md`
- `planning/sprints/024-existing-app-runtime-audit-and-stabilization/requirements.md`
- `planning/sprints/024-existing-app-runtime-audit-and-stabilization/blueprint.md`
- `planning/sprints/024-existing-app-runtime-audit-and-stabilization/acceptance.md`

Then Codex must summarize:

1. What Sprint 024 is supposed to accomplish.
2. Which files it expects to modify.
3. What tests or validation steps it will run.
4. Any blockers or ambiguities.

Codex must stop for approval before implementation.

## Files to Inspect

```text
App.tsx
components/Dashboard.tsx
components/Navigation.tsx
components/TasksView.tsx
components/NotificationsView.tsx
src/lib/reminderNotifications.js
components/
src/
```

## Expected Files to Modify

```text
App.tsx
components/Dashboard.tsx
components/Navigation.tsx
components/TasksView.tsx
components/NotificationsView.tsx
src/lib/reminderNotifications.js
planning/STATE.md
docs/VALIDATION.md
```

Only modify other files if inspection proves they are directly tied to the accepted Sprint 024 scope.

## Implementation Plan

### Step 1 - Current behavior audit

Inspect the current app shell.

Identify:

- View identifiers used by `App.tsx`.
- Navigation targets used by `Navigation.tsx`.
- Dashboard button/card targets.
- Assistant/voice entry behavior.
- Tasks view behavior.
- Finance view behavior.
- Calendar view behavior.
- Notifications/reminders behavior.
- Settings-equivalent path, if present.
- Dead buttons, missing handlers, missing components, stale imports, broken view names, or crash paths.

### Step 2 - Stabilize app-level routing

Make small fixes so non-CEO view names and handlers line up.

Do not add CEO Briefing as a required route.

If CEO Briefing references remain visible, handle them as deferred in a clear and non-blocking way.

### Step 3 - Stabilize Dashboard

Ensure Dashboard visible actions either:

- Navigate to the intended existing view.
- Trigger the intended existing local behavior.
- Show a clear placeholder message.

No broad dashboard redesign.

### Step 4 - Stabilize Assistant/voice entry

Ensure Assistant and/or voice entry does not break.

Acceptable outcomes:

- Opens existing Assistant/voice screen.
- Opens existing modal/panel.
- Shows clear placeholder if unfinished.

Do not add live AI or voice backend integration.

### Step 5 - Stabilize Tasks

Ensure Tasks renders and basic local interactions do not crash.

Do not add backend persistence.

### Step 6 - Stabilize Finance and Calendar

Ensure each renders or shows clear intentional placeholder state.

Do not add real financial data, real calendar integration, or API connections.

### Step 7 - Stabilize Notifications/reminders

Ensure Notifications view renders.

Ensure reminder helper does not crash when:

- Notification API is unavailable.
- Permission is denied.
- Permission is default/not requested.
- Browser blocks notifications.

Do not add backend scheduling.

### Step 8 - Update docs/planning

Update:

- `planning/STATE.md`
- `docs/VALIDATION.md`

Update `planning/DECISIONS.md`, `planning/RISKS.md`, or `planning/QUESTIONS.md` only if new durable decisions, risks, or open questions are discovered.

## Validation Plan

Run:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
```

Manual smoke test:

- Dashboard.
- Navigation.
- Assistant/voice entry.
- Tasks.
- Finance.
- Calendar.
- Notifications/reminders.
- Settings-equivalent path if present.

## Guardrails

Do not stage, commit, or push unless explicitly instructed.

Do not modify protected files.

Do not create screenshot evidence.

Do not treat CEO Briefing as blocking Sprint 024.
