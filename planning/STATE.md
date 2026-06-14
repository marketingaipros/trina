# Project State

## Current Sprint

Sprint 075 - Mobile Installed Reminder + Mic Reliability Fix

## Current Status

Sprint 075 is complete.

Sprint 075 result: PASS.

Real-phone installed PWA UAT confirmed:

- Typed reminders work.
- Mic reminders work after Hosting redeploy.
- Spoken reminder was captured.
- Reminder was booked.
- Reminder went off.
- Reminder was dismissed successfully.
- Play/Stop remains protected by previous validation.

Sprint 075 is complete and ready for commit.

Sprint 073 is complete and pushed to `origin/main`.

Sprint 073 result: PASS.

Confirmed working:

- Typed Barbie Q&A in Chrome.
- Visible Barbie answer.
- Audible Barbie talk-back.
- Spoken text matches visible answer.
- Stop/cancel works or speech ends cleanly.
- Reminder create/appear/dismiss works.

Sprint 074 is now planned as a PWA/mobile install wrapper sprint.

Sprint 074 implementation evidence has been recorded locally. The PWA wrapper is present, local manifest/icons are reachable, the app loads at a phone viewport, typed Q&A passes, Play/Stop UI routing remains intact, and local reminder create/appear/dismiss passes.

Sprint 074 deployed to Firebase Hosting with Hosting-only deploy.

Sprint 074 real phone UAT:

- Opened from home-screen icon: yes.
- Typed question: pass.
- Visible answer appeared: pass.
- Play made Barbie speak: pass.
- Spoken text matched answer: pass.
- Stop worked: pass.
- Reminder appeared and dismissed: fail.
- Mic reliability: intermittent.
- User experience issue: reminder requests can cause Barbie to explain how to word the reminder instead of creating it.

Sprint 074 remains `HOLD - installed phone reminder/mic UAT failed`.

Second real phone UAT evidence for Sprint 075 planning:

- Typed reminder worked.
- Reminder appeared and dismissed correctly.
- Mic reminder produced the same incorrect response.
- Screenshot evidence again shows Barbie saying: `I can save that reminder for "in two minutes to check the oven". Please include a time like "in 2 minutes", "in 1 hour", "today at 3pm", or "tomorrow at 10am".`
- Conclusion: the reminder engine is working, typed reminder flow is working, and the installed PWA shell is working.
- Current defect: mic-transcribed reminder handling, likely parser normalization or route mismatch between mic transcript and typed Send flow.
- Sprint 074 remains `HOLD`.
- Sprint 075 should focus on mic reminder parsing/reliability.

Earlier real phone UAT evidence after Sprint 075 Hosting deploy:

- Typed reminder works.
- Typed reminder sets correctly.
- Reminder appears when due.
- Dismiss works.
- Installed PWA shows `Recognition error: audio-capture` when using mic.
- User said mic phrase: `in two minutes check the oven`.
- Mic reminder was not created.
- Screenshot evidence shows the active error is microphone capture, not reminder parsing.
- Conclusion: typed reminder engine is working. The remaining blocker is installed-phone microphone capture returning `audio-capture`, which means speech recognition is failing before usable transcript routing.

## Current Goal

Close Sprint 075 as PASS after installed-phone reminder and mic UAT passed.

Sprint 075 made reminder requests create real reminders when enough information exists, improved mic fallback handling, and preserved Sprint 073 audible voice behavior plus Sprint 074 installed launch behavior.

## Next Action

Prepare controlled Sprint 075 commit when approved.

## Known Constraints

- Do not rebuild the app in Flutter during Sprint 075.
- Do not start native app packaging.
- Do not touch FlutterFlow.
- Do not change Firebase settings unless a later approved deploy sprint requires it.
- Do not touch Sprint 064 or Sprint 072 untracked files.
- Do not create or modify CEO Briefing artifacts.
- Do not add service worker/offline caching unless strictly necessary and explicitly approved.

## Prior Sprint State

