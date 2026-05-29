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
