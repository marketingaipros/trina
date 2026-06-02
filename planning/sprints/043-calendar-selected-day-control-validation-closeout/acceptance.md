# Sprint 043 Acceptance - Calendar Selected-Day Control Validation Closeout

## A1 - Sprint Planning Files Exist

The sprint folder exists:

```text
planning/sprints/043-calendar-selected-day-control-validation-closeout/
```

It contains:

```text
requirements.md
blueprint.md
acceptance.md
handoff-prompt.md
```

Closeout status: Pending.

## A2 - Builder Summary Gate Completed

Before implementation, the Builder reads required project and sprint files and summarizes:

1. What Sprint 043 is supposed to accomplish.
2. Which files it expects to inspect or modify.
3. What validation steps it will run.
4. Any blockers or ambiguities.
5. Whether runtime changes are expected.

Implementation does not begin until approval is given.

Closeout status: Pending.

## A3 - Calendar Selected-Day Populated Row Reproduced

The Builder reproduces a Calendar selected-day populated row at `390x844` or nearest available viewport.

The validation path is documented:

- Existing state, or
- Narrow local/dev-only fixture.

Closeout status: Pending.

## A4 - Edit Control Live-Clicked

The selected-day row edit control is live-clicked successfully at the target viewport.

The result is documented in `docs/VALIDATION.md`.

Closeout status: Pending.

## A5 - Delete Control Live-Clicked Or Safely Confirmed

The selected-day row delete control is live-clicked at the target viewport.

If deletion is destructive, a safe confirm/cancel path may be used and documented.

Closeout status: Pending.

## A6 - No Horizontal Overflow

The selected-day populated row state has no horizontal overflow at the target viewport.

Closeout status: Pending.

## A7 - Touch And Accessibility Preservation

The selected-day edit/delete controls preserve Sprint 040 touch/accessibility expectations, including practical 44px mobile control targets where applicable.

Closeout status: Pending.

## A8 - Scope Protection

No unauthorized files are changed.

Must remain true:

- No package/dependency changes.
- No backend/Firebase/Supabase/native/build config changes.
- CEO Briefing untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` absent.

Closeout status: Pending.

## A9 - Required Validation Passes

The following pass:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

Known Vite warnings may remain if unchanged from prior sprints and documented.

Closeout status: Pending.

## A10 - Documentation Updated

Updated as needed:

```text
docs/VALIDATION.md
planning/STATE.md
planning/RISKS.md
```

Optional only if needed:

```text
planning/DECISIONS.md
planning/QUESTIONS.md
```

Closeout status: Pending.

## A11 - No Premature Git Actions

No staging, commit, or push occurs until explicitly approved.

Closeout status: Pending.
