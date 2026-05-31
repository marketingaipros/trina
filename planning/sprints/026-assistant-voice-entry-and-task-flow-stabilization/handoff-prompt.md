# Sprint 026 Builder Handoff Prompt

You are the Builder for Trina Sprint 026.

Sprint folder:

```text
planning/sprints/026-assistant-voice-entry-and-task-flow-stabilization/
```

Architect Pack:

```text
architect-packs/trina-026-assistant-voice-entry-and-task-flow-stabilization-architect-pack.md
```

## First, Read These Files

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
planning/sprints/026-assistant-voice-entry-and-task-flow-stabilization/blueprint.md
planning/sprints/026-assistant-voice-entry-and-task-flow-stabilization/acceptance.md
```

## Sprint Goal

Stabilize the assistant-centered app flow:

```text
Dashboard or Navigation -> Assistant / Voice Entry -> Task or Reminder Capture -> Task/Notification Visibility -> Return Navigation
```

## Critical Guardrail

Do not work on CEO Briefing.

CEO Briefing is deferred, not complete, non-blocking, and out of scope.

Do not build it.
Do not rebuild it.
Do not wire it.
Do not screenshot it.
Do not mark it complete.
Do not make it a blocker.

Do not create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

## Before Implementation

Before making changes, summarize:

1. What Sprint 026 is supposed to accomplish.
2. Which files you expect to inspect.
3. Which files you expect to modify.
4. What validation checks you will run.
5. Any blockers or ambiguities.

Stop after the summary and wait for approval.

## After Approval

Implement the smallest safe changes needed to make the Assistant -> task/reminder -> notification path usable.

Allowed likely areas:

```text
App.tsx
components/Navigation.tsx
components/NotificationsView.tsx
src/lib/reminderNotifications.js
```

Only modify other files if directly required and explain why.

## Validation

Run and report:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Run safe project checks if available:

```bash
npm test
npm run lint
npm run typecheck
npm run build
```

Do not stage, commit, or push unless explicitly asked.

## Final Report

Report:

1. Files changed.
2. What was fixed in the user flow.
3. Validation checks run and results.
4. Confirmation that CEO Briefing was untouched.
5. Remaining risks or recommended next sprint.
