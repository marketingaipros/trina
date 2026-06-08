# Sprint 055 Architect Pack — Runtime Source Reconciliation and Backend Integration Plan

**Project:** Trina / trinaos-voice
**Sprint:** 055
**Sprint name:** Runtime Source Reconciliation and Backend Integration Plan
**Date:** 2026-06-07
**Architect recommendation:** `HOLD` for release/UAT until runtime source and integration path are confirmed.
**Sprint type:** Docs/planning and repo inspection only. No runtime implementation.

---

## 0. Architect Summary

Sprint 055 exists because Sprint 054 correctly exposed a release/UAT gate, but the project is not ready for client UAT yet.

The current confusion is valid:

- The UI was originally built or explored in FlutterFlow.
- The active repo has been stabilized through many mobile/runtime/framework sprints.
- Firebase exists in the project story, but its current runtime role needs confirmation.
- Hermes is expected to become part of the connected assistant/backend path.
- The app framework appears closer to ready than the backend/integration layer.
- The repo, not chat memory, must answer what is real, active, historical, planned, or missing.

Sprint 055 does not connect Firebase, Hermes, FlutterFlow, or deployment targets yet.

Sprint 055 creates the source-of-truth map needed before those implementation sprints.

---

## 1. Files This Architect Pack Creates or Updates

Codex should apply this Architect Pack by creating or updating these files only:

```text
planning/STATE.md
planning/RISKS.md
planning/QUESTIONS.md
docs/ARCHITECTURE.md
docs/API.md
docs/VALIDATION.md
planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/requirements.md
planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/blueprint.md
planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/acceptance.md
planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/handoff-prompt.md
```

Codex should update `planning/DECISIONS.md` only if repo inspection confirms a durable decision, such as:

- FlutterFlow is historical/reference only.
- The repo is the active runtime source.
- Firebase is the selected backend.
- Hermes is the selected assistant/service integration target.
- Web UAT must precede native/mobile store testing.

If those facts are not proven from repo evidence or explicit operator input, leave `planning/DECISIONS.md` unchanged and record the uncertainty in `planning/QUESTIONS.md`.

---

## 2. Sprint 055 Guardrails

This sprint is a reconciliation and planning sprint.

Codex must not:

- Modify runtime/source files.
- Add Firebase code.
- Add Hermes code.
- Add FlutterFlow export code.
- Deploy to Firebase Hosting.
- Run native iOS or Android builds.
- Change package dependencies.
- Touch credentials, tokens, API keys, `.env` files, signing keys, or secrets.
- Create or restore CEO Briefing files.
- Mark the project ready for client UAT.
- Convert placeholders into facts without repo evidence.

Codex may:

- Inspect repo files.
- Read planning and documentation.
- Read package/config files.
- Read Firebase/Capacitor/Vite/FlutterFlow reference files if present.
- Update docs and planning files listed in this pack.
- Run safe validation commands.
- Produce a clear next-sprint recommendation.

---

# File: `planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/requirements.md`

