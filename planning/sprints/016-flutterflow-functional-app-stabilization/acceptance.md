# Sprint 016 Acceptance Criteria - FlutterFlow Functional App Stabilization

Sprint 016 is complete when all of the following are true:

## Planning Files

- `planning/sprints/016-flutterflow-functional-app-stabilization/requirements.md` exists.
- `planning/sprints/016-flutterflow-functional-app-stabilization/blueprint.md` exists.
- `planning/sprints/016-flutterflow-functional-app-stabilization/acceptance.md` exists.
- `planning/sprints/016-flutterflow-functional-app-stabilization/handoff-prompt.md` exists.

## State and Documentation

- `planning/STATE.md` reflects Sprint 016 as the current checkpoint or next active sprint.
- `planning/DECISIONS.md` is updated only if durable Sprint 016 decisions were missing.
- `planning/RISKS.md` is updated only if Sprint 016 risks were missing or stale.
- `planning/QUESTIONS.md` is updated only if Sprint 016 open questions were missing or stale.
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md` is reviewed and updated only if needed.
- `docs/VALIDATION.md` is reviewed and updated only if needed.
- `references/flutterflow/sprint-009/click-path-notes.md` is reviewed and updated only if needed.

## Evidence Integrity

- CEO Briefing evidence is not marked complete unless a real screenshot exists.
- No placeholder `references/flutterflow/sprint-009/ceo-briefing.png` is created.
- Any evidence note clearly distinguishes between real evidence, deferred evidence, and planned future evidence capture.

## Scope Protection

- No runtime app code is modified.
- No generated FlutterFlow export code is modified.
- No Firebase, Hermes, backend, package/native, or release files are modified.
- No build artifacts are created or committed.

## Validation

- `git diff --check` passes.
- `git status --branch --short` is reported.
- Changed files are limited to the Sprint 016 allowlist.
- Codex reports any deviations immediately and does not stage or commit until explicitly instructed.

## Completion Standard

Sprint 016 is not complete if:

- CEO Briefing evidence is falsely marked complete.
- A placeholder screenshot is created.
- Runtime/backend/generated/release files are changed.
- The Builder skips reporting changed files and validation results.
