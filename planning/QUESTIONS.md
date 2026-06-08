# Questions

## Sprint 065 Open Questions

| Question | Why it matters | Status |
|---|---|---|
| What exact URL/path should the customer use for UAT? | Client cannot resume use without a confirmed access path. | Open |
| Does `https://barbie-92edc.web.app/` match the current repo UI and backend/model path? | Local `127.0.0.1` proof is not enough for customer UAT. | Open |
| Should voice input ask Barbie by default, or should it only capture tasks? | Current behavior appears confusing for customer use. | Open |
| What is the minimum acceptable feedback path for UAT? | Sprint 064 found no clear in-app feedback path. | Open |
| Is in-app reminder delivery sufficient for return-to-use, or does owner require browser/native push before UAT? | Notification requirement must be clear before returning app to client. | Open |
| What auth/access posture should the customer use for UAT? | Anonymous auth worked locally, but customer access is not approved. | Open |
| Should manual calendar event creation be included in Sprint 065 validation or deferred? | Reminder creation passed. Calendar event live creation was not tested in Sprint 064. | Open |

## Sprint 064 - Existing App Return-to-Use UAT

Sprint 064 active status: `HOLD - Client UAT / V1 Beta not approved`.

Owner clarification now recorded:

- Use the current app/current UI first if that is the fastest safe path.
- The app was already working before structure/framework cleanup.
- The customer needs talk/input, answers, reminders/events, due notifications, and feedback.
- Flutter / FlutterFlow can come later and should not block immediate return-to-use.

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| What exact URL/path should the customer open? | Owner / Builder | Before customer handoff | Open | Not confirmed in project files. Local proof alone is not a customer-accessible UAT path. |
| Is the app currently deployed somewhere, or only visible locally? | Owner / Builder | Before customer handoff | Open | Must be confirmed before sharing access. No deploy action is approved by Sprint 064. |
| Is the model/backend path available in the customer-facing app surface? | Builder | Sprint 064 validation | Open | Sprint 059 proved the local typed Barbie backend path, but the current customer-facing surface/path still needs return-to-use validation. |
| Can the customer talk to the app, or is typed fallback the approved UAT input path? | Owner / Builder | Sprint 064 validation | Open | Validate speech input where available, or record typed fallback as the accepted path. |
| How are reminders/events created and stored in the current app path? | Builder | Sprint 064 validation | Open | Must be validated or documented as blocked before UAT approval. |
| What mechanism sends notifications for due reminders/events? | Builder | Sprint 064 validation | Open | Must be identified without changing Firebase settings or runtime code in this docs/planning sprint. |
| Is notification delivery working now? | Builder / Owner | Before UAT approval | Open | Must be validated or classified as blocker/owner-approved deferral/watch-only. |
| Does the customer need login credentials or an approved auth path? | Owner / Builder | Before customer handoff | Open | Do not store credentials in repo files. UAT auth posture remains separate from production auth approval. |
| Where should customer feedback go during UAT? | Owner | Before customer handoff | Open | A single feedback channel is required before UAT approval. |

## Sprint 063 - Owner UAT Answers Intake

Sprint 063 closeout status: `HOLD - Client UAT / V1 Beta not approved`.

| Gate Item | Owner Answer | Evidence Location | Status |
|---|---|---|---|
| Exact UAT surface/link/path | TBD | TBD | Missing |
| First tester | TBD | TBD | Missing |
| Feedback channel | TBD | TBD | Missing |
| Notification status | TBD | TBD | Missing |
| V1 Beta approver | TBD | TBD | Missing |
| UAT-vs-production auth posture | TBD | TBD | Missing |
| Deploy/config action needed to expose proven backend/model path | TBD | TBD | Missing |

Client UAT / V1 Beta remains `HOLD` until all required answers are captured and a later release-control sprint approves controlled UAT.

## Sprint 062 - Client UAT Access Inputs

Sprint 062 closeout status: `HOLD - Client UAT / V1 Beta not approved`.

| Question | Required Answer | Current Status | Evidence Location |
|---|---|---|---|
| What exact UAT surface/link/path should the tester use? | URL, local path, FlutterFlow preview, TestFlight path, web app path, or other concrete entry point. | Missing | TBD |
| Who is the first tester? | Name and role. | Missing | TBD |
| Where should tester feedback be captured? | Email, form, shared doc, GitHub issue, Notion, spreadsheet, or other channel. | Missing | TBD |
| What is the notification status? | Disabled, enabled and tested, enabled but untested, noisy, broken, or out of scope. | Missing | TBD |
| Who can approve V1 Beta? | Owner/stakeholder name. | Missing | TBD |
| What is the UAT-vs-production auth posture? | Anonymous UAT only, production auth required later, existing auth accepted, or other clear rule. | Missing | TBD |
| Is deploy/config action needed to expose the proven backend/model path? | Yes, no, or unknown with explanation. | Missing | TBD |

If any Sprint 062 item remains `Missing`, `Ambiguous`, or `Unverified`, Client UAT / V1 Beta remains `HOLD`.

## Sprint 061 - Client UAT Access Resolution Gate

Sprint 061 closeout status: `HOLD - Client UAT / V1 Beta not approved`.

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| What is the exact client-accessible UAT surface/link/path? | Owner / Builder | Before client handoff | Open | Not confirmed in project files. |
| Who is the first tester for controlled Client UAT? | Owner | Before client handoff | Open | Not confirmed. |
| Where should bugs and feedback be captured during UAT? | Owner | Before client handoff | Open | Not confirmed. |
| Are notifications a blocker, approved deferral, or watch-only item for UAT? | Owner / Architect | Before UAT approval | Open | Not classified. |
| Who is the V1 Beta approver? | Owner / Go-live approver | Before V1 Beta | Open | Not confirmed. |
| What auth posture is acceptable for controlled UAT, and what remains unresolved for production release? | Owner / Architect | Before UAT approval and production release | Open | UAT-vs-production auth posture remains unresolved beyond anonymous-auth smoke/UAT evidence. |
| Is any deploy/config action required to expose the already-proven backend/model path to the first tester, or does an existing stable UAT surface already exist? | Owner / Builder | Before client handoff | Open | Still unknown; no deploy/config action is approved by Sprint 061. |

