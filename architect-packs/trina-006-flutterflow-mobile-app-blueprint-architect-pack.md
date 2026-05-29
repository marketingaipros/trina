# Architect Pack — Sprint 006 FlutterFlow Mobile App Blueprint

**Project:** Trina / TrinaOS Voice  
**Repo path:** `/Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice`  
**Sprint:** `006-flutterflow-mobile-app-blueprint`  
**Pack file:** `architect-packs/trina-006-flutterflow-mobile-app-blueprint-architect-pack.md`  
**Created by:** Architect Layer  
**Purpose:** Define the FlutterFlow mobile app blueprint before any FlutterFlow build or local runtime code changes.

---

## 0. Architect Intent

Sprint 005 established that Trina’s client-facing mobile direction is FlutterFlow-first, while the existing React/Vite/Firebase app remains a local/reference/current implementation unless later reclassified.

Sprint 006 must turn that direction into a Builder-ready mobile app blueprint.

This sprint is still documentation and planning only.

It must not build the FlutterFlow app yet.

It must not modify application code.

It must not create Firebase changes, Hermes backend changes, deploy changes, native app files, or generated UI exports.

---

## 1. Sprint Goal

Create a clear FlutterFlow mobile app blueprint for Trina that defines:

- App purpose.
- Primary users.
- First mobile app screens.
- Navigation model.
- Core user flows.
- Data boundaries.
- Firebase vs Hermes/API connection direction.
- First client visual theme assumptions.
- Validation criteria before FlutterFlow implementation begins.
- Exact Builder handoff files for Sprint 006.

The goal is to make the next sprint safe to start in FlutterFlow without guessing.

---

## 2. Scope

### In Scope

- Create Sprint 006 planning files:
  - `planning/sprints/006-flutterflow-mobile-app-blueprint/requirements.md`
  - `planning/sprints/006-flutterflow-mobile-app-blueprint/blueprint.md`
  - `planning/sprints/006-flutterflow-mobile-app-blueprint/acceptance.md`
  - `planning/sprints/006-flutterflow-mobile-app-blueprint/handoff-prompt.md`

- Update durable project docs as needed:
  - `planning/STATE.md`
  - `planning/DECISIONS.md`
  - `planning/RISKS.md`
  - `planning/QUESTIONS.md`
  - `docs/ARCHITECTURE.md`
  - `docs/API.md`
  - `docs/DATA_MODEL.md`
  - `docs/VALIDATION.md`

- Define FlutterFlow screens and navigation.

- Define first-pass client theme direction:
  - Trina personal assistant should feel polished, feminine, modern, warm, and premium.
  - Barbie-inspired styling may be used as one client theme direction, but the base architecture must support theme changes.
  - Avoid hard-coding one client’s look as the permanent app identity.

- Clarify integration direction:
  - FlutterFlow is the mobile frontend.
  - Hermes is the AI brain/backend.
  - AI Hub Orchestrator routes requests between the app, Hermes, Firebase, and other service connectors.
  - Firebase remains a candidate for auth, user profile, memory metadata, app state, and storage references.
  - Hermes/API should be the preferred path for AI chat, memory reasoning, tool routing, and assistant actions.

### Out of Scope

- No FlutterFlow project creation.
- No FlutterFlow UI build.
- No React/Vite app code changes.
- No Firebase schema migration.
- No backend endpoint implementation.
- No AI Hub Orchestrator implementation.
- No Hermes implementation.
- No production deployment.
- No mobile app store setup.
- No auth implementation.
- No staging, commit, or push unless the user explicitly approves after review.

---

## 3. Required Decisions To Record

Add or update these durable decisions in `planning/DECISIONS.md` if not already captured.

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-05-29 | Sprint 006 is a FlutterFlow mobile app blueprint sprint, not a build sprint. | The project needs a clear mobile screen/navigation/API contract before FlutterFlow work starts. | Builder must create planning/docs only and avoid implementation. |
| 2026-05-29 | FlutterFlow is the client-facing mobile app direction. | User wants a polished client-ready mobile frontend and prefers FlutterFlow for visual quality. | Future mobile implementation should start in FlutterFlow unless superseded by a later decision. |
| 2026-05-29 | React/Vite app remains current/reference/local implementation until explicitly reclassified. | Existing work may still be useful as behavior reference. | Builder should not delete, retire, or rewrite it during Sprint 006. |
| 2026-05-29 | Hermes/API is preferred for AI assistant behavior. Firebase direct access should be limited to app state/auth/storage/profile needs. | AI reasoning and routing should stay backend-controlled rather than embedded in FlutterFlow screens. | FlutterFlow should call APIs for AI actions instead of owning assistant logic. |
| 2026-05-29 | Client visual theme must be configurable. | Trina may have multiple client/persona looks. | First theme can be Barbie-inspired, but docs must avoid locking the whole product to one theme. |

