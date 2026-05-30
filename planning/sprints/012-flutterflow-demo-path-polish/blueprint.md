# Sprint 012 Blueprint - FlutterFlow Demo Path Polish

## Objective

Create a clean Builder-ready plan for polishing the accepted FlutterFlow prototype demo path without letting the deferred CEO Briefing screen block forward movement.

## Files to Read First

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `references/flutterflow/sprint-009/click-path-notes.md`
- `planning/sprints/011-flutterflow-prototype-readiness-and-next-build-plan/requirements.md`
- `planning/sprints/011-flutterflow-prototype-readiness-and-next-build-plan/blueprint.md`
- `planning/sprints/011-flutterflow-prototype-readiness-and-next-build-plan/acceptance.md`

## Files to Create

- `planning/sprints/012-flutterflow-demo-path-polish/requirements.md`
- `planning/sprints/012-flutterflow-demo-path-polish/blueprint.md`
- `planning/sprints/012-flutterflow-demo-path-polish/acceptance.md`
- `planning/sprints/012-flutterflow-demo-path-polish/handoff-prompt.md`

## Files to Update

Update only as needed:

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `references/flutterflow/sprint-009/click-path-notes.md`

## Implementation Plan

### Step 1 - Confirm accepted demo path

Document that Sprint 012 accepts this demo set:

- Dashboard
- Assistant
- StrategicAdvisor
- FinanceSnapshot
- Settings

Document that CEO Briefing remains deferred and is not required for the Sprint 012 demo path.

### Step 2 - Define display labels

Document human-facing labels:

- Dashboard
- Assistant
- Strategic Advisor
- Finance Snapshot
- Settings

Do not rename repo files or generated FlutterFlow artifacts.

### Step 3 - Define navigation polish target

Document expected navigation:

```text
Dashboard -> Assistant
Dashboard -> Strategic Advisor
Dashboard -> Finance Snapshot
Dashboard -> Settings
Assistant -> Dashboard
Strategic Advisor -> Dashboard
Finance Snapshot -> Dashboard
Settings -> Dashboard
```

If a guided demo route exists or is manually created, preferred flow:

```text
Dashboard -> Assistant -> Strategic Advisor -> Finance Snapshot -> Settings -> Dashboard
```

### Step 4 - Define screenshot evidence rules

Accepted evidence remains in:

```text
references/flutterflow/sprint-009/
```

Only refresh screenshots if real manual FlutterFlow changes occur.

Do not create placeholders.

Do not mark CEO Briefing complete.

### Step 5 - Update planning/docs

Update status docs to reflect:

- Sprint 012 is active.
- Prototype demo path polish is the next accepted work.
- CEO Briefing remains deferred.
- No runtime/generated/backend work is approved.

### Step 6 - Validation

Run:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
```

If screenshots are changed after manual FlutterFlow work, also run:

```bash
find references/flutterflow/sprint-009 -maxdepth 1 -type f | sort
```

## Manual FlutterFlow Work Rule

Codex cannot perform real FlutterFlow Designer work unless the operator provides files or exported artifacts.

If manual FlutterFlow work is needed, Codex should stop and tell the operator exactly what to do in FlutterFlow.

## Do Not Touch

- Runtime app code
- React/Vite files
- FlutterFlow generated exports
- Firebase files
- Hermes/API/backend files
- Package files
- Native folders
- Release files
- Secrets or `.env` files
