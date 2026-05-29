# Architect Pack - Sprint 008 FlutterFlow First Visual Prototype

**Project:** Trina / TrinaOS Voice  
**Repo path:** `/Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice`  
**Sprint:** `008-flutterflow-first-visual-prototype`  
**Pack file:** `architect-packs/trina-008-flutterflow-first-visual-prototype-architect-pack.md`  
**Created by:** Architect Layer  
**Purpose:** Create the planning and handoff package for the first FlutterFlow visual prototype build using Sprint 007 and the current app screenshot as visual reference.

---

## 0. Architect Intent

Sprint 008 is the first FlutterFlow visual prototype sprint.

Sprint 007 produced the FlutterFlow first-screen handoff. Sprint 008 should now convert that handoff into a precise Architect Pack for a FlutterFlow-only visual prototype build.

This sprint must keep the local React/Vite runtime untouched.

The goal is to make the FlutterFlow Builder able to build the first six prototype screens from a clear visual, interaction, data, validation, and scope contract.

Important boundary:

- This pack is **not** the direct Builder implementation prompt yet.
- Do not start FlutterFlow implementation from this file until the owner approves the Sprint 008 pack and requests the Builder prompt or build execution.

---

## 1. Sprint Goal

Create the Architect Pack for the first FlutterFlow visual prototype build using:

- The Sprint 007 FlutterFlow handoff.
- The current app screenshot as the visual reference.
- The `trina-barbie-v1` theme direction.
- Mock data and API stubs only.

The prototype should prove Trina's first mobile visual identity before any live backend, auth, Firebase, Gmail, or production release work begins.

---

## 2. Required Visual Identity

Match the current screenshot's overall visual identity and adapt it for mobile FlutterFlow screens.

Required visual signals:

- Pale pink background.
- Hot pink primary CTA.
- Soft rounded cards.
- Left-side quick action/navigation concept adapted for mobile.
- Large central microphone action.
- Executive assistant feel.
- `Strategic Advisor Mode`.
- `CEO Briefing`.
- Finance quick action.
- Polished, warm, premium, personal assistant tone.

Use the first theme:

`trina-barbie-v1`

This is the approved first prototype theme direction, not a permanent hard-coded product identity.

---

## 3. First Prototype Screen Scope

Build or define only these six screens:

1. Splash / Loading
2. Welcome / Intro
3. Sign In / Demo Access
4. Home Dashboard
5. Chat Shell
6. Error / Offline

Other concepts may appear only as placeholders, nav items, badges, or mock quick actions.

Do not build full Tasks, Memory, Files, Settings, Gmail, Firebase, auth, backend, deployment, or production mobile release flows in this sprint.

---

## 4. In Scope

Create or update planning/docs only:

- `planning/STATE.md`
- `planning/DECISIONS.md`, if decisions change
- `planning/RISKS.md`, if risks change
- `planning/QUESTIONS.md`, if questions change
- `docs/ARCHITECTURE.md`, if architecture changes
- `docs/API.md`, if interface or stub contracts change
- `docs/VALIDATION.md`, if validation rules change
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`, if Sprint 008 needs additions
- `planning/sprints/008-flutterflow-first-visual-prototype/requirements.md`
- `planning/sprints/008-flutterflow-first-visual-prototype/blueprint.md`
- `planning/sprints/008-flutterflow-first-visual-prototype/acceptance.md`
- `planning/sprints/008-flutterflow-first-visual-prototype/handoff-prompt.md`

The Sprint 008 sprint folder should describe the eventual FlutterFlow visual prototype build, but it should not include generated FlutterFlow export files.

---

## 5. Out of Scope

- No local React/Vite runtime code changes.
- No production mobile release files.
- No generated FlutterFlow code committed to this repo.
- No real Firebase connection.
- No real Gmail connection.
- No backend API connection.
- No live auth.
- No live model calls.
- No Hermes implementation.
- No AI Hub Orchestrator implementation.
- No Firebase deploy.
- No native mobile config changes.
- No package changes.
- No secrets, tokens, or credentials.
- No staging.
- No commit.
- No push.

---

## 6. Required Decisions To Record

Add or confirm these in `planning/DECISIONS.md` if missing.

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-05-29 | Sprint 008 is the first FlutterFlow visual prototype sprint. | Sprint 007 handoff is ready to be converted into an implementation-ready prototype scope. | The next Builder step can build in FlutterFlow only after owner approval. |
| 2026-05-29 | Sprint 008 prototype uses the current app screenshot as visual reference. | The owner wants the first mobile prototype to preserve the existing Trina visual identity. | FlutterFlow screens should adapt the screenshot's pale pink, hot pink CTA, rounded card, assistant dashboard, mic, and quick-action language to mobile. |
| 2026-05-29 | Sprint 008 uses mock data and API stubs only. | The first visual prototype should prove UX before connecting backend systems. | No Firebase, Gmail, backend API, live auth, or model calls are connected. |
| 2026-05-29 | The first FlutterFlow prototype keeps `trina-barbie-v1` configurable. | The visual direction is approved for the first prototype but should not lock the product forever. | Theme tokens remain reusable and future themes remain possible. |

---

## 7. Required Risks To Record

Add or confirm these in `planning/RISKS.md` if missing.

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| FlutterFlow visual prototype may drift from the current screenshot identity. | Medium | Medium | Require explicit screenshot-derived visual signals: pale pink background, hot pink CTA, rounded cards, central mic, assistant mode labels, and finance quick action. | Open |
| Builder may accidentally wire live Firebase, Gmail, auth, backend APIs, or model calls during the prototype. | Medium | High | Sprint 008 acceptance requires mock data and API stubs only. | Open |
| Left-side navigation from the web screenshot may not translate cleanly to mobile. | Medium | Medium | Adapt it as a mobile quick-action rail, top segmented row, horizontal action strip, or bottom nav while preserving the concept. | Open |
| Prototype may become too broad for a first visual pass. | Medium | Medium | Limit full screen work to six screens and keep all other areas as placeholders. | Open |

---

## 8. Required Questions To Record

Add or confirm these in `planning/QUESTIONS.md` if missing.

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| Which mobile layout best adapts the screenshot's left-side quick action/navigation concept? | Builder / Owner | Sprint 008 prototype review | Open | Recommended options: bottom nav plus quick-action strip, compact side rail on large phones, or home-screen action cards. |
| Should the central microphone action be visual-only or tappable with a mock listening state? | Owner / Builder | Sprint 008 implementation | Open | Recommended: tappable mock state only, no real speech or backend connection. |
| Should `Strategic Advisor Mode` and `CEO Briefing` appear on Home Dashboard, Chat Shell, or both? | Owner / Builder | Sprint 008 implementation | Open | Recommended: Home Dashboard hero context plus Chat Shell mode/status chip. |
| Where should Sprint 008 FlutterFlow screenshots be stored after build review? | Owner / Architect | After Sprint 008 build | Open | Recommended: `references/flutterflow/sprint-008/` or external shared folder, not runtime app folders. |

---

## 9. Theme Tokens

Use Sprint 007 tokens as the base.

| Token | Value | Usage |
|---|---|---|
| `primaryPink` | `#FF4FA3` | Primary CTA, active nav, mic action, key highlights |
| `hotPinkPressed` | `#E83D91` | Pressed CTA and active button state |
| `softPink` | `#FFE4F1` | Cards, soft background accents |
| `blushBackground` | `#FFF7FB` | App/page background |
| `palePanelPink` | `#FFF0F7` | Secondary card panels |
| `deepPlum` | `#3B1730` | Main text and headings |
| `roseText` | `#7A315D` | Secondary text |
| `mutedRose` | `#A55B82` | Placeholder and metadata text |
| `white` | `#FFFFFF` | Primary cards and input surfaces |
| `successGreen` | `#3BAA6B` | Success states |
| `warningGold` | `#C58A18` | Warning states and briefing flags |
| `errorRose` | `#D93C65` | Error states |

Typography:

- Headings: Poppins SemiBold or similar.
- Body: Inter Regular or similar.
- Button labels: Poppins Medium.
- Chat text: Inter Regular.

Component rules:

- Rounded cards: 20-28px radius.
- Buttons: 16-22px radius.
- Inputs: 18-22px radius.
- Mic action: circular or near-circular, prominent, hot pink, centered on Home Dashboard.
- Shadows: soft and subtle only.
- Background: pale pink, not pure white.
- Cards: white or very soft pink.
- Avoid clutter. The executive assistant feel should come from clear hierarchy and confident labels, not dense decoration.

---

## 10. Mobile Adaptation Of Screenshot Concepts

The current screenshot includes desktop-like left quick actions/navigation. For mobile FlutterFlow, adapt the concept without forcing a desktop sidebar.

Recommended mobile pattern:

