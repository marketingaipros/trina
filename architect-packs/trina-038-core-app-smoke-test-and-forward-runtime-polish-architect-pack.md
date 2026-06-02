# Sprint 038 Architect Pack — Core App Smoke Test and Forward Runtime Polish

**Project:** Trina
**Sprint:** 038
**Sprint name:** Core App Smoke Test and Forward Runtime Polish
**Pack type:** Architect Pack
**Date:** 2026-06-01
**Architect layer:** ChatGPT
**Builder layer target:** Codex

---

## 0. Pack Purpose

Create Sprint 038 as a controlled validation and small-forward-polish sprint.

Sprint 038 must keep the app moving forward after Sprint 037 fixture validation without reopening CEO Briefing work.

The sprint should:

- Run a broad smoke test across the current core app.
- Confirm the forward runtime surface is still stable.
- Identify and fix only small, concrete UI/runtime polish issues found during the smoke pass.
- Preserve the local/dev-only fixture behavior validated in Sprint 037.
- Keep CEO Briefing fully deferred and untouched.
- Avoid backend, Firebase, package, native, build, release, and deployment changes.

Preferred outcome:

- Small runtime polish only if the smoke pass finds a concrete issue.
- No speculative refactors.
- No new feature work.
- No broad redesign.

---

## 1. Files This Architect Pack Should Create Or Update

Codex should apply this Architect Pack by creating or updating the following planning/docs files only.

### Create

```text
planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/requirements.md
planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/blueprint.md
planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/acceptance.md
planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/handoff-prompt.md
```

### Update

```text
planning/STATE.md
docs/VALIDATION.md
```

### Update only if needed

```text
planning/RISKS.md
planning/QUESTIONS.md
planning/DECISIONS.md
docs/ARCHITECTURE.md
docs/API.md
```

Expected default:

- `planning/RISKS.md` should only change if Sprint 038 finds a new risk.
- `planning/QUESTIONS.md` should only change if Sprint 038 finds a real blocker or ambiguity.
- `planning/DECISIONS.md` should only change if a durable project decision changes.
- `docs/ARCHITECTURE.md` should not change unless runtime structure changes.
- `docs/API.md` should not change because Sprint 038 should not alter CLI/API/contracts.

---

## 2. Non-Negotiable Scope Guardrails

Sprint 038 must not touch:

```text
references/flutterflow/sprint-009/ceo-briefing.png
references/flutterflow/sprint-009/
backend files
Firebase files
package/dependency files
native build files
release files
deployment files
```

Do not create CEO Briefing evidence.

Do not work on the CEO Briefing page.

Do not reopen CEO Briefing scope.

Do not add new integrations.

Do not add new dependencies.

Do not change authentication.

Do not change database/Firebase behavior.

Do not change deployment configuration.

Do not do broad styling rewrites.

Do not redesign the app.

---

## 3. Architect-Facing Requirements

### 3.1 Business Goal

Sprint 038 exists to maintain forward momentum on the Trina app while keeping the project stable.

After several validation-focused sprints, the project needs a broad smoke test and a narrow runtime polish pass so the app remains usable across the current core flows.

### 3.2 User Goal

A user should still be able to:

- Reach Dashboard/Home.
- Open Assistant / Voice Entry from Dashboard.
- Capture a typed task.
- See the captured task in Tasks.
- Open Notifications.
- Understand empty/fallback Notifications state.
- See reminder-backed Notifications when the local fixture flag is enabled.
- Navigate between major app sections.
- Use the app at mobile viewport size around `390x844` without bottom-nav overlap.

### 3.3 Operator Goal

The operator needs Codex to validate and polish the existing app without drifting into deferred CEO Briefing work or larger technical areas.

### 3.4 Sprint Type

This is a runtime smoke-test and small-polish sprint.

It is not:

- A CEO Briefing sprint.
- A backend sprint.
- A Firebase sprint.
- A package/dependency sprint.
- A deployment sprint.
- A design overhaul sprint.
- A new feature sprint.

---

## 4. Builder-Facing Implementation Plan

### 4.1 First Step — Read Existing Project State

Codex must read:

