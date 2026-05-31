# Sprint 018 Builder Handoff Prompt - FlutterFlow Final Prototype Evidence Capture

You are the Builder for Trina.

Sprint:

```text
018-flutterflow-final-prototype-evidence-capture
```

This sprint is planning/docs evidence capture work only. Do not implement runtime code and do not export FlutterFlow generated code.

## Read First

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `references/flutterflow/sprint-009/click-path-notes.md`
- `planning/sprints/017-flutterflow-final-prototype-evidence-readiness/requirements.md`
- `planning/sprints/018-flutterflow-final-prototype-evidence-capture/requirements.md`
- `planning/sprints/018-flutterflow-final-prototype-evidence-capture/blueprint.md`
- `planning/sprints/018-flutterflow-final-prototype-evidence-capture/acceptance.md`

## Work Boundary

Create or update planning/docs/evidence notes only.

Do not touch:

- runtime app code
- generated FlutterFlow exports
- Firebase files
- Hermes/API/backend files
- package or lock files
- native folders
- build or release outputs
- secrets or `.env` files

## Evidence Rules

Only document real screenshot evidence if the actual file exists.

Do not create fake screenshots.

Do not create placeholder evidence images.

If CEO Briefing screenshot evidence is still missing, keep it marked missing or deferred.

## Manual FlutterFlow Checks

When operator access to FlutterFlow is available, document the real status of:

- Dashboard / Home
- Assistant
- Tasks / Priorities
- Memory / Context, if present
- CEO Briefing, only if present

Also document the real status of:

```text
Dashboard -> Assistant
Dashboard -> Tasks / Priorities
Dashboard -> Memory / Context, if present
Dashboard -> CEO Briefing, only if present
CEO Briefing -> Dashboard, only if present
CEO Briefing -> Ask Trina to Prioritize -> Assistant, only if present
```

## Validation

Run and report:

```bash
git diff --check
git status --branch --short
git diff --name-only
git diff --stat
test ! -f references/flutterflow/sprint-009/ceo-briefing.png || echo "CEO briefing screenshot exists"
```

## Final Report

Report:

1. Files created.
2. Files updated.
3. Scope check.
4. Validation results.
5. Final git status.

Do not stage, commit, or push.
