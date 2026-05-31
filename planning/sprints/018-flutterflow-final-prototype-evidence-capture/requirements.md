# Sprint 018 Requirements - FlutterFlow Final Prototype Evidence Capture

## Goal

Capture and document real FlutterFlow final prototype evidence for Trina without modifying runtime app code, generated FlutterFlow code, Firebase, Hermes, backend, package, native, build, or release files.

## Background

Sprint 017 prepared the validation checklist and evidence rules for final prototype capture. Sprint 018 applies that readiness work as an evidence-capture planning checkpoint.

The Architect Pack file for this sprint is named:

```text
architect-packs/trina-018-flutterflow-final-prototype-evidence-capture-architect-pack.md
```

The pack is corrected to the operator-requested Sprint 018 scope: final FlutterFlow prototype evidence capture only.

## In Scope

- Create Sprint 018 planning files.
- Document the final prototype evidence capture boundary.
- Confirm screenshots must be real FlutterFlow evidence.
- Document final prototype screenshot targets and click-path checks.
- Keep CEO Briefing screenshot evidence missing or deferred unless the real file exists.
- Update planning/docs/evidence notes only.

## Out of Scope

- Runtime React/Vite app code.
- FlutterFlow generated code export.
- Firebase config, Functions, rules, deploy, or secrets.
- Hermes/API/backend work.
- Package or lockfile changes.
- Native iOS/Android folder changes.
- Build or release files.
- Fake screenshots.
- Placeholder evidence images.
- Production deployment.

## Evidence Rules

Screenshot evidence is complete only when the actual file exists in the repo and came from real FlutterFlow Designer or Preview state.

Do not create placeholder screenshots or renamed substitute images.

Do not mark CEO Briefing evidence complete unless this file exists:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

If the file is absent, CEO Briefing remains missing or deferred.

## Final Prototype Screens To Track

- Dashboard / Home
- Assistant
- Tasks / Priorities
- Memory / Context, if present in the current prototype scope
- CEO Briefing, only if real evidence exists

## Click-Path Checks

Document the real status of these paths from FlutterFlow Designer or Preview:

```text
Dashboard -> Assistant
Dashboard -> Tasks / Priorities
Dashboard -> Memory / Context, if present
Dashboard -> CEO Briefing, only if present
CEO Briefing -> Dashboard, only if present
CEO Briefing -> Ask Trina to Prioritize -> Assistant, only if present
```

Any path that is missing, renamed, or untested must be documented honestly.

## Success Definition

Sprint 018 succeeds as a planning/docs application when the Sprint 018 files exist, planning/docs state reflects the final evidence-capture scope, validation commands pass, protected files remain untouched, and CEO Briefing remains marked missing or deferred unless the real screenshot file exists.
