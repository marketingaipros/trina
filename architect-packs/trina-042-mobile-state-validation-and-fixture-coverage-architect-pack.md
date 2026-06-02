# Trina Sprint 042 Architect Pack

## Sprint Name
Sprint 042 — Mobile State Validation And Fixture Coverage

## Architect Intent
Sprint 042 is a validation-infrastructure and documentation sprint that closes the caveats left by Sprint 041.

Sprint 041 hardened empty, error, loading, disabled, unavailable, and fallback states in several local UI components. Its closeout was accepted with caveats because some states were code-inspected instead of live-reproduced, and browser smoke was run at `351x729` instead of the requested `390x844` target.

Sprint 042 should create a repeatable, low-noise way to validate those UI states without relying on seeded local data or ad hoc manual inspection.

This is not a redesign sprint.

This is not a backend sprint.

This is not a Firebase sprint.

The goal is to improve confidence around state coverage and mobile smoke validation while preserving the current Barbie UI and the runtime work already completed.

---

# Files This Architect Pack Should Create Or Update

Codex should apply this pack to the project folder by creating or updating only the planning and documentation files listed below.

## Update

- `planning/STATE.md`
- `planning/RISKS.md`
- `docs/VALIDATION.md`

## Create

- `planning/sprints/042-mobile-state-validation-and-fixture-coverage/requirements.md`
- `planning/sprints/042-mobile-state-validation-and-fixture-coverage/blueprint.md`
- `planning/sprints/042-mobile-state-validation-and-fixture-coverage/acceptance.md`
- `planning/sprints/042-mobile-state-validation-and-fixture-coverage/handoff-prompt.md`

## Do Not Update Unless Needed

- `planning/DECISIONS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`

Only update these if Codex finds a durable decision, open question, architecture change, or interface/contract change that must be recorded.

---

# Architect-Facing Requirements

## Problem

Sprint 041 ended cleanly but with validation caveats:

- Browser/manual smoke was run near mobile size at `351x729`, not the intended `390x844` target.
- Tasks, Finance, and Calendar true empty states were code-inspected because local seeded data existed.
- Daily Snapshot, Task Strategic Review, and Finance AI failure states were code-inspected instead of live-reproduced.
- Knowledge Base voice failure and Finance disabled submit were live-tested.
- Horizontal overflow was checked live for the main in-scope views.

The team needs a repeatable way to validate these states in future sprints without guessing or forcing risky data changes.

## Goal

Create a small validation path that lets the Builder reproduce or simulate the key UI states from Sprint 041 at or near `390x844` and record results clearly.

## Scope

Sprint 042 may include:

- A lightweight local fixture, mock, dev-only toggle, or test helper that makes empty/failure/disabled states easier to reproduce.
- Documentation updates explaining how to run mobile smoke validation.
- Validation notes that distinguish live reproduction from code inspection.
- Small test or smoke-script additions if the repo already has a practical place for them.
- Small runtime-only helpers if required to make state validation possible.

Sprint 042 should not include:

- Redesigning the Barbie UI.
- Changing navigation architecture.
- Changing Firebase/backend contracts.
- Adding production feature flags.
- Adding a database.
- Adding auth changes.
- Adding new packages unless absolutely necessary and approved first.
- Touching CEO Briefing.
- Recreating `references/flutterflow/sprint-009/ceo-briefing.png`.

## Preferred Outcome

By the end of Sprint 042, Codex should be able to report:

- Which Sprint 041 states can now be reproduced live.
- Which states are still code-inspected only.
- Whether `390x844` smoke was run exactly or why not.
- Whether the in-scope views still avoid horizontal overflow.
- Whether Sprint 040 touch/accessibility behavior stayed preserved.
- Whether all required command checks pass.

---

# Builder-Facing Implementation Plan

## Phase 1 — Inspect Current Validation Surface

