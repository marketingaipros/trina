# Sprint 033 Requirements - Accessible Task Edit/Delete Controls

## Goal

Add accessible task edit and delete controls to the Tasks UI.

Sprint 032 confirmed that tasks can be created and toggled, but edit/delete controls are missing from the Tasks UI. Sprint 033 closes that gap with the smallest safe runtime fix after this planning/docs checkpoint is approved for implementation.

## Background

Sprint 032 validation found:

- Task creation works.
- Typed Assistant task capture works.
- Task toggle works.
- Edit/delete controls do not appear visually or in the DOM.
- `components/TasksView.tsx` appears to render task toggle, title, priority, and deadline, but no edit/delete controls.
- A delete handler may need parent plumbing.

## In Scope

- Add an edit control for each visible task.
- Add a delete control for each visible task.
- Add accessible names for edit/delete controls.
- Add edit mode for task title at minimum.
- Add Save and Cancel behavior for edits.
- Add delete behavior that removes the task from visible state.
- Add a parent delete callback if needed.
- Preserve task creation, typed Assistant capture, toggle behavior, and task display.
- Validate desktop, keyboard, and touch/mobile usability where practical.
- Update validation and state docs after implementation.

## Out of Scope

- CEO Briefing.
- `references/flutterflow/sprint-009/ceo-briefing.png`.
- FlutterFlow.
- Firebase.
- Backend services.
- Hermes.
- Package/dependency changes.
- Native/build/release/generated files.
- Complex task management.
- Drag/drop.
- Recurring tasks.
- Task assignment.
- Cloud sync.
- Authentication.
- Large redesign.

## Protected Paths

Do not touch:

```text
references/flutterflow/sprint-009/ceo-briefing.png
components/TasksView.tsx
App.tsx
```

`components/TasksView.tsx` and `App.tsx` are protected during this planning/docs application only. They become expected implementation candidates only after explicit runtime approval.

Do not create placeholder evidence screenshots.

## Deliverables

- Sprint 033 requirements, blueprint, acceptance, and handoff prompt.
- Updated planning state.
- Updated risk and question tracking for the confirmed task edit/delete gap.
- Updated validation instructions for the future implementation sprint.
