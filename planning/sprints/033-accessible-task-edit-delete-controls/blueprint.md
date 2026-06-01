# Sprint 033 Blueprint - Accessible Task Edit/Delete Controls

## Summary

Implement a focused task UI fix after approval. Add accessible edit/delete controls to `TasksView`, wire delete state through the parent if needed, and preserve existing task creation, toggle, and Assistant capture flows.

This planning/docs application does not implement runtime code.

## Expected Runtime Files After Approval

Likely:

```text
components/TasksView.tsx
App.tsx
```

Possible only if required by existing task typing:

```text
types.ts
```

Do not edit these files during the planning/docs checkpoint.

## Expected Docs Files

```text
planning/STATE.md
docs/VALIDATION.md
planning/RISKS.md
planning/QUESTIONS.md
```

`docs/API.md` should only change if the repo starts documenting local component contracts or task view props there.

## Implementation Steps

### 1. Inspect Existing Task Flow

Before editing runtime code, identify:

- Task type/interface.
- Task state owner.
- Existing `onUpdateTask` behavior.
- Existing toggle behavior.
- Existing Assistant typed capture flow.
- Existing `TasksView` props.

Do not rewrite the task model unless required.

### 2. Add Delete Plumbing

If no delete callback exists:

- Add a parent handler that removes a task by ID.
- Pass it to `TasksView` as `onDeleteTask`.

The delete implementation should be the smallest safe state update.

Expected behavior:

- Activating Delete removes the task.
- Other tasks remain unchanged.
- No duplicate or stale task remains visible.

### 3. Add Edit UI

In `TasksView`:

- Add an Edit button/control per task.
- Add local edit state for the currently edited task.
- Expose at least the task title in an input.
- Add Save and Cancel controls.
- Save calls the existing update path.
- Cancel exits edit mode without saving.
- Preserve all unedited task fields.

Do not add complex modal systems unless they already exist and are clearly reusable.

### 4. Accessibility Requirements

- Edit and Delete controls must be visible or touch-accessible without hover-only interaction.
- Icon-only controls must have accessible names.
- Use visible text, `aria-label`, or `title`.
- Edit input must have a visible or programmatic label.
- Save and Cancel controls must be keyboard reachable.
- Delete must not be accidentally triggered by toggling the task.

### 5. Preserve Existing Behavior

After the change, confirm:

- Typed Assistant capture still creates a task.
- Task appears in Tasks.
- Task toggle still works.
- Task edit updates the same task.
- Task cancel leaves the task unchanged.
- Task delete removes the task.
- Empty Assistant input remains disabled/safe.
- Core navigation still works.

### 6. Documentation

Update after implementation:

- `planning/STATE.md` with Sprint 033 progress and results.
- `docs/VALIDATION.md` with Sprint 033 validation results.
- `planning/RISKS.md` only if any risk remains or status changes.
- `planning/QUESTIONS.md` only if any question remains or is answered.

## Guardrails

Do not touch:

- CEO Briefing.
- FlutterFlow files.
- Firebase files.
- Backend files.
- Hermes files.
- Package/dependency files.
- Native/build/release/generated files.

Run the CEO Briefing absence guard before and after implementation:

```bash
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

## Planning Checkpoint Validation

For this docs-only application, run:

```bash
git diff --check
git status --branch --short
git diff --name-only
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```
