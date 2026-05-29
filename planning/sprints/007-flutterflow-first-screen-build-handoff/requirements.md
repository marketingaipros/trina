# Sprint 007 Requirements - FlutterFlow First Screen Build Handoff

## Goal

Create a Builder-ready FlutterFlow first-screen build handoff for Trina.

This sprint defines exactly what the FlutterFlow Builder should create first, what should stay mocked, what visual theme to use, and how the first prototype should be validated.

## Business Objective

Trina needs a polished first mobile prototype that shows the client-facing direction without prematurely wiring backend systems or changing the local React/Vite repo.

The first prototype should prove the app can look and feel right before deeper backend, memory, auth, storage, and assistant automation work begins.

## Users

- End user/client previewing Trina on mobile.
- User/operator reviewing the first visual direction.
- FlutterFlow Builder implementing the first screens.
- Architect Layer maintaining scope and acceptance criteria.

## First Build Scope

The first FlutterFlow implementation should build:

1. Splash / Loading
2. Welcome / Intro
3. Sign In / Demo Access
4. Home Dashboard
5. Chat Shell
6. Error / Offline

Other Sprint 006 screens may appear as navigation placeholders or future routes only.

## In Scope

- First FlutterFlow screen package.
- Barbie-inspired Trina v1 theme tokens.
- Screen-level copy.
- Component list.
- Mock/demo data.
- API placeholder rules.
- FlutterFlow validation checklist.
- FlutterFlow Builder handoff prompt.

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

## Theme Direction

Use Barbie-inspired Trina v1 as the first visual prototype theme.

The theme must remain configurable.

Do not hard-code the visual direction as the permanent app identity.

## Data Rules

Use mock/demo data only.

Do not connect live backend services in this sprint.

Do not store API keys, Firebase secrets, model keys, or private credentials in FlutterFlow or repo docs.

## Success Criteria

Sprint 007 is complete when the repo contains a clear FlutterFlow first-screen build handoff that a FlutterFlow Builder can follow without guessing.
