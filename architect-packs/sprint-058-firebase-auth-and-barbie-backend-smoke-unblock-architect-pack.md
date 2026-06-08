# Sprint 058 Architect Pack — Firebase Auth and Barbie Backend Smoke Unblock

**Project:** TrinaOS / Barbie local web app  
**Sprint:** 058  
**Sprint name:** `firebase-auth-and-barbie-backend-smoke-unblock`  
**Date:** 2026-06-07  
**Status:** Architect Pack ready for Builder application  
**Current release status entering sprint:** `HOLD`  
**Target release decision:** Remain `HOLD` unless real backend/model smoke passes with evidence.

---

## Architect Summary

Sprint 057 proved that the local Vite React app renders in Chrome and that local task capture has partial evidence, but the app is not ready for client UAT because the real Barbie backend/model response path is blocked by Firebase auth.

Sprint 058 exists to unblock and validate the intended Firebase auth path for local/UAT testing, then prove the complete assistant path:

```text
typed user prompt
→ askBarbie()
→ ensureBarbieAuth()
→ Firebase callable path
→ chatWithBarbie
→ real backend/model response
→ browser-visible Barbie reply
```

This sprint must stay focused. It is not a UI redesign sprint, not a FlutterFlow migration sprint, not a mobile packaging sprint, and not a client handoff sprint.

---

## Files This Architect Pack Should Create or Update

Codex should apply this Architect Pack by creating or updating these files only, unless a required existing file is absent:

```text
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/ARCHITECTURE.md
docs/API.md
docs/VALIDATION.md
planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/requirements.md
planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/blueprint.md
planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/acceptance.md
planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/handoff-prompt.md
planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/architect-pack.md
architect-packs/sprint-058-firebase-auth-and-barbie-backend-smoke-unblock-architect-pack.md
```

Runtime/source changes are **not** part of applying this Architect Pack. Runtime/source changes may only begin after Codex reads the Sprint 058 files and summarizes its implementation plan for approval.

---

# 1. Architect-Facing Requirements

## 1.1 Problem

The local app renders, but the real Barbie brain/model path has not been proven because Firebase auth blocks the callable backend path.

Observed Sprint 057 blockers:

- Firebase Anonymous sign-in is disabled.
- `127.0.0.1` is not authorized for OAuth operations.
- Google popup fallback is blocked locally.
- `ensureBarbieAuth()` fails before a successful `chatWithBarbie` response is proven.
- Typed input can reach local UI/task capture, but assistant Send cannot be accepted as a real backend/model response.
- Mic can start, but no transcript is proven.
- Client UAT must remain blocked until the real assistant path works.

## 1.2 Business Goal

Prove that the Barbie app is not just a visual shell. It must connect to the intended backend/model path and return a real Barbie response from the brain layer.

## 1.3 Sprint Goal

Unblock and validate Firebase auth/backend smoke for local or UAT web testing.

The sprint is successful only if the Builder can prove:

```text
askBarbie()
→ ensureBarbieAuth()
→ chatWithBarbie
→ backend/model response
→ visible Barbie reply in browser
```

## 1.4 In Scope

- Inspect current Firebase auth configuration in code.
- Identify the exact intended auth mode for local/UAT testing.
- Identify why local `127.0.0.1` and/or anonymous auth blocks the backend path.
- Make the smallest safe change needed to allow local/UAT backend smoke.
- Prove the Firebase callable path reaches `chatWithBarbie`.
- Prove a real Barbie backend/model response returns in the browser.
- Prove typed fallback works for assistant Send.
- Validate whether local task capture and backend reminder/core workflow are separate paths or connected.
- Update docs/planning closeout with evidence.
- Keep release status as `HOLD` unless acceptance criteria justify `CLIENT UAT CANDIDATE`.

## 1.5 Out of Scope

- No client release.
- No production deploy.
- No Firebase production setting changes unless explicitly approved.
- No credential exposure.
- No iOS packaging.
- No native wrapper.
- No FlutterFlow migration.
- No PWA/home-screen work.
- No UI redesign.
- No new feature expansion.
- No complex dashboard.
- No broad architecture rewrite.
- No CEO Briefing file creation or restoration.

## 1.6 Required Decision From Sprint

At closeout, Sprint 058 must answer:

```text
Can the current web app produce a real Barbie backend/model response under the intended local/UAT auth path?
```

Allowed outcomes:

1. `HOLD — auth/backend still blocked`
2. `HOLD — backend works but core workflow still not ready`
3. `CLIENT UAT CANDIDATE — web app backend/model path and typed fallback are proven`

