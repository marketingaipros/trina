# Handoff Prompt

You are the Architect for the existing Barbie / TrinaOS Voice app.

Project folder:

```text
/Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice
```

Read first:
- `planning/STATE.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `planning/FILE_INVENTORY.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/DATA_MODEL.md`
- `docs/VALIDATION.md`

Create the next Architect Pack for a focused production-hardening sprint.

Recommended next sprint:
`002-v1-stability-validation`

Recommended sprint goal:
Validate and stabilize V1 launch behavior for auth, chat, reminders, Firestore rules, popup notifications, Hosting, and Telegram setup readiness without expanding scope into Gmail send.

Constraints:
- Do not redesign UI.
- Do not create a new app.
- Keep Gmail send V2/disabled.
- Do not store secrets in files.
- Require explicit acceptance criteria and validation commands.
