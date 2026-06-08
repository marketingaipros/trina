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
| 2026-06-08 | Sprint 068 accepts in-app due reminders for limited return-to-use; browser/native push can remain follow-up if unproven. | The owner approved in-app reminders for Sprint 068 if they create and fire visibly inside the app. | Browser/native push does not block the limited return-to-use proof, but remains documented follow-up until proven. |
| 2026-06-08 | Sprint 068 accepts typed fallback for limited return-to-use; voice/mic can remain follow-up if blocked by browser permission or reliability. | The owner approved typed fallback and directed Codex not to rebuild voice. | Voice permission denial does not block limited return-to-use by itself, but voice remains follow-up until reliable. |
| 2026-06-08 | Sprint 068 allows anonymous/current access for limited return-to-use if the app works and no obvious sensitive-data exposure is introduced. | The owner approved the current access posture only for limited return-to-use under that condition. | Access risk remains documented; no auth, database architecture, or Firebase settings changes are introduced in Sprint 068. |
| 2026-06-08 | Sprint 066 keeps Client UAT / V1 Beta on HOLD. | Sprint 065 local evidence is useful but insufficient for client release; customer URL/current deployed version is not proven, feedback path is not confirmed, auth/access posture is unresolved, browser/native push is not proven, live voice input is not proven, first tester and owner approver are not confirmed, and deploy/config need is unknown. | Do not return the app to the client, deploy, change Firebase settings, modify FlutterFlow/native files, touch credentials, modify `docs/API.md`, or create CEO Briefing evidence without a separate explicit approval. |
| 2026-06-08 | Fix current app intent routing before returning app to client. | Sprint 064 confirmed typed `Send` can answer, but `Capture` and likely voice transcript routing create Task Tracker confusion. | Client UAT / V1 Beta remains `HOLD` until normal ask flow, task capture flow, reminders/events, notifications, feedback, and auth/access are validated. |
| 2026-06-08 | Keep Flutter/FlutterFlow, PWA packaging, and native packaging deferred during Sprint 065. | Immediate goal is customer return-to-use through the existing app/current UI. | Sprint 065 must not become a redesign, migration, deploy, or packaging sprint. |
| 2026-06-08 | Separate Ask Barbie from Capture Task in the current UI behavior and labels. | Ordinary customer requests should not be silently saved as tasks or open Task Tracker. | Builder should clarify buttons/flows so general questions go to the assistant and task capture is explicit. |
| 2026-06-08 | Sprint 064 uses the current app/current UI as the immediate customer return-to-use path. | The owner clarified the app was already working before structure/framework cleanup, and the immediate business need is customer access, not a rebuild. | Validate the existing app path first for talk/input, answers, reminders/events, notifications, and feedback. Keep Client UAT / V1 Beta on HOLD until validation passes and owner approval is given. |
| 2026-06-08 | Flutter / FlutterFlow is a later track for Sprint 064 and must not block immediate return-to-use UAT. | The owner clarified Flutter / FlutterFlow can come later if the current app/current UI is the fastest safe path. | Do not migrate to FlutterFlow, modify FlutterFlow files, package native builds, or redesign the UI during Sprint 064. |
| 2026-06-08 | Sprint 064 is docs/planning-only and does not approve production release or V1 Beta. | The current app path still needs return-to-use validation and owner approval. | Do not modify runtime/source, deploy, Firebase settings, FlutterFlow, native build, credential, or CEO Briefing files. |
| 2026-06-08 | Sprint 063 is an owner-answer intake sprint, not a UAT approval sprint. | Required UAT gate answers must be captured in project files before approval can be considered. | Client UAT / V1 Beta remains HOLD unless a later release-control sprint approves it. |
| 2026-06-08 | Sprint 062 cannot approve Client UAT / V1 Beta. | Sprint 062 is an input-resolution docs/planning sprint, not an approval gate. | Keep Client UAT / V1 Beta on HOLD until a later gate sprint rechecks project-file evidence. |
| 2026-06-08 | UAT access inputs must be written into project files before re-running the UAT approval gate. | Chat-only answers are not durable release-control evidence. | Missing owner answers remain `Missing` until recorded in planning/docs files. |
| 2026-06-08 | Sprint 062 can collect access inputs but cannot itself approve UAT unless a future Architect Pack changes acceptance. | Prevents accidental client handoff while required release-control answers remain unresolved. | Do not deploy, change Firebase settings, modify FlutterFlow/native files, touch credentials, create CEO Briefing PNGs, or approve Client UAT / V1 Beta in this sprint. |
| 2026-06-08 | Sprint 061 closes as HOLD; Client UAT / V1 Beta is not approved. | UAT surface/link/path, first tester, feedback channel, notification status, V1 Beta approver, UAT-vs-production auth posture, and any needed deploy/config action remain missing or ambiguous. | Keep client handoff blocked. Do not approve Client UAT, approve V1 Beta, deploy, change Firebase settings, touch FlutterFlow, package native builds, modify credentials, or create CEO Briefing PNG evidence. |
| 2026-06-08 | Sprint 061 must resolve UAT access and approval gates before Client UAT / V1 Beta can move from HOLD to APPROVED. | Sprint 060 confirmed the app is not blocked by backend/model functionality but is blocked by release-control readiness. | Builder must not start client release, deploy, Firebase changes, FlutterFlow changes, or native packaging until the UAT surface, tester, feedback channel, notification status, approver, and auth posture are documented. |
| 2026-06-08 | Sprint 060 uses the current working UI as the default controlled UAT candidate surface. | Sprint 059 proved the current UI can reach the real Barbie backend/model path. | Client UAT readiness can be evaluated without waiting for FlutterFlow or native packaging. |
| 2026-06-08 | FlutterFlow is not the Sprint 060 UAT surface. | The current backend/model path is proven in the React/Vite UI, while FlutterFlow migration remains unapproved for this sprint. | Do not migrate, export, or modify FlutterFlow before controlled UAT readiness is decided. |
| 2026-06-08 | Native/iPhone packaging is deferred beyond Sprint 060. | Web workflow proof should precede packaging and device-specific validation. | Do not run native builds, Capacitor packaging, TestFlight, or app-store work in this sprint. |
| 2026-06-08 | V1 Beta approval requires an explicit owner/go-live approver decision after UAT surface, workflows, feedback channel, and known issues are recorded. | Backend smoke passing is necessary but not sufficient for client beta approval. | No final release or broad client access without a separate approval gate. |
| 2026-06-08 | Controlled Client UAT / V1 Beta is not approved by Sprint 060. | Exact UAT surface, first tester, bug/feedback capture channel, notification status, V1 Beta approver, and production auth posture remain unresolved. | Keep Sprint 060 at `HOLD`; do not approve client access, V1 Beta release, deploys, FlutterFlow migration, native packaging, or production release. |
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
| 2026-05-29 | Sprint 007 produces a FlutterFlow build handoff package, not local app code. | The first mobile UI work should happen in FlutterFlow using clear written instructions. | Local repo remains the planning/docs source of truth. |
| 2026-05-29 | First FlutterFlow build scope is limited to Splash, Welcome, Demo Access, Home Dashboard, Chat Shell, and Error/Offline. | Reduces build risk and creates a quick visual prototype. | Remaining screens stay planned for later as placeholders or future routes. |
| 2026-05-29 | Sprint 007 uses mocked/stubbed data only unless a later decision approves live backend wiring. | Prevents premature backend coupling and secret exposure. | FlutterFlow can show realistic behavior without relying on unfinished APIs. |
| 2026-05-29 | Barbie-inspired `trina-barbie-v1` is the approved first visual prototype direction. | The owner approved Sprint 007's first visual direction while preserving future theme flexibility. | The first FlutterFlow handoff uses Barbie v1 tokens, but theme values remain reusable and configurable. |
| 2026-05-29 | Sprint 008 is the first FlutterFlow visual prototype sprint. | Sprint 007 handoff is ready to be converted into an implementation-ready prototype scope. | The next Builder step can build in FlutterFlow only after owner approval. |
| 2026-05-29 | Sprint 008 prototype uses the current app screenshot as visual reference. | The owner wants the first mobile prototype to preserve the existing Trina visual identity. | FlutterFlow screens should adapt the screenshot's pale pink, hot pink CTA, rounded card, assistant dashboard, mic, and quick-action language to mobile. |
| 2026-05-29 | Sprint 008 uses mock data and API stubs only. | The first visual prototype should prove UX before connecting backend systems. | No Firebase, Gmail, backend API, live auth, or model calls are connected. |
| 2026-05-29 | The first FlutterFlow prototype keeps `trina-barbie-v1` configurable. | The visual direction is approved for the first prototype but should not lock the product forever. | Theme tokens remain reusable and future themes remain possible. |

