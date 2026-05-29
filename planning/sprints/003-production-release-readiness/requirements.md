# Sprint 003 Requirements — Production Release Readiness

## Goal

Prepare Trina / TrinaOS Voice for a controlled V1 go-live decision by verifying production deployment readiness, documenting launch blockers, and creating a release checklist.

This sprint should not add new features.

---

## Business Objective

Make sure V1 can be launched safely without accidentally expanding scope into Gmail send, unverified Telegram behavior, incomplete mobile readiness, or unclear debug logging policies.

---

## Users

- Primary owner / operator using Trina.
- Builder validating release readiness.
- Architect reviewing launch risk and go-live decision.
- Future maintainer reading project state.

---

## In Scope

- Verify Firebase project/deployment readiness by inspection and approved commands.
- Verify Hosting readiness.
- Verify Functions deploy readiness without deploying unless approved.
- Verify Firestore rules readiness.
- Verify Telegram secret and webhook status if available.
- Confirm Gmail send remains V2-disabled in chat behavior.
- Decide or document status of existing Gmail callable.
- Decide or document debug logging policy.
- Decide V1 platform scope: web-only, Android, iOS, or all three.
- Create a go-live checklist.
- Update `docs/VALIDATION.md`.
- Update `planning/STATE.md`.
- Update `planning/RISKS.md`.
- Update `planning/QUESTIONS.md`.
- Record durable launch decisions in `planning/DECISIONS.md`.

---

## Out of Scope

- Building new features.
- Re-enabling Gmail send.
- Creating new Gmail workflows.
- Refactoring app architecture.
- Redesigning the UI.
- Adding new mobile voice architecture.
- Deploying to production without explicit approval.
- Touching secrets, API keys, tokens, `.env` files, or native Firebase config files.
- Committing native Firebase config files.
- Marking Telegram live without verification.
- Marking mobile live without device/emulator validation.

---

## Success Definition

Sprint 003 succeeds when the project has a clear go-live decision path:

- Ready for web V1 launch.
- Blocked with documented reasons.
- Or ready only after specific owner-approved actions.
