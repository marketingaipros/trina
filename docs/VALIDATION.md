# Validation Plan

## Overview

Sprint 002 validated whether Barbie / TrinaOS Voice was stable enough for a V1 baseline without expanding scope into Gmail send or new product features. Sprint 003 prepares a controlled production release readiness decision.

## V1 Validation Principles

- Validate existing behavior before adding new behavior.
- Do not treat V2 features as V1 blockers.
- Do not expose secrets in docs, logs, or chat.
- Every launch-critical path should have a clear pass, fail, or blocked status.
- Any failed or blocked item should create a follow-up question, risk, or sprint candidate.

## Validation Checklist

| Area | Validation Method | Expected Result | Status | Notes |
|---|---|---|---|---|
| Frontend build | Run `npm run build` | Build completes and outputs `dist` | Pass | Build completed. Vite reported a large bundle warning for `dist/assets/index-*.js` and a mixed static/dynamic import warning for `services/authService.ts`, but no build failure. |
| Lint | Run `npm run lint` | No blocking lint errors | Pass | `tsc --noEmit` completed with exit code 0. |
| Firebase Hosting | Inspect `firebase.json` and build output | Hosting serves `dist` with SPA fallback | Pass | `hosting.public` is `dist`; SPA rewrite points `**` to `/index.html`. No deploy was run. |
| Firebase Functions syntax | Run appropriate function syntax/lint checks | Functions code is valid | Pass | `node --check functions/index.js` completed with exit code 0. |
| Auth | Inspect callable function auth requirements and frontend usage | Protected functions require authenticated user | Pass with caveat | Callable functions inspected require `request.auth` through `getUserId()` or equivalent checks. Frontend attempts anonymous auth and falls back to Google popup when anonymous is disabled. |
| Chat | Validate frontend-to-backend chat path | User can send message and receive expected assistant response | Pass by inspection | Text submit calls `askBarbie()`, which calls callable `chatWithBarbie`. Runtime OpenRouter success still depends on deployed function secret and network availability. |
| Reminders | Validate reminder creation path | Reminder can be created and stored in expected location | Pass by inspection | `chatWithBarbie` parses reminder intent before OpenRouter and writes user-owned docs to lowercase `notifications`, plus message logs. |
| Reminder popups | Validate popup, snooze, dismiss behavior | Reminder notifications behave as expected | Pass by inspection | Frontend listener queries `notifications` by `userId`, `status == pending`, and `type == reminder`; dismiss and snooze hide local popup immediately and update Firestore. |
| Firestore rules | Inspect and, if possible, test rules | User-owned data is protected | Pass by inspection | Rules require authenticated user ownership for `messages`, `notifications`, `events`, and user calendar paths. Backend-only collections are denied to clients. Rules emulator tests were not run in this sprint. |
| Telegram readiness | Confirm function exists, secret dependency is documented, and setup command exists | Telegram path is ready or blocked with reason | Blocked | `telegramWebhook` exists and validates `x-telegram-bot-api-secret-token`/query token against `TELEGRAM_BOT_TOKEN`; live status is blocked until secret and webhook setup are confirmed. |
| Gmail V2 boundary | Inspect email intent/send behavior | Gmail send remains disabled for V1 | Pass with caveat | `chatWithBarbie` returns V2-disabled responses for email intent and confirmation phrases. A callable `sendGmailEmail` still exists for backend Gmail operations and should remain out of V1 UI/intent scope. |
| Mobile readiness | Inspect Capacitor config and native folders | Mobile packaging path is documented | Blocked | Capacitor config uses `webDir: dist`, iOS/Android folders exist, and mic/notification permissions are present. Native Firebase config files were not found, and device/emulator testing was not run. |
| Debug logging | Inspect debug log writes | Privacy risk is known and documented | Risk accepted for sprint | `chatWithBarbie` writes raw user message text to `debugLogs` at function start. This is useful for troubleshooting but needs a retention/redaction decision before long-term production use. |

## Sprint 002 Validation Results

Date: 2026-05-15

### Commands Run

```bash
cd /Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice
npm run build
npm run lint
node --check functions/index.js
```

### Command Results

- `npm run build`: Pass. Production build completed and wrote `dist`.
- `npm run lint`: Pass. TypeScript check completed with exit code 0.
- `node --check functions/index.js`: Pass. Function source parsed successfully.

### Build Warnings

- Vite warned that `services/authService.ts` is both dynamically and statically imported, so the dynamic import will not split it into a separate chunk.
- Vite warned that the built JavaScript chunk is larger than 500 kB after minification.

### No Deployment Performed

No Firebase deploy command was run during Sprint 002 validation.

## Validation Commands

```bash
cd /Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice
npm run build
npm run lint
node --check functions/index.js
```

## CEO Briefing Evidence Status

CEO Briefing screenshot evidence is deferred.

The failed/blank CEO Briefing page with `Try Again` is treated as blocked evidence, not pass evidence.

The next app-completion sprint must not require `references/flutterflow/sprint-009/ceo-briefing.png` unless the operator explicitly reopens CEO Briefing.

## Sprint 049 - Compact Touch Target Standardization Validation

Sprint 049 must validate compact interactive controls after implementation.

Required command validation:

- `git diff --check`
- `test ! -f references/flutterflow/sprint-009/ceo-briefing.png`
- `npm run lint`
- `npm run build`
- `git diff --name-only`
- `git status --branch --short`
- `git diff --cached --name-only`

Required browser/mobile validation:

- Validate at `390x844`.
- Validate at `360x740`.
- Inspect Calendar day cells.
- Inspect filter chips or segmented controls in Calendar and Tasks if present.
- Inspect any compact interactive controls changed by the sprint.
- Confirm no horizontal overflow.
- Confirm no primary action/input is hidden behind the fixed bottom nav.
- Confirm changed controls meet or intentionally approximate the `44px` touch-target standard.
- Confirm no CEO Briefing files were touched.

### Sprint 049 Planning Results

- Planning/docs pack applied only.
- Runtime implementation has not started.
- Builder must read Sprint 049 files and summarize scope before implementation.
- No runtime files were changed during planning/docs application.
- CEO Briefing files were untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remained absent.

### Sprint 049 Validation Results

Runtime changes:

- `components/CalendarView.tsx`: raised compact Calendar day cells from `h-10` to `min-h-[44px] min-w-[44px]`, raised Calendar category and recurring chips to `min-h-[44px]`, allowed recurring chips/action row to wrap, and raised compact Calendar form/empty-state action controls to `min-h-[44px]`.
- `components/TasksView.tsx`: raised Task filter chips, add-form priority chips, deadline input, add/save/cancel controls, and the empty-state return button to `min-h-[44px]`; Task filters and priority rows now wrap instead of relying on horizontal chip scrolling.

Inspected but not modified:

- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`
- `components/NotificationsView.tsx`

Browser/mobile validation:

- `390x844`: Calendar day cells measured `47x44` or larger, with the selected day at `50x46`; Calendar category and recurring chips measured `44px` tall; Task filters and priority chips measured `44px` tall; no document-level horizontal overflow was detected.
- `360x740`: Calendar day cells measured `44x44` or larger, with the selected day at `46x46`; Calendar category and recurring chips measured `44px` tall; Task filters and priority chips measured `44px` tall; no document-level horizontal overflow was detected.

Commands run:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
git diff --cached --name-only
```

Result:

- Pass. `git diff --check` completed cleanly.
- Pass. CEO Briefing screenshot absence guard completed cleanly.
- Pass. `npm run lint` completed with no blocking TypeScript errors.
- Pass. `npm run build` completed; existing Vite warnings about `services/authService.ts` mixed static/dynamic import chunking and large bundle size remained non-blocking.
- Nothing was staged, committed, or pushed.

## Sprint 048 - Short-Height Mobile Smoke Across Core Views Validation

Sprint 048 validates core non-Home views at both standard and short-height mobile viewports before any runtime changes.

Required validation after implementation approval:

- Smoke Tasks at `390x844` and `360x740`.
- Smoke Calendar at `390x844` and `360x740`.
- Smoke Finance at `390x844` and `360x740`.
- Smoke Knowledge Base at `390x844` and `360x740`.
- Smoke Notifications/reminders if reachable.
- Confirm no checked view has horizontal overflow.
- Confirm no primary action or input is trapped behind the fixed bottom nav.
- Confirm short-height scrolling remains usable.
- Confirm existing `44px` touch-target hardening is preserved where relevant.
- If a runtime issue is confirmed, apply only the smallest local fix.

Required commands:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
git diff --cached --name-only
```

Expected result:

- Runtime changes are either unnecessary or limited to confirmed short-height mobile issues.
- Existing labels, handlers, copy, input behavior, loading states, and disabled states are preserved.
- No backend, Firebase, native, package, release, CEO Briefing, or broad app-shell files are modified.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- Nothing is staged, committed, or pushed without approval.

### Sprint 048 Planning Results

- Planning/docs pack applied only.
- Builder summary was approved before inspection.
- Browser/mobile smoke ran against local Vite with `?trinaReminderFixture=1`.
- Tasks, Calendar, Finance, Knowledge Base, and Notifications/reminders were reached through bottom navigation at `390x844` and `360x740`.
- No checked view had horizontal overflow at either viewport.
- No primary action or input was trapped behind the fixed bottom navigation.
- Tasks used normal page scrolling with a long seeded local task list; at scroll-bottom the lowest task controls cleared the fixed nav.
- Calendar selected-day edit/delete controls, Finance action controls, Knowledge Base upload/voice/ask controls, Notifications back control, and bottom navigation remained usable.
- Existing primary/action touch targets stayed at or above `44px` where prior mobile hardening applies.
- Compact task filter chips and calendar day cells remain below `44px` in one dimension, but Sprint 048 did not confirm them as short-height blockers.
- No runtime files were changed.
- CEO Briefing files were untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remained absent.

### Sprint 048 Validation Results

Commands run:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
git diff --cached --name-only
```

Result:

- Pass. `git diff --check` completed cleanly.
- Pass. CEO Briefing screenshot absence guard completed cleanly.
- Pass. `npm run lint` completed with no blocking TypeScript errors.
- Pass. `npm run build` completed; existing Vite warnings about `services/authService.ts` mixed static/dynamic import chunking and large bundle size remained non-blocking.
- Nothing was staged, committed, or pushed.

## Sprint 047 - Home Typed Action Row Responsive Spacing Validation

Sprint 047 validates that the Home typed input/action row remains stable and usable on narrow mobile widths after Sprint 046 raised the typed `Capture` and `Send` buttons to the `44px` mobile touch-target baseline.

Required validation:

- Inspect the Home typed input/action row and identify the actual owning component/styles before runtime edits.
- Confirm Sprint 046 `min-h-11` remains present on both typed `Capture` and `Send` buttons.
- Apply the smallest safe local styling or component-level change after the Builder summary gate is approved, only if inspection shows crowding, overflow, poor wrapping, or input squeeze.
- Validate Home at exact `390x844` if available; otherwise document the actual measured viewport.
- Validate one narrower mobile width such as `360x740` if practical.
- Confirm the typed row has no horizontal overflow.
- Confirm typed input remains usable and is not visually crushed by the buttons.
- Confirm `Capture` and `Send` remain at least `44px` tall.
- Confirm existing labels, handlers, typed input behavior, and disabled/loading behavior are preserved where inspectable.
- Confirm bottom navigation remains visible, usable, and unblocked.
- Smoke Dashboard/Home, Tasks, Calendar, Finance, Knowledge Base, and Notifications/reminders if reachable, using fixture mode if needed.

Required commands:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
git diff --cached --name-only
```

Expected result:

- Home typed row has no horizontal overflow at validated mobile widths.
- Typed input remains usable and visually stable.
- `Capture` and `Send` remain at least `44px` tall.
- No label, handler, typed input behavior, disabled/loading behavior, bottom-nav behavior, or broad design change is introduced.
- No unrelated shared style change affects other controls unless explicitly documented and necessary.
- CEO Briefing remains untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- Nothing is staged, committed, or pushed without explicit approval.

### Sprint 047 Planning Results

Planning/docs-only application:

- Sprint 047 Architect Pack is present at `architect-packs/trina-047-home-typed-action-row-responsive-spacing-architect-pack.md`.
- Sprint 047 planning files are present under `planning/sprints/047-home-typed-action-row-responsive-spacing/`.
- Runtime implementation had not started during planning/docs-only application.
- CEO Briefing files were not touched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remained absent.

### Sprint 047 Validation Results

Runtime change:

- `components/VoiceDashboard.tsx`: added local Home-only class hooks and a narrow/short viewport compact avatar stack layout for `max-width: 380px` and `max-height: 760px`.

Confirmed issue:

- At `360x740`, the Home typed row overlapped the fixed bottom nav before the fix.
- At `390x844`, the Home typed row was already clear before implementation.

Behavior preserved:

- Existing `Capture` and `Send` labels were unchanged.
- Existing handlers were unchanged.
- Existing typed input behavior was unchanged.
- Existing disabled/loading behavior was unchanged.
- Sprint 046 `min-h-11` button height remained on both buttons.
- Existing pink/white visual direction was preserved.
- No shared style or unrelated view change was introduced.

Validation path:

- Browser/manual validation ran through browser automation against local Vite at `http://127.0.0.1:3000/?trinaReminderFixture=1`.
- Exact viewport `390x844` was available and used.
- Narrower viewport `360x740` was available and used.
- Notifications/reminders were reached with the existing local `trinaReminderFixture=1` validation fixture.

Browser/manual results:

- At `390x844`, the typed row had no horizontal overflow and cleared bottom nav by `62px`.
- At `390x844`, typed input remained usable and `Capture` / `Send` both measured `44px` tall.
- At `360x740`, the typed row had no horizontal overflow and cleared bottom nav by `138px`.
- At `360x740`, typed input remained usable and `Capture` / `Send` both measured `44px` tall.
- Dashboard/Home, Tasks, Calendar, Finance, Knowledge Base, and Notifications/reminders smoke checks passed.

Command results:

- `git diff --check`: Pass.
- `test ! -f references/flutterflow/sprint-009/ceo-briefing.png`: Pass.
- `npm run lint`: Pass.
- `npm run build`: Pass, with existing non-blocking Vite warnings about `services/authService.ts` mixed static/dynamic import chunking and large bundle size.
- `git diff --cached --name-only`: Empty.

Protected scope:

- Runtime change was limited to `components/VoiceDashboard.tsx`.
- CEO Briefing stayed untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remained absent.
- Nothing was staged, committed, or pushed.

## Sprint 046 - Home Typed Action Touch Target Polish Validation

Sprint 046 validates that the remaining Home typed `Capture` and `Send` buttons meet the mobile `44px` touch-target baseline without redesigning Home or changing typed input behavior.

