# Sprint 055 Handoff Prompt - Runtime Source Reconciliation and Backend Integration Plan

Use this prompt with Codex.

```text
Apply Sprint 055 as a docs/planning and repo-inspection sprint only.

Sprint:
planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/

Goal:
Reconcile the active runtime source, FlutterFlow status, Firebase status, and Hermes/backend integration status so the next sprint can safely plan actual backend integration work.

Read before making changes:
- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/ARCHITECTURE.md
- docs/API.md
- docs/VALIDATION.md
- planning/sprints/054-release-source-of-truth-and-uat-path-confirmation/requirements.md
- planning/sprints/054-release-source-of-truth-and-uat-path-confirmation/blueprint.md
- planning/sprints/054-release-source-of-truth-and-uat-path-confirmation/acceptance.md
- planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/requirements.md
- planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/blueprint.md
- planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/acceptance.md

Before editing, inspect the repo for:
- Runtime source structure
- package/build tooling
- Firebase config and references
- Capacitor/mobile config
- FlutterFlow references
- Hermes/backend/API references
- assistant/voice/typed flow implementation evidence

Do not implement runtime code.

Allowed files to create or update:
- planning/STATE.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/ARCHITECTURE.md
- docs/API.md
- docs/VALIDATION.md
- planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/requirements.md
- planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/blueprint.md
- planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/acceptance.md
- planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/handoff-prompt.md

Update planning/DECISIONS.md only if repo inspection proves a durable decision or the operator explicitly approved the decision.

Forbidden:
- Do not modify runtime/source files.
- Do not add Firebase code.
- Do not add Hermes code.
- Do not export/import FlutterFlow code.
- Do not deploy.
- Do not run native builds.
- Do not touch credentials.
- Do not create or restore CEO Briefing files.
- Do not mark the project ready for client UAT.

Required docs/planning output:
1. Update planning/STATE.md with a Runtime Source Reconciliation section.
2. Update planning/RISKS.md with source-of-truth and integration risks.
3. Update planning/QUESTIONS.md with only questions still unresolved after repo inspection.
4. Update docs/ARCHITECTURE.md with active runtime, FlutterFlow, Firebase, and Hermes/backend status.
5. Update docs/API.md with existing and missing integration contracts.
6. Update docs/VALIDATION.md with validation rules before internal UAT/client UAT.

Validation:
Run:
- git status --branch --short
- git diff --check
- test ! -f references/flutterflow/sprint-009/ceo-briefing.png

If safe package scripts exist, also run:
- npm run lint
- npm run build

Closeout report:
1. Files created/updated.
2. Runtime source-of-truth finding.
3. FlutterFlow finding.
4. Firebase finding.
5. Hermes/backend finding.
6. Remaining blockers/questions.
7. Recommended Sprint 056 title and scope.
8. Validation commands and results.
9. Confirmation CEO Briefing remains absent.
10. Confirmation no runtime/source files, deploys, native builds, credentials, or release files were involved.
11. Final recommendation: HOLD, INTERNAL INTEGRATION NEXT, or READY FOR INTERNAL UAT.

Do not commit or push unless I explicitly ask.
```