## Sprint 060 Client UAT Readiness Questions

Sprint 060 closeout status: `HOLD`. Controlled Client UAT / V1 Beta is not approved until the unresolved release-gate questions below are answered.

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| Can the client safely test the current app? | Architect / Owner | Before client handoff | HOLD / Not approved | Sprint 059 removed the backend/model smoke blocker, but UAT surface, workflows, feedback channel, notification status, approver, and production auth posture must be confirmed before handoff. |
| What exact app surface/link/path should the client use for UAT? | Owner / Builder | Before client handoff | Open | Do not invent. Local `127.0.0.1` smoke evidence is not a client share link. Owner must provide or approve the client-accessible web link/path. |
| Are we using the current UI for UAT, not FlutterFlow yet? | Architect / Owner | Sprint 060 | Recommended yes | Current React/Vite UI is the default UAT candidate because Sprint 059 proved its backend/model path. FlutterFlow is not the Sprint 060 UAT surface. |
| What core workflows must be tested before client handoff? | Architect / Owner | Sprint 060 | Drafted | App load, auth/session, typed Barbie response, reminder/task request, in-app visibility where available, core navigation, typed fallback, Gmail V2-disabled boundary, and notification status. |
| What known issues remain? | Architect / Builder | Sprint 060 | Drafted | Exact UAT link/path, first tester, bug/feedback channel, V1 Beta approver, production auth posture, and notification blocker/deferral decision remain unresolved. Gmail initialization noise is known as non-blocking for the Barbie Send path from Sprint 059. |
| Are notifications blocking UAT? | Architect / Owner | Sprint 060 | Open | Decide whether notifications are required for V1 Beta or can be deferred/watch-only. Current UAT gate cannot silently assume either. |
| What should the client report back? | Architect / Owner | Before client handoff | Drafted | Device/browser, app open result, typed Barbie prompt result, usefulness of response, reminder/task behavior, confusion/broken screens, notification behavior, exact errors/screenshots, and top three changes before broader beta. |
| Where should bugs/feedback be captured? | Owner | Before client handoff | Open | Choose a single channel before sharing with client, such as planning issue list, shared doc, Notion page, GitHub issue label, or UAT feedback log. Do not store credentials or secrets. |
| What counts as approval for V1 Beta testing? | Owner / Go-live approver | Before V1 Beta | Open | Exact UAT surface/link/path, first tester, feedback channel, core workflow gate, notification decision, known issues, and explicit owner/go-live approver approval are required. |
| What must not happen yet? | Builder / Owner | Sprint 060 | Answered | No deploys, Firebase settings changes, FlutterFlow migration, native packaging, production release, credential exposure, runtime/source edits, or CEO Briefing PNG work without explicit approval. |
| Is anonymous auth sufficient for production client auth? | Owner / Architect | Before production release | Open | No. Sprint 059 proved anonymous-auth smoke/UAT viability only. Production auth posture remains unresolved. |

## Sprint 059 Open Questions

- After Anonymous Auth is enabled, does `ensureBarbieAuth()` now succeed locally?
- Does `askBarbie()` reach the `chatWithBarbie` callable?
- Are backend/model secrets configured enough for the callable to return a real Barbie response?
- If backend/model response works locally, what is the approved next UAT host/domain for client testing?
- Is Anonymous Auth only for local/UAT smoke, or will a future auth sprint define the production client auth path?

### Sprint 059 Validation Answers

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| After Anonymous Auth is enabled, does `ensureBarbieAuth()` now succeed locally? | Builder | Sprint 059 smoke | Answered / Pass | Browser smoke showed Firebase identity lookup returned `200`, `askBarbie()` proceeded, and no auth failure appeared during Send. |
| Does `askBarbie()` reach the `chatWithBarbie` callable? | Builder | Sprint 059 smoke | Answered / Pass | Console showed `askBarbie called`, `function called Object`, `callable returned Object`, and `function success Object`; network showed `chatWithBarbie` returned `200`. |
| Are backend/model secrets configured enough for the callable to return a real Barbie response? | Builder / Operator | Sprint 059 smoke | Answered / Pass for smoke | A visible Barbie response appeared in the UI. Secret values were not inspected or exposed. |
| If backend/model response works locally, what is the approved next UAT host/domain for client testing? | Operator | Next UAT sprint | Open | Sprint 059 proved local web backend/model smoke only. The approved UAT host/domain still needs explicit confirmation. |
| Is Anonymous Auth only for local/UAT smoke, or will a future auth sprint define the production client auth path? | Operator / Architect | Before broad client rollout | Open | Treat Anonymous Auth as the Sprint 059 local/UAT smoke unblock until a future sprint defines production/client auth posture. |

## Sprint 058 Open Questions

- What is the intended local/UAT auth path: anonymous auth, Google auth, emulator auth, or another provider?
- Should local validation use `127.0.0.1`, `localhost`, or a configured UAT domain?
- Is Firebase Anonymous sign-in supposed to be enabled for this app?
- Should `127.0.0.1` and/or `localhost` be authorized for OAuth during local validation?
- Are backend/model credentials already configured in the target Firebase/functions environment?
- Does reminder/core workflow require backend persistence before client UAT, or is local task capture acceptable for first test?

