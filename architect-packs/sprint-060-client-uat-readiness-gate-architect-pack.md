# Architect Pack - Sprint 060: Client UAT Readiness Gate

**Project:** Trina / Barbie Voice App
**Sprint:** 060
**Sprint name:** client-uat-readiness-gate
**Status:** Architect Pack created
**Date:** 2026-06-08
**Architect Layer:** ChatGPT
**Builder Layer:** Codex

---

## 1. Architect-Facing Requirements

### Sprint Goal

Prepare a controlled Client Test Version / V1 Beta readiness gate now that Sprint 059 passed and the Barbie backend/model path is proven.

Sprint 059 proved:

```text
typed prompt -> askBarbie() -> ensureBarbieAuth() -> Firebase callable -> chatWithBarbie -> real backend/model response -> visible Barbie reply
```

Sprint 060 does not build, deploy, migrate, or package the app. It creates the decision and validation structure needed to decide whether the current app can be safely handed to the client for controlled UAT.

### Required Questions Sprint 060 Must Answer

1. Can the client safely test the current app?
2. What exact app surface, link, or path should the client use for UAT?
3. Are we using the current UI for UAT, not FlutterFlow yet?
4. What core workflows must be tested before client handoff?
5. What known issues remain?
6. Are notifications blocking UAT, or can they be deferred to a later version?
7. What should the client report back?
8. Where should bugs and feedback be captured?
9. What counts as approval for V1 Beta testing?
10. What must not happen yet, including deploys, FlutterFlow migration, native packaging, or production release without approval?

### MVP Boundary

- Use the current working UI for UAT readiness unless the Architect Pack application records a different approved decision.
- Do not move to FlutterFlow in Sprint 060.
- Do not package iPhone/native builds in Sprint 060.
- Do not deploy or change Firebase settings unless explicitly approved later.
- Do not treat this as final release.
- Treat this as controlled Client Test Version / V1 Beta readiness.

### Required Scope

Create or update these files during the later Architect Pack application step:

```text
planning/STATE.md
planning/DECISIONS.md, if decisions change
planning/RISKS.md, if risks change
planning/QUESTIONS.md, if questions change
docs/ARCHITECTURE.md, only if architecture changes
docs/API.md, only if interfaces/contracts change
docs/VALIDATION.md
planning/sprints/060-client-uat-readiness-gate/requirements.md
planning/sprints/060-client-uat-readiness-gate/blueprint.md
planning/sprints/060-client-uat-readiness-gate/acceptance.md
planning/sprints/060-client-uat-readiness-gate/handoff-prompt.md
```

Do not change runtime/source code during the Architect Pack application step.

### Non-Negotiable Constraints

