# Sprint 052 Handoff Prompt - Release-Candidate Final Verification / Ship-or-Hold Gate

Read the following files before making changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/052-release-candidate-final-verification-ship-or-hold-gate/requirements.md
- planning/sprints/052-release-candidate-final-verification-ship-or-hold-gate/blueprint.md
- planning/sprints/052-release-candidate-final-verification-ship-or-hold-gate/acceptance.md

Then summarize:

1. What Sprint 052 is supposed to accomplish.
2. Which files you expect to modify.
3. What validation steps you will run.
4. Any blockers, ambiguities, or risky assumptions.
5. Whether you expect this sprint to require runtime changes, docs-only changes, or both.

Do not start implementation until the operator approves your summary.

Sprint rules:

- Treat Sprint 052 as a release-candidate final verification / ship-or-hold gate.
- Do not make runtime/source changes unless validation finds a release-blocking issue and the operator explicitly approves a fix.
- Do not perform broad bundle optimization.
- Do not refactor auth behavior.
- Do not change Firebase, backend, dependencies, native files, routing, deployment, or CEO Briefing files.
- Do not stage files.
- Do not commit.
- Do not push.
- Do not deploy.
- Do not run native builds.
- Confirm `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

Expected validation commands:

```bash
git status --branch --short
git log -1 --oneline
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --cached --name-only
npm run lint
npm run build
git diff --name-only
git status --branch --short
git diff --cached --name-only
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

When finished, report:

1. Starting branch status and latest commit.
2. Exact validation commands and results.
3. Exact build warning text.
4. Warning classification and rationale.
5. Bundle output sizes if reported.
6. Files changed.
7. Whether runtime files changed.
8. Final `SHIP` or `HOLD` recommendation with rationale.
9. Confirmation that `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
10. Confirmation that nothing was staged, committed, pushed, deployed, or native-built.
