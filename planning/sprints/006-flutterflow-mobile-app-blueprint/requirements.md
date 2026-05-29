# Sprint 006 Requirements - FlutterFlow Mobile App Blueprint

## Goal

Define the FlutterFlow mobile app blueprint for Trina before any mobile UI build or implementation work begins.

Sprint 006 converts the Sprint 005 FlutterFlow direction into concrete planning artifacts: screens, navigation, user flows, data ownership, API contract expectations, theme assumptions, validation rules, and next-sprint readiness.

## Business Objective

Trina needs a polished client-facing mobile app direction that can be built in FlutterFlow without confusing the existing React/Vite local app with the final mobile product.

The mobile app should make Trina feel like a premium personal AI assistant while keeping AI reasoning, memory behavior, and tool routing controlled by Hermes/API and the AI Hub Orchestrator.

## Primary Users

- End user/client using Trina as a personal assistant.
- Operator/owner reviewing app behavior and visual direction.
- Builder/FlutterFlow implementer who needs clear screen and data boundaries.
- Architect Layer maintaining planning, scope, and acceptance criteria.

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

## In Scope

- Define FlutterFlow screen list.
- Define navigation model.
- Define core mobile user flows.
- Define Firebase vs Hermes/API responsibilities.
- Define first client theme direction.
- Define placeholder vs real data areas.
- Define draft API request/response contracts for assistant chat.
- Define validation criteria for mobile blueprint readiness.

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

## Product Direction

FlutterFlow is the client-facing mobile direction.

The existing React/Vite/Firebase app remains the current/reference/local implementation unless later reclassified.

Hermes is the backend AI brain.

AI Hub Orchestrator is the routing layer.

Firebase may support auth, profile, app state, task metadata, memory metadata, and storage references where approved.

FlutterFlow should not directly own AI reasoning, prompts, model calls, memory selection, or connector execution.

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

## Open Questions

- Should FlutterFlow use Firebase Auth directly in V1?
- Should the first build support demo mode before full auth?
- Should uploads go to Firebase Storage or Hermes-controlled storage?
- Should the first FlutterFlow app include editable memory, or read-only memory summaries only?
- Will generated FlutterFlow code ever be committed to this repo?

## Success Criteria

Sprint 006 is complete when the project has a clear, Builder-ready FlutterFlow mobile app blueprint and no implementation work has been started.
