# Sprint 051 Blueprint - Release Candidate Build Warning Triage and Stability Gate

## Implementation Strategy

Sprint 051 is a release-candidate warning triage and stability gate.

Start by capturing the current build warnings and inspecting the source paths behind them. Do not patch runtime or source files unless the warning triage confirms a direct release-relevant issue and the user approves implementation.

If a fix is approved, keep it small and local. Prefer import ownership cleanup or documented release acceptance over broad chunking, dependency, routing, or architecture changes.

## Step 1 - Read Current Planning

Read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/051-release-candidate-build-warning-triage-and-stability-gate/requirements.md`
- `planning/sprints/051-release-candidate-build-warning-triage-and-stability-gate/blueprint.md`
- `planning/sprints/051-release-candidate-build-warning-triage-and-stability-gate/acceptance.md`
- `planning/sprints/051-release-candidate-build-warning-triage-and-stability-gate/handoff-prompt.md`

Then summarize before implementation:

- Sprint goal.
- Warnings to triage.
- Files to inspect.
- Files expected to modify, if any.
- Validation commands.
- Guardrails and protected paths.

## Step 2 - Capture Baseline Build Warning State

Run:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run build
git status --branch --short
```

Record whether the build passes and copy the warning categories into the sprint closeout notes.

## Step 3 - Inspect Warning Sources

Use `rg` to inspect:

- Static imports of `services/authService.ts`.
- Dynamic imports of `services/authService.ts`.
- Any build configuration relevant to chunk warnings.
- Script definitions that establish what `npm run build` actually runs.

Likely files:

- `services/authService.ts`
- importing source files found by `rg`
- `vite.config.ts`, only if needed
- `package.json`, for script context

## Step 4 - Classify Each Warning

For each warning, record:

- Warning text/category.
- Likely source.
- Release impact.
- Classification:
  - accepted for release,
  - watch-only,
  - or fix-required.
- Smallest safe next action.

Do not let bundle optimization become a broad release refactor unless the warning is tied to a confirmed user-visible stability issue.

## Step 5 - Apply Approved Small Fixes Only If Needed

If implementation is approved and a fix is required:

- Preserve auth initialization behavior.
- Preserve existing routing and handlers.
- Preserve the pink/white Barbie UI.
- Avoid dependency, package, Firebase, backend, native, deploy, or release changes.
- Keep the edit limited to the warning owner.

If no fix is required, keep runtime/source files untouched and close out as a stability-gate no-op.

## Step 6 - Update Docs

After triage and any approved implementation, update:

- `planning/STATE.md`
- `planning/RISKS.md`
- `docs/VALIDATION.md`
- `planning/sprints/051-release-candidate-build-warning-triage-and-stability-gate/acceptance.md`

Update `planning/QUESTIONS.md` only if Sprint 051 creates a direct open release question.

## Step 7 - Final Validation

Run:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
git diff --cached --name-only
```

No staging, commit, push, deploy, or native build during implementation unless explicitly requested later.

## Guardrails

- Do not touch CEO Briefing.
- Do not create or restore `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not modify Firebase, backend, package/dependency, routing, native config, auth, release, deployment, or data model files unless a future approved pack explicitly expands scope.
- Do not stage, commit, or push.
- Keep the existing pink/white Barbie UI unchanged.
