# Sprint 010 Acceptance Criteria - FlutterFlow CEO Briefing Screen Fix

Sprint 010 is complete only when all applicable criteria are met.

## Scope Acceptance

- CEO Briefing screen is created or rebuilt in FlutterFlow.
- Work remains FlutterFlow prototype-only.
- Mock/static content is used.
- No runtime app code is modified.
- No Firebase work is performed.
- No Hermes/API work is performed.
- No generated FlutterFlow export files are committed.
- No package, native, release, or secret files are modified.

## Screen Acceptance

- CEO Briefing page exists in the FlutterFlow project.
- CEO Briefing matches the existing Trina prototype style.
- CEO Briefing includes:
  - `Today's Priorities`
  - `Follow-ups`
  - `Decisions Needed`
  - `Next Best Move`
  - `Ask Trina to Prioritize`
- CEO Briefing has a clear way back to Dashboard.

## Navigation Acceptance

The following prototype paths work in FlutterFlow Test/Run mode:

```text
Dashboard -> CEO Briefing
CEO Briefing -> Ask Trina to Prioritize -> Assistant
CEO Briefing -> Dashboard
```

## Evidence Acceptance

- Screenshot exists at:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

- `references/flutterflow/sprint-009/click-path-notes.md` is updated to mark CEO Briefing evidence present.
- No placeholder file such as `ceo-briefing.png pending.png` exists.

## Documentation Acceptance

- `planning/STATE.md` reflects Sprint 010 status.
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md` notes that CEO Briefing was fixed in Sprint 010, if relevant.
- `docs/VALIDATION.md` reflects the validation/evidence process, if relevant.
- `planning/RISKS.md` and `planning/QUESTIONS.md` are updated only if risks/questions changed.

## Validation Commands

The Builder/operator should run:

```bash
git status --branch --short
find references/flutterflow/sprint-009 -maxdepth 1 -type f | sort
test -f references/flutterflow/sprint-009/ceo-briefing.png && echo "ceo briefing evidence exists"
git diff --name-only
git diff --stat
git diff --check
```

## Commit Readiness

Before commit, only the approved planning/docs/evidence files should be staged.

Approved commit candidates may include:

- `references/flutterflow/sprint-009/ceo-briefing.png`
- `references/flutterflow/sprint-009/click-path-notes.md`
- Sprint 010 planning files
- relevant planning/docs updates

Do not stage unrelated files.
