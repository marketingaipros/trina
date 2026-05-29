# Architect Pack — Sprint 007 FlutterFlow First Screen Build Handoff

**Project:** Trina / TrinaOS Voice  
**Repo path:** `/Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice`  
**Sprint:** `007-flutterflow-first-screen-build-handoff`  
**Pack file:** `architect-packs/trina-007-flutterflow-first-screen-build-handoff-architect-pack.md`  
**Created by:** Architect Layer  
**Purpose:** Prepare the first FlutterFlow implementation handoff without changing local runtime code.

---

## 0. Architect Intent

Sprint 005 aligned the project direction around FlutterFlow-first mobile delivery.

Sprint 006 created the FlutterFlow mobile app blueprint: screens, navigation, user flows, data/API boundaries, theme direction, and validation rules.

Sprint 007 should now produce the first practical FlutterFlow build handoff.

This sprint does **not** build inside the local React/Vite repo.

This sprint should create a clear FlutterFlow Builder package that tells the FlutterFlow implementer exactly what to build first:

- Which screens to create first.
- What the first theme should look like.
- What copy to use.
- What components to build.
- What data should be mocked or stubbed.
- Which backend/API connections should be placeholders.
- How the first FlutterFlow preview should be validated.

The output is a handoff package, not runtime code.

---

## 1. Sprint Goal

Create a Builder-ready FlutterFlow first-screen build package for Trina.

The goal is to let the FlutterFlow Builder create the first visual prototype without guessing.

Sprint 007 should define:

- First build scope.
- First screen order.
- Theme tokens.
- Visual direction.
- Screen copy.
- Component list.
- Placeholder/mock data.
- API stub rules.
- FlutterFlow build checklist.
- FlutterFlow validation checklist.
- Exact handoff prompt for the FlutterFlow Builder.

---

## 2. Recommended Sprint 007 Scope

### Recommended First Build Scope

Build only the first visual/mobile shell:

1. Splash / Loading
2. Welcome / Intro
3. Sign In / Demo Access
4. Home Dashboard
5. Chat screen shell
6. Error / Offline fallback

Keep these as the first FlutterFlow implementation scope.

Do **not** build all screens from Sprint 006 yet.

Tasks, Memory, Files, Settings, and Theme Preview can be visible as navigation placeholders or future routes, but they should not become full implementations in this sprint.

---

## 3. In Scope

Create or update planning/docs only:

- `architect-packs/trina-007-flutterflow-first-screen-build-handoff-architect-pack.md`
- `planning/sprints/007-flutterflow-first-screen-build-handoff/requirements.md`
- `planning/sprints/007-flutterflow-first-screen-build-handoff/blueprint.md`
- `planning/sprints/007-flutterflow-first-screen-build-handoff/acceptance.md`
- `planning/sprints/007-flutterflow-first-screen-build-handoff/handoff-prompt.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`, if decisions change
- `planning/RISKS.md`, if risks change
- `planning/QUESTIONS.md`, if questions change

---

## 4. Out of Scope

- No FlutterFlow project creation inside this repo.
- No generated FlutterFlow export files.
- No React/Vite runtime code changes.
- No Firebase implementation changes.
- No Hermes/API implementation.
- No AI Hub Orchestrator implementation.
- No package changes.
- No deployment.
- No app store work.
- No secrets or credentials.
- No staging, commit, or push unless separately approved by the user.

---

## 5. Required Decisions To Record

Add or update in `planning/DECISIONS.md` if missing.

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-05-29 | Sprint 007 produces a FlutterFlow build handoff package, not local app code. | The first mobile UI work should happen in FlutterFlow using clear written instructions. | Local repo remains planning/docs source of truth. |
| 2026-05-29 | First FlutterFlow build scope is limited to Splash, Welcome, Demo Access, Home Dashboard, Chat Shell, and Error/Offline. | Reduces build risk and creates a quick visual prototype. | Remaining screens stay planned for later. |
| 2026-05-29 | Sprint 007 uses mocked/stubbed data only unless a later decision approves live backend wiring. | Prevents premature backend coupling. | FlutterFlow can show realistic behavior without exposing secrets or relying on unfinished APIs. |
| 2026-05-29 | First theme direction is Barbie-inspired Trina v1, with configurable theme tokens. | User wants a polished client-ready Barbie-style look while preserving future theme flexibility. | Theme values should be defined as reusable tokens, not hard-coded ad hoc styling. |

