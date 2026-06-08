# Architect Pack — Sprint 059: Rerun Barbie Backend Smoke After Auth Unblock

**Project:** Trina / Barbie Voice App  
**Sprint:** 059  
**Sprint name:** rerun-barbie-backend-smoke-after-auth-unblock  
**Status:** Architect Pack created  
**Date:** 2026-06-08  
**Architect Layer:** ChatGPT  
**Builder Layer:** Codex  

---

## 1. Architect Summary

Sprint 058 proved that the typed Barbie UI path is wired, but it stopped before the backend callable because Firebase Auth failed inside `ensureBarbieAuth()`.

The operator has now enabled Firebase Anonymous sign-in in Firebase Console.

Sprint 059 exists to rerun the Barbie backend smoke after that external auth configuration change and determine whether the app can now produce a real backend/model response through the intended path:

```text
typed prompt
-> askBarbie()
-> ensureBarbieAuth()
-> Firebase callable
-> chatWithBarbie
-> real backend/model response
-> visible Barbie reply
```

This sprint must not broaden into FlutterFlow, native packaging, client rollout, deploys, or UI polish.

---

## 2. Files to Create or Update

Codex should create or update these files as needed:

```text
planning/STATE.md
planning/DECISIONS.md, if decisions change
planning/RISKS.md, if risks change
planning/QUESTIONS.md, if questions change
docs/VALIDATION.md
planning/sprints/059-rerun-barbie-backend-smoke-after-auth-unblock/requirements.md
planning/sprints/059-rerun-barbie-backend-smoke-after-auth-unblock/blueprint.md
planning/sprints/059-rerun-barbie-backend-smoke-after-auth-unblock/acceptance.md
planning/sprints/059-rerun-barbie-backend-smoke-after-auth-unblock/handoff-prompt.md
planning/sprints/059-rerun-barbie-backend-smoke-after-auth-unblock/architect-pack.md
architect-packs/sprint-059-rerun-barbie-backend-smoke-after-auth-unblock-architect-pack.md
```

Codex should not modify runtime/source files unless the Sprint 059 smoke proves a smallest-safe-fix is required and the operator approves implementation after the read-only checkpoint.

---

## 3. Required State Update

Update `planning/STATE.md` to reflect:

```markdown
# Sprint 059 State Update

Sprint 059 is active.

Sprint 058 remains HOLD because the callable/backend/model path was not reached.

Operator has enabled Firebase Anonymous sign-in in Firebase Console.

Sprint 059 goal is to rerun the typed Barbie backend smoke and prove or disprove:

- `ensureBarbieAuth()` succeeds through anonymous auth.
- `chatWithBarbie` callable is reached.
- A real backend/model response appears in the Barbie UI.

The app remains HOLD until a real backend/model response is proven.
```

---

## 4. Required Decision Update

Update `planning/DECISIONS.md` only if this decision is not already recorded:

```markdown
| 2026-06-08 | Firebase Anonymous sign-in was enabled by the operator for local/UAT Barbie backend smoke testing. | Sprint 058 showed Google popup/OAuth domain flow blocked local smoke before the callable. Anonymous auth is the smallest operator-level unblock for the existing `ensureBarbieAuth()` path. | Sprint 059 should rerun smoke without changing Firebase Console settings or credentials. |
```

---

## 5. Required Risk Update

Update `planning/RISKS.md` with:

```markdown
| Firebase auth may now pass but backend/model configuration may still fail. | Medium | High | Sprint 059 must separately prove callable reach and real model response. Do not mark success at auth-only pass. | Open |
| Anonymous auth may be acceptable for smoke but not final client auth posture. | Medium | Medium | Treat anonymous auth as local/UAT smoke unblock only unless future sprint explicitly defines production auth behavior. | Open |
```

---

## 6. Required Questions Update

Update `planning/QUESTIONS.md` with:

```markdown
## Sprint 059 Open Questions

- After Anonymous Auth is enabled, does `ensureBarbieAuth()` now succeed locally?
- Does `askBarbie()` reach the `chatWithBarbie` callable?
- Are backend/model secrets configured enough for the callable to return a real Barbie response?
- If backend/model response works locally, what is the approved next UAT host/domain for client testing?
- Is Anonymous Auth only for local/UAT smoke, or will a future auth sprint define the production client auth path?
```

---

## 7. Required Validation Update

Update `docs/VALIDATION.md` with a Sprint 059 validation section:

```markdown
## Sprint 059 — Barbie Backend Smoke After Anonymous Auth Enablement

Required checks:

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

1. Load `http://127.0.0.1:3000/`.
2. Enter typed prompt: `What should I focus on today?`
3. Click Send.
4. Confirm typed submit fires.
5. Confirm `ensureBarbieAuth()` succeeds.
6. Confirm `askBarbie()` runs.
7. Confirm `chatWithBarbie` callable is reached.
8. Confirm a real backend/model response appears in the Barbie UI.
9. Confirm response is not mocked or static.
10. Record any exact console/network/backend errors if smoke fails.

