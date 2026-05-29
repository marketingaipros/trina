# Trina Sprint 009 Architect Pack — FlutterFlow Screen Build Handoff

**Project:** Trina  
**Sprint:** 009 — `009-flutterflow-screen-build-handoff`  
**Date:** 2026-05-29  
**Architect Layer:** ChatGPT  
**Builder Layer:** Codex / FlutterFlow builder  
**Pack type:** Docs/planning and FlutterFlow handoff only  
**Status:** Ready for Builder to apply into project folder  

---

## 0. Architect Intent

Sprint 009 turns the approved Sprint 008 visual prototype scope into a Builder-ready FlutterFlow screen build handoff.

Sprint 008 established the visual prototype direction. Sprint 009 does **not** build runtime code. It gives the Builder and FlutterFlow operator a precise enough plan to build the first Trina mobile visual prototype without guessing.

The output of this sprint is a local repo documentation checkpoint, not a FlutterFlow export.

---

## 1. Source Context

The Builder should treat these as source files:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/VALIDATION.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `planning/sprints/008-flutterflow-first-visual-prototype/requirements.md`
- `planning/sprints/008-flutterflow-first-visual-prototype/blueprint.md`
- `planning/sprints/008-flutterflow-first-visual-prototype/acceptance.md`
- `planning/sprints/008-flutterflow-first-visual-prototype/handoff-prompt.md`

Sprint 009 should preserve Sprint 008 decisions:

- FlutterFlow is the visual prototype layer.
- The local React/Vite runtime is not changed in this sprint.
- Firebase, Hermes/API, package files, native folders, production release files, generated FlutterFlow exports, and secrets are out of scope.
- Prototype behavior is mock/stub only.
- Visual style follows the current Trina screenshot direction: pale pink background, hot pink CTA, rounded cards, central mic, mobile-adapted quick actions, `Strategic Advisor Mode`, `CEO Briefing`, and Finance.

---

## 2. Files This Pack Should Create or Update

### Create

```text
planning/sprints/009-flutterflow-screen-build-handoff/requirements.md
planning/sprints/009-flutterflow-screen-build-handoff/blueprint.md
planning/sprints/009-flutterflow-screen-build-handoff/acceptance.md
planning/sprints/009-flutterflow-screen-build-handoff/handoff-prompt.md
```

### Update

```text
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/FLUTTERFLOW_BUILD_HANDOFF.md
docs/VALIDATION.md
docs/API.md
```

### Do Not Touch

```text
src/
app runtime code
React/Vite implementation files
Firebase config or deployment files
Hermes/API implementation files
package files
native app folders
generated FlutterFlow exports
production release files
.env or secret files
```

---

# File: `planning/STATE.md`

Update the current state to reflect Sprint 009.

```markdown
# Project State

## Current Sprint

Sprint 009 — `009-flutterflow-screen-build-handoff`

## Current Status

Sprint 008 is complete and pushed as a docs/planning checkpoint.

Sprint 009 is preparing the Builder-ready FlutterFlow screen build handoff for Trina's first mobile visual prototype. This sprint defines exact screens, screen layouts, mock data, clickable prototype behavior, screenshot/export storage expectations, and validation rules.

## Recently Completed

- Sprint 008 Architect Pack was created, applied, validated, staged, committed, and pushed.
- Sprint 008 established Trina's first FlutterFlow visual prototype scope.
- Sprint 008 documented the six-screen prototype direction, visual identity, mock behavior, and FlutterFlow-only boundary.

## Active Work

- Create Sprint 009 planning files.
- Tighten `docs/FLUTTERFLOW_BUILD_HANDOFF.md` into screen-by-screen FlutterFlow build instructions.
- Define clickable prototype path and mock data rules.
- Define where visual proof screenshots should be stored.

## Next Action

After Sprint 009 is applied, the Builder must read the Sprint 009 files and summarize the FlutterFlow build plan before creating or modifying anything.

## Blockers

- FlutterFlow screen creation still requires explicit approval after the Sprint 009 handoff is reviewed.
- Screenshot/export storage should default to `references/flutterflow/sprint-009/` unless the operator chooses external shared storage.
```

---

# File: `planning/DECISIONS.md`

Append these decisions if not already present.

