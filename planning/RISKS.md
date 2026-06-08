# Risks

## Sprint 066 Risks - Return-to-Use Release Gate

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Client access could be approved from local-only proof. | Medium | High | Require exact customer URL/path and deployed-version match before handoff. | Active |
| Feedback could be missing during UAT. | High | Medium | Require one owner-approved feedback/bug channel before client access. | Active |
| Customer auth/access posture could block the tester or create unsafe ambiguity. | Medium | High | Document UAT auth/access separately from unresolved production auth posture. | Active |
| Browser/native push could be assumed from in-app reminder proof. | Medium | Medium | Keep browser/native push unproven until tested or owner-approved as deferral/watch-only. | Active |
| First tester and owner approver could remain ambiguous while the app appears locally usable. | Medium | High | Require the first tester and owner/V1 Beta approver to be recorded before client handoff. | Active |
| Deploy/config need could be assumed away because the backend/model path passed locally. | Medium | High | Keep deploy/config need unknown until the customer URL/current deployed version is proven against current repo behavior. | Active |
| Release gate could drift into runtime, deploy, Firebase, FlutterFlow, native, credential, `docs/API.md`, or CEO Briefing work. | Low | High | Keep Sprint 066 docs/planning only and require a separate approved sprint for implementation/config work. | Active |
| Sprint 064 untracked files could be accidentally swept into this gate. | Low | Medium | Leave Sprint 064 untracked pack/folder untouched and report them separately in `git status`. | Active |

## Sprint 065 Risks - Current App Intent Routing and Return-to-Use UX

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Ordinary user input may still route to Task Tracker. | High | High | Separate ask/send flow from explicit task capture flow. Validate with normal question, reminder request, and task capture examples. | Active |
| Voice input may capture tasks instead of asking Barbie. | High | High | Route voice transcript through the same clear intent path as typed input, or clearly label voice as task capture only until fixed. | Active |
| Deployed customer URL may not match current repo behavior. | Medium | High | Identify current customer URL, compare deployed version behavior, and do not approve UAT based on local-only proof. | Active |
| Feedback path may be absent. | High | Medium | Add or document a simple customer feedback path suitable for UAT. | Active |
| Browser/native push notifications may not work on customer device. | Medium | Medium | Treat in-app due reminder as passed, but classify browser/native push as unproven unless explicitly tested. | Active |
| Sprint may expand into Flutter/FlutterFlow or native packaging. | Medium | High | Keep Sprint 065 focused on current app return-to-use UX and routing. Defer packaging to a later sprint. | Active |

## Sprint 064 Risks - Existing App Return-to-Use UAT

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| App is visible locally but not accessible to the customer. | Medium | High | Require an exact current app access path before customer handoff. | Open |
| Current app/current UI may not expose the proven model/backend path through the customer-facing surface. | Medium | High | Validate one normal question through the intended backend/model path before UAT approval. | Open |
| Talk/input may work only through typed fallback while voice remains browser/device dependent. | Medium | Medium | Validate speech input where available and explicitly accept typed fallback or record voice as a blocker/deferral. | Open |
| Reminder/event creation may not persist or schedule as expected. | Medium | High | Validate reminder/event creation and record whether the item is persisted, scheduled, or blocked. | Open |
| Notification delivery for due reminders/events may be untested, unreliable, or unavailable. | High | High | Validate notification behavior or classify notifications as blocker, owner-approved deferral, or watch-only before customer handoff. | Open |
| Auth/access may block the customer or leave the app exposed with an unsafe posture. | Medium | High | Document the UAT auth/access path and separate UAT approval from production auth approval. | Open |
| Feedback may not have a durable channel during UAT. | Medium | Medium | Define one owner-approved feedback channel before the customer starts testing. | Open |
| Flutter / FlutterFlow work could distract from the fastest safe return-to-use path. | Medium | Medium | Keep Flutter / FlutterFlow as later-track work unless validation proves the current app cannot support return-to-use. | Open |

## Sprint 063 Risks - Owner UAT Answers Intake

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Approving UAT without exact access surface | Medium | High | Require explicit owner answer and file evidence before approval. | Open |
| Starting UAT without first tester ownership | Medium | Medium | Require named first tester or role before approval. | Open |
| Missing feedback channel | Medium | Medium | Require owner-selected feedback channel before UAT. | Open |
| Unclassified notification behavior | Medium | High | Require notification status before client exposure. | Open |
| Unresolved auth posture | Medium | High | Require UAT-vs-production auth posture before approval. | Open |
| Unknown deploy/config action | Medium | High | Require evidence whether deploy/config action is needed to expose proven backend/model path. | Open |

## Sprint 062 Risks - Resolve Client UAT Access Inputs

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| UAT could be accidentally approved from chat-only context instead of project-file evidence. | Medium | High | Require all owner answers to be written into project files before any later gate can approve UAT. | Open |
| Client may receive the wrong surface/link/path if the exact UAT entry point is not documented. | Medium | High | Keep UAT surface/link/path marked `Missing` until a concrete owner-approved entry point is recorded. | Open |
| Feedback may be lost if the feedback channel is not chosen before testing begins. | Medium | Medium | Keep feedback channel marked `Missing` until one channel is recorded in project files. | Open |
| Notifications may create client confusion if enabled, broken, noisy, or unclassified. | Medium | Medium | Require notification status to be classified before a later UAT gate can approve testing. | Open |
| Anonymous-auth UAT evidence may be mistaken for production auth approval. | Medium | High | Separate UAT auth posture from production auth posture and keep production auth unresolved until explicitly approved. | Open |
| Backend/model path may be proven locally but not exposed through the client UAT surface. | Medium | High | Require an explicit deploy/config-needed answer before any client handoff. | Open |
| V1 Beta approval may remain owner-ambiguous. | Medium | High | Record the V1 Beta approver in project files before any later approval gate. | Open |

