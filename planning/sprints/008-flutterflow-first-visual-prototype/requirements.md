# Sprint 008 Requirements - FlutterFlow First Visual Prototype

## Goal

Create the planning and build-scope package for the first FlutterFlow visual prototype of Trina.

This sprint uses the Sprint 007 FlutterFlow handoff and the current app screenshot as the visual reference.

## Business Objective

Trina needs a polished mobile-first visual prototype that proves the client-facing app direction before live backend, auth, Firebase, Gmail, or production mobile release work begins.

The prototype should preserve the current Trina visual identity while adapting it into a FlutterFlow mobile experience.

## Users

- End user/client previewing Trina on mobile.
- Owner/operator reviewing the first mobile visual direction.
- FlutterFlow Builder creating the first prototype.
- Architect Layer maintaining scope, risk, and acceptance boundaries.

## First Prototype Scope

Define the first six screens:

1. Splash / Loading
2. Welcome / Intro
3. Sign In / Demo Access
4. Home Dashboard
5. Chat Shell
6. Error / Offline

## Visual Identity Requirements

The prototype must match the current screenshot's overall visual identity:

- Pale pink background.
- Hot pink primary CTA.
- Soft rounded cards.
- Left-side quick action/navigation concept adapted for mobile.
- Large central microphone action.
- Executive assistant feel.
- `Strategic Advisor Mode`.
- `CEO Briefing`.
- Finance quick action.

Use the `trina-barbie-v1` theme direction and keep theme values configurable.

## In Scope

- FlutterFlow-only visual prototype scope.
- Six-screen prototype definition.
- Mobile adaptation of screenshot concepts.
- `trina-barbie-v1` theme tokens.
- Shared component guidance.
- Mock data.
- API stub contracts.
- Validation checklist.
- Sprint handoff prompt.
- Planning and docs updates only.

## Out of Scope

- No local React/Vite runtime code changes.
- No FlutterFlow screen creation inside this repo.
- No generated FlutterFlow exports.
- No production mobile release files.
- No real Firebase connection.
- No real Gmail connection.
- No backend API connection.
- No live auth.
- No live model calls.
- No Hermes or AI Hub implementation.
- No Firebase deploy.
- No package changes.
- No secrets, tokens, or credentials.
- No staging, commit, or push.

## Data Rules

Use mock data only.

All data shown in the prototype must be clearly treated as demo content.

## API Rules

Use API stubs only.

Document placeholder concepts, but do not connect live endpoints, model providers, Firebase, Gmail, auth, Telegram, or Hermes.

## Success Criteria

Sprint 008 is complete when the repo contains a clear planning/docs package for the first FlutterFlow visual prototype, the six screens are defined, the screenshot-derived visual identity is documented, and all runtime/backend/release boundaries remain untouched.
