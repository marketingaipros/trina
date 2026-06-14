# Sprint 075 Acceptance Criteria - Mobile Installed Reminder + Mic Reliability Fix

## Status Rules

Sprint 075 closed as **PASS** after real phone installed-mode UAT passed.

## Final Closeout

Final status:

```text
PASS - installed PWA mic reminder UAT passed.
```

Real-phone installed PWA evidence:

```text
Typed reminder works.
Typed reminder sets correctly.
Mic worked after Hosting redeploy.
Spoken reminder was captured.
Reminder was booked.
Reminder went off.
Reminder was dismissed successfully.
Typed reminder flow already worked.
```

Closeout conclusion:

- Installed PWA mic reminder UAT passed.
- Typed reminders work.
- Mic reminders work after Hosting redeploy.
- Reminder appear/dismiss works.
- Play/Stop remains protected by previous validation.
- Sprint 075 is complete and ready for commit.

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

- [ ] Typed "Remind me in 5 minutes to check the oven" creates a reminder.
- [ ] Typed "Set a reminder in 10 minutes to call Melissa" creates a reminder.
- [ ] Typed "Set a timer for 3 minutes" creates a timer/reminder with useful confirmation.
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

## Second Real Phone UAT Evidence

Current result:

```text
HOLD - mic reminder path still produces reminder wording/help text instead of creating the reminder.
```

Evidence:

```text
Typed reminder worked.
Reminder appeared and dismissed correctly.
Mic reminder produced the same incorrect response.
Screenshot evidence again shows Barbie saying:
I can save that reminder for "in two minutes to check the oven". Please include a time like "in 2 minutes", "in 1 hour", "today at 3pm", or "tomorrow at 10am".
```

Conclusion:

- Reminder engine is working.
- Typed reminder flow is working.
- Installed PWA shell is working.
- The defect is in mic-transcribed reminder handling, likely parser normalization or route mismatch between mic transcript and typed Send flow.
- Sprint 074 remains `HOLD`.
- Sprint 075 should focus on mic reminder parsing/reliability.

## Latest Real Phone UAT Evidence

Current result:

```text
HOLD - installed-phone microphone capture returns audio-capture before a usable transcript can be routed.
```

Evidence:

```text
Typed reminder works.
Typed reminder sets correctly.
Reminder appears when due.
Dismiss works.
Installed PWA shows Recognition error: audio-capture when using mic.
User said mic phrase: in two minutes check the oven.
Mic reminder was not created.
Screenshot evidence shows the active error is microphone capture, not reminder parsing.
```

Conclusion:

- Typed reminder engine is working.
- The remaining blocker is installed-phone microphone capture returning `audio-capture`.
- Speech recognition is failing before usable transcript routing.
- Sprint 075 remains `HOLD` until installed-phone mic capture or an acceptable fallback path passes UAT.
