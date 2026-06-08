# Sprint 069 Architect Pack — Client UAT Feedback Loop

**Project:** TrinaOS / Barbie current web app
**Sprint:** 069 — Client UAT Feedback Loop
**Date:** 2026-06-08
**Architect Layer:** ChatGPT
**Builder Layer:** Codex
**Status:** Architect Pack ready for Builder application

---

## 1. Architect Summary

Sprint 068 restored the current deployed web app to limited customer return-to-use status.

The live customer URL is approved for client use:

```text
https://barbie-92edc.web.app/
```

Sprint 069 should not add new product features. It should move the project from internal validation to structured client UAT.

The client should be able to use the current app while the team collects feedback and records what must become future sprints.

The main goal is to stop guessing and let the client test the restored app in real use.

---

## 2. Sprint Goal

Create the planning and validation structure for limited client UAT of the current Barbie web app.

The sprint should answer:

1. Can the client open and use the current web app from the approved URL?
2. Can the client ask typed questions and get Barbie/model answers?
3. Can the client create reminders and see in-app reminder behavior?
4. Can the client report issues through the feedback path?
5. Which remaining issues should become future sprints?

---

## 3. MVP Boundary

This is a UAT and feedback-loop sprint.

It is not:

- a voice recovery sprint
- a talk-back/text-to-speech sprint
- a browser/native push sprint
- a Flutter or FlutterFlow sprint
- an iPhone/native packaging sprint
- a redesign sprint
- an auth sprint
- a database architecture sprint
- a production SaaS hardening sprint

The current app is allowed to be used by the client while follow-up work continues.

---

## 4. Owner Decisions Already Applied

The following Sprint 068 decisions remain active:

1. The current web app is approved for limited return-to-use.
2. Typed questions are acceptable for now.
3. In-app reminders are acceptable for now.
4. Browser/native push is follow-up.
5. Voice/mic reliability is follow-up.
6. Flutter/native packaging is not required before client UAT.
7. The approved customer URL is:

```text
https://barbie-92edc.web.app/
```

---

## 5. Files to Create or Update

Codex should create or update only docs/planning files unless explicitly instructed otherwise later.

### Required updates

- `planning/STATE.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/069-client-uat-feedback-loop/requirements.md`
- `planning/sprints/069-client-uat-feedback-loop/blueprint.md`
- `planning/sprints/069-client-uat-feedback-loop/acceptance.md`
- `planning/sprints/069-client-uat-feedback-loop/handoff-prompt.md`

### Conditional updates

- `planning/DECISIONS.md`, only if Codex records a durable decision already approved by the owner.

### Do not update

- `docs/API.md`
- `docs/ARCHITECTURE.md`
- Firebase settings
- FlutterFlow files
- native build files
- credentials
- CEO Briefing files
- Sprint 064 untracked files
- runtime/source files

---

# File: `planning/STATE.md`

## Required State Update

Update the current state to reflect:

```markdown
# Project State

## Current Sprint

Sprint 069 — Client UAT Feedback Loop

## Current Status

APPROVE — Current web app is approved for limited client return-to-use.

Sprint 068 deployed the current build to Firebase Hosting and validated the approved customer URL:

https://barbie-92edc.web.app/

The client may use the app for typed questions, Barbie/model answers, in-app reminders, reminder dismiss, and feedback via the visible email link.

## Active Scope

Sprint 069 prepares and tracks limited client UAT. The purpose is to confirm real client use, collect feedback, and convert remaining issues into future sprints.

## Not In Current Scope

- Voice recovery
- App talking back / text-to-speech
- Browser/native push notifications
- FlutterFlow migration
- iPhone/native packaging
- Full production release hardening

## Next Action

Prepare client UAT instructions, validation checklist, feedback intake structure, and closeout criteria.

## Known Follow-Ups

- Voice/mic reliability
- Barbie spoken responses
- Browser/native push behavior
- Mobile install/iPhone packaging path
- Flutter/FlutterFlow decision
```

---

# File: `planning/RISKS.md`

## Required Risk Updates

Add or update risks for:

```markdown
| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Client may expect voice input to work immediately. | High | Medium | UAT instructions must state typed questions are the approved path for now. Voice is follow-up. | Active |
| Client may expect the app to speak answers out loud. | Medium | Medium | Record talk-back/text-to-speech as a future sprint, separate from UAT. | Active |
| Client may expect reminders to notify when the app is closed. | Medium | High | UAT instructions must say reminders are validated as in-app reminders for now. Browser/native push remains follow-up. | Active |
| Client feedback may arrive through email without structured details. | Medium | Medium | Provide a simple feedback format: what happened, what she expected, device/browser, time, screenshot if possible. | Active |
| Sprint 064 untracked files could be accidentally staged in later commits. | Medium | Medium | Builder must explicitly avoid staging Sprint 064 files unless separately approved. | Active |
```

---

# File: `planning/QUESTIONS.md`

## Required Question Updates

Add or update questions for:

```markdown
## Sprint 069 — Client UAT Feedback Loop

| Question | Owner | Status | Notes |
|---|---|---|---|
| Who is the first client tester? | Owner | Open | Needed before calling UAT complete. |
| What device/browser will the client use first? | Owner / Client | Open | Desktop Chrome, mobile Safari, or another browser should be recorded. |
| Is typed-only usage acceptable during UAT? | Owner / Client | Open | Sprint 068 approved typed fallback internally; client expectation should be confirmed. |
| Does the client need Barbie to speak answers out loud before wider use? | Owner / Client | Open | If yes, create a dedicated talk-back sprint. |
| Are in-app reminders enough during UAT, or does the client require closed-app push? | Owner / Client | Open | If push is required, create a notification hardening sprint. |
| What feedback format should the client use? | Owner | Open | Recommended: issue, expected behavior, device/browser, time, screenshot if available. |
| Who gives final go/no-go after UAT? | Owner | Open | Required before full release. |
```

---

# File: `docs/VALIDATION.md`

## Required Validation Update

Add a Sprint 069 UAT validation section:

```markdown
# Sprint 069 Client UAT Validation

## Approved Client URL

https://barbie-92edc.web.app/

## UAT Position

The app is approved for limited client return-to-use, not full production release.

## Client-Tested Flows

The client should validate:

1. Open the app URL.
2. Ask a typed question.
3. Confirm Barbie answers.
4. Create a reminder.
5. Wait for the in-app reminder.
6. Dismiss the reminder.
7. Use the feedback email link if something goes wrong.

## Known Follow-Ups Not Blocking UAT

- Voice/mic input
- App spoken responses
- Browser/native push
- iPhone/native packaging
- Flutter/FlutterFlow migration

## Feedback Format

Ask the client to send:

- What she tried to do
- What happened
- What she expected
- Device and browser
- Approximate time
- Screenshot or screen recording, if possible

## UAT Closeout Evidence

Sprint 069 can close only when the project records:

- first tester name or role
- tested URL
- tested device/browser
- typed question result
- reminder result
- feedback path result
- known issues found
- recommendation for next sprint
```

---

# File: `planning/sprints/069-client-uat-feedback-loop/requirements.md`

```markdown
# Sprint 069 Requirements — Client UAT Feedback Loop

## Purpose

Sprint 069 moves the restored Barbie web app from internal validation to limited client UAT.

Sprint 068 approved the current web app for limited return-to-use. The client can now use the live web app while remaining follow-up work is planned separately.

## Approved Customer URL

https://barbie-92edc.web.app/

## User Story

As the project owner, I want the client to test the current Barbie app in real use so we can confirm what works, collect feedback, and decide the next sprint based on actual client experience instead of assumptions.

## In Scope

- Record Sprint 069 as active client UAT.
- Document what the client can use now.
- Document what is not part of the current approval.
- Create a simple UAT checklist.
- Create a simple feedback intake format.
- Track client-reported issues as follow-up candidates.
- Preserve the approved Sprint 068 status.

## Out of Scope

- Runtime/source changes
- Voice input fixes
- Text-to-speech/talk-back restoration
- Browser/native push implementation
- Flutter/FlutterFlow migration
- iPhone/native app packaging
- Auth changes
- Firebase settings changes
- Firestore rules changes
- Cloud Functions changes
- UI redesign
- Production SaaS hardening

## Client Can Use Now

- Open the live web app.
- Ask typed questions.
- Receive Barbie/model answers.
- Create in-app reminders.
- See due reminders while in the app.
- Dismiss reminders.
- Use feedback email link.

## Known Follow-Ups

- Voice/mic reliability
- Barbie speaking answers out loud
- Browser/native push behavior
- Mobile install/iPhone packaging
- Flutter/FlutterFlow direction

## Required Outcome

Sprint 069 must end with one of:

- `PASS — client UAT started and feedback loop established`
- `HOLD — client UAT blocked`
```

---

# File: `planning/sprints/069-client-uat-feedback-loop/blueprint.md`

```markdown
# Sprint 069 Blueprint — Client UAT Feedback Loop

## Build Type

Docs/planning only.

Do not change runtime/source files during this sprint unless the owner creates a separate approved sprint or explicitly changes scope.

## Step 1 — Inspect Current Repo State

Run:

```bash
git status --branch --short
```

Confirm:

- Sprint 068 is committed and pushed.
- Sprint 064 files remain untracked.
- No unexpected runtime/source changes are present.

## Step 2 — Update Planning State

Update `planning/STATE.md` to show Sprint 069 as active and the current app as approved for limited client return-to-use.

Include the live URL:

```text
https://barbie-92edc.web.app/
```

## Step 3 — Update Risks

Update `planning/RISKS.md` with risks around:

- voice expectation
- app talk-back expectation
- push notification expectation
- unstructured feedback
- accidental staging of Sprint 064 files

## Step 4 — Update Questions

Update `planning/QUESTIONS.md` with the UAT questions:

- first tester
- device/browser
- typed-only acceptance
- talk-back need
- push need
- feedback format
- final go/no-go approver

## Step 5 — Update Validation

Update `docs/VALIDATION.md` with Sprint 069 UAT validation:

- approved URL
- tested flows
- known follow-ups
- feedback format
- UAT closeout evidence

## Step 6 — Create Sprint Folder

Create:

```text
planning/sprints/069-client-uat-feedback-loop/
```

with:

- `requirements.md`
- `blueprint.md`
- `acceptance.md`
- `handoff-prompt.md`

## Step 7 — Validate Docs-Only Work

Run:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git status --branch --short
```