Acceptance requires a real backend/model response, not merely anonymous auth success or page load.
```

---

# planning/sprints/059-rerun-barbie-backend-smoke-after-auth-unblock/requirements.md

```markdown
# Sprint 059 Requirements — Rerun Barbie Backend Smoke After Auth Unblock

## Goal

Prove whether enabling Firebase Anonymous sign-in unblocks the typed Barbie backend smoke path.

The target path is:

```text
typed prompt
-> askBarbie()
-> ensureBarbieAuth()
-> Firebase callable
-> chatWithBarbie
-> real backend/model response
-> visible Barbie reply
```

## Background

Sprint 058 found that the typed submit path is wired, but Firebase Auth failed before the callable:

- Typed UI submit worked.
- `ensureBarbieAuth()` failed.
- Anonymous Auth was disabled.
- Google popup fallback failed because the app domain was unauthorized.
- `chatWithBarbie` was not reached.
- Backend/model secrets were not proven.

The operator has now enabled Anonymous sign-in in Firebase Console.

## In Scope

- Create Sprint 059 planning files.
- Run a read-only start checkpoint first.
- Inspect current Sprint 058 findings and runtime/auth path.
- Rerun local typed Barbie backend smoke.
- Confirm whether anonymous auth now succeeds.
- Confirm whether `chatWithBarbie` callable is reached.
- Confirm whether a real backend/model response appears.
- If smoke fails after auth success, capture exact blocker.
- If a smallest-safe runtime fix is clearly required, stop and propose it before editing.

## Out of Scope

- FlutterFlow work.
- Native iOS/Android builds.
- PWA/home-screen packaging.
- Deploys.
- Firebase Console changes.
- Credential or secret changes.
- Client rollout.
- UI polish.
- Reminder/core workflow expansion beyond status documentation.
- CEO Briefing files.

## Non-Negotiable Rules

- Do not stage, commit, or push until explicitly approved.
- Do not touch credentials.
- Do not expose `.env.local` values.
- Do not edit Firebase settings.
- Do not treat static render or `HTTP/1.1 200 OK` as success.
- Do not fake or mock a Barbie response.
- Do not mark the sprint complete unless a real backend/model response is proven.
```

---

# planning/sprints/059-rerun-barbie-backend-smoke-after-auth-unblock/blueprint.md

```markdown
# Sprint 059 Blueprint — Rerun Barbie Backend Smoke After Auth Unblock

## Phase 1 — Read-Only Checkpoint

Codex must read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/VALIDATION.md`
- Sprint 058 files
- Sprint 059 files

Then summarize before edits:

1. What Sprint 059 is supposed to accomplish.
2. Which files may need inspection.
3. Which validation steps will run.
4. Whether any code edits are expected.
5. Any blockers or ambiguities.

Do not implement until approved.

## Phase 2 — Runtime/Auth Inspection

Inspect only as needed:

- `components/VoiceDashboard.tsx`
- `src/lib/barbieAI.js`
- Firebase client/config wrapper files
- `services/authService.ts`
- `functions/index.js`
- `package.json`
- `.env.local` key names only, never values

Confirm the app still attempts anonymous auth first, then fallback behavior.

## Phase 3 — Local Static Validation

Run:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
node --check functions/index.js
npm run lint
npm run build
```

## Phase 4 — Local Browser Smoke

Run:

```bash
npm run dev -- --host 127.0.0.1
curl -I http://127.0.0.1:3000/
```

In browser:

1. Load `http://127.0.0.1:3000/`.
2. Type `What should I focus on today?`.
3. Click Send.
4. Confirm typed submit fires.
5. Confirm `ensureBarbieAuth()` succeeds.
6. Confirm `askBarbie()` runs.
7. Confirm `chatWithBarbie` callable is reached.
8. Confirm real Barbie backend/model response appears.

## Phase 5 — Result Classification

Classify the result as one of:

### A. PASS

All of these are true:

- Anonymous auth succeeds.
- `chatWithBarbie` is reached.
- Real backend/model response appears in UI.
- Response is not mocked/static.

### B. AUTH STILL BLOCKED

`ensureBarbieAuth()` still fails.

Capture exact console/network error.

### C. CALLABLE BLOCKED

Auth succeeds, but callable is not reached or fails.

Capture exact error.

### D. MODEL/BACKEND BLOCKED

Callable is reached, but model/backend response fails.

Capture exact error without exposing secrets.

## Phase 6 — Stop Before Code Edits

If a code edit appears necessary, Codex must stop and propose:

- Exact file.
- Exact issue.
- Smallest safe change.
- Why it does not broaden scope.
- Validation to rerun.

