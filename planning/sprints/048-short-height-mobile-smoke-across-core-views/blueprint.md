# Sprint 048 Blueprint - Short-Height Mobile Smoke Across Core Views

## Approach

This is an inspect-first sprint. Runtime changes are allowed only after a real issue is confirmed and the Builder summary is approved.

## Files To Inspect

- `components/TasksView.tsx`
- `components/CalendarView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`
- `components/VoiceDashboard.tsx`
- `App.tsx`

## Likely Change Pattern

If fixes are needed, prefer local view-level adjustments:

- bottom padding
- compact spacing at short heights
- scroll container adjustments
- safe min-height or max-height behavior
- responsive layout tweaks

Avoid shared style changes unless the issue clearly comes from a shared container.

## Implementation Rules

- Preserve copy, labels, handlers, input behavior, loading states, and disabled states.
- Keep touch targets at or above `44px` where relevant.
- Do not redesign the views.
- Do not touch backend/Firebase/native/package/release files.
- Do not modify CEO Briefing files.

## Validation Commands

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
git diff --cached --name-only
```