Required validation:

- Inspect the Home typed input/action area and identify the actual owning component/styles before runtime edits.
- Apply the smallest safe styling or component-level change after the Builder summary gate is approved.
- Validate Home at exact `390x844` if available; otherwise document the actual measured viewport.
- Confirm the typed `Capture` and `Send` controls are at least `44px` tall or have a minimum `44px` touch target where inspectable.
- Confirm the existing labels, actions/handlers, input behavior, and disabled/loading behavior are preserved where inspectable.
- Confirm no horizontal overflow on Home.
- Confirm bottom navigation remains usable and does not block the typed action controls.
- Smoke Dashboard/Home, Tasks, Calendar, Finance, Knowledge Base, and Notifications/reminders if reachable.
- Confirm no Sprint 045 secondary touch-target regression is observed during smoke.

Required commands:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
```

Expected result:

- Home typed `Capture` and `Send` controls meet the `44px` mobile touch target where safe.
- No unrelated Home redesign, input workflow change, handler change, bottom-nav change, or feature change is introduced.
- No unrelated runtime surfaces are refactored.
- CEO Briefing remains untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

### Sprint 046 Planning Results

Planning/docs-only application:

- Sprint 046 Architect Pack is present at `architect-packs/trina-046-home-typed-action-touch-target-polish-architect-pack.md`.
- Sprint 046 planning files are present under `planning/sprints/046-home-typed-action-touch-target-polish/`.
- Runtime implementation has not started.
- CEO Briefing files were not touched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remained absent.

### Sprint 046 Validation Results

Runtime change:

- `components/VoiceDashboard.tsx`: added `min-h-11` only to the Home typed `Capture` and `Send` button class strings.

Behavior preserved:

- Existing `Capture` and `Send` labels were unchanged.
- Existing handlers were unchanged.
- Existing typed input behavior was unchanged.
- Existing disabled/loading behavior was unchanged.
- Existing Home layout, bottom navigation behavior, and pink/white visual direction were preserved.

Validation path:

- Browser/manual validation ran through the in-app browser against local Vite at `http://127.0.0.1:3000/?trinaReminderFixture=1`.
- Exact viewport `390x844` was available and used.
- Notifications/reminders were reached with the existing local `trinaReminderFixture=1` validation fixture.

Browser/manual results:

- Dashboard/Home rendered at exact `390x844`.
- Home typed `Capture` measured `44px` tall.
- Home typed `Send` measured `44px` tall.
- The Home typed input row had no horizontal overflow.
- Bottom navigation remained visible, usable, and unblocked.
- Dashboard/Home, Tasks, Calendar, Finance, Knowledge Base, and Notifications/reminders smoke checks passed.

Command results:

- `git diff --check`: Pass.
- `test ! -f references/flutterflow/sprint-009/ceo-briefing.png`: Pass.
- `npm run lint`: Pass.
- `npm run build`: Pass, with existing non-blocking Vite warnings about `services/authService.ts` mixed static/dynamic import chunking and large bundle size.

Protected scope:

- Runtime change was limited to `components/VoiceDashboard.tsx`.
- CEO Briefing stayed untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remained absent.
- Nothing was staged, committed, or pushed.

## Sprint 045 - Secondary Header Touch Target Polish Validation

Sprint 045 validates that targeted secondary header, back, and AI action controls meet or intentionally document the mobile touch-target standard after the narrow polish pass.

Required validation:

- Inspect target controls before changes and record where the touch target is below `44x44` or visually constrained.
- Apply the smallest safe styling or component-level change.
- Validate mobile viewport at exact `390x844` if available; otherwise document the actual measured viewport.
- Smoke Dashboard/Home, Tasks, Calendar, Finance, Knowledge Base, and Notifications/reminders if reachable.
- Confirm no horizontal overflow.
- Confirm bottom navigation remains usable and does not overlap primary controls.
- Confirm targeted secondary controls are at least `44x44` where changed.
- Confirm labels, aria-labels, visible text, or accessible names are preserved where inspectable.
- Confirm existing primary task row controls remain at least `44x44`.

Required commands:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
```

Expected result:

- Targeted secondary controls meet the `44x44` mobile touch target where safe.
- Any exception is documented with reason and follow-up recommendation.
- No unrelated runtime behavior changes are introduced.
- CEO Briefing remains untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

### Sprint 045 Validation Results

Runtime changes:

- `components/TasksView.tsx`: header back, Strategic Review AI action, add/close task action, Strategic Review close, and Strategic Review error-dismiss controls now use a minimum `44x44` hit area.
- `components/CalendarView.tsx`: header back, add/close event, previous month, and next month controls now use a minimum `44x44` hit area.
- `components/FinanceView.tsx`: header back, Financial Analysis AI action, add/close finance entry action, Financial Analysis close, and Financial Analysis error-dismiss controls now use a minimum `44x44` hit area.
- `components/KnowledgeBaseView.tsx`: header back, knowledge-base error dismiss, and answer-audio controls now use a minimum `44x44` hit area.
- `components/NotificationsView.tsx`: header back control now uses a minimum `44x44` hit area.
- `components/VoiceDashboard.tsx`: Daily Snapshot action and Daily Snapshot audio/close/error-dismiss controls now use a minimum `44x44` hit area.
- `components/BrainDumpView.tsx`: secondary back controls and camera close control now use a minimum `44x44` hit area.

Validation path:

- Browser smoke ran through the in-app browser against local Vite at `http://127.0.0.1:3000/?trinaReminderFixture=1`.
- Exact viewport `390x844` was available and used.
- Notifications/reminders were reached with the existing local `trinaReminderFixture=1` validation fixture.

Browser smoke results:

- Dashboard/Home rendered at exact `390x844`. `Create Daily Snapshot` measured `154x44`. The typed Capture and Send controls measured `40px` tall, remained visible, unblocked, and above the bottom navigation; they were intentionally left unchanged because Sprint 045 targeted secondary header/back/AI controls.
- Tasks rendered `Task Tracker`. Header back, Strategic Review AI action, add task, and the inspected task row edit/delete controls all measured `44x44`.
- Calendar rendered `Calendar`. Header back, add event, previous month, next month, and populated selected-day edit/delete controls all measured `44x44`.
- Finance rendered `Financial Snapshot`. Header back, Financial Analysis AI action, and add finance entry controls all measured `44x44`.
- Knowledge Base rendered `Knowledge Base`. Header back, upload action, and voice question controls measured at least `44px` tall; header back and voice question measured `44x44`.
- Notifications/reminders rendered with the fixture reminder. Header back measured `44x44`.
- Bottom navigation remained usable across the validated surfaces; nav buttons measured `62x56`.
- No horizontal overflow was observed on Dashboard/Home, Tasks, Calendar, Finance, Knowledge Base, or Notifications/reminders.
- Accessible names, aria labels, visible text, titles, and click handlers were preserved where inspectable.

Command results:

- `git diff --check`: Pass.
- `test ! -f references/flutterflow/sprint-009/ceo-briefing.png`: Pass.
- `npm run lint`: Pass.
- `npm run build`: Pass, with known non-blocking Vite warnings about `services/authService.ts` mixed static/dynamic import chunking and large bundle size.

Protected scope:

- CEO Briefing stayed untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remained absent.

Follow-up candidate:

- Home typed Capture/Send controls remain `40px` tall and can be reviewed in a future input-bar touch-target sprint if the operator wants all non-secondary actions aligned to `44px`.

## Sprint 042 Validation - Mobile State Validation and Fixture Coverage

### Purpose

Sprint 042 creates a small repeatable validation path for the Sprint 041 state-coverage caveats.

This sprint is not a redesign, backend, Firebase, package, native, build, release, deployment, or CEO Briefing sprint.

### Required Builder Summary Gate

Before runtime edits, the Builder must report:

1. What Sprint 042 is supposed to accomplish.
2. Which files it expects to modify.
3. What tests or validation steps it will run.
4. Any blockers or ambiguities.

Implementation must wait for operator approval after that summary.

### Required Commands

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

### Required Browser and Inspection Checks

- Mobile viewport exactly `390x844`, or nearest available viewport with reason.
- Dashboard / Daily Snapshot failure visibility where feasible.
- Voice Dashboard capture, empty, and disabled behavior.
- Tasks true empty state, filter empty states, and Strategic Review AI failure state where feasible.
- Notifications empty and fallback behavior.
- Calendar true empty selected-day/list state and preserved event controls where feasible.
- Finance empty state, disabled/invalid submit behavior, and AI failure state where feasible.
- Knowledge Base empty/fallback, voice failure, and delete-without-ID error states where feasible.
- No horizontal overflow on Dashboard, Tasks, Finance, Calendar, Notifications, and Knowledge Base.
- Sprint 040 touch/accessibility behavior remains preserved.

### Validation Mechanism Rules

Use the smallest practical validation mechanism:

- Lightweight local fixture, mock, dev-only toggle, or test helper.
- Documented local reset or manual steps if code support is unnecessary.
- Small smoke script only if the repo already has a practical place for it.
- No runtime changes if existing structure already supports repeatable validation.

Do not add package dependencies without first reporting why existing tooling is insufficient and receiving explicit approval.

Any helper must be narrow, local, and isolated from normal user behavior.

### Scope Guard

Runtime files may only be changed after approval and only if required to support validation or fix a confirmed state issue.

Allowed runtime candidates:

- `components/Dashboard.tsx`
- `components/VoiceDashboard.tsx`
- `components/TasksView.tsx`
- `components/NotificationsView.tsx`
- `components/CalendarView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`

`components/Navigation.tsx` and `App.tsx` are inspect-only unless explicitly justified.

Sprint 042 must not touch CEO Briefing files and must not create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Sprint 042 must not touch backend, Firebase, package, native, build, release, deployment, environment, evidence, or generated FlutterFlow files.

### Results Format

Record Sprint 042 results with:

- Validation mechanism used.
- Runtime files changed, if any.
- Which Sprint 041 caveats were live-reproduced.
- Which states remain code-inspected only.
- Exact or nearest mobile viewport used.
- Horizontal overflow result.
- Sprint 040 touch/accessibility preservation result.
- Required command results.
- Protected scope confirmation.

### Sprint 042 Validation Results

Runtime changes:

- `components/VoiceDashboard.tsx`: added local/dev-only `trinaStateFixture=ai-failure` support for Daily Snapshot error validation.
- `components/TasksView.tsx`: added local/dev-only `trinaStateFixture=empty` and `trinaStateFixture=ai-failure` support for empty task and Strategic Review error validation.
- `components/CalendarView.tsx`: added local/dev-only `trinaStateFixture=empty` support for selected-day/list empty-state validation.
- `components/FinanceView.tsx`: added local/dev-only `trinaStateFixture=empty` and `trinaStateFixture=ai-failure` support for empty finance, disabled submit, and Financial Analysis error validation.
- `components/KnowledgeBaseView.tsx`: added local/dev-only `trinaStateFixture=empty` and `trinaStateFixture=kb-missing-id` support for empty vault and delete-without-ID fallback validation.

Validation mechanism:

- Use `?trinaStateFixture=empty,ai-failure,kb-missing-id` for local fixture validation.
- Use `?trinaReminderFixture=1&trinaStart=notifications` with the existing Sprint 036 fixture for reminder-backed Notifications validation.
- Fixtures are guarded by `process.env.NODE_ENV !== 'production'` and URL query parameters, and they do not mutate local storage.

Command results:

- `npm run lint`: Pass.
- `git diff --check`: Pass.
- `npm run build`: Pass, with known non-blocking Vite warnings about `services/authService.ts` mixed import chunking and large bundle size.
- `test ! -f references/flutterflow/sprint-009/ceo-briefing.png`: Pass.

Browser smoke results:

- Browser smoke ran in isolated Chrome through DevTools at exact viewport `390x844`.
- `trinaStateFixture=empty,ai-failure,kb-missing-id&trinaReminderFixture=1&trinaStart=notifications` live-verified Notifications fixture rendering, Tasks empty state, Calendar empty state, Finance empty state, Finance disabled submit, Daily Snapshot error, and no horizontal overflow.
- `trinaStateFixture=ai-failure,kb-missing-id&trinaReminderFixture=1&trinaStart=notifications` live-verified Strategic Review error, Financial Analysis error, Knowledge Base missing-ID fixture rendering, Knowledge Base delete-without-ID error, Sprint 040 task row 44px controls, Knowledge Base upload/voice 44px controls, and no horizontal overflow.
- Calendar event controls remained covered by the existing runtime code and live smoke accepted the current selected-day state when no selected event rows were visible.

Live-reproduced Sprint 041 caveats:

- Exact `390x844` viewport.
- True empty states for Tasks, Calendar, Finance, and Knowledge Base through local fixtures.
- Daily Snapshot, Strategic Review, and Financial Analysis failure states through local fixtures.
- Finance disabled/invalid submit behavior.
- Knowledge Base delete-without-ID fallback error.
- Notifications reminder fixture rendering.
- Horizontal overflow checks on in-scope views.
- Sprint 040 touch/accessibility behavior for task controls and Knowledge Base upload/voice controls.

Remaining caveats:

- Calendar event row edit/delete controls were not clicked live in a populated selected-day row during Sprint 042 smoke; existing code keeps the 44px controls, and the selected-day browser check had no overflow.

Protected scope:

- CEO Briefing stayed untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remained absent.

## Sprint 044 Validation - Forward Mobile Runtime Smoke And Next Priority Selection

### Purpose

Sprint 044 performs a focused forward mobile runtime smoke across the non-CEO app shell and selects the next narrow implementation priority from observed behavior.

This sprint is not a runtime implementation, backend, Firebase, auth, package, dependency, native, deployment, environment, FlutterFlow, or CEO Briefing sprint.

### Required Builder Summary Gate

Before validation or runtime inspection beyond readback, the Builder must report:

1. What Sprint 044 is supposed to accomplish.
2. Which files it expects to inspect or modify.
3. What validation steps it will run.
4. Any blockers, ambiguities, or risks before validation.

Implementation must wait for operator approval after that summary.