---

## 6. Required Risks To Record

Add or update in `planning/RISKS.md`.

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| FlutterFlow Builder may overbuild beyond the first screen scope. | Medium | Medium | Sprint 007 limits first build to six screens and marks other screens as placeholders/future. | Open |
| Visual styling may become inconsistent if theme tokens are not documented. | Medium | Medium | Define color, typography, spacing, border radius, shadows, and component rules. | Open |
| Mock data may be mistaken for live backend behavior. | Medium | High | Label all demo data as mock/stubbed and keep API wiring placeholders. | Open |
| FlutterFlow implementation may drift from local planning docs. | Medium | Medium | Require FlutterFlow Builder to report screen list, components, mock data, and validation results back into project docs. | Open |

---

## 7. Required Questions To Record

Add or update in `planning/QUESTIONS.md`.

| Question | Owner | Needed By | Status | Notes |
|---|---|---|---|---|
| Should the first FlutterFlow prototype use demo mode only, or also include Firebase Auth UI placeholders? | User/Architect | Before FlutterFlow implementation | Open | Recommended: demo mode first, auth UI placeholder only. |
| Should the first visual prototype use Barbie-inspired Trina v1 as default? | User | Before FlutterFlow implementation | Open | Recommended: yes. |
| Should the FlutterFlow Builder create only preview screens, or also configure custom actions/API calls as stubs? | Architect/Builder | Before implementation | Open | Recommended: visual screens plus API placeholders only. |
| Where should FlutterFlow screenshots/exports be stored after the first build? | User/Architect | After FlutterFlow prototype | Open | Recommended: `references/flutterflow/` or external screenshots folder, not runtime app folders. |

---

## 8. First Theme Direction — Barbie-Inspired Trina v1

The first FlutterFlow visual prototype should feel:

- Polished.
- Feminine.
- Modern.
- Warm.
- Premium.
- Soft but professional.
- Personal assistant focused.

### Theme Tokens

Use these as starting values. FlutterFlow Builder may adjust slightly for contrast and usability.

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

### Typography

Use FlutterFlow available fonts or Google Fonts if available:

- Headings: Poppins SemiBold or similar.
- Body: Inter Regular or similar.
- Button labels: Poppins Medium.
- Chat text: Inter Regular.

### Component Style

- Rounded cards: 20–28px radius.
- Buttons: 16–22px radius.
- Inputs: 18–22px radius.
- Use soft shadows only.
- Use generous spacing.
- Avoid cluttered dashboards.
- Use warm, clean assistant language.

---

## 9. First Screen Package

### Screen 1 — Splash / Loading

Purpose:

- Present Trina brand.
- Show loading state.
- Route user to Welcome or Home depending on session/demo state.

Recommended content:

- Logo/text: `Trina`
- Subtitle: `Your personal AI assistant`
- Loading text: `Getting things ready...`

Behavior:

- Use a short timed transition for prototype.
- No real auth logic required in Sprint 007.

---

### Screen 2 — Welcome / Intro

Purpose:

- Explain Trina quickly.
- Invite user into demo or sign-in path.

Recommended headline:

`Meet Trina, your personal AI assistant.`

Recommended body:

`Organize your day, capture ideas, manage reminders, and keep important context close.`

Primary CTA:

`Start Demo`

Secondary CTA:

`Sign In`

Notes:

- `Sign In` may route to Demo Access/Auth placeholder.
- Keep copy short.

---

### Screen 3 — Sign In / Demo Access

Purpose:

- Provide demo entry and future auth placeholder.

Recommended title:

`Start with Trina`

Recommended options:

- `Continue Demo`
- `Sign in with Email` placeholder
- `Create Account` placeholder

Prototype rule:

- Demo mode is the only required functional route.
- Auth buttons can be placeholders.

---

### Screen 4 — Home Dashboard

Purpose:

- Main first impression after entry.

Recommended sections:

1. Greeting card:
   - `Good morning, Destrey`
   - `What would you like Trina to help with today?`

2. Quick actions:
   - `Ask Trina`
   - `Capture Note`
   - `Plan My Day`
   - `Review Tasks`

3. Recent activity:
   - `You asked Trina to organize your app ideas.`
   - `Reminder draft: follow up on FlutterFlow build.`
   - `Memory updated: prefers polished Barbie-inspired theme.`

4. Continue conversation card:
   - CTA: `Open Chat`

5. Bottom navigation:
   - Home
   - Chat
   - Tasks
   - Memory
   - Settings

Prototype rule:

- Tasks, Memory, and Settings can show placeholder routes or disabled/future badges if not built.

---

### Screen 5 — Chat Shell

Purpose:

- Show the core assistant interaction UI.

Required elements:

- Header: `Trina`
- Status: `Online`
- Chat transcript area.
- User message bubble.
- Assistant message bubble.
- Message input.
- Send button.
- Optional quick prompts.

Mock conversation:

User:

`Help me organize what to do next for the Trina app.`

Trina:

`Start with the first mobile screens, keep the backend stubbed, and validate the look before adding deeper features.`

Quick prompts:

- `Plan my day`
- `Capture this idea`
- `What should I do next?`

Prototype rule:

- Send button can append a mock response.
- Do not wire live AI model calls in Sprint 007.

---

### Screen 6 — Error / Offline

Purpose:

- Show friendly fallback state.

Recommended headline:

`Trina is having trouble connecting.`

Recommended body:

`Check your connection and try again. Your current draft is safe.`

CTA:

`Try Again`

Secondary:

`Back Home`

---

## 10. Mock Data

Use this mock data only for visual prototype.

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

Mock data must be labeled as mock/stubbed.

---

## 11. API Stub Rules

Sprint 007 FlutterFlow build should not connect to live AI models.

Recommended stubs:

- `POST /assistant/chat` placeholder.
- Mock response object matching Sprint 006 API contract.
- No API keys in FlutterFlow.
- No model provider calls from FlutterFlow.
- No secrets.

Expected request shape for placeholder:

```json
{
  "userId": "demo-user",
  "sessionId": "demo-session",
  "message": "string",
  "clientTheme": "trina-barbie-v1",
  "source": "flutterflow-mobile"
}
```

Expected response shape for placeholder:

```json
{
  "reply": "This is a demo response from Trina.",
  "sessionId": "demo-session",
  "actions": [],
  "memoryHints": [],
  "error": null
}
```

---

## 12. Required File Outputs

Codex must create or update the following files.

---

# File: `planning/sprints/007-flutterflow-first-screen-build-handoff/requirements.md`

