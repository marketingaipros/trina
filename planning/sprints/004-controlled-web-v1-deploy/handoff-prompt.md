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
