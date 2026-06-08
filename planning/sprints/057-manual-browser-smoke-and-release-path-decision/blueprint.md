# Sprint 057 Blueprint - Manual Browser Smoke and Release Path Decision

## Operating Rule

This is a validation sprint, not a rebuild sprint.

Do not change runtime/source files unless a blocking defect is found and the operator approves a separate implementation change.

## Phase 1 - Baseline Validation

Run:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
node --check functions/index.js
npm run lint
npm run build
```

Expected:

- No unexpected file changes before validation.
- No whitespace errors.
- CEO Briefing PNG remains absent.
- Function syntax passes.
- Lint passes.
- Build passes with only known accepted Vite watch-only warnings if they still appear.

## Phase 2 - Local Launch

Run:

```bash
npm run dev -- --host 127.0.0.1
```

In another shell, run:

```bash
curl -I http://127.0.0.1:3000/
```

Expected:

- Local app starts.
- HTTP smoke returns `HTTP/1.1 200 OK` or equivalent success.

## Phase 3 - Manual Browser Smoke

Open Chrome at:

```text
http://127.0.0.1:3000/
```

Validate:

1. Barbie UI renders.
2. Navigation or visible action buttons do not immediately crash.
3. Typed input is available or documented as unavailable.
4. Send/capture action is available or documented as unavailable.
5. Browser console has no blocking errors on load.

## Phase 4 - Assistant Brain Test

Send typed message:

```text
What should I focus on today?
```

Record:

- Did the message submit?
- Did Barbie respond?
- Did the response appear model-generated?
- Did browser console show errors?
- Did Firebase Functions/backend logs show `chatWithBarbie` or related activity?
- Were auth/config/secrets missing?

## Phase 5 - Reminder/Core Workflow Smoke

Test the visible reminder/core workflow path available in the UI.

Record:

- Which UI control was used.
- Expected behavior.
- Actual behavior.
- Any blocker.

## Phase 6 - Voice or Typed Fallback Smoke

Test mic/voice if available.

If blocked by browser permissions, device setup, or incomplete implementation, document typed fallback instead.

Record:

- Whether mic prompt appeared.
- Whether transcript appeared.
- Whether transcript could be sent to Barbie.
- Whether typed fallback is acceptable for UAT.

## Phase 7 - Release-Path Decision

Decide the next path based on evidence:

### Web app

Use if browser workflows pass and client can start from a secure URL.

### PWA/home-screen app

Use if browser workflows pass and iPhone home-screen install is acceptable for the first client UAT.

### Wrapped iPhone app

Use if client specifically needs installable iPhone packaging and the web app path is already proven.

Requires a later packaging sprint.

### FlutterFlow/native

Use only if FlutterFlow is already the chosen source path or provides a safer mobile release route than wrapping the current app.

Requires a later comparison or packaging sprint.

## Phase 8 - Documentation Closeout

Update only approved docs/planning files with:

- Validation results.
- Manual smoke results.
- Assistant brain status.
- Reminder/core workflow status.
- Voice/fallback status.
- Release-path recommendation.
- Remaining risks/questions.
- Final recommendation.
