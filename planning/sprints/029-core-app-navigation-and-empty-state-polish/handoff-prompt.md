# Sprint 029 Handoff Prompt - Core App Navigation and Empty State Polish

You are implementing Sprint 029 for TrinaOS Voice.

Read first:

1. `planning/STATE.md`
2. `planning/sprints/029-core-app-navigation-and-empty-state-polish/requirements.md`
3. `planning/sprints/029-core-app-navigation-and-empty-state-polish/blueprint.md`
4. `planning/sprints/029-core-app-navigation-and-empty-state-polish/acceptance.md`
5. `docs/VALIDATION.md`

Implement only the approved scope:

- Tighten bottom navigation active states and reachability.
- Confirm Dashboard/Home remains reachable.
- Confirm Assistant / Voice Entry remains reachable from Dashboard.
- Improve return paths where needed.
- Improve empty states and fallback copy across Tasks, Notifications, Calendar, Finance, and Knowledge Base.
- Preserve typed Assistant capture to Tasks.
- Preserve speech transcript capture if present.
- Preserve Tasks visibility for captured items.

Expected runtime files:

- `App.tsx`
- `components/Navigation.tsx`
- `components/Dashboard.tsx`
- `components/VoiceDashboard.tsx`
- `components/TasksView.tsx`
- `components/NotificationsView.tsx`
- `components/CalendarView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`

Do not touch CEO Briefing, FlutterFlow export, Firebase, Hermes/backend, native files, package/dependency files, release/deployment work, authentication, database work, or new app sections.

Run:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Close out against every item in `acceptance.md`.
