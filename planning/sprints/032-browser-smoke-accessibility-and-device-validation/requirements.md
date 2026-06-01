# Sprint 032 Requirements

## Sprint Name

`032-browser-smoke-accessibility-and-device-validation`

## Goal

Validate the polished Trina app in a real browser/device workflow, confirm core navigation and task flows, verify touch/accessibility usability, and test microphone capture where browser permission is available.

## Background

Sprint 031 added narrow runtime accessibility polish to the existing core app shell.

Sprint 032 should verify that the app behaves correctly in practical use.

This sprint should not start with code changes.

Codex should inspect, run the app if possible, perform browser/device smoke checks, record results, and only propose follow-up fixes if issues are confirmed.

## In Scope

- Browser smoke test Dashboard/Home.
- Browser smoke test bottom navigation.
- Confirm Assistant / Voice Entry reachability.
- Confirm typed Assistant capture creates a visible task.
- Confirm empty Assistant input remains safely handled.
- Confirm Tasks view usability.
- Confirm Notifications view usability.
- Confirm Calendar view usability.
- Confirm Finance view usability.
- Confirm Knowledge Base view usability.
- Confirm Home/back controls work.
- Confirm Sprint 031 accessible labels/titles are present in practical browser use.
- Confirm touch/mobile usability of edit/delete/form/audio controls where possible.
- Test speech capture live if microphone permission is available.
- Use code inspection for speech capture only if live microphone testing is blocked.
- Record confirmed follow-up issues for Sprint 033.
- Update `docs/VALIDATION.md`, `planning/STATE.md`, `planning/RISKS.md`, and `planning/QUESTIONS.md` as needed.

## Out of Scope

- CEO Briefing.
- Creating `references/flutterflow/sprint-009/ceo-briefing.png`.
- Broad app redesign.
- New navigation architecture.
- New storage/persistence architecture.
- New dependencies.
- Package changes.
- Firebase.
- Hermes.
- Backend work.
- Auth or database changes.
- Live AI integration.
- FlutterFlow export.
- Native/build/release/deployment work.
- CRM, invoicing, SaaS, or multi-user permissions.

## Required Builder Behavior

Codex must:

1. Read sprint files before validation.
2. Summarize the validation plan before running the browser/device pass.
3. Avoid implementation unless the operator explicitly approves a follow-up fix.
4. Keep CEO Briefing protected.
5. Keep the sprint focused on validation and issue discovery.
6. Report complete, incomplete, and blocked validation items honestly.

## Expected Outcome

At the end of Sprint 032, the project should have:

- A clear validation report.
- Confirmation that core app navigation and task flow are stable.
- Confirmation whether speech capture was live-tested or blocked.
- Confirmation whether touch/mobile usability has issues.
- A precise Sprint 033 candidate list if issues remain.
- No unapproved runtime changes.