`CLIENT UAT CANDIDATE` is only allowed if real browser evidence proves the assistant workflow is usable enough for first client testing.

---

# 2. Builder-Facing Implementation Plan

## 2.1 First Action: Read Before Changing

Codex must first read:

```text
AGENTS.md
planning/STATE.md
planning/DECISIONS.md
planning/DOMAIN.md
planning/RISKS.md
planning/QUESTIONS.md
docs/ARCHITECTURE.md
docs/API.md
docs/VALIDATION.md
planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/requirements.md
planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/blueprint.md
planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/acceptance.md
```

Then Codex must summarize:

1. What Sprint 058 is supposed to accomplish.
2. Which files it expects to modify.
3. What tests or validation it will run.
4. Any blockers or ambiguities.

Codex must not implement until approved.

## 2.2 Investigation Steps

Codex should inspect the current auth/backend path before editing:

```text
services/authService.ts
services/barbieService.ts
functions/index.js
firebase-related config files
frontend components that call askBarbie()
frontend console logs around assistant Send
```

Exact filenames may vary. Codex should report the real files it finds.

Codex should identify:

- Where `askBarbie()` is defined.
- Where `ensureBarbieAuth()` is defined.
- Where Firebase callable function calls are created.
- Where `chatWithBarbie` is defined/exported.
- Whether anonymous auth is assumed.
- Whether Google auth fallback is assumed.
- Whether auth emulator support exists.
- Whether local host authorization is required.
- Whether missing environment variables/secrets block function execution.
- Whether frontend Firebase config points to the expected project.
- Whether backend function config expects model credentials.
- Whether backend response can be verified without exposing secrets.

## 2.3 Fix Strategy

The Builder should choose the smallest safe path.

Preferred order:

1. **Configuration-only unblock**  
   If Firebase Console or local allowed-domain/auth setting is the blocker, document the required setting and ask the operator to apply it. Do not fake success.

2. **Local emulator or local test path**  
   If existing project supports emulators or a local test mode, use that path only if it does not bypass the real callable contract.

3. **Code-level local/UAT auth guard fix**  
   If code incorrectly handles auth fallback, make the smallest source change needed to use the intended auth method.

4. **Document blocker**  
   If secrets, Firebase Console settings, or provider settings are required and unavailable, stop and document the blocker.

Do not create a fake Barbie response. Do not mark success based on mocked UI behavior.

## 2.4 Expected Runtime Files That May Need Change

Codex may propose changes to runtime/source files only after the Sprint Start summary is approved.

Possible files may include:

```text
services/authService.ts
services/barbieService.ts
functions/index.js
firebase config files
frontend component file that calls askBarbie()
```

Codex must keep changes small and directly tied to backend smoke validation.

## 2.5 Validation Commands

Run the standard validation set:

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

If functions tests or emulator commands exist, Codex should propose them before running anything that changes environment state.

## 2.6 Browser Smoke Validation

Manual browser smoke must prove:

1. App loads at `http://127.0.0.1:3000/`.
2. Console does not show auth blocker errors during Send.
3. Typed prompt can be entered:

```text
What should I focus on today?
```

4. Send triggers the intended assistant path.
5. Console/network/backend evidence shows the request reaches `chatWithBarbie`.
6. A real backend/model response returns.
7. The Barbie response appears visibly in the UI.
8. Typed fallback works even if mic is unavailable.
9. Reminder/core workflow is checked and its backend/local status is documented.
10. Mic/voice status is documented separately from typed backend success.

## 2.7 Evidence Required

The closeout must include:

- Commands run.
- Pass/fail results.
- Browser result.
- Console/backend evidence.
- Whether `askBarbie()` succeeded.
- Whether `ensureBarbieAuth()` succeeded.
- Whether `chatWithBarbie` returned.
- Whether response was real backend/model output.
- Whether typed fallback works.
- Whether client UAT is allowed or still blocked.
- Exact release recommendation.

---

# 3. Acceptance Criteria

Create this file:

```text
planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/acceptance.md
```

With the following content.

```markdown
# Sprint 058 Acceptance Criteria — Firebase Auth and Barbie Backend Smoke Unblock

## Required Status

Sprint 058 starts from `HOLD`.

Sprint 058 may only move to `CLIENT UAT CANDIDATE` if all required backend/model smoke criteria pass.

---

## Static Validation

- [ ] `git status --branch --short` was run before and after changes.
- [ ] `git diff --check` passes.
- [ ] `test ! -f references/flutterflow/sprint-009/ceo-briefing.png` passes.
- [ ] `node --check functions/index.js` passes.
- [ ] `npm run lint` passes or any failure is documented as pre-existing and unrelated.
- [ ] `npm run build` passes or any warning is documented as accepted/pre-existing.
- [ ] `npm run dev -- --host 127.0.0.1` starts the local app.
- [ ] `curl -I http://127.0.0.1:3000/` returns `HTTP/1.1 200 OK`.

