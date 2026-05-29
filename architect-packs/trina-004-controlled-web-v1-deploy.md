# Architect Pack 004 — Controlled Web V1 Deploy

**Project:** Trina / TrinaOS Voice  
**Sprint:** `004-controlled-web-v1-deploy`  
**Pack type:** Deployment readiness and controlled release  
**Architect Layer:** ChatGPT  
**Builder Layer:** Codex  
**Date:** 2026-05-15

---

## 1. Architect Pack Summary

Sprint 003 confirmed that the Trina web app is locally ready for a controlled V1 web deploy after owner approval.

Sprint 004 exists to execute a controlled Firebase web release without expanding product scope.

This sprint should:

- confirm the active Firebase project target
- run final local validation commands
- deploy only approved Firebase surfaces
- verify the live hosted app URL
- run a post-deploy smoke test checklist
- document what passed, failed, or remains blocked
- keep Telegram and native mobile outside the required V1 launch path unless separately approved

This is not a feature sprint.

---

## 2. Current State From Sprint 003

Known passed:

- `npm run build`
- `npm run lint`
- `node --check functions/index.js`
- `firebase use`
- Firebase target: `barbie-92edc`
- Hosting config serves `dist`
- Firestore rules passed inspection
- Chat/reminder/popup paths passed inspection

Known blocked or open:

- Firebase deploy approval is still needed.
- Debug logging policy must be decided before broad production usage.
- Telegram setup is not confirmed.
- Android/iOS are not production-ready until native Firebase config and device/emulator testing are confirmed.
- Gmail send remains V2-disabled from chat.
- `sendGmailEmail` callable still exists and needs a future gating/restriction decision.

---

## 3. Files To Create Or Update

Codex should create:

```text
planning/sprints/004-controlled-web-v1-deploy/requirements.md
planning/sprints/004-controlled-web-v1-deploy/blueprint.md
planning/sprints/004-controlled-web-v1-deploy/acceptance.md
planning/sprints/004-controlled-web-v1-deploy/handoff-prompt.md
```

Codex should update:

```text
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/VALIDATION.md
docs/API.md
docs/ARCHITECTURE.md
```

Codex should not update production app code unless a deployment-blocking issue is found and the owner explicitly approves a separate fix sprint.

---

## 4. Decisions To Record

Add or confirm these decisions in `planning/DECISIONS.md`:

| Decision | Reason | Impact |
|---|---|---|
| Sprint 004 is a controlled web V1 deploy sprint. | Sprint 003 showed web V1 is locally ready after deploy approval. | Deployment actions can proceed only after explicit approval. |
| V1 launch scope is web-first. | Native mobile requires Firebase config and device/emulator validation. | Android/iOS remain outside the V1 go-live path. |
| Telegram is not required for web V1 launch. | Token and webhook setup are not confirmed. | Telegram remains blocked unless separately approved and configured. |
| Gmail send remains V2-disabled from chat. | Gmail send is outside V1 stability boundary. | No Gmail expansion during Sprint 004. |
| Debug logging must be reviewed before broad production usage. | Debug logs may include raw user message text. | Owner must decide reduce, redact, disable, or short-term retention. |

---

## 5. Risks To Update

Add or update these risks in `planning/RISKS.md`:

| Risk | Impact | Mitigation |
|---|---|---|
| Deploy may expose debug logging that contains raw user message text. | Privacy and trust risk. | Decide debug policy before broad production use. |
| Firebase deploy could update live Hosting, Functions, or Firestore rules. | Production behavior changes. | Require explicit approval before deploy commands. |
| Telegram may not work after web V1 launch. | Users may expect Telegram if mentioned. | Keep Telegram out of V1 launch messaging unless setup confirmed. |
| Native mobile may not work despite web success. | Mobile user confusion. | Mark Android/iOS blocked until device/emulator validation. |
| Existing Gmail callable may remain deployed while chat Gmail is disabled. | Confusing boundary or unintended callable exposure. | Decide in a future security/gating sprint. |

---

