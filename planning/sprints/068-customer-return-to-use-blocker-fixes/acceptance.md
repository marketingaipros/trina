# Sprint 068 Acceptance - Customer Return-to-Use Blocker Fixes

## Final Recommendation Gate

Sprint 068 must close with exactly one of:

```text
APPROVE - give current app back to client
```

or

```text
HOLD - blocker remains after Sprint 068
```

## Approval Criteria

Approval is allowed only if all of the following are true:

- Official customer URL/path is recorded.
- Official customer URL/path is owner-approved.
- Deployed app version is proven current or explicitly owner-approved despite mismatch.
- Access/login posture is owner-approved.
- Typed question/backend/model path passes on the owner-approved customer URL.
- Reminder creation passes on the owner-approved customer URL.
- Due reminder behavior is proven and documented.
- Browser/native push is proven or explicitly marked out of scope with owner approval.
- Voice input is proven or explicitly marked out of scope with owner approval.
- Feedback path is visible or externally approved and documented.
- First tester is recorded.
- Owner/go-live approver is recorded.
- Owner/go-live approval is recorded.
- Required validation commands pass.

## Required Evidence

Closeout must include:

1. Final recommendation.
2. Customer URL tested.
3. Deployed asset/version evidence.
4. Access/login evidence.
5. Typed question/backend/model evidence.
6. Reminder creation evidence.
7. Due reminder behavior evidence.
8. Browser/native push status.
9. Voice/mic status.
10. Feedback path.
11. First tester.
12. Owner/go-live approval status.
13. Files changed.
14. Validation commands and results.
15. Final git status.

## Mandatory Hold Conditions

Sprint 068 must close as HOLD if any of these remain true:

- Official customer URL is unknown or not owner-approved.
- Deployed/current version mismatch is unresolved and not owner-approved.
- Access/login posture is not owner-approved.
- Typed backend/model answer path fails.
- Reminder creation fails.
- Due reminder behavior is not proven or limited with owner approval.
- Feedback path is missing or not owner-approved.
- First tester is not recorded.
- Owner/go-live approval is not recorded.

## Validation Commands

Required before closeout:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

If runtime/source or deploy changes occur with approval, include relevant build/test/smoke commands in the closeout report.

## Protected Surface Acceptance

Closeout must confirm:

- Sprint 064 untracked files remain untouched.
- No FlutterFlow files were changed unless explicitly approved.
- No native build files were changed unless explicitly approved.
- No credentials were touched.
- No CEO Briefing files were touched.
- No deploy was run unless explicitly approved and documented.

## Sprint 068 Closeout Notes

Date: 2026-06-08

Final recommendation:

```text
APPROVE - give current app back to client
```

Summary:

- Both Firebase Hosting customer URLs returned `HTTP/2 200` and loaded the deployed UI.
- Deployed app core smoke passed for typed question, backend/model response, reminder creation, in-app due reminder, and dismiss.
- In-app reminders are accepted for Sprint 068; browser/native push remains follow-up.
- Typed fallback is accepted for Sprint 068; voice/mic remains follow-up because browser permission was denied.
- Anonymous/current access is accepted only for limited return-to-use assumptions; production auth posture remains follow-up.
- A minimal feedback path was added to the current web app in `components/VoiceDashboard.tsx`.
- Local preview proved the feedback `mailto:` link renders.
- Firebase Hosting deploy was run for Hosting only.
- Both deployed customer URLs now serve `assets/index-C76Bx-lr.js` and `assets/index-hG8MW9TT.css`.
- Deployed app includes the visible feedback email link.
- Post-deploy smoke passed app load, typed backend/model answer, reminder creation, in-app due reminder, and dismiss.

Remaining follow-ups:

- Browser/native push remains unproven and is not required for Sprint 068.
- Voice/mic remains permission-dependent; typed fallback is accepted for Sprint 068.
- Broader production auth posture remains follow-up beyond limited return-to-use.
