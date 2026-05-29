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
