# Architect Pack - Sprint 014 CEO Briefing Screenshot Evidence Capture

**Project:** Trina / trinaos-voice  
**Sprint:** `014-ceo-briefing-screenshot-evidence-capture`  
**Date:** 2026-05-30  
**Architect Layer:** ChatGPT  
**Builder Layer:** Codex / operator-assisted FlutterFlow workflow  
**Mode:** Evidence capture only

---

## 0. Purpose

Sprint 014 exists to capture real CEO Briefing screenshot evidence from the FlutterFlow prototype and close the deferred Sprint 013 evidence gap.

Sprint 013 documented that CEO Briefing evidence remained deferred because the required screenshot did not exist:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Sprint 014 reopens only that evidence gap. The Builder/operator should confirm the CEO Briefing screen exists in FlutterFlow, confirm the required navigation paths, capture the real screenshot, save it at the required evidence path, and update planning/docs evidence notes.

This sprint must not become runtime app work, generated-code export work, Firebase work, Hermes/backend work, or release work.

---

## 1. Files This Architect Pack Should Create

After this Architect Pack is applied, create:

```text
planning/sprints/014-ceo-briefing-screenshot-evidence-capture/requirements.md
planning/sprints/014-ceo-briefing-screenshot-evidence-capture/blueprint.md
planning/sprints/014-ceo-briefing-screenshot-evidence-capture/acceptance.md
planning/sprints/014-ceo-briefing-screenshot-evidence-capture/handoff-prompt.md
```

---

## 2. Files This Architect Pack May Update

Update only as needed after the real screenshot exists:

```text
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/FLUTTERFLOW_BUILD_HANDOFF.md
docs/VALIDATION.md
references/flutterflow/sprint-009/click-path-notes.md
```

---

## 3. Evidence File To Capture

The required evidence file is:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Use the existing Sprint 009 FlutterFlow evidence folder because the related prototype screenshots already live there.

The file must be a real FlutterFlow screenshot. Do not create a placeholder, mock image, generated image, renamed unrelated screenshot, FlutterFlow code export, or fake evidence file.

---

## 4. Files This Sprint Must Not Touch

Do not modify:

```text
src/
components/
services/
functions/
firebase.json
firestore.rules
package.json
package-lock.json
pnpm-lock.yaml
yarn.lock
android/
ios/
dist/
.env
.env.*
```

Do not export or commit generated FlutterFlow code.

Do not create Firebase, Hermes/API, backend, package, native, production release, deployment, auth, live AI, real financial data, or secret-management work.

---

## 5. Required Sprint 014 File Contents

## File: `planning/sprints/014-ceo-briefing-screenshot-evidence-capture/requirements.md`

```markdown
# Sprint 014 Requirements - CEO Briefing Screenshot Evidence Capture

## Goal

Capture real CEO Briefing screenshot evidence from the FlutterFlow prototype and close the deferred Sprint 013 evidence gap.

## Background

Sprint 013 documented that CEO Briefing evidence remained deferred because no real screenshot was available at:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Sprint 014 exists only to capture that real evidence and update the planning/docs notes so the repo tells the truth.

## Primary User Story

As the project operator, I need real CEO Briefing screenshot evidence saved in the project references folder so the deferred Sprint 013 evidence gap can be closed without modifying runtime app code.

## In Scope

- Evidence capture only.
- Confirm the CEO Briefing screen exists in the FlutterFlow prototype.
- Confirm Dashboard CEO Briefing navigation works.
- Confirm CEO Briefing can navigate back to Dashboard or the documented home route.
- Confirm CEO Briefing `Ask Trina to Prioritize` navigation works.
- Capture a real CEO Briefing screenshot.
- Save the screenshot as `references/flutterflow/sprint-009/ceo-briefing.png`.
- Update planning/docs evidence notes after the screenshot exists.

## Out of Scope

- Runtime React/Vite app changes.
- FlutterFlow generated code export.
- Firebase setup, config, deploy, Functions, or security rules.
- Hermes/API/backend implementation.
- Authentication.
- Live AI/model calls.
- Real voice capture.
- Real financial data.
- Package file changes.
- Native iOS/Android folder changes.
- Production mobile release work.
- Secrets or `.env` files.
- Placeholder or simulated evidence.

## CEO Briefing Screen Requirements

The screenshot must show the real FlutterFlow CEO Briefing screen.

The screen should visibly preserve the current Trina visual direction:

- Pink/white Barbie-inspired styling.
- Rounded cards.
- Hot pink accents.
- Assistant/executive briefing tone.
- Clear `CEO Briefing` or equivalent briefing page title.

Preferred visible content:

- Today's Priorities
- Follow-ups
- Decisions Needed
- Next Best Move
- Ask Trina to Prioritize

If the FlutterFlow screen has a different visible title, document the title in `references/flutterflow/sprint-009/click-path-notes.md` before marking evidence complete.

## Navigation Requirements

Manually confirm and document:

```text
Dashboard -> CEO Briefing
CEO Briefing -> Dashboard
CEO Briefing -> Ask Trina to Prioritize -> Assistant
```

If a path is missing, renamed, or untestable, document that honestly. Do not mark that path as passing.

## Evidence Completion Rule

Do not mark CEO Briefing evidence complete unless this file exists:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Do not create a placeholder image or text-only substitute.

## Success Definition

Sprint 014 is successful when the real CEO Briefing screenshot exists at the required path, evidence notes identify it as present, the required navigation paths are documented, and all repo changes remain limited to the screenshot plus planning/docs/evidence-note files.
```