- Home uses a compact top status area with `Strategic Advisor Mode`.
- Home uses a central assistant/microphone action as the main focal point.
- Home uses 2x2 quick action cards beneath the mic:
  - `CEO Briefing`
  - `Finance`
  - `Plan My Day`
  - `Ask Trina`
- Bottom navigation includes:
  - Home
  - Chat
  - Tasks
  - Memory
  - Settings
- Tasks, Memory, and Settings are placeholders only in Sprint 008.

Alternative acceptable pattern:

- A horizontal quick-action strip under the greeting card.
- A compact left-edge rail only on wider mobile/tablet preview.

Do not make the mobile prototype feel like a desktop screen squeezed onto a phone.

---

## 11. Mock Data

Use mock data only.

Suggested dashboard mock values:

- User display name: `Destrey`
- Mode: `Strategic Advisor Mode`
- Briefing label: `CEO Briefing`
- Primary prompt: `What should we move forward today?`
- Assistant status: `Ready`
- Finance quick action: `Finance`
- Finance subtext: `Review cash flow snapshot`
- Recent activity:
  - `Prepared a CEO briefing outline.`
  - `Drafted priorities for the FlutterFlow prototype.`
  - `Flagged finance review as a quick action.`

Suggested chat mock transcript:

- User: `Give me a CEO briefing for today.`
- Trina: `Here is your focused briefing: review prototype progress, confirm finance priorities, and keep the next build scoped to the six approved screens.`

Suggested error/offline copy:

- Title: `Trina is offline for a moment`
- Body: `Your demo is still safe. Check your connection and try again.`
- CTA: `Try Again`
- Secondary CTA: `Back Home`

---

## 12. API Stub Rules

Do not connect live APIs.

Represent API calls as named placeholders only:

### Stub: `mockStartDemoSession`

Purpose:

- Moves user from Welcome or Demo Access into Home Dashboard.

Input:

```json
{
  "mode": "demo",
  "clientTheme": "trina-barbie-v1"
}
```

Output:

```json
{
  "sessionId": "demo-session-001",
  "displayName": "Destrey",
  "status": "ready"
}
```

### Stub: `mockSendAssistantMessage`

Purpose:

- Shows how Chat Shell will later call Hermes/API without wiring a live endpoint.

Input:

```json
{
  "sessionId": "demo-session-001",
  "message": "Give me a CEO briefing for today.",
  "clientTheme": "trina-barbie-v1",
  "source": "flutterflow-mobile"
}
```

Output:

```json
{
  "reply": "Here is your focused briefing: review prototype progress, confirm finance priorities, and keep the next build scoped to the six approved screens.",
  "actions": [],
  "error": null
}
```

### Stub: `mockMicListeningState`

Purpose:

- Lets the central microphone action show visual feedback without real speech recognition.

States:

- `idle`
- `listening`
- `captured`
- `error`

No browser speech recognition, native speech, Firebase, OpenRouter, Gmail, Telegram, or Hermes calls should be configured in Sprint 008.

---

## 13. Required Sprint Files

The eventual Sprint 008 application should create the following files.

### `planning/sprints/008-flutterflow-first-visual-prototype/requirements.md`

Must include:

- Sprint goal.
- Business objective.
- User audience.
- Six-screen scope.
- Screenshot-derived visual identity requirements.
- `trina-barbie-v1` theme direction.
- Mock-data-only rule.
- API-stub-only rule.
- Explicit out-of-scope list.
- Success criteria.

### `planning/sprints/008-flutterflow-first-visual-prototype/blueprint.md`

Must include:

- Files to read first.
- Files to create/update.
- Implementation plan.
- Six screen definitions.
- Shared components.
- Mobile adaptation plan for left quick action/navigation concept.
- Large central mic behavior as mock state.
- `Strategic Advisor Mode`, `CEO Briefing`, and finance quick action placement.
- Mock data.
- API stubs.
- FlutterFlow-only build rules.
- Validation steps.

### `planning/sprints/008-flutterflow-first-visual-prototype/acceptance.md`

Must include acceptance for:

- Sprint folder and four sprint files exist.
- `planning/STATE.md` updated to Sprint 008.
- Relevant docs updated only where needed.
- First six screens are defined.
- Screenshot identity is represented.
- `trina-barbie-v1` tokens are used.
- Mock data and API stubs only.
- No runtime app code changed.
- No generated exports, release files, staging, commit, or push.
- Validation commands are run and reported.

