# Sprint 037 Architect Pack — Fixture Guard and Core Regression Validation

**Project:** Trina Voice / TrinaOS Voice
**Repo:** `/Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice`
**Sprint:** `037-fixture-guard-and-core-regression-validation`
**Architect Layer:** ChatGPT
**Builder Layer:** Codex
**Date:** 2026-06-01

---

## Architect Pack Purpose

Sprint 036 closed the reminder-backed notification validation gap by adding a local validation fixture behind query parameters:

- `?trinaReminderFixture=1`
- `?trinaStart=notifications`

Sprint 037 should harden that new validation path without expanding the app scope.

The goal is to confirm the fixture is safe, local-only, clearly documented, and does not create drift in the core Dashboard, Notifications, Tasks, or Assistant flow.

This is a small validation-hardening sprint.

It is not a new feature sprint.

---

## Non-Negotiable Boundaries

- Do not touch CEO Briefing.
- Do not create `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not modify backend, Firebase, package/dependency, native, build, release, deployment, or production SaaS files.
- Do not introduce auth, database, cloud sync, CRM, invoicing, multi-user permissions, or dashboard expansion.
- Do not expand Notifications into a new product feature.
- Do not remove the Sprint 036 fixture unless it is proven unsafe and replaced by an equally repeatable local validation path.
- Prefer documentation and validation tightening over runtime changes.

---

## Files Codex Must Create or Update

### Required new sprint folder

Create:

```text
planning/sprints/037-fixture-guard-and-core-regression-validation/
```

Create these files:

```text
planning/sprints/037-fixture-guard-and-core-regression-validation/requirements.md
planning/sprints/037-fixture-guard-and-core-regression-validation/blueprint.md
planning/sprints/037-fixture-guard-and-core-regression-validation/acceptance.md
planning/sprints/037-fixture-guard-and-core-regression-validation/handoff-prompt.md
```

### Required planning/doc updates

Update:

```text
planning/STATE.md
docs/VALIDATION.md
```

### Conditional updates

Update only if needed:

```text
planning/RISKS.md
planning/QUESTIONS.md
planning/DECISIONS.md
docs/ARCHITECTURE.md
docs/API.md
```

Use the conditions below:

- `planning/RISKS.md`: update if fixture leakage, query-param drift, or validation brittleness remains a risk.
- `planning/QUESTIONS.md`: update if Codex finds an unresolved question about fixture behavior or validation ownership.
- `planning/DECISIONS.md`: update only if Sprint 037 creates a durable decision about local validation fixtures.
- `docs/ARCHITECTURE.md`: update only if the app structure or navigation behavior is changed.
- `docs/API.md`: update only if query parameters are treated as a documented local interface for validation.

---

# File: `planning/sprints/037-fixture-guard-and-core-regression-validation/requirements.md`

```markdown
# Sprint 037 Requirements — Fixture Guard and Core Regression Validation

## Purpose

Sprint 037 hardens the local validation fixture introduced in Sprint 036 and verifies the core app paths still behave correctly.

Sprint 036 added a local-only path for proving reminder-backed notification rendering:

- `?trinaReminderFixture=1`
- `?trinaStart=notifications`

Sprint 037 must confirm this path is safe, repeatable, documented, and does not regress Dashboard, Notifications, Assistant typed capture, Tasks rendering, bottom navigation, or mobile layout.

## Background

Sprint 036 closed the prior validation gap by making the populated reminder notification path testable in the browser.

The next risk is not feature completeness.

The next risk is validation drift:

- the fixture could become unclear to future builders
- the query parameters could be mistaken for production functionality
- the local proof path could break without being noticed
- core navigation and task flow could regress while the fixture still passes

## Scope

### In scope

- Confirm the reminder fixture is local/dev validation only.
- Confirm the fixture does not create production product behavior.
- Confirm the fixture path is documented in `docs/VALIDATION.md`.
- Confirm Dashboard badge count aligns with the Notifications list when the fixture is active.
- Confirm Notifications empty/fallback state still renders when the fixture is not active.
- Confirm `?trinaStart=notifications` still opens Notifications directly.
- Confirm Assistant typed task capture still creates a visible task.
- Confirm Tasks view still renders created tasks.
- Confirm bottom nav active state still works.
- Confirm mobile viewport around `390x844` has no fixed bottom-nav overlap.
- Update planning state to mark Sprint 037 as active and then ready for completion after validation.

### Out of scope

