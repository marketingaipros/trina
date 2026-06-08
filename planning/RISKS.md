# Risks

## Active Risks

| Risk | Impact | Mitigation | Status |
|---|---|---|---|
| Deployed app may drift from current repo output in future sprints. | Client may use stale behavior if future changes are not deployed after validation. | Compare deployed and local bundle hashes during release gates. | Follow-up |
| Client URL/path may be unclear. | Client may receive the wrong link or unsupported path. | Use verified Firebase Hosting URLs for Sprint 068 limited return-to-use; record any future custom URL separately. | Follow-up |
| Anonymous auth posture may be inappropriate beyond limited return-to-use. | Client data/access expectations may be unclear. | Treat anonymous/current access as limited return-to-use only and document production auth as follow-up. | Active |
| Reminder proof covers in-app due reminders, not browser/native push. | Client may expect native/browser push that does not work. | Use in-app reminders for Sprint 068; keep browser/native push as follow-up until proven. | Follow-up |
| Mic/voice is blocked by permission. | Client may expect voice input but cannot use it. | Use typed fallback for Sprint 068; keep voice permission/reliability as follow-up. | Follow-up |
| Feedback path is minimal email-only guidance. | Client issues may still arrive without structured triage metadata. | Use `learnandgrowcc@gmail.com` for Sprint 068 and consider a structured feedback channel later. | Follow-up |
| Sprint may expand into redesign, Flutter migration, or native packaging. | Delays return-to-use and increases risk. | Keep Sprint 068 limited to blockers preventing current app return-to-use. | Active |

## Risk Control Rule

Sprint 068 should prefer the smallest safe unblock path.

Do not introduce Flutter, native packaging, dashboard redesign, CRM features, or broad app cleanup into this sprint.