```markdown
# Sprint 007 Requirements — FlutterFlow First Screen Build Handoff

## Goal

Create a Builder-ready FlutterFlow first-screen build handoff for Trina.

This sprint defines exactly what the FlutterFlow Builder should create first, what should stay mocked, what visual theme to use, and how the first prototype should be validated.

---

## Business Objective

Trina needs a polished first mobile prototype that shows the client-facing direction without prematurely wiring backend systems or changing the local React/Vite repo.

The first prototype should prove the app can look and feel right before deeper backend, memory, auth, storage, and assistant automation work begins.

---

## Users

- End user/client previewing Trina on mobile.
- User/operator reviewing the first visual direction.
- FlutterFlow Builder implementing the first screens.
- Architect Layer maintaining scope and acceptance criteria.

---

## First Build Scope

The first FlutterFlow implementation should build:

1. Splash / Loading
2. Welcome / Intro
3. Sign In / Demo Access
4. Home Dashboard
5. Chat Shell
6. Error / Offline

Other Sprint 006 screens may appear as navigation placeholders or future routes only.

---

## In Scope

- First FlutterFlow screen package.
- Barbie-inspired Trina v1 theme tokens.
- Screen-level copy.
- Component list.
- Mock/demo data.
- API placeholder rules.
- FlutterFlow validation checklist.
- FlutterFlow Builder handoff prompt.

---

## Out of Scope

- No local app/runtime code changes.
- No generated FlutterFlow exports committed to this repo.
- No Firebase implementation.
- No Hermes/API implementation.
- No live model calls.
- No secrets or API keys.
- No deployment.
- No app store setup.
- No staging, commit, or push unless explicitly approved.

---

## Theme Direction

Use Barbie-inspired Trina v1 as the first visual prototype theme.

The theme must remain configurable.

Do not hard-code the visual direction as the permanent app identity.

---

## Data Rules

Use mock/demo data only.

Do not connect live backend services in this sprint.

Do not store API keys, Firebase secrets, model keys, or private credentials in FlutterFlow or repo docs.

---

## Success Criteria

Sprint 007 is complete when the repo contains a clear FlutterFlow first-screen build handoff that a FlutterFlow Builder can follow without guessing.
```

---

# File: `planning/sprints/007-flutterflow-first-screen-build-handoff/blueprint.md`

```markdown
# Sprint 007 Blueprint — FlutterFlow First Screen Build Handoff

## Objective

Create the handoff package for the first FlutterFlow visual prototype.

This is a planning/docs sprint only.

The actual FlutterFlow build happens after this sprint is accepted.

---

## Files To Review First

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/DATA_MODEL.md`
- `docs/VALIDATION.md`
- `planning/sprints/006-flutterflow-mobile-app-blueprint/requirements.md`
- `planning/sprints/006-flutterflow-mobile-app-blueprint/blueprint.md`
- `planning/sprints/006-flutterflow-mobile-app-blueprint/acceptance.md`

---

## Files To Create

- `planning/sprints/007-flutterflow-first-screen-build-handoff/requirements.md`
- `planning/sprints/007-flutterflow-first-screen-build-handoff/blueprint.md`
- `planning/sprints/007-flutterflow-first-screen-build-handoff/acceptance.md`
- `planning/sprints/007-flutterflow-first-screen-build-handoff/handoff-prompt.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`

---

## Files To Update

- `planning/STATE.md`
- `planning/DECISIONS.md`, if new decisions are not already captured
- `planning/RISKS.md`, if new risks are not already captured
- `planning/QUESTIONS.md`, if new questions are not already captured
- `docs/VALIDATION.md`

---

## Implementation Plan

1. Confirm clean repo state.
   - Run `git status --branch --short`.

2. Review Sprint 006 blueprint.
   - Preserve screen list, navigation, data ownership, and API boundary decisions.

3. Create Sprint 007 folder.
   - `planning/sprints/007-flutterflow-first-screen-build-handoff/`

4. Create Sprint 007 requirements.
   - Define first FlutterFlow build scope and boundaries.

5. Create Sprint 007 blueprint.
   - Define first screen package, theme tokens, mock data, and API stub rules.

6. Create Sprint 007 acceptance criteria.
   - Make docs-only completion objective.

7. Create Sprint 007 handoff prompt.
   - Must instruct Builder to summarize before editing.
   - Must forbid runtime code changes.

8. Create `docs/FLUTTERFLOW_BUILD_HANDOFF.md`.
   - This is the main document to give to the FlutterFlow Builder.
   - Include screen-by-screen build instructions.
   - Include theme tokens.
   - Include mock data.
   - Include API stub rules.
   - Include validation checklist.

9. Update `planning/STATE.md`.
   - Mark Sprint 006 accepted/committed/pushed.
   - Set current/next sprint to Sprint 007.
   - Next action: apply Sprint 007 Architect Pack.

10. Update decisions, risks, and questions if needed.

11. Update `docs/VALIDATION.md`.
   - Add FlutterFlow first-screen validation checklist.

