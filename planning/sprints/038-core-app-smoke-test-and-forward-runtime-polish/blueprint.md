# Sprint 038 Blueprint - Core App Smoke Test and Forward Runtime Polish

## Builder Instructions

Sprint 038 is a controlled smoke-test and narrow polish sprint.

Prefer no runtime changes unless a concrete issue is found.

Do not stage, commit, or push.

## Step 1 - Read Project Context

Read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/requirements.md`
- `planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/blueprint.md`
- `planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/acceptance.md`

Then summarize the sprint before implementation.

## Step 2 - Inspect Runtime Surface

Inspect only what is needed from:

- `App.tsx`
- `components/Dashboard.tsx`
- `components/VoiceDashboard.tsx`
- `components/TasksView.tsx`
- `components/NotificationsView.tsx`
- `components/Navigation.tsx`
- `components/CalendarView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`
- `types.ts`
- `src/lib/reminderNotifications.js`

Do not change files during inspection.

## Step 3 - Run Smoke Pass

Validate:

- Dashboard/Home route.
- Dashboard to Assistant / Voice Entry route.
- Typed task capture.
- Tasks rendering.
- Notifications empty/fallback state.
- Notifications fixture state.
- Direct Notifications start with fixture and start params.
- Dashboard badge count.
- Bottom nav active state.
- Calendar route.
- Finance route.
- Knowledge Base route.
- Mobile viewport around `390x844`.

## Step 4 - Decide Whether Runtime Polish Is Needed

If no concrete issue is found:

- Do not edit runtime files.
- Update docs/state only.

If a concrete issue is found:

- Make the smallest safe runtime change.
- Keep the change tied to the smoke finding.
- Avoid refactors and redesigns.
- Do not touch protected areas.

Allowed runtime files, only if needed:

- `App.tsx`
- `components/Dashboard.tsx`
- `components/VoiceDashboard.tsx`
- `components/TasksView.tsx`
- `components/NotificationsView.tsx`
- `components/Navigation.tsx`
- `components/CalendarView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`
- `types.ts`
- `src/lib/reminderNotifications.js`

## Step 5 - Update Documentation

Update:

- `planning/STATE.md`
- `docs/VALIDATION.md`

Record:

- Commands run.
- Manual smoke checks.
- Any runtime changes.
- Known warnings.
- CEO Briefing untouched.
- Fixture evidence remains absent.

Update risk/question/decision docs only if a new item is discovered.

## Step 6 - Final Validation

Run:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

## Step 7 - Report

Report:

1. Files inspected.
2. Files changed, if any.
3. Validation commands and results.
4. Manual/browser smoke checks and results.
5. Whether acceptance criteria are complete.
6. Any risks, questions, or decisions needing docs updates.
7. Final git status.

Do not stage, commit, or push.
