# Architect Pack - Sprint 020 FlutterFlow CEO Briefing Real Screenshot Pass

**Project:** Trina / trinaos-voice
**Sprint:** `020-flutterflow-ceo-briefing-real-screenshot-pass`
**Date:** 2026-05-31
**Architect Layer:** ChatGPT
**Builder Layer:** Codex / operator-led FlutterFlow workflow
**Mode:** FlutterFlow Designer / Preview evidence pass only

---

## 0. Purpose

Sprint 020 exists to run a real, operator-led FlutterFlow evidence pass for the previously deferred CEO Briefing screen.

Sprints 010 through 019 kept CEO Briefing evidence truthful: the screenshot remained missing, deferred, blocked, or unverified because no real FlutterFlow screenshot was available. Sprint 020 may close that gap only if the operator verifies the real FlutterFlow project in Designer or Preview, confirms the required click paths, captures the real CEO Briefing screen, and stores the image at the approved evidence path.

This sprint must not fabricate or substitute evidence. If the real FlutterFlow screen or required click paths cannot be verified, the Builder must document the blocked or deferred status and leave the screenshot file absent.

---

## 1. Sprint Goal

Confirm the CEO Briefing screen exists in the real FlutterFlow prototype, validate the required prototype navigation paths, capture the real CEO Briefing screenshot, and save it as:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

This exact file closes the Sprint 009 CEO Briefing evidence gap only if it contains a real FlutterFlow Designer or Preview screenshot.

---

## 2. Files This Architect Pack Should Create

When the pack is applied, create:

```text
planning/sprints/020-flutterflow-ceo-briefing-real-screenshot-pass/requirements.md
planning/sprints/020-flutterflow-ceo-briefing-real-screenshot-pass/blueprint.md
planning/sprints/020-flutterflow-ceo-briefing-real-screenshot-pass/acceptance.md
planning/sprints/020-flutterflow-ceo-briefing-real-screenshot-pass/handoff-prompt.md
```

Store this Architect Pack as:

```text
architect-packs/trina-020-flutterflow-ceo-briefing-real-screenshot-pass-architect-pack.md
```

---

## 3. Files This Sprint May Update

Update only planning, validation, and evidence-note surfaces:

```text
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/FLUTTERFLOW_BUILD_HANDOFF.md
docs/VALIDATION.md
references/flutterflow/sprint-009/click-path-notes.md
```

If and only if real FlutterFlow evidence is captured, this sprint may add or update:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

No alternate screenshot path or filename is approved for closing the CEO Briefing evidence gap.

---

## 4. Protected Scope

This sprint is limited to FlutterFlow Designer / Preview verification and local planning/docs/evidence records.

Do not modify:

```text
App.tsx
src/
components/
services/
hooks/
utils/
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
public/
.env
.env.*
```

Do not:

- Modify runtime app code.
- Export generated FlutterFlow code.
- Create Firebase, Hermes, backend, package, native, build, production release, deployment, auth, live AI, real financial data, or secret-management changes.
- Create placeholder screenshots.
- Rename unrelated screenshots into the CEO Briefing path.
- Include `.DS_Store` in the evidence contract.

---

## 5. Operator Preconditions

Before the Builder marks any evidence as complete, the operator must open the real FlutterFlow project in Designer or Preview and confirm:

1. Dashboard / Home is visible.
2. A CEO Briefing screen exists, or an approved renamed briefing equivalent exists.
3. The Dashboard action for CEO Briefing reaches the briefing screen.
4. The CEO Briefing screen renders correctly.
5. The CEO Briefing CTA `Ask Trina to Prioritize` reaches Assistant or the approved Assistant equivalent.
6. A real screenshot can be captured from FlutterFlow Designer or Preview.

Documentation review alone is not enough to pass any click path.

---

## 6. Required CEO Briefing Screen Content

The CEO Briefing screen should visibly match the Sprint 009 prototype intent:

- Header: `CEO Briefing`, or a documented approved rename.
- Subtitle or context: day, priorities, and next moves.
- Briefing sections such as:
  - Top Priorities
  - Follow-Ups
  - Decisions Needed
  - Suggested Next Move
- CTA: `Ask Trina to Prioritize`, or a documented equivalent label.
- Existing Trina pink/white visual direction.
- Static prototype content only.

If the real screen uses an approved renamed label, document:

```text
Documented label: CEO Briefing
Actual FlutterFlow label: <actual label>
Resolution: accepted rename / mismatch / follow-up required
```

---

## 7. Required Click-Path Validation

Validate the following in FlutterFlow Designer or Preview:

```text
Dashboard -> CEO Briefing
CEO Briefing -> Dashboard
CEO Briefing -> Ask Trina to Prioritize -> Assistant
```

Each path must be recorded as one of:

```text
Pass
Fail
Blocked
Deferred
Not present
Renamed
Untested
```

Rules:

- `Pass` requires real FlutterFlow Designer or Preview validation.
- `Blocked` requires the concrete blocker, such as missing project access, missing screen, or broken navigation.
- `Renamed` requires the actual label and an Architect/operator decision on whether it is acceptable.
- `Untested` is acceptable only if the Builder clearly explains why the path could not be tested.

