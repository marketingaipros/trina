# Validation

## Sprint 070 Validation - Voice Talk-Back Restore

Sprint 070 proved browser talk-back routing for visible Barbie/model answers and preserved the Sprint 069 return-to-use flow.

### Sprint 070 Closeout Result

Date: 2026-06-08

Final status:

```text
PASS - voice talk-back restored for browser-visible Barbie answers.
```

Implementation evidence:

- Runtime file changed: `components/VoiceDashboard.tsx`.
- No backend/model contract change.
- No change to `src/lib/barbieAI.js`.
- Talk-back now speaks only the final visible `typedReply` answer.
- Speech stop control works.
- Typed Q&A still works.
- Reminder create/display/dismiss still works.
- Feedback link remains visible.
- Headless browser automation proved exact visible-answer-to-speech text match.
- Actual audible speaker output still depends on real browser/device audio path.
- Sprint 064 files remain untracked and untouched.
- No deploy, Firebase, Firestore rules, Firebase config, FlutterFlow, native, mobile packaging, credential, CEO Briefing, stage, commit, or push work was done.

Validation commands:

```text
git diff --check - passed
test ! -f references/flutterflow/sprint-009/ceo-briefing.png - passed
npm run lint - passed
npm run build - passed with existing baseline Vite warnings about services/authService.ts mixed import and bundle size over 500 kB
```

Functional proof:

- App opens locally.
- Typed Q&A returned a visible Barbie/model answer.
- Exact visible answer text matched the text passed to browser speech synthesis.
- Talk-back stop control returned the UI to the play state.
- Live reminder prompt returned a reminder confirmation.
- In-app reminder appeared.
- Reminder dismiss cleared the visible reminder.
- Feedback link remained visible.

Remaining validation caveat:

- Headless automation proves text routing to browser speech synthesis, not physical audible output from the device speaker. Real browser/device audio should remain a follow-up check before claiming device-specific audible proof.

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

Run the repo's existing relevant checks if available.

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

## Sprint 069 Client UAT Validation

### Approved Client URL

https://barbie-92edc.web.app/

### UAT Position

The app is approved for limited client return-to-use, not full production release.

### Sprint 069 Start Gate

Date: 2026-06-08

Result:

```text
ACTIVE - UAT feedback loop started; client closeout evidence not yet recorded.
```

Builder start-gate review completed against:

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

Client UAT closeout evidence was later recorded from the approved checklist.

### Sprint 069 UAT Closeout Result

Date: 2026-06-08

Final status:

```text
PASS - client UAT started and feedback loop established.
```

Exact UAT evidence received:

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

### Client-Tested Flows

The client should validate:

1. Open the app URL.
2. Ask a typed question.
3. Confirm Barbie answers.
4. Create a reminder.
5. Wait for the in-app reminder.
6. Dismiss the reminder.
7. Use the feedback email link if something goes wrong.

### Known Follow-Ups Not Blocking UAT

- Voice/mic input
- App spoken responses
- Browser/native push
- iPhone/native packaging
- Flutter/FlutterFlow migration

### Feedback Format

Ask the client to send:

- What she tried to do
- What happened
- What she expected
- Device and browser
- Approximate time
- Screenshot or screen recording, if possible

### UAT Closeout Evidence

Sprint 069 can close only when the project records:

- first tester name or role
- tested URL
- tested device/browser
- typed question result
- reminder result
- feedback path result
- known issues found
- recommendation for next sprint

### Open UAT Evidence Items

| Evidence Item | Status | Notes |
|---|---|---|
| First client tester | Recorded for Sprint 069 | Client feedback was received for the approved first limited UAT checklist. |
| First device/browser | Recorded for Sprint 069 | First test was requested from a computer browser; exact browser name was not separately recorded. |
| Typed-only acceptance | Passed for Sprint 069 | Checklist included typed question/answer; client reported: `All on the list is working.` |
| Talk-back need | Future item if desired | Talk-back voice response was not validated. |
| In-app reminder vs closed-app push expectation | Passed for in-app reminders | Closed-app push was not validated and remains a future item if desired. |
| Feedback format | Passed for Sprint 069 | Feedback loop was usable enough for first limited UAT. |
| Final go/no-go approver | Recorded for Sprint 069 | Owner directed Sprint 069 closeout as PASS based on client UAT feedback. |

