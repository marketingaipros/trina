# Sprint 050 Requirements - Mobile Runtime Regression Sweep and Release Readiness

## Goal

Confirm that the accumulated mobile/runtime polish from Sprints 040-049 still holds together across the core app, with special focus on mobile viewport behavior, short-height layouts, bottom navigation clearance, and recently hardened compact touch targets.

## Background

Sprint 049 standardized confirmed compact touch-target issues in Calendar and Tasks. Sprint 050 is the follow-up regression and release-readiness sweep.

This sprint should validate the existing app shell and core views before any runtime change. Runtime fixes are allowed only in a later implementation phase if inspection confirms a direct Sprint 050 regression.

## In Scope

- Inspect and validate reachable core runtime surfaces:
  - Home / Dashboard
  - Calendar
  - Tasks
  - Finance
  - Knowledge Base
  - Notifications/reminders
  - App shell / bottom navigation
- Validate mobile behavior at:
  - `390x844`
  - `360x740`
- Confirm no horizontal overflow in validated views.
- Confirm the fixed bottom navigation does not cover primary inputs, actions, or empty-state CTAs.
- Confirm loading, empty, and error states remain readable where existing fixtures or state paths allow.
- Confirm Calendar and Tasks preserve the Sprint 049 touch-target standard.
- Preserve the existing pink/white Barbie visual style.
- Preserve existing labels, event handlers, routing, and data flow.
- Update planning and validation docs with the final validation state.

## Out of Scope

- CEO Briefing.
- Creating, restoring, or modifying `references/flutterflow/sprint-009/ceo-briefing.png`.
- New features.
- UI redesign or dashboard rebuild.
- New routes.
- Dependency or package changes.
- Firebase, backend, auth, native config, release, or deployment changes.
- Data model changes.
- Large component refactors.
- Automated screenshot tooling unless it already exists and is already documented.
- Staging, committing, or pushing without explicit approval.

## Expected Runtime Files To Inspect In Implementation Phase

Codex should inspect before any implementation:

- `App.tsx`
- `components/VoiceDashboard.tsx`
- `components/CalendarView.tsx`
- `components/TasksView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`
- `components/NotificationsView.tsx`

## Expected Runtime Files To Modify

None during planning/docs application.

During a later approved implementation phase, modify only runtime files with a confirmed Sprint 050 regression. Any fix must be small and directly tied to the confirmed issue, such as:

- Minor spacing, wrapping, or padding correction to prevent mobile overflow.
- Minor bottom padding correction to prevent bottom-nav overlap.
- Minor min-height or min-width correction for a compact control missed by Sprint 049.
- Small accessibility label preservation or correction if an existing control regressed.

## Success Definition

Sprint 050 is complete when:

- Core views are inspected and validated at `390x844` and `360x740`.
- No checked view has horizontal overflow.
- No primary action, input, or empty-state CTA is hidden behind the fixed bottom nav.
- Calendar and Tasks preserve Sprint 049 touch-target behavior.
- Any runtime change is narrow and tied to a confirmed Sprint 050 issue.
- `npm run lint`, `npm run build`, `git diff --check`, and the CEO Briefing absence guard pass.
- Planning, risks, validation docs, and sprint acceptance notes reflect final status.
