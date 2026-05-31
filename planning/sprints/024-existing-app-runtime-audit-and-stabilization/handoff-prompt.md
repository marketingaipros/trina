# Sprint 024 Builder Handoff Prompt

You are Codex acting as the Builder Layer for Trina.

Sprint 023 reset the project direction. CEO Briefing is deferred, not complete, and not blocking app completion.

## First: Apply This Architect Pack

Create or update the Sprint 024 planning/docs files from:

```text
architect-packs/trina-024-existing-app-runtime-audit-and-stabilization-architect-pack.md
```

Create/update these files:

```text
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/ARCHITECTURE.md
docs/API.md
docs/VALIDATION.md
planning/sprints/024-existing-app-runtime-audit-and-stabilization/requirements.md
planning/sprints/024-existing-app-runtime-audit-and-stabilization/blueprint.md
planning/sprints/024-existing-app-runtime-audit-and-stabilization/acceptance.md
planning/sprints/024-existing-app-runtime-audit-and-stabilization/handoff-prompt.md
```

Do not change runtime app code while applying the Architect Pack.

## Second: Read Before Implementation

After applying the Architect Pack, read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/VALIDATION.md`
- `planning/sprints/024-existing-app-runtime-audit-and-stabilization/requirements.md`
- `planning/sprints/024-existing-app-runtime-audit-and-stabilization/blueprint.md`
- `planning/sprints/024-existing-app-runtime-audit-and-stabilization/acceptance.md`

Then summarize:

1. What Sprint 024 is supposed to accomplish.
2. Which files you expect to modify.
3. What tests or validation steps you will run.
4. Any blockers or ambiguities.

Stop after the summary. Do not implement runtime changes until approved.

## Sprint 024 Goal

Audit and stabilize the visible non-CEO app shell:

- Dashboard navigation.
- Assistant/voice entry.
- Tasks.
- Finance.
- Calendar.
- Notifications/reminders.
- Settings-equivalent paths.

Every visible non-CEO path should either work, render safely, or show a clear intentional placeholder.

## Protected Scope

Do not touch:

- CEO Briefing build/rebuild.
- CEO Briefing screenshot evidence.
- `references/flutterflow/sprint-009/ceo-briefing.png`.
- FlutterFlow generated exports.
- Firebase.
- Backend.
- Hermes.
- Package/dependency files unless explicitly approved.
- Native iOS/Android files.
- Release/deployment/build artifacts.

## Validation Expected After Approved Implementation

Run:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
```

Perform manual browser smoke test for:

- Dashboard.
- Navigation.
- Assistant/voice entry.
- Tasks.
- Finance.
- Calendar.
- Notifications/reminders.
- Reminder popup/notification behavior.
- Settings-equivalent path if present.

Do not stage, commit, or push unless explicitly instructed.
