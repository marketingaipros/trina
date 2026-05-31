# Trina Sprint 026 Architect Pack — Assistant Voice Entry and Task Flow Stabilization

**Project:** Trina  
**Sprint:** 026  
**Sprint name:** `026-assistant-voice-entry-and-task-flow-stabilization`  
**Architect Pack file:** `architect-packs/trina-026-assistant-voice-entry-and-task-flow-stabilization-architect-pack.md`  
**Created by:** Architect Layer  
**Purpose:** Move Trina app completion forward by stabilizing the core assistant/task/notification user path while keeping CEO Briefing explicitly deferred.

---

## Non-Negotiable Direction

Sprint 026 is an app-completion sprint.

It must not return to CEO Briefing work.

CEO Briefing remains:

- deferred
- not complete
- non-blocking
- excluded from this sprint
- not a reason to stop app-completion work

The Builder must not create, rebuild, route, wire, screenshot, document as complete, or validate the CEO Briefing page in Sprint 026.

---

## Architect Intent

Sprint 025 cleaned the planning/docs layer and restored forward state. Sprint 026 should now resume practical app completion.

The next useful product slice is the assistant-centered workflow:

1. User enters through the Assistant or voice/reminder capture flow.
2. User creates or confirms a task/reminder.
3. The task/reminder appears in the right app surface.
4. Notifications/reminder visibility works at a prototype/local runtime level.
5. Dashboard navigation supports the working flow.

This sprint should make Trina feel like a working assistant app again, not a documentation exercise and not a CEO Briefing recovery sprint.

---

## Files This Architect Pack Must Create or Update

Codex must apply this Architect Pack to the project folder by creating or updating the files below.

### Required new sprint folder

```text
planning/sprints/026-assistant-voice-entry-and-task-flow-stabilization/
```

### Required sprint files

```text
planning/sprints/026-assistant-voice-entry-and-task-flow-stabilization/requirements.md
planning/sprints/026-assistant-voice-entry-and-task-flow-stabilization/blueprint.md
planning/sprints/026-assistant-voice-entry-and-task-flow-stabilization/acceptance.md
planning/sprints/026-assistant-voice-entry-and-task-flow-stabilization/handoff-prompt.md
```

### Required planning/docs updates

```text
planning/STATE.md
docs/ARCHITECTURE.md
docs/API.md
docs/VALIDATION.md
```

### Conditional planning/docs updates

Update these only if the content materially changes:

```text
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
```

---

## Protected Scope

The Builder must not modify:

```text
references/flutterflow/sprint-009/ceo-briefing.png
references/flutterflow/sprint-009/ceo-briefing*.png
```

The Builder must not create any CEO Briefing screenshot evidence.

The Builder must not do any of the following in Sprint 026:

- Build the CEO Briefing page.
- Rebuild the CEO Briefing page.
- Wire CEO Briefing navigation.
- Add active CEO Briefing build instructions.
- Mark CEO Briefing complete.
- Treat CEO Briefing as a blocker.
- Touch FlutterFlow export/build/release artifacts.
- Modify Firebase/backend/Hermes/native/release/build/export files.
- Create production SaaS assumptions.
- Add authentication work.
- Add database/cloud sync work.
- Add CRM/invoicing/multi-user permission work.

---

## Runtime Scope Allowed for Sprint 026

This sprint may modify local app runtime files needed to stabilize the assistant/task/notification path, based on actual repository structure.

Expected likely files, based on recent project state:

```text
App.tsx
components/Navigation.tsx
components/NotificationsView.tsx
src/lib/reminderNotifications.js
```

Codex may inspect and modify other app files only if they are directly required for:

- Assistant entry
- voice/reminder capture
- task creation or display
- notification/reminder visibility
- dashboard navigation polish
- lightweight local validation

Codex must list any additional runtime files before implementation.

---

## Sprint Goal

Stabilize the core assistant entry and task/reminder flow so the app has one usable forward path:

```text
Dashboard or Navigation → Assistant / Voice Entry → Task or Reminder Capture → Task/Notification Visibility → Return Navigation
```