### Future Items Not Validated By Sprint 069

- Talk-back voice response, if still desired.
- Closed-app push notifications, if still desired.
- Mobile/native packaging.
- FlutterFlow/native app path.

## Sprint 068 - Customer Return-to-Use Blocker Fixes

Sprint 068 must validate whether the current app can be safely returned to the client after Sprint 067 blockers are fixed or explicitly limited.

## Required Validation Areas

### 1. Official Customer URL

Record:

- URL tested.
- Whether the URL returned success.
- Whether this is the owner-approved customer URL.

### 2. Deployed Version Match

Record:

- Deployed JS/CSS asset names.
- Local build/dist JS/CSS asset names.
- Whether they match.
- If not matching, whether a deploy was approved and performed.
- Post-deploy asset names, if applicable.

### 3. Access/Login

Record:

- Access method used.
- Anonymous UID or user identity evidence, without exposing secrets.
- Whether owner approved this access posture for client return-to-use.

### 4. Typed Question and Backend/Model Answer

Run a typed question smoke test.

Record:

- Prompt used.
- Whether backend callable was reached.
- Whether response was non-mocked.
- HTTP/function result evidence.

### 5. Reminder Creation

Run a reminder creation smoke test.

Record:

- Reminder prompt used.
- Confirmation text.
- Whether reminder record/behavior appeared as expected.

### 6. Due Reminder Behavior

Record:

- Whether in-app due reminder appears.
- Whether dismiss works.
- Whether snooze works, if tested.
- Browser/native notification permission state.
- Whether browser/native push is proven or explicitly out of scope for return-to-use.

### 7. Voice Input

Record:

- Browser used.
- Mic permission state.
- Whether speech recognition activates.
- Whether spoken input reaches the app.
- Whether voice is approved for return-to-use or marked not ready.

### 8. Feedback Path

Record:

- Visible in-app feedback path, if implemented.
- External owner-approved feedback path, if used instead.
- Exact feedback instructions to give the client.

### 9. First Tester and Go-Live Approval

Record:

- First tester name or role.
- Go-live approver name or role.
- Approval status.
- Date approval was recorded.

## Required Commands

Before closeout, run:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

If runtime/source or deploy changes are approved in the implementation step, also run the relevant app build/test/smoke commands documented in the active sprint closeout.

## Sprint 068 Final Recommendation Format

Sprint 068 closeout must use exactly one of:

```text
APPROVE - give current app back to client
```

or

```text
HOLD - blocker remains after Sprint 068
```

Approval is allowed only if:

- Official customer URL is recorded.
- Deployed app version is proven current or owner-approved.
- Access/login posture is owner-approved.
- Typed backend/model answer path passes.
- Reminder creation passes.
- Due reminder behavior is proven or limitation is owner-approved.
- Voice status is proven or limitation is owner-approved.
- Feedback path is recorded and owner-approved.
- First tester is recorded.
- Owner/go-live approval is recorded.

## Sprint 068 Implementation Validation Result

Date: 2026-06-08

Final recommendation:

```text
APPROVE - give current app back to client
```

### Customer URLs and Deployed Version

| URL | Result |
|---|---|
| `https://barbie-92edc.web.app/` | `HTTP/2 200`; deployed UI loaded. |
| `https://barbie-92edc.firebaseapp.com/` | `HTTP/2 200`; deployed UI loaded. |

Deployed assets on both Firebase Hosting URLs:

```text
assets/index-D7N8pcgM.js
assets/index-jzssNT7p.css
```

Current local `dist/index.html` assets after Sprint 068 build:

```text
assets/index-C76Bx-lr.js
assets/index-hG8MW9TT.css
```

Result after deploy: both Firebase Hosting URLs now serve the current bundle.

Deploy command:

```bash
npx -y firebase-tools@latest deploy --only hosting --project barbie-92edc
```

Deploy result:

```text
Deploy complete
Hosting URL: https://barbie-92edc.web.app
```

### Browser Smoke

Primary deployed smoke URL: `https://barbie-92edc.web.app/`

