# Sprint 008 Blueprint - FlutterFlow First Visual Prototype

## Objective

Create the Sprint 008 planning and handoff package for the first FlutterFlow visual prototype.

This sprint prepares the prototype scope. It does not build FlutterFlow screens inside this repo and does not modify local runtime code.

## Files To Review First

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/VALIDATION.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `planning/sprints/007-flutterflow-first-screen-build-handoff/requirements.md`
- `planning/sprints/007-flutterflow-first-screen-build-handoff/blueprint.md`
- `planning/sprints/007-flutterflow-first-screen-build-handoff/acceptance.md`
- `planning/sprints/007-flutterflow-first-screen-build-handoff/handoff-prompt.md`

## Files To Create

- `planning/sprints/008-flutterflow-first-visual-prototype/requirements.md`
- `planning/sprints/008-flutterflow-first-visual-prototype/blueprint.md`
- `planning/sprints/008-flutterflow-first-visual-prototype/acceptance.md`
- `planning/sprints/008-flutterflow-first-visual-prototype/handoff-prompt.md`

## Files To Update

- `planning/STATE.md`
- `planning/DECISIONS.md`, if decisions change
- `planning/RISKS.md`, if risks change
- `planning/QUESTIONS.md`, if questions change
- `docs/ARCHITECTURE.md`, if architecture notes change
- `docs/API.md`, if stub contracts change
- `docs/VALIDATION.md`, if validation rules change
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`, if Sprint 008 adds prototype guidance

## Implementation Plan

1. Confirm repo status.
2. Read the Sprint 008 Architect Pack.
3. Create the Sprint 008 sprint folder.
4. Create requirements, blueprint, acceptance, and handoff prompt files.
5. Update planning state and logs for Sprint 008.
6. Add Sprint 008 visual prototype guidance to the FlutterFlow handoff.
7. Add API stub contracts to docs.
8. Add architecture and validation notes.
9. Run docs-only validation commands.
10. Report created files, updated files, skipped files, risks, conflicts, and final git status.

## Prototype Screen Definitions

### 1. Splash / Loading

Purpose:

- Present Trina brand and demo loading state.

Required elements:

- `Trina`
- `Your personal AI assistant`
- Pale pink background.
- Soft card or centered wordmark.
- Loading indicator.
- Text: `Getting your briefing ready...`

Behavior:

- Timed transition to Welcome or Home for demo.
- No real auth check.

### 2. Welcome / Intro

Purpose:

- Introduce Trina and start demo access.

Required elements:

- Headline: `Meet Trina, your strategic AI assistant.`
- Body: `Plan your day, capture ideas, review priorities, and keep your executive briefing close.`
- Primary CTA: `Start Demo`
- Secondary CTA: `Sign In`
- Visual nod to central mic or assistant briefing card.

Behavior:

- `Start Demo` uses the `mockStartDemoSession` concept and routes to Home.
- `Sign In` routes to Demo Access.
- No live auth.

### 3. Sign In / Demo Access

Purpose:

- Give a future-auth placeholder while keeping demo mode primary.

Required elements:

- Title: `Start with Trina`
- Primary option: `Continue Demo`
- Placeholder options:
  - `Sign in with Email`
  - `Create Account`
- Note: `Prototype access only`

Behavior:

- Continue Demo routes to Home.
- Sign-in options are placeholders or disabled states.
- No Firebase Auth.

### 4. Home Dashboard

Purpose:

- Deliver the strongest screenshot-inspired first impression.

Required elements:

- Greeting: `Good morning, Destrey`
- Mode chip: `Strategic Advisor Mode`
- Central microphone action.
- Primary prompt: `What should we move forward today?`
- Quick action cards:
  - `CEO Briefing`
  - `Finance`
  - `Plan My Day`
  - `Ask Trina`
- Recent activity card.
- Bottom nav with Home and Chat functional; remaining items placeholder.

Behavior:

- Mic toggles mock listening state only.
- `CEO Briefing` and `Ask Trina` route to Chat Shell or set mock prompt context.
- `Finance` may show a placeholder toast/card only.
- No live data.

### 5. Chat Shell

Purpose:

- Show the core assistant conversation surface.

Required elements:

- Header: `Trina`
- Status/mode: `Strategic Advisor Mode`
- Mock transcript.
- User bubble.
- Assistant bubble.
- Quick prompt chips:
  - `CEO Briefing`
  - `Finance Snapshot`
  - `Plan My Day`
- Message input.
- Send button.
- Mic button as visual/mock state.

Behavior:

- Sending a message uses mock transcript behavior only.
- No live backend.

### 6. Error / Offline

Purpose:

- Provide a polished fallback state.

Required elements:

- Title: `Trina is offline for a moment`
- Body: `Your demo is still safe. Check your connection and try again.`
- Primary CTA: `Try Again`
- Secondary CTA: `Back Home`

Behavior:

- Try Again can replay mock recovery.
- Back Home routes to Home.

## Shared Components

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
- Mode/status chip.
- Central microphone action.

## Mobile Adaptation

Adapt the screenshot's left-side quick action/navigation concept for mobile:

- Use bottom navigation for primary app destinations.
- Use a Home Dashboard quick-action grid or horizontal quick-action strip for the screenshot's left navigation concept.
- Keep Home and Chat functional in the prototype.
- Keep Tasks, Memory, and Settings as placeholders.
- Do not squeeze a desktop sidebar into a phone layout.

## Theme Direction

Use `trina-barbie-v1`.

Required tokens:

- `primaryPink`: `#FF4FA3`
- `hotPinkPressed`: `#E83D91`
- `softPink`: `#FFE4F1`
- `blushBackground`: `#FFF7FB`
- `palePanelPink`: `#FFF0F7`
- `deepPlum`: `#3B1730`
- `roseText`: `#7A315D`
- `mutedRose`: `#A55B82`
- `white`: `#FFFFFF`
- `successGreen`: `#3BAA6B`
- `warningGold`: `#C58A18`
- `errorRose`: `#D93C65`

