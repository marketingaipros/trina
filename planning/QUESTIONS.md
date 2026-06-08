# Questions

## Sprint 069 - Client UAT Feedback Loop

| Question | Owner | Status | Notes |
|---|---|---|---|
| Who is the first client tester? | Owner | Open | Still required for Sprint 069 closeout; no tester name or role has been recorded yet. |
| What device/browser will the client use first? | Owner / Client | Open | Still required for Sprint 069 closeout; record desktop Chrome, mobile Safari, or another tested browser. |
| Is typed-only usage acceptable during UAT? | Owner / Client | Open | Sprint 068 approved typed fallback internally; client expectation still needs confirmation during UAT. |
| Does the client need Barbie to speak answers out loud before wider use? | Owner / Client | Open | Still unconfirmed; if yes, create a dedicated talk-back sprint. |
| Are in-app reminders enough during UAT, or does the client require closed-app push? | Owner / Client | Open | Still unconfirmed; if push is required, create a notification hardening sprint. |
| What feedback format should the client use? | Owner | Open | Recommended start format: issue, expected behavior, device/browser, time, screenshot if available; final owner-approved format still needs confirmation. |
| Who gives final go/no-go after UAT? | Owner | Open | Still required before full release; Sprint 069 remains active until this is recorded or explicitly deferred. |

## Sprint 069 Start-Gate Evidence

| Item | Status | Notes |
|---|---|---|
| Approved UAT URL | Recorded | `https://barbie-92edc.web.app/` |
| UAT position | Recorded | Limited client return-to-use, not full production release. |
| Allowed current use | Recorded | Typed questions, Barbie/model answers, in-app reminders, reminder dismiss, and feedback email link. |
| Not blocking UAT | Recorded | Voice/mic input, app spoken responses, browser/native push, iPhone/native packaging, and Flutter/FlutterFlow migration remain follow-ups. |
| Client UAT closeout evidence | Missing | First tester, device/browser, typed question result, reminder result, feedback path result, known issues, and next sprint recommendation are not yet recorded. |

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
