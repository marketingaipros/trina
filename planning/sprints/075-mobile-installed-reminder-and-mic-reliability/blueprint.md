# Sprint 075 Blueprint - Mobile Installed Reminder + Mic Reliability Fix

## Implementation Strategy

Use a narrow fix.

Do not rebuild the app. Inspect current reminder and microphone flow first. Identify whether the issue is:

1. Intent classification/routing.
2. Reminder parser gap.
3. Installed PWA/browser storage behavior.
4. Mic permission or speech recognition lifecycle behavior.
5. UI feedback problem.

Then make the smallest changes needed.

## Expected Inspection Targets

The Builder should inspect, as applicable:

- `components/VoiceDashboard.tsx`
- `App.tsx`
- reminder-related services/utilities
- speech recognition / microphone logic
- reminder state storage logic
- PWA docs added in Sprint 074
- `docs/VALIDATION.md`
- `docs/PWA.md`
- Sprint 074 acceptance notes

Do not assume filenames. Use repo inspection.

## Reminder Flow Blueprint

1. Locate current user input handling path.
2. Locate current reminder creation path.
3. Locate current intent detection or command handling.
4. Add or tighten reminder intent detection before generic assistant fallback.
5. Parse simple reminder phrases:
   - `remind me in X minutes/hours to TASK`
   - `set a reminder in X minutes/hours to TASK`
   - `set a timer for X minutes`
   - `remind me tomorrow at TIME to TASK`
6. Preserve existing behavior for non-reminder questions.
7. Add clear confirmation after creating reminder:
   - "Reminder set for 5 minutes from now: check the oven."
8. For incomplete reminder requests, ask one direct follow-up:
   - "What should I remind you about?"
   - "When should I remind you?"
9. Ensure due reminders render in installed PWA mode.
10. Ensure dismiss clears the due reminder state.

## Mic Flow Blueprint

1. Inspect current speech recognition setup.
2. Confirm whether the app uses browser Web Speech API.
3. Add defensive checks for unsupported browsers.
4. Add state feedback:
   - mic ready
   - listening
   - processing
   - permission blocked
   - no speech detected
   - recognition failed
5. Ensure retry does not leave recognition stuck.
6. Ensure mic and speech synthesis do not conflict.
7. Ensure Stop is limited to stopping speech output and does not corrupt mic state unless intentionally designed.

## Storage Blueprint

If reminders use local storage or in-memory state:

- Confirm reminders persist or behave as designed in installed PWA mode.
- If persistence is local-only, document that limitation.
- Do not introduce cloud persistence unless already part of project architecture and sprint scope.

## Validation Blueprint

Run standard validation:

```bash
git status --branch --short
git log --oneline -1
git diff --check
npm run lint
npm run build
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Run local browser smoke:

- Typed Q&A.
- Visible answer.
- Play.
- Stop.
- Typed reminder.
- Due reminder.
- Dismiss reminder.
- Mic start/retry where available.

Run deployed phone UAT after Hosting-only deploy:

- iPhone Safari or Android Chrome.
- Home-screen installed launch.
- Typed reminder.
- Spoken reminder.
- Due reminder.
- Dismiss reminder.
- Mic retry/fallback.
- Existing audible Play/Stop regression.

## Documentation Updates

Update:

- `docs/VALIDATION.md` with Sprint 075 validation rules and actual evidence.
- `docs/PWA.md` with phone UAT notes.
- `planning/STATE.md` with current sprint status.
- `planning/RISKS.md` if mic/browser support remains a known limitation.
- `planning/QUESTIONS.md` if a device/browser issue cannot be reproduced.
- Sprint 075 acceptance with PASS/HOLD evidence.
