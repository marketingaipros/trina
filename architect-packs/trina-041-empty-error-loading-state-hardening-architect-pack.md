# Architect Pack: Sprint 041 — Empty, Error, and Loading State Hardening

**Project:** Trina / trinaos-voice
**Sprint:** `041-empty-error-loading-state-hardening`
**Date:** 2026-06-01
**Layer:** Architect
**Status:** Ready for Builder planning/docs application
**Scope type:** Inspect-first runtime polish sprint
**Commit baseline:** After Sprint 040 commit `dfce340`

---

## 1. Purpose

Sprint 041 hardens the existing non-CEO Trina app shell around empty states, error states, loading states, and fallback states.

Sprint 040 improved mobile accessibility and touch behavior. Sprint 041 should now make sure the app feels reliable when data is missing, fixtures are empty, async states fail, or a section has no usable records.

This is not a redesign sprint.

This is not a new feature sprint.

This is a small runtime hardening pass focused on making existing screens safer, clearer, and less brittle.

---

## 2. Architect-Facing Requirements

### 2.1 Primary Goal

Improve the existing app shell so core screens provide clear, accessible, non-broken UI states when content is empty, unavailable, loading, or unable to complete an action.

### 2.2 Screens In Scope

The Builder may inspect these files:

```text
App.tsx
components/Dashboard.tsx
components/VoiceDashboard.tsx
components/TasksView.tsx
components/NotificationsView.tsx
components/CalendarView.tsx
components/FinanceView.tsx
components/KnowledgeBaseView.tsx
components/Navigation.tsx
```

The Builder may modify these runtime files only if concrete issues are confirmed:

```text
components/Dashboard.tsx
components/VoiceDashboard.tsx
components/TasksView.tsx
components/NotificationsView.tsx
components/CalendarView.tsx
components/FinanceView.tsx
components/KnowledgeBaseView.tsx
```

`components/Navigation.tsx` is inspect-first and should only be edited if empty/fallback navigation behavior is directly implicated.

`App.tsx` is inspect-only unless a routing, global state, or fallback issue cannot be fixed locally. Builder must ask before editing `App.tsx`.

### 2.3 Required Behavior

The app should avoid dead-looking screens, unlabeled empty panels, broken controls, and unclear fallbacks.

At minimum, Sprint 041 should inspect and harden:

- Empty task list behavior.
- Empty notification/fallback behavior.
- Empty calendar day/list behavior.
- Empty finance entry/history behavior.
- Empty Knowledge Base document/source behavior.
- Voice/dashboard panels that depend on fixture or derived state.
- Error or failed-action messaging where the current UI silently fails.
- Loading or pending-state language if existing async/pending paths are present.
- Disabled control clarity where the action cannot currently run.
- Mobile safety for newly touched empty/fallback controls.

### 2.4 Explicit Non-Goals

Do not add new product modules.

Do not redesign the app shell.

Do not add backend services.

Do not add Firebase changes.

Do not add new dependencies.

Do not change package files.

Do not create evidence artifacts.

Do not touch CEO Briefing.

Do not create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Do not stage, commit, or push during planning/docs application or implementation unless explicitly instructed.

---

## 3. Builder-Facing Implementation Plan

### 3.1 Required First Step: Planning Docs Only

Before runtime implementation, Codex must apply this Architect Pack as planning/docs only.

Create:

```text
planning/sprints/041-empty-error-loading-state-hardening/requirements.md
planning/sprints/041-empty-error-loading-state-hardening/blueprint.md
planning/sprints/041-empty-error-loading-state-hardening/acceptance.md
planning/sprints/041-empty-error-loading-state-hardening/handoff-prompt.md
```

Update:

```text
planning/STATE.md
docs/VALIDATION.md
```

Update only if needed:

```text
planning/RISKS.md
planning/QUESTIONS.md
```

Do not update `planning/DECISIONS.md` unless a durable decision changes.

Do not update `docs/ARCHITECTURE.md` unless architecture changes.

Do not update `docs/API.md` unless interfaces, inputs, outputs, or contracts change.

### 3.2 Runtime Implementation Sequence

