# Sprint 014 Requirements - CEO Briefing Screenshot Evidence Capture

## Goal

Capture real CEO Briefing screenshot evidence from the FlutterFlow prototype and close the deferred Sprint 013 evidence gap.

## Background

Sprint 013 documented that CEO Briefing evidence remained deferred because no real screenshot was available at:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Sprint 014 exists only to capture that real evidence and update the planning/docs notes so the repo tells the truth.

## Primary User Story

As the project operator, I need real CEO Briefing screenshot evidence saved in the project references folder so the deferred Sprint 013 evidence gap can be closed without modifying runtime app code.

## In Scope

- Evidence capture only.
- Confirm the CEO Briefing screen exists in the FlutterFlow prototype.
- Confirm Dashboard CEO Briefing navigation works.
- Confirm CEO Briefing can navigate back to Dashboard or the documented home route.
- Confirm CEO Briefing `Ask Trina to Prioritize` navigation works.
- Capture a real CEO Briefing screenshot.
- Save the screenshot as `references/flutterflow/sprint-009/ceo-briefing.png`.
- Update planning/docs evidence notes after the screenshot exists.

## Out of Scope

- Runtime React/Vite app changes.
- FlutterFlow generated code export.
- Firebase setup, config, deploy, Functions, or security rules.
- Hermes/API/backend implementation.
- Authentication.
- Live AI/model calls.
- Real voice capture.
- Real financial data.
- Package file changes.
- Native iOS/Android folder changes.
- Production mobile release work.
- Secrets or `.env` files.
- Placeholder or simulated evidence.

## CEO Briefing Screen Requirements

The screenshot must show the real FlutterFlow CEO Briefing screen.

The screen should visibly preserve the current Trina visual direction:

- Pink/white Barbie-inspired styling.
- Rounded cards.
- Hot pink accents.
- Assistant/executive briefing tone.
- Clear `CEO Briefing` or equivalent briefing page title.

Preferred visible content:

- Today's Priorities
- Follow-ups
- Decisions Needed
- Next Best Move
- Ask Trina to Prioritize

If the FlutterFlow screen has a different visible title, document the title in `references/flutterflow/sprint-009/click-path-notes.md` before marking evidence complete.

## Navigation Requirements

Manually confirm and document:

```text
Dashboard -> CEO Briefing
CEO Briefing -> Dashboard
CEO Briefing -> Ask Trina to Prioritize -> Assistant
```

If a path is missing, renamed, or untestable, document that honestly. Do not mark that path as passing.

## Evidence Completion Rule

Do not mark CEO Briefing evidence complete unless this file exists:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Do not create a placeholder image or text-only substitute.

## Success Definition

Sprint 014 is successful when the real CEO Briefing screenshot exists at the required path, evidence notes identify it as present, the required navigation paths are documented, and all repo changes remain limited to the screenshot plus planning/docs/evidence-note files.