```markdown
## Sprint 009 Decisions

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-05-29 | Sprint 009 is FlutterFlow handoff planning only. | The prototype needs exact screen-level instructions before visual build work begins. | Codex must update docs/planning only and must not create FlutterFlow exports or runtime code. |
| 2026-05-29 | Visual proof assets should default to `references/flutterflow/sprint-009/`. | Keeps screenshots and prototype reference material outside runtime code while preserving evidence in the project folder. | FlutterFlow screenshots, notes, and exports can be organized without polluting app source. |
| 2026-05-29 | The first FlutterFlow prototype should use mock data and stub behavior only. | The goal is visual validation before backend integration. | No Firebase, Hermes/API, authentication, persistence, or production mobile release work is included. |
| 2026-05-29 | Mobile navigation should adapt the browser screenshot's left-side navigation into bottom tabs and quick-action cards. | FlutterFlow prototype is mobile-first and should not force desktop navigation into a phone layout. | The FlutterFlow builder should use mobile-native navigation patterns. |
```

---

# File: `planning/RISKS.md`

Append or update these risks.

```markdown
## Sprint 009 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| FlutterFlow builder may start building screens before the handoff is reviewed. | Medium | Medium | Require a read-and-summarize checkpoint before implementation. | Open |
| Visual prototype may drift from the Trina screenshot direction. | Medium | High | Document color, layout, and component rules screen-by-screen. | Open |
| Mock behavior may be confused with real backend behavior. | Medium | High | Label all mock actions and stub contracts clearly. | Open |
| Screenshot/export files may be scattered outside the project handoff. | Medium | Medium | Use `references/flutterflow/sprint-009/` or explicitly document external storage. | Open |
| Mobile navigation may not translate cleanly from the existing browser layout. | Medium | Medium | Define bottom tabs, quick actions, and screen entry points before build. | Open |
```

---

# File: `planning/QUESTIONS.md`

Append these open questions if not answered.

```markdown
## Sprint 009 Open Questions

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| Should Sprint 009 visual proof files be committed under `references/flutterflow/sprint-009/`, or stored externally with only links in repo docs? | Operator | Before Sprint 010 build completion | Open | Default recommendation: use `references/flutterflow/sprint-009/` for lightweight screenshots and notes only. |
| Should the first FlutterFlow prototype use a bottom navigation bar, a home dashboard with quick actions, or both? | Architect / Operator | Before FlutterFlow build starts | Proposed | Recommended: use both bottom tabs and home quick-action cards. |
| Should the mic button appear on every screen or only the main Assistant screen? | Architect / Operator | Before FlutterFlow build starts | Proposed | Recommended: persistent central mic on the main Assistant screen only, with smaller mic entry points elsewhere. |
| Should the prototype include a fake onboarding screen or start directly at the dashboard? | Operator | Before FlutterFlow build starts | Proposed | Recommended: start directly at the dashboard for first client demo speed. |
```

---

# File: `docs/API.md`

Update mock/stub section only. Do not define real backend implementation.

```markdown
## Sprint 009 FlutterFlow Mock Contracts

Sprint 009 does not add real APIs.

For FlutterFlow prototype planning, these mock contracts are approved as visual/stub behavior only:

| Mock Contract | Purpose | Input | Output | Notes |
|---|---|---|---|---|
| `mockStartDemoSession` | Start a local demo session in the prototype. | None or selected user profile. | Demo state object. | No auth, persistence, or backend call. |
| `mockSendAssistantMessage` | Simulate a chat/assistant response. | User message string or selected quick action. | Assistant response card and optional suggested action. | Must be clearly mock-only. |
| `mockMicListeningState` | Simulate mic listening/processing/done states. | Tap state. | UI state transition. | No real audio capture or transcription. |
| `mockLoadCEOBriefing` | Populate CEO briefing cards. | None. | Static briefing summary cards. | Uses sample text only. |
| `mockLoadFinanceSnapshot` | Populate finance screen cards. | None. | Static finance metrics. | Uses fake/demo numbers only. |
| `mockLoadStrategicAdvisorMode` | Populate strategic advisor prompt options. | None. | Prompt cards and sample answer. | No live model call. |

These names describe prototype intent only. They are not production API endpoints.
```

---

# File: `docs/VALIDATION.md`

Add Sprint 009 validation rules.

