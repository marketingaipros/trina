# Architect Pack: Sprint 073 — Real Audible Voice Recovery + Physical Device Verification

## Pack Status

Ready for Builder application.

## Sprint Goal

Restore and prove real audible Barbie voice talk-back on a physical device/browser, not only through headless Chromium automation.

Sprint 072 remains HOLD because the test environment had no physical speaker access, Barbie was not heard speaking, and spoken text did not match the visible answer.

## Source Evidence From Sprint 072

```text
Browser/device used: headless Chromium automation on Mac; no physical speaker access

Did you hear Barbie speak? no

Did spoken text match the visible answer? no

Did Stop/cancel work or audio end cleanly? yes

Did reminder appear and dismiss? yes

Final result: HOLD
```

## Files To Create Or Update

The Builder must create or update these files only as needed:

```text
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/ARCHITECTURE.md
docs/API.md
docs/VALIDATION.md
planning/sprints/073-real-audible-voice-recovery/requirements.md
planning/sprints/073-real-audible-voice-recovery/blueprint.md
planning/sprints/073-real-audible-voice-recovery/acceptance.md
planning/sprints/073-real-audible-voice-recovery/handoff-prompt.md
```

No other files should be changed during Architect Pack application.

---

# planning/STATE.md Update

Add or update the current status section:

```markdown
# STATE

## Current Status

Sprint 072 is HOLD.

Client return-to-use is not approved because real audible Barbie voice talk-back has not been proven on a physical device/browser.

Sprint 072 evidence:

- Browser/device used: headless Chromium automation on Mac.
- No physical speaker access was available.
- Barbie was not heard speaking.
- Spoken text did not match the visible answer.
- Stop/cancel worked or audio ended cleanly.
- Reminder appeared and dismissed.

## Current Active Sprint

Sprint 073 — Real Audible Voice Recovery + Physical Device Verification.

## Release Gate

Do not give the app back to the client until real audible voice talk-back is proven on a physical device/browser and the spoken text matches the visible Barbie answer.
```

---

# planning/DECISIONS.md Update

Add this decision if it is not already recorded:

```markdown
# DECISIONS

## Sprint 073 Voice Verification Gate

Decision: Headless browser automation is not enough to approve Barbie voice talk-back.

Reason: Sprint 072 used headless Chromium automation on Mac with no physical speaker access. That environment could validate UI behavior and reminder behavior, but it could not prove that a real user can hear Barbie speak.

Impact: Voice release approval now requires a physical browser/device test with audible speaker output, or a controlled browser test that captures actual speech synthesis output and verifies it against the visible answer.
```

---

# planning/RISKS.md Update

Add these risks:

```markdown
# RISKS

## Real Audible Voice Still Unproven

Risk: The app may appear to pass automated browser checks while still failing for a real client because audio output is not heard.

Mitigation: Require physical device/browser verification before release approval.

## Browser Speech Synthesis Permission / Autoplay Risk

Risk: Browser speech output may fail because of autoplay restrictions, missing user gesture, disabled speech synthesis, missing voice availability, or muted audio output.

Mitigation: Inspect the voice playback path, require a user-triggered speech start, expose clear voice status in the UI, and test in a non-headless browser.

## Spoken Text Mismatch Risk

Risk: Barbie may speak stale text, placeholder text, partial text, or a different response than the visible answer.

Mitigation: Bind speech playback to the final visible assistant answer, add guards against stale response playback, and validate spoken-text source against the rendered answer text.
```

---

# planning/QUESTIONS.md Update

Add these questions:

```markdown
# QUESTIONS

## Sprint 073 Open Questions

- Which physical browser/device will be used for final audible voice verification?
- Is the intended client experience desktop browser first, mobile browser first, or both?
- Should the app require a visible Talk / Speaker button to satisfy browser user-gesture rules?
- Should voice auto-play after every answer, or should it only play when the user taps a button?
- Which browser voice should be preferred if multiple speech synthesis voices are available?
```

