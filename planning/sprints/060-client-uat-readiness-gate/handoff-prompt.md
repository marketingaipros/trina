# Sprint 060 Handoff Prompt - Client UAT Readiness Gate

You are Codex working in `/Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice`.

Apply Sprint 060: `060-client-uat-readiness-gate`.

## Goal

Prepare a controlled client UAT readiness gate now that Sprint 059 passed and the Barbie backend/model path is proven.

Sprint 059 proof:

`typed prompt -> askBarbie() -> ensureBarbieAuth() -> Firebase callable -> chatWithBarbie -> real backend/model response -> visible Barbie reply`

## Must Read First

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/059-rerun-barbie-backend-smoke-after-auth-unblock/acceptance.md`
- `planning/sprints/060-client-uat-readiness-gate/requirements.md`
- `planning/sprints/060-client-uat-readiness-gate/blueprint.md`
- `planning/sprints/060-client-uat-readiness-gate/acceptance.md`

## Scope

Create/update planning and validation docs only.

Do not modify runtime/source code.

Do not deploy.

Do not change Firebase settings.

Do not do FlutterFlow work.

Do not package native/iPhone builds.

Do not expose credentials or secrets.

Do not create or touch `references/flutterflow/sprint-009/ceo-briefing.png`.

## Required Outputs

Answer:

1. Can the client safely test the current app?
2. What exact app surface/link/path should the client use for UAT?
3. Are we using the current UI for UAT, not FlutterFlow yet?
4. What core workflows must be tested before client handoff?
5. What known issues remain?
6. Are notifications blocking UAT, or can they be deferred to a later version?
7. What should the client report back?
8. Where should bugs/feedback be captured?
9. What counts as approval for V1 Beta testing?
10. What must not happen yet?

## Default Recommendation

Use the current working UI as the controlled UAT candidate unless owner-approved repo evidence records a different decision.

Do not move to FlutterFlow in this sprint.

Do not package iPhone/native builds in this sprint.

Do not deploy or change Firebase settings.

Do not treat Sprint 060 as final release.

## Closeout Format

Report:

- Files changed.
- Final recommendation: `CLIENT UAT READY`, `CLIENT UAT READY WITH DEFERRALS`, or `HOLD`.
- Exact UAT surface/link/path, or unresolved owner action.
- Current UI vs FlutterFlow decision.
- Core workflows required before handoff.
- Known issues.
- Notification status.
- Client report-back checklist.
- Bug/feedback channel.
- V1 Beta approval criteria.
- Scope guard confirmation.
