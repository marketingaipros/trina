# Sprint 046 Blueprint — Home Typed Action Touch Target Polish

## Implementation Strategy

Make the smallest safe runtime change that raises the Home typed `Capture` and `Send` buttons to a minimum `44px` touch target.

## Inspect First

Inspect these likely files before changing code:

- `App.tsx`
- `components/VoiceDashboard.tsx`
- `components/BrainDumpView.tsx`
- any component that owns the Home typed action row
- any shared button/style component if used by those buttons

## Change Order

1. Use a tightly scoped shared class/style only if it affects only the Home typed action buttons.
2. Adjust a reusable local component if it directly owns both controls.
3. Use local per-button classes/styles if that is safest.

## Runtime Requirements

- Raise `Capture` to at least `44px` touch target.
- Raise `Send` to at least `44px` touch target.
- Preserve existing labels.
- Preserve existing event handlers.
- Preserve existing disabled/loading state behavior if present.
- Preserve current Home layout and pink/white direction.
- Avoid horizontal overflow.
- Keep controls clear of bottom nav.

## Validation

Run:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
```

Browser/mobile validation:

- Validate Home at `390x844` if available.
- Inspect typed `Capture` and `Send` dimensions.
- Confirm no horizontal overflow.
- Confirm bottom nav remains usable and unblocked.
- Smoke Dashboard/Home, Tasks, Calendar, Finance, Knowledge Base, and Notifications/reminders if reachable.
