# Sprint 018 Acceptance Criteria - FlutterFlow Final Prototype Evidence Capture

Sprint 018 is accepted only if the repo truthfully documents final prototype evidence status and remains inside the docs/planning boundary.

## Planning Acceptance

- Sprint 018 folder exists.
- `requirements.md` exists.
- `blueprint.md` exists.
- `acceptance.md` exists.
- `handoff-prompt.md` exists.
- `planning/STATE.md` identifies Sprint 018 as the current planning/docs evidence-capture checkpoint.

## Scope Acceptance

- Work remains planning/docs/evidence-note only.
- No runtime app code is modified.
- No FlutterFlow generated code is exported or modified.
- No Firebase, Hermes/API, backend, package, native, build, release, deploy, or secret files are modified.
- No fake screenshot is created.
- No placeholder evidence image is created.

## Evidence Acceptance

- Evidence is marked present only when the actual file exists.
- CEO Briefing evidence remains missing or deferred unless `references/flutterflow/sprint-009/ceo-briefing.png` exists.
- `.DS_Store` is not included in the evidence contract.
- Missing paths are documented as missing, deferred, or untested rather than passing.

## Documentation Acceptance

- `docs/FLUTTERFLOW_BUILD_HANDOFF.md` documents Sprint 018 final evidence capture rules.
- `docs/VALIDATION.md` documents the Sprint 018 validation commands.
- `references/flutterflow/sprint-009/click-path-notes.md` preserves CEO Briefing as deferred unless real evidence exists.
- `planning/DECISIONS.md`, `planning/RISKS.md`, and `planning/QUESTIONS.md` reflect the Sprint 018 boundary.

## Validation Acceptance

Run and report:

```bash
git diff --check
git status --branch --short
git diff --name-only
git diff --stat
test ! -f references/flutterflow/sprint-009/ceo-briefing.png || echo "CEO briefing screenshot exists"
```

`git diff --check` must pass.

## Completion Standard

Sprint 018 is a docs/planning application checkpoint. It does not prove final prototype evidence is complete unless real screenshots have been captured and documented.
