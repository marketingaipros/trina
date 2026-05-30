# Sprint 012 Acceptance Criteria - FlutterFlow Demo Path Polish

Sprint 012 is complete when all applicable criteria are satisfied.

## Planning Acceptance

- Sprint 012 folder exists.
- `requirements.md` exists.
- `blueprint.md` exists.
- `acceptance.md` exists.
- `handoff-prompt.md` exists.
- `planning/STATE.md` identifies Sprint 012 as the current/next active planning checkpoint.
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md` documents the accepted demo path or points to the Sprint 012 files.
- `docs/VALIDATION.md` documents validation rules for the demo path/evidence.

## Scope Acceptance

- Accepted demo screen set is documented.
- CEO Briefing remains deferred, not complete.
- No placeholder CEO Briefing evidence is created.
- No runtime app code is modified.
- No FlutterFlow generated code is exported or modified.
- No Firebase, Hermes, backend, package, native, release, or secret files are modified.

## Demo Path Acceptance

The accepted demo path is documented as one of the following:

Preferred guided flow:

```text
Dashboard -> Assistant -> Strategic Advisor -> Finance Snapshot -> Settings -> Dashboard
```

Or direct Dashboard hub flow:

```text
Dashboard -> each accepted screen -> Dashboard
```

## Evidence Acceptance

- Existing accepted screenshot evidence remains documented.
- Any refreshed screenshot evidence must be a real FlutterFlow screenshot.
- `.DS_Store` is not included in the evidence contract.
- CEO Briefing screenshot remains documented as deferred unless the real file exists.

## Validation Acceptance

Run and report:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
```

If screenshots changed, also run and report:

```bash
find references/flutterflow/sprint-009 -maxdepth 1 -type f | sort
```

`git diff --check` must pass.