```markdown
# Sprint 055 Requirements — Runtime Source Reconciliation and Backend Integration Plan

## Purpose

Sprint 055 resolves the confusion created by the gap between:

- The historical FlutterFlow UI work.
- The current stabilized repo.
- The expected Firebase role.
- The expected Hermes/backend assistant role.
- The need for eventual client UAT.

This sprint does not implement integrations.

It documents what exists now and what must happen next.

## Business Goal

Create a reliable source-of-truth map so the project can move from framework stabilization into backend/integration work without guessing.

## Problem

The project has progressed through many framework, mobile layout, runtime, and release-readiness sprints.

Sprint 054 correctly held release/UAT because source-of-truth and UAT questions were unresolved.

The operator cannot answer those questions from memory because the work has spanned multiple tools and sprints.

The repo must now answer:

1. What is the current active app source?
2. Is FlutterFlow active, historical, or only a reference?
3. What Firebase pieces exist and what are they used for?
4. What Hermes/backend integration exists, if any?
5. What must be connected before internal UAT?
6. What sprint should come next?

## Scope

Codex must inspect and document:

- Active runtime source structure.
- Build tooling and app framework.
- Firebase-related config and scripts.
- Capacitor/mobile-related config, if present.
- FlutterFlow references, exports, docs, or stale artifacts.
- Hermes references, integration placeholders, services, APIs, or docs.
- Existing environment/config placeholders.
- Current planning assumptions from Sprints 050-054.
- Current release/UAT blockers.

## Out of Scope

- No runtime implementation.
- No Firebase setup changes.
- No Hermes setup changes.
- No FlutterFlow export/import.
- No native builds.
- No deployment.
- No client UAT.
- No release candidate promotion.
- No credential creation or inspection beyond filenames/placeholders.
- No CEO Briefing restoration.

## Working Assumptions

These assumptions must be tested against repo evidence:

- The current repo is the likely active runtime source.
- FlutterFlow is likely historical/prototype/reference unless active integration evidence exists.
- Firebase is likely planned or partially configured, but not confirmed as production-ready.
- Hermes is likely planned as the assistant/backend integration target, but not confirmed as implemented.
- The project should proceed through internal integration validation before client UAT.

## Deliverables

Sprint 055 must produce:

1. A runtime source-of-truth section in `planning/STATE.md`.
2. Updated risks in `planning/RISKS.md`.
3. Updated unresolved questions in `planning/QUESTIONS.md`.
4. Updated architecture notes in `docs/ARCHITECTURE.md`.
5. Updated API/integration notes in `docs/API.md`.
6. Updated validation rules in `docs/VALIDATION.md`.
7. A recommended Sprint 056 title and scope.

## Completion Standard

Sprint 055 is complete when a future Builder can answer:

- What app code is active?
- What parts are historical/reference only?
- What backend/integration pieces are present?
- What backend/integration pieces are missing?
- What must happen before internal UAT?
- What the next implementation sprint should build.
```

---

# File: `planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/blueprint.md`

```markdown
# Sprint 055 Blueprint — Runtime Source Reconciliation and Backend Integration Plan

## Implementation Type

Docs/planning update based on repo inspection only.

No runtime/source implementation.

## Step 1 — Read Project Operating Files

Read:

```text
AGENTS.md
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/ARCHITECTURE.md
docs/API.md
docs/VALIDATION.md
planning/sprints/054-release-source-of-truth-and-uat-path-confirmation/requirements.md
planning/sprints/054-release-source-of-truth-and-uat-path-confirmation/blueprint.md
planning/sprints/054-release-source-of-truth-and-uat-path-confirmation/acceptance.md
```

## Step 2 — Inspect Runtime Source Structure

Inspect, if present:

```text
package.json
package-lock.json
vite.config.*
tsconfig*.json
src/
public/
index.html
capacitor.config.*
android/
ios/
firebase.json
.firebaserc
firestore.rules
storage.rules
functions/
.env.example
```

Do not inspect secret values. Do not print secrets.

Record:

- Main app framework.
- Main entry points.
- Build commands.
- Local validation commands.
- Whether Capacitor/native wrapper exists.
- Whether Firebase Hosting/Firestore/Functions config exists.
- Whether backend code exists in repo.

## Step 3 — Inspect FlutterFlow Evidence

Inspect, if present:

```text
references/flutterflow/
docs/
planning/
README.md
```

Search for terms:

```text
FlutterFlow
flutterflow
CEO Briefing
export-code
deploy-firebase
project ID
```

Record:

- Whether FlutterFlow appears active, historical, not needed, or unknown.
- Whether any FlutterFlow project ID/name is documented.
- Whether any FlutterFlow export is part of the current source.
- Whether the repo depends on FlutterFlow for future builds.

Do not restore or create CEO Briefing files.

Confirm:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

remains absent.

## Step 4 — Inspect Firebase Evidence

Search for:

```text
Firebase
firebase
Firestore
Auth
Hosting
Functions
VITE_FIREBASE
```

Record:

- Firebase project/config evidence.
- Which Firebase services appear expected.
- Whether Firebase is runtime-connected, configured only, or planned.
- Whether any validation/deploy commands are documented.
- Whether secrets are placeholders or real values.

Do not deploy.

Do not modify Firebase config.

## Step 5 — Inspect Hermes / Backend Evidence

Search for:

```text
Hermes
Herme
assistant
voice
backend
API
endpoint
webhook
MCP
agent
```

Record:

- Whether Hermes integration exists in runtime code.
- Whether API endpoints or placeholders exist.
- Whether the app currently calls a backend.
- Whether the voice/assistant flow is mocked, local-only, or connected.
- What contract is needed for the next sprint.

Do not implement the connection.

## Step 6 — Update Planning Files

Update `planning/STATE.md` with a new section:

```markdown
## Runtime Source Reconciliation — Sprint 055

