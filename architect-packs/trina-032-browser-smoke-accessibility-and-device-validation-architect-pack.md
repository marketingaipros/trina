# Trina Sprint 032 Architect Pack

**Sprint:** `032-browser-smoke-accessibility-and-device-validation`  
**Project:** Trina / trinaos-voice  
**Date:** 2026-05-31  
**Architect Layer:** ChatGPT  
**Builder Layer:** Codex  
**Commit baseline:** Sprint 031 committed and pushed at `709b07892eeeaf0e04f01cd1c48b0aaea315bed8`  
**Operating rule:** The handoff is a folder, not a conversation.

---

## 1. Architect Summary

Sprint 032 is a browser/device validation sprint.

Sprint 031 hardened accessible labels and titles across the core Trina app shell. Sprint 032 should now validate the app in a real browser/device pass instead of making speculative code changes.

The goal is to confirm that Trina feels like a finished app across the currently active core areas:

- Dashboard / Home
- Assistant / Voice Entry
- Tasks
- Notifications
- Calendar
- Finance
- Knowledge Base

This sprint should focus on smoke validation, accessibility sanity checks, touch/mobile usability, and microphone capture validation where permission is available.

This is not a feature-build sprint.

This is not a redesign sprint.

This is not a CEO Briefing sprint.

---

## 2. Files This Architect Pack Should Create or Update

Codex should apply this Architect Pack to the project folder by creating or updating the following files.

### Update

```text
planning/STATE.md
planning/RISKS.md
planning/QUESTIONS.md
docs/VALIDATION.md
```

### Create

```text
planning/sprints/032-browser-smoke-accessibility-and-device-validation/requirements.md
planning/sprints/032-browser-smoke-accessibility-and-device-validation/blueprint.md
planning/sprints/032-browser-smoke-accessibility-and-device-validation/acceptance.md
planning/sprints/032-browser-smoke-accessibility-and-device-validation/handoff-prompt.md
```

### Do not update unless Codex finds a direct documentation mismatch

```text
docs/ARCHITECTURE.md
docs/API.md
planning/DECISIONS.md
```

No architecture, API contract, or durable product decision is expected for Sprint 032.

---

## 3. Protected Scope

Codex must not touch or create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Codex must not work on:

- CEO Briefing
- FlutterFlow export
- Firebase
- Hermes
- backend services
- auth
- database
- live AI
- package/dependency changes
- native builds
- release/deployment files
- build pipeline changes
- broad redesign
- new app architecture
- new storage system
- CRM, invoicing, or SaaS assumptions

CEO Briefing remains deferred and out of scope.

---

# File: `planning/STATE.md`

```markdown
# Project State

## Current Sprint

Sprint 032 — Browser Smoke, Accessibility, and Device Validation

## Current Status

Sprint 031 was completed, committed, and pushed.

Sprint 031 added narrow accessibility polish across the existing core app shell:

- `components/VoiceDashboard.tsx`
- `components/TasksView.tsx`
- `components/NotificationsView.tsx`
- `components/CalendarView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`

Sprint 032 is a validation sprint.

The goal is to inspect the existing app in a real browser/device workflow, confirm the Sprint 031 accessibility improvements in practical use, verify core navigation and task capture flows, and identify only confirmed follow-up issues.

## Recently Completed

- Sprint 031 planning/docs checkpoint committed.
- Sprint 031 runtime accessibility polish committed.
- Core app accessibility labels/titles were improved without changing routing, task capture, speech capture, storage, backend, package files, or CEO Briefing.
- CEO Briefing remains untouched and deferred.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

## Active Sprint Folder

`planning/sprints/032-browser-smoke-accessibility-and-device-validation/`

## Next Action

Codex should apply the Sprint 032 Architect Pack by creating the Sprint 032 planning files and updating validation/state/risk/question notes.

After the pack is applied, Codex must read the Sprint 032 files and summarize the validation plan before performing the browser/device validation pass.

## Blockers

- Live microphone validation depends on browser/device microphone permission.
- Touch usability validation depends on access to a touch-capable browser or responsive mobile emulation.
- Browser-based accessibility inspection may be limited by available tooling in the local environment.

## Protected Scope

- Do not work on CEO Briefing.
- Do not create `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not modify FlutterFlow export, Firebase, Hermes, backend, auth, database, live AI, package/dependency, native, build, release, or deployment files.
```

---

# File: `planning/RISKS.md`

```markdown
# Risks

