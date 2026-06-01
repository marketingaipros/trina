# Trina Sprint 033 Architect Pack

**Sprint:** 033-accessible-task-edit-delete-controls
**Project:** Trina / trinaos-voice
**Date:** 2026-05-31
**Architect Layer:** ChatGPT
**Builder Layer:** Codex
**Pack type:** Runtime fix sprint with docs/planning updates
**Primary outcome:** Add accessible task edit and delete controls to the Tasks UI without disturbing existing task capture, toggle behavior, navigation, or protected CEO Briefing scope.

---

## 0. Operating Rule

This Architect Pack must be applied to the project folder before implementation.

Codex must first create or update the sprint planning files listed in this pack. After that, Codex must stop and summarize the sprint before making runtime code changes.

The handoff is the folder, not this chat.

---

## 1. Sprint Context

Sprint 032 closed as a validation/reporting sprint.

Sprint 032 confirmed:

- `npm run lint` passed.
- `npm run build` passed with known Vite warnings.
- `git diff --check` passed.
- Git status was clean before closeout updates.
- CEO Briefing stayed untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remained absent.
- No runtime code was changed during Sprint 032 validation.

Sprint 032 also found one confirmed runtime gap:

- Tasks can be created.
- Tasks can be toggled.
- Task edit/delete controls are not present in the Tasks UI.
- Edit/delete controls do not appear visually or in the DOM.
- `components/TasksView.tsx` appears to render the task toggle, title, priority, and deadline, but no edit/delete controls.
- `TasksView` appears to expose `onAddTask` and `onUpdateTask`, but no delete handler was observed.

Sprint 033 exists to fix that gap.

---

## 2. Sprint Goal

Add explicit, accessible task edit and delete controls to the Tasks UI.

The fix must:

- Keep existing task creation working.
- Keep typed Assistant task capture working.
- Keep task toggle behavior working.
- Add a clear edit path for existing tasks.
- Add a clear delete path for existing tasks.
- Make edit/delete controls discoverable visually and in the DOM.
- Make edit/delete controls usable by keyboard and touch.
- Give edit/delete controls accessible names.
- Keep the implementation local and boring.
- Avoid unrelated redesign.
- Avoid backend, Firebase, FlutterFlow, Hermes, package, native, build, release, or CEO Briefing work.

---

## 3. Architect-Facing Requirements

### 3.1 In Scope

Sprint 033 includes:

1. Add visible or always-touch-accessible edit and delete controls for each task row/card in `components/TasksView.tsx`.

2. Add edit behavior for a task:
   - User can activate Edit.
   - User can change the task title at minimum.
   - If current UI supports priority or deadline editing safely, preserve or expose those fields only if already supported by existing state shape.
   - User can save the edit.
   - User can cancel the edit.
   - Editing must call the existing update path rather than creating a duplicate task.

3. Add delete behavior for a task:
   - User can activate Delete.
   - The task is removed from the visible task list.
   - Delete should be explicit and accessible.
   - Use a native confirmation only if the current app pattern already supports it or if it is the smallest safe way to avoid accidental deletion.
   - Do not overbuild undo, modal systems, or archive behavior.

4. Add or wire parent-level delete plumbing if required:
   - If `TasksView` lacks an `onDeleteTask` prop, add the smallest safe prop.
   - Update the parent component that owns task state, likely `App.tsx`.
   - Keep data model shape unchanged unless a tiny type/interface addition is required.

5. Preserve existing behavior:
   - Task creation from Tasks view.
   - Typed Assistant capture to Tasks.
   - Task toggle complete/incomplete.
   - Task filtering or empty-state messaging.
   - Navigation across core app sections.
   - Sprint 031 accessibility polish.

6. Update documentation:
   - `planning/STATE.md`
   - `planning/RISKS.md`, if risk status changes
   - `planning/QUESTIONS.md`, if questions are resolved or added
   - `docs/VALIDATION.md`
   - `docs/API.md`, only if component contracts/props are documented there
   - Sprint 033 files under `planning/sprints/033-accessible-task-edit-delete-controls/`

### 3.2 Out of Scope

Sprint 033 must not:

