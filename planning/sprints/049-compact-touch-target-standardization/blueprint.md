# Sprint 049 Blueprint - Compact Touch Target Standardization

## Implementation Strategy

This is a small runtime polish sprint.

Codex must inspect first, then patch only confirmed compact interactive controls.

Do not redesign the views. Prefer small className/style changes that improve touch target size without changing data flow or business behavior.

## Step 1 - Read Current Planning

Read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/049-compact-touch-target-standardization/requirements.md`
- `planning/sprints/049-compact-touch-target-standardization/blueprint.md`
- `planning/sprints/049-compact-touch-target-standardization/acceptance.md`

Then summarize before making changes.

## Step 2 - Inspect Compact Controls

Inspect the relevant components for compact interactive controls:

- Calendar day buttons/cells
- Calendar filter chips
- Task filter chips
- Segmented controls
- Small icon/text buttons
- Any other clickable/tappable element that appears below `44px` in one dimension

Prioritize controls that are used frequently on mobile.

## Step 3 - Patch With Minimal Layout Risk

Use small adjustments such as:

- `min-h-[44px]`
- `min-w-[44px]`
- increased vertical padding
- consistent button classes
- wrapping chip containers where needed
- avoiding fixed widths that cause overflow

Do not create broad shared abstractions unless they already exist and the change is clearly safer than duplicating a small class adjustment.

## Step 4 - Preserve Calendar Layout

Calendar day cells are sensitive because they live in a grid.

If hardening day cells:

- Preserve the grid.
- Avoid horizontal overflow.
- Avoid making the calendar unusable on `360px` width.
- Prefer minimum height/padding changes over large typography/layout changes.

## Step 5 - Validate Mobile Viewports

Use browser/mobile validation at:

- `390x844`
- `360x740`

Check:

- Calendar
- Tasks
- Other changed views
- Notifications/reminders fixture only if relevant and reachable

## Step 6 - Update Docs

After implementation and validation, update:

- `planning/STATE.md`
- `planning/RISKS.md`, only if risk status changes
- `docs/VALIDATION.md`
- `planning/sprints/049-compact-touch-target-standardization/acceptance.md`

## Runtime Guardrails

- Do not touch CEO Briefing files.
- Do not create `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not modify backend, Firebase, auth, package/dependency, native build, or deployment files.
- Do not stage, commit, or push.