## Mock Data

- User display name: `Destrey`
- Mode: `Strategic Advisor Mode`
- Briefing label: `CEO Briefing`
- Primary prompt: `What should we move forward today?`
- Assistant status: `Ready`
- Finance quick action: `Finance`
- Finance subtext: `Review cash flow snapshot`

Recent activity:

- `Prepared a CEO briefing outline.`
- `Drafted priorities for the FlutterFlow prototype.`
- `Flagged finance review as a quick action.`

Chat transcript:

- User: `Give me a CEO briefing for today.`
- Trina: `Here is your focused briefing: review prototype progress, confirm finance priorities, and keep the next build scoped to the six approved screens.`

## API Stubs

Use named placeholders only:

- `mockStartDemoSession`
- `mockSendAssistantMessage`
- `mockMicListeningState`

These are not live endpoints and must not call Firebase, Gmail, backend APIs, model providers, native speech, browser speech recognition, Telegram, Hermes, or AI Hub.

## FlutterFlow-Only Build Rules

- Build the visual prototype in FlutterFlow only after owner approval.
- Use mock data only.
- Use API stubs only.
- Do not connect live services.
- Do not create production release files.
- Do not commit generated exports to this repo.

## Validation

Run docs-only validation:

```bash
git status --branch --short
find planning/sprints/008-flutterflow-first-visual-prototype -maxdepth 1 -type f | sort
test -f docs/FLUTTERFLOW_BUILD_HANDOFF.md && echo "handoff doc exists"
rg -n "008-flutterflow-first-visual-prototype|Strategic Advisor Mode|CEO Briefing|Finance|mockStartDemoSession|mockSendAssistantMessage|mockMicListeningState|trina-barbie-v1|FlutterFlow only|No local React/Vite runtime code" planning docs
git diff --name-only
git diff --stat
```

Do not run app, Firebase, deploy, package install, build, FlutterFlow export, or production mobile release commands during this docs-application step.
