# Sprint 065 Blueprint - Current App Intent Routing and Return-to-Use UX

## Implementation Strategy

Keep the existing app/current UI. Make the smallest safe changes needed to remove customer confusion and validate return-to-use.

Do not redesign the app. Do not migrate to Flutter/FlutterFlow. Do not package native/mobile in this sprint.

## Step 1 - Read Current Sprint Context

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

## Step 2 - Inspect Current Input Routing

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

## Step 3 - Separate Ask From Capture

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

## Step 4 - Preserve Reminder/Event Flow

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

## Step 5 - Add Or Document Feedback Path

Provide a minimal UAT feedback path.

Preferred lightweight options:

- visible in-app feedback button/section if already easy
- clear feedback instruction in UI
- simple mailto/contact link if appropriate
- documented feedback channel if UI change is not safe

The feedback path must be clear enough for the customer to report issues during UAT.

## Step 6 - Confirm Customer Access Path

Identify the intended customer path:

- local-only
- Firebase deployed web URL
- other hosted URL

Do not deploy unless separately approved.

If deployed path does not match current repo behavior, keep release recommendation on `HOLD`.

## Step 7 - Validate

Run:

```bash
git status --branch --short
git diff --check
npm run lint
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Run the Sprint 065 smoke checklist in `docs/VALIDATION.md`.

## Step 8 - Update Planning Docs

Update:

- `planning/STATE.md`
- `planning/DECISIONS.md` if durable decisions changed
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- Sprint 065 acceptance status

Do not mark Client UAT / V1 Beta approved unless all PASS criteria are met and owner approval is recorded.
