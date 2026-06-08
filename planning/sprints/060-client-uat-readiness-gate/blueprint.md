# Sprint 060 Blueprint - Client UAT Readiness Gate

## Start Checkpoint

Read:

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/059-rerun-barbie-backend-smoke-after-auth-unblock/acceptance.md`

Confirm Sprint 059 is recorded as `PASS` before continuing.

## Implementation Sequence

1. Capture `git status --branch --short`.
2. Confirm `references/flutterflow/sprint-009/ceo-briefing.png` is not touched.
3. Create Sprint 060 sprint folder and four required sprint files.
4. Update `planning/STATE.md` with Sprint 060 active UAT readiness posture.
5. Update `planning/DECISIONS.md` only for changed or newly clarified decisions.
6. Update `planning/RISKS.md` only for new/changed UAT risks.
7. Update `planning/QUESTIONS.md` with Sprint 060 readiness questions and known answers.
8. Update `docs/VALIDATION.md` with Sprint 060 UAT validation rules.
9. Do not update `docs/ARCHITECTURE.md` unless an architecture change is recorded.
10. Do not update `docs/API.md` unless an API/interface contract change is recorded.
11. Run docs/planning validation checks.
12. Report UAT readiness recommendation and any unresolved owner actions.

## Recommended State Update

Record:

- Sprint 060 is active.
- Sprint 059 backend/model smoke passed.
- Client UAT is now a controlled readiness decision, not automatically approved.
- Current working UI is the default UAT candidate surface.
- Exact UAT surface/link/path must be confirmed before client handoff.
- FlutterFlow is deferred for this sprint.
- Native/iPhone packaging is deferred for this sprint.
- Production release remains blocked without explicit approval.

## Recommended Decision Updates

Add only if not already present:

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-06-08 | Sprint 060 uses the current working UI as the default controlled UAT candidate surface. | Sprint 059 proved the current UI can reach the real Barbie backend/model path. | Client UAT readiness can be evaluated without waiting for FlutterFlow or native packaging. |
| 2026-06-08 | FlutterFlow is not the Sprint 060 UAT surface. | The current backend/model path is proven in the React/Vite UI, while FlutterFlow migration remains unapproved for this sprint. | Do not migrate, export, or modify FlutterFlow before controlled UAT readiness is decided. |
| 2026-06-08 | Native/iPhone packaging is deferred beyond Sprint 060. | Web workflow proof should precede packaging and device-specific validation. | Do not run native builds, Capacitor packaging, TestFlight, or app-store work in this sprint. |
| 2026-06-08 | V1 Beta approval requires an explicit owner/go-live approver decision after UAT surface, workflows, feedback channel, and known issues are recorded. | Backend smoke passing is necessary but not sufficient for client beta approval. | No final release or broad client access without a separate approval gate. |

## Recommended Risk Updates

Add a Sprint 060 risk section:

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Client UAT may be mistaken for final production release. | Medium | High | Label the sprint as controlled Client Test Version / V1 Beta readiness and keep production release blocked. | Active |
| Exact UAT surface/link/path may remain unresolved after backend smoke passes. | Medium | High | Require owner-approved UAT URL/path before client handoff. | Active |
| Notifications may be treated as a blocker without a clear V1 Beta decision. | Medium | Medium | Classify notifications as blocking, deferred, or watch-only with rationale before handoff. | Active |
| Feedback may be lost or scattered. | Medium | Medium | Require a bug/feedback capture channel before client handoff. | Active |
| Anonymous auth may support UAT smoke but still be unresolved for production auth posture. | Medium | High | Record auth posture as UAT-only, production-ready, or unresolved. | Active |

## Recommended Questions Update

Add:

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| Can the client safely test the current app? | Architect / Owner | Before client handoff | Pending Sprint 060 decision | Sprint 059 removed the backend/model smoke blocker, but UAT surface, workflows, feedback channel, and approver must be confirmed. |
| What exact app surface/link/path should the client use for UAT? | Owner / Builder | Before client handoff | Open | Do not invent. Local `127.0.0.1` smoke evidence is not a client share link. |
| Are we using the current UI for UAT, not FlutterFlow yet? | Architect / Owner | Sprint 060 | Recommended yes | Current UI is the default UAT candidate because Sprint 059 proved its backend/model path. |
| What core workflows must be tested before client handoff? | Architect / Owner | Sprint 060 | Drafted | App load, auth/session, typed Barbie response, reminder/task request, navigation, typed fallback, and notification status. |
| Are notifications blocking UAT? | Architect / Owner | Sprint 060 | Open | Decide whether notifications are required for V1 Beta or can be deferred/watch-only. |
| Where should bugs/feedback be captured? | Owner | Before client handoff | Open | Choose a single channel before sharing with client. |
| Who approves V1 Beta testing? | Owner | Before client handoff | Open | Record named approver or approval role. |

## Validation Commands

Use docs-safe validation:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
rg -n "060-client-uat-readiness-gate|Client UAT|V1 Beta|current working UI|FlutterFlow|native|deploy|feedback|notifications" planning docs
```

Optional normal app validation may be run only if the owner requests runtime proof during the later Sprint 060 application. The Architect Pack application itself does not authorize runtime/source edits or deployment.

## Closeout Recommendation Labels

Use exactly one:

- `CLIENT UAT READY`
- `CLIENT UAT READY WITH DEFERRALS`
- `HOLD`

Use `CLIENT UAT READY` only if all required UAT logistics and core workflow gates are confirmed with no unresolved blockers.

Use `CLIENT UAT READY WITH DEFERRALS` if the current app can be safely tested, the exact UAT surface and feedback channel are approved, and remaining items are documented non-blocking deferrals.

Use `HOLD` if exact UAT access, approver, feedback channel, auth posture, or a core workflow remains unresolved.
