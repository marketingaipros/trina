# Architect Pack 002 — V1 Stability Validation

**Project:** Barbie / TrinaOS Voice  
**Correct project name reference:** Trina  
**Sprint:** `002-v1-stability-validation`  
**Architect Layer:** ChatGPT  
**Builder Layer:** Codex  
**Purpose:** Validate V1 launch behavior without expanding scope into V2 features.

---

## Architect Pack Summary

The existing app has already been audited and wrapped with initial 120x planning documentation under Sprint 001.

Sprint 002 should not add new product features.

Sprint 002 should validate whether V1 is stable enough for launch across:

- Auth
- Chat
- Reminder creation
- Reminder popup behavior
- Firestore writes and reads
- Firebase Functions callable behavior
- Hosting build output
- Telegram readiness
- Known V2 boundaries

Gmail send must remain disabled / V2 for this sprint.

---

# File Update: `planning/STATE.md`

```markdown
# State

## Current Sprint
`002-v1-stability-validation`

## Current Status
Sprint 001 existing app audit is complete. The app has been wrapped with initial 120x planning documentation. Sprint 002 will validate V1 stability without adding new features.

## Recently Completed
- Existing Barbie / TrinaOS Voice app inspected.
- 120x planning and documentation structure created.
- Initial architecture documented.
- Known incomplete areas documented.
- No production code changes were made during Sprint 001.

## Active Sprint Goal
Validate V1 launch behavior for auth, chat, reminders, Firestore rules, popup notifications, Hosting, and Telegram readiness without expanding scope into Gmail send or other V2 features.

## Known Stable Areas
- Vite React app structure exists.
- Firebase Functions backend exists.
- Firestore rules exist.
- Hosting is configured to serve `dist`.
- Capacitor iOS and Android folders exist.
- Reminder creation and popup architecture exists in code.

## Known Incomplete Areas
- Gmail send is intentionally V2/disabled for V1 stability.
- Telegram webhook requires `TELEGRAM_BOT_TOKEN` secret and webhook setup before use.
- Native mobile Firebase config files are not committed.
- Browser speech recognition is not a complete native mobile voice solution.

## Next Actions
- Validate build and lint commands.
- Validate Firebase Functions syntax and deploy readiness.
- Validate auth-gated callable function assumptions.
- Validate reminder creation and popup behavior.
- Validate Telegram webhook readiness without exposing secrets.
- Document any blockers in `planning/RISKS.md` or `planning/QUESTIONS.md`.

## Blockers
- Telegram cannot be considered live until `TELEGRAM_BOT_TOKEN` is configured and webhook setup is confirmed.
- Native mobile behavior cannot be fully validated without local native Firebase config files and device/emulator testing.
```

---

# File Update: `planning/DECISIONS.md`

```markdown
# Decisions

## Decision Log

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-05-15 | Existing Trina app will be brought into the 120x Architect / Builder workflow before additional feature work. | Existing app needs durable planning, architecture, risks, and sprint files before further build work. | Future work should happen sprint-by-sprint from written files, not loose chat instructions. |
| 2026-05-15 | Gmail send remains V2 and disabled for V1 stability. | Email sending introduces integration, permission, and safety risk that should not block V1 launch. | Sprint 002 must not re-enable or expand Gmail send behavior. |
| 2026-05-15 | Telegram is allowed in V1 only as a readiness-validated path, not assumed live until the secret and webhook are configured. | Telegram depends on `TELEGRAM_BOT_TOKEN` and webhook setup outside normal source code. | Sprint 002 should validate readiness and document setup status without exposing secrets. |
| 2026-05-15 | Native mobile Firebase config files must not be committed. | Native config files may contain environment-specific or sensitive app setup details. | Mobile validation must document required local files without adding them to the repo. |
```

---

# File Update: `planning/RISKS.md`

```markdown
# Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Telegram webhook is present in code but not live without `TELEGRAM_BOT_TOKEN` and webhook setup. | High | Medium | Validate secret requirement and document exact setup steps without exposing token. | Open |
| Gmail send could accidentally be treated as V1-ready. | Medium | High | Confirm Gmail send remains disabled and document it as V2 only. | Open |
| Native mobile Firebase config files are not committed. | High | Medium | Document required local setup files and keep them out of git. | Open |
| Browser speech recognition may not behave reliably as native mobile voice. | High | Medium | Treat native voice as future improvement unless validated on target device. | Open |
| App uses a mix of localStorage-backed and Firestore-backed data. | Medium | Medium | Document source-of-truth rules for V1 and test expected user flows. | Open |
| Debug logs may contain user message text. | Medium | High | Review debug logging and document privacy cleanup needs before long-term production usage. | Open |
| Firebase Functions runtime or dependencies may fail deploy validation. | Medium | High | Run syntax checks, lint/build commands, and function deploy dry-run where available. | Open |
```