## Sprint 009 Decisions

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-05-29 | Sprint 009 is FlutterFlow handoff planning only. | The prototype needs exact screen-level instructions before visual build work begins. | Codex must update docs/planning only and must not create FlutterFlow exports or runtime code. |
| 2026-05-29 | Visual proof assets should default to `references/flutterflow/sprint-009/`. | Keeps screenshots and prototype reference material outside runtime code while preserving evidence in the project folder. | FlutterFlow screenshots, notes, and exports can be organized without polluting app source. |
| 2026-05-29 | The first FlutterFlow prototype should use mock data and stub behavior only. | The goal is visual validation before backend integration. | No Firebase, Hermes/API, authentication, persistence, or production mobile release work is included. |
| 2026-05-29 | Mobile navigation should adapt the browser screenshot's left-side navigation into bottom tabs and quick-action cards. | FlutterFlow prototype is mobile-first and should not force desktop navigation into a phone layout. | The FlutterFlow builder should use mobile-native navigation patterns. |

## Sprint 010 Decisions

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-05-30 | CEO Briefing evidence is deferred and does not block the broader prototype. | The real screenshot is still missing, and the prototype can move forward with the gap documented rather than fabricated. | Do not mark CEO Briefing complete or create placeholder evidence; keep `references/flutterflow/sprint-009/ceo-briefing.png` as the future evidence path. |
| 2026-05-30 | Sprint 010 uses FlutterFlow-only prototype work. | The sprint fixes prototype evidence, not app behavior or backend integration. | Do not use generated FlutterFlow exports, local runtime code, Firebase, Hermes/API, backend calls, auth, live AI, real voice capture, or real financial data. |
| 2026-05-30 | CEO Briefing naming may change in a future sprint. | The screen concept may fit the product better under a broader briefing name. | Future candidates include Executive Briefing, Daily Briefing, Priority Briefing, Founder Briefing, or Command Briefing. |

