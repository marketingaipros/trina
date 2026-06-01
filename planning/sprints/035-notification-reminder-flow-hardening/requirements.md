# Sprint 035 Requirements

## Sprint Name

035-notification-reminder-flow-hardening

## Goal

Harden Trina's notification and reminder flow after the recent task workflow validation.

The goal is not to add new notification features. The goal is to confirm that existing notification/reminder surfaces still work, remain readable, and do not regress after the task edit/delete and task-flow hardening work.

## Background

Sprint 033 added accessible task edit/delete controls.

Sprint 034 validated the task flow and found no runtime fixes were needed. Sprint 035 moves to the next app-completion surface: notification/reminder visibility.

The app should continue moving forward without returning to the CEO Briefing workstream.

## In Scope

Inspect and validate:

- Dashboard/Home notification or reminder indicators
- Notifications view rendering
- Empty Notifications fallback copy
- Notification/reminder item rendering
- Notification count or badge behavior, if present
- Navigation to and from Notifications
- Mobile layout and fixed bottom-nav spacing in notification surfaces
- Any task-related reminder state currently wired into Notifications or Dashboard
- Existing task flow only where needed to create or confirm notification/reminder behavior

Make minimal runtime fixes only if a concrete Sprint 035 acceptance failure is found.

## Out of Scope

Do not:

- Add new notification categories
- Add new reminder scheduling features
- Add backend notification delivery
- Add push notifications
- Add email/SMS notifications
- Add Firebase, Hermes, live AI, database, or auth work
- Redesign the Notifications module
- Redesign Dashboard
- Touch CEO Briefing
- Create or restore `references/flutterflow/sprint-009/ceo-briefing.png`
- Modify package/dependency, native, build, release, deployment, or FlutterFlow export files

## Expected Files to Inspect

- `App.tsx`
- `components/Dashboard.tsx`
- `components/NotificationsView.tsx`
- `components/Navigation.tsx`
- `components/TasksView.tsx`
- `types.ts`
- Any local storage/service file already used by the app for reminders or notifications, if present

## Expected Files to Modify Only If Needed

- `components/NotificationsView.tsx`
- `components/Dashboard.tsx`
- `App.tsx`
- `components/Navigation.tsx`
- `components/TasksView.tsx`
- `types.ts`

Docs/planning updates may be made after validation:

- `docs/VALIDATION.md`
- `planning/STATE.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`

## Success Standard

Sprint 035 succeeds if notification/reminder surfaces are validated and any concrete acceptance failures are fixed with minimal changes.

A no-runtime-change outcome is acceptable if inspection and validation show the current implementation already satisfies acceptance criteria.
