# Trina Sprint 034 Architect Pack

**Sprint:** 034-task-flow-regression-hardening
**Project:** Trina
**Created:** 2026-05-31
**Architect Layer:** ChatGPT
**Builder Layer:** Codex
**Status:** Architect Pack ready for Codex application

---

## Purpose

Sprint 034 is a runtime hardening sprint focused on protecting the task workflow after Sprint 033 added accessible edit/delete controls.

The goal is to confirm the task flow is stable across creation, display, filtering, completion toggle, editing, deleting, navigation, and mobile/touch layout before moving into larger app features.

This sprint should not introduce a new product module.

This sprint should not revisit CEO Briefing.

This sprint should reduce regression risk and make the existing app feel more dependable.

---

## Operating Rule

The handoff is a folder, not a conversation.

Codex must apply this Architect Pack to the project folder first by creating/updating the planning and documentation files listed below.

Codex must not implement runtime code until after the Sprint 034 planning files exist and the user approves the separate sprint-start summary.

---

# Files To Create Or Update

## Create

```text
planning/sprints/034-task-flow-regression-hardening/requirements.md
planning/sprints/034-task-flow-regression-hardening/blueprint.md
planning/sprints/034-task-flow-regression-hardening/acceptance.md
planning/sprints/034-task-flow-regression-hardening/handoff-prompt.md
```

## Update

```text
planning/STATE.md
planning/RISKS.md
planning/QUESTIONS.md
docs/VALIDATION.md
```

## Update only if needed

```text
docs/API.md
docs/ARCHITECTURE.md
planning/DECISIONS.md
```

Do not update `docs/API.md` unless this sprint changes a documented interface, prop contract, storage contract, or command.

Do not update `docs/ARCHITECTURE.md` unless this sprint changes the app structure, state ownership, persistence model, routing, or module boundaries.

Do not update `planning/DECISIONS.md` unless a durable decision is made during planning or implementation.

---

# Protected Scope

Codex must not touch:

```text
references/flutterflow/sprint-009/ceo-briefing.png
references/flutterflow/sprint-009/
```

Codex must not create, restore, stage, commit, or modify CEO Briefing evidence or CEO Briefing page work.

Codex must not modify:

```text
package.json
package-lock.json
firebase files
backend files
Hermes files
native mobile build files
deployment files
release files
```

unless the user explicitly approves it in writing.

---

# planning/STATE.md Update

Add or update the current sprint section with:

```markdown
# Project State

## Current Sprint

Sprint 034 — Task Flow Regression Hardening

## Current Status

Sprint 033 was completed, committed, and pushed. It added accessible edit/delete controls for task rows/cards and preserved CEO Briefing deferral.

Sprint 034 is a runtime hardening sprint for the task workflow. The sprint should verify and improve task flow stability across add, display, filter, toggle, edit, delete, navigation, and responsive/mobile behavior.

## Recently Completed

- Sprint 033 added explicit visible task Edit/Delete controls.
- Sprint 033 connected task delete handling through existing app/storage state.
- Sprint 033 browser validation passed after a bottom padding fix prevented fixed navigation from overlapping bottom-row task controls.
- CEO Briefing remained untouched and `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

## Next Actions

- Create Sprint 034 planning files.
- Have Codex read the Sprint 034 files and summarize scope before implementation.
- Inspect the existing task flow for regressions and small UX/accessibility gaps.
- Implement only narrow fixes required to satisfy Sprint 034 acceptance.
- Run lint, build, browser validation, and CEO Briefing absence guard before staging.

## Blockers

- None known.
```

---

# planning/RISKS.md Update

Add or update:

```markdown
## Sprint 034 — Task Flow Regression Hardening

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Task flow regressions may be introduced while polishing existing behavior. | Medium | High | Limit runtime edits to narrow task-flow fixes and validate add, toggle, edit, delete, filter, and navigation paths. | Open |
| Fixed bottom navigation may overlap lower task controls on mobile or smaller screens. | Medium | Medium | Revalidate responsive/mobile behavior after Sprint 033 padding fix and avoid layout changes that reduce usable tap area. | Open |
| Edit/delete behavior may affect existing Assistant capture or task persistence. | Medium | High | Preserve existing task state ownership and storage patterns. Validate Assistant typed capture creates visible tasks after edits. | Open |
| Browser validation may miss microphone-specific behavior. | Low | Medium | Treat microphone/live speech as out of scope unless broken by task flow changes. Validate typed Assistant capture as the required path. | Open |
| CEO Briefing work may accidentally re-enter scope. | Low | High | Keep CEO Briefing explicitly protected. Run absence guard before closeout. | Open |
```

---

# planning/QUESTIONS.md Update

Add or update:

```markdown
## Sprint 034 — Task Flow Regression Hardening