---

# docs/ARCHITECTURE.md Update

Add or update the voice architecture section:

```markdown
# ARCHITECTURE

## Voice Talk-Back Path

Barbie voice talk-back must follow this flow:

1. User submits a typed or voice request.
2. App receives the final assistant answer.
3. The final visible answer is rendered in the UI.
4. The speech playback source is set from the same final answer text.
5. Browser speech synthesis is triggered only after required browser permission/user gesture conditions are satisfied.
6. The UI exposes whether Barbie is speaking, stopped, unavailable, or blocked.
7. Stop/cancel interrupts active speech cleanly.

## Required Guardrails

- Do not speak placeholder text.
- Do not speak stale prior responses.
- Do not speak hidden/internal/debug text.
- Do not mark voice as working from headless automation alone.
- Do not block typed Q&A or reminders if speech synthesis is unavailable.

## Voice Verification Boundary

Headless Chromium can validate that UI controls and code paths run, but it cannot prove that the user can hear Barbie speak through physical speakers. Release approval requires a physical device/browser test or a controlled audio-output proof.
```

---

# docs/API.md Update

If there are no API contract changes, add this note:

```markdown
# API

## Sprint 073 API Impact

Sprint 073 is expected to be a client-side voice playback fix and verification sprint.

No backend API contract change is expected unless the Builder discovers that the visible assistant answer and the speech playback text come from different response fields.

If any response contract is changed, the Builder must document:

- Existing response field used for visible answer.
- Existing response field used for spoken answer.
- New canonical response field, if one is introduced.
- Backward compatibility impact.
```

---

# docs/VALIDATION.md Update

Add this validation section:

```markdown
# VALIDATION

## Sprint 073 Voice Validation

Sprint 073 cannot pass from headless automation alone.

Required validation:

1. Run existing checks:
   - `git diff --check`
   - `npm run lint`
   - `npm run build`

2. Run browser functional check:
   - Open the app in a non-headless browser.
   - Submit a typed question.
   - Confirm Barbie shows a visible answer.
   - Trigger speech playback through the intended UI path.
   - Confirm Barbie is heard through physical speakers or headphones.
   - Confirm the spoken text matches the visible answer.
   - Press Stop/cancel during speech and confirm speech stops cleanly.

3. Run reminder regression:
   - Create a reminder.
   - Confirm the reminder appears.
   - Dismiss the reminder.

4. Record UAT evidence exactly:

```text
Browser/device used:
Physical speaker/headphone access: yes/no
Did you hear Barbie speak? yes/no
Did spoken text match the visible answer? yes/no
Did Stop/cancel work or audio end cleanly? yes/no
Did reminder appear and dismiss? yes/no
Final result: PASS/HOLD
Notes:
```

Pass requires:

- Physical speaker/headphone access: yes.
- Did you hear Barbie speak? yes.
- Did spoken text match the visible answer? yes.
- Stop/cancel worked or audio ended cleanly: yes.
- Reminder appeared and dismissed: yes.
```

---

# planning/sprints/073-real-audible-voice-recovery/requirements.md

