# Sprint 043 Handoff Prompt - Calendar Selected-Day Control Validation Closeout

Use this prompt with Codex after the Sprint 043 Architect Pack has been applied to the project folder.

```text
Sprint 043 is ready for Builder review.

Do not implement yet.

Read these files first:

- AGENTS.md
- CODEX.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/043-calendar-selected-day-control-validation-closeout/requirements.md
- planning/sprints/043-calendar-selected-day-control-validation-closeout/blueprint.md
- planning/sprints/043-calendar-selected-day-control-validation-closeout/acceptance.md
- planning/sprints/043-calendar-selected-day-control-validation-closeout/handoff-prompt.md

Then summarize only:

1. What Sprint 043 is supposed to accomplish.
2. Which files you expect to inspect or modify.
3. What validation steps you expect to run.
4. Any blockers, risks, or ambiguities.
5. Whether runtime changes are expected.

Sprint 043 goal:
Close the remaining Sprint 042 Calendar caveat by proving selected-day edit/delete row controls can be live-clicked on a populated selected-day row at 390x844 or nearest available viewport.

Rules:

- Inspect first.
- Prefer no runtime changes if existing safe state can reproduce the populated selected-day row.
- If needed, add only the smallest local/dev-only Calendar fixture.
- Allowed runtime modification candidate: components/CalendarView.tsx only.
- Do not modify other runtime files without explicit justification and approval.
- Do not change packages, dependencies, backend, Firebase, Supabase, native files, or build config.
- Do not touch CEO Briefing.
- Do not create references/flutterflow/sprint-009/ceo-briefing.png.
- Do not stage, commit, or push.

Wait for approval before making any code or test changes.
```