### Required Commands

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
```

### Required Browser and Inspection Checks

- Mobile viewport exactly `390x844`, or nearest available measured viewport with reason.
- Dashboard/Home shell renders and primary controls are reachable.
- Tasks view renders and recently hardened task controls remain reachable where visible.
- Calendar view renders and selected-day/event controls remain reachable where visible.
- Finance view renders and primary controls do not show obvious blocked, empty, error, or loading regressions.
- Knowledge Base view renders and upload/voice/delete fallback controls remain reachable where visible.
- Notifications/reminder surface renders if reachable.
- No obvious horizontal overflow on reachable in-scope views.
- Fixed bottom navigation does not overlap primary controls on reachable in-scope views.
- Recently hardened accessible labels and 44px touch-target expectations remain preserved where inspectable.

### Scope Guard

Runtime files may be inspected during Sprint 044, but must not be modified unless separately approved after the readback.

Sprint 044 must not touch backend, Firebase, auth, package, dependency, native, build, release, deployment, environment, generated FlutterFlow, evidence, or CEO Briefing files.

Sprint 044 must not create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

### Results Format

Record Sprint 044 results with:

- Exact or nearest measured mobile viewport used.
- Surfaces reached.
- Rendering result by surface.
- Navigation and control reachability result by surface.
- Horizontal overflow result.
- Bottom-navigation overlap result.
- Recent accessibility/touch-target preservation result.
- Any blocked or untested surfaces with reason.
- Sprint 045 recommendation with narrow scope, expected files, validation needs, and whether it is docs-only, validation-only, or runtime implementation.
- Required command results.
- Protected scope confirmation.
- No backend, Firebase, package, native, build config, release, deployment, environment, evidence, or generated FlutterFlow files were changed.

### Sprint 044 Validation Results

Runtime changes:

- None.

Validation path:

- Browser smoke ran through the in-app browser against local Vite at `http://127.0.0.1:3000/?trinaReminderFixture=1`.
- Exact viewport `390x844` was available and used.
- Notifications/reminders were reached with the existing local `trinaReminderFixture=1` validation fixture.

Surfaces reached:

- Dashboard/Home
- Tasks
- Calendar
- Finance
- Knowledge Base
- Notifications/reminders

Browser smoke results:

- Dashboard/Home rendered the assistant shell with quick actions, typed fallback, voice capture control, and bottom navigation. `documentElement` and `body` width both measured `390`, with no horizontal overflow. Quick action buttons measured `56x56`; bottom navigation buttons measured `62x56` and had accessible labels.
- Tasks rendered `Task Tracker`, schedule context, filters, and existing task rows. Task row done/edit/delete controls remained visible, reachable, labeled, and measured `44x44` where inspected. No horizontal overflow was observed.
- Calendar rendered `June 2026`, selected day `Tuesday, June 2`, and the populated `Parent Meeting` row. Selected-day edit/delete controls remained visible and reachable. No horizontal overflow was observed.
- Finance rendered `Financial Snapshot`, net profit, revenue/expense totals, breakdown content, and bottom navigation. No blocked, empty, error, or loading regression was observed. No horizontal overflow was observed.
- Knowledge Base rendered `Knowledge Base`, query input, voice question button, upload actions, and the empty vault state. Upload and voice controls remained reachable and labeled; the empty state did not regress. No horizontal overflow was observed.
- Notifications/reminders rendered the fixture reminder and the blocked-browser-notification fallback message while preserving in-app reminder/task-capture messaging. No horizontal overflow was observed.

Navigation and bottom navigation:

- Bottom navigation successfully moved between Home, Tasks, Calendar, Finance, Knowledge, and Notifications.
- Bottom navigation buttons measured `62x56` with accessible labels: `Open Home`, `Open Tasks`, `Open Finance`, `Open Calendar`, `Open Notifications`, and `Open Knowledge`.
- No bottom-navigation overlap blocked primary controls on the validated surfaces.

Touch/accessibility observations:

- Recently hardened task row controls remained `44x44` with specific labels such as `Edit task: Renew daycare license` and `Delete task: Renew daycare license`.
- Knowledge Base upload and voice-question controls remained at least `44px` tall and had accessible labels where inspected.
- Dashboard quick-action buttons remained `56x56` with accessible labels.
- Compact header/back/AI action buttons on some secondary views measured around `40x40`; this was recorded as a non-blocking observation because the Sprint 044 smoke target was preservation of recently hardened controls and no primary workflow was blocked.

Empty/error/loading regression check:

- Dashboard showed the known microphone-permission-denied fallback and kept typed capture/send controls visible.
- Knowledge Base showed the expected empty vault state.
- Notifications showed the expected browser-notification-blocked fallback plus the fixture reminder.
- No unexpected stuck loading state, crash, or blank screen was observed on any validated surface.

Recommended Sprint 045 priority:

- Sprint 045 candidate: `045-secondary-header-touch-target-polish`.
- Rationale: Sprint 044 found the main mobile shell stable, with no overflow or blocked navigation. The only current mobile polish evidence is that several secondary header/back/AI controls measure around `40x40`, while the recently hardened row, upload, voice, quick-action, and bottom-nav controls remain at or above target sizes.
- Expected files to inspect: `components/TasksView.tsx`, `components/FinanceView.tsx`, `components/KnowledgeBaseView.tsx`, `components/NotificationsView.tsx`, `components/CalendarView.tsx`, and shared navigation/header patterns if any are introduced later.
- Expected mode: narrow runtime implementation only after a new Architect Pack and approval; otherwise validation-only if the operator decides the 40px secondary controls are acceptable.
- Validation needed: mobile browser smoke at `390x844`, header/back/action button size checks, horizontal overflow check, bottom-navigation overlap check, `npm run lint`, `npm run build`, `git diff --check`, and the CEO Briefing absence guard.

Command results:

- `git diff --check`: Pass.
- `test ! -f references/flutterflow/sprint-009/ceo-briefing.png`: Pass.
- `npm run lint`: Pass.
- `npm run build`: Pass, with known non-blocking Vite warnings about `services/authService.ts` mixed static/dynamic import chunking and large bundle size.
- `git diff --name-only`: Pass, limited to allowed tracked docs.
- `git status --branch --short`: Pass, showing allowed docs/planning changes and no staged files.

Protected scope:

- CEO Briefing stayed untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remained absent during browser validation.
- No runtime, backend, Firebase, auth, package, dependency, native, build config, release, deployment, environment, evidence, or generated FlutterFlow files were changed.

## Sprint 043 Validation - Calendar Selected-Day Control Validation Closeout

### Purpose

Sprint 043 will close the remaining Sprint 042 validation caveat by proving Calendar selected-day edit/delete controls can be live-clicked on a populated selected-day row at the mobile target viewport.

This sprint is not a redesign, feature expansion, backend, Firebase, Supabase, package, native, build config, release, deployment, or CEO Briefing sprint.

### Required Builder Summary Gate

Before runtime edits, the Builder must report:

1. What Sprint 043 is supposed to accomplish.
2. Which files it expects to inspect or modify.
3. What validation steps it expects to run.
4. Any blockers, risks, or ambiguities.
5. Whether runtime changes are expected.

Implementation must wait for operator approval after that summary.

### Required Commands

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

### Required Browser and Inspection Checks

- Mobile viewport exactly `390x844`, or nearest available viewport with reason.
- Calendar selected-day populated row renders.
- Selected-day row edit control live-clicks successfully.
- Selected-day row delete control live-clicks successfully, or a safe confirm/cancel path is used and documented.
- Selected-day populated row has no horizontal overflow.
- Sprint 040 touch/accessibility expectations remain preserved, including practical 44px mobile control targets where applicable.

### Validation Mechanism Rules

Prefer no runtime change if existing safe local state can populate the selected-day row.

If existing state cannot reliably reproduce the row, use the smallest possible Calendar-only local/dev fixture. The expected query-param shape is:

```text
?trinaStateFixture=calendar-selected-day
```

Any fixture must be guarded from production behavior, avoid persistence unless existing component patterns require it, and remain isolated from normal Calendar behavior when the query parameter is absent.

### Scope Guard

Runtime files may only be changed after approval and only if required to support validation or fix a confirmed selected-day control issue.

Allowed runtime modification candidate:

- `components/CalendarView.tsx`

Inspect-only unless explicitly justified:

- `App.tsx`
- `components/Navigation.tsx`
- `components/Dashboard.tsx`
- `components/VoiceDashboard.tsx`
- `components/TasksView.tsx`
- `components/NotificationsView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`

Sprint 043 must not touch CEO Briefing files and must not create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Sprint 043 must not touch packages, dependencies, backend, Firebase, Supabase, native files, build config, release, deployment, environment, evidence, or generated FlutterFlow files.

### Planned Results Format

Record Sprint 043 results with:

- Validation path used: existing state or local/dev-only fixture.
- Runtime files changed, if any.
- Exact or nearest mobile viewport used.
- Edit control live-click result.
- Delete control live-click or safe confirm/cancel result.
- Horizontal overflow result.
- Sprint 040 touch/accessibility preservation result.
- Required command results.
- Protected scope confirmation.

### Sprint 043 Validation Results

Runtime changes:

- None.

Validation path:

- Used existing local Calendar state. No new fixture was needed.
- The selected date `2026-06-02` already had a populated selected-day row: `Parent Meeting`.
- A temporary local event named `Sprint 043 Delete Test` was created through the normal Calendar Add Event UI for safe delete validation, then deleted during the same browser session.

Browser smoke results:

- Browser validation ran through the in-app browser at measured viewport `351x729`, the nearest available viewport in this browser wrapper.
- Calendar selected-day populated row rendered for Tuesday, June 2, 2026.
- Edit control was live-clicked on `Parent Meeting`; the edit form opened and loaded the existing title into the title input without saving changes.
- Delete control was live-clicked on the temporary `Sprint 043 Delete Test` event; the temporary event was removed and the original `Parent Meeting` row remained visible.
- No horizontal overflow was observed. `documentElement.scrollWidth`, `documentElement.clientWidth`, `body.scrollWidth`, and `body.clientWidth` all measured `351`.
- Sprint 040 touch/accessibility expectations remained preserved for selected-day row controls: edit/delete controls measured `44x44`, with accessible labels such as `Edit Parent Meeting`, `Delete Parent Meeting`, `Edit Sprint 043 Delete Test`, and `Delete Sprint 043 Delete Test`.

Remaining caveats:

- Exact `390x844` viewport was not available in the in-app browser wrapper during this validation. The measured viewport used was `351x729`.

Protected scope:

- CEO Briefing stayed untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remained absent.
- No package, dependency, backend, Firebase, Supabase, native, build config, release, deployment, environment, evidence, generated FlutterFlow, or runtime source files were changed.

## Sprint 041 Validation - Empty, Error, and Loading State Hardening

### Purpose

Sprint 041 validates and, only if necessary, lightly hardens empty, fallback, unavailable, failed-action, loading, pending, and disabled-control states across the current non-CEO Trina app shell.

This sprint follows Sprint 040 mobile accessibility and touch-target hardening.

### Required Commands

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

### Required Browser and Inspection Checks

- Mobile viewport around `390x844`.
- Dashboard/Home reachable and fallback panels do not look broken.
- Tasks empty and filter states remain clear.
- Notifications empty and fallback states remain clear.
- Calendar empty selected day and event list states remain clear.
- Finance empty/history states remain clear.
- Knowledge Base no-documents and no-selected-source states remain clear.
- Patched controls have accessible names or clear visible text.
- No horizontal overflow.
- Sprint 040 mobile/touch improvements remain intact.

### Scope Guard

Sprint 041 must start with inspection and a Builder summary before runtime edits.

Runtime edits, if later approved, must stay inside the Sprint 041 component allowlist and must address confirmed empty, error, loading, unavailable, disabled, or fallback issues only.

Sprint 041 must not touch CEO Briefing files and must not create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Sprint 041 must not touch backend, Firebase, package, native, build, release, deployment, evidence, or generated FlutterFlow files.

Known non-blocking Vite warnings may be documented if unchanged from prior validation.

### Sprint 041 Validation Results

Runtime changes:

- `components/VoiceDashboard.tsx`: added visible Daily Snapshot failure feedback.
- `components/TasksView.tsx`: added visible Strategic Review failure feedback and clearer disabled empty-task insight title text.
- `components/FinanceView.tsx`: added visible Financial Analysis failure feedback and disabled invalid/non-positive finance submit states.
- `components/KnowledgeBaseView.tsx`: added visible voice-question failure feedback and visible delete-without-document-ID fallback error text.

Command results:

- `npm run lint`: Pass.
- `npm run build`: Pass, with known non-blocking Vite warnings about `services/authService.ts` mixed import chunking and large bundle size.
- `git diff --check`: Pass.
- `test ! -f references/flutterflow/sprint-009/ceo-briefing.png`: Pass.

Browser/manual smoke results:

- Browser/manual smoke was run near mobile size at measured viewport `351x729`.
- Notifications and Knowledge Base empty/fallback states were live-verified.
- Dashboard, Tasks, Finance, Calendar, Notifications, and Knowledge Base had no horizontal overflow live.
- Sprint 040 task row controls, Calendar event controls, Knowledge Base upload/voice controls, and bottom nav touch sizes were observed preserved.
- Knowledge Base voice failure and Finance disabled submit were live-tested.

Inspection-only or caveated results:

- Tasks, Finance, and Calendar true empty states were code-inspected because local seeded data existed.
- Daily Snapshot, Task Strategic Review, and Finance AI failure states were code-inspected.
- Some AI failure and true empty states were not live-reproduced.

Protected scope:

- CEO Briefing stayed untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remained absent.
- No backend, Firebase, package, native, build, release, deployment, or evidence files were changed.

## Sprint 040 - Mobile Accessibility and Touch Target Hardening

### Purpose

Sprint 040 validates and, only if necessary, lightly hardens mobile accessibility and touch usability across the current non-CEO Trina app shell.

This sprint follows the clean Sprint 038 smoke baseline and Sprint 039 forward-state selection.

### Required Commands

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

### Required Browser and Inspection Checks

- Mobile viewport around `390x844`.
- Bottom navigation touch usability and active state.
- Accessible names, labels, or titles for major controls.
- Keyboard/focus usability where practical.
- Task edit/delete controls remain visible and touch usable.
- Notifications empty, fallback, and fixture-backed states remain readable.
- Calendar, Finance, and Knowledge Base have no obvious mobile overflow or blocked controls.

### Scope Guard

Sprint 040 must start with inspection and a Builder summary before runtime edits.

Runtime edits, if later approved, must stay inside the Sprint 040 component allowlist and must address confirmed mobile/accessibility issues only.

Sprint 040 must not touch CEO Briefing files and must not create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Sprint 040 must not touch backend, Firebase, package, native, build, release, deployment, evidence, or generated FlutterFlow files.

### Sprint 040 Validation Results

Runtime changes:

- `components/TasksView.tsx`: added labels for strategic review close/back home and made task toggle/edit/delete 44px touch targets.
- `components/CalendarView.tsx`: made event edit/delete visible without hover and 44px; labeled empty-state add event.
- `components/FinanceView.tsx`: labeled financial analysis close and empty-state add entry.
- `components/KnowledgeBaseView.tsx`: labeled dismiss/audio/upload controls; made upload, voice question, and document delete controls 44px.

Confirmed issues:

- Calendar event edit/delete controls were hover-only, so they were not reliable on touch devices.
- Knowledge Base document delete was hover-only.
- Several icon-only/dismiss controls lacked accessible labels/titles.
- Mobile smoke confirmed undersized recurring touch targets: task row controls were 24-32px, Knowledge Base upload/voice controls were 34-36px. These were hardened to 44px where patched.

Command results:

- `npm run lint`: Pass.
- `npm run build`: Pass, with known non-blocking Vite warnings about `services/authService.ts` mixed import chunking and large bundle size.
- `git diff --check`: Pass.
- `test ! -f references/flutterflow/sprint-009/ceo-briefing.png`: Pass.

Browser smoke results:

- Mobile viewport around `390x844`: Pass for Dashboard, Tasks, Finance, Notifications fixture state, Calendar, and Knowledge Base with no horizontal overflow.
- Tasks patched target sizes: Pass. Task row controls were confirmed live at 44px.
- Knowledge Base patched target sizes: Pass. Upload and voice-question controls were confirmed live at 44px.
- Calendar event row actions: Verified by code inspection because the selected date had no event rows in the current local smoke data.

Protected scope:

- CEO Briefing stayed untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- No staging, commit, or push happened during implementation validation.

## Sprint 039 - Forward State and Next Runtime Priority Selection

### Purpose

Sprint 039 preserves the clean Sprint 038 smoke-test baseline and prepares the next focused runtime sprint.

This sprint is docs/planning only unless a documentation correction is required.

### Required Commands

```bash
git status --branch --short
git diff --name-only
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

### Required Review

The Builder must review:

- `planning/STATE.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `planning/DECISIONS.md`
- `docs/VALIDATION.md`
- Latest completed sprint folder
- Current Sprint 039 files

### Expected Result

- Repo state is understood.
- Sprint 038 clean baseline is preserved.
- No runtime files are changed.
- No protected files are touched.
- Next Sprint 040 direction is recommended.
- Any new risk, question, or decision is recorded only if discovered.

### Protected File Check

This must pass:

```bash
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

### Completion Standard

Sprint 039 is complete when:

- The clean `main` baseline is confirmed.
- Sprint 039 docs are created.
- `planning/STATE.md` reflects Sprint 039 status.
- `docs/VALIDATION.md` records Sprint 039 validation rules.
- Builder recommends one focused Sprint 040 direction.
- No implementation work has started.

## Sprint 038 - Core App Smoke Test and Forward Runtime Polish

### Purpose

Sprint 038 validates the current core app after Sprint 037 fixture regression validation.

The sprint confirms core flows still work and allows only narrow runtime polish tied to concrete smoke-test findings.

### Required Commands

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

### Manual Smoke Checks

- Dashboard/Home reachable.
- Assistant / Voice Entry reachable from Dashboard.
- Assistant typed task capture creates a visible task.
- Tasks view renders created task.
- Notifications reachable.
- Notifications fallback/empty state readable without fixture.
- Reminder-backed notification visible with `?trinaReminderFixture=1`.
- Direct Notifications start works with `?trinaReminderFixture=1&trinaStart=notifications`.
- Dashboard badge count aligns with Notifications list.
- Bottom nav active state works.
- Calendar reachable.
- Finance reachable.
- Knowledge Base reachable.
- Mobile viewport around `390x844` has no fixed bottom-nav overlap.

### Scope Guard

Sprint 038 must not touch CEO Briefing files and must not create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Sprint 038 must not touch backend, Firebase, package, native, build, release, or deployment files.

### Sprint 038 Validation Results

Date: 2026-06-01

Runtime changes: none.

Command results:

- `npm run lint`: Pass. TypeScript completed with exit code 0.
- `npm run build`: Pass. Vite production build completed with known non-blocking warnings about `services/authService.ts` mixed static/dynamic import chunking and the large production JavaScript chunk.
- `git diff --check`: Pass. No whitespace errors reported.
- `test ! -f references/flutterflow/sprint-009/ceo-briefing.png`: Pass. CEO Briefing screenshot evidence remains absent.

Browser smoke results:

- Dashboard/Home loaded and displayed the main Barbie dashboard, Daily Snapshot action, Assistant voice/text fallback, quick actions, and bottom navigation.
- Assistant / Voice Entry was reachable from Dashboard through the visible microphone/text fallback controls.
- Typed Assistant task capture created a local task and opened Tasks.
- Tasks rendered the created smoke-test task.
- Notifications opened from navigation and showed readable blocked-browser-notification fallback and empty-state copy without the fixture.
- Calendar opened and rendered the June 2026 calendar view with existing event content.
- Finance opened and rendered the Financial Snapshot view.
- Knowledge Base opened and rendered the empty Knowledge Base state.
- Bottom navigation active state worked, including `aria-current="page"` on the active Notifications tab during the Notifications check.
- Mobile viewport around `390x844` had no horizontal overflow and no fixed bottom-nav overlap of the Notifications empty-state content, Back Home control, or notification-center footer.

Fixture results:

- `/?trinaReminderFixture=1`: Pass. Dashboard/Home loaded with a `1` Notifications badge.
- `/?trinaReminderFixture=1` then opening Notifications: Pass. Notifications rendered `Fixture reminder`, `Local validation reminder for Sprint 036.`, and the `Reminder` status pill.
- `/?trinaReminderFixture=1&trinaStart=notifications`: Pass. Direct Notifications start opened the populated fixture notification view.

Known warnings and caveats:

- Build warnings are pre-existing and non-blocking for Sprint 038.
- Browser notification permission was blocked in the local session, but in-app fallback copy remained readable and the fixture-backed notification path passed.
- No new risks, questions, decisions, architecture changes, or API changes were discovered.

## Sprint 024 Validation Plan

Sprint 024 validation proves that the visible non-CEO app shell can be used without obvious broken paths.

## Sprint 024 Implementation Notes

Runtime implementation is limited to approved non-CEO shell stabilization files.

Implemented stabilization:

- Mounted the existing bottom navigation shell so visible non-CEO paths are reachable outside the Dashboard quick buttons.
- Aligned bottom navigation targets to Home, Tasks, Finance, Calendar, Notifications, and Context.
- Included pending reminders in the Notifications view so reminder paths render in the visible notification center.
- Guarded browser reminder notification creation so unsupported, blocked, denied, or throwing notification states do not crash the app.
- Hardened reminder time parsing so invalid reminder timestamps are treated as unavailable instead of invalid dates.

CEO Briefing remains deferred and no screenshot evidence is required or created for Sprint 024.

## Sprint 024 Validation Results

Date: 2026-05-31

### Commands Run

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
```

### Command Results

- `npm run lint`: Pass. TypeScript completed with exit code 0.
- `npm run build`: Pass. Vite production build completed.
- `git diff --check`: Pass. No whitespace errors reported.
- `git status --branch --short`: Reported in Sprint 024 closeout.

### Build Warnings

- Vite still reports the pre-existing mixed static/dynamic import warning for `services/authService.ts`.
- Vite still reports the production JavaScript chunk is larger than the default 500 kB warning threshold.

### Manual Browser Smoke Test

Local URL:

```text
http://127.0.0.1:3000/
```

Observed results:

- Dashboard loads without runtime errors.
- Bottom navigation renders and routes to Home, Tasks, Finance, Calendar, Alerts, and Context.
- Dashboard quick buttons for Finance, Tasks, Brain Dump, Calendar, Knowledge Base, and Notifications remain visible.
- Assistant/voice entry renders on Dashboard. Microphone click opens the browser microphone permission prompt without crashing, and text fallback remains visible.
- Tasks screen renders and shows existing task data.
- Finance screen renders and shows the existing financial snapshot.
- Calendar screen renders and shows the calendar grid and empty-state handling for the selected date.
- Notifications/reminders screen renders with a clear empty state when no active notifications are present.
- Context / Knowledge Base renders as the current settings-equivalent/context path and shows a clear empty state.
- Browser reminder notification creation is guarded in code so unsupported, denied, blocked, or throwing browser notification states do not crash the app.

### Acceptance Status

Sprint 024 acceptance criteria passed for the current visible non-CEO app shell.

Remaining follow-up:

- No automated browser test exists for due-reminder delivery timing or real browser notification permission permutations.
- A future sprint should choose the next feature-complete target: Assistant/voice entry, Tasks/notifications workflow, or Dashboard navigation polish.

## Required Commands

Run:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
```

If any command is unavailable or fails because of pre-existing issues, document:

1. The exact command.
2. The result.
3. Whether the failure is caused by Sprint 024 changes or pre-existing project state.
4. The recommended follow-up.

## Sprint 025 Planning/Docs Cleanup Validation

Sprint 025 uses docs-safe validation only:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Sprint 025 validation must also confirm:

- Changed files stay within planning/docs/reference/architect-pack surfaces.
- CEO Briefing remains deferred and non-blocking.
- No screenshot evidence is created.
- No runtime app code, Firebase, backend, Hermes, package, native, release, build, or export files are modified.

## Sprint 026 Assistant Flow Stabilization Validation

Sprint 026 starts with an apply-pack/docs-only checkpoint before runtime implementation.

Apply-pack validation uses docs-safe checks only:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Implementation validation, after explicit approval, should run the safe project checks that exist in this repo:

```bash
npm run lint
npm run build
```

Manual implementation smoke checks should verify:

1. Dashboard or navigation exposes the Assistant / voice entry path.
2. The user can reach a task/reminder capture surface.
3. Empty input is handled safely.
4. A created or simulated task/reminder is visible in Tasks, Notifications, reminders, or the relevant local surface.
5. The user can return to the main app surface without a dead end.
6. Notifications/reminders remain safe when browser notification permission is unavailable, blocked, denied, or unsupported.
7. CEO Briefing remains deferred, non-blocking, out of scope, and without screenshot evidence.

Do not create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

## Sprint 036 - Reminder Validation Fixture and Notification Empty-State Hardening

Sprint 036 validates the populated reminder-backed notification path that Sprint 035 could only inspect by code because no live pending Firestore reminder existed in the local browser session.

Required validation:

- `npm run lint`
- `npm run build`
- `git diff --check`
- `test ! -f references/flutterflow/sprint-009/ceo-briefing.png`
- `git status --branch --short`

Browser/manual validation:

- Dashboard/Home remains reachable.
- Notifications remains reachable.
- Notifications empty/fallback state remains readable.
- A populated reminder-backed notification item can be seen through a safe local validation path.
- Dashboard notification count and Notifications rendering remain aligned.
- Assistant typed task capture still creates a visible task.
- Tasks view still renders created tasks.
- Bottom navigation active state still works.
- Mobile viewport around `390x844` has no fixed bottom-nav overlap.

If a fixture/helper is added, it must be local-only, easy to remove, and must not require backend, Firebase rules, package, native, build, release, or deployment changes.

### Sprint 036 Local Reminder Fixture

For local browser validation only, start the dev server and open:

```text
http://127.0.0.1:3000/?trinaReminderFixture=1
```

To open directly on the populated Notifications view for repeatable proof, use:

```text
http://127.0.0.1:3000/?trinaReminderFixture=1&trinaStart=notifications
```

The query parameters are ignored outside non-production runtime. `trinaReminderFixture=1` injects one local pending reminder with `type: reminder` into the existing `pendingReminders -> notificationItems -> Dashboard/Notifications` path. `trinaStart=notifications` only changes the initial local view when the reminder fixture is enabled. The fixture does not write to Firestore, localStorage, backend services, Firebase rules, native files, package files, build files, release files, or deployment config.

Expected browser proof:

- The Dashboard Notifications badge count includes the fixture reminder.
- Opening Notifications shows a populated card titled `Fixture reminder`.
- The card has the `Reminder` pill and uses the existing reminder styling.
- Removing the query parameter restores normal live-data behavior.

## Sprint 037 — Fixture Guard and Core Regression Validation

Sprint 037 validates that the Sprint 036 local reminder notification fixture remains safe, repeatable, and limited to local validation.

### Local fixture paths

Dashboard badge proof:

```text
/?trinaReminderFixture=1
```

Direct populated Notifications proof:

```text
/?trinaReminderFixture=1&trinaStart=notifications
```

Expected populated notification content:

- `Fixture reminder`
- `Local validation reminder for Sprint 036.`
- `Reminder` pill

### Empty state proof

Open Notifications without `trinaReminderFixture=1` and confirm the empty/fallback copy remains readable.

### Core regression checks

- Dashboard/Home reachable.
- Notifications reachable.
- Dashboard notification count aligns with the Notifications list when fixture is active.
- Assistant typed task capture creates a visible task.
- Tasks view renders created tasks.
- Bottom nav active state works.
- Mobile viewport around `390x844` has no fixed bottom-nav overlap.

### Required commands

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

## Sprint 035 - Notification Reminder Flow Hardening

Sprint 035 validates the notification and reminder experience after the recent task-flow work.

### Required Commands

Run before closeout:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git status --branch --short
```

### Browser Validation Checklist

Validate:

- Dashboard/Home remains reachable.
- Bottom navigation remains reachable and visually stable.
- Assistant remains reachable from the app flow.
- Notifications view opens from navigation.
- Empty Notifications state is clear and not broken.
- Notification/reminder items render without layout breakage.
- Notification counts or badges do not show stale or impossible values.
- Task-created reminder-related notices, if present in the current app, remain visible and understandable.
- Notification UI remains usable on mobile viewport.
- Fixed bottom navigation does not overlap critical notification content.
- Existing task flow from Sprint 034 remains intact enough to support reminder/notification validation.

### Protected Validation

Confirm:

```bash
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Do not validate by creating CEO Briefing screenshot evidence.

### Non-Blocking Known Build Warnings

Existing Vite warnings about mixed static/dynamic imports or chunk size are non-blocking unless Sprint 035 introduces a new build failure or acceptance failure.

### Sprint 035 Validation Results

Date: 2026-06-01

Runtime changes: none.

Browser validation confirmed:

- Dashboard/Home loaded and exposed the Notifications path.
- Notifications opened from bottom navigation.
- Notifications active navigation state was correct.
- Empty Notifications state was clear and readable.
- Browser notification blocked fallback copy was shown clearly.
- Mobile Notifications viewport remained usable at 390x844.
- Fixed bottom navigation did not overlap the empty-state copy, Back Home control, or notification-center footer.
- Assistant typed task capture still created a visible task and opened Tasks.
- Notifications remained empty after local task capture, which matches the current wiring because captured local tasks are not notification items.

Code inspection confirmed:

- Dashboard notification badge count uses `notificationItems.length`.
- Notifications view renders the same `notificationItems` array.
- `notificationItems` is composed from pending Firestore reminders plus local event-window notifications.
- Pending reminder items map through `getReminderTime()` and render with title, message, date/time, and `Reminder` status copy.
- Event notifications render only inside the local due window.

Known validation caveat:

- No live pending Firestore reminder was present in the local browser session, so populated Firestore reminder item behavior was validated by code inspection rather than live reminder delivery.

### Sprint 035 Command Results

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git status --branch --short
```

