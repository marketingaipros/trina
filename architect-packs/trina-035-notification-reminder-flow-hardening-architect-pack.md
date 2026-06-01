# Trina Sprint 035 Architect Pack

**Sprint:** 035-notification-reminder-flow-hardening  
**Project:** Trina  
**Date:** 2026-06-01  
**Architect Layer:** ChatGPT  
**Builder Layer:** Codex  
**Pack type:** Runtime validation and minimal-fix sprint

---

## Operating Instruction

Apply this Architect Pack as planning/docs first.

Do not jump directly into implementation.

After this pack is applied, Codex must read the Sprint 035 planning files and summarize the plan before modifying runtime code.

The handoff is the project folder, not this chat thread.

---

## Protected Scope

Sprint 035 must preserve all prior guardrails.

Do not touch:

- CEO Briefing page
- `references/flutterflow/sprint-009/ceo-briefing.png`
- Backend files
- Firebase files
- Hermes files
- Package or dependency files
- Native files
- Build/release/deployment files
- FlutterFlow export files
- Auth/database/live AI files

Do not stage, commit, or push unless explicitly instructed after validation.

---

# File: `planning/STATE.md`

Update the current project state to reflect Sprint 035.

```markdown
# Project State

## Current Sprint

Sprint 035 — Notification Reminder Flow Hardening

## Current Status

Sprint 034 closed cleanly as a planning/docs validation closeout. No runtime changes were needed. Task add, display, filter, toggle, edit, delete guard behavior, Assistant capture, navigation, and mobile/fixed-nav behavior were validated.

Sprint 035 is the next narrow app-completion sprint. It focuses on the notification and reminder experience that supports task follow-up visibility across Dashboard, Notifications, and task-related reminder state.

## Recently Completed

- Sprint 033 added accessible task edit/delete controls.
- Sprint 034 validated the task workflow after Sprint 033 and found no runtime changes were required.
- CEO Briefing remained deferred and untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remained absent.

## Next Action

Apply the Sprint 035 planning files, then have Codex read the sprint requirements, blueprint, acceptance criteria, and handoff prompt before implementation.

## Active Sprint Folder

`planning/sprints/035-notification-reminder-flow-hardening/`

## Guardrails

- Do not touch CEO Briefing.
- Do not create or restore `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not modify backend, Firebase, Hermes, package/dependency, native, build, release, deployment, FlutterFlow export, auth, database, or live AI files.
- Runtime changes are allowed only for concrete Sprint 035 acceptance failures.
```

---

# File: `planning/RISKS.md`

Add or update the Sprint 035 risk entries.

```markdown
# Risks

## Active Risks

| Risk | Impact | Mitigation | Status |
|---|---|---|---|
| Notification and reminder state may drift from task state after recent task-flow hardening. | Users may see stale counts, missing fallback copy, or unclear reminders. | Validate Dashboard badge/count behavior, Notifications copy, and task-related reminder visibility before changing runtime code. | Active for Sprint 035 |
| Browser validation may not cover every native confirmation or timing behavior. | Some interaction paths may require code inspection instead of full automation. | Pair browser validation with targeted code inspection and document any uncertainty in `docs/VALIDATION.md`. | Active |
| CEO Briefing deferral could be accidentally disturbed by broad navigation or page cleanup. | Reopens a known deferred workstream and wastes app-completion effort. | Keep CEO Briefing and its screenshot evidence path protected in every Sprint 035 prompt and validation step. | Active |
| Vite build warnings may distract from Sprint 035 scope. | Builder may chase non-blocking warnings and expand scope. | Treat existing warnings as non-blocking unless Sprint 035 acceptance fails because of them. | Active |
```

---

# File: `planning/QUESTIONS.md`

Update open questions for Sprint 035.

```markdown
# Questions

## Open Questions

| Question | Owner | Status | Notes |
|---|---|---|---|
| Does Sprint 035 require runtime changes, or will inspection and validation confirm the notification/reminder flow is already stable? | Builder | Open | Answer after read-first review and browser validation. |
| Are any notification/reminder count mismatches present after Sprint 034 task-flow validation? | Builder | Open | Validate Dashboard/Home, Notifications, and task reminder-related behavior. |
| Can all notification/reminder interactions be validated in the local browser wrapper? | Builder | Open | If not, document which paths were validated by code inspection. |
```

---

# File: `docs/VALIDATION.md`

Add Sprint 035 validation expectations.

```markdown
# Validation