## Sprint 011 Decisions

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-05-30 | Defer CEO Briefing screenshot evidence instead of blocking prototype progress. | The screen may be renamed or redesigned, and the broader prototype should not be blocked by one missing evidence file. | CEO Briefing remains deferred, not complete. Future briefing work should be handled in a later focused sprint. |
| 2026-05-30 | Future briefing screen name is not locked. | Candidate names include Executive Briefing, Daily Briefing, Priority Briefing, Founder Briefing, and Command Briefing. | Future FlutterFlow work should avoid treating `CEOBriefing` as final naming. |
| 2026-05-30 | Next prototype work should focus on demo-path polish. | Current accepted evidence is enough to move forward, while backend and generated-code work remain premature. | Recommend `012-flutterflow-demo-path-polish` as the next sprint. |

## Sprint 012 Decisions

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-05-30 | Sprint 012 will polish the accepted FlutterFlow demo path without requiring CEO Briefing. | CEO Briefing naming and design may change later, and it should not block prototype progress. | Sprint 012 demo readiness uses Dashboard, Assistant, Strategic Advisor, Finance Snapshot, and Settings as the accepted screen set. |

## Sprint 013 Decisions

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-05-30 | Sprint 013 reopens only the CEO Briefing evidence gap. | The project now needs real FlutterFlow screenshot evidence for the deferred screen. | Work remains limited to manual FlutterFlow validation, one real screenshot at `references/flutterflow/sprint-009/ceo-briefing.png`, and planning/docs/evidence notes. |
| 2026-05-30 | CEO Briefing evidence remains pending until the real screenshot file exists. | The required screenshot is not present in the repo during pack application. | Do not mark CEO Briefing evidence complete, do not create placeholders, and do not claim the gap is closed before the PNG exists. |
| 2026-05-30 | Sprint 013 is a documented deferred-evidence checkpoint, not an active blocker. | No real CEO Briefing screenshot is available, and blocking app-build progress on missing evidence would stall the project unnecessarily. | Move forward by creating the next Architect Pack for actual app build progress while preserving the no-fake-evidence rule. |