- Docs/planning first.
- No runtime/source changes in the Architect Pack application step.
- No deployment.
- No Firebase setting changes.
- No FlutterFlow changes.
- No native build/package changes.
- No credential exposure.
- Do not create or touch `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not stage, commit, push, or create a pull request unless explicitly approved after the pack is applied.

---

## 2. Builder-Facing Implementation Plan

### Step 1 - Read and Verify Current State

Before editing, read:

```text
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/VALIDATION.md
planning/sprints/059-rerun-barbie-backend-smoke-after-auth-unblock/acceptance.md
```

Confirm the repo currently records Sprint 059 as `PASS` and records the proven backend/model path:

```text
typed prompt -> askBarbie() -> ensureBarbieAuth() -> Firebase callable -> chatWithBarbie -> real backend/model response -> visible Barbie reply
```

If Sprint 059 is not recorded as passing, stop and report the mismatch.

### Step 2 - Create Sprint 060 Folder

Create:

```text
planning/sprints/060-client-uat-readiness-gate/
```

Then create:

```text
requirements.md
blueprint.md
acceptance.md
handoff-prompt.md
```

### Step 3 - Update Planning State

Update `planning/STATE.md` to show Sprint 060 is active and Sprint 059 has removed the Barbie backend smoke blocker.

The state update must distinguish:

- Backend/model smoke: proven.
- Client UAT: not automatically approved.
- Current recommended UAT source: current working React/Vite UI unless explicitly changed.
- FlutterFlow/native: deferred.
- Deploy/release: blocked until explicit approval.

### Step 4 - Update Decisions, Risks, and Questions

Update `planning/DECISIONS.md` only if the decisions are not already captured:

- Sprint 060 evaluates controlled UAT readiness using the current working UI.
- FlutterFlow does not replace the current UI for Sprint 060 UAT readiness.
- Native/iPhone packaging is not part of Sprint 060.
- Final production release requires a separate approval gate.

Update `planning/RISKS.md` if these risks are not already captured:

- Client may confuse controlled UAT with final production release.
- Exact UAT link/path may still be unresolved.
- Notifications may be over-weighted as a blocker even if core assistant/reminder workflows are usable.
- Anonymous auth may be acceptable for smoke/UAT but not final production auth posture.
- Feedback may be lost if there is no explicit bug/feedback capture channel.

Update `planning/QUESTIONS.md` with the Sprint 060 UAT readiness questions and answer whatever can be answered from repo evidence. Keep unknown items explicit placeholders rather than inventing values.

### Step 5 - Update Validation

Update `docs/VALIDATION.md` with Sprint 060 validation rules.

Sprint 060 validation must include:

- Planning/docs scope guard.
- No protected CEO Briefing artifact.
- No runtime/source changes.
- No deploy/native/FlutterFlow/Firebase setting changes.
- UAT readiness matrix.
- Client report-back checklist.
- Bug/feedback capture destination.
- V1 Beta approval criteria.

Because Sprint 060 is a readiness gate, validation is not just `npm run lint` and `npm run build`. The Builder should still preserve normal checks if applying later, but the key acceptance target is a truthful UAT readiness decision.

### Step 6 - Do Not Touch Architecture/API Unless Needed

Do not update `docs/ARCHITECTURE.md` unless the application step records an architecture change.

Do not update `docs/API.md` unless the application step records a changed interface or contract.

Sprint 060 should normally not require either file to change because Sprint 059 already proved the existing `chatWithBarbie` path and Sprint 060 is a UAT gate.

### Step 7 - Closeout

At closeout, report:

- Whether Sprint 060 recommends `CLIENT UAT READY`, `CLIENT UAT READY WITH DEFERRALS`, or `HOLD`.
- Exact UAT surface/link/path if known, or the exact unresolved blocker if unknown.
- Whether current UI is the UAT surface.
- Core workflows required before handoff.
- Known issues and deferrals.
- Notification status.
- Bug/feedback capture destination.
- V1 Beta approval definition.
- Scope confirmations: no deploy, no Firebase changes, no FlutterFlow, no native packaging, no runtime/source changes, no credential exposure, no CEO Briefing file touch.

---

## 3. Acceptance Criteria

Sprint 060 passes only if all criteria below are satisfied.

### Planning Artifacts

- `planning/sprints/060-client-uat-readiness-gate/requirements.md` exists.
- `planning/sprints/060-client-uat-readiness-gate/blueprint.md` exists.
- `planning/sprints/060-client-uat-readiness-gate/acceptance.md` exists.
- `planning/sprints/060-client-uat-readiness-gate/handoff-prompt.md` exists.
- `planning/STATE.md` reflects Sprint 060 UAT readiness gate status.
- `docs/VALIDATION.md` contains Sprint 060 UAT validation rules.

### UAT Readiness Answers

- The sprint answers whether the client can safely test the current app.
- The sprint records the exact UAT surface/link/path, or explicitly marks it unresolved with owner action required.
- The sprint records that the current working UI is the UAT candidate surface unless a different approved decision is documented.
- The sprint records that FlutterFlow is not the Sprint 060 UAT surface.
- The sprint records that iPhone/native packaging is not part of Sprint 060.
- The sprint records that this is controlled Client Test Version / V1 Beta readiness, not final release.

### Core Workflow Checklist

The sprint defines the minimum core workflows to test before client handoff:

- App loads at the approved UAT surface.
- Client can access the app through the approved auth/session path without repo-stored credentials.
- Typed Barbie prompt returns a real backend/model response.
- Reminder or task-style request is tested through the current app path.
- In-app reminder/task visibility is checked where available.
- Voice/mic is tested if available, but typed fallback remains acceptable unless owner says voice is mandatory.
- Gmail send remains V2/disabled and is not treated as a UAT blocker.
- Notifications are classified as required, deferred, or watch-only with a clear reason.
- Navigation through the current visible core app surfaces is smoke-tested enough to avoid obvious handoff blockers.

### Known Issues and Deferrals

- Known issues are listed without minimizing them.
- Notifications are explicitly classified as blocking or deferrable.
- FlutterFlow, native packaging, final production release, Telegram, Gmail send, and broad deploy work are classified as out of scope unless separately approved.
- Anonymous auth/client auth posture is identified as UAT-only, production-ready, or unresolved.

### Client Feedback and Approval

- The client report-back checklist is defined.
- The bug/feedback capture destination is recorded or explicitly left as an owner-required placeholder.
- V1 Beta approval criteria are defined.
- Blocker vs non-blocker issue categories are defined.
- The sprint states who can approve movement into V1 Beta testing, or records the approver as unresolved.

### Guardrails

- No runtime/source files are changed.
- No Firebase deploy or settings changes are made.
- No FlutterFlow changes are made.
- No native build/package changes are made.
- No credentials or secret values are exposed.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains untouched and absent if absent.
- No production release is performed or implied.

---

## 4. Codex Handoff Prompt

```markdown
You are Codex working in `/Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice`.