- Active app source:
- FlutterFlow status:
- Firebase status:
- Hermes/backend status:
- UAT status:
- Next recommended sprint:
```

Use one of these statuses for each area:

```text
Confirmed active
Historical/reference only
Configured but not validated
Planned but not implemented
Unknown / requires operator confirmation
```

Update `planning/RISKS.md` with risks such as:

- Release/UAT attempted before backend integration.
- FlutterFlow and repo source-of-truth confusion.
- Firebase config mistaken for deployed/validated backend.
- Hermes integration assumed but not implemented.
- Client sees framework before assistant behavior works.

Update `planning/QUESTIONS.md` with only unresolved questions that remain after repo inspection.

## Step 7 — Update Docs

Update `docs/ARCHITECTURE.md` with:

- Active frontend/runtime source.
- Current platform assumptions.
- Integration architecture status.
- Firebase role.
- Hermes/backend role.
- Explicit note if the current app is framework-only or partially connected.

Update `docs/API.md` with:

- Existing API/backend contract evidence.
- Missing API/backend contract.
- Proposed next contract needed for Hermes/Firebase integration.
- Inputs/outputs needed for typed assistant flow.
- Inputs/outputs needed for voice assistant flow, if known.

Update `docs/VALIDATION.md` with:

- Current safe validation commands.
- Internal integration validation requirements before client UAT.
- UAT not allowed until backend path is confirmed.
- No deploy/native build rule for Sprint 055.

## Step 8 — Decide Whether `planning/DECISIONS.md` Changes

Update `planning/DECISIONS.md` only if the repo provides clear evidence.

Examples of valid decisions:

- Current repo is active app source.
- FlutterFlow is no longer active runtime source.
- Firebase is the selected backend platform.
- Hermes is selected as the assistant/backend integration target.

If not proven, do not update decisions.

## Step 9 — Validation

Run:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Recommended if package scripts exist and are safe:

```bash
npm run lint
npm run build
```

Do not run deploys.

Do not run native builds.

## Step 10 — Closeout Report

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
```

---

# File: `planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/acceptance.md`

```markdown
# Sprint 055 Acceptance Criteria — Runtime Source Reconciliation and Backend Integration Plan

Sprint 055 is accepted only if all criteria below are satisfied.

## Required File Creation

The following files exist:

- `planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/requirements.md`
- `planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/blueprint.md`
- `planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/acceptance.md`
- `planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/handoff-prompt.md`

## Required Planning Updates

The following files are updated:

- `planning/STATE.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`

`planning/DECISIONS.md` is updated only if durable decisions are proven by repo evidence or explicit operator approval.

## Required Documentation Updates

The following files are updated:

- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/VALIDATION.md`

## Runtime Source Reconciliation

The sprint documents:

- Active runtime source.
- Current app framework/build tooling.
- Whether the current app is framework-only, partially connected, or fully connected.
- Whether mobile/native wrapper files exist.
- Whether backend code exists.
- Whether source-of-truth remains unresolved.

## FlutterFlow Status

The sprint documents one of:

- `Confirmed active`
- `Historical/reference only`
- `Planned but not implemented`
- `Unknown / requires operator confirmation`

The sprint must not assume FlutterFlow is active only because prior chat history mentioned it.

## Firebase Status

The sprint documents:

- Whether Firebase config exists.
- Which Firebase services appear configured or planned.
- Whether Firebase is deployed/validated.
- Whether Firebase is connected to runtime app behavior.
- Whether Firebase is only placeholder/config evidence.