## 6. Open Questions To Update

Add or keep these questions in `planning/QUESTIONS.md`:

| Question | Owner | Status |
|---|---|---|
| Is Firebase deploy approved for Hosting, Functions, and Firestore rules? | Owner | Open |
| What is the debug logging policy for V1 launch? | Owner | Open |
| Should web V1 launch proceed before Telegram is live? | Owner | Open |
| Should the existing `sendGmailEmail` callable remain deployed for V1? | Owner / Architect | Open |
| What live URL should be used for smoke testing and sharing? | Builder | Open until deploy/verification |

---

## 7. Sprint 004 Requirements

Create this file:

```text
planning/sprints/004-controlled-web-v1-deploy/requirements.md
```

Content:

```markdown
# Sprint 004 Requirements — Controlled Web V1 Deploy

## Goal

Execute a controlled Firebase web V1 deploy for Trina / TrinaOS Voice after explicit owner approval, then verify the live hosted app with a post-deploy smoke test checklist.

---

## Business Objective

Move Trina from local validation readiness into a controlled live web V1 state without expanding product scope or introducing unapproved features.

---

## In Scope

- Confirm current Firebase target.
- Re-run final local validation commands.
- Deploy approved Firebase surfaces only after explicit owner approval.
- Verify the live web URL.
- Smoke test web V1 behavior.
- Document pass/fail/blocked results.
- Update `docs/VALIDATION.md`.
- Update `planning/STATE.md`, `planning/RISKS.md`, and `planning/QUESTIONS.md`.
- Confirm Telegram remains blocked unless token and webhook setup are confirmed.
- Confirm Android/iOS remain outside V1 unless separately validated.
- Confirm Gmail send remains V2-disabled from chat.

---

## Out Of Scope

- New features.
- UI redesign.
- Gmail V2 implementation.
- Telegram implementation if token/webhook are not confirmed.
- Native Android/iOS release.
- Refactoring production code.
- Changing debug logging behavior unless a separate fix sprint is approved.
- Touching secrets, API keys, tokens, `.env` files, or native Firebase config files.

---

## Required Owner Approvals

The Builder must receive explicit owner approval before running any deploy command.

Deploy commands requiring approval:

```bash
firebase deploy --only hosting
firebase deploy --only functions
firebase deploy --only firestore:rules
```

The Builder must not access Firebase secrets unless explicitly approved.

---

## Launch Scope

Default V1 launch scope:

```text
Web-first V1 only.
```

Blocked from V1 launch path unless separately approved and validated:

- Telegram
- Android
- iOS
- Gmail send
```

---

## 8. Sprint 004 Blueprint

Create this file:

```text
planning/sprints/004-controlled-web-v1-deploy/blueprint.md
```

Content:

```markdown
# Sprint 004 Blueprint — Controlled Web V1 Deploy

## Objective

Safely deploy the validated web V1 app to Firebase and verify the live site without expanding scope.

---

## Files To Read First

- `AGENTS.md`
- `CODEX.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/VALIDATION.md`
- `planning/sprints/004-controlled-web-v1-deploy/requirements.md`
- `planning/sprints/004-controlled-web-v1-deploy/acceptance.md`

---

## Files To Inspect

- `package.json`
- `firebase.json`
- `.firebaserc`
- `firestore.rules`
- `functions/index.js`
- `functions/package.json`
- `src/lib/barbieAI.js`
- `src/lib/reminderNotifications.js`
- `services/authService.ts`
- `services/firestoreService.ts`

---

## Files To Update

Documentation/planning only:

- `docs/VALIDATION.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `planning/sprints/004-controlled-web-v1-deploy/acceptance.md`

---

## Phase 1 — Pre-Deploy Summary

Before running commands, Builder must summarize:

1. What Sprint 004 will accomplish.
2. Which Firebase target is expected.
3. Which commands it plans to run.
4. Which deploy commands require approval.
5. Which files may be updated.
6. Any blockers or ambiguities.

Stop and wait for approval.

---

## Phase 2 — Final Local Validation