After the planning/docs files are applied and approved:

1. Read the active sprint files.
2. Inspect the in-scope runtime files.
3. Identify concrete empty/error/loading/fallback issues.
4. Make the smallest safe changes.
5. Prefer local component fixes over global changes.
6. Preserve existing visual language.
7. Preserve Sprint 040 accessibility and 44px touch-target improvements.
8. Run validation.
9. Update closeout docs after implementation.

### 3.3 Component Guidance

#### `components/TasksView.tsx`

Inspect:

- Empty task list state.
- Completed/active filter empty states.
- Disabled or unavailable edit/delete/toggle states.
- Any action that silently does nothing.

Possible fixes:

- Clear empty-state text.
- Clear action affordance.
- Accessible labels for empty-state CTAs if present.
- Preserve 44px task controls from Sprint 040.

#### `components/NotificationsView.tsx`

Inspect:

- Empty notification state.
- Fixture fallback state.
- Permission or unavailable notification states.
- Dismiss/clear behavior if no notifications exist.

Possible fixes:

- Improve empty/fallback copy.
- Disable or hide actions that cannot run.
- Add clear accessible labels/titles where missing.

#### `components/CalendarView.tsx`

Inspect:

- Empty selected day.
- Empty event list.
- Add event affordance.
- Missing or unclear fallback for no scheduled items.

Possible fixes:

- Clear empty-day message.
- Accessible empty-state add event action.
- Preserve visible 44px event actions from Sprint 040.

#### `components/FinanceView.tsx`

Inspect:

- Empty finance history.
- Empty summary/cards.
- No transaction/entry state.
- Failed or invalid add-entry behavior if present.

Possible fixes:

- Clear empty-state guidance.
- Better disabled/invalid-action handling.
- Accessible labels for empty-state actions.

#### `components/KnowledgeBaseView.tsx`

Inspect:

- No documents.
- No selected document.
- Upload unavailable state.
- Voice question unavailable state.
- Missing source/content fallback.

Possible fixes:

- Clear empty document message.
- Better disabled-state text for voice/upload controls.
- Preserve 44px upload/voice/delete controls from Sprint 040.

#### `components/Dashboard.tsx` and `components/VoiceDashboard.tsx`

Inspect:

- Panels/cards that assume data exists.
- Empty derived counters.
- Missing fallback copy for no tasks, no events, no notifications, or no knowledge sources.
- Any broken or unclear primary action.

Possible fixes:

- Safer fallback copy.
- Prevent undefined/null display.
- Keep home/dashboard layout stable.

---

## 4. Files To Create

### `planning/sprints/041-empty-error-loading-state-hardening/requirements.md`

```markdown
# Sprint 041 Requirements — Empty, Error, and Loading State Hardening

## Purpose

Harden the existing non-CEO Trina app shell so empty, fallback, unavailable, failed-action, and loading/pending states are clear, accessible, and non-broken.

## Scope

Inspect and patch only confirmed issues in:

- Dashboard
- Voice Dashboard
- Tasks
- Notifications
- Calendar
- Finance
- Knowledge Base

## Requirements

- Empty states must clearly explain what is missing or what the user can do next.
- Error or unavailable states must not fail silently.
- Loading or pending states must be understandable where existing async/pending behavior exists.
- Disabled controls must have clear intent.
- Existing Sprint 040 accessibility and 44px touch-target improvements must be preserved.
- Mobile viewport around `390x844` must remain usable with no horizontal overflow.
- CEO Briefing must stay untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` must remain absent.

## Non-Goals

- No new modules.
- No redesign.
- No backend, Firebase, package, native, build, release, deployment, or evidence changes.
- No new dependencies.
```

### `planning/sprints/041-empty-error-loading-state-hardening/blueprint.md`

```markdown
# Sprint 041 Blueprint — Empty, Error, and Loading State Hardening

## Approach

This is an inspect-first runtime polish sprint.

The Builder must inspect current behavior before editing. Runtime changes are allowed only for confirmed empty, fallback, unavailable, failed-action, loading, or disabled-control issues.

## Inspect First

Review:

- `components/Dashboard.tsx`
- `components/VoiceDashboard.tsx`
- `components/TasksView.tsx`
- `components/NotificationsView.tsx`
- `components/CalendarView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`
- `components/Navigation.tsx`
- `App.tsx`

## Runtime Files Allowed If Needed

- `components/Dashboard.tsx`
- `components/VoiceDashboard.tsx`
- `components/TasksView.tsx`
- `components/NotificationsView.tsx`
- `components/CalendarView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`

`Navigation.tsx` is inspect-first and should only be edited if directly required.

`App.tsx` is inspect-only unless approved.

## Implementation Rules

- Patch the smallest safe issue.
- Keep styling consistent with existing components.
- Do not change data models.
- Do not add dependencies.
- Do not create new architecture.
- Preserve Sprint 040 accessibility/touch improvements.
- Do not touch CEO Briefing.

## Validation

Run:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

Manual/browser smoke should cover:

- Mobile viewport around `390x844`.
- Dashboard fallback panels.
- Tasks empty/filter states.
- Notifications empty/fallback states.
- Calendar empty selected day/list.
- Finance empty state.
- Knowledge Base no documents/no selected source state.
- No horizontal overflow.
```

### `planning/sprints/041-empty-error-loading-state-hardening/acceptance.md`

```markdown
# Sprint 041 Acceptance — Empty, Error, and Loading State Hardening

Sprint 041 is accepted only when all applicable criteria are true.

## Functional Acceptance

- Empty states are clear and non-broken on in-scope screens.
- Failed, unavailable, disabled, or pending states do not silently fail where existing paths are present.
- Any patched action has an accessible name or clear visible text.
- Any patched mobile control remains usable around `390x844`.
- Existing Sprint 040 44px touch-target improvements are preserved.
- Existing navigation remains usable.
- Dashboard/Home remains reachable.
- Tasks remain usable.
- Notifications remain usable.
- Calendar remains usable.
- Finance remains usable.
- Knowledge Base remains usable.

## Scope Acceptance

- No CEO Briefing changes.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- No backend, Firebase, package, native, build, release, deployment, or evidence changes.
- No new dependencies.
- `App.tsx` is not edited unless separately approved.

## Validation Acceptance

Required commands:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

Manual/browser smoke:

- Mobile viewport around `390x844`.
- In-scope empty/fallback states.
- No horizontal overflow.
- Patched controls remain accessible and usable.

Known non-blocking warnings may be documented if unchanged from prior sprints.
```

### `planning/sprints/041-empty-error-loading-state-hardening/handoff-prompt.md`

```markdown
# Sprint 041 Handoff Prompt — Empty, Error, and Loading State Hardening

Read these files before making changes:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/041-empty-error-loading-state-hardening/requirements.md`
- `planning/sprints/041-empty-error-loading-state-hardening/blueprint.md`
- `planning/sprints/041-empty-error-loading-state-hardening/acceptance.md`

Then summarize:

1. What Sprint 041 is supposed to accomplish.
2. Which files you expect to inspect.
3. Which runtime files you expect may need changes.
4. Which tests or validation steps you will run.
5. Any blockers or ambiguities.
6. Confirm CEO Briefing must stay untouched.
7. Confirm `references/flutterflow/sprint-009/ceo-briefing.png` must remain absent.

Do not implement until approved.
Do not edit files yet.
Do not stage, commit, or push.
```

---

## 5. Files To Update

### `planning/STATE.md`

Add/update current state to show:

```markdown
## Current Sprint

Sprint 041 — Empty, Error, and Loading State Hardening

## Current Status

Sprint 040 is closed and pushed at commit `dfce340`.

Sprint 041 is ready for planning/docs application. This sprint is an inspect-first runtime polish pass focused on empty, error, loading, unavailable, disabled, and fallback states across the existing non-CEO Trina app shell.

## Next Action

Apply Sprint 041 planning/docs only. Do not start runtime implementation until the Sprint 041 files are created and the Builder has read them and summarized the plan.

## Guardrails

- CEO Briefing stays untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- No backend, Firebase, package, native, build, release, deployment, or evidence changes unless explicitly approved.
```

