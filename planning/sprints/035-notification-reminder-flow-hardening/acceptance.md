# Sprint 035 Acceptance Criteria

## Required Pass Criteria

Sprint 035 is complete when all applicable criteria below are satisfied.

### Planning and Scope

- Sprint 035 planning files exist under `planning/sprints/035-notification-reminder-flow-hardening/`.
- Builder read the Sprint 035 files and summarized before implementation.
- Runtime changes were made only if a concrete Sprint 035 acceptance failure was found.
- No new notification features were added.
- No broad redesign was introduced.

### Navigation and Reachability

- Dashboard/Home remains reachable.
- Notifications view remains reachable.
- Bottom navigation remains reachable and visually stable.
- Assistant remains reachable.
- Active navigation state is not broken by any Sprint 035 change.

### Notification/Reminder Behavior

- Notifications view renders without runtime error.
- Empty Notifications state is clear and readable.
- Notification/reminder items, if present, render without layout breakage.
- Notification count or badge behavior, if present, does not show stale or impossible values.
- Task-related reminder/notification state, if already wired into the app, remains understandable.
- Existing task flow remains intact enough to support notification/reminder validation.

### Mobile and Layout

- Notifications surface remains usable in mobile viewport.
- Fixed bottom navigation does not overlap critical notification/reminder content.
- Controls remain visible and accessible.

### Protected Scope

- CEO Briefing was not touched.
- `references/flutterflow/sprint-009/ceo-briefing.png` was not created or restored.
- Backend files were not modified.
- Firebase files were not modified.
- Hermes files were not modified.
- Package/dependency files were not modified.
- Native files were not modified.
- Build/release/deployment files were not modified.
- FlutterFlow export files were not modified.
- Auth, database, and live AI files were not modified.

### Validation

The following commands pass or have documented non-blocking warnings:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git status --branch --short
```

### Closeout

- Files changed are reported.
- Acceptance criteria are reported as complete, incomplete, or uncertain.
- Any browser validation gaps are documented.
- No staging, commit, or push is performed unless explicitly approved after validation.
