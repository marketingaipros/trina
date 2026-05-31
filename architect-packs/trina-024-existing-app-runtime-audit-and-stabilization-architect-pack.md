# Trina Sprint 024 Architect Pack — Existing App Runtime Audit and Stabilization

**Project:** Trina
**Sprint:** 024-existing-app-runtime-audit-and-stabilization
**Created:** 2026-05-31
**Architect Layer:** ChatGPT
**Builder Layer:** Codex
**Repo path:** `/Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice`

---

## 0. Architect Direction

Sprint 023 reset the project direction.

The CEO Briefing screen is deferred, not complete, and not blocking app completion.

Sprint 024 moves the app forward by auditing and stabilizing the existing usable app shell. The goal is not to add a new product area. The goal is to make the visible non-CEO paths either work, route correctly, or be clearly handled as intentional placeholders.

This is the first forward-build sprint after the reset.

---

## 1. Files This Architect Pack Should Create or Update

Codex must create or update these planning files:

```text
architect-packs/trina-024-existing-app-runtime-audit-and-stabilization-architect-pack.md
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/ARCHITECTURE.md
docs/API.md
docs/VALIDATION.md
planning/sprints/024-existing-app-runtime-audit-and-stabilization/requirements.md
planning/sprints/024-existing-app-runtime-audit-and-stabilization/blueprint.md
planning/sprints/024-existing-app-runtime-audit-and-stabilization/acceptance.md
planning/sprints/024-existing-app-runtime-audit-and-stabilization/handoff-prompt.md
```

Codex may later modify runtime files only after it has applied this Architect Pack and then completed the required pre-implementation summary checkpoint.

Expected runtime files for the later implementation step:

```text
App.tsx
components/Dashboard.tsx
components/Navigation.tsx
components/TasksView.tsx
components/NotificationsView.tsx
src/lib/reminderNotifications.js
```

Possible runtime files to inspect or touch only if needed:

```text
components/FinanceView.tsx
components/CalendarView.tsx
components/AssistantView.tsx
components/VoiceAssistant*.tsx
components/Settings*.tsx
components/*.tsx
src/**/*.ts
src/**/*.tsx
```

Protected scope:

```text
references/flutterflow/sprint-009/ceo-briefing.png
FlutterFlow generated exports
Firebase
backend services
package/dependency changes
native iOS/Android files
release/build/deployment files
```

---

# planning/STATE.md

```markdown
# Project State

## Current Sprint

Sprint 024 — Existing App Runtime Audit and Stabilization

## Current Status

Sprint 023 reset the project direction so app completion can move forward.

CEO Briefing remains deferred, not complete, and not blocking app completion.

Sprint 024 is the active forward-build sprint. The goal is to audit and stabilize the visible existing app shell around non-CEO paths.

## Recently Completed

- Sprint 023 docs/planning reset applied.
- CEO Briefing stale blocker language neutralized.
- App-completion direction restored around the existing usable app shell.

## Active Focus

Make visible non-CEO app paths either:

1. Navigate correctly.
2. Render without runtime errors.
3. Provide usable static/mock behavior where that was already the app direction.
4. Show clear intentional placeholder handling where full behavior is not part of this sprint.

## Sprint 024 Target Areas

- Dashboard navigation.
- Assistant and/or voice entry.
- Tasks.
- Finance.
- Calendar.
- Notifications/reminders.
- Settings-equivalent paths.

## Out of Scope

- CEO Briefing build, rebuild, screenshot evidence, or validation.
- FlutterFlow designer work.
- FlutterFlow generated code export.
- Firebase or backend work.
- Hermes work.
- Package/dependency changes unless explicitly approved.
- Native iOS/Android work.
- Release, deployment, or production build work.
- Large redesign or dashboard replacement.

## Next Action

Codex must apply the Sprint 024 Architect Pack to planning/docs only.

After applying the pack, Codex must read the Sprint 024 files and summarize:

1. What Sprint 024 is supposed to accomplish.
2. Which files it expects to modify.
3. What tests or validation steps it will run.
4. Any blockers or ambiguities.

Codex must not implement runtime changes until that summary is approved.
```

---

# planning/DECISIONS.md

