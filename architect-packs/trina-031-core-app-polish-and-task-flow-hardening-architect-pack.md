# Trina Sprint 031 Architect Pack

**Sprint:** `031-core-app-polish-and-task-flow-hardening`
**Project:** Trina
**Layer:** Architect
**Pack type:** Runtime polish planning pack
**Date:** 2026-05-31

---

## 1. Architect Intent

Sprint 031 is a narrow runtime polish sprint.

The purpose is to improve the finished-app feel of the existing Trina app shell without expanding scope, changing architecture, or reopening deferred work.

This sprint should focus on small, confirmed UI and task-flow issues only.

The Builder must inspect the current app first, then make the smallest safe changes needed to improve confidence across:

- Home / Dashboard
- Assistant / Voice Entry
- Tasks
- Notifications
- Calendar
- Finance
- Knowledge Base

Sprint 031 must preserve the Sprint 023 app-completion reset and the Sprint 030 smoke-validation baseline.

---

## 2. Non-Negotiable Scope Protection

The Builder must not touch, create, restore, implement, reference as complete, or attempt to fix the CEO Briefing page.

The following file must remain absent:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Sprint 031 is not a backend sprint.

Sprint 031 is not a Firebase sprint.

Sprint 031 is not a Hermes sprint.

Sprint 031 is not a package/dependency sprint.

Sprint 031 is not a release, deployment, native build, auth, database, live AI, or FlutterFlow export sprint.

---

## 3. Files This Architect Pack Creates or Updates

Codex should apply this Architect Pack by creating or updating these planning and documentation files only:

```text
architect-packs/trina-031-core-app-polish-and-task-flow-hardening-architect-pack.md
planning/STATE.md
planning/RISKS.md
planning/QUESTIONS.md
docs/VALIDATION.md
planning/sprints/031-core-app-polish-and-task-flow-hardening/requirements.md
planning/sprints/031-core-app-polish-and-task-flow-hardening/blueprint.md
planning/sprints/031-core-app-polish-and-task-flow-hardening/acceptance.md
planning/sprints/031-core-app-polish-and-task-flow-hardening/handoff-prompt.md
```

Codex should update `planning/DECISIONS.md` only if it finds a new durable decision is needed while applying this pack.

Codex should update `docs/ARCHITECTURE.md` only if it discovers an architecture-facing clarification is required.

Codex should update `docs/API.md` only if this sprint changes any interfaces, contracts, commands, inputs, outputs, or API behavior.

Expected result: no architecture or API changes should be needed for Sprint 031.

---

## 4. Architect-Facing Requirements

### Requirement 1 — Preserve the completed app direction

Sprint 031 must build forward from the current Trina app state.

It must not revert earlier work, remove working app sections, or reintroduce stale CEO Briefing assumptions.

### Requirement 2 — Improve finished-app feel through small polish only

Sprint 031 should identify and fix small UI, copy, empty-state, or navigation confidence issues in the core runtime.

Acceptable changes include:

- clearer button labels
- better empty-state copy
- safer disabled-state messaging
- small navigation clarity fixes
- consistent terminology
- small task-flow guardrails
- improved task visibility feedback
- minor accessibility clarity where already obvious

Unacceptable changes include:

- redesigning the app shell
- adding new major features
- changing app architecture
- changing storage architecture
- adding dependencies
- changing auth or database assumptions
- touching backend / Firebase / Hermes surfaces

### Requirement 3 — Preserve typed Assistant capture

Typed Assistant capture must continue to create tasks and route the user to Tasks.

No Sprint 031 change may weaken this path.

### Requirement 4 — Preserve speech capture path

Speech capture must remain preserved by code inspection at minimum.

If browser microphone permission is available, live speech capture can be smoke-tested.

If microphone permission is blocked, document that live speech remains blocked and verify the transcript-to-task path by code inspection.

### Requirement 5 — Keep validation lightweight

Sprint 031 should use existing commands and manual smoke validation.

Do not add test frameworks, E2E frameworks, dependencies, package scripts, or package lock changes unless separately approved.

### Requirement 6 — Update planning state

`planning/STATE.md` must reflect Sprint 031 as the active sprint after the Architect Pack is applied.

