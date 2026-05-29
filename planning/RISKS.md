# Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Telegram webhook is present in code but not live without `TELEGRAM_BOT_TOKEN` and webhook setup. | High | Medium | Validate secret requirement and document exact setup steps without exposing token. | Open |
| Gmail send could accidentally be treated as V1-ready. | Medium | High | Confirm Gmail send remains disabled and document it as V2 only. | Open |
| Native mobile Firebase config files are not committed. | High | Medium | Document required local setup files and keep them out of git. | Open |
| Browser speech recognition may not behave reliably as native mobile voice. | High | Medium | Treat native voice as future improvement unless validated on target device. | Open |
| App uses a mix of localStorage-backed and Firestore-backed data. | Medium | Medium | Document source-of-truth rules for V1 and test expected user flows. | Open |
| Debug logs may contain user message text. | Medium | High | Review debug logging and document privacy cleanup needs before long-term production usage. | Open |
| Firebase Functions runtime or dependencies may fail deploy validation. | Medium | High | Syntax check passed in Sprint 002; deploy validation still requires an approved Firebase deploy or emulator pass. | Open |
| Frontend production bundle is larger than Vite's default warning threshold. | Medium | Low | Consider code splitting after V1 launch unless load performance becomes a launch blocker. | Watch |
| `services/authService.ts` is both statically and dynamically imported. | Medium | Low | Treat as cleanup unless chunking or auth initialization behavior causes runtime issues. | Watch |
| Gmail send callable still exists even though chat intent routing disables Gmail send for V1. | Low | Medium | Keep it out of UI/intent flow for V1; decide in a future sprint whether to remove, lock down further, or leave for V2. | Open |
| Telegram token or webhook may not be configured. | High | Medium | Verify secret and webhook setup before marking Telegram ready. | Open |
| Mobile Firebase config files are not committed. | High | Medium | Treat mobile as blocked until local config and device/emulator test are confirmed. | Open |
| Production deploy has not been run during Sprint 003. | Medium | High | Require explicit owner approval before deploying Hosting, Functions, or Firestore rules. | Open |
| Web V1 depends on a debug log policy decision before broad production usage. | Medium | Medium | Decide whether to retain temporarily, redact, reduce, or disable raw message logging before go-live. | Open |
| Deploy may expose debug logging that contains raw user message text. | Medium | High | Decide debug policy before broad production use. | Open |
| Firebase deploy could update live Hosting, Functions, or Firestore rules. | Medium | High | Require explicit approval before deploy commands and document deploy scope. | Open |
| Telegram may not work after web V1 launch. | High | Medium | Keep Telegram out of V1 launch messaging unless setup is confirmed. | Open |
| Native mobile may not work despite web success. | High | Medium | Mark Android/iOS blocked until device/emulator validation. | Open |
| Local repo and GitHub are not aligned. | High | High | Audit before commit/push. Do not overwrite or delete. | Open |
| Existing React/Vite app may be confused with planned FlutterFlow app. | High | Medium | Document that FlutterFlow is the client-facing mobile frontend and React app is current/reference/local implementation. | Open |
| FlutterFlow may limit complex backend AI workflows. | Medium | Medium | Keep FlutterFlow frontend simple and send structured requests to Hermes/API. | Open |
| Client theme variations may create duplicate app logic. | Medium | Medium | Use one reusable template with theme variables. | Open |
| Internal AI tools could leak into client-facing UX. | Medium | High | Keep internal tool names out of screens, labels, and client docs. | Open |
| File upload, voice note, and deliverable links may need secure storage rules. | Medium | High | Define storage/auth model before production use. | Open |
| FlutterFlow V1 could grow too large. | High | Medium | Keep V1 frontend-first with mock data and backend placeholders. | Open |
| FlutterFlow screens may be built before API/data boundaries are clear. | Medium | High | Sprint 006 defines screens, flows, data ownership, and API expectations before UI implementation. | Open |
| Direct Firebase use from FlutterFlow could bypass Hermes or assistant rules. | Medium | High | Limit direct Firebase use to auth/profile/app state/storage references where approved. Route AI behavior through Hermes/API. | Open |
| Barbie/client-specific styling could become hard-coded into the product foundation. | Medium | Medium | Treat theme as configurable. Document first theme as one client theme, not the whole system identity. | Open |
| Building UI before acceptance criteria are defined could create rework. | Medium | Medium | Do not start FlutterFlow implementation until Sprint 006 acceptance is complete. | Open |
| FlutterFlow Builder may overbuild beyond the first screen scope. | Medium | Medium | Sprint 007 limits first build to six screens and marks other screens as placeholders/future. | Open |
| Visual styling may become inconsistent if theme tokens are not documented. | Medium | Medium | Define color, typography, spacing, border radius, shadows, and component rules in the handoff. | Open |
| Mock data may be mistaken for live backend behavior. | Medium | High | Label all demo data as mock/stubbed and keep API wiring placeholders. | Open |
| FlutterFlow implementation may drift from local planning docs. | Medium | Medium | Require FlutterFlow Builder to report screen list, components, mock data, and validation results back into project docs. | Open |
