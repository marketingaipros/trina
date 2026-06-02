# Sprint 042 Acceptance - Mobile State Validation and Fixture Coverage

Sprint 042 is accepted only when all applicable criteria are true or caveated honestly.

## A1 - Planning Files Created

The following files exist:

- `planning/sprints/042-mobile-state-validation-and-fixture-coverage/requirements.md`
- `planning/sprints/042-mobile-state-validation-and-fixture-coverage/blueprint.md`
- `planning/sprints/042-mobile-state-validation-and-fixture-coverage/acceptance.md`
- `planning/sprints/042-mobile-state-validation-and-fixture-coverage/handoff-prompt.md`

Closeout status: Complete.

## A2 - Builder Summary Gate Required

Before runtime implementation, the Builder reports:

1. What Sprint 042 is supposed to accomplish.
2. Which files it expects to modify.
3. What tests or validation steps it will run.
4. Any blockers or ambiguities.

No implementation starts before approval.

Closeout status: Complete.

## A3 - Validation Mechanism Is Small and Local

Any new validation fixture, helper, dev-only mode, or script must be narrow and must not change production behavior for users.

Closeout status: Complete.

## A4 - Sprint 041 Caveats Are Rechecked

The Sprint 041 caveats are rechecked and documented:

- `390x844` or nearest available mobile viewport.
- True empty states where feasible.
- AI failure states where feasible.
- Disabled/invalid submit behavior.
- Knowledge Base fallback/error states.
- Horizontal overflow.
- Preserved Sprint 040 touch/accessibility behavior.

Closeout status: Complete with documented caveat. Sprint 041 caveats were rechecked and documented; Calendar selected-day edit/delete controls were not live-clicked on a populated selected-day row during Sprint 042 smoke, but existing code keeps the 44px controls and selected-day smoke showed no horizontal overflow. Carry the live-click gap as a non-blocking follow-up.

## A5 - Runtime Scope Is Controlled

Runtime files may only be changed if required to support validation or fix a confirmed state issue.

Allowed runtime candidates:

- `components/Dashboard.tsx`
- `components/VoiceDashboard.tsx`
- `components/TasksView.tsx`
- `components/NotificationsView.tsx`
- `components/CalendarView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`

Inspect-only unless explicitly justified:

- `components/Navigation.tsx`
- `App.tsx`

Closeout status: Complete.

## A6 - Protected Areas Stay Untouched

The sprint must not touch:

- CEO Briefing workflow.
- `references/flutterflow/sprint-009/ceo-briefing.png`.
- Backend or Firebase contracts.
- Package/dependency files unless explicitly approved.
- Native, build, release, deployment, hosting, or environment files.
- Generated FlutterFlow code or exports.

Closeout status: Complete.

## A7 - Required Validation Commands Pass

Run and report:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

If `npm run build` shows known Vite warnings, report them without treating them as a failure unless new errors appear.

Closeout status: Complete.

## A8 - Documentation Updated

Update:

- `docs/VALIDATION.md`
- `planning/STATE.md`

Update `planning/RISKS.md` only if a meaningful validation limitation remains.

Closeout status: Complete.

## A9 - No Premature Staging or Push

No staging, commit, or push happens until the user explicitly approves closeout.

Closeout status: Complete.