- Touch CEO Briefing.
- Create or modify `references/flutterflow/sprint-009/ceo-briefing.png`.
- Work on FlutterFlow.
- Work on Firebase.
- Work on backend services.
- Work on Hermes.
- Change package dependencies.
- Change native app configuration.
- Change build or release configuration.
- Redesign the Tasks page.
- Add a complex task management system.
- Add drag/drop.
- Add recurring tasks.
- Add task assignment.
- Add cloud sync.
- Add authentication.
- Add persistence beyond what already exists in the current app.
- Rework the global app architecture.
- Revert Sprint 023 app-completion reset or Sprint 031 accessibility polish.
- Use CEO Briefing as a target, blocker, or validation requirement.

---

## 4. Builder-Facing Implementation Plan

### 4.1 Files Codex Must Create

Create:

```text
planning/sprints/033-accessible-task-edit-delete-controls/requirements.md
planning/sprints/033-accessible-task-edit-delete-controls/blueprint.md
planning/sprints/033-accessible-task-edit-delete-controls/acceptance.md
planning/sprints/033-accessible-task-edit-delete-controls/handoff-prompt.md
```

### 4.2 Files Codex Should Update During Planning Application

Update as needed:

```text
planning/STATE.md
planning/RISKS.md
planning/QUESTIONS.md
docs/VALIDATION.md
docs/API.md
```

Only update `docs/API.md` if the project already uses it to document component contracts, props, CLI/API surfaces, or interfaces affected by the new task delete callback.

### 4.3 Runtime Files Expected During Implementation

Likely runtime files:

```text
components/TasksView.tsx
App.tsx
```

Possible supporting files, only if already involved in task typing/state:

```text
types.ts
```

Do not edit additional files unless Codex reports why they are necessary before making the change.

### 4.4 Implementation Sequence

1. Read current task state ownership.
   - Identify where tasks live.
   - Identify task type/interface.
   - Identify current update/toggle logic.
   - Identify how Assistant capture sends tasks into state.
   - Identify how `TasksView` receives props.

2. Add delete plumbing.
   - If parent state owns tasks, add `handleDeleteTask(taskId)` in the parent.
   - Pass it into `TasksView` as `onDeleteTask`.
   - In `TasksView`, render a Delete button for each task.
   - The Delete button must have an accessible name such as `Delete task: {task title}`.
   - Delete must remove the task from the visible task list.
   - Use the existing task ID field.

3. Add edit UI.
   - Keep edit UI small and inline.
   - Add local edit state in `TasksView` unless an existing edit pattern exists.
   - Edit mode should expose at least a title input.
   - Save should call `onUpdateTask` with the changed title.
   - Cancel should discard local edit changes.
   - Save/Cancel buttons must have accessible names.
   - The edit input must have a visible or programmatic label.

4. Preserve toggle behavior.
   - Do not change toggle semantics.
   - Do not make the whole task card destructive.
   - Do not block toggle while not editing.

5. Preserve task creation and Assistant capture.
   - After implementation, create a typed Assistant task and confirm it appears in Tasks.
   - Confirm editing that task updates it.
   - Confirm deleting that task removes it.
   - Confirm toggling still works.

6. Apply accessibility checks.
   - Controls must be reachable by keyboard.
   - Icon-only buttons must have `aria-label`, `title`, or visible text.
   - Touch targets should be practical.
   - Edit/delete must not depend only on hover.

7. Update docs after implementation.
   - Record Sprint 033 status in `planning/STATE.md`.
   - Record validation results in `docs/VALIDATION.md`.
   - Record any deferred issue in `planning/RISKS.md` or `planning/QUESTIONS.md`.

---

## 5. Acceptance Criteria

Sprint 033 is complete only when all applicable criteria are satisfied.

### 5.1 Functional Acceptance

- A user can create a task from the current supported path.
- A user can create a typed Assistant task and see it in Tasks.
- A user can toggle a task complete/incomplete.
- A user can edit an existing task title.
- Editing a task updates the existing task instead of creating a duplicate.
- A user can cancel an edit without changing the task.
- A user can delete a task.
- Deleting a task removes it from the visible task list.
- Existing empty-state guidance still works.
- Existing task filter/display behavior still works, if filters exist.
- Navigation to Dashboard/Home, Assistant, Tasks, Notifications, Calendar, Finance, and Knowledge Base still works.