## Sprint 061 Risks - Client UAT Access Resolution Gate

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Client-facing access uncertainty | Medium | High | Sprint 061 must confirm the exact client-accessible UAT surface/link/path before any UAT approval. | Open |
| Release confusion between UAT and production | Medium | High | Document UAT as controlled test access only. Do not describe it as final production release. | Open |
| Feedback capture gap | Medium | Medium | Confirm the bug/feedback channel before allowing first tester access. | Open |
| Notification ambiguity | Medium | Medium | Classify notifications as blocker, deferral, or watch-only before UAT approval. | Open |
| Production auth posture unresolved | Medium | High | Separate anonymous-auth smoke/UAT evidence from production auth requirements. | Open |
| Unnamed V1 Beta approver | Medium | High | Identify who can approve V1 Beta before changing status from HOLD. | Open |
| Unknown deploy/config requirement for UAT access | Medium | High | Determine whether an existing stable UAT surface already exposes the proven backend/model path or whether a separately approved deploy/config sprint is required. | Open |

### Sprint 061 Risk Closeout

Sprint 061 closed as `HOLD`, keeping all release-control risks open. Client UAT / V1 Beta remains blocked until the UAT surface/link/path, first tester, feedback channel, notification status, V1 Beta approver, UAT-vs-production auth posture, and any needed deploy/config action are confirmed in project files.

## Sprint 060 Risks - Client UAT Readiness Gate

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Client UAT may be mistaken for final production release. | Medium | High | Label the sprint as controlled Client Test Version / V1 Beta readiness and keep production release blocked. | Active |
| Exact UAT surface/link/path may remain unresolved after backend smoke passes. | Medium | High | Require owner-approved UAT URL/path before client handoff. | Active |
| Notifications may be treated as a blocker without a clear V1 Beta decision. | Medium | Medium | Classify notifications as blocking, deferred, or watch-only with rationale before handoff. | Active |
| Feedback may be lost or scattered. | Medium | Medium | Require a bug/feedback capture channel before client handoff. | Active |
| Anonymous auth may support UAT smoke but still be unresolved for production auth posture. | Medium | High | Record auth posture as UAT-only, production-ready, or unresolved. | Active |

### Sprint 060 Risk Closeout

Sprint 060 closed as `HOLD`, keeping the following release-gate risks visible:

- Release confusion remains active because controlled UAT / V1 Beta is not final production release and is not approved yet.
- Client-facing access uncertainty remains active until the exact UAT surface/link/path and first tester are approved.
- Notification ambiguity remains active until notifications are classified as blocker, deferral, or watch-only.
- Feedback capture risk remains active until a single bug/feedback channel is approved.
- Production auth posture remains active because anonymous auth only proves smoke/UAT viability and does not settle final production auth.

## Sprint 059 Risks - Barbie Backend Smoke After Auth Unblock

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Firebase auth may now pass but backend/model configuration may still fail. | Medium | High | Sprint 059 must separately prove callable reach and real model response. Do not mark success at auth-only pass. | Mitigated in Sprint 059: callable returned and visible backend/model reply appeared. |
| Anonymous auth may be acceptable for smoke but not final client auth posture. | Medium | Medium | Treat anonymous auth as local/UAT smoke unblock only unless future sprint explicitly defines production auth behavior. | Open for UAT/auth posture decision. |

### Sprint 059 Risk Closeout

| Risk | Sprint 059 Outcome | Next Action |
|---|---|---|
| Firebase auth may pass but backend/model configuration may still fail. | Mitigated. Browser smoke proved `askBarbie()` execution, successful `chatWithBarbie` callable return, and a visible non-mocked Barbie response. | Use next sprint to decide controlled web UAT readiness and validate any required adjacent workflow gates. |
| Anonymous auth may be acceptable for smoke but not final client auth posture. | Still open beyond Sprint 059. Anonymous Auth unblocked local/UAT smoke, but production/client auth posture is not decided. | Define UAT/client auth posture before broad client rollout. |
| Gmail initialization noise may be confused with Barbie backend failure. | Observed as unrelated console noise: `Error: Google Identity Services not loaded`. Barbie Send path still passed. | Keep Gmail V2/disabled status separate from Barbie backend smoke evidence. |

## Sprint 058 Risks - Firebase Auth and Barbie Backend Smoke Unblock

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Firebase auth blocks real Barbie response path. | High | High | Sprint 058 must identify and validate intended local/UAT auth path before client UAT. | Active |
| UI render may be mistaken for a working AI app. | Medium | High | Require browser evidence of `askBarbie()` -> `chatWithBarbie` -> real model response. | Active |
| Local/UAT auth fix could accidentally touch production auth settings or expose credentials. | Medium | High | Keep secrets out of docs/logs and require explicit approval for Firebase Console or credential changes. | Active |
| Mobile packaging could hide unresolved web/backend failures. | Medium | High | No iOS wrapping, PWA, or FlutterFlow/native work until web backend smoke passes. | Active |

### Sprint 058 Risk Closeout

| Risk | Sprint 058 Outcome | Next Action |
|---|---|---|
| Firebase auth blocks real Barbie response path. | Observed. Typed submit is present and wired through `VoiceDashboard` -> `askBarbie()` -> `ensureBarbieAuth()` -> `chatWithBarbie`, but live smoke failed inside `ensureBarbieAuth()`. Anonymous Auth is disabled and Google popup fallback fails because the app domain is unauthorized. | Operator must enable Firebase Anonymous Auth for local/UAT smoke, authorize the local/UAT OAuth domain, or provide another approved tester/auth path. |
| UI render may be mistaken for a working AI app. | Confirmed risk. The app loads and typed submit can fire, but `chatWithBarbie` was not reached and no real backend/model response was proven. | Keep release at `HOLD` until browser evidence proves callable/model response. |
| Local/UAT auth fix could accidentally touch production auth settings or expose credentials. | Guarded. No runtime/source changes, Firebase setting edits, credential changes, deploys, or secret exposure occurred. Backend/model secrets remain unproven because callable execution never happened. | Resolve auth through explicit operator-approved settings or tester path only. |
| Mobile packaging could hide unresolved web/backend failures. | Guarded. No FlutterFlow, native, PWA/home-screen, deploy, or CEO Briefing work occurred. | Keep mobile/release path blocked until web auth/backend smoke passes. |

