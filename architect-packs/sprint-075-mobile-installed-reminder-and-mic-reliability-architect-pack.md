# Sprint 075 Architect Pack — Mobile Installed Reminder + Mic Reliability Fix

**Project:** Barbie — Executive Assistant
**Sprint:** 075
**Status:** Architect Pack
**Date:** 2026-06-14
**Architect Layer:** ChatGPT
**Builder Layer:** Codex or repo-aware coding agent

---

## 1. Sprint Context

Sprint 074 successfully made the existing Barbie Vite web app installable from the phone home screen as a PWA wrapper.

Real phone UAT result:

- Opened from home-screen icon: yes
- Typed question: pass
- Visible answer appeared: pass
- Play made Barbie speak: pass
- Spoken text matched answer: pass
- Stop worked: pass
- Reminder appeared and dismissed: fail
- Mic reliability: intermittent
- User experience issue: when the user asks Barbie to set a reminder, Barbie sometimes explains how to word the reminder instead of actually setting the reminder.

Sprint 074 remains **HOLD**.

Sprint 075 should fix the installed-phone reminder and microphone issues without rebuilding the app, changing Firebase settings, touching FlutterFlow/native packaging, or breaking the Sprint 073 audible voice behavior.

---

## 2. Files to Create or Update

The Builder should create or update these files as needed:

- `planning/STATE.md`
- `planning/DECISIONS.md`, if decisions change
- `planning/RISKS.md`, if risks change
- `planning/QUESTIONS.md`, if questions change
- `docs/ARCHITECTURE.md`, if architecture changes
- `docs/API.md`, if command/intent contracts change
- `docs/VALIDATION.md`, if validation rules change
- `docs/PWA.md`, if installed-app UAT notes change
- `planning/sprints/075-mobile-installed-reminder-and-mic-reliability/requirements.md`
- `planning/sprints/075-mobile-installed-reminder-and-mic-reliability/blueprint.md`
- `planning/sprints/075-mobile-installed-reminder-and-mic-reliability/acceptance.md`
- `planning/sprints/075-mobile-installed-reminder-and-mic-reliability/handoff-prompt.md`

The Builder may inspect runtime/source files but must only change the minimum files required.

---

# planning/sprints/075-mobile-installed-reminder-and-mic-reliability/requirements.md

## Sprint Goal

Fix the installed mobile PWA experience so Barbie reliably handles reminder requests and microphone input after launch from the home-screen icon.

This sprint must preserve the working Sprint 073 and Sprint 074 behavior:

- Installed app opens from home-screen icon.
- Typed Q&A works.
- Visible answer appears.
- Play speaks audibly.
- Spoken text matches visible answer.
- Stop ends speech cleanly.
- Reminder create/appear/dismiss works.
- No service worker caching is added unless strictly required.
- No rebuild into FlutterFlow or native packaging.

## Business Goal

The client should be able to use Barbie from the phone home screen like a lightweight mobile app.

The app must feel practical, not confusing. When the user says or types a reminder request, Barbie should set the reminder when enough information exists. Barbie should not default to teaching the user how to phrase reminders.

## UAT Failure Being Fixed

Real phone UAT after Sprint 074:

```text
Opened from home-screen icon: yes
Typed question: pass
Visible answer appeared: pass
Play made Barbie speak: pass
Spoken text matched answer: pass
Stop worked: pass
Reminder appeared and dismissed: fail
Mic is working sometimes and sometimes not.
Requesting a reminder caused Barbie to explain wording instead of setting the timer/reminder.
```

## In Scope

- Improve reminder intent detection for typed and spoken inputs.
- Ensure reminder creation works from installed PWA mode.
- Ensure due reminder appears and can be dismissed in installed mode.
- Improve microphone start/listen/retry behavior on mobile browsers where possible.
- Add clear UI feedback when mic permission, browser support, or recognition startup fails.
- Preserve typed fallback so the app remains usable even when microphone recognition is unreliable.
- Update validation docs with real phone UAT requirements.

