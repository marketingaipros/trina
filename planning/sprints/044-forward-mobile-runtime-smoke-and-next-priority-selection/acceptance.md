# Sprint 044 Acceptance — Forward Mobile Runtime Smoke And Next Priority Selection

## Acceptance Criteria

A1. Sprint 044 planning files exist:

- `requirements.md`
- `blueprint.md`
- `acceptance.md`
- `handoff-prompt.md`

A2. The Sprint 044 Architect Pack exists in `architect-packs/`.

A3. Codex performs an inspect-first readback before any implementation.

A4. Mobile smoke is attempted at `390x844` or nearest available measured viewport.

A5. The exact viewport used is documented.

A6. Dashboard/Home, Tasks, Calendar, Finance, and Knowledge Base are smoked if reachable.

A7. Notifications/reminders are smoked if reachable.

A8. Smoke results document rendering, navigation, overflow, control reachability, and recent accessibility/touch-target expectations.

A9. No runtime files are changed unless separately approved.

A10. `docs/VALIDATION.md` records the Sprint 044 validation result.

A11. `planning/STATE.md` records Sprint 044 status and the recommended next action.

A12. `planning/RISKS.md` is updated if risk status changes.

A13. `planning/QUESTIONS.md` is updated only if a real unresolved ambiguity remains.

A14. `planning/DECISIONS.md` is updated only if a durable decision changes.

A15. Required validation commands pass or any known warnings are documented:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
```

A16. CEO Briefing remains untouched.

A17. `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

A18. Sprint 045 recommendation is documented with a narrow scope and rationale.

## Not Accepted If

- Codex modifies runtime files without approval.
- Codex stages, commits, or pushes during the validation pass.
- CEO Briefing is touched.
- The missing CEO Briefing reference image is recreated.
- Sprint 045 is created prematurely.
- The next priority is selected without validation evidence.