Apply Sprint 060: `060-client-uat-readiness-gate`.

Sprint goal:

Prepare a controlled client UAT readiness gate now that Sprint 059 passed and the Barbie backend/model path is proven.

Sprint 059 proof:

`typed prompt -> askBarbie() -> ensureBarbieAuth() -> Firebase callable -> chatWithBarbie -> real backend/model response -> visible Barbie reply`

Important:

- Docs/planning first.
- No runtime/source changes.
- No deployment.
- No Firebase setting changes.
- No FlutterFlow changes.
- No native build/package changes.
- No credential exposure.
- Do not create or touch `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not stage, commit, or push unless explicitly approved later.

Before editing:

1. Read `planning/STATE.md`.
2. Read `planning/DECISIONS.md`.
3. Read `planning/RISKS.md`.
4. Read `planning/QUESTIONS.md`.
5. Read `docs/VALIDATION.md`.
6. Read `planning/sprints/059-rerun-barbie-backend-smoke-after-auth-unblock/acceptance.md`.
7. Confirm Sprint 059 is recorded as `PASS`.

Create/update only the planning/docs files needed:

- `planning/STATE.md`
- `planning/DECISIONS.md`, if decisions change
- `planning/RISKS.md`, if risks change
- `planning/QUESTIONS.md`, if questions change
- `docs/ARCHITECTURE.md`, only if architecture changes
- `docs/API.md`, only if interfaces/contracts change
- `docs/VALIDATION.md`
- `planning/sprints/060-client-uat-readiness-gate/requirements.md`
- `planning/sprints/060-client-uat-readiness-gate/blueprint.md`
- `planning/sprints/060-client-uat-readiness-gate/acceptance.md`
- `planning/sprints/060-client-uat-readiness-gate/handoff-prompt.md`

Sprint 060 must answer:

1. Can the client safely test the current app?
2. What exact app surface/link/path should the client use for UAT?
3. Are we using the current UI for UAT, not FlutterFlow yet?
4. What core workflows must be tested before client handoff?
5. What known issues remain?
6. Are notifications blocking UAT, or can they be deferred to a later version?
7. What should the client report back?
8. Where should bugs/feedback be captured?
9. What counts as approval for V1 Beta testing?
10. What must not happen yet, including deploys, FlutterFlow migration, native packaging, or production release without approval?

Default MVP boundary unless owner-approved repo evidence says otherwise:

- Use the current working UI for UAT readiness.
- Do not move to FlutterFlow in this sprint.
- Do not package iPhone/native builds in this sprint.
- Do not deploy or change Firebase settings.
- Do not treat this as final release.
- Treat this as controlled Client Test Version / V1 Beta readiness.

Stop after applying the planning/docs pack and report:

- Files changed.
- UAT readiness recommendation.
- Exact UAT surface/link/path or unresolved owner action.
- Current UI vs FlutterFlow decision.
- Required core workflows.
- Known issues and notification status.
- Client report-back and bug/feedback capture instructions.
- V1 Beta approval criteria.
- Scope guard confirmation.
```

---

## 5. Proposed File Contents for Later Application

The following sections are the intended contents for the later pack application step. They are included here so the Builder can apply the pack without guessing.

