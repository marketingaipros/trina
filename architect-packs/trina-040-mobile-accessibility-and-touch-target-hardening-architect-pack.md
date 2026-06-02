# Trina Sprint 040 Architect Pack - Mobile Accessibility and Touch Target Hardening

**Sprint:** 040
**Name:** Mobile Accessibility and Touch Target Hardening
**Project:** TrinaOS Voice / Barbie
**Date:** 2026-06-02
**Architect Layer:** Codex
**Builder Layer:** Codex
**Status:** Architect Pack ready for Builder application

---

## Architect Intent

Sprint 040 is the next approved runtime priority after Sprint 039's forward-state selection checkpoint.

Sprint 038 confirmed that the broad core app smoke-test baseline passed with no runtime changes. Sprint 039 preserved that baseline and narrowed the next safe runtime direction to a focused, evidence-driven pass instead of a feature build.

The safest Sprint 040 priority is mobile accessibility and touch-target hardening across the existing non-CEO app shell.

This sprint should not redesign the app, add features, add dependencies, or touch backend/mobile-native/release surfaces. The Builder must inspect first, summarize the likely edit set, and only implement small runtime fixes if concrete mobile/accessibility issues are confirmed.

---

## Runtime Priority Selected

### Recommended Sprint 040 Direction

`040-mobile-accessibility-and-touch-target-hardening`

### Why This Is Safest

- Sprint 038 already proved the core routes are reachable and broadly stable.
- Recent sprints hardened task controls, notification fixtures, and bottom navigation, so the next risk is practical usability on phone-sized screens and assistive/keyboard use.
- Mobile viewport checks around `390x844` are already part of the validation record, but they have been smoke-level. Sprint 040 turns that into a focused pass.
- This can stay inside the existing Vite React shell without backend, Firebase, package, native, build, release, deployment, or CEO Briefing work.

### Expected Runtime Files

The Builder may inspect these files:

```text
App.tsx
components/Navigation.tsx
components/Dashboard.tsx
components/VoiceDashboard.tsx
components/TasksView.tsx
components/NotificationsView.tsx
components/CalendarView.tsx
components/FinanceView.tsx
components/KnowledgeBaseView.tsx
```

Runtime edits are allowed only after the Builder summary and only if a concrete acceptance issue is found. Any edit must remain inside this runtime allowlist:

```text
components/Navigation.tsx
components/Dashboard.tsx
components/VoiceDashboard.tsx
components/TasksView.tsx
components/NotificationsView.tsx
components/CalendarView.tsx
components/FinanceView.tsx
components/KnowledgeBaseView.tsx
```

`App.tsx` is inspect-only unless the Builder proves a routing or focus-management issue cannot be fixed locally in the component allowlist and gets explicit operator approval before editing it.

---

## Scope Summary

### In Scope

- Apply Sprint 040 planning files.
- Confirm Sprint 039 closed cleanly on `main`.
- Inspect current non-CEO app shell mobile/accessibility behavior.
- Validate at mobile viewport around `390x844`.
- Validate bottom navigation touch usability and active state.
- Validate major controls have usable accessible names, labels, or titles.
- Validate keyboard/focus usability where practical.
- Validate core task controls remain visible and touch usable.
- Validate Notifications empty, fallback, and fixture-backed states remain readable.
- Validate Calendar, Finance, and Knowledge Base have no obvious mobile overflow or blocked controls.
- Apply only the smallest runtime fixes for confirmed mobile/accessibility issues.
- Update state and validation docs with what was inspected, what changed, and what stayed blocked.

### Out of Scope

- CEO Briefing work.
- Creating or modifying `references/flutterflow/sprint-009/ceo-briefing.png`.
- Broad UI redesign.
- New features.
- New navigation architecture.
- New persistence architecture.
- New dependencies or package changes.
- Backend changes.
- Firebase changes.
- Firestore rules changes.
- Firebase Functions changes.
- Native Capacitor/iOS/Android changes.
- Build, release, deployment, or hosting changes.
- Gmail, Telegram, live AI, auth, or database behavior changes.
- FlutterFlow generated code or export changes.
- Screenshot/evidence generation.

---

## Files This Architect Pack Should Create or Update

### Create