---

## Auth Validation

- [ ] The intended local/UAT auth path is identified.
- [ ] Anonymous auth status is documented.
- [ ] OAuth allowed-domain status for `127.0.0.1` and/or `localhost` is documented.
- [ ] `ensureBarbieAuth()` either succeeds or the exact blocker is documented.
- [ ] No secrets or credentials are exposed in logs, docs, commits, or screenshots.
- [ ] No Firebase production settings are changed by Codex unless explicitly approved.

---

## Backend/Model Smoke

- [ ] Typed prompt `What should I focus on today?` can be entered.
- [ ] Assistant Send reaches `askBarbie()`.
- [ ] The auth step completes under the intended local/UAT path.
- [ ] The callable/backend path reaches `chatWithBarbie`.
- [ ] A real backend/model response returns.
- [ ] The response is visible in the Barbie UI.
- [ ] Failure to reach any step is documented with the exact failing step and observed evidence.

---

## Workflow Smoke

- [ ] Typed fallback works even if mic/voice is unavailable.
- [ ] Local task capture behavior is documented.
- [ ] Reminder/core workflow backend status is documented.
- [ ] Mic/voice status is documented separately from typed assistant success.
- [ ] No fake or mocked Barbie response is accepted as success.

---

## Release Decision

One of the following final statuses is recorded:

- [ ] `HOLD — auth/backend still blocked`
- [ ] `HOLD — backend works but core workflow still not ready`
- [ ] `CLIENT UAT CANDIDATE — web app backend/model path and typed fallback are proven`

`CLIENT UAT CANDIDATE` requires evidence of a real Barbie backend/model response in the browser.

---

## Boundaries

- [ ] No client release was performed.
- [ ] No deploy was performed.
- [ ] No iOS packaging was performed.
- [ ] No FlutterFlow/native migration was started.
- [ ] No PWA/home-screen work was started.
- [ ] No CEO Briefing file was created or restored.
```

---

# 4. File Drafts To Apply

## 4.1 `planning/STATE.md` Update

Add or update the current sprint section:

```markdown
## Current Status

Sprint 057 closed as `HOLD`.

The local Vite React app renders in Chrome at `http://127.0.0.1:3000/`, and local server response was proven with `HTTP/1.1 200 OK`.

Client UAT remains blocked because Sprint 057 did not prove a real Barbie backend/model response. Firebase auth blocked the assistant Send path before successful `chatWithBarbie` response evidence.

## Active Sprint

`planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/`

## Next Action

Apply Sprint 058 planning files, then have Codex read the sprint files and summarize the implementation plan before any runtime/source changes.

## Release Status

`HOLD`

Do not give the client the app yet. Do not package iOS. Do not start FlutterFlow/native. Prove the web auth/backend/model path first.
```

## 4.2 `planning/DECISIONS.md` Update

Add:

```markdown
| 2026-06-07 | Web app backend/model smoke must pass before client UAT, PWA/home-screen, iOS wrapping, or FlutterFlow/native migration. | Sprint 057 proved visual render but not real Barbie backend/model response because Firebase auth blocked assistant Send. | Sprint 058 must focus on Firebase auth/backend smoke before release-path expansion. |
```

## 4.3 `planning/RISKS.md` Update

Add:

```markdown
| Firebase auth blocks real Barbie response path. | High | High | Sprint 058 must identify and validate intended local/UAT auth path before client UAT. | Active |
| UI render may be mistaken for a working AI app. | Medium | High | Require browser evidence of `askBarbie()` → `chatWithBarbie` → real model response. | Active |
| Local/UAT auth fix could accidentally touch production auth settings or expose credentials. | Medium | High | Keep secrets out of docs/logs and require explicit approval for Firebase Console or credential changes. | Active |
| Mobile packaging could hide unresolved web/backend failures. | Medium | High | No iOS wrapping, PWA, or FlutterFlow/native work until web backend smoke passes. | Active |
```

## 4.4 `planning/QUESTIONS.md` Update

Add:

```markdown
## Sprint 058 Open Questions