### 5.2 Accessibility Acceptance

- Edit control is visible or otherwise discoverable without hover-only interaction.
- Delete control is visible or otherwise discoverable without hover-only interaction.
- Edit/delete controls are present in the DOM.
- Edit/delete controls are keyboard reachable.
- Edit/delete controls are touch usable.
- Edit/delete controls have accessible names.
- Edit input has a visible or programmatic label.
- Save and Cancel controls have accessible names.
- Focus behavior remains usable after save, cancel, and delete.
- Empty Assistant input safety remains intact.

### 5.3 Protection Acceptance

- CEO Briefing remains untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- No FlutterFlow files are modified.
- No Firebase files are modified.
- No backend files are modified.
- No Hermes files are modified.
- No package/dependency files are modified unless explicitly approved.
- No native/build/release/generated files are modified.
- No screenshot evidence files are created.

### 5.4 Validation Acceptance

Codex must run:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Codex must also run browser validation with `npm run dev` or document why local browser validation could not be completed.

Browser validation must include:

- Dashboard/Home load.
- Bottom navigation to all core sections.
- Typed Assistant task capture.
- Task toggle.
- Task edit.
- Task cancel.
- Task delete.
- Empty Assistant input safety.
- Responsive/touch emulation for edit/delete controls where possible.
- Keyboard pass for edit/delete controls where practical.

### 5.5 Documentation Acceptance

- Sprint 033 folder exists with all four required files.
- `planning/STATE.md` reflects Sprint 033 current status.
- `docs/VALIDATION.md` records Sprint 033 validation expectations and results when implemented.
- Any remaining risk or question is recorded.
- Sprint 032 confirmed issue is linked forward as the reason for Sprint 033.

---

## 6. Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Delete plumbing may require parent state changes. | Medium | Medium | Keep delete as a simple state filter by task ID. | Open |
| Edit UI may expand beyond MVP. | Medium | Medium | Edit title only unless existing task model safely supports more fields. | Open |
| Hover-only controls may fail mobile/touch validation. | High | Medium | Controls must be visible or touch-accessible without hover. | Open |
| Task capture could regress if parent state is changed incorrectly. | Medium | High | Validate typed Assistant capture before closeout. | Open |
| CEO Briefing could be accidentally touched by broad commands. | Low | High | Keep absence guard and path protection in every prompt. | Open |

---

## 7. Decisions

Add or preserve these decisions in `planning/DECISIONS.md` only if they are not already recorded:

| Decision | Reason | Impact |
|---|---|---|
| Sprint 033 will fix task edit/delete controls as a focused runtime sprint. | Sprint 032 found a confirmed validation gap. | Keeps the app moving without reopening unrelated scope. |
| Task edit/delete must be accessible without hover-only behavior. | Sprint 032 validation found missing DOM/visual controls, and mobile/touch usability is required. | Controls must be visible or touch-discoverable. |
| CEO Briefing remains deferred and protected. | User explicitly does not want work on CEO Briefing now. | No CEO Briefing files or evidence screenshots may be touched. |

---

## 8. Open Questions

These should be placed in `planning/QUESTIONS.md` only if Codex cannot answer them from the repo:

1. Does the existing task type include only title/status/deadline/priority, or additional fields that edit mode must preserve?
2. Does the current UI already have a reusable button/input pattern that task edit/delete controls should follow?
3. Should delete use native confirmation, or is immediate delete acceptable for MVP?

Do not block implementation on question 3 if the smallest safe local pattern is obvious. Prefer the simplest accessible MVP behavior.

---

# 9. File Contents To Create

## 9.1 `planning/sprints/033-accessible-task-edit-delete-controls/requirements.md`

