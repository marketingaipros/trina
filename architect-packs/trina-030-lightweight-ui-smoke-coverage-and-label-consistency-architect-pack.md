# Trina Sprint 030 Architect Pack

**Sprint:** `030-lightweight-ui-smoke-coverage-and-label-consistency`  
**Project:** Trina  
**Mode:** Architect Pack  
**Date:** 2026-05-31  
**Status:** Ready for Builder planning/docs application

---

## Architect Intent

Sprint 030 moves Trina forward after Sprint 029 by adding lightweight confidence around the app shell polish that was just completed.

The focus is not new product surface area.

The focus is:

- lightweight UI smoke coverage for core navigation
- one consistent label strategy for Knowledge Base / Knowledge / Context
- browser/device verification path for speech capture
- preserving typed Assistant capture to Tasks
- preserving captured task visibility
- keeping CEO Briefing deferred and untouched

This sprint exists because Sprint 029 improved navigation and empty states, but speech capture could not be live-tested due to microphone permission denial, and the app still needs a basic repeatable UI validation layer before deeper feature work.

---

## Protected Scope

Do not touch CEO Briefing.

Do not create, restore, fake, update, reference as complete, or depend on:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Do not return to the old CEO Briefing loop.

Do not modify backend, Firebase, Hermes, package, native, build, release, auth, database, deployment, or cloud configuration files.

Do not add a large test framework unless the existing repo already has one and it can be used with minimal changes.

Do not overbuild this into full E2E coverage.

---

# Files This Architect Pack Should Create or Update

## Create

```text
planning/sprints/030-lightweight-ui-smoke-coverage-and-label-consistency/requirements.md
planning/sprints/030-lightweight-ui-smoke-coverage-and-label-consistency/blueprint.md
planning/sprints/030-lightweight-ui-smoke-coverage-and-label-consistency/acceptance.md
planning/sprints/030-lightweight-ui-smoke-coverage-and-label-consistency/handoff-prompt.md
```

## Update

```text
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/VALIDATION.md
```

## Update only if runtime implementation requires it later

```text
docs/ARCHITECTURE.md
docs/API.md
```

Expected for this sprint: `docs/ARCHITECTURE.md` and `docs/API.md` should probably remain unchanged unless inspection finds a real contract or architecture update.

---

# planning/STATE.md Update

```markdown
# Project State

## Current Sprint

Sprint 030 — Lightweight UI Smoke Coverage and Label Consistency

## Current Status

Sprint 029 is complete, committed, and pushed.

Sprint 030 is ready for planning/docs application. The sprint should add lightweight confidence around the core app shell without returning to CEO Briefing or expanding into backend/build/release work.

## Recently Completed

- Sprint 029 polished bottom navigation, Dashboard reachability, Assistant / Voice Entry reachability, and empty/fallback states.
- Sprint 029 preserved typed Assistant capture to Tasks.
- Sprint 029 preserved speech capture path by avoiding `VoiceDashboard.tsx` changes, though live speech capture was not fully tested because the browser environment denied microphone permission.
- Sprint 029 passed `npm run lint`, `npm run build`, `git diff --check`, and the CEO Briefing evidence absence guard.
- Sprint 029 was committed and pushed as `f525b9d`.

## Active Work

Create and apply Sprint 030 planning docs.

## Next Actions

1. Apply the Sprint 030 Architect Pack to planning/docs.
2. Have Codex read Sprint 030 files and summarize before implementation.
3. Implement narrow runtime/test/docs changes only after summary approval.
4. Validate that core navigation, typed Assistant capture, and speech capture verification path are covered.
5. Keep CEO Briefing deferred and untouched.

## Blockers

- Speech capture live testing may require a browser/device with microphone permission granted.
```

---

# planning/DECISIONS.md Update

```markdown
# Decisions

## Decision Log

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-05-31 | Use `Knowledge Base` as the full feature name and `Knowledge` only as a compact navigation label when space requires it. Do not use `Context` as the user-facing label for this feature unless a future sprint deliberately changes the product language. | Sprint 029 improved navigation labels but created a follow-up need to make product copy consistent. | Sprint 030 should align visible labels, empty-state copy, validation notes, and smoke checks around one product term. |
| 2026-05-31 | Sprint 030 should add lightweight UI smoke confidence without introducing a heavy E2E testing system unless the repo already supports it cleanly. | The project needs confidence, not a test framework detour. | Prefer simple scripts, existing test setup, or documented manual smoke protocol over large test tooling changes. |
```

---

# planning/RISKS.md Update