---

## 4. Required Risks To Record

Add or update these in `planning/RISKS.md`.

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| FlutterFlow screens may be built before API/data boundaries are clear. | Medium | High | Sprint 006 defines screens, flows, data ownership, and API expectations before UI implementation. | Open |
| Direct Firebase use from FlutterFlow could bypass Hermes or assistant rules. | Medium | High | Limit direct Firebase use to auth/profile/app state/storage references where approved. Route AI behavior through Hermes/API. | Open |
| Barbie/client-specific styling could become hard-coded into the product foundation. | Medium | Medium | Treat theme as configurable. Document first theme as one client theme, not the whole system identity. | Open |
| Existing React/Vite app may be confused with final mobile implementation. | Medium | Medium | Keep React/Vite classified as reference/current implementation unless a later sprint changes it. | Open |
| Building UI before acceptance criteria are defined could create rework. | Medium | Medium | Do not start FlutterFlow implementation until Sprint 006 acceptance is complete. | Open |

---

## 5. Required Questions To Record

Add or update these in `planning/QUESTIONS.md`.

| Question | Owner | Needed By | Status | Notes |
|---|---|---|---|---|
| Should the first FlutterFlow build use Firebase Auth directly, or should login be mediated through Hermes/API? | Architect/User | Before implementation sprint | Open | Sprint 006 should recommend a default but not implement. |
| Which first client theme should be built first: Barbie-inspired Trina, neutral AI assistant, or another client look? | User | Before FlutterFlow build | Open | Default recommendation: Barbie-inspired Trina for first visual prototype. |
| Should uploads go first to Firebase Storage, Hermes-controlled storage, or another AI Hub storage layer? | Architect/User | Before file upload implementation | Open | Sprint 006 should document a preferred V1 assumption. |
| What is the minimum mobile MVP: chat only, chat plus tasks, chat plus memory, or full assistant dashboard? | User/Architect | Before implementation sprint | Open | Sprint 006 should propose a lean first build. |
| Will FlutterFlow be connected to the current repo only through docs/export references, or will generated Flutter code eventually be committed? | Architect/User | Before production mobile workflow | Open | Sprint 006 should keep generated Flutter code out of the local repo unless later approved. |

---

## 6. Target Mobile MVP Blueprint

Sprint 006 should document this as the recommended first mobile app direction.

### Recommended V1 Mobile App

The first FlutterFlow mobile app should be a polished assistant shell that proves:

1. The user can sign in or enter a controlled demo session.
2. The user lands on a clean assistant dashboard.
3. The user can chat with Trina.
4. The user can view recent assistant activity.
5. The user can see memory/profile/context areas without overbuilding them.
6. The app can call a backend API contract for assistant requests.
7. The app can support theming without rebuilding the core assistant logic.

### Recommended Screens

1. `Splash / Loading`
   - Purpose: app launch, brand loading, session check.
   - No heavy logic beyond route decision.

2. `Welcome / Intro`
   - Purpose: introduce Trina as a personal AI assistant.
   - CTA: sign in, continue demo, or start setup.

3. `Sign In / Demo Access`
   - Purpose: user authentication or demo entry.
   - V1 can support demo mode if auth is not ready.
   - Must not store secrets in FlutterFlow.

4. `Home Dashboard`
   - Purpose: primary landing screen.
   - Sections:
     - Greeting.
     - Quick action cards.
     - Recent assistant activity.
     - Continue conversation.
     - Memory/task summary placeholders.

5. `Chat`
   - Purpose: main Trina assistant interaction.
   - Sends user message to Hermes/API.
   - Receives assistant response and optional action metadata.
   - FlutterFlow should not own AI reasoning.

6. `Tasks / Reminders`
   - Purpose: show assistant-created or user-created tasks.
   - V1 can be placeholder/read-only if backend is not ready.

7. `Memory / Profile`
   - Purpose: show profile/memory categories.
   - V1 should be safe and limited.
   - Avoid exposing raw memory internals.

8. `Files / Uploads`
   - Purpose: future document/photo/context uploads.
   - V1 may document placeholder only.
   - Upload implementation should wait for storage decision.

