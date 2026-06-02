# Sprint 042 Requirements - Mobile State Validation and Fixture Coverage

## Purpose

Create a small, repeatable validation path for the empty, error, loading, disabled, unavailable, fallback, and mobile smoke caveats left by Sprint 041.

Sprint 042 is a validation-infrastructure and documentation sprint. It should improve confidence that the current non-CEO Trina app shell can be checked at or near `390x844` without relying on seeded local data, ad hoc manual inspection, or risky data changes.

The Sprint 042 planning application itself is docs/planning only. Runtime implementation must not start during architect-pack application.

## Background

Sprint 041 completed command validation and runtime hardening, but closeout kept these caveats:

- Browser/manual smoke was run near mobile size at measured viewport `351x729`, not exactly the intended `390x844` target.
- Tasks, Finance, and Calendar true empty states were code-inspected because local seeded data existed.
- Daily Snapshot, Task Strategic Review, and Finance AI failure states were code-inspected instead of live-reproduced.
- Knowledge Base voice failure and Finance disabled submit were live-tested.
- Horizontal overflow was live-checked for the main in-scope views.

## Requirements

### R1 - Apply Sprint 042 Planning Files

Create the Sprint 042 planning folder and required sprint files:

- `planning/sprints/042-mobile-state-validation-and-fixture-coverage/requirements.md`
- `planning/sprints/042-mobile-state-validation-and-fixture-coverage/blueprint.md`
- `planning/sprints/042-mobile-state-validation-and-fixture-coverage/acceptance.md`
- `planning/sprints/042-mobile-state-validation-and-fixture-coverage/handoff-prompt.md`

### R2 - Start With Inspection and Builder Summary

Before runtime edits, the Builder must inspect the validation surface and summarize:

- What Sprint 042 is supposed to accomplish.
- Files inspected.
- Which files the Builder expects to modify.
- Candidate validation mechanism, if any.
- Whether no runtime changes may be sufficient.
- Tests and validation steps to run.
- Blockers or ambiguities.

Runtime edits must not begin before this summary and operator approval.

### R3 - Choose the Smallest Validation Mechanism

The Builder may choose only the smallest practical mechanism needed to recheck Sprint 041 caveats:

- A lightweight local fixture, mock, dev-only toggle, or test helper.
- Documented local reset or manual steps if code support is unnecessary.
- A small smoke script if the repo already has a practical place for it.
- No runtime changes if the current structure already supports repeatable validation.

The Builder must not add dependencies unless existing tooling is insufficient and the operator explicitly approves the package change first.

### R4 - Recheck Sprint 041 Caveat Areas

The validation path should address:

- Dashboard / Daily Snapshot error visibility.
- Voice Dashboard capture, empty, and disabled behavior.
- Tasks empty state and Strategic Review AI failure state.
- Notifications empty and fallback behavior.
- Calendar true empty state and preserved event controls.
- Finance empty, disabled submit, and AI failure state.
- Knowledge Base empty/fallback, voice failure, and delete-without-ID error state.
- Bottom navigation touch behavior.
- Horizontal overflow at or near `390x844`.

### R5 - Preserve Product and Runtime Scope

Sprint 042 must preserve:

- Existing pink/white Barbie UI direction.
- Existing navigation architecture.
- Existing Firebase/backend contracts.
- Existing persistence behavior for normal users.
- Existing Sprint 040 touch/accessibility improvements.
- Existing Sprint 041 state hardening.

### R6 - Protect Out-of-Scope Surfaces

Sprint 042 must not touch:

- CEO Briefing workflow.
- `references/flutterflow/sprint-009/ceo-briefing.png`.
- CEO Briefing evidence files.
- Backend files.
- Firebase files or Firestore rules.
- Package/dependency files unless explicitly approved first.
- Native Capacitor, Android, or iOS files.
- Build, release, deployment, hosting, or environment files.
- Generated FlutterFlow code or exports.

## Non-Goals

- No redesign.
- No backend sprint.
- No Firebase contract changes.
- No production feature flags.
- No database, auth, Gmail, Telegram, live AI, or deployment work.
- No CEO Briefing work.
- No screenshot evidence creation.

## Success Standard

Sprint 042 succeeds when a Builder can clearly report which Sprint 041 states are live-reproducible, which remain code-inspected only, whether `390x844` smoke was run exactly or why not, whether horizontal overflow and Sprint 040 touch behavior remain acceptable, and whether required command checks pass.