## Sprint 035 — Notification Reminder Flow Hardening

Sprint 035 validates the notification and reminder experience after the recent task-flow work.

### Required Commands

Run before closeout:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git status --branch --short
```

### Browser Validation Checklist

Validate:

- Dashboard/Home remains reachable.
- Bottom navigation remains reachable and visually stable.
- Assistant remains reachable from the app flow.
- Notifications view opens from navigation.
- Empty Notifications state is clear and not broken.
- Notification/reminder items render without layout breakage.
- Notification counts or badges do not show stale or impossible values.
- Task-created reminder-related notices, if present in the current app, remain visible and understandable.
- Notification UI remains usable on mobile viewport.
- Fixed bottom navigation does not overlap critical notification content.
- Existing task flow from Sprint 034 remains intact enough to support reminder/notification validation.

### Protected Validation

Confirm:

```bash
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Do not validate by creating CEO Briefing screenshot evidence.

### Non-Blocking Known Build Warnings

Existing Vite warnings about mixed static/dynamic imports or chunk size are non-blocking unless Sprint 035 introduces a new build failure or acceptance failure.
```

---

# File: `planning/sprints/035-notification-reminder-flow-hardening/requirements.md`

```markdown
# Sprint 035 Requirements

## Sprint Name

035-notification-reminder-flow-hardening

## Goal

Harden Trina's notification and reminder flow after the recent task workflow validation.

The goal is not to add new notification features. The goal is to confirm that existing notification/reminder surfaces still work, remain readable, and do not regress after the task edit/delete and task-flow hardening work.

## Background

Sprint 033 added accessible task edit/delete controls.

Sprint 034 validated the task flow and found no runtime fixes were needed. Sprint 035 moves to the next app-completion surface: notification/reminder visibility.

The app should continue moving forward without returning to the CEO Briefing workstream.

## In Scope

Inspect and validate:

- Dashboard/Home notification or reminder indicators
- Notifications view rendering
- Empty Notifications fallback copy
- Notification/reminder item rendering
- Notification count or badge behavior, if present
- Navigation to and from Notifications
- Mobile layout and fixed bottom-nav spacing in notification surfaces
- Any task-related reminder state currently wired into Notifications or Dashboard
- Existing task flow only where needed to create or confirm notification/reminder behavior

Make minimal runtime fixes only if a concrete Sprint 035 acceptance failure is found.

## Out of Scope

Do not:

- Add new notification categories
- Add new reminder scheduling features
- Add backend notification delivery
- Add push notifications
- Add email/SMS notifications
- Add Firebase, Hermes, live AI, database, or auth work
- Redesign the Notifications module
- Redesign Dashboard
- Touch CEO Briefing
- Create or restore `references/flutterflow/sprint-009/ceo-briefing.png`
- Modify package/dependency, native, build, release, deployment, or FlutterFlow export files

## Expected Files to Inspect

- `App.tsx`
- `components/Dashboard.tsx`
- `components/NotificationsView.tsx`
- `components/Navigation.tsx`
- `components/TasksView.tsx`
- `types.ts`
- Any local storage/service file already used by the app for reminders or notifications, if present

## Expected Files to Modify Only If Needed

- `components/NotificationsView.tsx`
- `components/Dashboard.tsx`
- `App.tsx`
- `components/Navigation.tsx`
- `components/TasksView.tsx`
- `types.ts`

Docs/planning updates may be made after validation:

- `docs/VALIDATION.md`
- `planning/STATE.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`

## Success Standard

Sprint 035 succeeds if notification/reminder surfaces are validated and any concrete acceptance failures are fixed with minimal changes.

A no-runtime-change outcome is acceptable if inspection and validation show the current implementation already satisfies acceptance criteria.
```

---

# File: `planning/sprints/035-notification-reminder-flow-hardening/blueprint.md`

```markdown
# Sprint 035 Blueprint

## Implementation Mode

Start with inspection and validation.

Do not modify runtime files until a concrete Sprint 035 acceptance failure is found.

## Step 1 — Read Current Planning State

