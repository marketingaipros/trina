# Sprint 007 Blueprint - FlutterFlow First Screen Build Handoff

## Objective

Create the handoff package for the first FlutterFlow visual prototype.

This is a planning/docs sprint only.

The actual FlutterFlow build happens after this sprint is accepted.

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

## Files To Create

- `planning/sprints/007-flutterflow-first-screen-build-handoff/requirements.md`
- `planning/sprints/007-flutterflow-first-screen-build-handoff/blueprint.md`
- `planning/sprints/007-flutterflow-first-screen-build-handoff/acceptance.md`
- `planning/sprints/007-flutterflow-first-screen-build-handoff/handoff-prompt.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`

## Files To Update

- `planning/STATE.md`
- `planning/DECISIONS.md`, if new decisions are not already captured
- `planning/RISKS.md`, if new risks are not already captured
- `planning/QUESTIONS.md`, if new questions are not already captured
- `docs/VALIDATION.md`

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
   - Mark Sprint 006 accepted/committed/pushed if confirmed by owner direction.
   - Set current/next sprint to Sprint 007.
   - Next action: apply Sprint 007 Architect Pack.
10. Update decisions, risks, and questions if needed.
11. Update `docs/VALIDATION.md`.
   - Add FlutterFlow first-screen validation checklist.
12. Run validation.
13. Report files, validation results, scope confirmation, and acceptance status.

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
