# Architect Pack — Sprint 036 Reminder Validation Fixture and Notification Empty-State Hardening

**Project:** Trina
**Sprint:** 036
**Sprint name:** `036-reminder-validation-fixture-and-notification-empty-state-hardening`
**Pack file:** `architect-packs/trina-036-reminder-validation-fixture-and-notification-empty-state-hardening-architect-pack.md`
**Mode:** Architect Pack first. Planning/docs first. Runtime only after Codex reads sprint files and receives approval.
**CEO Briefing:** Protected. Do not touch.

---

## 1. Architect Intent

Sprint 035 closed clean as a notification/reminder validation sprint with no runtime changes. The only uncertainty was that no live pending Firestore reminder existed in the local browser session, so populated reminder delivery was validated by code inspection instead of live browser behavior.

Sprint 036 should close that gap without expanding the product.

The sprint should add or validate a safe, local-only way to prove the populated reminder/notification rendering path in the browser. The goal is not to build a full scheduling system, not to add push notifications, and not to change backend behavior.

The expected outcome is a tighter local validation path for reminder-backed notification items and clearer documentation for how future builders prove this flow without needing live production data.

---

## 2. Scope Boundary

### In scope

- Create Sprint 036 planning files.
- Update current state, risks, questions, and validation docs.
- Define a narrow runtime implementation option only if needed after inspection:
  - local dev-only fixture/test path, or
  - existing browser/local data seeding path, or
  - small test/helper function using existing notification/reminder structures.
- Validate populated notification/reminder UI in browser.
- Confirm Dashboard/Home, Notifications, Tasks, Assistant typed capture, mobile bottom-nav spacing, and active nav state still work.

### Out of scope

- CEO Briefing page.
- `references/flutterflow/sprint-009/ceo-briefing.png`.
- Backend delivery.
- Firebase schema changes.
- Firestore rules.
- Push notifications.
- Email/SMS notifications.
- New notification categories.
- New reminder scheduling system.
- Package/dependency changes.
- Native, build, release, or deployment changes.
- Redesign or dashboard expansion.
- Multi-user permission work.

---

## 3. Files This Pack Creates or Updates

Codex should create or update the following files only during the Architect Pack application step.

```text
architect-packs/trina-036-reminder-validation-fixture-and-notification-empty-state-hardening-architect-pack.md
planning/STATE.md
planning/RISKS.md
planning/QUESTIONS.md
docs/VALIDATION.md
planning/sprints/036-reminder-validation-fixture-and-notification-empty-state-hardening/requirements.md
planning/sprints/036-reminder-validation-fixture-and-notification-empty-state-hardening/blueprint.md
planning/sprints/036-reminder-validation-fixture-and-notification-empty-state-hardening/acceptance.md
planning/sprints/036-reminder-validation-fixture-and-notification-empty-state-hardening/handoff-prompt.md
```

Codex should update these only if the content genuinely changes:

```text
planning/DECISIONS.md
docs/ARCHITECTURE.md
docs/API.md
```

Expected result for this pack: `planning/DECISIONS.md`, `docs/ARCHITECTURE.md`, and `docs/API.md` likely do not need changes unless inspection shows the reminder/notification contract is undocumented or inaccurate.

---

## 4. Required Updates

### 4.1 Update `planning/STATE.md`

Add Sprint 036 as the active sprint.

Suggested state update:

```markdown
## Current Status

Sprint 035 closed clean as a validation/docs-only notification/reminder hardening pass. No runtime changes were needed. Dashboard/Home, Notifications, bottom navigation, mobile layout, shared notification item source, and Assistant typed task capture were validated.

Sprint 036 is active. The goal is to close the remaining populated reminder validation gap by defining and, if needed, implementing a safe local validation fixture or test path for reminder-backed notification items.

## Active Sprint

`planning/sprints/036-reminder-validation-fixture-and-notification-empty-state-hardening/`

## Recently Completed

- Sprint 035 notification/reminder flow validation completed.
- Sprint 035 committed and pushed on `main` with clean status.
- CEO Briefing remained untouched and `references/flutterflow/sprint-009/ceo-briefing.png` remained absent.

## Next Actions

- Apply Sprint 036 planning files.
- Have Codex read Sprint 036 files and summarize before implementation.
- Inspect existing notification/reminder data flow.
- Decide whether a runtime fixture/helper is needed or whether existing test/browser flow is enough.

## Protected Work

- Do not touch CEO Briefing.
- Do not create or modify `references/flutterflow/sprint-009/ceo-briefing.png`.
```

