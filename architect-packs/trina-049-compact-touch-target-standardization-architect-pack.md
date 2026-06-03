# Trina Sprint 049 Architect Pack — Compact Touch Target Standardization

**Project:** TrinaOS Voice / Trina
**Sprint:** 049
**Sprint folder:** `planning/sprints/049-compact-touch-target-standardization/`
**Created:** 2026-06-02
**Architect layer:** ChatGPT
**Builder layer target:** Codex
**Pack type:** Planning/docs first, runtime only after Codex applies sprint files and receives approval to implement.

---

## 1. Architect Intent

Sprint 048 completed a short-height mobile smoke validation pass across core non-Home views. No runtime blocker was confirmed. The only follow-up candidate was optional polish around compact controls that fall below a strict `44px` touch-target standard, especially:

- Calendar day cells
- Calendar or task filter chips
- Any compact segmented/filter controls in core views

Sprint 049 should convert that optional follow-up into a focused, measurable runtime hardening sprint.

The goal is not to redesign the app. The goal is to standardize compact interactive controls so mobile tap targets are easier to use and remain stable at short-height viewport sizes.

---

## 2. Files This Architect Pack Should Create or Update

Codex should apply this Architect Pack by creating or updating these planning/docs files only first:

```text
planning/STATE.md
planning/RISKS.md
docs/VALIDATION.md
planning/sprints/049-compact-touch-target-standardization/requirements.md
planning/sprints/049-compact-touch-target-standardization/blueprint.md
planning/sprints/049-compact-touch-target-standardization/acceptance.md
planning/sprints/049-compact-touch-target-standardization/handoff-prompt.md
```

No runtime files should be changed while applying this Architect Pack.

---

## 3. Planning/Docs Update Instructions

### 3.1 `planning/STATE.md`

Update current state to show Sprint 049 is ready for Builder read-first review.

Suggested state entry:

```markdown
## Current Status

Sprint 048 was closed and pushed as validation/docs only. Short-height mobile smoke validation found no confirmed runtime blocker.

Sprint 049 is planned as a focused runtime polish sprint for compact touch-target standardization across core mobile controls.

## Active Sprint

`planning/sprints/049-compact-touch-target-standardization/`

## Recently Completed

- Sprint 048 validated Tasks, Calendar, Finance, Knowledge Base, and Notifications/reminders at `390x844` and `360x740`.
- No bottom-nav trapping, horizontal overflow, or hidden primary actions were confirmed.
- Runtime files remained untouched in Sprint 048.

## Next Actions

- Apply Sprint 049 planning files.
- Ask Codex to read Sprint 049 files and summarize scope before implementation.
- Do not implement until the summary is approved.

## Blockers

- None known.
```

Preserve useful existing state details. Do not erase durable project history that still matters.

---

### 3.2 `planning/RISKS.md`

Add or update Sprint 049 risk notes.

Suggested risk entries:

```markdown
| Compact touch-target changes could increase vertical density and affect short-height scrolling. | Medium | Medium | Keep changes scoped to interactive controls, validate at `390x844` and `360x740`, and avoid broad layout redesign. | Guarded in Sprint 049. |
| Calendar day-cell sizing could disturb calendar grid alignment. | Medium | Medium | Prefer minimum dimensions and padding changes that preserve grid structure; validate month layout visually. | Guarded in Sprint 049. |
| Filter chip hardening could cause wrapping or horizontal overflow. | Medium | Medium | Use wrapping/flex behavior where appropriate and verify no horizontal overflow at mobile widths. | Guarded in Sprint 049. |
```

Keep prior mitigated Sprint 048 risks intact.

---

### 3.3 `docs/VALIDATION.md`

Add a Sprint 049 validation section.

Suggested section:

```markdown
## Sprint 049 — Compact Touch Target Standardization Validation

Sprint 049 must validate compact interactive controls after implementation.

Required command validation:

- `git diff --check`
- `test ! -f references/flutterflow/sprint-009/ceo-briefing.png`
- `npm run lint`
- `npm run build`
- `git diff --name-only`
- `git status --branch --short`
- `git diff --cached --name-only`

Required browser/mobile validation:

- Validate at `390x844`.
- Validate at `360x740`.
- Inspect Calendar day cells.
- Inspect filter chips or segmented controls in Calendar and Tasks if present.
- Inspect any compact interactive controls changed by the sprint.
- Confirm no horizontal overflow.
- Confirm no primary action/input is hidden behind the fixed bottom nav.
- Confirm changed controls meet or intentionally approximate the `44px` touch-target standard.
- Confirm no CEO Briefing files were touched.
```

---

## 4. Create File: `planning/sprints/049-compact-touch-target-standardization/requirements.md`

