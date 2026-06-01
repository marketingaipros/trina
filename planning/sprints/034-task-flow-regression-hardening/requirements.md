# Sprint 034 Requirements - Task Flow Regression Hardening

## Goal

Harden the existing Trina task workflow after Sprint 033 added accessible edit/delete controls.

Sprint 034 should verify and fix small task-flow regressions only.

## Background

Sprint 033 closed a known task gap by adding visible accessible Edit/Delete controls to existing task rows/cards. Browser validation also found and fixed an overlap issue where the fixed bottom navigation could block bottom-row controls.

Sprint 034 should now protect the task workflow before larger app work continues.

## In Scope

- Inspect current task flow behavior.
- Preserve task creation.
- Preserve typed Assistant capture.
- Preserve task display.
- Preserve task completion toggle.
- Preserve task filters.
- Preserve task empty states.
- Preserve task edit behavior.
- Preserve task delete behavior.
- Preserve Dashboard/Home navigation.
- Preserve Assistant / Voice Entry navigation.
- Confirm fixed bottom navigation does not block task controls.
- Confirm responsive/mobile task controls remain touch usable.
- Make only narrow fixes required by acceptance criteria.
- Update validation/state/risk/question docs after implementation and validation.

## Out of Scope

- CEO Briefing page.
- CEO Briefing evidence.
- FlutterFlow CEO Briefing screenshot.
- New task features such as due dates, reminders, priorities, recurring tasks, calendar sync, or categories.
- Backend work.
- Firebase work.
- Hermes work.
- Package dependency changes.
- Native mobile build work.
- Deployment or release work.
- Large UI redesign.
- Database or cloud sync.
- Authentication changes.

## Approved Runtime Targets

Likely files:

```text
components/TasksView.tsx
App.tsx
```

Only if required by inspection:

```text
types.ts
components/VoiceDashboard.tsx
components/Navigation.tsx
```

Do not touch other runtime files without reporting why first.

## Non-Functional Requirements

- Keep changes small.
- Preserve existing visual direction.
- Preserve Sprint 031 accessibility polish.
- Preserve Sprint 033 edit/delete accessibility.
- Prefer plain React state and existing storage patterns.
- Do not introduce new dependencies.
- Do not change app architecture unless a clear defect requires it.
