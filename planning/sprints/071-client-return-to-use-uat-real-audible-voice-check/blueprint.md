# Sprint 071 Blueprint - Client Return-to-Use UAT + Real Audible Voice Check

## Approach

Run a focused UAT gate against the current browser app.

This sprint should primarily inspect, run, test, and document. It should not build new product scope.

## Step 1 - Read project files

Read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/API.md`
- `docs/VALIDATION.md`
- this sprint's requirements, blueprint, and acceptance files

Then summarize understanding before executing UAT.

## Step 2 - Capture clean baseline

Run:

```bash
git status --branch --short
git log --oneline -1
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Confirm Sprint 064 remains untracked and untouched.

## Step 3 - Identify app URL/path

Document:

- local URL/path used
- deployed/current client URL, if available
- whether deployed/current client URL reflects Sprint 070 behavior

If the deployed/client URL cannot be confirmed, preserve that as a blocker or caveat.

## Step 4 - Real browser/device audible test

Use a real browser/device session, not only headless automation.

Test:

1. Open app.
2. Send a typed question.
3. Confirm visible Barbie/model answer.
4. Trigger talk-back.
5. Confirm audible speech from real speaker/audio output.
6. Confirm spoken content matches visible answer.
7. Confirm stop/disable works.

## Step 5 - Reminder and feedback test

Test:

1. Ask for a short reminder.
2. Confirm app acknowledges reminder creation.
3. Wait for due reminder.
4. Confirm reminder appears in app.
5. Dismiss reminder.
6. Confirm reminder clears.
7. Confirm feedback link remains visible.

## Step 6 - Update docs/planning

Update only relevant docs/planning files with evidence and recommendation:

- `planning/STATE.md`
- `docs/VALIDATION.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `planning/sprints/071-client-return-to-use-uat-real-audible-voice-check/acceptance.md`
- `planning/DECISIONS.md`, only if return-to-use is approved or explicitly held

## Step 7 - Final validation

Run:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Report final result as `PASS`, `PASS WITH CAVEAT`, or `HOLD`.
