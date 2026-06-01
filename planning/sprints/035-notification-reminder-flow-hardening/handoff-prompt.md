# Sprint 035 Handoff Prompt

Read the following files before making changes:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/035-notification-reminder-flow-hardening/requirements.md`
- `planning/sprints/035-notification-reminder-flow-hardening/blueprint.md`
- `planning/sprints/035-notification-reminder-flow-hardening/acceptance.md`

Then summarize:

1. What Sprint 035 is supposed to accomplish.
2. Which files you expect to inspect.
3. Which files you might modify only if validation finds a concrete failure.
4. What tests or validation steps you will run.
5. Any blockers, ambiguities, or protected files.

Do not start implementation until I approve your summary.

Rules:

- Inspect first.
- Make runtime changes only if you find a concrete Sprint 035 acceptance failure.
- Keep fixes minimal and targeted.
- Do not add new notification features.
- Do not redesign Dashboard or Notifications.
- Do not touch CEO Briefing.
- Do not create or restore `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not modify backend, Firebase, Hermes, package/dependency, native, build, release, deployment, FlutterFlow export, auth, database, or live AI files.
- Do not stage, commit, or push.

Scope to validate:

- Dashboard/Home reachability
- Bottom navigation
- Assistant reachability
- Notifications reachability
- Empty Notifications fallback copy
- Notification/reminder item rendering
- Notification badge/count behavior, if present
- Task-related reminder/notification behavior, if already wired
- Mobile responsiveness
- Fixed bottom-nav overlap

After work is complete, report:

1. Whether runtime changes were needed.
2. Files changed.
3. Acceptance criteria passed.
4. Acceptance criteria incomplete or uncertain.
5. Validation commands and results:
   - `npm run lint`
   - `npm run build`
   - `git diff --check`
   - `test ! -f references/flutterflow/sprint-009/ceo-briefing.png`
   - `git status --branch --short`
6. Any risks, questions, or state updates needed.
7. Confirm protected scope stayed untouched.
8. Confirm no staging, commit, or push.
