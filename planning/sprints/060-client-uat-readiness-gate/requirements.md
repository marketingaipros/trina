# Sprint 060 Requirements - Client UAT Readiness Gate

## Goal

Prepare a controlled Client Test Version / V1 Beta readiness gate now that Sprint 059 passed and the Barbie backend/model path is proven.

Sprint 059 proved:

```text
typed prompt -> askBarbie() -> ensureBarbieAuth() -> Firebase callable -> chatWithBarbie -> real backend/model response -> visible Barbie reply
```

Sprint 060 determines whether the current app can safely move into controlled client UAT, what exact surface the client should use, what workflows must be tested, what remains deferred, and what approval is required before V1 Beta testing.

## In Scope

- Create Sprint 060 planning files.
- Update planning state for UAT readiness gate.
- Update validation rules for controlled client UAT.
- Record whether current UI is the UAT surface.
- Record the exact UAT link/path if known, or owner action if unknown.
- Define required core client UAT workflows.
- Define known issues, deferrals, and blockers.
- Define notification status for UAT.
- Define client report-back instructions.
- Define bug/feedback capture location.
- Define V1 Beta approval criteria.

## Out of Scope

- Runtime/source code changes.
- Firebase deploy.
- Firebase settings changes.
- FlutterFlow migration or changes.
- Native/iPhone packaging.
- Production release.
- Credential, token, or secret work.
- Gmail send enablement.
- Telegram launch.
- CEO Briefing artifact work.

## Required UAT Readiness Questions

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

## Default UAT Recommendation

Use the current working React/Vite UI for controlled UAT readiness unless the owner records a different approved decision.

FlutterFlow is not the Sprint 060 UAT path.

Native/iPhone packaging is not the Sprint 060 UAT path.

Sprint 060 is not final release.

## Candidate UAT Surface

Record one of:

- `APPROVED UAT SURFACE: <exact-url-or-path>`
- `UAT SURFACE UNRESOLVED: owner must provide or approve exact web link/path before client handoff`

Do not invent a client link. Local `http://127.0.0.1:3000/` evidence proves local smoke only; it is not a client share link unless the owner explicitly chooses a local/operator-assisted test setup.

## Core Workflows Before Client Handoff

Minimum workflows:

- App opens at approved UAT surface.
- Approved auth/session path works without repo-stored credentials.
- Typed Barbie prompt returns a real backend/model response.
- Reminder or task-style request is submitted through current app path.
- In-app reminder/task visibility is checked where available.
- Voice/mic is tested if available, with typed fallback accepted unless owner requires voice.
- Navigation through visible core app surfaces is smoke-tested.
- Gmail send remains V2/disabled and does not block UAT.
- Notifications are classified as blocker, deferral, or watch-only.

## Client Report-Back Checklist

Client should report:

- Could you open the app?
- What device/browser did you use?
- Could you send a typed Barbie message?
- Did Barbie respond with a useful answer?
- Did any reminder/task request work as expected?
- Did anything feel confusing or broken?
- Did any screen fail to load or show an error?
- Did notifications appear, fail, or feel unnecessary for this test?
- What are the top three changes needed before broader beta?
- Any screenshots or exact wording of errors, without sharing passwords or secrets.

## Bug and Feedback Capture

Record one:

- `BUG/FEEDBACK CHANNEL: <approved-channel>`
- `BUG/FEEDBACK CHANNEL UNRESOLVED: owner must choose before client handoff`

Suggested acceptable channels include a dedicated planning issue list, shared doc, Notion page, GitHub issue label, or manually maintained UAT feedback log. Do not store client credentials or secrets in feedback notes.

## V1 Beta Approval Criteria

V1 Beta testing may be approved only when:

- Exact UAT surface/link/path is approved.
- First tester is identified.
- Bug/feedback channel is approved.
- Typed backend/model response still passes on the chosen UAT surface.
- Required core workflows have no unresolved blockers.
- Notifications are either validated or explicitly deferred.
- Known issues are listed.
- Owner/go-live approver explicitly approves controlled V1 Beta testing.

## Non-Negotiable Rules

- No deploy without explicit approval.
- No Firebase settings change without explicit approval.
- No FlutterFlow migration in this sprint.
- No native/iPhone packaging in this sprint.
- No final production release.
- No secrets in repo files.
- Do not create or touch `references/flutterflow/sprint-009/ceo-briefing.png`.
