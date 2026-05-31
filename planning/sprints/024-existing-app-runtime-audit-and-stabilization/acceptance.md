# Sprint 024 Acceptance Criteria

Sprint 024 is complete only when all applicable criteria are satisfied.

## Planning / Process

- Sprint 024 planning folder exists.
- `requirements.md`, `blueprint.md`, `acceptance.md`, and `handoff-prompt.md` exist.
- `planning/STATE.md` identifies Sprint 024 as active during implementation.
- CEO Briefing is documented as deferred and non-blocking.
- Codex performs the pre-implementation summary checkpoint before runtime edits.

## Runtime Stabilization

- Dashboard loads without runtime errors.
- Primary non-CEO Dashboard actions route or respond intentionally.
- Navigation does not point users into avoidable broken non-CEO paths.
- Assistant and/or voice entry works or shows a clear intentional placeholder.
- Tasks screen renders without runtime errors.
- Finance screen renders or shows a clear intentional placeholder.
- Calendar screen renders or shows a clear intentional placeholder.
- Notifications/reminders screen renders without runtime errors.
- Reminder notification helper handles unavailable, denied, default, or blocked notification states without crashing.
- Settings-equivalent path, if present, renders or is clearly handled.

## Scope Control

- CEO Briefing is not rebuilt.
- `references/flutterflow/sprint-009/ceo-briefing.png` is not created.
- FlutterFlow generated code is not exported.
- Firebase/backend/Hermes work is not added.
- Native iOS/Android files are not changed.
- Package/dependency files are not changed unless explicitly approved.
- Release/deployment/build artifacts are not created.

## Validation

- `npm run lint` is run or failure is documented.
- `npm run build` is run or failure is documented.
- `git diff --check` passes or any failure is documented.
- `git status --branch --short` is reported.
- Manual browser smoke test results are reported.
- Any incomplete or uncertain acceptance item is clearly listed.