No implementation without approval.
```

---

# planning/sprints/059-rerun-barbie-backend-smoke-after-auth-unblock/acceptance.md

```markdown
# Sprint 059 Acceptance — Rerun Barbie Backend Smoke After Auth Unblock

## Required Acceptance Criteria

Sprint 059 can be marked complete only if one of the following is true:

### Success Closeout

All must pass:

- [ ] App loads locally at `http://127.0.0.1:3000/`.
- [ ] Typed prompt can be submitted.
- [ ] `ensureBarbieAuth()` succeeds after Anonymous Auth enablement.
- [ ] `askBarbie()` runs.
- [ ] `chatWithBarbie` callable is reached.
- [ ] A real backend/model response appears visibly in the Barbie UI.
- [ ] Response is not mocked, hardcoded, or static.
- [ ] Validation commands pass or known warnings are documented.
- [ ] `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- [ ] No FlutterFlow, native build, PWA, deploy, Firebase Console, credential, or CEO Briefing work occurs.

### Blocked Closeout

If success cannot be proven, the sprint may close as HOLD only if:

- [ ] Exact blocker is captured.
- [ ] Failure stage is classified as auth, callable, or backend/model.
- [ ] No unsafe workaround is used.
- [ ] No fake or mocked response is accepted.
- [ ] Next operator decision or next sprint is clearly documented.

## Not Accepted

- Static page load only.
- `curl -I` success only.
- UI-only typed submit without backend call.
- Anonymous auth success without callable reach.
- Callable reach without real model response.
- Mocked Barbie response.
```

---

# planning/sprints/059-rerun-barbie-backend-smoke-after-auth-unblock/handoff-prompt.md

```markdown
# Sprint 059 Handoff Prompt

Read the Sprint 059 planning files before making changes.

Start with:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/ARCHITECTURE.md
- docs/API.md
- docs/VALIDATION.md
- planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/acceptance.md
- planning/sprints/059-rerun-barbie-backend-smoke-after-auth-unblock/requirements.md
- planning/sprints/059-rerun-barbie-backend-smoke-after-auth-unblock/blueprint.md
- planning/sprints/059-rerun-barbie-backend-smoke-after-auth-unblock/acceptance.md

Context:

The operator enabled Firebase Anonymous sign-in after Sprint 058. Sprint 059 must rerun the typed Barbie backend smoke to prove whether the backend/model path now works.

Before editing files, summarize:

1. What Sprint 059 is supposed to accomplish.
2. Which files you expect to inspect.
3. Which validation commands you will run.
4. Which browser smoke steps you will run.
5. What counts as PASS, AUTH STILL BLOCKED, CALLABLE BLOCKED, or MODEL/BACKEND BLOCKED.
6. Any blockers or ambiguities.

Rules:

- Do not change files during the start checkpoint.
- Do not stage, commit, or push.
- Do not deploy.
- Do not edit Firebase settings.
- Do not touch credentials or expose `.env.local` values.
- Do not touch FlutterFlow files.
- Do not run native builds.
- Do not touch PWA/home-screen files.
- Do not create or update CEO Briefing files.
- Do not fake or mock a backend response.
- Do not mark success unless a real Barbie backend/model response appears.

After the read-only checkpoint, wait for approval before implementation or file changes.
```

---

## 8. First Codex Prompt After Applying This Pack

After Codex applies the Architect Pack to the folder, use this prompt:

```text
Read the Sprint 059 planning files and summarize the plan before implementation.

Do not change files yet.

Start with:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/ARCHITECTURE.md
- docs/API.md
- docs/VALIDATION.md
- planning/sprints/058-firebase-auth-and-barbie-backend-smoke-unblock/acceptance.md
- planning/sprints/059-rerun-barbie-backend-smoke-after-auth-unblock/requirements.md
- planning/sprints/059-rerun-barbie-backend-smoke-after-auth-unblock/blueprint.md
- planning/sprints/059-rerun-barbie-backend-smoke-after-auth-unblock/acceptance.md

Then summarize:

1. What Sprint 059 is supposed to accomplish.
2. Which files you expect to inspect.
3. Which validation commands you will run.
4. Which browser smoke steps you will run.
5. What counts as PASS, AUTH STILL BLOCKED, CALLABLE BLOCKED, or MODEL/BACKEND BLOCKED.
6. Any blockers or ambiguities.

Do not implement until I approve your summary.
```

---

## 9. Architect Recommendation

Proceed with Sprint 059.

The highest-value outcome is not code. It is proof:

```text
Can Barbie now reach the backend and get a real model response after Anonymous Auth was enabled?
```

If yes, the project can move toward UAT readiness.

If no, the next blocker will be narrower and more useful than Sprint 058:

- auth still blocked,
- callable blocked,
- or backend/model blocked.
