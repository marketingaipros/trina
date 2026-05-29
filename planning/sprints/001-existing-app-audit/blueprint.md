# Sprint 001 Blueprint

## Inspection Plan
1. Inspect project file tree.
2. Identify existing 120x/docs files to avoid overwriting.
3. Inspect root config: `package.json`, `firebase.json`, `capacitor.config.ts`.
4. Inspect frontend entry and app shell: `index.tsx`, `App.tsx`, key components.
5. Inspect backend: `functions/index.js`, `functions/package.json`.
6. Inspect Firebase client helpers: `src/lib/*`.
7. Inspect service layer: `services/*`.
8. Create missing documentation files only.

## Documentation Plan
- `AGENTS.md` and `CODEX.md` provide builder operating rules.
- `docs/*.md` describe architecture, API, data model, and validation.
- `planning/*.md` captures current state, domain, risks, decisions, questions, and inventory.
- Sprint folder captures requirements, blueprint, acceptance, and handoff.

## Current Findings Summary
- App is a Vite React assistant frontend.
- Firebase Functions is the backend boundary for AI, Google, Telegram, and push logic.
- Firestore stores messages, reminders, calendar events, and connection records.
- Capacitor mobile projects exist.
- Gmail send is V2/disabled for V1 stability.
- Telegram webhook code exists but secret/webhook setup is required.
