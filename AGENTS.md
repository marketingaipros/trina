# Agents

## Purpose
This file gives AI builders and reviewers operating instructions for the Barbie / TrinaOS Voice app.

## Operating Rules
- Do not modify production code without an explicit implementation request.
- Do not store secrets, API keys, bot tokens, refresh tokens, or service-account credentials in repo files.
- Keep the existing pink/white Barbie UI unless a sprint explicitly calls for design changes.
- Prefer small, auditable changes with `npm run lint` and `npm run build` validation.
- Treat Firebase Functions as the boundary for secret-backed operations.
- Treat Firestore security rules as production-critical.

## Current App Summary
Barbie / TrinaOS Voice is a Vite React personal assistant app for daycare-owner workflows. It supports chat, text fallback, reminders saved to Firestore, reminder popups, Firebase Hosting, Firebase Functions, and Capacitor mobile project folders. Gmail send is intentionally V2/disabled for V1 stability. Telegram webhook support is present in Functions code but requires secret setup before deploy.

## Builder Handoff
Before implementing any sprint:
1. Read `planning/STATE.md`.
2. Read the active sprint folder under `planning/sprints/`.
3. Confirm acceptance criteria in `acceptance.md`.
4. Inspect exact files before editing.
5. Run validation listed in `docs/VALIDATION.md`.
