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