### Sprint 058 Validation Answers

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| What is the intended local/UAT auth path: anonymous auth, Google auth, emulator auth, or another provider? | Operator | Before next backend smoke | Open / Blocked | Sprint 058 proved the current path fails inside `ensureBarbieAuth()`. Operator must choose Anonymous Auth, authorized OAuth domain, or another approved tester/auth path. |
| Should local validation use `127.0.0.1`, `localhost`, or a configured UAT domain? | Operator | Before next backend smoke | Open / Blocked | Google popup fallback failed because the app domain is unauthorized for the current local flow. |
| Is Firebase Anonymous sign-in supposed to be enabled for this app? | Operator | Before next backend smoke | Open / Blocked | Anonymous Auth is disabled and blocked typed Barbie backend smoke before callable execution. |
| Should `127.0.0.1` and/or `localhost` be authorized for OAuth during local validation? | Operator | Before next backend smoke | Open / Blocked | OAuth/local domain authorization is required if Google popup remains the local/UAT auth path. |
| Are backend/model credentials already configured in the target Firebase/functions environment? | Operator | Before UAT candidate | Unproven | `chatWithBarbie` was not reached, so backend/model secrets remain unproven. Do not expose or inspect secret values in repo files. |
| Does reminder/core workflow require backend persistence before client UAT, or is local task capture acceptable for first test? | Operator / Architect | Before UAT candidate | Open | Sprint 058 only proved typed UI submit exists; backend reminder/core workflow remains unproven because auth blocked callable execution. |

## Sprint 057 Open Questions

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| Which auth/session path should the client use for UAT? | Operator | Before client UAT | Open | Do not store client credentials in repo files. |
| Is `chatWithBarbie` connected to a live model provider in the current environment? | Builder / Operator | Sprint 057 smoke | Open | Validate through UI behavior, console evidence, and backend/function logs if available. |
| Which model/provider is the Barbie assistant using? | Builder / Operator | Sprint 057 closeout | Open | Current backend code path references provider-backed assistant behavior; live provider status must be confirmed without exposing secrets. |
| Are required backend secrets/config values present in the local or target environment? | Operator | Before UAT candidate | Open | Record missing-secret blockers without writing secret values. |
| Which reminder/core workflow must pass before client UAT? | Operator / Architect | Sprint 057 smoke | Open | Test the visible workflow available in the UI. |
| Is voice required for first client UAT, or is typed fallback acceptable? | Operator / Architect | Sprint 057 closeout | Open | Browser speech recognition should not be treated as native mobile readiness. |
| Should the first client release be web app, PWA/home-screen app, wrapped iPhone app, or FlutterFlow/native? | Operator / Architect | Sprint 057 release decision | Open | Decide from manual smoke evidence; do not assume. |
| Does the client need installable iPhone access immediately, or can she start with a web/PWA UAT while packaging is handled in a later sprint? | Operator | Sprint 057 release decision | Open | Wrapped iPhone and native paths require separate packaging validation. |
| Who is the first tester and who approves movement from `HOLD` to `CLIENT UAT CANDIDATE`? | Operator | Before client UAT | Open | Keep placeholders until confirmed. |

### Sprint 057 Validation Answers

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| Which auth/session path should the client use for UAT? | Operator | Before client UAT | Open / Blocked | Sprint 057 found Firebase Anonymous sign-in disabled and `127.0.0.1` not authorized for OAuth operations. UAT auth path still needs operator decision and validation. |
| Is `chatWithBarbie` connected to a live model provider in the current environment? | Builder / Operator | Sprint 057 smoke | Blocked | Not proven. Backend assistant Send is blocked by Firebase auth configuration before successful `chatWithBarbie` / model response evidence. |
| Which model/provider is the Barbie assistant using? | Builder / Operator | Sprint 057 closeout | Open | Runtime/backend model response was not proven. Do not expose or inspect secrets while resolving this. |
| Are required backend secrets/config values present in the local or target environment? | Operator | Before UAT candidate | Open | Not validated in Sprint 057. Credential/config inspection remains out of scope. |
| Which reminder/core workflow must pass before client UAT? | Operator / Architect | Sprint 057 smoke | Partially Answered | Local task capture was partially proven and supports a core workflow, but backend reminder creation was not proven. |
| Is voice required for first client UAT, or is typed fallback acceptable? | Operator / Architect | Sprint 057 closeout | Open | Mic starts, but no transcript was proven. Typed fallback should remain required for web-first validation. |
| Should the first client release be web app, PWA/home-screen app, wrapped iPhone app, or FlutterFlow/native? | Operator / Architect | Sprint 057 release decision | Answered for Sprint 057 | Recommended path is web app first after Firebase auth/backend smoke passes. PWA/home-screen, wrapped iPhone, and FlutterFlow/native remain future options. |
| Does the client need installable iPhone access immediately, or can she start with a web/PWA UAT while packaging is handled in a later sprint? | Operator | Sprint 057 release decision | Open | Sprint 057 does not support packaged iPhone readiness. Wrapped iPhone requires a later packaging sprint after web workflow proof. |
| Who is the first tester and who approves movement from `HOLD` to `CLIENT UAT CANDIDATE`? | Operator | Before client UAT | Open | Still unresolved. Sprint 057 remains `HOLD`. |

## Sprint 056 Internal Validation Questions

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| Which environment should Sprint 056 smoke test: local Vite against configured Firebase, Firebase Hosting, or another internal target? | Operator / Builder | Before internal smoke | Open | No production deploy is approved by this Architect Pack. |
| Which auth/session path should the client use when access is restored: existing session, anonymous Firebase Auth, Google popup, or a provided account? | Operator | Before client UAT | Open | Do not store passwords or client credentials in repo files. |
| Is Firebase project `barbie-92edc` the target for internal validation and client UAT? | Operator | Before internal smoke against live services | Open | `.firebaserc` points to `barbie-92edc`; live environment ownership still needs confirmation. |
| What exact typed assistant prompt should be used as the pass/fail smoke input? | Architect / Operator | Sprint 056 validation | Open | Recommended: one general assistant prompt and one reminder prompt with explicit time. |
| Should browser voice transcript capture be required for UAT candidate status, or is typed fallback acceptable if voice is unavailable on the test browser? | Operator / Architect | Sprint 056 closeout | Open | Current implementation uses browser speech recognition, not native audio upload. |
| Who is the first internal tester before the client regains access? | Operator | Before UAT candidate recommendation | Open | Placeholder only until confirmed. |
| What issue channel should be used during client UAT? | Operator | Before client UAT | Open | Placeholder only until confirmed. |
| Who approves moving from internal validation to client UAT candidate? | Operator | Sprint 056 closeout | Open | Placeholder only until confirmed. |