### `planning/sprints/060-client-uat-readiness-gate/requirements.md`

```markdown
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
```

### `planning/sprints/060-client-uat-readiness-gate/blueprint.md`

```markdown
# Sprint 060 Blueprint - Client UAT Readiness Gate

## Start Checkpoint

Read:

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/059-rerun-barbie-backend-smoke-after-auth-unblock/acceptance.md`

Confirm Sprint 059 is recorded as `PASS` before continuing.

## Implementation Sequence

1. Capture `git status --branch --short`.
2. Confirm `references/flutterflow/sprint-009/ceo-briefing.png` is not touched.
3. Create Sprint 060 sprint folder and four required sprint files.
4. Update `planning/STATE.md` with Sprint 060 active UAT readiness posture.
5. Update `planning/DECISIONS.md` only for changed or newly clarified decisions.
6. Update `planning/RISKS.md` only for new/changed UAT risks.
7. Update `planning/QUESTIONS.md` with Sprint 060 readiness questions and known answers.
8. Update `docs/VALIDATION.md` with Sprint 060 UAT validation rules.
9. Do not update `docs/ARCHITECTURE.md` unless an architecture change is recorded.
10. Do not update `docs/API.md` unless an API/interface contract change is recorded.
11. Run docs/planning validation checks.
12. Report UAT readiness recommendation and any unresolved owner actions.

## Recommended State Update

Record:

- Sprint 060 is active.
- Sprint 059 backend/model smoke passed.
- Client UAT is now a controlled readiness decision, not automatically approved.
- Current working UI is the default UAT candidate surface.
- Exact UAT surface/link/path must be confirmed before client handoff.
- FlutterFlow is deferred for this sprint.
- Native/iPhone packaging is deferred for this sprint.
- Production release remains blocked without explicit approval.

## Recommended Decision Updates

Add only if not already present:

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-06-08 | Sprint 060 uses the current working UI as the default controlled UAT candidate surface. | Sprint 059 proved the current UI can reach the real Barbie backend/model path. | Client UAT readiness can be evaluated without waiting for FlutterFlow or native packaging. |
| 2026-06-08 | FlutterFlow is not the Sprint 060 UAT surface. | The current backend/model path is proven in the React/Vite UI, while FlutterFlow migration remains unapproved for this sprint. | Do not migrate, export, or modify FlutterFlow before controlled UAT readiness is decided. |
| 2026-06-08 | Native/iPhone packaging is deferred beyond Sprint 060. | Web workflow proof should precede packaging and device-specific validation. | Do not run native builds, Capacitor packaging, TestFlight, or app-store work in this sprint. |
| 2026-06-08 | V1 Beta approval requires an explicit owner/go-live approver decision after UAT surface, workflows, feedback channel, and known issues are recorded. | Backend smoke passing is necessary but not sufficient for client beta approval. | No final release or broad client access without a separate approval gate. |

## Recommended Risk Updates

Add a Sprint 060 risk section:

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Client UAT may be mistaken for final production release. | Medium | High | Label the sprint as controlled Client Test Version / V1 Beta readiness and keep production release blocked. | Active |
| Exact UAT surface/link/path may remain unresolved after backend smoke passes. | Medium | High | Require owner-approved UAT URL/path before client handoff. | Active |
| Notifications may be treated as a blocker without a clear V1 Beta decision. | Medium | Medium | Classify notifications as blocking, deferred, or watch-only with rationale before handoff. | Active |
| Feedback may be lost or scattered. | Medium | Medium | Require a bug/feedback capture channel before client handoff. | Active |
| Anonymous auth may support UAT smoke but still be unresolved for production auth posture. | Medium | High | Record auth posture as UAT-only, production-ready, or unresolved. | Active |

## Recommended Questions Update

