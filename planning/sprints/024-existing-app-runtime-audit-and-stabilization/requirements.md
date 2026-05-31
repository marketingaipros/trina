# Sprint 024 Requirements - Existing App Runtime Audit and Stabilization

## Goal

Stabilize the existing visible non-CEO app shell so Trina can move forward after the Sprint 023 reset.

The app should stop being blocked by CEO Briefing and should become usable around the current visible paths.

## User Story

As the app owner, I need the current app shell to work well enough to continue app completion, so I can test real navigation paths and decide the next focused feature sprint without being pulled back into the deferred CEO Briefing screen.

## In Scope

- Audit current app-level navigation.
- Stabilize Dashboard navigation.
- Stabilize Assistant and/or voice entry path.
- Stabilize Tasks path.
- Stabilize Finance path.
- Stabilize Calendar path.
- Stabilize Notifications/reminders path.
- Stabilize Settings-equivalent path if present.
- Add clear intentional placeholder handling for visible paths that are not meant to be complete in this sprint.
- Make small runtime fixes needed to avoid crashes, dead buttons, broken view identifiers, or misleading UI states.
- Update planning/docs after implementation as needed.

## Out of Scope

- CEO Briefing screen creation, rebuild, routing, screenshot, or validation.
- FlutterFlow Designer work.
- FlutterFlow generated code export.
- Firebase work.
- Backend work.
- Hermes work.
- Package/dependency changes unless explicitly approved.
- Native iOS/Android changes.
- Release, deployment, or production build work.
- Full redesign of Dashboard or app shell.
- New product modules.
- Real data integration.
- Live AI integration.
- Auth or permissions work.

## Business Rules

- CEO Briefing is deferred and non-blocking.
- Existing non-CEO paths are the priority.
- The Builder must inspect before editing.
- The Builder must report any ambiguity before implementation.
- Visible placeholders are acceptable when clear and intentional.
- No fake pass evidence may be created.
- No screenshot evidence is required for Sprint 024.

## Expected Result

After Sprint 024, the app owner should be able to open the app and move through the visible non-CEO paths without hitting avoidable broken states.
