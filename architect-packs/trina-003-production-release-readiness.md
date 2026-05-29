# Architect Pack 003 — Production Release Readiness

**Project:** Trina / TrinaOS Voice  
**Sprint:** `003-production-release-readiness`  
**Architect Layer:** ChatGPT  
**Builder Layer:** Codex  
**Status:** Ready for Builder apply-pack step  
**Purpose:** Prepare Trina for a controlled V1 go-live decision without expanding scope into V2 features.

---

## 1. Architect Summary

Sprint 002 validated the local V1 readiness baseline.

Known Sprint 002 results:

- Frontend build passed.
- TypeScript/lint validation passed.
- Firebase Functions syntax check passed.
- Firebase Hosting configuration passed by inspection.
- Chat, reminders, popup handling, and Firestore paths passed by inspection.
- Telegram readiness remains blocked until `TELEGRAM_BOT_TOKEN` and webhook setup are confirmed.
- Full mobile readiness remains blocked until native Firebase config files and device/emulator testing are performed.
- Gmail sending remains V2-disabled in chat behavior, but the `sendGmailEmail` callable still exists.
- Debug logs may write raw message text and need a go-live policy decision.
- Production code was not changed in Sprint 002.

Sprint 003 should not build new features.

Sprint 003 should prepare a controlled production release readiness checklist and resolve go-live decisions around deployment, Telegram, Gmail boundary, debug logging, and mobile launch scope.

---

## 2. Files To Create Or Update

Codex should create or update only planning and documentation files during the apply-pack step.

Create:

- `planning/sprints/003-production-release-readiness/requirements.md`
- `planning/sprints/003-production-release-readiness/blueprint.md`
- `planning/sprints/003-production-release-readiness/acceptance.md`
- `planning/sprints/003-production-release-readiness/handoff-prompt.md`

Update as needed:

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `docs/API.md`
- `docs/ARCHITECTURE.md`

Do not modify production app code during the apply-pack step.

---

## 3. Decisions To Record

Add or update these decisions in `planning/DECISIONS.md` if not already present:

| Decision | Reason | Impact |
|---|---|---|
| Sprint 003 will focus on production release readiness, not feature expansion. | Sprint 002 passed local validation but left deployment, Telegram, Gmail, debug logging, and mobile scope open. | Builder must not add features or refactor during this sprint unless explicitly approved. |
| Gmail send remains V2-disabled for V1. | V1 stability is higher priority than email sending. | `sendGmailEmail` callable status must be documented, but chat behavior must not re-enable Gmail. |
| Telegram cannot be marked live until token and webhook setup are confirmed. | Telegram depends on external secret and webhook configuration. | Telegram readiness is pass/fail/blocked based on verified setup. |
| Mobile launch scope must be decided before claiming mobile readiness. | Native Firebase config files and device/emulator testing are not fully validated. | V1 may launch web-first if mobile remains blocked. |
| Debug log policy must be decided before go-live. | Raw message text may be written to `debugLogs`. | Go-live checklist must include retain, redact, reduce, or disable decision. |

---

## 4. Risks To Track

Add or update these risks in `planning/RISKS.md`:

| Risk | Impact | Mitigation | Status |
|---|---|---|---|
| Telegram token or webhook may not be configured. | Telegram channel may fail at launch. | Verify secret and webhook setup before marking Telegram ready. | Open |
| Gmail callable still exists while Gmail send is V2-disabled. | Confusion or accidental usage risk. | Document boundary and decide whether callable remains deployed, guarded, or disabled. | Open |
| Debug logs may contain user message text. | Privacy and data retention risk. | Decide log policy before go-live. | Open |
| Mobile Firebase config files are not committed. | Full mobile validation cannot be completed from repo alone. | Treat mobile as blocked until local config and device/emulator test are confirmed. | Open |
| Large bundle warning exists. | Performance may degrade over time. | Document for later optimization unless it blocks launch. | Watch |
| Mixed static/dynamic import warning exists. | Chunking behavior may not improve as expected. | Document for later cleanup unless it blocks launch. | Watch |

---

## 5. Questions To Track

Add or update these questions in `planning/QUESTIONS.md`:

| Question | Owner | Needed By | Status |
|---|---|---|---|
| Is V1 launch web-only, Android, iOS, or all three? | Product owner | Before go-live approval | Open |
| Is `TELEGRAM_BOT_TOKEN` already set in Firebase secrets? | Builder / owner | Sprint 003 validation | Open |
| Has the Telegram webhook been configured and verified? | Builder / owner | Sprint 003 validation | Open |
| Should `sendGmailEmail` callable remain deployed while Gmail send is V2-disabled in chat? | Architect / owner | Before go-live approval | Open |
| Should debug logs be retained, redacted, reduced, or disabled before go-live? | Architect / owner | Before go-live approval | Open |
| Is Firebase production deploy approved for this sprint? | Owner | Before deploy command | Open |

---

# File: planning/sprints/003-production-release-readiness/requirements.md

# Sprint 003 Requirements — Production Release Readiness

