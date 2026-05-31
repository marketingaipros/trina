# Sprint 027 Acceptance Criteria - Core App Completion Polish and Navigation Hardening

## Core App Flow

Sprint 027 is complete when:

- Dashboard/Home remains reachable from primary navigation.
- Assistant / Voice Entry remains reachable from Dashboard or navigation.
- The Sprint 026 Assistant text capture path still creates a local task.
- Supported speech transcript capture still uses the same safe local task path.
- Captured tasks remain visible in Tasks after capture.
- Empty Assistant input still disables Capture and Send.
- Tasks empty-state guidance remains clear.
- Notifications fallback copy remains clear when browser notification support is unavailable, blocked, denied, or unsupported.
- Primary non-CEO app surfaces do not present obvious dead ends.
- Return navigation to Dashboard/Home is reliable.
- Selected or active navigation state is not misleading.

## CEO Briefing Guardrail

Sprint 027 is complete only if:

- CEO Briefing was not built.
- CEO Briefing was not rebuilt.
- CEO Briefing navigation was not wired.
- CEO Briefing was not validated.
- CEO Briefing was not marked complete.
- CEO Briefing was not treated as blocking app completion.
- No CEO Briefing screenshot evidence was created.
- This file remains absent:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

## Scope Guardrail

Sprint 027 is complete only if no work was done in:

- Firebase configuration, schema, rules, auth, or deployment
- Hermes configuration
- Backend code
- Package or lockfile files
- Native mobile files
- Release or deploy configuration
- FlutterFlow Designer, export, or generated code
- Screenshot evidence files
- Build configuration files
- New AI, CRM, calendar, email, or external-service integrations
- Broad redesign or unrelated screens

## Documentation

Sprint 027 is complete when:

- `planning/STATE.md` reflects Sprint 027 implementation status.
- `docs/VALIDATION.md` records Sprint 027 validation expectations and results.
- Durable architecture, API, decision, risk, or question docs are updated only if implementation creates a specific durable change.

## Validation Required

The Builder must report results for:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

After runtime implementation approval, the Builder should also run:

```bash
npm run lint
npm run build
```

If a check is unavailable or unsafe, the Builder must say why.

## Completion Standard

Do not mark Sprint 027 complete unless the app shell is polished around the existing Assistant capture flow without touching CEO Briefing or protected technical scope.
