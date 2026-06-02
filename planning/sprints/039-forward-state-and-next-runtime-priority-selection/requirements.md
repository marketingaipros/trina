# Sprint 039 Requirements - Forward State and Next Runtime Priority Selection

## Purpose

Sprint 039 is a controlled planning and validation checkpoint after the clean Sprint 038 smoke-test pass.

The goal is to preserve the clean app baseline and choose the safest next runtime priority for Sprint 040.

## Background

Sprint 038 confirmed that the current app shell and core views pass smoke validation without runtime changes.

That means the next sprint should not guess. It should be chosen from the current product priorities, known risks, and validation history.

## Requirements

### R1 - Confirm Clean Baseline

The Builder must confirm the repo is clean or explain any current changes.

Required command:

```bash
git status --branch --short
```

### R2 - Preserve Sprint 038 Protection Rules

The Builder must confirm:

- No CEO Briefing work starts.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- No backend files are modified.
- No Firebase files are modified.
- No package/dependency files are modified.
- No native/build/release/deployment files are modified.
- No runtime files are modified during Sprint 039.

### R3 - Review Current Planning State

The Builder must read:

- `planning/STATE.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `planning/DECISIONS.md`
- `docs/VALIDATION.md`
- Sprint 038 files
- Sprint 039 files

### R4 - Recommend Sprint 040 Direction

The Builder must recommend one focused Sprint 040 runtime direction.

The recommendation should include:

- Sprint name.
- Why this is the safest next step.
- Expected runtime files.
- Expected validation.
- Risks or blockers.
- Whether a new Architect Pack is required before implementation.

### R5 - Do Not Implement Sprint 040

Sprint 039 must not start implementation for Sprint 040.

The output is a recommendation, not code.

## Non-Goals

- No runtime polish unless a docs typo blocks clarity.
- No app code changes.
- No dependency updates.
- No release preparation.
- No screenshot evidence.
- No CEO Briefing work.

## Success Standard

Sprint 039 succeeds when the project has a clean forward plan and a recommended Sprint 040 target.