---

## File: `planning/sprints/014-ceo-briefing-screenshot-evidence-capture/blueprint.md`

```markdown
# Sprint 014 Blueprint - CEO Briefing Screenshot Evidence Capture

## Objective

Close the deferred Sprint 013 CEO Briefing evidence gap by validating the manual FlutterFlow prototype and saving a real screenshot in the existing evidence folder.

## Files to Read First

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `references/flutterflow/sprint-009/click-path-notes.md`
- `planning/sprints/013-flutterflow-ceo-briefing-evidence-capture/requirements.md`
- `planning/sprints/013-flutterflow-ceo-briefing-evidence-capture/blueprint.md`
- `planning/sprints/013-flutterflow-ceo-briefing-evidence-capture/acceptance.md`

## Files to Create

- `planning/sprints/014-ceo-briefing-screenshot-evidence-capture/requirements.md`
- `planning/sprints/014-ceo-briefing-screenshot-evidence-capture/blueprint.md`
- `planning/sprints/014-ceo-briefing-screenshot-evidence-capture/acceptance.md`
- `planning/sprints/014-ceo-briefing-screenshot-evidence-capture/handoff-prompt.md`

## Files to Update

Update only as needed after real evidence exists:

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `references/flutterflow/sprint-009/click-path-notes.md`

## Manual FlutterFlow Validation Plan

1. Open the clean Trina FlutterFlow prototype project.
2. Confirm the app still preserves the `trina-barbie-v1` visual direction.
3. Locate the CEO Briefing page or explicitly documented briefing equivalent.
4. Confirm visible content is briefing-specific, not placeholder-only.
5. Test these prototype paths:

```text
Dashboard -> CEO Briefing
CEO Briefing -> Dashboard
CEO Briefing -> Ask Trina to Prioritize -> Assistant
```

6. Record any path that is missing, renamed, or untestable.
7. Capture the CEO Briefing screen from FlutterFlow Preview/Test/Run or the FlutterFlow designer preview.
8. Save the screenshot as:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Do not save alternate placeholder names such as:

```text
ceo-briefing-pending.png
ceo-briefing-placeholder.png
ceo-briefing-draft.png
```

## Planning/Docs Update Plan

After the real screenshot exists:

1. Update `references/flutterflow/sprint-009/click-path-notes.md`.
   - Mark `ceo-briefing.png` as present.
   - Record the manual validation date.
   - Record tested navigation paths.
   - Record any path that remains untested or missing.
   - Distinguish the new Sprint 014 evidence from the prior Sprint 013 deferred state.
2. Update `docs/FLUTTERFLOW_BUILD_HANDOFF.md`.
   - Replace deferred CEO Briefing evidence language with present evidence language only after the screenshot exists.
   - Preserve historical notes that the gap was deferred before Sprint 014.
3. Update `planning/STATE.md`.
   - Mark Sprint 014 as the current evidence-capture checkpoint.
   - State that the Sprint 013 deferred evidence gap is closed only if the screenshot exists.
4. Update `docs/VALIDATION.md`.
   - Add or update validation commands for CEO Briefing screenshot evidence capture.
5. Update `planning/DECISIONS.md`, `planning/RISKS.md`, and `planning/QUESTIONS.md` only if the evidence status changes a durable decision, risk, or open question.

## Validation Commands

Run and report:

```bash
git status --branch --short
find references/flutterflow/sprint-009 -maxdepth 1 -type f | sort
test -f references/flutterflow/sprint-009/ceo-briefing.png && echo "ceo briefing evidence exists"
file references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git diff --stat
git diff --check
```

If the screenshot has not yet been captured, skip the `file` command and report that the evidence file is still missing.

## Protected Areas

Do not modify:

- Runtime app code.
- React/Vite files.
- FlutterFlow generated exports.
- Firebase files.
- Hermes/API/backend files.
- Package files.
- Native folders.
- Release files.
- Secrets or `.env` files.
```