---

### 4.2 Update `planning/RISKS.md`

Add or update a risk about reminder validation depending on live data.

Suggested entry:

```markdown
| Reminder-backed notification validation may depend on live/local browser data that is not always present. | Medium | Medium | Sprint 036 should define a safe local fixture, seed path, or repeatable validation method that proves populated reminder rendering without backend or production data changes. | Active |
```

Keep existing CEO Briefing protection risks intact.

---

### 4.3 Update `planning/QUESTIONS.md`

Add this Sprint 036 question if it is not already answered:

```markdown
## Sprint 036 — Reminder Validation Fixture

| Question | Status | Notes |
|---|---|---|
| Can populated reminder-backed notifications be validated through existing local browser actions, or is a dev-only fixture/helper needed? | Open | Codex should answer after inspecting existing notification/reminder wiring and before making runtime changes. |
```

If answered during Sprint 036, move it to closed/answered wording in the same file.

---

### 4.4 Update `docs/VALIDATION.md`

Add a Sprint 036 validation section.

Suggested section:

```markdown
## Sprint 036 — Reminder Validation Fixture and Notification Empty-State Hardening

Sprint 036 validates the populated reminder-backed notification path that Sprint 035 could only inspect by code because no live pending Firestore reminder existed in the local browser session.

Required validation:

- `npm run lint`
- `npm run build`
- `git diff --check`
- `test ! -f references/flutterflow/sprint-009/ceo-briefing.png`
- `git status --branch --short`

Browser/manual validation:

- Dashboard/Home remains reachable.
- Notifications remains reachable.
- Notifications empty/fallback state remains readable.
- A populated reminder-backed notification item can be seen through a safe local validation path.
- Dashboard notification count and Notifications rendering remain aligned.
- Assistant typed task capture still creates a visible task.
- Tasks view still renders created tasks.
- Bottom navigation active state still works.
- Mobile viewport around `390x844` has no fixed bottom-nav overlap.

If a fixture/helper is added, it must be local-only, easy to remove, and must not require backend, Firebase rules, package, native, build, release, or deployment changes.
```

---

## 5. Sprint Files To Create

Create this folder:

```text
planning/sprints/036-reminder-validation-fixture-and-notification-empty-state-hardening/
```

Create these four files:

```text
requirements.md
blueprint.md
acceptance.md
handoff-prompt.md
```

---

# File: `planning/sprints/036-reminder-validation-fixture-and-notification-empty-state-hardening/requirements.md`

```markdown
# Sprint 036 Requirements — Reminder Validation Fixture and Notification Empty-State Hardening

## Goal

Close the remaining Sprint 035 validation gap by proving the populated reminder-backed notification path in a repeatable local browser workflow.

Sprint 035 confirmed the notification/reminder flow by inspection and browser checks, but no live pending Firestore reminder existed in the local browser session. Sprint 036 should make this validation repeatable without expanding the product or touching backend systems.

## User / Operator Value

The operator needs confidence that Notifications can display real reminder-backed items, not only empty states or code-inspected paths.

Future builders need a clear validation path so they do not guess, overbuild, or introduce backend changes just to test notification UI behavior.

## Requirements

1. Inspect existing reminder/notification wiring before changing runtime code.
2. Determine whether populated reminder-backed notifications can be produced through existing local app behavior.
3. If existing behavior is enough, document the exact local validation path and avoid runtime changes.
4. If existing behavior is not enough, implement the smallest safe local-only fixture/helper needed to validate populated reminder rendering.
5. Keep Dashboard notification count and Notifications rendering aligned to the same source of truth.
6. Preserve Assistant typed task capture into visible Tasks.
7. Preserve Notifications empty/fallback copy.
8. Preserve mobile layout with fixed bottom navigation at about `390x844`.
9. Preserve bottom nav active state.
10. Avoid all out-of-scope systems.

## Non-Goals

- Do not build a new notification system.
- Do not add push notifications.
- Do not add email or SMS notification delivery.
- Do not create a scheduler.
- Do not modify Firebase rules or backend behavior.
- Do not add packages.
- Do not change native, build, release, or deployment files.
- Do not touch CEO Briefing.
- Do not create or modify `references/flutterflow/sprint-009/ceo-briefing.png`.

## Runtime Change Policy

Runtime changes are allowed only if inspection proves there is no existing repeatable way to validate populated reminder-backed notification rendering.

A no-runtime-change result is acceptable if Codex can document and demonstrate a repeatable browser validation path.
```