## Goal

Prepare Trina / TrinaOS Voice for a controlled V1 go-live decision by verifying production deployment readiness, documenting launch blockers, and creating a release checklist.

This sprint should not add new features.

---

## Business Objective

Make sure V1 can be launched safely without accidentally expanding scope into Gmail send, unverified Telegram behavior, incomplete mobile readiness, or unclear debug logging policies.

---

## Users

- Primary owner / operator using Trina.
- Builder validating release readiness.
- Architect reviewing launch risk and go-live decision.
- Future maintainer reading project state.

---

## In Scope

- Verify Firebase project/deployment readiness by inspection and approved commands.
- Verify Hosting readiness.
- Verify Functions deploy readiness without deploying unless approved.
- Verify Firestore rules readiness.
- Verify Telegram secret and webhook status if available.
- Confirm Gmail send remains V2-disabled in chat behavior.
- Decide or document status of existing Gmail callable.
- Decide or document debug logging policy.
- Decide V1 platform scope: web-only, Android, iOS, or all three.
- Create a go-live checklist.
- Update `docs/VALIDATION.md`.
- Update `planning/STATE.md`.
- Update `planning/RISKS.md`.
- Update `planning/QUESTIONS.md`.
- Record durable launch decisions in `planning/DECISIONS.md`.

---

## Out of Scope

- Building new features.
- Re-enabling Gmail send.
- Creating new Gmail workflows.
- Refactoring app architecture.
- Redesigning the UI.
- Adding new mobile voice architecture.
- Deploying to production without explicit approval.
- Touching secrets, API keys, tokens, `.env` files, or native Firebase config files.
- Committing native Firebase config files.
- Marking Telegram live without verification.
- Marking mobile live without device/emulator validation.

---

## Success Definition

Sprint 003 succeeds when the project has a clear go-live decision path:

- Ready for web V1 launch.
- Blocked with documented reasons.
- Or ready only after specific owner-approved actions.

---

# File: planning/sprints/003-production-release-readiness/blueprint.md

# Sprint 003 Blueprint — Production Release Readiness

## Objective

Create and execute a controlled release-readiness validation plan for Trina V1.

The Builder must summarize the plan before running commands.

---

## Files To Read First

- `AGENTS.md`
- `CODEX.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/DATA_MODEL.md`
- `docs/VALIDATION.md`
- `planning/sprints/003-production-release-readiness/requirements.md`
- `planning/sprints/003-production-release-readiness/blueprint.md`
- `planning/sprints/003-production-release-readiness/acceptance.md`

---

## Files To Inspect

- `package.json`
- `firebase.json`
- `firestore.rules`
- `.firebaserc`, if present
- `functions/index.js`
- `functions/package.json`
- `src/lib/barbieAI.js`
- `src/lib/reminderNotifications.js`
- `src/lib/mobilePush.ts`
- `services/authService.ts`
- `services/firestoreService.ts`
- `capacitor.config.ts`
- `ios/App/App/Info.plist`
- `android/app/src/main/AndroidManifest.xml`
- existing Firebase / Telegram deployment docs under `docs/`

---

## Validation Plan

Only run commands after Architect/owner approval.

Suggested validation commands:

```bash
cd /Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice
npm run build
npm run lint
node --check functions/index.js
```

Optional inspection commands, only if safe and available:

```bash
firebase use
firebase functions:secrets:access TELEGRAM_BOT_TOKEN
```

Do not run deploy commands unless explicitly approved.

Potential deploy commands requiring explicit approval:

```bash
firebase deploy --only hosting
firebase deploy --only functions
firebase deploy --only firestore:rules
```

---

## Implementation Plan

1. Read required planning and architecture files.
2. Summarize Sprint 003 plan before running commands.
3. Confirm no production code changes are expected.
4. After approval, run local validation commands.
5. Inspect Firebase configuration and deployment docs.
6. Inspect Telegram readiness requirements.
7. Inspect Gmail V2 boundary and callable status.
8. Inspect debug logging behavior and document policy options.
9. Inspect mobile readiness and platform scope.
10. Update validation docs.
11. Update state, risks, questions, and decisions.
12. Produce go-live recommendation.

---

## Documentation Updates

Update `docs/VALIDATION.md` with:

- local validation results
- production readiness status
- Telegram readiness status
- Gmail boundary status
- debug logging policy status
- mobile readiness status
- go-live checklist

Update `planning/STATE.md` with:

- Sprint 003 status
- what was validated
- what remains blocked
- recommended next step

Update `planning/RISKS.md` with:

- unresolved launch risks
- mitigations
- status

Update `planning/QUESTIONS.md` with:

- owner decisions needed before go-live

Update `planning/DECISIONS.md` with:

- confirmed launch boundaries
- Gmail V2 decision
- Telegram status decision
- mobile scope decision
- debug log policy decision, if made

---

# File: planning/sprints/003-production-release-readiness/acceptance.md

# Sprint 003 Acceptance Criteria — Production Release Readiness

Sprint 003 is complete when:

- Builder confirms no feature expansion was performed.
- Builder confirms whether production code changed.
- Local build status is documented.
- Lint/type-check status is documented.
- Functions syntax status is documented.
- Firebase Hosting readiness is documented.
- Firebase Functions readiness is documented.
- Firestore rules readiness is documented.
- Telegram secret status is documented as pass, fail, or blocked.
- Telegram webhook status is documented as pass, fail, or blocked.
- Gmail V2-disabled boundary is documented.
- Existing Gmail callable status is documented with a recommendation.
- Debug logging privacy policy is documented with a recommendation.
- Mobile V1 launch scope is documented as web-only, Android, iOS, all three, or blocked.
- Go-live checklist is created in `docs/VALIDATION.md`.
- `planning/STATE.md` is updated.
- `planning/RISKS.md` is updated.
- `planning/QUESTIONS.md` is updated.
- `planning/DECISIONS.md` is updated for durable launch decisions.
- Final output recommends one of:
  - ready for web V1 go-live
  - blocked before go-live
  - ready after specific owner-approved actions
  - not ready because production validation is incomplete

---

# File: planning/sprints/003-production-release-readiness/handoff-prompt.md

# Sprint 003 Builder Handoff Prompt

You are the Builder for the Trina / TrinaOS Voice project.

Current sprint:

`003-production-release-readiness`

## Goal

Prepare Trina for a controlled V1 go-live decision.

This sprint validates release readiness. It does not add features.

## Read First

1. `AGENTS.md`
2. `CODEX.md`
3. `planning/STATE.md`
4. `planning/DECISIONS.md`
5. `planning/DOMAIN.md`
6. `planning/RISKS.md`
7. `planning/QUESTIONS.md`
8. `docs/ARCHITECTURE.md`
9. `docs/API.md`
10. `docs/DATA_MODEL.md`
11. `docs/VALIDATION.md`
12. `planning/sprints/003-production-release-readiness/requirements.md`
13. `planning/sprints/003-production-release-readiness/blueprint.md`
14. `planning/sprints/003-production-release-readiness/acceptance.md`

## Before Running Commands

Summarize:

1. What this sprint is supposed to accomplish.
2. Which files you expect to inspect.
3. Which files you expect to modify.
4. Which commands you expect to run.
5. Whether any deploy commands are needed.
6. Any blockers or ambiguities.
7. Whether production code changes are expected.

Stop and wait for approval.

## Hard Boundaries

- Do not add features.
- Do not re-enable Gmail send.
- Do not expose or write secrets.
- Do not touch `.env` files.
- Do not commit native Firebase config files.
- Do not refactor major app structure.
- Do not deploy unless explicitly approved.
- Do not mark Telegram live unless secret and webhook setup are confirmed.
- Do not mark mobile live unless device/emulator validation is confirmed.

## Approved Local Validation Commands

Only after approval:

```bash
cd /Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice
npm run build
npm run lint
node --check functions/index.js
```

## Deploy Commands

Do not run these unless explicitly approved:

```bash
firebase deploy --only hosting
firebase deploy --only functions
firebase deploy --only firestore:rules
```

## Required Final Summary

Use this exact format:

# Sprint 003 Production Release Readiness Summary

## Commands Run

## Files Inspected

## Files Changed

## Local Validation Results

## Firebase Production Readiness

## Telegram Readiness

## Gmail Boundary Status

## Debug Logging Policy Status

## Mobile Launch Scope

## Go-Live Checklist

## Acceptance Criteria Status

## Risks Added Or Updated

## Questions Added Or Updated

## Decisions Added Or Updated

## Production Code Changed?

## Recommended Next Architect Pack

---

# Codex Apply-Pack Prompt

Paste this into Codex before the Architect Pack content if applying manually:

```text
You are the Builder for the Trina / TrinaOS Voice project.

Your job right now is to apply Architect Pack 003 to the project folder.

Do not implement app code yet.
Do not run validation yet.
Do not refactor.
Do not create new features.
Do not modify production behavior.
Do not touch secrets, API keys, tokens, .env files, or native Firebase config files.

First, read the Architect Pack 003 content provided below.

Then create or update only the planning and documentation files listed in the pack.

Rules:
- Preserve existing useful content.
- Update files carefully.
- Do not overwrite unrelated documentation.
- If a file already exists, merge new content instead of deleting old content.
- Do not change application source code.
- Stop after applying the planning files.

After applying the pack, give me a final summary with this exact format:

# Architect Pack 003 Apply Summary

## Files Created

## Files Updated

## Files Skipped

## Production Code Changed?

## Ready For Sprint 003?

## Blockers / Questions

Here is Architect Pack 003:

[PASTE THE FULL ARCHITECT PACK 003 CONTENT BELOW THIS LINE]
```

---

# Next Step After Apply-Pack

After Codex applies this pack, start a new Codex chat named:

`Sprint 003 - Production Release Readiness`

Then paste the handoff prompt from:

`planning/sprints/003-production-release-readiness/handoff-prompt.md`

Codex should summarize before running commands.
