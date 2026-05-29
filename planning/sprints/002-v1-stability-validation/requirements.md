# Sprint 002 Requirements — V1 Stability Validation

## Goal

Validate that the existing Barbie / TrinaOS Voice app is stable enough for V1 launch across the core paths already built.

This sprint is about validation, stabilization, and documentation.

It is not a feature expansion sprint.

## Background

Sprint 001 audited the existing app and created the initial 120x planning structure. Known V1 areas include chat, reminders, popup notifications, Firebase Auth, Firestore, Firebase Functions, Hosting, Capacitor mobile packaging, and Telegram webhook readiness.

## In Scope

- Validate frontend build.
- Validate lint status.
- Validate Firebase Hosting configuration.
- Validate Firebase Functions code readiness.
- Validate Auth assumptions for callable functions.
- Validate chat path readiness.
- Validate reminder creation path.
- Validate reminder popup behavior.
- Validate Firestore rules readiness.
- Validate Telegram webhook readiness without exposing secrets.
- Confirm Gmail send remains disabled / V2.
- Document mobile readiness gaps.
- Update planning and validation docs with pass/fail/blocked results.

## Out of Scope

- Re-enabling Gmail send.
- Adding new Gmail integration.
- Building new voice architecture.
- Redesigning the UI.
- Refactoring major app structure.
- Adding new database models unless required to document existing behavior.
- Deploying to production unless explicitly approved.
- Committing native Firebase config files.
- Storing secrets in the repo.

## V1 Launch-Critical Behaviors

- User can authenticate.
- User can open the app dashboard.
- User can use the assistant chat path.
- User can create reminders.
- Reminder popups can appear, snooze, and dismiss.
- Firestore rules do not obviously block required V1 flows.
- Hosting can serve the built frontend.
- Firebase Functions are syntactically valid and deploy-ready.
- Telegram path has clear setup status.
- Gmail send is clearly not part of V1.

## Business Rules

- V1 stability is more important than new features.
- Gmail send must not block V1.
- Telegram must not be marked live unless secret and webhook setup are confirmed.
- Secrets must never be written into docs, source files, or chat.
- Native mobile config files must remain outside the committed repo.