### Sprint 056 Validation Answers

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| Could Sprint 056 validate local app launch without deploy or native build? | Builder | Sprint 056 closeout | Answered | Yes. `npm run dev -- --host 127.0.0.1` served the app and `curl -I http://127.0.0.1:3000/` returned `HTTP/1.1 200 OK`. |
| Could Sprint 056 complete live browser UI smoke for auth, typed assistant, reminder, and voice/fallback? | Builder / Operator | Sprint 056 closeout | Blocked | Not in this environment. Chrome focus/navigation automation could not reliably operate the local app tab, and Playwright was unavailable in the Node REPL runtime. |
| Does Sprint 056 evidence support `CLIENT UAT CANDIDATE`? | Architect / Builder | Sprint 056 closeout | Answered | No. Keep `HOLD` until live UI internal smoke is completed manually or through approved browser automation. |

## Sprint 055 Runtime / Integration Questions

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| Is FlutterFlow still an active production/release source, or only historical/reference for this app? | Operator | Sprint 056 planning | Open | Repo inspection found FlutterFlow planning/reference history but no generated export, project ID/name, or active release path. |
| If FlutterFlow is active, what is the project ID/name and export or deploy process? | Operator | Before any FlutterFlow release work | Open | Keep `<project-id-placeholder>` until confirmed. |
| Is Firebase project `barbie-92edc` the intended internal integration and UAT project? | Operator | Before deploy or internal UAT | Open | `.firebaserc` points to `barbie-92edc`, but Sprint 055 did not deploy or validate live environment ownership. |
| Which Firebase services are required for MVP: Auth, Firestore, Functions, Hosting, FCM, Storage, or another service? | Architect / Operator | Sprint 056 contract | Open | Repo shows Auth, Firestore, Functions, Hosting, and push-related code. No `storage.rules` file was present. |
| Is Hermes the confirmed assistant/backend service for typed and voice flows, or should Firebase Functions remain the immediate backend surface? | Operator / Architect | Sprint 056 contract | Open | Docs name Hermes as intended backend AI brain, but runtime code currently uses Firebase callable Functions and no Hermes module was found. |
| What endpoint contract should the app call for assistant requests? | Architect / Builder | Sprint 056 contract | Open | Current web typed flow uses `chatWithBarbie`; future Hermes/API request/response contract is not implemented. |
| Are voice flows expected to run through Hermes, browser APIs plus Firebase Functions, a mobile-native bridge, or another service? | Architect / Operator | Sprint 056 contract | Open | Current voice capture appears frontend/browser-led; production voice backend routing is not confirmed. |
| What internal environment should be validated before client UAT? | Operator | Before internal integration validation | Open | Candidate evidence exists for local Vite/Firebase build, Firebase Hosting config, and Capacitor wrappers, but no UAT link/build is confirmed. |
| Who is the first trusted internal tester after integration works? | Operator | Before internal UAT | Open | Sprint 054 trusted tester placeholder remains unresolved. |
| What exact workflows must pass before client rollout? | Operator / Architect | Before client UAT | Open | Typed assistant, voice assistant, reminders, task/calendar/finance/knowledge navigation, auth, and issue reporting need final confirmation. |

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| Confirm release source of truth: GitHub/Firebase Hosting, FlutterFlow, native stores, or another path? | Operator | Sprint 054 release source-of-truth gate | Open | Sprint 053 found Firebase Hosting/Capacitor repo config and FlutterFlow planning docs, but source of truth remains unresolved. |
| Confirm FlutterFlow status: active, historical, not needed, or still unresolved? | Operator | Sprint 054 release source-of-truth gate | Open | Do not infer from planning history alone. |
| What is the FlutterFlow project ID or project name used for this app, if FlutterFlow is active? | Operator | Sprint 054 FlutterFlow status confirmation | Open | Placeholder remains `<project-id-placeholder>` until confirmed. |
| What first UAT target/link/build should be handed to the tester? | Operator | Sprint 054 UAT path confirmation | Open | UAT target remains `<uat-link-or-build-placeholder>`. |
| Who is the first trusted client-side tester for UAT? | Operator | Sprint 054 controlled rollout | Open | Placeholder remains `<trusted-client-tester>`. |
| What exact client workflows must pass before the client starts using the app? | Operator / Architect | Sprint 054 UAT checklist | Open | Placeholder remains `<client-uat-flows>` until confirmed. |
| What is the preferred issue-reporting channel during UAT? | Operator | Sprint 054 client support process | Open | Placeholder remains `<uat-issue-channel>`. |
| Who approves moving from UAT to go-live? | Operator | Sprint 054 go-live gate | Open | Placeholder remains `<go-live-approver>`. |
| Can web UAT start before native app testing, or is native validation required first? | Operator | Sprint 054 UAT sequencing | Open | Capacitor config points to `dist`, but native release readiness is not confirmed. |
| Are there client-facing credentials, demo accounts, or seed data needed for UAT? | Operator | Sprint 054 client testing setup | Open | Do not store passwords or credentials in repo files. |
| Is `TELEGRAM_BOT_TOKEN` already created in Firebase secrets for this project? | Builder / Operator | Sprint 003 validation | Open | Needed before Telegram can be considered live. Do not paste the token into docs or chat. |
| Has the Telegram webhook URL been set with BotFather/API after deploy? | Builder / Operator | Sprint 003 validation | Open | Needed to validate Telegram message flow. |
| Which device/platform is the V1 launch target: web only, Android, iOS, or all three? | Product owner | Before go-live approval | Answered for Sprint 003 | Default launch scope is web-first. Android and iOS remain blocked until native Firebase config and device/emulator testing are confirmed. |
| Are Firestore rules ready for current V1 user flows? | Builder | Sprint 002 | Open | Validate against auth, messages, reminders, notifications, and user-owned data. |
| Should debug logs containing user message text be disabled, redacted, reduced, or kept for short-term troubleshooting? | Architect / owner | Before go-live approval | Open | Privacy and support decision needed before long-term production use. |
| Should Telegram messages be tied to the daycare owner's Firebase UID or kept as `telegram:{telegramUserId}`? | Architect / Operator | Future sprint | Open | Existing Sprint 001 question. |
| Should Gmail connect UI remain visible if sending is V2? | Architect / Operator | Future sprint | Open | Existing Sprint 001 question. |
| Which timezone should all reminders use: local browser time, daycare timezone, or account setting? | Architect / Operator | Future sprint | Open | Existing Sprint 001 question. |
| Should Sprint 003 prioritize production release cleanup, live Firebase deployment verification, or mobile device testing? | Architect / Operator | Sprint 003 | Open | Sprint 002 validation passed local build/lint/syntax, but live readiness still needs an approved next focus. |
| Should the existing `sendGmailEmail` callable remain deployed while Gmail send is V2-disabled in chat? | Architect / Operator | Sprint 003 | Open | Chat intent routing disables sending, but the backend callable still exists for authenticated callers. |
| Is Firebase production deploy approved for this sprint? | Owner | Before deploy command | Open | Required before any `firebase deploy` command is run. No deploy was run in Sprint 003 validation. |
| Should web V1 go-live proceed before Telegram is live? | Owner | Before go-live approval | Open | Recommended path is yes: web-first can proceed while Telegram remains blocked/out of launch, if owner accepts that scope. |
| Which debug logging policy should be applied before broad production usage? | Owner / Architect | Before broad production usage | Open | Recommendation is reduce or redact message content; implementation would require a future approved code change. |
| Is Firebase deploy approved for Hosting, Functions, and Firestore rules? | Owner | Sprint 004 before deploy | Open | Sprint 004 requires explicit deploy-scope approval before any deploy command. |
| What live URL should be used for smoke testing and sharing? | Builder | Open until deploy/verification | Open | Capture from Firebase deploy output or Hosting console after deploy. |
| Should the existing React/Vite Trina app become an internal admin/reference app after FlutterFlow starts? | Owner / Architect | Before FlutterFlow backend integration | Open | Do not decide silently. |
| Will FlutterFlow use Firebase directly, a Hermes API endpoint, or both? | Architect / Builder | Before backend integration | Open | Default: FlutterFlow posts structured requests to a backend API placeholder first. |
| Where will uploaded files and screenshots live: Firebase Storage, Google Drive, or both? | Architect / Owner | Before upload implementation | Open | Default: Google Drive for project organization, storage method TBD for app runtime. |
| Is authentication required in FlutterFlow V1 or only a login placeholder? | Owner | Before FlutterFlow production build | Open | Current MVP says login placeholder. |
| Which client theme should be built first: Barbie/Ken, Blue Skies, or Neutral Premium? | Owner | Sprint 007 first visual prototype | Answered for Sprint 007 | Sprint 007 approves Barbie-inspired `trina-barbie-v1` as the first visual prototype direction. Future themes should remain supported through configurable theme tokens. |
| Should the first FlutterFlow build use Firebase Auth directly, or should login be mediated through Hermes/API? | Architect / User | Before implementation sprint | Open | Sprint 006 recommends deciding before implementation, not during UI build. |
| Should the first build support demo mode before full auth? | Architect / User | Before FlutterFlow implementation | Answered for Sprint 007 | Sprint 007 first visual prototype uses demo mode as the required functional path; auth UI can remain placeholder-only. |
| Should uploads go first to Firebase Storage, Hermes-controlled storage, or another AI Hub storage layer? | Architect / User | Before file upload implementation | Open | Sprint 006 documents storage as a blueprint decision, not an implementation. |
| What is the minimum mobile MVP: chat only, chat plus tasks, chat plus memory, or full assistant dashboard? | User / Architect | Before implementation sprint | Open | Recommended first build is a polished assistant shell with chat, dashboard, safe memory/profile, and placeholders. |
| Will FlutterFlow be connected to the current repo only through docs/export references, or will generated Flutter code eventually be committed? | Architect / User | Before production mobile workflow | Open | Keep generated Flutter code out of the repo unless later approved. |
| Should the first FlutterFlow prototype use demo mode only, or also include Firebase Auth UI placeholders? | User / Architect | Before FlutterFlow implementation | Answered for Sprint 007 | Use demo mode first. Firebase Auth UI can be represented as placeholders only. |
| Should the FlutterFlow Builder create only preview screens, or also configure custom actions/API calls as stubs? | Architect / Builder | Before FlutterFlow implementation | Answered for Sprint 007 | Build visual screens plus placeholder API concepts only; do not wire live APIs or model calls. |
| Where should FlutterFlow screenshots/exports be stored after the first build? | User / Architect | After FlutterFlow prototype | Open | Recommended: `references/flutterflow/` or an external screenshots folder, not runtime app folders. |
| Which mobile layout best adapts the screenshot's left-side quick action/navigation concept? | Builder / Owner | Sprint 008 prototype review | Open | Recommended options: bottom nav plus quick-action strip, compact side rail on large phones, or home-screen action cards. |
| Should the central microphone action be visual-only or tappable with a mock listening state? | Owner / Builder | Sprint 008 implementation | Open | Recommended: tappable mock state only, no real speech or backend connection. |
| Should `Strategic Advisor Mode` and `CEO Briefing` appear on Home Dashboard, Chat Shell, or both? | Owner / Builder | Sprint 008 implementation | Open | Recommended: Home Dashboard hero context plus Chat Shell mode/status chip. |
| Where should Sprint 008 FlutterFlow screenshots be stored after build review? | Owner / Architect | After Sprint 008 build | Open | Recommended: `references/flutterflow/sprint-008/` or external shared folder, not runtime app folders. |

