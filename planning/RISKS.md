# Risks

## Active Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Deployed app may drift from current repo output in future sprints. | Medium | Medium | Compare deployed and local bundle hashes during release gates. | Follow-up |
| Client URL/path may be unclear. | Low | Medium | Use verified Firebase Hosting URLs for Sprint 068 limited return-to-use; record any future custom URL separately. | Follow-up |
| Anonymous auth posture may be inappropriate beyond limited return-to-use. | Medium | High | Treat anonymous/current access as limited return-to-use only and document production auth as follow-up. | Active |
| Reminder proof covers in-app due reminders, not browser/native push. | Medium | High | Use in-app reminders for Sprint 069 UAT; keep browser/native push as follow-up until proven. | Follow-up |
| Mic/voice is blocked by permission. | High | Medium | Use typed fallback for Sprint 069 UAT; keep voice permission/reliability as follow-up. | Follow-up |
| Feedback path is minimal email-only guidance. | Medium | Medium | Use `learnandgrowcc@gmail.com` and ask for structured feedback details during Sprint 069 UAT. | Follow-up |
| Sprint may expand into redesign, Flutter migration, or native packaging. | Medium | High | Sprint 069 closed from limited UAT feedback only; keep future packaging or migration in separate sprints. | Follow-up |
| Client may expect voice input to work immediately. | High | Medium | UAT checklist passed for typed usage; voice remains follow-up if desired. | Follow-up |
| Client may expect the app to speak answers out loud. | Medium | Medium | Talk-back/text-to-speech was not validated in Sprint 069; record as a future sprint if still desired. | Follow-up |
| Client may expect reminders to notify when the app is closed. | Medium | High | Sprint 069 validated in-app reminder behavior only; browser/native push remains follow-up if desired. | Follow-up |
| Client feedback may arrive through email without structured details. | Medium | Medium | Sprint 069 feedback was sufficient for first limited UAT closeout; use structured details for future issue reports. | Follow-up |
| Sprint 064 untracked files could be accidentally staged in later commits. | Medium | Medium | Builder must explicitly avoid staging Sprint 064 files unless separately approved. | Active |

## Risk Control Rule

Sprint 069 should preserve the limited return-to-use boundary and avoid expanding client UAT into feature recovery or release hardening.

Do not introduce Flutter, native packaging, dashboard redesign, CRM features, voice recovery, talk-back, push implementation, or broad app cleanup into this sprint.