12. Run validation:
   - `git status --branch --short`
   - `find planning/sprints/007-flutterflow-first-screen-build-handoff -maxdepth 1 -type f | sort`
   - `test -f docs/FLUTTERFLOW_BUILD_HANDOFF.md && echo "handoff doc exists"`
   - `rg -n "Splash|Welcome|Demo Access|Home Dashboard|Chat Shell|Error / Offline|primaryPink|trina-barbie-v1|mock|stub" planning docs`
   - `git diff --name-only`
   - `git diff --stat`

13. Report:
   - Files created.
   - Files updated.
   - Validation commands run.
   - Confirmation that no runtime code changed.
   - Whether acceptance criteria are satisfied.

---

## First FlutterFlow Build Scope

Build these first:

1. Splash / Loading
2. Welcome / Intro
3. Sign In / Demo Access
4. Home Dashboard
5. Chat Shell
6. Error / Offline

Placeholder only:

- Tasks
- Memory
- Files / Uploads
- Settings
- Theme Preview

---

## Component List

### Shared Components

- App logo / wordmark
- Primary button
- Secondary button
- Rounded card
- Quick action card
- Bottom navigation item
- Chat bubble
- Message input
- Section header
- Empty/error state card

### Screen Components

Splash:

- Centered logo.
- Subtitle.
- Loading indicator.

Welcome:

- Hero card.
- Headline.
- Short body copy.
- Primary CTA.
- Secondary CTA.

Demo Access:

- Demo access card.
- Email sign-in placeholder.
- Create account placeholder.

Home Dashboard:

- Greeting card.
- Quick action grid.
- Recent activity list.
- Continue chat card.
- Bottom navigation.

Chat Shell:

- Header.
- Chat transcript.
- Mock user bubble.
- Mock assistant bubble.
- Quick prompt chips.
- Message input.
- Send button.

Error / Offline:

- Error icon or visual.
- Headline.
- Body copy.
- Retry CTA.
- Back Home CTA.

---

## FlutterFlow Build Rules

- Use mock data only.
- Do not connect live APIs.
- Do not store secrets.
- Do not call model providers.
- Do not overbuild backend workflows.
- Keep screens mobile-first.
- Use reusable theme tokens/components.
- Keep bottom navigation simple.
- Capture screenshots after build for review.
```

---

# File: `planning/sprints/007-flutterflow-first-screen-build-handoff/acceptance.md`

```markdown
# Sprint 007 Acceptance Criteria — FlutterFlow First Screen Build Handoff

Sprint 007 is complete only when all criteria below are satisfied.

---

## Scope Acceptance

- Sprint 007 folder exists at `planning/sprints/007-flutterflow-first-screen-build-handoff/`.
- The sprint includes:
  - `requirements.md`
  - `blueprint.md`
  - `acceptance.md`
  - `handoff-prompt.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md` exists.
- Sprint 007 is documented as a planning/docs handoff sprint.
- No local runtime app code is changed.
- No generated FlutterFlow export files are committed.
- No Firebase, Hermes/API, deploy, package, build, or native config files are changed.

---

## Handoff Acceptance

`docs/FLUTTERFLOW_BUILD_HANDOFF.md` defines:

- First build screen list.
- Screen-by-screen build instructions.
- Barbie-inspired Trina v1 theme tokens.
- Component list.
- Mock/demo data.
- API stub rules.
- Validation checklist.
- Out-of-scope items.

---

## First Build Scope Acceptance

The handoff limits first FlutterFlow build to:

- Splash / Loading
- Welcome / Intro
- Sign In / Demo Access
- Home Dashboard
- Chat Shell
- Error / Offline

The handoff marks these as placeholder/future only:

- Tasks
- Memory
- Files / Uploads
- Settings
- Theme Preview

---

## Theme Acceptance

- Theme tokens are documented.
- `trina-barbie-v1` is documented as the first visual prototype.
- Theme configurability is documented.
- Barbie-inspired styling is not treated as the permanent hard-coded product identity.

