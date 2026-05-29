# FlutterFlow Build Handoff - Trina First Visual Prototype

## Purpose

This document is the handoff for the first FlutterFlow visual prototype of Trina.

The goal is to create a polished mobile app shell that proves the first user experience and visual direction before wiring live backend systems.

## Build Mode

Build in FlutterFlow.

Do not modify the local React/Vite repo.

Do not commit generated FlutterFlow exports to the repo unless a later sprint explicitly approves that workflow.

## First Build Scope

Build these screens first:

1. Splash / Loading
2. Welcome / Intro
3. Sign In / Demo Access
4. Home Dashboard
5. Chat Shell
6. Error / Offline

Placeholder/future only:

- Tasks
- Memory
- Files / Uploads
- Settings
- Theme Preview

## Visual Direction

Use the first visual theme:

`trina-barbie-v1`

The app should feel:

- Polished
- Feminine
- Modern
- Warm
- Premium
- Friendly
- Personal assistant focused

Do not make the product identity permanently locked to Barbie styling. Treat this as the first configurable client theme.

## Theme Tokens

| Token | Value | Usage |
|---|---|---|
| `primaryPink` | `#FF4FA3` | Primary buttons, active nav, key highlights |
| `softPink` | `#FFE4F1` | Cards, soft background accents |
| `blushBackground` | `#FFF7FB` | App background |
| `deepPlum` | `#3B1730` | Main text, headings |
| `roseText` | `#7A315D` | Secondary text |
| `white` | `#FFFFFF` | Cards and input surfaces |
| `successGreen` | `#3BAA6B` | Success states |
| `warningGold` | `#C58A18` | Warning states |
| `errorRose` | `#D93C65` | Error states |

## Typography

Preferred:

- Headings: Poppins SemiBold or similar.
- Body: Inter Regular or similar.
- Button labels: Poppins Medium.
- Chat text: Inter Regular.

## Component Rules

- Rounded cards: 20-28px radius.
- Buttons: 16-22px radius.
- Inputs: 18-22px radius.
- Use soft shadows only.
- Use generous spacing.
- Avoid cluttered dashboard sections.
- Keep the first prototype simple and clean.

## Shared Components

Create reusable components where practical:

- App wordmark/logo area.
- Primary button.
- Secondary button.
- Rounded card.
- Quick action card.
- Bottom navigation item.
- Chat bubble.
- Message input.
- Section header.
- Empty/error state card.

## Screen 1 - Splash / Loading

### Purpose

Show brand loading and route the user into the prototype.

### Content

Logo/text:

`Trina`

Subtitle:

`Your personal AI assistant`

Loading text:

`Getting things ready...`

### Behavior

For the prototype, use a short timed transition to Welcome or Home.

No real auth logic is required.

## Screen 2 - Welcome / Intro

### Purpose

Introduce Trina quickly and invite the user to start.

### Headline

`Meet Trina, your personal AI assistant.`

### Body

`Organize your day, capture ideas, manage reminders, and keep important context close.`

### Buttons

Primary:

`Start Demo`

Secondary:

`Sign In`

### Behavior

- Start Demo routes to Home Dashboard.
- Sign In routes to Demo Access/Auth placeholder.

## Screen 3 - Sign In / Demo Access

### Purpose

Provide demo entry and show future auth direction.

### Title

`Start with Trina`

### Options

- `Continue Demo`
- `Sign in with Email`
- `Create Account`

### Behavior

- Continue Demo routes to Home Dashboard.
- Sign in and Create Account may remain placeholders.
- Do not wire live auth unless later approved.

## Screen 4 - Home Dashboard

### Purpose

Create the first strong impression after entry.

### Required Sections

Greeting card:

`Good morning, Destrey`

Body:

`What would you like Trina to help with today?`

Quick actions:

- `Ask Trina`
- `Capture Note`
- `Plan My Day`
- `Review Tasks`

Recent activity:

- `You asked Trina to organize your app ideas.`
- `Reminder draft: follow up on FlutterFlow build.`
- `Memory updated: prefers polished Barbie-inspired theme.`