```markdown
# Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Speech capture remains browser-permission dependent and may not be testable in every local environment. | Medium | Medium | Add a documented verification path and preserve typed capture as the reliable fallback. | Open |
| Adding UI smoke coverage could expand into toolchain churn. | Medium | Medium | Use existing tooling first. Avoid new heavy dependencies unless absolutely necessary and explicitly justified. | Open |
| Feature labels may drift between `Knowledge Base`, `Knowledge`, and `Context`. | Medium | Low | Standardize copy in Sprint 030 and document the label rule in decisions/validation. | Open |
| CEO Briefing could re-enter scope through old evidence references. | Low | High | Keep absence guard and protected scope language in validation and handoff. | Open |
```

---

# planning/QUESTIONS.md Update

```markdown
# Questions

| Date | Question | Owner | Status | Notes |
|---|---|---|---|---|
| 2026-05-31 | Can speech capture be live-tested in a browser/device where microphone permission is granted? | Builder / Operator | Open | If not available during Sprint 030, document the limitation and preserve the existing speech path without risky changes. |
| 2026-05-31 | Does the repo already include lightweight UI/browser test tooling that can be reused without adding a new framework? | Builder | Open | Builder should inspect before implementation and avoid dependency churn. |
```

---

# docs/VALIDATION.md Update

```markdown
# Validation

## Sprint 030 Validation Focus

Sprint 030 validates the app shell polish completed in Sprint 029 with lightweight repeatable checks.

## Required Command Validation

Run:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

## Required App Smoke Validation

Validate manually or with lightweight existing tooling:

1. Dashboard/Home is reachable.
2. Bottom navigation reaches:
   - Tasks
   - Finance
   - Calendar
   - Notifications
   - Knowledge Base / Knowledge
   - Home
3. Active bottom navigation state is visible and accurate.
4. Assistant / Voice Entry is reachable from Dashboard.
5. Typed Assistant capture creates a task.
6. Captured task appears in Tasks.
7. Empty/fallback states remain clear for:
   - Tasks
   - Notifications
   - Calendar
   - Finance
   - Knowledge Base
8. Knowledge Base naming is consistent:
   - Use `Knowledge Base` for full feature copy.
   - Use `Knowledge` only where compact nav labels are required.
   - Do not use `Context` as the user-facing label unless future scope changes it.
9. Speech capture path is verified in one of two ways:
   - Live-tested with microphone permission granted, or
   - Preserved by code inspection with a clear note that local browser permission prevented live testing.

## Protected Validation

CEO Briefing remains deferred.

The file below must remain absent:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Do not mark CEO Briefing evidence complete.
```

---

# planning/sprints/030-lightweight-ui-smoke-coverage-and-label-consistency/requirements.md

```markdown
# Sprint 030 Requirements

## Sprint Name

`030-lightweight-ui-smoke-coverage-and-label-consistency`

## Goal

Add lightweight repeatable confidence around Trina’s core app shell after Sprint 029 by validating navigation, Assistant capture, label consistency, and speech capture behavior without expanding scope or returning to CEO Briefing.

## Why This Matters

Sprint 029 improved the user-facing app shell. Sprint 030 should make that work safer to continue building on.

The project needs a simple way to confirm:

- navigation still reaches the right places
- typed Assistant capture still creates visible tasks
- empty/fallback states are still useful
- Knowledge Base naming is consistent
- speech capture is either live-tested or clearly documented as permission-limited
- CEO Briefing remains deferred and untouched

## In Scope

- Inspect current app/test setup.
- Add lightweight smoke validation using existing tooling if available.
- If no suitable tooling exists, add a simple documented manual smoke checklist instead of a heavy framework.
- Align user-facing labels around:
  - `Knowledge Base` as the full feature name
  - `Knowledge` as compact nav label only if needed
  - avoid `Context` for this feature unless future scope changes it
- Verify typed Assistant capture to Tasks.
- Verify captured tasks remain visible.
- Verify Dashboard/Home and bottom navigation reachability.
- Verify Assistant / Voice Entry reachability from Dashboard.
- Verify or preserve speech capture path.
- Update `planning/STATE.md` and `docs/VALIDATION.md` after implementation.

## Out of Scope

- CEO Briefing work.
- CEO Briefing screenshots or evidence.
- FlutterFlow work.
- Backend work.
- Firebase work.
- Hermes work.
- Auth work.
- Database work.
- Package/dependency churn unless already justified by existing tooling.
- Native/build/release/deployment work.
- Full E2E testing suite.
- New product features.
- New dashboard modules.
- CRM, invoicing, or multi-user permission work.

## Protected Files / Areas

Do not create or modify:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Do not make changes under backend, Firebase, Hermes, native, release, deployment, or package configuration areas.

## Success Standard

Sprint 030 is successful when the project has a repeatable lightweight validation path for the core app shell, naming is consistent, typed capture still works, speech capture is either live-tested or explicitly preserved with permission limitation documented, and CEO Briefing remains untouched.
```