```text
AGENTS.md
planning/STATE.md
planning/DECISIONS.md
planning/DOMAIN.md
planning/RISKS.md
planning/QUESTIONS.md
docs/VALIDATION.md
planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/requirements.md
planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/blueprint.md
planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/acceptance.md
```

Then Codex must summarize:

1. What Sprint 038 is supposed to accomplish.
2. Which files it expects to inspect.
3. Which files it expects to modify, if any.
4. What validation steps it will run.
5. Any blockers or ambiguities.

Codex must not implement until the summary is approved.

### 4.2 Runtime Inspection Targets

Codex may inspect these files as needed:

```text
App.tsx
components/Dashboard.tsx
components/VoiceDashboard.tsx
components/TasksView.tsx
components/NotificationsView.tsx
components/Navigation.tsx
components/CalendarView.tsx
components/FinanceView.tsx
components/KnowledgeBaseView.tsx
types.ts
src/lib/reminderNotifications.js
```

Codex should inspect only enough to confirm current behavior and locate small polish issues.

### 4.3 Preferred Edit Strategy

Preferred outcome is minimal runtime edits.

Runtime edits are allowed only when Codex finds a concrete issue during smoke testing, such as:

- A visible layout problem around `390x844`.
- A confusing or stale empty/fallback message.
- A bottom nav active-state issue.
- A task capture display issue.
- A notification badge/list mismatch.
- A minor accessibility label or state issue.
- A dev-only fixture guard issue missed by earlier validation.

Do not edit runtime files just to “improve” them.

Do not refactor working code.

Do not rename components.

Do not change app architecture.

Do not change data models unless a current bug requires it and the change is small.

### 4.4 Documentation Updates

At the end of Sprint 038, Codex should update:

```text
planning/STATE.md
docs/VALIDATION.md
```

The updates should record:

- Sprint 038 status.
- Validation commands run.
- Manual smoke-test results.
- Any runtime polish performed.
- Any known warnings.
- CEO Briefing remains deferred and untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

### 4.5 Validation Commands

Codex must run:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

If lint/build produce known warnings only, Codex should document them without treating them as failures.

Known build warning pattern from Sprint 037:

- Vite warning about `services/authService.ts` mixed import.
- Large bundle size warning.

Do not fix those warnings in Sprint 038 unless they are directly tied to a smoke-test failure.

### 4.6 Manual Browser Smoke Checks

Codex should perform or document manual/browser validation for:

- Dashboard/Home reachable.
- Assistant / Voice Entry reachable from Dashboard.
- Assistant typed task capture creates a visible task.
- Tasks view renders created task.
- Notifications reachable.
- Notifications fallback/empty state readable without fixture.
- Reminder-backed notification visible with `?trinaReminderFixture=1`.
- Direct Notifications start works with `?trinaReminderFixture=1&trinaStart=notifications`.
- Dashboard badge count aligns with Notifications list.
- Bottom nav active state works.
- Calendar route/page reachable.
- Finance route/page reachable.
- Knowledge Base route/page reachable.
- Mobile viewport around `390x844` has no fixed bottom-nav overlap.
- No obvious layout clipping in the main core views.

### 4.7 Git Safety

Codex must not stage, commit, or push during implementation/validation.

Codex should report final status and wait for operator approval before any closeout commit.

---

## 5. Acceptance Criteria

Sprint 038 is complete only when all required criteria are satisfied.

### 5.1 Core Smoke Validation

- Dashboard/Home is reachable.
- Assistant / Voice Entry is reachable from Dashboard.
- Typed Assistant task capture works.
- Captured task appears in Tasks.
- Tasks view remains usable.
- Notifications is reachable.
- Notifications fallback/empty state remains readable.
- Fixture-backed reminder notification works with `?trinaReminderFixture=1`.
- Direct Notifications start works with `?trinaReminderFixture=1&trinaStart=notifications`.
- Dashboard badge count aligns with Notifications list.
- Bottom nav active state works across core routes.
- Calendar is reachable.
- Finance is reachable.
- Knowledge Base is reachable.
- Mobile viewport around `390x844` has no fixed bottom-nav overlap.

### 5.2 Scope Protection