### `planning/sprints/008-flutterflow-first-visual-prototype/handoff-prompt.md`

Must include:

- Builder role and repo path.
- First-read list.
- Instruction to summarize before editing and wait for approval.
- Clear statement that this sprint prepares the FlutterFlow visual prototype package and does not modify local runtime code.
- Exact files to create/update.
- Out-of-scope list.
- Validation commands.
- Final report requirements.

This handoff prompt is for applying the Sprint 008 Architect Pack to repo docs. It is **not** the direct FlutterFlow Builder implementation prompt.

---

## 14. Required Updates To Existing Docs

### `planning/STATE.md`

Update current sprint to:

`008-flutterflow-first-visual-prototype`

Recommended status text:

> Sprint 008 is a FlutterFlow-first visual prototype planning/build-scope sprint. It uses the Sprint 007 FlutterFlow handoff and the current app screenshot as visual reference. The build target is FlutterFlow only, using mock data and API stubs, with no local React/Vite runtime changes and no live Firebase, Gmail, backend API, auth, or production mobile release work.

Next actions should say:

- Apply Sprint 008 Architect Pack after owner approval.
- Build the first six FlutterFlow screens only after the Sprint 008 docs are accepted.
- Keep runtime app code, generated exports, secrets, deploy, staging, commit, and push out of scope.

### `docs/FLUTTERFLOW_BUILD_HANDOFF.md`

Add a Sprint 008 section:

- Screenshot reference instructions.
- First visual prototype build focus.
- Mobile adaptation of left quick actions/navigation.
- Central microphone action.
- `Strategic Advisor Mode`.
- `CEO Briefing`.
- Finance quick action.
- Mock data.
- API stubs.
- Validation evidence expected from FlutterFlow Builder.

### `docs/API.md`

Add or confirm a `FlutterFlow Sprint 008 Prototype Stubs` section with:

- `mockStartDemoSession`
- `mockSendAssistantMessage`
- `mockMicListeningState`

Make clear these are placeholder contracts only and not live endpoints.

### `docs/ARCHITECTURE.md`

Add or confirm Sprint 008 note:

- FlutterFlow owns the visual prototype.
- Local React/Vite app remains current/reference implementation.
- Sprint 008 does not change production architecture or connect live services.

### `docs/VALIDATION.md`

Add Sprint 008 validation:

```bash
git status --branch --short
find planning/sprints/008-flutterflow-first-visual-prototype -maxdepth 1 -type f | sort
test -f docs/FLUTTERFLOW_BUILD_HANDOFF.md && echo "handoff doc exists"
rg -n "008-flutterflow-first-visual-prototype|Strategic Advisor Mode|CEO Briefing|Finance|mockStartDemoSession|mockSendAssistantMessage|mockMicListeningState|trina-barbie-v1|FlutterFlow only|No local React/Vite runtime code" planning docs
git diff --name-only
git diff --stat
```

Do not run app, Firebase, deploy, package install, build, FlutterFlow export, or production mobile release commands during the docs-application step.

---

## 15. Screen Requirements

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

- `Start Demo` uses `mockStartDemoSession` concept and routes to Home.
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

---

## 16. Validation Acceptance

Sprint 008 is accepted only when the Builder report confirms:

- Sprint folder exists.
- Required sprint files exist.
- Required planning/docs updates are present.
- Six screens are defined.
- Screenshot-derived identity is documented.
- `trina-barbie-v1` tokens are documented.
- Mock data is clearly labeled.
- API stubs are clearly labeled as non-live.
- No local runtime app code changed.
- No generated FlutterFlow exports were added.
- No production mobile release files were created.
- No Firebase, Gmail, backend API, auth, deploy, package, staging, commit, or push actions occurred.
- Validation commands were run and results were reported.

---

## 17. Builder Report Requirements

After applying this pack to the repo docs, the Builder must report:

1. Files created.
2. Files updated.
3. Validation commands run.
4. Confirmation that no local React/Vite runtime code changed.
5. Confirmation that no generated exports or production mobile release files were created.
6. Confirmation that no live Firebase, Gmail, backend API, auth, deploy, stage, commit, or push action occurred.
7. Whether Sprint 008 acceptance criteria are satisfied.
8. Remaining risks or questions.

---

## 18. Explicit Stop Point

Stop after creating this Architect Pack unless the owner explicitly approves applying it.

Do not provide the direct FlutterFlow Builder implementation prompt yet.

Do not start FlutterFlow implementation yet.
