# Sprint 055 Acceptance Criteria - Runtime Source Reconciliation and Backend Integration Plan

Sprint 055 is accepted only if all criteria below are satisfied.

## Required File Creation

The following files exist:

- `planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/requirements.md`
- `planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/blueprint.md`
- `planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/acceptance.md`
- `planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/handoff-prompt.md`

## Required Planning Updates

The following files are updated:

- `planning/STATE.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`

`planning/DECISIONS.md` is updated only if durable decisions are proven by repo evidence or explicit operator approval.

## Required Documentation Updates

The following files are updated:

- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/VALIDATION.md`

## Runtime Source Reconciliation

The sprint documents:

- Active runtime source.
- Current app framework/build tooling.
- Whether the current app is framework-only, partially connected, or fully connected.
- Whether mobile/native wrapper files exist.
- Whether backend code exists.
- Whether source-of-truth remains unresolved.

## FlutterFlow Status

The sprint documents one of:

- `Confirmed active`
- `Historical/reference only`
- `Planned but not implemented`
- `Unknown / requires operator confirmation`

The sprint must not assume FlutterFlow is active only because prior chat history mentioned it.

## Firebase Status

The sprint documents:

- Whether Firebase config exists.
- Which Firebase services appear configured or planned.
- Whether Firebase is deployed/validated.
- Whether Firebase is connected to runtime app behavior.
- Whether Firebase is only placeholder/config evidence.

## Hermes / Backend Status

The sprint documents:

- Whether Hermes/backend integration exists in runtime code.
- Whether endpoints/contracts exist.
- Whether typed assistant flow is connected or mocked.
- Whether voice assistant flow is connected or mocked.
- What integration contract is needed next.

## Release / UAT Gate

The sprint must keep release recommendation as `HOLD` unless repo evidence proves internal UAT can begin safely.

Client UAT must remain blocked if:

- Backend integration is not implemented.
- Hermes connection is missing or unclear.
- Firebase role is unvalidated.
- The active source of truth is unresolved.

## Validation

At minimum, Codex runs:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

If package scripts exist and are safe, Codex should also run:

```bash
npm run lint
npm run build
```

Accepted warnings may be documented, but new untriaged warnings must be recorded in `planning/RISKS.md` or `planning/QUESTIONS.md`.

## Safety

The sprint is not accepted if Codex:

- Modifies runtime/source files.
- Adds or changes app behavior.
- Adds Firebase or Hermes code.
- Deploys.
- Runs native builds.
- Touches credentials or secret files.
- Creates or restores CEO Briefing files.
- Marks project ready for client rollout without evidence.

## Closeout

Closeout report must include:

1. Files created/updated.
2. Runtime source-of-truth conclusion.
3. FlutterFlow conclusion.
4. Firebase conclusion.
5. Hermes/backend conclusion.
6. Remaining unresolved questions.
7. Recommended Sprint 056.
8. Validation results.
9. CEO Briefing absence confirmation.
10. Final release recommendation.
