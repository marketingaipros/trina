# Sprint 012 Requirements - FlutterFlow Demo Path Polish

## Goal

Polish the accepted FlutterFlow prototype demo path for Trina so the prototype can be shown without being blocked by the deferred CEO Briefing screen.

Sprint 012 should confirm the accepted screen set, final demo path, labels, navigation expectations, and screenshot evidence rules.

## Current Context

Sprint 011 confirmed that the broader FlutterFlow prototype can move forward while CEO Briefing remains deferred, not complete.

The accepted existing evidence set currently includes:

- `references/flutterflow/sprint-009/dashboard.png`
- `references/flutterflow/sprint-009/assistant.png`
- `references/flutterflow/sprint-009/strategic-advisor-mode.png`
- `references/flutterflow/sprint-009/finance.png`
- `references/flutterflow/sprint-009/settings.png`

Deferred evidence:

- `references/flutterflow/sprint-009/ceo-briefing.png`

CEO Briefing must remain deferred unless the operator later creates a real screen and screenshot.

## Primary User Story

As the project operator, I need a clean FlutterFlow prototype demo path so I can show Trina's visual direction and core navigation without getting stuck on one deferred page.

## In Scope

- Confirm the accepted demo screen set.
- Define the demo click path.
- Confirm final labels for the accepted prototype screens.
- Polish navigation expectations for the accepted screen set.
- Keep all content mock/static.
- Preserve the existing Barbie-inspired Trina visual style.
- Capture or refresh screenshot evidence only for accepted screens if manual FlutterFlow work changes them.
- Update evidence notes after real screenshots exist.
- Keep CEO Briefing deferred, not complete.

## Accepted Demo Screen Set

The accepted Sprint 012 demo path should use these screens:

1. `Dashboard`
2. `Assistant`
3. `StrategicAdvisor`
4. `FinanceSnapshot`
5. `Settings`

CEO Briefing is not part of the accepted Sprint 012 demo path.

## Recommended Demo Path

Preferred demo flow:

```text
Dashboard
-> Assistant
-> Strategic Advisor Mode
-> Finance Snapshot
-> Settings
-> Dashboard
```

The prototype may also allow direct Dashboard navigation into each accepted screen.

## Label Direction

Use clear human-facing labels in the FlutterFlow UI.

Recommended labels:

| Internal / Existing Page | Demo Label |
|---|---|
| Dashboard | Dashboard |
| Assistant | Assistant |
| StrategicAdvisor | Strategic Advisor |
| FinanceSnapshot | Finance Snapshot |
| Settings | Settings |

Do not rename source files, generated FlutterFlow files, or repo paths in this sprint.

If labels are changed manually in FlutterFlow, update docs to record the display labels.

## Out of Scope

- CEO Briefing completion.
- Placeholder or fake CEO Briefing screenshot evidence.
- Runtime React/Vite app changes.
- FlutterFlow generated code export.
- Firebase setup, deploy, rules, functions, or config.
- Hermes/API/backend implementation.
- Authentication.
- Live AI/model calls.
- Real voice capture.
- Real financial data.
- Package file changes.
- Native iOS/Android folder changes.
- Production mobile release work.
- Secrets or `.env` files.

## Evidence Rules

Screenshots must be real FlutterFlow screenshots.

Do not create placeholder evidence.

Do not mark evidence complete unless the file exists at the documented path.

Do not include `.DS_Store` in the evidence contract.

## Success Definition

Sprint 012 is successful when the project has a documented accepted demo path, CEO Briefing remains safely deferred, and the next Builder/manual FlutterFlow step is clear.
