# Sprint 058 Acceptance Criteria - Firebase Auth and Barbie Backend Smoke Unblock

## Required Status

Sprint 058 starts from `HOLD`.

Sprint 058 may only move to `CLIENT UAT CANDIDATE` if all required backend/model smoke criteria pass.

---

## Static Validation

- [x] `git status --branch --short` was run before and after changes.
- [x] `git diff --check` passes.
- [x] `test ! -f references/flutterflow/sprint-009/ceo-briefing.png` passes.
- [x] `node --check functions/index.js` passes.
- [x] `npm run lint` passes or any failure is documented as pre-existing and unrelated.
- [x] `npm run build` passes or any warning is documented as accepted/pre-existing.
- [x] `npm run dev -- --host 127.0.0.1` starts the local app.
- [x] `curl -I http://127.0.0.1:3000/` returns `HTTP/1.1 200 OK`.

---

## Auth Validation

- [ ] The intended local/UAT auth path is identified.
- [x] Anonymous auth status is documented.
- [x] OAuth allowed-domain status for `127.0.0.1` and/or `localhost` is documented.
- [x] `ensureBarbieAuth()` either succeeds or the exact blocker is documented.
- [x] No secrets or credentials are exposed in logs, docs, commits, or screenshots.
- [x] No Firebase production settings are changed by Codex unless explicitly approved.

---

## Backend/Model Smoke

- [x] Typed prompt `What should I focus on today?` can be entered.
- [ ] Assistant Send reaches `askBarbie()`.
- [ ] The auth step completes under the intended local/UAT path.
- [ ] The callable/backend path reaches `chatWithBarbie`.
- [ ] A real backend/model response returns.
- [ ] The response is visible in the Barbie UI.
- [x] Failure to reach any step is documented with the exact failing step and observed evidence.

---

## Workflow Smoke

- [x] Typed fallback works even if mic/voice is unavailable.
- [ ] Local task capture behavior is documented.
- [ ] Reminder/core workflow backend status is documented.
- [x] Mic/voice status is documented separately from typed assistant success.
- [x] No fake or mocked Barbie response is accepted as success.

---

## Release Decision

One of the following final statuses is recorded:

- [x] `HOLD - auth/backend still blocked`
- [ ] `HOLD - backend works but core workflow still not ready`
- [ ] `CLIENT UAT CANDIDATE - web app backend/model path and typed fallback are proven`

`CLIENT UAT CANDIDATE` requires evidence of a real Barbie backend/model response in the browser.

Sprint 058 remains `HOLD`. Live smoke failed inside `ensureBarbieAuth()` because Anonymous Auth is disabled and Google popup fallback fails because the app domain is unauthorized. `chatWithBarbie` was not reached, and backend/model secrets remain unproven because callable execution never happened.

---

## Boundaries

- [ ] No client release was performed.
- [ ] No deploy was performed.
- [ ] No iOS packaging was performed.
- [ ] No FlutterFlow/native migration was started.
- [ ] No PWA/home-screen work was started.
- [ ] No CEO Briefing file was created or restored.

### Sprint 058 Closeout Notes

- No runtime/source changes were made.
- Typed UI submit path is present and usable.
- The path is wired as `VoiceDashboard` -> `askBarbie()` -> `ensureBarbieAuth()` -> `chatWithBarbie`.
- Next required operator decision: enable Firebase Anonymous Auth for local/UAT smoke, authorize the local/UAT OAuth domain, or provide another approved tester/auth path.