---

# planning/sprints/030-lightweight-ui-smoke-coverage-and-label-consistency/blueprint.md

```markdown
# Sprint 030 Blueprint

## Implementation Approach

Keep this sprint narrow.

Start by inspecting the repo to determine whether lightweight UI smoke coverage already has a natural place.

Do not add a heavy test framework unless the repo already includes it or the change is extremely small and justified.

## Step 1 — Inspect Existing Structure

Review:

```text
package.json
App.tsx
components/Navigation.tsx
components/Dashboard.tsx
components/VoiceDashboard.tsx
components/TasksView.tsx
components/NotificationsView.tsx
components/CalendarView.tsx
components/FinanceView.tsx
components/KnowledgeBaseView.tsx
docs/VALIDATION.md
planning/STATE.md
```

Look for:

- existing test scripts
- existing browser/UI smoke tooling
- existing component test setup
- current labels for Knowledge Base / Knowledge / Context
- current Assistant capture path
- current speech transcript capture path

## Step 2 — Choose the Lightest Validation Path

Use the first valid option:

### Option A — Existing UI Test Tooling Exists

If the repo already has a test framework suitable for browser/component smoke checks:

- Add narrow tests for navigation reachability.
- Add narrow tests for typed Assistant capture if practical.
- Avoid brittle visual assertions.
- Do not expand into full E2E coverage.

### Option B — No Suitable Test Tooling Exists

Create or update a lightweight manual smoke checklist in `docs/VALIDATION.md`.

Only add a simple script if it uses existing dependencies and does not alter package config.

### Option C — Minimal DOM/Unit Test Is Already Supported

If unit/component tests already run without adding tooling:

- Add tests that assert visible labels and route/view changes where practical.
- Keep coverage focused on Sprint 030 acceptance only.

## Step 3 — Label Consistency

Search for user-facing occurrences of:

```text
Knowledge Base
Knowledge
Context
Alerts
Notifications
```

Apply these rules:

- Full feature name: `Knowledge Base`
- Compact nav label: `Knowledge`
- Avoid `Context` as user-facing label for this feature.
- Use `Notifications` instead of `Alerts` unless the code has internal identifiers that should not be renamed.

Do not rename internal enums or state keys unless necessary and safe.

Prefer copy-level consistency over risky refactors.

## Step 4 — Assistant Capture Verification

Confirm:

- Dashboard still reaches Assistant / Voice Entry.
- Typed Assistant input can create a task.
- After capture, the app routes to Tasks or otherwise makes the captured task visible.
- Existing local task capture function remains intact.

Do not rewrite capture architecture.

## Step 5 — Speech Capture Verification

Inspect `components/VoiceDashboard.tsx`.

If microphone permission can be granted locally:

- Live-test speech capture.
- Confirm transcript capture path still calls the task capture function.

If permission is denied:

- Do not force workaround.
- Do not rewrite speech capture.
- Document that speech capture path was preserved by inspection and live testing was blocked by browser permission.

## Step 6 — Update Docs/State

Update:

```text
planning/STATE.md
docs/VALIDATION.md
```

Update `planning/DECISIONS.md`, `planning/RISKS.md`, and `planning/QUESTIONS.md` only if the Architect Pack has not already been applied or if implementation reveals new durable facts.

## Expected Runtime Files

Only modify runtime files if implementation actually needs label or smoke support changes.

Likely candidates:

```text
components/Navigation.tsx
components/Dashboard.tsx
components/KnowledgeBaseView.tsx
components/VoiceDashboard.tsx
components/TasksView.tsx
components/NotificationsView.tsx
components/CalendarView.tsx
components/FinanceView.tsx
App.tsx
```

Do not modify all of them by default.

## Expected Docs/Planning Files

```text
docs/VALIDATION.md
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
```

## Validation Commands

Run:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Run any existing test command only if present and appropriate.

## Implementation Guardrails

- No CEO Briefing work.
- No screenshot evidence creation.
- No backend/Firebase/Hermes/package/native/build/release changes.
- No broad refactor.
- No large test dependency additions.
- No staging, commit, or push until completion review is approved.
```

---

# planning/sprints/030-lightweight-ui-smoke-coverage-and-label-consistency/acceptance.md