Results are recorded in the Sprint 035 closeout report.

## Sprint 032 - Browser Smoke, Accessibility, and Device Validation

Sprint 032 validates the current Trina app shell after Sprint 031 accessibility polish.

This is a validation sprint, not a broad implementation sprint.

### Required Automated Checks

Run:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
git diff --name-only
git diff --cached --name-only
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Expected result:

- lint passes
- build passes or only known existing Vite warnings remain
- diff check passes
- staged files are empty unless explicitly approved later
- CEO Briefing screenshot file remains absent

### Browser Smoke Checks

Validate in the available browser environment:

1. Dashboard / Home loads.
2. Bottom navigation reaches all active app areas.
3. Assistant / Voice Entry is reachable from Dashboard/Home.
4. Tasks is reachable from navigation.
5. Notifications is reachable from navigation.
6. Calendar is reachable from navigation.
7. Finance is reachable from navigation.
8. Knowledge Base is reachable from navigation.
9. Home/back controls return to expected locations.
10. No blank screen or broken route appears during core navigation.

### Task Flow Checks

Validate:

1. Typed Assistant input can create a visible task.
2. Empty Assistant input does not create a bad task.
3. Created task appears in Tasks.
4. Task complete/incomplete toggle remains usable.
5. Existing task local behavior is preserved.
6. No storage or persistence architecture is changed.

### Speech Capture Checks

Validate live if microphone permission is available:

1. Microphone control is visible and labeled.
2. Starting speech capture does not break Assistant.
3. Stopping speech capture does not break Assistant.
4. Speech capture path appears preserved.

If live microphone testing is blocked:

- Document the browser/device/permission blocker.
- Inspect relevant code path only.
- Do not rewrite speech capture.

### Accessibility / Touch Checks

Validate where practical:

1. Icon-only controls have meaningful accessible names.
2. Buttons with added titles/labels remain visually unchanged.
3. Date buttons describe selected/current/event-count context where applicable.
4. Edit/delete controls remain discoverable enough for browser users.
5. Touch/mobile emulation does not hide critical controls.
6. Focus order does not trap the user in core views.
7. Form open/close/cancel controls are understandable.
8. Audio controls are labeled clearly.

### Protected Scope Validation

Confirm:

```bash
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Also confirm no files were changed in:

- FlutterFlow export
- Firebase
- Hermes
- backend
- auth
- database
- live AI
- package/dependencies
- native/build/release/deployment
- CEO Briefing

### Sprint 032 Validation Results

Date: 2026-06-01

Sprint 032 closed as validation/reporting only. No runtime fix was made.

Automated validation passed:

- `npm run lint`: Pass.
- `npm run build`: Pass with known existing Vite warnings for mixed static/dynamic `services/authService.ts` import and a production JavaScript chunk larger than the default 500 kB warning threshold.
- `git diff --check`: Pass.
- `git status --branch --short`: Clean.
- `git diff --name-only`: Empty before closeout docs updates.
- `git diff --cached --name-only`: Empty.
- `test ! -f references/flutterflow/sprint-009/ceo-briefing.png`: Pass.

Browser validation results:

- Dashboard/Home loaded.
- Bottom navigation reached Tasks, Finance, Calendar, Notifications, and Knowledge Base.
- Assistant / Voice Entry remained reachable.
- Typed Assistant input created a visible task.
- Empty Assistant input kept capture disabled.
- Created task appeared in Tasks.
- Task complete/incomplete toggle remained usable.
- Knowledge Base loaded after a coordinate click fallback when browser automation timed out on the semantic nav locator.
- Browser microphone validation was blocked by browser permission denial; speech capture was not rewritten.

Confirmed issue:

- Task edit/delete controls are missing from the Tasks UI.
- Task edit/delete acceptance is not satisfied.
- `components/TasksView.tsx` renders task toggle, title, priority, and deadline, but no edit/delete controls.
- The visible props inspected expose `onAddTask` and `onUpdateTask`; no delete handler appears available.
- No runtime fix was made.

Sprint 033 candidate:

- Add explicit accessible task edit/delete controls.
- Add or confirm delete plumbing from parent state.
- Preserve typed Assistant task capture.
- Preserve task toggle behavior.
- Preserve existing task display.
- Keep CEO Briefing untouched.

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

## Sprint 033 Accessible Task Edit/Delete Controls Validation

Sprint 033 starts with a planning/docs application checkpoint before runtime implementation. The apply-pack step must not modify runtime app files.

### Planning/Docs Checkpoint Commands

Run:

```bash
git diff --check
git status --branch --short
git diff --name-only
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Required planning/docs outcome:

- Sprint 033 planning folder exists.
- Sprint 033 `requirements.md`, `blueprint.md`, `acceptance.md`, and `handoff-prompt.md` exist.
- `planning/STATE.md` points to Sprint 033 as the current planning checkpoint.
- Runtime app files remain unchanged.
- `components/TasksView.tsx` remains unchanged during planning/docs application.
- `App.tsx` remains unchanged during planning/docs application.
- CEO Briefing remains deferred and untouched.
- No CEO Briefing screenshot evidence is created.

### Implementation Commands After Approval

After explicit runtime approval, run:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

### Browser Validation After Approval

Run the local app with:

```bash
npm run dev
```

Validate:

1. Dashboard/Home loads.
2. Bottom navigation reaches Dashboard/Home, Assistant, Tasks, Notifications, Calendar, Finance, and Knowledge Base.
3. Typed Assistant task capture creates a visible task.
4. Empty Assistant input cannot be captured or sent.
5. Existing task toggle behavior still works.
6. Each visible task has an Edit control in the DOM.
7. Each visible task has a Delete control in the DOM.
8. Edit can be opened, saved, and canceled.
9. Save updates the existing task instead of creating a duplicate.
10. Cancel leaves the task unchanged.
11. Delete removes the task from the visible list.
12. Edit/delete controls are keyboard reachable where practical.
13. Edit/delete controls are touch usable in responsive/mobile emulation where practical.
14. Edit/delete controls and Save/Cancel controls have accessible names.
15. CEO Briefing remains untouched and `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

### Sprint 033 Validation Results

Date: 2026-06-01

Automated validation:

- `npm run lint`: Pass.
- `npm run build`: Pass with known existing Vite warnings for mixed static/dynamic `services/authService.ts` import and a production JavaScript chunk larger than the default 500 kB warning threshold.
- `git diff --check`: Pass.
- `test ! -f references/flutterflow/sprint-009/ceo-briefing.png`: Pass.

Browser validation:

- Dashboard/Home loaded.
- Bottom navigation reached Home, Tasks, Finance, Calendar, Notifications, and Knowledge.
- Assistant / Voice Entry remained reachable from Home.
- Empty Assistant input kept Capture and Send disabled.
- Typed Assistant capture created a visible task.
- Existing task filters kept the new task visible under All Tasks and To Do.
- Each visible task had explicit Edit and Delete controls in the DOM.
- Edit/Delete controls had accessible labels and were keyboard reachable as native buttons.
- Edit opened inline title editing for the selected task.
- Save updated the same task without creating a duplicate.
- Cancel left the task unchanged.
- Enter saved while editing.
- Escape canceled while editing.
- Existing task toggle still worked.
- Delete used a native confirmation prompt.
- Confirmed delete removed the task from the visible list.
- Cancel-delete behavior was verified by code inspection of the native confirm guard; browser automation accepted the native confirm dialog during live interaction.
- Responsive/mobile viewport validation at 390x844 showed task controls remained present.

Implementation note:

- Browser validation found bottom-row task controls could be overlapped by the fixed bottom navigation before normal scroll targeting. Sprint 033 added bottom padding to the task list so controls remain reachable.

Protected scope:

- CEO Briefing stayed untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remained absent.
- No FlutterFlow, Firebase, backend, Hermes, package/dependency, native, build, release, generated, or deployment files were modified.

## Sprint 034 - Task Flow Regression Hardening Validation

Sprint 034 starts with a planning/docs application checkpoint before runtime implementation. The apply-pack step must not modify runtime app files.

### Planning/Docs Checkpoint Commands

Run:

```bash
git diff --check
git status --branch --short
git diff --name-only
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Required planning/docs outcome:

- Sprint 034 planning folder exists.
- Sprint 034 `requirements.md`, `blueprint.md`, `acceptance.md`, and `handoff-prompt.md` exist.
- `planning/STATE.md` points to Sprint 034 as the current planning checkpoint.
- Runtime app files remain unchanged.
- CEO Briefing remains deferred and untouched.
- No CEO Briefing screenshot evidence is created.

### Implementation Commands After Approval

