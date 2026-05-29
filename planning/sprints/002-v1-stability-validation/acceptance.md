# Sprint 002 Acceptance Criteria — V1 Stability Validation

Sprint 002 is complete when:

- Builder confirms no new V1 feature expansion was performed.
- `npm run build` has been run or a clear blocker is documented.
- `npm run lint` has been run or a clear blocker is documented.
- Firebase Hosting configuration has been inspected.
- Firebase Functions readiness has been inspected.
- Auth assumptions for callable functions have been documented.
- Chat path readiness has been documented.
- Reminder creation readiness has been documented.
- Reminder popup behavior readiness has been documented.
- Firestore rules readiness has been documented.
- Telegram readiness status is documented as pass, fail, or blocked.
- Gmail send remains documented as V2 / disabled for V1.
- Mobile readiness limitations are documented.
- Debug logging privacy risk is reviewed and documented.
- `docs/VALIDATION.md` is updated with validation status.
- `planning/RISKS.md` is updated with any new risks.
- `planning/QUESTIONS.md` is updated with any open questions.
- `planning/STATE.md` is updated with sprint result and next action.

## Sprint 002 Status

Date: 2026-05-15

| Acceptance Item | Status | Evidence |
|---|---|---|
| Builder confirms no new V1 feature expansion was performed. | Complete | Validation-only pass; no production app code was changed. |
| `npm run build` has been run or a clear blocker is documented. | Complete | Build passed and produced `dist`; Vite warnings documented in `docs/VALIDATION.md`. |
| `npm run lint` has been run or a clear blocker is documented. | Complete | TypeScript lint/check passed with exit code 0. |
| Firebase Hosting configuration has been inspected. | Complete | `firebase.json` serves `dist` with SPA fallback. |
| Firebase Functions readiness has been inspected. | Complete | `node --check functions/index.js` passed. |
| Auth assumptions for callable functions have been documented. | Complete | Callable auth checks and frontend auth fallback documented in `docs/VALIDATION.md`. |
| Chat path readiness has been documented. | Complete | Text input to `askBarbie()` to `chatWithBarbie` path inspected and documented. |
| Reminder creation readiness has been documented. | Complete | Reminder parsing before OpenRouter and `notifications` write path inspected. |
| Reminder popup behavior readiness has been documented. | Complete | User-filtered listener, due check, snooze, and dismiss paths inspected. |
| Firestore rules readiness has been documented. | Complete | User-owned rules inspected; emulator testing was not run. |
| Telegram readiness status is documented as pass, fail, or blocked. | Complete | Blocked until `TELEGRAM_BOT_TOKEN` and webhook setup are confirmed. |
| Gmail send remains documented as V2 / disabled for V1. | Complete | Chat intent route returns V2-disabled response; callable caveat documented. |
| Mobile readiness limitations are documented. | Complete | Capacitor folders and permissions inspected; native config/device testing blocked. |
| Debug logging privacy risk is reviewed and documented. | Complete | Raw message debug logging documented as privacy risk. |
| `docs/VALIDATION.md` is updated with validation status. | Complete | Updated with pass/block/risk statuses and command results. |
| `planning/RISKS.md` is updated with any new risks. | Complete | Build warning, import warning, deploy validation, and Gmail callable caveats documented. |
| `planning/QUESTIONS.md` is updated with any open questions. | Complete | Sprint 003 focus and Gmail callable questions added. |
| `planning/STATE.md` is updated with sprint result and next action. | Complete | Updated with Sprint 002 results and next actions. |