## Out of Scope

- No Firebase settings changes.
- No Firestore rules changes.
- No Cloud Functions changes unless existing source inspection proves reminders depend on an already-planned deployed function path.
- No FlutterFlow work.
- No iOS/Android native packaging.
- No app rebuild.
- No new database.
- No service worker/offline caching unless strictly required and approved.
- No credentials or secrets changes.
- No Sprint 064 or Sprint 072 file edits.
- No CEO Briefing work.

## Reminder Intent Requirements

Barbie should recognize practical reminder phrases such as:

```text
Remind me in 5 minutes to check the oven.
Set a reminder in 10 minutes to call Melissa.
Remind me tomorrow at 9 AM to send the invoice.
Set a timer for 3 minutes.
In 15 minutes, remind me to take a break.
```

Expected behavior:

- If the reminder request includes time and task, create the reminder.
- If the request includes time but no task, ask what the reminder should say.
- If the request includes task but no time, ask when to remind the user.
- If the request is too vague, ask one focused follow-up question.
- Do not respond with only instructions like “say: remind me in 10 minutes...”
- Do not create fake reminders if required fields are missing.

## Mic Requirements

The microphone experience should:

- Work when the browser supports speech recognition.
- Request mic permission only as needed.
- Give clear feedback when listening starts.
- Give clear feedback if listening fails, times out, or permission is blocked.
- Allow the user to retry.
- Keep typed input as the reliable fallback.
- Not block Play/Stop speech controls.

## Acceptance Summary

Sprint 075 can pass only when real phone UAT confirms:

- Home-screen app launches.
- Typed reminder request creates a reminder.
- Spoken reminder request creates a reminder where speech recognition works.
- Reminder appears when due.
- Reminder dismisses cleanly.
- Mic behavior is either reliable or gives clear fallback/error feedback.
- Existing Q&A, Play, spoken-text match, Stop, and visible answer behavior still pass.

---

# planning/sprints/075-mobile-installed-reminder-and-mic-reliability/blueprint.md

## Implementation Strategy

Use a narrow fix.

Do not rebuild the app. Inspect current reminder and microphone flow first. Identify whether the issue is:

1. Intent classification/routing.
2. Reminder parser gap.
3. Installed PWA/browser storage behavior.
4. Mic permission or speech recognition lifecycle behavior.
5. UI feedback problem.

Then make the smallest changes needed.

## Expected Inspection Targets

The Builder should inspect, as applicable:

- `components/VoiceDashboard.tsx`
- `App.tsx`
- reminder-related services/utilities
- speech recognition / microphone logic
- reminder state storage logic
- PWA docs added in Sprint 074
- `docs/VALIDATION.md`
- `docs/PWA.md`
- Sprint 074 acceptance notes

Do not assume filenames. Use repo inspection.

## Reminder Flow Blueprint

1. Locate current user input handling path.
2. Locate current reminder creation path.
3. Locate current intent detection or command handling.
4. Add or tighten reminder intent detection before generic assistant fallback.
5. Parse simple reminder phrases:
   - `remind me in X minutes/hours to TASK`
   - `set a reminder in X minutes/hours to TASK`
   - `set a timer for X minutes`
   - `remind me tomorrow at TIME to TASK`
6. Preserve existing behavior for non-reminder questions.
7. Add clear confirmation after creating reminder:
   - “Reminder set for 5 minutes from now: check the oven.”
8. For incomplete reminder requests, ask one direct follow-up:
   - “What should I remind you about?”
   - “When should I remind you?”
9. Ensure due reminders render in installed PWA mode.
10. Ensure dismiss clears the due reminder state.

## Mic Flow Blueprint

1. Inspect current speech recognition setup.
2. Confirm whether the app uses browser Web Speech API.
3. Add defensive checks for unsupported browsers.
4. Add state feedback:
   - mic ready
   - listening
   - processing
   - permission blocked
   - no speech detected
   - recognition failed
