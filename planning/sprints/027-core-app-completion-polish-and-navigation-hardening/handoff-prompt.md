# Sprint 027 Builder Handoff Prompt

You are the Builder for Trina Sprint 027.

Sprint folder:

```text
planning/sprints/027-core-app-completion-polish-and-navigation-hardening/
```

Architect Pack:

```text
architect-packs/trina-027-core-app-completion-polish-and-navigation-hardening-architect-pack.md
```

## First, Read These Files

```text
AGENTS.md
planning/STATE.md
docs/VALIDATION.md
planning/sprints/027-core-app-completion-polish-and-navigation-hardening/requirements.md
planning/sprints/027-core-app-completion-polish-and-navigation-hardening/blueprint.md
planning/sprints/027-core-app-completion-polish-and-navigation-hardening/acceptance.md
```

## Sprint Goal

Polish and harden the surrounding app shell so the current local Vite React prototype feels complete around the Sprint 026 Assistant capture path.

Preserve this working path:

```text
Dashboard or Navigation -> Assistant / Voice Entry -> Task or Reminder Capture -> Task/Notification Visibility -> Return Navigation
```

## Critical Guardrail

Do not work on CEO Briefing.

CEO Briefing is deferred, untouched, non-blocking, and out of scope.

Do not build it.
Do not rebuild it.
Do not wire it.
Do not validate it.
Do not screenshot it.
Do not mark it complete.
Do not make it a blocker.

Do not create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

## Protected Scope

Do not modify Firebase, Hermes, backend, package, package-lock, native, release, deploy, FlutterFlow export, generated, screenshot evidence, or build configuration files.

## Before Implementation

Before making runtime changes, summarize:

1. What Sprint 027 is supposed to accomplish.
2. Which files you inspected.
3. Which files you expect to modify.
4. What validation checks you will run.
5. Any blockers or ambiguities.

Stop after the summary and wait for approval.

## After Approval

Implement the smallest safe changes needed to polish navigation, return behavior, active-state clarity, empty states, and fallback copy around the existing Assistant capture path.

Likely files:

```text
App.tsx
components/Navigation.tsx
components/Dashboard.tsx
components/VoiceDashboard.tsx
components/TasksView.tsx
components/NotificationsView.tsx
planning/STATE.md
docs/VALIDATION.md
```

Modify fewer files if inspection shows fewer changes are needed.

Stop and ask before modifying files outside the expected runtime/docs list.

## Validation

Run and report:

```bash
git status --branch --short
git diff --name-only
git diff --stat
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

After implementation approval, also run:

```bash
npm run lint
npm run build
```

Do not stage, commit, or push unless explicitly asked.

## Final Report

Report:

1. Files changed.
2. What was polished in the app flow.
3. Validation checks run and results.
4. Confirmation that CEO Briefing stayed deferred, untouched, and out of scope.
5. Remaining risks or recommended next sprint.
