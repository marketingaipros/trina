# Sprint 058 Handoff Prompt

Read the following files before making changes:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/VALIDATION.md`
- `planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/requirements.md`
- `planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/blueprint.md`
- `planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/acceptance.md`

Then summarize:

1. What Sprint 058 is supposed to accomplish.
2. Which files you expect to inspect.
3. Which files you may need to modify.
4. What tests or validation steps you will run.
5. Any blockers or ambiguities.

Do not start implementation until I approve your summary.

Sprint 058 goal:

Unblock and validate the Firebase auth/backend smoke path for Barbie. Prove the real web app brain path:

```text
askBarbie()
-> ensureBarbieAuth()
-> chatWithBarbie
-> real backend/model response
-> visible Barbie reply
```

Rules:

- Do not fake backend/model success.
- Do not expose secrets.
- Do not deploy.
- Do not push.
- Do not package iOS.
- Do not start FlutterFlow/native migration.
- Do not start PWA/home-screen work.
- Do not create or restore the CEO Briefing file.
- Keep changes small and tied to auth/backend smoke.
