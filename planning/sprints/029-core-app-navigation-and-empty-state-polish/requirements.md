# Sprint 029 Requirements - Core App Navigation and Empty State Polish

## Goal

Improve the current Vite React shell so the app feels more complete and easier to navigate, without touching CEO Briefing or changing backend/runtime architecture.

## User Story

As a Trina user, I want to move between Dashboard, Assistant, Tasks, Notifications, Calendar, Finance, and Knowledge Base without confusing dead ends, and I want empty screens to tell me what I can do next.

## In Scope

- Tighten bottom navigation active states and reachability.
- Confirm Dashboard/Home remains reachable.
- Confirm Assistant / Voice Entry remains reachable from Dashboard.
- Improve return paths where needed.
- Improve empty states and fallback copy across Tasks, Notifications, Calendar, Finance, and Knowledge Base.
- Preserve typed capture path from Assistant to Tasks.
- Preserve speech transcript capture path if present.
- Preserve Tasks visibility for captured items.
- Run lint/build validation.
- Update `docs/VALIDATION.md` and `planning/STATE.md` if needed.

## Out of Scope

- CEO Briefing page.
- CEO Briefing screenshot evidence.
- FlutterFlow export.
- Firebase.
- Hermes/backend.
- Native files.
- Package/dependency changes.
- Release/deployment work.
- Authentication.
- Database work.
- New app sections.
- Major redesign.

## Business Rules

- Existing capture behavior is protected.
- Navigation should route only to existing app surfaces.
- Empty states must describe current local prototype behavior honestly.
- CEO Briefing remains deferred and non-blocking.
