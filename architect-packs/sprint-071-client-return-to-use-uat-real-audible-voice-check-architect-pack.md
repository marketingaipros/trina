# Sprint 071 Architect Pack — Client Return-to-Use UAT + Real Audible Voice Check

**Project:** TrinaOS Voice / Barbie
**Sprint:** 071
**Sprint name:** client-return-to-use-uat-real-audible-voice-check
**Created:** 2026-06-08
**Architect Layer:** ChatGPT
**Builder Layer:** Codex
**Pack type:** Apply docs/planning first. Runtime changes only if the sprint files explicitly require a tiny fix after UAT proof fails.

---

## 0. Architect Intent

Sprint 071 is a tiny client return-to-use gate.

The app was already working before the recent structure/framework work. The immediate business goal is to decide whether the customer can use the current app again for the main things she cares about:

- Ask typed questions and receive Barbie/model answers.
- Hear Barbie talk back out loud from a real browser/device speaker.
- Create reminders.
- See and dismiss in-app due reminders.
- Access the feedback path.

Sprint 071 must not become a Flutter sprint, mobile packaging sprint, closed-app push sprint, new voice-input sprint, or redesign sprint.

The core question is simple:

> Can the client safely use the current app again while the remaining roadmap continues?

---

## 1. Files Codex Must Create or Update

Apply this Architect Pack by creating or updating only the listed docs/planning files unless the sprint files later authorize a tiny UAT evidence fix.

### Required updates

- `planning/STATE.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/071-client-return-to-use-uat-real-audible-voice-check/requirements.md`
- `planning/sprints/071-client-return-to-use-uat-real-audible-voice-check/blueprint.md`
- `planning/sprints/071-client-return-to-use-uat-real-audible-voice-check/acceptance.md`
- `planning/sprints/071-client-return-to-use-uat-real-audible-voice-check/handoff-prompt.md`

### Conditional updates

- `planning/DECISIONS.md` only if Sprint 071 approves or blocks client return-to-use.
- `docs/API.md` only if any current URL, public route, test input/output contract, or user-facing interface contract needs clarification.
- `docs/ARCHITECTURE.md` should remain untouched unless Codex discovers the sprint cannot be validated without documenting a real architecture change.

### Explicitly do not touch

- Sprint 064 untracked files
- Firebase config
- Firebase Functions
- Firestore rules
- FlutterFlow files
- Native/mobile packaging files
- Credentials
- CEO Briefing files
- Deploy files
- Any source/runtime file unless a tiny UAT-blocking fix is explicitly identified and approved after the read-first gate

---

## 2. Current Known State

Sprint 070 is complete and pushed.

Known evidence from Sprint 070:

- Commit: `2dcf744 fix: restore browser talk-back for Barbie answers`
- Sprint 070 result: `PASS - voice talk-back restored for browser-visible Barbie answers`
- Typed Q&A works.
- Barbie/model answer displays.
- Browser `speechSynthesis` receives the exact final visible Barbie answer.
- Reminder create/display/dismiss works.
- Feedback link remains visible.
- No backend/model contract change was needed.
- No Firebase, FlutterFlow, native, mobile packaging, credential, deploy, or CEO Briefing work was done.
- Remaining caveat: headless automation proved correct text routing, but real audible speaker output still depends on a real browser/device audio path.

Sprint 071 starts from that state.

---

## 3. Architect-Facing Requirements

### 3.1 Primary business requirement

Confirm whether the current app is ready to return to the client for limited use.

The client-use scope is:

1. Ask questions.
2. Receive Barbie/model answers.
3. Hear Barbie talk back out loud.
4. Ask for reminders.
5. See reminders appear in the app.
6. Dismiss reminders.
7. Provide feedback.

### 3.2 UAT requirement

Sprint 071 must produce a clear release recommendation:

- `PASS - client return-to-use approved for current browser app`
- `HOLD - client return-to-use blocked`
- `PASS WITH CAVEAT - client can use the current browser app, but one or more limitations must be disclosed`

The recommendation must be backed by evidence.

### 3.3 Real audible voice requirement

