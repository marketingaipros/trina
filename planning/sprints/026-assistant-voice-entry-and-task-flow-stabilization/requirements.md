# Sprint 026 Requirements - Assistant Voice Entry and Task Flow Stabilization

## Goal

Stabilize the core assistant-centered app flow so Trina feels like a working assistant prototype again.

The target flow is:

```text
Dashboard or Navigation -> Assistant / Voice Entry -> Task or Reminder Capture -> Task/Notification Visibility -> Return Navigation
```

## Current Context

Sprint 025 cleaned the planning/docs state and restored a forward path. Sprint 026 resumes app completion.

CEO Briefing is deferred, not complete, non-blocking, and out of scope for this sprint.

## User Story

As a Trina user, I want to enter the Assistant flow, capture or simulate a reminder/task, see the result reflected in the app, and return to the main app surface without confusion.

## In Scope

- Assistant entry from the main app surface.
- Voice/reminder/task capture flow stabilization.
- Local task/reminder state display.
- Notification/reminder visibility improvements.
- Dashboard/navigation polish needed for the core flow.
- Clear empty states and safe placeholder behavior where live features are not ready.
- Lightweight local validation.
- Planning/docs updates tied to this sprint.

## Out of Scope

- CEO Briefing page build, rebuild, routing, screenshot, or evidence capture.
- FlutterFlow export/build/release work.
- Firebase/backend/Hermes/native/release/build/export work.
- Auth changes.
- Database/cloud sync.
- CRM, invoicing, or multi-user permissions.
- Live AI integration unless already present and safe.
- Large dashboard redesign.
- New unrelated screens.

## Business Rules

- The app-completion path takes priority over CEO Briefing.
- CEO Briefing must remain deferred and non-blocking.
- Local prototype behavior is acceptable when live integrations are not ready.
- Buttons should either work or clearly communicate safe placeholder behavior.
- The user should not hit a dead end in the core flow.

## Required Behavior

- A visible Assistant entry point exists from the main app surface.
- The user can reach voice/reminder/task capture.
- The user can create or simulate a reminder/task.
- The result is visible in a task, reminder, or notification area.
- Navigation lets the user return to the main app surface.
- Empty states explain what to do next.

## Edge Cases

- No existing reminders/tasks.
- User taps capture action with empty input.
- User navigates away and returns.
- Notifications are unavailable or permission-gated.
- Existing helper functions are incomplete.

## Explicit CEO Briefing Guardrail

Do not touch CEO Briefing in this sprint.

Do not create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Do not add active CEO Briefing instructions to planning or docs.