---

# File Update: `planning/QUESTIONS.md`

```markdown
# Questions

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| Is `TELEGRAM_BOT_TOKEN` already created in Firebase secrets for this project? | Builder / Operator | Sprint 002 | Open | Needed before Telegram can be considered live. Do not paste the token into docs or chat. |
| Has the Telegram webhook URL been set with BotFather/API after deploy? | Builder / Operator | Sprint 002 | Open | Needed to validate Telegram message flow. |
| Which device/platform is the V1 launch target: web only, Android, iOS, or all three? | Architect / Operator | Sprint 002 | Open | Determines how deep mobile validation must go. |
| Are Firestore rules ready for current V1 user flows? | Builder | Sprint 002 | Open | Validate against auth, messages, reminders, notifications, and user-owned data. |
| Should debug logs containing user message text be disabled, redacted, or kept for short-term troubleshooting? | Architect / Operator | Sprint 002 | Open | Privacy and support decision needed before long-term production use. |
```

---

# File Update: `docs/VALIDATION.md`

```markdown
# Validation Plan

## Overview

Sprint 002 validates whether Barbie / TrinaOS Voice is stable enough for V1 launch without expanding scope into Gmail send or new product features.

## V1 Validation Principles

- Validate existing behavior before adding new behavior.
- Do not treat V2 features as V1 blockers.
- Do not expose secrets in docs, logs, or chat.
- Every launch-critical path should have a clear pass, fail, or blocked status.
- Any failed or blocked item should create a follow-up question, risk, or sprint candidate.

## Validation Checklist

| Area | Validation Method | Expected Result | Status | Notes |
|---|---|---|---|---|
| Frontend build | Run `npm run build` | Build completes and outputs `dist` | TBD | Required for Hosting readiness. |
| Lint | Run `npm run lint` | No blocking lint errors | TBD | Warnings should be documented. |
| Firebase Hosting | Inspect `firebase.json` and build output | Hosting serves `dist` with SPA fallback | TBD | No deploy required unless approved. |
| Firebase Functions syntax | Run appropriate function syntax/lint checks | Functions code is valid | TBD | Avoid changing production code unless required for validation fix. |
| Auth | Inspect callable function auth requirements and frontend usage | Protected functions require authenticated user | TBD | Document any mismatch. |
| Chat | Validate frontend-to-backend chat path | User can send message and receive expected assistant response | TBD | Do not expose OpenRouter secrets. |
| Reminders | Validate reminder creation path | Reminder can be created and stored in expected location | TBD | Confirm localStorage vs Firestore behavior. |
| Reminder popups | Validate popup, snooze, dismiss behavior | Reminder notifications behave as expected | TBD | Browser and mobile may differ. |
| Firestore rules | Inspect and, if possible, test rules | User-owned data is protected | TBD | Document assumptions. |
| Telegram readiness | Confirm function exists, secret dependency is documented, and setup command exists | Telegram path is ready or blocked with reason | TBD | Do not paste token. |
| Gmail V2 boundary | Inspect email intent/send behavior | Gmail send remains disabled for V1 | TBD | Must not become V1 scope. |
| Mobile readiness | Inspect Capacitor config and native folders | Mobile packaging path is documented | TBD | Native Firebase files not committed. |
| Debug logging | Inspect debug log writes | Privacy risk is known and documented | TBD | Decide redaction/retention later. |
```

---

# New File: `planning/sprints/002-v1-stability-validation/requirements.md`