```markdown
# Sprint 073 Requirements — Real Audible Voice Recovery + Physical Device Verification

## Business Goal

Make Barbie usable again for the client by proving the app can answer questions, speak the answer out loud, and still support reminders.

## Current Problem

Sprint 072 failed the voice release gate.

Evidence:

- Test used headless Chromium automation on Mac.
- No physical speaker access was available.
- Barbie was not heard speaking.
- Spoken text did not match the visible answer.
- Stop/cancel worked or audio ended cleanly.
- Reminder appeared and dismissed.

## Required Outcome

The app must pass a real audible voice test on a physical device/browser.

## In Scope

- Inspect current voice talk-back implementation.
- Identify why speech is not audible or not verifiable.
- Fix client-side speech playback if broken.
- Ensure spoken text uses the same final answer text visible in the UI.
- Ensure Stop/cancel stops current speech cleanly.
- Add visible voice status or failure state if speech synthesis is unavailable or blocked.
- Preserve typed Q&A behavior.
- Preserve reminder creation, reminder display, and reminder dismissal.
- Update validation docs and sprint closeout evidence.

## Out of Scope

- FlutterFlow work.
- Native mobile packaging.
- Firebase settings changes unless required by the existing deployed app path.
- New voice provider integration.
- New AI model behavior.
- New reminder system architecture.
- Dashboard redesign.
- Client handoff before PASS.
- CEO Briefing.
- Sprint 064 work.

## Non-Negotiable Rule

Do not mark Sprint 073 PASS unless Barbie is heard speaking on a physical device/browser and the spoken text matches the visible answer.
```

---

# planning/sprints/073-real-audible-voice-recovery/blueprint.md

```markdown
# Sprint 073 Blueprint — Real Audible Voice Recovery + Physical Device Verification

## Builder Plan

### 1. Read Project Context

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
- planning/sprints/073-real-audible-voice-recovery/requirements.md
- planning/sprints/073-real-audible-voice-recovery/acceptance.md

Then summarize the intended work before implementation.

### 2. Inspect Voice Path

Find the source files that handle:

- Assistant answer rendering.
- Speech synthesis / voice talk-back.
- Stop/cancel behavior.
- Voice status state.
- Any auto-play or user gesture logic.

Confirm whether the spoken text is sourced from the same final answer rendered in the UI.

### 3. Fix Voice Playback

Apply the smallest safe fix needed so that:

- Speech is triggered from a user-allowed browser path.
- Speech uses the final answer text.
- Speech does not use stale prior answer text.
- Speech does not speak before the final answer is ready.
- Speech failure is visible or logged enough for validation.
- Stop/cancel interrupts speech cleanly.

### 4. Preserve Existing Working Behavior

Do not regress:

- Typed Send answer flow.
- Reminder creation.
- Reminder appearance.
- Reminder dismissal.
- Existing build/lint baseline.

### 5. Validate

Run:

- `git diff --check`
- `npm run lint`
- `npm run build`

Then run a non-headless physical audible test.

### 6. Record Evidence

Update Sprint 073 closeout notes with exact evidence:

```text
Browser/device used:
Physical speaker/headphone access: yes/no
Did you hear Barbie speak? yes/no
Did spoken text match the visible answer? yes/no
Did Stop/cancel work or audio end cleanly? yes/no
Did reminder appear and dismiss? yes/no
Final result: PASS/HOLD
Notes:
```

## Implementation Preference

Use the boring local browser speech synthesis path first. Do not introduce a third-party voice provider unless the existing app already depends on one and the failure is clearly inside that integration.
```

---

# planning/sprints/073-real-audible-voice-recovery/acceptance.md

```markdown
# Sprint 073 Acceptance Criteria — Real Audible Voice Recovery + Physical Device Verification

Sprint 073 is PASS only if all criteria below are satisfied.

## Voice Criteria

- A typed question returns a visible Barbie answer.
- Barbie speaks the final visible answer out loud on a physical device/browser.
- The spoken text matches the visible answer.
- Speech does not use stale text from a previous answer.
- Speech does not speak placeholder/loading/debug text.
- Stop/cancel stops active speech cleanly or speech ends cleanly if already complete.
- The UI provides a clear voice state or failure state if speech is unavailable or blocked.

## Reminder Regression Criteria

- A reminder can be created.
- The reminder appears when due.
- The reminder can be dismissed.

## Validation Criteria

- `git diff --check` passes.
- `npm run lint` passes or only known baseline warnings are documented.
- `npm run build` passes or only known baseline warnings are documented.
- A non-headless browser/device test is completed.
- Physical speaker/headphone access is confirmed.
- UAT evidence is recorded exactly.

## Release Gate

Client return-to-use remains HOLD if any of these are true:

- The only test was headless Chromium.
- Physical speaker/headphone access was not available.
- Barbie was not heard speaking.
- Spoken text did not match the visible answer.
- Reminder regression failed.
```