## Sprint 009 Open Questions

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| Should Sprint 009 visual proof files be committed under `references/flutterflow/sprint-009/`, or stored externally with only links in repo docs? | Operator | Before Sprint 010 build completion | Open | Default recommendation: use `references/flutterflow/sprint-009/` for lightweight screenshots and notes only. |
| Should the first FlutterFlow prototype use a bottom navigation bar, a home dashboard with quick actions, or both? | Architect / Operator | Before FlutterFlow build starts | Proposed | Recommended: use both bottom tabs and home quick-action cards. |
| Should the mic button appear on every screen or only the main Assistant screen? | Architect / Operator | Before FlutterFlow build starts | Proposed | Recommended: persistent central mic on the main Assistant screen only, with smaller mic entry points elsewhere. |
| Should the prototype include a fake onboarding screen or start directly at the dashboard? | Operator | Before FlutterFlow build starts | Proposed | Recommended: start directly at the dashboard for first client demo speed. |

## Sprint 010 Open Questions

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| Should CEO Briefing become a richer production workflow later? | Architect | Future sprint | Open | Sprint 010 only builds the prototype screen. |
| Should CEO Briefing evidence live in Sprint 009 or Sprint 010 references? | Architect | Sprint 010 | Answered | Keep the future screenshot path as `references/flutterflow/sprint-009/ceo-briefing.png`, but mark evidence deferred until real screenshot evidence exists. |
| Should the final FlutterFlow project be exported to code? | Architect | Future sprint | Open | Out of scope for Sprint 010. |
| Should CEO Briefing be renamed later? | Architect / Owner | Future sprint | Open | Candidate names: Executive Briefing, Daily Briefing, Priority Briefing, Founder Briefing, or Command Briefing. |

