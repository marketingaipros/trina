# Questions

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
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
