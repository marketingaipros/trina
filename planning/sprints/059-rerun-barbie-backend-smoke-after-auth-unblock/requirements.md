# Sprint 059 Requirements - Rerun Barbie Backend Smoke After Auth Unblock

## Goal

Prove whether enabling Firebase Anonymous sign-in unblocks the typed Barbie backend smoke path.

The target path is:

```text
typed prompt -> askBarbie() -> ensureBarbieAuth() -> Firebase callable -> chatWithBarbie -> real backend/model response -> visible Barbie reply
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
