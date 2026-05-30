# Sprint 010 Requirements - FlutterFlow CEO Briefing Screen Fix

## Goal

Rebuild the missing CEO Briefing FlutterFlow prototype screen, wire its prototype navigation, capture screenshot evidence, and close the Sprint 009 CEO Briefing evidence gap.

## Background

Sprint 009 created the first Trina mobile FlutterFlow prototype and committed evidence for the working screens:

- Dashboard
- Assistant
- Strategic Advisor Mode
- Finance
- Settings

CEO Briefing remained pending because FlutterFlow Designer had generation/import issues.

Sprint 010 exists only to complete that missing screen and evidence.

## User Story

As the operator reviewing Trina's mobile prototype, I need a CEO Briefing screen that fits the existing FlutterFlow prototype style, so I can see the complete executive assistant flow and preserve screenshot evidence in the project folder.

## In Scope

- FlutterFlow-only prototype work.
- Rebuild or create the CEO Briefing screen inside the clean FlutterFlow project.
- Use mock/static content only.
- Match the existing Trina Barbie-inspired prototype style.
- Connect Dashboard CEO Briefing button to CEO Briefing.
- Connect CEO Briefing CTA to Assistant.
- Add a clear way back to Dashboard.
- Capture screenshot:
  - `references/flutterflow/sprint-009/ceo-briefing.png`
- Update `references/flutterflow/sprint-009/click-path-notes.md` to mark CEO Briefing evidence present.
- Update sprint state/validation notes as needed.

## Out of Scope

- Runtime app code.
- React/Vite implementation.
- FlutterFlow generated code exports.
- Firebase setup, config, deploy, rules, or functions.
- Hermes/API implementation.
- Backend calls.
- Authentication.
- Live AI.
- Real voice capture.
- Real financial data.
- Package file edits.
- Native folder edits.
- Release work.
- Production mobile deployment.

## CEO Briefing Screen Requirements

The CEO Briefing screen should include:

- Page title: `CEO Briefing`
- Visual style matching the existing prototype:
  - Soft pink/white background
  - Hot pink accents
  - Rounded cards
  - Executive assistant feel
- Sections:
  - `Today's Priorities`
  - `Follow-ups`
  - `Decisions Needed`
  - `Next Best Move`
- CTA button:
  - `Ask Trina to Prioritize`
  - Navigates to `Assistant`
- Back/home control:
  - Navigates to `Dashboard`

## Mock Content

Use clear static copy. Suggested content:

### Today's Priorities

- Review high-priority emails.
- Confirm the next strategic session.
- Resolve pipeline risk before end of day.

### Follow-ups

- Follow up with two active opportunities.
- Review unread executive summary.
- Check pending finance note.

### Decisions Needed

- Pick the highest-value follow-up.
- Decide whether to move pipeline review earlier.
- Confirm today's top operating priority.

### Next Best Move

- Focus on the opportunity most likely to affect this week's pipeline.

## Evidence

The screenshot must be stored as:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Do not create a placeholder with words like `pending` in the file name.

## Success Standard

Sprint 010 is complete when the CEO Briefing screen exists, the click path works in FlutterFlow Test/Run mode, `ceo-briefing.png` is saved in the evidence folder, and no protected files or generated exports are changed.
