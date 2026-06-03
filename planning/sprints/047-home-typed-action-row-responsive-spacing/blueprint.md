# Sprint 047 Blueprint - Home Typed Action Row Responsive Spacing

## Implementation Strategy

Use the smallest safe runtime change, only after the Builder summary gate is approved, to keep the Home typed input/action row usable on narrow mobile widths.

The sprint should preserve Sprint 046 button height and focus only on spacing, wrapping, input width, and overflow risks.

## Inspect First

Read and summarize before implementation:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/047-home-typed-action-row-responsive-spacing/requirements.md`
- `planning/sprints/047-home-typed-action-row-responsive-spacing/blueprint.md`
- `planning/sprints/047-home-typed-action-row-responsive-spacing/acceptance.md`

Inspect likely runtime ownership after approval:

- `App.tsx`
- `components/VoiceDashboard.tsx`
- `components/BrainDumpView.tsx`
- shared style/config files only if referenced by the Home typed action row

Confirm:

- where the typed input is rendered
- where `Capture` is rendered
- where `Send` is rendered
- whether the row uses flex, grid, fixed widths, gaps, or wrapping
- whether Sprint 046 `min-h-11` remains present on both buttons

## Change Order

1. Prefer local class/style adjustments on the Home typed action row owner.
2. Allow the input to flex with a safe minimum width if inspection shows squeeze or overflow.
3. Allow action buttons to keep usable width without forcing horizontal overflow.
4. Use narrow-screen wrap behavior only if it preserves clean usability and bottom-nav clearance.
5. Avoid shared style changes unless the Home typed row owner is shared and the effect is documented before changing.

## Runtime Requirements

- Preserve `Capture` and `Send` at a minimum `44px` tall.
- Preserve existing visible labels.
- Preserve existing event handlers.
- Preserve typed input behavior.
- Preserve disabled/loading state behavior.
- Preserve current pink/white visual direction.
- Avoid horizontal overflow at `390x844`.
- Keep the typed input usable and not visually crushed.
- Keep bottom navigation visible, usable, and unblocked.

## Validation

Run after implementation:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
git diff --cached --name-only
```

Browser/mobile validation:

- Validate Home at `390x844` if available.
- Validate Home at one narrower mobile width, such as `360x740`, if practical.
- Confirm no horizontal overflow.
- Confirm typed input remains usable.
- Confirm `Capture` remains at least `44px` tall.
- Confirm `Send` remains at least `44px` tall.
- Confirm bottom nav remains usable and unblocked.
- Smoke Dashboard/Home, Tasks, Calendar, Finance, Knowledge Base, and Notifications/reminders if reachable.
