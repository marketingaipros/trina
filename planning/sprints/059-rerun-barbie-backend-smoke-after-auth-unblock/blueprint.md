# Sprint 059 Blueprint - Rerun Barbie Backend Smoke After Auth Unblock

## Phase 1 - Read-Only Checkpoint

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

## Phase 2 - Runtime/Auth Inspection

Inspect only as needed:

- `components/VoiceDashboard.tsx`
- `src/lib/barbieAI.js`
- Firebase client/config wrapper files
- `services/authService.ts`
- `functions/index.js`
- `package.json`
- `.env.local` key names only, never values

Confirm the app still attempts anonymous auth first, then fallback behavior.

## Phase 3 - Local Static Validation

Run:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
node --check functions/index.js
npm run lint
npm run build
```

## Phase 4 - Local Browser Smoke

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

## Phase 5 - Result Classification

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

## Phase 6 - Stop Before Code Edits

If a code edit appears necessary, Codex must stop and propose:

- Exact file.
- Exact issue.
- Smallest safe change.
- Why it does not broaden scope.
- Validation to rerun.

No implementation without approval.
