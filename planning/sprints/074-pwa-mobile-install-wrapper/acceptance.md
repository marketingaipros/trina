# Sprint 074 Acceptance Criteria - PWA Mobile Install Wrapper

Sprint 074 is PASS only if all criteria below are satisfied.

## Current Result

```text
HOLD - PWA wrapper implemented locally, but real phone install UAT is not complete.
```

Local validation proved:

- Manifest is reachable.
- Icons are reachable.
- App shell metadata is present.
- App loads locally at a phone viewport.
- Typed Q&A still returns a visible Barbie answer.
- Play/Stop UI routing still works.
- Reminder create/appear/dismiss still works.

Still required before PASS:

- iPhone Safari and/or Android Chrome install/add-to-home-screen test on the target phone.
- Home-screen launch from the installed icon.
- Installed-mode audible Play proof from a real device speaker/headphone path.
- Installed-mode spoken-text match.
- Installed-mode Stop/cancel or clean speech end proof.
- Installed-mode reminder create/appear/dismiss proof.

## Installability Criteria

- The current Barbie web app has valid PWA/mobile install metadata.
- The manifest is reachable from the app shell.
- The app name and short name are appropriate for phone home-screen use.
- Required app icons are present and reachable.
- The app can be added to the home screen or installed on the target phone/browser path.
- Installed/home-screen launch opens the expected Barbie app URL/scope.

## Behavior Preservation Criteria

- Typed Q&A returns a visible Barbie answer.
- Play speaks the final visible answer.
- Spoken text matches the visible answer.
- Speech does not use stale, placeholder, hidden, debug, or internal text.
- Stop/cancel works or speech ends cleanly.
- Reminder can be created.
- Due reminder appears.
- Reminder can be dismissed.

## Mobile Criteria

- iPhone Safari install/add-to-home-screen behavior is tested or explicitly documented as unavailable in the Builder environment.
- Android Chrome install/add-to-home-screen behavior is tested or explicitly documented as unavailable in the Builder environment.
- Installed/home-screen launch does not introduce a layout break that blocks typing, Play, Stop, or reminders.

## Validation Criteria

- `git diff --check` passes.
- `npm run lint` passes or only known baseline warnings are documented.
- `npm run build` passes or only known baseline warnings are documented.
- `test ! -f references/flutterflow/sprint-009/ceo-briefing.png` passes.
- Sprint 064 and Sprint 072 files remain untouched unless separately approved.

## Release Gate

Client phone return-to-use remains HOLD if any of these are true:

- The app cannot be installed or added to home screen on the target phone path.
- Installed launch opens a blank, stale, broken, or wrong app.
- Voice talk-back fails after installed launch.
- Spoken text does not match the visible answer.
- Reminder flow regresses.
- PWA work requires Flutter, native packaging, Firebase settings, or backend changes not approved for Sprint 074.
