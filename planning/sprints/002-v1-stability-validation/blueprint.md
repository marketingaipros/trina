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
