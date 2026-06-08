# Questions

## Sprint 070 Open Questions

| Question | Owner | Status | Notes |
|---|---|---|---|
| Does the current app already contain disabled or hidden talk-back code? | Builder | Resolved for Sprint 070 | Existing speech synthesis was present for Daily Snapshot, not typed Barbie answer talk-back. |
| Which browser/device will be used for first voice validation? | Builder | Resolved for Sprint 070 | Headless Chromium automation validated exact text routing to speech synthesis; real audible device output remains follow-up. |
| Should talk-back be automatically triggered after every Barbie answer, or controlled by an explicit on/off toggle? | Builder | Resolved for Sprint 070 | Sprint 070 added explicit play/stop controls and optional Talk On/Talk Off behavior. |
| Does the client want talk-back only, or full voice input plus talk-back? | Architect / Owner | Resolved for Sprint 070 | Sprint 070 stayed talk-back only. Full voice input remains outside scope. |
| Should spoken output include reminders or only Barbie chat answers? | Builder | Resolved for Sprint 070 | Sprint 070 speaks only the visible Barbie/model answer, not reminder internals. |
| If browser-native talk-back is unsupported on the test device, should the sprint close as HOLD with evidence or create a future TTS-provider sprint? | Architect / Owner | Future item if needed | Sprint 070 passed with browser speech synthesis routing. Real device/browser audible failure, if found later, should be handled as a follow-up sprint rather than paid TTS by default. |

## Sprint 069 - Client UAT Feedback Loop

| Question | Owner | Status | Notes |
|---|---|---|---|
| Who is the first client tester? | Owner | Resolved for Sprint 069 | Client feedback was received for the approved first limited UAT checklist. |
| What device/browser will the client use first? | Owner / Client | Resolved for Sprint 069 | First test was requested from a computer browser; exact browser name was not separately recorded. |
| Is typed-only usage acceptable during UAT? | Owner / Client | Resolved for Sprint 069 | Checklist included typing a question and getting an answer; client reported: `All on the list is working.` |
| Does the client need Barbie to speak answers out loud before wider use? | Owner / Client | Future item if desired | No blocker was reported from the checklist; talk-back voice response was not validated. |
| Are in-app reminders enough during UAT, or does the client require closed-app push? | Owner / Client | Resolved for Sprint 069 | In-app reminder checklist passed; closed-app push was not validated and remains a future item if desired. |
| What feedback format should the client use? | Owner | Resolved for Sprint 069 | Feedback loop was usable enough for first limited UAT; exact feedback received: `All on the list is working.` |
| Who gives final go/no-go after UAT? | Owner | Resolved for Sprint 069 | Owner directed Sprint 069 closeout as PASS based on client UAT feedback. |

## Sprint 069 Start-Gate Evidence

| Item | Status | Notes |
|---|---|---|
| Approved UAT URL | Recorded | `https://barbie-92edc.web.app/` |
| UAT position | Recorded | Limited client return-to-use, not full production release. |
| Allowed current use | Recorded | Typed questions, Barbie/model answers, in-app reminders, reminder dismiss, and feedback email link. |
| Not blocking UAT | Recorded | Voice/mic input, app spoken responses, browser/native push, iPhone/native packaging, and Flutter/FlutterFlow migration remain follow-ups. |
| Client UAT closeout evidence | Recorded | Exact feedback received: `All on the list is working.` No blocker was reported from the approved checklist. |

## Open Questions for Sprint 068

| Question | Needed For | Owner / Source | Status |
|---|---|---|---|
| Which URL should the client use: `https://barbie-92edc.web.app/`, `https://barbie-92edc.firebaseapp.com/`, or another custom URL? | Customer return-to-use instructions | Owner | Resolved for Sprint 068 - both Firebase Hosting URLs are valid and tested; prefer `https://barbie-92edc.web.app/` for customer handoff unless owner chooses the alternate. |
| Should the current deployed app be updated to match the current repo build before client use? | Version match / release safety | Owner + Builder evidence | Resolved - Firebase Hosting deploy completed and both live URLs serve current bundle assets. |
| Is anonymous access acceptable for this client return-to-use pass? | Access/login approval | Owner | Answered for Sprint 068 limited return-to-use only; production posture remains follow-up. |
| Should reminders be approved with in-app due reminders only, or must browser/native push work before client use? | Reminder behavior expectation | Owner | Answered for Sprint 068; in-app reminders are acceptable, browser/native push is follow-up. |
| Should voice input be included in the client return-to-use release, or marked as not ready? | Client expectations | Owner | Answered for Sprint 068; typed fallback is acceptable, voice/mic remains follow-up. |
| What is the approved feedback path for this client? | UAT issue intake | Owner | Resolved for Sprint 068 - deployed app shows `Need to report a problem? Email feedback to learnandgrowcc@gmail.com.` |
| Who is the first tester? | UAT ownership | Owner | Follow-up beyond Sprint 068 limited return-to-use. |
| Who can give final go-live approval? | Release approval | Owner | Resolved for Sprint 068 limited return-to-use by explicit deploy approval and successful post-deploy smoke; broader release approval remains follow-up. |

## Sprint 068 Closeout Requirement

Before Sprint 068 can recommend approval, each question above must be answered or explicitly marked as not required for return-to-use.