```markdown
# Decisions

## Sprint 024 Decisions

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-05-31 | Sprint 024 will focus on existing non-CEO runtime paths. | Sprint 023 reset removed CEO Briefing as a blocker and restored forward app-completion work. | Builder should prioritize Dashboard, Assistant/voice entry, Tasks, Finance, Calendar, Notifications/reminders, and Settings-equivalent paths. |
| 2026-05-31 | CEO Briefing remains deferred and must not be rebuilt in Sprint 024. | Prior sprints stalled around a missing FlutterFlow screen and screenshot evidence. | No CEO Briefing files, screenshot evidence, or FlutterFlow build work should be touched. |
| 2026-05-31 | Sprint 024 may make small runtime fixes after the planning pack is applied and the pre-implementation summary is approved. | The app needs forward progress beyond docs/planning reset. | Runtime edits are allowed only inside the approved non-CEO stabilization scope. |
| 2026-05-31 | Intentional placeholders are acceptable when a visible path is not ready for full functionality. | The sprint goal is shell stabilization, not complete feature expansion. | Placeholder states must be clear, non-crashing, and not misleading. |
```

---

# planning/RISKS.md

```markdown
# Risks

## Sprint 024 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Builder drifts back into CEO Briefing work. | Medium | High | Keep CEO Briefing explicitly out of scope in requirements, blueprint, and acceptance. | Open |
| Visible routes may reference missing components or stale names. | Medium | Medium | Audit Dashboard, Navigation, and App routing before editing. | Open |
| Reminder notification behavior may depend on browser permission state. | Medium | Medium | Validate both granted/available and blocked/unavailable cases where feasible. | Open |
| Runtime stabilization may tempt broad redesign. | Medium | Medium | Limit edits to wiring, defensive rendering, placeholders, and small fixes. | Open |
| Tests may not exist or may be weak. | Medium | Medium | Run available lint/build commands and document any missing test coverage. | Open |
| Package changes could destabilize the project. | Low | Medium | Do not change dependencies unless explicitly approved. | Open |
```

---

# planning/QUESTIONS.md

```markdown
# Questions

## Sprint 024 Open Questions

| Question | Owner | Needed By | Status | Notes |
|---|---|---|---|---|
| Which visible path should become the next feature-complete area after shell stabilization? | Architect/User | Sprint 025 planning | Open | Likely candidates: Assistant/voice entry, Tasks, or Notifications/reminders. |
| Does the app currently have a Settings screen, or only settings-equivalent controls? | Builder | Sprint 024 audit summary | Open | Builder should inspect current files before implementation. |
| Are Finance and Calendar intended to be static/mock in the current prototype, or partially functional? | Builder/Architect | Sprint 024 audit summary | Open | Builder should report current behavior first. |
| Are browser notifications required to actually fire in Sprint 024, or only avoid breaking the app? | Architect/User | Sprint 024 implementation approval if ambiguous | Open | Default: stabilize existing reminder popup/notification behavior without adding backend scheduling. |
```

---

# docs/ARCHITECTURE.md

```markdown
# Architecture

## Sprint 024 Architecture Update

Trina is currently being treated as a local/runtime app shell stabilization project.

Sprint 024 does not change the high-level architecture. It audits and stabilizes the existing frontend paths.

## Current Frontend Areas to Inspect

- `App.tsx` — app-level routing/state/view selection.
- `components/Dashboard.tsx` — main user entry point and feature cards/buttons.
- `components/Navigation.tsx` — primary navigation shell.
- `components/TasksView.tsx` — task screen behavior.
- `components/NotificationsView.tsx` — notifications screen behavior.
- `src/lib/reminderNotifications.js` — reminder notification helper behavior.

## Architectural Rules for Sprint 024

- Keep the app local/frontend-only.
- Do not introduce backend services.
- Do not introduce Firebase/Hermes work.
- Do not export FlutterFlow generated code.
- Do not create release/deployment artifacts.
- Do not replace the existing app shell with a new architecture.
- Prefer small fixes that make current paths stable.
- Use clear placeholder states when a path is not ready.

## Deferred Architecture Areas

CEO Briefing remains deferred and is not part of the current active architecture path.
```

---

# docs/API.md

```markdown
# API

## Sprint 024 API Update

Sprint 024 does not add API endpoints, backend contracts, Firebase contracts, or external service integrations.

## Current Interface Scope

The only interfaces in scope are local frontend component interfaces and local helper functions already present in the repo.

Possible local interface review:

- Dashboard click handlers.
- Navigation view identifiers.
- Assistant/voice entry callbacks.
- Task view props/state.
- Notification/reminder helper calls.

## API Rules for Sprint 024

- Do not add network APIs.
- Do not add backend endpoints.
- Do not add Firebase calls.
- Do not add new package-level contracts.
- Do not change public service contracts.
- Keep any local interface fixes narrow and tied to visible non-CEO app paths.
```

---

# docs/VALIDATION.md

```markdown
# Validation

## Sprint 024 Validation Plan

Sprint 024 validation proves that the visible non-CEO app shell can be used without obvious broken paths.

## Required Commands

Run:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
```

