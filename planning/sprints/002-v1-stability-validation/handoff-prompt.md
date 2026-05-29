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
