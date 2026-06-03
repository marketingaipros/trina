# Sprint 049 Handoff Prompt - Compact Touch Target Standardization

Copy/paste this into Codex after the Architect Pack has been applied to the project folder.

```text
Read the following files before making changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/049-compact-touch-target-standardization/requirements.md
- planning/sprints/049-compact-touch-target-standardization/blueprint.md
- planning/sprints/049-compact-touch-target-standardization/acceptance.md

Then summarize:

1. What Sprint 049 is supposed to accomplish.
2. The files you expect to inspect.
3. The files you expect to modify, if any.
4. The tests or validation steps you will run.
5. Any blockers or ambiguities.

Do not start implementation until I approve your summary.

Sprint goal:
Standardize compact interactive controls so core mobile views preserve a practical 44px touch-target standard without introducing layout regressions.

Primary targets:
- Calendar day cells
- Calendar/task filter chips
- Any compact interactive controls confirmed during inspection

Guardrails:
- Do not touch CEO Briefing files.
- Do not create references/flutterflow/sprint-009/ceo-briefing.png.
- Do not modify backend, Firebase, auth, package/dependency, native build, or deployment files.
- Do not stage, commit, or push.
- Do not make broad visual redesign changes.
- Runtime changes should be minimal and tied to confirmed compact touch-target issues.

Validation expectation:
- Check 390x844 and 360x740.
- Confirm no horizontal overflow.
- Confirm no primary action/input is hidden behind the fixed bottom nav.
- Confirm changed controls meet or intentionally approximate the 44px touch-target standard.
- Run git diff --check.
- Run test ! -f references/flutterflow/sprint-009/ceo-briefing.png.
- Run npm run lint.
- Run npm run build.
- Report git diff --name-only, git status --branch --short, and git diff --cached --name-only.
```
