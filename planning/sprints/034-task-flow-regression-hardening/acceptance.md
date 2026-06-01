# Sprint 034 Acceptance Criteria - Task Flow Regression Hardening

Sprint 034 is complete only when all required criteria below are satisfied or explicitly documented as not applicable.

## Runtime Acceptance

- Dashboard/Home loads.
- Bottom navigation reaches core sections.
- Assistant / Voice Entry remains reachable.
- Typed Assistant capture creates a visible task.
- Empty Assistant input remains safe.
- Task list renders existing tasks.
- Task completion toggle works.
- Task filters work before and after task add/edit/delete/toggle.
- Empty states remain accurate for no tasks and filtered-out tasks.
- Edit control remains visible for each task.
- Delete control remains visible for each task.
- Edit/Delete controls exist in the DOM as actionable controls.
- Edit/Delete controls have accessible labels.
- Edit/Delete controls are keyboard reachable where practical.
- Edit opens inline editing for the selected task.
- Save updates the same task without creating a duplicate.
- Cancel leaves the task unchanged.
- Enter saves while editing where supported.
- Escape cancels while editing where supported.
- Delete prompts before removal.
- Confirmed delete removes the selected task from the visible list.
- Cancelled delete leaves the task unchanged where browser validation allows.
- Responsive/mobile view keeps controls visible and touch usable.
- Bottom-row task controls are not blocked by fixed bottom navigation.
- CEO Briefing remains untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

## Scope Acceptance

- No CEO Briefing files are modified.
- No backend files are modified.
- No Firebase files are modified.
- No Hermes files are modified.
- No package/dependency files are modified unless separately approved.
- No native build files are modified.
- No deployment/release files are modified.
- No new task feature is introduced.

## Validation Acceptance

The following commands pass:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git status --branch --short
```

Known existing build warnings may be documented if unrelated to Sprint 034.

## Documentation Acceptance

The following files are updated after validation if needed:

```text
docs/VALIDATION.md
planning/STATE.md
planning/RISKS.md
planning/QUESTIONS.md
```

Docs must reflect actual Sprint 034 results, not only planned checks.

## Staging Readiness

Before staging, Codex must report:

1. Files changed.
2. Runtime behavior confirmed.
3. Browser validation results.
4. Command validation results.
5. CEO Briefing absence check.
6. Final git status.
7. Whether Sprint 034 is ready for staging approval.
