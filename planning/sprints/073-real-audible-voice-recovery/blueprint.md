# Sprint 073 Blueprint - Real Audible Voice Recovery + Physical Device Verification

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