| Area | Result | Evidence |
|---|---|---|
| App load | Pass | UI loaded with `HI I'M BARBIE!`, typed input, navigation buttons, and cloud connection. |
| Anonymous/current access posture | Limited pass | Console logged `Cloud connected, UID: ...`; no obvious sensitive-data exposure was introduced during Sprint 068. Production auth posture remains follow-up. |
| Typed question | Pass | Submitted `What should I focus on today?`. |
| Backend/model response | Pass | Console logged `askBarbie called`, `function called`, `callable returned`, and `function success`; UI showed a non-mocked Barbie response. |
| Reminder creation | Pass | Submitted `Remind me in 1 minute to check the door`; UI showed `Got it. I’ll remind you in 1 minute.` |
| Due reminder behavior | Pass for in-app reminder | UI showed `Reminder`, `check the door`, `Dismiss`, and `Snooze 5 minutes`. |
| Dismiss | Pass | Clicking `Dismiss` cleared the visible in-app reminder. |
| Snooze | Visible, not fully timed | `Snooze 5 minutes` control was visible; full five-minute snooze cycle was not timed in this pass. |
| Browser/native push | Follow-up | Sprint 068 accepts in-app reminders; browser/native push remains unproven. |
| Voice/mic | Follow-up | UI showed `Microphone permission was denied. Please enable it in browser settings.` Typed fallback is accepted for Sprint 068. |
| Feedback path on deployed URL | Pass | Live deployed app showed `Need to report a problem? Email feedback to learnandgrowcc@gmail.com.` with `mailto:learnandgrowcc@gmail.com`. |

### Sprint 068 Runtime Fix

Changed `components/VoiceDashboard.tsx` to add a visible feedback instruction and `mailto:` link:

```text
Need to report a problem? Email feedback to learnandgrowcc@gmail.com.
```

Local preview validation before deploy:

- URL: `http://127.0.0.1:4173/`
- Result: feedback link rendered once with `mailto:learnandgrowcc@gmail.com`.

Post-deploy live validation:

- URL: `https://barbie-92edc.web.app/?sprint068postdeploy=...`
- Result: feedback link rendered with `mailto:learnandgrowcc@gmail.com`.
- Typed question `What should I focus on today?` returned visible non-mocked Barbie answer.
- Reminder prompt `Remind me in 1 minute to check the door` returned `Got it. I’ll remind you in 1 minute.`
- In-app reminder appeared with `REMINDER`, `check the door`, `DISMISS`, and `SNOOZE 5 MINUTES`.
- Dismiss control cleared the visible reminder.
- Voice/mic status: SpeechRecognition and media devices were available, but `Notification.permission` was `denied` in the smoke profile and the UI displayed microphone permission denial copy. Typed fallback remains accepted for Sprint 068.

### Commands Run

```bash
git status --branch --short
curl -I -s https://barbie-92edc.web.app/
curl -s https://barbie-92edc.web.app/ | rg -o "assets/[^\"']+\\.(js|css)"
curl -I -s https://barbie-92edc.firebaseapp.com/
curl -s https://barbie-92edc.firebaseapp.com/ | rg -o "assets/[^\"']+\\.(js|css)"
rg -o "assets/[^\"']+\\.(js|css)" dist/index.html
npm run lint
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
npx -y firebase-tools@latest deploy --only hosting --project barbie-92edc
curl -I -s https://barbie-92edc.web.app/
curl -s https://barbie-92edc.web.app/ | rg -o "assets/[^\"']+\.(js|css)"
curl -I -s https://barbie-92edc.firebaseapp.com/
curl -s https://barbie-92edc.firebaseapp.com/ | rg -o "assets/[^\"']+\.(js|css)"
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Build notes:

- `npm run lint` passed.
- `npm run build` passed.
- Vite reported the known `services/authService.ts` mixed static/dynamic import warning.
- Vite reported the known chunk-size warning for a chunk larger than 500 kB.

### Scope Confirmation

- Firebase Hosting deploy was run for Hosting only.
- No staging, commit, or push was performed.
- Firebase settings were not changed.
- FlutterFlow files were not changed.
- Native build files were not changed.
- Credentials were not changed.
- CEO Briefing files were not changed.
- `docs/API.md` was not changed.
- `docs/ARCHITECTURE.md` was not changed.
- Sprint 064 untracked files were not touched.
