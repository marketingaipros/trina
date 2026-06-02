# Architect Pack — Sprint 044: Forward Mobile Runtime Smoke And Next Priority Selection

**Project:** Trina OS / Trina Voice
**Sprint:** 044
**Sprint folder:** `planning/sprints/044-forward-mobile-runtime-smoke-and-next-priority-selection/`
**Pack file:** `architect-packs/trina-044-forward-mobile-runtime-smoke-and-next-priority-selection-architect-pack.md`
**Mode:** Planning/docs first. Inspect-first validation sprint.
**Date:** 2026-06-02

---

## 1. Architect Intent

Sprint 044 should move the project forward after Sprint 043 closed the Calendar selected-day edit/delete caveat without runtime changes.

The purpose of Sprint 044 is to perform a focused forward mobile runtime smoke across the non-CEO app shell and select the next real implementation priority from observed evidence, not guesswork.

This sprint should not introduce broad product changes. It should inspect and validate the current app, document what is stable, identify the next highest-value runtime gap, and prepare the project for the next narrow Builder sprint.

Preferred result:

- No runtime changes unless inspection finds a small, safe, obvious regression that blocks validation.
- Clear validation record for core mobile flows.
- Clear Sprint 045 recommendation based on observed behavior.

---

## 2. Scope Boundaries

### In Scope

- Inspect current project planning and validation docs.
- Run a mobile-focused smoke pass at `390x844` or nearest available viewport.
- Validate core non-CEO app shell surfaces already touched by recent sprints:
  - Dashboard/Home shell
  - Tasks view
  - Calendar view
  - Finance view
  - Knowledge Base view
  - Notifications/reminder surface, if reachable in current app shell
- Confirm no obvious horizontal overflow, blocked controls, or broken mobile navigation.
- Confirm recent accessibility/touch-target hardening still holds where visible.
- Update planning and validation docs with results.
- Select a narrow Sprint 045 candidate from evidence.

### Out of Scope

- No CEO Briefing work.
- No FlutterFlow reference image creation.
- No backend, Firebase, auth, package, dependency, native, deployment, or environment changes.
- No broad redesign.
- No dashboard rebuild.
- No new feature work unless required to unblock the smoke pass and approved separately.
- No staging, commit, or push during Architect Pack application.

---

## 3. Files To Create Or Update

Codex should apply this Architect Pack by creating or updating these files only, unless it discovers that one of the optional files does not require a change.

### Create

```text
planning/sprints/044-forward-mobile-runtime-smoke-and-next-priority-selection/requirements.md
planning/sprints/044-forward-mobile-runtime-smoke-and-next-priority-selection/blueprint.md
planning/sprints/044-forward-mobile-runtime-smoke-and-next-priority-selection/acceptance.md
planning/sprints/044-forward-mobile-runtime-smoke-and-next-priority-selection/handoff-prompt.md
architect-packs/trina-044-forward-mobile-runtime-smoke-and-next-priority-selection-architect-pack.md
```

### Update

```text
planning/STATE.md
docs/VALIDATION.md
planning/RISKS.md
planning/QUESTIONS.md, only if an unresolved blocker is found
planning/DECISIONS.md, only if a durable decision changes
```

### Do Not Modify

```text
components/**
App.tsx
package.json
package-lock.json
vite.config.*
tsconfig*.json
firebase/**
references/flutterflow/sprint-009/ceo-briefing.png
```

Runtime files may be inspected during the sprint start readback, but should not be modified during Architect Pack application.

---

# File: `planning/sprints/044-forward-mobile-runtime-smoke-and-next-priority-selection/requirements.md`

