# Sprint 055 Requirements - Runtime Source Reconciliation and Backend Integration Plan

## Purpose

Sprint 055 resolves the gap between historical FlutterFlow work, the current stabilized repo, Firebase configuration, expected Hermes/backend assistant integration, and eventual client UAT.

This sprint does not implement integrations. It documents what exists now and what must happen next.

## Business Goal

Create a reliable source-of-truth map so the project can move from framework stabilization into backend/integration work without guessing.

## Problem

Sprint 054 correctly held release/UAT because source-of-truth and UAT questions were unresolved. The repo must now answer:

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

- What app code is active.
- What parts are historical/reference only.
- What backend/integration pieces are present.
- What backend/integration pieces are missing.
- What must happen before internal UAT.
- What the next implementation sprint should build.