## Sprint 032 Risks

| Risk | Impact | Mitigation | Status |
|---|---|---|---|
| Browser smoke testing may reveal small UI/touch issues that tempt broader redesign. | Sprint scope could expand beyond validation. | Record confirmed issues for follow-up unless the Sprint 032 acceptance criteria explicitly approve a tiny fix. | Active |
| Microphone validation may be blocked by browser permission, device limitations, or unavailable speech APIs. | Speech capture cannot be live-confirmed. | Document the blocker and preserve speech behavior by code inspection instead. | Active |
| Hover-only controls may be harder to use on touch devices. | Mobile/touch users may miss edit/delete actions. | Validate in touch-capable browser or responsive emulation and record confirmed issues for Sprint 033 if needed. | Active |
| Accessibility labels may exist in code but still be awkward in real browser use. | Screen reader or keyboard users may still face friction. | Perform practical inspection of buttons, names, labels, and focus flow where possible. | Active |
| CEO Briefing could re-enter scope by accident due to old planning history. | Work may regress into previously deferred area. | Keep CEO Briefing explicitly protected and absent. | Active |
```

---

# File: `planning/QUESTIONS.md`

```markdown
# Questions

## Sprint 032 Open Questions

| Question | Owner | Status | Notes |
|---|---|---|---|
| Can microphone capture be live-tested in the available browser/device environment? | Builder / Operator | Open | If permission is unavailable, Codex should document the blocker and use code inspection only. |
| Are hover-only edit/delete controls usable on touch/mobile after Sprint 031? | Builder | Open | Validate with a touch-capable browser or responsive emulation if available. |
| Are any remaining accessibility issues confirmed strongly enough to become Sprint 033 scope? | Architect / Builder | Open | Do not expand Sprint 032 into broad runtime fixes. Record follow-up candidates. |
```

---

# File: `docs/VALIDATION.md`

```markdown
# Validation

## Sprint 032 — Browser Smoke, Accessibility, and Device Validation

Sprint 032 validates the current Trina app shell after Sprint 031 accessibility polish.

This is a validation sprint, not a broad implementation sprint.

### Required Automated Checks

Run:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
git diff --name-only
git diff --cached --name-only
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Expected result:

- lint passes
- build passes or only known existing Vite warnings remain
- diff check passes
- staged files are empty unless explicitly approved later
- CEO Briefing screenshot file remains absent

### Browser Smoke Checks

Validate in the available browser environment:

1. Dashboard / Home loads.
2. Bottom navigation reaches all active app areas.
3. Assistant / Voice Entry is reachable from Dashboard/Home.
4. Tasks is reachable from navigation.
5. Notifications is reachable from navigation.
6. Calendar is reachable from navigation.
7. Finance is reachable from navigation.
8. Knowledge Base is reachable from navigation.
9. Home/back controls return to expected locations.
10. No blank screen or broken route appears during core navigation.

### Task Flow Checks

Validate:

1. Typed Assistant input can create a visible task.
2. Empty Assistant input does not create a bad task.
3. Created task appears in Tasks.
4. Task complete/incomplete toggle remains usable.
5. Existing task local behavior is preserved.
6. No storage or persistence architecture is changed.

### Speech Capture Checks

Validate live if microphone permission is available:

1. Microphone control is visible and labeled.
2. Starting speech capture does not break Assistant.
3. Stopping speech capture does not break Assistant.
4. Speech capture path appears preserved.

If live microphone testing is blocked:

- Document the browser/device/permission blocker.
- Inspect relevant code path only.
- Do not rewrite speech capture.

### Accessibility / Touch Checks

Validate where practical:

1. Icon-only controls have meaningful accessible names.
2. Buttons with added titles/labels remain visually unchanged.
3. Date buttons describe selected/current/event-count context where applicable.
4. Edit/delete controls remain discoverable enough for browser users.
5. Touch/mobile emulation does not hide critical controls.
6. Focus order does not trap the user in core views.
7. Form open/close/cancel controls are understandable.
8. Audio controls are labeled clearly.

