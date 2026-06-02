# Sprint 041 Blueprint - Empty, Error, and Loading State Hardening

## Approach

This is an inspect-first runtime polish sprint.

The Builder must inspect current behavior before editing. Runtime changes are allowed only for confirmed empty, fallback, unavailable, failed-action, loading, pending, or disabled-control issues.

The planning/docs application does not start runtime implementation.

## Inspect First

Review:

- `App.tsx`
- `components/Dashboard.tsx`
- `components/VoiceDashboard.tsx`
- `components/TasksView.tsx`
- `components/NotificationsView.tsx`
- `components/CalendarView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`
- `components/Navigation.tsx`

## Runtime Files Allowed If Needed

- `components/Dashboard.tsx`
- `components/VoiceDashboard.tsx`
- `components/TasksView.tsx`
- `components/NotificationsView.tsx`
- `components/CalendarView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`

`components/Navigation.tsx` is inspect-first and should only be edited if directly required by empty or fallback navigation behavior.

`App.tsx` is inspect-only unless explicit operator approval is granted after the Builder proves the issue cannot be fixed locally.

## Implementation Rules

- Patch the smallest safe confirmed issue.
- Prefer local component fixes over global changes.
- Keep styling consistent with existing components.
- Do not change data models.
- Do not add dependencies.
- Do not create new architecture.
- Preserve Sprint 040 accessibility and touch-target improvements.
- Do not touch CEO Briefing.
- Do not create evidence artifacts.

## Component Guidance

### Dashboard and Voice Dashboard

Inspect panels or cards that assume data exists.

Look for:

- Empty derived counters.
- Missing fallback copy for no tasks, events, notifications, or knowledge sources.
- Undefined, null, or dead-looking displays.
- Broken or unclear primary actions.

Prefer safer fallback copy and stable layout.

### Tasks

Inspect:

- Empty task list state.
- Completed and active filter empty states.
- Disabled or unavailable edit, delete, or toggle states.
- Any action that silently does nothing.

Preserve Sprint 040 task control sizing.

### Notifications

Inspect:

- Empty notification state.
- Fixture fallback state.
- Permission or unavailable notification states.
- Dismiss or clear behavior when no notifications exist.

Prefer clear empty/fallback copy and disabled or hidden actions when the action cannot run.

### Calendar

Inspect:

- Empty selected day.
- Empty event list.
- Add event affordance.
- Missing or unclear fallback for no scheduled items.

Preserve Sprint 040 visible event actions and touch usability.

### Finance

Inspect:

- Empty finance history.
- Empty summary/cards.
- No transaction or entry state.
- Failed or invalid add-entry behavior if present.

Prefer clear empty-state guidance and accessible action labels.

### Knowledge Base

Inspect:

- No documents.
- No selected document.
- Upload unavailable state.
- Voice question unavailable state.
- Missing source/content fallback.

Preserve Sprint 040 upload, voice, and delete control sizing.

## Validation

Run:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

Manual/browser smoke should cover:

- Mobile viewport around `390x844`.
- Dashboard fallback panels.
- Tasks empty/filter states.
- Notifications empty/fallback states.
- Calendar empty selected day/list.
- Finance empty/history state.
- Knowledge Base no documents/no selected source state.
- Patched controls have accessible names or clear visible text.
- No horizontal overflow.
- Sprint 040 mobile/touch improvements remain intact.

Known non-blocking Vite warnings may be documented if unchanged from prior validation.
