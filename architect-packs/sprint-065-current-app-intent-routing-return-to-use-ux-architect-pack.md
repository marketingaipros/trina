# Sprint 065 Architect Pack — Current App Intent Routing and Return-to-Use UX

**Project:** TrinaOS Voice / Barbie
**Sprint:** 065
**Sprint folder:** `planning/sprints/065-current-app-intent-routing-return-to-use-ux/`
**Date:** 2026-06-08
**Status:** Architect Pack ready for Builder application
**Scope:** Current app return-to-use blocker fix planning
**Release posture:** Client UAT / V1 Beta remains `HOLD` until Sprint 065 implementation and validation pass with owner approval.

---

## 1. Architect Summary

Sprint 064 proved that the existing app/current UI is close enough to validate, but not safe enough to return to the client.

The app can load locally. Typed `Send` can reach the backend/model and return answers. An explicit reminder can be created and shown as an in-app due reminder.

The app must remain on `HOLD` because the customer-facing path is not proven and several return-to-use blockers remain:

- `Capture` routes ordinary language into Task Tracker.
- Voice transcript appears routed to task capture instead of normal assistant answer flow.
- Customer URL/current deployed version is unclear.
- Feedback path is missing.
- Browser/native push notification delivery is unproven.
- Voice input is available in code/UI but not proven in UAT.
- Customer auth/access posture is unresolved.

Sprint 065 should fix the current app return-to-use UX around intent routing and then rerun the return-to-use smoke. This is not a redesign sprint, not a Flutter/FlutterFlow sprint, and not a native packaging sprint.

---

## 2. Files To Create Or Update

### Required planning/documentation files

Create or update only these planning/docs files when applying this Architect Pack:

```text
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/VALIDATION.md
planning/sprints/065-current-app-intent-routing-return-to-use-ux/requirements.md
planning/sprints/065-current-app-intent-routing-return-to-use-ux/blueprint.md
planning/sprints/065-current-app-intent-routing-return-to-use-ux/acceptance.md
planning/sprints/065-current-app-intent-routing-return-to-use-ux/handoff-prompt.md
```

### Runtime/source files expected later during implementation

Do not modify these while applying the Architect Pack.

These are likely candidates for Sprint 065 implementation after Codex reads and summarizes the sprint files:

```text
App.tsx
components/VoiceDashboard.tsx
components/NotificationsView.tsx
components/TasksView.tsx
components/CalendarView.tsx
src/lib/barbieAI.js
src/lib/reminderNotifications.js
services/authService.ts
services/firestoreService.ts
services/storageService.ts
```

The Builder may identify fewer or different files after reading the sprint docs. It must summarize expected changes before implementation.

### Files explicitly out of scope

Do not modify:

```text
docs/API.md
Firebase settings
FlutterFlow exports/files
native build/package files
credentials/secrets
deployment configuration unless explicitly approved later
references/flutterflow/sprint-009/ceo-briefing.png
```

`docs/API.md` should remain unchanged unless implementation reveals a durable interface contract gap that blocks Sprint 065. If so, stop and ask for approval before editing it.

---

# File: `planning/STATE.md`

Add/update the current state to reflect Sprint 065 as the next required sprint.

```markdown
# Project State

## Current Status

Client UAT / V1 Beta remains `HOLD`.

Sprint 064 completed as a return-to-use UAT gate and produced a `HOLD` recommendation. The existing app/current UI can load locally. Typed `Send` can reach the backend/model and return an answer. Explicit reminders can be created and delivered as in-app due reminders.

The app is not ready to return to the client because customer-facing access is not proven and current UI intent routing is confusing.

## Active Sprint

`planning/sprints/065-current-app-intent-routing-return-to-use-ux/`

## Sprint 064 Findings

- Local tested path: `http://127.0.0.1:3000/`
- Likely deployed path: `https://barbie-92edc.web.app/`
- Deployed path returned `HTTP/2 200`, but the deployed version was not proven to match the current repo UI.
- Typed `Send` reached backend/model and returned an answer.
- `Capture` saved ordinary input as a local task and opened Task Tracker.
- Voice transcript path appears routed to task capture, not normal assistant answer flow.
- Explicit reminder creation worked locally through `Send`.
- In-app due reminder delivery worked.
- Browser/native push delivery remains unproven.
- Feedback path is missing.
- Customer auth/access posture remains unresolved.

## Next Action

