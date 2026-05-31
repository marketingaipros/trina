# Trina Sprint 027 Architect Pack — Core App Completion Polish and Navigation Hardening

**Project:** Trina  
**Sprint:** 027-core-app-completion-polish-and-navigation-hardening  
**Pack type:** Architect Pack  
**Date:** 2026-05-31  
**Architect Layer:** ChatGPT  
**Builder Layer:** Codex  

---

## 0. Pack Purpose

Sprint 027 continues app-completion work after Sprint 026 stabilized the Assistant capture path.

Sprint 026 made the following core path usable:

```text
Dashboard or Navigation -> Assistant / Voice Entry -> Task or Reminder Capture -> Task/Notification Visibility -> Return Navigation
```

Sprint 027 should now polish and harden the surrounding app shell so the prototype feels more complete without expanding scope.

The goal is not to add new systems.

The goal is to remove obvious dead ends, preserve Sprint 026 behavior, tighten navigation, improve empty states, and document validation for the current local Vite React app.

---

## 1. Non-Negotiable Guardrails

### CEO Briefing remains out of scope

Codex must not:

- build CEO Briefing
- rebuild CEO Briefing
- wire CEO Briefing navigation
- validate CEO Briefing
- capture CEO Briefing screenshots
- create `references/flutterflow/sprint-009/ceo-briefing.png`
- mark CEO Briefing complete
- change deferred CEO Briefing status

CEO Briefing remains deferred, untouched, non-blocking, and out of scope.

### Protected technical scope

Codex must not modify:

- Firebase configuration
- Hermes configuration
- backend code
- package or package-lock files unless explicitly approved in a future sprint
- native mobile files
- release or deploy configuration
- FlutterFlow export/generated code
- screenshot evidence files
- build artifacts

### Sprint 026 behavior must be preserved

Codex must not regress:

- Assistant text capture
- speech transcript capture path where browser support exists
- local task creation through the existing storage path
- redirect/open behavior to Tasks after capture
- empty Assistant input disabling Capture and Send
- Tasks empty-state guidance
- Notifications fallback copy
- return navigation to Home/Dashboard

---

## 2. Files This Architect Pack Should Create or Update

This pack is intended to be saved as:

```text
architect-packs/trina-027-core-app-completion-polish-and-navigation-hardening-architect-pack.md
```

Codex should use this pack to create or update the following planning files:

```text
planning/STATE.md
planning/sprints/027-core-app-completion-polish-and-navigation-hardening/requirements.md
planning/sprints/027-core-app-completion-polish-and-navigation-hardening/blueprint.md
planning/sprints/027-core-app-completion-polish-and-navigation-hardening/acceptance.md
planning/sprints/027-core-app-completion-polish-and-navigation-hardening/handoff-prompt.md
```

Codex should update these only if implementation later changes them:

```text
docs/VALIDATION.md
docs/ARCHITECTURE.md
docs/API.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
```

Expected for apply-pack phase:

- `planning/STATE.md` should move active state to Sprint 027.
- Sprint 027 folder files should be created.
- `docs/VALIDATION.md` may be updated during apply-pack if it needs the Sprint 027 validation checklist.
- `docs/ARCHITECTURE.md` and `docs/API.md` should not be touched during apply-pack unless the existing docs are inaccurate for current app navigation or interfaces.
- `planning/DECISIONS.md`, `planning/RISKS.md`, and `planning/QUESTIONS.md` should only change if this sprint introduces a durable decision, durable risk, or open question.

---

## 3. Architect-Facing Requirements

### Sprint goal

Finish tightening the current app prototype around the already-working core path without touching CEO Briefing, backend, Firebase, FlutterFlow export, release, or screenshot evidence.

### Product intent

Trina should feel like a usable assistant prototype, not a collection of disconnected screens.

The user should be able to:

1. Start from the Dashboard or main navigation.
2. Move into Assistant or task/reminder-related surfaces.
3. Capture a task/reminder through the Sprint 026 path.
4. See that task/reminder in the right place.
5. Visit the major app surfaces without hitting obvious dead ends.
6. Return to the Dashboard/Home reliably.

### In scope

