# Sprint 026 Acceptance Criteria - Assistant Voice Entry and Task Flow Stabilization

## Core Flow

Sprint 026 is complete when:

- The Assistant entry point is reachable from the main app surface.
- A user can reach a voice/reminder/task capture surface.
- A user can create or simulate a reminder/task.
- The resulting item is visible in a task, reminder, or notification surface.
- Navigation allows the user to return to the main app surface.
- Empty states are understandable.
- Buttons in the core path are not dead ends.

## CEO Briefing Guardrail

Sprint 026 is complete only if:

- CEO Briefing was not built.
- CEO Briefing was not rebuilt.
- CEO Briefing navigation was not wired.
- CEO Briefing was not marked complete.
- CEO Briefing was not treated as blocking app completion.
- No CEO Briefing screenshot evidence was created.
- This file remains absent:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

## Scope Guardrail

Sprint 026 is complete only if no work was done in:

- Firebase/backend
- Hermes
- package/native/release/build/export areas
- auth
- database/cloud sync
- CRM/invoicing
- production SaaS features
- unrelated screens

## Documentation

Sprint 026 is complete when:

- `planning/STATE.md` reflects Sprint 026 completion or current status.
- `docs/VALIDATION.md` records the Sprint 026 validation path.
- `docs/ARCHITECTURE.md` is updated if navigation/app flow changed.
- `docs/API.md` is updated if data shapes/helper contracts changed.
- Any new risks or decisions are recorded only if durable.

## Validation Required

The Builder must report results for:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

The Builder should also run safe project checks if available:

```bash
npm test
npm run lint
npm run typecheck
npm run build
```

If a check is unavailable or unsafe, the Builder must say why.

## Completion Standard

Do not mark Sprint 026 complete if the app still has no usable Assistant -> task/reminder -> visibility path.
