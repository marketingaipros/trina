# Sprint 056 Acceptance Criteria - Backend Assistant Contract and Internal Integration Validation Plan

Sprint 056 is accepted only if all criteria below are satisfied.

## Required File Creation

The following files exist:

- `planning/sprints/056-backend-assistant-contract-and-internal-integration-validation/requirements.md`
- `planning/sprints/056-backend-assistant-contract-and-internal-integration-validation/blueprint.md`
- `planning/sprints/056-backend-assistant-contract-and-internal-integration-validation/acceptance.md`
- `planning/sprints/056-backend-assistant-contract-and-internal-integration-validation/handoff-prompt.md`

## Required Planning / Docs Updates

The following files are updated if needed:

- `planning/STATE.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/VALIDATION.md`

`planning/DECISIONS.md` is updated only if a durable decision changes.

## Contract Confirmation

Acceptance requires documenting:

- Current frontend assistant caller.
- Current backend assistant callable.
- Current request shape.
- Current success response shape.
- Current reminder response shape.
- Current auth/session requirement.
- Current voice transcript/fallback behavior.
- Whether Hermes is involved in current runtime behavior.

## Internal Smoke Validation

Acceptance requires pass/fail/blocked results for:

- App launch.
- Auth/session.
- Typed assistant/backend call.
- Reminder or task follow-through.
- Voice transcript or typed fallback.
- Core client workflow.
- Blocking runtime errors.

## UAT Candidate Rule

Recommend `CLIENT UAT CANDIDATE` only if:

- App launches.
- Auth/session works as expected for the intended tester.
- Assistant/backend call succeeds.
- Core client workflow succeeds.
- No blocking runtime errors remain.
- Voice works or typed fallback is accepted as non-blocking.
- UAT handoff basics are identified: first tester, issue channel, and approver.

If any of those are blocked, final recommendation must remain `HOLD`.

## Required Validation Commands

At minimum, run:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
node --check functions/index.js
```

If runtime smoke is performed, also run:

```bash
npm run dev -- --host 127.0.0.1
```

Record any accepted warnings or new blockers.

## Safety Criteria

Sprint 056 is not accepted if Codex:

- Redesigns UI.
- Adds features.
- Rebuilds FlutterFlow.
- Modifies runtime/source code without a separate explicit implementation request.
- Deploys production.
- Runs native builds.
- Commits credentials or secrets.
- Touches CEO Briefing files.
- Marks client UAT ready without internal validation evidence.

## Closeout Report

Closeout must include:

1. Files created/updated.
2. Current assistant/backend contract.
3. Auth/session validation result.
4. Typed assistant/backend validation result.
5. Voice/fallback validation result.
6. Core workflow validation result.
7. Remaining risks/questions.
8. Validation commands and results.
9. CEO Briefing absence confirmation.
10. Final recommendation: `HOLD` or `CLIENT UAT CANDIDATE`.
