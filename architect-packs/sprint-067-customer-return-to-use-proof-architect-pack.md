# Sprint 067 Architect Pack — Customer Return-to-Use Proof

**Project:** TrinaOS Voice / Barbie current app return-to-use
**Sprint:** 067 — Customer Return-to-Use Proof
**Created:** 2026-06-08
**Architect Layer:** ChatGPT
**Builder Layer:** Codex or equivalent repo-aware Builder
**Status:** Architect Pack ready for Builder application

---

## 0. Pack Purpose

Sprint 067 exists to prove whether the customer can safely use the current app again.

Sprint 066 closed the release gate as `HOLD - Client UAT / V1 Beta not approved` because the evidence was still local-heavy and incomplete. Sprint 067 should convert that uncertainty into a concrete return-to-use decision.

The goal is not to redesign the product.

The goal is to answer one operational question:

> Can the client use the current app now for the core jobs she cares about: ask questions, get useful answers, set reminders, and receive reminder notifications?

---

## 1. Architect-Facing Requirements

### 1.1 Business Goal

Give the owner a clear, evidence-backed recommendation on whether the current app can be handed back to the client.

The client’s immediate need is narrow:

- She needs to open the app.
- She needs to ask questions.
- She needs the app/model to answer.
- She needs to create reminders/events.
- She needs the app to notify her when reminders are due.
- Voice input should be tested if it exists in the current path.
- A feedback path should exist so the client can report problems quickly.

### 1.2 Current Decision State

Client UAT / V1 Beta remains:

`HOLD - Client UAT / V1 Beta not approved`

Sprint 067 may change that only if acceptance criteria are satisfied.

### 1.3 Sprint 067 Outcome Options

At the end of this sprint, the Builder must recommend exactly one of these:

1. `APPROVE - give current app back to client`
2. `HOLD - fix only the blockers preventing return-to-use`

No vague middle state.

### 1.4 In Scope

Sprint 067 is a proof sprint. It may include safe validation, documentation, and small test-support updates only if needed to prove the release path.

In scope:

- Confirm exact customer URL/path.
- Confirm whether deployed app matches the intended current app version.
- Confirm login/access path.
- Test typed question answering through the real customer path.
- Test reminder creation through the real customer path.
- Test reminder notification delivery or document the exact notification limitation.
- Test live voice input if present and accessible.
- Confirm feedback path for client issues.
- Produce owner approval checklist.
- Update docs/planning with evidence.

### 1.5 Out of Scope

Do not expand this into a rebuild.

Out of scope unless separately approved:

- New UI redesign.
- FlutterFlow migration.
- Native iOS packaging.
- Production SaaS hardening.
- New CRM features.
- New invoicing features.
- Database redesign.
- Broad auth redesign.
- Broad notification redesign.
- Large runtime refactor.
- Deploying without explicit owner approval.

### 1.6 Protected Surfaces

The Builder must not touch these unless the Architect/user explicitly approves a new implementation scope:

- Firebase credentials or secrets.
- Private keys.
- FlutterFlow project changes.
- Native build files.
- CEO Briefing files.
- unrelated Sprint 064 untracked files.
- `docs/API.md`, unless a real interface/contract change is required and approved.

### 1.7 Known Context From Prior Sprints

Prior sprint evidence suggests:

- Local app path worked at `http://127.0.0.1:3000/`.
- Likely deployed Firebase path was `https://barbie-92edc.web.app/`.
- Typed Send reached backend/model locally.
- Reminder creation and in-app due reminder worked locally.
- Client release remained blocked by uncertain deployed/current version match, feedback path, auth/access posture, push/notification proof, voice proof, first tester, and owner approval.

The Builder must verify current facts from the repo and runtime, not assume prior notes are still true.

---

## 2. Builder-Facing Implementation Plan

### 2.1 Files to Create

Create the Sprint 067 folder and files:

```text
planning/sprints/067-customer-return-to-use-proof/requirements.md
planning/sprints/067-customer-return-to-use-proof/blueprint.md
planning/sprints/067-customer-return-to-use-proof/acceptance.md
planning/sprints/067-customer-return-to-use-proof/handoff-prompt.md
```

Create or update:

```text
architect-packs/sprint-067-customer-return-to-use-proof-architect-pack.md
```

### 2.2 Files to Update

Update as needed:

```text
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/VALIDATION.md
```

Update only if findings require it:

```text
docs/ARCHITECTURE.md
```

