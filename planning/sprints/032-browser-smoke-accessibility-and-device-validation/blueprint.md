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