```text
planning/sprints/040-mobile-accessibility-and-touch-target-hardening/requirements.md
planning/sprints/040-mobile-accessibility-and-touch-target-hardening/blueprint.md
planning/sprints/040-mobile-accessibility-and-touch-target-hardening/acceptance.md
planning/sprints/040-mobile-accessibility-and-touch-target-hardening/handoff-prompt.md
```

### Update

```text
planning/STATE.md
docs/VALIDATION.md
```

### Update Only If Findings Require It

```text
planning/RISKS.md
planning/QUESTIONS.md
planning/DECISIONS.md
```

### Runtime Edit Allowlist After Summary Approval Only

```text
components/Navigation.tsx
components/Dashboard.tsx
components/VoiceDashboard.tsx
components/TasksView.tsx
components/NotificationsView.tsx
components/CalendarView.tsx
components/FinanceView.tsx
components/KnowledgeBaseView.tsx
```

### Inspect-Only Unless Explicitly Approved Later

```text
App.tsx
```

### Do Not Touch

```text
references/flutterflow/sprint-009/ceo-briefing.png
functions/
firebase.json
firestore.rules
package.json
package-lock.json
vite.config.*
capacitor.config.*
android/
ios/
build/
dist/
release/
```

---

# File: `planning/STATE.md`

Update the current state to show Sprint 040 as active.

```markdown
# Project State

## Current Sprint

Sprint 040 - Mobile Accessibility and Touch Target Hardening

## Current Status

Sprint 039 closed as a docs/planning forward-state checkpoint.

Sprint 038 remains the latest broad runtime smoke baseline and passed without runtime changes.

Sprint 040 is the next focused runtime priority: inspect and harden mobile accessibility and touch usability across the existing non-CEO app shell.

## Active Work

Sprint 040 should start with inspection and a Builder summary before runtime edits.

The Builder may only apply small runtime fixes after confirming concrete mobile/accessibility issues.

Expected validation focuses on:

- Mobile viewport around `390x844`.
- Bottom navigation touch usability and active state.
- Accessible names/labels/titles for major controls.
- Keyboard/focus usability where practical.
- Task edit/delete controls remaining visible and touch usable.
- Notifications empty, fallback, and fixture-backed states.
- Calendar, Finance, and Knowledge Base mobile usability.

## Recently Completed

- Sprint 038 broad core app smoke test passed.
- Sprint 039 preserved forward state and prepared the next runtime priority.
- CEO Briefing remained deferred.
- `references/flutterflow/sprint-009/ceo-briefing.png` remained absent.

## Protected Scope

CEO Briefing remains deferred and out of scope.

Do not create or modify:

- `references/flutterflow/sprint-009/ceo-briefing.png`
- CEO Briefing evidence files
- backend files
- Firebase files
- package/dependency files
- native build files
- release/deployment files

## Next Action

Apply the Sprint 040 planning files, inspect the approved runtime surfaces, summarize findings, and wait for operator approval before implementation.
```

---

# File: `docs/VALIDATION.md`

Add a Sprint 040 validation section near the recent sprint sections.

```markdown
## Sprint 040 - Mobile Accessibility and Touch Target Hardening

### Purpose

Sprint 040 validates and, only if necessary, lightly hardens mobile accessibility and touch usability across the current non-CEO Trina app shell.

This sprint follows the clean Sprint 038 smoke baseline and Sprint 039 forward-state selection.

### Required Commands

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

### Required Browser / Device Checks

Use a local browser session and include a mobile viewport around `390x844`.

Check:

- Dashboard/Home reachable and usable.
- Assistant / Voice Entry reachable.
- Typed Assistant fallback remains usable.
- Bottom navigation buttons remain visible, touch usable, and correctly indicate active state.
- Major icon buttons and controls expose usable accessible names, labels, titles, or visible text.
- Task edit, save, cancel, delete, toggle, and filter controls remain visible and touch usable.
- Notifications empty/fallback state remains readable without fixture.
- Reminder fixture still renders with `?trinaReminderFixture=1`.
- Direct Notifications start still works with `?trinaReminderFixture=1&trinaStart=notifications`.
- Calendar, Finance, and Knowledge Base render without obvious mobile overflow or blocked critical controls.
- Fixed bottom navigation does not overlap critical content or controls.

### Runtime Change Rule

Runtime changes are allowed only for confirmed acceptance issues.

Acceptable fixes include:

- Accessible label/title improvements.
- Touch target spacing improvements.
- Mobile overflow or bottom-nav overlap fixes.
- Small focus/keyboard affordance fixes.
- Clearer fallback or empty-state copy when it directly improves accessibility.

Do not add new features, new dependencies, new data paths, or new architecture.

### Protected File Check

This must pass:

```bash
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

