# Sprint 031 Blueprint

## Phase 1 - Planning Pack Application

Create and update only the allowed planning/docs files. Do not modify runtime app files during this phase.

## Phase 2 - Read Before Implementation

Before implementation, read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/031-core-app-polish-and-task-flow-hardening/requirements.md`
- `planning/sprints/031-core-app-polish-and-task-flow-hardening/blueprint.md`
- `planning/sprints/031-core-app-polish-and-task-flow-hardening/acceptance.md`

Then summarize the goal, expected files, validation plan, blockers, CEO Briefing protection, and protected non-runtime surfaces. Wait for explicit approval before editing runtime code.

## Phase 3 - Inspect Current Runtime

After approval, inspect the current app before editing:

- `App.tsx`
- `components/Navigation.tsx`
- `components/Dashboard.tsx`
- `components/VoiceDashboard.tsx`
- `components/TasksView.tsx`
- `components/NotificationsView.tsx`
- `components/CalendarView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`

Look only for confirmed issues in copy, empty states, navigation clarity, task-flow feedback, and obvious accessibility clarity.

## Phase 4 - Make Smallest Safe Fixes

Make fewer changes rather than more. Do not modify files that do not need changes after inspection.

Expected possible runtime files, only after approval:

- `App.tsx`
- `components/Navigation.tsx`
- `components/Dashboard.tsx`
- `components/VoiceDashboard.tsx`
- `components/TasksView.tsx`
- `components/NotificationsView.tsx`
- `components/CalendarView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`

Planning follow-up files may include `docs/VALIDATION.md`, `planning/STATE.md`, and `planning/QUESTIONS.md` if implementation results need documentation.

## Phase 5 - Validate

Run the existing lightweight validation commands and manual smoke checks from `docs/VALIDATION.md`.

Do not add test frameworks, dependencies, package scripts, or lockfile changes without separate approval.
