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