If any command is unavailable or fails because of pre-existing issues, document:

1. The exact command.
2. The result.
3. Whether the failure is caused by Sprint 024 changes or pre-existing project state.
4. The recommended follow-up.

## Manual Smoke Test

After implementation, manually check these paths in the browser:

1. Dashboard loads without runtime errors.
2. Dashboard navigation cards/buttons route to intended non-CEO views.
3. Assistant and/or voice entry opens or shows an intentional placeholder.
4. Tasks screen renders without runtime errors.
5. Finance screen renders without runtime errors or clearly shows placeholder state.
6. Calendar screen renders without runtime errors or clearly shows placeholder state.
7. Notifications/reminders screen renders without runtime errors.
8. Reminder popup/notification behavior does not crash when permissions are unavailable, blocked, or not yet granted.
9. Settings-equivalent path renders or is clearly handled.
10. CEO Briefing remains deferred and is not treated as required pass evidence.

## Evidence Rules

Sprint 024 does not require screenshot evidence.

Do not create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Do not treat absent CEO Briefing screenshot evidence as a Sprint 024 failure.
```

---

# planning/sprints/024-existing-app-runtime-audit-and-stabilization/requirements.md

```markdown
# Sprint 024 Requirements — Existing App Runtime Audit and Stabilization

## Goal

Stabilize the existing visible non-CEO app shell so Trina can move forward after the Sprint 023 reset.

The app should stop being blocked by CEO Briefing and should become usable around the current visible paths.

## User Story

As the app owner, I need the current app shell to work well enough to continue app completion, so I can test real navigation paths and decide the next focused feature sprint without being pulled back into the deferred CEO Briefing screen.

## In Scope

- Audit current app-level navigation.
- Stabilize Dashboard navigation.
- Stabilize Assistant and/or voice entry path.
- Stabilize Tasks path.
- Stabilize Finance path.
- Stabilize Calendar path.
- Stabilize Notifications/reminders path.
- Stabilize Settings-equivalent path if present.
- Add clear intentional placeholder handling for visible paths that are not meant to be complete in this sprint.
- Make small runtime fixes needed to avoid crashes, dead buttons, broken view identifiers, or misleading UI states.
- Update planning/docs after implementation as needed.

## Out of Scope

- CEO Briefing screen creation, rebuild, routing, screenshot, or validation.
- FlutterFlow Designer work.
- FlutterFlow generated code export.
- Firebase work.
- Backend work.
- Hermes work.
- Package/dependency changes unless explicitly approved.
- Native iOS/Android changes.
- Release, deployment, or production build work.
- Full redesign of Dashboard or app shell.
- New product modules.
- Real data integration.
- Live AI integration.
- Auth or permissions work.

## Business Rules

- CEO Briefing is deferred and non-blocking.
- Existing non-CEO paths are the priority.
- The Builder must inspect before editing.
- The Builder must report any ambiguity before implementation.
- Visible placeholders are acceptable when clear and intentional.
- No fake pass evidence may be created.
- No screenshot evidence is required for Sprint 024.

## Expected Result

After Sprint 024, the app owner should be able to open the app and move through the visible non-CEO paths without hitting avoidable broken states.
```

---

# planning/sprints/024-existing-app-runtime-audit-and-stabilization/blueprint.md

```markdown
# Sprint 024 Blueprint — Existing App Runtime Audit and Stabilization

## Objective

Audit and stabilize the current frontend app shell across visible non-CEO paths.

## Pre-Implementation Rule