```markdown
## Sprint 009 Validation — FlutterFlow Screen Build Handoff

Sprint 009 is complete when the repo contains a Builder-ready FlutterFlow handoff and no runtime implementation changes.

### Required Checks

```bash
git status --branch --short
find planning/sprints/009-flutterflow-screen-build-handoff -maxdepth 1 -type f | sort
test -f docs/FLUTTERFLOW_BUILD_HANDOFF.md && echo "handoff doc exists"
rg -n "009-flutterflow-screen-build-handoff|Dashboard|Assistant|Strategic Advisor Mode|CEO Briefing|Finance|Settings|mockStartDemoSession|mockSendAssistantMessage|mockMicListeningState|mockLoadCEOBriefing|mockLoadFinanceSnapshot|references/flutterflow/sprint-009|FlutterFlow only|No local React/Vite runtime code" planning docs
git diff --name-only
git diff --stat
```

### Acceptance Validation

- Sprint 009 folder exists.
- Sprint 009 contains exactly the four required sprint files.
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md` contains screen-by-screen build instructions.
- Mock/stub behavior is documented as non-production.
- Visual proof storage is documented.
- No runtime app code changed.
- No Firebase, Hermes/API implementation, package, native, release, generated export, secret, or env files changed.
```

---

# File: `docs/FLUTTERFLOW_BUILD_HANDOFF.md`

Update or append this section.

```markdown
# FlutterFlow Build Handoff

## Sprint 009 — Screen Build Handoff

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

---

## Visual Identity

### Brand Direction

Trina should feel like a polished personal AI executive assistant with a soft Barbie-inspired visual layer.

### Core Style

| Element | Direction |
|---|---|
| Background | Pale pink or soft blush |
| Primary CTA | Hot pink |
| Cards | White or very light pink with rounded corners |
| Typography | Clean, mobile-readable, not playful/kid-like |
| Icons | Simple line icons, rounded style |
| Mood | Premium, organized, feminine, executive assistant |
| Layout | Mobile-first, clear spacing, card-based |

### Suggested Color Tokens

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

---

## Screen List

The first FlutterFlow prototype should include six screens:

1. Dashboard / Home
2. Assistant / Voice Command
3. Strategic Advisor Mode
4. CEO Briefing
5. Finance
6. Settings / Profile

---

## Screen 1 — Dashboard / Home

### Purpose

Give the user a polished landing screen showing Trina's main value: quick access to assistant actions, executive briefing, strategy, and finance.

### Layout

- Top greeting area:
  - "Good morning, Destrey" or generic "Good morning"
  - Small subtitle: "Trina is ready for your next move."
- Status card:
  - "Today’s Executive Snapshot"
  - 2–3 short bullets
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

### Mock Data

```text
Today’s Executive Snapshot
- 3 priorities need attention
- 2 follow-ups are ready
- Finance snapshot updated
```

### Click Behavior

- Tap `Ask Trina` → Assistant screen
- Tap `CEO Briefing` → CEO Briefing screen
- Tap `Strategic Advisor Mode` → Strategic Advisor screen
- Tap `Finance` → Finance screen

---

## Screen 2 — Assistant / Voice Command

### Purpose

Show Trina as the primary conversational and voice assistant.

### Layout

- Header:
  - "Ask Trina"
  - Subtitle: "Voice or text command"
- Central mic button:
  - Large round hot pink button
  - Soft shadow or glow
  - Three states:
    - Idle
    - Listening
    - Thinking
- Text input:
  - Placeholder: "Tell Trina what you need..."
- Suggested prompts:
  - "Prepare my CEO briefing"
  - "Review finance snapshot"
  - "Help me make a decision"
  - "Draft a client follow-up"
- Response card area:
  - Shows mock assistant answer after action

### Mock Behavior

Use:

- `mockMicListeningState`
- `mockSendAssistantMessage`

### Example Mock Response

```text
Here is the best next move:

Focus on the highest-value follow-up first, then review the finance snapshot before making new commitments.
```

### Click Behavior

- Tap mic → cycle through listening/thinking/done UI states.
- Tap suggested prompt → populate response card.
- Tap `CEO Briefing` prompt → can link to CEO Briefing screen.

---

## Screen 3 — Strategic Advisor Mode

### Purpose

Show Trina as a high-level thinking partner for business decisions.