## Sprint 057 Risks - Manual Browser Smoke and Release Path Decision

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| The app may render visually while assistant/backend/model calls fail. | Medium | High | Manually send the required typed prompt and record UI, console, and backend/function evidence. | Open |
| The Barbie brain may not be connected, may be using missing credentials, or may fail silently. | Medium | High | Validate or document blockers for `askBarbie()` to `chatWithBarbie` and model response behavior. | Open |
| Auth/session may appear optional locally but block real client usage. | Medium | High | Record the exact auth/session behavior seen during manual smoke before client UAT. | Open |
| Voice/mic behavior may be browser/device dependent and should not be treated as native mobile readiness. | High | Medium | Test mic if available and document typed fallback; require separate mobile/native validation for packaging. | Open |
| Client expectations may drift if a local browser preview is mistaken for a packaged iPhone app. | Medium | High | Keep release-path recommendation explicit: web, PWA/home-screen, future wrapped iPhone, or future FlutterFlow/native. | Open |
| FlutterFlow/native packaging may become a distraction before the current working app path is proven. | Medium | Medium | Keep Sprint 057 validation-focused and forbid FlutterFlow rebuild or migration. | Open |
| Any iPhone packaging path will require separate validation for Apple Developer account, signing, TestFlight/App Store path, device permissions, and mobile UI behavior. | High | High | Treat wrapped/native iPhone delivery as a later sprint after browser workflows pass. | Open |

### Sprint 057 Risk Closeout

| Risk | Sprint 057 Outcome | Next Action |
|---|---|---|
| App renders while assistant/backend/model calls fail. | Observed. The app loaded in Chrome and returned `HTTP/1.1 200 OK`, but real Barbie backend/model response was not proven. | Keep release at `HOLD` and fix/validate Firebase auth before client UAT. |
| Barbie brain or `chatWithBarbie` may fail silently or be blocked. | Observed blocker. `chatWithBarbie` success was not proven because backend Send is blocked by Firebase auth configuration. | Prove `askBarbie()` -> `chatWithBarbie` -> model response in Sprint 058. |
| Auth/session blocks real client usage. | Observed blocker. Firebase Anonymous sign-in is disabled and `127.0.0.1` is not authorized for OAuth operations. | Decide and validate the intended local/UAT auth path without storing credentials. |
| Voice/mic behavior is browser/device dependent. | Partially observed. Mic starts, but no transcript was proven. | Treat typed fallback as required and validate voice transcript separately. |
| Local browser preview may be confused with packaged iPhone readiness. | Mitigated by decision. Web app is the recommended first path only after auth/backend smoke passes. | Keep PWA, wrapped iPhone, and FlutterFlow/native as future options. |
| FlutterFlow/native work distracts from proving the current app path. | Mitigated for Sprint 057. No FlutterFlow/native migration or packaging was performed. | Do not start FlutterFlow/native until the web workflow is proven. |

## Sprint 056 Risks - Backend Assistant Contract and Internal Integration Validation Plan

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Client access resumes before the existing app/backend path is internally smoke validated. | Medium | High | Keep release recommendation `HOLD` until launch, auth, assistant call, and core workflow validation pass. | Open |
| The team rebuilds or redesigns instead of validating the already-working app path. | Medium | High | Sprint 056 scope is validation/handoff readiness only; no UI redesign, feature expansion, FlutterFlow rebuild, or runtime implementation is authorized. | Open |
| Firebase Auth mode differs from the intended client tester path. | Medium | High | Validate existing session, anonymous sign-in, or Google popup fallback and record the exact tester-ready auth path. | Open |
| `chatWithBarbie` works by code inspection but fails against the target Firebase environment because secrets, Functions deploy state, or Auth settings differ. | Medium | High | Run an internal smoke against the chosen environment before client UAT and record exact blocking errors. | Open |
| Browser voice capture is mistaken for native/mobile voice readiness. | High | Medium | Validate current browser transcript behavior and typed fallback only; require separate approval for native voice validation. | Open |
| Validation docs accidentally expose credentials, tokens, or client passwords. | Low | High | Use placeholders only and keep all secrets outside tracked files. | Open |
| A production deploy or native build is run while trying to validate access. | Low | High | Keep deploy/native commands forbidden unless explicitly approved. | Open |
| Local launch passes but live UI assistant smoke remains unproven because browser automation cannot operate the app tab. | Medium | High | Keep recommendation `HOLD` and require manual or browser-capable internal smoke before client UAT candidate. | Open - observed in Sprint 056. |

## Sprint 055 Risks - Runtime Source Reconciliation and Backend Integration Plan

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Client UAT starts before backend/Hermes integration is implemented and validated. | High | High | Keep release recommendation at `HOLD` and run an internal integration sprint before client rollout. | Open |
| FlutterFlow history is mistaken for the active release source. | Medium | High | Separate repo-observed runtime source from unresolved operator-confirmed release source. | Open |
| Firebase config is mistaken for deployed or production-validated backend behavior. | Medium | High | Document Firebase as configured/partially connected but not deployed or live-validated in Sprint 055. | Open |
| Hermes integration is assumed from project intent but absent from runtime code. | High | High | Require a Sprint 056 contract and implementation plan before claiming Hermes-backed assistant behavior. | Open |
| Framework polish gives a false sense of client rollout readiness. | Medium | High | Require internal integration validation of typed and voice assistant flows before client UAT. | Open |
| Credential or environment setup could be pulled into docs while planning backend integration. | Medium | High | Keep secrets outside tracked files and document only placeholder variable names or non-secret config evidence. | Open |

## Active Release-Candidate Risks

