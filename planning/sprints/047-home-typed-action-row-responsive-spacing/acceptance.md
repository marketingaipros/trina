# Sprint 047 Acceptance - Home Typed Action Row Responsive Spacing

## Status

Implementation and validation completed.

## Acceptance Criteria

### Runtime

- [x] Home typed row has no horizontal overflow at `390x844`.
- [x] Home typed row remains usable at one narrower mobile width if browser validation is available.
- [x] Home typed `Capture` button remains at least `44px` tall.
- [x] Home typed `Send` button remains at least `44px` tall.
- [x] Typed input remains usable and is not visually crushed by the buttons.
- [x] `Capture` label remains unchanged.
- [x] `Send` label remains unchanged.
- [x] Button handlers remain unchanged.
- [x] Disabled/loading behavior remains unchanged.
- [x] No broad Home redesign is introduced.
- [x] No shared style change affects unrelated controls unless explicitly documented and necessary.

### Mobile Layout

- [x] Bottom navigation remains visible, usable, and unblocked.
- [x] Row spacing, wrapping, and gap behavior remain stable on validated mobile widths.
- [x] Existing pink/white visual direction is preserved.

### Regression Smoke

- [x] Dashboard/Home smoked.
- [x] Tasks smoked.
- [x] Calendar smoked.
- [x] Finance smoked.
- [x] Knowledge Base smoked.
- [x] Notifications/reminders smoked if reachable, using fixture mode if needed.

### Validation Commands

- [x] `git diff --check` passes.
- [x] `test ! -f references/flutterflow/sprint-009/ceo-briefing.png` passes.
- [x] `npm run lint` passes or any existing non-blocking warnings are documented.
- [x] `npm run build` passes or any existing non-blocking warnings are documented.
- [x] `git diff --name-only` reviewed.
- [x] `git status --branch --short` reviewed.
- [x] `git diff --cached --name-only` reviewed and empty unless explicit staging approval was given.

### Protected Scope

- [x] CEO Briefing files untouched.
- [x] `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- [x] No runtime files changed during planning/docs-only pack application.
- [x] No files staged, committed, or pushed until explicitly approved.

## Planning Notes

- Sprint 047 Architect Pack is present at `architect-packs/trina-047-home-typed-action-row-responsive-spacing-architect-pack.md`.
- Sprint 047 planning files are present under `planning/sprints/047-home-typed-action-row-responsive-spacing/`.
- Runtime implementation inspected `components/VoiceDashboard.tsx` and confirmed it owns the Home typed input/action row.
- The confirmed issue was at `360x740`: the typed row overlapped the fixed bottom nav before the fix.
- `390x844` was already clear before implementation.
- Runtime change was limited to `components/VoiceDashboard.tsx`.
- A narrow/short viewport compact Home avatar stack layout was added for `max-width: 380px` and `max-height: 760px`.
- Labels, handlers, typed input behavior, disabled/loading behavior, visual direction, and Sprint 046 `min-h-11` button height were preserved.
- At `390x844`, the typed row had no overflow, cleared bottom nav by `62px`, input remained usable, and `Capture` / `Send` both measured `44px` tall.
- At `360x740`, the typed row had no overflow, cleared bottom nav by `138px`, input remained usable, and `Capture` / `Send` both measured `44px` tall.
- Dashboard/Home, Tasks, Calendar, Finance, Knowledge Base, and Notifications/reminders smoke checks passed.
- `git diff --check`, the CEO Briefing absence guard, `npm run lint`, and `npm run build` passed.
- `npm run build` passed with existing Vite warnings about `services/authService.ts` mixed static/dynamic import chunking and large bundle size.
- CEO Briefing stayed untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- Nothing was staged, committed, or pushed.