## Sprint 015 Decisions

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-05-31 | Defer CEO Briefing screen and screenshot evidence until after core app functionality is stable. | Sprint 014 recorded the evidence capture as blocked because no working CEO Briefing page or real screenshot was available. Continuing to chase evidence for a missing screen would waste build time. | Sprint 015 shifts focus to app functionality. CEO Briefing remains a future feature, not a current blocker. |

## Sprint 016 Decisions

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-05-30 | Sprint 016 remains planning/docs and validation stabilization only. | The project needs a clean state after the Sprint 015 checkpoint before new implementation work starts. | Codex must not modify runtime app code, generated FlutterFlow code, Firebase, Hermes, backend, package/native, or release files. |
| 2026-05-30 | CEO Briefing screenshot evidence remains deferred unless captured from the real FlutterFlow prototype. | Fake or placeholder evidence would make validation unreliable. | No placeholder `ceo-briefing.png` may be created. |
| 2026-05-30 | The next build step must be based on sprint files, not chat memory. | The 120x workflow requires folder-based handoff. | Codex must read Sprint 016 files and summarize before any implementation. |

## Sprint 017 Decisions

| Date | Decision | Reason | Impact |
|---|---|---|---|

## Sprint 019 Decisions

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-05-31 | CEO Briefing evidence is formally deferred for Sprint 019. | No real FlutterFlow screenshot exists in the project folder, and no operator-verified click-path validation is available during this Builder pass. | Keep `references/flutterflow/sprint-009/ceo-briefing.png` absent until a real screenshot is captured; future closure requires operator / FlutterFlow Builder validation. |
| 2026-05-31 | Sprint 017 is docs/planning-only evidence readiness, not evidence capture. | The project needs a clean validation checklist and evidence storage rules before final prototype capture. | Codex must not create screenshots or modify runtime/exported code in Sprint 017. |
| 2026-05-31 | CEO Briefing remains deferred unless real FlutterFlow evidence exists. | Placeholder evidence would corrupt validation history. | `ceo-briefing.png` must not be created as a placeholder. |
| 2026-05-31 | Screenshot evidence must come from actual FlutterFlow Designer or Preview state. | Evidence should prove real prototype status, not planned or mocked status. | Docs must distinguish confirmed evidence from deferred or missing evidence. |
| 2026-05-31 | Final prototype validation must confirm screens, navigation, storage location, and screenshot naming before capture. | Reduces confusion and prevents evidence files from being scattered or mislabeled. | `docs/VALIDATION.md` and FlutterFlow handoff docs must define the required validation path. |

## Sprint 018 Decisions

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-05-31 | Sprint 018 remains planning/docs evidence capture only. | The operator requested Architect Pack application without runtime implementation, generated export, Firebase, Hermes/backend, package/native, build, or release changes. | Codex must update only planning/docs/evidence notes and must not stage, commit, or push. |
| 2026-05-31 | The Sprint 018 Architect Pack is corrected to match the Sprint 018 filename and requested scope. | The pack must clearly represent final prototype evidence capture, not a prior Sprint 014 checkpoint. | Sprint 018 preserves no-fake-evidence rules without marking CEO Briefing complete. |
| 2026-05-31 | CEO Briefing remains missing or deferred unless the real screenshot file exists. | Evidence must come from actual FlutterFlow state, not a placeholder. | `references/flutterflow/sprint-009/ceo-briefing.png` must not be fabricated. |