- CEO Briefing work.
- FlutterFlow CEO Briefing evidence.
- Backend work.
- Firebase work.
- Package or dependency changes.
- Native app changes.
- Build, release, or deployment work.
- Notification product expansion.
- Reminder scheduling engine work.
- Live data integration.
- Auth or permission work.
- New dashboard sections.

## Preferred Result

Prefer docs/validation/planning updates only if inspection shows the Sprint 036 fixture is already safe and clear.

Runtime changes are allowed only if Codex finds a concrete fixture safety issue or validation gap that cannot be closed with documentation.

## Runtime Change Standard

If runtime changes are needed, they must be narrow and limited to files directly involved in the Sprint 036 fixture or core validation path.

Do not refactor unrelated app code.

Do not redesign UI.

Do not add dependencies.

## Success Definition

Sprint 037 succeeds when a future Builder can read the project files and know:

1. Why the fixture exists.
2. How to run the fixture path.
3. Why the fixture is local validation only.
4. What core regression checks must pass around it.
5. That CEO Briefing and deferred areas remain untouched.
```

---

# File: `planning/sprints/037-fixture-guard-and-core-regression-validation/blueprint.md`

```markdown
# Sprint 037 Blueprint — Fixture Guard and Core Regression Validation

## Implementation Strategy

Start with inspection.

Do not modify files until the existing Sprint 036 fixture behavior is understood.

The preferred outcome is docs/planning-only cleanup if the current implementation already satisfies the sprint requirements.

## Step 1 — Read project context

Read:

```text
AGENTS.md
planning/STATE.md
planning/DECISIONS.md
planning/DOMAIN.md
planning/RISKS.md
planning/QUESTIONS.md
docs/VALIDATION.md
planning/sprints/036-reminder-validation-fixture-and-notification-empty-state-hardening/requirements.md
planning/sprints/036-reminder-validation-fixture-and-notification-empty-state-hardening/blueprint.md
planning/sprints/036-reminder-validation-fixture-and-notification-empty-state-hardening/acceptance.md
planning/sprints/037-fixture-guard-and-core-regression-validation/requirements.md
planning/sprints/037-fixture-guard-and-core-regression-validation/acceptance.md
```

## Step 2 — Inspect current implementation

Inspect only as needed:

```text
App.tsx
components/Dashboard.tsx
components/NotificationsView.tsx
components/Navigation.tsx
components/TasksView.tsx
types.ts
```

Also inspect any existing reminder or notification helper files already in use.

## Step 3 — Determine whether runtime changes are needed

Answer these before editing:

1. Is the Sprint 036 fixture guarded so it is clearly local/dev validation only?
2. Can `?trinaReminderFixture=1` create a populated reminder-backed notification?
3. Can `?trinaStart=notifications` open Notifications directly?
4. Does the fixture avoid changing normal empty/fallback notification behavior?
5. Is the fixture documented well enough for future validation?

If all answers are yes, do not touch runtime.

If any answer is no, make the smallest possible runtime change.

## Step 4 — Documentation updates

Update `docs/VALIDATION.md` with a compact Sprint 037 validation section that includes:

- local fixture URL for Dashboard badge proof
- local fixture URL for direct Notifications proof
- expected visible notification content
- expected empty/fallback check without fixture
- Assistant typed task capture check
- Tasks visible-task check
- bottom navigation active-state check
- mobile viewport check around `390x844`
- CEO Briefing absence guard

## Step 5 — Planning updates

Update `planning/STATE.md` to reflect Sprint 037 status.

Update `planning/RISKS.md` only if the fixture still creates risk.

Update `planning/QUESTIONS.md` only if a question remains open or gets answered.

Update `planning/DECISIONS.md` only if a durable decision is made about local validation fixtures.

## Step 6 — Runtime update rules, only if needed

Allowed runtime files, only if directly necessary:

```text
App.tsx
components/Dashboard.tsx
components/NotificationsView.tsx
components/Navigation.tsx
components/TasksView.tsx
types.ts
```

Rules:

- Keep the fixture query-param based.
- Keep it local/dev validation only.
- Do not add external services.
- Do not add storage migrations.
- Do not add packages.
- Do not alter CEO Briefing.
- Do not create evidence screenshots.

## Step 7 — Validation commands

Run:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

## Step 8 — Manual browser validation

Run local browser checks for:

1. Dashboard/Home reachable.
2. Notifications reachable.
3. Notifications empty/fallback state readable without fixture.
4. Populated reminder-backed notification visible with fixture.
5. Dashboard notification count aligned with Notifications list.
6. Assistant typed task capture creates a visible task.
7. Tasks view renders created tasks.
8. Bottom nav active state works.
9. Mobile viewport around `390x844` has no fixed bottom-nav overlap.

## Step 9 — Completion report

Report:

1. Whether runtime changes were needed.
2. Files changed.
3. Validation command results.
4. Manual/browser validation results.
5. Whether any risks remain.
6. Whether any questions remain.
7. Confirmation CEO Briefing remained untouched.
8. Confirmation no staging, commit, or push was performed unless explicitly approved later.
```

---

# File: `planning/sprints/037-fixture-guard-and-core-regression-validation/acceptance.md`

```markdown
# Sprint 037 Acceptance — Fixture Guard and Core Regression Validation

## Complete Criteria

Sprint 037 is complete only when all required criteria below are satisfied.

### Fixture guard

- [ ] The Sprint 036 reminder fixture remains local/dev validation only.
- [ ] `?trinaReminderFixture=1` creates a populated reminder-backed notification through a repeatable local path.
- [ ] `?trinaStart=notifications` opens Notifications directly through a repeatable local path.
- [ ] The fixture is not documented or treated as a production user feature.
- [ ] Normal Notifications empty/fallback state remains readable when the fixture is not active.

### Core app regression checks

- [ ] Dashboard/Home remains reachable.
- [ ] Notifications remains reachable.
- [ ] Dashboard notification count aligns with the populated Notifications list when the fixture is active.
- [ ] Assistant typed task capture still creates a visible task.
- [ ] Tasks view still renders created tasks.
- [ ] Bottom nav active state still works.
- [ ] Mobile viewport around `390x844` has no fixed bottom-nav overlap.

### Documentation and planning

- [ ] `docs/VALIDATION.md` includes the Sprint 037 repeatable validation path.
- [ ] `planning/STATE.md` reflects Sprint 037 accurately.
- [ ] `planning/RISKS.md` is updated if fixture or validation risks changed.
- [ ] `planning/QUESTIONS.md` is updated if fixture or validation questions were answered or remain open.
- [ ] `planning/DECISIONS.md` is updated only if a durable fixture policy decision was made.

### Guardrails

- [ ] CEO Briefing was not touched.
- [ ] `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- [ ] No backend files were modified.
- [ ] No Firebase files were modified.
- [ ] No package/dependency files were modified.
- [ ] No native files were modified.
- [ ] No build, release, or deployment files were modified.
- [ ] No staging, commit, or push was performed unless separately approved after completion review.

## Required validation commands

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

## Incomplete Criteria

Mark the sprint incomplete if any of these are true:

- The reminder fixture cannot be run through a repeatable local URL.
- The fixture is available in a way that looks like production functionality.
- Notifications empty/fallback state breaks.
- Dashboard count does not align with the fixture list.
- Assistant typed task capture regresses.
- Tasks view no longer shows created tasks.
- Mobile bottom nav overlaps important content.
- CEO Briefing is touched.
- `ceo-briefing.png` is created.
- Backend, Firebase, package, native, build, release, or deployment files are modified.
```

---

# File: `planning/sprints/037-fixture-guard-and-core-regression-validation/handoff-prompt.md`

```markdown
# Sprint 037 Handoff Prompt — Fixture Guard and Core Regression Validation

Paste this into Codex after the Sprint 037 planning files are created.

---

You are starting Sprint 037 implementation.

Repo:
`/Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice`

Sprint:
`planning/sprints/037-fixture-guard-and-core-regression-validation/`

Read these files before making any changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/036-reminder-validation-fixture-and-notification-empty-state-hardening/requirements.md
- planning/sprints/036-reminder-validation-fixture-and-notification-empty-state-hardening/blueprint.md
- planning/sprints/036-reminder-validation-fixture-and-notification-empty-state-hardening/acceptance.md
- planning/sprints/037-fixture-guard-and-core-regression-validation/requirements.md
- planning/sprints/037-fixture-guard-and-core-regression-validation/blueprint.md
- planning/sprints/037-fixture-guard-and-core-regression-validation/acceptance.md

Important boundaries:

- Do not touch CEO Briefing.
- Do not create `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not modify backend, Firebase, package, native, build, release, or deployment files.
- Do not add packages or dependencies.
- Do not expand Notifications into a new product feature.
- Do not stage, commit, or push.
- Do not implement yet.