Continue conversation card:

Button:

`Open Chat`

Bottom navigation:

- Home
- Chat
- Tasks
- Memory
- Settings

## Sprint 009 - Screen Build Handoff

### Purpose

This section defines the exact FlutterFlow screen build plan for Trina's first mobile visual prototype.

This is a build handoff for the FlutterFlow operator. It is not a runtime implementation plan.

### Build Boundary

FlutterFlow builder may create visual screens inside FlutterFlow after approval.

Local repo Builder may update docs/planning only.

Do not modify:

- Local React/Vite runtime code
- Firebase config
- Hermes/API implementation
- Package files
- Native folders
- Production release files
- Generated FlutterFlow exports
- Secrets or `.env` files

### Visual Identity

Trina should feel like a polished personal AI executive assistant with a soft Barbie-inspired visual layer.

| Element | Direction |
|---|---|
| Background | Pale pink or soft blush |
| Primary CTA | Hot pink |
| Cards | White or very light pink with rounded corners |
| Typography | Clean, mobile-readable, not playful/kid-like |
| Icons | Simple line icons, rounded style |
| Mood | Premium, organized, feminine, executive assistant |
| Layout | Mobile-first, clear spacing, card-based |

Suggested color tokens:

| Token | Example |
|---|---|
| `trina-bg-soft` | `#FFF1F7` |
| `trina-card` | `#FFFFFF` |
| `trina-card-soft` | `#FFE5F0` |
| `trina-primary` | `#FF2E93` |
| `trina-primary-dark` | `#C2186A` |
| `trina-text-main` | `#231F20` |
| `trina-text-muted` | `#6F5E68` |
| `trina-border-soft` | `#F6BFD8` |

Color values are visual guidance, not final brand tokens.

### Screen List

The first FlutterFlow prototype should include six screens:

1. Dashboard / Home
2. Assistant / Voice Command
3. Strategic Advisor Mode
4. CEO Briefing
5. Finance
6. Settings / Profile

### Screen 1 - Dashboard / Home

Purpose: give the user a polished landing screen showing Trina's main value: quick access to assistant actions, executive briefing, strategy, and finance.

Layout:

- Top greeting area:
  - "Good morning, Destrey" or generic "Good morning"
  - Small subtitle: "Trina is ready for your next move."
- Status card:
  - "Today's Executive Snapshot"
  - 2-3 short bullets
- Quick action cards:
  - "Ask Trina"
  - "CEO Briefing"
  - "Strategic Advisor Mode"
  - "Finance"
- Bottom navigation:
  - Home
  - Assistant
  - Strategy
  - Briefing
  - Finance

Mock data:

```text
Today's Executive Snapshot
- 3 priorities need attention
- 2 follow-ups are ready
- Finance snapshot updated
```

Click behavior:

- Tap `Ask Trina` -> Assistant screen
- Tap `CEO Briefing` -> CEO Briefing screen
- Tap `Strategic Advisor Mode` -> Strategic Advisor screen
- Tap `Finance` -> Finance screen

### Screen 2 - Assistant / Voice Command

Purpose: show Trina as the primary conversational and voice assistant.

Layout:

- Header:
  - "Ask Trina"
  - Subtitle: "Voice or text command"
- Central mic button:
  - Large round hot pink button
  - Soft shadow or glow
  - Three states: Idle, Listening, Thinking
- Text input:
  - Placeholder: "Tell Trina what you need..."
- Suggested prompts:
  - "Prepare my CEO briefing"
  - "Review finance snapshot"
  - "Help me make a decision"
  - "Draft a client follow-up"
- Response card area:
  - Shows mock assistant answer after action

Mock behavior:

- `mockMicListeningState`
- `mockSendAssistantMessage`

Example mock response:

```text
Here is the best next move:

Focus on the highest-value follow-up first, then review the finance snapshot before making new commitments.
```

Click behavior:

- Tap mic -> cycle through listening/thinking/done UI states.
- Tap suggested prompt -> populate response card.
- Tap `CEO Briefing` prompt -> can link to CEO Briefing screen.

