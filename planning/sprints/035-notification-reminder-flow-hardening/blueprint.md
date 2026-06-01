# Sprint 035 Blueprint

## Implementation Mode

Start with inspection and validation.

Do not modify runtime files until a concrete Sprint 035 acceptance failure is found.

## Step 1 - Read Current Planning State

Codex must read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/035-notification-reminder-flow-hardening/requirements.md`
- `planning/sprints/035-notification-reminder-flow-hardening/blueprint.md`
- `planning/sprints/035-notification-reminder-flow-hardening/acceptance.md`

Then summarize before implementation.

## Step 2 - Inspect Notification/Reminder Wiring

Inspect:

- `App.tsx`
- `components/Dashboard.tsx`
- `components/NotificationsView.tsx`
- `components/Navigation.tsx`
- `components/TasksView.tsx`
- `types.ts`
- Any existing local notification/reminder service already used in the app

Confirm:

- Where notification/reminder data comes from
- How Dashboard surfaces counts or reminder indicators
- How Notifications renders empty and populated states
- Whether task-created reminders affect notification surfaces
- Whether bottom navigation state is correct for Notifications

## Step 3 - Run Browser Validation

Validate manually or with the available local browser tooling:

- Open Dashboard/Home.
- Navigate to Notifications.
- Confirm empty or populated state copy is readable.
- Confirm badges/counts do not show stale or impossible values.
- Use Assistant or existing task flow only if needed to confirm notification/reminder behavior.
- Validate mobile viewport.
- Confirm fixed bottom-nav spacing does not block notification content.
- Confirm task flow was not broken by any Sprint 035 change.

## Step 4 - Fix Only Concrete Failures

If validation finds a failure, apply the smallest targeted fix.

Examples of acceptable fixes:

- Correct stale count calculation.
- Restore missing empty-state copy.
- Fix notification item layout overflow.
- Add bottom padding so fixed navigation does not overlap content.
- Correct broken navigation active state for Notifications.
- Fix task/reminder data mapping if existing state is wired incorrectly.

Examples of unacceptable changes:

- New notification system
- New reminder scheduler
- New backend delivery
- New Firebase/Hermes integration
- New packages
- Broad component redesign
- CEO Briefing work

## Step 5 - Validate Commands

Run:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git status --branch --short
```

Document any non-blocking existing warnings.

## Step 6 - Update Planning/Validation Docs

Update only as needed:

- `docs/VALIDATION.md`
- `planning/STATE.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`

Keep updates factual.

## Step 7 - Stop Before Commit

Do not stage, commit, or push.

Report:

1. Whether runtime changes were needed.
2. Files changed.
3. Acceptance criteria passed.
4. Acceptance criteria incomplete or uncertain.
5. Validation commands and results.
6. Any risks/questions/state updates needed.
7. Confirmation that protected scope was untouched.