---

## Data/API Acceptance

- Mock/demo data is documented.
- API stubs are documented.
- Live backend wiring is out of scope.
- Live model calls are out of scope.
- Secrets/API keys are forbidden.

---

## Validation Acceptance

- `docs/VALIDATION.md` includes first-screen FlutterFlow validation checks.
- Validation commands are run and reported.
- Report confirms no runtime code changed.
- Report confirms no staging, commit, or push occurred unless explicitly approved by the user.

---

## Completion Standard

Sprint 007 is complete only when a FlutterFlow Builder can use the handoff document to build the first visual prototype without needing to infer scope, copy, theme, data, or backend boundaries.
```

---

# File: `planning/sprints/007-flutterflow-first-screen-build-handoff/handoff-prompt.md`

```markdown
# Sprint 007 Builder Handoff Prompt — FlutterFlow First Screen Build Handoff

You are the Builder operating inside the Trina repo.

Repo path:

`/Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice`

Apply Sprint 007 from the Architect Pack:

`architect-packs/trina-007-flutterflow-first-screen-build-handoff-architect-pack.md`

---

## First Read

Before making changes, read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/DATA_MODEL.md`
- `docs/VALIDATION.md`
- `planning/sprints/006-flutterflow-mobile-app-blueprint/requirements.md`
- `planning/sprints/006-flutterflow-mobile-app-blueprint/blueprint.md`
- `planning/sprints/006-flutterflow-mobile-app-blueprint/acceptance.md`

Then summarize:

1. What Sprint 007 is supposed to accomplish.
2. Which files you expect to create or update.
3. What validation steps you will run.
4. Any blockers or ambiguities.

Stop after the summary and wait for approval before editing.

---

## Sprint Goal

Create a FlutterFlow first-screen build handoff package.

This is a docs/planning sprint only.

Do not build the FlutterFlow app yet.

---

## Create

- `planning/sprints/007-flutterflow-first-screen-build-handoff/requirements.md`
- `planning/sprints/007-flutterflow-first-screen-build-handoff/blueprint.md`
- `planning/sprints/007-flutterflow-first-screen-build-handoff/acceptance.md`
- `planning/sprints/007-flutterflow-first-screen-build-handoff/handoff-prompt.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`

---

## Update As Needed

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`

---

## Do Not Modify

- React/Vite runtime code.
- FlutterFlow generated exports.
- Firebase config.
- Deploy config.
- Hermes/API implementation.
- Native app folders.
- `.env.local`.
- Package files.
- Build outputs.
- Screenshots.
- Secrets.

Do not stage, commit, or push.

---

## Required Handoff Content

Document:

- First FlutterFlow build screen list.
- Screen-by-screen build instructions.
- Theme tokens for `trina-barbie-v1`.
- Component list.
- Mock data.
- API stub rules.
- Validation checklist.
- Out-of-scope items.
- Builder prompt for FlutterFlow implementation.

---

## Validation Commands

Run:

```bash
git status --branch --short
find planning/sprints/007-flutterflow-first-screen-build-handoff -maxdepth 1 -type f | sort
test -f docs/FLUTTERFLOW_BUILD_HANDOFF.md && echo "handoff doc exists"
rg -n "Splash|Welcome|Demo Access|Home Dashboard|Chat Shell|Error / Offline|primaryPink|trina-barbie-v1|mock|stub" planning docs
git diff --name-only
git diff --stat
```

Do not run app, Firebase, deploy, package install, build, or FlutterFlow commands.

---

## Final Report

After applying the pack, report:

1. Files created.
2. Files updated.
3. Validation commands run.
4. Confirmation that no runtime/app code changed.
5. Whether Sprint 007 acceptance criteria are satisfied.
6. Remaining risks or questions.
```

---

# File: `docs/FLUTTERFLOW_BUILD_HANDOFF.md`

```markdown
# FlutterFlow Build Handoff — Trina First Visual Prototype

## Purpose

This document is the handoff for the first FlutterFlow visual prototype of Trina.

