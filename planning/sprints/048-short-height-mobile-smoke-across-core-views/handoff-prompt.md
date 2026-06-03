# Sprint 048 Handoff Prompt - Short-Height Mobile Smoke Across Core Views

Read the following files before making changes:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `planning/sprints/048-short-height-mobile-smoke-across-core-views/requirements.md`
- `planning/sprints/048-short-height-mobile-smoke-across-core-views/blueprint.md`
- `planning/sprints/048-short-height-mobile-smoke-across-core-views/acceptance.md`

Then summarize:

1. What Sprint 048 is supposed to accomplish.
2. Which files you expect to inspect and potentially modify.
3. What validation steps you will run.
4. Any blockers or ambiguities.

Do not start implementation until I approve your summary.

After approval, inspect Tasks, Calendar, Finance, Knowledge Base, and Notifications/reminders if reachable at `390x844` and `360x740`.

Only make runtime changes if a real issue is confirmed. Keep any fix local and minimal.

Guardrails:

- Do not modify CEO Briefing files.
- Do not recreate or add `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not touch backend, Firebase, native, package, or release files.
- Do not stage, commit, or push anything.

Run validation:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
git diff --cached --name-only
```

Report findings, files changed, validation results, browser/mobile results, and guardrail confirmations.
