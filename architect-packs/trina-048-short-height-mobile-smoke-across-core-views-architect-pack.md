# Sprint 048 Architect Pack — Short-Height Mobile Smoke Across Core Views

**Project:** TrinaOS Voice
**Sprint:** 048
**Sprint slug:** `048-short-height-mobile-smoke-across-core-views`
**Architect layer:** ChatGPT
**Builder layer:** Codex
**Date:** 2026-06-02

---

## 1. Architect Intent

Sprint 048 is a validation-first mobile polish sprint.

Sprint 047 fixed a confirmed short-height Home issue where the typed row cleared `390x844` but overlapped the fixed bottom nav at `360x740`. Sprint 048 should now inspect the other core non-Home views for similar short-height mobile problems before making more runtime changes.

This is not a redesign sprint.

This sprint should find and fix only confirmed mobile layout issues that affect usability on short-height or narrow mobile viewports.

---

## 2. Files This Architect Pack Should Create Or Update

Codex should apply this Architect Pack by creating or updating these planning/docs files only first:

```text
planning/STATE.md
planning/RISKS.md
docs/VALIDATION.md
planning/sprints/048-short-height-mobile-smoke-across-core-views/requirements.md
planning/sprints/048-short-height-mobile-smoke-across-core-views/blueprint.md
planning/sprints/048-short-height-mobile-smoke-across-core-views/acceptance.md
planning/sprints/048-short-height-mobile-smoke-across-core-views/handoff-prompt.md
```

No runtime implementation should begin until the Sprint 048 planning files exist and Codex has read them back in a sprint-start summary.

---

## 3. Architect-Facing Requirements

### Problem

Recent mobile hardening has focused heavily on Home typed actions. Sprint 047 proved that `390x844` alone is not enough because `360x740` exposed a bottom-nav overlap on Home.

Other core views may still have short-height viewport problems that are not visible at common taller mobile sizes.

### Goal

Inspect the core non-Home views at `390x844` and `360x740`, identify any confirmed mobile usability issues, and apply only the smallest safe fixes needed.

### In Scope

Inspect and smoke these views:

- Tasks
- Calendar
- Finance
- Knowledge Base
- Notifications/reminders if reachable
- Any shared fixed bottom nav interaction visible during those smoke checks

Check for:

- Bottom nav overlap
- Hidden primary actions
- Horizontal overflow
- Inputs or buttons squeezed below usable size
- Content trapped behind fixed UI
- Short-height scrolling problems
- Touch targets below the existing `44px` practical mobile target where relevant

### Out of Scope

- No redesign
- No new features
- No backend/Firebase/native/package/release changes
- No CEO Briefing changes
- No broad app shell rewrite
- No new navigation model
- No visual restyling unless required to fix a confirmed usability issue
- No changes to Home unless the inspection reveals a regression caused by Sprint 047

### Expected Runtime Files

Codex should inspect as needed:

```text
components/TasksView.tsx
components/CalendarView.tsx
components/FinanceView.tsx
components/KnowledgeBaseView.tsx
components/VoiceDashboard.tsx
App.tsx
```

Runtime changes, if needed, should be limited to the smallest set of affected view components.

---

## 4. Builder-Facing Implementation Plan

### Step 1 — Apply planning/docs only

Create the Sprint 048 folder:

```text
planning/sprints/048-short-height-mobile-smoke-across-core-views/
```

Create:

```text
requirements.md
blueprint.md
acceptance.md
handoff-prompt.md
```

Update:

```text
planning/STATE.md
docs/VALIDATION.md
planning/RISKS.md
```

Do not modify runtime files during this step.

### Step 2 — Sprint-start summary before implementation

After planning files are created, Codex must read:

```text
AGENTS.md
planning/STATE.md
planning/DECISIONS.md
planning/DOMAIN.md
planning/RISKS.md
planning/QUESTIONS.md
planning/sprints/048-short-height-mobile-smoke-across-core-views/requirements.md
planning/sprints/048-short-height-mobile-smoke-across-core-views/blueprint.md
planning/sprints/048-short-height-mobile-smoke-across-core-views/acceptance.md
```

Then Codex must summarize:

1. What Sprint 048 is supposed to accomplish.
2. Which files it expects to inspect and potentially modify.
3. What validation it will run.
4. Any blockers or ambiguities.

Codex must not implement until approved.

### Step 3 — Inspect mobile behavior

After approval, inspect these viewports:

```text
390x844
360x740
```

For each in-scope view, check:

