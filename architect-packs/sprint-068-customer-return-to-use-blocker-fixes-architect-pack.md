# Sprint 068 Architect Pack — Customer Return-to-Use Blocker Fixes

**Project:** TrinaOS / Barbie current app return-to-use
**Sprint:** 068
**Sprint folder:** `planning/sprints/068-customer-return-to-use-blocker-fixes/`
**Pack status:** Architect-created, ready for Builder to apply to project folder
**Created:** 2026-06-08
**Architect Layer:** ChatGPT
**Builder Layer:** Codex

---

## 1. Architect Intent

Sprint 067 proved that the current app is close to being usable again, but it did **not** approve client return-to-use.

Sprint 068 exists to fix or close only the blockers that prevent the customer from using the current app again.

This is not a redesign sprint.

This is not a Flutter migration sprint.

This is not a broad product cleanup sprint.

This is a narrow return-to-use unblock sprint for the current deployed/web app path.

The final Sprint 068 result must be one of:

```text
APPROVE - give current app back to client
```

or

```text
HOLD - blocker remains after Sprint 068
```

---

## 2. Sprint 067 Evidence Carried Forward

Sprint 067 found:

- Customer URL/path candidates:
  - `https://barbie-92edc.web.app/`
  - `https://barbie-92edc.firebaseapp.com/`
- Both deployed URLs returned `HTTP/2 200`.
- Deployed/current match is blocked:
  - Deployed HTML references `index-D7N8pcgM.js` and `index-jzssNT7p.css`.
  - Local `dist` references `index-CaS41pG9.js` and `index-DjT4yD5I.css`.
- Access/login partially passed:
  - Deployed UI rendered.
  - Console logged cloud connection with anonymous UID.
  - UAT/production auth posture is not owner-approved.
- Typed question/backend answer passed:
  - `What should I focus on today?` reached `chatWithBarbie`.
  - Callable returned `200`.
  - UI showed a non-mocked Barbie answer.
- Reminder creation passed:
  - `Remind me in 1 minute to check the door` returned confirmation.
- Due reminder behavior partially passed:
  - In-app reminder appeared with `DISMISS` and `SNOOZE 5 MINUTES`.
  - Browser/native push remains unproven because notification permission was `denied`.
- Voice input is blocked:
  - Speech recognition exists.
  - Mic test returned permission denial.
- Feedback path is blocked:
  - No visible deployed feedback path or owner-approved feedback channel found.
- First tester is blocked:
  - Not recorded.
- Owner/go-live approval is blocked:
  - Not recorded.

Sprint 067 closed as:

```text
HOLD - fix only the blockers preventing return-to-use
```

---

## 3. Builder Safety Rules

The Builder must not assume launch approval.

The Builder must not broaden this into unrelated fixes.

The Builder must not start by implementing code.

The Builder must first apply this Architect Pack to the project folder as planning/docs files.

After the pack is applied, the Builder must read the Sprint 068 files and summarize the plan before implementation.

### Protected Surfaces

Do not touch unless a later approved Sprint 068 implementation plan explicitly allows it:

- unrelated runtime/source files
- Firebase settings not needed for the approved blocker fix
- deploy configuration not needed for the approved blocker fix
- FlutterFlow files
- native build files
- credentials
- CEO Briefing files
- `docs/API.md`, unless an interface or callable contract changes
- `docs/ARCHITECTURE.md`, unless deployment/runtime architecture changes
- Sprint 064 untracked files

### Deployment Rule

No deploy may happen during the Architect Pack application step.

A deploy may only happen in the later implementation step if Codex first summarizes why deploy is required and receives explicit approval.

---

## 4. Files to Create or Update

Codex should create or update the following files.

### Update

```text
planning/STATE.md
planning/RISKS.md
planning/QUESTIONS.md
docs/VALIDATION.md
```

### Update only if needed

```text
planning/DECISIONS.md
```

Use `planning/DECISIONS.md` only if the repo does not already record these durable decisions:

- Sprint 068 is limited to current app return-to-use blockers.
- Flutter/native packaging is not required before giving the current web app back to the client, unless owner decides otherwise.
- Client UAT approval requires recorded owner approval, not just technical pass evidence.