9. `Settings`
   - Purpose: user profile, theme/persona, logout, privacy controls.
   - Include first theme selector concept if practical.

10. `Error / Offline`
   - Purpose: user-friendly fallback for API failures, network issues, or unavailable assistant.

---

## 7. Recommended Navigation

Use simple bottom navigation after login/demo entry:

- Home
- Chat
- Tasks
- Memory
- Settings

Secondary routes:

- Welcome
- Sign In
- Files / Uploads
- Error / Offline
- Theme Preview

Avoid complex nested navigation in V1.

---

## 8. Recommended Data Ownership

### FlutterFlow Owns

- Screen layout.
- Navigation.
- Form inputs.
- Local UI state.
- Theme variables.
- Safe display state.

### Firebase May Own

- Auth session, if selected.
- User profile document.
- Basic task/reminder documents, if selected.
- Storage references for uploaded files, if approved.
- App activity metadata.

### Hermes/API Owns

- AI chat response generation.
- Memory reasoning.
- Assistant action routing.
- Tool orchestration.
- Business rules for assistant behavior.
- Any sensitive AI context selection.
- Any connector actions.

### AI Hub Orchestrator Owns

- Routing requests to Hermes.
- Routing to Firebase/admin services when needed.
- Future connector workflows.
- Guardrails and backend-side permissions.

---

## 9. Recommended API Contract Direction

Sprint 006 should update `docs/API.md` with a draft mobile request schema.

### Assistant Chat Request

```json
{
  "userId": "string",
  "sessionId": "string",
  "message": "string",
  "clientTheme": "trina-barbie-v1",
  "source": "flutterflow-mobile",
  "metadata": {
    "screen": "chat",
    "locale": "en-US",
    "timezone": "America/Chicago"
  }
}
```

### Assistant Chat Response

```json
{
  "reply": "string",
  "sessionId": "string",
  "actions": [
    {
      "type": "task_created",
      "label": "string",
      "status": "pending"
    }
  ],
  "memoryHints": [
    {
      "category": "preference",
      "label": "string",
      "safeToDisplay": true
    }
  ],
  "error": null
}
```

### API Rule

FlutterFlow should send requests to Hermes/API or AI Hub Orchestrator.

FlutterFlow should not directly call model providers or embed model prompts.

---

## 10. Required File Outputs

Codex must create or update the following files.

---

# File: `planning/sprints/006-flutterflow-mobile-app-blueprint/requirements.md`