After approval, run:

```bash
cd /Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice
npm run build
npm run lint
node --check functions/index.js
firebase use
```

If any command fails, stop and report.

Do not deploy after failed validation unless the owner explicitly approves a fix path.

---

## Phase 3 — Controlled Deploy

Only after explicit owner approval, run the deploy commands the owner approved.

Preferred full V1 web deploy command:

```bash
firebase deploy --only hosting,functions,firestore:rules
```

Alternative staged deploy commands, if owner wants separate steps:

```bash
firebase deploy --only firestore:rules
firebase deploy --only functions
firebase deploy --only hosting
```

Do not deploy any surface that was not approved.

---

## Phase 4 — Post-Deploy Smoke Test

After deploy, inspect or verify:

- Firebase deploy output reports success.
- Live Hosting URL is available.
- App loads without blank screen.
- Auth path works or anonymous auth fallback works.
- Chat path responds as expected.
- Reminder creation path works.
- Reminder popup path can be triggered or is documented as inspection-only.
- Gmail send remains V2-disabled from chat.
- Telegram remains blocked unless token/webhook confirmed.
- Debug logging policy is documented.
- Android/iOS remain blocked unless separately validated.

---

## Phase 5 — Documentation Updates

Update:

- `docs/VALIDATION.md` with pre-deploy and post-deploy results.
- `planning/STATE.md` with final sprint status.
- `planning/RISKS.md` with any remaining launch risks.
- `planning/QUESTIONS.md` with owner decisions still needed.
- `planning/DECISIONS.md` with any deploy decisions made.
- Sprint 004 `acceptance.md` with pass/fail/blocked status.
```

---

## 9. Sprint 004 Acceptance Criteria

Create this file:

```text
planning/sprints/004-controlled-web-v1-deploy/acceptance.md
```

Content:

```markdown
# Sprint 004 Acceptance Criteria — Controlled Web V1 Deploy

Sprint 004 is complete when:

## Pre-Deploy

- [ ] Builder read required planning and docs files.
- [ ] Builder summarized Sprint 004 plan before running commands.
- [ ] Owner approved final local validation commands.
- [ ] `npm run build` passed or blocker documented.
- [ ] `npm run lint` passed or blocker documented.
- [ ] `node --check functions/index.js` passed or blocker documented.
- [ ] `firebase use` confirmed the expected Firebase target.

## Deploy

- [ ] Owner explicitly approved deploy scope.
- [ ] Only approved deploy commands were run.
- [ ] Deploy result was captured.
- [ ] No secrets, API keys, tokens, `.env`, or native Firebase config files were touched.

## Post-Deploy Smoke Test

- [ ] Live web app URL was captured.
- [ ] Web app loaded successfully or blocker documented.
- [ ] Auth path was smoke tested or blocker documented.
- [ ] Chat path was smoke tested or blocker documented.
- [ ] Reminder creation was smoke tested or blocker documented.
- [ ] Reminder popup behavior was smoke tested or blocker documented.
- [ ] Gmail send remained V2-disabled from chat.
- [ ] Telegram status was documented.
- [ ] Android/iOS status was documented as blocked unless separately validated.

## Documentation

- [ ] `docs/VALIDATION.md` updated.
- [ ] `planning/STATE.md` updated.
- [ ] `planning/DECISIONS.md` updated if deploy decisions were made.
- [ ] `planning/RISKS.md` updated.
- [ ] `planning/QUESTIONS.md` updated.
- [ ] Recommended next Architect Pack documented.
```

---

## 10. Sprint 004 Handoff Prompt

Create this file:

```text
planning/sprints/004-controlled-web-v1-deploy/handoff-prompt.md
```

Content:

```markdown
# Sprint 004 Builder Handoff Prompt — Controlled Web V1 Deploy

You are the Builder for the Trina / TrinaOS Voice project.

Current sprint:

```text
004-controlled-web-v1-deploy
```

Goal:

Execute a controlled Firebase web V1 deploy after explicit owner approval, then verify the live hosted app with a post-deploy smoke test checklist.