- Content visible above bottom nav
- Scroll behavior
- Action/button accessibility
- Inputs usable
- No horizontal overflow
- No content hidden behind fixed nav
- No newly introduced layout shift

### Step 4 — Implement only confirmed fixes

If no issue is found, do not change runtime files.

If an issue is found:

- Make the smallest local fix.
- Prefer view-level spacing, padding, max-height, scroll area, or compact responsive behavior.
- Preserve existing labels, handlers, state behavior, disabled/loading behavior, and user-facing copy.
- Avoid shared style changes unless clearly required.

### Step 5 — Closeout docs

After implementation or no-op validation, update:

```text
planning/STATE.md
docs/VALIDATION.md
planning/RISKS.md
planning/sprints/048-short-height-mobile-smoke-across-core-views/acceptance.md
```

Only update other Sprint 048 docs if implementation notes belong there.

---

## 5. Acceptance Criteria

Sprint 048 is complete only when all criteria below are satisfied.

### Planning Criteria

- Sprint 048 planning folder exists.
- `requirements.md`, `blueprint.md`, `acceptance.md`, and `handoff-prompt.md` exist.
- `planning/STATE.md` reflects Sprint 048 as active or completed, depending on phase.
- `docs/VALIDATION.md` includes Sprint 048 validation expectations and results.
- `planning/RISKS.md` reflects any mobile short-height risks found or mitigated.

### Runtime Criteria

- Tasks view is smoke checked at `390x844` and `360x740`.
- Calendar view is smoke checked at `390x844` and `360x740`.
- Finance view is smoke checked at `390x844` and `360x740`.
- Knowledge Base view is smoke checked at `390x844` and `360x740`.
- Notifications/reminders are smoke checked if reachable.
- No horizontal overflow exists in checked views.
- No primary action or input is trapped behind the bottom nav in checked views.
- Touch targets remain at least `44px` tall where Sprint 046/047 mobile hardening already applies.
- Any runtime changes are limited to confirmed issues.

### Guardrail Criteria

- CEO Briefing files are not modified.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- No backend/Firebase/native/package/release files are modified.
- No files are staged, committed, or pushed until explicitly approved.

### Validation Criteria

Run and pass:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
git diff --cached --name-only
```

`npm run build` may pass with existing Vite warnings only. New build errors fail the sprint.

---

## 6. Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Short-height mobile issues may exist outside Home. | Users may see clipped controls or blocked actions. | Smoke core non-Home views at `360x740`, not only `390x844`. |
| Small local fixes could create visual regressions on taller phones. | Prior mobile improvements could regress. | Validate both `390x844` and `360x740`. |
| Shared style changes could cause wide fallout. | Multiple screens could change unexpectedly. | Prefer local view-level changes. |
| CEO Briefing artifact could be accidentally touched. | Protected reference asset guardrail breach. | Run absence guard before and after implementation. |

---

## 7. Decisions

No new durable product decision is required at Architect Pack creation time.

If Sprint 048 confirms a repeatable pattern across multiple views, Codex may propose a future durable decision for mobile viewport standards, but it should not add one without approval.

---

## 8. Suggested File Contents

## `planning/sprints/048-short-height-mobile-smoke-across-core-views/requirements.md`

```markdown
# Sprint 048 Requirements — Short-Height Mobile Smoke Across Core Views

## Goal

Inspect and, only if needed, narrowly polish short-height mobile layout behavior across core non-Home views.

## Background

Sprint 047 found that Home was clear at `390x844` but overlapped the fixed bottom nav at `360x740`. Sprint 048 extends that validation pattern to other core views.

## In Scope

- Tasks
- Calendar
- Finance
- Knowledge Base
- Notifications/reminders if reachable
- Bottom nav interaction with those views

## Viewports

- `390x844`
- `360x740`

## Checks

- No horizontal overflow
- No primary input or action hidden behind bottom nav
- Usable scrolling on short-height screens
- Existing touch target hardening is preserved
- No unrelated visual redesign

## Out of Scope

- New features
- Backend/Firebase/native/package/release changes
- CEO Briefing changes
- Broad app shell rewrite
- Navigation redesign

## Guardrails

- Do not modify CEO Briefing files.
- Do not recreate `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not stage, commit, or push without approval.
```

## `planning/sprints/048-short-height-mobile-smoke-across-core-views/blueprint.md`

