# Sprint 027 Blueprint - Core App Completion Polish and Navigation Hardening

## Objective

Implement the smallest safe runtime changes, after explicit approval, that make the current local app shell feel complete around the Sprint 026 Assistant capture path.

## Files to Read First

```text
AGENTS.md
planning/STATE.md
docs/VALIDATION.md
planning/sprints/027-core-app-completion-polish-and-navigation-hardening/requirements.md
planning/sprints/027-core-app-completion-polish-and-navigation-hardening/acceptance.md
```

## Primary Files to Inspect

```text
App.tsx
components/Navigation.tsx
components/Dashboard.tsx
components/VoiceDashboard.tsx
components/TasksView.tsx
components/NotificationsView.tsx
src/lib/reminderNotifications.js
```

## Secondary Files to Inspect Only If Needed

```text
components/*View.tsx
components/*Dashboard*.tsx
components/*Task*.tsx
components/*Reminder*.tsx
services/barbieService.ts
package.json
```

## Likely Files to Modify After Approval

```text
App.tsx
components/Navigation.tsx
components/Dashboard.tsx
components/VoiceDashboard.tsx
components/TasksView.tsx
components/NotificationsView.tsx
planning/STATE.md
docs/VALIDATION.md
```

Modify fewer files if inspection shows fewer changes are needed.

Stop and ask before modifying files outside this expected runtime/docs list.

## Protected Files and Areas

Do not create or modify CEO Briefing screenshot evidence:

```text
references/flutterflow/sprint-009/ceo-briefing.png
references/flutterflow/sprint-009/ceo-briefing*.png
```

Do not modify Firebase, Hermes, backend, package, package-lock, native, release, deploy, FlutterFlow export, generated, screenshot evidence, or build configuration files.

## Implementation Plan

1. Inspect the current state and confirm the Sprint 026 Assistant capture path.
2. Map Dashboard/Home, Assistant/Voice Entry, Tasks, Notifications/Alerts, and other existing primary nav items.
3. Harden primary navigation, return-to-Home behavior, and selected active-state clarity.
4. Tighten empty states with small copy or local-state improvements tied to existing functionality.
5. Preserve Sprint 026 task creation and redirect/open behavior to Tasks.
6. Keep browser notification and speech recognition fallback states non-breaking.
7. Validate with docs-safe checks and, after implementation approval, `npm run lint` and `npm run build`.

## Validation

Run and report:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

After implementation approval, also run:

```bash
npm run lint
npm run build
```

## Implementation Rules

- Do not implement until the operator approves the Builder summary.
- Do not work on CEO Briefing.
- Do not create screenshot evidence.
- Do not expand beyond core app completion polish.
- Do not stage, commit, or push unless explicitly asked.
- Prefer small, auditable changes.