### Protected Scope Validation

Confirm:

```bash
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Also confirm no files were changed in:

- FlutterFlow export
- Firebase
- Hermes
- backend
- auth
- database
- live AI
- package/dependencies
- native/build/release/deployment
- CEO Briefing
```

---

# File: `planning/sprints/032-browser-smoke-accessibility-and-device-validation/requirements.md`

```markdown
# Sprint 032 Requirements

## Sprint Name

`032-browser-smoke-accessibility-and-device-validation`

## Goal

Validate the polished Trina app in a real browser/device workflow, confirm core navigation and task flows, verify touch/accessibility usability, and test microphone capture where browser permission is available.

## Background

Sprint 031 added narrow runtime accessibility polish to the existing core app shell.

Sprint 032 should verify that the app behaves correctly in practical use.

This sprint should not start with code changes.

Codex should inspect, run the app if possible, perform browser/device smoke checks, record results, and only propose follow-up fixes if issues are confirmed.

## In Scope

- Browser smoke test Dashboard/Home.
- Browser smoke test bottom navigation.
- Confirm Assistant / Voice Entry reachability.
- Confirm typed Assistant capture creates a visible task.
- Confirm empty Assistant input remains safely handled.
- Confirm Tasks view usability.
- Confirm Notifications view usability.
- Confirm Calendar view usability.
- Confirm Finance view usability.
- Confirm Knowledge Base view usability.
- Confirm Home/back controls work.
- Confirm Sprint 031 accessible labels/titles are present in practical browser use.
- Confirm touch/mobile usability of edit/delete/form/audio controls where possible.
- Test speech capture live if microphone permission is available.
- Use code inspection for speech capture only if live microphone testing is blocked.
- Record confirmed follow-up issues for Sprint 033.
- Update `docs/VALIDATION.md`, `planning/STATE.md`, `planning/RISKS.md`, and `planning/QUESTIONS.md` as needed.

## Out of Scope

- CEO Briefing.
- Creating `references/flutterflow/sprint-009/ceo-briefing.png`.
- Broad app redesign.
- New navigation architecture.
- New storage/persistence architecture.
- New dependencies.
- Package changes.
- Firebase.
- Hermes.
- Backend work.
- Auth or database changes.
- Live AI integration.
- FlutterFlow export.
- Native/build/release/deployment work.
- CRM, invoicing, SaaS, or multi-user permissions.

## Required Builder Behavior

Codex must:

1. Read sprint files before validation.
2. Summarize the validation plan before running the browser/device pass.
3. Avoid implementation unless the operator explicitly approves a follow-up fix.
4. Keep CEO Briefing protected.
5. Keep the sprint focused on validation and issue discovery.
6. Report complete, incomplete, and blocked validation items honestly.

## Expected Outcome

At the end of Sprint 032, the project should have:

- A clear validation report.
- Confirmation that core app navigation and task flow are stable.
- Confirmation whether speech capture was live-tested or blocked.
- Confirmation whether touch/mobile usability has issues.
- A precise Sprint 033 candidate list if issues remain.
- No unapproved runtime changes.
```

---

# File: `planning/sprints/032-browser-smoke-accessibility-and-device-validation/blueprint.md`

