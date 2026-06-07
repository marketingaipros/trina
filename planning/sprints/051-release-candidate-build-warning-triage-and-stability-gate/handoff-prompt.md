# Sprint 051 Handoff Prompt - Release Candidate Build Warning Triage and Stability Gate

Copy/paste this into Codex after the Architect Pack has been applied to the project folder and implementation is approved.

```text
Read the following files before making changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/051-release-candidate-build-warning-triage-and-stability-gate/requirements.md
- planning/sprints/051-release-candidate-build-warning-triage-and-stability-gate/blueprint.md
- planning/sprints/051-release-candidate-build-warning-triage-and-stability-gate/acceptance.md
- planning/sprints/051-release-candidate-build-warning-triage-and-stability-gate/handoff-prompt.md

Then summarize:

1. What Sprint 051 is supposed to accomplish.
2. The build warnings you expect to triage.
3. The files you expect to inspect.
4. The files you expect to modify, if any.
5. The validation commands you will run.
6. Any blockers or ambiguities.

Do not start implementation until I approve your summary.

Sprint goal:
Triage the current release-candidate build warnings, determine whether they are acceptable for release or require a small follow-up fix, and preserve the Sprint 050 stable runtime baseline.

Warnings to triage:
- Vite mixed static/dynamic import warning involving services/authService.ts.
- Vite large production bundle warning.

Likely files to inspect:
- services/authService.ts
- files importing services/authService.ts
- vite.config.ts, only if build configuration context is needed
- package.json, for script context only

Guardrails:
- Do not touch CEO Briefing.
- Do not create or restore references/flutterflow/sprint-009/ceo-briefing.png.
- Do not modify Firebase, backend, package/dependency, routing, native config, auth, release, deployment, or data model files unless a future approved pack explicitly expands scope.
- Do not stage, commit, push, deploy, or run native builds.
- Do not make broad visual redesign changes.
- Runtime/source changes should be minimal and tied only to confirmed Sprint 051 warning-related release risk.

Validation expectation:
- Run git diff --check.
- Run test ! -f references/flutterflow/sprint-009/ceo-briefing.png.
- Run npm run lint after any approved implementation.
- Run npm run build.
- Report warning classifications and release rationale.
- Report git diff --name-only, git status --branch --short, and git diff --cached --name-only.
```