```markdown
# Sprint 030 Acceptance Criteria

## Navigation / App Shell

- Dashboard/Home remains reachable.
- Bottom navigation reaches all expected primary surfaces.
- Active bottom navigation state remains clear.
- Assistant / Voice Entry remains reachable from Dashboard.
- Return paths to Dashboard/Home remain present where Sprint 029 added them.

## Assistant Capture

- Typed Assistant capture to Tasks still works.
- Captured tasks remain visible in Tasks.
- Existing task capture flow is not rewritten unnecessarily.

## Speech Capture

One of the following must be true:

- Speech capture is live-tested in a browser/device with microphone permission granted and transcript capture behavior is confirmed.
- Speech capture cannot be live-tested because permission is denied or unavailable, and the existing transcript-to-task path is preserved by inspection with the limitation documented.

## Label Consistency

- `Knowledge Base` is used as the full feature name in user-facing copy.
- `Knowledge` is used only where compact nav labeling is needed.
- `Context` is not used as the user-facing name for Knowledge Base unless a future sprint changes the product term.
- `Notifications` remains the user-facing label instead of `Alerts`, unless an internal identifier is intentionally left unchanged.

## Validation Coverage

- A lightweight repeatable validation path exists through one of:
  - existing automated UI/component smoke tests
  - existing test setup plus focused additions
  - documented manual smoke checklist in `docs/VALIDATION.md`
- Validation does not introduce a heavy E2E framework unless explicitly justified.
- Validation steps cover navigation, typed capture, Knowledge Base naming, and speech capture status.

## Required Commands

The following pass:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

`npm run build` may pass with pre-existing Vite warnings.

## Protected Scope

- CEO Briefing remains untouched and deferred.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- No backend, Firebase, Hermes, package, native, build, release, deployment, auth, or database files are changed unless explicitly approved.

## Documentation

- `planning/STATE.md` reflects Sprint 030 implementation and validation status.
- `docs/VALIDATION.md` reflects the lightweight app shell smoke path.
- Any new durable label or validation decision is recorded in `planning/DECISIONS.md`.
- Any unresolved speech testing limitation remains visible in `planning/QUESTIONS.md` or validation notes.
```

---

# planning/sprints/030-lightweight-ui-smoke-coverage-and-label-consistency/handoff-prompt.md

```markdown
# Sprint 030 Handoff Prompt

Read Sprint 030 before making changes.

Files to read:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/030-lightweight-ui-smoke-coverage-and-label-consistency/requirements.md
- planning/sprints/030-lightweight-ui-smoke-coverage-and-label-consistency/blueprint.md
- planning/sprints/030-lightweight-ui-smoke-coverage-and-label-consistency/acceptance.md

Then summarize:

1. What Sprint 030 is supposed to accomplish.
2. Which files you expect to modify.
3. What validation or tests you will run.
4. Whether existing test tooling is present.
5. Whether you expect to add automated smoke coverage or only update manual validation.
6. How you will preserve typed Assistant capture to Tasks.
7. How you will verify or preserve speech capture.
8. How you will standardize Knowledge Base naming without risky refactors.
9. How you will protect CEO Briefing deferral.
10. Any blockers or ambiguities.

Rules:

- Do not implement yet.
- Do not edit files yet.
- Do not stage, commit, or push.
- Do not touch CEO Briefing.
- Do not create or restore `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not make backend, Firebase, Hermes, package, native, build, release, auth, database, or deployment changes.
- Do not add heavy test tooling unless the repo already supports it or you explicitly ask for approval first.

Wait for approval before making changes.
```

---

# Codex Apply-Pack Prompt

Use this first, before implementation:

```text
Apply Sprint 030 Architect Pack to the Trina project folder.

Architect Pack path:

architect-packs/trina-030-lightweight-ui-smoke-coverage-and-label-consistency-architect-pack.md

Rules:

- Read the Architect Pack first.
- Create or update only the planning and documentation files named inside the pack.
- Do not modify runtime app files yet.
- Do not modify App.tsx.
- Do not modify components.
- Do not implement smoke coverage yet.
- Do not touch CEO Briefing.
- Do not create or restore references/flutterflow/sprint-009/ceo-briefing.png.
- Keep Sprint 023 app-completion reset protected.
- Keep this as a planning/docs application step only.

Expected files to create:

- planning/sprints/030-lightweight-ui-smoke-coverage-and-label-consistency/requirements.md
- planning/sprints/030-lightweight-ui-smoke-coverage-and-label-consistency/blueprint.md
- planning/sprints/030-lightweight-ui-smoke-coverage-and-label-consistency/acceptance.md
- planning/sprints/030-lightweight-ui-smoke-coverage-and-label-consistency/handoff-prompt.md

Expected files to update:

- planning/STATE.md
- planning/DECISIONS.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md

Do not stage, commit, push, or implement code.

After applying, report:

1. Files created.
2. Files updated.
3. Any files skipped and why.
4. Confirmation that no runtime app files changed.
5. Confirmation that CEO Briefing remained untouched.
6. Confirmation that references/flutterflow/sprint-009/ceo-briefing.png is still absent.
7. git status --branch --short.
8. git diff --name-only.
9. git diff --check.
```
