# Sprint 070 Architect Pack — Voice Talk-Back Restore

**Project:** TrinaOS / Barbie Voice App
**Sprint:** 070
**Sprint name:** voice-talk-back-restore
**Date:** 2026-06-08
**Architect Layer:** ChatGPT
**Builder Layer:** Codex
**Status:** Ready for Codex to apply as docs/planning first

---

## Architect Summary

Sprint 069 proved that the current deployed web app is usable again for the approved basic client flow.

Recorded UAT evidence:

```text
All on the list is working.
```

Sprint 070 should restore or prove browser talk-back response so Barbie can speak answers out loud again.

This sprint must protect the currently working client flow:

- App opens at `https://barbie-92edc.web.app/`
- Typed question returns a Barbie/model answer
- In-app reminder can be created
- Reminder appears in the app
- Reminder can be dismissed
- Feedback loop remains available

Sprint 070 is not a FlutterFlow sprint, native packaging sprint, closed-app push sprint, or mobile app sprint.

---

## Files This Architect Pack Should Create or Update

Codex should apply this Architect Pack by creating or updating these files:

```text
architect-packs/sprint-070-voice-talk-back-restore-architect-pack.md
planning/STATE.md
planning/RISKS.md
planning/QUESTIONS.md
docs/API.md
docs/VALIDATION.md
planning/sprints/070-voice-talk-back-restore/requirements.md
planning/sprints/070-voice-talk-back-restore/blueprint.md
planning/sprints/070-voice-talk-back-restore/acceptance.md
planning/sprints/070-voice-talk-back-restore/handoff-prompt.md
```

`docs/ARCHITECTURE.md` should only be updated if Codex discovers that the existing app has no documented voice/talk-back architecture or if the implementation changes the client-side voice architecture.

`planning/DECISIONS.md` should only be updated if a durable decision is made, such as choosing browser-native Web Speech API over a paid TTS provider for the current web app.

---

## Non-Negotiable Boundaries

Do not include in Sprint 070:

- FlutterFlow migration
- Native iOS or Android packaging
- Closed-app push notifications
- Firebase deploy
- Production deploy
- Credential changes
- Auth changes
- Reminder behavior changes
- Model/backend behavior changes beyond preserving existing typed Q&A
- CEO Briefing files
- Sprint 064 files

Protected paths / areas:

```text
architect-packs/sprint-064-existing-app-return-to-use-uat-architect-pack.md
planning/sprints/064-existing-app-return-to-use-uat/
references/flutterflow/sprint-009/ceo-briefing.png
```

Sprint 064 files must remain untracked and untouched.

---

# File: planning/STATE.md

```markdown
# Project State

## Current Status

Sprint 069 is closed as PASS.

The current deployed web app is approved for continued basic client use at:

`https://barbie-92edc.web.app/`

Sprint 069 UAT evidence:

> All on the list is working.

The approved basic flow is working:

- App opens.
- Typed question returns a Barbie/model answer.
- In-app reminder can be created.
- Reminder appears in the app.
- Reminder can be dismissed.
- Feedback loop is available.

## Active Sprint

`planning/sprints/070-voice-talk-back-restore/`

## Sprint 070 Goal

Restore or prove browser talk-back response so Barbie can speak answers out loud after answering, without breaking the working typed Q&A and reminder flow.

## Recently Completed

- Sprint 069 closed as PASS.
- Client UAT started and feedback loop established.
- No blocker reported from the approved checklist.

## Next Actions

- Apply Sprint 070 planning files.
- Start Sprint 070 with Builder start gate.
- Inspect the current app for existing voice/talk-back code, controls, or disabled behavior.
- Implement the smallest safe browser talk-back restoration if needed.
- Validate that typed Q&A, reminders, and dismiss still work.

## Blockers / Watch Items

- Client/browser voice expectations need to be kept realistic.
- Browser autoplay rules may require a user gesture before speech can play.
- Device/browser differences may affect voice availability.
- Voice restoration must not break the working deployed app flow.
```

---

# File: planning/RISKS.md

```markdown
# Risks

