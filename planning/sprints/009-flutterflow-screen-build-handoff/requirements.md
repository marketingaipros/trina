# Sprint 009 Requirements - FlutterFlow Screen Build Handoff

## Goal

Create a Builder-ready FlutterFlow screen build handoff for Trina's first mobile visual prototype.

Sprint 009 should make the prototype build clear enough that a FlutterFlow operator can create the first screens without guessing layout, navigation, mock data, or boundaries.

## User Story

As the operator building Trina, I need a precise FlutterFlow screen handoff so the first visual prototype can be built consistently, reviewed quickly, and kept separate from runtime/backend work.

## In Scope

- Define exact FlutterFlow screen list.
- Define screen-by-screen layout.
- Define mobile navigation approach.
- Define mock data and stub behavior.
- Define clickable prototype paths.
- Define screenshot/export storage.
- Update `docs/FLUTTERFLOW_BUILD_HANDOFF.md`.
- Update validation rules for the Sprint 009 handoff.
- Keep all local repo work docs/planning only.

## Out of Scope

- Building FlutterFlow screens.
- Exporting FlutterFlow code.
- Modifying local React/Vite runtime code.
- Modifying Firebase configuration or deployment.
- Implementing Hermes/API behavior.
- Adding authentication.
- Adding persistence.
- Adding live AI calls.
- Adding real voice/audio capture.
- Adding production mobile release assets.
- Staging, committing, or pushing unless explicitly requested later.

## Required Screens

The handoff must define these six screens:

1. Dashboard / Home
2. Assistant / Voice Command
3. Strategic Advisor Mode
4. CEO Briefing
5. Finance
6. Settings / Profile

## Visual Requirements

The handoff must preserve Sprint 008's visual direction:

- Pale pink background
- Hot pink CTA
- Rounded cards
- Mobile-first layout
- Central mic on Assistant screen
- Clean executive assistant feel
- Barbie-inspired but not childish
- Quick actions adapted from the current screenshot direction

## Mock Behavior Requirements

The handoff must define these mock behaviors:

- `mockStartDemoSession`
- `mockSendAssistantMessage`
- `mockMicListeningState`
- `mockLoadCEOBriefing`
- `mockLoadFinanceSnapshot`
- `mockLoadStrategicAdvisorMode`

These are prototype-only contracts, not production APIs.

## Storage Requirements

The handoff should recommend:

```text
references/flutterflow/sprint-009/
```

for lightweight screenshots and click-path notes.

Large generated exports should not be committed unless explicitly approved.

## Done Means

Sprint 009 is done when the project folder contains a clear FlutterFlow screen build handoff, updated sprint planning docs, validation instructions, and no runtime implementation changes.