- CEO Briefing files are untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` is not created.
- No backend files are changed.
- No Firebase files are changed.
- No package/dependency files are changed.
- No native/build/release/deployment files are changed.

### 5.3 Runtime Change Control

- If no concrete issue is found, no runtime files are changed.
- If runtime files are changed, every change maps to a documented smoke-test finding.
- No broad refactor is performed.
- No app redesign is performed.
- No new feature is introduced.

### 5.4 Validation

These commands pass or have documented non-blocking known warnings:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

### 5.5 Documentation

- `planning/STATE.md` reflects Sprint 038 status.
- `docs/VALIDATION.md` records Sprint 038 validation commands and manual smoke results.
- Any new risk, decision, or question is recorded in the correct planning file.
- If no new risk, decision, or question exists, Codex states that clearly.

---

## 6. Sprint File Contents

Codex should create the following files with the content below.

---

# File: `planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/requirements.md`

```markdown
# Sprint 038 Requirements — Core App Smoke Test and Forward Runtime Polish

## Purpose

Sprint 038 validates the current core Trina app after Sprint 037 fixture regression validation and performs only small, concrete runtime polish if the smoke pass finds a real issue.

The sprint keeps the project moving forward without reopening CEO Briefing work.

## Background

Sprint 037 confirmed the local reminder notification fixture is safe, repeatable, local/dev-only, and does not regress key app paths.

Sprint 038 extends that stability check across the broader core app surface:

- Dashboard/Home
- Assistant / Voice Entry
- Typed task capture
- Tasks
- Notifications
- Bottom navigation
- Calendar
- Finance
- Knowledge Base
- Mobile viewport around `390x844`

## Goals

- Confirm the current app is broadly usable across core routes.
- Confirm typed task capture still creates a visible task.
- Confirm reminder-backed Notifications still work with the dev-only fixture flag.
- Confirm bottom navigation state remains clear.
- Confirm mobile layout does not overlap fixed bottom navigation.
- Apply only small runtime polish if a concrete issue is found.
- Update validation/state docs with Sprint 038 results.

## Non-Goals

- Do not work on CEO Briefing.
- Do not create CEO Briefing evidence.
- Do not create `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not touch backend, Firebase, package, native, build, release, or deployment files.
- Do not add dependencies.
- Do not refactor app architecture.
- Do not redesign the app.
- Do not create new features.
- Do not change authentication or data persistence.

## Required Validation Commands

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

## Manual Smoke Checks

- Dashboard/Home reachable.
- Assistant / Voice Entry reachable from Dashboard.
- Assistant typed task capture creates a visible task.
- Tasks view renders created task.
- Notifications reachable.
- Notifications fallback/empty state readable without fixture.
- Reminder-backed notification visible with `?trinaReminderFixture=1`.
- Direct Notifications start works with `?trinaReminderFixture=1&trinaStart=notifications`.
- Dashboard badge count aligns with Notifications list.
- Bottom nav active state works.
- Calendar reachable.
- Finance reachable.
- Knowledge Base reachable.
- Mobile viewport around `390x844` has no fixed bottom-nav overlap.

## Documentation Requirements

Update:

- `planning/STATE.md`
- `docs/VALIDATION.md`

Update only if Sprint 038 findings require it:

- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `planning/DECISIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
```

---

# File: `planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/blueprint.md`

```markdown
# Sprint 038 Blueprint — Core App Smoke Test and Forward Runtime Polish

## Builder Instructions

Sprint 038 is a controlled smoke-test and narrow polish sprint.

Prefer no runtime changes unless a concrete issue is found.

Do not stage, commit, or push.

## Step 1 — Read Project Context