```markdown
# Sprint 044 Requirements — Forward Mobile Runtime Smoke And Next Priority Selection

## Purpose

Sprint 044 verifies the current non-CEO app shell after recent mobile state, accessibility, fixture, and Calendar selected-day validation work.

The sprint should prove whether the core mobile runtime remains stable enough to move into the next implementation sprint, then identify the next narrow priority using observed evidence.

## Background

Sprint 043 closed the Calendar selected-day edit/delete control validation caveat without runtime changes. Validation used the nearest available in-app browser viewport and confirmed selected-day controls were usable, accessible, and not overflowing.

The next project need is a forward smoke pass across the major non-CEO surfaces so the next sprint is selected from current app behavior instead of assumptions.

## User / Operator Need

As the project operator, I need a clean mobile smoke result and next-priority recommendation so I can keep moving sprint-by-sprint without reopening completed caveats or accidentally touching protected CEO Briefing assets.

## In Scope

- Inspect current planning state, risks, and validation records.
- Run a mobile smoke pass at `390x844` or nearest available viewport.
- Validate reachable non-CEO app shell surfaces:
  - Dashboard/Home
  - Tasks
  - Calendar
  - Finance
  - Knowledge Base
  - Notifications/reminder surface, if reachable
- Check for:
  - horizontal overflow
  - blocked controls
  - broken navigation
  - obvious empty/error/loading regressions
  - touch target regressions
  - missing accessible labels on recently hardened controls
- Document results in `docs/VALIDATION.md`.
- Update `planning/STATE.md` with Sprint 044 status and recommended next action.
- Update `planning/RISKS.md` if a risk is reduced, confirmed, or newly discovered.
- Recommend one narrow Sprint 045 candidate.

## Out Of Scope

- CEO Briefing changes.
- Runtime implementation changes unless explicitly approved after inspection.
- New fixtures unless explicitly approved after inspection.
- Backend, auth, Firebase, dependency, build system, native, deployment, or environment changes.
- Broad UI redesign.
- Multi-feature implementation.

## Preferred Outcome

Sprint 044 should complete as validation/documentation only.

If a blocking runtime defect is discovered, Codex should stop and report the defect instead of fixing it immediately.

## Required Protection

The file `references/flutterflow/sprint-009/ceo-briefing.png` must remain absent.
```

---

# File: `planning/sprints/044-forward-mobile-runtime-smoke-and-next-priority-selection/blueprint.md`

```markdown
# Sprint 044 Blueprint — Forward Mobile Runtime Smoke And Next Priority Selection

## Build Mode

Inspect first. Validate second. Document third.

Do not implement runtime changes during the first pass.

## Step 1 — Read Project Context

Read:

- `AGENTS.md`
- `CODEX.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- Sprint 044 files

## Step 2 — Inspect Runtime Surfaces

Inspect only as needed:

- `App.tsx`
- `components/TasksView.tsx`
- `components/CalendarView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`
- any notification/reminder component reachable from the app shell

Do not modify runtime files during inspection.

## Step 3 — Run Mobile Smoke

Use `390x844` if available. If not available, use the nearest available in-app browser viewport and record the exact measured viewport.

Smoke these reachable surfaces:

1. Dashboard/Home shell
2. Tasks
3. Calendar
4. Finance
5. Knowledge Base
6. Notifications/reminders, if reachable

For each reachable surface, check:

- page/view renders without crash
- primary controls are reachable
- no obvious horizontal overflow
- no bottom navigation overlap on primary controls
- recent touch-target expectations remain intact where visible
- accessible labels remain present on recently hardened controls where inspectable
- empty/error/loading states do not regress

## Step 4 — Select Sprint 045 Candidate

Based on observed behavior, recommend one next narrow sprint.

Recommendation should include:

- sprint name
- why it is the next highest-value priority
- expected files to inspect or modify
- validation needed
- whether it should be docs-only, validation-only, or runtime implementation

Do not create Sprint 045 files during Sprint 044.

## Step 5 — Update Documentation

Update:

- `docs/VALIDATION.md` with Sprint 044 smoke results
- `planning/STATE.md` with current status and next recommended sprint
- `planning/RISKS.md` if a risk changed
- `planning/QUESTIONS.md` only if a real unresolved ambiguity remains
- `planning/DECISIONS.md` only if a durable decision changed

## Step 6 — Validation Commands