### Do not update unless a real contract changes

```text
docs/API.md
docs/ARCHITECTURE.md
```

### Create

```text
planning/sprints/068-customer-return-to-use-blocker-fixes/requirements.md
planning/sprints/068-customer-return-to-use-blocker-fixes/blueprint.md
planning/sprints/068-customer-return-to-use-blocker-fixes/acceptance.md
planning/sprints/068-customer-return-to-use-blocker-fixes/handoff-prompt.md
```

---

# File: `planning/STATE.md`

```markdown
# Project State

## Current Sprint

Sprint 068 — Customer Return-to-Use Blocker Fixes

## Current Status

`HOLD - Client UAT / V1 Beta not approved`

Sprint 067 proved the current deployed app can load, connect anonymously, answer typed questions through the backend/model path, create a reminder, and display an in-app due reminder.

Sprint 067 did not approve return-to-use because several client-facing blockers remain.

## Sprint 068 Goal

Fix or close only the blockers that prevent giving the current app back to the client for limited return-to-use.

Required blocker areas:

1. Official customer URL/path.
2. Deployed app version mismatch.
3. Owner-approved access/login posture.
4. Browser/native push proof or clear in-app-only reminder limitation.
5. Mic/voice permission proof or clear voice-not-ready limitation.
6. Feedback path.
7. First tester assignment.
8. Owner/go-live approval record.

## Recently Completed

- Sprint 067 customer return-to-use proof completed as HOLD.
- Typed question/backend/model path passed.
- Reminder creation passed.
- In-app due reminder behavior passed.
- Deployed app loads at Firebase Hosting URLs.

## Next Action

Apply Sprint 068 Architect Pack, then have Codex read Sprint 068 files and summarize the implementation plan before changing runtime/source or deployment behavior.

## Blockers

- Deployed app hash/version does not match local `dist` hash/version.
- Official client URL/path needs owner approval.
- Customer auth/access posture needs owner approval.
- Browser/native push notification behavior is unproven.
- Voice/mic path is unproven because mic permission was denied.
- Feedback path is missing or not owner-approved.
- First tester is not recorded.
- Owner/go-live approval is not recorded.
```

---

# File: `planning/RISKS.md`

```markdown
# Risks

## Active Risks

| Risk | Impact | Mitigation | Status |
|---|---|---|---|
| Deployed app may not match current repo output. | Client may use stale behavior or old UI. | Prove deployed asset hashes, deploy current build if approved, then rerun smoke proof. | Active |
| Client URL/path may be unclear. | Client may receive the wrong link or unsupported path. | Record the official customer URL and owner approval before go-live. | Active |
| Anonymous auth posture may be inappropriate for UAT/production. | Client data/access expectations may be unclear. | Record owner-approved access path before release. | Active |
| Reminder proof may only cover in-app due reminders. | Client may expect native/browser push that does not work. | Prove browser/native push or document in-app-only limitation before release. | Active |
| Mic/voice is blocked by permission. | Client may expect voice input but cannot use it. | Test with permission allowed or mark voice as not ready for return-to-use. | Active |
| No feedback path is available. | Client issues may come back through scattered texts/calls. | Add visible feedback path or record owner-approved external feedback channel. | Active |
| First tester and go-live approver are not recorded. | Release decision may be unclear. | Record first tester and owner/go-live approver before approval. | Active |
| Sprint may expand into redesign, Flutter migration, or native packaging. | Delays return-to-use and increases risk. | Keep Sprint 068 limited to blockers preventing current app return-to-use. | Active |

## Risk Control Rule

Sprint 068 should prefer the smallest safe unblock path.

Do not introduce Flutter, native packaging, dashboard redesign, CRM features, or broad app cleanup into this sprint.
```

---

# File: `planning/QUESTIONS.md`