### Screen 3 - Strategic Advisor Mode

Purpose: show Trina as a high-level thinking partner for business decisions.

Layout:

- Header:
  - "Strategic Advisor Mode"
  - Subtitle: "Think through decisions before you act."
- Mode cards:
  - "Growth Strategy"
  - "Risk Review"
  - "Client Opportunity"
  - "Operations Bottleneck"
- Main advisor card:
  - Shows a sample strategic recommendation
- CTA:
  - "Ask for recommendation"

Mock data:

```text
Strategic Recommendation

Prioritize the offer with the shortest path to revenue, lowest setup friction, and strongest client urgency.
```

Click behavior:

- Tap each mode card -> update advisor card with static mock response.
- CTA -> Assistant screen or static response update.

### Screen 4 - CEO Briefing

Purpose: show a daily executive briefing view for the user.

Layout:

- Header:
  - "CEO Briefing"
  - Subtitle: "Your day, priorities, and next moves."
- Briefing sections:
  - Top Priorities
  - Follow-Ups
  - Decisions Needed
  - Suggested Next Move
- CTA:
  - "Ask Trina to prioritize"

Mock data:

```text
Top Priorities
1. Review client demo readiness
2. Confirm next sales follow-up
3. Check finance snapshot

Suggested Next Move
Prepare the demo first, then send the follow-up while the project is fresh.
```

Click behavior:

- Tap `Ask Trina to prioritize` -> Assistant screen with prefilled prompt or mock response.

### Screen 5 - Finance

Purpose: show a simple executive finance snapshot without real financial integration.

Layout:

- Header:
  - "Finance"
  - Subtitle: "Quick business snapshot"
- Metric cards:
  - Revenue Pipeline
  - Monthly Commitments
  - Open Opportunities
  - Attention Needed
- Insight card:
  - "Trina's read"
- CTA:
  - "Ask Trina about cash priorities"

Mock data:

```text
Revenue Pipeline: $18,500
Monthly Commitments: $4,200
Open Opportunities: 7
Attention Needed: 2 items
```

Click behavior:

- Tap CTA -> Assistant screen with finance prompt.

Rule: do not connect to real financial data in this sprint.

### Screen 6 - Settings / Profile

Purpose: give the prototype a complete app feel without building real account management.

Layout:

- Header:
  - "Settings"
- Profile card:
  - Name: "Destrey"
  - Role: "CEO / Operator"
- Preference rows:
  - Assistant tone
  - Briefing time
  - Voice mode
  - Notification style
- Footer note:
  - "Prototype settings only"

Mock behavior:

- Rows may open static placeholder panels.
- No account, auth, persistence, or backend behavior.

### Navigation

Use bottom tabs:

1. Home
2. Assistant
3. Strategy
4. Briefing
5. Finance

Settings can be reached from a profile icon in the top right.

The existing browser screenshot direction includes left-side navigation. For mobile, use bottom tabs and quick-action cards so the interface feels native to a phone.

### Prototype Click Path

The first demo path should be:

```text
Dashboard
-> Ask Trina
-> Tap central mic
-> See mock response
-> Strategic Advisor Mode
-> CEO Briefing
-> Finance
-> Back to Dashboard
```

Secondary path:

```text
Dashboard
-> CEO Briefing
-> Ask Trina to prioritize
-> Assistant response
```

### Mock Data Rules

- All numbers must be clearly fake/sample data.
- Do not use real client financial data.
- Do not connect to Firebase.
- Do not connect to Hermes/API.
- Do not call a live AI model.
- Do not add auth.
- Do not store user input.
- Do not create production release assets.

### Screenshot / Export Storage

Default storage location for lightweight proof assets:

```text
references/flutterflow/sprint-009/
```

Suggested files:

```text
references/flutterflow/sprint-009/dashboard.png
references/flutterflow/sprint-009/assistant.png
references/flutterflow/sprint-009/strategic-advisor-mode.png
references/flutterflow/sprint-009/ceo-briefing.png
references/flutterflow/sprint-009/finance.png
references/flutterflow/sprint-009/settings.png
references/flutterflow/sprint-009/click-path-notes.md
```