### Sprint 074 - PWA Mobile Install Wrapper

Sprint 074 remains `HOLD - installed phone reminder/mic UAT failed`.

Sprint 074 made the existing Barbie Vite web app installable as a PWA wrapper and deployed the wrapper to Firebase Hosting. Real phone UAT confirmed installed launch, typed Q&A, visible answer, audible Play, spoken-text match, and Stop. Reminder appear/dismiss failed, mic reliability was intermittent, and reminder phrasing sometimes routed to generic guidance instead of creating a reminder.

### Sprint 073 - Real Audible Voice Recovery + Physical Device Verification

## Current Status

Sprint 073 is closed as `PASS - real audible Barbie voice verified by operator`.

Operator UAT confirmed real audible Barbie talk-back on 2026-06-14:

- Browser/device used: Chrome.
- Did you hear Barbie speak? yes.
- Did spoken text match the visible answer? yes.
- Did Stop/cancel work or audio end cleanly? yes.
- Did reminder appear and dismiss? yes.
- Final result: PASS.

Sprint 073 fixed the browser talk-back path so Play is user-triggered, speaks only the latest final visible Barbie answer, exposes Stop while active, and preserves reminder create/due/dismiss behavior.

Sprint 072 remains `HOLD` as historical carryforward evidence from before the Sprint 073 operator PASS.

Sprint 072 evidence:

- Browser/device used: headless Chromium automation on Mac.
- No physical speaker access was available.
- Barbie was not heard speaking.
- Spoken text did not match the visible answer.
- Stop/cancel worked or audio ended cleanly.
- Reminder appeared and dismissed.

## Current Active Sprint

Sprint 073 - Real Audible Voice Recovery + Physical Device Verification.

Active sprint folder:

```text
planning/sprints/073-real-audible-voice-recovery/
```

## Release Gate

Sprint 073 satisfied the real audible voice release gate through operator UAT in Chrome. Broader client handoff still depends on any separate owner release-control decision.

## Sprint 072 Carryforward Evidence

Sprint 072 is `HOLD - deployed controls restored; real audible output not physically verified`.

Sprint 071 closed as `HOLD - client return-to-use blocked` because the deployed app answered typed Q&A but did not expose visible Talk/Play/Stop/disable controls needed to physically verify real audible browser/device speech output.

Sprint 072 found the blocker was deploy/version drift, not a source-code defect. Local source and local browser already exposed the Sprint 070 talk-back controls near the latest Barbie answer. A controlled Firebase Hosting-only deploy was run on 2026-06-08 after lint/build passed, and the deployed URL then served the current build assets.

Sprint 072 deployed UAT evidence recorded on 2026-06-08:

- Tested deployed URL: `https://barbie-92edc.web.app/?sprint072uat=<cache-bust>`.
- Deployed assets after cache-bust: `assets/index-B1z4yODZ.js` and `assets/index-Dej7iVgQ.css`.
- Typed Q&A prompt `What should I focus on today?` returned a visible Barbie/model answer.
- `Barbie Answer` label appeared.
- `Talk Off` and `Play Barbie answer audio` controls appeared near the latest answer.
- Clicking Play was possible, but real audible browser/device speaker output was not physically verified in the Builder environment.
- Stop/cancel did not appear in the headless UAT session because speech active state was not observed.
- Reminder prompt `Remind me in 1 minute to check the door.` returned `Got it. I'll remind you in 1 minute.`
- Due in-app reminder appeared after waiting.
- Dismiss cleared the due reminder.
- Feedback link remained visible as `mailto:learnandgrowcc@gmail.com`.
- Observed console error: `Google Identity Services not loaded`; typed Q&A and reminders still passed.

Sprint 072 final recommendation:

```text
HOLD - deployed talk controls restored, but real audible output was not physically verified.
```

Sprint 072 sprint folder:

```text
planning/sprints/072-deployed-talk-controls-audible-voice-uat-fix/
```

## Next Action

