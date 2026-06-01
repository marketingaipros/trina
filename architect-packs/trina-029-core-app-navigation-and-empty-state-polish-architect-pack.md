# Trina Sprint 029 Architect Pack - Core App Navigation and Empty State Polish

**Project:** Trina / trinaos-voice  
**Sprint:** 029-core-app-navigation-and-empty-state-polish  
**Pack type:** Architect Pack  
**Date:** 2026-05-31  
**Architect Layer:** ChatGPT  
**Builder Layer:** Codex  

---

## 0. Pack Purpose

Sprint 029 is a focused runtime polish sprint for the current Vite React app shell.

The goal is to make the app feel more complete and easier to navigate by tightening bottom navigation, preserving Dashboard/Home reachability, preserving Assistant / Voice Entry reachability, improving return paths, and improving empty/fallback states across the existing primary app surfaces.

This sprint should not reopen CEO Briefing and should not change backend, Firebase, Hermes, native, release, dependency, authentication, database, or deployment architecture.

---

## 1. Non-Negotiable Guardrails

### CEO Briefing remains out of scope

Codex must not:

- build CEO Briefing
- rebuild CEO Briefing
- wire CEO Briefing navigation
- validate CEO Briefing
- capture CEO Briefing screenshots
- create `references/flutterflow/sprint-009/ceo-briefing.png`
- mark CEO Briefing complete
- change deferred CEO Briefing status

CEO Briefing remains deferred, untouched, non-blocking, and out of scope.

### Protected technical scope

Codex must not modify:

- Firebase configuration
- Firebase Functions
- Firestore rules
- Hermes/backend code
- package or lock files
- native iOS/Android files
- release or deployment configuration
- FlutterFlow export/generated code
- screenshot evidence files
- build artifacts
- authentication or database architecture

### Existing capture behavior must be preserved

Codex must not regress:

- typed capture path from Assistant / Voice Entry to Tasks
- speech transcript capture path if browser support and current code are present
- visibility of captured task items in Tasks
- safe handling for empty Assistant input
- safe browser fallback behavior for speech and notifications
- Dashboard/Home return behavior

---

## 2. Files This Architect Pack Should Create or Update

This pack is intended to be saved as:

```text
architect-packs/trina-029-core-app-navigation-and-empty-state-polish-architect-pack.md
```

When the pack is applied, Codex should create or update:

```text
planning/STATE.md
planning/sprints/029-core-app-navigation-and-empty-state-polish/requirements.md
planning/sprints/029-core-app-navigation-and-empty-state-polish/blueprint.md
planning/sprints/029-core-app-navigation-and-empty-state-polish/acceptance.md
planning/sprints/029-core-app-navigation-and-empty-state-polish/handoff-prompt.md
docs/VALIDATION.md
```

Expected runtime files for the implementation phase:

```text
App.tsx
components/Navigation.tsx
components/Dashboard.tsx
components/VoiceDashboard.tsx
components/TasksView.tsx
components/NotificationsView.tsx
components/CalendarView.tsx
components/FinanceView.tsx
components/KnowledgeBaseView.tsx
```

Codex may modify fewer runtime files if inspection shows fewer changes are needed.

Codex must stop and ask before modifying runtime files outside this expected list.

---

## 3. Architect-Facing Requirements

### Sprint goal

Improve the current Vite React shell so the app feels more complete and easier to navigate, without touching CEO Briefing or changing backend/runtime architecture.

### Product intent

Trina should feel like a coherent assistant workspace.

The user should be able to:

1. Land on Dashboard/Home.
2. Reach Assistant / Voice Entry from Dashboard.
3. Capture a task through typed Assistant input.
4. Preserve speech transcript capture if the current browser-supported path exists.
5. See captured items in Tasks.
6. Move through Tasks, Notifications, Calendar, Finance, and Knowledge Base without confusing blank states.
7. Use bottom navigation with clear active states.
8. Return to Dashboard/Home without dead ends.

### In scope

