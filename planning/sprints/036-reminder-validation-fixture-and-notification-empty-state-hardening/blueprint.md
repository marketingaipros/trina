# Sprint 036 Blueprint - Reminder Validation Fixture and Notification Empty-State Hardening

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