## Sprint 011 Open Questions

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| What should the future briefing screen be called? | Architect / Operator | Before future briefing screen sprint | Open | Candidate names: Executive Briefing, Daily Briefing, Priority Briefing, Founder Briefing, Command Briefing. |
| What is the accepted demo path for the next prototype review? | Architect / Operator | Before next FlutterFlow build sprint | Open | Sprint 011 recommends the next sprint focus on demo-path polish. |
| When should FlutterFlow generated code export become in scope? | Architect | Before runtime implementation | Open | Currently out of scope. |
| Which accepted screenshots should be recaptured for final demo readiness? | Architect / Operator | Sprint 012 | Open | Recommended: accepted screen set only, excluding deferred CEO Briefing unless a later sprint reopens it. |

## Sprint 012 Open Questions

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| What final page names should be used for production? | Architect / Operator | Before production prototype naming lock | Open | Sprint 012 uses display labels only and avoids source-level renames. |
| Should CEO Briefing become Executive Briefing, Daily Briefing, Priority Briefing, Founder Briefing, or Command Briefing later? | Architect / Operator | Future briefing sprint | Open | CEO Briefing remains deferred, not complete, during Sprint 012. |
| Which accepted FlutterFlow screens need refreshed screenshots after manual polish? | Operator / Builder | After manual FlutterFlow changes | Open | Refresh accepted screen evidence only when real screenshots exist. |
| What is the next real prototype build target after demo path polish? | Architect / Operator | After Sprint 012 review | Open | Candidate should stay FlutterFlow/static-only unless a later Architect Pack approves backend/generated/runtime work. |

## Sprint 013 Open Questions

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| Does the real FlutterFlow project currently contain a CEO Briefing screen or renamed briefing equivalent? | Operator / Builder | Sprint 013 manual validation | Open | If renamed, document the visible title before marking evidence complete. |
| Which CEO Briefing navigation paths are confirmed in FlutterFlow Test/Run mode? | Operator / Builder | Before Sprint 013 completion | Open | Record Dashboard to CEO Briefing, CEO Briefing to Dashboard, and CEO Briefing CTA to Assistant as tested, missing, or untested. |
| Has a real screenshot been saved at `references/flutterflow/sprint-009/ceo-briefing.png`? | Operator / Builder | Future evidence capture | Deferred | Evidence remains pending until the real PNG exists. This does not block the next Architect Pack for actual app build progress. |
| What should the next actual app-build Architect Pack cover? | Architect / Operator | Next sprint | Open | Sprint 013 does not approve runtime/generated/backend/Firebase/package/native/release work; the next pack should define the build scope explicitly. |

## Sprint 015 Open Questions

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| Which core app paths must work before adding CEO Briefing? | Architect / Operator | Sprint 015 | Open | Prioritize the current app working flow over missing CEO Briefing evidence. |
| Should the Dashboard CEO Briefing button be hidden, disabled, redirected, or left as a future placeholder until the page exists? | Architect / Operator | Sprint 015 | Open | Builder should not decide silently. Architect should define the safest MVP behavior. |

## Sprint 016 Open Questions

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| Is the CEO Briefing screen actually rebuilt inside FlutterFlow yet? | Operator / Builder | Before evidence closure | Open | Do not assume yes without real prototype evidence. |
| Where should final CEO Briefing screenshot evidence live if captured in a later sprint? | Architect | Before evidence capture | Open | Default remains `references/flutterflow/sprint-009/` unless a later sprint changes it. |
| What is the next approved implementation step after functional stabilization? | Architect | After Sprint 016 | Open | Should become Sprint 017 only after this checkpoint is clean. |