The goal is to create a polished mobile app shell that proves the first user experience and visual direction before wiring live backend systems.

---

## Build Mode

Build in FlutterFlow.

Do not modify the local React/Vite repo.

Do not commit generated FlutterFlow exports to the repo unless a later sprint explicitly approves that workflow.

---

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

---

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

---

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

---

## Typography

Preferred:

- Headings: Poppins SemiBold or similar.
- Body: Inter Regular or similar.
- Button labels: Poppins Medium.
- Chat text: Inter Regular.

---

## Component Rules

- Rounded cards: 20–28px radius.
- Buttons: 16–22px radius.
- Inputs: 18–22px radius.
- Use soft shadows only.
- Use generous spacing.
- Avoid cluttered dashboard sections.
- Keep the first prototype simple and clean.

---

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

---

## Screen 1 — Splash / Loading

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

---

## Screen 2 — Welcome / Intro

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

---

## Screen 3 — Sign In / Demo Access

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

---

## Screen 4 — Home Dashboard

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

---

## Screen 5 — Chat Shell

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

---

## Screen 6 — Error / Offline

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

---

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

---

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

---

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

---

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
```

---

## 13. Validation Update For `docs/VALIDATION.md`

Add this section if missing.

```markdown
## FlutterFlow First-Screen Prototype Validation

| Area | Validation Method | Status | Notes |
|---|---|---|---|
| First screens | Confirm Splash, Welcome, Demo Access, Home Dashboard, Chat Shell, and Error/Offline are defined in handoff. | Pending | Sprint 007 |
| Scope boundary | Confirm Tasks, Memory, Files, Settings, and Theme Preview are placeholder/future only. | Pending | Sprint 007 |
| Theme | Confirm `trina-barbie-v1` tokens are documented and reusable. | Pending | Sprint 007 |
| Mock data | Confirm prototype uses mock/demo data only. | Pending | Sprint 007 |
| API stubs | Confirm live backend calls are out of scope and placeholder API rules are documented. | Pending | Sprint 007 |
| Runtime safety | Confirm no local runtime app code or generated FlutterFlow exports changed. | Pending | Sprint 007 |
```

---

## 14. Apply-Pack Prompt For Codex

Use this prompt to apply the Architect Pack to the project folder.

```text
You are the Builder operating inside:

/Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice

Apply this Architect Pack as a docs/planning-only sprint:

architect-packs/trina-007-flutterflow-first-screen-build-handoff-architect-pack.md

Important:

- This is Sprint 007 — FlutterFlow First Screen Build Handoff.
- Do not build in FlutterFlow yet.
- Do not modify React/Vite runtime code.
- Do not modify Firebase config.
- Do not modify `.env.local`.
- Do not modify deploy config.
- Do not modify native app folders.
- Do not create generated FlutterFlow export files.
- Do not stage, commit, or push.

First read:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/ARCHITECTURE.md
- docs/API.md
- docs/DATA_MODEL.md
- docs/VALIDATION.md
- planning/sprints/006-flutterflow-mobile-app-blueprint/requirements.md
- planning/sprints/006-flutterflow-mobile-app-blueprint/blueprint.md
- planning/sprints/006-flutterflow-mobile-app-blueprint/acceptance.md

Then summarize before editing:

1. What Sprint 007 is supposed to accomplish.
2. Which files you expect to create or update.
3. What validation steps you will run.
4. Any blockers or ambiguities.

Stop after the summary and wait for my approval before making changes.
```

---

## 15. Likely Sprint 008

Do not start Sprint 008 yet.

Likely next sprint after Sprint 007 is accepted and committed:

`Sprint 008 — FlutterFlow First Prototype Review`

Purpose:

- Review screenshots/preview notes from the FlutterFlow prototype.
- Compare against `docs/FLUTTERFLOW_BUILD_HANDOFF.md`.
- Decide what needs visual adjustment.
- Decide whether to proceed to auth/API stub wiring.
- Capture feedback as planning docs before deeper implementation.