| Risk | Classification | Impact | Mitigation | Status |
|---|---|---:|---|---|
| Client UAT can be blocked by missing release source of truth. | UAT gate risk | High | Sprint 054 must confirm the release source of truth or keep recommendation `HOLD`. | Active |
| FlutterFlow ambiguity can cause duplicate or conflicting release paths. | Release-path risk | High | Confirm whether FlutterFlow is active, historical, or unresolved before sharing client access. | Active |
| Native wrapper evidence does not equal native release readiness. | Platform risk | High | Treat Capacitor `webDir: "dist"` as repo evidence only until native target testing is explicitly approved and completed. | Active |
| Sharing client UAT before issue channel/workflows are defined can create noisy feedback. | UAT process risk | Medium | Confirm UAT workflows, blocker/minor definitions, issue channel, first tester, and go-live approver before client handoff. | Active |
| Credentials or demo data could be stored in repo during UAT setup. | Secret hygiene risk | High | Use placeholders only and keep passwords, tokens, signing keys, and demo credentials outside tracked files. | Active |
| `services/authService.ts` is both statically imported by `App.tsx` and dynamically imported by `services/firestoreService.ts`. | Watch-only / accepted for release | Low | Do not refactor auth solely for chunk placement. Revisit only if measured runtime defect or auth behavior issue appears. | Accepted in Sprint 051 |
| Main JS chunk is larger than Vite's default 500 kB warning threshold after minification. | Watch-only / accepted for release | Medium | Treat as post-release performance cleanup candidate unless a measured release-blocking performance defect appears. | Accepted in Sprint 051 |
| Final release candidate may pass build but still have unverified user-path regressions. | Release gate risk | High | Sprint 052 ran final validation and recorded a ship-or-hold recommendation. | Mitigated in Sprint 052 |
| Protected CEO Briefing artifact could accidentally reappear in repo. | Release hygiene risk | High | Sprint 052 ran `test ! -f references/flutterflow/sprint-009/ceo-briefing.png` before and after validation. | Mitigated in Sprint 052 |
| Sprint 052 could drift into broad optimization or cleanup work. | Scope risk | Medium | Sprint 052 stayed docs-only and did not modify runtime/source files. | Mitigated in Sprint 052 |

## Sprint 053 Risks - FlutterFlow Release Rollout and Client UAT Prep

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| FlutterFlow project source is out of sync with GitHub repo. | Medium | High | Confirm whether GitHub or FlutterFlow is the deployment source before testing or rollout. | Open - Sprint 053 could not confirm source alignment from repo docs/config only. |
| FlutterFlow export/build path is unknown or undocumented. | Medium | High | Record the actual export/deploy path, commands, required tokens, and target environment in docs before rollout. | Open - no confirmed FlutterFlow project ID/name or export path was available. |
| App passes web build but fails on target mobile/runtime environment. | Medium | High | Run target-platform smoke tests before client UAT. Do not rely on repo build alone. | Open - repo build passed, but the client UAT target is still unconfirmed. |
| Known Vite warnings are accepted for repo release but may still affect production performance. | Medium | Medium | Keep current warnings as watch-only unless they change or create runtime symptoms during UAT. | Watch |
| Client receives app before issue-reporting process is clear. | Medium | Medium | Prepare a client UAT checklist with blocker/minor definitions and reporting instructions. | Open - blocker/minor definitions are drafted, but tester, access method, issue channel, and approver remain placeholders. |
| CEO Briefing file accidentally reappears during export, asset sync, or release prep. | Low | High | Run absence guard before and after Sprint 053 validation. | Guarded - Sprint 053 absence guard passed. |
| Secrets, FlutterFlow tokens, or deployment credentials are exposed in docs or command output. | Low | High | Do not paste secrets into tracked files. Use placeholders and environment variable names only. | Guarded |

## Sprint 052 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Lint or build could fail during final release-candidate verification. | Medium | High | Sprint 052 ran `npm run lint` and `npm run build`; both passed. | Mitigated |
| Sprint 051 accepted watch-only warnings could change or become fix-required. | Medium | High | Sprint 052 captured build output and confirmed the warning categories and bundle sizes remained materially unchanged. | Mitigated |
| Final verification could accidentally mutate runtime/source files. | Low | High | Sprint 052 changed only planning/docs closeout files after validation passed. | Mitigated |
| CEO Briefing artifact could reappear during final verification. | Low | High | Sprint 052 confirmed `references/flutterflow/sprint-009/ceo-briefing.png` remained absent before and after validation. | Mitigated |

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
| FlutterFlow visual prototype may drift from the current screenshot identity. | Medium | Medium | Require explicit screenshot-derived visual signals: pale pink background, hot pink CTA, rounded cards, central mic, assistant mode labels, and finance quick action. | Open |
| Builder may accidentally wire live Firebase, Gmail, auth, backend APIs, or model calls during the prototype. | Medium | High | Sprint 008 acceptance requires mock data and API stubs only. | Open |
| Left-side navigation from the web screenshot may not translate cleanly to mobile. | Medium | Medium | Adapt it as a mobile quick-action rail, top segmented row, horizontal action strip, or bottom nav while preserving the concept. | Open |
| Prototype may become too broad for a first visual pass. | Medium | Medium | Limit full screen work to six screens and keep all other areas as placeholders. | Open |

## Sprint 051 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Existing Vite build warnings could be treated as release blockers without source triage. | Medium | Medium | Sprint 051 captured warning text, inspected owners, and classified both warning categories. | Mitigated |
| Existing Vite build warnings could be ignored without release rationale. | Medium | Medium | Sprint 051 documented mixed import and bundle-size warning classifications in validation and acceptance notes. | Mitigated |
| Bundle-size cleanup could expand into a broad refactor before release. | Medium | Medium | Sprint 051 deferred broad code-splitting/manual chunking because no measured release-blocking performance defect was confirmed. | Watch |
| Auth import cleanup could accidentally change auth initialization or fallback behavior. | Medium | High | Sprint 051 avoided auth source edits; the mixed import warning is watch-only unless a concrete auth/chunking runtime issue appears. | Watch |
| Build-warning triage could drift into runtime redesign, backend, Firebase, dependency, deploy, or native work. | Low | High | Sprint 051 stayed docs-only and did not modify runtime/source, backend, Firebase, dependency, deployment, or native files. | Mitigated |
| CEO Briefing could re-enter scope through old evidence references. | Low | High | Sprint 051 kept CEO Briefing out of scope and confirmed `ceo-briefing.png` remains absent. | Mitigated |