Read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/requirements.md`
- `planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/blueprint.md`
- `planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/acceptance.md`

Then summarize the sprint before implementation.

## Step 2 — Inspect Runtime Surface

Inspect only what is needed from:

- `App.tsx`
- `components/Dashboard.tsx`
- `components/VoiceDashboard.tsx`
- `components/TasksView.tsx`
- `components/NotificationsView.tsx`
- `components/Navigation.tsx`
- `components/CalendarView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`
- `types.ts`
- `src/lib/reminderNotifications.js`

Do not change files during inspection.

## Step 3 — Run Smoke Pass

Validate:

- Dashboard/Home route.
- Dashboard to Assistant / Voice Entry route.
- Typed task capture.
- Tasks rendering.
- Notifications empty/fallback state.
- Notifications fixture state.
- Direct Notifications start with fixture and start params.
- Dashboard badge count.
- Bottom nav active state.
- Calendar route.
- Finance route.
- Knowledge Base route.
- Mobile viewport around `390x844`.

## Step 4 — Decide Whether Runtime Polish Is Needed

If no concrete issue is found:

- Do not edit runtime files.
- Update docs/state only.

If a concrete issue is found:

- Make the smallest safe runtime change.
- Keep the change tied to the smoke finding.
- Avoid refactors and redesigns.
- Do not touch protected areas.

Allowed runtime files, only if needed:

- `App.tsx`
- `components/Dashboard.tsx`
- `components/VoiceDashboard.tsx`
- `components/TasksView.tsx`
- `components/NotificationsView.tsx`
- `components/Navigation.tsx`
- `components/CalendarView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`
- `types.ts`
- `src/lib/reminderNotifications.js`

## Step 5 — Update Documentation

Update:

- `planning/STATE.md`
- `docs/VALIDATION.md`

Record:

- Commands run.
- Manual smoke checks.
- Any runtime changes.
- Known warnings.
- CEO Briefing untouched.
- Fixture evidence remains absent.

Update risk/question/decision docs only if a new item is discovered.

## Step 6 — Final Validation

Run:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

## Step 7 — Report

Report:

1. Files inspected.
2. Files changed, if any.
3. Validation commands and results.
4. Manual/browser smoke checks and results.
5. Whether acceptance criteria are complete.
6. Any risks, questions, or decisions needing docs updates.
7. Final git status.

Do not stage, commit, or push.
```

---

# File: `planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/acceptance.md`

```markdown
# Sprint 038 Acceptance — Core App Smoke Test and Forward Runtime Polish

## Acceptance Criteria

Sprint 038 is complete only when all criteria below are met.

## Core App Smoke

- [ ] Dashboard/Home is reachable.
- [ ] Assistant / Voice Entry is reachable from Dashboard.
- [ ] Assistant typed task capture creates a visible task.
- [ ] Tasks view renders the created task.
- [ ] Notifications is reachable.
- [ ] Notifications fallback/empty state is readable without fixture.
- [ ] Reminder-backed notification is visible with `?trinaReminderFixture=1`.
- [ ] Direct Notifications start works with `?trinaReminderFixture=1&trinaStart=notifications`.
- [ ] Dashboard badge count aligns with Notifications list.
- [ ] Bottom nav active state works.
- [ ] Calendar is reachable.
- [ ] Finance is reachable.
- [ ] Knowledge Base is reachable.
- [ ] Mobile viewport around `390x844` has no fixed bottom-nav overlap.

## Scope Guardrails

- [ ] CEO Briefing files were not touched.
- [ ] `references/flutterflow/sprint-009/ceo-briefing.png` was not created.
- [ ] No backend files were changed.
- [ ] No Firebase files were changed.
- [ ] No package/dependency files were changed.
- [ ] No native/build/release/deployment files were changed.

## Runtime Change Control

- [ ] No runtime files were changed unless a concrete smoke-test issue required it.
- [ ] Any runtime change maps to a documented smoke-test finding.
- [ ] No broad refactor was performed.
- [ ] No app redesign was performed.
- [ ] No new feature was introduced.

## Validation Commands

The following commands pass or produce only documented known warnings:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

## Documentation

- [ ] `planning/STATE.md` updated with Sprint 038 status.
- [ ] `docs/VALIDATION.md` updated with Sprint 038 validation results.
- [ ] New risks, questions, or decisions were documented if discovered.
- [ ] If no new risks, questions, or decisions were discovered, the completion report says so clearly.

## Completion Rule

Do not mark Sprint 038 complete unless all acceptance criteria are satisfied.
```

---

# File: `planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/handoff-prompt.md`

```markdown
# Sprint 038 Handoff Prompt — Core App Smoke Test and Forward Runtime Polish

Use this prompt with Codex after the Architect Pack has been applied.

```text
Read the Sprint 038 planning files before making any changes.

Files to read:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/requirements.md
- planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/blueprint.md
- planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/acceptance.md
- planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/handoff-prompt.md