## Hermes / Backend Status

The sprint documents:

- Whether Hermes/backend integration exists in runtime code.
- Whether endpoints/contracts exist.
- Whether typed assistant flow is connected or mocked.
- Whether voice assistant flow is connected or mocked.
- What integration contract is needed next.

## Release / UAT Gate

The sprint must keep release recommendation as `HOLD` unless repo evidence proves internal UAT can begin safely.

Client UAT must remain blocked if:

- Backend integration is not implemented.
- Hermes connection is missing or unclear.
- Firebase role is unvalidated.
- The active source of truth is unresolved.

## Validation

At minimum, Codex runs:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

If package scripts exist and are safe, Codex should also run:

```bash
npm run lint
npm run build
```

Accepted warnings may be documented, but new untriaged warnings must be recorded in `planning/RISKS.md` or `planning/QUESTIONS.md`.

## Safety

The sprint is not accepted if Codex:

- Modifies runtime/source files.
- Adds or changes app behavior.
- Adds Firebase or Hermes code.
- Deploys.
- Runs native builds.
- Touches credentials or secret files.
- Creates or restores CEO Briefing files.
- Marks project ready for client rollout without evidence.

## Closeout

Closeout report must include:

1. Files created/updated.
2. Runtime source-of-truth conclusion.
3. FlutterFlow conclusion.
4. Firebase conclusion.
5. Hermes/backend conclusion.
6. Remaining unresolved questions.
7. Recommended Sprint 056.
8. Validation results.
9. CEO Briefing absence confirmation.
10. Final release recommendation.
```

---

# File: `planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/handoff-prompt.md`

```markdown
# Sprint 055 Handoff Prompt — Runtime Source Reconciliation and Backend Integration Plan

Use this prompt with Codex.

```text
Apply Sprint 055 as a docs/planning and repo-inspection sprint only.

Sprint:
planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/

Goal:
Reconcile the active runtime source, FlutterFlow status, Firebase status, and Hermes/backend integration status so the next sprint can safely plan actual backend integration work.

Read before making changes:
- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/ARCHITECTURE.md
- docs/API.md
- docs/VALIDATION.md
- planning/sprints/054-release-source-of-truth-and-uat-path-confirmation/requirements.md
- planning/sprints/054-release-source-of-truth-and-uat-path-confirmation/blueprint.md
- planning/sprints/054-release-source-of-truth-and-uat-path-confirmation/acceptance.md
- planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/requirements.md
- planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/blueprint.md
- planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/acceptance.md

Before editing, inspect the repo for:
- Runtime source structure
- package/build tooling
- Firebase config and references
- Capacitor/mobile config
- FlutterFlow references
- Hermes/backend/API references
- assistant/voice/typed flow implementation evidence

Do not implement runtime code.

Allowed files to create or update:
- planning/STATE.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/ARCHITECTURE.md
- docs/API.md
- docs/VALIDATION.md
- planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/requirements.md
- planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/blueprint.md
- planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/acceptance.md
- planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/handoff-prompt.md

Update planning/DECISIONS.md only if repo inspection proves a durable decision or the operator explicitly approved the decision.

Forbidden:
- Do not modify runtime/source files.
- Do not add Firebase code.
- Do not add Hermes code.
- Do not export/import FlutterFlow code.
- Do not deploy.
- Do not run native builds.
- Do not touch credentials.
- Do not create or restore CEO Briefing files.
- Do not mark the project ready for client UAT.

Required docs/planning output:
1. Update planning/STATE.md with a Runtime Source Reconciliation section.
2. Update planning/RISKS.md with source-of-truth and integration risks.
3. Update planning/QUESTIONS.md with only questions still unresolved after repo inspection.
4. Update docs/ARCHITECTURE.md with active runtime, FlutterFlow, Firebase, and Hermes/backend status.
5. Update docs/API.md with existing and missing integration contracts.
6. Update docs/VALIDATION.md with validation rules before internal UAT/client UAT.

Validation:
Run:
- git status --branch --short
- git diff --check
- test ! -f references/flutterflow/sprint-009/ceo-briefing.png

If safe package scripts exist, also run:
- npm run lint
- npm run build

Closeout report:
1. Files created/updated.
2. Runtime source-of-truth finding.
3. FlutterFlow finding.
4. Firebase finding.
5. Hermes/backend finding.
6. Remaining blockers/questions.
7. Recommended Sprint 056 title and scope.
8. Validation commands and results.
9. Confirmation CEO Briefing remains absent.
10. Confirmation no runtime/source files, deploys, native builds, credentials, or release files were involved.
11. Final recommendation: HOLD, INTERNAL INTEGRATION NEXT, or READY FOR INTERNAL UAT.

Do not commit or push unless I explicitly ask.
```
```

---

# File: `planning/STATE.md` Update Guidance

Codex should add or update a section like this:

```markdown
## Runtime Source Reconciliation — Sprint 055

