# Sprint 030 Acceptance Criteria

## Navigation / App Shell

- Dashboard/Home remains reachable.
- Bottom navigation reaches all expected primary surfaces.
- Active bottom navigation state remains clear.
- Assistant / Voice Entry remains reachable from Dashboard.
- Return paths to Dashboard/Home remain present where Sprint 029 added them.

## Assistant Capture

- Typed Assistant capture to Tasks still works.
- Captured tasks remain visible in Tasks.
- Existing task capture flow is not rewritten unnecessarily.

## Speech Capture

One of the following must be true:

- Speech capture is live-tested in a browser/device with microphone permission granted and transcript capture behavior is confirmed.
- Speech capture cannot be live-tested because permission is denied or unavailable, and the existing transcript-to-task path is preserved by inspection with the limitation documented.

## Label Consistency

- `Knowledge Base` is used as the full feature name in user-facing copy.
- `Knowledge` is used only where compact nav labeling is needed.
- `Context` is not used as the user-facing name for Knowledge Base unless a future sprint changes the product term.
- `Notifications` remains the user-facing label instead of `Alerts`, unless an internal identifier is intentionally left unchanged.

## Validation Coverage

- A lightweight repeatable validation path exists through one of:
  - existing automated UI/component smoke tests
  - existing test setup plus focused additions
  - documented manual smoke checklist in `docs/VALIDATION.md`
- Validation does not introduce a heavy E2E framework unless explicitly justified.
- Validation steps cover navigation, typed capture, Knowledge Base naming, and speech capture status.

## Required Commands

The following pass:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

`npm run build` may pass with pre-existing Vite warnings.

## Protected Scope

- CEO Briefing remains untouched and deferred.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- No backend, Firebase, Hermes, package, native, build, release, deployment, auth, or database files are changed unless explicitly approved.

## Documentation

- `planning/STATE.md` reflects Sprint 030 implementation and validation status.
- `docs/VALIDATION.md` reflects the lightweight app shell smoke path.
- Any new durable label or validation decision is recorded in `planning/DECISIONS.md`.
- Any unresolved speech testing limitation remains visible in `planning/QUESTIONS.md` or validation notes.