After implementation, it must reflect Sprint 031 completion status accurately.

---

## 5. Builder-Facing Implementation Plan

### Phase 1 — Apply planning pack only

Create the Sprint 031 folder and files.

Update planning and validation docs to identify Sprint 031 as the next active sprint.

Do not modify runtime app files during the planning/docs-only pass.

### Phase 2 — Read before implementation

Before implementation, Codex must read:

```text
AGENTS.md
planning/STATE.md
planning/DECISIONS.md
planning/DOMAIN.md
planning/RISKS.md
planning/QUESTIONS.md
docs/VALIDATION.md
planning/sprints/031-core-app-polish-and-task-flow-hardening/requirements.md
planning/sprints/031-core-app-polish-and-task-flow-hardening/blueprint.md
planning/sprints/031-core-app-polish-and-task-flow-hardening/acceptance.md
```

Then Codex must summarize:

1. What Sprint 031 is supposed to accomplish.
2. Which files it expects to modify.
3. What tests or validation it will run.
4. Any blockers or ambiguities.
5. How it will protect CEO Briefing deferral.
6. How it will avoid unrelated runtime, backend, Firebase, Hermes, package, native, build, release, deployment, auth, database, or live AI files.

Codex must not implement until the summary is approved.

### Phase 3 — Inspect runtime polish targets

After approval, Codex should inspect current runtime behavior in these areas:

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

The Builder should look for confirmed issues only.

Examples:

- unclear empty states
- inconsistent terminology
- unclear active states
- task flow confusion
- stale copy
- broken or unclear secondary actions
- missing guidance after task capture
- obvious accessibility label drift

### Phase 4 — Make smallest safe runtime fixes

Make only small, targeted edits.

Expected likely files:

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
docs/VALIDATION.md
planning/STATE.md
planning/QUESTIONS.md
```

Not all listed runtime files should change.

The preferred outcome is fewer changes, not more changes.

### Phase 5 — Validate

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

Also perform manual smoke validation:

- Home / Dashboard reachable
- Bottom navigation works
- Active navigation state visible
- Assistant / Voice Entry reachable
- Typed Assistant capture creates a task
- Captured task is visible in Tasks
- Speech capture path preserved or live-tested if microphone permission is available
- Notifications copy remains consistent
- Knowledge Base label consistency remains correct
- Calendar and Finance empty states remain understandable
- CEO Briefing remains untouched and absent

---

## 6. Acceptance Criteria

Sprint 031 is complete only when all applicable criteria are true:

### Runtime acceptance

- Home / Dashboard remains reachable.
- Bottom navigation remains usable.
- Active navigation state remains clear.
- Assistant / Voice Entry remains reachable.
- Typed Assistant capture still creates a task.
- Typed Assistant capture still routes or exposes the captured task in Tasks.
- Speech capture path remains preserved by code inspection.
- If browser microphone permission is available, speech capture is smoke-tested live.
- If microphone permission is denied, that limitation is documented.
- Tasks view has clear copy and usable empty / populated states.
- Notifications view has clear copy and does not regress to Alerts wording unless intentionally justified.
- Calendar view has clear copy and usable empty state.
- Finance view has clear copy and usable empty state.
- Knowledge Base terminology remains consistent.
- No major feature is added.
- No app shell rewrite is performed.

### Scope acceptance

- CEO Briefing stays deferred and untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- No backend files are changed.
- No Firebase files are changed.
- No Hermes files are changed.
- No package/dependency files are changed.
- No native build files are changed.
- No release/deployment files are changed.
- No auth/database/live AI work is added.
- No FlutterFlow export files are touched.

### Documentation acceptance

- `docs/VALIDATION.md` includes Sprint 031 validation notes.
- `planning/STATE.md` reflects Sprint 031 status.
- `planning/QUESTIONS.md` is updated only if a real blocker remains.
- `planning/RISKS.md` is updated only if new risk is introduced or an existing risk changes.
- `planning/DECISIONS.md` is updated only if a durable decision changes.

### Validation acceptance

The following commands pass or have documented existing warnings:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

`git diff --cached --name-only` must show no staged files before commit approval.

---

## 7. Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Runtime polish expands into redesign | Scope creep and regression risk | Require confirmed issues only and smallest safe edits |
| Task capture path regresses | Breaks core app behavior | Inspect and smoke-test typed capture after changes |
| Speech capture cannot be live-tested | Acceptance uncertainty | Document permission limitation and verify code path |
| CEO Briefing gets reopened accidentally | Reintroduces known blocker | Explicit absence guard and out-of-scope rule |
| Package/dependency churn | Adds avoidable complexity | No package changes without explicit approval |
| Empty-state edits become product decisions | Builder invents UX strategy | Keep changes copy-level and confidence-focused |

---

## 8. Questions

Open only if true after implementation:

1. Can browser microphone permission be granted to live-test speech capture?
2. Did runtime inspection reveal any confirmed polish gaps that should become a later sprint instead of being fixed in Sprint 031?

Do not keep generic tooling questions open if inspection resolves them.

---

## 9. Sprint Files to Create

### `planning/sprints/031-core-app-polish-and-task-flow-hardening/requirements.md`

```markdown
# Sprint 031 Requirements — Core App Polish and Task Flow Hardening