- Review the main app navigation paths for broken, confusing, or dead-end behavior.
- Preserve and lightly polish the Assistant -> Tasks capture flow from Sprint 026.
- Improve empty states across primary local prototype surfaces if they currently feel incomplete.
- Harden return navigation and selected active-state behavior.
- Improve user-facing fallback copy where a browser capability is unavailable, denied, or unsupported.
- Keep local-only behavior clear and safe.
- Update validation documentation after implementation.
- Update `planning/STATE.md` after implementation.

### Out of scope

- CEO Briefing work.
- Screenshot evidence.
- FlutterFlow Designer work.
- FlutterFlow export work.
- Backend scheduling.
- Firebase schema, rules, auth, or deployment work.
- Hermes work.
- Native mobile work.
- Release work.
- Package additions.
- Broad app redesign.
- New dashboard concept.
- New AI integration.
- Live voice assistant integration.
- New CRM, calendar, email, or external service integration.
- Full test infrastructure overhaul.

### Working assumptions

- The current Vite React app is the source of truth.
- Local browser/app state is acceptable for Sprint 027.
- Sprint 027 should improve the existing prototype, not convert it into a production app.
- Existing Vite build warnings may remain if unrelated to Sprint 027.
- Speech recognition and browser notification behavior are browser-dependent and should be handled through clear fallback copy.

---

## 4. Builder-Facing Implementation Plan

### Implementation posture

This sprint should be an inspection-first, narrow polish sprint.

Codex must first read the sprint files and summarize the plan before implementation.

Codex should not start implementation until the operator approves the summary.

### Primary files to inspect

```text
App.tsx
components/Navigation.tsx
components/Dashboard.tsx
components/VoiceDashboard.tsx
components/TasksView.tsx
components/NotificationsView.tsx
src/lib/reminderNotifications.js
planning/STATE.md
docs/VALIDATION.md
```

### Secondary files to inspect only if needed

```text
components/*View.tsx
components/*Dashboard*.tsx
components/*Task*.tsx
components/*Reminder*.tsx
services/barbieService.ts
package.json
```

### Likely files to modify

```text
App.tsx
components/Navigation.tsx
components/Dashboard.tsx
components/VoiceDashboard.tsx
components/TasksView.tsx
components/NotificationsView.tsx
planning/STATE.md
docs/VALIDATION.md
```

Codex may modify fewer files if inspection shows fewer changes are needed.

Codex must stop and ask before modifying files outside the expected runtime/doc list.

### Step-by-step plan

1. Inspect Sprint 026 state and current app flow.
   - Confirm the existing Assistant capture path remains intact.
   - Identify primary navigation surfaces.
   - Identify any buttons/cards that appear interactive but do nothing useful.

2. Map the main prototype navigation path.
   - Dashboard/Home.
   - Assistant/Voice Entry.
   - Tasks.
   - Notifications/Alerts.
   - Any other current primary nav items.

3. Harden navigation.
   - Ensure primary nav buttons route to valid surfaces.
   - Ensure return-to-Home behavior is clear and reliable.
   - Ensure selected/active visual state is not misleading.
   - Avoid wiring CEO Briefing.

4. Tighten empty states.
   - Make empty surfaces explain what the user can do next.
   - Prefer small copy updates over new screens.
   - Keep empty states tied to existing local functionality.

5. Preserve Sprint 026 capture behavior.
   - Do not remove Capture.
   - Do not change the local task creation contract unless necessary.
   - If small copy/layout adjustments are made, preserve task creation and redirect behavior.

6. Harden fallback states.
   - Browser notifications denied/unsupported should remain non-blocking.
   - Speech recognition unsupported/denied should not break typed capture.
   - Empty input should remain safe.

7. Update docs/state after implementation.
   - Update `planning/STATE.md` with Sprint 027 implementation status.
   - Update `docs/VALIDATION.md` with validation steps and any manual smoke coverage.
   - Only update architecture/API docs if actual navigation contracts, data shape, or helper contracts changed.

8. Validate.
   - Run safe git checks.
   - Run lint/build.
   - Manually smoke test the core app path.
   - Confirm CEO Briefing evidence remains absent.

---

## 5. Acceptance Criteria

Sprint 027 is complete when all of the following are true:

### Navigation and flow