## Sprint 020 Decisions

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-05-31 | Sprint 020 is an operator-led FlutterFlow Designer / Preview evidence pass. | CEO Briefing evidence can only be closed by real prototype validation, not documentation review. | Click paths cannot be marked `Pass` unless the real FlutterFlow project is tested. |
| 2026-05-31 | `references/flutterflow/sprint-009/ceo-briefing.png` remains the only approved closure path for CEO Briefing screenshot evidence. | The file closes a Sprint 009 evidence gap and must stay stable. | Alternate filenames or folders do not close the CEO Briefing gap. |
| 2026-05-31 | No placeholder or fake CEO Briefing screenshot may be created during Sprint 020. | Evidence integrity matters more than making the checklist look complete. | The file remains absent unless real FlutterFlow screenshot evidence is captured. |

## Sprint 023 Decisions

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-05-31 | CEO Briefing is deferred and does not block app completion. | FlutterFlow AI Designer repeatedly failed to produce a usable CEO Briefing page, and the operator explicitly directed the project to stop looping on that screen. | Future sprints must proceed with app completion around CEO Briefing unless the operator explicitly reopens it. |

## Sprint 024 Decisions

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-05-31 | Sprint 024 will focus on existing non-CEO runtime paths. | Sprint 023 reset removed CEO Briefing as a blocker and restored forward app-completion work. | Builder should prioritize Dashboard, Assistant/voice entry, Tasks, Finance, Calendar, Notifications/reminders, and Settings-equivalent paths. |
| 2026-05-31 | CEO Briefing remains deferred and must not be rebuilt in Sprint 024. | Prior sprints stalled around a missing FlutterFlow screen and screenshot evidence. | No CEO Briefing files, screenshot evidence, or FlutterFlow build work should be touched. |
| 2026-05-31 | Sprint 024 may make small runtime fixes after the planning pack is applied and the pre-implementation summary is approved. | The app needs forward progress beyond docs/planning reset. | Runtime edits are allowed only inside the approved non-CEO stabilization scope. |
| 2026-05-31 | Intentional placeholders are acceptable when a visible path is not ready for full functionality. | The sprint goal is shell stabilization, not complete feature expansion. | Placeholder states must be clear, non-crashing, and not misleading. |

## Sprint 025 Decisions

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-05-31 | Sprint 025 cleans up planning/docs state and supersedes stale CEO Briefing momentum. | Sprint 021/022/023 left dirty planning artifacts and mixed active vs historical guidance. | Keep only durable decisions, preserve Sprint 023/024 forward-build direction, and keep CEO Briefing deferred unless explicitly reopened. |

## Sprint 028 Decisions

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-05-31 | File contents win over filenames when an Architect Pack label conflicts with its contents. | A mislabeled Sprint 028 pack contained Sprint 023 content and could send Builders back into stale work. | Future pack application must inspect contents before applying a filename-based sprint assumption. |
| 2026-05-31 | CEO Briefing remains deferred and non-blocking during Sprint 028 closeout. | Sprint 028 is a planning/docs cleanup and forward-state correction sprint, not CEO Briefing work. | The next implementation target stays focused on core app shell polish. |

## Sprint 030 Decisions

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-05-31 | Use `Knowledge Base` as the full feature name and `Knowledge` only as a compact navigation label when space requires it. Do not use `Context` as the user-facing label for this feature unless a future sprint deliberately changes the product language. | Sprint 029 improved navigation labels but created a follow-up need to make product copy consistent. | Sprint 030 should align visible labels, empty-state copy, validation notes, and smoke checks around one product term. |
| 2026-05-31 | Sprint 030 should add lightweight UI smoke confidence without introducing a heavy E2E testing system unless the repo already supports it cleanly. | The project needs confidence, not a test framework detour. | Prefer simple scripts, existing test setup, or documented manual smoke protocol over large test tooling changes. |

## Sprint 042 Decisions

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-06-02 | Sprint 042 establishes local, query-param, non-production fixtures as the preferred lightweight validation mechanism for hard-to-reproduce UI states, as long as they are guarded from production behavior and remain narrow to validation needs. | Seeded local data and service fallback behavior made empty and failure states hard to live-reproduce without risky data or backend changes. | Future validation sprints may use narrow non-production query-param fixtures before considering heavier test infrastructure, package changes, backend changes, or production feature flags. |

