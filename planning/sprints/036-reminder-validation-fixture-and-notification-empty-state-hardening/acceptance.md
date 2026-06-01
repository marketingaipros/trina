# Sprint 036 Acceptance - Reminder Validation Fixture and Notification Empty-State Hardening

Sprint 036 is complete when all required criteria below are satisfied.

## Required Criteria

- Dashboard/Home remains reachable.
- Notifications remains reachable.
- Notifications empty/fallback copy remains readable.
- A populated reminder-backed notification item can be validated in the browser or through an approved local-only validation path.
- Dashboard notification count and Notifications rendering remain aligned to the same source of truth.
- Assistant typed task capture still creates a visible task.
- Tasks view still renders created tasks.
- Bottom navigation active state still works.
- Mobile viewport around `390x844` has no fixed bottom-nav overlap.
- CEO Briefing remains untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

## Conditional Runtime Criteria

If runtime changes are made:

- Changes are limited to the narrow reminder/notification validation gap.
- No new notification categories are introduced.
- No backend or Firebase rules are changed.
- No package/dependency changes are made.
- No native, build, release, or deployment files are changed.
- Any local fixture/helper is clearly local-only and documented.

## Validation Commands

These must pass or any exception must be clearly documented:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git status --branch --short
```

## Completion Report Must Include

1. Whether runtime changes were needed.
2. Acceptance criteria completed.
3. Acceptance criteria incomplete or uncertain.
4. Files changed.
5. Validation commands run and results.
6. Browser/manual checks completed.
7. Risks introduced.
8. Any decisions that should be added to `planning/DECISIONS.md`.
9. Any status updates that should be added to `planning/STATE.md`.
10. Final `git status --branch --short`.

Do not mark the sprint complete if populated reminder-backed notification rendering is still only assumed and no repeatable validation path is documented.