The sprint is successful when a user can move through the core assistant/task path without dead ends, broken navigation, or unclear prototype behavior.

---

## Architect-Facing Requirements

### Product Outcome

Trina should feel like a usable assistant prototype.

The user should be able to:

- enter the Assistant flow from the main app surface
- understand where to capture a voice note, reminder, or task
- create or simulate a reminder/task action using existing local patterns
- see the created or expected item reflected in a task or notification surface
- navigate back without getting stuck

### Business Outcome

This sprint should move the app toward completion by improving a real user workflow.

It must avoid the repeated trap of returning to CEO Briefing evidence work.

### Source-of-Truth Outcome

The sprint files must clearly say:

- CEO Briefing is deferred
- CEO Briefing is not in scope
- app-completion flow is the priority
- no screenshot evidence is expected for CEO Briefing

---

## Builder-Facing Implementation Plan

### Step 1 — Read and summarize first

Codex must read:

```text
AGENTS.md
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/ARCHITECTURE.md
docs/API.md
docs/VALIDATION.md
planning/sprints/026-assistant-voice-entry-and-task-flow-stabilization/requirements.md
planning/sprints/026-assistant-voice-entry-and-task-flow-stabilization/blueprint.md
planning/sprints/026-assistant-voice-entry-and-task-flow-stabilization/acceptance.md
```

Then Codex must summarize before implementation:

1. What Sprint 026 is supposed to accomplish.
2. Which files it expects to inspect.
3. Which files it expects to modify.
4. What validation checks it will run.
5. Any blockers or ambiguities.

Codex must stop after this summary until approved.

### Step 2 — Inspect actual app flow

Codex should inspect the existing app structure and identify:

- current navigation routes or screen-state model
- Assistant entry component or placeholder
- voice/reminder capture component or placeholder
- task/reminder data shape
- notification display logic
- local helper functions related to reminders or notifications

Codex should not infer missing architecture without checking files.

### Step 3 — Fix the narrow flow

Codex should implement the smallest safe changes to make the flow usable.

Possible fixes:

- connect Assistant entry from Dashboard or navigation
- make voice/reminder entry visible and usable
- stabilize task/reminder creation state
- ensure notification/reminder item appears after creation or simulated capture
- ensure back/home navigation works
- improve empty states and labels so the prototype is understandable
- remove dead-end buttons or replace with safe placeholder behavior

This must stay local and prototype-safe.

### Step 4 — Update validation docs

Codex should update `docs/VALIDATION.md` with Sprint 026 validation steps.

The validation should be practical:

- start app or run existing local validation command if available
- check no build/type/lint errors if commands exist
- manually verify the Assistant → task/reminder → notification path
- verify CEO Briefing evidence file is still absent

### Step 5 — Update architecture/API docs only as needed

Codex should update:

- `docs/ARCHITECTURE.md` if navigation or app flow structure changes
- `docs/API.md` if local interfaces, helper contracts, data shapes, or input/output behavior changes

Do not pad these files.

### Step 6 — Update state

Codex should update `planning/STATE.md` after implementation with:

- Sprint 026 status
- what changed
- validation results
- next recommended sprint
- CEO Briefing still deferred and non-blocking

---

## Acceptance Criteria

Sprint 026 is accepted only if all of these are true:

### Flow acceptance

- The Assistant entry point is reachable from the main app surface.
- A user can complete or simulate a voice/task/reminder capture action.
- The resulting task/reminder/notification state is visible in the app.
- The user can navigate back to the main app surface without a dead end.
- Empty states explain what to do next.

### Guardrail acceptance

- CEO Briefing was not built, rebuilt, wired, screenshot, marked complete, or treated as a blocker.
- No `references/flutterflow/sprint-009/ceo-briefing.png` file exists.
- No active CEO Briefing build instructions were added.

### Scope acceptance

- No Firebase/backend/Hermes/package/native/release/build/export work was done.
- No auth, database, cloud sync, CRM, invoicing, or production SaaS scope was introduced.
- Runtime changes were limited to the assistant/task/notification/navigation path.

### Documentation acceptance