Apply Sprint 065 Architect Pack as docs/planning first. Then ask Codex to read the Sprint 065 files and summarize the implementation plan before modifying runtime/source files.

## Release Gate

Do not give the app back to the client until Sprint 065 passes return-to-use validation and owner approval is recorded.

## Blockers

- Customer URL/current deployed version unclear.
- Task tracker confusion confirmed through `Capture` and likely voice transcript path.
- Voice input not proven as a normal assistant input path.
- Feedback path missing.
- Browser/native push notification delivery unproven.
- Customer auth/access posture unresolved.
```

---

# File: `planning/DECISIONS.md`

Add a decision entry.

```markdown
# Decisions

## Sprint 065 Decision Log

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-06-08 | Fix current app intent routing before returning app to client. | Sprint 064 confirmed typed `Send` can answer, but `Capture` and likely voice transcript routing create task tracker confusion. | Client UAT / V1 Beta remains `HOLD` until normal ask flow, task capture flow, reminders/events, notifications, feedback, and auth/access are validated. |
| 2026-06-08 | Keep Flutter/FlutterFlow, PWA packaging, and native packaging deferred during Sprint 065. | Immediate goal is customer return-to-use through the existing app/current UI. | Sprint 065 must not become a redesign, migration, deploy, or packaging sprint. |
| 2026-06-08 | Separate “Ask Barbie” from “Capture Task” in the current UI behavior and labels. | Ordinary customer requests should not be silently saved as tasks or open Task Tracker. | Builder should clarify buttons/flows so general questions go to the assistant and task capture is explicit. |
```

---

# File: `planning/RISKS.md`

Add/update risks.

```markdown
# Risks

## Sprint 065 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Ordinary user input may still route to Task Tracker. | High | High | Separate ask/send flow from explicit task capture flow. Validate with normal question, reminder request, and task capture examples. | Active |
| Voice input may capture tasks instead of asking Barbie. | High | High | Route voice transcript through the same clear intent path as typed input, or clearly label voice as task capture only until fixed. | Active |
| Deployed customer URL may not match current repo behavior. | Medium | High | Identify current customer URL, compare deployed version behavior, and do not approve UAT based on local-only proof. | Active |
| Feedback path may be absent. | High | Medium | Add or document a simple customer feedback path suitable for UAT. | Active |
| Browser/native push notifications may not work on customer device. | Medium | Medium | Treat in-app due reminder as passed, but classify browser/native push as unproven unless explicitly tested. | Active |
| Sprint may expand into Flutter/FlutterFlow or native packaging. | Medium | High | Keep Sprint 065 focused on current app return-to-use UX and routing. Defer packaging to a later sprint. | Active |
```

---

# File: `planning/QUESTIONS.md`

Add/update open questions.

```markdown
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
```

---

# File: `docs/VALIDATION.md`

Add a Sprint 065 validation section.

```markdown
# Validation

## Sprint 065 — Current App Intent Routing and Return-to-Use UX

Sprint 065 validates whether the existing app/current UI can safely return to customer use after fixing or clarifying the ask/task/voice flows.

### Scope Guard

Sprint 065 must not include:

- Flutter/FlutterFlow migration
- UI redesign
- native packaging
- App Store/TestFlight work
- Firebase settings changes
- deploys unless separately approved
- credential changes
- CEO Briefing file creation or modification

### Required Commands

Run and record:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
```

Run any existing tests if present and relevant.

### Required Smoke Cases

Validate locally first:

1. Current UI loads.
2. Typed normal question through assistant path:
   - Input: `What should I focus on today?`
   - Expected: answer from Barbie/backend/model path.
   - Must not open Task Tracker.
   - Must not save as a task.
3. Explicit task capture:
   - Input: `Capture task: call the client tomorrow`
   - Expected: task capture behavior only when task intent is explicit.
   - If button remains named `Capture`, label/help text must make task behavior clear.
4. Reminder creation:
   - Input: `Remind me in 1 minute to check the door`
   - Expected: confirmation and due in-app reminder.
5. Notification:
   - In-app due reminder must be observed.
   - Browser/native push must be recorded as passed, blocked, or unproven.
6. Voice:
   - If voice is supported, transcript behavior must be tested.
   - Voice must either route to assistant answer path or be clearly labeled as task capture only.
7. Feedback:
   - Validate a clear feedback path exists.
8. Auth/access:
   - Validate the UAT access path without changing credentials or Firebase settings.
9. Customer URL:
   - Identify the intended customer URL/path.
   - Confirm whether deployed version matches current repo behavior or classify as blocker.

### PASS Criteria

Sprint 065 can recommend return-to-use only if:

- Current app/current UI loads on the approved customer path or owner approves local-only path for limited testing.
- Typed ask flow returns answers and does not route normal questions into Task Tracker.
- Task capture is explicit and not confused with asking Barbie.
- Reminder creation works.
- In-app due reminder delivery works.
- Feedback path exists.
- Auth/access path is clear.
- Remaining notification limitations are documented and owner-approved.
- Owner approval is recorded.

### HOLD Criteria

Keep Client UAT / V1 Beta on `HOLD` if any of these remain true:

- Customer URL/current deployed version is unclear.
- Normal ask input routes to Task Tracker.
- Voice route is confusing or unproven and owner requires voice.
- Reminder/event creation fails.
- In-app due reminder delivery fails.
- No feedback path exists.
- Auth/access path is unclear.
- Browser/native push is required but unproven.
```

