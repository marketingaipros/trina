# Sprint 040 Requirements - Mobile Accessibility and Touch Target Hardening

## Purpose

Sprint 040 is a focused mobile accessibility and touch usability pass across the existing non-CEO Trina app shell.

The sprint follows Sprint 038's broad smoke-test baseline and Sprint 039's forward-state checkpoint. It should inspect first, summarize likely issues, and only allow small runtime fixes after concrete mobile or accessibility issues are confirmed and approved.

## Background

Sprint 038 confirmed the current core routes are reachable and broadly stable without runtime changes.

Sprint 039 preserved that baseline and selected mobile accessibility and touch-target hardening as the safest next runtime direction.

The Sprint 040 planning application itself is docs/planning only. Runtime implementation must not start during architect-pack application.

## Requirements

### R1 - Apply Sprint 040 Planning Files

Create the Sprint 040 planning folder and required sprint files:

- `planning/sprints/040-mobile-accessibility-and-touch-target-hardening/requirements.md`
- `planning/sprints/040-mobile-accessibility-and-touch-target-hardening/blueprint.md`
- `planning/sprints/040-mobile-accessibility-and-touch-target-hardening/acceptance.md`
- `planning/sprints/040-mobile-accessibility-and-touch-target-hardening/handoff-prompt.md`

### R2 - Start With Inspection and Builder Summary

Before runtime edits, the Builder must inspect the approved surfaces and summarize:

- Current mobile behavior around `390x844`.
- Bottom navigation touch usability and active state.
- Accessible names, labels, or titles for major controls.
- Keyboard/focus usability where practical.
- Task edit/delete controls visibility and touch usability.
- Notifications empty, fallback, and fixture-backed states.
- Calendar, Finance, and Knowledge Base mobile usability.
- Expected files to edit if fixes are needed.

### R3 - Keep Runtime Edits Approval-Gated

Runtime edits are allowed only after the Builder summary and only if a concrete Sprint 040 acceptance issue is found.

Allowed runtime edit files after approval:

- `components/Navigation.tsx`
- `components/Dashboard.tsx`
- `components/VoiceDashboard.tsx`
- `components/TasksView.tsx`
- `components/NotificationsView.tsx`
- `components/CalendarView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`

`App.tsx` is inspect-only unless the Builder proves a routing or focus-management issue cannot be fixed inside the component allowlist and receives explicit operator approval before editing it.

### R4 - Preserve Existing Product and Visual Scope

The Builder must not redesign the app or add product scope.

Sprint 040 must preserve:

- Existing pink/white Barbie UI direction.
- Existing navigation architecture.
- Existing persistence behavior.
- Existing task, notification, calendar, finance, and knowledge-base feature boundaries.

### R5 - Protect Out-of-Scope Surfaces

Sprint 040 must not touch:

- CEO Briefing work.
- `references/flutterflow/sprint-009/ceo-briefing.png`.
- CEO Briefing evidence files.
- Backend files.
- Firebase files.
- Firestore rules.
- Firebase Functions.
- Package or dependency files.
- Native Capacitor, Android, or iOS files.
- Build, release, deployment, or hosting files.
- Gmail, Telegram, live AI, auth, or database behavior.
- FlutterFlow generated code or exports.
- Screenshot or evidence generation.

## Non-Goals

- No runtime implementation during architect-pack application.
- No broad UI redesign.
- No new features.
- No dependency changes.
- No backend, Firebase, native, build, release, or deployment work.
- No CEO Briefing work.
- No screenshot evidence.

## Success Standard

Sprint 040 succeeds when the current non-CEO app shell has been inspected for mobile accessibility and touch usability, any approved fixes are limited to confirmed issues, validation is recorded honestly, and all protected surfaces remain untouched.