```markdown
# Sprint 033 Requirements — Accessible Task Edit/Delete Controls

## Goal

Add accessible task edit and delete controls to the Tasks UI.

Sprint 032 confirmed that tasks can be created and toggled, but edit/delete controls are missing from the Tasks UI. Sprint 033 closes that gap with the smallest safe runtime fix.

## Background

Sprint 032 validation found:

- Task creation works.
- Task toggle works.
- Edit/delete controls do not appear visually or in the DOM.
- `components/TasksView.tsx` appears to render task toggle, title, priority, and deadline, but no edit/delete controls.
- A delete handler may need parent plumbing.

## In Scope

- Add edit control for each visible task.
- Add delete control for each visible task.
- Add accessible names for edit/delete controls.
- Add edit mode for task title at minimum.
- Add Save and Cancel behavior for edits.
- Add delete behavior that removes the task from visible state.
- Add parent delete callback if needed.
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
```

Do not create placeholder evidence screenshots.
```

---

## 9.2 `planning/sprints/033-accessible-task-edit-delete-controls/blueprint.md`

```markdown
# Sprint 033 Blueprint — Accessible Task Edit/Delete Controls

## Summary

Implement a focused task UI fix. Add accessible edit/delete controls to `TasksView`, wire delete state through the parent if needed, and preserve existing task creation/toggle/Assistant capture flows.

## Expected Runtime Files

Likely:

```text
components/TasksView.tsx
App.tsx
```

Possible only if required by existing task typing:

```text
types.ts
```

## Expected Docs Files

```text
planning/STATE.md
docs/VALIDATION.md
planning/RISKS.md
planning/QUESTIONS.md
```

## Implementation Steps

### 1. Inspect Existing Task Flow

Before editing, identify:

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
- Save/Cancel controls must be keyboard reachable.
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

Update:

- `planning/STATE.md` with Sprint 033 progress.
- `docs/VALIDATION.md` with Sprint 033 validation results.
- `planning/RISKS.md` only if any risk remains.
- `planning/QUESTIONS.md` only if any question remains.

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
```

---

## 9.3 `planning/sprints/033-accessible-task-edit-delete-controls/acceptance.md`

```markdown
# Sprint 033 Acceptance — Accessible Task Edit/Delete Controls

## Functional Acceptance

- [ ] Tasks can still be created through the current supported task path.
- [ ] Typed Assistant capture still creates a visible task.
- [ ] Empty Assistant input safety still works.
- [ ] Existing task toggle behavior still works.
- [ ] Each visible task has an Edit control.
- [ ] Each visible task has a Delete control.
- [ ] Edit control opens an edit state for the selected task.
- [ ] User can edit the task title at minimum.
- [ ] Save updates the existing task instead of creating a duplicate.
- [ ] Cancel exits edit mode without changing the task.
- [ ] Delete removes the task from the visible list.
- [ ] Existing empty-state guidance still works.
- [ ] Core navigation still works.

## Accessibility Acceptance

- [ ] Edit controls are present in the DOM.
- [ ] Delete controls are present in the DOM.
- [ ] Edit/delete controls are not hover-only.
- [ ] Edit/delete controls are keyboard reachable.
- [ ] Edit/delete controls are touch usable.
- [ ] Edit/delete controls have accessible names.
- [ ] Edit input has a visible or programmatic label.
- [ ] Save and Cancel controls have accessible names.
- [ ] Focus behavior remains usable after save, cancel, and delete.

## Validation Commands

Run:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

## Browser Validation

Run local app with:

```bash
npm run dev
```

Validate:

- Dashboard/Home loads.
- Bottom navigation reaches Dashboard/Home, Assistant, Tasks, Notifications, Calendar, Finance, and Knowledge Base.
- Typed Assistant task capture creates a visible task.
- Empty Assistant input cannot be captured or sent.
- Task can be toggled.
- Task can be edited and saved.
- Task edit can be canceled.
- Task can be deleted.
- Edit/delete controls work with keyboard where practical.
- Edit/delete controls work in responsive/touch emulation where practical.

## Protection Acceptance

- [ ] CEO Briefing stayed untouched.
- [ ] `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- [ ] No FlutterFlow files changed.
- [ ] No Firebase files changed.
- [ ] No backend files changed.
- [ ] No Hermes files changed.
- [ ] No package/dependency files changed unless explicitly approved.
- [ ] No native/build/release/generated files changed.
```

---

## 9.4 `planning/sprints/033-accessible-task-edit-delete-controls/handoff-prompt.md`

