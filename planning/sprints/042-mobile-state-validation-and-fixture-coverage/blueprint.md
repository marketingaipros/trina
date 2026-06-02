# Sprint 042 Blueprint - Mobile State Validation and Fixture Coverage

## Approach

This is an inspect-first validation-infrastructure sprint.

The Builder should first understand the current validation gaps, then choose the smallest safe way to reproduce or simulate key Sprint 041 UI states. Runtime changes are allowed only after the Builder summary and operator approval.

The planning/docs application does not start runtime implementation.

## Inspect First

Read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/041-empty-error-loading-state-hardening/acceptance.md`
- `planning/sprints/042-mobile-state-validation-and-fixture-coverage/requirements.md`
- `planning/sprints/042-mobile-state-validation-and-fixture-coverage/blueprint.md`
- `planning/sprints/042-mobile-state-validation-and-fixture-coverage/acceptance.md`

Inspect current app structure before editing runtime files.

Likely runtime files to inspect:

- `components/Dashboard.tsx`
- `components/VoiceDashboard.tsx`
- `components/TasksView.tsx`
- `components/NotificationsView.tsx`
- `components/CalendarView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`
- Existing test, fixture, script, or validation files.

## Runtime Files Allowed If Needed

Runtime files may only be changed after approval and only if required to support validation or fix a confirmed state issue.

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

## Validation Mechanism Guidance

Choose the smallest practical option:

1. Add or improve a local fixture/test helper.
2. Add a dev-only validation mode that is not exposed as a production feature.
3. Add documented manual steps if code support is unnecessary.
4. Add a small smoke script if the repo already supports it.
5. Make no runtime changes if existing structure already supports repeatable validation.

Do not add heavy infrastructure.

Do not add package dependencies without first reporting why existing tools are insufficient and receiving explicit approval.

Any fixture or helper must be narrow, local, and isolated from normal user behavior.

## State Areas to Validate

### Dashboard and Voice Dashboard

Validate:

- Daily Snapshot failure feedback.
- Voice capture fallback behavior.
- Empty, unavailable, or disabled states where present.
- Mobile layout around `390x844`.

### Tasks

Validate:

- True empty task state where feasible.
- Active/completed filter empty states where feasible.
- Strategic Review AI failure state where feasible.
- Sprint 040 task row touch targets remain preserved.

### Notifications

Validate:

- Empty state.
- Fixture/fallback state.
- Reminder notification display path if available through existing local fixture support.
- Bottom navigation and horizontal overflow safety.

### Calendar

Validate:

- True empty selected day/list state where feasible.
- Event row edit/delete controls remain preserved where event data exists or can be safely fixture-backed.
- Mobile overflow safety.

### Finance

Validate:

- Empty history or summary state where feasible.
- Disabled/invalid submit behavior.
- AI failure state where feasible.
- Mobile overflow safety.

### Knowledge Base

Validate:

- No-documents and no-selected-source states.
- Voice failure state.
- Delete-without-document-ID error state where feasible.
- Upload, voice, and delete controls remain touch usable.

## Documentation Updates

Update:

- `docs/VALIDATION.md` with exact Sprint 042 commands, smoke checks, and results format.
- `planning/STATE.md` with Sprint 042 active status.
- `planning/RISKS.md` if validation remains partly manual, seeded-data-limited, or fixture-limited.

Update only if needed:

- `planning/DECISIONS.md` for a durable future validation workflow decision.
- `planning/QUESTIONS.md` for an unresolved owner/operator question.
- `docs/ARCHITECTURE.md` only if architecture actually changes.
- `docs/API.md` only if interface contracts actually change.

## Validation

Run and report:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

Manual/browser smoke should cover:

- Mobile viewport exactly `390x844`, or the nearest available viewport with reason.
- Dashboard / Daily Snapshot failure visibility where feasible.
- Tasks true empty and filter states where feasible.
- Notifications empty and fallback states.
- Calendar empty selected day/list where feasible.
- Finance empty, disabled submit, and AI failure state where feasible.
- Knowledge Base empty/fallback and failure states where feasible.
- No horizontal overflow on in-scope views.
- Sprint 040 touch/accessibility behavior remains preserved.

Known non-blocking Vite warnings may be documented if unchanged from prior validation.

## Stop Conditions

Stop and report before runtime edits if:

- The smallest useful mechanism requires package/dependency changes.
- Validation would require backend, Firebase, native, deployment, or production data changes.
- CEO Briefing would need to be touched.
- The Builder cannot isolate validation helpers from normal user behavior.
