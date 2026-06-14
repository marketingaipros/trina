# Sprint 074 Handoff Prompt - PWA Mobile Install Wrapper

You are the Builder for Sprint 074.

Your job is to make the current working Barbie web app installable on a phone as a PWA/home-screen app without changing core app behavior.

Read these files before making changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/ARCHITECTURE.md
- docs/API.md
- docs/VALIDATION.md
- planning/sprints/074-pwa-mobile-install-wrapper/requirements.md
- planning/sprints/074-pwa-mobile-install-wrapper/blueprint.md
- planning/sprints/074-pwa-mobile-install-wrapper/acceptance.md

Then summarize before implementation:

1. What Sprint 074 is supposed to accomplish.
2. Which files you expect to modify.
3. What tests or validation steps you will run.
4. Any blockers or ambiguities.

Do not start implementation until the summary is approved.

Important constraints:

- Do not rebuild the app in Flutter.
- Do not work on FlutterFlow.
- Do not work on native packaging.
- Do not change Firebase settings.
- Do not change Cloud Functions.
- Do not change Firestore rules.
- Do not change credentials.
- Do not touch Sprint 064 files.
- Do not touch Sprint 072 files.
- Do not create CEO Briefing work.
- Do not redesign the Barbie dashboard.
- Do not add aggressive service worker caching that could serve stale answers or stale reminders.

Sprint 073 behavior to preserve:

```text
Typed Q&A works.
Visible Barbie answer appears.
Barbie speaks audibly.
Spoken text matches visible answer.
Stop/cancel works or speech ends cleanly.
Reminder create/appear/dismiss works.
Final result: PASS.
```

Required final evidence format:

```text
Target URL installed from:
Target phone/browser:
Manifest reachable: yes/no
Icons reachable: yes/no
Install/add-to-home-screen completed: yes/no
Home-screen launch opened Barbie app: yes/no
Typed Q&A works after installed launch: yes/no
Audible Play works after installed launch: yes/no
Spoken text matches visible answer: yes/no
Stop/cancel works or speech ends cleanly: yes/no
Reminder create/appear/dismiss works: yes/no
Final result: PASS/HOLD
Notes:
```
