# Sprint 054 Handoff Prompt - Release Source of Truth and UAT Path Confirmation

Use this prompt with Codex after the Sprint 054 Architect Pack has been applied.

```text
Read the following files before making changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/API.md
- docs/VALIDATION.md
- docs/ARCHITECTURE.md
- planning/sprints/053-flutterflow-release-rollout-and-client-uat-prep/requirements.md
- planning/sprints/053-flutterflow-release-rollout-and-client-uat-prep/blueprint.md
- planning/sprints/053-flutterflow-release-rollout-and-client-uat-prep/acceptance.md
- planning/sprints/054-release-source-of-truth-and-uat-path-confirmation/requirements.md
- planning/sprints/054-release-source-of-truth-and-uat-path-confirmation/blueprint.md
- planning/sprints/054-release-source-of-truth-and-uat-path-confirmation/acceptance.md

Then summarize:

1. What Sprint 054 is supposed to accomplish.
2. Which files you expect to inspect or modify.
3. What commands or validation steps you expect to run.
4. How you will determine release source of truth.
5. How you will determine FlutterFlow status.
6. Which UAT values are confirmed vs still placeholders.
7. Any blockers, ambiguities, or missing operator inputs.

Important rules:

- Do not edit runtime/source files.
- Do not stage, commit, push, deploy, or run native builds.
- Do not touch CEO Briefing files.
- Confirm `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- Treat Sprint 054 as a release/UAT decision gate, not a production rollout.
- Keep unknown release/UAT values as placeholders.
- Final recommendation must be either `SHIP TO CLIENT UAT` or `HOLD`.
```