Codex must read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/035-notification-reminder-flow-hardening/requirements.md`
- `planning/sprints/035-notification-reminder-flow-hardening/blueprint.md`
- `planning/sprints/035-notification-reminder-flow-hardening/acceptance.md`

Then summarize before implementation.

## Step 2 — Inspect Notification/Reminder Wiring

Inspect:

- `App.tsx`
- `components/Dashboard.tsx`
- `components/NotificationsView.tsx`
- `components/Navigation.tsx`
- `components/TasksView.tsx`
- `types.ts`
- Any existing local notification/reminder service already used in the app

Confirm:

- Where notification/reminder data comes from
- How Dashboard surfaces counts or reminder indicators
- How Notifications renders empty and populated states
- Whether task-created reminders affect notification surfaces
- Whether bottom navigation state is correct for Notifications

## Step 3 — Run Browser Validation

Validate manually or with the available local browser tooling:

- Open Dashboard/Home.
- Navigate to Notifications.
- Confirm empty or populated state copy is readable.
- Confirm badges/counts do not show stale or impossible values.
- Use Assistant or existing task flow only if needed to confirm notification/reminder behavior.
- Validate mobile viewport.
- Confirm fixed bottom-nav spacing does not block notification content.
- Confirm task flow was not broken by any Sprint 035 change.

## Step 4 — Fix Only Concrete Failures

If validation finds a failure, apply the smallest targeted fix.

Examples of acceptable fixes:

- Correct stale count calculation.
- Restore missing empty-state copy.
- Fix notification item layout overflow.
- Add bottom padding so fixed navigation does not overlap content.
- Correct broken navigation active state for Notifications.
- Fix task/reminder data mapping if existing state is wired incorrectly.

Examples of unacceptable changes:

- New notification system
- New reminder scheduler
- New backend delivery
- New Firebase/Hermes integration
- New packages
- Broad component redesign
- CEO Briefing work

## Step 5 — Validate Commands

Run:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git status --branch --short
```

Document any non-blocking existing warnings.

## Step 6 — Update Planning/Validation Docs

Update only as needed:

- `docs/VALIDATION.md`
- `planning/STATE.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`

Keep updates factual.

## Step 7 — Stop Before Commit

Do not stage, commit, or push.

Report:

1. Whether runtime changes were needed.
2. Files changed.
3. Acceptance criteria passed.
4. Acceptance criteria incomplete or uncertain.
5. Validation commands and results.
6. Any risks/questions/state updates needed.
7. Confirmation that protected scope was untouched.
```

---

# File: `planning/sprints/035-notification-reminder-flow-hardening/acceptance.md`

```markdown
# Sprint 035 Acceptance Criteria

## Required Pass Criteria

Sprint 035 is complete when all applicable criteria below are satisfied.

### Planning and Scope

- Sprint 035 planning files exist under `planning/sprints/035-notification-reminder-flow-hardening/`.
- Builder read the Sprint 035 files and summarized before implementation.
- Runtime changes were made only if a concrete Sprint 035 acceptance failure was found.
- No new notification features were added.
- No broad redesign was introduced.

### Navigation and Reachability

- Dashboard/Home remains reachable.
- Notifications view remains reachable.
- Bottom navigation remains reachable and visually stable.
- Assistant remains reachable.
- Active navigation state is not broken by any Sprint 035 change.

### Notification/Reminder Behavior

- Notifications view renders without runtime error.
- Empty Notifications state is clear and readable.
- Notification/reminder items, if present, render without layout breakage.
- Notification count or badge behavior, if present, does not show stale or impossible values.
- Task-related reminder/notification state, if already wired into the app, remains understandable.
- Existing task flow remains intact enough to support notification/reminder validation.

### Mobile and Layout

- Notifications surface remains usable in mobile viewport.
- Fixed bottom navigation does not overlap critical notification/reminder content.
- Controls remain visible and accessible.

### Protected Scope

- CEO Briefing was not touched.
- `references/flutterflow/sprint-009/ceo-briefing.png` was not created or restored.
- Backend files were not modified.
- Firebase files were not modified.
- Hermes files were not modified.
- Package/dependency files were not modified.
- Native files were not modified.
- Build/release/deployment files were not modified.
- FlutterFlow export files were not modified.
- Auth, database, and live AI files were not modified.