```markdown
# Questions

## Open Questions for Sprint 068

| Question | Needed For | Owner / Source | Status |
|---|---|---|---|
| Which URL should the client use: `https://barbie-92edc.web.app/`, `https://barbie-92edc.firebaseapp.com/`, or another custom URL? | Customer return-to-use instructions | Owner | Open |
| Should the current deployed app be updated to match the current repo build before client use? | Version match / release safety | Owner + Builder evidence | Open |
| Is anonymous access acceptable for this client return-to-use pass? | Access/login approval | Owner | Open |
| Should reminders be approved with in-app due reminders only, or must browser/native push work before client use? | Reminder behavior expectation | Owner | Open |
| Should voice input be included in the client return-to-use release, or marked as not ready? | Client expectations | Owner | Open |
| What is the approved feedback path for this client? | UAT issue intake | Owner | Open |
| Who is the first tester? | UAT ownership | Owner | Open |
| Who can give final go-live approval? | Release approval | Owner | Open |

## Sprint 068 Closeout Requirement

Before Sprint 068 can recommend approval, each question above must be answered or explicitly marked as not required for return-to-use.
```

---

# File: `docs/VALIDATION.md`

```markdown
# Validation

## Sprint 068 — Customer Return-to-Use Blocker Fixes

Sprint 068 must validate whether the current app can be safely returned to the client after Sprint 067 blockers are fixed or explicitly limited.

## Required Validation Areas

### 1. Official Customer URL

Record:

- URL tested.
- Whether the URL returned success.
- Whether this is the owner-approved customer URL.

### 2. Deployed Version Match

Record:

- Deployed JS/CSS asset names.
- Local build/dist JS/CSS asset names.
- Whether they match.
- If not matching, whether a deploy was approved and performed.
- Post-deploy asset names, if applicable.

### 3. Access/Login

Record:

- Access method used.
- Anonymous UID or user identity evidence, without exposing secrets.
- Whether owner approved this access posture for client return-to-use.

### 4. Typed Question and Backend/Model Answer

Run a typed question smoke test.

Record:

- Prompt used.
- Whether backend callable was reached.
- Whether response was non-mocked.
- HTTP/function result evidence.

### 5. Reminder Creation

Run a reminder creation smoke test.

Record:

- Reminder prompt used.
- Confirmation text.
- Whether reminder record/behavior appeared as expected.

### 6. Due Reminder Behavior

Record:

- Whether in-app due reminder appears.
- Whether dismiss works.
- Whether snooze works, if tested.
- Browser/native notification permission state.
- Whether browser/native push is proven or explicitly out of scope for return-to-use.

### 7. Voice Input

Record:

- Browser used.
- Mic permission state.
- Whether speech recognition activates.
- Whether spoken input reaches the app.
- Whether voice is approved for return-to-use or marked not ready.

### 8. Feedback Path

Record:

- Visible in-app feedback path, if implemented.
- External owner-approved feedback path, if used instead.
- Exact feedback instructions to give the client.

### 9. First Tester and Go-Live Approval

Record:

- First tester name or role.
- Go-live approver name or role.
- Approval status.
- Date approval was recorded.

## Required Commands

Before closeout, run:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

If runtime/source or deploy changes are approved in the implementation step, also run the relevant app build/test/smoke commands documented in the active sprint closeout.

## Sprint 068 Final Recommendation Format

Sprint 068 closeout must use exactly one of:

```text
APPROVE - give current app back to client
```

or

```text
HOLD - blocker remains after Sprint 068
```

Approval is allowed only if:

- Official customer URL is recorded.
- Deployed app version is proven current or owner-approved.
- Access/login posture is owner-approved.
- Typed backend/model answer path passes.
- Reminder creation passes.
- Due reminder behavior is proven or limitation is owner-approved.
- Voice status is proven or limitation is owner-approved.
- Feedback path is recorded and owner-approved.
- First tester is recorded.
- Owner/go-live approval is recorded.
```

---

# File: `planning/DECISIONS.md`

```markdown
# Decisions

## Decision Candidates for Sprint 068

