# Sprint 031 Builder Handoff Prompt

You are applying Sprint 031: `031-core-app-polish-and-task-flow-hardening`.

Start with a read-before-implementation checkpoint. Do not edit runtime files until the summary is approved.

Read:

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

Then report:

1. What Sprint 031 is supposed to accomplish.
2. Which files you expect to inspect and modify.
3. What tests and manual validation you will run.
4. Any blockers or ambiguities.
5. How CEO Briefing will stay deferred, untouched, and absent.
6. How backend, Firebase, Hermes, package, native, build, release, deployment, auth, database, live AI, FlutterFlow export, and secret-bearing files will stay untouched.

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

Make the smallest safe changes only for confirmed UI, copy, empty-state, navigation, task-flow, or obvious accessibility clarity issues.

Preserve typed Assistant capture to Tasks. Preserve speech capture by live microphone smoke test when possible, or by code inspection when microphone permission is blocked.

Do not create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Validate with:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
git diff --name-only
git diff --cached --name-only
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```
