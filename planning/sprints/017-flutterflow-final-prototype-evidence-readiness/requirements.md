# Sprint 017 Requirements - FlutterFlow Final Prototype Evidence Readiness

## Goal

Prepare Trina for final FlutterFlow prototype evidence capture by tightening validation checklists, evidence rules, screenshot storage expectations, and click-path confirmation steps before any new build or screenshot work.

## Background

Sprint 016 was completed as a docs/planning stabilization checkpoint. CEO Briefing remains deferred, and no placeholder screenshot was created.

Sprint 017 continues that discipline. It does not capture evidence or modify runtime systems. It prepares the project so a future evidence capture pass can be performed without confusion.

## In Scope

- Review Sprint 016 stabilization state.
- Define the final FlutterFlow prototype validation path.
- Confirm expected prototype screens in documentation.
- Define required screenshot evidence.
- Define screenshot naming rules.
- Define evidence storage rules.
- Keep CEO Briefing deferred unless real evidence exists.
- Update docs/planning only.
- Prepare a Builder handoff prompt for evidence readiness.

## Out of Scope

- Runtime app code.
- Generated FlutterFlow export code.
- Firebase work.
- Hermes work.
- Backend work.
- Package/native/build/release files.
- Placeholder screenshots.
- Fake evidence.
- Production deployment.
- FlutterFlow CLI export.
- Creating `references/flutterflow/sprint-009/ceo-briefing.png` without real evidence.

## Required Screens to Track

Sprint 017 should document the evidence status for:

1. Dashboard / Home
2. Assistant
3. Tasks / Priorities
4. Memory / Context, if included in current prototype scope
5. CEO Briefing, deferred unless real evidence exists

## Business Rules

- Evidence must be real.
- Deferred evidence must be labeled deferred.
- Missing evidence must not be replaced with placeholders.
- Codex must not modify protected runtime or generated-code files.
- The validation checklist must be clear enough for a future Builder/operator to capture evidence without guessing.
- The evidence-folder decision remains open until the Architect/operator chooses whether final screenshots use a new evidence folder or preserve Sprint 009 continuity.

## Expected Output

By the end of Sprint 017, the repo should contain updated docs/planning files that clearly answer:

1. Which FlutterFlow screens need evidence?
2. Which screenshots are required?
3. Where screenshots should be stored, or which storage-location question remains open?
4. What click paths must be validated?
5. What remains deferred?
6. What Codex must not touch?