## Sprint 017 Open Questions

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| Which FlutterFlow screens are currently confirmed in Designer or Preview? | Operator / FlutterFlow Builder | Before final evidence capture | Open | Sprint 017 defines the expected list, but actual confirmation requires FlutterFlow access. |
| Where should final prototype screenshots be stored if they are not tied to Sprint 009 evidence? | Architect / Operator | Before capture | Open | Recommendation: use a dedicated future evidence sprint folder such as `references/flutterflow/sprint-018/`, unless maintaining Sprint 009 evidence continuity is required. |
| Should CEO Briefing evidence remain in Sprint 009 references or move to a new final evidence folder once real evidence exists? | Architect / Operator | Before capture | Open | Keep deferred until real screenshot exists. Do not silently decide the folder during Sprint 017. |
| What exact filenames should be used for each required screenshot? | Architect / Builder | Before capture | Open | Sprint 017 proposes stable lowercase names in `docs/VALIDATION.md`; final capture should confirm them before saving evidence. |

## Sprint 018 Open Questions

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| Should the Sprint 018 Architect Pack content be corrected to match the Sprint 018 filename and requested scope? | Architect / Operator | Before future reuse | Answered | Corrected to Sprint 018 FlutterFlow Final Prototype Evidence Capture. |
| Which real FlutterFlow screenshot files exist for final prototype evidence capture? | Operator / FlutterFlow Builder | Sprint 018 evidence capture | Open | Codex must document only files that actually exist. |
| Should final prototype screenshots use `references/flutterflow/sprint-018/`? | Architect / Operator | Before screenshots are saved | Proposed | Recommended for final prototype evidence, while Sprint 009 remains for screenshots that close Sprint 009 gaps. |
| Is `references/flutterflow/sprint-009/ceo-briefing.png` available as real CEO Briefing evidence? | Operator / FlutterFlow Builder | Before CEO Briefing evidence closure | Deferred | Keep CEO Briefing missing or deferred unless the actual file exists. |

## Sprint 019 Open Questions

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| Does the real FlutterFlow project currently contain CEO Briefing or an approved renamed briefing equivalent? | Operator / FlutterFlow Builder | Before future evidence closure | Deferred | Sprint 019 cannot verify this from the project folder. |
| Can the required CEO Briefing click paths be validated in FlutterFlow Designer or Preview? | Operator / FlutterFlow Builder | Before future evidence closure | Deferred | Required paths are Dashboard to CEO Briefing, CEO Briefing to Dashboard, and CEO Briefing to Assistant through `Ask Trina to prioritize`. |
| Has a real CEO Briefing screenshot been saved at `references/flutterflow/sprint-009/ceo-briefing.png`? | Operator / FlutterFlow Builder | Before evidence closure | Deferred | Sprint 019 keeps the file absent because no real screenshot is available. |

## Sprint 020 Open Questions

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| Does the real FlutterFlow project currently contain CEO Briefing or an approved renamed briefing equivalent? | Operator / FlutterFlow Builder | Sprint 020 evidence pass | Answered | No. Operator confirmed CEO Briefing does not exist and no approved renamed equivalent was found. |
| What is the actual visible label of the briefing screen? | Operator / FlutterFlow Builder | Sprint 020 evidence pass | Answered | Not applicable. No CEO Briefing screen or renamed equivalent exists. |
| Can `Dashboard -> CEO Briefing` be validated in FlutterFlow Designer or Preview? | Operator / FlutterFlow Builder | Sprint 020 evidence pass | Answered | Fail. Operator confirmed the path does not work. |
| Can `CEO Briefing -> Dashboard` be validated in FlutterFlow Designer or Preview? | Operator / FlutterFlow Builder | Sprint 020 evidence pass | Answered | Fail. Operator confirmed the path does not work because the screen is absent. |
| Can `CEO Briefing -> Ask Trina to Prioritize -> Assistant` be validated in FlutterFlow Designer or Preview? | Operator / FlutterFlow Builder | Sprint 020 evidence pass | Answered | Fail. Operator confirmed the path does not work because the screen is absent. |
| Has a real CEO Briefing screenshot been saved at `references/flutterflow/sprint-009/ceo-briefing.png`? | Operator / FlutterFlow Builder | Sprint 020 evidence pass | Answered | No. Operator confirmed no real screenshot was captured or saved. The file must remain absent. |
| Should a later sprint rebuild CEO Briefing, rename it, remove the Dashboard entry point, or keep the feature deferred? | Architect / Operator | Next approved Sprint | Open | Sprint 020 evidence shows the screen is absent and the related paths fail. |

## Sprint 023 Open Questions

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| Should CEO Briefing remain part of the immediate app-completion path? | Operator | Sprint 023 | Deferred | No. Operator directed the project to stop looping on CEO Briefing and move forward with app completion. |
| What is the next highest-value implementation target for app completion? | Builder / Operator | Before implementation approval | Open | Recommended target should come from current docs and app state, exclude CEO Briefing, and list expected changed files before any runtime work starts. |

## Sprint 024 Open Questions

| Question | Owner | Needed By | Status | Notes |
|---|---|---|---|---|
| Which visible path should become the next feature-complete area after shell stabilization? | Architect/User | Next app-completion sprint | Open | Likely candidates: Assistant/voice entry, Tasks/notifications workflow, or Dashboard navigation polish. |
| Does the app currently have a Settings screen, or only settings-equivalent controls? | Builder | Sprint 024 audit summary | Open | Builder should inspect current files before implementation. |
| Are Finance and Calendar intended to be static/mock in the current prototype, or partially functional? | Builder/Architect | Sprint 024 audit summary | Open | Builder should report current behavior first. |
| Are browser notifications required to actually fire in Sprint 024, or only avoid breaking the app? | Architect/User | Sprint 024 implementation approval if ambiguous | Open | Default: stabilize existing reminder popup/notification behavior without adding backend scheduling. |