- Dashboard/Home remains reachable.
- Assistant/Voice Entry remains reachable.
- Tasks remains reachable.
- Notifications/Alerts remains reachable.
- Return navigation from primary surfaces works.
- Main navigation does not create obvious dead ends for the current prototype scope.
- Any unavailable or deferred feature is represented as deferred, unavailable, or not wired, not as silently broken.
- CEO Briefing is not wired, built, validated, or marked complete.

### Sprint 026 preservation

- Assistant typed Capture still creates or simulates a local task/reminder.
- Speech transcript capture still uses the same local capture path when browser support allows.
- Captured item still becomes visible in Tasks or the relevant local task surface.
- Empty Assistant input keeps unsafe actions disabled.
- Notification denied/unsupported behavior remains non-blocking.

### Empty states and fallback copy

- Tasks empty state gives a clear next action.
- Notifications/Alerts fallback state gives clear browser support or permission guidance.
- Empty or unavailable local prototype surfaces do not imply live backend functionality exists.

### Scope control

- No Firebase, Hermes, backend, native, release, deploy, package, FlutterFlow export, or screenshot evidence files are modified.
- No `references/flutterflow/sprint-009/ceo-briefing.png` file is created.
- No screenshot evidence is created or modified.
- No package installation is introduced.
- No broad redesign is introduced.

### Documentation and state

- `planning/STATE.md` reflects Sprint 027 status.
- `docs/VALIDATION.md` includes Sprint 027 validation expectations and results after implementation.
- `docs/ARCHITECTURE.md` is updated only if actual app structure or navigation architecture changed.
- `docs/API.md` is updated only if a helper/data contract changed.

### Validation

The following must pass or be clearly explained:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
```

Manual smoke validation must cover:

- Dashboard/Home load.
- Assistant/Voice Entry route.
- Typed Capture.
- Speech-recognition supported or fallback path.
- Task visibility after capture.
- Tasks empty state.
- Notifications/Alerts fallback state.
- Return navigation.
- Protected CEO Briefing absence.

---

## 6. Risks

### Risk: App polish turns into redesign

Mitigation:

- Make minimal changes.
- Improve dead ends, empty states, and return paths only.
- Do not introduce a new visual system.

### Risk: CEO Briefing reappears as a blocker

Mitigation:

- Keep CEO Briefing out of scope in every prompt.
- Keep absence guard in validation.
- Do not create screenshot evidence.

### Risk: Browser APIs behave inconsistently

Mitigation:

- Treat speech recognition and notifications as optional browser capabilities.
- Preserve typed capture as the reliable path.
- Use fallback copy.

### Risk: Local task/reminder state is mixed or unclear

Mitigation:

- Inspect existing storage/helper patterns before editing.
- Preserve current `Storage.addTask` style behavior unless the code proves a safer existing path.
- Do not create backend scheduling.

### Risk: Validation warnings are confused with sprint failures

Mitigation:

- Distinguish existing Vite warnings from Sprint 027 failures.
- Do not modify unrelated build configuration to remove existing warnings.

---

## 7. Decisions

No new durable architecture decision is required by default.

Existing working decision preserved:

- Current local Vite React app remains the source of truth for app-completion work.
- CEO Briefing remains deferred, not a blocker.
- Sprint 027 is a local prototype polish/hardening sprint, not a backend or release sprint.

If implementation discovers a durable decision, Codex should propose adding it to:

```text
planning/DECISIONS.md
```

Do not add decisions casually.

---

## 8. Open Questions

No blocking open questions are known before implementation.

Codex should stop and ask only if:

- A required runtime file outside the expected list must be modified.
- The existing code contradicts the Sprint 027 scope.
- A protected file appears necessary to satisfy acceptance criteria.
- A feature appears connected to CEO Briefing.

---

# File: planning/STATE.md

```markdown
# Project State

## Current Sprint

Sprint 027 — Core App Completion Polish and Navigation Hardening

## Current Status

Sprint 026 is closed. Docs/planning checkpoint and implementation checkpoint were committed and pushed.

Sprint 026 stabilized the Assistant capture path so typed capture and supported speech transcript capture can create a local task and open Tasks for visibility. Tasks and Notifications now include clearer empty/fallback states.

