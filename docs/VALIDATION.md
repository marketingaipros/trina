# Validation

## Sprint 069 Client UAT Validation

### Approved Client URL

https://barbie-92edc.web.app/

### UAT Position

The app is approved for limited client return-to-use, not full production release.

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