## Sprint 070 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Browser speech synthesis may require user interaction before audio can play. | Medium | Medium | Add or preserve an explicit voice toggle/button or user-initiated enable flow. | Open |
| Client expects full voice conversation, but Sprint 070 only restores talk-back after typed/model answers. | Medium | Medium | Define scope clearly as talk-back response only, not full speech-to-text or phone-style voice agent. | Open |
| Talk-back code could replay stale answers or speak internal/system text. | Medium | Medium | Only speak the final visible Barbie answer. Do not speak errors unless user-visible and safe. | Open |
| Voice changes could break typed Q&A or reminders. | Low | High | Keep changes small and validate existing Sprint 069 flow after voice work. | Open |
| Different browsers/devices may have different available voices. | Medium | Low | Use browser-native defaults first and document tested browser/device. | Open |
| Adding paid TTS provider could introduce credentials, latency, and scope creep. | Medium | Medium | Do not add paid TTS provider in this sprint unless existing code already depends on it and it is safely configured. | Open |
```

---

# File: planning/QUESTIONS.md

```markdown
# Questions

## Sprint 070 Open Questions

| Question | Owner | Status | Notes |
|---|---|---|---|
| Does the current app already contain disabled or hidden talk-back code? | Builder | Open | Inspect current source before implementation. |
| Which browser/device will be used for first voice validation? | Owner / Builder | Open | Prefer the same computer browser used for Sprint 069 UAT first. |
| Should talk-back be automatically triggered after every Barbie answer, or controlled by an explicit on/off toggle? | Owner / Client | Open | Default recommendation: explicit toggle so speech does not surprise the user. |
| Does the client want talk-back only, or full voice input plus talk-back? | Owner / Client | Open | Sprint 070 is talk-back only unless Architect approves expanded scope later. |
| Should spoken output include reminders or only Barbie chat answers? | Architect / Owner | Open | Default: only Barbie chat/model answers. |
| If browser-native talk-back is unsupported on the test device, should the sprint close as HOLD with evidence or create a future TTS-provider sprint? | Architect / Owner | Open | Do not add paid TTS without new Architect Pack. |
```

---

# File: docs/API.md

```markdown
# API Documentation

## Sprint 070 Voice Talk-Back Scope

Sprint 070 does not introduce a new backend API unless Codex discovers that an existing voice endpoint already exists and is required for talk-back restoration.

Preferred implementation path:

- Use browser-native speech synthesis for talk-back, if feasible.
- Keep existing chat/model API contract unchanged.
- Keep existing reminder API behavior unchanged.
- Do not add new credential requirements.
- Do not add paid TTS provider calls in this sprint.
- Do not change Firebase Functions contracts unless the existing implementation already requires a small compatibility fix.

## Expected Client-Side Talk-Back Contract

When a Barbie/model answer is visible in the chat UI:

1. The app may pass only that final visible answer text to the talk-back layer.
2. The app must not speak hidden prompts, system text, raw JSON, stack traces, or internal errors.
3. The app should expose a user-controllable way to enable or disable talk-back.
4. The app should fail safely if the browser does not support speech synthesis.

## Out of Scope for Sprint 070

- Speech-to-text input.
- Wake word behavior.
- Full duplex conversation.
- Phone-call voice agent.
- Closed-app push notifications.
- Native iOS or Android voice integration.
- FlutterFlow voice implementation.
- New paid TTS provider integration.
```

---

# File: docs/VALIDATION.md

```markdown
# Validation

## Sprint 070 Validation — Voice Talk-Back Restore

Sprint 070 must prove that talk-back is restored or honestly document why it is blocked.

### Required Pre-Implementation Checks

Run:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Confirm Sprint 064 files remain untracked and untouched if present:

```text
?? architect-packs/sprint-064-existing-app-return-to-use-uat-architect-pack.md
?? planning/sprints/064-existing-app-return-to-use-uat/
```

### Required Functional Validation

Validate in a supported browser, preferably the same browser/device used for Sprint 069 UAT first.

1. Open the current app.
2. Confirm typed Q&A still works.
3. Enable or trigger talk-back.
4. Ask a typed question.
5. Confirm Barbie/model answer appears visually.
6. Confirm the same final visible answer can be spoken out loud.
7. Confirm talk-back can be stopped, muted, or disabled.
8. Confirm no hidden prompt/system/internal text is spoken.
9. Confirm in-app reminder creation still works.
10. Confirm reminder appears in app.
11. Confirm reminder dismiss still works.
12. Confirm feedback link remains available.

### Required Technical Validation

Run the repo’s existing relevant checks if available.

Use whichever commands are already documented in the repo, such as:

```bash
npm run lint
npm run build
npm test
```

If a command is unavailable or not configured, document that clearly instead of inventing success.

### Required Closeout Evidence

Record:

- Browser tested.
- Device tested.
- Whether talk-back worked.
- Whether typed Q&A still worked.
- Whether reminders still worked.
- Whether dismiss still worked.
- Whether feedback link remained available.
- Any limitations, such as browser autoplay/user-gesture behavior.

### Completion Standard

Sprint 070 can close as PASS only if:

- Talk-back works for visible Barbie/model answers in at least one approved browser/device.
- User can disable or stop talk-back.
- Typed Q&A remains working.
- Reminder creation remains working.
- Reminder visibility remains working.
- Reminder dismiss remains working.
- No protected files are touched.
- No deploy occurs unless separately approved after implementation.

Sprint 070 should close as HOLD if:

- Talk-back is blocked by browser/device/API constraints.
- Required validation cannot be completed.
- Restoring talk-back would require a paid TTS provider, credentials, backend changes, or native/mobile work outside this sprint.
```

---

# File: planning/sprints/070-voice-talk-back-restore/requirements.md

```markdown
# Sprint 070 Requirements — Voice Talk-Back Restore

## Goal

Restore or prove browser talk-back response so Barbie can speak answers out loud after responding, without breaking the currently working typed Q&A and reminder flow.

## Background

Sprint 069 closed as PASS with client/UAT evidence:

> All on the list is working.

The current deployed web app is usable for the basic client flow:

- Open app.
- Type question.
- Get Barbie/model answer.
- Create in-app reminder.
- See reminder in app.
- Dismiss reminder.
- Use feedback loop.

The missing experience item is voice talk-back.

## User Need

The client wants the app to feel like Barbie can talk back again.

For this sprint, “talk-back” means:

- The user types a message.
- Barbie/model returns a visible answer.
- The app can speak that answer out loud through the browser.

It does not mean:

- Speech-to-text input.
- Wake word.
- Full phone-style voice conversation.
- Native iOS/Android voice features.
- Closed-app notification audio.
- FlutterFlow implementation.

## In Scope

- Inspect current app source for existing talk-back/voice/speech synthesis code.
- Determine whether talk-back is missing, disabled, hidden, or broken.
- Restore the smallest safe talk-back behavior in the current web app if needed.
- Add or preserve a user-controlled voice enable/disable behavior.
- Ensure only visible Barbie/model answers are spoken.
- Validate that typed Q&A still works.
- Validate that in-app reminders still work.
- Validate that reminder dismiss still works.
- Update docs/planning with evidence and limitations.

## Out of Scope

- FlutterFlow migration.
- Native mobile packaging.
- iOS build.
- Android build.
- Closed-app push notifications.
- Speech-to-text input.
- Wake word.
- New paid TTS provider.
- Credential changes.
- Firebase deploy.
- Production deploy unless separately approved.
- Any work on Sprint 064 untracked files.

## Success Definition

Sprint 070 succeeds when:

- Talk-back can speak a visible Barbie/model answer in at least one approved browser/device.
- User can disable or stop talk-back.
- Typed Q&A still works.
- In-app reminders still work.
- Reminder dismiss still works.
- No hidden/internal text is spoken.
- Validation evidence is recorded.
```

---

# File: planning/sprints/070-voice-talk-back-restore/blueprint.md

```markdown
# Sprint 070 Blueprint — Voice Talk-Back Restore

## Implementation Strategy

Use the smallest safe implementation.

Prefer browser-native speech synthesis if available.

Do not introduce paid TTS services, credentials, native code, FlutterFlow code, or deploy changes in this sprint.

## Step 1 — Start Gate

Before editing files, read:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/API.md
- docs/VALIDATION.md
- planning/sprints/070-voice-talk-back-restore/requirements.md
- planning/sprints/070-voice-talk-back-restore/blueprint.md
- planning/sprints/070-voice-talk-back-restore/acceptance.md

Then summarize:

1. What Sprint 070 is supposed to accomplish.
2. Which files you expect to modify.
3. Which tests or validation steps you will run.
4. Any blockers or ambiguities.
5. Whether Sprint 064 untracked files can remain untouched.

Do not implement until the owner approves the summary.

## Step 2 — Inspect Existing Voice Code

Search current source for terms such as:

```text
speech
synthesis
SpeechSynthesisUtterance
speak
voice
audio
talk
tts
mute
sound
```

Identify:

- Existing voice-related components/hooks/utilities.
- Whether talk-back was previously implemented.
- Whether it is disabled by UI state, config, missing handler, or browser restriction.
- Where Barbie/model answers are finalized and rendered.

## Step 3 — Design Smallest Safe Fix