This is not a feature sprint.

---

## Read First

Read these files before running commands or making changes:

1. `AGENTS.md`
2. `CODEX.md`
3. `planning/STATE.md`
4. `planning/DECISIONS.md`
5. `planning/RISKS.md`
6. `planning/QUESTIONS.md`
7. `docs/ARCHITECTURE.md`
8. `docs/API.md`
9. `docs/VALIDATION.md`
10. `planning/sprints/004-controlled-web-v1-deploy/requirements.md`
11. `planning/sprints/004-controlled-web-v1-deploy/blueprint.md`
12. `planning/sprints/004-controlled-web-v1-deploy/acceptance.md`

---

## Before Running Commands

Summarize:

1. What this sprint is supposed to accomplish.
2. Which Firebase target you expect.
3. Which files you expect to inspect.
4. Which files you expect to update.
5. Which commands you expect to run.
6. Which deploy commands require explicit approval.
7. Any blockers or ambiguities.
8. Whether production code changes are expected.

Stop after the summary and wait for approval.

---

## Hard Boundaries

- Do not create features.
- Do not refactor.
- Do not change production code unless separately approved.
- Do not deploy without explicit approval.
- Do not access Firebase secrets without explicit approval.
- Do not touch `.env`, API keys, tokens, or native Firebase config files.
- Do not mark Telegram live unless token and webhook are confirmed.
- Do not mark Android/iOS production-ready without device/emulator validation.
- Do not enable Gmail send in V1.

---

## Approved Local Validation Commands

Only after approval:

```bash
cd /Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice
npm run build
npm run lint
node --check functions/index.js
firebase use
```

---

## Deploy Commands Requiring Explicit Approval

```bash
firebase deploy --only hosting
firebase deploy --only functions
firebase deploy --only firestore:rules
firebase deploy --only hosting,functions,firestore:rules
```

---

## Required Final Summary Format

# Sprint 004 Controlled Web V1 Deploy Summary

## Commands Run
## Deploy Commands Run
## Firebase Target
## Live URL
## Files Inspected
## Files Changed
## Pre-Deploy Validation Results
## Deploy Results
## Post-Deploy Smoke Test Results
## Go-Live Status
## Remaining Blockers
## Owner Decisions Made
## Owner Decisions Still Needed
## Production Code Changed?
## Recommended Next Architect Pack
```

---

## 11. Codex Apply-Pack Prompt

Paste this into Codex, then paste the full Architect Pack 004 below it.

```text
You are the Builder for the Trina / TrinaOS Voice project.

Your job right now is to apply Architect Pack 004 to the project folder.

Do not deploy.
Do not run validation.
Do not implement app code.
Do not refactor.
Do not create new features.
Do not modify production behavior.
Do not touch secrets, API keys, tokens, .env files, or native Firebase config files.

First, read the Architect Pack 004 content provided below.

Then create or update only the planning and documentation files listed in the pack:

- planning/STATE.md
- planning/DECISIONS.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/ARCHITECTURE.md
- docs/API.md
- docs/VALIDATION.md
- planning/sprints/004-controlled-web-v1-deploy/requirements.md
- planning/sprints/004-controlled-web-v1-deploy/blueprint.md
- planning/sprints/004-controlled-web-v1-deploy/acceptance.md
- planning/sprints/004-controlled-web-v1-deploy/handoff-prompt.md

Rules:
- Preserve existing useful content.
- Update files carefully.
- Do not overwrite unrelated documentation.
- If a file already exists, merge the new content instead of deleting the old content.
- Do not change application source code.
- Stop after applying the planning files.

After applying the pack, give me a final summary with this exact format:

# Architect Pack 004 Apply Summary

## Files Created
## Files Updated
## Files Skipped
## Production Code Changed?
## Ready For Sprint 004?
## Blockers / Questions

Here is Architect Pack 004:

[PASTE THE FULL ARCHITECT PACK 004 CONTENT BELOW THIS LINE]
```