- Sprint 026 folder has `requirements.md`, `blueprint.md`, `acceptance.md`, and `handoff-prompt.md`.
- `planning/STATE.md` reflects the new forward app-completion state.
- `docs/VALIDATION.md` includes Sprint 026 validation steps.
- `docs/ARCHITECTURE.md` and `docs/API.md` are updated only if needed.

### Validation acceptance

Codex must run and report available checks, such as:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

If project commands exist, Codex should also run the safest applicable local checks, for example:

```bash
npm test
npm run lint
npm run typecheck
npm run build
```

Only run commands that exist and are safe for the current repo.

---

# File Contents To Apply

The following sections are the exact sprint files Codex should create.

---

## `planning/sprints/026-assistant-voice-entry-and-task-flow-stabilization/requirements.md`

```markdown
# Sprint 026 Requirements — Assistant Voice Entry and Task Flow Stabilization

## Goal

Stabilize the core assistant-centered app flow so Trina feels like a working assistant prototype again.

The target flow is:

```text
Dashboard or Navigation → Assistant / Voice Entry → Task or Reminder Capture → Task/Notification Visibility → Return Navigation
```

## Current Context

Sprint 025 cleaned the planning/docs state and restored a forward path. Sprint 026 resumes app completion.

CEO Briefing is deferred, not complete, non-blocking, and out of scope for this sprint.

## User Story

As a Trina user, I want to enter the Assistant flow, capture or simulate a reminder/task, see the result reflected in the app, and return to the main app surface without confusion.

## In Scope

- Assistant entry from the main app surface.
- Voice/reminder/task capture flow stabilization.
- Local task/reminder state display.
- Notification/reminder visibility improvements.
- Dashboard/navigation polish needed for the core flow.
- Clear empty states and safe placeholder behavior where live features are not ready.
- Lightweight local validation.
- Planning/docs updates tied to this sprint.

## Out of Scope

- CEO Briefing page build, rebuild, routing, screenshot, or evidence capture.
- FlutterFlow export/build/release work.
- Firebase/backend/Hermes/native/release/build/export work.
- Auth changes.
- Database/cloud sync.
- CRM, invoicing, or multi-user permissions.
- Live AI integration unless already present and safe.
- Large dashboard redesign.
- New unrelated screens.

## Business Rules

- The app-completion path takes priority over CEO Briefing.
- CEO Briefing must remain deferred and non-blocking.
- Local prototype behavior is acceptable when live integrations are not ready.
- Buttons should either work or clearly communicate safe placeholder behavior.
- The user should not hit a dead end in the core flow.

## Required Behavior

- A visible Assistant entry point exists from the main app surface.
- The user can reach voice/reminder/task capture.
- The user can create or simulate a reminder/task.
- The result is visible in a task, reminder, or notification area.
- Navigation lets the user return to the main app surface.
- Empty states explain what to do next.

## Edge Cases

- No existing reminders/tasks.
- User taps capture action with empty input.
- User navigates away and returns.
- Notifications are unavailable or permission-gated.
- Existing helper functions are incomplete.

## Explicit CEO Briefing Guardrail

Do not touch CEO Briefing in this sprint.

Do not create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Do not add active CEO Briefing instructions to planning or docs.
```

---

## `planning/sprints/026-assistant-voice-entry-and-task-flow-stabilization/blueprint.md`

