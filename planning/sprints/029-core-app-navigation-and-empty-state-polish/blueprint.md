# Sprint 029 Blueprint - Core App Navigation and Empty State Polish

## Implementation Plan

1. Inspect `App.tsx` and `components/Navigation.tsx` to map current route/view keys.
2. Inspect Dashboard and Assistant / Voice Entry reachability.
3. Confirm typed and speech capture paths before edits.
4. Tighten bottom navigation active states and labels.
5. Improve return paths only where primary screens feel like dead ends.
6. Improve empty/fallback copy in Tasks, Notifications, Calendar, Finance, and Knowledge Base.
7. Preserve existing task storage and task visibility behavior.
8. Update validation and planning docs if implementation changes the expected checks.
9. Run required validation.

## Expected Runtime Files

- `App.tsx`
- `components/Navigation.tsx`
- `components/Dashboard.tsx`
- `components/VoiceDashboard.tsx`
- `components/TasksView.tsx`
- `components/NotificationsView.tsx`
- `components/CalendarView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`

## Protected Areas

- CEO Briefing
- `references/flutterflow/sprint-009/ceo-briefing.png`
- FlutterFlow export/generated code
- Firebase and backend code
- Native and release files
- Package/dependency files
- Auth and database architecture