## Sprint 009 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| FlutterFlow builder may start building screens before the handoff is reviewed. | Medium | Medium | Require a read-and-summarize checkpoint before implementation. | Open |
| Visual prototype may drift from the Trina screenshot direction. | Medium | High | Document color, layout, and component rules screen-by-screen. | Open |
| Mock behavior may be confused with real backend behavior. | Medium | High | Label all mock actions and stub contracts clearly. | Open |
| Screenshot/export files may be scattered outside the project handoff. | Medium | Medium | Use `references/flutterflow/sprint-009/` or explicitly document external storage. | Open |
| Mobile navigation may not translate cleanly from the existing browser layout. | Medium | Medium | Define bottom tabs, quick actions, and screen entry points before build. | Open |

## Sprint 010 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| FlutterFlow Designer import can create broken or duplicate theme/page artifacts. | Medium | Medium | Build the CEO Briefing page manually inside the clean FlutterFlow project unless Designer import is clearly safe. | Open |
| Hidden or stale FlutterFlow initial route may point to `HomePage`. | Medium | Medium | Keep the initial page set to `Dashboard` before testing. | Mitigated from Sprint 009, monitor |
| Imported visual buttons may not fire actions in Preview/Test. | Medium | Medium | Use real FlutterFlow Button/IconButton widgets for the CEO Briefing CTA and back/home navigation. | Open |
| CEO Briefing may be overbuilt. | Medium | Medium | Use mock/static content only and keep screen focused on prototype evidence. | Open |
| Missing CEO Briefing screenshot evidence could be mistaken for completed work. | Medium | Medium | Mark CEO Briefing as deferred, not complete, and preserve the no-placeholder evidence rule. | Mitigated |

## Sprint 011 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Deferred CEO Briefing evidence may be mistaken for completed evidence. | Medium | Medium | Keep click-path notes and validation docs explicit: deferred, not complete. | Open |
| Future page renaming may create duplicate FlutterFlow screens if handled carelessly. | Medium | Medium | Decide final screen names before rebuilding briefing workflows. | Open |
| Prototype scope may expand into backend/auth/release work too early. | Medium | High | Keep current prototype track FlutterFlow/static-only until a later Architect Pack approves implementation scope. | Open |

## Sprint 012 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| CEO Briefing may be accidentally marked complete while Sprint 012 works around it. | Medium | Medium | Keep CEO Briefing outside the accepted demo path and require real screenshot evidence before completion. | Open |
| Manual FlutterFlow polish may diverge from repo docs if evidence is not captured after changes. | Medium | Medium | Refresh only real accepted-screen screenshots after manual changes and update click-path notes. | Open |
| Page labels may change later and create source-level rename churn. | Medium | Low | Use human-facing display labels for Sprint 012 and avoid renaming repo files or generated artifacts. | Open |

## Sprint 013 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| CEO Briefing evidence may be marked complete before the real screenshot exists. | Medium | High | Require `references/flutterflow/sprint-009/ceo-briefing.png` to exist before updating evidence notes to present. | Open |
| Manual FlutterFlow validation may find the CEO Briefing screen missing or renamed. | Medium | Medium | Document the actual visible screen title and any missing paths instead of inventing evidence. | Open |
| Evidence capture may drift into generated export, backend, Firebase, package, native, or release work. | Low | High | Keep Sprint 013 limited to manual FlutterFlow validation, screenshot evidence, and planning/docs/evidence notes. | Open |
| Deferred CEO Briefing evidence may be treated as a blocker for app-build progress. | Medium | Medium | Treat Sprint 013 as a documented deferred-evidence checkpoint and create the next Architect Pack for app build progress. | Mitigated |

## Sprint 015 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Sprint work gets blocked by the non-existent CEO Briefing screen. | High | Medium | Defer CEO Briefing and focus Sprint 015 on functional app stabilization. | Open |
| App remains visually prototyped but not functionally complete. | Medium | High | Audit navigation, broken actions, missing screens, and core user paths before adding new feature screens. | Open |

## Sprint 016 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| CEO Briefing evidence could be accidentally marked complete without a real screenshot. | Medium | High | Keep evidence deferred unless the real screenshot exists and is reviewed. | Open |
| Codex could drift into runtime or generated FlutterFlow code changes. | Medium | High | Limit Sprint 016 to allowlisted planning/docs/evidence-note files only. | Open |
| Prototype flow documentation could become stale against the actual FlutterFlow project. | Medium | Medium | Treat Sprint 016 as a documentation and verification checkpoint. | Open |
| Placeholder evidence could reduce trust in validation records. | Medium | High | Do not create placeholder screenshots or fake `ceo-briefing.png`. | Open |

## Sprint 017 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Placeholder screenshot is accidentally created and treated as evidence. | Medium | High | Sprint 017 explicitly forbids placeholder screenshots and keeps CEO Briefing deferred unless real evidence exists. | Open |
| Final prototype is marked complete without all screen evidence. | Medium | High | `docs/VALIDATION.md` must list required screens, required screenshots, and click-path confirmation steps. | Open |
| Evidence files are stored in inconsistent locations. | Medium | Medium | Sprint 017 must define evidence storage rules and document unresolved folder decisions before future capture work. | Open |
| FlutterFlow UI state differs from documented planning state. | Medium | Medium | Validation must separate confirmed FlutterFlow state from planned or deferred work. | Open |
| Codex modifies runtime/exported files during a docs-only readiness sprint. | Low | High | Sprint 017 handoff must include a strict allowlist and protected-file list. | Open |