- Tighten bottom navigation active states and reachability.
- Confirm Dashboard/Home remains reachable.
- Confirm Assistant / Voice Entry remains reachable from Dashboard.
- Improve return paths where needed.
- Improve empty states and fallback copy across:
  - Tasks
  - Notifications
  - Calendar
  - Finance
  - Knowledge Base
- Preserve typed capture path from Assistant to Tasks.
- Preserve speech transcript capture path if present.
- Preserve Tasks visibility for captured items.
- Run lint/build validation.
- Update `docs/VALIDATION.md` and `planning/STATE.md` if needed.

### Out of scope

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

### Working assumptions

- The current Vite React app is the source of truth.
- This sprint should polish existing surfaces rather than invent new ones.
- Existing local task capture behavior is acceptable and should be protected.
- Speech recognition and notifications remain browser-dependent and should degrade through clear copy.
- Existing build warnings may remain if unrelated to Sprint 029.

---

## 4. Builder-Facing Implementation Plan

### Implementation posture

This sprint should start with inspection and a short implementation summary.

Codex should read the current planning state, validation plan, acceptance criteria, and exact runtime files before editing. Codex should then implement narrowly within the approved files.

### Primary files to inspect

```text
planning/STATE.md
docs/VALIDATION.md
App.tsx
components/Navigation.tsx
components/Dashboard.tsx
components/VoiceDashboard.tsx
components/TasksView.tsx
components/NotificationsView.tsx
components/CalendarView.tsx
components/FinanceView.tsx
components/KnowledgeBaseView.tsx
```

### Step-by-step plan

1. Inspect current navigation state.
   - Identify the active view keys used by `App.tsx`.
   - Confirm each bottom navigation item maps to a valid existing view.
   - Confirm Dashboard/Home is reachable from bottom navigation and any return controls.

2. Confirm Assistant / Voice Entry reachability.
   - Verify Dashboard exposes Assistant / Voice Entry.
   - Verify that entering the Assistant path does not create a dead end.
   - Preserve existing typed capture behavior.

3. Preserve capture paths.
   - Confirm typed Assistant capture still creates or stores task items through the current path.
   - Confirm speech transcript capture remains wired if present.
   - Confirm captured items remain visible in Tasks.
   - Do not change task storage architecture.

4. Tighten bottom navigation.
   - Make active state visually clear and accurate.
   - Avoid ambiguous active states when multiple labels point at the same surface.
   - Ensure navigation labels match the destination users actually see.
   - Keep navigation reachable on the current shell layout.

5. Improve return paths.
   - Add or clarify return-to-Dashboard/Home affordances only where a screen currently feels like a dead end.
   - Reuse existing navigation patterns rather than adding a new app section.
   - Do not add CEO Briefing links.

6. Improve empty states and fallback copy.
   - Tasks: explain that captured Assistant tasks appear here and provide a clear next action.
   - Notifications: explain reminders/alerts and browser notification fallback without implying backend scheduling.
   - Calendar: explain no events or selected-date emptiness without implying live calendar integration.
   - Finance: explain unavailable or placeholder data honestly without implying live bank/account integration.
   - Knowledge Base: explain empty context/memory state without implying production knowledge ingestion.

7. Update planning and validation docs if implementation changes the expected validation surface.
   - Update `planning/STATE.md` to reflect Sprint 029 status after implementation.
   - Update `docs/VALIDATION.md` with Sprint 029 lint/build and manual smoke validation.

8. Validate.
   - Run `npm run lint`.
   - Run `npm run build`.
   - Run `git diff --check`.
   - Run `git status --branch --short`.
   - Confirm no CEO Briefing screenshot evidence was created.

---

## 5. Acceptance Criteria

Sprint 029 is complete only when all applicable criteria are true:

- Dashboard/Home remains reachable from bottom navigation.
- Dashboard/Home remains the main return destination.
- Assistant / Voice Entry remains reachable from Dashboard.
- Typed Assistant capture still creates or saves a task through the existing path.
- If speech transcript capture existed before Sprint 029, it still works or degrades to typed capture without breaking the page.
- Captured task items remain visible in Tasks.
- Bottom navigation active state is clear and accurate for all primary destinations.
- Tasks, Notifications, Calendar, Finance, and Knowledge Base have useful empty states or fallback copy.
- Return paths are clear enough that primary screens do not feel like dead ends.
- No CEO Briefing code, route, screenshot, validation, or evidence work is touched.
- No Firebase, backend, Hermes, native, package, dependency, release, auth, database, or deployment work is touched.
- `npm run lint` passes or any failure is documented with cause.
- `npm run build` passes or any failure is documented with cause.
- `docs/VALIDATION.md` and `planning/STATE.md` are updated if needed.

---

## 6. Validation Plan

### Required commands

Run from the repository root:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

### Manual smoke checks

After implementation, manually verify:

1. Dashboard/Home loads without runtime errors.
2. Bottom navigation routes to Home, Tasks, Notifications/Alerts, Calendar, Finance, and Knowledge Base/Context as currently named.
3. Active bottom navigation state matches the visible destination.
4. Dashboard exposes Assistant / Voice Entry.
5. Typed Assistant capture saves a task and opens or updates Tasks visibility.
6. Speech transcript capture still follows the existing capture path if browser support is present.
7. Tasks shows captured items.
8. Tasks empty state is useful when no tasks exist.
9. Notifications empty/fallback state is useful when no notifications exist or browser notifications are unavailable.
10. Calendar empty/fallback state is useful when no events exist.
11. Finance empty/fallback state is useful when live/real data is unavailable.
12. Knowledge Base empty/fallback state is useful when no context has been added.
13. Return-to-Dashboard/Home paths work from primary screens.
14. CEO Briefing remains absent/deferred and is not part of the validation pass.

### Expected validation outcome

- Runtime changes stay limited to the approved expected files.
- Planning/docs changes stay limited to Sprint 029 planning and validation state.
- No screenshot evidence is created.
- No package, backend, Firebase, native, release, auth, or database files are changed.
- Build and lint pass, except for clearly documented unrelated pre-existing warnings.

---

## 7. Planning File Drafts

### planning/sprints/029-core-app-navigation-and-empty-state-polish/requirements.md

```markdown
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
```

### planning/sprints/029-core-app-navigation-and-empty-state-polish/blueprint.md

```markdown
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
```

### planning/sprints/029-core-app-navigation-and-empty-state-polish/acceptance.md

```markdown
# Sprint 029 Acceptance - Core App Navigation and Empty State Polish

## Acceptance Criteria

- [ ] Dashboard/Home remains reachable.
- [ ] Assistant / Voice Entry remains reachable from Dashboard.
- [ ] Bottom navigation active states are clear and accurate.
- [ ] Return paths to Dashboard/Home are clear from primary surfaces.
- [ ] Typed Assistant capture to Tasks is preserved.
- [ ] Speech transcript capture path is preserved if present.
- [ ] Captured tasks remain visible in Tasks.
- [ ] Tasks empty state is useful.
- [ ] Notifications empty/fallback state is useful.
- [ ] Calendar empty/fallback state is useful.
- [ ] Finance empty/fallback state is useful.
- [ ] Knowledge Base empty/fallback state is useful.
- [ ] `npm run lint` passes or any failure is documented.
- [ ] `npm run build` passes or any failure is documented.
- [ ] `git diff --check` passes.
- [ ] CEO Briefing remains untouched and deferred.
- [ ] `references/flutterflow/sprint-009/ceo-briefing.png` is not created.
- [ ] No out-of-scope backend, Firebase, native, package, auth, database, release, or deployment files are changed.
```

### planning/sprints/029-core-app-navigation-and-empty-state-polish/handoff-prompt.md

```markdown
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
```

---

## 8. Closeout Instructions

When Sprint 029 is implemented, Codex should report:

- files changed
- validation commands and results
- whether Dashboard/Home remained reachable
- whether Assistant / Voice Entry remained reachable from Dashboard
- whether typed capture to Tasks still works
- whether speech transcript capture was preserved, if present
- whether captured Tasks remain visible
- empty/fallback states improved
- confirmation that CEO Briefing remained untouched and deferred
- confirmation that no `references/flutterflow/sprint-009/ceo-briefing.png` file was created