---

# File: `planning/sprints/036-reminder-validation-fixture-and-notification-empty-state-hardening/blueprint.md`

```markdown
# Sprint 036 Blueprint — Reminder Validation Fixture and Notification Empty-State Hardening

## Operating Rule

Inspect first. Do not implement until the existing data flow is understood.

## Files To Inspect

Start with:

```text
App.tsx
components/Dashboard.tsx
components/NotificationsView.tsx
components/Navigation.tsx
components/TasksView.tsx
types.ts
```

Also inspect any existing local notification/reminder service, utility, storage, or mock file already used by the app.

## Preferred Outcome

Preferred outcome is no runtime changes.

If the existing app can already create or simulate a populated reminder-backed notification item through normal local browser actions, document the steps in `docs/VALIDATION.md` and close the sprint as validation/docs-only.

## Runtime Option If Needed

If no repeatable local validation path exists, implement the smallest safe local-only fixture/helper.

Allowed examples:

- A tiny dev-only seeded reminder item using existing types and existing notification item construction.
- A local-only manual validation helper guarded so it does not affect production-like behavior.
- A test/mock path that proves the same rendering component receives populated reminder data.

Do not create a new product feature.

## Allowed Runtime Files If Needed

Only modify files directly required by the acceptance criteria:

```text
App.tsx
components/Dashboard.tsx
components/NotificationsView.tsx
components/Navigation.tsx
components/TasksView.tsx
types.ts
```

Also allowed: an existing notification/reminder service/helper file if it already exists and is directly involved.

Do not create broad new architecture unless there is no smaller option.

## Documentation Updates

Update:

```text
docs/VALIDATION.md
planning/STATE.md
planning/RISKS.md
planning/QUESTIONS.md
```

Update `planning/DECISIONS.md` only if a durable decision is made, such as adopting a local-only fixture pattern for UI validation.

Update `docs/ARCHITECTURE.md` or `docs/API.md` only if inspection shows current docs are wrong or missing a relevant contract.

## Validation Commands

Run:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git status --branch --short
```

## Browser Validation

Validate:

- Dashboard/Home reachability.
- Notifications reachability.
- Notifications empty/fallback state.
- Populated reminder-backed notification item rendering.
- Dashboard count aligns with Notifications list.
- Assistant typed task capture creates a visible task.
- Tasks view renders created task.
- Bottom nav active state.
- Mobile viewport around `390x844` has no fixed bottom-nav overlap.

## Guardrails

- No CEO Briefing work.
- No `references/flutterflow/sprint-009/ceo-briefing.png`.
- No backend, Firebase rules, Hermes, package/dependency, native, build, release, or deployment changes.
- No staging, commit, or push during implementation/validation unless explicitly approved after the completion report.
```

---

# File: `planning/sprints/036-reminder-validation-fixture-and-notification-empty-state-hardening/acceptance.md`

```markdown
# Sprint 036 Acceptance — Reminder Validation Fixture and Notification Empty-State Hardening

Sprint 036 is complete when all required criteria below are satisfied.

## Required Criteria

- Dashboard/Home remains reachable.
- Notifications remains reachable.
- Notifications empty/fallback copy remains readable.
- A populated reminder-backed notification item can be validated in the browser or through an approved local-only validation path.
- Dashboard notification count and Notifications rendering remain aligned to the same source of truth.
- Assistant typed task capture still creates a visible task.
- Tasks view still renders created tasks.
- Bottom navigation active state still works.
- Mobile viewport around `390x844` has no fixed bottom-nav overlap.
- CEO Briefing remains untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

## Conditional Runtime Criteria

If runtime changes are made:

- Changes are limited to the narrow reminder/notification validation gap.
- No new notification categories are introduced.
- No backend or Firebase rules are changed.
- No package/dependency changes are made.
- No native, build, release, or deployment files are changed.
- Any local fixture/helper is clearly local-only and documented.

