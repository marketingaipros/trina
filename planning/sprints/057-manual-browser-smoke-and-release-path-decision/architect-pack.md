# Sprint 057 Architect Pack — Manual Browser Smoke and Release Path Decision

**Project:** Trina / Barbie
**Sprint:** 057-manual-browser-smoke-and-release-path-decision
**Architect Layer:** ChatGPT
**Builder Layer:** Codex
**Recommendation entering sprint:** HOLD
**Sprint type:** Validation and release-path decision

---

## 1. Architect Summary

Sprint 056 proved the local Vite React app can launch, build, lint, and pass backend syntax checks. It also documented the existing assistant/backend contract path, but it did not fully prove the live UI workflows because browser automation was unavailable.

The operator has now manually confirmed the app opens in Chrome at `127.0.0.1:3000` and the Barbie interface renders visually. That is useful, but it is not enough to release to the client.

Sprint 057 exists to manually prove the working app path in the browser and make a release-path decision.

The sprint must answer four practical questions:

1. Does the app work beyond visual launch?
2. Is the Barbie “brain” actually connected to a backend/model response path?
3. Are the core reminder/session/assistant workflows usable enough for client UAT?
4. Should the client use the current web app, PWA/home-screen app, wrapped iPhone app, or FlutterFlow/native path?

This sprint must stay validation-focused. Do not rebuild the product. Do not package iOS. Do not deploy. Do not move to FlutterFlow unless the sprint concludes that path is the right next step.

---

## 2. Files to Create or Update

Codex should create or update the following files:

```text
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/ARCHITECTURE.md
docs/API.md
docs/VALIDATION.md
planning/sprints/057-manual-browser-smoke-and-release-path-decision/requirements.md
planning/sprints/057-manual-browser-smoke-and-release-path-decision/blueprint.md
planning/sprints/057-manual-browser-smoke-and-release-path-decision/acceptance.md
planning/sprints/057-manual-browser-smoke-and-release-path-decision/handoff-prompt.md
```

Codex may also create this consolidated file inside the sprint folder if the repo convention supports it:

```text
planning/sprints/057-manual-browser-smoke-and-release-path-decision/architect-pack.md
```

---

## 3. Required Updates by File

### `planning/STATE.md`

Add Sprint 057 as the active sprint.

Record:

- Sprint 056 closed with recommendation `HOLD`.
- Local launch was proven by `npm run dev -- --host 127.0.0.1` and `curl -I http://127.0.0.1:3000/` returning `HTTP/1.1 200 OK`.
- User manually observed the app in Chrome at `127.0.0.1:3000`.
- Browser UI launch is visually confirmed.
- End-to-end assistant/reminder/voice workflows are not yet fully proven.
- Sprint 057 will perform manual browser smoke and decide release path.

Recommended wording:

```markdown
## Sprint 057 — Manual Browser Smoke and Release Path Decision

Status: Planned
Recommendation entering sprint: HOLD

Sprint 056 validated build/lint/backend syntax/local launch and documented the existing backend assistant path, but live browser UI workflows were not fully proven. The operator manually confirmed the app renders in Chrome at `127.0.0.1:3000`.

Sprint 057 will manually smoke-test the visible app path, confirm whether the Barbie assistant brain responds through the backend/model path, validate reminder/core workflow behavior, test mic/voice or typed fallback, and decide whether the next client delivery path should be web app, PWA/home-screen app, wrapped iPhone app, or FlutterFlow/native path.
```

---

### `planning/DECISIONS.md`

Add decisions only if not already present.

Recommended entries:

```markdown
## Sprint 057 Release-Path Decisions

- The current local browser app must be proven through manual smoke before it can be recommended for client UAT.
- Visual launch alone is not enough for client release.
- The client must not be handed the app as ready until assistant brain, reminder/core workflow, and voice or typed fallback behavior are validated or clearly documented as blocked.
- The iPhone delivery path remains undecided until Sprint 057 compares web/PWA/wrapped/native/FlutterFlow options against the actual working app state.
```

Do not decide “FlutterFlow is the final path” unless manual evidence supports it.

Do not decide “wrap the app for iPhone” yet. That is a possible next sprint after Sprint 057.

---

### `planning/RISKS.md`

Add or update risks:

```markdown
## Sprint 057 Risks

- The app may render visually while assistant/backend/model calls fail.
- The Barbie “brain” may not be connected, may be using missing credentials, or may fail silently.
- Auth/session may appear optional locally but block real client usage.
- Voice/mic behavior may be browser/device dependent and should not be treated as native mobile readiness.
- Client expectations may drift if a local browser preview is mistaken for a packaged iPhone app.
- FlutterFlow/native packaging may become a distraction before the current working app path is proven.
- Any iPhone packaging path will require separate validation for Apple Developer account, signing, TestFlight/App Store path, device permissions, and mobile UI behavior.
```