If FlutterFlow export files are large or generated, do not commit them unless explicitly approved. Store them externally and document the link or location.

### FlutterFlow Builder Checklist

Before screen build:

- Read Sprint 009 requirements, blueprint, acceptance, and handoff prompt.
- Confirm no runtime repo changes are needed.
- Confirm visual direction.
- Confirm screen list.
- Confirm mock data.
- Confirm screenshot storage.

After screen build:

- Capture screenshots of all six screens.
- Capture click-path notes.
- Confirm all mock actions are labeled as prototype-only.
- Confirm no backend integration was created.
- Confirm no production release work was created.

### Behavior

- Home and Chat should work.
- Tasks, Memory, and Settings can be placeholders or future badges.

## Screen 5 - Chat Shell

### Purpose

Show the core Trina assistant experience.

### Required Elements

- Header: `Trina`
- Status: `Online`
- Chat transcript area
- User message bubble
- Assistant message bubble
- Quick prompt chips
- Message input
- Send button

### Mock Conversation

User:

`Help me organize what to do next for the Trina app.`

Trina:

`Start with the first mobile screens, keep the backend stubbed, and validate the look before adding deeper features.`

Quick prompts:

- `Plan my day`
- `Capture this idea`
- `What should I do next?`

### Behavior

The send button may append a mock response.

Do not wire live AI/model calls.

## Screen 6 - Error / Offline

### Purpose

Show a friendly fallback state.

### Headline

`Trina is having trouble connecting.`

### Body

`Check your connection and try again. Your current draft is safe.`

### Buttons

Primary:

`Try Again`

Secondary:

`Back Home`

## Mock Data

Use this data for the visual prototype only.

```json
{
  "demoUser": {
    "displayName": "Destrey",
    "theme": "trina-barbie-v1"
  },
  "recentActivity": [
    "You asked Trina to organize your app ideas.",
    "Reminder draft: follow up on FlutterFlow build.",
    "Memory updated: prefers polished Barbie-inspired theme."
  ],
  "quickActions": [
    "Ask Trina",
    "Capture Note",
    "Plan My Day",
    "Review Tasks"
  ],
  "chatMessages": [
    {
      "role": "user",
      "text": "Help me organize what to do next for the Trina app."
    },
    {
      "role": "assistant",
      "text": "Start with the first mobile screens, keep the backend stubbed, and validate the look before adding deeper features."
    }
  ]
}
```

## API Stub Rules

Use placeholder API concepts only.

Do not connect live APIs.

Do not store API keys.

Do not call model providers from FlutterFlow.

### Placeholder Endpoint

`POST /assistant/chat`

### Placeholder Request

```json
{
  "userId": "demo-user",
  "sessionId": "demo-session",
  "message": "string",
  "clientTheme": "trina-barbie-v1",
  "source": "flutterflow-mobile"
}
```

### Placeholder Response

```json
{
  "reply": "This is a demo response from Trina.",
  "sessionId": "demo-session",
  "actions": [],
  "memoryHints": [],
  "error": null
}
```

## Validation Checklist

Before calling the FlutterFlow prototype ready:

- Splash screen exists.
- Welcome screen exists.
- Demo Access screen exists.
- Home Dashboard exists.
- Chat Shell exists.
- Error / Offline screen exists.
- Home and Chat navigation work.
- Placeholder nav items are clearly marked.
- Theme tokens are applied consistently.
- Mock data is used only for prototype display.
- No live model calls are configured.
- No secrets/API keys are present.
- Screens are mobile-first and preview cleanly.
- Screenshots are captured for Architect review.

## Sprint 008 First Visual Prototype Additions

Sprint 008 uses this handoff plus the current app screenshot as the visual reference for the first FlutterFlow visual prototype.

### Screenshot Reference

The prototype should adapt the screenshot's overall visual identity to mobile:

