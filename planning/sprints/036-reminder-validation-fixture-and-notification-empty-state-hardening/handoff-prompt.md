# Sprint 036 Handoff Prompt - Reminder Validation Fixture and Notification Empty-State Hardening

Read these files before making changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/036-reminder-validation-fixture-and-notification-empty-state-hardening/requirements.md
- planning/sprints/036-reminder-validation-fixture-and-notification-empty-state-hardening/blueprint.md
- planning/sprints/036-reminder-validation-fixture-and-notification-empty-state-hardening/acceptance.md

Then summarize:

1. What Sprint 036 is supposed to accomplish.
2. Which files you expect to modify.
3. What tests or validation steps you will run.
4. Any blockers, ambiguities, or risks.

Do not start implementation until I approve your summary.

Rules:

- Inspect first.
- Prefer no runtime changes if existing app behavior can validate the populated reminder-backed notification path.
- Make runtime changes only if there is no repeatable local validation path.
- Keep runtime changes narrow and local-only.
- Do not touch CEO Briefing.
- Do not create or modify `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not modify backend, Firebase rules, Hermes, package/dependency, native, build, release, or deployment files.
- Do not stage, commit, or push.

Potential files to inspect:

- `App.tsx`
- `components/Dashboard.tsx`
- `components/NotificationsView.tsx`
- `components/Navigation.tsx`
- `components/TasksView.tsx`
- `types.ts`
- Any existing local notification/reminder storage/service/helper file already used by the app

Validation commands:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git status --branch --short
```

Completion report must include:

1. Whether runtime changes were needed.
2. Acceptance criteria completed.
3. Acceptance criteria incomplete or uncertain.
4. Files changed.
5. Validation commands run and results.
6. Browser/manual checks completed.
7. Risks introduced.
8. Any decisions that should be added to `planning/DECISIONS.md`.
9. Any status updates that should be added to `planning/STATE.md`.
10. Final `git status --branch --short`.
