# Sprint 016 Builder Handoff Prompt

You are the Builder for Trina Sprint 016.

Sprint folder:

```text
planning/sprints/016-flutterflow-functional-app-stabilization/
```

## Task

Apply Sprint 016 as a planning/docs and validation stabilization checkpoint.

Do not implement runtime features.
Do not modify generated FlutterFlow code.
Do not modify Firebase, Hermes, backend, package/native, or release files.
Do not create placeholder screenshot evidence.

## Read First

Read these files before making changes:

```text
AGENTS.md
CODEX.md
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/FLUTTERFLOW_BUILD_HANDOFF.md
docs/VALIDATION.md
references/flutterflow/sprint-009/click-path-notes.md
planning/sprints/015-functional-app-stabilization-and-ceo-briefing-defer/requirements.md
planning/sprints/015-functional-app-stabilization-and-ceo-briefing-defer/blueprint.md
planning/sprints/015-functional-app-stabilization-and-ceo-briefing-defer/acceptance.md
```

## Create

```text
planning/sprints/016-flutterflow-functional-app-stabilization/requirements.md
planning/sprints/016-flutterflow-functional-app-stabilization/blueprint.md
planning/sprints/016-flutterflow-functional-app-stabilization/acceptance.md
planning/sprints/016-flutterflow-functional-app-stabilization/handoff-prompt.md
```

## Update Only If Needed

```text
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/FLUTTERFLOW_BUILD_HANDOFF.md
docs/VALIDATION.md
references/flutterflow/sprint-009/click-path-notes.md
```

## Protected Scope

Do not modify:

```text
src/
lib/
android/
ios/
functions/
backend/
firebase.json
firestore.rules
package.json
package-lock.json
pubspec.yaml
pubspec.lock
build/
dist/
```

Do not create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

unless explicitly authorized and unless it is a real screenshot captured from the real FlutterFlow prototype.

## Required Validation

Run:

```bash
git diff --check
git status --branch --short
```

## Report Back

Report:

1. Files created.
2. Files updated.
3. Confirmation that CEO Briefing evidence remains deferred unless real evidence exists.
4. Confirmation that no placeholder `ceo-briefing.png` was created.
5. Confirmation that no protected runtime/backend/generated/release files changed.
6. `git diff --check` result.
7. Final `git status --branch --short`.
8. Whether the sprint is ready to stage and commit.

Do not stage, commit, or push until explicitly instructed.
