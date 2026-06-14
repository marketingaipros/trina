# Sprint 073 Requirements - Real Audible Voice Recovery + Physical Device Verification

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
