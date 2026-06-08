# Sprint 070 Blueprint - Voice Talk-Back Restore

## Implementation Strategy

Use the smallest safe implementation.

Prefer browser-native speech synthesis if available.

Do not introduce paid TTS services, credentials, native code, FlutterFlow code, or deploy changes in this sprint.

## Step 1 - Start Gate

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

## Step 2 - Inspect Existing Voice Code

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

## Step 3 - Design Smallest Safe Fix

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

## Step 4 - Implement

Likely implementation areas may include:

- Current chat/dashboard component.
- Existing voice or audio helper if present.
- A small browser speech utility if none exists.
- Minimal UI control for talk-back if absent.

Do not change backend/model contract unless discovery proves talk-back already depends on an existing backend contract.

## Step 5 - Validate Existing Client Flow

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

## Step 6 - Update Docs/Planning

Update only needed docs/planning files:

- planning/STATE.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/API.md, if contract notes changed
- docs/VALIDATION.md
- planning/sprints/070-voice-talk-back-restore/acceptance.md

Update docs/ARCHITECTURE.md only if client-side voice architecture meaningfully changes or was previously undocumented and needs a durable note.

Update planning/DECISIONS.md only if a durable implementation decision is made.

## Step 7 - Report

Report:

1. Files changed.
2. Voice/talk-back implementation summary.
3. Browser/device tested.
4. Validation results.
5. Any limitations.
6. Final git status.
7. Confirmation Sprint 064 files remain untracked and untouched.
8. Confirmation no deploy was run unless separately approved.