Preferred behavior:

- User has a clear talk-back control.
- Talk-back is off by default unless existing product behavior clearly says otherwise.
- User can turn it on.
- When enabled, final visible Barbie/model answers are spoken.
- User can stop or disable speech.
- Speech cancels before starting a new answer to avoid overlapping audio.
- If browser support is unavailable, show a non-blocking visible message or silently fail with console-safe handling, depending on existing UI patterns.

Do not speak:

- User messages.
- Hidden prompts.
- System instructions.
- Raw API responses.
- Errors not already safe and visible.
- Reminder internals.

## Step 4 — Implement

Likely implementation areas may include:

- Current chat/dashboard component.
- Existing voice or audio helper if present.
- A small browser speech utility if none exists.
- Minimal UI control for talk-back if absent.

Do not change backend/model contract unless discovery proves talk-back already depends on an existing backend contract.

## Step 5 — Validate Existing Client Flow

Validate:

- App opens locally.
- Typed Q&A works.
- Barbie/model answer appears.
- Talk-back speaks final visible answer.
- Talk-back can be stopped/disabled.
- In-app reminder can be created.
- Reminder appears.
- Reminder can be dismissed.
- Feedback link remains available.

## Step 6 — Update Docs/Planning

Update only needed docs/planning files:

- planning/STATE.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/API.md, if contract notes changed
- docs/VALIDATION.md
- planning/sprints/070-voice-talk-back-restore/acceptance.md

Update docs/ARCHITECTURE.md only if client-side voice architecture meaningfully changes or was previously undocumented and needs a durable note.

Update planning/DECISIONS.md only if a durable implementation decision is made.

## Step 7 — Report

Report:

1. Files changed.
2. Voice/talk-back implementation summary.
3. Browser/device tested.
4. Validation results.
5. Any limitations.
6. Final git status.
7. Confirmation Sprint 064 files remain untracked and untouched.
8. Confirmation no deploy was run unless separately approved.
```

---

# File: planning/sprints/070-voice-talk-back-restore/acceptance.md

```markdown
# Sprint 070 Acceptance — Voice Talk-Back Restore

## Status

Pending.

## Required Acceptance Criteria

- [ ] Builder start gate completed before implementation.
- [ ] Existing voice/talk-back code inspected.
- [ ] Current source location for final Barbie/model answer identified.
- [ ] Talk-back can speak the final visible Barbie/model answer out loud in at least one approved browser/device.
- [ ] Talk-back does not speak hidden prompts, system text, raw JSON, stack traces, or internal-only content.
- [ ] User can stop, mute, or disable talk-back.
- [ ] Typed Q&A still works after the change.
- [ ] In-app reminder creation still works after the change.
- [ ] In-app reminder display still works after the change.
- [ ] Reminder dismiss still works after the change.
- [ ] Feedback link remains available.
- [ ] Browser/device validation evidence recorded.
- [ ] Any browser limitation is documented.
- [ ] Sprint 064 untracked files remain untouched.
- [ ] No Firebase deploy was run unless separately approved.
- [ ] No FlutterFlow, native build, credential, CEO Briefing, Sprint 064, closed-app push, or mobile packaging files were touched.
- [ ] Required validation commands passed or exceptions were documented.

## Required Validation Commands

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Run existing repo checks if available:

```bash
npm run lint
npm run build
npm test
```

Document unavailable commands honestly.

## PASS Criteria

Sprint 070 can close as PASS only when:

- Talk-back works for the visible Barbie/model answer in at least one approved browser/device.
- User can stop or disable it.
- Existing Sprint 069 basic flow remains working.
- Evidence is recorded in this acceptance file and docs/VALIDATION.md.

## HOLD Criteria

Sprint 070 should close as HOLD if:

- Talk-back cannot be validated.
- Browser/device support blocks the feature.
- Implementation requires paid TTS, credentials, backend voice service, native app work, or FlutterFlow work.
- Existing working typed Q&A/reminder flow would be put at risk.

## Closeout Evidence

To be completed by Builder:

```text
Browser tested:
Device tested:
Talk-back result:
Typed Q&A result:
Reminder create result:
Reminder display result:
Reminder dismiss result:
Feedback link result:
Limitations:
Final status:
```
```

---

# File: planning/sprints/070-voice-talk-back-restore/handoff-prompt.md

```markdown
# Sprint 070 Handoff Prompt — Voice Talk-Back Restore

Use this prompt with Codex after the Architect Pack has been applied.