| Question | Owner | Status | Answer / Notes |
|---|---|---|---|
| Are there any remaining task-flow regressions after Sprint 033 edit/delete controls? | Builder | Open | Inspect and validate during Sprint 034. |
| Does the bottom navigation still leave enough room for task controls on mobile after Sprint 033 padding fix? | Builder | Open | Validate in browser and mobile emulation. |
| Should Sprint 034 introduce new task features such as due dates, reminders, priorities, or categories? | Architect/User | Answered | No. Sprint 034 is regression hardening only. New task features belong in a later sprint. |
| Should CEO Briefing be touched in Sprint 034? | Architect/User | Answered | No. CEO Briefing remains deferred and protected. |
```

---

# docs/VALIDATION.md Update

Add or update:

```markdown
## Sprint 034 — Task Flow Regression Hardening Validation

Required command validation:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git status --branch --short
```

Required browser validation:

1. Dashboard/Home loads.
2. Bottom navigation reaches core sections.
3. Assistant / Voice Entry remains reachable.
4. Typed Assistant capture creates a visible task.
5. Empty Assistant input remains safe.
6. Task list renders existing tasks.
7. Task completion toggle works.
8. Task filters work after adding, editing, completing, and deleting tasks.
9. Empty states remain accurate for no tasks and filtered-out tasks.
10. Existing Edit control remains visible, keyboard reachable, and accessible.
11. Existing Delete control remains visible, keyboard reachable, and accessible.
12. Edit opens inline editing for the same task.
13. Save updates the same task without creating a duplicate.
14. Cancel leaves the task unchanged.
15. Enter saves where supported.
16. Escape cancels where supported.
17. Delete prompts before removal.
18. Confirmed delete removes the task.
19. Cancelled delete leaves the task unchanged where browser validation allows.
20. Mobile/responsive view keeps task controls visible and touch usable.
21. Bottom-row task controls are not blocked by fixed bottom navigation.
22. CEO Briefing evidence remains absent.
```

---

# planning/sprints/034-task-flow-regression-hardening/requirements.md

```markdown
# Sprint 034 Requirements — Task Flow Regression Hardening

## Goal

Harden the existing Trina task workflow after Sprint 033 added accessible edit/delete controls.

Sprint 034 should verify and fix small task-flow regressions only.

## Background

Sprint 033 closed a known task gap by adding visible accessible Edit/Delete controls to existing task rows/cards. Browser validation also found and fixed an overlap issue where the fixed bottom navigation could block bottom-row controls.

Sprint 034 should now protect the task workflow before larger app work continues.

## In Scope

- Inspect current task flow behavior.
- Preserve task creation.
- Preserve typed Assistant capture.
- Preserve task display.
- Preserve task completion toggle.
- Preserve task filters.
- Preserve task empty states.
- Preserve task edit behavior.
- Preserve task delete behavior.
- Preserve Dashboard/Home navigation.
- Preserve Assistant / Voice Entry navigation.
- Confirm fixed bottom navigation does not block task controls.
- Confirm responsive/mobile task controls remain touch usable.
- Make only narrow fixes required by acceptance criteria.
- Update validation/state/risk/question docs after implementation and validation.

## Out of Scope

- CEO Briefing page.
- CEO Briefing evidence.
- FlutterFlow CEO Briefing screenshot.
- New task features such as due dates, reminders, priorities, recurring tasks, calendar sync, or categories.
- Backend work.
- Firebase work.
- Hermes work.
- Package dependency changes.
- Native mobile build work.
- Deployment or release work.
- Large UI redesign.
- Database or cloud sync.
- Authentication changes.

## Approved Runtime Targets

Likely files:

```text
components/TasksView.tsx
App.tsx
```

Only if required by inspection:

```text
types.ts
components/VoiceDashboard.tsx
components/Navigation.tsx
```

Do not touch other runtime files without reporting why first.

## Non-Functional Requirements

- Keep changes small.
- Preserve existing visual direction.
- Preserve Sprint 031 accessibility polish.
- Preserve Sprint 033 edit/delete accessibility.
- Prefer plain React state and existing storage patterns.
- Do not introduce new dependencies.
- Do not change app architecture unless a clear defect requires it.
```