Before runtime edits, Codex must read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/VALIDATION.md`
- `planning/sprints/024-existing-app-runtime-audit-and-stabilization/requirements.md`
- `planning/sprints/024-existing-app-runtime-audit-and-stabilization/blueprint.md`
- `planning/sprints/024-existing-app-runtime-audit-and-stabilization/acceptance.md`

Then Codex must summarize:

1. What Sprint 024 is supposed to accomplish.
2. Which files it expects to modify.
3. What tests or validation steps it will run.
4. Any blockers or ambiguities.

Codex must stop for approval before implementation.

## Files to Inspect

```text
App.tsx
components/Dashboard.tsx
components/Navigation.tsx
components/TasksView.tsx
components/NotificationsView.tsx
src/lib/reminderNotifications.js
components/
src/
```

## Expected Files to Modify

```text
App.tsx
components/Dashboard.tsx
components/Navigation.tsx
components/TasksView.tsx
components/NotificationsView.tsx
src/lib/reminderNotifications.js
planning/STATE.md
docs/VALIDATION.md
```

Only modify other files if inspection proves they are directly tied to the accepted Sprint 024 scope.

## Implementation Plan

### Step 1 — Current behavior audit

Inspect the current app shell.

Identify:

- View identifiers used by `App.tsx`.
- Navigation targets used by `Navigation.tsx`.
- Dashboard button/card targets.
- Assistant/voice entry behavior.
- Tasks view behavior.
- Finance view behavior.
- Calendar view behavior.
- Notifications/reminders behavior.
- Settings-equivalent path, if present.
- Dead buttons, missing handlers, missing components, stale imports, broken view names, or crash paths.

### Step 2 — Stabilize app-level routing

Make small fixes so non-CEO view names and handlers line up.

Do not add CEO Briefing as a required route.

If CEO Briefing references remain visible, handle them as deferred in a clear and non-blocking way.

### Step 3 — Stabilize Dashboard

Ensure Dashboard visible actions either:

- Navigate to the intended existing view.
- Trigger the intended existing local behavior.
- Show a clear placeholder message.

No broad dashboard redesign.

### Step 4 — Stabilize Assistant/voice entry

Ensure Assistant and/or voice entry does not break.

Acceptable outcomes:

- Opens existing Assistant/voice screen.
- Opens existing modal/panel.
- Shows clear placeholder if unfinished.

Do not add live AI or voice backend integration.

### Step 5 — Stabilize Tasks

Ensure Tasks renders and basic local interactions do not crash.

Do not add backend persistence.

### Step 6 — Stabilize Finance and Calendar

Ensure each renders or shows clear intentional placeholder state.

Do not add real financial data, real calendar integration, or API connections.

### Step 7 — Stabilize Notifications/reminders

Ensure Notifications view renders.

Ensure reminder helper does not crash when:

- Notification API is unavailable.
- Permission is denied.
- Permission is default/not requested.
- Browser blocks notifications.

Do not add backend scheduling.

### Step 8 — Update docs/planning

Update:

- `planning/STATE.md`
- `docs/VALIDATION.md`

Update `planning/DECISIONS.md`, `planning/RISKS.md`, or `planning/QUESTIONS.md` only if new durable decisions, risks, or open questions are discovered.

## Validation Plan

Run:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
```

Manual smoke test:

- Dashboard.
- Navigation.
- Assistant/voice entry.
- Tasks.
- Finance.
- Calendar.
- Notifications/reminders.
- Settings-equivalent path if present.

## Guardrails

Do not stage, commit, or push unless explicitly instructed.

Do not modify protected files.

Do not create screenshot evidence.

Do not treat CEO Briefing as blocking Sprint 024.
```

---

# planning/sprints/024-existing-app-runtime-audit-and-stabilization/acceptance.md

```markdown
# Sprint 024 Acceptance Criteria

Sprint 024 is complete only when all applicable criteria are satisfied.

## Planning / Process

- Sprint 024 planning folder exists.
- `requirements.md`, `blueprint.md`, `acceptance.md`, and `handoff-prompt.md` exist.
- `planning/STATE.md` identifies Sprint 024 as active during implementation.
- CEO Briefing is documented as deferred and non-blocking.
- Codex performs the pre-implementation summary checkpoint before runtime edits.

## Runtime Stabilization

- Dashboard loads without runtime errors.
- Primary non-CEO Dashboard actions route or respond intentionally.
- Navigation does not point users into avoidable broken non-CEO paths.
- Assistant and/or voice entry works or shows a clear intentional placeholder.
- Tasks screen renders without runtime errors.
- Finance screen renders or shows a clear intentional placeholder.
- Calendar screen renders or shows a clear intentional placeholder.
- Notifications/reminders screen renders without runtime errors.
- Reminder notification helper handles unavailable, denied, default, or blocked notification states without crashing.
- Settings-equivalent path, if present, renders or is clearly handled.

## Scope Control

- CEO Briefing is not rebuilt.
- `references/flutterflow/sprint-009/ceo-briefing.png` is not created.
- FlutterFlow generated code is not exported.
- Firebase/backend/Hermes work is not added.
- Native iOS/Android files are not changed.
- Package/dependency files are not changed unless explicitly approved.
- Release/deployment/build artifacts are not created.

## Validation

- `npm run lint` is run or failure is documented.
- `npm run build` is run or failure is documented.
- `git diff --check` passes or any failure is documented.
- `git status --branch --short` is reported.
- Manual browser smoke test results are reported.
- Any incomplete or uncertain acceptance item is clearly listed.
```

---

# planning/sprints/024-existing-app-runtime-audit-and-stabilization/handoff-prompt.md

```markdown
# Sprint 024 Builder Handoff Prompt