```text
Start Sprint 070 using the Builder start gate.

Read these files before making any changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/API.md
- docs/VALIDATION.md
- planning/sprints/070-voice-talk-back-restore/requirements.md
- planning/sprints/070-voice-talk-back-restore/blueprint.md
- planning/sprints/070-voice-talk-back-restore/acceptance.md
- planning/sprints/070-voice-talk-back-restore/handoff-prompt.md

Then summarize:

1. What Sprint 070 is supposed to accomplish.
2. Which files you expect to modify.
3. What tests or validation steps you expect to run.
4. Any blockers or ambiguities.
5. Whether Sprint 064 untracked files can remain untouched.

Rules:
- Do not implement yet.
- Do not edit files yet.
- Do not stage, commit, push, deploy, or run Firebase deploy.
- Do not touch Sprint 064 files.
- Do not touch FlutterFlow files.
- Do not touch native build files.
- Do not touch credentials.
- Do not touch CEO Briefing files.
- Do not touch closed-app push notification behavior.
- Do not touch mobile/native packaging.
- Do not change Firebase/Auth/model/reminder contracts unless the sprint files explicitly require it.

Wait for my approval after your summary.
```
```

---

## Codex Apply Prompt

Use this first. This applies the Architect Pack to the repo as docs/planning only.

```text
Apply the Sprint 070 Architect Pack for Voice Talk-Back Restore.

Create or update only the files listed in the Architect Pack:

- architect-packs/sprint-070-voice-talk-back-restore-architect-pack.md
- planning/STATE.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/API.md
- docs/VALIDATION.md
- planning/sprints/070-voice-talk-back-restore/requirements.md
- planning/sprints/070-voice-talk-back-restore/blueprint.md
- planning/sprints/070-voice-talk-back-restore/acceptance.md
- planning/sprints/070-voice-talk-back-restore/handoff-prompt.md

Only update docs/ARCHITECTURE.md if the Architect Pack requires it based on discovered architecture changes. Since this is only applying the pack, do not update docs/ARCHITECTURE.md now.

Only update planning/DECISIONS.md if a durable decision changed. Since this is only applying the pack, do not update planning/DECISIONS.md now.

Rules:
- Docs/planning only.
- Do not modify runtime/source code.
- Do not implement voice yet.
- Do not deploy.
- Do not stage, commit, or push.
- Do not touch Sprint 064 files.
- Do not touch FlutterFlow files.
- Do not touch native build files.
- Do not touch credentials.
- Do not touch CEO Briefing files.
- Do not touch closed-app push files or behavior.
- Do not touch mobile/native packaging files.

Validation:
- git status --branch --short
- git diff --check
- test ! -f references/flutterflow/sprint-009/ceo-briefing.png

Report back:
1. Files changed/created.
2. Whether docs/ARCHITECTURE.md was left untouched.
3. Whether planning/DECISIONS.md was left untouched.
4. Validation results.
5. Final git status.
6. Confirmation Sprint 064 files remain untracked and untouched.
7. Confirmation no runtime/source, Firebase, FlutterFlow, native, credential, CEO Briefing, deploy, closed-app push, or mobile packaging files were touched.
```

---

## After Apply: Builder Start Gate Prompt

Use this only after Codex applies and reports the Architect Pack.

```text
Start Sprint 070 using the Builder start gate.

Read these files before making any changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/API.md
- docs/VALIDATION.md
- planning/sprints/070-voice-talk-back-restore/requirements.md
- planning/sprints/070-voice-talk-back-restore/blueprint.md
- planning/sprints/070-voice-talk-back-restore/acceptance.md
- planning/sprints/070-voice-talk-back-restore/handoff-prompt.md

Then summarize:

1. What Sprint 070 is supposed to accomplish.
2. Which files you expect to modify.
3. What tests or validation steps you expect to run.
4. Any blockers or ambiguities.
5. Whether Sprint 064 untracked files can remain untouched.

Rules:
- Do not implement yet.
- Do not edit files yet.
- Do not stage, commit, push, deploy, or run Firebase deploy.
- Do not touch Sprint 064 files.
- Do not touch FlutterFlow files.
- Do not touch native build files.
- Do not touch credentials.
- Do not touch CEO Briefing files.
- Do not touch closed-app push notification behavior.
- Do not touch mobile/native packaging.
- Do not change Firebase/Auth/model/reminder contracts unless the sprint files explicitly require it.

Wait for my approval after your summary.
```