### Completion Standard

Sprint 040 is complete when:

- Required planning files exist.
- `planning/STATE.md` reflects Sprint 040 status.
- `docs/VALIDATION.md` records Sprint 040 validation rules and results.
- Browser/mobile checks are reported honestly.
- Any runtime edits stay inside the approved allowlist.
- No protected files are touched.
- CEO Briefing remains deferred and absent.
```

---

# File: `planning/sprints/040-mobile-accessibility-and-touch-target-hardening/requirements.md`

```markdown
# Sprint 040 Requirements - Mobile Accessibility and Touch Target Hardening

## Purpose

Sprint 040 is a focused runtime validation and polish sprint for mobile accessibility and touch usability across the existing Trina app shell.

The sprint exists because Sprint 038 passed broad smoke validation and Sprint 039 selected the next safest runtime priority. The project should now improve confidence in practical phone-sized usage without broadening scope.

## Background

Recent sprints confirmed:

- Core routes are reachable.
- Typed Assistant task capture works.
- Tasks render captured local tasks.
- Notifications fallback and reminder fixture paths work.
- Bottom navigation active state works.
- Mobile viewport around `390x844` has passed smoke checks.

Sprint 040 turns those smoke checks into a focused mobile/accessibility pass.

## Requirements

### R1 - Start With Inspection

The Builder must inspect the current files and summarize findings before implementation.

Read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- Sprint 038 files
- Sprint 039 files
- Sprint 040 files

### R2 - Preserve Protected Scope

The Builder must not touch CEO Briefing, evidence files, backend, Firebase, package, native, build, release, or deployment files.

This file must remain absent:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

### R3 - Validate Mobile Accessibility and Touch Usability

The Builder must check the current app in a local browser, including a mobile viewport around `390x844`.

Required checks:

- Dashboard/Home reachable and usable.
- Assistant / Voice Entry reachable.
- Typed Assistant fallback remains usable.
- Bottom navigation buttons remain visible and touch usable.
- Bottom navigation active state remains clear.
- Major controls have accessible names, labels, titles, or visible text.
- Task edit/delete/toggle/filter controls remain visible and touch usable.
- Notifications empty/fallback state remains readable.
- Reminder fixture path remains readable and aligned with Dashboard badge count.
- Calendar, Finance, and Knowledge Base remain usable on mobile.
- Fixed bottom navigation does not overlap critical content or controls.

### R4 - Patch Only Confirmed Issues

If the checks reveal a concrete acceptance issue, the Builder may make the smallest safe runtime fix inside the approved allowlist.

Acceptable fixes:

- Add or improve accessible labels/titles on existing controls.
- Improve touch target size or spacing.
- Fix mobile overflow or bottom-nav overlap.
- Improve focus/keyboard affordance for an existing control.
- Clarify accessibility-relevant empty/fallback copy.

Not acceptable:

- New features.
- New views.
- New data storage.
- New dependencies.
- Broad redesign.
- Backend, Firebase, package, native, build, release, or deployment changes.

### R5 - Validate After Any Runtime Fix

Required commands:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

### R6 - Document Results

Update:

- `planning/STATE.md`
- `docs/VALIDATION.md`

Update only if findings require it:

- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `planning/DECISIONS.md`

## Success Standard

Sprint 040 succeeds when mobile/accessibility checks have been performed, any confirmed issue has either been fixed narrowly or documented as follow-up, and the protected scope remains untouched.
```

---

# File: `planning/sprints/040-mobile-accessibility-and-touch-target-hardening/blueprint.md`

```markdown
# Sprint 040 Blueprint - Mobile Accessibility and Touch Target Hardening

## Builder Plan

### Step 1 - Read Required Files

Read:

```text
AGENTS.md
planning/STATE.md
planning/DECISIONS.md
planning/DOMAIN.md
planning/RISKS.md
planning/QUESTIONS.md
docs/VALIDATION.md
planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/requirements.md
planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/blueprint.md
planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/acceptance.md
planning/sprints/039-forward-state-and-next-runtime-priority-selection/requirements.md
planning/sprints/039-forward-state-and-next-runtime-priority-selection/blueprint.md
planning/sprints/039-forward-state-and-next-runtime-priority-selection/acceptance.md
planning/sprints/040-mobile-accessibility-and-touch-target-hardening/requirements.md
planning/sprints/040-mobile-accessibility-and-touch-target-hardening/blueprint.md
planning/sprints/040-mobile-accessibility-and-touch-target-hardening/acceptance.md
```

