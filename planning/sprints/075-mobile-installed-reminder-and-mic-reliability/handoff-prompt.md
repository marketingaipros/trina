# Sprint 075 Handoff Prompt - Mobile Installed Reminder + Mic Reliability Fix

Read the following files before making changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/ARCHITECTURE.md
- docs/API.md
- docs/VALIDATION.md
- docs/PWA.md
- planning/sprints/075-mobile-installed-reminder-and-mic-reliability/requirements.md
- planning/sprints/075-mobile-installed-reminder-and-mic-reliability/blueprint.md
- planning/sprints/075-mobile-installed-reminder-and-mic-reliability/acceptance.md

Then summarize:

1. What Sprint 075 is supposed to accomplish.
2. Which files you expect to modify.
3. What tests or validation steps you will run.
4. Any blockers or ambiguities.

Do not start implementation until the summary is approved.

Sprint 075 goal:
Fix the installed mobile PWA reminder and microphone experience. When the user asks Barbie to set a reminder with enough detail, Barbie should create the reminder, not explain how to word it. Mic behavior should be more reliable where supported and should provide a clear fallback when mobile browser speech recognition fails.

Rules:

- Preserve Sprint 073 audible voice behavior.
- Preserve Sprint 074 installed PWA wrapper.
- Do not rebuild the app.
- Do not touch Firebase settings, Firestore rules, Functions, credentials, FlutterFlow files, native packaging, Sprint 064 files, Sprint 072 files, or CEO Briefing files.
- Do not add service worker/offline caching unless strictly necessary and justified.
- Do not stage, commit, push, or deploy unless explicitly approved.
- Stop after the summary and wait for approval.