## Sprint 018 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Sprint 018 Architect Pack labels could drift from the requested final prototype evidence-capture scope. | Low | Medium | Keep the pack title, sprint slug, file paths, and planning docs aligned to Sprint 018. | Mitigated |
| Final prototype evidence is marked complete without real screenshots. | Medium | High | Require actual files before evidence is marked present and keep CEO Briefing deferred if the PNG is missing. | Open |
| Evidence capture drifts into runtime, generated export, Firebase, Hermes/backend, package/native, build, or release work. | Low | High | Keep Sprint 018 changes limited to planning/docs/evidence notes and run changed-file checks. | Open |

## Sprint 019 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| CEO Briefing evidence remains unresolved because the real FlutterFlow project is not available in the local repo context. | High | Medium | Formally defer with owner, next action, exact screenshot path, and required click paths. | Mitigated |
| A future Builder could accidentally create a placeholder `ceo-briefing.png`. | Medium | High | Keep the no-placeholder rule in Sprint 019 planning, validation, handoff, and evidence notes. | Open |
| Formal deferral could be mistaken for completed evidence. | Medium | High | Label the screenshot absent and click paths deferred / unverified until real FlutterFlow validation exists. | Open |

## Sprint 020 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| CEO Briefing click paths may be marked passing without real FlutterFlow Designer / Preview validation. | Medium | High | Sprint 020 requires operator-led validation before any path can be marked `Pass`. | Open |
| Screenshot evidence could be fabricated or renamed from another screen. | Medium | High | Only `references/flutterflow/sprint-009/ceo-briefing.png` captured from the real FlutterFlow screen is accepted. | Open |
| The real FlutterFlow screen may be missing, renamed, or inaccessible. | Medium | Medium | Sprint 020 confirmed the real project is accessible, but CEO Briefing is missing and no renamed equivalent was found. Leave the screenshot absent unless real evidence is captured later. | Confirmed |
| Evidence capture could drift into generated export, runtime, Firebase, Hermes/backend, package/native, build, or release work. | Low | High | Keep Sprint 020 limited to FlutterFlow Designer / Preview verification and planning/docs/evidence notes. | Open |
| Dashboard may expose or imply a CEO Briefing path that has no working destination. | Medium | Medium | A later approved sprint should decide whether to rebuild CEO Briefing, rename it, remove the entry point, or keep it deferred. | Open |

## Sprint 023 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| CEO Briefing FlutterFlow AI Designer failure | High | Low for current app completion, high only if CEO Briefing is reopened | Defer CEO Briefing. Do not treat it as blocking the rest of the app. Capture real evidence only if the feature is explicitly reopened later. | Deferred |

## Sprint 024 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Builder drifts back into CEO Briefing work. | Medium | High | Keep CEO Briefing explicitly out of scope in requirements, blueprint, and acceptance. | Open |
| Visible routes may reference missing components or stale names. | Medium | Medium | Audit Dashboard, Navigation, and App routing before editing. | Open |
| Reminder notification behavior may depend on browser permission state. | Medium | Medium | Validate both granted/available and blocked/unavailable cases where feasible. | Open |
| Runtime stabilization may tempt broad redesign. | Medium | Medium | Limit edits to wiring, defensive rendering, placeholders, and small fixes. | Open |
| Tests may not exist or may be weak. | Medium | Medium | Run available lint/build commands and document any missing test coverage. | Open |
| Package changes could destabilize the project. | Low | Medium | Do not change dependencies unless explicitly approved. | Open |

## Sprint 025 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Dirty planning artifacts could re-open obsolete CEO Briefing work. | Medium | Medium | Sprint 025 classifies or removes stale Sprint 021/022/023 artifacts and preserves only durable forward-state decisions. | Mitigating |

## Sprint 028 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Mislabeled Architect Pack content could be applied because the filename looks correct. | Medium | High | Inspect pack contents before application and keep only the corrected single-extension Sprint 028 pack. | Mitigated |
| Duplicate Sprint 028 pack names could confuse future Builder handoffs. | Medium | Medium | Remove the bad `.md.md` duplicate and keep the corrected `.md` pack as the source of truth. | Mitigated |
| Cleanup work could drift back into CEO Briefing instead of app completion. | Medium | High | Keep CEO Briefing deferred, untouched, and non-blocking in Sprint 028 planning and validation. | Mitigated |

## Sprint 030 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Speech capture remains browser-permission dependent and may not be testable in every local environment. | Medium | Medium | Add a documented verification path and preserve typed capture as the reliable fallback. | Open |
| Adding UI smoke coverage could expand into toolchain churn. | Medium | Medium | Use existing tooling first. Avoid new heavy dependencies unless absolutely necessary and explicitly justified. | Open |
| Feature labels may drift between `Knowledge Base`, `Knowledge`, and `Context`. | Medium | Low | Standardize copy in Sprint 030 and document the label rule in decisions/validation. | Open |
| CEO Briefing could re-enter scope through old evidence references. | Low | High | Keep absence guard and protected scope language in validation and handoff. | Open |

## Sprint 031 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Runtime polish could expand into redesign or new feature work. | Medium | Medium | Require confirmed small issues only and keep the Builder summary/approval gate before implementation. | Open |
| Task-flow hardening could weaken typed Assistant capture to Tasks. | Low | High | Treat typed Assistant capture as protected behavior and validate capture-to-Tasks visibility after any implementation. | Open |
| Speech capture may remain blocked by local browser microphone permission. | Medium | Medium | Preserve the transcript-to-task path by code inspection when live microphone validation is unavailable. | Open |
| Builder could drift into backend, Firebase, Hermes, package, native, release, auth, database, live AI, or FlutterFlow export work. | Low | High | Keep Sprint 031 acceptance and handoff limited to existing frontend polish and existing validation commands. | Open |
| CEO Briefing could be reopened through stale evidence or navigation assumptions. | Low | High | Keep CEO Briefing explicitly out of scope and verify `references/flutterflow/sprint-009/ceo-briefing.png` remains absent. | Open |

