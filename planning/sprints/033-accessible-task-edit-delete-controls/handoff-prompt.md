# Sprint 033 Builder Handoff Prompt

You are the Builder for Trina Sprint 033.

## Task

Apply the accessible task edit/delete controls sprint after explicit implementation approval.

Do not begin runtime implementation until the operator approves moving beyond this planning/docs checkpoint.

## Read First

```text
AGENTS.md
planning/STATE.md
planning/RISKS.md
planning/QUESTIONS.md
docs/VALIDATION.md
planning/sprints/033-accessible-task-edit-delete-controls/requirements.md
planning/sprints/033-accessible-task-edit-delete-controls/blueprint.md
planning/sprints/033-accessible-task-edit-delete-controls/acceptance.md
```

## Runtime Scope After Approval

Expected files:

```text
components/TasksView.tsx
App.tsx
```

Possible only if existing task typing requires it:

```text
types.ts
```

Report before editing any additional runtime file.

## Implementation Summary

Add explicit accessible edit and delete controls for each visible task.

Preserve:

- Existing task creation from Tasks.
- Typed Assistant task capture.
- Task complete/incomplete toggle.
- Existing filters and empty-state guidance.
- Core navigation.
- Sprint 031 accessibility polish.

Add:

- Edit control with accessible name.
- Delete control with accessible name.
- Inline edit state for at least task title.
- Save and Cancel controls.
- Parent delete plumbing if required.

Keep the implementation local, small, and boring.

## Protected Scope

Do not touch:

- CEO Briefing.
- `references/flutterflow/sprint-009/ceo-briefing.png`.
- FlutterFlow.
- Firebase.
- Backend.
- Hermes.
- Package/dependency files.
- Native/build/release/generated files.
- Auth/database/live AI/deploy files.

Do not create screenshot evidence.

## Required Validation After Implementation

Run:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Run browser validation with:

```bash
npm run dev
```

Verify:

1. Dashboard/Home loads.
2. Bottom navigation reaches core sections.
3. Typed Assistant capture creates a task.
4. Empty Assistant input remains safe.
5. Task toggle still works.
6. Task edit save updates the existing task.
7. Task edit cancel leaves the task unchanged.
8. Task delete removes the task.
9. Edit/delete controls are keyboard reachable where practical.
10. Edit/delete controls are touch usable in responsive/mobile emulation where practical.
11. CEO Briefing remains untouched.
12. `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

## Report

Report:

1. Files changed.
2. Validation commands and results.
3. Browser smoke results.
4. Any unresolved risks or questions.
5. Confirmation that no protected files changed.
6. Confirmation that CEO Briefing stayed untouched.
7. Confirmation that `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
