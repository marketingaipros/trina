# Sprint 006 Blueprint - FlutterFlow Mobile App Blueprint

## Objective

Create the planning and documentation needed to safely start a FlutterFlow mobile implementation sprint later.

Do not implement the app in Sprint 006.

## Files To Review First

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `planning/FILE_INVENTORY.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/DATA_MODEL.md`
- `docs/VALIDATION.md`
- `planning/sprints/005-local-repo-baseline-flutterflow-direction/requirements.md`
- `planning/sprints/005-local-repo-baseline-flutterflow-direction/blueprint.md`
- `planning/sprints/005-local-repo-baseline-flutterflow-direction/acceptance.md`

## Files To Create

- `planning/sprints/006-flutterflow-mobile-app-blueprint/requirements.md`
- `planning/sprints/006-flutterflow-mobile-app-blueprint/blueprint.md`
- `planning/sprints/006-flutterflow-mobile-app-blueprint/acceptance.md`
- `planning/sprints/006-flutterflow-mobile-app-blueprint/handoff-prompt.md`

## Files To Update

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/DATA_MODEL.md`
- `docs/VALIDATION.md`

Update only where needed to reflect Sprint 006.

## Implementation Plan

1. Confirm current repo state.
2. Read Sprint 005 docs and current durable docs.
3. Create Sprint 006 folder.
4. Create Sprint 006 requirements.
5. Create Sprint 006 blueprint.
6. Create Sprint 006 acceptance criteria.
7. Create Sprint 006 handoff prompt.
8. Update durable planning and docs as needed.
9. Run docs-only validation.
10. Report results.

## Mobile Screen Blueprint

### 1. Splash / Loading

Purpose:

- Show brand loading.
- Check whether user has session/demo access.
- Route to Welcome, Sign In, or Home.

Data:

- Local/session state only.
- No AI call.

### 2. Welcome / Intro

Purpose:

- Introduce Trina.
- Explain the assistant value.
- Provide CTA to sign in or continue demo.

Data:

- Static copy and theme assets.

### 3. Sign In / Demo Access

Purpose:

- Allow user to sign in or enter controlled demo mode.

Data:

- Firebase Auth if approved.
- Demo state if auth is deferred.

### 4. Home Dashboard

Purpose:

- Main landing screen after login/demo entry.

Recommended sections:

- Greeting.
- Continue conversation.
- Quick actions.
- Recent activity.
- Tasks/reminders preview.
- Memory/profile preview.

### 5. Chat

Purpose:

- Core assistant experience.

Behavior:

- User enters message.
- FlutterFlow sends request to Hermes/API or AI Hub Orchestrator.
- Response returns assistant reply, action metadata, and safe memory hints.
- FlutterFlow renders response.
- FlutterFlow does not own reasoning.

### 6. Tasks / Reminders

Purpose:

- Show assistant-created or user-created tasks.
- V1 may be read-only or simple create/edit depending on backend readiness.

### 7. Memory / Profile

Purpose:

- Show safe memory/profile summaries.
- Avoid raw memory internals.

V1 Recommendation:

- Read-only summaries first.
- Editable memory can be later sprint.

### 8. Files / Uploads

Purpose:

- Future area for documents, screenshots, images, and context files.

V1 Recommendation:

- Placeholder route and architecture note only until storage decision is made.

### 9. Settings

Purpose:

- User settings.
- Profile basics.
- Theme/persona choice.
- Logout.
- Privacy controls.

### 10. Error / Offline

Purpose:

- Friendly fallback when API, auth, or network fails.

## Core User Flows

### Flow 1 - First Launch

1. User opens app.
2. Splash loads.
3. If no session, route to Welcome.
4. User chooses sign in or demo.
5. Route to Home Dashboard.

### Flow 2 - Assistant Chat

1. User opens Chat.
2. User enters message.
3. FlutterFlow sends request to Hermes/API.
4. Hermes/API returns reply and safe metadata.
5. FlutterFlow renders response.
6. Any returned action appears in Tasks/Activity where applicable.

### Flow 3 - View Tasks

1. User opens Tasks.
2. App displays task list or placeholder.
3. User can inspect task details if available.

### Flow 4 - View Memory/Profile

1. User opens Memory.
2. App displays safe profile/memory summaries.
3. App avoids raw memory internals.

### Flow 5 - Change Theme

1. User opens Settings.
2. User views current theme/persona.
3. V1 may display theme selection concept.
4. Later sprint may enable persistence.

## Draft API Contract

### Assistant Chat Request

```json
{
  "userId": "string",
  "sessionId": "string",
  "message": "string",
  "clientTheme": "trina-barbie-v1",
  "source": "flutterflow-mobile",
  "metadata": {
    "screen": "chat",
    "locale": "en-US",
    "timezone": "America/Chicago"
  }
}
```

### Assistant Chat Response

```json
{
  "reply": "string",
  "sessionId": "string",
  "actions": [
    {
      "type": "task_created",
      "label": "string",
      "status": "pending"
    }
  ],
  "memoryHints": [
    {
      "category": "preference",
      "label": "string",
      "safeToDisplay": true
    }
  ],
  "error": null
}
```

## Validation Plan

Sprint 006 passes when:

- Sprint 006 folder exists.
- Four sprint files exist.
- Durable docs reflect FlutterFlow mobile blueprint.
- API docs include draft mobile assistant contract.
- Data model docs include mobile entities.
- Validation docs include mobile blueprint checklist.
- No runtime/app code changed.
- No staging, commit, or push occurred unless explicitly approved by the user.

## Boundaries

Do not modify:

- React/Vite app code.
- Firebase config.
- `.env.local`.
- Native app folders.
- Build outputs.
- Generated FlutterFlow exports.
- Deployment config.
- Package files unless explicitly required for docs-only validation. They should not be required.