## Sprint 032 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Browser smoke testing may reveal small UI/touch issues that tempt broader redesign. | Medium | Medium | Record confirmed issues for follow-up unless the Sprint 032 acceptance criteria explicitly approve a tiny fix. | Open |
| Microphone validation may be blocked by browser permission, device limitations, or unavailable speech APIs. | Medium | Medium | Document the blocker and preserve speech behavior by code inspection instead. | Open |
| Hover-only controls may be harder to use on touch devices. | Medium | Medium | Validate in touch-capable browser or responsive emulation and record confirmed issues for Sprint 033 if needed. | Open |
| Accessibility labels may exist in code but still be awkward in real browser use. | Medium | Medium | Perform practical inspection of buttons, names, labels, and focus flow where possible. | Open |
| CEO Briefing could re-enter scope by accident due to old planning history. | Low | High | Keep CEO Briefing explicitly protected and absent. | Open |
| Task edit/delete controls are missing from the Tasks UI. | High | Medium | Carry forward to Sprint 033 candidate work: add explicit accessible edit/delete controls, confirm delete plumbing from parent state, and preserve capture/toggle behavior. | Confirmed |

## Sprint 033 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Delete plumbing may require parent state changes. | Medium | Medium | Keep delete as a simple state update by task ID and validate visible task removal. | Mitigated |
| Edit UI may expand beyond MVP. | Medium | Medium | Edit title only unless existing task model and UI patterns safely support more fields. | Mitigated |
| Hover-only controls may fail mobile/touch validation. | High | Medium | Make edit/delete visible or touch-accessible without hover-only interaction. | Mitigated |
| Task capture could regress if parent state is changed incorrectly. | Medium | High | Validate typed Assistant capture, task visibility, and task toggle after implementation. | Mitigated |
| CEO Briefing could be accidentally touched by broad commands. | Low | High | Keep CEO Briefing out of scope and run the `ceo-briefing.png` absence guard. | Mitigated |

## Sprint 034 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Task flow regressions may be introduced while polishing existing behavior. | Medium | High | Limit runtime edits to narrow task-flow fixes and validate add, toggle, edit, delete, filter, and navigation paths. | Mitigated - no runtime changes were needed. |
| Fixed bottom navigation may overlap lower task controls on mobile or smaller screens. | Medium | Medium | Revalidate responsive/mobile behavior after Sprint 033 padding fix and avoid layout changes that reduce usable tap area. | Mitigated by browser validation. |
| Edit/delete behavior may affect existing Assistant capture or task persistence. | Medium | High | Preserve existing task state ownership and storage patterns. Validate Assistant typed capture creates visible tasks after edits. | Mitigated - existing state/storage behavior preserved. |
| Browser validation may miss microphone-specific behavior. | Low | Medium | Treat microphone/live speech as out of scope unless broken by task flow changes. Validate typed Assistant capture as the required path. | Accepted - typed capture validated; microphone-specific behavior remained out of scope. |
| CEO Briefing work may accidentally re-enter scope. | Low | High | Keep CEO Briefing explicitly protected. Run absence guard before closeout. | Mitigated. |

## Sprint 047 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Home typed row becomes cramped after Sprint 046 button-height increase. | Medium | Medium | Inspect row at mobile widths and apply the smallest local layout fix only if needed. | Mitigated - browser validation found no horizontal overflow and confirmed input usability at `390x844` and `360x740`. |
| A shared style change affects unrelated buttons or views. | Medium | Medium | Prefer local classes in `components/VoiceDashboard.tsx`; document any shared change before applying. | Mitigated - runtime change was limited to local Home classes in `components/VoiceDashboard.tsx`; no shared styles were modified. |
| Fixing narrow layout causes wrapping that blocks bottom nav or makes the input harder to use. | Medium | Medium | Validate at `390x844`, check bottom nav, and smoke core views. | Mitigated - `390x844` cleared nav by `62px`; `360x740` cleared nav by `138px`; core view smoke passed. |
| CEO Briefing asset is accidentally restored or touched. | Low | High | Run the absence guard before and after changes; do not work in CEO Briefing paths. | Guarded - absence guard passed and CEO Briefing stayed untouched. |

## Sprint 048 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Core non-Home views may have short-height issues hidden at taller mobile sizes. | Medium | Medium | Smoke Tasks, Calendar, Finance, Knowledge Base, and reachable Notifications/reminders at `390x844` and `360x740`. | Mitigated - browser smoke found no blocking short-height issue. |
| Small local fixes could regress previously validated taller mobile behavior. | Medium | Medium | Validate both target viewports and keep fixes local to confirmed issues. | Mitigated - no runtime fixes were needed. |
| Shared style changes could create broad UI fallout. | Medium | Medium | Prefer view-level padding, scroll, spacing, or compact behavior; document any shared change before applying. | Mitigated - no shared style changes were made. |
| CEO Briefing work could accidentally re-enter scope. | Low | High | Keep CEO Briefing protected and run the screenshot absence guard. | Guarded - absence guard passed and CEO Briefing stayed untouched. |

## Sprint 049 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Compact touch-target changes could increase vertical density and affect short-height scrolling. | Medium | Medium | Keep changes scoped to interactive controls, validate at `390x844` and `360x740`, and avoid broad layout redesign. | Mitigated - browser validation passed at both target viewports with no horizontal overflow. |
| Calendar day-cell sizing could disturb calendar grid alignment. | Medium | Medium | Prefer minimum dimensions and padding changes that preserve grid structure; validate month layout visually. | Mitigated - day cells measured at least `44px` and preserved the 7-column grid at `360x740`. |
| Filter chip hardening could cause wrapping or horizontal overflow. | Medium | Medium | Use wrapping/flex behavior where appropriate and verify no horizontal overflow at mobile widths. | Mitigated - Calendar and Tasks chip rows measured at least `44px` tall and did not create document-level horizontal overflow. |

