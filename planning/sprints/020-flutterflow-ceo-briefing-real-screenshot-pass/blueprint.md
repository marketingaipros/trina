# Sprint 020 Blueprint - FlutterFlow CEO Briefing Real Screenshot Pass

## Builder Sequence

1. Read the Sprint 020 Architect Pack.
2. Confirm the allowed planning/docs/evidence-note file list.
3. Confirm `references/flutterflow/sprint-009/ceo-briefing.png` is absent unless real evidence already exists.
4. Have the operator open the real FlutterFlow project in Designer or Preview.
5. Verify Dashboard / Home is visible.
6. Navigate from Dashboard to CEO Briefing or its approved renamed equivalent.
7. Confirm the briefing screen renders with real prototype UI.
8. Test return navigation from CEO Briefing to Dashboard.
9. Test `Ask Trina to Prioritize` navigation from CEO Briefing to Assistant.
10. Capture a real screenshot only after the screen is confirmed.
11. Save the real screenshot exactly as `references/flutterflow/sprint-009/ceo-briefing.png`.
12. Update click-path notes, validation docs, and planning state.

## Click-Path Table

| Path | Required Result | Current Builder-Pass Status | Notes |
|---|---|---|---|
| `Dashboard -> CEO Briefing` | Opens CEO Briefing or approved renamed equivalent | Blocked | Requires real FlutterFlow Designer / Preview access. |
| `CEO Briefing -> Dashboard` | Returns to Dashboard or approved home route | Blocked | Requires real FlutterFlow Designer / Preview access. |
| `CEO Briefing -> Ask Trina to Prioritize -> Assistant` | Opens Assistant with briefing context or approved static prototype equivalent | Blocked | Requires real FlutterFlow Designer / Preview access. |

## Screenshot Capture Procedure

Only after the operator confirms the real screen and required click paths:

1. Capture the CEO Briefing screen from FlutterFlow Designer or Preview.
2. Confirm the visible title is `CEO Briefing` or document the actual approved rename.
3. Save the image as PNG.
4. Place it at:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Do not save alternate names for closure.

## Decision Rules

### Pass

Use only when real FlutterFlow Designer or Preview validation confirms the screen, click paths, and screenshot.

### Fail

Use when the real FlutterFlow project is accessible but a required screen or path is broken.

### Blocked

Use when real FlutterFlow access, project URL, operator result, or screenshot capture is unavailable.

### Deferred

Use when the screen or evidence is intentionally postponed.

### Renamed

Use when the real screen exists under a different label. Document the actual label and whether the rename is accepted.

## Documentation Updates

- `references/flutterflow/sprint-009/click-path-notes.md`: record Sprint 020 status and click-path table.
- `docs/VALIDATION.md`: record Sprint 020 validation commands and evidence rules.
- `planning/STATE.md`: set Sprint 020 as current active Builder pass and preserve screenshot absence unless real evidence exists.
- `planning/DECISIONS.md`, `planning/RISKS.md`, and `planning/QUESTIONS.md`: update only for Sprint 020 decisions, risks, and open operator questions.
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`: update only to reflect current CEO Briefing evidence status and operator handoff.

## Out Of Scope

Runtime app code, generated FlutterFlow exports, Firebase, Hermes/API, backend, package files, native folders, build outputs, release assets, deploy commands, secrets, and `.env` files remain out of scope.