---

### `planning/QUESTIONS.md`

Add or maintain these open questions:

```markdown
## Sprint 057 Open Questions

- Which auth/session path should the client use for UAT?
- Is `chatWithBarbie` connected to a live model provider in the current environment?
- Which model/provider is the Barbie assistant using?
- Are required backend secrets/config values present in the local or target environment?
- Which reminder/core workflow must pass before client UAT?
- Is voice required for first client UAT, or is typed fallback acceptable?
- Should the first client release be web app, PWA/home-screen app, wrapped iPhone app, or FlutterFlow/native?
- Does the client need installable iPhone access immediately, or can she start with a web/PWA UAT while packaging is handled in a later sprint?
- Who is the first tester and who approves movement from HOLD to CLIENT UAT CANDIDATE?
```

---

### `docs/ARCHITECTURE.md`

Update architecture notes to clarify current runtime layers:

```markdown
## Sprint 057 Runtime Architecture Focus

The currently observed app path is the Vite React web app running locally at `127.0.0.1:3000`.

Sprint 057 must validate the live browser path before any packaging decision:

- React UI renders locally.
- UI input calls the assistant client path.
- Assistant client path reaches the Firebase Functions/backend contract.
- Backend/model path returns a usable Barbie response.
- Reminder/core workflow is usable enough for UAT or documented as blocked.
- Voice/mic path is tested if available, with typed fallback documented.

Release packaging is a separate architecture decision after browser smoke:

- Web app: fastest UAT path.
- PWA/home-screen app: web-based install-like path for iPhone.
- Wrapped iPhone app: requires separate packaging/signing/device validation.
- FlutterFlow/native: only appropriate if it is the chosen source path or offers a safer mobile release route than wrapping the existing app.
```

---

### `docs/API.md`

Update API notes to emphasize assistant/backend contract validation:

```markdown
## Sprint 057 API Validation Focus

Sprint 057 must manually validate or document blockers for the assistant request path:

```text
User typed input or voice transcript
-> UI send/capture action
-> askBarbie()
-> chatWithBarbie
-> backend/model provider
-> Barbie response rendered in UI
```

Required observations:

- What user input was sent.
- Whether a response appeared in the UI.
- Whether browser console errors appeared.
- Whether backend/function logs show the request.
- Whether missing auth/config/secrets blocked the response.

Do not change the API contract in this sprint unless a blocking mismatch is found and approved as a separate implementation change.
```

---

### `docs/VALIDATION.md`

Add Sprint 057 manual smoke checklist:

```markdown
## Sprint 057 Manual Browser Smoke Checklist

Run baseline validation:

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

Manual browser smoke:

1. Open `http://127.0.0.1:3000/` in Chrome.
2. Confirm the Barbie UI renders.
3. Test typed assistant input with: `What should I focus on today?`
4. Confirm whether Barbie responds in the UI.
5. Open browser console and record any errors.
6. Confirm whether the backend/function path logs the request.
7. Test reminder/core workflow from the visible UI.
8. Test mic/voice capture if available.
9. If mic/voice is unavailable or blocked, test typed fallback and document it.
10. Record release-path recommendation:
    - `HOLD`
    - `CLIENT UAT CANDIDATE`

Release-path decision checklist:

- Web app is acceptable only if browser workflows pass.
- PWA/home-screen path is acceptable only if mobile browser basics are usable.
- Wrapped iPhone app requires a later packaging sprint.
- FlutterFlow/native path requires a later comparison or migration sprint.
```

---

## 4. Sprint File: `requirements.md`

```markdown
# Sprint 057 Requirements — Manual Browser Smoke and Release Path Decision

## Purpose

Sprint 057 manually validates the visible local Barbie app in the browser and decides the next release path.

Sprint 056 proved build/lint/backend syntax/local launch and documented the assistant/backend path, but it did not fully prove live UI workflows. The operator has now visually confirmed the app opens in Chrome at `127.0.0.1:3000`.

This sprint must prove whether the app is usable beyond visual launch.

## In Scope

- Run baseline repo validation.
- Start the local app at `127.0.0.1:3000`.
- Manually confirm the app renders in Chrome.
- Test typed assistant input.
- Confirm whether the Barbie brain/model path responds.
- Check browser console errors.
- Check backend/function evidence if available.
- Test reminder/core workflow from the visible UI.
- Test mic/voice if available.
- Test typed fallback if voice is unavailable.
- Decide the next release path:
  - Web app
  - PWA/home-screen app
  - Wrapped iPhone app
  - FlutterFlow/native path
