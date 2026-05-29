# Sprint 009 FlutterFlow Prototype Evidence Notes

## Source Of Truth

Use Sprint 009 docs as the source of truth:

- `planning/sprints/009-flutterflow-screen-build-handoff/requirements.md`
- `planning/sprints/009-flutterflow-screen-build-handoff/blueprint.md`
- `planning/sprints/009-flutterflow-screen-build-handoff/acceptance.md`
- `planning/sprints/009-flutterflow-screen-build-handoff/handoff-prompt.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/API.md`
- `docs/VALIDATION.md`

## Build Boundary

This evidence note tracks FlutterFlow-only prototype work.

Do not modify:

- Local React/Vite runtime code
- Firebase config, rules, deploy files, or Functions
- Hermes/API implementation
- Package files
- Native folders
- Release files
- Generated FlutterFlow exports
- Secrets or `.env` files

## Active Screens

The Sprint 009 FlutterFlow prototype build checklist covers these six active screens:

1. Dashboard / Home
2. Assistant / Voice Command
3. Strategic Advisor Mode
4. CEO Briefing
5. Finance
6. Settings / Profile

## Screen Build Checklist

### Dashboard / Home

- Use pale pink or soft blush app background.
- Include greeting: `Good morning, Destrey` or `Good morning`.
- Include subtitle: `Trina is ready for your next move.`
- Include `Today's Executive Snapshot` card.
- Include mock bullets:
  - `3 priorities need attention`
  - `2 follow-ups are ready`
  - `Finance snapshot updated`
- Include quick action cards:
  - `Ask Trina`
  - `CEO Briefing`
  - `Strategic Advisor Mode`
  - `Finance`
- Include bottom navigation:
  - Home
  - Assistant
  - Strategy
  - Briefing
  - Finance

### Assistant / Voice Command

- Include header: `Ask Trina`.
- Include subtitle: `Voice or text command`.
- Include large central hot pink mic button.
- Show mic visual states:
  - Idle
  - Listening
  - Thinking
- Include text input placeholder: `Tell Trina what you need...`
- Include suggested prompts:
  - `Prepare my CEO briefing`
  - `Review finance snapshot`
  - `Help me make a decision`
  - `Draft a client follow-up`
- Include response card area.
- Use mock response only.

### Strategic Advisor Mode

- Include header: `Strategic Advisor Mode`.
- Include subtitle: `Think through decisions before you act.`
- Include mode cards:
  - `Growth Strategy`
  - `Risk Review`
  - `Client Opportunity`
  - `Operations Bottleneck`
- Include main advisor recommendation card.
- Include CTA: `Ask for recommendation`.
- Use static mock recommendation text only.

### CEO Briefing

- Include header: `CEO Briefing`.
- Include subtitle: `Your day, priorities, and next moves.`
- Include briefing sections:
  - Top Priorities
  - Follow-Ups
  - Decisions Needed
  - Suggested Next Move
- Include CTA: `Ask Trina to prioritize`.
- Use sample priority and next-move content only.

### Finance

- Include header: `Finance`.
- Include subtitle: `Quick business snapshot`.
- Include metric cards:
  - Revenue Pipeline
  - Monthly Commitments
  - Open Opportunities
  - Attention Needed
- Include insight card: `Trina's read`.
- Include CTA: `Ask Trina about cash priorities`.
- Use clearly fake/demo finance values only.
- Do not connect to real financial data.

### Settings / Profile

- Include header: `Settings`.
- Include profile card:
  - Name: `Destrey`
  - Role: `CEO / Operator`
- Include preference rows:
  - Assistant tone
  - Briefing time
  - Voice mode
  - Notification style
- Include footer note: `Prototype settings only`.
- Keep rows static or placeholder-only.

## Expected Navigation Path

Primary click path:

```text
Dashboard / Home
-> Ask Trina
-> Assistant / Voice Command
-> Tap central mic
-> See mock response
-> Strategic Advisor Mode
-> CEO Briefing
-> Finance
-> Back to Dashboard / Home
```

