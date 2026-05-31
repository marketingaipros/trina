# Sprint 020 Requirements - FlutterFlow CEO Briefing Real Screenshot Pass

## Goal

Run an operator-led FlutterFlow Designer / Preview evidence pass for the deferred CEO Briefing screen, validate required prototype click paths, and capture real screenshot evidence only if the screen is confirmed in the real FlutterFlow project.

## Scope

- FlutterFlow Designer / Preview only.
- Verify Dashboard to CEO Briefing navigation.
- Verify CEO Briefing screen renders correctly.
- Verify CEO Briefing `Ask Trina to Prioritize` navigation to Assistant.
- Capture real screenshot evidence only.
- Store the screenshot only at `references/flutterflow/sprint-009/ceo-briefing.png`.
- Update planning, validation, and click-path notes.

## Required Click Paths

Record each path as `Pass`, `Fail`, `Blocked`, `Deferred`, `Not present`, `Renamed`, or `Untested`:

```text
Dashboard -> CEO Briefing
CEO Briefing -> Dashboard
CEO Briefing -> Ask Trina to Prioritize -> Assistant
```

`Pass` requires real FlutterFlow Designer or Preview validation. Documentation review alone is not sufficient.

## Evidence Rules

- `references/flutterflow/sprint-009/ceo-briefing.png` may exist only if it is a real FlutterFlow Designer or Preview screenshot.
- Do not create placeholder, fake, generated, renamed-unrelated, or text-only screenshot evidence.
- Leave `ceo-briefing.png` absent if the real screen or click paths cannot be verified.
- Document missing, blocked, deferred, or renamed state honestly.

## Protected Scope

Do not modify runtime app code, generated FlutterFlow exports, Firebase, Hermes, backend, package, native, build, release, deploy, auth, live AI, real financial data, secrets, or `.env` files.

Protected surfaces include:

```text
App.tsx
src/
components/
services/
hooks/
utils/
functions/
firebase.json
firestore.rules
package.json
package-lock.json
pnpm-lock.yaml
yarn.lock
android/
ios/
dist/
public/
.env
.env.*
```

## Current Builder-Pass Status

This local Builder pass cannot verify the real FlutterFlow project because no FlutterFlow Designer / Preview session or operator-provided screenshot is available in the repo context.

Current status:

- CEO Briefing screen existence: `Blocked`
- Actual screen label: `Untested`
- Screen render: `Blocked`
- Required click paths: `Blocked`
- Screenshot evidence: absent; do not create placeholder evidence