```markdown
# Sprint 049 Requirements — Compact Touch Target Standardization

## Goal

Standardize compact interactive controls so core mobile views preserve a practical `44px` touch-target standard without introducing layout regressions.

## Background

Sprint 048 validated short-height mobile behavior across core views at `390x844` and `360x740`. No runtime blocker was confirmed.

One optional follow-up remained: some compact controls, especially Calendar day cells and filter chips, can fall below `44px` in one dimension. Sprint 049 turns that into a focused hardening pass.

## In Scope

- Inspect compact interactive controls in:
  - Calendar
  - Tasks
  - Finance, only if compact interactive controls are present
  - Knowledge Base, only if compact interactive controls are present
  - Notifications/reminders, only if reachable and relevant
- Harden touch targets for confirmed compact controls.
- Preserve existing mobile layout behavior.
- Preserve short-height scrolling behavior.
- Preserve fixed bottom navigation usability.
- Update validation docs and sprint acceptance notes.

## Out of Scope

- No broad visual redesign.
- No new features.
- No database, auth, backend, Firebase, or API changes.
- No dependency changes unless a blocker is found and approved.
- No CEO Briefing changes.
- Do not create `references/flutterflow/sprint-009/ceo-briefing.png`.
- No production release work.
- No staging, commit, or push unless explicitly requested after validation.

## Expected Runtime Files To Inspect

Codex should inspect before editing:

- `components/CalendarView.tsx`
- `components/TasksView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`
- `components/NotificationsView.tsx`, if present/reachable
- `App.tsx`, only if viewport/app-shell behavior is directly relevant

## Expected Runtime Files To Modify

Modify only files with confirmed compact interactive control issues.

Most likely:

- `components/CalendarView.tsx`
- `components/TasksView.tsx`

Other runtime files should remain untouched unless the sprint inspection confirms a specific compact control issue there.

## Success Definition

Sprint 049 is complete when:

- Confirmed compact controls are hardened toward the `44px` touch-target standard.
- No horizontal overflow is introduced at `390x844` or `360x740`.
- No primary action/input is trapped behind the fixed bottom nav.
- Existing short-height scrolling remains usable.
- Lint and build pass.
- Docs and acceptance notes are updated.
```

---

## 5. Create File: `planning/sprints/049-compact-touch-target-standardization/blueprint.md`

```markdown
# Sprint 049 Blueprint — Compact Touch Target Standardization

## Implementation Strategy

This is a small runtime polish sprint.

Codex must inspect first, then patch only confirmed compact interactive controls.

Do not redesign the views. Prefer small className/style changes that improve touch target size without changing data flow or business behavior.

## Step 1 — Read Current Planning

Read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/049-compact-touch-target-standardization/requirements.md`
- `planning/sprints/049-compact-touch-target-standardization/blueprint.md`
- `planning/sprints/049-compact-touch-target-standardization/acceptance.md`

Then summarize before making changes.

## Step 2 — Inspect Compact Controls

Inspect the relevant components for compact interactive controls:

- Calendar day buttons/cells
- Calendar filter chips
- Task filter chips
- Segmented controls
- Small icon/text buttons
- Any other clickable/tappable element that appears below `44px` in one dimension

Prioritize controls that are used frequently on mobile.

## Step 3 — Patch With Minimal Layout Risk

Use small adjustments such as:

- `min-h-[44px]`
- `min-w-[44px]`
- increased vertical padding
- consistent button classes
- wrapping chip containers where needed
- avoiding fixed widths that cause overflow

Do not create broad shared abstractions unless they already exist and the change is clearly safer than duplicating a small class adjustment.

## Step 4 — Preserve Calendar Layout

Calendar day cells are sensitive because they live in a grid.

If hardening day cells:

- Preserve the grid.
- Avoid horizontal overflow.
- Avoid making the calendar unusable on `360px` width.
- Prefer minimum height/padding changes over large typography/layout changes.

## Step 5 — Validate Mobile Viewports

Use browser/mobile validation at:

- `390x844`
- `360x740`

Check:

- Calendar
- Tasks
- Other changed views
- Notifications/reminders fixture only if relevant and reachable

## Step 6 — Update Docs

After implementation and validation, update:

- `planning/STATE.md`
- `planning/RISKS.md`, only if risk status changes
- `docs/VALIDATION.md`
- `planning/sprints/049-compact-touch-target-standardization/acceptance.md`

## Runtime Guardrails

- Do not touch CEO Briefing files.
- Do not create `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not modify backend, Firebase, auth, package/dependency, native build, or deployment files.
- Do not stage, commit, or push.
```

---

## 6. Create File: `planning/sprints/049-compact-touch-target-standardization/acceptance.md`

```markdown
# Sprint 049 Acceptance — Compact Touch Target Standardization

## Acceptance Criteria

### Scope Control

- [ ] Codex read Sprint 049 files and summarized the sprint before implementation.
- [ ] Runtime changes were limited to confirmed compact interactive controls.
- [ ] No broad redesign was introduced.
- [ ] No backend, Firebase, auth, dependency, package, native build, or deployment files were changed.
- [ ] CEO Briefing files were untouched.
- [ ] `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

