# Sprint 065 Acceptance - Current App Intent Routing and Return-to-Use UX

## Required Acceptance Criteria

### Scope Control

- [x] No Flutter/FlutterFlow migration was performed.
- [x] No native packaging was performed.
- [x] No deploy was performed.
- [x] No Firebase settings were changed.
- [x] No credentials/secrets were touched.
- [x] No CEO Briefing files were created or modified.
- [x] `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

### Current App Load

- [x] Current app/current UI loads locally.
- [x] Intended customer URL/path is documented as unresolved blocker. `https://barbie-92edc.web.app/` returns `HTTP/2 200`, but deployed behavior was not proven to match the current repo UI.

### Ask Barbie Flow

- [x] Typed normal question goes to Barbie/backend/model answer path.
- [x] Typed normal question does not open Task Tracker.
- [x] Typed normal question is not saved as a task.

### Task Capture Flow

- [x] Task capture is explicit.
- [x] Button label and/or helper text makes task capture behavior clear.
- [x] Task Tracker opens for explicit task capture or direct navigation; normal typed ask stayed on Home.

### Voice Flow

- [x] Voice input behavior is classified.
- [x] Voice transcript routes to assistant answer path by code path.
- [x] Live microphone transcript smoke was blocked by browser microphone permission denial; Client UAT remains `HOLD` if owner requires live voice proof before handoff.

### Reminder/Event Flow

- [x] Explicit reminder creation works through the current UI.
- [x] Reminder confirmation appears.
- [x] In-app due reminder appears.
- [x] Reminder dismiss behavior works; Snooze was visible but not separately exercised.
- [x] Calendar event behavior remains classified as deferred/not tested in Sprint 065 smoke.

### Notifications

- [x] In-app due notification behavior is validated.
- [x] Browser/native push is recorded as unproven.
- [x] Notification limitations are documented.

### Feedback

- [x] Feedback path is documented as unresolved.
- [x] No owner-approved feedback path exists; Client UAT remains `HOLD`.

### Auth/Access

- [x] Auth/access path for customer UAT remains unresolved.
- [x] No credentials were changed.
- [x] Access posture remains unclear; Client UAT remains `HOLD`.

### Validation

- [x] `git status --branch --short` recorded.
- [x] `git diff --check` passed.
- [x] `npm run lint` passed.
- [x] `npm run build` passed with existing accepted Vite warnings.
- [x] CEO Briefing absence guard passed.
- [x] Sprint 065 smoke cases completed and recorded in `docs/VALIDATION.md`.

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