```markdown
# Sprint 006 Requirements — FlutterFlow Mobile App Blueprint

## Goal

Define the FlutterFlow mobile app blueprint for Trina before any mobile UI build or implementation work begins.

Sprint 006 converts the Sprint 005 FlutterFlow direction into concrete planning artifacts: screens, navigation, user flows, data ownership, API contract expectations, theme assumptions, validation rules, and next-sprint readiness.

---

## Business Objective

Trina needs a polished client-facing mobile app direction that can be built in FlutterFlow without confusing the existing React/Vite local app with the final mobile product.

The mobile app should make Trina feel like a premium personal AI assistant while keeping AI reasoning, memory behavior, and tool routing controlled by Hermes/API and the AI Hub Orchestrator.

---

## Primary Users

- End user/client using Trina as a personal assistant.
- Operator/owner reviewing app behavior and visual direction.
- Builder/FlutterFlow implementer who needs clear screen and data boundaries.
- Architect Layer maintaining planning, scope, and acceptance criteria.

---

## Recommended V1 Scope

The first FlutterFlow mobile build should be a polished assistant shell that includes:

- Splash/loading screen.
- Welcome/intro screen.
- Sign in or demo access screen.
- Home dashboard.
- Chat screen.
- Tasks/reminders screen.
- Memory/profile screen.
- Settings screen.
- Error/offline fallback screen.

The first build should prioritize visual polish, navigation clarity, and API contract readiness over deep backend automation.

---

## In Scope

- Define FlutterFlow screen list.
- Define navigation model.
- Define core mobile user flows.
- Define Firebase vs Hermes/API responsibilities.
- Define first client theme direction.
- Define placeholder vs real data areas.
- Define draft API request/response contracts for assistant chat.
- Define validation criteria for mobile blueprint readiness.

---

## Out of Scope

- No FlutterFlow project creation.
- No FlutterFlow UI implementation.
- No local React/Vite runtime changes.
- No Firebase schema migration.
- No Hermes backend implementation.
- No AI Hub Orchestrator implementation.
- No app deployment.
- No app store setup.
- No generated Flutter code committed to this repo.
- No staging, commit, or push unless explicitly approved by the user.

---

## Product Direction

FlutterFlow is the client-facing mobile direction.

The existing React/Vite/Firebase app remains the current/reference/local implementation unless later reclassified.

Hermes is the backend AI brain.

AI Hub Orchestrator is the routing layer.

Firebase may support auth, profile, app state, task metadata, memory metadata, and storage references where approved.

FlutterFlow should not directly own AI reasoning, prompts, model calls, memory selection, or connector execution.

---

## First Theme Direction

The first visual prototype may use a Barbie-inspired Trina theme:

- Polished.
- Feminine.
- Warm.
- Modern.
- Premium.
- Friendly.
- Client-ready.

The product foundation must support future theme changes. Barbie-inspired styling must not become hard-coded as the only app identity.

---

## Required Screens

1. Splash / Loading
2. Welcome / Intro
3. Sign In / Demo Access
4. Home Dashboard
5. Chat
6. Tasks / Reminders
7. Memory / Profile
8. Files / Uploads placeholder
9. Settings
10. Error / Offline

---

## Required Navigation

Use simple post-login bottom navigation:

- Home
- Chat
- Tasks
- Memory
- Settings

Keep secondary screens outside the bottom navigation:

- Welcome
- Sign In
- Files / Uploads
- Error / Offline
- Theme Preview

---

## Data Ownership Rules

FlutterFlow owns:

- Screens.
- Navigation.
- UI state.
- Forms.
- Display components.
- Theme variables.

Firebase may own:

- Auth session if approved.
- User profile.
- Basic tasks/reminders.
- App activity metadata.
- Storage references if approved.

Hermes/API owns:

- AI chat response generation.
- Memory reasoning.
- Assistant action routing.
- Tool decisions.
- Business rules.
- Sensitive context selection.

AI Hub Orchestrator owns:

- Backend routing.
- Connector routing.
- Guardrails.
- Permission checks.
- Future service integrations.

---

## Open Questions

- Should FlutterFlow use Firebase Auth directly in V1?
- Should the first build support demo mode before full auth?
- Should uploads go to Firebase Storage or Hermes-controlled storage?
- Should the first FlutterFlow app include editable memory, or read-only memory summaries only?
- Will generated FlutterFlow code ever be committed to this repo?

---

## Success Criteria

Sprint 006 is complete when the project has a clear, Builder-ready FlutterFlow mobile app blueprint and no implementation work has been started.
```

---

# File: `planning/sprints/006-flutterflow-mobile-app-blueprint/blueprint.md`

```markdown
# Sprint 006 Blueprint — FlutterFlow Mobile App Blueprint

## Objective

Create the planning and documentation needed to safely start a FlutterFlow mobile implementation sprint later.

Do not implement the app in Sprint 006.

---

## Files To Review First

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `planning/FILE_INVENTORY.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/DATA_MODEL.md`
- `docs/VALIDATION.md`
- `planning/sprints/005-local-repo-baseline-flutterflow-direction/requirements.md`
- `planning/sprints/005-local-repo-baseline-flutterflow-direction/blueprint.md`
- `planning/sprints/005-local-repo-baseline-flutterflow-direction/acceptance.md`

---

## Files To Create

- `planning/sprints/006-flutterflow-mobile-app-blueprint/requirements.md`
- `planning/sprints/006-flutterflow-mobile-app-blueprint/blueprint.md`
- `planning/sprints/006-flutterflow-mobile-app-blueprint/acceptance.md`
- `planning/sprints/006-flutterflow-mobile-app-blueprint/handoff-prompt.md`

---

## Files To Update

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/DATA_MODEL.md`
- `docs/VALIDATION.md`

Update only where needed to reflect Sprint 006.

---

## Implementation Plan

1. Confirm current repo state.
   - Run `git status --branch --short`.
   - Confirm branch and remote.
   - Do not stage, commit, or push.

2. Read Sprint 005 docs and current durable docs.
   - Identify existing FlutterFlow direction.
   - Preserve Sprint 005 decisions.

3. Create Sprint 006 folder.
   - Path: `planning/sprints/006-flutterflow-mobile-app-blueprint/`.

4. Create Sprint 006 requirements.
   - Define goal, users, scope, out of scope, screens, navigation, data ownership, and open questions.

5. Create Sprint 006 blueprint.
   - Define files to review, files to create/update, app screen model, user flows, API direction, validation checks.

6. Create Sprint 006 acceptance criteria.
   - Make completion objective and docs-only.