### `docs/VALIDATION.md`

Add Sprint 041 validation expectations:

```markdown
## Sprint 041 Validation — Empty, Error, and Loading State Hardening

Required validation:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

Manual/browser smoke:

- Mobile viewport around `390x844`.
- Dashboard/Home reachable.
- Tasks empty/filter states.
- Notifications empty/fallback states.
- Calendar empty selected day/list state.
- Finance empty/history state.
- Knowledge Base no documents/no selected source state.
- Patched controls have accessible names or clear visible text.
- No horizontal overflow.
- Sprint 040 mobile/touch improvements remain intact.

Known non-blocking Vite warnings may be documented if unchanged from prior validation.
```

### `planning/RISKS.md` — Update Only If Needed

Potential risk to add only if not already covered:

```markdown
| Empty/fallback states may depend on local fixture data and may not be visible in every browser smoke path. | Medium | Medium | Pair browser smoke with code inspection and document any state that could not be triggered locally. | Open |
```

### `planning/QUESTIONS.md` — Update Only If Needed

Potential question to add only if a blocker emerges:

```markdown
| Date | Question | Owner | Status |
|---|---|---|---|
| 2026-06-01 | Are any empty/error/loading states expected to use final product copy, or is clear operational placeholder copy acceptable for MVP polish? | Architect/Product | Open |
```

---

## 6. Acceptance Criteria

The Architect Pack is applied successfully when:

- Sprint 041 folder exists.
- Sprint 041 includes `requirements.md`, `blueprint.md`, `acceptance.md`, and `handoff-prompt.md`.
- `planning/STATE.md` reflects Sprint 041 as the next active sprint.
- `docs/VALIDATION.md` includes Sprint 041 validation expectations.
- No runtime files are changed during planning/docs application.
- No backend, Firebase, package, native, build, release, deployment, or evidence files are changed.
- CEO Briefing stays untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- No staging, commit, or push happens.

---

## 7. Codex Apply-Pack Prompt

Use this prompt after downloading or copying this Architect Pack into the repo.

```text
Apply the Sprint 041 Architect Pack as planning/docs only.

Sprint folder:

planning/sprints/041-empty-error-loading-state-hardening/

Create:

- planning/sprints/041-empty-error-loading-state-hardening/requirements.md
- planning/sprints/041-empty-error-loading-state-hardening/blueprint.md
- planning/sprints/041-empty-error-loading-state-hardening/acceptance.md
- planning/sprints/041-empty-error-loading-state-hardening/handoff-prompt.md

Update:

- planning/STATE.md
- docs/VALIDATION.md

Update only if needed:

- planning/RISKS.md
- planning/QUESTIONS.md

Do not update planning/DECISIONS.md unless a durable decision changes.
Do not update docs/ARCHITECTURE.md unless architecture changes.
Do not update docs/API.md unless CLI commands, interfaces, inputs, outputs, or contracts change.

Rules:

- Do not edit runtime files.
- Do not edit backend, Firebase, package, native, build, release, deployment, or evidence files.
- Do not touch CEO Briefing.
- Do not create references/flutterflow/sprint-009/ceo-briefing.png.
- Do not stage, commit, or push.

After applying the pack, run:

- git diff --check
- test ! -f references/flutterflow/sprint-009/ceo-briefing.png
- git diff --name-only
- git status --branch --short

Report:

1. Files created.
2. Files updated.
3. Validation results.
4. Whether any runtime files changed.
5. Whether CEO Briefing stayed untouched.
6. Whether references/flutterflow/sprint-009/ceo-briefing.png remains absent.
7. Confirm no staging, commit, or push happened.
```

---

## 8. Next Step After Pack Is Applied

After Codex applies this Architect Pack and reports clean planning/docs-only changes, the next step is the Sprint 041 Builder read-and-summarize prompt.

Do not implement runtime code until Codex has read the Sprint 041 files and summarized:

1. What Sprint 041 is supposed to accomplish.
2. Which files it expects to inspect.
3. Which runtime files may need changes.
4. What validation it will run.
5. Any blockers or ambiguities.