Sprint 027 should build on that working path by tightening primary navigation, return paths, empty states, and fallback behavior across the current local Vite React prototype.

## Recently Completed

- Sprint 026 docs/planning checkpoint committed: `afd5314`.
- Sprint 026 implementation checkpoint committed: `492687f`.
- Main is aligned with origin/main.
- CEO Briefing stayed deferred and untouched.
- No screenshot evidence was created.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

## Next Action

Apply Sprint 027 Architect Pack as docs/planning first.

After the pack is applied, Codex must read Sprint 027 files and summarize its implementation plan before modifying runtime code.

## Active Guardrails

- Do not touch CEO Briefing.
- Do not create screenshot evidence.
- Do not create `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not modify Firebase, Hermes, backend, native, release, deploy, FlutterFlow export, or package files.
- Preserve Sprint 026 Assistant -> Tasks capture behavior.
```

---

# File: planning/sprints/027-core-app-completion-polish-and-navigation-hardening/requirements.md

```markdown
# Sprint 027 Requirements — Core App Completion Polish and Navigation Hardening

## Goal

Tighten the current Trina Vite React prototype around the working Sprint 026 Assistant capture path by improving navigation, return paths, empty states, and fallback behavior without expanding scope.

## User Story

As a user testing the Trina prototype, I want the main app surfaces to connect cleanly so I can move from Dashboard to Assistant, capture a task/reminder, see it in Tasks or Notifications, and return to Home without hitting confusing dead ends.

## In Scope

- Review primary navigation paths for broken or confusing behavior.
- Preserve Assistant typed Capture and supported speech transcript capture from Sprint 026.
- Improve return navigation to Dashboard/Home.
- Improve empty-state copy on primary local prototype surfaces.
- Improve fallback copy for unsupported or denied browser notification/speech capabilities.
- Keep local-only prototype behavior clear.
- Update `planning/STATE.md` and `docs/VALIDATION.md` after implementation.

## Out of Scope

- CEO Briefing.
- Screenshot evidence.
- FlutterFlow Designer work.
- FlutterFlow export/generated code.
- Firebase, Hermes, backend, auth, cloud sync, native, release, deploy, or package changes.
- Live AI, live voice agent, CRM, calendar, email, or external integrations.
- Broad redesign.
- New app shell.
- Production scheduling.

## Business Rules

- The current Vite React app is the source of truth.
- Sprint 026 behavior must not regress.
- Typed capture is the reliable acceptance path.
- Speech recognition and browser notifications are optional browser capabilities and must have safe fallbacks.
- Deferred features must not appear silently broken.
- CEO Briefing remains deferred and out of scope.

## Success Outcome

After Sprint 027, the prototype should feel more complete around the core assistant/task flow, with fewer confusing dead ends and clearer fallback states.
```

---

# File: planning/sprints/027-core-app-completion-polish-and-navigation-hardening/blueprint.md

```markdown
# Sprint 027 Blueprint — Core App Completion Polish and Navigation Hardening

## Objective

Inspect and lightly harden the current app shell so the Sprint 026 Assistant -> Tasks flow is supported by cleaner navigation, empty states, and fallback behavior.

## Files to Read First

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/027-core-app-completion-polish-and-navigation-hardening/requirements.md`
- `planning/sprints/027-core-app-completion-polish-and-navigation-hardening/blueprint.md`
- `planning/sprints/027-core-app-completion-polish-and-navigation-hardening/acceptance.md`

## Runtime Files to Inspect

- `App.tsx`
- `components/Navigation.tsx`
- `components/Dashboard.tsx`
- `components/VoiceDashboard.tsx`
- `components/TasksView.tsx`
- `components/NotificationsView.tsx`
- `src/lib/reminderNotifications.js`

## Secondary Files to Inspect Only If Needed

- `components/*View.tsx`
- `components/*Dashboard*.tsx`
- `components/*Task*.tsx`
- `components/*Reminder*.tsx`
- `services/barbieService.ts`
- `package.json`

## Expected Modification Candidates

- `App.tsx`
- `components/Navigation.tsx`
- `components/Dashboard.tsx`
- `components/VoiceDashboard.tsx`
- `components/TasksView.tsx`
- `components/NotificationsView.tsx`
- `planning/STATE.md`
- `docs/VALIDATION.md`