---

# planning/sprints/073-real-audible-voice-recovery/handoff-prompt.md

```markdown
# Sprint 073 Handoff Prompt — Real Audible Voice Recovery + Physical Device Verification

You are the Builder for Sprint 073.

Your job is to restore and prove real audible Barbie voice talk-back without regressing typed Q&A or reminders.

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
- planning/sprints/073-real-audible-voice-recovery/requirements.md
- planning/sprints/073-real-audible-voice-recovery/blueprint.md
- planning/sprints/073-real-audible-voice-recovery/acceptance.md

Then summarize before implementation:

1. What Sprint 073 is supposed to accomplish.
2. Which files you expect to modify.
3. What tests or validation steps you will run.
4. Any blockers or ambiguities.

Do not start implementation until the summary is approved.

Important constraints:

- Do not work on FlutterFlow.
- Do not work on native packaging.
- Do not change Firebase settings unless required by the existing deployed app path and approved.
- Do not touch Sprint 064 files.
- Do not create CEO Briefing work.
- Do not mark the sprint PASS from headless Chromium alone.
- Do not mark the sprint PASS unless Barbie is heard speaking on a physical device/browser and spoken text matches the visible answer.

Sprint 072 evidence to preserve:

```text
Browser/device used: headless Chromium automation on Mac; no physical speaker access
Did you hear Barbie speak? no
Did spoken text match the visible answer? no
Did Stop/cancel work or audio end cleanly? yes
Did reminder appear and dismiss? yes
Final result: HOLD
```

Required final evidence format:

```text
Browser/device used:
Physical speaker/headphone access: yes/no
Did you hear Barbie speak? yes/no
Did spoken text match the visible answer? yes/no
Did Stop/cancel work or audio end cleanly? yes/no
Did reminder appear and dismiss? yes/no
Final result: PASS/HOLD
Notes:
```
```

---

# Codex Apply-Pack Prompt

Use this prompt first. This applies the Architect Pack to the project folder only. It does not implement runtime code.

```text
Apply the Sprint 073 Architect Pack to the project folder.

Create or update only the planning and documentation files listed in the pack:

- planning/STATE.md
- planning/DECISIONS.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/ARCHITECTURE.md
- docs/API.md
- docs/VALIDATION.md
- planning/sprints/073-real-audible-voice-recovery/requirements.md
- planning/sprints/073-real-audible-voice-recovery/blueprint.md
- planning/sprints/073-real-audible-voice-recovery/acceptance.md
- planning/sprints/073-real-audible-voice-recovery/handoff-prompt.md

Rules:

- Do not modify runtime/source files.
- Do not implement code.
- Do not deploy.
- Do not touch Sprint 064 files.
- Do not modify Firebase settings.
- Do not create CEO Briefing work.
- Preserve Sprint 072 HOLD evidence exactly.

After applying the pack, report:

1. Files created or updated.
2. Any files skipped and why.
3. Final git status.
4. Confirmation that no runtime/source files were modified.
```

---

# Next Prompt After Codex Applies The Pack

Use this only after Codex applies the Architect Pack and you approve the planning/doc changes.

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
- planning/sprints/073-real-audible-voice-recovery/requirements.md
- planning/sprints/073-real-audible-voice-recovery/blueprint.md
- planning/sprints/073-real-audible-voice-recovery/acceptance.md

Then summarize:

1. What Sprint 073 is supposed to accomplish.
2. Which files you expect to modify.
3. What tests or validation steps you will run.
4. Any blockers or ambiguities.

Do not start implementation until I approve your summary.
```