Sprint 071 must test actual audible output in a real browser/device session.

Headless proof is not enough for this sprint.

The Builder must document:

- Browser used.
- Device used.
- App URL/path used.
- Whether sound was audible.
- Whether the spoken content matched the visible answer.
- Whether stop/disable worked.

### 3.4 Current app URL requirement

Sprint 071 must identify the exact app URL/path the client should use.

Do not assume the old deployed URL is current unless verified.

The Builder must distinguish:

- Local test URL.
- Deployed/current client URL.
- Whether deployed app matches the current repo behavior.

### 3.5 Preservation requirement

The Sprint 069 and Sprint 070 flows must remain intact:

- Typed Q&A remains functional.
- Barbie/model answer remains visible.
- Browser talk-back remains functional.
- Reminder create/display/dismiss remains functional.
- Feedback link remains visible.
- No unrelated changes are introduced.

### 3.6 Scope boundaries

Sprint 071 is not:

- Speech-to-text.
- Wake word.
- Native voice.
- Flutter migration.
- FlutterFlow work.
- iOS packaging.
- Android packaging.
- Closed-app push notification.
- App Store release.
- Backend/model redesign.
- Firebase Auth change.
- Firestore rules change.
- UI redesign.
- CRM or dashboard expansion.

---

## 4. Builder-Facing Implementation Plan

### Phase 1 — Read-first gate

Codex must read:

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

Then stop and summarize:

1. What Sprint 071 is supposed to prove.
2. Which files it expects to inspect.
3. Which files it expects to modify, if any.
4. Which validation steps it will run.
5. Any blockers or ambiguities.
6. Whether Sprint 064 will remain untouched.

No implementation or UAT execution until the summary is approved.

### Phase 2 — Baseline status capture

Run:

```bash
git status --branch --short
git log --oneline -1
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Expected latest commit:

```text
2dcf744 fix: restore browser talk-back for Barbie answers
```

Sprint 064 must remain untracked and untouched.

### Phase 3 — Identify current usable URL/path

Codex must determine and document:

- Local URL used for validation.
- Deployed URL, if available.
- Whether deployed URL reflects the current Sprint 070 behavior.
- If deployed URL is stale or unknown, mark client return-to-use as blocked or caveated until deploy/path is resolved.

Do not deploy as part of this sprint unless a separate deploy sprint is created.

### Phase 4 — Manual real browser/device audible UAT

Run the app in a real browser/device environment.

Minimum test script:

1. Open the current app URL.
2. Ask a simple typed question.
3. Confirm Barbie/model returns a visible answer.
4. Turn talk-back on.
5. Press play or trigger the next answer speak flow.
6. Confirm the answer is audible from the real speaker or selected audio output.
7. Confirm the spoken text matches the visible answer.
8. Press stop and confirm speech stops.
9. Turn talk-back off and confirm it does not auto-speak the next answer.
10. Ask for a reminder, for example: `Remind me in 1 minute to check the door.`
11. Confirm the app acknowledges the reminder.
12. Wait for the in-app reminder.
13. Confirm the reminder appears.
14. Dismiss the reminder.
15. Confirm the reminder clears.
16. Confirm feedback link is still visible.

### Phase 5 — Evidence capture

Record concise evidence in docs/planning only:

- App URL/path tested.
- Browser/device tested.
- Typed Q&A result.
- Audible voice result.
- Stop/disable result.
- Reminder result.
- Feedback link result.
- Any caveats.
- Release recommendation.

### Phase 6 — Closeout decision

Set Sprint 071 to one of:

- `PASS`
- `PASS WITH CAVEAT`
- `HOLD`

A `PASS` requires real audible output to be heard on a real browser/device and all core client flows to work.

A `PASS WITH CAVEAT` is allowed only if the app is usable, but the client must receive a clear limitation such as “use Chrome desktop only” or “talk-back requires clicking play.”

A `HOLD` is required if:

- Deployed/current client URL is not confirmed.
- Typed Q&A fails.
- Barbie/model answer does not display.
- Real audible talk-back cannot be heard.
- Reminder create/display/dismiss fails.
- Feedback link is missing.
- Any change breaks Sprint 069 or Sprint 070 behavior.

---

## 5. Acceptance Criteria

Sprint 071 is complete only when all required criteria are evaluated and documented.

### 5.1 Required evidence

- [ ] `git status --branch --short` captured.
- [ ] Latest commit confirmed as Sprint 070 commit or later approved commit.
- [ ] `git diff --check` passes.
- [ ] CEO Briefing absence check passes.
- [ ] Sprint 064 files remain untracked and untouched.
- [ ] Local app URL/path tested or explicitly noted.
- [ ] Deployed/current client URL tested or explicitly marked unresolved.
- [ ] Browser/device used for real audible test documented.
- [ ] Typed Q&A returns visible Barbie/model answer.
- [ ] Talk-back produces real audible output from actual browser/device speaker or audio output.
- [ ] Spoken text matches the visible final Barbie/model answer.
- [ ] Stop/disable control works.
- [ ] Reminder creation works.
- [ ] In-app reminder display works.
- [ ] Reminder dismiss works.
- [ ] Feedback link remains visible.
- [ ] No Firebase, FlutterFlow, native, mobile packaging, credential, deploy, or CEO Briefing work was done.
- [ ] Release recommendation is recorded as `PASS`, `PASS WITH CAVEAT`, or `HOLD`.

### 5.2 PASS standard

Sprint 071 may be marked `PASS` only if:

- Current client URL/path is known and usable.
- Real audible output is heard on a real browser/device.
- Typed Q&A works.
- Reminder create/display/dismiss works.
- Feedback link works.
- No core regression is found.

### 5.3 PASS WITH CAVEAT standard

Sprint 071 may be marked `PASS WITH CAVEAT` only if:

- The current app is usable for the client.
- Any limitation is clear, acceptable, and written down.
- The limitation does not block the client’s main use case.

Examples:

- “Use Chrome desktop for now.”
- “Click play to hear answer.”
- “Keep app open for in-app reminders.”

### 5.4 HOLD standard

Sprint 071 must be marked `HOLD` if:

- Client URL is unknown or stale.
- Real audible voice cannot be confirmed.
- Q&A fails.
- Reminders fail.
- Feedback path is missing.
- The app cannot be safely handed back to the client.

---

## 6. Risks

| Risk | Impact | Mitigation | Status |
|---|---:|---|---|
| Browser speech synthesis varies by browser/device. | Medium | Test actual target browser/device and record caveat. | Active |
| Deployed client URL may not match current repo behavior. | High | Verify exact URL before client handoff. | Active |
| In-app reminders may require app to stay open. | Medium | Disclose limitation if true. | Active |
| Operator may over-expand into Flutter/mobile packaging. | High | Keep Sprint 071 UAT-only. Create later sprint for packaging. | Active |
| Sprint 064 untracked files could be accidentally staged. | Medium | Explicitly protect Sprint 064 in every handoff. | Active |

---

## 7. Open Questions

These should be answered during Sprint 071 if possible:

1. What exact URL should the client use right now?
2. Does the deployed URL reflect the Sprint 070 talk-back change?
3. Which browser/device should be considered the supported client path for now?
4. Is real audible talk-back heard from the client-like browser/device?
5. Does the client need to keep the browser/app open for reminders to appear?
6. Is the return-to-use recommendation `PASS`, `PASS WITH CAVEAT`, or `HOLD`?

---

## 8. Decisions To Record If Proven

Record in `planning/DECISIONS.md` only after Sprint 071 evidence supports it.

Possible decision if PASS:

```markdown
| 2026-06-08 | Approve current browser app for limited client return-to-use. | Sprint 071 proved typed Q&A, visible Barbie/model answer, real audible talk-back, in-app reminders, dismiss, and feedback link on the tested client path. | Client can use the current browser app while Flutter/mobile packaging remains future work. |
```

Possible decision if PASS WITH CAVEAT:

```markdown
| 2026-06-08 | Approve current browser app for limited client return-to-use with caveats. | Sprint 071 proved the core flow, but one or more limitations remain. | Client handoff must include the documented limitation. |
```

Possible decision if HOLD:

```markdown
| 2026-06-08 | Hold client return-to-use. | Sprint 071 found a blocker in URL, audible voice, Q&A, reminders, or feedback flow. | Create a focused follow-up sprint before giving the app back to the client. |
```

---

## 9. File Drafts To Apply

## `planning/sprints/071-client-return-to-use-uat-real-audible-voice-check/requirements.md`

```markdown
# Sprint 071 Requirements — Client Return-to-Use UAT + Real Audible Voice Check