Modify fewer files if fewer changes are needed.

Stop and ask before modifying files outside this expected set.

## Implementation Plan

1. Inspect the current app flow.
   - Confirm Sprint 026 capture behavior works in code.
   - Identify primary navigation surfaces.
   - Identify any current dead ends or misleading actions.

2. Harden navigation.
   - Ensure primary navigation routes to valid views.
   - Ensure return-to-Home behavior works.
   - Ensure active/selected state is not misleading.
   - Do not wire CEO Briefing.

3. Polish empty states.
   - Update copy where primary surfaces are empty.
   - Give users a clear local next action.
   - Avoid implying backend/live integration exists.

4. Preserve Assistant capture.
   - Keep typed Capture working.
   - Keep supported speech transcript capture path working.
   - Keep captured item visibility in Tasks.
   - Keep empty input safe.

5. Harden browser capability fallbacks.
   - Browser notifications denied/unsupported should not block the local app.
   - Speech unsupported/denied should not block typed capture.

6. Update docs and state.
   - Update `planning/STATE.md` with Sprint 027 implementation result.
   - Update `docs/VALIDATION.md` with Sprint 027 validation and smoke coverage.
   - Update architecture/API docs only if actual structure or contracts changed.

7. Validate.
   - Run the required git, lint, and build checks.
   - Run manual smoke validation.
   - Confirm CEO Briefing screenshot remains absent.

## Implementation Constraints

- No package installs.
- No backend work.
- No Firebase/Hermes/native/release/deploy work.
- No screenshot evidence.
- No CEO Briefing work.
- No broad redesign.
```

---

# File: planning/sprints/027-core-app-completion-polish-and-navigation-hardening/acceptance.md

```markdown
# Sprint 027 Acceptance Criteria — Core App Completion Polish and Navigation Hardening

Sprint 027 is complete only when all applicable criteria pass.

## Navigation

- Dashboard/Home is reachable.
- Assistant/Voice Entry is reachable.
- Tasks is reachable.
- Notifications/Alerts is reachable.
- Return navigation from primary surfaces works.
- Primary navigation does not create obvious dead ends for the current prototype scope.
- Deferred/unavailable features do not appear silently broken.
- CEO Briefing is not built, wired, validated, screenshotted, or marked complete.

## Sprint 026 Preservation

- Assistant typed Capture still creates or simulates a local task/reminder.
- Supported speech transcript capture still uses the same local capture path.
- Captured item is visible in Tasks or the relevant local task surface.
- Empty Assistant input keeps unsafe actions disabled.
- Notification denied/unsupported behavior remains non-blocking.

## Empty States and Fallbacks

- Tasks empty state gives a clear next action.
- Notifications/Alerts fallback state gives clear browser support or permission guidance.
- Any updated empty state avoids claiming live backend functionality.
- Browser capability fallback copy is clear enough for prototype testing.

## Scope Guardrails

- No CEO Briefing files or behavior changed.
- No screenshot evidence was created or modified.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- No Firebase, Hermes, backend, native, release, deploy, FlutterFlow export, package, or build configuration files changed.
- No package install was introduced.
- No broad redesign was introduced.

## Documentation

- `planning/STATE.md` reflects Sprint 027 status.
- `docs/VALIDATION.md` records Sprint 027 validation expectations and implementation results.
- `docs/ARCHITECTURE.md` is only updated if app navigation architecture changed.
- `docs/API.md` is only updated if helper/data contracts changed.

## Required Validation Commands

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
```

## Manual Smoke Validation

Manual smoke must cover:

- Dashboard/Home load.
- Assistant/Voice Entry route.
- Typed Capture.
- Speech-recognition supported path or fallback path.
- Task visibility after capture.
- Tasks empty state.
- Notifications/Alerts fallback state.
- Return navigation.
- CEO Briefing remains absent/deferred/out of scope.
```

---

# File: planning/sprints/027-core-app-completion-polish-and-navigation-hardening/handoff-prompt.md