Add these only if they are not already captured in the project decision log.

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-06-08 | Sprint 068 is limited to current app return-to-use blockers. | Sprint 067 proved the core app path is close, but not approved for client use. | Builder must avoid broad redesign, Flutter migration, and unrelated cleanup. |
| 2026-06-08 | Flutter/native packaging is not required before limited current web app return-to-use unless the owner decides otherwise. | The immediate business need is to let the client use the working current app again. | Flutter/native work remains separate from the web app return-to-use gate. |
| 2026-06-08 | Client UAT/go-live approval requires owner approval recorded in planning/docs, not just technical smoke success. | Technical pass does not equal client release approval. | Future release gates must record both evidence and owner approval. |
```

---

# File: `planning/sprints/068-customer-return-to-use-blocker-fixes/requirements.md`

```markdown
# Sprint 068 Requirements — Customer Return-to-Use Blocker Fixes

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
```

---

# File: `planning/sprints/068-customer-return-to-use-blocker-fixes/blueprint.md`

```markdown
# Sprint 068 Blueprint — Customer Return-to-Use Blocker Fixes

## Builder Workflow

### Step 1 — Read Before Changing

Read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/068-customer-return-to-use-blocker-fixes/requirements.md`
- `planning/sprints/068-customer-return-to-use-blocker-fixes/blueprint.md`
- `planning/sprints/068-customer-return-to-use-blocker-fixes/acceptance.md`

Then summarize the implementation plan before making changes.

Do not implement until owner approves the summary.

### Step 2 — Establish Current Repo State

Run:

```bash
git status --branch --short
```

Confirm:

- Sprint 067 is pushed.
- Sprint 064 untracked files remain untouched.
- Working tree status is understood before changes.

### Step 3 — Prove Official URL and Deployed Version

Check deployed customer URLs:

- `https://barbie-92edc.web.app/`
- `https://barbie-92edc.firebaseapp.com/`

Record:

- HTTP status.
- Deployed JS/CSS asset names.
- Local `dist` JS/CSS asset names.
- Whether deployed matches local.

If mismatch remains, propose one of these options before deploy:

1. Deploy current local build to Firebase Hosting.
2. Keep current deployed app if owner approves it despite hash mismatch.
3. Hold release because deployed/current version cannot be proven.

Do not deploy without explicit approval.

### Step 4 — Validate Access/Login Posture

Check current deployed login/access behavior.

Record:

- Whether anonymous auth is used.
- Whether client can access without credentials.
- Any visible login requirements.
- Whether owner approves this path for limited return-to-use.

If owner approval is not available, keep status HOLD.

### Step 5 — Re-run Core Customer Workflow Smoke

Use the owner-approved customer URL.

Validate:

1. App loads.
2. Typed question reaches backend/model.
3. Non-mocked answer appears.
4. Reminder creation works.
5. In-app due reminder appears.
6. Dismiss and/or snooze behavior works if available.

Record evidence in `docs/VALIDATION.md` and Sprint 068 acceptance notes.

### Step 6 — Resolve Reminder Notification Expectation

Check browser notification permission and native/browser push behavior.

If push cannot be proven, ask owner to approve one of these positions:

- Return-to-use is allowed with in-app due reminders only.
- Return-to-use is blocked until browser/native push works.

Record the decision or unresolved question.

### Step 7 — Resolve Voice Expectation

Test mic/voice path where possible.

If mic permission is denied, document:

- Browser.
- Permission state.
- Whether permission can be reset locally.
- Whether voice should be included in return-to-use or marked not ready.

Do not block typed question/reminder return-to-use on voice unless owner requires voice for go-live.

### Step 8 — Add or Confirm Feedback Path

Preferred minimal options:

- Visible in-app feedback link/button/instruction, if small runtime change is approved.
- Owner-approved external path such as email/text form, if no code change is desired.

Record exact client instruction.

Do not build a full feedback system.

### Step 9 — Record First Tester and Owner Approval

Record:

- First tester name or role.
- Go-live approver name or role.
- Approval status.
- Date.

If owner approval is missing, final recommendation must remain HOLD.

### Step 10 — Closeout

Update:

- `planning/STATE.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- Sprint 068 files as needed

Run required validation:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

If runtime/source changes were approved, also run relevant build/smoke checks and document them.

## Expected File Touches

Likely docs/planning files:

- `planning/STATE.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- Sprint 068 files

Possible runtime/source files only if explicitly approved after summary:

