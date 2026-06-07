# Risks

## Active Release-Candidate Risks

| Risk | Classification | Impact | Mitigation | Status |
|---|---|---:|---|---|
| `services/authService.ts` is both statically imported by `App.tsx` and dynamically imported by `services/firestoreService.ts`. | Watch-only / accepted for release | Low | Do not refactor auth solely for chunk placement. Revisit only if measured runtime defect or auth behavior issue appears. | Accepted in Sprint 051 |
| Main JS chunk is larger than Vite's default 500 kB warning threshold after minification. | Watch-only / accepted for release | Medium | Treat as post-release performance cleanup candidate unless a measured release-blocking performance defect appears. | Accepted in Sprint 051 |
| Final release candidate may pass build but still have unverified user-path regressions. | Release gate risk | High | Sprint 052 ran final validation and recorded a ship-or-hold recommendation. | Mitigated in Sprint 052 |
| Protected CEO Briefing artifact could accidentally reappear in repo. | Release hygiene risk | High | Sprint 052 ran `test ! -f references/flutterflow/sprint-009/ceo-briefing.png` before and after validation. | Mitigated in Sprint 052 |
| Sprint 052 could drift into broad optimization or cleanup work. | Scope risk | Medium | Sprint 052 stayed docs-only and did not modify runtime/source files. | Mitigated in Sprint 052 |

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