```markdown
# Sprint 027 Builder Handoff Prompt — Core App Completion Polish and Navigation Hardening

You are Codex acting as the Builder Layer for Trina.

Sprint 027 must be handled in two phases.

Do not implement until the operator approves your readiness summary.

## Phase 1 — Readiness Summary Only

Read these files first:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/027-core-app-completion-polish-and-navigation-hardening/requirements.md`
- `planning/sprints/027-core-app-completion-polish-and-navigation-hardening/blueprint.md`
- `planning/sprints/027-core-app-completion-polish-and-navigation-hardening/acceptance.md`
- `planning/sprints/027-core-app-completion-polish-and-navigation-hardening/handoff-prompt.md`

Inspect, but do not edit yet:

- `App.tsx`
- `components/Navigation.tsx`
- `components/Dashboard.tsx`
- `components/VoiceDashboard.tsx`
- `components/TasksView.tsx`
- `components/NotificationsView.tsx`
- `src/lib/reminderNotifications.js`

Then summarize:

1. What Sprint 027 is supposed to accomplish.
2. Which files you expect to inspect.
3. Which files you expect to modify.
4. What runtime behavior should change.
5. What Sprint 026 behavior must be preserved.
6. What tests or validation steps you will run.
7. Any blockers, ambiguities, or risky assumptions.
8. Confirmation that CEO Briefing remains deferred, untouched, non-blocking, and out of scope.

Stop after the summary.

Do not implement until approved.

## Phase 2 — Implementation After Approval

After the operator approves your summary:

- Keep changes narrow.
- Inspect before editing.
- Preserve Sprint 026 Assistant -> Tasks capture behavior.
- Harden navigation and return paths.
- Improve empty states and fallback copy only where needed.
- Do not touch protected scope.
- Stop and ask before modifying files outside the expected list.

Protected scope:

- Do not touch CEO Briefing.
- Do not create screenshot evidence.
- Do not create `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not modify Firebase, Hermes, backend, package, native, release, deploy, FlutterFlow export, or build configuration files.
- Do not add packages.
- Do not create new live integrations.
- Do not broadly redesign the app.

Validation to run:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
```

Before saying done, report:

1. What runtime behavior changed.
2. Files modified.
3. Validation commands run and results.
4. Manual smoke validation results.
5. Any acceptance criteria incomplete or uncertain.
6. Confirmation that CEO Briefing stayed deferred and untouched.
7. Confirmation that no screenshot evidence was created.

Do not stage, commit, or push until the operator approves a completion review.
```

---

## 9. Codex Prompt to Apply This Architect Pack

Use this prompt after saving the Architect Pack file into the repo.

```text
Apply Sprint 027 Architect Pack as a docs/planning-only update.

Do not implement runtime code yet.
Do not stage, commit, or push.
Do not touch CEO Briefing.
Do not create screenshot evidence.
Do not modify Firebase, Hermes, backend, package, native, release, deploy, FlutterFlow export, or build configuration files.

Architect Pack file:

architect-packs/trina-027-core-app-completion-polish-and-navigation-hardening-architect-pack.md

Create or update only the planning/docs files specified by the pack:

- planning/STATE.md
- planning/sprints/027-core-app-completion-polish-and-navigation-hardening/requirements.md
- planning/sprints/027-core-app-completion-polish-and-navigation-hardening/blueprint.md
- planning/sprints/027-core-app-completion-polish-and-navigation-hardening/acceptance.md
- planning/sprints/027-core-app-completion-polish-and-navigation-hardening/handoff-prompt.md
- docs/VALIDATION.md, only if the pack requires adding Sprint 027 validation expectations

Do not update docs/ARCHITECTURE.md, docs/API.md, planning/DECISIONS.md, planning/RISKS.md, or planning/QUESTIONS.md unless the pack creates a specific durable change for them.

After applying the pack, run:

- git status --branch --short
- git diff --name-only
- git diff --stat
- git diff --check
- test ! -f references/flutterflow/sprint-009/ceo-briefing.png

Then report:

1. Files created.
2. Files modified.
3. Files intentionally not changed.
4. Validation run and results.
5. Final git status.
6. Confirmation that CEO Briefing stayed deferred, untouched, and out of scope.
```

---

## 10. Next-Step Rule

After Codex applies this pack, do not start implementation yet.

The next required step is:

```text
Codex reads the Sprint 027 files and summarizes the implementation plan before changing runtime code.
```

Only after that summary is approved should implementation begin.