---

# File: `planning/sprints/065-current-app-intent-routing-return-to-use-ux/requirements.md`

```markdown
# Sprint 065 Requirements — Current App Intent Routing and Return-to-Use UX

## Purpose

Fix or clarify the current app intent routing that blocks customer return-to-use.

Sprint 064 confirmed the current app/current UI can load locally and typed `Send` can reach the backend/model. It also confirmed a blocker: `Capture` saves ordinary language as a local task and opens Task Tracker, while the voice transcript path appears routed to task capture instead of normal assistant answers.

Sprint 065 must make the existing app safe enough for owner-reviewed return-to-use UAT.

## User Need

The customer needs to:

- talk or type input
- get answers
- create reminders/events
- receive due notifications or have notification limitations clearly documented
- provide feedback

## Required Outcomes

1. Normal questions must go to Barbie/backend/model answer path.
2. Task capture must be explicit and not confused with asking Barbie.
3. Voice behavior must be validated and either:
   - routed to the assistant answer path, or
   - clearly labeled as task capture only if not fixed in this sprint.
4. Reminder creation must still work after routing changes.
5. In-app due reminder delivery must still work.
6. Feedback path must be added or clearly documented for UAT.
7. Customer URL/access path must be identified or remain a release blocker.
8. Client UAT / V1 Beta must remain `HOLD` until validation passes and owner approval is recorded.

## In Scope

- Current app/current UI only.
- Intent routing between ask/send, capture/task, reminder/event, and voice transcript paths.
- Button label/help text changes needed to remove confusion.
- Minimal feedback path suitable for UAT.
- Return-to-use smoke validation.
- Planning/docs updates tied to Sprint 065.

## Out of Scope

- Flutter/FlutterFlow migration.
- Full redesign.
- Native iOS/Android packaging.
- PWA packaging.
- App Store/TestFlight work.
- Firebase settings changes.
- Deploys unless separately approved.
- Credentials/secrets.
- CEO Briefing files.

## Known Sprint 064 Evidence

- Local tested path: `http://127.0.0.1:3000/`
- Likely deployed path: `https://barbie-92edc.web.app/`
- Deployed URL returned `HTTP/2 200`, but current repo match was not proven.
- Typed `Send` returned an answer.
- `Capture` on `What should I do next?` saved a local task and opened Task Tracker.
- Reminder through `Send` worked.
- In-app due reminder worked.
- Browser/native push unproven.
- Feedback path missing.
```

---

# File: `planning/sprints/065-current-app-intent-routing-return-to-use-ux/blueprint.md`

```markdown
# Sprint 065 Blueprint — Current App Intent Routing and Return-to-Use UX

## Implementation Strategy

Keep the existing app/current UI. Make the smallest safe changes needed to remove customer confusion and validate return-to-use.

Do not redesign the app. Do not migrate to Flutter/FlutterFlow. Do not package native/mobile in this sprint.

## Step 1 — Read Current Sprint Context

