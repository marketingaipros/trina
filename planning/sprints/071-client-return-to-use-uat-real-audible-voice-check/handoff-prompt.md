# Sprint 071 Handoff Prompt - Client Return-to-Use UAT + Real Audible Voice Check

Read before making changes:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/API.md`
- `docs/VALIDATION.md`
- `planning/sprints/071-client-return-to-use-uat-real-audible-voice-check/requirements.md`
- `planning/sprints/071-client-return-to-use-uat-real-audible-voice-check/blueprint.md`
- `planning/sprints/071-client-return-to-use-uat-real-audible-voice-check/acceptance.md`

Then summarize:

1. What Sprint 071 is supposed to prove.
2. Which files you expect to inspect.
3. Which files you expect to modify, if any.
4. Which validation steps you will run.
5. Any blockers or ambiguities.
6. How you will protect Sprint 064 untracked files.

Do not start UAT execution or make changes until approved.

Sprint goal:
Determine whether the current browser app can be returned to the client for limited use.

Must prove:
- Exact client app URL/path.
- Typed Q&A works.
- Visible Barbie/model answer appears.
- Real audible talk-back works on an actual browser/device.
- Spoken text matches the visible answer.
- Stop/disable works.
- Reminder create/display/dismiss works.
- Feedback link remains visible.

Boundaries:
- Do not implement speech-to-text.
- Do not add wake word.
- Do not add native voice.
- Do not work on Flutter or FlutterFlow.
- Do not package mobile.
- Do not deploy.
- Do not touch Firebase, Firestore rules, credentials, CEO Briefing, or Sprint 064 files.
- Do not stage, commit, or push unless separately instructed.

Final report must include:
1. PASS, PASS WITH CAVEAT, or HOLD.
2. URL/path tested.
3. Browser/device tested.
4. Real audible voice evidence.
5. Q&A evidence.
6. Reminder evidence.
7. Feedback link evidence.
8. Files changed.
9. Validation command results.
10. Confirmation Sprint 064 stayed untouched.