7. Create Sprint 006 handoff prompt.
   - Prompt must tell Builder to summarize before making changes.
   - Prompt must forbid implementation.

8. Update `planning/STATE.md`.
   - Current sprint becomes Sprint 006.
   - Recently completed includes Sprint 005 committed/pushed.
   - Next action is applying/validating Sprint 006 blueprint docs.

9. Update `planning/DECISIONS.md`.
   - Record Sprint 006 documentation/build boundary.
   - Record FlutterFlow/Hermes/API boundary if missing.
   - Record theme configurability decision if missing.

10. Update `planning/RISKS.md`.
    - Add mobile blueprint risks if missing.

11. Update `planning/QUESTIONS.md`.
    - Add unresolved FlutterFlow auth/storage/theme/MVP/code export questions if missing.

12. Update `docs/ARCHITECTURE.md`.
    - Add or refine mobile architecture section.
    - Clarify FlutterFlow frontend, Hermes backend brain, AI Hub Orchestrator routing, Firebase supporting services.

13. Update `docs/API.md`.
    - Add draft mobile assistant chat request/response contract.
    - State FlutterFlow must not directly call model providers.

14. Update `docs/DATA_MODEL.md`.
    - Add first-pass mobile entities:
      - UserProfile
      - AssistantSession
      - ChatMessage
      - AssistantAction
      - Task
      - MemorySummary
      - ClientTheme
      - UploadedFileReference

15. Update `docs/VALIDATION.md`.
    - Add FlutterFlow blueprint validation checklist.

16. Run validation commands.
    - `git status --branch --short`
    - `find planning/sprints/006-flutterflow-mobile-app-blueprint -maxdepth 1 -type f | sort`
    - `rg -n "FlutterFlow|Hermes|AI Hub Orchestrator|Firebase|Chat|Home Dashboard|clientTheme|assistant" planning docs`
    - `git diff --name-only`
    - `git diff --stat`

17. Report results.
    - Files created.
    - Files updated.
    - Validation run.
    - Confirmation that no app/runtime code changed.
    - Remaining risks/questions.

---

## Mobile Screen Blueprint

### 1. Splash / Loading

Purpose:

- Show brand loading.
- Check whether user has session/demo access.
- Route to Welcome, Sign In, or Home.

Data:

- Local/session state only.
- No AI call.

### 2. Welcome / Intro

Purpose:

- Introduce Trina.
- Explain the assistant value.
- Provide CTA to sign in or continue demo.

Data:

- Static copy and theme assets.

### 3. Sign In / Demo Access

Purpose:

- Allow user to sign in or enter controlled demo mode.

Data:

- Firebase Auth if approved.
- Demo state if auth is deferred.

### 4. Home Dashboard

Purpose:

- Main landing screen after login/demo entry.

Recommended sections:

- Greeting.
- Continue conversation.
- Quick actions.
- Recent activity.
- Tasks/reminders preview.
- Memory/profile preview.

### 5. Chat

Purpose:

- Core assistant experience.

Behavior:

- User enters message.
- FlutterFlow sends request to Hermes/API or AI Hub Orchestrator.
- Response returns assistant reply, action metadata, and safe memory hints.
- FlutterFlow renders response.
- FlutterFlow does not own reasoning.

### 6. Tasks / Reminders

Purpose:

- Show assistant-created or user-created tasks.
- V1 may be read-only or simple create/edit depending on backend readiness.

### 7. Memory / Profile

Purpose:

- Show safe memory/profile summaries.
- Avoid raw memory internals.

V1 Recommendation:

- Read-only summaries first.
- Editable memory can be later sprint.

### 8. Files / Uploads

Purpose:

- Future area for documents, screenshots, images, and context files.

V1 Recommendation:

- Placeholder route and architecture note only until storage decision is made.

### 9. Settings

Purpose:

- User settings.
- Profile basics.
- Theme/persona choice.
- Logout.
- Privacy controls.

### 10. Error / Offline

Purpose:

- Friendly fallback when API, auth, or network fails.

---

## Core User Flows

### Flow 1 — First Launch

1. User opens app.
2. Splash loads.
3. If no session, route to Welcome.
4. User chooses sign in or demo.
5. Route to Home Dashboard.

### Flow 2 — Assistant Chat

1. User opens Chat.
2. User enters message.
3. FlutterFlow sends request to Hermes/API.
4. Hermes/API returns reply and safe metadata.
5. FlutterFlow renders response.
6. Any returned action appears in Tasks/Activity where applicable.