```markdown
# Sprint 032 Blueprint

## Implementation Model

Sprint 032 is validation-first.

Codex should not start by editing runtime files.

Codex should:

1. Read the project and sprint files.
2. Summarize its planned validation approach.
3. Run automated checks.
4. Start the app locally if possible.
5. Perform browser smoke checks.
6. Perform task-flow checks.
7. Perform accessibility/touch checks.
8. Perform microphone validation if possible.
9. Report results and follow-up recommendations.
10. Avoid code changes unless explicitly approved after reporting.

## Files to Read First

```text
AGENTS.md
planning/STATE.md
planning/DECISIONS.md
planning/DOMAIN.md
planning/RISKS.md
planning/QUESTIONS.md
docs/VALIDATION.md
planning/sprints/032-browser-smoke-accessibility-and-device-validation/requirements.md
planning/sprints/032-browser-smoke-accessibility-and-device-validation/blueprint.md
planning/sprints/032-browser-smoke-accessibility-and-device-validation/acceptance.md
```

## Files to Inspect

```text
App.tsx
components/Navigation.tsx
components/Dashboard.tsx
components/VoiceDashboard.tsx
components/TasksView.tsx
components/NotificationsView.tsx
components/CalendarView.tsx
components/FinanceView.tsx
components/KnowledgeBaseView.tsx
```

## Automated Validation Steps

Run:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
git diff --name-only
git diff --cached --name-only
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

## Local Browser Pass

If possible, run the local Vite app:

```bash
npm run dev
```

Then inspect the app in a browser.

If Codex cannot operate a browser directly, it should report that limitation and complete the checks possible through code inspection and available tooling.

## Manual Smoke Checklist

Validate:

- Dashboard/Home loads.
- Navigation reaches all active views.
- Assistant is reachable.
- Tasks is reachable.
- Notifications is reachable.
- Calendar is reachable.
- Finance is reachable.
- Knowledge Base is reachable.
- Home/back buttons behave as expected.
- No core view opens to a blank screen.

## Task Flow Checklist

Validate:

- Typed Assistant input creates a visible task.
- Empty Assistant input does not create bad data.
- Created task appears in Tasks.
- Task done/to-do toggle works.
- Task delete/edit controls remain understandable and usable.
- No task-flow rewrite is introduced.

## Speech Capture Checklist

If microphone permission is available:

- Start speech capture.
- Stop speech capture.
- Confirm UI remains stable.
- Confirm no regression in Assistant capture path.

If microphone permission is blocked:

- Record the blocker.
- Inspect code only.
- Do not rewrite speech capture.

## Accessibility / Touch Checklist

Validate practical accessibility improvements from Sprint 031:

- Icon-only controls have meaningful names.
- Form open/close/cancel controls are labeled.
- Audio controls are labeled.
- Date buttons include useful state/context.
- Edit/delete controls are understandable.
- Touch/mobile emulation does not hide critical actions.
- Focus movement remains usable across core views.

## Change Policy

No runtime edits are expected.

If Codex finds a tiny confirmed issue, it must stop and report:

1. The issue.
2. The file involved.
3. The smallest safe fix.
4. Why it belongs in Sprint 032 instead of Sprint 033.

The operator must approve before Codex edits.

## Expected Report

Codex should report:

1. Automated validation results.
2. Browser smoke results by view.
3. Task-flow results.
4. Speech capture result or blocker.
5. Accessibility/touch results.
6. Files changed, if any.
7. Confirmed no protected-scope changes.
8. Sprint 033 recommendations.
```

---

# File: `planning/sprints/032-browser-smoke-accessibility-and-device-validation/acceptance.md`

```markdown
# Sprint 032 Acceptance Criteria

## Required Completion Criteria

Sprint 032 is complete only if all applicable criteria below are satisfied or honestly marked blocked with a reason.

### Automated Validation

- `npm run lint` passes.
- `npm run build` passes or only known existing Vite warnings remain.
- `git diff --check` passes.
- `git status --branch --short` is reported.
- `git diff --name-only` is reported.
- `git diff --cached --name-only` is reported.
- `test ! -f references/flutterflow/sprint-009/ceo-briefing.png` passes.

### Core Browser Smoke

- Dashboard/Home was checked.
- Bottom navigation was checked.
- Assistant / Voice Entry reachability was checked.
- Tasks reachability was checked.
- Notifications reachability was checked.
- Calendar reachability was checked.
- Finance reachability was checked.
- Knowledge Base reachability was checked.
- No blank core screen or broken core route was found, or any issue was documented.

### Task Flow

- Typed Assistant capture to Tasks was tested or inspected.
- Empty Assistant input behavior was tested or inspected.
- Created task visibility in Tasks was tested or inspected.
- Task toggle usability was tested or inspected.
- No task capture logic was rewritten without approval.

### Speech Capture

- Speech capture was live-tested if microphone permission was available.
- If live testing was blocked, the blocker was documented clearly.
- Speech capture code path was preserved.
- No speech capture rewrite occurred without approval.

### Accessibility / Touch

- Sprint 031 accessible labels/titles were checked in practical use or code inspection.
- Icon-only controls were reviewed.
- Calendar date button labeling was reviewed.
- Audio controls were reviewed.
- Form open/close/cancel controls were reviewed.
- Touch/mobile usability was checked if possible.
- Any confirmed usability gaps were listed as Sprint 033 candidates unless explicitly approved for Sprint 032 fixes.

### Protected Scope

- CEO Briefing was not touched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- No FlutterFlow export files were changed.
- No Firebase files were changed.
- No Hermes files were changed.
- No backend/auth/database/live AI files were changed.
- No package/dependency files were changed.
- No native/build/release/deployment files were changed.

## Commit Criteria

Sprint 032 may be committed only after operator approval.

If Sprint 032 is validation-only and produces only planning/documentation updates, stage only approved docs/planning files.

If runtime fixes are approved later, stage only the approved runtime files.

Do not stage `.DS_Store`.

Do not stage unrelated files.

Do not commit or push without explicit approval.
```