```markdown
# Sprint 002 Requirements — V1 Stability Validation

## Goal

Validate that the existing Barbie / TrinaOS Voice app is stable enough for V1 launch across the core paths already built.

This sprint is about validation, stabilization, and documentation.

It is not a feature expansion sprint.

## Background

Sprint 001 audited the existing app and created the initial 120x planning structure. Known V1 areas include chat, reminders, popup notifications, Firebase Auth, Firestore, Firebase Functions, Hosting, Capacitor mobile packaging, and Telegram webhook readiness.

## In Scope

- Validate frontend build.
- Validate lint status.
- Validate Firebase Hosting configuration.
- Validate Firebase Functions code readiness.
- Validate Auth assumptions for callable functions.
- Validate chat path readiness.
- Validate reminder creation path.
- Validate reminder popup behavior.
- Validate Firestore rules readiness.
- Validate Telegram webhook readiness without exposing secrets.
- Confirm Gmail send remains disabled / V2.
- Document mobile readiness gaps.
- Update planning and validation docs with pass/fail/blocked results.

## Out of Scope

- Re-enabling Gmail send.
- Adding new Gmail integration.
- Building new voice architecture.
- Redesigning the UI.
- Refactoring major app structure.
- Adding new database models unless required to document existing behavior.
- Deploying to production unless explicitly approved.
- Committing native Firebase config files.
- Storing secrets in the repo.

## V1 Launch-Critical Behaviors

- User can authenticate.
- User can open the app dashboard.
- User can use the assistant chat path.
- User can create reminders.
- Reminder popups can appear, snooze, and dismiss.
- Firestore rules do not obviously block required V1 flows.
- Hosting can serve the built frontend.
- Firebase Functions are syntactically valid and deploy-ready.
- Telegram path has clear setup status.
- Gmail send is clearly not part of V1.

## Business Rules

- V1 stability is more important than new features.
- Gmail send must not block V1.
- Telegram must not be marked live unless secret and webhook setup are confirmed.
- Secrets must never be written into docs, source files, or chat.
- Native mobile config files must remain outside the committed repo.
```

---

# New File: `planning/sprints/002-v1-stability-validation/blueprint.md`

```markdown
# Sprint 002 Blueprint — V1 Stability Validation

## Objective

Run a controlled validation pass on the current Trina app and document launch readiness without expanding V1 scope.

## Files to Read First

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
- `planning/sprints/002-v1-stability-validation/requirements.md`
- `planning/sprints/002-v1-stability-validation/acceptance.md`

## Files to Inspect

- `package.json`
- `firebase.json`
- `firestore.rules`
- `capacitor.config.ts`
- `App.tsx`
- `index.tsx`
- `components/VoiceDashboard.tsx`
- `components/Dashboard.tsx`
- `src/lib/barbieAI.js`
- `src/lib/reminderNotifications.js`
- `functions/index.js`
- `functions/package.json`
- Existing docs under `docs/`

## Files to Create or Update

- `planning/STATE.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `docs/ARCHITECTURE.md`, only if the current architecture doc is missing relevant launch-readiness notes
- `planning/sprints/002-v1-stability-validation/acceptance.md`, only to mark evidence/status if the project convention allows it

## Validation Steps

1. Read project operating files and active sprint files.
2. Summarize understanding before making changes.
3. Run frontend validation commands:
   - `npm run build`
   - `npm run lint`
4. Inspect Firebase config:
   - `firebase.json`
   - Hosting public directory
   - SPA fallback rewrite
   - functions codebase
5. Inspect Firebase Functions:
   - callable auth requirements
   - Telegram webhook function
   - Gmail disabled/V2 behavior
   - OpenRouter usage without exposing secrets
6. Inspect Firestore rules for required V1 user flows.
7. Inspect reminder creation and popup files.
8. Inspect Capacitor config and document mobile readiness limits.
9. Update `docs/VALIDATION.md` with pass/fail/blocked status.
10. Update `planning/RISKS.md` and `planning/QUESTIONS.md` with any new issues.
11. Update `planning/STATE.md` with sprint result and recommended next action.

## Implementation Rules

- Do not add new features.
- Do not refactor unless a tiny validation fix is required and clearly explained.
- Do not change production behavior without explicit approval.
- Do not modify secrets or commit environment files.
- Do not mark Telegram live unless token and webhook setup are confirmed.
- Do not re-enable Gmail send.

## Expected Builder Output

The Builder must end with a summary covering:

1. Commands run.
2. Validation results.
3. Files inspected.
4. Files changed.
5. Acceptance criteria status.
6. Remaining blockers.
7. Recommended next Architect Pack.
```

---

# New File: `planning/sprints/002-v1-stability-validation/acceptance.md`

```markdown
# Sprint 002 Acceptance Criteria — V1 Stability Validation

Sprint 002 is complete when:

- Builder confirms no new V1 feature expansion was performed.
- `npm run build` has been run or a clear blocker is documented.
- `npm run lint` has been run or a clear blocker is documented.
- Firebase Hosting configuration has been inspected.
- Firebase Functions readiness has been inspected.
- Auth assumptions for callable functions have been documented.
- Chat path readiness has been documented.
- Reminder creation readiness has been documented.
- Reminder popup behavior readiness has been documented.
- Firestore rules readiness has been documented.
- Telegram readiness status is documented as pass, fail, or blocked.
- Gmail send remains documented as V2 / disabled for V1.
- Mobile readiness limitations are documented.
- Debug logging privacy risk is reviewed and documented.
- `docs/VALIDATION.md` is updated with validation status.
- `planning/RISKS.md` is updated with any new risks.
- `planning/QUESTIONS.md` is updated with any open questions.
- `planning/STATE.md` is updated with sprint result and next action.
```

---

# New File: `planning/sprints/002-v1-stability-validation/handoff-prompt.md`

```markdown
# Sprint 002 Builder Handoff Prompt

You are the Builder for Barbie / TrinaOS Voice.

This project uses the 120x Architect / Builder workflow.

The current sprint is:

`002-v1-stability-validation`

## Goal

Validate V1 launch behavior for auth, chat, reminders, Firestore rules, popup notifications, Hosting, and Telegram readiness without expanding scope into Gmail send or other V2 features.

## Read These Files First

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
12. `planning/sprints/002-v1-stability-validation/requirements.md`
13. `planning/sprints/002-v1-stability-validation/blueprint.md`
14. `planning/sprints/002-v1-stability-validation/acceptance.md`

## Before Making Changes

Summarize:

1. What this sprint is supposed to accomplish.
2. Which files you expect to inspect.
3. Which files you expect to modify.
4. Which validation commands you expect to run.
5. Any blockers or ambiguities.

Do not start implementation until the summary is approved.

## Approved Validation Scope

You may inspect and validate:

- frontend build
- lint status
- Firebase Hosting config
- Firebase Functions readiness
- callable auth assumptions
- chat path readiness
- reminder creation path
- reminder popup behavior
- Firestore rules
- Telegram webhook readiness
- Gmail V2 disabled boundary
- Capacitor/mobile readiness limits
- debug logging privacy risk

## Hard Boundaries

- Do not add new features.
- Do not re-enable Gmail send.
- Do not create a new Gmail integration.
- Do not expose or write secrets.
- Do not commit Firebase native mobile config files.
- Do not refactor major app structure.
- Do not deploy unless explicitly approved.
- Do not mark Telegram live unless secret and webhook setup are confirmed.

## Required Final Summary Format

End with this exact format:

# Sprint 002 Validation Summary

## Commands Run
List each command and result.

## Files Inspected
List key files inspected.

## Files Changed
List files changed. If none, say none.

## Validation Results
Use pass, fail, or blocked for each major area:

- Frontend build
- Lint
- Firebase Hosting
- Firebase Functions
- Auth
- Chat
- Reminders
- Reminder popups
- Firestore rules
- Telegram readiness
- Gmail V2 boundary
- Mobile readiness
- Debug logging

## Acceptance Criteria Status
Mark each acceptance item complete, incomplete, or blocked.

## Risks Added Or Updated
List risks added or updated.

## Questions Added Or Updated
List questions added or updated.

## Production Code Changed?
Answer yes or no. If yes, explain exactly what changed and why.

## Recommended Next Architect Pack
Give the next sprint name and one-sentence goal.
```

---

## Codex Apply-Pack Prompt

Use this prompt in Codex first, before asking Codex to validate anything:

```text
You are the Builder for Barbie / TrinaOS Voice.

Apply Architect Pack 002 — V1 Stability Validation to the project folder.

Create or update these planning files only:

- planning/STATE.md
- planning/DECISIONS.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/002-v1-stability-validation/requirements.md
- planning/sprints/002-v1-stability-validation/blueprint.md
- planning/sprints/002-v1-stability-validation/acceptance.md
- planning/sprints/002-v1-stability-validation/handoff-prompt.md

Rules:

- Do not modify production app code.
- Do not delete existing files.
- Do not overwrite unrelated documentation.
- Do not expose secrets.
- Preserve project name as Trina / Barbie / TrinaOS Voice where already used.
- Gmail send must remain V2 / disabled.

After applying the pack, summarize:

1. Files created.
2. Files updated.
3. Files skipped.
4. Any conflicts or assumptions.
5. Whether the sprint files are ready for Builder validation.

Stop after applying the Architect Pack.
Do not run validation yet.
```

---

## Next Builder Prompt After Pack Is Applied

After Codex applies this pack, start a new Codex chat for Sprint 002 and paste the contents of:

`planning/sprints/002-v1-stability-validation/handoff-prompt.md`

Codex must summarize its plan first and stop for approval before running validation.
