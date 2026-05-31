# Architect Pack - Sprint 018 FlutterFlow Final Prototype Evidence Capture

**Project:** Trina / trinaos-voice  
**Sprint:** `018-flutterflow-final-prototype-evidence-capture`  
**Date:** 2026-05-31  
**Architect Layer:** ChatGPT  
**Builder Layer:** Codex / operator-assisted FlutterFlow workflow  
**Mode:** Planning/docs evidence capture only

---

## 0. Purpose

Sprint 018 exists to prepare and document real FlutterFlow final prototype evidence capture for Trina.

Sprint 017 defined the final prototype evidence readiness checklist, screenshot rules, storage questions, and click-path validation expectations. Sprint 018 applies that readiness work as a docs/planning checkpoint and keeps the repo truthful about which evidence exists.

This sprint must not become runtime app work, generated-code export work, Firebase work, Hermes/backend work, package/native work, build output work, release work, or screenshot fabrication.

---

## 1. Files This Architect Pack Should Create

After this Architect Pack is applied, create:

```text
planning/sprints/018-flutterflow-final-prototype-evidence-capture/requirements.md
planning/sprints/018-flutterflow-final-prototype-evidence-capture/blueprint.md
planning/sprints/018-flutterflow-final-prototype-evidence-capture/acceptance.md
planning/sprints/018-flutterflow-final-prototype-evidence-capture/handoff-prompt.md
```

---

## 2. Files This Architect Pack May Update

Update only planning/docs/evidence-note files:

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

## 3. Evidence Rules

Screenshot evidence must be real FlutterFlow Designer or Preview evidence.

Do not create:

```text
fake screenshots
placeholder evidence images
renamed unrelated screenshots
generated FlutterFlow export code
text-only substitutes for image evidence
```

Only document screenshot evidence if the actual file exists.

CEO Briefing evidence remains missing or deferred unless this real file exists:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Do not create that file unless it is actual CEO Briefing screenshot evidence.

For final prototype evidence that is not specifically closing a Sprint 009 evidence gap, use or recommend:

```text
references/flutterflow/sprint-018/
```

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

## 5. Required Sprint 018 Planning Content

The Sprint 018 planning files should document:

- final prototype evidence capture scope
- real-screenshot-only evidence rules
- protected files and out-of-scope systems
- expected FlutterFlow screens to check
- click-path checks to confirm
- CEO Briefing missing/deferred status unless real evidence exists
- validation commands
- no staging, commit, or push unless explicitly approved

## Required Screens To Track

Track the real FlutterFlow status of:

1. Dashboard / Home
2. Assistant
3. Tasks / Priorities
4. Memory / Context, if present in the current prototype scope
5. CEO Briefing, only if real FlutterFlow evidence exists

## Required Click-Path Checks

Document the real status of:

```text
Dashboard -> Assistant
Dashboard -> Tasks / Priorities
Dashboard -> Memory / Context, if present
Dashboard -> CEO Briefing, only if present
CEO Briefing -> Dashboard, only if present
CEO Briefing -> Ask Trina to Prioritize -> Assistant, only if present
```

Any missing, renamed, or untested path must be documented honestly.

---

## 6. Validation Commands

Run and report:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png || echo "CEO briefing screenshot exists"
git status --branch --short
git diff --name-only
```

`git diff --check` must pass.

---

## 7. Builder Report Requirement

Before staging anything, report:

1. Files created.
2. Files updated.
3. Scope check.
4. Whether CEO Briefing evidence exists or remains missing/deferred.
5. Validation results.
6. Final git status.

Do not stage, commit, or push.

---

## 8. Architect Close

Sprint 018 is intentionally narrow.

It applies the final FlutterFlow prototype evidence-capture planning checkpoint, keeps evidence truthful, and preserves the boundary around runtime code, generated FlutterFlow exports, Firebase, Hermes/backend, package/native, build, release, and secret files.