Read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/065-current-app-intent-routing-return-to-use-ux/requirements.md`
- `planning/sprints/065-current-app-intent-routing-return-to-use-ux/blueprint.md`
- `planning/sprints/065-current-app-intent-routing-return-to-use-ux/acceptance.md`

Then summarize before implementation:

1. What this sprint should accomplish.
2. Files expected to modify.
3. Validation commands to run.
4. Blockers or ambiguities.

## Step 2 — Inspect Current Input Routing

Inspect current behavior in:

- `App.tsx`
- `components/VoiceDashboard.tsx`
- task/reminder/calendar/notification helpers as needed

Identify:

- typed `Send` handler
- `Capture` handler
- voice transcript handler
- reminder/event intent handling
- task capture behavior
- navigation side effects that open Task Tracker

## Step 3 — Separate Ask From Capture

Make normal assistant input the safe default.

Expected behavior:

- A normal question uses assistant/backend/model path.
- Explicit reminder/event language uses reminder/event path.
- Explicit task capture uses task path.
- Task Tracker opens only for explicit task capture or direct user navigation.
- The app should not silently turn normal questions into tasks.

Acceptable implementation options:

- Rename `Capture` to `Capture Task`.
- Add helper text explaining that `Capture Task` saves to Task Tracker.
- Route voice transcript through the same assistant submit path as typed `Send`.
- Or, if voice cannot be safely changed in this sprint, label voice as task capture only and keep Client UAT on `HOLD` if owner requires voice.

## Step 4 — Preserve Reminder/Event Flow

After routing changes, validate:

- `Remind me in 1 minute to check the door`
- visible confirmation
- in-app due notification
- dismiss/snooze behavior if present

If calendar event creation is available, validate or classify:

- passed
- local-only
- Firestore-if-cloud-connected
- blocked
- deferred

## Step 5 — Add Or Document Feedback Path

Provide a minimal UAT feedback path.

Preferred lightweight options:

- visible in-app feedback button/section if already easy
- clear feedback instruction in UI
- simple mailto/contact link if appropriate
- documented feedback channel if UI change is not safe

The feedback path must be clear enough for the customer to report issues during UAT.

## Step 6 — Confirm Customer Access Path

Identify the intended customer path:

- local-only
- Firebase deployed web URL
- other hosted URL

Do not deploy unless separately approved.

If deployed path does not match current repo behavior, keep release recommendation on `HOLD`.

## Step 7 — Validate

Run:

```bash
git status --branch --short
git diff --check
npm run lint
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Run the Sprint 065 smoke checklist in `docs/VALIDATION.md`.

## Step 8 — Update Planning Docs

Update:

- `planning/STATE.md`
- `planning/DECISIONS.md` if durable decisions changed
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- Sprint 065 acceptance status

Do not mark Client UAT / V1 Beta approved unless all PASS criteria are met and owner approval is recorded.
```

---

# File: `planning/sprints/065-current-app-intent-routing-return-to-use-ux/acceptance.md`

```markdown
# Sprint 065 Acceptance — Current App Intent Routing and Return-to-Use UX

## Required Acceptance Criteria

### Scope Control

- [ ] No Flutter/FlutterFlow migration was performed.
- [ ] No native packaging was performed.
- [ ] No deploy was performed unless separately approved.
- [ ] No Firebase settings were changed.
- [ ] No credentials/secrets were touched.
- [ ] No CEO Briefing files were created or modified.
- [ ] `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

### Current App Load

- [ ] Current app/current UI loads locally.
- [ ] Intended customer URL/path is identified or documented as unresolved blocker.

### Ask Barbie Flow

- [ ] Typed normal question goes to Barbie/backend/model answer path.
- [ ] Typed normal question does not open Task Tracker.
- [ ] Typed normal question is not saved as a task.

### Task Capture Flow

- [ ] Task capture is explicit.
- [ ] Button label and/or helper text makes task capture behavior clear.
- [ ] Task Tracker opens only for explicit task capture or direct navigation.

### Voice Flow

- [ ] Voice input behavior is tested.
- [ ] Voice transcript either routes to assistant answer path or is clearly labeled as task capture only.
- [ ] If owner requires voice as assistant input and it is not working, Client UAT remains `HOLD`.

### Reminder/Event Flow

- [ ] Explicit reminder creation works through the current UI.
- [ ] Reminder confirmation appears.
- [ ] In-app due reminder appears.
- [ ] Reminder dismiss/snooze behavior works if present.
- [ ] Calendar event behavior is tested or classified.

### Notifications

- [ ] In-app due notification behavior is validated.
- [ ] Browser/native push is recorded as passed, blocked, unproven, or deferred.
- [ ] Notification limitations are documented.

### Feedback

- [ ] A clear customer feedback path exists or is documented.
- [ ] If no feedback path exists, Client UAT remains `HOLD`.

### Auth/Access

- [ ] Auth/access path for customer UAT is identified.
- [ ] No credentials were changed.
- [ ] If access posture remains unclear, Client UAT remains `HOLD`.

### Validation

- [ ] `git status --branch --short` recorded.
- [ ] `git diff --check` passed.
- [ ] `npm run lint` passed or issues documented.
- [ ] CEO Briefing absence guard passed.
- [ ] Sprint 065 smoke cases completed and recorded.

## PASS Standard

Sprint 065 may recommend client return-to-use only when:

- current customer access path is clear
- ask flow works
- task capture no longer confuses normal questions
- reminders/events core path works or acceptable limitation is approved
- in-app notifications work
- feedback path exists
- auth/access path is clear
- owner approval is recorded

## HOLD Standard

Keep Client UAT / V1 Beta on `HOLD` if any core customer path remains unclear, broken, confusing, or unapproved.
```

