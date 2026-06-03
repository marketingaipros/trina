# Sprint 048 Acceptance - Short-Height Mobile Smoke Across Core Views

## Acceptance Criteria

- [x] Tasks is checked at `390x844` and `360x740`.
- [x] Calendar is checked at `390x844` and `360x740`.
- [x] Finance is checked at `390x844` and `360x740`.
- [x] Knowledge Base is checked at `390x844` and `360x740`.
- [x] Notifications/reminders are checked if reachable.
- [x] No checked view has horizontal overflow.
- [x] No primary action or input is trapped behind the fixed bottom nav.
- [x] Short-height scrolling remains usable.
- [x] Any runtime changes are local and tied to confirmed issues.
- [x] Existing labels, handlers, loading states, disabled states, and copy are preserved.
- [x] CEO Briefing files are untouched.
- [x] `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- [x] No backend/Firebase/native/package/release files are modified.
- [x] Nothing is staged, committed, or pushed without approval.

## Required Validation

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
git diff --cached --name-only
```

## Completion Notes

Completed as validation/docs only.

Browser smoke ran against local Vite with `?trinaReminderFixture=1` at exact viewport overrides `390x844` and `360x740`.

Views checked:

- Tasks
- Calendar
- Finance
- Knowledge Base
- Notifications/reminders

Findings:

- No horizontal overflow was observed.
- No primary action or input was trapped behind the fixed bottom nav.
- Bottom navigation remained usable at both viewports.
- Long seeded Tasks content required normal vertical scrolling; bottom task controls cleared the fixed nav at scroll-bottom.
- Calendar day cells and task filter chips remain compact, but no short-height usability failure was confirmed.
- No runtime changes were made.