### Step 2 - Confirm Clean Starting State

Run:

```bash
git status --branch --short
git diff --name-only
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

### Step 3 - Inspect Runtime Surfaces

Inspect:

```text
App.tsx
components/Navigation.tsx
components/Dashboard.tsx
components/VoiceDashboard.tsx
components/TasksView.tsx
components/NotificationsView.tsx
components/CalendarView.tsx
components/FinanceView.tsx
components/KnowledgeBaseView.tsx
```

Look for:

- Missing accessible names on icon-only buttons.
- Buttons or controls that are too small for touch.
- Mobile overflow.
- Content hidden by fixed bottom navigation.
- Focus outlines or keyboard paths that are missing or confusing.
- Empty/fallback states that are readable but not useful.
- Duplicate labels that need scoping rather than broad renaming.

### Step 4 - Summarize Before Runtime Edits

Before implementation, report:

1. What Sprint 040 is supposed to accomplish.
2. Files inspected.
3. Confirmed issues, if any.
4. Proposed runtime file edits, if any.
5. Validation steps to run.
6. Any blockers or uncertainties.

Wait for operator approval before runtime edits.

### Step 5 - Apply Small Fixes Only If Approved

If approved, edit only the smallest necessary files from the runtime allowlist:

```text
components/Navigation.tsx
components/Dashboard.tsx
components/VoiceDashboard.tsx
components/TasksView.tsx
components/NotificationsView.tsx
components/CalendarView.tsx
components/FinanceView.tsx
components/KnowledgeBaseView.tsx
```

Do not edit `App.tsx` without separate explicit approval after inspection.

### Step 6 - Validate

Run:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

Perform browser/mobile checks using a viewport around `390x844`.

### Step 7 - Document Closeout

Update `planning/STATE.md` and `docs/VALIDATION.md` with:

- Runtime files changed, or confirmation of no runtime changes.
- Browser/mobile validation results.
- Known warnings or blocked checks.
- CEO Briefing absence confirmation.
- Whether new risks, questions, or decisions were discovered.

Do not stage, commit, or push unless explicitly approved after acceptance review.
```

---

# File: `planning/sprints/040-mobile-accessibility-and-touch-target-hardening/acceptance.md`

```markdown
# Sprint 040 Acceptance - Mobile Accessibility and Touch Target Hardening

Sprint 040 is complete only when all criteria below are satisfied.

## A1 - Planning Files Created

The following files exist:

- `planning/sprints/040-mobile-accessibility-and-touch-target-hardening/requirements.md`
- `planning/sprints/040-mobile-accessibility-and-touch-target-hardening/blueprint.md`
- `planning/sprints/040-mobile-accessibility-and-touch-target-hardening/acceptance.md`
- `planning/sprints/040-mobile-accessibility-and-touch-target-hardening/handoff-prompt.md`

## A2 - State and Validation Updated

The following files are updated:

- `planning/STATE.md`
- `docs/VALIDATION.md`

## A3 - Protected Scope Preserved

- CEO Briefing files are untouched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- No backend files changed.
- No Firebase files changed.
- No package/dependency files changed.
- No native files changed.
- No build/release/deployment files changed.
- No FlutterFlow export or evidence files changed.

## A4 - Inspection Summary Completed Before Runtime Edits

Before implementation, the Builder reports:

- Files inspected.
- Confirmed mobile/accessibility issues, if any.
- Proposed runtime files to edit, if any.
- Validation plan.
- Blockers or uncertainties.

## A5 - Mobile Accessibility Checks Completed

The Builder reports results for:

- Dashboard/Home at mobile viewport.
- Assistant / Voice Entry reachability.
- Typed Assistant fallback usability.
- Bottom navigation touch usability and active state.
- Major controls accessible names/labels/titles.
- Task controls visibility and touch usability.
- Notifications empty/fallback state.
- Reminder fixture state with `?trinaReminderFixture=1`.
- Direct Notifications start with `?trinaReminderFixture=1&trinaStart=notifications`.
- Calendar mobile usability.
- Finance mobile usability.
- Knowledge Base mobile usability.
- Fixed bottom-nav overlap check.

## A6 - Runtime Changes Stay Narrow

If runtime files change:

- Every runtime edit maps to a confirmed mobile/accessibility acceptance issue.
- Runtime edits are limited to the approved allowlist unless separately approved.
- No new feature is introduced.
- No broad redesign is performed.
- Existing task capture, notification fixture, and navigation behavior are preserved.

## A7 - Validation Commands Pass

These commands pass or produce only documented known warnings:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

## A8 - Documentation Closeout

- `docs/VALIDATION.md` records Sprint 040 validation results.
- `planning/STATE.md` records Sprint 040 status and next action.
- New risks, questions, or decisions are documented only if discovered.
- If no new risks, questions, or decisions are discovered, the completion report says so clearly.

## Completion Rule

Do not mark Sprint 040 complete unless all acceptance criteria are satisfied.
```