5. Ensure retry does not leave recognition stuck.
6. Ensure mic and speech synthesis do not conflict.
7. Ensure Stop is limited to stopping speech output and does not corrupt mic state unless intentionally designed.

## Storage Blueprint

If reminders use local storage or in-memory state:

- Confirm reminders persist or behave as designed in installed PWA mode.
- If persistence is local-only, document that limitation.
- Do not introduce cloud persistence unless already part of project architecture and sprint scope.

## Validation Blueprint

Run standard validation:

```bash
git status --branch --short
git log --oneline -1
git diff --check
npm run lint
npm run build
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Run local browser smoke:

- Typed Q&A.
- Visible answer.
- Play.
- Stop.
- Typed reminder.
- Due reminder.
- Dismiss reminder.
- Mic start/retry where available.

Run deployed phone UAT after Hosting-only deploy:

- iPhone Safari or Android Chrome.
- Home-screen installed launch.
- Typed reminder.
- Spoken reminder.
- Due reminder.
- Dismiss reminder.
- Mic retry/fallback.
- Existing audible Play/Stop regression.

## Documentation Updates

Update:

- `docs/VALIDATION.md` with Sprint 075 validation rules and actual evidence.
- `docs/PWA.md` with phone UAT notes.
- `planning/STATE.md` with current sprint status.
- `planning/RISKS.md` if mic/browser support remains a known limitation.
- `planning/QUESTIONS.md` if a device/browser issue cannot be reproduced.
- Sprint 075 acceptance with PASS/HOLD evidence.

---

# planning/sprints/075-mobile-installed-reminder-and-mic-reliability/acceptance.md

## Status Rules

Sprint 075 must remain **HOLD** until real phone installed-mode UAT passes.

Local desktop testing alone is not enough.

## Acceptance Criteria

### A. Scope Control

- [ ] No Firebase settings changed.
- [ ] No Firestore rules changed.
- [ ] No Cloud Functions deploy required unless explicitly justified.
- [ ] No FlutterFlow files touched.
- [ ] No native iOS/Android packaging touched.
- [ ] No credentials or secrets touched.
- [ ] Sprint 064 files untouched.
- [ ] Sprint 072 files untouched.
- [ ] CEO Briefing files untouched.
- [ ] No service worker/offline caching added unless explicitly justified.

### B. Reminder Behavior

- [ ] Typed “Remind me in 5 minutes to check the oven” creates a reminder.
- [ ] Typed “Set a reminder in 10 minutes to call Melissa” creates a reminder.
- [ ] Typed “Set a timer for 3 minutes” creates a timer/reminder with useful confirmation.
- [ ] If time is missing, Barbie asks when to remind the user.
- [ ] If task is missing, Barbie asks what to remind the user about.
- [ ] Barbie does not merely explain how to word the request when enough information exists.
- [ ] Due reminder appears.
- [ ] Dismiss clears the reminder.

### C. Mic Behavior

- [ ] Mic starts listening on the test phone when supported.
- [ ] Spoken reminder input is captured or clear fallback is shown.
- [ ] Mic can be retried after a failure.
- [ ] Permission blocked/unsupported states are explained clearly.
- [ ] Typed fallback remains available.
- [ ] Mic behavior does not break Play/Stop speech output.

### D. Regression

- [ ] Installed app launches from home-screen icon.
- [ ] Typed Q&A passes.
- [ ] Visible answer appears.
- [ ] Play makes Barbie speak audibly.
- [ ] Spoken text matches visible answer.
- [ ] Stop ends audio cleanly.
- [ ] Reminder appears and dismisses.
- [ ] Existing Sprint 073 voice recovery remains intact.

### E. Validation

- [ ] `git diff --check` passes.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] CEO Briefing guard passes.
- [ ] Manifest and icons remain reachable after deploy.
- [ ] Real phone installed-mode UAT recorded.

## PASS Definition

Sprint 075 is PASS only when:

```text
Opened from home-screen icon: yes
Typed Q&A: pass
Visible answer appeared: pass
Play made Barbie speak: pass
Spoken text matched answer: pass
Stop worked: pass
Typed reminder created: pass
Spoken reminder created or clear mic fallback shown: pass
Reminder appeared and dismissed: pass
Final result: PASS
```

## HOLD Definition

Sprint 075 remains HOLD if:

- Reminder requests still produce wording instructions instead of creating reminders.
- Reminder appears/dismiss fails.
- Mic failure has no clear fallback.
- Installed-mode phone UAT is not completed.
- Existing Play/Stop audible behavior regresses.

---

# planning/sprints/075-mobile-installed-reminder-and-mic-reliability/handoff-prompt.md

```text
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