Read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/041-empty-error-loading-state-hardening/acceptance.md`
- `planning/sprints/042-mobile-state-validation-and-fixture-coverage/requirements.md`
- `planning/sprints/042-mobile-state-validation-and-fixture-coverage/blueprint.md`
- `planning/sprints/042-mobile-state-validation-and-fixture-coverage/acceptance.md`

Inspect the current app structure before editing runtime files.

Likely files to inspect:

- `components/Dashboard.tsx`
- `components/VoiceDashboard.tsx`
- `components/TasksView.tsx`
- `components/NotificationsView.tsx`
- `components/CalendarView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`
- any existing test, fixture, script, or validation files

## Phase 2 — Choose The Smallest Validation Mechanism

Pick the smallest safe mechanism that lets Sprint 041 caveats be checked more directly.

Allowed options:

1. Add or improve a local fixture/test helper.
2. Add a dev-only validation mode that is not exposed as a production feature.
3. Add documented manual steps if code support is unnecessary.
4. Add a small smoke script if the repo already supports it.
5. Do no runtime changes if existing structure already supports repeatable validation.

Builder must not add heavy infrastructure.

Builder must not add package dependencies without first reporting why existing tools are insufficient.

## Phase 3 — Validate The Specific State Areas

Target areas:

- Dashboard / Daily Snapshot error visibility
- Voice Dashboard capture/empty/disabled behavior
- Tasks empty state and Strategic Review AI failure state
- Notifications empty/fallback behavior
- Calendar true empty state and preserved event controls
- Finance empty/disabled submit/AI failure state
- Knowledge Base empty/fallback, voice failure, delete-without-ID error state
- Bottom navigation touch behavior
- Horizontal overflow at or near `390x844`

## Phase 4 — Update Docs

Update:

- `docs/VALIDATION.md` with exact steps and results.
- `planning/STATE.md` with Sprint 042 status.
- `planning/RISKS.md` if validation remains partly manual or fixture-limited.

Do not mark the sprint complete until acceptance is checked honestly.

---

# Acceptance Criteria

Sprint 042 is complete only when all applicable criteria are satisfied or clearly marked with caveats.

## A1 — Planning Files Exist

The following files exist:

- `planning/sprints/042-mobile-state-validation-and-fixture-coverage/requirements.md`
- `planning/sprints/042-mobile-state-validation-and-fixture-coverage/blueprint.md`
- `planning/sprints/042-mobile-state-validation-and-fixture-coverage/acceptance.md`
- `planning/sprints/042-mobile-state-validation-and-fixture-coverage/handoff-prompt.md`

## A2 — Builder Summary Gate Completed

Before runtime edits, Builder reports:

1. What Sprint 042 is supposed to accomplish.
2. Which files it expects to modify.
3. What tests or validation steps it will run.
4. Any blockers or ambiguities.

No implementation starts before approval.

## A3 — Validation Mechanism Is Small And Local

Any new validation fixture, helper, dev-only mode, or script must be narrow and must not change production behavior for users.

## A4 — Sprint 041 Caveats Are Rechecked

The Sprint 041 caveats are rechecked and documented:

- `390x844` or nearest available mobile viewport.
- True empty states where feasible.
- AI failure states where feasible.
- Disabled/invalid submit behavior.
- Knowledge Base fallback/error states.
- Horizontal overflow.
- Preserved Sprint 040 touch/accessibility behavior.

## A5 — Runtime Scope Is Controlled

Runtime files may only be changed if required to support validation or fix a confirmed state issue.

Allowed runtime candidates:

- `components/Dashboard.tsx`
- `components/VoiceDashboard.tsx`
- `components/TasksView.tsx`
- `components/NotificationsView.tsx`
- `components/CalendarView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`

Inspect-only unless explicitly justified:

- `components/Navigation.tsx`
- `App.tsx`

## A6 — Protected Areas Stay Untouched

The sprint must not touch:

- CEO Briefing workflow
- `references/flutterflow/sprint-009/ceo-briefing.png`
- backend/Firebase contracts
- package/dependency files unless explicitly approved
- native/build/release files

## A7 — Required Validation Commands Pass

Run and report:

- `npm run lint`
- `npm run build`
- `git diff --check`
- `test ! -f references/flutterflow/sprint-009/ceo-briefing.png`
- `git diff --name-only`
- `git status --branch --short`

If `npm run build` shows known Vite warnings, report them without treating them as a failure unless new errors appear.

## A8 — Documentation Updated

Update:

- `docs/VALIDATION.md`
- `planning/STATE.md`

Update `planning/RISKS.md` only if a meaningful validation limitation remains.

## A9 — No Premature Staging Or Push

No staging, commit, or push happens until the user explicitly approves closeout.

---

# Risks

## Risk 1 — Overbuilding Validation Infrastructure

The Builder may try to create a full test harness or dashboard.

Mitigation:

Keep validation boring, local, and small. Prefer simple fixtures or documented steps.

## Risk 2 — Production Behavior Changes From Dev Validation

A fixture or dev-only path could accidentally affect normal users.

Mitigation:

Any validation helper must be clearly isolated, local, or development-only.

## Risk 3 — Seeded Data Blocks True Empty-State Testing

Local seeded data may continue to prevent true empty-state reproduction.

Mitigation:

Use controlled fixtures, documented local state reset, or code inspection caveats.

## Risk 4 — AI Failure States May Be Hard To Reproduce

Some failure states depend on service/API behavior.

Mitigation:

Prefer safe local simulation or clearly documented code-inspection fallback.

---

# Decisions

No new durable product decision is required yet.

If Sprint 042 introduces a repeatable dev-only validation mechanism, record the decision in `planning/DECISIONS.md` only if it becomes a standing workflow for future sprints.

---

# Codex Handoff Prompt

Use this after this Architect Pack has been applied to the project folder as planning/docs only.

```text
Read the following files before making changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/041-empty-error-loading-state-hardening/acceptance.md
- planning/sprints/042-mobile-state-validation-and-fixture-coverage/requirements.md
- planning/sprints/042-mobile-state-validation-and-fixture-coverage/blueprint.md
- planning/sprints/042-mobile-state-validation-and-fixture-coverage/acceptance.md
- planning/sprints/042-mobile-state-validation-and-fixture-coverage/handoff-prompt.md