Codex should read the Sprint 073 planning files and summarize the implementation plan before changing runtime/source files.

## Current Release Recommendation

```text
PASS - Sprint 073 real audible voice gate verified by operator
```

Real audible talk-back has been physically verified by the operator in Chrome for Sprint 073.

## Prior Sprint Snapshot

### Sprint 071 - Client Return-to-Use UAT + Real Audible Voice Check

Sprint 071 UAT is stopped at `HOLD - client return-to-use blocked.`

Sprint 071 must decide whether the current browser app can be returned to the client for limited use after a real browser/device audible talk-back check.

Required Sprint 071 proof:

- Exact current app URL/path the client should use.
- Whether the deployed/current client URL reflects Sprint 070 behavior.
- Typed Q&A returns a visible Barbie/model answer.
- Real audible talk-back is heard from a real browser/device speaker or selected audio output.
- Spoken text matches the visible final Barbie/model answer.
- Talk-back stop/disable works.
- Reminder create/display/dismiss works.
- Feedback link remains visible.

Sprint 071 evidence recorded on 2026-06-08:

- Tested deployed client URL: `https://barbie-92edc.web.app/`.
- Latest repo commit at start: `2dcf744 fix: restore browser talk-back for Barbie answers`.
- Typed Q&A prompt `What should I focus on today?` returned a visible Barbie/model answer.
- Feedback link remained visible as `mailto:learnandgrowcc@gmail.com`.
- Deployed client URL did not expose visible Talk/Play/Stop/disable controls after the answer.
- Real audible browser/device speaker output could not be physically verified on the deployed client URL.
- Reminder flow was not run because Sprint 071 stopped at the talk-back blocker.
- Observed console error: `Google Identity Services not loaded`; typed Q&A still passed.

Sprint 071 final recommendation:

```text
HOLD - client return-to-use blocked.
```

Sprint 071 must not modify runtime/source files, run deploys, touch Firebase, FlutterFlow, native/mobile packaging, credentials, CEO Briefing files, or Sprint 064 files.

Active sprint folder:

```text
planning/sprints/071-client-return-to-use-uat-real-audible-voice-check/
```

### Sprint 070 - Voice Talk-Back Restore

Sprint 070 is closed as `PASS - voice talk-back restored for browser-visible Barbie answers.`

The current working app preserves the Sprint 069 approved basic client flow:

`https://barbie-92edc.web.app/`

Sprint 070 implementation evidence:

- Runtime file changed: `components/VoiceDashboard.tsx`.
- No backend/model contract change.
- No change to `src/lib/barbieAI.js`.
- Talk-back speaks only the final visible `typedReply` answer.
- Headless browser automation proved exact visible-answer-to-speech text match.
- Speech stop control works.
- Typed Q&A still works.
- Reminder create/display/dismiss still works.
- Feedback link remains visible.
- Actual audible speaker output still depends on real browser/device audio path.

The approved basic flow is working:

- App opens.
- Typed question returns a Barbie/model answer.
- In-app reminder can be created.
- Reminder appears in the app.
- Reminder can be dismissed.
- Feedback loop is available.
- Final visible Barbie/model answer can be sent to browser speech synthesis.

### Sprint 070 Active Scope

Sprint 070 restored browser talk-back response for visible Barbie/model answers without breaking the working typed Q&A and reminder flow.

Sprint 070 sprint folder:

```text
planning/sprints/070-voice-talk-back-restore/
```

### Sprint 070 Goal

Restore or prove browser talk-back response so Barbie can speak answers out loud after answering, without breaking the working typed Q&A and reminder flow.

### Recently Completed

- Sprint 070 closed as PASS candidate from implementation evidence.
- Sprint 069 closed as PASS.
- Client UAT started and feedback loop established.
- No blocker reported from the approved checklist.

### Next Actions