## Protected Files

Do not edit:

- runtime/source files
- Firebase settings
- Firebase Functions
- Firestore rules
- FlutterFlow files
- native build files
- credentials
- CEO Briefing files
- `docs/API.md`
- `docs/ARCHITECTURE.md`
- Sprint 064 untracked files
```

---

# File: `planning/sprints/069-client-uat-feedback-loop/acceptance.md`

```markdown
# Sprint 069 Acceptance — Client UAT Feedback Loop

Sprint 069 is complete only when all required docs/planning files are updated and the project is ready for structured client UAT.

## Acceptance Criteria

- [ ] `planning/STATE.md` shows Sprint 069 as active.
- [ ] `planning/STATE.md` preserves Sprint 068 approval for limited return-to-use.
- [ ] `planning/STATE.md` includes the approved customer URL.
- [ ] `planning/RISKS.md` includes UAT expectation risks.
- [ ] `planning/QUESTIONS.md` includes first tester, device/browser, typed-only, talk-back, push, feedback, and go/no-go questions.
- [ ] `docs/VALIDATION.md` includes a Sprint 069 client UAT validation section.
- [ ] Sprint 069 folder exists with requirements, blueprint, acceptance, and handoff prompt.
- [ ] No runtime/source files changed.
- [ ] No Firebase settings changed.
- [ ] No FlutterFlow files changed.
- [ ] No native build files changed.
- [ ] No credentials changed.
- [ ] No CEO Briefing files changed.
- [ ] `docs/API.md` and `docs/ARCHITECTURE.md` were not changed.
- [ ] Sprint 064 untracked files remain untouched.
- [ ] `git diff --check` passes.
- [ ] `test ! -f references/flutterflow/sprint-009/ceo-briefing.png` passes.

## Closeout Recommendation

Sprint 069 must end with one of:

- `PASS — client UAT started and feedback loop established`
- `HOLD — client UAT blocked`

## Required Closeout Report

Builder must report:

1. Files changed.
2. Whether this was docs/planning only.
3. Whether Sprint 064 files remained untouched.
4. Validation commands run and results.
5. Current UAT status.
6. Open questions that still require owner/client answers.
7. Recommended next sprint.
8. Final `git status --branch --short`.
```

---

# File: `planning/sprints/069-client-uat-feedback-loop/handoff-prompt.md`

```markdown
# Sprint 069 Handoff Prompt — Client UAT Feedback Loop

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
```

---

## 6. Architect Notes for Owner

Recommended client message after Sprint 069 docs are applied:

```text
Here is the current Barbie app link:

https://barbie-92edc.web.app/

For this test, please use typed questions and in-app reminders. If something does not work, use the feedback email link inside the app.

When reporting a problem, please include what you tried, what happened, what you expected, what device/browser you used, and a screenshot if possible.
```

---

## 7. Next Sprint Candidates After Sprint 069

Recommended order after client UAT starts:

1. Sprint 070 — Voice Input Recovery
2. Sprint 071 — Barbie Talk-Back / Text-to-Speech
3. Sprint 072 — Reminder Notification Hardening
4. Sprint 073 — Mobile Install / iPhone Path Decision
5. Sprint 074+ — Flutter/FlutterFlow Path, only if still needed

---

## 8. Codex Apply-Pack Prompt

```text
Apply the Sprint 069 Architect Pack as docs/planning only.

Use the Architect Pack content to create or update the listed files:

- planning/STATE.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/069-client-uat-feedback-loop/requirements.md
- planning/sprints/069-client-uat-feedback-loop/blueprint.md
- planning/sprints/069-client-uat-feedback-loop/acceptance.md
- planning/sprints/069-client-uat-feedback-loop/handoff-prompt.md

Only update planning/DECISIONS.md if the Architect Pack contains a new durable owner-approved decision that is not already recorded.

Do not edit runtime/source files.
Do not deploy.
Do not edit Firebase settings, Firebase Functions, Firestore rules, FlutterFlow files, native build files, credentials, CEO Briefing files, docs/API.md, or docs/ARCHITECTURE.md.
Do not touch Sprint 064 untracked files.
Do not stage, commit, or push.

After applying the pack, run:

- git status --branch --short
- git diff --check
- test ! -f references/flutterflow/sprint-009/ceo-briefing.png

Report:

1. Files changed/created.
2. Whether planning/DECISIONS.md was updated and why.
3. Validation results.
4. Final git status.
5. Confirmation Sprint 064 files remained untouched.
```
