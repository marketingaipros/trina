# Sprint 055 Blueprint - Runtime Source Reconciliation and Backend Integration Plan

## Implementation Type

Docs/planning update based on repo inspection only.

No runtime/source implementation.

## Step 1 - Read Project Operating Files

Read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/VALIDATION.md`
- `planning/sprints/054-release-source-of-truth-and-uat-path-confirmation/requirements.md`
- `planning/sprints/054-release-source-of-truth-and-uat-path-confirmation/blueprint.md`
- `planning/sprints/054-release-source-of-truth-and-uat-path-confirmation/acceptance.md`

## Step 2 - Inspect Runtime Source Structure

Inspect, if present:

- `package.json`
- `package-lock.json`
- `vite.config.*`
- `tsconfig*.json`
- `src/`
- `components/`
- `services/`
- `public/`
- `index.html`
- `capacitor.config.*`
- `android/`
- `ios/`
- `firebase.json`
- `.firebaserc`
- `firestore.rules`
- `storage.rules`
- `functions/`
- `.env.example`

Do not inspect secret values. Do not print secrets.

Record:

- Main app framework.
- Main entry points.
- Build commands.
- Local validation commands.
- Whether Capacitor/native wrapper exists.
- Whether Firebase Hosting/Firestore/Functions config exists.
- Whether backend code exists in repo.

## Step 3 - Inspect FlutterFlow Evidence

Inspect, if present:

- `references/flutterflow/`
- `docs/`
- `planning/`
- `README.md`

Search for:

- `FlutterFlow`
- `flutterflow`
- `CEO Briefing`
- `export-code`
- `deploy-firebase`
- `project ID`

Record whether FlutterFlow appears active, historical/reference, planned, or unknown. Do not restore or create CEO Briefing files.

## Step 4 - Inspect Firebase Evidence

Search for:

- `Firebase`
- `firebase`
- `Firestore`
- `Auth`
- `Hosting`
- `Functions`
- `VITE_FIREBASE`

Record Firebase project/config evidence, expected services, runtime connection status, validation/deploy command evidence, and whether secrets are placeholders or real values.

Do not deploy. Do not modify Firebase config.

## Step 5 - Inspect Hermes / Backend Evidence

Search for:

- `Hermes`
- `Herme`
- `assistant`
- `voice`
- `backend`
- `API`
- `endpoint`
- `webhook`
- `MCP`
- `agent`

Record whether Hermes integration exists in runtime code, whether API endpoints or placeholders exist, whether the app currently calls a backend, whether voice/assistant flow is mocked, local-only, or connected, and what contract is needed next.

Do not implement the connection.

## Step 6 - Update Planning Files

Update `planning/STATE.md` with:

- Active app source.
- FlutterFlow status.
- Firebase status.
- Hermes/backend status.
- UAT status.
- Next recommended sprint.

Update `planning/RISKS.md` with source-of-truth and integration risks.

Update `planning/QUESTIONS.md` with only unresolved questions that remain after repo inspection.

## Step 7 - Update Docs

Update `docs/ARCHITECTURE.md`, `docs/API.md`, and `docs/VALIDATION.md` with the current active runtime, integration status, missing contracts, and pre-UAT validation gates.

## Step 8 - Decide Whether `planning/DECISIONS.md` Changes

Update `planning/DECISIONS.md` only if repo inspection proves a durable decision or the operator explicitly approved it.

If not proven, do not update decisions.

## Step 9 - Validation

Run:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

If safe package scripts exist, also run:

```bash
npm run lint
npm run build
```

Do not run deploys. Do not run native builds.

## Step 10 - Closeout Report

Report:

1. Files changed.
2. Runtime source-of-truth finding.
3. FlutterFlow finding.
4. Firebase finding.
5. Hermes/backend finding.
6. Remaining blockers.
7. Recommended Sprint 056 title and scope.
8. Validation commands run.
9. Confirmation CEO Briefing remains absent.
10. Confirmation no runtime/source files, deploys, native builds, credentials, or release files were involved.
