# Sprint 067 Blueprint - Customer Return-to-Use Proof

## Purpose

Turn the remaining customer release uncertainty into a concrete return-to-use recommendation for the current app.

## Plan

1. Inspect repo state.
   - Run `git status --branch --short`.
   - Confirm Sprint 064 untracked files remain separate and untouched.
2. Read planning and validation context.
   - `AGENTS.md`
   - `planning/STATE.md`
   - `planning/DECISIONS.md`
   - `planning/RISKS.md`
   - `planning/QUESTIONS.md`
   - `docs/VALIDATION.md`
   - Sprint 067 sprint files
3. Identify the current customer URL/path.
   - Search existing docs/config for Firebase Hosting URL, deployed URL, or app entry point.
   - Do not assume a local path is customer-accessible.
4. Compare deployed/customer path with intended current app behavior.
   - Use safe read-only validation.
   - If deployed-version match cannot be proven, record it as a blocker.
5. Test the core return-to-use jobs through the customer path if accessible.
   - App opens.
   - Login/access works or approved UAT access posture is documented.
   - Typed question reaches the backend/model answer path.
   - Reminder creation works.
   - Due reminder behavior is observed.
   - Voice input is tested if available.
   - Feedback path is confirmed.
6. Record evidence.
   - Exact URL/path tested.
   - Date/time tested.
   - Browser/device tested.
   - Pass/fail/blocker result for each core job.
   - Evidence location, screenshots, logs, or notes when available.
7. Produce final recommendation.
   - Use only `APPROVE - give current app back to client` or `HOLD - fix only the blockers preventing return-to-use`.

## Execution Notes

Sprint 067 proof ran against `https://barbie-92edc.web.app/` using installed Chrome headless with a temporary profile.

The proof found:

- App load and customer URL reachability passed.
- Typed `What should I focus on today?` passed through `chatWithBarbie` and returned a visible backend/model answer.
- `Remind me in 1 minute to check the door` passed for reminder creation and in-app due reminder behavior.
- Deployed/local version match failed because deployed asset names differ from local `dist`.
- Browser/native push remains blocked/unproven because notification permission was denied.
- Live voice remains blocked/unproven because microphone permission was denied.
- Feedback path, first tester, and owner/go-live approval remain missing.

Final recommendation:

```text
HOLD - fix only the blockers preventing return-to-use
```

## Approval Standard

Recommend `APPROVE - give current app back to client` only if customer URL/path, deployed-version match, access, typed question answering, reminders, due reminder notification behavior, voice status, feedback path, first tester, and owner approval are all documented.

Recommend `HOLD - fix only the blockers preventing return-to-use` if any required proof is missing, failed, ambiguous, local-only, or not owner-approved.

## Scope Guard

This sprint must not drift into runtime/source, deploy, Firebase settings, FlutterFlow, native build, credential, CEO Briefing, `docs/API.md`, or unrelated Sprint 064 untracked file changes.
