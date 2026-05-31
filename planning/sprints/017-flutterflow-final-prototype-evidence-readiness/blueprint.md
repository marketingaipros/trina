# Sprint 017 Blueprint - FlutterFlow Final Prototype Evidence Readiness

## Objective

Create a clean docs/planning checkpoint that prepares Trina for final FlutterFlow prototype evidence capture without performing screenshot capture or runtime implementation.

## Files to Inspect

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `references/flutterflow/sprint-009/click-path-notes.md`
- `planning/sprints/016-flutterflow-functional-app-stabilization/requirements.md`
- `planning/sprints/016-flutterflow-functional-app-stabilization/blueprint.md`
- `planning/sprints/016-flutterflow-functional-app-stabilization/acceptance.md`
- `planning/sprints/016-flutterflow-functional-app-stabilization/handoff-prompt.md`

## Files to Create

- `planning/sprints/017-flutterflow-final-prototype-evidence-readiness/requirements.md`
- `planning/sprints/017-flutterflow-final-prototype-evidence-readiness/blueprint.md`
- `planning/sprints/017-flutterflow-final-prototype-evidence-readiness/acceptance.md`
- `planning/sprints/017-flutterflow-final-prototype-evidence-readiness/handoff-prompt.md`

## Files to Update

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `references/flutterflow/sprint-009/click-path-notes.md`

## Protected Files and Paths

Do not modify:

- Runtime app code
- Generated FlutterFlow export code
- Firebase files
- Hermes files
- Backend files
- Package files
- Native files
- Build output files
- Release files
- `.DS_Store`
- Placeholder images
- `references/flutterflow/sprint-009/ceo-briefing.png` unless it already exists as real evidence and only documentation around it is being updated

## Implementation Plan

1. Inspect Sprint 016 files and current docs/planning state.
2. Create the Sprint 017 planning folder and four required sprint files.
3. Update `planning/STATE.md` to mark Sprint 017 as the active docs/planning readiness sprint.
4. Update `planning/DECISIONS.md` with evidence quality decisions.
5. Update `planning/RISKS.md` with risks around placeholder evidence and false completion.
6. Update `planning/QUESTIONS.md` with open evidence capture questions, including the evidence-folder ambiguity.
7. Update `docs/FLUTTERFLOW_BUILD_HANDOFF.md` with final prototype validation path and evidence rules.
8. Update `docs/VALIDATION.md` with the screen matrix, click-path checklist, screenshot filenames, and source-note rules.
9. Update `references/flutterflow/sprint-009/click-path-notes.md` to keep CEO Briefing evidence deferred.
10. Run validation checks:
    - `git diff --check`
    - `git status --branch --short`
    - `git diff --name-only`
    - `git diff --stat`
    - `test ! -f references/flutterflow/sprint-009/ceo-briefing.png`
11. Report changed files and whether acceptance criteria are satisfied.

## Notes

Sprint 017 is not complete if it creates fake evidence, changes runtime code, or claims CEO Briefing evidence exists without a real screenshot.