Avoid `docs/API.md` unless the sprint discovers and documents a true interface/contract change.

### 2.3 Validation Procedure

The Builder should perform a return-to-use proof using the safest available path.

Recommended sequence:

1. Inspect repo state.
   - `git status --branch --short`
   - confirm Sprint 064 untracked files remain separate and untouched

2. Read the active planning files.
   - `AGENTS.md`
   - `planning/STATE.md`
   - `planning/DECISIONS.md`
   - `planning/RISKS.md`
   - `planning/QUESTIONS.md`
   - `docs/VALIDATION.md`
   - Sprint 067 files after creation

3. Identify the current customer URL.
   - Search repo docs/config for Firebase Hosting URL, deployed URL, or app entry point.
   - Do not assume local path equals customer path.

4. Identify current deployed version evidence.
   - Check deployment metadata only through safe read-only commands or existing docs.
   - If deploy state cannot be proven, mark this as blocker.

5. Test current app path.
   - Open the customer URL if accessible.
   - If customer URL is unknown, test local path and record that customer path remains unproven.

6. Test core user jobs.
   - App opens.
   - User can access the app.
   - Typed question can be sent.
   - Model/backend returns an answer.
   - Reminder can be created.
   - Reminder due behavior can be observed.
   - Voice input can be tested if present.
   - Feedback path exists or is documented as missing.

7. Record proof in docs.
   - Exact URL tested.
   - Date/time tested.
   - Browser/device tested.
   - What passed.
   - What failed.
   - What could not be proven.
   - Evidence location, screenshots, or logs if already supported by repo workflow.

8. Produce release recommendation.
   - `APPROVE - give current app back to client`
   - or `HOLD - fix only the blockers preventing return-to-use`

### 2.4 Runtime Change Policy

Default mode is validation and documentation.

Small runtime/source edits are allowed only if all are true:

- The issue directly blocks return-to-use.
- The fix is narrow and low-risk.
- The Builder reports the planned file changes before implementing.
- The user approves implementation after the read/summarize checkpoint.

Do not perform broad refactors.

### 2.5 Expected Closeout Report

Builder closeout must report:

- Exact customer URL tested.
- Whether deployed app matches intended current version.
- Login/access result.
- Typed question result.
- Reminder creation result.
- Reminder notification result.
- Voice input result.
- Feedback path result.
- Final recommendation.
- Files changed.
- Validation commands run.
- Protected surfaces confirmation.
- Sprint 064 untracked files confirmation.

---

## 3. Acceptance Criteria

Sprint 067 passes only if all required proof items are documented.

### 3.1 Required Evidence

- [ ] Exact customer URL/path is identified.
- [ ] The tested app path is clearly labeled as deployed customer path, local path, or unknown.
- [ ] App loads successfully on the tested path, or failure is documented.
- [ ] Access/login posture is documented.
- [ ] Typed question answering is tested and result is documented.
- [ ] Backend/model response path is confirmed or blocker is documented.
- [ ] Reminder creation is tested and result is documented.
- [ ] Reminder due behavior is tested and result is documented.
- [ ] Notification path is classified as one of:
  - in-app notification works
  - browser push works
  - native push works
  - not proven
  - not available
- [ ] Voice input is tested if present, or marked not present/not testable.
- [ ] Feedback path is confirmed or marked missing.
- [ ] First tester / owner approver status is documented.
- [ ] Final recommendation is one of the two approved labels.

### 3.2 Approval Rule

Sprint 067 may recommend:

`APPROVE - give current app back to client`

only if:

- Customer URL is known.
- Deployed/current version match is proven enough for owner decision.
- App access works.
- Typed Q&A works.
- Reminder creation works.
- At least one reminder notification path works or the owner explicitly accepts in-app-only reminder behavior.
- Feedback path exists.
- Owner approval checklist is ready.

Otherwise recommend:

`HOLD - fix only the blockers preventing return-to-use`

### 3.3 Validation Commands

At minimum, run:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Run relevant app/test commands only after reading repo docs and confirming the correct workflow.

### 3.4 Protected Surface Criteria

Sprint fails if the Builder touches any protected surface without explicit approval:

- unrelated Sprint 064 untracked files
- credentials
- Firebase settings
- FlutterFlow files
- native build files
- CEO Briefing files
- `docs/API.md` without a true API/interface contract reason

---

## 4. File Drafts for Codex to Create or Update

## `planning/sprints/067-customer-return-to-use-proof/requirements.md`