- Record final recommendation as `HOLD` or `CLIENT UAT CANDIDATE`.
- Update docs/planning only.

## Out of Scope

- No runtime/source code changes unless a blocking issue is found and separate approval is given.
- No deploys.
- No native builds.
- No iOS packaging.
- No App Store/TestFlight work.
- No FlutterFlow rebuild or migration.
- No credential edits.
- No CEO Briefing file creation or restoration.

## Required Test Message

Use this typed assistant test message:

```text
What should I focus on today?
```

## Required Release Decision

The sprint must close with one of:

```text
HOLD
```

or

```text
CLIENT UAT CANDIDATE
```

`CLIENT UAT CANDIDATE` is allowed only if the app launches, typed assistant path works, reminder/core workflow is acceptable or clearly non-blocking, and voice or typed fallback is usable enough for the first client test.
```

---

## 5. Sprint File: `blueprint.md`

```markdown
# Sprint 057 Blueprint — Manual Browser Smoke and Release Path Decision

## Operating Rule

This is a validation sprint, not a rebuild sprint.

Do not change runtime/source files unless a blocking defect is found and the operator approves a separate implementation change.

## Phase 1 — Baseline Validation

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

## Phase 2 — Local Launch

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

## Phase 3 — Manual Browser Smoke

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

## Phase 4 — Assistant Brain Test

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

## Phase 5 — Reminder/Core Workflow Smoke

Test the visible reminder/core workflow path available in the UI.

Record:

- Which UI control was used.
- Expected behavior.
- Actual behavior.
- Any blocker.

## Phase 6 — Voice or Typed Fallback Smoke

Test mic/voice if available.

If blocked by browser permissions, device setup, or incomplete implementation, document typed fallback instead.

Record:

- Whether mic prompt appeared.
- Whether transcript appeared.
- Whether transcript could be sent to Barbie.
- Whether typed fallback is acceptable for UAT.

## Phase 7 — Release-Path Decision

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

## Phase 8 — Documentation Closeout

Update only approved docs/planning files with:

- Validation results.
- Manual smoke results.
- Assistant brain status.
- Reminder/core workflow status.
- Voice/fallback status.
- Release-path recommendation.
- Remaining risks/questions.
- Final recommendation.
```

---

## 6. Sprint File: `acceptance.md`

```markdown
# Sprint 057 Acceptance Criteria — Manual Browser Smoke and Release Path Decision

## Required Validation

- [ ] `git status --branch --short` run before validation.
- [ ] `git diff --check` passes.
- [ ] `test ! -f references/flutterflow/sprint-009/ceo-briefing.png` passes.
- [ ] `node --check functions/index.js` passes.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes or only shows previously accepted warnings.
- [ ] `npm run dev -- --host 127.0.0.1` starts the app.
- [ ] `curl -I http://127.0.0.1:3000/` returns a successful response.

## Manual Browser Smoke

- [ ] App visibly renders in Chrome at `http://127.0.0.1:3000/`.
- [ ] Load-time browser console errors are checked and documented.
- [ ] Typed assistant input is tested with `What should I focus on today?`.
- [ ] Barbie response behavior is documented.
- [ ] Evidence for `askBarbie()` -> `chatWithBarbie` or blocker is documented.
- [ ] Reminder/core workflow is tested or blocker is documented.
- [ ] Voice/mic path is tested or typed fallback is tested and documented.

## Release-Path Decision

- [ ] Web app path is assessed.
- [ ] PWA/home-screen path is assessed.
- [ ] Wrapped iPhone path is assessed as a future packaging option, not performed in this sprint.
- [ ] FlutterFlow/native path is assessed as a future option, not performed in this sprint.
- [ ] Final recommendation is recorded as `HOLD` or `CLIENT UAT CANDIDATE`.

## Safety

- [ ] No runtime/source files changed unless separately approved.
- [ ] No deploys run.
- [ ] No native builds run.
- [ ] No credentials touched.
- [ ] No CEO Briefing files created, restored, staged, or committed.
- [ ] `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

## Completion Rule

Do not recommend `CLIENT UAT CANDIDATE` unless live browser evidence proves the app is usable enough for first client testing.

If the app only launches visually but assistant/reminder/brain paths are unproven, recommendation must remain `HOLD`.
```

---

## 7. Sprint File: `handoff-prompt.md`

```markdown
# Sprint 057 Handoff Prompt — Manual Browser Smoke and Release Path Decision

Read these files before making changes:

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
planning/sprints/057-manual-browser-smoke-and-release-path-decision/requirements.md
planning/sprints/057-manual-browser-smoke-and-release-path-decision/blueprint.md
planning/sprints/057-manual-browser-smoke-and-release-path-decision/acceptance.md
```