## Sprint 030 Open Questions

| Date | Question | Owner | Status | Notes |
|---|---|---|---|---|
| 2026-05-31 | Can speech capture be live-tested in a browser/device where microphone permission is granted? | Builder / Operator | Open | Sprint 030 preserved the transcript-to-task path by code inspection. Live verification still requires an operator/browser session with microphone permission granted. |
| 2026-05-31 | Does the repo already include lightweight UI/browser test tooling that can be reused without adding a new framework? | Builder | Answered | No clean existing web UI/browser smoke tooling was found. Sprint 030 uses documented manual smoke coverage plus `npm run lint` and `npm run build`; no package or dependency changes were made. |

## Sprint 031 Open Questions

| Date | Question | Owner | Status | Notes |
|---|---|---|---|---|
| 2026-05-31 | Which confirmed small polish issues exist after inspecting Home / Dashboard, Assistant / Voice Entry, Tasks, Notifications, Calendar, Finance, and Knowledge Base? | Builder | Open | Implementation must inspect current runtime files first and report only confirmed issues before editing. |
| 2026-05-31 | Can speech capture be live-tested with microphone permission granted during Sprint 031 implementation? | Builder / Operator | Open | If unavailable, preserve and document the transcript-to-task path by code inspection. |
| 2026-05-31 | Are any runtime changes needed at all, or is the Sprint 030 baseline already sufficient for the targeted polish pass? | Builder / Operator | Open | Preferred outcome is the smallest safe change set; no-op after inspection is acceptable if no confirmed issue exists. |

## Sprint 032 Open Questions

| Date | Question | Owner | Status | Notes |
|---|---|---|---|---|
| 2026-05-31 | Can microphone capture be live-tested in the available browser/device environment? | Builder / Operator | Open | If permission is unavailable, Codex should document the blocker and use code inspection only. |
| 2026-05-31 | Are hover-only edit/delete controls usable on touch/mobile after Sprint 031? | Builder | Answered | No. Sprint 032 found no task edit/delete controls visually or in the DOM. `components/TasksView.tsx` renders task toggle, title, priority, and deadline only. |
| 2026-05-31 | Are any remaining accessibility issues confirmed strongly enough to become Sprint 033 scope? | Architect / Builder | Answered | Yes. Add explicit accessible task edit/delete controls, add or confirm delete plumbing from parent state, and preserve typed Assistant capture, task toggle behavior, existing task display, and CEO Briefing protection. |

## Sprint 033 Open Questions

| Date | Question | Owner | Status | Notes |
|---|---|---|---|---|
| 2026-06-01 | Does the existing task type include only title/status/deadline/priority, or additional fields that edit mode must preserve? | Builder | Answered | `types.ts` defines title, priority, deadline, status, delegatable, and createdAt. Sprint 033 edits title only and preserves all other fields. |
| 2026-06-01 | Does the current UI already have a reusable button/input pattern that task edit/delete controls should follow? | Builder | Answered | Sprint 033 reused local TasksView button/input styling and lucide icon-button conventions already present in the component. |
| 2026-06-01 | Should delete use native confirmation, or is immediate delete acceptable for MVP? | Architect / Builder | Answered | Sprint 033 uses native confirmation as the smallest accessible confirmation approach before deleting by task ID. |

## Sprint 034 Open Questions

| Date | Question | Owner | Status | Notes |
|---|---|---|---|---|
| 2026-06-01 | Are there any remaining task-flow regressions after Sprint 033 edit/delete controls? | Builder | Answered | No concrete runtime acceptance failure was found during Sprint 034 inspection and browser validation. No runtime changes were needed. |
| 2026-06-01 | Does the bottom navigation still leave enough room for task controls on mobile after Sprint 033 padding fix? | Builder | Answered | Yes. Mobile browser validation showed task edit/delete controls visible and usable above the fixed bottom navigation. |
| 2026-06-01 | Should Sprint 034 introduce new task features such as due dates, reminders, priorities, or categories? | Architect / User | Answered | No. Sprint 034 is regression hardening only. New task features belong in a later sprint. |
| 2026-06-01 | Should CEO Briefing be touched in Sprint 034? | Architect / User | Answered | No. CEO Briefing remains deferred and protected. |

## Sprint 035 Open Questions

| Question | Owner | Status | Notes |
|---|---|---|---|
| Does Sprint 035 require runtime changes, or will inspection and validation confirm the notification/reminder flow is already stable? | Builder | Answered | No runtime changes were needed. Inspection and browser validation found no concrete Sprint 035 acceptance failure. |
| Are any notification/reminder count mismatches present after Sprint 034 task-flow validation? | Builder | Answered | No mismatch was found. Dashboard badge count and Notifications rendering both use `notificationItems.length` / `notificationItems` from the same composed reminder plus event list. |
| Can all notification/reminder interactions be validated in the local browser wrapper? | Builder | Answered with caveat | Dashboard, Notifications empty state, mobile layout, active nav, and Assistant task capture were browser-validated. Live pending Firestore reminder item behavior was validated by code inspection because no live pending reminder was present. |

## Sprint 036 - Reminder Validation Fixture

| Question | Status | Notes |
|---|---|---|
| Can populated reminder-backed notifications be validated through existing local browser actions, or is a dev-only fixture/helper needed? | Answered | Existing local actions can render event notifications and task capture, but cannot reliably create a populated reminder-backed notification without live Firestore data. Sprint 036 adds a dev-only `?trinaReminderFixture=1` browser fixture that injects one local pending reminder into the existing reminder mapping path. |