```markdown
# Sprint 067 Requirements — Customer Return-to-Use Proof

## Purpose

Prove whether the current app can be safely handed back to the client for immediate use.

The client needs the app to open, answer typed questions, create reminders, and notify her when reminders are due. Voice input and feedback path should also be tested if available.

## Current Status

Client UAT / V1 Beta remains:

`HOLD - Client UAT / V1 Beta not approved`

Sprint 067 may recommend approval only if the return-to-use proof passes.

## In Scope

- Confirm exact customer URL/path.
- Confirm deployed app/current intended version match if possible.
- Confirm access/login posture.
- Test typed question answering.
- Test backend/model answer path.
- Test reminder creation.
- Test reminder due behavior.
- Test notification path and classify it.
- Test voice input if present.
- Confirm feedback path.
- Document owner approval checklist.
- Update planning and validation docs.

## Out of Scope

- FlutterFlow migration.
- Native iOS packaging.
- UI redesign.
- Broad backend refactor.
- Broad auth redesign.
- Broad notification redesign.
- Deploying without explicit approval.
- Touching unrelated Sprint 064 untracked files.

## Required Final Recommendation

End with exactly one:

- `APPROVE - give current app back to client`
- `HOLD - fix only the blockers preventing return-to-use`
```

---

## `planning/sprints/067-customer-return-to-use-proof/blueprint.md`

```markdown
# Sprint 067 Blueprint — Customer Return-to-Use Proof

## Operating Mode

Default to validation and documentation. Do not implement code unless a narrow blocker fix is explicitly approved after the read/summarize checkpoint.

## Step 1 — Read Current Project State

Read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- this sprint folder

Run:

```bash
git status --branch --short
```

Confirm Sprint 064 untracked files remain separate and untouched.

## Step 2 — Identify Customer Path

Find and document:

- deployed URL
- local URL, if used
- Firebase Hosting path, if present
- any known app entry point

Do not assume local proof is customer proof.

## Step 3 — Test App Access

Document:

- URL tested
- environment tested
- browser/device
- whether app loads
- whether login/access works
- whether auth blocks customer use

## Step 4 — Test Typed Q&A

Document:

- prompt used
- whether Send works
- whether backend/model responds
- whether answer is usable enough for client UAT

Do not record secrets or private user data.

## Step 5 — Test Reminders

Document:

- reminder phrase/input used
- whether reminder is created
- where it appears
- whether due behavior occurs
- notification classification:
  - in-app notification works
  - browser push works
  - native push works
  - not proven
  - not available

## Step 6 — Test Voice Input If Present

Document:

- whether voice control exists in current UI
- whether permission prompt appears
- whether transcript captures speech
- whether captured speech can be submitted
- blocker if not working

## Step 7 — Confirm Feedback Path

Document whether the client has a simple feedback path, such as:

- in-app feedback control
- email/text fallback
- owner-provided reporting process

If missing, mark it as blocker or owner-accepted limitation.

## Step 8 — Update Docs/Planning

Update:

- `planning/STATE.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- Sprint 067 acceptance if evidence is recorded there

Update `planning/DECISIONS.md` only if a durable decision changes.

Update `docs/ARCHITECTURE.md` only if the current release path or runtime architecture is clarified.

Avoid `docs/API.md` unless an interface/contract change is discovered and documented.

## Step 9 — Validate and Report

Run:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Report final recommendation.
```

---

## `planning/sprints/067-customer-return-to-use-proof/acceptance.md`

```markdown
# Sprint 067 Acceptance — Customer Return-to-Use Proof

## Pass/Fail Rule

Sprint 067 is complete only when the return-to-use proof is documented and the final recommendation is clear.

## Required Evidence Checklist

- [ ] Exact customer URL/path identified.
- [ ] Tested path classified as deployed customer path, local path, or unknown.
- [ ] App load result documented.
- [ ] Login/access posture documented.
- [ ] Typed question answering tested.
- [ ] Backend/model response path documented.
- [ ] Reminder creation tested.
- [ ] Reminder due behavior tested.
- [ ] Notification path classified.
- [ ] Voice input tested if present, or marked not present/not testable.
- [ ] Feedback path confirmed or marked missing.
- [ ] First tester and owner approver status documented.
- [ ] Final recommendation uses one approved label.

## Approved Final Labels

Use exactly one:

- `APPROVE - give current app back to client`
- `HOLD - fix only the blockers preventing return-to-use`