---

# File: `planning/sprints/040-mobile-accessibility-and-touch-target-hardening/handoff-prompt.md`

```markdown
# Sprint 040 Handoff Prompt - Mobile Accessibility and Touch Target Hardening

Use this prompt with Codex after the Sprint 040 Architect Pack has been applied.

```text
Read the Sprint 040 planning files before making runtime changes.

Files to read:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/requirements.md
- planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/blueprint.md
- planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/acceptance.md
- planning/sprints/039-forward-state-and-next-runtime-priority-selection/requirements.md
- planning/sprints/039-forward-state-and-next-runtime-priority-selection/blueprint.md
- planning/sprints/039-forward-state-and-next-runtime-priority-selection/acceptance.md
- planning/sprints/040-mobile-accessibility-and-touch-target-hardening/requirements.md
- planning/sprints/040-mobile-accessibility-and-touch-target-hardening/blueprint.md
- planning/sprints/040-mobile-accessibility-and-touch-target-hardening/acceptance.md
- planning/sprints/040-mobile-accessibility-and-touch-target-hardening/handoff-prompt.md

Inspect these runtime files before proposing changes:

- App.tsx
- components/Navigation.tsx
- components/Dashboard.tsx
- components/VoiceDashboard.tsx
- components/TasksView.tsx
- components/NotificationsView.tsx
- components/CalendarView.tsx
- components/FinanceView.tsx
- components/KnowledgeBaseView.tsx

Then summarize:

1. What Sprint 040 is supposed to accomplish.
2. Which files you inspected.
3. Which concrete mobile/accessibility issues you found, if any.
4. Which files you propose to modify, if any.
5. What validation commands and browser/mobile checks you will run.
6. Any blockers or ambiguities.

Do not implement yet.
Do not stage, commit, or push.
Do not touch CEO Briefing files.
Do not create references/flutterflow/sprint-009/ceo-briefing.png.
Do not touch backend, Firebase, package, native, build, release, deployment, FlutterFlow export, or evidence files.

Wait for approval after your summary.
```
```

---

## Codex Apply-Pack Prompt

Use this prompt only after saving this Architect Pack.

```text
Apply the Sprint 040 Architect Pack to the project folder as docs/planning only.

Create or update only the files listed in the pack:

- planning/STATE.md
- docs/VALIDATION.md
- planning/sprints/040-mobile-accessibility-and-touch-target-hardening/requirements.md
- planning/sprints/040-mobile-accessibility-and-touch-target-hardening/blueprint.md
- planning/sprints/040-mobile-accessibility-and-touch-target-hardening/acceptance.md
- planning/sprints/040-mobile-accessibility-and-touch-target-hardening/handoff-prompt.md

Do not modify runtime files during pack application.
Do not modify backend, Firebase, package, native, build, release, deployment, FlutterFlow export, or evidence files.
Do not touch CEO Briefing.
Do not create `references/flutterflow/sprint-009/ceo-briefing.png`.
Do not stage, commit, or push.

After applying the pack, run:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

Report:

1. Files created.
2. Files updated.
3. Validation results.
4. Final git status.
```

---

## Architect Notes

Sprint 040 is not a feature sprint. It is an inspect-first runtime hardening sprint for phone-sized usability and accessibility confidence.

The Builder should stop after the inspection summary and wait for approval before runtime implementation. A no-op outcome is acceptable if the current app already satisfies the acceptance criteria.

CEO Briefing remains deferred and must not be reopened by this sprint.
