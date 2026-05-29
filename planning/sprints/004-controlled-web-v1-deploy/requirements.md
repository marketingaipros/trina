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
