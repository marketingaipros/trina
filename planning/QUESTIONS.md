# Questions

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
