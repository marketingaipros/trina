# Sprint 031 Requirements

## Sprint

`031-core-app-polish-and-task-flow-hardening`

## Purpose

Sprint 031 is a narrow runtime polish sprint for the existing Trina app shell. It should improve finished-app confidence only where current app inspection confirms small UI, copy, navigation, empty-state, or task-flow issues.

This planning/docs pass does not approve implementation.

## Scope

After explicit implementation approval, inspect:

- Home / Dashboard
- Assistant / Voice Entry
- Tasks
- Notifications
- Calendar
- Finance
- Knowledge Base

Acceptable implementation changes are limited to small confirmed polish fixes such as clearer labels, empty-state copy, disabled-state messaging, navigation clarity, terminology consistency, task visibility feedback, and obvious accessibility clarity.

## Protected Behavior

- Typed Assistant capture must continue to create tasks and route the user to Tasks.
- Speech capture must remain preserved by live smoke testing when microphone permission is available, or by code inspection when permission is blocked.
- Sprint 023 app-completion reset remains the protected baseline.
- Sprint 030 smoke-validation baseline remains protected.

## Out of Scope

- CEO Briefing build, rebuild, screenshot evidence, validation, or completion.
- App shell redesign.
- New major features.
- Architecture changes.
- Storage architecture changes.
- Dependency, package, or package-lock changes.
- Backend, Firebase, Hermes, native, build, release, deployment, auth, database, live AI, or FlutterFlow export work.

Do not create:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```