## Goal

Improve the finished-app feel of the core Trina runtime by tightening task flow, navigation clarity, empty states, and small UI consistency issues without expanding scope.

## Scope

- Review Home/Dashboard, Assistant, Tasks, Notifications, Calendar, Finance, and Knowledge Base for small polish gaps.
- Fix only confirmed UI/copy/state issues that affect app confidence.
- Preserve typed and speech task capture paths.
- Update validation and state docs.

## Out of Scope

- CEO Briefing
- Backend work
- Firebase work
- Hermes work
- Package/dependency changes
- Native/build/release/deployment files
- New major features
- Auth/database/live AI work
- FlutterFlow export work

## Requirements

1. Preserve the completed app direction from Sprint 023 onward.
2. Preserve Sprint 030 smoke-validation baseline.
3. Improve only confirmed core runtime polish gaps.
4. Keep task capture paths working.
5. Keep terminology consistent across app sections.
6. Keep manual validation lightweight and repeatable.
7. Keep CEO Briefing deferred and untouched.
```

### `planning/sprints/031-core-app-polish-and-task-flow-hardening/blueprint.md`

```markdown
# Sprint 031 Blueprint — Core App Polish and Task Flow Hardening

## Implementation Strategy

Work in two passes.

First, inspect the app shell and identify only confirmed small polish gaps.

Second, make the smallest safe edits needed to improve confidence without changing architecture, dependencies, or scope.

## Inspection Targets

- `App.tsx`
- `components/Navigation.tsx`
- `components/Dashboard.tsx`
- `components/VoiceDashboard.tsx`
- `components/TasksView.tsx`
- `components/NotificationsView.tsx`
- `components/CalendarView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`

## Likely Edit Targets

Only edit files where a confirmed Sprint 031 issue exists.

Likely candidates:

- `components/VoiceDashboard.tsx`
- `components/TasksView.tsx`
- `components/NotificationsView.tsx`
- `components/CalendarView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`
- `docs/VALIDATION.md`
- `planning/STATE.md`
- `planning/QUESTIONS.md`

## Guardrails

- Do not touch CEO Briefing.
- Do not create `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not edit package files.
- Do not add dependencies.
- Do not add backend, Firebase, Hermes, auth, database, native, build, release, deployment, live AI, or FlutterFlow export work.
- Do not redesign the app.
- Do not introduce new major features.

## Validation

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

Manual smoke:

- Home / Dashboard reachable
- Bottom navigation works
- Active navigation state visible
- Assistant / Voice Entry reachable
- Typed Assistant capture creates a task
- Captured task visible in Tasks
- Speech capture preserved or live-tested
- Notifications copy remains consistent
- Knowledge Base label consistency remains correct
- Calendar and Finance empty states remain understandable
- CEO Briefing absent
```

### `planning/sprints/031-core-app-polish-and-task-flow-hardening/acceptance.md`