---

## File: `planning/sprints/014-ceo-briefing-screenshot-evidence-capture/acceptance.md`

```markdown
# Sprint 014 Acceptance Criteria - CEO Briefing Screenshot Evidence Capture

Sprint 014 is complete only when all applicable criteria are satisfied.

## Planning Acceptance

- Sprint 014 folder exists.
- `requirements.md` exists.
- `blueprint.md` exists.
- `acceptance.md` exists.
- `handoff-prompt.md` exists.
- `planning/STATE.md` identifies Sprint 014 as the current evidence-capture checkpoint.

## Scope Acceptance

- Work remains evidence capture only.
- No runtime app code is modified.
- No FlutterFlow generated code is exported or modified.
- No backend, Firebase, Hermes/API, package, native, release, deploy, or secret files are modified.
- No placeholder evidence is created.

## Manual FlutterFlow Acceptance

- CEO Briefing or its explicitly documented briefing equivalent exists in the FlutterFlow project.
- The screen preserves the Trina Barbie-inspired visual direction.
- The screen contains briefing-specific content, not placeholder-only content.
- Manual validation notes record results for:

```text
Dashboard -> CEO Briefing
CEO Briefing -> Dashboard
CEO Briefing -> Ask Trina to Prioritize -> Assistant
```

Any missing or untested path is documented honestly.

## Evidence Acceptance

- Real screenshot evidence exists at:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

- `references/flutterflow/sprint-009/click-path-notes.md` marks CEO Briefing evidence present.
- The evidence note distinguishes real Sprint 014 evidence from the prior Sprint 013 deferred state.
- `.DS_Store` is not included in the evidence contract.
- No placeholder file such as `ceo-briefing-pending.png`, `ceo-briefing-placeholder.png`, or `ceo-briefing-draft.png` exists.

## Documentation Acceptance

- `docs/FLUTTERFLOW_BUILD_HANDOFF.md` documents that Sprint 014 closed the Sprint 013 CEO Briefing screenshot evidence gap only if `ceo-briefing.png` exists.
- `docs/VALIDATION.md` documents the evidence validation commands.
- `planning/DECISIONS.md`, `planning/RISKS.md`, and `planning/QUESTIONS.md` are updated only if needed.

## Validation Acceptance

Run and report:

```bash
git status --branch --short
find references/flutterflow/sprint-009 -maxdepth 1 -type f | sort
test -f references/flutterflow/sprint-009/ceo-briefing.png && echo "ceo briefing evidence exists"
file references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git diff --stat
git diff --check
```

`git diff --check` must pass.

## Completion Standard

Sprint 014 is not complete until real CEO Briefing screenshot evidence exists at the required path, navigation evidence is documented, and planning/docs notes are updated.
```

---

## File: `planning/sprints/014-ceo-briefing-screenshot-evidence-capture/handoff-prompt.md`