- Minimal feedback path files, if an in-app feedback link is chosen.
- Deployment/build files only if needed and approved for deployed version mismatch.

## Do Not Touch

- Sprint 064 untracked files.
- FlutterFlow files.
- Native build files.
- Credentials.
- CEO Briefing files.
- Broad runtime/source unrelated to blockers.
```

---

# File: `planning/sprints/068-customer-return-to-use-blocker-fixes/acceptance.md`

```markdown
# Sprint 068 Acceptance — Customer Return-to-Use Blocker Fixes

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
```

---

# File: `planning/sprints/068-customer-return-to-use-blocker-fixes/handoff-prompt.md`

```markdown
# Sprint 068 Handoff Prompt — Customer Return-to-Use Blocker Fixes

Use this prompt with Codex after the Sprint 068 Architect Pack has been applied to the project folder.

```text
Read the following files before making changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/068-customer-return-to-use-blocker-fixes/requirements.md
- planning/sprints/068-customer-return-to-use-blocker-fixes/blueprint.md
- planning/sprints/068-customer-return-to-use-blocker-fixes/acceptance.md
- planning/sprints/068-customer-return-to-use-blocker-fixes/handoff-prompt.md

Then summarize:

1. What Sprint 068 is supposed to accomplish.
2. Which files you expect to modify.
3. What tests or validation steps you will run.
4. Whether you believe runtime/source changes are needed.
5. Whether you believe a deploy is needed.
6. Any blockers or ambiguities.
7. How you will avoid touching protected surfaces.

Important rules:

- Do not start implementation yet.
- Do not modify files yet.
- Do not deploy.
- Do not stage.
- Do not commit.
- Do not push.
- Do not touch Sprint 064 untracked files.
- Do not touch FlutterFlow files.
- Do not touch native build files.
- Do not touch credentials.
- Do not touch CEO Briefing files.
- Do not touch docs/API.md or docs/ARCHITECTURE.md unless your summary explains why a real contract or architecture change is required and I approve it.

Only summarize the plan first and wait for approval.
```
```

---

## 5. Codex Apply-Pack Prompt

Use this prompt first to apply the Architect Pack to the project folder.

```text
Apply the Sprint 068 Architect Pack to the project folder as docs/planning only.

Create or update these files from the pack:

- planning/STATE.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/DECISIONS.md only if the decision candidates are not already recorded
- planning/sprints/068-customer-return-to-use-blocker-fixes/requirements.md
- planning/sprints/068-customer-return-to-use-blocker-fixes/blueprint.md
- planning/sprints/068-customer-return-to-use-blocker-fixes/acceptance.md
- planning/sprints/068-customer-return-to-use-blocker-fixes/handoff-prompt.md

Rules:

- Do not implement runtime/source changes.
- Do not deploy.
- Do not stage.
- Do not commit.
- Do not push.
- Do not touch Sprint 064 untracked files.
- Do not touch FlutterFlow files.
- Do not touch native build files.
- Do not touch credentials.
- Do not touch CEO Briefing files.
- Do not touch docs/API.md or docs/ARCHITECTURE.md unless the pack explicitly requires it. This pack does not currently require it.

After applying, run:

- git status --branch --short
- git diff --check
- test ! -f references/flutterflow/sprint-009/ceo-briefing.png

Then report:

1. Files changed/created.
2. Whether planning/DECISIONS.md was updated and why.
3. Validation command results.
4. Final git status.
5. Confirmation that Client UAT / V1 Beta remains HOLD.
6. Confirmation that no runtime/source, deploy, Firebase settings, FlutterFlow, native build, credentials, CEO Briefing, docs/API.md, or docs/ARCHITECTURE.md files were changed.
7. Confirmation that Sprint 064 untracked files remain untouched.
```

---

## 6. After Apply-Pack: Next Required Step

After Codex applies this pack, do not tell Codex to implement yet.

Next, give Codex the Sprint 068 handoff prompt so it reads the sprint files and summarizes the implementation plan before code changes.

This preserves the Architect / Builder workflow: Architect Pack first, Builder plan summary second, implementation third only after approval.