- Pale pink background.
- Hot pink primary CTA.
- Soft rounded cards.
- Left-side quick action/navigation concept adapted for mobile.
- Large central microphone action.
- Executive assistant feel.
- `Strategic Advisor Mode`.
- `CEO Briefing`.
- Finance quick action.

Do not make the phone UI feel like a desktop screen squeezed onto mobile. Preserve the concept, not the exact desktop layout.

### Recommended Mobile Adaptation

- Use bottom navigation for Home, Chat, Tasks, Memory, and Settings.
- Keep Home and Chat functional in the visual prototype.
- Keep Tasks, Memory, and Settings as placeholders.
- Use a Home Dashboard quick-action grid or horizontal quick-action strip to represent the screenshot's left navigation concept.
- Make the central microphone action the primary visual focus on Home Dashboard.
- Place `Strategic Advisor Mode` as a visible mode/status chip on Home Dashboard and Chat Shell.
- Place `CEO Briefing` as a quick action and a chat prompt chip.
- Place `Finance` as a quick action with mock subtext such as `Review cash flow snapshot`.

### Sprint 008 Additional Theme Tokens

| Token | Value | Usage |
|---|---|---|
| `hotPinkPressed` | `#E83D91` | Pressed CTA and active button state |
| `palePanelPink` | `#FFF0F7` | Secondary card panels |
| `mutedRose` | `#A55B82` | Placeholder and metadata text |

### Sprint 008 Mock Data

```json
{
  "demoUser": {
    "displayName": "Destrey",
    "theme": "trina-barbie-v1",
    "mode": "Strategic Advisor Mode"
  },
  "homeDashboard": {
    "primaryPrompt": "What should we move forward today?",
    "assistantStatus": "Ready",
    "quickActions": [
      {
        "label": "CEO Briefing",
        "description": "Review today's priorities"
      },
      {
        "label": "Finance",
        "description": "Review cash flow snapshot"
      },
      {
        "label": "Plan My Day",
        "description": "Organize the next actions"
      },
      {
        "label": "Ask Trina",
        "description": "Start a focused chat"
      }
    ],
    "recentActivity": [
      "Prepared a CEO briefing outline.",
      "Drafted priorities for the FlutterFlow prototype.",
      "Flagged finance review as a quick action."
    ]
  },
  "chatMessages": [
    {
      "role": "user",
      "text": "Give me a CEO briefing for today."
    },
    {
      "role": "assistant",
      "text": "Here is your focused briefing: review prototype progress, confirm finance priorities, and keep the next build scoped to the six approved screens."
    }
  ]
}
```

### Sprint 008 API Stubs

Use named placeholders only:

- `mockStartDemoSession`
- `mockSendAssistantMessage`
- `mockMicListeningState`

These stubs are not live endpoints. Do not connect Firebase, Gmail, backend APIs, live auth, model providers, Telegram, Hermes, AI Hub, browser speech recognition, or native speech during Sprint 008.

### Sprint 008 Validation Evidence

The FlutterFlow Builder should report:

- Screens created.
- Components created.
- Theme tokens used.
- Mock data used.
- Navigation behavior.
- Microphone mock state behavior.
- Confirmation that all API behavior is stubbed.
- Screenshot or preview notes for Architect review.
- Anything not completed.

## FlutterFlow Builder Prompt

Use this with the FlutterFlow Builder after Sprint 007 is accepted.

```text
Build the first Trina FlutterFlow visual prototype using the handoff in:

docs/FLUTTERFLOW_BUILD_HANDOFF.md

Build only these screens:

1. Splash / Loading
2. Welcome / Intro
3. Sign In / Demo Access
4. Home Dashboard
5. Chat Shell
6. Error / Offline

Use the `trina-barbie-v1` theme tokens.

Use mock/demo data only.

Do not connect live APIs.
Do not store secrets or API keys.
Do not call model providers.
Do not build backend workflows.
Do not overbuild Tasks, Memory, Files, Settings, or Theme Preview.

After building, report:

1. Screens created.
2. Components created.
3. Theme tokens used.
4. Mock data used.
5. Navigation behavior.
6. Anything not completed.
7. Screenshots or preview notes for review.
```