```markdown
# Sprint 026 Blueprint — Assistant Voice Entry and Task Flow Stabilization

## Objective

Implement the smallest safe runtime changes that make the Assistant → task/reminder → notification path usable.

## Files to Read First

```text
AGENTS.md
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/ARCHITECTURE.md
docs/API.md
docs/VALIDATION.md
planning/sprints/026-assistant-voice-entry-and-task-flow-stabilization/requirements.md
planning/sprints/026-assistant-voice-entry-and-task-flow-stabilization/acceptance.md
```

## Likely Files to Inspect

```text
App.tsx
components/Navigation.tsx
components/NotificationsView.tsx
src/lib/reminderNotifications.js
```

Inspect the repo before deciding final edits.

## Allowed Runtime Changes

Runtime changes are allowed only when directly tied to:

- Assistant entry
- voice/reminder/task capture
- notification/reminder visibility
- dashboard/navigation support for the core flow
- local validation of this path

## Protected Files and Areas

Do not create or modify CEO Briefing screenshot evidence:

```text
references/flutterflow/sprint-009/ceo-briefing.png
references/flutterflow/sprint-009/ceo-briefing*.png
```

Do not modify Firebase/backend/Hermes/package/native/release/build/export files.

## Build Plan

### 1. Confirm current state

Run:

```bash
git status --branch --short
```

Inspect app files to identify the current navigation and assistant/task/notification structure.

### 2. Map the existing flow

Document briefly in the implementation summary:

- where the Assistant entry currently lives
- how the app tracks selected view/screen
- where reminder/task data lives
- how notifications are displayed
- which helpers already exist

### 3. Stabilize entry and navigation

Make the Assistant or voice/reminder path reachable from the main app surface.

Avoid broad redesign.

Fix only the navigation needed for the core flow.

### 4. Stabilize capture behavior

Ensure the user can create or simulate a task/reminder through local state or existing helpers.

Handle empty input safely.

### 5. Stabilize visibility

Ensure the created/simulated item appears in a visible task, reminder, or notification surface.

Improve empty states if needed.

### 6. Validate

Run available safe checks.

Always run:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Run project-specific checks only if scripts exist and are safe:

```bash
npm test
npm run lint
npm run typecheck
npm run build
```

### 7. Update docs/state

Update:

```text
planning/STATE.md
docs/VALIDATION.md
```

Update only if needed:

```text
docs/ARCHITECTURE.md
docs/API.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
```

## Implementation Rules

- Do not build CEO Briefing.
- Do not add active CEO Briefing guidance.
- Do not expand scope beyond the core assistant/task path.
- Do not stage, commit, or push unless explicitly asked.
- Prefer small, reviewable changes.
- Report all files changed.
```

---

## `planning/sprints/026-assistant-voice-entry-and-task-flow-stabilization/acceptance.md`

```markdown
# Sprint 026 Acceptance Criteria — Assistant Voice Entry and Task Flow Stabilization

## Core Flow

Sprint 026 is complete when:

- The Assistant entry point is reachable from the main app surface.
- A user can reach a voice/reminder/task capture surface.
- A user can create or simulate a reminder/task.
- The resulting item is visible in a task, reminder, or notification surface.
- Navigation allows the user to return to the main app surface.
- Empty states are understandable.
- Buttons in the core path are not dead ends.

## CEO Briefing Guardrail

Sprint 026 is complete only if:

- CEO Briefing was not built.
- CEO Briefing was not rebuilt.
- CEO Briefing navigation was not wired.
- CEO Briefing was not marked complete.
- CEO Briefing was not treated as blocking app completion.
- No CEO Briefing screenshot evidence was created.
- This file remains absent:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

## Scope Guardrail

Sprint 026 is complete only if no work was done in:

- Firebase/backend
- Hermes
- package/native/release/build/export areas
- auth
- database/cloud sync
- CRM/invoicing
- production SaaS features
- unrelated screens

## Documentation

Sprint 026 is complete when:

- `planning/STATE.md` reflects Sprint 026 completion or current status.
- `docs/VALIDATION.md` records the Sprint 026 validation path.
- `docs/ARCHITECTURE.md` is updated if navigation/app flow changed.
- `docs/API.md` is updated if data shapes/helper contracts changed.
- Any new risks or decisions are recorded only if durable.

## Validation Required

The Builder must report results for:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

The Builder should also run safe project checks if available:

```bash
npm test
npm run lint
npm run typecheck
npm run build
```

If a check is unavailable or unsafe, the Builder must say why.

## Completion Standard

Do not mark Sprint 026 complete if the app still has no usable Assistant → task/reminder → visibility path.
```

---

## `planning/sprints/026-assistant-voice-entry-and-task-flow-stabilization/handoff-prompt.md`

