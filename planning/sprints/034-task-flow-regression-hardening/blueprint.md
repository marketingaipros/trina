# Sprint 034 Blueprint - Task Flow Regression Hardening

## Implementation Approach

This is a hardening sprint, not a feature sprint.

Codex should first inspect the existing task flow and identify whether any acceptance criteria fail. If no code-level failures are found, Codex should avoid runtime changes and only update closeout documentation after validation.

If failures are found, Codex should make the smallest safe fix.

## Step 1 - Inspect Existing Runtime Flow

Read:

```text
App.tsx
components/TasksView.tsx
components/VoiceDashboard.tsx
components/Navigation.tsx
types.ts
```

Confirm:

- Where task state is owned.
- How tasks are created.
- How typed Assistant capture creates tasks.
- How tasks are updated.
- How tasks are deleted.
- How task filters are applied.
- Whether bottom navigation is fixed.
- Whether task list padding prevents overlap.
- Whether edit/delete controls remain visible and accessible.

## Step 2 - Identify Only Actual Failures

Do not rewrite the task flow.

Look only for concrete failures against acceptance, such as:

- Task control overlap.
- Edit opening the wrong task.
- Save creating duplicates.
- Cancel saving accidentally.
- Delete not refreshing visible state.
- Filters breaking after edit/delete.
- Empty states becoming inaccurate.
- Keyboard access regression.
- Missing accessible labels.
- Mobile controls being blocked or unusable.

## Step 3 - Apply Minimal Runtime Fixes

Allowed patterns:

- Small layout padding/spacing fixes.
- Small button/accessibility attribute fixes.
- Small state update fixes.
- Small filter refresh fixes.
- Small event handler fixes.

Avoid:

- New components unless required.
- New dependencies.
- New task data model fields.
- Full TasksView rewrite.
- Full App.tsx state rewrite.
- New persistence model.
- New UX features.

## Step 4 - Validate

Run command validation:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git status --branch --short
```

Run browser validation from `docs/VALIDATION.md`.

## Step 5 - Update Docs

Update only as needed:

```text
docs/VALIDATION.md
planning/STATE.md
planning/RISKS.md
planning/QUESTIONS.md
```

Document:

- What was tested.
- What passed.
- Any failures found.
- Any fixes made.
- Any remaining limitations.
- CEO Briefing absence guard result.

## Step 6 - Report

Before staging, report:

1. Files changed.
2. Validation results.
3. Browser validation results.
4. Any risks or limitations.
5. Final git status.
6. Whether Sprint 034 is ready for staging approval.

Do not stage, commit, or push until approved.