After explicit runtime approval, run:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git status --branch --short
```

### Browser Validation After Approval

Validate:

1. Dashboard/Home loads.
2. Bottom navigation reaches core sections.
3. Assistant / Voice Entry remains reachable.
4. Typed Assistant capture creates a visible task.
5. Empty Assistant input remains safe.
6. Task list renders existing tasks.
7. Task completion toggle works.
8. Task filters work after adding, editing, completing, and deleting tasks.
9. Empty states remain accurate for no tasks and filtered-out tasks.
10. Existing Edit control remains visible, keyboard reachable, and accessible.
11. Existing Delete control remains visible, keyboard reachable, and accessible.
12. Edit opens inline editing for the same task.
13. Save updates the same task without creating a duplicate.
14. Cancel leaves the task unchanged.
15. Enter saves where supported.
16. Escape cancels where supported.
17. Delete prompts before removal.
18. Confirmed delete removes the task.
19. Cancelled delete leaves the task unchanged where browser validation allows.
20. Mobile/responsive view keeps task controls visible and touch usable.
21. Bottom-row task controls are not blocked by fixed bottom navigation.
22. CEO Briefing evidence remains absent.

### Sprint 034 Validation Results

Date: 2026-06-01

Runtime changes:

- No runtime code changes were needed.
- Static inspection found the existing task flow still owned task state in `App.tsx`, rendered task controls in `components/TasksView.tsx`, and preserved typed Assistant capture through `components/VoiceDashboard.tsx`.

Automated validation:

- `npm run lint`: Pass.
- `npm run build`: Pass with known existing Vite warnings for mixed static/dynamic `services/authService.ts` import and a production JavaScript chunk larger than the default 500 kB warning threshold.
- `git diff --check`: Pass.
- `test ! -f references/flutterflow/sprint-009/ceo-briefing.png`: Pass.
- `git status --branch --short`: Reported in Sprint 034 closeout.

Browser validation:

- Dashboard/Home loaded.
- Bottom navigation reached Home, Tasks, Finance, Calendar, Notifications, and Knowledge.
- Assistant / Voice Entry remained reachable.
- Empty Assistant input kept Capture disabled.
- Typed Assistant capture created a visible task and opened Tasks.
- Task list rendered existing tasks.
- All Tasks and To Do filters showed the captured task.
- High Priority filter hid the medium-priority captured task.
- Empty/filter state remained coherent.
- Existing Edit and Delete controls were visible and actionable.
- Edit opened inline editing.
- Escape canceled editing.
- Cancel left the task unchanged.
- Enter saved the edited title.
- Save updated the same task without keeping the canceled draft.
- Task complete toggle removed the task from To Do.
- All Tasks showed the completed task.
- Task incomplete toggle restored the to-do state.
- Mobile viewport validation showed Edit/Delete controls visible and the Edit control click usable.
- Mobile screenshot review showed task controls visible above the fixed bottom navigation.

Delete behavior:

- `components/TasksView.tsx` keeps delete behind a native `window.confirm`.
- The cancel path returns before `onDeleteTask`.
- The confirm path calls `onDeleteTask(task.id)`.
- `App.tsx` handles delete through `Storage.deleteTask(taskId)` followed by `setTasks(Storage.getTasks())`.
- Native confirm accept/dismiss could not be automated through the current in-app browser wrapper, so delete confirm/cancel behavior was validated by code inspection.

Protected scope:

- CEO Briefing stayed untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remained absent.
- No backend, Firebase, Hermes, package/dependency, native, build, release, deployment, FlutterFlow export, auth, database, or live AI files were modified.

## Sprint 028 Closeout and Forward-State Validation

Sprint 028 is a planning/docs cleanup and forward-state correction sprint. It must not start runtime implementation.

Run:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Required validation outcome:

- No runtime files changed.
- No CEO Briefing screenshot exists.
- No FlutterFlow export exists.
- Bad `.md.md` Sprint 028 file is removed.
- Tracked Sprint 023 Architect Pack is restored if it was deleted.
- Correct Sprint 028 pack exists with a single `.md` extension.
- Sprint 028 folder contains `requirements.md`, `blueprint.md`, `acceptance.md`, and `handoff-prompt.md`.

## Sprint 029 Core App Navigation and Empty-State Polish Validation

Sprint 029 starts with an apply-pack docs/planning step before runtime implementation. The apply-pack step must not modify runtime app files.

Apply-pack validation uses docs-safe checks only:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Required apply-pack outcome:

- Sprint 029 planning folder exists.
- Sprint 029 `requirements.md`, `blueprint.md`, `acceptance.md`, and `handoff-prompt.md` exist.
- `planning/STATE.md` points to Sprint 029 as the active planning/docs application step.
- Runtime app files remain unchanged.
- CEO Briefing remains deferred and untouched.
- No CEO Briefing screenshot evidence is created.
- Sprint 023 app-completion reset remains protected.

Implementation validation, after explicit approval, should run:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Manual implementation smoke checks should verify:

1. Dashboard/Home loads without runtime errors.
2. Bottom navigation routes to Home, Tasks, Notifications, Calendar, Finance, and Knowledge / Knowledge Base as currently named.
3. Active bottom navigation state matches the visible destination.
4. Dashboard exposes Assistant / Voice Entry.
5. Typed Assistant capture saves a task and opens or updates Tasks visibility.
6. Speech transcript capture still follows the existing capture path if browser support is present.
7. Tasks shows captured items.
8. Tasks empty state is useful when no tasks exist.
9. Notifications empty/fallback state is useful when no notifications exist or browser notifications are unavailable.
10. Calendar empty/fallback state is useful when no events exist.
11. Finance empty/fallback state is useful when live/real data is unavailable.
12. Knowledge Base empty/fallback state is useful when no context has been added.
13. Return-to-Dashboard/Home paths work from primary screens.
14. CEO Briefing remains deferred and is not part of the validation pass.

Sprint 029 implementation target:

- Bottom navigation keeps Home, Tasks, Finance, Calendar, Notifications, and Knowledge reachable with clearer active state styling.
- Dashboard keeps Assistant / Voice Entry reachable.
- Typed Assistant capture continues to save local tasks and open Tasks.
- Existing speech transcript capture continues to use the same local task path when browser support is present.
- Tasks, Notifications, Calendar, Finance, and Knowledge Base provide clearer empty or fallback copy.
- Return-to-Dashboard/Home affordances remain available from primary screens.
- CEO Briefing remains untouched and deferred.

## Sprint 030 Lightweight UI Smoke Coverage and Label Consistency Validation

Sprint 030 starts with an apply-pack docs/planning step before runtime or smoke implementation. The apply-pack step must not modify runtime app files.

Apply-pack validation uses docs-safe checks only:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Required apply-pack outcome:

- Sprint 030 planning folder exists.
- Sprint 030 `requirements.md`, `blueprint.md`, `acceptance.md`, and `handoff-prompt.md` exist.
- `planning/STATE.md` points to Sprint 030 as the active planning/docs application step.
- Runtime app files remain unchanged.
- CEO Briefing remains deferred and untouched.
- No CEO Briefing screenshot evidence is created.
- Sprint 023 app-completion reset remains protected.

Implementation validation, after explicit approval, should run:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Validate manually or with lightweight existing tooling:

1. Dashboard/Home is reachable.
2. Bottom navigation reaches:
   - Tasks
   - Finance
   - Calendar
   - Notifications
   - Knowledge Base / Knowledge
   - Home
3. Active bottom navigation state is visible and accurate.
4. Assistant / Voice Entry is reachable from Dashboard.
5. Typed Assistant capture creates a task.
6. Captured task appears in Tasks.
7. Empty/fallback states remain clear for:
   - Tasks
   - Notifications
   - Calendar
   - Finance
   - Knowledge Base
8. Knowledge Base naming is consistent:
   - Use `Knowledge Base` for full feature copy.
   - Use `Knowledge` only where compact nav labels are required.
   - Do not use `Context` as the user-facing label unless future scope changes it.
9. Speech capture path is verified in one of two ways:
   - Live-tested with microphone permission granted, or
   - Preserved by code inspection with a clear note that local browser permission prevented live testing.

Protected validation:

- CEO Briefing remains deferred.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- Do not mark CEO Briefing evidence complete.

## Sprint 031 Core App Polish and Task-Flow Hardening Validation

Sprint 031 starts with an apply-pack docs/planning step before runtime implementation. The apply-pack step must not modify runtime app files.

Apply-pack validation uses docs-safe checks only:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Required apply-pack outcome:

- Sprint 031 planning folder exists.
- Sprint 031 `requirements.md`, `blueprint.md`, `acceptance.md`, and `handoff-prompt.md` exist.
- `planning/STATE.md` points to Sprint 031 as the active planning/docs application step.
- Runtime app files remain unchanged.
- CEO Briefing remains deferred and untouched.
- No CEO Briefing screenshot evidence is created.
- Sprint 023 app-completion reset and Sprint 030 smoke-validation baseline remain protected.

Before implementation, Builder must read the required planning/docs stack and summarize:

1. What Sprint 031 is supposed to accomplish.
2. Which files it expects to modify.
3. What tests or validation it will run.
4. Any blockers or ambiguities.
5. How it will protect CEO Briefing deferral.
6. How it will avoid unrelated runtime, backend, Firebase, Hermes, package, native, build, release, deployment, auth, database, live AI, and FlutterFlow export files.

Implementation validation, after explicit approval, should run:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
git diff --name-only
git diff --cached --name-only
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Manual implementation smoke checks should verify:

1. Home / Dashboard is reachable.
2. Bottom navigation works and active state is visible.
3. Assistant / Voice Entry is reachable.
4. Typed Assistant capture creates a task.
5. Captured task is visible in Tasks.
6. Speech capture path is preserved by live test when microphone permission is available, or by code inspection when permission is blocked.
7. Notifications copy remains consistent.
8. Knowledge Base label consistency remains correct.
9. Calendar and Finance empty states remain understandable.
10. CEO Briefing remains untouched, deferred, and absent from required validation.

### Sprint 030 Implementation Notes

Sprint 030 inspection found no existing web UI, browser, component, or smoke-test script in `package.json`. The only available repo validation scripts are `npm run lint`, `npm run build`, and Vite preview/dev commands; the only discovered test file is the native Android example unit test. No package or dependency files were changed.

Automated smoke coverage was not added because the repo does not currently include clean web smoke-test tooling and Sprint 030 forbids dependency churn. The lightweight repeatable smoke path for this sprint is the manual checklist below plus code inspection for capture wiring.

Confirmed label alignment:

- Bottom navigation uses compact `Knowledge`.
- Dashboard and the Knowledge screen use full `Knowledge Base`.
- Notifications user-facing copy uses `Notifications`, not `Alerts`.
- No runtime user-facing `Context` label was found in the current app shell.

Confirmed capture preservation by code inspection:

- Typed Assistant capture in `components/VoiceDashboard.tsx` calls `captureLocalTask(typedMessage, 'typed')`.
- `captureLocalTask` calls the `onAssistantCapture` prop.
- `App.tsx` handles `onAssistantCapture` through `handleAssistantCapture`, which saves with `Storage.addTask(...)`, updates local task state, shows a confirmation toast, and routes to `AppMode.TASKS`.
- Speech recognition results in `components/VoiceDashboard.tsx` still call `captureLocalTask(transcript, 'voice')`, preserving the same transcript-to-task path.

Live speech capture remains environment-dependent because it requires a browser/device with microphone permission granted. If local browser permission is denied or unavailable, document the limitation and preserve the existing speech path by inspection rather than rewriting microphone behavior.

### Sprint 030 Manual Smoke Checklist

Use the current local app shell after running the required command validation:

1. Open the app locally with `npm run dev` or an equivalent approved local preview.
2. Confirm Dashboard/Home loads without runtime errors.
3. Confirm bottom navigation reaches Home, Tasks, Finance, Calendar, Notifications, and Knowledge.
4. Confirm active bottom navigation state is visible and matches the current surface.
5. Confirm Dashboard quick actions expose Finance, Tasks, Brain Dump, Calendar, Knowledge Base, and Notifications.
6. Confirm Assistant / Voice Entry is visible on Dashboard.
7. Type a task into the Assistant input and press Capture.
8. Confirm the app opens Tasks and the captured task is visible.
9. Confirm empty/fallback states remain clear for Tasks, Notifications, Calendar, Finance, and Knowledge Base.
10. Confirm Knowledge Base naming follows the product rule: `Knowledge Base` for full copy and `Knowledge` only for compact nav.
11. Confirm Notifications copy uses `Notifications`, not `Alerts`.
12. Test speech capture only in a browser/device where microphone permission can be granted. If permission is denied or unavailable, record that live speech capture was not completed and that the transcript-to-task path was preserved by code inspection.
13. Confirm CEO Briefing remains deferred and is not part of the smoke pass.
14. Confirm `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

## Sprint 026 Implementation Notes

Implemented validation target:

- Dashboard Assistant text input can capture a local task without requiring live AI.
- Browser speech recognition transcript capture uses the same local task path when microphone support is available.
- Captured Assistant tasks are saved through the existing local task storage path and the app opens Tasks for visibility.
- Tasks empty state points users back to Assistant capture or the task add button.
- Notifications empty/fallback copy makes clear that browser notification support can be unavailable or blocked while in-app capture still works.

Sprint 026 validation must confirm:

```bash
npm run lint
npm run build
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Expected manual smoke result:

- Dashboard loads.
- Assistant capture is visible from Dashboard.
- Empty Assistant input cannot be captured or sent.
- Capture saves a local task and opens Tasks.
- The captured task appears in Tasks.
- Back navigation or bottom Home returns to Dashboard.
- Notifications remains usable when browser notifications are unsupported or denied.
- CEO Briefing remains deferred and untouched.

## Manual Smoke Test

After implementation, manually check these paths in the browser:

1. Dashboard loads without runtime errors.
2. Dashboard navigation cards/buttons route to intended non-CEO views.
3. Assistant and/or voice entry opens or shows an intentional placeholder.
4. Tasks screen renders without runtime errors.
5. Finance screen renders without runtime errors or clearly shows placeholder state.
6. Calendar screen renders without runtime errors or clearly shows placeholder state.
7. Notifications/reminders screen renders without runtime errors.
8. Reminder popup/notification behavior does not crash when permissions are unavailable, blocked, or not yet granted.
9. Settings-equivalent path renders or is clearly handled.
10. CEO Briefing remains deferred and is not treated as required pass evidence.

## Evidence Rules

Sprint 024 does not require screenshot evidence.

Do not create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Do not treat absent CEO Briefing screenshot evidence as a Sprint 024 failure.

## Sprint 023 App Completion Forward Build Validation

Sprint 023 uses docs-safe validation only:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png || echo "Review screenshot manually before treating as pass evidence"
```

Sprint 023 validation must also confirm:

- Sprint 023 planning files exist.
- Changed files stay inside the Architect Pack allowlist.
- CEO Briefing is deferred and not reopened as active implementation work.
- No runtime app code, generated FlutterFlow export code, Firebase, Hermes, backend, package/native, build, release, deploy, or screenshot evidence files are changed.

## Sprint 016 Planning/Docs Validation

Sprint 016 uses docs-safe validation only:

```bash
git diff --check
git status --branch --short
```

Sprint 016 validation must also confirm:

- `planning/sprints/016-flutterflow-functional-app-stabilization/` exists.
- The Sprint 016 requirements, blueprint, acceptance, and handoff prompt files exist.
- Changed files stay inside the Sprint 016 planning/docs/evidence-note allowlist.
- CEO Briefing evidence remains deferred unless a real FlutterFlow screenshot exists.
- No placeholder `references/flutterflow/sprint-009/ceo-briefing.png` is created.
- No runtime app code, generated FlutterFlow export code, Firebase, Hermes, backend, package/native, build, or release files are changed.

## Sprint 017 FlutterFlow Final Prototype Evidence Validation

Sprint 017 is a docs/planning-only readiness checkpoint. It defines what must be checked before Trina is treated as having final FlutterFlow prototype evidence.

### Required Checks

```bash
git diff --check
git status --branch --short
git diff --name-only
git diff --stat
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

### Screen Validation Matrix

| Screen | Required? | Evidence Required | Status | Notes |
|---|---:|---|---|---|
| Dashboard / Home | Yes | Screenshot from FlutterFlow Preview or Designer | Pending | Must show main prototype entry state. |
| Assistant | Yes | Screenshot from FlutterFlow Preview or Designer | Pending | Must show assistant interaction screen or static prototype equivalent. |
| Tasks / Priorities | Yes | Screenshot from FlutterFlow Preview or Designer | Pending | Must show task/prioritization workflow if included in current scope. |
| Memory / Context | Conditional | Screenshot if included in current prototype scope | Pending | Confirm against latest handoff docs. |
| CEO Briefing | Deferred unless real evidence exists | Screenshot only if real FlutterFlow state confirms it | Deferred | Do not create placeholder `ceo-briefing.png`. |

### Click-Path Validation Checklist

Before final prototype evidence is accepted:

- [ ] Dashboard screen is visible in FlutterFlow Preview or Designer.
- [ ] Assistant screen is reachable from Dashboard or documented navigation.
- [ ] Tasks / Priorities screen is reachable from Dashboard or documented navigation, if in current scope.
- [ ] CEO Briefing button status is documented accurately.
- [ ] Any deferred screen is clearly labeled deferred.
- [ ] Any mock/static data is labeled prototype content.
- [ ] Screenshot filenames match the validation checklist.
- [ ] Screenshot storage folder is documented or an approved open question is recorded.
- [ ] No placeholder screenshots are created.
- [ ] No generated FlutterFlow export or runtime code is modified as part of evidence readiness.

### Suggested Screenshot Filenames

Use stable lowercase names:

```text
dashboard.png
assistant.png
tasks-priorities.png
memory-context.png
ceo-briefing.png
```

Only create `ceo-briefing.png` if it is real evidence.

### Evidence Source Notes

Each screenshot should have a note identifying:

- capture date
- source environment
- screen name
- whether the screen is confirmed, deferred, or incomplete
- any known mismatch between FlutterFlow state and planning docs

### Evidence Folder Question

Final evidence storage remains unresolved until the Architect/operator approves a capture sprint. Recommended options:

- Use a dedicated future evidence folder such as `references/flutterflow/sprint-018/`.
- Preserve `references/flutterflow/sprint-009/` only for screenshots that specifically close Sprint 009 evidence gaps.

## Sprint 018 FlutterFlow Final Prototype Evidence Capture Validation

Sprint 018 uses docs-safe validation only. It does not run app build, Firebase deploy, FlutterFlow export, or native release commands.

### Required Checks

```bash
git diff --check
git status --branch --short
git diff --name-only
git diff --stat
test ! -f references/flutterflow/sprint-009/ceo-briefing.png || echo "CEO briefing screenshot exists"
```

### Evidence Completion Rules

- Document screenshot evidence only when the actual file exists.
- Do not create fake screenshots.
- Do not create placeholder evidence images.
- Keep CEO Briefing evidence missing or deferred unless `references/flutterflow/sprint-009/ceo-briefing.png` exists.
- Keep changed files limited to planning/docs/evidence notes.

### Sprint 018 Scope Check

Sprint 018 validation must confirm no changes were made to runtime app code, generated FlutterFlow exports, Firebase, Hermes/API, backend, package or lock files, native folders, build outputs, release files, secrets, or `.env` files.

## Sprint 019 CEO Briefing Evidence Resolution Validation

Sprint 019 uses docs-safe validation only. It does not run app build, Firebase deploy, FlutterFlow export, package installation, native build, or release commands.

### Required Checks

```bash
git status --branch --short
test -f references/flutterflow/sprint-009/ceo-briefing.png && echo "CEO briefing screenshot exists" || echo "CEO briefing screenshot absent"
git diff --name-only
git diff --stat
git diff --check
```

### Resolution Matrix

| Item | Sprint 019 Status | Notes |
|---|---|---|
| CEO Briefing screenshot evidence | Formal defer | No real screenshot exists in the project folder during this Builder pass. |
| Required future screenshot path | `references/flutterflow/sprint-009/ceo-briefing.png` | This exact path closes the Sprint 009 CEO Briefing evidence gap only when the file is real evidence. |
| `Dashboard -> CEO Briefing` | Deferred / unverified | Requires real FlutterFlow Designer or Preview validation. |
| `CEO Briefing -> Dashboard` | Deferred / unverified | Requires real FlutterFlow Designer or Preview validation. |
| `CEO Briefing -> Ask Trina to prioritize -> Assistant` | Deferred / unverified | Requires real FlutterFlow Designer or Preview validation. |
| Owner | Operator / FlutterFlow Builder | Must verify the real FlutterFlow project before capture. |

### Evidence Completion Rules

- Do not create `references/flutterflow/sprint-009/ceo-briefing.png` unless it is a real FlutterFlow screenshot.
- Do not mark CEO Briefing evidence complete while the PNG is absent.
- Do not create placeholder, fake, renamed-unrelated, generated, or text-only evidence.
- Keep Sprint 019 changed files limited to planning/docs/evidence notes and the Architect Pack.
- Confirm no runtime app code, generated FlutterFlow exports, Firebase, Hermes/API, backend, package or lock files, native folders, build outputs, release files, secrets, or `.env` files were changed.

## Sprint 020 FlutterFlow CEO Briefing Real Screenshot Pass Validation

Sprint 020 is an operator-led FlutterFlow Designer / Preview evidence pass. It does not run app build, Firebase deploy, FlutterFlow export, package installation, native build, or release commands.

### Required Checks

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git status --short
```