### Touch Target Hardening

- [ ] Calendar day cells meet or intentionally approximate the `44px` touch-target standard without breaking the calendar grid.
- [ ] Calendar/task filter chips meet or intentionally approximate the `44px` touch-target standard where they are interactive.
- [ ] Changed controls remain usable on mobile.
- [ ] Changed controls do not create horizontal overflow.
- [ ] Changed controls do not trap primary actions or inputs behind the fixed bottom nav.

### Viewport Validation

- [ ] `390x844` was checked.
- [ ] `360x740` was checked.
- [ ] Calendar was checked.
- [ ] Tasks was checked.
- [ ] Other changed views were checked.
- [ ] Notifications/reminders were checked if changed or relevant.

### Command Validation

- [ ] `git diff --check` passed.
- [ ] `test ! -f references/flutterflow/sprint-009/ceo-briefing.png` passed.
- [ ] `npm run lint` passed.
- [ ] `npm run build` passed, or existing non-blocking warnings were documented.
- [ ] `git diff --name-only` showed only approved Sprint 049 files.
- [ ] `git status --branch --short` was reported.
- [ ] `git diff --cached --name-only` was empty unless staging was explicitly requested.

## Completion Notes

To be filled by Builder after validation.

## Files Changed

To be filled by Builder after validation.

## Follow-Up Recommendation

To be filled by Builder after validation.
```

---

## 7. Create File: `planning/sprints/049-compact-touch-target-standardization/handoff-prompt.md`

```markdown
# Sprint 049 Handoff Prompt — Compact Touch Target Standardization

Copy/paste this into Codex after the Architect Pack has been applied to the project folder.

```text
Read the following files before making changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/VALIDATION.md
- planning/sprints/049-compact-touch-target-standardization/requirements.md
- planning/sprints/049-compact-touch-target-standardization/blueprint.md
- planning/sprints/049-compact-touch-target-standardization/acceptance.md

Then summarize:

1. What Sprint 049 is supposed to accomplish.
2. The files you expect to inspect.
3. The files you expect to modify, if any.
4. The tests or validation steps you will run.
5. Any blockers or ambiguities.

Do not start implementation until I approve your summary.

Sprint goal:
Standardize compact interactive controls so core mobile views preserve a practical 44px touch-target standard without introducing layout regressions.

Primary targets:
- Calendar day cells
- Calendar/task filter chips
- Any compact interactive controls confirmed during inspection

Guardrails:
- Do not touch CEO Briefing files.
- Do not create references/flutterflow/sprint-009/ceo-briefing.png.
- Do not modify backend, Firebase, auth, package/dependency, native build, or deployment files.
- Do not stage, commit, or push.
- Do not make broad visual redesign changes.
- Runtime changes should be minimal and tied to confirmed compact touch-target issues.

Validation expectation:
- Check 390x844 and 360x740.
- Confirm no horizontal overflow.
- Confirm no primary action/input is hidden behind the fixed bottom nav.
- Confirm changed controls meet or intentionally approximate the 44px touch-target standard.
- Run git diff --check.
- Run test ! -f references/flutterflow/sprint-009/ceo-briefing.png.
- Run npm run lint.
- Run npm run build.
- Report git diff --name-only, git status --branch --short, and git diff --cached --name-only.
```
```

---

## 8. Codex Apply-Pack Prompt

Use this prompt first. It applies the Architect Pack as planning/docs only.

```text
Apply the Sprint 049 Architect Pack as planning/docs only.

Create or update only these files:

- planning/STATE.md
- planning/RISKS.md
- docs/VALIDATION.md
- planning/sprints/049-compact-touch-target-standardization/requirements.md
- planning/sprints/049-compact-touch-target-standardization/blueprint.md
- planning/sprints/049-compact-touch-target-standardization/acceptance.md
- planning/sprints/049-compact-touch-target-standardization/handoff-prompt.md

Do not modify runtime files.
Do not stage, commit, or push.
Do not touch CEO Briefing files.
Do not create references/flutterflow/sprint-009/ceo-briefing.png.

After applying the pack, run:

- git diff --check
- test ! -f references/flutterflow/sprint-009/ceo-briefing.png
- git diff --name-only
- git status --branch --short
- git diff --cached --name-only

Then report:

1. Files created.
2. Files updated.
3. Validation results.
4. Confirmation that no runtime files changed.
5. Confirmation that CEO Briefing stayed untouched.
```

---

## 9. Stop Point

After Codex applies this Architect Pack, do not start implementation yet.

The next required step is to use the Sprint 049 handoff prompt and require Codex to summarize before implementation.