Secondary click path:

```text
Dashboard / Home
-> CEO Briefing
-> Ask Trina to prioritize
-> Assistant / Voice Command with prefilled prompt or mock response
```

Expected navigation behavior:

- Dashboard `Ask Trina` opens Assistant / Voice Command.
- Dashboard `CEO Briefing` opens CEO Briefing.
- Dashboard `Strategic Advisor Mode` opens Strategic Advisor Mode.
- Dashboard `Finance` opens Finance.
- CEO Briefing CTA opens Assistant with briefing context or static mock response.
- Finance CTA opens Assistant with finance context or static mock response.
- Bottom navigation moves between Home, Assistant, Strategy, Briefing, and Finance.
- Settings / Profile is reachable from a profile/settings icon.

## Expected Mock / Stub Behaviors

These names describe prototype intent only. They are not production APIs.

| Mock Contract | Expected Prototype Behavior | Evidence Needed |
|---|---|---|
| `mockStartDemoSession` | Start or represent a local demo state without auth, persistence, or backend calls. | Pending manual FlutterFlow verification. |
| `mockSendAssistantMessage` | Populate Assistant response card from typed text or suggested prompt. | Pending manual FlutterFlow verification. |
| `mockMicListeningState` | Cycle mic UI through idle, listening, thinking, and done-style visual states. | Pending manual FlutterFlow verification. |
| `mockLoadCEOBriefing` | Populate CEO Briefing cards with static sample content. | Pending manual FlutterFlow verification. |
| `mockLoadFinanceSnapshot` | Populate Finance cards with fake/demo numbers only. | Pending manual FlutterFlow verification. |
| `mockLoadStrategicAdvisorMode` | Populate strategy mode cards and static recommendation response. | Pending manual FlutterFlow verification. |

Prototype rules:

- No Firebase connection.
- No Hermes/API connection.
- No live model calls.
- No live authentication.
- No persistence.
- No real audio capture.
- No real financial data.
- No production release assets.

## Screenshot Evidence

Screenshots are not available yet. Capture these manually after the FlutterFlow screens exist:

| Screenshot | Status | Notes |
|---|---|---|
| `dashboard.png` | Pending | Dashboard / Home screen proof. |
| `assistant.png` | Pending | Assistant / Voice Command screen proof. |
| `strategic-advisor-mode.png` | Pending | Strategic Advisor Mode screen proof. |
| `ceo-briefing.png` | Pending | CEO Briefing screen proof. |
| `finance.png` | Pending | Finance screen proof. |
| `settings.png` | Pending | Settings / Profile screen proof. |

Do not fabricate screenshots. Do not create image files unless actual screenshots are available.

## Validation Checklist

Before manual FlutterFlow screen creation:

- Confirm Sprint 009 screen list is still the active scope.
- Confirm no local runtime code changes are needed.
- Confirm visual identity uses pale pink, hot pink CTA, rounded cards, mobile-first spacing, and clean executive assistant styling.
- Confirm mock/stub behavior stays prototype-only.
- Confirm evidence location is `references/flutterflow/sprint-009/`.

After manual FlutterFlow screen creation:

- Capture all six screenshots listed above.
- Confirm primary and secondary click paths work.
- Confirm all mock actions are visually labeled or clearly understood as prototype-only.
- Confirm no Firebase integration was created.
- Confirm no Hermes/API integration was created.
- Confirm no live auth, persistence, live AI, real audio, or real financial data was connected.
- Confirm no generated FlutterFlow export was committed.

Repo validation commands:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
```

## Unresolved FlutterFlow Build Notes

- Manual FlutterFlow screen creation has not started in this repo checkpoint.
- Screenshot evidence is pending until actual FlutterFlow screens are available.
- Confirm whether lightweight screenshot files should be committed under this folder or stored externally with links before final build completion.
- Confirm whether Settings / Profile should be top-right-icon only or also available in a secondary menu.
- Confirm whether the mic visual cycle should include a separate `done` state in addition to the documented idle/listening/thinking states.