Then summarize:

1. What Sprint 038 is supposed to accomplish.
2. Which files you expect to inspect.
3. Which files you expect to modify, if any.
4. What validation steps you will run.
5. Any blockers or ambiguities.

Do not implement yet.
Do not stage, commit, or push.
Do not touch CEO Briefing files.
Do not create references/flutterflow/sprint-009/ceo-briefing.png.
Do not touch backend, Firebase, package, native, build, release, or deployment files.

Wait for approval after your summary.
```
```

---

## 7. Suggested `planning/STATE.md` Update

Codex should update the current-state section to reflect Sprint 038.

Use project style already present in `planning/STATE.md`.

Suggested content to merge, not blindly append:

```markdown
## Current Status

Sprint 037 fixture guard and core regression validation is closed and pushed to `main`.

Sprint 038 is the active sprint. It will run a broad core app smoke test and perform only small forward runtime polish if a concrete issue is found.

CEO Briefing remains deferred and out of scope.

## Active Sprint

`planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/`

## Recently Completed

- Sprint 037 validated the local reminder notification fixture and core regression paths.
- Sprint 037 closed with no runtime changes.
- CEO Briefing files stayed untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remained absent.

## Next Actions

- Apply Sprint 038 planning files.
- Have Codex read the Sprint 038 files and summarize the plan before implementation.
- Run the Sprint 038 smoke pass.
- Apply only narrow runtime polish if a concrete smoke issue is found.

## Blockers

- None known.
```

---

## 8. Suggested `docs/VALIDATION.md` Update

Codex should add a Sprint 038 section.

Suggested content:

```markdown
## Sprint 038 — Core App Smoke Test and Forward Runtime Polish

### Purpose

Sprint 038 validates the current core app after Sprint 037 fixture regression validation.

The sprint confirms core flows still work and allows only narrow runtime polish tied to concrete smoke-test findings.

### Required Commands

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

### Manual Smoke Checks

- Dashboard/Home reachable.
- Assistant / Voice Entry reachable from Dashboard.
- Assistant typed task capture creates a visible task.
- Tasks view renders created task.
- Notifications reachable.
- Notifications fallback/empty state readable without fixture.
- Reminder-backed notification visible with `?trinaReminderFixture=1`.
- Direct Notifications start works with `?trinaReminderFixture=1&trinaStart=notifications`.
- Dashboard badge count aligns with Notifications list.
- Bottom nav active state works.
- Calendar reachable.
- Finance reachable.
- Knowledge Base reachable.
- Mobile viewport around `390x844` has no fixed bottom-nav overlap.

### Scope Guard

Sprint 038 must not touch CEO Briefing files and must not create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Sprint 038 must not touch backend, Firebase, package, native, build, release, or deployment files.
```

---

## 9. Codex Apply-Pack Prompt

Use this prompt first to apply the Architect Pack as planning/docs only.

```text
Apply the Sprint 038 Architect Pack as planning/docs only.

Create:

- planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/requirements.md
- planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/blueprint.md
- planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/acceptance.md
- planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/handoff-prompt.md

Update:

- planning/STATE.md
- docs/VALIDATION.md

Update only if needed:

- planning/RISKS.md
- planning/QUESTIONS.md
- planning/DECISIONS.md
- docs/ARCHITECTURE.md
- docs/API.md

Rules:

- Planning/docs only.
- Do not edit runtime files.
- Do not stage, commit, or push.
- Do not touch CEO Briefing files.
- Do not create references/flutterflow/sprint-009/ceo-briefing.png.
- Do not touch backend, Firebase, package, native, build, release, or deployment files.
- Preserve existing project style and update current-state docs cleanly.
- Do not overwrite unrelated historical content.

After applying, run:

git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short

Then report:

1. Files created.
2. Files updated.
3. Validation results.
4. Final git status.
5. Confirmation that no runtime/protected files were touched.
```

---

## 10. Post-Apply Next Step

After Codex applies this pack, the next prompt should be the Sprint 038 start prompt from:

```text
planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/handoff-prompt.md
```

Codex must read the sprint files and summarize the plan before implementation.

Do not give an implementation prompt until Codex has produced that summary.
