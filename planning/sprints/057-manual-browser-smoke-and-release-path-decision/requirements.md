# Sprint 057 Requirements - Manual Browser Smoke and Release Path Decision

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