The broader Sprint 020 validation set may also include:

```bash
git status --branch --short
test -f references/flutterflow/sprint-009/ceo-briefing.png && echo "CEO briefing screenshot exists" || echo "CEO briefing screenshot absent"
git diff --name-only
git diff --stat
```

If and only if real screenshot evidence is captured, also run:

```bash
file references/flutterflow/sprint-009/ceo-briefing.png
```

### Required FlutterFlow Checks

| Item | Required Result | Current Builder-Pass Status | Notes |
|---|---|---|---|
| FlutterFlow project access | Operator can access the real project | Pass | Operator confirmed access. |
| Dashboard / Home visible | Visible in FlutterFlow Designer / Preview | Pass | Operator confirmed Dashboard / Home is visible. |
| CEO Briefing screen existence | Verified in FlutterFlow Designer / Preview or honestly failed/deferred | Fail | Operator confirmed CEO Briefing does not exist. |
| Renamed briefing equivalent | Document approved rename if found | Not present | Operator confirmed no approved renamed equivalent was found. |
| Actual screen label | `CEO Briefing` or documented accepted rename | Not present | No CEO Briefing screen or renamed equivalent exists. |
| CEO Briefing render | Screen renders correctly with briefing-specific content | Fail | No CEO Briefing screen exists, so briefing-specific content is absent. |
| `Dashboard -> CEO Briefing` | Pass only after real FlutterFlow validation | Fail | Operator confirmed the path does not work. |
| `CEO Briefing -> Dashboard` | Pass only after real FlutterFlow validation | Fail | Operator confirmed the path does not work because the screen is absent. |
| `CEO Briefing -> Ask Trina to Prioritize -> Assistant` | Pass only after real FlutterFlow validation | Fail | Operator confirmed the path does not work because the screen is absent. |
| `references/flutterflow/sprint-009/ceo-briefing.png` | Real FlutterFlow screenshot only | Absent / not captured | Operator confirmed no real screenshot was captured or saved. |

### Evidence Completion Rules

- Do not create `references/flutterflow/sprint-009/ceo-briefing.png` unless it is a real FlutterFlow Designer or Preview screenshot.
- Do not mark CEO Briefing evidence complete while the PNG is absent.
- Do not create placeholder, fake, renamed-unrelated, generated, or text-only screenshot evidence.
- Keep Sprint 020 changed files limited to the Architect Pack, planning files, validation docs, handoff docs, and evidence notes unless a real screenshot is captured.
- Confirm no runtime app code, generated FlutterFlow exports, Firebase, Hermes/API, backend, package or lock files, native folders, build outputs, release files, secrets, or `.env` files were changed.

### Sprint 020 Evidence Result

The operator could access the real FlutterFlow project and confirmed Dashboard / Home is visible. CEO Briefing does not exist, no approved renamed equivalent was found, briefing-specific content is absent, all required CEO Briefing click paths failed, and no real screenshot was captured. `references/flutterflow/sprint-009/ceo-briefing.png` must remain absent.

## Sprint 021 FlutterFlow CEO Briefing Screen Build Validation - Deferred

Sprint 021 is historical validation context only. It previously prepared a FlutterFlow-only manual build handoff, but Sprint 023 supersedes that path and moves app completion forward around CEO Briefing.

Do not use Sprint 021 validation as an instruction to build, validate, or capture evidence for CEO Briefing during the immediate app-completion path.

### Required Checks

```bash
git status --branch --short
find planning/sprints/021-flutterflow-ceo-briefing-screen-build -maxdepth 1 -type f | sort
test -f docs/FLUTTERFLOW_BUILD_HANDOFF.md
test -f docs/VALIDATION.md
test -f references/flutterflow/sprint-009/click-path-notes.md
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git diff --stat
git diff --check
```

### Deferred FlutterFlow Checks

These checks are not required for the next app-completion step unless the operator explicitly reopens CEO Briefing:

| Item | Required Result | Current Local Status | Notes |
|---|---|---|---|
| CEO Briefing screen | Deferred unless explicitly reopened | Deferred | Do not build for current app-completion work. |
| Dashboard / Home -> CEO Briefing | Deferred unless explicitly reopened | Deferred | Not required for the next app-completion step. |
| CEO Briefing -> Dashboard / Home | Deferred unless explicitly reopened | Deferred | Not required for the next app-completion step. |
| CEO Briefing -> Ask Trina to Prioritize -> Assistant | Deferred unless explicitly reopened | Deferred | Not required for the next app-completion step. |
| `references/flutterflow/sprint-009/ceo-briefing.png` | Real FlutterFlow screenshot only | Absent unless real evidence exists | Do not fabricate screenshot evidence. |

### Evidence Completion Rules

- Do not create `references/flutterflow/sprint-009/ceo-briefing.png` unless it is a real FlutterFlow Designer or Preview screenshot captured after the screen exists.
- Do not mark CEO Briefing screenshot evidence complete while the PNG is absent.
- Do not create placeholder, fake, renamed-unrelated, generated, or text-only screenshot evidence.
- Keep Sprint 021 changed files limited to the Architect Pack, planning files, validation docs, handoff docs, and click-path notes.
- Confirm no runtime app code, generated FlutterFlow exports, Firebase, Hermes/API, backend, package or lock files, native folders, build outputs, release files, secrets, or `.env` files were changed.

## Deploy Commands

Deploy only when explicitly approved:

```bash
firebase deploy --only firestore:rules
firebase deploy --only functions
firebase deploy --only hosting
```

## Sprint 003 Production Release Readiness

Sprint 003 should turn the Sprint 002 baseline into a go-live decision path. It should not add features, re-enable Gmail send, redesign the UI, refactor production code, or deploy without explicit approval.

### Production Readiness Areas

| Area | Required Sprint 003 Status |
|---|---|
| Local build | Re-run or document current status after owner approval. |
| TypeScript/lint | Re-run or document current status after owner approval. |
| Functions syntax | Re-run or document current status after owner approval. |
| Firebase Hosting | Confirm `dist` build output and SPA rewrite are ready for approved deploy. |
| Firebase Functions | Confirm deploy readiness and required secrets without exposing secret values. |
| Firestore rules | Confirm user-owned access model still supports V1 flows. |
| Telegram | Confirm `TELEGRAM_BOT_TOKEN` secret and webhook setup before marking live. |
| Gmail | Keep chat behavior V2-disabled; document `sendGmailEmail` callable recommendation. |
| Debug logs | Decide retain, redact, reduce, or disable policy before long-term go-live. |
| Mobile | Decide web-only, Android, iOS, all three, or blocked; do not mark mobile live without device/emulator validation. |

### Go-Live Checklist Draft

- Confirm V1 platform scope.
- Confirm approved Firebase project and target.
- Confirm local build, lint, and function syntax pass.
- Confirm Hosting deploy readiness.
- Confirm Functions deploy readiness and required secrets are configured.
- Confirm Firestore rules deploy readiness.
- Confirm chat, reminder creation, reminder popup, dismiss, and snooze behavior.
- Confirm Gmail send remains V2-disabled in chat behavior.
- Decide whether the `sendGmailEmail` callable remains deployed, guarded, or disabled.
- Confirm Telegram token and webhook setup, or mark Telegram blocked/out of launch.
- Decide debug log policy for raw message text.
- Confirm mobile native Firebase config and device/emulator testing before mobile launch.
- Record final recommendation: ready for web V1 go-live, blocked, ready after owner-approved actions, or not ready due to incomplete production validation.

## Sprint 003 Production Release Readiness Results

Date: 2026-05-15

### Commands Run

```bash
cd /Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice
npm run build
npm run lint
node --check functions/index.js
firebase use
```

### Command Results

- `npm run build`: Pass. Production build completed and wrote `dist`.
- `npm run lint`: Pass. TypeScript check completed with exit code 0.
- `node --check functions/index.js`: Pass. Function source parsed successfully.
- `firebase use`: Pass. Current Firebase target is `barbie-92edc`.

### Production Readiness Status

| Area | Status | Notes |
|---|---|---|
| Web V1 launch scope | Ready after owner-approved deploy actions | Default V1 scope is web-first. Android and iOS remain blocked until native Firebase config and device/emulator testing are confirmed. |
| Firebase project target | Pass | `.firebaserc` and `firebase use` point to `barbie-92edc`. |
| Hosting readiness | Pass | `firebase.json` serves `dist` and includes SPA fallback. Hosting deploy was not run. |
| Functions readiness | Pass locally / deploy blocked | Syntax passed. Deploy readiness still depends on approved deploy and required configured secrets. Secrets were not accessed. |
| Firestore rules readiness | Pass by inspection / deploy blocked | Rules require authenticated user-owned access for client collections and deny backend-only collections. Rules deploy was not run. |
| Chat and reminders | Pass by inspection | Frontend calls `askBarbie()` and backend routes reminder intent before OpenRouter. |
| Reminder popups | Pass by inspection | Listener filters `notifications` by `userId`, `status`, and `type`; snooze/dismiss update Firestore. |
| Telegram | Blocked | `telegramWebhook` exists, but token and webhook setup were not confirmed. Secrets were not accessed. |
| Gmail send | V2-disabled in chat | Chat email intent returns V2-disabled replies. `sendGmailEmail` callable still exists and should be restricted or explicitly gated in a future sprint if not needed for V1. |
| Debug logs | Policy needed | `chatWithBarbie` writes raw message text to `debugLogs`. Recommended go-live policy: reduce or redact debug log message content before broad production use, or retain temporarily with a documented short retention window. |
| Mobile | Blocked for V1 native launch | Capacitor is configured and native permission strings exist. Native Firebase config files were not found, and device/emulator testing was not performed. |

### Build Warnings

- Vite still warns that `services/authService.ts` is both dynamically and statically imported, so the dynamic import will not split it into a separate chunk.
- Vite still warns that the built JavaScript chunk is larger than 500 kB after minification.

### Go-Live Checklist

- Pass: Local web build passes.
- Pass: TypeScript/lint passes.
- Pass: Functions syntax check passes.
- Pass: Firebase target confirmed as `barbie-92edc`.
- Pass: Hosting config points to `dist` with SPA fallback.
- Pass by inspection: Firestore rules protect user-owned V1 data.
- Pass by inspection: Chat, reminders, popup, snooze, and dismiss paths are wired.
- Pass: Gmail chat sending remains V2-disabled.
- Blocked: Firebase deploy approval is still needed before production release.
- Blocked: Telegram token and webhook setup are not confirmed.
- Blocked: Android/iOS native launch is not ready without native Firebase config and device/emulator testing.
- Owner decision needed: debug log policy for raw user message text.
- Recommendation: Ready for web V1 go-live after owner-approved Firebase deploy actions and debug logging policy decision. Telegram and native mobile should remain out of V1 launch unless separately verified.

## Sprint 004 Controlled Web V1 Deploy

Sprint 004 exists to perform a controlled Firebase web release only after explicit owner approval. This sprint should not add features, refactor production code, enable Gmail send, mark Telegram live without verified setup, or mark Android/iOS production-ready without device/emulator validation.

### Required Pre-Deploy Commands

```bash
cd /Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice
npm run build
npm run lint
node --check functions/index.js
firebase use
```

### Deploy Commands Requiring Explicit Approval

Preferred full web V1 deploy:

```bash
firebase deploy --only hosting,functions,firestore:rules
```

Allowed staged deploy commands if specifically approved:

```bash
firebase deploy --only firestore:rules
firebase deploy --only functions
firebase deploy --only hosting
```

### Post-Deploy Smoke Test Checklist

- Confirm Firebase deploy output reports success.
- Capture the live Hosting URL.
- Open the live app and confirm it does not show a blank screen.
- Confirm auth path works or anonymous auth fallback works.
- Confirm chat path responds.
- Confirm reminder creation writes through the expected path.
- Confirm reminder popup behavior is tested or documented as inspection-only.
- Confirm Gmail send remains V2-disabled from chat.
- Confirm Telegram remains blocked unless token and webhook setup are confirmed.
- Confirm Android/iOS remain blocked unless separately validated.
- Document debug logging policy or remaining decision.

### Sprint 004 Status

Status: Prepared, not run. No Sprint 004 validation or deploy commands have been run during the apply-pack step.

## Sprint 009 Validation - FlutterFlow Screen Build Handoff

Sprint 009 is complete when the repo contains a Builder-ready FlutterFlow handoff and no runtime implementation changes.

### Required Checks

```bash
git status --branch --short
find planning/sprints/009-flutterflow-screen-build-handoff -maxdepth 1 -type f | sort
test -f docs/FLUTTERFLOW_BUILD_HANDOFF.md && echo "handoff doc exists"
rg -n "009-flutterflow-screen-build-handoff|Dashboard|Assistant|Strategic Advisor Mode|CEO Briefing|Finance|Settings|mockStartDemoSession|mockSendAssistantMessage|mockMicListeningState|mockLoadCEOBriefing|mockLoadFinanceSnapshot|references/flutterflow/sprint-009|FlutterFlow only|No local React/Vite runtime code" planning docs
git diff --name-only
git diff --stat
```

### Acceptance Validation

