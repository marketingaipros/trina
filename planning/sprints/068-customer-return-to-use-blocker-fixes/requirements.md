# Sprint 068 Requirements - Customer Return-to-Use Blocker Fixes

## Goal

Fix or close only the blockers that prevent giving the current app back to the client for limited return-to-use.

## Starting Status

`HOLD - Client UAT / V1 Beta not approved`

Sprint 067 proved the following:

- Deployed app loads.
- Anonymous access works at least technically.
- Typed question reaches backend/model.
- Barbie returns a non-mocked answer.
- Reminder creation works.
- In-app due reminder appears.

Sprint 067 did not approve release because these blockers remain:

1. Official customer URL/path is not owner-approved.
2. Deployed app version does not match local `dist` asset hashes.
3. Auth/access posture is not owner-approved.
4. Browser/native push proof is missing.
5. Voice/mic input is blocked by permission.
6. Feedback path is missing or not owner-approved.
7. First tester is not recorded.
8. Owner/go-live approval is not recorded.

## In Scope

- Prove or correct the deployed app version mismatch.
- Record the official customer URL/path.
- Record owner-approved access/login posture.
- Prove reminder due behavior or document owner-approved limitation.
- Prove voice/mic behavior or document owner-approved limitation.
- Add or document a feedback path.
- Record first tester.
- Record owner/go-live approver and approval status.
- Update validation docs and sprint closeout evidence.

## Out of Scope

- Flutter migration.
- Native iOS packaging.
- App Store/TestFlight release.
- New dashboard design.
- CRM features.
- Invoicing.
- Multi-user permissions system.
- Production SaaS hardening.
- Broad refactor.
- Unrelated bug fixes.
- Sprint 064 untracked files.

## Required Outcome

Sprint 068 must close with exactly one final recommendation:

```text
APPROVE - give current app back to client
```

or

```text
HOLD - blocker remains after Sprint 068
```
