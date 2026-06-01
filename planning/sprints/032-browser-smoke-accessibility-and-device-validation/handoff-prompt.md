# Sprint 032 Builder Handoff Prompt

You are applying Sprint 032: `032-browser-smoke-accessibility-and-device-validation`.

Sprint 032 is a validation sprint, not a feature-build sprint.

Do not edit runtime files at the start of this sprint.

Read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/032-browser-smoke-accessibility-and-device-validation/requirements.md`
- `planning/sprints/032-browser-smoke-accessibility-and-device-validation/blueprint.md`
- `planning/sprints/032-browser-smoke-accessibility-and-device-validation/acceptance.md`

Then report:

1. What Sprint 032 is supposed to validate.
2. Which files you expect to inspect.
3. Which automated commands you will run.
4. Which browser/device smoke checks you will perform.
5. How microphone validation will be handled if permission is blocked.
6. How accessibility/touch checks will be performed.
7. How CEO Briefing and `references/flutterflow/sprint-009/ceo-briefing.png` will stay untouched.
8. Which protected surfaces will remain unchanged.

After the summary, perform validation only.

Inspect these runtime files for validation context only:

- `App.tsx`
- `components/Navigation.tsx`
- `components/Dashboard.tsx`
- `components/VoiceDashboard.tsx`
- `components/TasksView.tsx`
- `components/NotificationsView.tsx`
- `components/CalendarView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`

Run:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
git diff --name-only
git diff --cached --name-only
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

If possible, run the app locally with:

```bash
npm run dev
```

Validate:

- Dashboard/Home
- Assistant / Voice Entry
- Tasks
- Notifications
- Calendar
- Finance
- Knowledge Base
- bottom navigation
- Home/back controls
- typed Assistant capture to Tasks
- empty Assistant input handling
- task toggle/edit/delete usability
- Sprint 031 accessibility labels/titles
- touch/mobile usability
- microphone start/stop if permission is available

Do not create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Do not modify runtime, Firebase, Hermes, backend, auth, database, live AI, package/dependency, FlutterFlow export, native, build, release, deployment, or CEO Briefing files without explicit operator approval after a confirmed issue report.