- Sprint 009 folder exists.
- Sprint 009 contains exactly the four required sprint files.
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md` contains screen-by-screen build instructions.
- Mock/stub behavior is documented as non-production.
- Visual proof storage is documented.
- No runtime app code changed.
- No Firebase, Hermes/API implementation, package, native, release, generated export, secret, or env files changed.

## Sprint 010 Validation - FlutterFlow CEO Briefing Evidence Deferral

Sprint 010 Architect Pack was applied and the Sprint 010 review checkpoint passed. The real CEO Briefing screenshot is still missing at `references/flutterflow/sprint-009/ceo-briefing.png`.

Architect decision: CEO Briefing screenshot evidence is deferred, not complete, and is not required to move the broader Trina prototype forward. No placeholder or fake evidence should be created.

### Required Checks

```bash
git status --branch --short
find references/flutterflow/sprint-009 -maxdepth 1 -type f | sort
test -f references/flutterflow/sprint-009/ceo-briefing.png && echo "ceo briefing evidence exists"
git diff --name-only
git diff --stat
git diff --check
```

### Acceptance Validation

- Sprint 010 folder exists.
- Sprint 010 contains exactly the four required sprint files.
- CEO Briefing screenshot evidence is marked deferred, not complete.
- Missing evidence path remains `references/flutterflow/sprint-009/ceo-briefing.png`.
- Future CEO Briefing design direction includes `Today's Priorities`, `Follow-ups`, `Decisions Needed`, `Next Best Move`, and `Ask Trina to Prioritize`.
- Future naming candidates include Executive Briefing, Daily Briefing, Priority Briefing, Founder Briefing, or Command Briefing.
- The broader prototype may move forward with this evidence gap documented.
- `references/flutterflow/sprint-009/click-path-notes.md` must not mark CEO Briefing evidence present until actual evidence exists.
- No runtime app code, generated exports, Firebase, Hermes/API, backend, package, native, release, secret, or env files changed.

## Sprint 011 Validation - FlutterFlow Prototype Readiness

Sprint 011 is a planning/docs-only readiness checkpoint. It confirms the broader FlutterFlow prototype can move forward even while CEO Briefing remains deferred.

### Required Checks

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
```

### FlutterFlow Prototype Evidence Validation

Current accepted evidence should be validated by checking the screenshot files under:

```text
references/flutterflow/sprint-009/
```

Accepted evidence files:

- `dashboard.png`
- `assistant.png`
- `strategic-advisor-mode.png`
- `finance.png`
- `settings.png`

Deferred evidence:

- `ceo-briefing.png`

Validation rule:

CEO Briefing must not be marked complete unless this exact real screenshot file exists:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Placeholder evidence is not allowed.

Sprint 011 confirms the broader prototype can move forward even while CEO Briefing remains deferred.

## Sprint 012 Validation - FlutterFlow Demo Path Polish

Sprint 012 is a planning/docs-only demo-path polish checkpoint. It documents the accepted demo path around the deferred CEO Briefing screen.

### Required Checks

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
```

If screenshots changed after real manual FlutterFlow work, also run:

```bash
find references/flutterflow/sprint-009 -maxdepth 1 -type f | sort
```

### Demo Path Validation

Accepted demo screen set:

- Dashboard
- Assistant
- Strategic Advisor
- Finance Snapshot
- Settings

Preferred guided flow:

```text
Dashboard -> Assistant -> Strategic Advisor -> Finance Snapshot -> Settings -> Dashboard
```

Direct Dashboard hub navigation into each accepted screen is also acceptable.

### Acceptance Validation

- Sprint 012 folder exists.
- Sprint 012 contains exactly the four required sprint files.
- `planning/STATE.md` identifies Sprint 012 as the active planning checkpoint.
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md` documents the accepted demo path or points to the Sprint 012 files.
- `references/flutterflow/sprint-009/click-path-notes.md` documents the Sprint 012 accepted demo path.
- CEO Briefing remains deferred, not complete.
- No placeholder CEO Briefing evidence is created.
- `.DS_Store` is not included in the evidence contract.
- No runtime app code, React/Vite code, generated FlutterFlow export, Firebase, Hermes/API, backend, package, native, release, secret, or env files changed.

## Sprint 005 FlutterFlow Direction Validation

Sprint 005 is a documentation-only baseline and direction alignment sprint. It should not change app/runtime code, deploy, stage, commit, push, print secrets, or modify `.env.local`.

### Baseline Checks

```bash
git status --branch --short
git remote -v
git branch --show-current
find planning -maxdepth 3 -type f | sort
find docs -maxdepth 2 -type f | sort
find architect-packs -maxdepth 1 -type f | sort
cat package.json
```

### Acceptance Checks

- Confirm local repo baseline is documented.
- Confirm Git remote is documented.
- Confirm existing app stack is documented.
- Confirm FlutterFlow-first client mobile decision is recorded in `planning/DECISIONS.md`.
- Confirm Hermes backend request schema exists in `docs/API.md`.
- Confirm planned data collections exist in `docs/DATA_MODEL.md`.
- Confirm FlutterFlow QA criteria exist in this file.
- Confirm existing React/Vite app is clearly distinguished from planned FlutterFlow frontend.
- Confirm no app code is changed.
- Confirm no files are deleted, moved, renamed, staged, committed, or pushed.
- Confirm `.env.local` is not printed or exposed.
- Confirm `planning/STATE.md` clearly identifies the next action.

## FlutterFlow MVP QA Checklist

- Mobile layout works on common phone sizes.
- Bottom navigation includes Home, Ask, Tasks, Files, Profile.
- Required screens exist.
- Request form captures required schema fields.
- Task statuses match approved status options.
- Approval statuses match approved status options.
- Theme variables are reusable.

## FlutterFlow First-Screen Prototype Validation

| Area | Validation Method | Status | Notes |
|---|---|---|---|
| First screens | Confirm Splash, Welcome, Demo Access, Home Dashboard, Chat Shell, and Error/Offline are defined in handoff. | Pending | Sprint 007 |
| Scope boundary | Confirm Tasks, Memory, Files, Settings, and Theme Preview are placeholder/future only. | Pending | Sprint 007 |
| Theme | Confirm `trina-barbie-v1` tokens are documented and reusable. | Pending | Sprint 007 |
| Mock data | Confirm prototype uses mock/demo data only. | Pending | Sprint 007 |
| API stubs | Confirm live backend calls are out of scope and placeholder API rules are documented. | Pending | Sprint 007 |
| Runtime safety | Confirm no local runtime app code or generated FlutterFlow exports changed. | Pending | Sprint 007 |
- Client A, B, and C theme variations can be created without duplicating app logic.
- File upload placeholder exists.
- Voice/text input placeholder exists.
- Backend API placeholder exists.
- Client does not see Hermes, Claude, Gemini, Google AI Studio, Codex, or internal agent names.
- Visual polish is acceptable for client review.
- Accessibility basics are checked: contrast, touch target size, readable labels.

## FlutterFlow Mobile Blueprint Validation

Sprint 006 is a docs/planning-only blueprint sprint. It should not run app, deploy, Firebase, package installation, build, or FlutterFlow commands.

### Commands

```bash
git status --branch --short
find planning/sprints/006-flutterflow-mobile-app-blueprint -maxdepth 1 -type f | sort
rg -n "FlutterFlow|Hermes|AI Hub Orchestrator|Firebase|Chat|Home Dashboard|clientTheme|assistant" planning docs
git diff --name-only
git diff --stat
```

### Checklist

| Area | Validation Method | Status | Notes |
|---|---|---|---|
| Screens | Confirm required screen list is documented before build. | Pending | Sprint 006 |
| Navigation | Confirm bottom nav and secondary routes are defined. | Pending | Sprint 006 |
| API boundary | Confirm FlutterFlow calls Hermes/API or Orchestrator for AI behavior. | Pending | Sprint 006 |
| Data ownership | Confirm Firebase vs Hermes/API responsibilities are documented. | Pending | Sprint 006 |
| Theme | Confirm first theme is configurable and not hard-coded as permanent identity. | Pending | Sprint 006 |
| Safety | Confirm no runtime code/config was changed during blueprint sprint. | Pending | Sprint 006 |

## Sprint 008 FlutterFlow First Visual Prototype Validation

Sprint 008 is a docs/planning application step for the first FlutterFlow visual prototype. It should not run app, Firebase, deploy, package installation, build, FlutterFlow export, or production mobile release commands.

### Commands

```bash
git status --branch --short
find planning/sprints/008-flutterflow-first-visual-prototype -maxdepth 1 -type f | sort
test -f docs/FLUTTERFLOW_BUILD_HANDOFF.md && echo "handoff doc exists"
rg -n "008-flutterflow-first-visual-prototype|Strategic Advisor Mode|CEO Briefing|Finance|mockStartDemoSession|mockSendAssistantMessage|mockMicListeningState|trina-barbie-v1|FlutterFlow only|No local React/Vite runtime code" planning docs
git diff --name-only
git diff --stat
```

### Checklist

| Area | Validation Method | Status | Notes |
|---|---|---|---|
| Sprint files | Confirm the Sprint 008 folder includes requirements, blueprint, acceptance, and handoff prompt. | Pending | Sprint 008 |
| Screen scope | Confirm Splash, Welcome, Demo Access, Home Dashboard, Chat Shell, and Error/Offline are defined. | Pending | Sprint 008 |
| Screenshot identity | Confirm pale pink background, hot pink CTA, rounded cards, central mic, left-nav adaptation, `Strategic Advisor Mode`, `CEO Briefing`, and Finance quick action are documented. | Pending | Sprint 008 |
| Theme | Confirm `trina-barbie-v1` tokens are documented and reusable. | Pending | Sprint 008 |
| Data/API boundary | Confirm mock data and API stubs only; no live Firebase, Gmail, backend API, auth, or model calls. | Pending | Sprint 008 |
| Runtime safety | Confirm no local runtime app code, generated exports, or production mobile release files changed. | Pending | Sprint 008 |

## Sprint 013 FlutterFlow CEO Briefing Deferred Evidence Validation

Sprint 013 is a documented deferred-evidence checkpoint. It should not run app, Firebase, deploy, package installation, build, FlutterFlow export, backend, native, or release commands.

CEO Briefing evidence remains deferred until this file exists:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

### Commands

```bash
git status --branch --short
find references/flutterflow/sprint-009 -maxdepth 1 -type f | sort
test -f references/flutterflow/sprint-009/ceo-briefing.png && echo "ceo briefing evidence exists"
git diff --name-only
git diff --stat
git diff --check
```

If the screenshot exists, also run:

```bash
file references/flutterflow/sprint-009/ceo-briefing.png
```

### Checklist

| Area | Validation Method | Status | Notes |
|---|---|---|---|
| Sprint files | Confirm the Sprint 013 folder includes requirements, blueprint, acceptance, and handoff prompt. | Pending | Sprint 013 |
| Evidence file | Confirm `references/flutterflow/sprint-009/ceo-briefing.png` exists before marking evidence complete. | Deferred | No real screenshot is available. |
| Forward progress | Confirm missing CEO Briefing evidence is not treated as an active blocker. | Pending | Next action is to create the next Architect Pack for actual app build progress. |
| Manual FlutterFlow validation | Confirm CEO Briefing or a documented briefing equivalent exists in the real FlutterFlow project only when future evidence capture resumes. | Deferred | Not required before the next Architect Pack. |
| Navigation | Record Dashboard to CEO Briefing, CEO Briefing to Dashboard, and CEO Briefing CTA to Assistant as tested, missing, or untested only when future evidence capture resumes. | Deferred | Not required before the next Architect Pack. |
| Runtime safety | Confirm no runtime app code, generated FlutterFlow exports, Firebase, backend, package, native, release, deploy, or secret files changed. | Pending | Sprint 013 |

## Sprint 014 CEO Briefing Screenshot Evidence Capture Validation

Sprint 014 is an evidence-capture-only checkpoint for the deferred Sprint 013 CEO Briefing screenshot gap.

Required evidence path:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Run and report:

```bash
git status --branch --short
find references/flutterflow/sprint-009 -maxdepth 1 -type f | sort
test -f references/flutterflow/sprint-009/ceo-briefing.png && echo "ceo briefing evidence exists"
git diff --name-only
git diff --stat
git diff --check
```

If the screenshot exists, also run:

```bash
file references/flutterflow/sprint-009/ceo-briefing.png
```

Manual FlutterFlow validation required before completion:

| Area | Validation Method | Status | Notes |
|---|---|---|---|
| Sprint files | Confirm the Sprint 014 folder includes requirements, blueprint, acceptance, and handoff prompt. | Pending | Sprint 014 |
| Evidence file | Confirm `references/flutterflow/sprint-009/ceo-briefing.png` exists before marking evidence complete. | Blocked | No real screenshot is available in the local repo context, and no placeholder was created. |
| Dashboard navigation | Confirm `Dashboard -> CEO Briefing` in the real FlutterFlow prototype. | Blocked | No real FlutterFlow project session, FlutterFlow URL, or operator-verified result is available. |
| Return navigation | Confirm `CEO Briefing -> Dashboard` or documented home route. | Blocked | No real FlutterFlow project session, FlutterFlow URL, or operator-verified result is available. |
| Prioritize CTA navigation | Confirm `CEO Briefing -> Ask Trina to Prioritize -> Assistant`. | Blocked | No real FlutterFlow project session, FlutterFlow URL, or operator-verified result is available. |
| Runtime safety | Confirm no runtime app code, generated FlutterFlow exports, Firebase, backend, package, native, release, deploy, or secret files changed. | Pending | Sprint 014 |

## Sprint 015 Functional App Stabilization Validation

Sprint 015 validation should focus on whether the app can be used through its core paths.

### Required Validation Areas

- Dashboard opens and shows intended primary actions.
- Existing buttons route to real screens or are documented as blocked.
- Missing screens are documented truthfully.
- No placeholder screenshot is used as evidence.
- CEO Briefing remains deferred until a real screen exists.

### Manual FlutterFlow Validation Checklist

| Path / Item | Expected Result | Status |
|---|---|---|
| Dashboard primary navigation | Opens real screens or clearly documented placeholders | Pending |
| Assistant path | Opens Assistant screen if included in current prototype | Pending |
| Settings path | Opens Settings screen if included in current prototype | Pending |
| Finance path | Opens Finance screen if included in current prototype | Pending |
| Strategic Advisor path | Opens Strategic Advisor screen if included in current prototype | Pending |
| CEO Briefing path | Deferred because page does not exist | Deferred |

## Sprint 027 Core App Completion Polish Validation

Sprint 027 starts with an apply-pack/docs-only checkpoint before runtime implementation.

Apply-pack validation uses docs-safe checks only:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Implementation validation, after explicit approval, should run:

```bash
npm run lint
npm run build
```

Manual implementation smoke checks should verify:

1. Dashboard/Home remains reachable from primary navigation.
2. Assistant / Voice Entry remains reachable.
3. Sprint 026 Assistant text capture still creates a local task and opens Tasks.
4. Supported speech transcript capture still follows the same safe local task path.
5. Empty Assistant input keeps Capture and Send disabled.
6. Tasks and Notifications empty/fallback states remain understandable.
7. Return navigation to Dashboard/Home is reliable.
8. Primary non-CEO app surfaces do not show obvious dead ends.
9. CEO Briefing remains deferred, untouched, out of scope, and without screenshot evidence.

Do not create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```