## Approval Requirements

Approve return-to-use only if:

- Customer URL is known.
- Deployed/current version match is proven enough for owner decision.
- Access works.
- Typed Q&A works.
- Reminder creation works.
- Reminder due behavior works.
- At least one notification path works, or owner accepts in-app-only reminder behavior.
- Feedback path exists.

If any required item is missing, recommend HOLD and list only the blockers preventing return-to-use.

## Validation Commands

Required:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

## Protected Surface Check

Confirm no unauthorized changes to:

- Sprint 064 untracked files
- runtime/source files, unless explicitly approved after checkpoint
- Firebase settings
- FlutterFlow files
- native build files
- credentials
- CEO Briefing files
- `docs/API.md`, unless justified by real API/interface documentation
```

---

## `planning/sprints/067-customer-return-to-use-proof/handoff-prompt.md`

```markdown
# Sprint 067 Handoff Prompt — Customer Return-to-Use Proof

Read the following files before making changes:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/067-customer-return-to-use-proof/requirements.md`
- `planning/sprints/067-customer-return-to-use-proof/blueprint.md`
- `planning/sprints/067-customer-return-to-use-proof/acceptance.md`

Then summarize:

1. What Sprint 067 is supposed to accomplish.
2. Which files you expect to modify.
3. Which validation/test steps you expect to run.
4. Any blockers or ambiguities.
5. How you will avoid touching Sprint 064 untracked files.
6. Whether any runtime/source change appears necessary, and if so, why.

Do not implement yet.
Do not stage.
Do not commit.
Do not push.
Do not deploy.

Stop after the summary and wait for approval.
```

---

## 5. Codex Apply-Pack Prompt

Use this prompt first. It applies the Architect Pack to the project folder only.

```text
Apply Sprint 067 Architect Pack to the project folder as docs/planning only.

Create or update these files exactly as needed:

- architect-packs/sprint-067-customer-return-to-use-proof-architect-pack.md
- planning/sprints/067-customer-return-to-use-proof/requirements.md
- planning/sprints/067-customer-return-to-use-proof/blueprint.md
- planning/sprints/067-customer-return-to-use-proof/acceptance.md
- planning/sprints/067-customer-return-to-use-proof/handoff-prompt.md
- planning/STATE.md
- planning/DECISIONS.md, only if a durable decision changes
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- docs/ARCHITECTURE.md, only if architecture/release-path facts need documentation

Rules:

- Docs/planning only.
- Do not modify runtime/source files.
- Do not modify Firebase settings.
- Do not modify deploy files.
- Do not modify FlutterFlow files.
- Do not modify native build files.
- Do not touch credentials.
- Do not create or modify CEO Briefing files.
- Do not modify docs/API.md unless there is a real API/interface documentation need.
- Do not touch Sprint 064 untracked files.
- Do not stage, commit, push, deploy, or run implementation.

After applying, run:

- git status --branch --short
- git diff --check
- test ! -f references/flutterflow/sprint-009/ceo-briefing.png

Report:

1. Files changed/created.
2. Validation results.
3. Confirmation that Client UAT / V1 Beta remains HOLD until Sprint 067 proof is complete.
4. Confirmation that protected surfaces were not touched.
5. Confirmation that Sprint 064 untracked files remain untouched.

Stop after reporting.
```

---

## 6. Post-Apply Sprint Start Prompt

Use this only after Codex applies the pack.

```text
Read the following files before making changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/067-customer-return-to-use-proof/requirements.md
- planning/sprints/067-customer-return-to-use-proof/blueprint.md
- planning/sprints/067-customer-return-to-use-proof/acceptance.md
- planning/sprints/067-customer-return-to-use-proof/handoff-prompt.md

Then summarize:

1. What Sprint 067 is supposed to accomplish.
2. Which files you expect to modify.
3. Which validation/test steps you expect to run.
4. Any blockers or ambiguities.
5. How you will avoid touching Sprint 064 untracked files.
6. Whether any runtime/source change appears necessary, and if so, why.

Do not implement yet.
Do not stage.
Do not commit.
Do not push.
Do not deploy.

Stop after the summary and wait for approval.
```

---

## 7. Architect Notes

Sprint 067 should be treated as the owner’s practical go/no-go proof.

Do not let the Builder turn this into a large feature sprint.

If the app already works on the customer path, the sprint can approve return-to-use with a short owner checklist.

If it fails, the next sprint should fix only the specific blocker preventing return-to-use.
