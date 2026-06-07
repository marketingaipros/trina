# Sprint 053 Blueprint - FlutterFlow Release Rollout and Client UAT Prep

## Builder Role

Act as the Builder Layer.

This sprint is a release-readiness and UAT-prep sprint.

Do not implement product changes.

Do not stage, commit, push, deploy, or run native builds unless the operator explicitly approves that separate step.

## Step 1 - Read Required Context

Read:

```text
AGENTS.md
planning/STATE.md
planning/DECISIONS.md
planning/DOMAIN.md
planning/RISKS.md
planning/QUESTIONS.md
docs/VALIDATION.md
docs/API.md
planning/sprints/053-flutterflow-release-rollout-and-client-uat-prep/requirements.md
planning/sprints/053-flutterflow-release-rollout-and-client-uat-prep/blueprint.md
planning/sprints/053-flutterflow-release-rollout-and-client-uat-prep/acceptance.md
```

Then summarize before executing.

## Step 2 - Confirm Repo State

Run:

```bash
git status --branch --short
git log -1 --oneline
git diff --check
git diff --cached --name-only
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Record results.

If unexpected staged files, runtime/source drift, or CEO Briefing reappearance is found, stop and report `HOLD`.

## Step 3 - Rerun Repo Validation

Run:

```bash
npm run lint
npm run build
```

Record:

- Pass/fail.
- Build warnings.
- Bundle sizes.
- Whether warnings match Sprint 051/Sprint 052 accepted watch-only warnings.

If lint/build fails or warnings changed, stop and report `HOLD`.

## Step 4 - Identify FlutterFlow / Deployment Path

Inspect repo docs/config only.

Do not run deploy commands unless explicitly approved.

Determine which release path appears true:

```text
A. GitHub repo is source of truth.
B. FlutterFlow project is source of truth.
C. FlutterFlow export feeds this repo.
D. Repo feeds deployment and FlutterFlow is only reference/history.
E. Unknown.
```

Update `docs/API.md` and `docs/VALIDATION.md` with the confirmed or unresolved path.

If the path cannot be confirmed, keep final recommendation as `HOLD`.

## Step 5 - Prepare Runtime Smoke Checklist

Create/update validation documentation with smoke flows:

- App opens.
- Login/auth works or blocker is documented.
- Main navigation works.
- Calendar view loads.
- Finance view loads.
- Knowledge base view loads.
- Short-height/mobile layout spot checks pass.
- No missing critical assets.
- No runtime console errors.
- CEO Briefing PNG remains absent.

Do not claim flows passed unless actually tested.

## Step 6 - Prepare Client UAT Instructions

Add a client UAT checklist to Sprint 053 acceptance or validation docs.

The checklist must include:

- Who tests first: `<trusted-client-tester>`.
- What link/build they use: `<uat-link-or-build-placeholder>`.
- What flows they test: `<client-uat-flows>`.
- What they should not test yet: `<out-of-scope-uat-flows>`.
- How they report issues: `<uat-issue-channel>`.
- What counts as blocker.
- What counts as minor polish.
- Who approves go-live: `<go-live-approver>`.

Use placeholders where operator input is missing.

## Step 7 - Update Sprint 053 Closeout Docs

If validation work completes, update only approved planning/docs files:

```text
planning/STATE.md
planning/RISKS.md
planning/QUESTIONS.md
docs/VALIDATION.md
docs/API.md
planning/sprints/053-flutterflow-release-rollout-and-client-uat-prep/acceptance.md
```

Do not edit runtime/source files.

## Step 8 - Final Report

Report:

1. Commands run.
2. Pass/fail for each command.
3. Build warning classification.
4. Bundle sizes if reported.
5. FlutterFlow/deployment path finding.
6. Runtime smoke status.
7. Client UAT package status.
8. Files changed.
9. Final recommendation:
   - `SHIP TO CLIENT UAT`
   - `HOLD`
10. Confirmation that nothing was staged, committed, pushed, deployed, or native-built.
11. Confirmation that CEO Briefing files were not touched.
12. Confirmation that `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
