# Sprint 058 Blueprint - Firebase Auth and Barbie Backend Smoke Unblock

## Step 1 - Read Project State

Read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/VALIDATION.md`
- this sprint's `requirements.md`
- this sprint's `acceptance.md`

Summarize before editing.

## Step 2 - Inspect Auth and Backend Path

Inspect the real files that define:

- `askBarbie()`
- `ensureBarbieAuth()`
- Firebase callable/function client setup
- `chatWithBarbie`
- frontend assistant Send behavior
- Firebase config
- function/model provider dependencies

Document exact files found.

## Step 3 - Identify Blocker

Determine whether the blocker is:

- Firebase Console provider setting
- OAuth allowed domain
- anonymous auth disabled by design
- local host mismatch
- missing emulator config
- missing backend/model secret
- frontend auth logic bug
- callable/function region/name mismatch
- another issue

## Step 4 - Propose Smallest Safe Fix

Before changing runtime/source files, report the proposed fix.

Allowed fix types:

- documentation-only blocker if external Firebase setting is required
- local/UAT config correction
- small auth fallback correction
- small callable path correction
- small validation helper/logging improvement that does not expose secrets

Do not fake model responses.

## Step 5 - Implement Approved Fix

After approval, make the smallest change needed.

Avoid unrelated cleanup.

## Step 6 - Validate

Run:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
node --check functions/index.js
npm run lint
npm run build
npm run dev -- --host 127.0.0.1
curl -I http://127.0.0.1:3000/
```

Run browser smoke.

## Step 7 - Close Out

Update docs/planning with:

- auth path result
- backend/model smoke result
- release status
- risks/questions
- next sprint recommendation