---

# planning/sprints/034-task-flow-regression-hardening/blueprint.md

```markdown
# Sprint 034 Blueprint — Task Flow Regression Hardening

## Implementation Approach

This is a hardening sprint, not a feature sprint.

Codex should first inspect the existing task flow and identify whether any acceptance criteria fail. If no code-level failures are found, Codex should avoid runtime changes and only update closeout documentation after validation.

If failures are found, Codex should make the smallest safe fix.

## Step 1 — Inspect Existing Runtime Flow

Read:

```text
App.tsx
components/TasksView.tsx
components/VoiceDashboard.tsx
components/Navigation.tsx
types.ts
```

Confirm:

- Where task state is owned.
- How tasks are created.
- How typed Assistant capture creates tasks.
- How tasks are updated.
- How tasks are deleted.
- How task filters are applied.
- Whether bottom navigation is fixed.
- Whether task list padding prevents overlap.
- Whether edit/delete controls remain visible and accessible.

## Step 2 — Identify Only Actual Failures

Do not rewrite the task flow.

Look only for concrete failures against acceptance, such as:

- Task control overlap.
- Edit opening the wrong task.
- Save creating duplicates.
- Cancel saving accidentally.
- Delete not refreshing visible state.
- Filters breaking after edit/delete.
- Empty states becoming inaccurate.
- Keyboard access regression.
- Missing accessible labels.
- Mobile controls being blocked or unusable.

## Step 3 — Apply Minimal Runtime Fixes

Allowed patterns:

- Small layout padding/spacing fixes.
- Small button/accessibility attribute fixes.
- Small state update fixes.
- Small filter refresh fixes.
- Small event handler fixes.

Avoid:

- New components unless required.
- New dependencies.
- New task data model fields.
- Full TasksView rewrite.
- Full App.tsx state rewrite.
- New persistence model.
- New UX features.

## Step 4 — Validate

Run command validation:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git status --branch --short
```

Run browser validation from `docs/VALIDATION.md`.

## Step 5 — Update Docs

Update only as needed:

```text
docs/VALIDATION.md
planning/STATE.md
planning/RISKS.md
planning/QUESTIONS.md
```

Document:

- What was tested.
- What passed.
- Any failures found.
- Any fixes made.
- Any remaining limitations.
- CEO Briefing absence guard result.

## Step 6 — Report

Before staging, report:

1. Files changed.
2. Validation results.
3. Browser validation results.
4. Any risks or limitations.
5. Final git status.
6. Whether Sprint 034 is ready for staging approval.

Do not stage, commit, or push until approved.
```

---

# planning/sprints/034-task-flow-regression-hardening/acceptance.md

```markdown
# Sprint 034 Acceptance Criteria — Task Flow Regression Hardening

Sprint 034 is complete only when all required criteria below are satisfied or explicitly documented as not applicable.

## Runtime Acceptance

- Dashboard/Home loads.
- Bottom navigation reaches core sections.
- Assistant / Voice Entry remains reachable.
- Typed Assistant capture creates a visible task.
- Empty Assistant input remains safe.
- Task list renders existing tasks.
- Task completion toggle works.
- Task filters work before and after task add/edit/delete/toggle.
- Empty states remain accurate for no tasks and filtered-out tasks.
- Edit control remains visible for each task.
- Delete control remains visible for each task.
- Edit/Delete controls exist in the DOM as actionable controls.
- Edit/Delete controls have accessible labels.
- Edit/Delete controls are keyboard reachable where practical.
- Edit opens inline editing for the selected task.
- Save updates the same task without creating a duplicate.
- Cancel leaves the task unchanged.
- Enter saves while editing where supported.
- Escape cancels while editing where supported.
- Delete prompts before removal.
- Confirmed delete removes the selected task from the visible list.
- Cancelled delete leaves the task unchanged where browser validation allows.
- Responsive/mobile view keeps controls visible and touch usable.
- Bottom-row task controls are not blocked by fixed bottom navigation.
- CEO Briefing remains untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

