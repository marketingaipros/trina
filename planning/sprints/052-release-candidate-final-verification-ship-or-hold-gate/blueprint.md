# Sprint 052 Blueprint - Release-Candidate Final Verification / Ship-or-Hold Gate

## Implementation Strategy

Keep this sprint as a release validation gate.

Do not edit runtime/source files unless validation discovers a release-blocking defect and the operator explicitly approves a fix.

## Step 1 - Confirm Starting State

Run:

```bash
git status --branch --short
git log -1 --oneline
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Expected:

```text
## main...origin/main
```

Expected latest commit:

```text
34e1a32 docs: close sprint 051 release warning triage gate
```

The CEO Briefing file must be absent.

## Step 2 - Run Pre-Validation Hygiene

Run:

```bash
git diff --check
git diff --cached --name-only
```

Expected:

- no whitespace errors
- no staged files

## Step 3 - Run Release Validation

Run:

```bash
npm run lint
npm run build
```

Capture:

- pass/fail status
- exact build warnings
- bundle output sizes if reported

## Step 4 - Compare Warnings Against Sprint 051

Classify each warning:

- accepted for release
- watch-only
- fix-required

Known Sprint 051 watch-only warnings:

- `services/authService.ts` mixed static/dynamic import chunk-placement warning
- large JS chunk warning

If the warnings are unchanged or materially equivalent, keep them accepted/watch-only.

If a warning changed, became more severe, or new warnings appeared, document exact text and rationale.

## Step 5 - Update Sprint 052 Docs

Update:

```text
planning/STATE.md
planning/RISKS.md
docs/VALIDATION.md
planning/sprints/052-release-candidate-final-verification-ship-or-hold-gate/acceptance.md
```

The acceptance file should record:

- commands run
- warning state
- ship-or-hold recommendation
- protected file confirmation
- whether runtime files changed

## Step 6 - Final Repository Hygiene

Run:

```bash
git diff --name-only
git status --branch --short
git diff --cached --name-only
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Expected:

- only approved docs/planning files changed
- no staged files
- protected CEO Briefing file remains absent

## File Modification Rules

Allowed by default:

```text
planning/STATE.md
planning/RISKS.md
docs/VALIDATION.md
planning/sprints/052-release-candidate-final-verification-ship-or-hold-gate/acceptance.md
```

Created by applying Architect Pack:

```text
architect-packs/trina-052-release-candidate-final-verification-ship-or-hold-gate-architect-pack.md
planning/sprints/052-release-candidate-final-verification-ship-or-hold-gate/requirements.md
planning/sprints/052-release-candidate-final-verification-ship-or-hold-gate/blueprint.md
planning/sprints/052-release-candidate-final-verification-ship-or-hold-gate/handoff-prompt.md
```

Not allowed unless explicitly approved:

```text
App.tsx
services/authService.ts
services/firestoreService.ts
package.json
package-lock.json
vite.config.ts
firebase files
native files
deployment files
references/flutterflow/sprint-009/ceo-briefing.png
```
