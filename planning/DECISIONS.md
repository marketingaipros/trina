# Decisions

## Existing Decisions

## D001 - Preserve Existing App
The existing Vite React Barbie app is the source of truth. Do not create a replacement frontend.

## D002 - Backend Secrets Stay in Firebase Functions
AI, Google client secret, and Telegram bot token are handled through Firebase Functions secrets, not frontend environment variables.

## D003 - Gmail Send Is V2
Gmail connection code may remain, but real Gmail sending should not block V1 launch.

## D004 - Reminders Are V1 Core
Reminder creation, Firestore persistence, popup notifications, dismiss, and snooze are core launch behavior.

## D005 - Capacitor Is the Mobile Path
Mobile conversion uses Capacitor around the existing Vite app rather than a rewrite.

## D006 - FlutterFlow Is the Planned Client Mobile Frontend
The client-facing mobile frontend should be built first in FlutterFlow. The existing React/Vite app remains preserved as the current/reference implementation unless the owner decides a new role for it.

## D007 - Hermes Is the Backend AI Brain
FlutterFlow should send structured requests to Hermes or a backend API placeholder. Hermes classifies, routes, processes, and updates task status without exposing internal AI tooling to clients.

## D008 - Sprint 006 Is Blueprint Only
Sprint 006 defines the FlutterFlow mobile app blueprint. It does not build the FlutterFlow project, change runtime code, modify Firebase config, or create generated exports.

## D009 - Hermes/API Owns Assistant Reasoning
FlutterFlow should call Hermes/API or AI Hub Orchestrator for assistant behavior. Firebase direct access should be limited to approved support concerns such as auth, profile, app state, task metadata, memory metadata, and storage references.

## D010 - Mobile Theme Must Be Configurable
The first mobile theme may be Barbie-inspired Trina, but the product foundation must support future theme changes and must not hard-code one client look as the permanent identity.

## Decision Log

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-05-15 | Existing Trina app will be brought into the 120x Architect / Builder workflow before additional feature work. | Existing app needs durable planning, architecture, risks, and sprint files before further build work. | Future work should happen sprint-by-sprint from written files, not loose chat instructions. |
| 2026-05-15 | Gmail send remains V2 and disabled for V1 stability. | Email sending introduces integration, permission, and safety risk that should not block V1 launch. | Sprint 002 must not re-enable or expand Gmail send behavior. |
| 2026-05-15 | Telegram is allowed in V1 only as a readiness-validated path, not assumed live until the secret and webhook are configured. | Telegram depends on `TELEGRAM_BOT_TOKEN` and webhook setup outside normal source code. | Sprint 002 should validate readiness and document setup status without exposing secrets. |
| 2026-05-15 | Native mobile Firebase config files must not be committed. | Native config files may contain environment-specific or sensitive app setup details. | Mobile validation must document required local files without adding them to the repo. |
| 2026-05-15 | Sprint 003 will focus on production release readiness, not feature expansion. | Sprint 002 passed local validation but left deployment, Telegram, Gmail, debug logging, and mobile scope open. | Builder must not add features or refactor during this sprint unless explicitly approved. |
| 2026-05-15 | Gmail send remains V2-disabled for V1. | V1 stability is higher priority than email sending. | `sendGmailEmail` callable status must be documented, but chat behavior must not re-enable Gmail. |
| 2026-05-15 | Telegram cannot be marked live until token and webhook setup are confirmed. | Telegram depends on external secret and webhook configuration. | Telegram readiness is pass/fail/blocked based on verified setup. |
| 2026-05-15 | Mobile launch scope must be decided before claiming mobile readiness. | Native Firebase config files and device/emulator testing are not fully validated. | V1 may launch web-first if mobile remains blocked. |
| 2026-05-15 | Debug log policy must be decided before go-live. | Raw message text may be written to `debugLogs`. | Go-live checklist must include retain, redact, reduce, or disable decision. |
| 2026-05-15 | V1 launch scope is web-first by default. | Local validation passed for web build and Firebase config, while Android/iOS still require native Firebase config and device/emulator testing. | Android and iOS remain blocked until explicitly validated. |
| 2026-05-15 | Telegram remains blocked for launch until setup is confirmed without exposing secrets. | Sprint 003 did not access secrets and did not verify webhook setup. | Telegram should not be included in the web V1 go-live claim unless separately verified. |
| 2026-05-15 | Debug log go-live recommendation is reduce or redact message content before broad production use. | `chatWithBarbie` can write raw user message text into `debugLogs`. | A future approved code change may be needed if the owner chooses redaction/reduction. |
| 2026-05-15 | Existing `sendGmailEmail` callable should be reviewed for restriction or explicit V2 gating in a future sprint. | Chat behavior disables Gmail sending, but the authenticated callable still exists. | Do not re-enable chat Gmail sending for V1; decide callable treatment before Gmail V2 work. |
| 2026-05-15 | Sprint 004 is a controlled web V1 deploy sprint. | Sprint 003 showed web V1 is locally ready after deploy approval. | Deployment actions can proceed only after explicit approval. |
| 2026-05-15 | Telegram is not required for web V1 launch. | Token and webhook setup are not confirmed. | Telegram remains blocked unless separately approved and configured. |
| 2026-05-15 | Gmail send remains V2-disabled from chat during Sprint 004. | Gmail send is outside the V1 stability boundary. | No Gmail expansion during Sprint 004. |
| 2026-05-29 | Local Trina folder is the working source for audit. | It contains the live app files and 120x planning structure. | Do not recreate folders or rerun launcher before audit. |
| 2026-05-29 | Client-facing mobile frontend should be built first in FlutterFlow. | Clients care about polished phone-app feel and visual design. | Codex should not be used as the first frontend builder for the client app. |
| 2026-05-29 | Hermes is the backend AI brain. | The client should experience a clean app while backend intelligence stays internal. | FlutterFlow sends structured requests to Hermes/API layer. |
| 2026-05-29 | AI Hub Orchestrator is the routing layer. | Requests may need to route to different agents/workflows. | API design must include request type, status, approval, workflow routing, and task metadata. |
| 2026-05-29 | Internal tools must not be exposed to clients. | Clients should not see Hermes, Claude, Gemini, Google AI Studio, Codex, or internal AI tooling. | UI copy and architecture must hide internal implementation details. |
| 2026-05-29 | One reusable FlutterFlow template should support three theme variants. | The product will serve multiple clients with different brand looks. | Theme variables and screen structure must be reusable. |
| 2026-05-29 | Sprint 006 is a FlutterFlow mobile app blueprint sprint, not a build sprint. | The project needs a clear mobile screen/navigation/API contract before FlutterFlow work starts. | Builder must create planning/docs only and avoid implementation. |
| 2026-05-29 | React/Vite app remains current/reference/local implementation until explicitly reclassified. | Existing work may still be useful as behavior reference. | Builder should not delete, retire, or rewrite it during Sprint 006. |
| 2026-05-29 | Hermes/API is preferred for AI assistant behavior. Firebase direct access should be limited to app state/auth/storage/profile needs. | AI reasoning and routing should stay backend-controlled rather than embedded in FlutterFlow screens. | FlutterFlow should call APIs for AI actions instead of owning assistant logic. |
| 2026-05-29 | Client visual theme must be configurable. | Trina may have multiple client/persona looks. | First theme can be Barbie-inspired, but docs must avoid locking the whole product to one theme. |