- What is the intended local/UAT auth path: anonymous auth, Google auth, emulator auth, or another provider?
- Should local validation use `127.0.0.1`, `localhost`, or a configured UAT domain?
- Is Firebase Anonymous sign-in supposed to be enabled for this app?
- Should `127.0.0.1` and/or `localhost` be authorized for OAuth during local validation?
- Are backend/model credentials already configured in the target Firebase/functions environment?
- Does reminder/core workflow require backend persistence before client UAT, or is local task capture acceptable for first test?
```

## 4.5 `docs/ARCHITECTURE.md` Update

Add:

```markdown
## Sprint 058 Architecture Focus — Auth-Gated Barbie Backend Path

The current release blocker is not static rendering. The release blocker is the auth-gated Barbie backend/model path.

Expected runtime flow:

```text
Browser UI
→ typed assistant input
→ askBarbie()
→ ensureBarbieAuth()
→ Firebase callable function
→ chatWithBarbie
→ backend/model provider
→ Barbie response returned to browser
```

Sprint 058 must prove this path with browser and backend evidence before client UAT or mobile packaging.

The app should not be considered client-ready if the UI renders but `chatWithBarbie` cannot return a real backend/model response.
```

## 4.6 `docs/API.md` Update

Add:

```markdown
## Sprint 058 API Focus — `chatWithBarbie`

`chatWithBarbie` is the critical backend callable path for proving Barbie has a working brain/model connection.

Sprint 058 must document:

- frontend caller for `askBarbie()`
- auth prerequisite in `ensureBarbieAuth()`
- Firebase callable/function name and region, if applicable
- required auth provider for local/UAT
- request shape, if discoverable
- response shape, if discoverable
- observed success or failure evidence

No mocked response should be documented as API success.
```

## 4.7 `docs/VALIDATION.md` Update

Add:

```markdown
## Sprint 058 Validation — Firebase Auth and Barbie Backend Smoke

Sprint 058 validates whether the local/UAT web app can produce a real Barbie backend/model response.

Required validation commands:

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

Required browser smoke:

1. Load `http://127.0.0.1:3000/` in Chrome.
2. Open console/network evidence.
3. Enter `What should I focus on today?`.
4. Send through the Barbie assistant path.
5. Verify auth succeeds or document exact blocker.
6. Verify callable/backend reaches `chatWithBarbie`.
7. Verify real backend/model response appears in UI.
8. Validate typed fallback.
9. Document mic/voice separately.

Passing static build validation is not enough. Sprint 058 only passes release-readiness smoke if the real backend/model response path works.
```

---

# 5. Sprint File Drafts

## 5.1 `planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/requirements.md`

```markdown
# Sprint 058 Requirements — Firebase Auth and Barbie Backend Smoke Unblock

## Goal

Unblock and validate the Firebase auth/backend path required for Barbie to return a real backend/model response in the local/UAT web app.

## Background

Sprint 057 proved that the app renders locally and that some local UI/task capture behavior works. It did not prove the real Barbie brain/model response path.

Observed blocker:

```text
ensureBarbieAuth() failed before successful chatWithBarbie response evidence.
```

Known causes from Sprint 057:

- Firebase Anonymous sign-in is disabled.
- `127.0.0.1` is not authorized for OAuth operations.
- Google popup fallback is blocked locally.
- Assistant Send cannot be accepted as working until backend/model response is proven.

## In Scope

- Identify current auth assumptions in the app.
- Identify current Barbie callable/backend path.
- Unblock intended local/UAT auth path with the smallest safe change.
- Prove `askBarbie()` reaches `chatWithBarbie`.
- Prove a real backend/model response returns.
- Prove typed fallback works.
- Document reminder/core workflow backend status.
- Preserve all release boundaries.

## Out of Scope

- Client handoff.
- Deploy.
- iOS wrapping.
- FlutterFlow/native migration.
- PWA/home-screen setup.
- UI redesign.
- New features.
- Credential changes without explicit approval.
- CEO Briefing file creation/restoration.

## Required Outcome

Sprint 058 must end with one of:

- `HOLD — auth/backend still blocked`
- `HOLD — backend works but core workflow still not ready`
- `CLIENT UAT CANDIDATE — web app backend/model path and typed fallback are proven`
```

## 5.2 `planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/blueprint.md`

```markdown
# Sprint 058 Blueprint — Firebase Auth and Barbie Backend Smoke Unblock

## Step 1 — Read Project State

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

## Step 2 — Inspect Auth and Backend Path

Inspect the real files that define:

- `askBarbie()`
- `ensureBarbieAuth()`
- Firebase callable/function client setup
- `chatWithBarbie`
- frontend assistant Send behavior
- Firebase config
- function/model provider dependencies