Do not start implementation until I approve your summary.

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
```

---

# planning/STATE.md update guidance

Update current state to show:

- Sprint 074 deployed to Firebase Hosting.
- Sprint 074 remains HOLD after real phone UAT.
- Installed launch, typed Q&A, visible answer, Play, spoken-text match, and Stop passed.
- Reminder appeared/dismiss failed.
- Mic is intermittent.
- Sprint 075 is the next action: Mobile installed reminder + mic reliability fix.

---

# planning/DECISIONS.md update guidance

Add a decision only if not already recorded:

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-06-14 | Keep PWA wrapper as the mobile path and fix reminder/mic behavior inside the existing app. | PWA install works and is faster than Flutter/native packaging for MVP. | Future mobile work should harden the installed web app before revisiting native packaging. |

---

# planning/RISKS.md update guidance

Add or update risks:

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Mobile browser speech recognition may be inconsistent in installed PWA mode. | Medium | Medium | Provide typed fallback, clear error states, and phone-specific UAT. | Active |
| Reminder parsing may fall through to generic assistant response. | Medium | High | Route reminder intents before generic Q&A fallback. | Active |
| Reminder behavior may differ between browser tab and home-screen installed mode. | Medium | High | Validate from installed home-screen icon on real phone. | Active |

---

# planning/QUESTIONS.md update guidance

Add or keep open until answered:

- Which device and browser failed reminder dismiss?
- Was the failed reminder request typed or spoken?
- What exact phrase was used when Barbie explained how to word the request?
- Did the due reminder fail to appear, fail to dismiss, or fail to create?
- Did mic fail before permission prompt, after permission, during listening, or after speech capture?

---

# docs/API.md update guidance

If the app has an internal command/intent contract, document reminder examples:

```text
Reminder commands:
- Remind me in 5 minutes to check the oven.
- Set a reminder in 10 minutes to call Melissa.
- Set a timer for 3 minutes.
- Remind me tomorrow at 9 AM to send the invoice.

Required fields:
- time/date or duration
- reminder text/task, unless timer-only

Fallback:
- Ask one focused follow-up question for missing time or missing task.
```

---

# docs/VALIDATION.md update guidance

Add Sprint 075 validation:

```text
Sprint 075 phone UAT requires installed PWA testing from home-screen icon.

Required result fields:
- Device:
- Browser:
- Installed launch:
- Typed Q&A:
- Visible answer:
- Play audible:
- Spoken text matched:
- Stop clean:
- Typed reminder created:
- Spoken reminder created:
- Due reminder appeared:
- Dismiss worked:
- Mic retry/fallback:
- Final result:
```

---

# Architect Notes

The user should test the current Sprint 074 build with exact reminder phrases before Sprint 075 implementation begins, to capture the failure precisely.

Recommended current-app test phrases:

```text
Remind me in 2 minutes to check the oven.
Set a reminder in 3 minutes to call Melissa.
Set a timer for 1 minute.
In 2 minutes, remind me to drink water.
```

If typed reminders fail too, the bug is likely intent routing or reminder parser.

If typed reminders pass but spoken reminders fail, the bug is likely mic capture or speech-to-intent routing.

If reminders create but do not appear/dismiss in installed mode, the bug is likely reminder state, timer lifecycle, or installed PWA visibility behavior.