---

# File: `planning/sprints/032-browser-smoke-accessibility-and-device-validation/handoff-prompt.md`

```markdown
# Sprint 032 Handoff Prompt

Use this prompt with Codex after the Sprint 032 Architect Pack has been applied to the project folder.

```text
Read these files before making changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/032-browser-smoke-accessibility-and-device-validation/requirements.md
- planning/sprints/032-browser-smoke-accessibility-and-device-validation/blueprint.md
- planning/sprints/032-browser-smoke-accessibility-and-device-validation/acceptance.md
- planning/sprints/032-browser-smoke-accessibility-and-device-validation/handoff-prompt.md

Then summarize:

1. What Sprint 032 is supposed to accomplish.
2. Which files you expect to inspect.
3. Which files you expect to modify, if any.
4. What automated validation steps you will run.
5. What browser/device smoke checks you will perform.
6. What microphone, accessibility, and touch checks may be blocked.
7. Any protected areas you must avoid.

Rules:

- Do not start validation until I approve your summary.
- Do not edit runtime files unless I approve a specific fix after your validation report.
- Do not stage, commit, or push.
- Do not touch CEO Briefing.
- Do not create references/flutterflow/sprint-009/ceo-briefing.png.
- Do not modify FlutterFlow export, Firebase, Hermes, backend, auth, database, live AI, package/dependency, native, build, release, or deployment files.
- Keep this sprint validation-first.

Stop after the summary and wait for approval.
```
```

---

## 4. Codex Apply-Pack Prompt

Use this first to apply the Architect Pack to the project folder.

```text
Apply the Sprint 032 Architect Pack to the project folder.

Create or update only these files unless you find a direct mismatch that must be reported first:

- planning/STATE.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/032-browser-smoke-accessibility-and-device-validation/requirements.md
- planning/sprints/032-browser-smoke-accessibility-and-device-validation/blueprint.md
- planning/sprints/032-browser-smoke-accessibility-and-device-validation/acceptance.md
- planning/sprints/032-browser-smoke-accessibility-and-device-validation/handoff-prompt.md

Do not modify runtime app files.

Do not stage, commit, or push.

Do not touch CEO Briefing.

Do not create references/flutterflow/sprint-009/ceo-briefing.png.

After applying the pack, run:

git diff --check
git status --branch --short
git diff --name-only
test ! -f references/flutterflow/sprint-009/ceo-briefing.png

Then report:

1. Files created.
2. Files updated.
3. Validation results.
4. Final git status.
5. Confirmation that CEO Briefing stayed untouched and ceo-briefing.png remains absent.
```

---

## 5. Next Step After Pack Apply

After Codex applies this pack, do not let it start validation immediately.

Next prompt should be the Sprint 032 handoff prompt from:

```text
planning/sprints/032-browser-smoke-accessibility-and-device-validation/handoff-prompt.md
```

Codex must summarize the validation plan and wait for approval before performing the browser/device validation pass.
