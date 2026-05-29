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