## Scope Acceptance

- No CEO Briefing files are modified.
- No backend files are modified.
- No Firebase files are modified.
- No Hermes files are modified.
- No package/dependency files are modified unless separately approved.
- No native build files are modified.
- No deployment/release files are modified.
- No new task feature is introduced.

## Validation Acceptance

The following commands pass:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git status --branch --short
```

Known existing build warnings may be documented if unrelated to Sprint 034.

## Documentation Acceptance

The following files are updated after validation if needed:

```text
docs/VALIDATION.md
planning/STATE.md
planning/RISKS.md
planning/QUESTIONS.md
```

Docs must reflect actual Sprint 034 results, not only planned checks.

## Staging Readiness

Before staging, Codex must report:

1. Files changed.
2. Runtime behavior confirmed.
3. Browser validation results.
4. Command validation results.
5. CEO Briefing absence check.
6. Final git status.
7. Whether Sprint 034 is ready for staging approval.
```

---

# planning/sprints/034-task-flow-regression-hardening/handoff-prompt.md

```markdown
# Sprint 034 Handoff Prompt — Task Flow Regression Hardening

Read the following files before making changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/034-task-flow-regression-hardening/requirements.md
- planning/sprints/034-task-flow-regression-hardening/blueprint.md
- planning/sprints/034-task-flow-regression-hardening/acceptance.md

Then summarize:

1. What Sprint 034 is supposed to accomplish.
2. The files you expect to inspect.
3. The files you expect to modify, if any.
4. The tests or validation steps you will run.
5. Any blockers or ambiguities.

Do not start implementation until the user approves your summary.

Important rules:

- Do not stage, commit, or push.
- Do not touch CEO Briefing.
- Do not create or restore `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not modify backend, Firebase, Hermes, package, native, build, release, or deployment files.
- Do not add new task features.
- Do not redesign the task module.
- Preserve Sprint 033 edit/delete behavior.
- Preserve task creation.
- Preserve typed Assistant capture.
- Preserve task toggle behavior.
- Preserve filters.
- Preserve empty states.
- Preserve Dashboard/Home.
- Preserve Assistant navigation.
- Preserve Sprint 031 accessibility polish.
- Report your plan first and wait for approval before editing files.
```

---

# Codex Architect Pack Application Prompt

Use this prompt first.

```text
Apply the Sprint 034 Architect Pack as planning/docs only.

Create or update only these files unless the pack explicitly says otherwise:

- planning/STATE.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/034-task-flow-regression-hardening/requirements.md
- planning/sprints/034-task-flow-regression-hardening/blueprint.md
- planning/sprints/034-task-flow-regression-hardening/acceptance.md
- planning/sprints/034-task-flow-regression-hardening/handoff-prompt.md

Do not implement runtime code.
Do not stage, commit, or push.
Do not touch CEO Briefing.
Do not create or restore references/flutterflow/sprint-009/ceo-briefing.png.
Do not modify backend, Firebase, Hermes, package, native, build, release, or deployment files.

After applying the pack, run:

git diff --check
git status --branch --short
git diff --name-only
test ! -f references/flutterflow/sprint-009/ceo-briefing.png

Report:

1. Files created.
2. Files updated.
3. Validation command results.
4. Final git status.
5. Confirmation that no runtime files were modified.
6. Confirmation that CEO Briefing stayed untouched.
```

---

# Next-Step Rule

After Codex applies this Architect Pack, do not approve runtime implementation yet.

The next step is the Sprint 034 sprint-start prompt from:

```text
planning/sprints/034-task-flow-regression-hardening/handoff-prompt.md
```

Codex must first read the Sprint 034 files and summarize:

1. What the sprint is supposed to accomplish.
2. Which files it expects to inspect or modify.
3. What tests or validation steps it will run.
4. Any blockers or ambiguities.

Only after that summary should implementation be approved.
