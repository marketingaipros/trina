# Sprint 040 Handoff Prompt

Paste this into Codex after the Sprint 040 Architect Pack has been applied to the project folder.

```text
Read the following files before making changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/requirements.md
- planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/blueprint.md
- planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/acceptance.md
- planning/sprints/039-forward-state-and-next-runtime-priority-selection/requirements.md
- planning/sprints/039-forward-state-and-next-runtime-priority-selection/blueprint.md
- planning/sprints/039-forward-state-and-next-runtime-priority-selection/acceptance.md
- planning/sprints/040-mobile-accessibility-and-touch-target-hardening/requirements.md
- planning/sprints/040-mobile-accessibility-and-touch-target-hardening/blueprint.md
- planning/sprints/040-mobile-accessibility-and-touch-target-hardening/acceptance.md

Then inspect these runtime files without editing:

- App.tsx
- components/Navigation.tsx
- components/Dashboard.tsx
- components/VoiceDashboard.tsx
- components/TasksView.tsx
- components/NotificationsView.tsx
- components/CalendarView.tsx
- components/FinanceView.tsx
- components/KnowledgeBaseView.tsx

Summarize:

1. What Sprint 040 is supposed to accomplish.
2. Which files you inspected.
3. Any confirmed mobile accessibility or touch-target issues.
4. Which files you would edit if implementation is approved.
5. What validation commands and browser checks you will run.
6. Any blockers or ambiguities.

Rules:

- Do not start implementation until the Builder summary is approved.
- Do not stage, commit, or push.
- Do not edit App.tsx unless a routing or focus-management issue cannot be fixed locally and the operator explicitly approves it.
- Keep runtime edits, if later approved, inside the Sprint 040 component allowlist.
- Do not touch CEO Briefing.
- Do not create `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not modify backend, Firebase, package, native, build, release, deployment, evidence, generated FlutterFlow, auth, database, Gmail, Telegram, or live AI files.
```