**Status:** In progress / completed after repo inspection.
**Release recommendation:** HOLD until backend integration path is confirmed.

### Active App Source

TBD from repo inspection.

### FlutterFlow Status

TBD from repo inspection.

Allowed status values:

- Confirmed active
- Historical/reference only
- Planned but not implemented
- Unknown / requires operator confirmation

### Firebase Status

TBD from repo inspection.

Allowed status values:

- Connected and validated
- Configured but not validated
- Planned but not implemented
- Unknown / requires operator confirmation

### Hermes / Backend Status

TBD from repo inspection.

Allowed status values:

- Connected and validated
- Runtime code present but unvalidated
- Planned but not implemented
- Unknown / requires operator confirmation

### UAT Status

Client UAT remains blocked until active source, backend integration, and validation path are confirmed.

### Next Recommended Sprint

TBD after repo inspection.
```

---

# File: `planning/RISKS.md` Update Guidance

Codex should add risks like these, adapting to repo evidence:

```markdown
| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Client UAT starts before backend/Hermes integration is implemented. | High | High | Keep release recommendation at HOLD until integration validation passes. | Open |
| FlutterFlow history is mistaken for active runtime source. | Medium | High | Document whether FlutterFlow is active, historical, or reference-only from repo evidence. | Open |
| Firebase config is mistaken for deployed/validated backend behavior. | Medium | High | Separate config evidence from runtime validation evidence. | Open |
| Hermes integration is assumed from project intent but absent from runtime code. | High | High | Inspect runtime/API code and document missing contract before implementation. | Open |
| Framework polish gives false sense of release readiness. | Medium | High | Require internal integration validation before client rollout. | Open |
```

---

# File: `planning/QUESTIONS.md` Update Guidance

Codex should add or retain questions like these only if unresolved after inspection:

```markdown
## Sprint 055 Runtime / Integration Questions

1. Is FlutterFlow still an active production source, or is it only historical/reference?
2. If FlutterFlow is active, what is the project ID/name and export process?
3. What Firebase project/environment should this app use?
4. Which Firebase services are required for MVP: Auth, Firestore, Functions, Hosting, Storage?
5. Is Hermes the confirmed assistant/backend service for typed and voice flows?
6. What endpoint contract should the app call for assistant requests?
7. Are voice flows expected to run through Hermes, browser APIs, a mobile-native bridge, or another service?
8. What internal environment should be validated before client UAT?
9. Who is the first trusted internal tester after integration works?
10. What exact workflows must pass before client rollout?
```

---

# File: `docs/ARCHITECTURE.md` Update Guidance

Codex should add a section like this:

```markdown
## Runtime Source and Integration Status — Sprint 055

### Active Runtime Source

TBD from repo inspection.

### FlutterFlow Role

TBD from repo inspection.

### Firebase Role

TBD from repo inspection.

### Hermes / Backend Role

TBD from repo inspection.

### Current Architecture Assessment

TBD from repo inspection.

Use one of:

- Framework-only
- Framework with mocked/local assistant behavior
- Framework with partial backend integration
- Framework with validated backend integration

### Required Next Architecture Step

TBD after inspection.
```

---

# File: `docs/API.md` Update Guidance

Codex should add a section like this:

```markdown
## Assistant / Backend Integration Contract — Sprint 055