```markdown
# Sprint 033 Handoff Prompt — Accessible Task Edit/Delete Controls

Use this prompt with Codex after this Architect Pack has been applied to the project folder.

```text
Start Sprint 033 by reading the planning files only. Do not implement yet.

Repository:
`/Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice`

Sprint:
`planning/sprints/033-accessible-task-edit-delete-controls/`

Read these files before making changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- docs/API.md
- planning/sprints/033-accessible-task-edit-delete-controls/requirements.md
- planning/sprints/033-accessible-task-edit-delete-controls/blueprint.md
- planning/sprints/033-accessible-task-edit-delete-controls/acceptance.md
- planning/sprints/033-accessible-task-edit-delete-controls/handoff-prompt.md

Then summarize:

1. What Sprint 033 is supposed to accomplish.
2. Which runtime files you expect to modify.
3. Which docs/planning files you expect to update.
4. How you plan to add task edit behavior.
5. How you plan to add task delete behavior.
6. How you will preserve typed Assistant task capture and task toggle behavior.
7. What validation steps you will run.
8. Any blockers or ambiguities.

Rules:
- Do not start implementation until I approve your summary.
- Do not touch CEO Briefing.
- Do not create `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not modify FlutterFlow, backend, Firebase, Hermes, package, native, build, release, or generated files.
- Do not change dependencies unless explicitly approved.
```
```

---

# 10. Codex Prompt To Apply This Architect Pack

Use this prompt first. This is not the implementation prompt.

```text
Apply the Sprint 033 Architect Pack as planning/docs only. Do not implement runtime code yet.

Repository:
`/Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice`

Create:

- `planning/sprints/033-accessible-task-edit-delete-controls/requirements.md`
- `planning/sprints/033-accessible-task-edit-delete-controls/blueprint.md`
- `planning/sprints/033-accessible-task-edit-delete-controls/acceptance.md`
- `planning/sprints/033-accessible-task-edit-delete-controls/handoff-prompt.md`

Update as needed:

- `planning/STATE.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `docs/API.md`, only if component contracts/interfaces are documented there

Rules:

- Planning/docs only.
- Do not edit runtime files.
- Do not edit `components/TasksView.tsx`.
- Do not edit `App.tsx`.
- Do not implement task edit/delete controls yet.
- Do not stage, commit, or push.
- Do not touch CEO Briefing.
- Do not create `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not modify FlutterFlow, backend, Firebase, Hermes, package, native, build, release, generated, or dependency files.

After applying the planning/docs files, run:

```bash
git diff --check
git status --branch --short
git diff --name-only
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Report:

1. Files created.
2. Files updated.
3. Validation results.
4. Final `git status --branch --short`.
5. Confirmation that no runtime files were modified.
6. Confirmation that CEO Briefing stayed untouched.
7. Confirmation that `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
```

---

# 11. Codex Prompt After Pack Is Applied

Use only after Codex applies and reports the Sprint 033 planning/docs files.

```text
Start Sprint 033 by reading the planning files only. Do not implement yet.

Repository:
`/Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice`

Sprint:
`planning/sprints/033-accessible-task-edit-delete-controls/`

Read these files before making changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- docs/API.md
- planning/sprints/033-accessible-task-edit-delete-controls/requirements.md
- planning/sprints/033-accessible-task-edit-delete-controls/blueprint.md
- planning/sprints/033-accessible-task-edit-delete-controls/acceptance.md
- planning/sprints/033-accessible-task-edit-delete-controls/handoff-prompt.md

Then summarize:

1. What Sprint 033 is supposed to accomplish.
2. Which runtime files you expect to modify.
3. Which docs/planning files you expect to update.
4. How you plan to add task edit behavior.
5. How you plan to add task delete behavior.
6. How you will preserve typed Assistant task capture and task toggle behavior.
7. What validation steps you will run.
8. Any blockers or ambiguities.

Rules:
- Do not start implementation until I approve your summary.
- Do not stage, commit, or push.
- Do not touch CEO Briefing.
- Do not create `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not modify FlutterFlow, backend, Firebase, Hermes, package, native, build, release, generated, or dependency files.
```
