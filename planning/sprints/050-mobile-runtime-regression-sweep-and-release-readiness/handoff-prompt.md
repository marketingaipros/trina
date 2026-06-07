# Sprint 050 Handoff Prompt - Mobile Runtime Regression Sweep and Release Readiness

Copy/paste this into Codex after the Architect Pack has been applied to the project folder and implementation is approved.

```text
Read the following files before making changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/requirements.md
- planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/blueprint.md
- planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/acceptance.md
- planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/handoff-prompt.md

Then summarize:

1. What Sprint 050 is supposed to accomplish.
2. The runtime views and files you expect to inspect.
3. The files you expect to modify, if any.
4. The validation commands and mobile viewport checks you will run.
5. Any blockers or ambiguities.

Do not start implementation until I approve your summary.

Sprint goal:
Confirm the app remains stable, usable, and visually consistent after Sprints 040-049, with special focus on mobile viewport behavior, core navigation, short-height layouts, bottom navigation clearance, and recently hardened compact touch targets.

Primary views:
- Home / Dashboard
- Calendar
- Tasks
- Finance
- Knowledge Base
- Notifications/reminders
- App shell / bottom navigation

Likely files to inspect:
- App.tsx
- components/VoiceDashboard.tsx
- components/CalendarView.tsx
- components/TasksView.tsx
- components/FinanceView.tsx
- components/KnowledgeBaseView.tsx
- components/NotificationsView.tsx

Guardrails:
- Do not touch CEO Briefing.
- Do not create or restore references/flutterflow/sprint-009/ceo-briefing.png.
- Do not modify Firebase, backend, package/dependency, routing, native config, auth, release, deployment, or data model files.
- Do not stage, commit, or push.
- Do not make broad visual redesign changes.
- Runtime changes should be minimal and tied only to confirmed Sprint 050 regressions.

Validation expectation:
- Run git diff --check.
- Run test ! -f references/flutterflow/sprint-009/ceo-briefing.png.
- Run npm run lint.
- Run npm run build.
- Validate 390x844 and 360x740.
- Confirm no horizontal overflow.
- Confirm no primary action/input/empty-state CTA is hidden behind the fixed bottom nav.
- Confirm Calendar and Tasks preserve Sprint 049 touch-target behavior.
- Report git diff --name-only, git status --branch --short, and git diff --cached --name-only.
```