After reading, summarize:

1. What Sprint 037 is supposed to accomplish.
2. Which files you expect to inspect.
3. Which files you expect to modify, if any.
4. Whether runtime changes appear necessary or docs/planning-only may be enough.
5. What validation commands you will run.
6. What browser/manual checks you will run.
7. Any blockers or ambiguities.
8. Whether the sprint can be completed without touching CEO Briefing or deferred areas.

Stop after the summary and wait for approval before making changes.
```

---

# Required `planning/STATE.md` Update

Codex should update `planning/STATE.md` to show Sprint 037 as the active sprint.

Suggested wording:

```markdown
## Current Status

Sprint 036 is complete and pushed. Sprint 037 is active as a validation-hardening sprint focused on guarding the local reminder notification fixture and confirming core app regression paths.

## Active Sprint

`planning/sprints/037-fixture-guard-and-core-regression-validation/`

## Recently Completed

- Sprint 036 added a local reminder-backed notification validation fixture behind query parameters.
- Sprint 036 documented the repeatable populated Notifications proof path.
- Sprint 036 remained clear of CEO Briefing and deferred areas.

## Next Actions

- Apply Sprint 037 planning files.
- Have Codex read Sprint 037 files and summarize before implementation.
- Inspect the Sprint 036 fixture guard.
- Prefer docs/planning-only validation hardening unless a concrete runtime gap is found.

## Guardrails

- CEO Briefing remains deferred.
- `references/flutterflow/sprint-009/ceo-briefing.png` must remain absent.
- No backend, Firebase, package, native, build, release, or deployment changes unless a future approved sprint explicitly allows them.
```

---

# Required `docs/VALIDATION.md` Update

Codex should add a Sprint 037 validation section.

Suggested wording:

```markdown
## Sprint 037 — Fixture Guard and Core Regression Validation

Sprint 037 validates that the Sprint 036 local reminder notification fixture remains safe, repeatable, and limited to local validation.

### Local fixture paths

Dashboard badge proof:

```text
/?trinaReminderFixture=1
```

Direct populated Notifications proof:

```text
/?trinaReminderFixture=1&trinaStart=notifications
```

Expected populated notification content:

- `Fixture reminder`
- `Local validation reminder for Sprint 036.`
- `Reminder` pill

### Empty state proof

Open Notifications without `trinaReminderFixture=1` and confirm the empty/fallback copy remains readable.

### Core regression checks

- Dashboard/Home reachable.
- Notifications reachable.
- Dashboard notification count aligns with the Notifications list when fixture is active.
- Assistant typed task capture creates a visible task.
- Tasks view renders created tasks.
- Bottom nav active state works.
- Mobile viewport around `390x844` has no fixed bottom-nav overlap.

### Required commands

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```
```

---

# Codex Apply-Pack Prompt

Use this first. This prompt applies the Architect Pack to the project folder as planning/docs only.

```text
Apply the Sprint 037 Architect Pack as planning/docs only.

Repo:
`/Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice`

Create:

- `planning/sprints/037-fixture-guard-and-core-regression-validation/requirements.md`
- `planning/sprints/037-fixture-guard-and-core-regression-validation/blueprint.md`
- `planning/sprints/037-fixture-guard-and-core-regression-validation/acceptance.md`
- `planning/sprints/037-fixture-guard-and-core-regression-validation/handoff-prompt.md`

Update:

- `planning/STATE.md`
- `docs/VALIDATION.md`

Update only if needed:

- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `planning/DECISIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`

Rules:

- Planning/docs only.
- Do not modify runtime code.
- Do not modify backend, Firebase, package, native, build, release, deployment, or CEO Briefing files.
- Do not create `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not stage, commit, or push.
- Keep Sprint 037 narrow: fixture guard and core regression validation only.
- Use the Architect Pack content exactly unless a file already contains newer relevant state that should be preserved.

After applying, run:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

Report:

1. Files created.
2. Files updated.
3. Validation results.
4. Final git status.
5. Confirmation no runtime, backend, Firebase, package, native, build, release, deployment, or CEO Briefing files were touched.
6. Confirmation no staging, commit, or push was performed.
```

---

# After Codex Applies the Pack

Do not ask Codex to implement yet.

The next step after the pack is applied is to paste the Sprint 037 read-first prompt from:

```text
planning/sprints/037-fixture-guard-and-core-regression-validation/handoff-prompt.md
```

Codex must summarize before making changes.