## Sprint 050 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Mobile polish changes may introduce small spacing regressions on short-height viewports. | Medium | Medium | Validate Home / Dashboard, Calendar, Tasks, Finance, Knowledge Base, Notifications/reminders, and bottom navigation at `390x844` and `360x740`; keep any fix small. | Active |
| Calendar grid alignment may regress if touch-target classes are adjusted again. | Low | Medium | Inspect Calendar after Sprint 049 and avoid changing it unless a confirmed Sprint 050 issue exists. | Active |
| Wrapping filter chips may alter vertical density or bottom-nav clearance. | Medium | Low | Confirm scroll behavior, no horizontal overflow, and bottom-nav clearance before any further adjustment. | Active |
| Release-readiness sweep may tempt broader cleanup. | Medium | Medium | Keep Sprint 050 limited to regression validation and small confirmed fixes; keep backend, Firebase, auth, packages, routing, native config, release, deployment, and data model out of scope. | Active |
| Existing Vite warnings may distract from Sprint 050 scope. | High | Low | Document existing warnings and do not address them unless they become a direct Sprint 050 blocker. | Active |
| CEO Briefing could re-enter scope through old planning history or evidence paths. | Low | High | Keep CEO Briefing protected and verify `references/flutterflow/sprint-009/ceo-briefing.png` remains absent. | Active |
| Finance add-entry form may overlap the fixed bottom navigation on short mobile viewports. | Medium | Medium | Keep the fix local to `components/FinanceView.tsx`, add bottom scroll clearance, and validate the open form at `390x844` and `360x740`. | Mitigated - final mobile smoke found no Finance add-entry overlap at either viewport. |

## Sprint 046 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Raising the Home typed `Capture` and `Send` button height could crowd the input row or create horizontal overflow at `390x844`. | Medium | Medium | Use the smallest scoped touch-target change, preserve width behavior where possible, and validate Home for overflow and bottom-nav clearance. | Mitigated - browser validation at `390x844` found both controls `44px` tall, no typed-row horizontal overflow, and bottom nav visible/usable/unblocked. |
| A shared button/style change could affect unrelated controls. | Medium | Medium | Prefer the local owner or a tightly scoped class after inspecting the actual Home typed action component. | Mitigated - runtime change was limited to the local Home typed `Capture` and `Send` button class strings in `components/VoiceDashboard.tsx`. |

## Sprint 043 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Calendar selected-day edit/delete controls may remain unproven on a populated row at the mobile target viewport. | Medium | Medium | Sprint 043 reproduced a populated selected-day row and live-clicked edit/delete controls at measured viewport `351x729`, the nearest available in-app browser viewport. | Mitigated |
| Adding fixture logic can increase production-code footprint. | Low | Low | Existing local state reproduced the selected-day row, so no runtime fixture was added. | Mitigated |
| Delete control validation may be destructive if handled casually. | Medium | Medium | Sprint 043 created a temporary local event through the normal UI, deleted only that event, and confirmed the original `Parent Meeting` row remained visible. | Mitigated |
| CEO Briefing work could re-enter scope through old planning history. | Low | High | CEO Briefing stayed untouched and `references/flutterflow/sprint-009/ceo-briefing.png` remained absent. | Mitigated |

## Sprint 035 Risks

| Risk | Impact | Mitigation | Status |
|---|---|---|---|
| Notification and reminder state may drift from task state after recent task-flow hardening. | Users may see stale counts, missing fallback copy, or unclear reminders. | Validate Dashboard badge/count behavior, Notifications copy, and task-related reminder visibility before changing runtime code. | Active for Sprint 035 |
| Browser validation may not cover every native confirmation or timing behavior. | Some interaction paths may require code inspection instead of full automation. | Pair browser validation with targeted code inspection and document any uncertainty in `docs/VALIDATION.md`. | Accepted - browser covered empty/mobile/navigation; live Firestore reminder item behavior remained inspection-based. |
| CEO Briefing deferral could be accidentally disturbed by broad navigation or page cleanup. | Reopens a known deferred workstream and wastes app-completion effort. | Keep CEO Briefing and its screenshot evidence path protected in every Sprint 035 prompt and validation step. | Mitigated - protected scope was untouched and absence guard passed. |
| Vite build warnings may distract from Sprint 035 scope. | Builder may chase non-blocking warnings and expand scope. | Treat existing warnings as non-blocking unless Sprint 035 acceptance fails because of them. | Mitigated - build warnings remained non-blocking and no runtime change was made. |

## Sprint 036 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Reminder-backed notification validation may depend on live/local browser data that is not always present. | Medium | Medium | Sprint 036 adds a dev-only `?trinaReminderFixture=1` browser fixture that proves populated reminder rendering through the existing notification item mapping without backend or production data changes. | Mitigated |

## Sprint 042 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Builder may overbuild validation infrastructure instead of adding a small local check. | Medium | Medium | Require a Builder summary before implementation and prefer simple fixtures, documented steps, or no runtime changes when sufficient. | Mitigated - Sprint 042 added only narrow query-param fixtures inside allowed components. |
| Dev-only validation helpers could accidentally affect normal user behavior. | Medium | High | Keep any helper narrow, local, and isolated from production-facing behavior; avoid production feature flags. | Mitigated - fixtures are gated by `process.env.NODE_ENV !== 'production'` and `?trinaStateFixture=`. |
| Seeded local data may continue to block true empty-state reproduction. | High | Medium | Use controlled fixtures, documented local reset steps, or clearly labeled code-inspection caveats. | Mitigated - `trinaStateFixture=empty` live-reproduces target empty states without mutating storage. |
| AI failure states may remain difficult to reproduce live without unsafe service manipulation. | Medium | Medium | Prefer safe local simulation where possible and document any remaining code-inspection-only coverage honestly. | Mitigated - `trinaStateFixture=ai-failure` safely triggers the UI error branches. |
| CEO Briefing could re-enter scope through old validation history. | Low | High | Keep CEO Briefing explicitly protected and verify `references/flutterflow/sprint-009/ceo-briefing.png` remains absent. | Mitigated - protected scope was untouched and absence guard passed. |