### Flow 3 — View Tasks

1. User opens Tasks.
2. App displays task list or placeholder.
3. User can inspect task details if available.

### Flow 4 — View Memory/Profile

1. User opens Memory.
2. App displays safe profile/memory summaries.
3. App avoids raw memory internals.

### Flow 5 — Change Theme

1. User opens Settings.
2. User views current theme/persona.
3. V1 may display theme selection concept.
4. Later sprint may enable persistence.

---

## Draft API Contract

### Assistant Chat Request

```json
{
  "userId": "string",
  "sessionId": "string",
  "message": "string",
  "clientTheme": "trina-barbie-v1",
  "source": "flutterflow-mobile",
  "metadata": {
    "screen": "chat",
    "locale": "en-US",
    "timezone": "America/Chicago"
  }
}
```

### Assistant Chat Response

```json
{
  "reply": "string",
  "sessionId": "string",
  "actions": [
    {
      "type": "task_created",
      "label": "string",
      "status": "pending"
    }
  ],
  "memoryHints": [
    {
      "category": "preference",
      "label": "string",
      "safeToDisplay": true
    }
  ],
  "error": null
}
```

---

## Validation Plan

Sprint 006 passes when:

- Sprint 006 folder exists.
- Four sprint files exist.
- Durable docs reflect FlutterFlow mobile blueprint.
- API docs include draft mobile assistant contract.
- Data model docs include mobile entities.
- Validation docs include mobile blueprint checklist.
- No runtime/app code changed.
- No staging, commit, or push occurred unless explicitly approved by the user.

---

## Boundaries

Do not modify:

- React/Vite app code.
- Firebase config.
- `.env.local`.
- Native app folders.
- Build outputs.
- Generated FlutterFlow exports.
- Deployment config.
- Package files unless explicitly required for docs-only validation. They should not be required.
```

---

# File: `planning/sprints/006-flutterflow-mobile-app-blueprint/acceptance.md`

```markdown
# Sprint 006 Acceptance Criteria — FlutterFlow Mobile App Blueprint

Sprint 006 is complete only when all criteria below are satisfied.

---

## Scope Acceptance

- Sprint 006 folder exists at `planning/sprints/006-flutterflow-mobile-app-blueprint/`.
- The sprint includes:
  - `requirements.md`
  - `blueprint.md`
  - `acceptance.md`
  - `handoff-prompt.md`
- The sprint is documented as a planning/docs sprint only.
- No FlutterFlow project is created.
- No app/runtime code is changed.
- No Firebase config, deploy config, native folder, generated file, or `.env.local` file is changed.

---

## Product Blueprint Acceptance

- FlutterFlow is documented as the client-facing mobile frontend direction.
- Existing React/Vite/Firebase app is documented as current/reference/local implementation unless later reclassified.
- Hermes is documented as the backend AI brain.
- AI Hub Orchestrator is documented as the routing layer.
- Firebase is documented as supporting infrastructure where approved, not the owner of assistant reasoning.
- Theme configurability is documented.
- Barbie-inspired Trina styling is documented as a first theme option, not a permanent hard-coded product identity.

---

## Screen Blueprint Acceptance

The following screens are documented with purpose and V1 behavior:

- Splash / Loading
- Welcome / Intro
- Sign In / Demo Access
- Home Dashboard
- Chat
- Tasks / Reminders
- Memory / Profile
- Files / Uploads placeholder
- Settings
- Error / Offline

---

## Navigation Acceptance

- Bottom navigation is defined for post-login/demo app use.
- Bottom navigation includes:
  - Home
  - Chat
  - Tasks
  - Memory
  - Settings
- Secondary routes are defined separately.
- Navigation is kept simple for V1.

---

## API/Data Acceptance

- `docs/API.md` includes a draft assistant chat request contract for FlutterFlow mobile.
- `docs/API.md` includes a draft assistant chat response contract.
- API docs state that FlutterFlow should not directly call model providers or own AI prompt logic.
- `docs/DATA_MODEL.md` includes first-pass mobile entities or equivalent:
  - UserProfile
  - AssistantSession
  - ChatMessage
  - AssistantAction
  - Task
  - MemorySummary
  - ClientTheme
  - UploadedFileReference

---

## Validation Acceptance

- `docs/VALIDATION.md` includes a FlutterFlow mobile blueprint validation checklist.
- Validation commands are run and reported.
- Report confirms no runtime/app code changed.
- Report confirms no commit or push was made unless explicitly approved by the user.