### Validation

The following commands pass or have documented non-blocking warnings:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git status --branch --short
```

### Closeout

- Files changed are reported.
- Acceptance criteria are reported as complete, incomplete, or uncertain.
- Any browser validation gaps are documented.
- No staging, commit, or push is performed unless explicitly approved after validation.
```

---

# File: `planning/sprints/035-notification-reminder-flow-hardening/handoff-prompt.md`

```markdown
# Sprint 035 Handoff Prompt

Read the following files before making changes:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/035-notification-reminder-flow-hardening/requirements.md`
- `planning/sprints/035-notification-reminder-flow-hardening/blueprint.md`
- `planning/sprints/035-notification-reminder-flow-hardening/acceptance.md`

Then summarize:

1. What Sprint 035 is supposed to accomplish.
2. Which files you expect to inspect.
3. Which files you might modify only if validation finds a concrete failure.
4. What tests or validation steps you will run.
5. Any blockers, ambiguities, or protected files.

Do not start implementation until I approve your summary.

Rules:

- Inspect first.
- Make runtime changes only if you find a concrete Sprint 035 acceptance failure.
- Keep fixes minimal and targeted.
- Do not add new notification features.
- Do not redesign Dashboard or Notifications.
- Do not touch CEO Briefing.
- Do not create or restore `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not modify backend, Firebase, Hermes, package/dependency, native, build, release, deployment, FlutterFlow export, auth, database, or live AI files.
- Do not stage, commit, or push.

Scope to validate:

- Dashboard/Home reachability
- Bottom navigation
- Assistant reachability
- Notifications reachability
- Empty Notifications fallback copy
- Notification/reminder item rendering
- Notification badge/count behavior, if present
- Task-related reminder/notification behavior, if already wired
- Mobile responsiveness
- Fixed bottom-nav overlap

After work is complete, report:

1. Whether runtime changes were needed.
2. Files changed.
3. Acceptance criteria passed.
4. Acceptance criteria incomplete or uncertain.
5. Validation commands and results:
   - `npm run lint`
   - `npm run build`
   - `git diff --check`
   - `test ! -f references/flutterflow/sprint-009/ceo-briefing.png`
   - `git status --branch --short`
6. Any risks, questions, or state updates needed.
7. Confirm protected scope stayed untouched.
8. Confirm no staging, commit, or push.
```

---

## Codex Apply-Pack Prompt

Use this first. This is not an implementation prompt.

```text
Apply the Sprint 035 Architect Pack as planning/docs only.

Create or update only the files listed in the Architect Pack:

- planning/STATE.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/035-notification-reminder-flow-hardening/requirements.md
- planning/sprints/035-notification-reminder-flow-hardening/blueprint.md
- planning/sprints/035-notification-reminder-flow-hardening/acceptance.md
- planning/sprints/035-notification-reminder-flow-hardening/handoff-prompt.md

Also save the Architect Pack as:

- architect-packs/trina-035-notification-reminder-flow-hardening-architect-pack.md

Do not modify runtime app files.
Do not stage, commit, or push.
Do not touch CEO Briefing.
Do not create or restore references/flutterflow/sprint-009/ceo-briefing.png.

After applying the pack, run:

git diff --check
git status --branch --short
git diff --name-only
test ! -f references/flutterflow/sprint-009/ceo-briefing.png

Then report files created, files updated, validation results, and final git status.
```

---

## Next Prompt After Pack Is Applied

Use this only after Codex applies the planning/docs pack.

```text
Read the Sprint 035 files and summarize the plan before implementation.

Do not modify runtime code yet.

Read:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/035-notification-reminder-flow-hardening/requirements.md
- planning/sprints/035-notification-reminder-flow-hardening/blueprint.md
- planning/sprints/035-notification-reminder-flow-hardening/acceptance.md
- planning/sprints/035-notification-reminder-flow-hardening/handoff-prompt.md

Then summarize:

1. What Sprint 035 is supposed to accomplish.
2. Which files you expect to inspect.
3. Which files you might modify only if validation finds a concrete failure.
4. What tests or validation steps you will run.
5. Any blockers, ambiguities, or protected files.

Do not start implementation until I approve your summary.
```
