# State

## Current Sprint
`007-flutterflow-first-screen-build-handoff`

## Current Status
Sprint 003 production release readiness validation passed without deployment and without production code changes. Sprint 004 was prepared as the controlled web V1 deploy sprint, but no deploy should occur until the owner explicitly approves the deploy scope.

Sprint 005 was accepted, committed, and pushed in commit `ae335f743febe73c6f15884a87ffdf06c08ecb62`. The client-facing mobile app direction is now FlutterFlow-first, with Hermes as the backend AI brain and AI Hub Orchestrator as the routing layer. The existing local React/Vite/Firebase app remains preserved as the current/reference implementation and must not be confused with the planned FlutterFlow client mobile frontend.

Sprint 006 is a documentation-only FlutterFlow Mobile App Blueprint sprint. It defines the first mobile screens, navigation model, user flows, data ownership, API contract direction, theme assumptions, and validation criteria before any FlutterFlow implementation begins.

Sprint 007 is a documentation-only FlutterFlow First Screen Build Handoff sprint. It prepares the first FlutterFlow Builder package for the initial visual prototype without building in FlutterFlow and without changing local app/runtime code.

## Recently Completed
- Existing Barbie / TrinaOS Voice app inspected.
- 120x planning and documentation structure created.
- Initial architecture documented.
- Known incomplete areas documented.
- No production code changes were made during Sprint 001.
- Sprint 002 approved validation commands were run:
  - `npm run build`
  - `npm run lint`
  - `node --check functions/index.js`
- Firebase Hosting config was inspected and confirmed to serve `dist`.
- Firestore rules were inspected for authenticated user-owned reads/writes.
- Reminder creation and popup paths were inspected.
- Gmail send boundary was inspected and remains V2-disabled in chat intent routing.
- Sprint 003 approved validation commands were run:
  - `npm run build`
  - `npm run lint`
  - `node --check functions/index.js`
  - `firebase use`
- Firebase target was confirmed as `barbie-92edc`.
- V1 launch scope was documented as web-first.
- Android and iOS were documented as blocked until native Firebase config and device/emulator testing are confirmed.
- Telegram was documented as blocked until token and webhook setup are confirmed without exposing secrets.
- Sprint 005 local baseline was checked:
  - Current branch is `main`.
  - Git remote is `https://github.com/marketingaipros/trina.git`.
  - App stack is Vite, React, Firebase, Tailwind CSS, and Capacitor.
  - The Sprint 005 Architect Pack exists at `architect-packs/trina-005-flutterflow-direction-architect-pack.md`.
- Sprint 005 docs checkpoint was committed and pushed:
  - `ae335f743febe73c6f15884a87ffdf06c08ecb62`
- Sprint 006 FlutterFlow mobile app blueprint docs exist at `planning/sprints/006-flutterflow-mobile-app-blueprint/` and are the source for Sprint 007 first-screen scope.

## Active Sprint Goal
Create a Builder-ready FlutterFlow first-screen build handoff without changing app/runtime code.

## Known Stable Areas
- Vite React app structure exists.
- Firebase Functions backend exists.
- Firestore rules exist.
- Hosting is configured to serve `dist`.
- Capacitor iOS and Android folders exist.
- Reminder creation and popup architecture exists in code.
- Web build, type-check, and Functions syntax checks pass locally.
- Firebase project target is `barbie-92edc`.
- 120x planning and documentation structure exists.
- Git remote is connected to `https://github.com/marketingaipros/trina.git`.

## Known Incomplete Areas
- Gmail send is intentionally V2/disabled for V1 stability.
- Telegram webhook requires `TELEGRAM_BOT_TOKEN` secret and webhook setup before use.
- Native mobile Firebase config files are not committed.
- Browser speech recognition is not a complete native mobile voice solution.
- Debug logging policy for raw user message text is not decided.
- Production deploy commands have not been approved or run.
- Whether the existing React/Vite app becomes internal admin/reference, remains maintained, or is retired after a FlutterFlow MVP is not decided.
- FlutterFlow backend integration path is not final; default planning assumes structured requests to a backend API placeholder first.
- FlutterFlow screen implementation has not started.
- Mobile auth, upload storage, minimum MVP depth, and generated-code repo policy remain undecided.

## Next Actions
- Use `planning/sprints/007-flutterflow-first-screen-build-handoff/` as the active Sprint 007 handoff.
- Review and accept Sprint 007 first-screen handoff docs before starting FlutterFlow implementation.
- Do not create a FlutterFlow project, generated export, Firebase schema change, or runtime implementation during Sprint 007.
- Treat Barbie-inspired `trina-barbie-v1` as the approved first visual prototype direction while keeping theme tokens configurable for future themes.
- After Sprint 007 is accepted, use `docs/FLUTTERFLOW_BUILD_HANDOFF.md` as the FlutterFlow Builder input for the first visual prototype.
- Keep the existing React/Vite app preserved as current/reference implementation until the owner decides its long-term role.
- Confirm whether FlutterFlow will use Firebase directly, a Hermes API endpoint, or both before backend integration.
- Defer Firebase deploy actions for Hosting, Functions, and Firestore rules until explicitly approved.
- Decide debug log policy before broad production usage.
- Confirm Telegram secret and webhook setup if Telegram is included in V1.
- Keep V1 launch scope web-first unless native mobile validation is approved and completed.
- Run device/emulator validation before treating mobile as production-ready.

## Blockers
- Telegram cannot be considered live until `TELEGRAM_BOT_TOKEN` is configured and webhook setup is confirmed.
- Native mobile behavior cannot be fully validated without local native Firebase config files and device/emulator testing.
- Live chat behavior still depends on deployed function secrets, including `OPENROUTER_API_KEY`.
- FlutterFlow production integration is blocked until request schema, storage/auth model, and UI are approved.
- FlutterFlow implementation remains blocked until Sprint 007 first-screen handoff acceptance is complete.
