# Sprint 049 Requirements - Compact Touch Target Standardization

## Goal

Standardize compact interactive controls so core mobile views preserve a practical `44px` touch-target standard without introducing layout regressions.

## Background

Sprint 048 validated short-height mobile behavior across core views at `390x844` and `360x740`. No runtime blocker was confirmed.

One optional follow-up remained: some compact controls, especially Calendar day cells and filter chips, can fall below `44px` in one dimension. Sprint 049 turns that into a focused hardening pass.

## In Scope

- Inspect compact interactive controls in:
  - Calendar
  - Tasks
  - Finance, only if compact interactive controls are present
  - Knowledge Base, only if compact interactive controls are present
  - Notifications/reminders, only if reachable and relevant
- Harden touch targets for confirmed compact controls.
- Preserve existing mobile layout behavior.
- Preserve short-height scrolling behavior.
- Preserve fixed bottom navigation usability.
- Update validation docs and sprint acceptance notes.

## Out of Scope

- No broad visual redesign.
- No new features.
- No database, auth, backend, Firebase, or API changes.
- No dependency changes unless a blocker is found and approved.
- No CEO Briefing changes.
- Do not create `references/flutterflow/sprint-009/ceo-briefing.png`.
- No production release work.
- No staging, commit, or push unless explicitly requested after validation.

## Expected Runtime Files To Inspect

Codex should inspect before editing:

- `components/CalendarView.tsx`
- `components/TasksView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`
- `components/NotificationsView.tsx`, if present/reachable
- `App.tsx`, only if viewport/app-shell behavior is directly relevant

## Expected Runtime Files To Modify

Modify only files with confirmed compact interactive control issues.

Most likely:

- `components/CalendarView.tsx`
- `components/TasksView.tsx`

Other runtime files should remain untouched unless the sprint inspection confirms a specific compact control issue there.

## Success Definition

Sprint 049 is complete when:

- Confirmed compact controls are hardened toward the `44px` touch-target standard.
- No horizontal overflow is introduced at `390x844` or `360x740`.
- No primary action/input is trapped behind the fixed bottom nav.
- Existing short-height scrolling remains usable.
- Lint and build pass.
- Docs and acceptance notes are updated.
