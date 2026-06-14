# Sprint 073 Acceptance Criteria - Real Audible Voice Recovery + Physical Device Verification

Sprint 073 is PASS only if all criteria below are satisfied.

## Final Result

PASS - operator confirmed real audible Barbie voice talk-back in Chrome.

Operator UAT evidence recorded on 2026-06-14:

```text
Browser/device used: Chrome
Physical speaker/headphone access: yes
Did you hear Barbie speak? yes
Did spoken text match the visible answer? yes
Did Stop/cancel work or audio end cleanly? yes
Did reminder appear and dismiss? yes
Final result: PASS
```

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
