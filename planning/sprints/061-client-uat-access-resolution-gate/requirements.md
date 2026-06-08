# Sprint 061 Requirements - Client UAT Access Resolution Gate

## Status

Draft for Builder review.

## Background

Sprint 059 proved the real Barbie backend/model path.

Sprint 060 closed as HOLD because Client UAT / V1 Beta was not approved. The blocker is not core app functionality. The blocker is release-control readiness.

The project needs a clear, file-based decision on whether the client can safely receive a controlled test version.

## Goal

Resolve the Client UAT / V1 Beta release blockers documented in Sprint 060.

## Required Outcomes

By the end of Sprint 061, project files must clearly state one of these outcomes:

1. `APPROVED FOR CONTROLLED UAT`
   - Only allowed if every required gate item is confirmed.

2. `HOLD`
   - Required if any gate item remains unresolved.

## UAT Gate Items

Client UAT / V1 Beta cannot be approved until all of these are documented:

- Exact client-accessible UAT surface/link/path.
- First tester name or role.
- Bug/feedback capture channel.
- Notification status as blocker, deferral, or watch-only.
- V1 Beta approver.
- Auth posture for controlled UAT and remaining production auth gap.

## In Scope

- Review existing planning/docs for UAT access evidence.
- Update release-control documentation.
- Close or keep open Sprint 060 questions based on project-file evidence.
- Record a Sprint 061 decision in `planning/DECISIONS.md`.
- Update `planning/STATE.md` with Sprint 061 result.
- Update `docs/VALIDATION.md` with Sprint 061 validation gate.
- Keep risks and questions current.

## Out of Scope

- Runtime/source changes.
- New feature work.
- Deploys.
- Firebase setting changes.
- FlutterFlow changes.
- Native packaging.
- Production release approval.
- CEO Briefing PNG creation or edits.
- Credential handling.

## Acceptance Position

The safe default is HOLD.

Move to APPROVED FOR CONTROLLED UAT only if the Builder can prove every gate item from project files or from explicit operator-provided answers recorded into project files.