### Current Contract Evidence

TBD from repo inspection.

### Missing Contract

If no runtime backend contract exists, the next sprint must define:

- Request shape for typed assistant messages.
- Response shape for assistant answers.
- Error response shape.
- Auth/session expectations.
- Firebase user/session expectations, if applicable.
- Hermes endpoint or service boundary.
- Voice flow input/output expectations.

### Proposed Minimum Typed Flow Contract

This is provisional until Sprint 055 inspection completes:

```json
{
  "message": "string",
  "sessionId": "string",
  "userId": "string | null",
  "context": {}
}
```

```json
{
  "reply": "string",
  "sessionId": "string",
  "metadata": {},
  "error": null
}
```

### Proposed Voice Flow Contract

TBD after runtime and Hermes inspection.
```

---

# File: `docs/VALIDATION.md` Update Guidance

Codex should add a section like this:

```markdown
## Runtime Source Reconciliation Validation — Sprint 055

Sprint 055 validation is docs/planning only.

Required commands:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Safe optional commands:

```bash
npm run lint
npm run build
```

Forbidden validation actions:

- No Firebase deploy.
- No native iOS build.
- No native Android build.
- No FlutterFlow export/import.
- No production credential checks.
- No client UAT.

Internal UAT can only be planned after Sprint 055 confirms:

- Active runtime source.
- Backend integration status.
- Firebase role.
- Hermes/backend role.
- Minimum workflows for testing.
```

---

# Architect Recommendation

Sprint 055 should produce a clear map, not new code.

Expected recommendation after Sprint 055 is likely:

```text
INTERNAL INTEGRATION NEXT
```

The likely Sprint 056 should be one of:

```text
Sprint 056 — Assistant Backend Contract and Typed Flow Integration
```

or

```text
Sprint 056 — Firebase Runtime Connection and Internal Integration Smoke
```

Codex should choose the recommended next sprint based on repo evidence, not assumption.

---

# Codex Apply Prompt

Use this prompt to apply the Architect Pack to the project folder.

```text
Apply the Sprint 055 Architect Pack to the repo as docs/planning-only.

Create or update the sprint folder:

planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/

Create/update these sprint files from the Architect Pack:
- requirements.md
- blueprint.md
- acceptance.md
- handoff-prompt.md

Update these project files as directed:
- planning/STATE.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/ARCHITECTURE.md
- docs/API.md
- docs/VALIDATION.md

Update planning/DECISIONS.md only if the Architect Pack provides a decision that is proven by repo evidence or explicit operator approval. Otherwise leave it unchanged.

Rules:
- Do not modify runtime/source files.
- Do not deploy.
- Do not run native builds.
- Do not touch credentials.
- Do not create or restore CEO Briefing files.
- Keep release recommendation as HOLD unless repo evidence proves otherwise.
- Preserve Sprint 054 source-of-truth gate.
- This is a docs/planning application only.

Validation:
Run:
- git status --branch --short
- git diff --check
- test ! -f references/flutterflow/sprint-009/ceo-briefing.png

If safe package scripts exist, also run:
- npm run lint
- npm run build

After applying, report:
1. Files created.
2. Files updated.
3. Whether planning/DECISIONS.md changed and why.
4. Validation commands run.
5. Final git status.
6. Confirmation CEO Briefing remains absent.
7. Confirmation no runtime/source files, deploys, native builds, credentials, or release files were involved.

Do not commit or push unless I explicitly ask.
```

---

# Post-Apply Sprint Start Prompt

Do not use this until Codex has applied the Architect Pack files.

```text
Read the Sprint 055 files and summarize before doing any repo-inspection edits:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/ARCHITECTURE.md
- docs/API.md
- docs/VALIDATION.md
- planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/requirements.md
- planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/blueprint.md
- planning/sprints/055-runtime-source-reconciliation-and-backend-integration-plan/acceptance.md

Summarize:

1. What Sprint 055 is supposed to accomplish.
2. Which files you expect to modify.
3. What repo areas you will inspect.
4. What validation steps you will run.
5. Any blockers or ambiguities.

Do not start edits until I approve your summary.
```
