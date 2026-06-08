# Architect Pack - Sprint 059: Rerun Barbie Backend Smoke After Auth Unblock

Source pack:

```text
architect-packs/sprint-059-rerun-barbie-backend-smoke-after-auth-unblock-architect-pack.md
```

Sprint 058 proved that the typed Barbie UI path is wired, but it stopped before the backend callable because Firebase Auth failed inside `ensureBarbieAuth()`.

The operator has now enabled Firebase Anonymous sign-in in Firebase Console.

Sprint 059 exists to rerun the Barbie backend smoke after that external auth configuration change and determine whether the app can now produce a real backend/model response through the intended path:

```text
typed prompt -> askBarbie() -> ensureBarbieAuth() -> Firebase callable -> chatWithBarbie -> real backend/model response -> visible Barbie reply
```

This sprint must not broaden into FlutterFlow, native packaging, client rollout, deploys, or UI polish.

## Required Sprint Files

- `requirements.md`
- `blueprint.md`
- `acceptance.md`
- `handoff-prompt.md`

The full source architect pack remains in `architect-packs/`.