---

## 8. Screenshot Evidence Rules

The only approved screenshot path is:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

The screenshot must:

- Be captured from the real FlutterFlow Designer or Preview.
- Show the CEO Briefing screen or approved renamed equivalent.
- Reflect the real current prototype state.
- Be saved as a PNG at the exact approved path.

The screenshot must not be:

- A placeholder.
- A generated mock image.
- A copied old screenshot from a different screen.
- A renamed unrelated file.
- A text-only evidence substitute.
- A FlutterFlow generated-code export artifact.

If real evidence cannot be captured, leave `references/flutterflow/sprint-009/ceo-briefing.png` absent and document:

```text
CEO Briefing screenshot remains deferred; no real file exists at references/flutterflow/sprint-009/ceo-briefing.png.
```

---

## 9. Required Documentation Updates

Update `references/flutterflow/sprint-009/click-path-notes.md` with a Sprint 020 section that records:

- Operator / FlutterFlow Builder evidence pass date.
- Whether CEO Briefing exists.
- Actual screen label.
- Whether the screen renders correctly.
- Click-path validation results.
- Screenshot path status.
- Any mismatch, blocker, rename, or follow-up.

Update `docs/VALIDATION.md` with Sprint 020 validation commands and evidence rules.

Update `planning/STATE.md` to show Sprint 020 as active or completed according to the Builder pass result.

Update `planning/RISKS.md`, `planning/QUESTIONS.md`, and `planning/DECISIONS.md` only if Sprint 020 discovers a real risk, open question, or decision.

Update `docs/FLUTTERFLOW_BUILD_HANDOFF.md` only if the operator-verified CEO Briefing status changes the FlutterFlow builder handoff.

---

## 10. Sprint Planning File Requirements

### `requirements.md`

Document:

- FlutterFlow Designer / Preview only.
- Required CEO Briefing screen verification.
- Required click paths.
- Screenshot storage path.
- Real screenshot only rule.
- Protected runtime, generated-code, Firebase, Hermes, backend, package, native, build, and release surfaces.

### `blueprint.md`

Document:

- Operator-led verification sequence.
- Click-path test table.
- Screenshot capture procedure.
- Required documentation updates.
- Pass, fail, blocked, and deferred decision rules.

### `acceptance.md`

Acceptance must require:

- CEO Briefing existence is verified or honestly marked blocked/deferred.
- `Dashboard -> CEO Briefing` is verified or honestly marked blocked/deferred.
- `CEO Briefing -> Dashboard` is verified or honestly marked blocked/deferred.
- `CEO Briefing -> Ask Trina to Prioritize -> Assistant` is verified or honestly marked blocked/deferred.
- A real screenshot exists at `references/flutterflow/sprint-009/ceo-briefing.png` only if captured from FlutterFlow Designer or Preview.
- No placeholder screenshot is created.
- Runtime and generated-code protected scopes remain untouched.
- Validation results are recorded.

### `handoff-prompt.md`

Provide a direct Builder/operator prompt for:

- Opening the real FlutterFlow project.
- Running the three click-path checks.
- Capturing the real screenshot.
- Saving it to the exact approved repo path.
- Reporting blocked/deferred status honestly if any evidence cannot be verified.

---

## 11. Validation Commands

Run and report:

```bash
git status --branch --short
test -f references/flutterflow/sprint-009/ceo-briefing.png && echo "CEO briefing screenshot exists" || echo "CEO briefing screenshot absent"
git diff --name-only
git diff --stat
git diff --check
```

If a real screenshot is captured, also report:

```bash
file references/flutterflow/sprint-009/ceo-briefing.png
```

Do not run build, lint, Firebase deploy, FlutterFlow export, package install, native build, or release commands for this sprint unless a later explicit implementation request expands scope.

---

## 12. Builder Report Requirement

Before staging anything, report:

1. Files created.
2. Files updated.
3. Whether CEO Briefing exists in the real FlutterFlow project.
4. Required click-path results.
5. Screenshot evidence status.
6. Scope check for protected files.
7. Validation command results.
8. Final git status.

Do not stage, commit, or push unless explicitly approved.

---

## 13. Acceptance Summary

Sprint 020 is accepted when the Builder report proves one of these outcomes:

### Real Evidence Captured

- CEO Briefing exists or an approved renamed equivalent exists.
- The required click paths are validated in FlutterFlow Designer or Preview.
- A real screenshot is saved at `references/flutterflow/sprint-009/ceo-briefing.png`.
- Click-path notes and validation docs are updated.
- Protected runtime/generated/backend/native/build/release surfaces are untouched.

### Honest Block / Defer

- The Builder documents why the real screen or required click paths could not be verified.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent unless real evidence exists.
- Click-path notes and validation docs preserve the blocked/deferred status.
- Protected runtime/generated/backend/native/build/release surfaces are untouched.

Both outcomes are valid. Placeholder evidence is not valid.
