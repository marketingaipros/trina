# Sprint 059 Handoff Prompt

Read the Sprint 059 planning files before making changes.

Start with:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/ARCHITECTURE.md
- docs/API.md
- docs/VALIDATION.md
- planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/acceptance.md
- planning/sprints/059-rerun-barbie-backend-smoke-after-auth-unblock/requirements.md
- planning/sprints/059-rerun-barbie-backend-smoke-after-auth-unblock/blueprint.md
- planning/sprints/059-rerun-barbie-backend-smoke-after-auth-unblock/acceptance.md

Context:

The operator enabled Firebase Anonymous sign-in after Sprint 058. Sprint 059 must rerun the typed Barbie backend smoke to prove whether the backend/model path now works.

Before editing files, summarize:

1. What Sprint 059 is supposed to accomplish.
2. Which files you expect to inspect.
3. Which validation commands you will run.
4. Which browser smoke steps you will run.
5. What counts as PASS, AUTH STILL BLOCKED, CALLABLE BLOCKED, or MODEL/BACKEND BLOCKED.
6. Any blockers or ambiguities.

Rules:

- Do not change files during the start checkpoint.
- Do not stage, commit, or push.
- Do not deploy.
- Do not edit Firebase settings.
- Do not touch credentials or expose `.env.local` values.
- Do not touch FlutterFlow files.
- Do not run native builds.
- Do not touch PWA/home-screen files.
- Do not create or update CEO Briefing files.
- Do not fake or mock a backend response.
- Do not mark success unless a real Barbie backend/model response appears.

After the read-only checkpoint, wait for approval before implementation or file changes.