Run:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
```

If `npm run build` emits known Vite warnings, document them without treating them as failures unless a new build failure appears.

## Change Rules

Allowed planning/docs changes:

- `architect-packs/trina-044-forward-mobile-runtime-smoke-and-next-priority-selection-architect-pack.md`
- `planning/sprints/044-forward-mobile-runtime-smoke-and-next-priority-selection/**`
- `planning/STATE.md`
- `docs/VALIDATION.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`, only if needed
- `planning/DECISIONS.md`, only if needed

Runtime changes are not allowed unless separately approved after the readback.
```

---

# File: `planning/sprints/044-forward-mobile-runtime-smoke-and-next-priority-selection/acceptance.md`

```markdown
# Sprint 044 Acceptance — Forward Mobile Runtime Smoke And Next Priority Selection

## Acceptance Criteria

A1. Sprint 044 planning files exist:

- `requirements.md`
- `blueprint.md`
- `acceptance.md`
- `handoff-prompt.md`

A2. The Sprint 044 Architect Pack exists in `architect-packs/`.

A3. Codex performs an inspect-first readback before any implementation.

A4. Mobile smoke is attempted at `390x844` or nearest available measured viewport.

A5. The exact viewport used is documented.

A6. Dashboard/Home, Tasks, Calendar, Finance, and Knowledge Base are smoked if reachable.

A7. Notifications/reminders are smoked if reachable.

A8. Smoke results document rendering, navigation, overflow, control reachability, and recent accessibility/touch-target expectations.

A9. No runtime files are changed unless separately approved.

A10. `docs/VALIDATION.md` records the Sprint 044 validation result.

A11. `planning/STATE.md` records Sprint 044 status and the recommended next action.

A12. `planning/RISKS.md` is updated if risk status changes.

A13. `planning/QUESTIONS.md` is updated only if a real unresolved ambiguity remains.

A14. `planning/DECISIONS.md` is updated only if a durable decision changes.

A15. Required validation commands pass or any known warnings are documented:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
```

A16. CEO Briefing remains untouched.

A17. `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

A18. Sprint 045 recommendation is documented with a narrow scope and rationale.

## Not Accepted If

- Codex modifies runtime files without approval.
- Codex stages, commits, or pushes during the validation pass.
- CEO Briefing is touched.
- The missing CEO Briefing reference image is recreated.
- Sprint 045 is created prematurely.
- The next priority is selected without validation evidence.
```

---

# File: `planning/sprints/044-forward-mobile-runtime-smoke-and-next-priority-selection/handoff-prompt.md`

```markdown
# Sprint 044 Handoff Prompt — Forward Mobile Runtime Smoke And Next Priority Selection

Read these files before making changes:

- `AGENTS.md`
- `CODEX.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/044-forward-mobile-runtime-smoke-and-next-priority-selection/requirements.md`
- `planning/sprints/044-forward-mobile-runtime-smoke-and-next-priority-selection/blueprint.md`
- `planning/sprints/044-forward-mobile-runtime-smoke-and-next-priority-selection/acceptance.md`

Then summarize:

1. What Sprint 044 is supposed to accomplish.
2. Which files you expect to inspect or modify.
3. What validation steps you expect to run.
4. Any blockers, ambiguities, or risks before validation.

Rules:

- Do not start implementation until I approve your summary.
- Prefer validation/documentation only.
- Do not modify runtime files unless separately approved.
- Do not stage, commit, or push.
- Do not touch CEO Briefing.
- Confirm `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- If exact `390x844` is unavailable, use the nearest available measured viewport and document it.
- End with whether you believe Sprint 044 can proceed as docs/validation only.
```

---

## 4. Codex Apply Prompt

Use this prompt first to apply the Architect Pack to the project folder. This creates planning/docs only. It does not start Sprint 044 validation.

```text
Apply the Sprint 044 Architect Pack as planning/docs only.

Create or update these files exactly as described in the Architect Pack:

- architect-packs/trina-044-forward-mobile-runtime-smoke-and-next-priority-selection-architect-pack.md
- planning/sprints/044-forward-mobile-runtime-smoke-and-next-priority-selection/requirements.md
- planning/sprints/044-forward-mobile-runtime-smoke-and-next-priority-selection/blueprint.md
- planning/sprints/044-forward-mobile-runtime-smoke-and-next-priority-selection/acceptance.md
- planning/sprints/044-forward-mobile-runtime-smoke-and-next-priority-selection/handoff-prompt.md
- planning/STATE.md
- docs/VALIDATION.md
- planning/RISKS.md, only if risk status changes
- planning/QUESTIONS.md, only if an unresolved ambiguity is introduced
- planning/DECISIONS.md, only if a durable decision changes

Rules:

- Planning/docs only.
- Do not modify runtime files.
- Do not stage, commit, or push.
- Do not touch CEO Briefing.
- Do not recreate `references/flutterflow/sprint-009/ceo-briefing.png`.

After applying, run:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

Report:

1. Files created.
2. Files updated.
3. Validation results.
4. Confirmation that no runtime files changed.
5. Confirmation that CEO Briefing stayed untouched.
6. Confirmation that `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
```

---

## 5. Architect Notes

- This sprint intentionally avoids runtime implementation unless evidence forces a follow-up.
- Sprint 044 should create confidence across the current mobile shell before more code is added.
- Sprint 045 should be selected from evidence gathered during this smoke pass.
- Keep the handoff file-based. Do not rely on chat memory.
