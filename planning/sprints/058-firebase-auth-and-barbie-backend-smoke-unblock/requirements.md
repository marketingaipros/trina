# Sprint 058 Requirements - Firebase Auth and Barbie Backend Smoke Unblock

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

- `HOLD - auth/backend still blocked`
- `HOLD - backend works but core workflow still not ready`
- `CLIENT UAT CANDIDATE - web app backend/model path and typed fallback are proven`