### Layout

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

### Mock Data

```text
Strategic Recommendation

Prioritize the offer with the shortest path to revenue, lowest setup friction, and strongest client urgency.
```

### Click Behavior

- Tap each mode card → update advisor card with static mock response.
- CTA → Assistant screen or static response update.

---

## Screen 4 — CEO Briefing

### Purpose

Show a daily executive briefing view for the user.

### Layout

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

### Mock Data

```text
Top Priorities
1. Review client demo readiness
2. Confirm next sales follow-up
3. Check finance snapshot

Suggested Next Move
Prepare the demo first, then send the follow-up while the project is fresh.
```

### Click Behavior

- Tap `Ask Trina to prioritize` → Assistant screen with prefilled prompt or mock response.

---

## Screen 5 — Finance

### Purpose

Show a simple executive finance snapshot without real financial integration.

### Layout

- Header:
  - "Finance"
  - Subtitle: "Quick business snapshot"
- Metric cards:
  - Revenue Pipeline
  - Monthly Commitments
  - Open Opportunities
  - Attention Needed
- Insight card:
  - "Trina’s read"
- CTA:
  - "Ask Trina about cash priorities"

### Mock Data

Use clearly fake numbers:

```text
Revenue Pipeline: $18,500
Monthly Commitments: $4,200
Open Opportunities: 7
Attention Needed: 2 items
```

### Click Behavior

- Tap CTA → Assistant screen with finance prompt.

### Rule

Do not connect to real financial data in this sprint.

---

## Screen 6 — Settings / Profile

### Purpose

Give the prototype a complete app feel without building real account management.

### Layout

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

### Mock Behavior

- Rows may open static placeholder panels.
- No account, auth, persistence, or backend behavior.

---

## Navigation

### Recommended Mobile Navigation

Use bottom tabs:

1. Home
2. Assistant
3. Strategy
4. Briefing
5. Finance

Settings can be reached from a profile icon in the top right.

### Rationale

The existing browser screenshot direction includes left-side navigation. For mobile, use bottom tabs and quick-action cards so the interface feels native to a phone.

---

## Prototype Click Path

The first demo path should be:

```text
Dashboard
→ Ask Trina
→ Tap central mic
→ See mock response
→ Strategic Advisor Mode
→ CEO Briefing
→ Finance
→ Back to Dashboard
```

Secondary path:

```text
Dashboard
→ CEO Briefing
→ Ask Trina to prioritize
→ Assistant response
```

---

## Mock Data Rules

- All numbers must be clearly fake/sample data.
- Do not use real client financial data.
- Do not connect to Firebase.
- Do not connect to Hermes/API.
- Do not call a live AI model.
- Do not add auth.
- Do not store user input.
- Do not create production release assets.

---

## Screenshot / Export Storage

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

---

## FlutterFlow Builder Checklist

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
```

---

# File: `planning/sprints/009-flutterflow-screen-build-handoff/requirements.md`

```markdown
# Sprint 009 Requirements — FlutterFlow Screen Build Handoff

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
```

---

# File: `planning/sprints/009-flutterflow-screen-build-handoff/blueprint.md`

```markdown
# Sprint 009 Blueprint — FlutterFlow Screen Build Handoff

## Objective

Create the screen-level FlutterFlow build handoff for Trina's first visual prototype.

This sprint is docs/planning only in the local repo.

## Files to Review

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/VALIDATION.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `planning/sprints/008-flutterflow-first-visual-prototype/requirements.md`
- `planning/sprints/008-flutterflow-first-visual-prototype/blueprint.md`
- `planning/sprints/008-flutterflow-first-visual-prototype/acceptance.md`
- `planning/sprints/008-flutterflow-first-visual-prototype/handoff-prompt.md`

## Files to Create

- `planning/sprints/009-flutterflow-screen-build-handoff/requirements.md`
- `planning/sprints/009-flutterflow-screen-build-handoff/blueprint.md`
- `planning/sprints/009-flutterflow-screen-build-handoff/acceptance.md`
- `planning/sprints/009-flutterflow-screen-build-handoff/handoff-prompt.md`

## Files to Update

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `docs/API.md`

## Implementation Plan