Add:

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| Can the client safely test the current app? | Architect / Owner | Before client handoff | Pending Sprint 060 decision | Sprint 059 removed the backend/model smoke blocker, but UAT surface, workflows, feedback channel, and approver must be confirmed. |
| What exact app surface/link/path should the client use for UAT? | Owner / Builder | Before client handoff | Open | Do not invent. Local `127.0.0.1` smoke evidence is not a client share link. |
| Are we using the current UI for UAT, not FlutterFlow yet? | Architect / Owner | Sprint 060 | Recommended yes | Current UI is the default UAT candidate because Sprint 059 proved its backend/model path. |
| What core workflows must be tested before client handoff? | Architect / Owner | Sprint 060 | Drafted | App load, auth/session, typed Barbie response, reminder/task request, navigation, typed fallback, and notification status. |
| Are notifications blocking UAT? | Architect / Owner | Sprint 060 | Open | Decide whether notifications are required for V1 Beta or can be deferred/watch-only. |
| Where should bugs/feedback be captured? | Owner | Before client handoff | Open | Choose a single channel before sharing with client. |
| Who approves V1 Beta testing? | Owner | Before client handoff | Open | Record named approver or approval role. |

## Validation Commands

Use docs-safe validation:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
rg -n "060-client-uat-readiness-gate|Client UAT|V1 Beta|current working UI|FlutterFlow|native|deploy|feedback|notifications" planning docs
```

Optional normal app validation may be run only if the owner requests runtime proof during the later Sprint 060 application. The Architect Pack application itself does not authorize runtime/source edits or deployment.

## Closeout Recommendation Labels

Use exactly one:

- `CLIENT UAT READY`
- `CLIENT UAT READY WITH DEFERRALS`
- `HOLD`

Use `CLIENT UAT READY` only if all required UAT logistics and core workflow gates are confirmed with no unresolved blockers.

Use `CLIENT UAT READY WITH DEFERRALS` if the current app can be safely tested, the exact UAT surface and feedback channel are approved, and remaining items are documented non-blocking deferrals.

Use `HOLD` if exact UAT access, approver, feedback channel, auth posture, or a core workflow remains unresolved.
```

### `planning/sprints/060-client-uat-readiness-gate/acceptance.md`

```markdown
# Sprint 060 Acceptance - Client UAT Readiness Gate

## Required Files

- [ ] `planning/sprints/060-client-uat-readiness-gate/requirements.md` exists.
- [ ] `planning/sprints/060-client-uat-readiness-gate/blueprint.md` exists.
- [ ] `planning/sprints/060-client-uat-readiness-gate/acceptance.md` exists.
- [ ] `planning/sprints/060-client-uat-readiness-gate/handoff-prompt.md` exists.
- [ ] `planning/STATE.md` is updated for Sprint 060.
- [ ] `docs/VALIDATION.md` includes Sprint 060 validation.

## UAT Readiness Answers

- [ ] The sprint answers whether the client can safely test the current app.
- [ ] The exact UAT surface/link/path is recorded, or unresolved owner action is explicitly documented.
- [ ] Current UI vs FlutterFlow decision is recorded.
- [ ] Current UI remains the default UAT candidate unless a different approved decision is recorded.
- [ ] FlutterFlow is not moved forward in this sprint.
- [ ] Native/iPhone packaging is not moved forward in this sprint.
- [ ] Sprint 060 is classified as controlled Client Test Version / V1 Beta readiness, not final release.

## Core Workflow Gate

- [ ] App load workflow is included in UAT checklist.
- [ ] Auth/session path is included in UAT checklist.
- [ ] Typed Barbie backend/model response is included in UAT checklist.
- [ ] Reminder/task-style request is included in UAT checklist.
- [ ] In-app reminder/task visibility is included where available.
- [ ] Voice/mic is either tested or explicitly deferred with typed fallback accepted.
- [ ] Core navigation smoke is included.
- [ ] Gmail send remains V2/disabled and non-blocking.
- [ ] Notification status is classified as blocker, deferral, or watch-only.

## Known Issues, Feedback, and Approval

- [ ] Known issues are listed.
- [ ] Client report-back checklist is defined.
- [ ] Bug/feedback capture destination is recorded or owner action is explicitly required.
- [ ] Blocker vs non-blocker definitions are documented.
- [ ] V1 Beta approval criteria are documented.
- [ ] V1 Beta approver is recorded or owner action is explicitly required.

## Guardrails

- [ ] No runtime/source files changed.
- [ ] No deploy was run.
- [ ] No Firebase settings were changed.
- [ ] No FlutterFlow changes were made.
- [ ] No native build/package changes were made.
- [ ] No credentials or secrets were exposed.
- [ ] `references/flutterflow/sprint-009/ceo-briefing.png` was not created or touched.
- [ ] No production release was performed or implied.

## Validation Evidence

- [ ] `git status --branch --short` reviewed.
- [ ] `git diff --check` passes.
- [ ] `test ! -f references/flutterflow/sprint-009/ceo-briefing.png` passes.
- [ ] `rg` evidence confirms Sprint 060 docs/planning references exist.

## Final Recommendation

Record exactly one:

- [ ] `CLIENT UAT READY`
- [ ] `CLIENT UAT READY WITH DEFERRALS`
- [ ] `HOLD`

Rationale:

```text
<record final Sprint 060 rationale here>
```
```