```markdown
# Sprint 031 Acceptance — Core App Polish and Task Flow Hardening

Sprint 031 is complete only when the criteria below are satisfied.

## Runtime

- Home / Dashboard remains reachable.
- Bottom navigation remains usable.
- Active navigation state remains clear.
- Assistant / Voice Entry remains reachable.
- Typed Assistant capture creates a task.
- Captured task is visible in Tasks.
- Speech capture path is preserved by code inspection.
- Speech capture is live-tested if microphone permission is available.
- If microphone permission is denied, the limitation is documented.
- Tasks copy and empty / populated states are clear.
- Notifications copy remains clear and consistent.
- Calendar copy and empty state are clear.
- Finance copy and empty state are clear.
- Knowledge Base terminology remains consistent.

## Scope Protection

- CEO Briefing remains deferred and untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- No backend files changed.
- No Firebase files changed.
- No Hermes files changed.
- No package/dependency files changed.
- No native/build/release/deployment files changed.
- No auth/database/live AI work added.
- No FlutterFlow export files touched.

## Validation

- `npm run lint` passes.
- `npm run build` passes or only shows documented existing warnings.
- `git diff --check` passes.
- `test ! -f references/flutterflow/sprint-009/ceo-briefing.png` passes.
- Manual smoke results are reported item by item.
- Nothing is staged, committed, or pushed until explicitly approved.
```

### `planning/sprints/031-core-app-polish-and-task-flow-hardening/handoff-prompt.md`

```markdown
# Sprint 031 Handoff Prompt — Core App Polish and Task Flow Hardening

Read the Sprint 031 planning files before making changes.

Sprint folder:

`planning/sprints/031-core-app-polish-and-task-flow-hardening/`

Read these files first:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/031-core-app-polish-and-task-flow-hardening/requirements.md`
- `planning/sprints/031-core-app-polish-and-task-flow-hardening/blueprint.md`
- `planning/sprints/031-core-app-polish-and-task-flow-hardening/acceptance.md`

Then summarize:

1. What Sprint 031 is supposed to accomplish.
2. Which files you expect to modify.
3. What tests or validation steps you will run.
4. Any blockers or ambiguities.
5. How you will protect the CEO Briefing deferral.
6. How you will avoid touching unrelated runtime, backend, Firebase, Hermes, package, native, build, release, deployment, auth, database, live AI, or FlutterFlow export files.

Do not implement anything yet.
Do not stage, commit, or push.
Do not modify files until the summary is approved.
```

---

## 10. Codex Apply-Pack Prompt

Use this prompt only after this Architect Pack is saved.

```text
Apply the Sprint 031 Architect Pack as a planning/docs-only pass.

Architect Pack:

architect-packs/trina-031-core-app-polish-and-task-flow-hardening-architect-pack.md

Create or update only the planning/docs files described in the pack:

- planning/STATE.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/031-core-app-polish-and-task-flow-hardening/requirements.md
- planning/sprints/031-core-app-polish-and-task-flow-hardening/blueprint.md
- planning/sprints/031-core-app-polish-and-task-flow-hardening/acceptance.md
- planning/sprints/031-core-app-polish-and-task-flow-hardening/handoff-prompt.md

Also create the architect pack file itself if it is not already present:

- architect-packs/trina-031-core-app-polish-and-task-flow-hardening-architect-pack.md

Do not modify runtime app files.
Do not modify App.tsx.
Do not modify components/*.
Do not modify backend, Firebase, Hermes, package, native, build, release, deployment, auth, database, live AI, FlutterFlow export, or secret-bearing files.
Do not create or restore references/flutterflow/sprint-009/ceo-briefing.png.
Do not stage, commit, or push.

After applying the pack, report:

1. Files created.
2. Files updated.
3. Files intentionally skipped.
4. Git status.
5. Confirmation that CEO Briefing stayed untouched and absent.
6. Confirmation that no runtime files changed.
```

---

## 11. Post-Pack Next Step

After Codex applies this planning/docs-only pack and reports back, the next step is not implementation.

The next step is the Sprint 031 read-before-implementation prompt from:

```text
planning/sprints/031-core-app-polish-and-task-flow-hardening/handoff-prompt.md
```

Codex must summarize before implementation.