## Status

Planned.

## Goal

Decide whether the client can use the current browser app again for the main return-to-use flow.

## Client-use scope

The app must support:

1. Typed questions.
2. Visible Barbie/model answers.
3. Real audible talk-back from a real browser/device audio path.
4. Reminder creation.
5. In-app reminder display.
6. Reminder dismiss.
7. Feedback link visibility.

## Business context

The app was already working before recent structure/framework work. The near-term goal is not to rebuild it. The near-term goal is to safely return the current app to client use while future work continues.

## Must prove

- Exact current app URL/path the client should use.
- Whether the deployed/current client URL reflects Sprint 070 behavior.
- Typed Q&A still works.
- Barbie/model answer appears visibly.
- Talk-back can be heard out loud on a real browser/device.
- Spoken text matches the visible answer.
- Stop/disable works.
- Reminder create/display/dismiss works.
- Feedback link remains visible.

## Out of scope

- Speech-to-text.
- Wake word.
- Native voice.
- Flutter migration.
- FlutterFlow work.
- iOS or Android packaging.
- Closed-app push notifications.
- Backend/model contract changes.
- Firebase changes.
- UI redesign.
- Deploy, unless separately approved in a deploy sprint.

## Protection rules

- Do not touch Sprint 064 files.
- Do not touch Firebase, FlutterFlow, native/mobile packaging, credentials, deploy files, or CEO Briefing files.
- Do not stage, commit, push, or deploy unless separately instructed.
```

---

## `planning/sprints/071-client-return-to-use-uat-real-audible-voice-check/blueprint.md`

```markdown
# Sprint 071 Blueprint — Client Return-to-Use UAT + Real Audible Voice Check

## Approach

Run a focused UAT gate against the current browser app.

This sprint should primarily inspect, run, test, and document. It should not build new product scope.

## Step 1 — Read project files

Read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/API.md`
- `docs/VALIDATION.md`
- this sprint's requirements, blueprint, and acceptance files

Then summarize understanding before executing UAT.

## Step 2 — Capture clean baseline

Run:

```bash
git status --branch --short
git log --oneline -1
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Confirm Sprint 064 remains untracked and untouched.

## Step 3 — Identify app URL/path

Document:

- local URL/path used
- deployed/current client URL, if available
- whether deployed/current client URL reflects Sprint 070 behavior

If the deployed/client URL cannot be confirmed, preserve that as a blocker or caveat.

## Step 4 — Real browser/device audible test

Use a real browser/device session, not only headless automation.

Test:

1. Open app.
2. Send a typed question.
3. Confirm visible Barbie/model answer.
4. Trigger talk-back.
5. Confirm audible speech from real speaker/audio output.
6. Confirm spoken content matches visible answer.
7. Confirm stop/disable works.

## Step 5 — Reminder and feedback test

Test:

1. Ask for a short reminder.
2. Confirm app acknowledges reminder creation.
3. Wait for due reminder.
4. Confirm reminder appears in app.
5. Dismiss reminder.
6. Confirm reminder clears.
7. Confirm feedback link remains visible.

## Step 6 — Update docs/planning

Update only relevant docs/planning files with evidence and recommendation:

- `planning/STATE.md`
- `docs/VALIDATION.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `planning/sprints/071-client-return-to-use-uat-real-audible-voice-check/acceptance.md`
- `planning/DECISIONS.md`, only if return-to-use is approved or explicitly held

## Step 7 — Final validation

Run:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Report final result as `PASS`, `PASS WITH CAVEAT`, or `HOLD`.
```

---

## `planning/sprints/071-client-return-to-use-uat-real-audible-voice-check/acceptance.md`