```markdown
# Sprint 014 Builder Handoff Prompt - CEO Briefing Screenshot Evidence Capture

You are the Builder for Trina.

Sprint:

```text
014-ceo-briefing-screenshot-evidence-capture
```

This sprint is evidence capture only.

Do not implement runtime code.

## Read First

Read these files before making changes:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `references/flutterflow/sprint-009/click-path-notes.md`
- `planning/sprints/013-flutterflow-ceo-briefing-evidence-capture/requirements.md`
- `planning/sprints/013-flutterflow-ceo-briefing-evidence-capture/acceptance.md`
- `planning/sprints/014-ceo-briefing-screenshot-evidence-capture/requirements.md`
- `planning/sprints/014-ceo-briefing-screenshot-evidence-capture/blueprint.md`
- `planning/sprints/014-ceo-briefing-screenshot-evidence-capture/acceptance.md`

## Checkpoint 1 - Summarize Before Changes

Before changing files, summarize:

1. What Sprint 014 is supposed to accomplish.
2. Which Sprint 013 evidence gap it closes.
3. Which file will close the evidence gap.
4. Which FlutterFlow manual validation steps are required.
5. Which planning/docs/evidence-note files may change.
6. What is explicitly out of scope.
7. What validation commands will run.
8. Any blockers or ambiguities.

Stop and wait for approval before changing files unless the operator has already approved implementation.

## Approved Work After Checkpoint

After approval, create the Sprint 014 planning files if missing:

- `planning/sprints/014-ceo-briefing-screenshot-evidence-capture/requirements.md`
- `planning/sprints/014-ceo-briefing-screenshot-evidence-capture/blueprint.md`
- `planning/sprints/014-ceo-briefing-screenshot-evidence-capture/acceptance.md`
- `planning/sprints/014-ceo-briefing-screenshot-evidence-capture/handoff-prompt.md`

Then perform or coordinate manual FlutterFlow validation.

## Manual FlutterFlow Work

Use the real FlutterFlow prototype project.

Validate:

- CEO Briefing screen exists.
- The screen uses the existing Trina pink/white visual direction.
- The screen contains briefing-specific content.
- Dashboard can navigate to CEO Briefing.
- CEO Briefing can navigate back to Dashboard or the documented home route.
- CEO Briefing `Ask Trina to Prioritize` can navigate to Assistant.

Capture a real screenshot and save it as:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

## Evidence Notes

After the screenshot exists, update:

- `references/flutterflow/sprint-009/click-path-notes.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `planning/STATE.md`

Update `planning/DECISIONS.md`, `planning/RISKS.md`, and `planning/QUESTIONS.md` only if the evidence capture changes a durable decision, risk, or open question.

## Strict Rules

- Do not create placeholder screenshots.
- Do not mark CEO Briefing complete unless `references/flutterflow/sprint-009/ceo-briefing.png` exists.
- Do not modify runtime app code.
- Do not modify React/Vite code.
- Do not export FlutterFlow generated code.
- Do not touch Firebase, Hermes, backend, package, native, release, deploy, or secret files.
- Do not create production release work.
- Do not stage, commit, or push unless explicitly instructed.

## Validation

Run:

```bash
git status --branch --short
find references/flutterflow/sprint-009 -maxdepth 1 -type f | sort
test -f references/flutterflow/sprint-009/ceo-briefing.png && echo "ceo briefing evidence exists"
file references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git diff --stat
git diff --check
```

If the screenshot has not yet been captured, skip the `file` command and report that the evidence file is still missing.

## Final Report

Report:

1. Files created.
2. Files updated.
3. Evidence file status.
4. Manual FlutterFlow validation results.
5. Validation command results.
6. Whether Sprint 014 acceptance is satisfied.
7. Current git status.

Stop after the report.
```

---

## 6. Builder Summary Requirement

Before applying Sprint 014 beyond creating this Architect Pack, the Builder should summarize:

- Scope: evidence capture only.
- Deferred gap: Sprint 013 CEO Briefing screenshot evidence.
- Evidence target: `references/flutterflow/sprint-009/ceo-briefing.png`.
- Required navigation checks:
  - `Dashboard -> CEO Briefing`
  - `CEO Briefing -> Dashboard`
  - `CEO Briefing -> Ask Trina to Prioritize -> Assistant`
- Documentation targets: planning/docs/evidence notes only.
- Protected areas: runtime app code, generated FlutterFlow code, Firebase, Hermes/backend, packages, native folders, release files, and secrets.
- Validation commands.
- Whether manual FlutterFlow access is available.

Then stop for approval.

---

## 7. Architect Close

Sprint 014 is intentionally narrow.

It closes the Sprint 013 deferred evidence gap only with one real FlutterFlow screenshot, documented navigation evidence, and the minimum planning/docs updates required to make the repo tell the truth.