1. Confirm Sprint 008 has been applied and committed.
2. Create the Sprint 009 folder.
3. Create the four required Sprint 009 files.
4. Update `planning/STATE.md` to make Sprint 009 active.
5. Add Sprint 009 decisions, risks, and questions.
6. Update `docs/API.md` with mock/stub contracts only.
7. Update `docs/VALIDATION.md` with Sprint 009 validation checks.
8. Expand `docs/FLUTTERFLOW_BUILD_HANDOFF.md` with:
   - visual identity rules
   - six screen definitions
   - screen-by-screen layout
   - mock data
   - click behavior
   - navigation rules
   - screenshot/export storage
   - FlutterFlow builder checklist
9. Run validation commands.
10. Report changed files and confirm no runtime files changed.

## Non-Negotiable Boundaries

Do not modify:

- local runtime app code
- Firebase
- Hermes/API implementation
- package files
- native app folders
- release files
- generated FlutterFlow exports
- env/secrets

## Validation Commands

```bash
git status --branch --short
find planning/sprints/009-flutterflow-screen-build-handoff -maxdepth 1 -type f | sort
test -f docs/FLUTTERFLOW_BUILD_HANDOFF.md && echo "handoff doc exists"
rg -n "009-flutterflow-screen-build-handoff|Dashboard|Assistant|Strategic Advisor Mode|CEO Briefing|Finance|Settings|mockStartDemoSession|mockSendAssistantMessage|mockMicListeningState|mockLoadCEOBriefing|mockLoadFinanceSnapshot|references/flutterflow/sprint-009|FlutterFlow only|No local React/Vite runtime code" planning docs
git diff --name-only
git diff --stat
```

## Expected Result

The repo should contain a complete docs/planning handoff for building the first FlutterFlow visual prototype in the next sprint.
```

---

# File: `planning/sprints/009-flutterflow-screen-build-handoff/acceptance.md`

```markdown
# Sprint 009 Acceptance Criteria — FlutterFlow Screen Build Handoff

Sprint 009 is complete only when all criteria below are satisfied.

## Scope Acceptance

- Sprint 009 folder exists at `planning/sprints/009-flutterflow-screen-build-handoff/`.
- Sprint 009 includes:
  - `requirements.md`
  - `blueprint.md`
  - `acceptance.md`
  - `handoff-prompt.md`
- `planning/STATE.md` identifies Sprint 009 as the active sprint.
- Sprint 009 remains docs/planning only.

## FlutterFlow Handoff Acceptance

`docs/FLUTTERFLOW_BUILD_HANDOFF.md` defines:

- Visual identity rules.
- Six required screens.
- Screen-by-screen layout.
- Mobile navigation.
- Mock data.
- Stub behavior.
- Clickable prototype path.
- Screenshot/export storage.
- FlutterFlow builder checklist.

## Required Screen Acceptance

The handoff includes these screens:

- Dashboard / Home
- Assistant / Voice Command
- Strategic Advisor Mode
- CEO Briefing
- Finance
- Settings / Profile

## Mock Behavior Acceptance

The handoff documents these mock contracts as prototype-only:

- `mockStartDemoSession`
- `mockSendAssistantMessage`
- `mockMicListeningState`
- `mockLoadCEOBriefing`
- `mockLoadFinanceSnapshot`
- `mockLoadStrategicAdvisorMode`

## Storage Acceptance

The handoff recommends:

```text
references/flutterflow/sprint-009/
```

for lightweight proof assets.

Large generated exports are marked as not to be committed unless explicitly approved.

## Validation Acceptance

The Builder runs and reports:

```bash
git status --branch --short
find planning/sprints/009-flutterflow-screen-build-handoff -maxdepth 1 -type f | sort
test -f docs/FLUTTERFLOW_BUILD_HANDOFF.md && echo "handoff doc exists"
rg -n "009-flutterflow-screen-build-handoff|Dashboard|Assistant|Strategic Advisor Mode|CEO Briefing|Finance|Settings|mockStartDemoSession|mockSendAssistantMessage|mockMicListeningState|mockLoadCEOBriefing|mockLoadFinanceSnapshot|references/flutterflow/sprint-009|FlutterFlow only|No local React/Vite runtime code" planning docs
git diff --name-only
git diff --stat
```

## Safety Acceptance

No changes are made to:

- Runtime app code
- React/Vite implementation files
- Firebase files
- Hermes/API implementation files
- Package files
- Native folders
- Release files
- Generated FlutterFlow exports
- Secrets or env files

## Completion Report

The Builder must report:

1. Acceptance criteria status.
2. Files created.
3. Files updated.
4. Validation commands run.
5. Any risks or open questions.
6. Final git status.
7. Whether the docs are safe to stage.
```

---

# File: `planning/sprints/009-flutterflow-screen-build-handoff/handoff-prompt.md`

```markdown
# Sprint 009 Builder Handoff Prompt

You are the Builder for the Trina project.

Apply Sprint 009 Architect Pack only:

`architect-packs/trina-009-flutterflow-screen-build-handoff-architect-pack.md`

## Goal

Create the Builder-ready FlutterFlow screen build handoff for Trina's first mobile visual prototype.

## First: Dry Run

Before making changes, do a dry run and report:

1. Files you would create.
2. Files you would update.
3. Files you would not touch.
4. Any conflicts or risks.
5. Whether the changes are docs/planning only.

Do not proceed until the dry run looks safe.

## Then Apply the Pack

If safe, create or update only:

```text
planning/sprints/009-flutterflow-screen-build-handoff/requirements.md
planning/sprints/009-flutterflow-screen-build-handoff/blueprint.md
planning/sprints/009-flutterflow-screen-build-handoff/acceptance.md
planning/sprints/009-flutterflow-screen-build-handoff/handoff-prompt.md
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/FLUTTERFLOW_BUILD_HANDOFF.md
docs/VALIDATION.md
docs/API.md
```

## Do Not Touch

```text
src/
React/Vite runtime code
Firebase files
Hermes/API implementation files
package files
native folders
release files
generated FlutterFlow exports
.env files
secret files
```

## Validation

Run:

```bash
git status --branch --short
find planning/sprints/009-flutterflow-screen-build-handoff -maxdepth 1 -type f | sort
test -f docs/FLUTTERFLOW_BUILD_HANDOFF.md && echo "handoff doc exists"
rg -n "009-flutterflow-screen-build-handoff|Dashboard|Assistant|Strategic Advisor Mode|CEO Briefing|Finance|Settings|mockStartDemoSession|mockSendAssistantMessage|mockMicListeningState|mockLoadCEOBriefing|mockLoadFinanceSnapshot|references/flutterflow/sprint-009|FlutterFlow only|No local React/Vite runtime code" planning docs
git diff --name-only
git diff --stat
```

## Report Back

After applying and validating, report:

1. Acceptance criteria status.
2. Files created.
3. Files updated.
4. Validation commands run and results.
5. Whether any runtime/non-doc files changed.
6. Risks or open questions.
7. Final git status.
8. Whether the docs are safe to stage.

## Stop

Do not stage, commit, push, build FlutterFlow screens, or implement code.
```

---

# 3. Codex Apply Prompt

Use this prompt after saving this Architect Pack into:

```text
architect-packs/trina-009-flutterflow-screen-build-handoff-architect-pack.md
```

```text
You are the Builder for the Trina project.

Apply this Architect Pack only:

architect-packs/trina-009-flutterflow-screen-build-handoff-architect-pack.md

Rules:

1. Do a dry run first.
2. Show which files the pack would create or update.
3. If the dry run looks safe, apply the pack into the correct planning and docs files.
4. Do not modify runtime app code.
5. Do not create FlutterFlow screens yet.
6. Do not modify Firebase, Hermes/API implementation, package files, native folders, release files, generated exports, or secrets.
7. Do not stage, commit, or push.
8. After applying the pack, report:
   - Files created or updated
   - Files skipped
   - Any risks or conflicts
   - Validation checks run
   - Final git status

Expected sprint folder:

planning/sprints/009-flutterflow-screen-build-handoff/

Expected sprint files:

- requirements.md
- blueprint.md
- acceptance.md
- handoff-prompt.md
```

---

# 4. Architect Recommendation

After Codex applies Sprint 009, the next step is **not implementation**.

Next, Codex should read the Sprint 009 files and summarize the plan before any FlutterFlow build work starts.

Sprint 010 should likely be:

```text
010-flutterflow-first-screen-build-checkpoint
```

Sprint 010 should cover actual FlutterFlow visual build evidence, screenshots, and demo click-path validation.
