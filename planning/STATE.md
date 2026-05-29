# State

## Current Sprint
`004-controlled-web-v1-deploy`

## Current Status
Sprint 003 production release readiness validation passed without deployment and without production code changes. Sprint 004 is now prepared as the controlled web V1 deploy sprint. No deploy should occur until the owner explicitly approves the deploy scope.

## Recently Completed
- Existing Barbie / TrinaOS Voice app inspected.
- 120x planning and documentation structure created.
- Initial architecture documented.
- Known incomplete areas documented.
- No production code changes were made during Sprint 001.
- Sprint 002 approved validation commands were run:
  - `npm run build`
  - `npm run lint`
  - `node --check functions/index.js`
- Firebase Hosting config was inspected and confirmed to serve `dist`.
- Firestore rules were inspected for authenticated user-owned reads/writes.
- Reminder creation and popup paths were inspected.
- Gmail send boundary was inspected and remains V2-disabled in chat intent routing.
- Sprint 003 approved validation commands were run:
  - `npm run build`
  - `npm run lint`
  - `node --check functions/index.js`
  - `firebase use`
- Firebase target was confirmed as `barbie-92edc`.
- V1 launch scope was documented as web-first.
- Android and iOS were documented as blocked until native Firebase config and device/emulator testing are confirmed.
- Telegram was documented as blocked until token and webhook setup are confirmed without exposing secrets.

## Active Sprint Goal
Execute a controlled Firebase web V1 deploy for Trina / TrinaOS Voice after explicit owner approval, then verify the live hosted app with a post-deploy smoke test checklist.

## Known Stable Areas
- Vite React app structure exists.
- Firebase Functions backend exists.
- Firestore rules exist.
- Hosting is configured to serve `dist`.
- Capacitor iOS and Android folders exist.
- Reminder creation and popup architecture exists in code.
- Web build, type-check, and Functions syntax checks pass locally.
- Firebase project target is `barbie-92edc`.

## Known Incomplete Areas
- Gmail send is intentionally V2/disabled for V1 stability.
- Telegram webhook requires `TELEGRAM_BOT_TOKEN` secret and webhook setup before use.
- Native mobile Firebase config files are not committed.
- Browser speech recognition is not a complete native mobile voice solution.
- Debug logging policy for raw user message text is not decided.
- Production deploy commands have not been approved or run.

## Next Actions
- Read the Sprint 004 handoff prompt and summarize the deploy plan before running commands.
- Re-run final local validation commands after owner approval.
- Approve or defer Firebase deploy actions for Hosting, Functions, and Firestore rules.
- Decide debug log policy before broad production usage.
- Confirm Telegram secret and webhook setup if Telegram is included in V1.
- Keep V1 launch scope web-first unless native mobile validation is approved and completed.
- Run device/emulator validation before treating mobile as production-ready.

## Blockers
- Telegram cannot be considered live until `TELEGRAM_BOT_TOKEN` is configured and webhook setup is confirmed.
- Native mobile behavior cannot be fully validated without local native Firebase config files and device/emulator testing.
- Live chat behavior still depends on deployed function secrets, including `OPENROUTER_API_KEY`.