You are Codex acting as the Builder Layer for Trina.

Sprint 023 reset the project direction. CEO Briefing is deferred, not complete, and not blocking app completion.

## First: Apply This Architect Pack

Create or update the Sprint 024 planning/docs files from:

```text
architect-packs/trina-024-existing-app-runtime-audit-and-stabilization-architect-pack.md
```

Create/update these files:

```text
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/ARCHITECTURE.md
docs/API.md
docs/VALIDATION.md
planning/sprints/024-existing-app-runtime-audit-and-stabilization/requirements.md
planning/sprints/024-existing-app-runtime-audit-and-stabilization/blueprint.md
planning/sprints/024-existing-app-runtime-audit-and-stabilization/acceptance.md
planning/sprints/024-existing-app-runtime-audit-and-stabilization/handoff-prompt.md
```

Do not change runtime app code while applying the Architect Pack.

## Second: Read Before Implementation

After applying the Architect Pack, read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/VALIDATION.md`
- `planning/sprints/024-existing-app-runtime-audit-and-stabilization/requirements.md`
- `planning/sprints/024-existing-app-runtime-audit-and-stabilization/blueprint.md`
- `planning/sprints/024-existing-app-runtime-audit-and-stabilization/acceptance.md`

Then summarize:

1. What Sprint 024 is supposed to accomplish.
2. Which files you expect to modify.
3. What tests or validation steps you will run.
4. Any blockers or ambiguities.

Stop after the summary. Do not implement runtime changes until approved.

## Sprint 024 Goal

Audit and stabilize the visible non-CEO app shell:

- Dashboard navigation.
- Assistant/voice entry.
- Tasks.
- Finance.
- Calendar.
- Notifications/reminders.
- Settings-equivalent paths.

Every visible non-CEO path should either work, render safely, or show a clear intentional placeholder.

## Protected Scope

Do not touch:

- CEO Briefing build/rebuild.
- CEO Briefing screenshot evidence.
- `references/flutterflow/sprint-009/ceo-briefing.png`.
- FlutterFlow generated exports.
- Firebase.
- Backend.
- Hermes.
- Package/dependency files unless explicitly approved.
- Native iOS/Android files.
- Release/deployment/build artifacts.

## Validation Expected After Approved Implementation

Run:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
```

Perform manual browser smoke test for:

- Dashboard.
- Navigation.
- Assistant/voice entry.
- Tasks.
- Finance.
- Calendar.
- Notifications/reminders.
- Reminder popup/notification behavior.
- Settings-equivalent path if present.

Do not stage, commit, or push unless explicitly instructed.
```

---

## 2. Codex Prompt to Apply Sprint 024 Architect Pack

Use this exact prompt after saving the Architect Pack file into the repo:

```text
You are Codex acting as the Builder Layer for Trina.

Apply Sprint 024 as a planning/docs Architect Pack first.

Architect Pack file:
architect-packs/trina-024-existing-app-runtime-audit-and-stabilization-architect-pack.md

Rules:
- Create/update only the planning/docs files listed in the Architect Pack.
- Do not change runtime app code yet.
- Do not stage, commit, or push.
- Do not create screenshot evidence.
- Do not touch CEO Briefing work.
- Do not touch FlutterFlow generated exports.
- Do not touch Firebase, backend, Hermes, package/dependency, native, release, deployment, or build artifact files.

After applying the Architect Pack, read:
- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/ARCHITECTURE.md
- docs/API.md
- docs/VALIDATION.md
- planning/sprints/024-existing-app-runtime-audit-and-stabilization/requirements.md
- planning/sprints/024-existing-app-runtime-audit-and-stabilization/blueprint.md
- planning/sprints/024-existing-app-runtime-audit-and-stabilization/acceptance.md

Then summarize:
1. What Sprint 024 is supposed to accomplish.
2. Which files you expect to modify during the later implementation step.
3. What tests or validation steps you will run.
4. Any blockers or ambiguities.

Stop after the summary. Do not implement runtime changes until I approve.
```

---

## 3. Architect Notes

This pack intentionally moves Trina forward.

The key correction is this:

- CEO Briefing is not the app.
- CEO Briefing is not blocking app completion.
- Sprint 024 focuses on the real visible shell users can already touch.
- The sprint should expose what actually works and what needs the next focused sprint.

Recommended next sprint after Sprint 024:

```text
025-[highest-value-feature-from-audit]
```

Likely options:

- `025-assistant-voice-entry-completion`
- `025-tasks-notifications-local-workflow`
- `025-dashboard-navigation-polish`