---

# File: `planning/sprints/065-current-app-intent-routing-return-to-use-ux/handoff-prompt.md`

```markdown
# Sprint 065 Handoff Prompt

Use this with Codex after this Architect Pack has been applied to the project folder.

```text
Read these files before making any changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/065-current-app-intent-routing-return-to-use-ux/requirements.md
- planning/sprints/065-current-app-intent-routing-return-to-use-ux/blueprint.md
- planning/sprints/065-current-app-intent-routing-return-to-use-ux/acceptance.md

Then summarize:

1. What Sprint 065 is supposed to accomplish.
2. Which files you expect to modify.
3. Which validation commands and smoke checks you will run.
4. Any blockers or ambiguities.

Do not start implementation until I approve your summary.

Sprint rules:

- Keep the current app/current UI.
- Fix or clarify ask/task/voice intent routing.
- Normal questions must go to Barbie/backend/model answer path.
- Task capture must be explicit.
- Reminder creation and in-app due reminder behavior must continue working.
- Add or document a clear UAT feedback path.
- Identify the intended customer URL/access path or document it as a blocker.
- Do not migrate to Flutter/FlutterFlow.
- Do not package native/mobile.
- Do not deploy unless separately approved.
- Do not change Firebase settings.
- Do not touch credentials.
- Do not create or modify CEO Briefing files.
- Keep Client UAT / V1 Beta on HOLD unless validation passes and owner approval is recorded.
```
```

---

## 3. Codex Apply-Pack Prompt

Use this first. This prompt applies the Architect Pack to the project folder only.

```text
Apply the Sprint 065 Architect Pack to the project folder.

Create or update only these docs/planning files:

- planning/STATE.md
- planning/DECISIONS.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/065-current-app-intent-routing-return-to-use-ux/requirements.md
- planning/sprints/065-current-app-intent-routing-return-to-use-ux/blueprint.md
- planning/sprints/065-current-app-intent-routing-return-to-use-ux/acceptance.md
- planning/sprints/065-current-app-intent-routing-return-to-use-ux/handoff-prompt.md

Do not modify runtime/source files yet.
Do not deploy.
Do not change Firebase settings.
Do not modify FlutterFlow files.
Do not create native builds.
Do not touch credentials.
Do not create or modify CEO Briefing files.
Do not modify docs/API.md unless you stop first and explain why it is required.

After applying the pack, run:

- git status --branch --short
- git diff --check
- test ! -f references/flutterflow/sprint-009/ceo-briefing.png
- Sprint 065 file existence checks
- targeted rg checks for:
  - Sprint 065
  - current app
  - current UI
  - return-to-use
  - Ask Barbie
  - Capture Task
  - Task Tracker
  - reminders
  - events
  - notifications
  - feedback
  - Flutter
  - FlutterFlow
  - HOLD

Then report:

1. Files changed.
2. Validation results.
3. Any blocker or ambiguity.
4. Confirmation that no runtime/source, deploy, Firebase settings, FlutterFlow, native build, credential, or CEO Briefing files changed.
```

---

## 4. Post-Pack Sprint Start Prompt

Use this only after Codex applies the pack.

```text
Read these files before making any changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/065-current-app-intent-routing-return-to-use-ux/requirements.md
- planning/sprints/065-current-app-intent-routing-return-to-use-ux/blueprint.md
- planning/sprints/065-current-app-intent-routing-return-to-use-ux/acceptance.md

Then summarize:

1. What Sprint 065 is supposed to accomplish.
2. Which files you expect to modify.
3. Which validation commands and smoke checks you will run.
4. Any blockers or ambiguities.

Do not start implementation until I approve your summary.
```
