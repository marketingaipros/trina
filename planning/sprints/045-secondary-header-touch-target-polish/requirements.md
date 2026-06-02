# Sprint 045 Requirements - Secondary Header Touch Target Polish

## Purpose

Sprint 045 addresses the Sprint 044 follow-up observation that some secondary header, back, and AI action controls measure around `40x40` on mobile.

The goal is to decide and implement the smallest safe polish needed to align those secondary controls with the `44x44` mobile touch target used by recent mobile hardening work.

## Background

Sprint 044 completed a mobile runtime smoke at exact `390x844`. Dashboard/Home, Tasks, Calendar, Finance, Knowledge Base, and Notifications/reminders rendered cleanly. No blocking runtime defects, horizontal overflow, or bottom-navigation overlap were found.

The only follow-up was a non-blocking observation: some secondary header/back/AI action controls measured around `40x40`.

## Requirements

1. Inspect the current secondary header, back, and AI action controls across reachable non-CEO app shell surfaces.
2. Identify the source of any controls below the `44x44` target.
3. Prefer a shared style or reusable control adjustment when safe.
4. Preserve existing behavior, labels, icons, navigation, and state transitions.
5. Keep layout stable at mobile viewport `390x844`.
6. Do not introduce horizontal overflow.
7. Do not create bottom-navigation overlap.
8. Do not change CEO Briefing or related reference files.
9. Update `docs/VALIDATION.md` with the validation result.
10. Update `planning/STATE.md` with Sprint 045 completion status and recommended next action.

## Non-Goals

- No broad visual redesign.
- No app shell restructure.
- No new feature behavior.
- No data model changes.
- No backend or Firebase changes.
- No dependency changes.
- No unrelated lint cleanup.

## Constraints

- Keep changes small and reviewable.
- Stop and report before making broader layout changes.
- Document any exception where `44x44` cannot be achieved safely.
- Maintain the existing CEO Briefing guardrail.