---

## State/Decision Acceptance

- `planning/STATE.md` reflects Sprint 006 as current or next active sprint.
- `planning/DECISIONS.md` captures durable Sprint 006 decisions.
- `planning/RISKS.md` captures mobile blueprint risks.
- `planning/QUESTIONS.md` captures unresolved auth, storage, theme, MVP, and code export questions.

---

## Completion Standard

The sprint is not complete just because files exist.

It is complete only when the FlutterFlow mobile app blueprint is clear enough for the next Builder/FlutterFlow implementation sprint to start without guessing.
```

---

# File: `planning/sprints/006-flutterflow-mobile-app-blueprint/handoff-prompt.md`

```markdown
# Sprint 006 Builder Handoff Prompt — FlutterFlow Mobile App Blueprint

You are the Builder operating inside the Trina repo.

Repo path:

`/Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice`

Apply Sprint 006 from the Architect Pack:

`architect-packs/trina-006-flutterflow-mobile-app-blueprint-architect-pack.md`

---

## First Read

Before making changes, read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `planning/FILE_INVENTORY.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/DATA_MODEL.md`
- `docs/VALIDATION.md`
- `planning/sprints/005-local-repo-baseline-flutterflow-direction/requirements.md`
- `planning/sprints/005-local-repo-baseline-flutterflow-direction/blueprint.md`
- `planning/sprints/005-local-repo-baseline-flutterflow-direction/acceptance.md`

Then summarize:

1. What Sprint 006 is supposed to accomplish.
2. Which files you expect to create or update.
3. What validation steps you will run.
4. Any blockers or ambiguities.

Stop after the summary and wait for approval before editing.

---

## Sprint Goal

Create a FlutterFlow mobile app blueprint for Trina.

This is a documentation/planning sprint only.

Do not build the FlutterFlow app yet.

---

## Create

- `planning/sprints/006-flutterflow-mobile-app-blueprint/requirements.md`
- `planning/sprints/006-flutterflow-mobile-app-blueprint/blueprint.md`
- `planning/sprints/006-flutterflow-mobile-app-blueprint/acceptance.md`
- `planning/sprints/006-flutterflow-mobile-app-blueprint/handoff-prompt.md`

---

## Update As Needed

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/DATA_MODEL.md`
- `docs/VALIDATION.md`

---

## Do Not Modify

- React/Vite runtime code.
- FlutterFlow generated code.
- Firebase config.
- Deploy config.
- Native app folders.
- `.env.local`.
- Package files.
- Build outputs.
- Screenshots.
- App implementation files.

Do not stage, commit, or push.

---

## Required Blueprint Content

Document:

- FlutterFlow mobile screen list.
- Navigation model.
- Core user flows.
- Firebase vs Hermes/API data ownership.
- AI Hub Orchestrator routing role.
- Draft assistant chat request/response contract.
- First client visual theme direction.
- Theme configurability rule.
- Mobile blueprint validation checklist.
- Remaining open questions.

---

## Validation Commands

Run:

```bash
git status --branch --short
find planning/sprints/006-flutterflow-mobile-app-blueprint -maxdepth 1 -type f | sort
rg -n "FlutterFlow|Hermes|AI Hub Orchestrator|Firebase|Chat|Home Dashboard|clientTheme|assistant" planning docs
git diff --name-only
git diff --stat
```

Do not run app, deploy, Firebase, or package installation commands.

---

## Final Report

After applying the pack, report:

1. Files created.
2. Files updated.
3. Validation commands run.
4. Confirmation that no app/runtime code changed.
5. Whether Sprint 006 acceptance criteria are satisfied.
6. Remaining risks or questions.
```

---

## 11. Durable Docs Update Guidance

Codex should update durable docs without duplicating full sprint files.

### `planning/STATE.md`

Update current state to reflect:

- Sprint 005 was accepted, committed, and pushed.
- Commit: `ae335f743febe73c6f15884a87ffdf06c08ecb62`
- Current/next sprint: Sprint 006 — FlutterFlow Mobile App Blueprint.
- Sprint 006 is planning/docs only.
- Next action: apply Sprint 006 Architect Pack, then review Builder summary before edits.

### `planning/DECISIONS.md`

Add durable decisions listed in section 3 if missing.

### `planning/RISKS.md`

Add mobile blueprint risks listed in section 4 if missing.

### `planning/QUESTIONS.md`

Add questions listed in section 5 if missing.

### `docs/ARCHITECTURE.md`

Add or update a section like:

```markdown
## FlutterFlow Mobile Architecture Direction

FlutterFlow is the intended client-facing mobile frontend for Trina.

The existing React/Vite/Firebase implementation remains current/reference/local implementation unless later reclassified.

The target mobile architecture is:

- FlutterFlow mobile frontend for screens, navigation, and user interaction.
- Hermes backend AI brain for assistant reasoning.
- AI Hub Orchestrator for routing between mobile app, Hermes, Firebase, and future connectors.
- Firebase for approved supporting services such as auth, user profile, app state, storage references, and metadata.

FlutterFlow should not directly call model providers or own assistant prompt logic.
```

### `docs/API.md`

Add the draft assistant chat request/response contract from section 9.

### `docs/DATA_MODEL.md`

Add first-pass entities:

```markdown
## Mobile App Entities

| Entity | Purpose | Owner |
|---|---|---|
| UserProfile | Stores user display/profile settings. | Firebase or Hermes/API, TBD |
| AssistantSession | Tracks active chat/session state. | Hermes/API |
| ChatMessage | Represents user/assistant chat messages. | Hermes/API with optional Firebase mirror |
| AssistantAction | Represents backend action metadata returned by assistant. | Hermes/API |
| Task | Represents tasks/reminders visible in mobile app. | Firebase or Hermes/API, TBD |
| MemorySummary | Safe display summary of user memory/profile context. | Hermes/API |
| ClientTheme | Stores selected visual/persona theme. | Firebase or app config |
| UploadedFileReference | Stores file metadata/reference, not raw reasoning context. | Firebase Storage or Hermes-controlled storage, TBD |
```

### `docs/VALIDATION.md`

Add:

```markdown
## FlutterFlow Mobile Blueprint Validation

| Area | Validation Method | Status | Notes |
|---|---|---|---|
| Screens | Confirm required screen list is documented before build. | Pending | Sprint 006 |
| Navigation | Confirm bottom nav and secondary routes are defined. | Pending | Sprint 006 |
| API boundary | Confirm FlutterFlow calls Hermes/API or Orchestrator for AI behavior. | Pending | Sprint 006 |
| Data ownership | Confirm Firebase vs Hermes/API responsibilities are documented. | Pending | Sprint 006 |
| Theme | Confirm first theme is configurable and not hard-coded as permanent identity. | Pending | Sprint 006 |
| Safety | Confirm no runtime code/config was changed during blueprint sprint. | Pending | Sprint 006 |
```

---

## 12. Apply-Pack Prompt For Codex

Use this prompt to apply the Architect Pack to the project folder.

```text
You are the Builder operating inside:

/Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice

Apply this Architect Pack as a docs/planning-only sprint:

architect-packs/trina-006-flutterflow-mobile-app-blueprint-architect-pack.md

Important:

- This is Sprint 006 — FlutterFlow Mobile App Blueprint.
- Do not implement FlutterFlow.
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
- planning/FILE_INVENTORY.md
- docs/ARCHITECTURE.md
- docs/API.md
- docs/DATA_MODEL.md
- docs/VALIDATION.md
- planning/sprints/005-local-repo-baseline-flutterflow-direction/requirements.md
- planning/sprints/005-local-repo-baseline-flutterflow-direction/blueprint.md
- planning/sprints/005-local-repo-baseline-flutterflow-direction/acceptance.md

Then summarize before editing:

1. What Sprint 006 is supposed to accomplish.
2. Which files you expect to create or update.
3. What validation steps you will run.
4. Any blockers or ambiguities.

Stop after the summary and wait for my approval before making changes.
```

---

## 13. After Codex Applies The Pack

After Codex applies the pack and reports completion, the Architect should review the completion report against:

- `planning/sprints/006-flutterflow-mobile-app-blueprint/acceptance.md`
- `docs/API.md`
- `docs/ARCHITECTURE.md`
- `docs/DATA_MODEL.md`
- `docs/VALIDATION.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`

Only then should the user stage and commit Sprint 006 docs.

---

## 14. Likely Sprint 007

Do not start Sprint 007 yet.

Likely next sprint:

`Sprint 007 — FlutterFlow First Screen Build Handoff`

Purpose:

- Create the FlutterFlow Builder prompt.
- Define first screens to build.
- Define theme tokens.
- Define sample copy.
- Define test/demo data.
- Define connection stubs.
- Confirm whether implementation happens inside FlutterFlow only or also updates local docs.

Sprint 007 should not begin until Sprint 006 is accepted and committed.