Then summarize:

1. What Sprint 042 is supposed to accomplish.
2. Which files you expect to modify.
3. What tests or validation steps you will run.
4. Any blockers or ambiguities.

Do not start implementation yet.
Do not stage, commit, or push.
Do not touch CEO Briefing.
Confirm that `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
Wait for approval before making code changes.
```

---

# Codex Prompt To Apply This Architect Pack First

Paste this into Codex before the handoff prompt above.

```text
Apply this Sprint 042 Architect Pack to the project folder as planning/docs only.

Create or update only these files unless the pack explicitly requires otherwise:

- planning/STATE.md
- planning/RISKS.md
- docs/VALIDATION.md
- planning/sprints/042-mobile-state-validation-and-fixture-coverage/requirements.md
- planning/sprints/042-mobile-state-validation-and-fixture-coverage/blueprint.md
- planning/sprints/042-mobile-state-validation-and-fixture-coverage/acceptance.md
- planning/sprints/042-mobile-state-validation-and-fixture-coverage/handoff-prompt.md

Do not edit runtime files.
Do not edit backend, Firebase, package, native, build, release, or environment files.
Do not touch CEO Briefing.
Do not recreate `references/flutterflow/sprint-009/ceo-briefing.png`.
Do not stage, commit, or push.

After applying the pack, run:

- git diff --check
- test ! -f references/flutterflow/sprint-009/ceo-briefing.png
- git diff --name-only
- git status --branch --short

Report:

1. Files created.
2. Files updated.
3. Validation results.
4. Whether CEO Briefing stayed untouched.
5. Whether `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
6. Confirm no runtime files changed.
```