- Resolve the deployed-client talk-back mismatch or create a separate deploy/path validation sprint before client return-to-use.
- Validate actual audible speaker output on the owner/client's real browser/device after the client URL exposes the required talk-back controls.
- Keep closed-app push notifications, native/mobile packaging, FlutterFlow migration, and broader voice input reliability in future sprints unless separately approved.

### Blockers / Watch Items

- Client/browser voice expectations need to be kept realistic.
- Browser autoplay rules may require a user gesture before speech can play.
- Device/browser differences may affect voice availability.
- Actual audible speaker output is not fully proven by headless automation.

### Sprint 069 - Client UAT Feedback Loop

Sprint 069 moved the restored Barbie web app from internal validation to limited client UAT.

### Sprint 069 Status

`PASS - client UAT started and feedback loop established.`

Sprint 068 deployed the current build to Firebase Hosting and validated the approved customer URL:

https://barbie-92edc.web.app/

The client may use the app for typed questions, Barbie/model answers, in-app reminders, reminder dismiss, and feedback via the visible email link.

### Sprint 069 Scope

Sprint 069 prepared and tracked limited client UAT. The approved checklist produced a passing client response with no blocker reported.

## Sprint 069 Start-Gate Evidence

Status: `ACTIVE - UAT feedback loop started; client closeout evidence not yet recorded.`

Start gate recorded on 2026-06-08 after Builder review of:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/069-client-uat-feedback-loop/requirements.md`
- `planning/sprints/069-client-uat-feedback-loop/blueprint.md`
- `planning/sprints/069-client-uat-feedback-loop/acceptance.md`
- `planning/sprints/069-client-uat-feedback-loop/handoff-prompt.md`

The current approved client UAT URL remains:

https://barbie-92edc.web.app/

Sprint 069 closeout evidence was recorded from client feedback after the start gate.

## Sprint 069 Closeout Evidence

Final status: `PASS - client UAT started and feedback loop established.`

Client feedback received:

```text
All on the list is working.
```

Interpretation:

- App opened successfully.
- Typed question returned an answer.
- In-app reminder could be created.
- Reminder appeared in the app.
- Reminder could be dismissed.
- Feedback loop was usable enough for first limited UAT.
- No blocking issue was reported from the approved checklist.

### Not In Sprint 069 Scope

- Voice recovery
- App talking back / text-to-speech
- Browser/native push notifications
- FlutterFlow migration
- iPhone/native packaging
- Full production release hardening

### Sprint 069 Next Action

Plan the next sprint from any owner/client priority among talk-back voice response, closed-app push notifications, mobile/native packaging, and FlutterFlow/native app path.

### Sprint 069 Known Follow-Ups

- Voice/mic reliability
- Barbie spoken responses
- Browser/native push behavior
- Mobile install/iPhone packaging path
- Flutter/FlutterFlow decision

## Sprint 068 Implementation Results

**Final recommendation:** `APPROVE - give current app back to client`.

Evidence recorded on 2026-06-08:

- `https://barbie-92edc.web.app/` returned `HTTP/2 200` and loaded the current customer UI.
- `https://barbie-92edc.firebaseapp.com/` returned `HTTP/2 200` and loaded the same customer UI.
- Deployed asset bundle now matches the current local build: `assets/index-C76Bx-lr.js` and `assets/index-hG8MW9TT.css`.
- Typed question `What should I focus on today?` passed on deployed web app with visible non-mocked Barbie response and callable success logs.
- Reminder creation passed on deployed web app with `Got it. I'll remind you in 1 minute.`
- In-app due reminder passed on deployed web app with visible `Reminder`, `check the door`, `Dismiss`, and `Snooze 5 minutes`.
- Dismiss passed; the visible in-app reminder cleared after clicking `Dismiss`.
- Voice/mic remains blocked by browser permission and is follow-up.
- Browser/native push remains unproven and is follow-up.
- Live deployed app includes visible feedback instruction: `Need to report a problem? Email feedback to learnandgrowcc@gmail.com.`
- Firebase Hosting deploy completed successfully for project `barbie-92edc`.