```markdown
# Sprint 048 Blueprint — Short-Height Mobile Smoke Across Core Views

## Approach

This is an inspect-first sprint. Runtime changes are allowed only after a real issue is confirmed.

## Files To Inspect

- `components/TasksView.tsx`
- `components/CalendarView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`
- `components/VoiceDashboard.tsx`
- `App.tsx`

## Likely Change Pattern

If fixes are needed, prefer local view-level adjustments:

- bottom padding
- compact spacing at short heights
- scroll container adjustments
- safe min-height or max-height behavior
- responsive layout tweaks

Avoid shared style changes unless the issue clearly comes from a shared container.

## Implementation Rules

- Preserve copy, labels, handlers, input behavior, loading states, and disabled states.
- Keep touch targets at or above `44px` where relevant.
- Do not redesign the views.
- Do not touch backend/Firebase/native/package/release files.
- Do not modify CEO Briefing files.

## Validation Commands

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
git diff --cached --name-only
```
```

## `planning/sprints/048-short-height-mobile-smoke-across-core-views/acceptance.md`

```markdown
# Sprint 048 Acceptance — Short-Height Mobile Smoke Across Core Views

## Acceptance Criteria

- [ ] Tasks is checked at `390x844` and `360x740`.
- [ ] Calendar is checked at `390x844` and `360x740`.
- [ ] Finance is checked at `390x844` and `360x740`.
- [ ] Knowledge Base is checked at `390x844` and `360x740`.
- [ ] Notifications/reminders are checked if reachable.
- [ ] No checked view has horizontal overflow.
- [ ] No primary action or input is trapped behind the fixed bottom nav.
- [ ] Short-height scrolling remains usable.
- [ ] Any runtime changes are local and tied to confirmed issues.
- [ ] Existing labels, handlers, loading states, disabled states, and copy are preserved.
- [ ] CEO Briefing files are untouched.
- [ ] `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- [ ] No backend/Firebase/native/package/release files are modified.
- [ ] Nothing is staged, committed, or pushed without approval.

## Required Validation

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
git diff --cached --name-only
```

## Completion Notes

To be completed during closeout.
```

## `planning/sprints/048-short-height-mobile-smoke-across-core-views/handoff-prompt.md`

```markdown
# Sprint 048 Handoff Prompt — Short-Height Mobile Smoke Across Core Views

Read the following files before making changes:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `planning/sprints/048-short-height-mobile-smoke-across-core-views/requirements.md`
- `planning/sprints/048-short-height-mobile-smoke-across-core-views/blueprint.md`
- `planning/sprints/048-short-height-mobile-smoke-across-core-views/acceptance.md`

Then summarize:

1. What Sprint 048 is supposed to accomplish.
2. Which files you expect to inspect and potentially modify.
3. What validation steps you will run.
4. Any blockers or ambiguities.

Do not start implementation until I approve your summary.

After approval, inspect Tasks, Calendar, Finance, Knowledge Base, and Notifications/reminders if reachable at `390x844` and `360x740`.

Only make runtime changes if a real issue is confirmed. Keep any fix local and minimal.

Guardrails:

- Do not modify CEO Briefing files.
- Do not recreate or add `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not touch backend, Firebase, native, package, or release files.
- Do not stage, commit, or push anything.

Run validation:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
git diff --cached --name-only
```

Report findings, files changed, validation results, browser/mobile results, and guardrail confirmations.
```

---

## 9. Codex Apply-Pack Prompt

Use this first. This is not an implementation prompt.

```text
Apply the Sprint 048 Architect Pack as planning/docs only.

Create or update only these files:

- planning/STATE.md
- planning/RISKS.md
- docs/VALIDATION.md
- planning/sprints/048-short-height-mobile-smoke-across-core-views/requirements.md
- planning/sprints/048-short-height-mobile-smoke-across-core-views/blueprint.md
- planning/sprints/048-short-height-mobile-smoke-across-core-views/acceptance.md
- planning/sprints/048-short-height-mobile-smoke-across-core-views/handoff-prompt.md

Rules:

- Do not modify runtime files.
- Do not modify CEO Briefing files.
- Do not recreate or add references/flutterflow/sprint-009/ceo-briefing.png.
- Do not stage, commit, or push anything.
- Keep the files concise and operational.
- Preserve the 120x Architect / Builder workflow.

After applying the planning/docs pack, run:

- git diff --check
- test ! -f references/flutterflow/sprint-009/ceo-briefing.png
- git diff --name-only
- git status --branch --short
- git diff --cached --name-only

Then report exactly which files were created or updated and confirm no runtime files were changed.
```

---

## 10. Next Prompt After Codex Applies The Pack

Only after Codex applies the Sprint 048 planning files, use the sprint-start prompt from `handoff-prompt.md`.

Do not tell Codex to implement until it reads the Sprint 048 files and summarizes scope, expected files, validation, and blockers.
