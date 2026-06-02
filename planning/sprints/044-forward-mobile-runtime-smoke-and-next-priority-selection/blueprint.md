# Sprint 044 Blueprint — Forward Mobile Runtime Smoke And Next Priority Selection

## Build Mode

Inspect first. Validate second. Document third.

Do not implement runtime changes during the first pass.

## Step 1 — Read Project Context

Read:

- `AGENTS.md`
- `CODEX.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- Sprint 044 files

## Step 2 — Inspect Runtime Surfaces

Inspect only as needed:

- `App.tsx`
- `components/TasksView.tsx`
- `components/CalendarView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`
- any notification/reminder component reachable from the app shell

Do not modify runtime files during inspection.

## Step 3 — Run Mobile Smoke

Use `390x844` if available. If not available, use the nearest available in-app browser viewport and record the exact measured viewport.

Smoke these reachable surfaces:

1. Dashboard/Home shell
2. Tasks
3. Calendar
4. Finance
5. Knowledge Base
6. Notifications/reminders, if reachable

For each reachable surface, check:

- page/view renders without crash
- primary controls are reachable
- no obvious horizontal overflow
- no bottom navigation overlap on primary controls
- recent touch-target expectations remain intact where visible
- accessible labels remain present on recently hardened controls where inspectable
- empty/error/loading states do not regress

## Step 4 — Select Sprint 045 Candidate

Based on observed behavior, recommend one next narrow sprint.

Recommendation should include:

- sprint name
- why it is the next highest-value priority
- expected files to inspect or modify
- validation needed
- whether it should be docs-only, validation-only, or runtime implementation

Do not create Sprint 045 files during Sprint 044.

## Step 5 — Update Documentation

Update:

- `docs/VALIDATION.md` with Sprint 044 smoke results
- `planning/STATE.md` with current status and next recommended sprint
- `planning/RISKS.md` if a risk changed
- `planning/QUESTIONS.md` only if a real unresolved ambiguity remains
- `planning/DECISIONS.md` only if a durable decision changed

## Step 6 — Validation Commands

Run:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
```

If `npm run build` emits known Vite warnings, document them without treating them as failures unless a new build failure appears.

## Change Rules

Allowed planning/docs changes:

- `architect-packs/trina-044-forward-mobile-runtime-smoke-and-next-priority-selection-architect-pack.md`
- `planning/sprints/044-forward-mobile-runtime-smoke-and-next-priority-selection/**`
- `planning/STATE.md`
- `docs/VALIDATION.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`, only if needed
- `planning/DECISIONS.md`, only if needed

Runtime changes are not allowed unless separately approved after the readback.