## Validation Commands

These must pass or any exception must be clearly documented:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git status --branch --short
```

## Completion Report Must Include

1. Whether runtime changes were needed.
2. Acceptance criteria completed.
3. Acceptance criteria incomplete or uncertain.
4. Files changed.
5. Validation commands run and results.
6. Browser/manual checks completed.
7. Risks introduced.
8. Any decisions that should be added to `planning/DECISIONS.md`.
9. Any status updates that should be added to `planning/STATE.md`.
10. Final `git status --branch --short`.

Do not mark the sprint complete if populated reminder-backed notification rendering is still only assumed and no repeatable validation path is documented.
```

---

# File: `planning/sprints/036-reminder-validation-fixture-and-notification-empty-state-hardening/handoff-prompt.md`

```markdown
# Sprint 036 Handoff Prompt — Reminder Validation Fixture and Notification Empty-State Hardening

Read these files before making changes:

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

Then summarize:

1. What Sprint 036 is supposed to accomplish.
2. Which files you expect to modify.
3. What tests or validation steps you will run.
4. Any blockers, ambiguities, or risks.

Do not start implementation until I approve your summary.

Rules:

- Inspect first.
- Prefer no runtime changes if existing app behavior can validate the populated reminder-backed notification path.
- Make runtime changes only if there is no repeatable local validation path.
- Keep runtime changes narrow and local-only.
- Do not touch CEO Briefing.
- Do not create or modify `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not modify backend, Firebase rules, Hermes, package/dependency, native, build, release, or deployment files.
- Do not stage, commit, or push.

Potential files to inspect:

- `App.tsx`
- `components/Dashboard.tsx`
- `components/NotificationsView.tsx`
- `components/Navigation.tsx`
- `components/TasksView.tsx`
- `types.ts`
- Any existing local notification/reminder storage/service/helper file already used by the app

Validation commands:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git status --branch --short
```

Completion report must include:

1. Whether runtime changes were needed.
2. Acceptance criteria completed.
3. Acceptance criteria incomplete or uncertain.
4. Files changed.
5. Validation commands run and results.
6. Browser/manual checks completed.
7. Risks introduced.
8. Any decisions that should be added to `planning/DECISIONS.md`.
9. Any status updates that should be added to `planning/STATE.md`.
10. Final `git status --branch --short`.
```

---

## 6. Codex Apply-Pack Prompt

Use this prompt to apply this Architect Pack to the project folder only. This is not an implementation prompt.

```text
Apply the Sprint 036 Architect Pack as planning/docs only.

Create or update only the files listed in the pack:

- architect-packs/trina-036-reminder-validation-fixture-and-notification-empty-state-hardening-architect-pack.md
- planning/STATE.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/036-reminder-validation-fixture-and-notification-empty-state-hardening/requirements.md
- planning/sprints/036-reminder-validation-fixture-and-notification-empty-state-hardening/blueprint.md
- planning/sprints/036-reminder-validation-fixture-and-notification-empty-state-hardening/acceptance.md
- planning/sprints/036-reminder-validation-fixture-and-notification-empty-state-hardening/handoff-prompt.md

Update planning/DECISIONS.md, docs/ARCHITECTURE.md, or docs/API.md only if the pack explicitly requires it based on changed decisions or documented contracts.

Rules:

- Do not modify runtime files.
- Do not stage, commit, or push.
- Do not touch CEO Briefing.
- Do not create or modify references/flutterflow/sprint-009/ceo-briefing.png.
- Do not modify backend, Firebase, Hermes, package/dependency, native, build, release, or deployment files.

After applying the pack, run:

- git diff --check
- git status --branch --short
- git diff --name-only
- test ! -f references/flutterflow/sprint-009/ceo-briefing.png

Then report:

1. Files created.
2. Files updated.
3. Validation results.
4. Final git status.
```

---

## 7. Architect Notes

This sprint intentionally follows the low-noise app-completion track.

Sprint 036 should not become a product expansion sprint. It exists because Sprint 035 found that empty-state and code-inspection validation were good, but populated reminder rendering still needs a repeatable proof path.

If Codex finds the current app already supports this proof path, Sprint 036 can close as docs/validation only.

If Codex needs to add a helper, the helper must be small, local-only, and easy to remove.