Document exact files found.

## Step 3 — Identify Blocker

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

## Step 4 — Propose Smallest Safe Fix

Before changing runtime/source files, report the proposed fix.

Allowed fix types:

- documentation-only blocker if external Firebase setting is required
- local/UAT config correction
- small auth fallback correction
- small callable path correction
- small validation helper/logging improvement that does not expose secrets

Do not fake model responses.

## Step 5 — Implement Approved Fix

After approval, make the smallest change needed.

Avoid unrelated cleanup.

## Step 6 — Validate

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

## Step 7 — Close Out

Update docs/planning with:

- auth path result
- backend/model smoke result
- release status
- risks/questions
- next sprint recommendation
```

## 5.3 `planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/acceptance.md`

Use the acceptance criteria from section 3 of this Architect Pack.

## 5.4 `planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/handoff-prompt.md`

```markdown
# Sprint 058 Handoff Prompt

Read the following files before making changes:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/VALIDATION.md`
- `planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/requirements.md`
- `planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/blueprint.md`
- `planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/acceptance.md`

Then summarize:

1. What Sprint 058 is supposed to accomplish.
2. Which files you expect to inspect.
3. Which files you may need to modify.
4. What tests or validation steps you will run.
5. Any blockers or ambiguities.

Do not start implementation until I approve your summary.

Sprint 058 goal:

Unblock and validate the Firebase auth/backend smoke path for Barbie. Prove the real web app brain path:

```text
askBarbie()
→ ensureBarbieAuth()
→ chatWithBarbie
→ real backend/model response
→ visible Barbie reply
```

Rules:

- Do not fake backend/model success.
- Do not expose secrets.
- Do not deploy.
- Do not push.
- Do not package iOS.
- Do not start FlutterFlow/native migration.
- Do not start PWA/home-screen work.
- Do not create or restore the CEO Briefing file.
- Keep changes small and tied to auth/backend smoke.
```

---

# 6. Codex Prompt To Apply This Architect Pack

Use this prompt first. This applies planning files only. It does not implement code.

```text
Apply Sprint 058 Architect Pack as docs/planning only.

Create or update only the files listed in the Architect Pack:

- planning/STATE.md
- planning/DECISIONS.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/ARCHITECTURE.md
- docs/API.md
- docs/VALIDATION.md
- planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/requirements.md
- planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/blueprint.md
- planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/acceptance.md
- planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/handoff-prompt.md
- planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/architect-pack.md
- architect-packs/sprint-058-firebase-auth-and-barbie-backend-smoke-unblock-architect-pack.md

Rules:

- Docs/planning only.
- Do not change runtime/source files.
- Do not fix auth yet.
- Do not edit Firebase settings.
- Do not touch credentials.
- Do not stage files.
- Do not commit.
- Do not push.
- Do not deploy.
- Do not create native builds.
- Do not package iOS.
- Do not start FlutterFlow migration.
- Do not start PWA/home-screen work.
- Do not recreate or add the CEO Briefing file.

After applying the pack, run:

git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png

Then report:

1. Files created or updated.
2. Validation results.
3. Any assumptions or conflicts.
4. Final git status.

Stop there.
```

---

# 7. Codex Sprint Start Prompt After Pack Is Applied

Use this only after Codex applies the Architect Pack and the planning files exist.

```text
Read the following files before making changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/ARCHITECTURE.md
- docs/API.md
- docs/VALIDATION.md
- planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/requirements.md
- planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/blueprint.md
- planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/acceptance.md
- planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/handoff-prompt.md

Then summarize:

1. What Sprint 058 is supposed to accomplish.
2. Which files you expect to inspect.
3. Which files you may need to modify.
4. What tests or validation steps you will run.
5. Any blockers or ambiguities.

Do not start implementation.
Do not change runtime/source files yet.
Do not stage files.
Do not commit.
Do not push.
Do not deploy.
Do not touch credentials.
Do not create native builds.
Do not package iOS.
Do not start FlutterFlow migration.
Do not recreate or add the CEO Briefing file.

Stop after the summary and wait for approval.
```

---

# 8. Architect Notes

Sprint 058 is the key proof sprint.

Sprint 057 answered:

```text
Can the app render locally?
Yes.
```

Sprint 058 must answer:

```text
Does Barbie actually think/respond through the backend/model path?
Unknown until proven.
```

Do not let the project move into client UAT, iOS wrapping, PWA, or FlutterFlow/native until this answer is proven with browser/backend evidence.
