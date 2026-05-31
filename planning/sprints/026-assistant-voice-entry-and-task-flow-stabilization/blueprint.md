# Sprint 026 Blueprint - Assistant Voice Entry and Task Flow Stabilization

## Objective

Implement the smallest safe runtime changes that make the Assistant -> task/reminder -> notification path usable.

## Files to Read First

```text
AGENTS.md
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/ARCHITECTURE.md
docs/API.md
docs/VALIDATION.md
planning/sprints/026-assistant-voice-entry-and-task-flow-stabilization/requirements.md
planning/sprints/026-assistant-voice-entry-and-task-flow-stabilization/acceptance.md
```

## Likely Files to Inspect

```text
App.tsx
components/Navigation.tsx
components/NotificationsView.tsx
src/lib/reminderNotifications.js
```

Inspect the repo before deciding final edits.

## Allowed Runtime Changes

Runtime changes are allowed only when directly tied to:

- Assistant entry
- voice/reminder/task capture
- notification/reminder visibility
- dashboard/navigation support for the core flow
- local validation of this path

## Protected Files and Areas

Do not create or modify CEO Briefing screenshot evidence:

```text
references/flutterflow/sprint-009/ceo-briefing.png
references/flutterflow/sprint-009/ceo-briefing*.png
```

Do not modify Firebase/backend/Hermes/package/native/release/build/export files.

## Build Plan

### 1. Confirm current state

Run:

```bash
git status --branch --short
```

Inspect app files to identify the current navigation and assistant/task/notification structure.

### 2. Map the existing flow

Document briefly in the implementation summary:

- where the Assistant entry currently lives
- how the app tracks selected view/screen
- where reminder/task data lives
- how notifications are displayed
- which helpers already exist

### 3. Stabilize entry and navigation

Make the Assistant or voice/reminder path reachable from the main app surface.

Avoid broad redesign.

Fix only the navigation needed for the core flow.

### 4. Stabilize capture behavior

Ensure the user can create or simulate a task/reminder through local state or existing helpers.

Handle empty input safely.

### 5. Stabilize visibility

Ensure the created/simulated item appears in a visible task, reminder, or notification surface.

Improve empty states if needed.

### 6. Validate

Run available safe checks.

Always run:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Run project-specific checks only if scripts exist and are safe:

```bash
npm test
npm run lint
npm run typecheck
npm run build
```

### 7. Update docs/state

Update:

```text
planning/STATE.md
docs/VALIDATION.md
```

Update only if needed:

```text
docs/ARCHITECTURE.md
docs/API.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
```

## Implementation Rules

- Do not build CEO Briefing.
- Do not add active CEO Briefing guidance.
- Do not expand scope beyond the core assistant/task path.
- Do not stage, commit, or push unless explicitly asked.
- Prefer small, reviewable changes.
- Report all files changed.