## Sprint 053 Release Rollout Decisions

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-06-07 | Treat Sprint 052 `SHIP` as repo-release readiness only, not client rollout approval. | Sprint 052 validated lint/build/repo state but did not deploy, run native builds, or prepare client UAT. | A separate rollout/UAT sprint is required before the client starts using the app. |
| 2026-06-07 | Sprint 053 must focus on FlutterFlow release path, environment validation, and client UAT preparation. | The app may still depend on FlutterFlow export/deployment or FlutterFlow-managed settings. | Builder must verify source alignment and deployment path before any client handoff. |
| 2026-06-07 | Client rollout must be controlled, starting with internal validation and one trusted client-side tester before broader use. | This reduces client-facing risk and creates a clear blocker/minor-issue triage path. | Client access should not be distributed broadly until Sprint 053 acceptance criteria pass. |

## Sprint 056 Decisions

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-06-08 | Sprint 056 validates the current Vite React and Firebase Functions assistant path before client UAT instead of rebuilding the app. | The app was already working before the recent sprint sequence, and the client is waiting to regain access. | Builders must validate launch, auth/session, `chatWithBarbie`, and core workflow behavior before recommending `CLIENT UAT CANDIDATE`. |
| 2026-06-08 | Firebase callable `chatWithBarbie` is the current assistant/backend contract to validate for this sprint. | Repo evidence shows typed assistant requests route through `askBarbie()` to `chatWithBarbie`; Hermes-specific runtime integration is not implemented. | Hermes/API work remains out of scope unless a later approved sprint changes the backend target. |

## Sprint 057 Release-Path Decisions

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-06-08 | The current local browser app must be proven through manual smoke before it can be recommended for client UAT. | Sprint 056 proved local launch but did not fully prove live browser UI workflows. | Sprint 057 must validate usable browser workflows before changing the release recommendation. |
| 2026-06-08 | Visual launch alone is not enough for client release. | The operator visually confirmed the app renders in Chrome, but assistant/backend/model and core workflow behavior still need evidence. | Keep client rollout at `HOLD` unless assistant brain, reminder/core workflow, and voice or typed fallback behavior pass or are clearly non-blocking. |
| 2026-06-08 | The client must not be handed the app as ready until assistant brain, reminder/core workflow, and voice or typed fallback behavior are validated or clearly documented as blocked. | Client UAT requires a usable workflow path, not only an app shell. | Sprint 057 closeout must record actual pass/blocker status and final recommendation. |

## Sprint 058 Decisions

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-06-07 | Web app backend/model smoke must pass before client UAT, PWA/home-screen, iOS wrapping, or FlutterFlow/native migration. | Sprint 057 proved visual render but not real Barbie backend/model response because Firebase auth blocked assistant Send. | Sprint 058 must focus on Firebase auth/backend smoke before release-path expansion. |
| 2026-06-08 | The iPhone delivery path remains undecided until Sprint 057 compares web/PWA/wrapped/native/FlutterFlow options against the actual working app state. | Packaging decisions should follow evidence from the current app path. | Do not decide FlutterFlow/native or wrapped iPhone as final path during pack application. |

## Sprint 059 Decisions

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-06-08 | Firebase Anonymous sign-in was enabled by the operator for local/UAT Barbie backend smoke testing. | Sprint 058 showed Google popup/OAuth domain flow blocked local smoke before the callable. Anonymous auth is the smallest operator-level unblock for the existing `ensureBarbieAuth()` path. | Sprint 059 should rerun smoke without changing Firebase Console settings or credentials. |
| 2026-06-08 | Sprint 059 proves the current web app can reach Barbie backend/model through `chatWithBarbie`, but broad client rollout still needs a controlled UAT-readiness decision. | Browser smoke passed the proof target and showed a visible non-mocked Barbie response, while UAT host/domain, first tester, issue channel, go-live approver, and final auth posture remain separate decisions. | Next sprint should prepare controlled web UAT readiness without starting iOS packaging, FlutterFlow/native work, deploys, or credential changes by default. |
