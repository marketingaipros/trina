# Sprint 059 Acceptance - Rerun Barbie Backend Smoke After Auth Unblock

## Required Acceptance Criteria

Sprint 059 can be marked complete only if one of the following is true:

### Success Closeout

All must pass:

- [x] App loads locally at `http://127.0.0.1:3000/`.
- [x] Typed prompt can be submitted.
- [x] `ensureBarbieAuth()` succeeds after Anonymous Auth enablement.
- [x] `askBarbie()` runs.
- [x] `chatWithBarbie` callable is reached.
- [x] A real backend/model response appears visibly in the Barbie UI.
- [x] Response is not mocked, hardcoded, or static.
- [x] Validation commands pass or known warnings are documented.
- [x] `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- [x] No FlutterFlow, native build, PWA, deploy, Firebase Console, credential, or CEO Briefing work occurs.

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

## Sprint 059 Closeout

Result classification:

```text
PASS
```

Smoke proof target:

```text
typed prompt -> askBarbie() -> ensureBarbieAuth() -> Firebase callable -> chatWithBarbie -> real backend/model response -> visible Barbie reply
```

Validation:

- `git status --branch --short`: ran; showed only existing Sprint 059 planning/doc changes.
- `git diff --check`: passed.
- `test ! -f references/flutterflow/sprint-009/ceo-briefing.png`: passed.
- `node --check functions/index.js`: passed.
- `npm run lint`: passed.
- `npm run build`: passed with existing Vite warnings:
  - `services/authService.ts` mixed static/dynamic import chunk warning.
  - JS chunk larger than 500 kB warning.
- `npm run dev -- --host 127.0.0.1`: started successfully at `http://127.0.0.1:3000/`.
- `curl -I http://127.0.0.1:3000/`: returned `HTTP/1.1 200 OK`.

Browser smoke:

- Test prompt: `What should I focus on today?`
- Input cleared after Send.
- Barbie reply appeared visibly in the UI.

Console evidence:

```text
text submitted What should I focus on today?
message sent What should I focus on today?
askBarbie called What should I focus on today?
function called Object
callable returned Object
function success Object
loading reset
```

Network evidence:

```text
POST https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=[REDACTED] -> 200
POST https://us-central1-barbie-92edc.cloudfunctions.net/chatWithBarbie -> 200
OPTIONS https://us-central1-barbie-92edc.cloudfunctions.net/chatWithBarbie -> 204
```

Visible UI evidence:

```text
Today, please focus on the following tasks:
1. Family Communication...
2. Staff Coordination...
3. Calendar Review...
```

Errors:

- Console showed unrelated Gmail initialization errors: `Error: Google Identity Services not loaded`.
- No auth/callable/model failure appeared during the Barbie Send path.
- No secrets were printed.

Scope confirmation:

- No deploy.
- No Firebase setting change.
- No FlutterFlow change.
- No native build change.
- No credential exposure.
- No CEO Briefing file change.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