Then summarize:

1. What Sprint 057 is supposed to accomplish.
2. Which files you expect to modify.
3. What validation steps you will run.
4. What manual browser smoke steps you need the operator to perform or confirm.
5. Any blockers, ambiguities, or risks.
6. Whether the sprint is safe to perform as validation-only.

Do not implement yet.

After approval, perform Sprint 057 as validation-only.

Scope:

- Validate app launch.
- Validate manual browser UI behavior.
- Test typed assistant input.
- Confirm whether Barbie brain/model path responds.
- Test reminder/core workflow.
- Test voice/mic or typed fallback.
- Decide release path.
- Update docs/planning closeout.

Rules:

- Do not modify runtime/source files unless a blocking defect is found and the operator approves a separate implementation change.
- Do not deploy.
- Do not run native builds.
- Do not package iOS.
- Do not perform FlutterFlow rebuild/migration.
- Do not touch credentials.
- Do not stage anything.
- Do not commit anything.
- Do not push anything.
- Do not create, restore, stage, or commit CEO Briefing files.
- Confirm `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

Required baseline commands:

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

Required manual browser smoke:

1. Open `http://127.0.0.1:3000/` in Chrome.
2. Confirm Barbie UI renders.
3. Open browser console and check for errors.
4. Type: `What should I focus on today?`
5. Click send/capture.
6. Record whether Barbie responds.
7. Check whether backend/function logs show the assistant request.
8. Test reminder/core workflow.
9. Test mic/voice if available.
10. If voice is unavailable, test typed fallback.
11. Recommend one release path:
    - Web app
    - PWA/home-screen app
    - Wrapped iPhone app as a future sprint
    - FlutterFlow/native as a future sprint
12. Close with `HOLD` or `CLIENT UAT CANDIDATE`.

When finished, report:

1. Validation commands run and results.
2. Manual browser smoke results.
3. Assistant brain/model status.
4. Reminder/core workflow status.
5. Voice/fallback status.
6. Release-path recommendation.
7. Final recommendation: `HOLD` or `CLIENT UAT CANDIDATE`.
8. Files changed.
9. Final `git status --branch --short`.
10. Confirmation that CEO Briefing remains absent.
11. Confirmation that no runtime/source files, deploys, native builds, credentials, iOS packaging, FlutterFlow migration, or CEO Briefing files were touched.
```

---

## 8. Codex Apply-Pack Prompt

Use this prompt next. This applies the Architect Pack to the project folder by creating/updating sprint docs. It does not implement the sprint.

```text
Apply the Sprint 057 Architect Pack to the project folder.

Working directory:

`/Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice`

Create or update these files exactly as needed from the Architect Pack:

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/VALIDATION.md`
- `planning/sprints/057-manual-browser-smoke-and-release-path-decision/requirements.md`
- `planning/sprints/057-manual-browser-smoke-and-release-path-decision/blueprint.md`
- `planning/sprints/057-manual-browser-smoke-and-release-path-decision/acceptance.md`
- `planning/sprints/057-manual-browser-smoke-and-release-path-decision/handoff-prompt.md`
- `planning/sprints/057-manual-browser-smoke-and-release-path-decision/architect-pack.md`

Rules:

- This is docs/planning only.
- Do not modify runtime/source files.
- Do not deploy.
- Do not run native builds.
- Do not package iOS.
- Do not perform FlutterFlow rebuild/migration.
- Do not touch credentials.
- Do not stage anything.
- Do not commit anything.
- Do not push anything.
- Do not create, restore, stage, or commit CEO Briefing files.
- Confirm `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

After applying the pack, run:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Then report:

1. Files created or updated.
2. Validation results.
3. Any assumptions or conflicts.
4. Final `git status --branch --short`.
5. Confirmation that CEO Briefing remains absent.
6. Confirmation that no runtime/source files, deploys, native builds, credentials, iOS packaging, FlutterFlow migration, or CEO Briefing files were touched.

Do not start implementation.
```

---

## 9. Architect Notes

The user’s screenshot confirms the app renders in Chrome, but client release requires workflow proof.

The client should not receive the app as ready until the actual assistant brain path and core workflows are validated. A preview/demo is acceptable only if described as internal preview.

The iPhone/package question should not be solved by assumption. Sprint 057 must create evidence first. If browser workflows pass, the next sprint can be one of:

- PWA/home-screen UAT setup.
- iPhone wrapper/package planning.
- FlutterFlow/native comparison.
- Client UAT preparation.
