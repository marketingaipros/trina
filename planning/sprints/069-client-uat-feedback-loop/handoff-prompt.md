# Sprint 069 Handoff Prompt - Client UAT Feedback Loop

Read these files before making changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/069-client-uat-feedback-loop/requirements.md
- planning/sprints/069-client-uat-feedback-loop/blueprint.md
- planning/sprints/069-client-uat-feedback-loop/acceptance.md

Sprint 069 is a docs/planning-only client UAT feedback-loop sprint.

Goal:
Prepare the project folder for structured limited client UAT of the current deployed Barbie web app.

Approved client URL:

https://barbie-92edc.web.app/

Important context:
Sprint 068 approved the current app for limited return-to-use. The client may use typed questions, Barbie/model answers, in-app reminders, reminder dismiss, and the feedback email link. Voice, talk-back, browser/native push, Flutter/FlutterFlow, and iPhone/native packaging are follow-ups, not Sprint 069 blockers.

Rules:

- Do not change runtime/source files.
- Do not deploy.
- Do not change Firebase settings.
- Do not change Firebase Functions.
- Do not change Firestore rules.
- Do not touch credentials.
- Do not touch FlutterFlow files.
- Do not touch native build files.
- Do not touch CEO Briefing files.
- Do not change `docs/API.md`.
- Do not change `docs/ARCHITECTURE.md`.
- Do not touch Sprint 064 untracked files.
- Do not stage, commit, or push unless separately approved.

Tasks:

1. Update `planning/STATE.md` for Sprint 069 active UAT.
2. Update `planning/RISKS.md` with UAT expectation risks.
3. Update `planning/QUESTIONS.md` with UAT open questions.
4. Update `docs/VALIDATION.md` with Sprint 069 UAT validation checklist.
5. Create `planning/sprints/069-client-uat-feedback-loop/` with:
   - `requirements.md`
   - `blueprint.md`
   - `acceptance.md`
   - `handoff-prompt.md`
6. Run validation:
   - `git diff --check`
   - `test ! -f references/flutterflow/sprint-009/ceo-briefing.png`
   - `git status --branch --short`

Closeout report must include:

1. Files changed.
2. Confirmation this was docs/planning only.
3. Confirmation Sprint 064 files remained untouched.
4. Validation commands and results.
5. UAT status.
6. Open owner/client questions.
7. Recommended next sprint.
8. Final `git status --branch --short`.

Do not mark Sprint 069 complete unless acceptance criteria are satisfied.