### `planning/sprints/060-client-uat-readiness-gate/handoff-prompt.md`

```markdown
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
```

### `docs/VALIDATION.md` Sprint 060 Section

```markdown
## Sprint 060 - Client UAT Readiness Gate

Sprint 060 validates controlled Client Test Version / V1 Beta readiness after Sprint 059 proved the Barbie backend/model path.

Sprint 059 proof:

```text
typed prompt -> askBarbie() -> ensureBarbieAuth() -> Firebase callable -> chatWithBarbie -> real backend/model response -> visible Barbie reply
```

Sprint 060 does not deploy, modify Firebase settings, move to FlutterFlow, package native builds, or perform final production release.

### Required Docs-Safe Checks

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
rg -n "060-client-uat-readiness-gate|Client UAT|V1 Beta|current working UI|FlutterFlow|native|deploy|feedback|notifications" planning docs
```

### UAT Readiness Matrix

| Gate | Required Answer | Status | Evidence / Notes |
|---|---|---|---|
| Client can safely test current app | Yes / No / With deferrals | Pending | Sprint 060 must decide. |
| Exact UAT surface/link/path | Approved URL/path or owner action | Pending | Do not invent a client link. |
| Current UI vs FlutterFlow | Current UI unless approved otherwise | Pending | Sprint 059 proved current UI backend/model path. |
| Core workflows | Listed and testable | Pending | Include app load, auth/session, typed Barbie, reminder/task, navigation, and fallback. |
| Known issues | Listed | Pending | Include non-blocking deferrals. |
| Notifications | Blocking / deferred / watch-only | Pending | Must be explicit. |
| Client report-back | Checklist defined | Pending | Include device/browser, typed response, reminder/task behavior, confusion, errors, top changes. |
| Bug/feedback capture | Approved channel or owner action | Pending | Required before client handoff. |
| V1 Beta approval | Approver and criteria recorded | Pending | Required before beta testing. |
| Forbidden actions | Deploy, Firebase changes, FlutterFlow, native packaging, production release | Pending | Must remain not done. |

### Core Workflow Checklist

- App opens at approved UAT surface.
- Approved auth/session path works without repo-stored credentials.
- Typed Barbie prompt returns a real backend/model response.
- Reminder or task-style request is tested.
- In-app reminder/task visibility is checked where available.
- Voice/mic is tested if available, or deferred with typed fallback accepted.
- Core navigation is smoke-tested.
- Gmail send remains V2/disabled and non-blocking.
- Notification status is explicitly classified.

### Client Report-Back Checklist

Client should report:

- Device and browser used.
- Whether app opened successfully.
- Whether typed Barbie prompt worked.
- Whether Barbie response was useful.
- Whether reminder/task request behaved as expected.
- Any confusing labels, missing information, or broken screens.
- Notification behavior, if any.
- Screenshots or exact error wording where useful.
- Top three changes needed before broader beta.

Do not ask the client to send passwords, tokens, API keys, or secret values.

### Approval Rule

V1 Beta testing is approved only if:

- Exact UAT surface/link/path is approved.
- First tester is identified.
- Bug/feedback channel is approved.
- Core workflow gate passes or deferrals are explicitly accepted.
- Notifications are validated or explicitly deferred.
- Known issues are listed.
- Owner/go-live approver explicitly approves controlled V1 Beta testing.

### Sprint 060 Guardrails

- No runtime/source changes.
- No deploy.
- No Firebase setting changes.
- No FlutterFlow changes.
- No native build/package changes.
- No credential exposure.
- No production release.
- Do not create or touch `references/flutterflow/sprint-009/ceo-briefing.png`.
```
```