```markdown
# Sprint 026 Builder Handoff Prompt

You are the Builder for Trina Sprint 026.

Sprint folder:

```text
planning/sprints/026-assistant-voice-entry-and-task-flow-stabilization/
```

Architect Pack:

```text
architect-packs/trina-026-assistant-voice-entry-and-task-flow-stabilization-architect-pack.md
```

## First, Read These Files

```text
AGENTS.md
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/ARCHITECTURE.md
docs/API.md
docs/VALIDATION.md
planning/sprints/026-assistant-voice-entry-and-task-flow-stabilization/requirements.md
planning/sprints/026-assistant-voice-entry-and-task-flow-stabilization/blueprint.md
planning/sprints/026-assistant-voice-entry-and-task-flow-stabilization/acceptance.md
```

## Sprint Goal

Stabilize the assistant-centered app flow:

```text
Dashboard or Navigation → Assistant / Voice Entry → Task or Reminder Capture → Task/Notification Visibility → Return Navigation
```

## Critical Guardrail

Do not work on CEO Briefing.

CEO Briefing is deferred, not complete, non-blocking, and out of scope.

Do not build it.  
Do not rebuild it.  
Do not wire it.  
Do not screenshot it.  
Do not mark it complete.  
Do not make it a blocker.  

Do not create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

## Before Implementation

Before making changes, summarize:

1. What Sprint 026 is supposed to accomplish.
2. Which files you expect to inspect.
3. Which files you expect to modify.
4. What validation checks you will run.
5. Any blockers or ambiguities.

Stop after the summary and wait for approval.

## After Approval

Implement the smallest safe changes needed to make the Assistant → task/reminder → notification path usable.

Allowed likely areas:

```text
App.tsx
components/Navigation.tsx
components/NotificationsView.tsx
src/lib/reminderNotifications.js
```

Only modify other files if directly required and explain why.

## Validation

Run and report:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Run safe project checks if available:

```bash
npm test
npm run lint
npm run typecheck
npm run build
```

Do not stage, commit, or push unless explicitly asked.

## Final Report

Report:

1. Files changed.
2. What was fixed in the user flow.
3. Validation checks run and results.
4. Confirmation that CEO Briefing was untouched.
5. Remaining risks or recommended next sprint.
```

---

# Codex Apply-Pack Prompt

Use this prompt after saving this Architect Pack into the repo.

```text
You are the Builder for Trina Sprint 026.

Architect Pack location:

architect-packs/trina-026-assistant-voice-entry-and-task-flow-stabilization-architect-pack.md

Task:

1. Read the Architect Pack fully.
2. Apply the Architect Pack by creating/updating the Sprint 026 planning files and required docs/state files only.
3. Do not implement runtime code yet.
4. Do not stage, commit, or push.
5. Do not touch CEO Briefing.
6. Do not create `references/flutterflow/sprint-009/ceo-briefing.png`.
7. Keep CEO Briefing deferred, not complete, non-blocking, and out of scope.

Create/update these files:

- planning/sprints/026-assistant-voice-entry-and-task-flow-stabilization/requirements.md
- planning/sprints/026-assistant-voice-entry-and-task-flow-stabilization/blueprint.md
- planning/sprints/026-assistant-voice-entry-and-task-flow-stabilization/acceptance.md
- planning/sprints/026-assistant-voice-entry-and-task-flow-stabilization/handoff-prompt.md
- planning/STATE.md
- docs/VALIDATION.md
- docs/ARCHITECTURE.md, only if needed
- docs/API.md, only if needed
- planning/DECISIONS.md, planning/RISKS.md, planning/QUESTIONS.md, only if needed

After applying the pack, report:

1. Files created.
2. Files modified.
3. Files not changed and why.
4. Validation checks run.
5. Final `git status --branch --short`.
6. Confirmation that CEO Briefing and screenshot evidence were untouched.

Run:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```
```

---

# Next-Step Rule

After Codex applies this Architect Pack, do not immediately implement code.

The next Codex prompt must be the Sprint 026 start prompt from the created `handoff-prompt.md`.

Codex must read the sprint files and summarize before implementation.
