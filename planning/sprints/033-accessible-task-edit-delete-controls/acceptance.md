# Sprint 033 Acceptance - Accessible Task Edit/Delete Controls

## Planning/Docs Checkpoint Acceptance

- [ ] Sprint 033 folder exists.
- [ ] Sprint 033 requirements, blueprint, acceptance, and handoff prompt exist.
- [ ] `planning/STATE.md` points to Sprint 033 as the current approved planning checkpoint.
- [ ] `planning/RISKS.md` records the focused risks for task edit/delete implementation.
- [ ] `planning/QUESTIONS.md` records open implementation questions that cannot be answered without runtime inspection.
- [ ] `docs/VALIDATION.md` documents Sprint 033 validation expectations.
- [ ] No runtime files are modified during planning/docs application.
- [ ] CEO Briefing stays untouched.
- [ ] `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

## Functional Acceptance After Runtime Approval

- [ ] Tasks can still be created through the current supported task path.
- [ ] Typed Assistant capture still creates a visible task.
- [ ] Empty Assistant input safety still works.
- [ ] Existing task toggle behavior still works.
- [ ] Each visible task has an Edit control.
- [ ] Each visible task has a Delete control.
- [ ] Edit control opens an edit state for the selected task.
- [ ] User can edit the task title at minimum.
- [ ] Save updates the existing task instead of creating a duplicate.
- [ ] Cancel exits edit mode without changing the task.
- [ ] Delete removes the task from the visible list.
- [ ] Existing empty-state guidance still works.
- [ ] Core navigation still works.

## Accessibility Acceptance After Runtime Approval

- [ ] Edit controls are present in the DOM.
- [ ] Delete controls are present in the DOM.
- [ ] Edit/delete controls are not hover-only.
- [ ] Edit/delete controls are keyboard reachable.
- [ ] Edit/delete controls are touch usable.
- [ ] Edit/delete controls have accessible names.
- [ ] Edit input has a visible or programmatic label.
- [ ] Save and Cancel controls have accessible names.
- [ ] Focus behavior remains usable after save, cancel, and delete.

## Validation Commands After Runtime Approval

Run:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

## Browser Validation After Runtime Approval

Run the local app with:

```bash
npm run dev
```

Validate:

- Dashboard/Home loads.
- Bottom navigation reaches Dashboard/Home, Assistant, Tasks, Notifications, Calendar, Finance, and Knowledge Base.
- Typed Assistant task capture creates a visible task.
- Empty Assistant input cannot be captured or sent.
- Task can be toggled.
- Task can be edited and saved.
- Task edit can be canceled.
- Task can be deleted.
- Edit/delete controls work with keyboard where practical.
- Edit/delete controls work in responsive/touch emulation where practical.

## Planning Checkpoint Validation Commands

For this docs-only application, run:

```bash
git diff --check
git status --branch --short
git diff --name-only
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

## Protection Acceptance

- [ ] CEO Briefing stayed untouched.
- [ ] `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- [ ] No FlutterFlow files changed.
- [ ] No Firebase files changed.
- [ ] No backend files changed.
- [ ] No Hermes files changed.
- [ ] No package/dependency files changed.
- [ ] No native/build/release/generated files changed.