```markdown
# Sprint 071 Acceptance — Client Return-to-Use UAT + Real Audible Voice Check

## Result

Pending.

## Required checks

- [ ] `git status --branch --short` captured.
- [ ] `git log --oneline -1` captured.
- [ ] `git diff --check` passes.
- [ ] `test ! -f references/flutterflow/sprint-009/ceo-briefing.png` passes.
- [ ] Sprint 064 files remain untracked and untouched.
- [ ] Local app URL/path documented.
- [ ] Deployed/current client URL documented or marked unresolved.
- [ ] Browser/device used for real audible test documented.
- [ ] Typed Q&A returns visible Barbie/model answer.
- [ ] Real audible talk-back is heard from actual browser/device audio output.
- [ ] Spoken text matches visible final Barbie/model answer.
- [ ] Stop/disable control works.
- [ ] Reminder creation works.
- [ ] In-app reminder appears.
- [ ] Reminder dismiss clears the visible reminder.
- [ ] Feedback link remains visible.
- [ ] No Firebase, FlutterFlow, native, mobile packaging, credential, deploy, or CEO Briefing files were touched.
- [ ] Release recommendation recorded.

## PASS

Use only if:

- Current client URL/path is known and usable.
- Real audible talk-back is confirmed.
- Typed Q&A works.
- Reminder create/display/dismiss works.
- Feedback link works.

## PASS WITH CAVEAT

Use only if:

- The client can use the app now.
- Any limitation is documented clearly.
- The limitation does not block the main client use case.

## HOLD

Use if:

- Client URL is not confirmed.
- Real audible talk-back cannot be confirmed.
- Q&A fails.
- Reminders fail.
- Feedback link is missing.
- A core client-use blocker remains.

## Evidence

To be filled during closeout.
```

---

## `planning/sprints/071-client-return-to-use-uat-real-audible-voice-check/handoff-prompt.md`

```markdown
# Sprint 071 Handoff Prompt — Client Return-to-Use UAT + Real Audible Voice Check

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
```

---

## 10. Codex Apply-Pack Prompt

Use this after saving this Architect Pack in the repository.

```text
Apply Sprint 071 Architect Pack as docs/planning only.

Pack file:
architect-packs/sprint-071-client-return-to-use-uat-real-audible-voice-check-architect-pack.md

Create/update only the files listed in the pack:

- planning/STATE.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/071-client-return-to-use-uat-real-audible-voice-check/requirements.md
- planning/sprints/071-client-return-to-use-uat-real-audible-voice-check/blueprint.md
- planning/sprints/071-client-return-to-use-uat-real-audible-voice-check/acceptance.md
- planning/sprints/071-client-return-to-use-uat-real-audible-voice-check/handoff-prompt.md

Conditional:
- planning/DECISIONS.md only if decisions change.
- docs/API.md only if URL/interface contract documentation changes.
- docs/ARCHITECTURE.md should remain untouched unless a real architecture change is required.

Do not modify runtime/source files.
Do not run UAT yet.
Do not touch Sprint 064 files.
Do not stage, commit, push, deploy, touch Firebase, FlutterFlow, native/mobile packaging, credentials, or CEO Briefing files.

After applying the pack, run:

1. git status --branch --short
2. git diff --check
3. test ! -f references/flutterflow/sprint-009/ceo-briefing.png

Then report:

1. Files created/updated.
2. Whether docs/ARCHITECTURE.md was left untouched.
3. Whether planning/DECISIONS.md was left untouched or changed.
4. Whether docs/API.md was left untouched or changed.
5. Validation results.
6. Confirmation Sprint 064 stayed untracked and untouched.
```

---

## 11. Architect Notes

Keep Sprint 071 small.

If Sprint 071 passes, the next likely step is a client handoff note and a tiny support checklist.

If Sprint 071 holds because the deployed URL is stale, create a separate deploy/path validation sprint.

If Sprint 071 holds because real audible voice fails on the target browser/device, create a tiny browser audio compatibility fix sprint.

Do not jump to Flutter/mobile packaging until the current browser return-to-use path is settled.
