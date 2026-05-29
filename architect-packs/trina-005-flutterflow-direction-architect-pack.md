# Architect Pack — Trina FlutterFlow Mobile Direction

**Project:** Trina / Personal Assistant Mobile App  
**Sprint:** 005 — Local Repo Baseline + FlutterFlow Direction Alignment  
**Date:** 2026-05-29  
**Architect Layer:** ChatGPT  
**Builder Layer:** Codex, after reading this pack  

---

## 0. Direct Answers to the Uploaded Prompt

### 1. Can this agent directly build or generate the app inside FlutterFlow?

No. The Architect Layer cannot directly build inside FlutterFlow from this chat. FlutterFlow is the frontend build tool. A human operator or FlutterFlow builder must create the screens and connect backend actions inside FlutterFlow.

### 2. Is this agent mainly responsible for launching the structure, folder organization, files, prompts, and build instructions?

Yes. For this project, this agent acts as the Architect Layer. It defines the plan, folder structure, app map, API handoff, data model, QA criteria, and Builder prompts.

### 3. Should the app-building instructions be given directly here, or should this agent create the structure and then hand the build prompt to FlutterFlow or another builder?

Use this agent to create the structure, sprint files, FlutterFlow build brief, Hermes handoff, and QA plan. Then give the FlutterFlow build brief to FlutterFlow or a FlutterFlow builder. Do not ask Codex to build the FlutterFlow frontend first.

---

## 1. Architecture Decision

### Decision

The project direction is now:

- FlutterFlow is the client-facing mobile frontend.
- Hermes is the backend AI brain.
- AI Hub Orchestrator routes requests and workflows.
- Google Drive organizes project files and deliverables.
- Codex remains useful for repo audits, planning docs, API helper code, backend glue, and validation, but it is not the first frontend builder.
- The existing local Trina web app remains a source/reference app, not automatically the final client mobile app.

### Reason

The client-facing app needs to feel like a polished phone app, not a browser dashboard. FlutterFlow is a better first-phase tool for polished mobile UI and quick theme variations.

### Impact

The next sprint must not jump into more React/Vite frontend work until the local repo baseline is documented and the FlutterFlow path is reflected in planning files.

---

## 2. Files This Architect Pack Should Create or Update

Codex should apply this pack by creating or updating these files:

```text
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
planning/FILE_INVENTORY.md
docs/ARCHITECTURE.md
docs/API.md
docs/DATA_MODEL.md
docs/VALIDATION.md
planning/sprints/005-local-repo-baseline-flutterflow-direction/requirements.md
planning/sprints/005-local-repo-baseline-flutterflow-direction/blueprint.md
planning/sprints/005-local-repo-baseline-flutterflow-direction/acceptance.md
planning/sprints/005-local-repo-baseline-flutterflow-direction/handoff-prompt.md
```

Codex must not overwrite useful existing content. It should merge this direction into existing files.

---

## 3. planning/STATE.md Update

```markdown
# Project State

## Current Status

The local Trina app exists at:

`/Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice`

The app currently appears to include:

- Vite / React frontend source
- Firebase configuration and functions
- Capacitor Android / iOS folders
- Existing 120x planning files
- Existing architect packs
- Git remote connected to `https://github.com/marketingaipros/trina.git`

A new product direction has been added:

The client-facing mobile version should be built frontend-first in FlutterFlow, with Hermes as the backend AI brain and AI Hub Orchestrator as the routing layer.

## Active Sprint

`planning/sprints/005-local-repo-baseline-flutterflow-direction/`

## Recently Completed

- Local repo path identified.
- Git remote identified.
- 120x planning files appear to exist locally but need baseline review.
- FlutterFlow mobile-first direction provided by owner.

## Next Actions

1. Audit local repo state without modifying files.
2. Confirm tracked vs untracked planning, docs, architect packs, and source files.
3. Document FlutterFlow-first decision in `planning/DECISIONS.md`.
4. Update architecture docs to distinguish current local React/Firebase app from planned FlutterFlow mobile frontend.
5. Prepare FlutterFlow build brief and Hermes backend request schema.
6. Do not build new app features until baseline and direction are recorded.

## Blockers

- Need confirmation of current sprint folders and contents.
- Need confirmation of whether GitHub is behind, incomplete, or divergent from local.
- Need confirmation of whether existing local Trina app should remain reference-only, be maintained as admin/internal web app, or be retired after FlutterFlow MVP.
```

---

## 4. planning/DECISIONS.md Update

```markdown
# Decisions

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-05-29 | Local Trina folder is the working source for audit. | It contains the live app files and 120x planning structure. | Do not recreate folders or rerun launcher before audit. |
| 2026-05-29 | Client-facing mobile frontend should be built first in FlutterFlow. | Clients care about polished phone-app feel and visual design. | Codex should not be used as the first frontend builder for the client app. |
| 2026-05-29 | Hermes is the backend AI brain. | The client should experience a clean app while backend intelligence stays internal. | FlutterFlow sends structured requests to Hermes/API layer. |
| 2026-05-29 | AI Hub Orchestrator is the routing layer. | Requests may need to route to different agents/workflows. | API design must include request type, status, approval, workflow routing, and task metadata. |
| 2026-05-29 | Internal tools must not be exposed to clients. | Clients should not see Hermes, Claude, Gemini, Google AI Studio, or internal AI tooling. | UI copy and architecture must hide internal implementation details. |
| 2026-05-29 | One reusable FlutterFlow template should support three theme variants. | The product will serve multiple clients with different brand looks. | Theme variables and screen structure must be reusable. |
```

---

## 5. planning/RISKS.md Update

```markdown
# Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| Local repo and GitHub are not aligned. | High | High | Audit before commit/push. Do not overwrite or delete. | Open |
| Existing React/Vite app may be confused with planned FlutterFlow app. | High | Medium | Document that FlutterFlow is the client-facing mobile frontend and React app is current/reference/local implementation. | Open |
| FlutterFlow may limit complex backend AI workflows. | Medium | Medium | Keep FlutterFlow frontend simple and send structured requests to Hermes/API. | Open |
| Client theme variations may create duplicate app logic. | Medium | Medium | Use one reusable template with theme variables. | Open |
| Internal AI tools could leak into client-facing UX. | Medium | High | Keep internal tool names out of screens, labels, and client docs. | Open |
| File upload, voice note, and deliverable links may need secure storage rules. | Medium | High | Define storage/auth model before production use. | Open |
| V1 could grow too large. | High | Medium | Keep V1 frontend-first with mock data and backend placeholders. | Open |
```

---

## 6. planning/QUESTIONS.md Update

```markdown
# Open Questions

| Question | Owner | Needed By | Status | Answer / Notes |
|---|---|---|---|---|
| Should the existing React/Vite Trina app become an internal admin/reference app after FlutterFlow starts? | Owner / Architect | Before Sprint 006 | Open | Do not decide silently. |
| Will FlutterFlow use Firebase directly, a Hermes API endpoint, or both? | Architect / Builder | Before backend integration | Open | Default: FlutterFlow posts structured requests to a backend API placeholder first. |
| Where will uploaded files and screenshots live: Firebase Storage, Google Drive, or both? | Architect / Owner | Before upload implementation | Open | Default: Google Drive for project organization, storage method TBD for app runtime. |
| Is authentication required in V1 or only a login placeholder? | Owner | Before FlutterFlow production build | Open | Current MVP says login placeholder. |
| Which client theme should be built first: Barbie/Ken, Blue Skies, or Neutral Premium? | Owner | Before FlutterFlow visual build | Open | Default recommendation: build Neutral Premium structure first, then reskin Client A and B. |
```

---

## 7. docs/ARCHITECTURE.md Update

```markdown
# Architecture

## Current Local App

The current local project appears to be a Vite / React app with Firebase services and Capacitor mobile folders.

This local app should be audited and preserved before new feature work.

## Planned Client Mobile Architecture

The planned client-facing app architecture is:

```text
FlutterFlow Mobile App
        ↓ structured request
Hermes Backend AI Brain
        ↓ route / classify / process
AI Hub Orchestrator
        ↓ task workflows / agents / storage actions
Google Drive / File Storage / Deliverables
        ↓ status and result updates
FlutterFlow Mobile App
```

## Responsibility Split

### FlutterFlow

- Client-facing mobile UI
- Screen navigation
- Theme variables
- Request forms
- Task tracker views
- Deliverables library views
- Profile/preferences UI
- API calls to backend placeholders

### Hermes

- Receives structured requests
- Classifies intent
- Handles or routes task processing
- Generates or organizes outputs
- Updates task status and approval state

### AI Hub Orchestrator

- Routes requests to the correct agent or workflow
- Tracks workflow ownership
- Coordinates QA and next action

### Google Drive

- Stores project deliverables, client folders, source materials, and handoff assets
- Organizes files outside the client-facing app

### Codex

- Audits local repo state
- Applies Architect Packs
- Maintains planning and documentation files
- Builds helper scripts or backend glue only after approved sprint plans

## Client-Facing Rule

Do not expose Hermes, Claude, Gemini, Google AI Studio, Codex, or internal orchestration details in the client UI.
```

---

## 8. docs/API.md Update

```markdown
# API

## Purpose

Define the structured request object FlutterFlow will send to Hermes or the backend API placeholder.

## Request Object

```json
{
  "client_id": "client_a",
  "client_name": "Client A",
  "app_theme": "barbie_ken_inspired",
  "request_type": "Personal task",
  "request_title": "Plan my week",
  "request_text": "Help me organize my priorities for this week.",
  "voice_note_url": null,
  "uploaded_file_url": null,
  "priority": "Normal",
  "due_date": "2026-06-05",
  "output_format": "Task list",
  "task_status": "New",
  "assigned_agent_or_workflow": "TBD",
  "timestamp": "2026-05-29T00:00:00Z",
  "notes": "Submitted from mobile app.",
  "approval_status": "Not Required"
}
```

## Request Categories

- Personal task
- Scheduling help
- Business task
- Content request
- Sales request
- Research request
- File organization
- Workflow request
- Reminder
- Other

## Task Status Options

- New
- Received
- In Progress
- Needs Client Info
- Ready for Review
- Revision Requested
- Approved
- Completed
- Archived

## Approval Status Options

- Not Required
- Waiting for Client
- Approved
- Changes Requested

## V1 API Boundary

V1 may use mock data and placeholder API actions. Full Hermes production integration should wait until the FlutterFlow UI and request schema are approved.
```

---

## 9. docs/DATA_MODEL.md Update

```markdown
# Data Model

## Collections / Tables

### users

- user_id
- client_id
- name
- email
- phone
- role
- profile_photo_url
- notification_preferences
- created_at
- updated_at

### clients

- client_id
- client_name
- app_name
- app_theme
- status
- primary_contact_user_id
- drive_folder_url
- created_at
- updated_at

### requests

- request_id
- client_id
- user_id
- request_type
- request_title
- request_text
- voice_note_url
- uploaded_file_url
- priority
- due_date
- output_format
- task_status
- approval_status
- assigned_agent_or_workflow
- notes
- created_at
- updated_at

### tasks

- task_id
- request_id
- client_id
- title
- description
- status
- priority
- due_date
- assigned_to
- source_request_id
- created_at
- updated_at

### files

- file_id
- client_id
- request_id
- file_name
- file_type
- file_url
- storage_location
- uploaded_by
- uploaded_at
- notes

### deliverables

- deliverable_id
- client_id
- request_id
- task_id
- title
- description
- file_url
- status
- approval_status
- version
- created_at
- updated_at

### notifications

- notification_id
- client_id
- user_id
- title
- message
- type
- read_status
- related_task_id
- related_request_id
- created_at

### themes

- theme_id
- client_id
- theme_name
- app_name
- primary_color
- secondary_color
- background_color
- accent_color
- card_style
- button_style
- icon_style
- typography_notes
- created_at
- updated_at

### messages

- message_id
- client_id
- request_id
- sender_type
- sender_id
- message_text
- attachment_url
- created_at

### approvals

- approval_id
- client_id
- deliverable_id
- request_id
- status
- requested_at
- responded_at
- response_notes

### settings

- setting_id
- client_id
- user_id
- setting_key
- setting_value
- updated_at
```

---

## 10. docs/VALIDATION.md Update

```markdown
# Validation Plan

## Sprint 005 Validation

- Confirm local repo can be audited safely.
- Confirm Git status and remote without changing files.
- Confirm 120x planning structure exists.
- Confirm current app stack from package files.
- Confirm FlutterFlow direction is documented in decisions and architecture.
- Confirm no secrets are printed from `.env.local`.
- Confirm no internal AI tools are exposed in client-facing app plan.

## FlutterFlow MVP QA Checklist

- Mobile layout works on common phone sizes.
- Bottom navigation includes Home, Ask, Tasks, Files, Profile.
- Required screens exist.
- Request form captures required schema fields.
- Task statuses match approved status options.
- Approval statuses match approved status options.
- Theme variables are reusable.
- Client A, B, and C theme variations can be created without duplicating app logic.
- File upload placeholder exists.
- Voice/text input placeholder exists.
- Backend API placeholder exists.
- Client does not see Hermes, Claude, Gemini, Google AI Studio, Codex, or internal agent names.
- Visual polish is acceptable for client review.
- Accessibility basics are checked: contrast, touch target size, readable labels.
```

---

# Sprint Files

## planning/sprints/005-local-repo-baseline-flutterflow-direction/requirements.md

```markdown
# Sprint 005 Requirements — Local Repo Baseline + FlutterFlow Direction

## Goal

Document the current local Trina repo state and update the project direction so the client-facing mobile app is built frontend-first in FlutterFlow, with Hermes as the backend AI brain.

## Business Objective

Create a polished mobile-first Personal Assistant app experience for clients while preserving the existing local Trina work and avoiding accidental overwrite, duplicated structure, or premature code changes.

## Users

- Client mobile app user
- Internal AI Hub operator
- FlutterFlow builder
- Hermes backend builder
- Codex builder for repo/docs/API support

## In Scope

- Audit current local repo state.
- Confirm Git remote and tracked/untracked baseline.
- Preserve existing app files.
- Document FlutterFlow-first decision.
- Document Hermes request schema.
- Document reusable theme system.
- Create/update Sprint 005 planning files.
- Create/update architecture, API, data model, and validation docs.

## Out of Scope

- Building new React app features.
- Building screens inside FlutterFlow from Codex.
- Deploying to app stores.
- Full Hermes production integration.
- Payment system.
- Advanced automation.
- Full calendar sync.
- Complex multi-user permissions.

## Core Product Direction

FlutterFlow is the face. Hermes is the brain. AI Hub Orchestrator is the router. Google Drive is the storage and deliverable organization layer.

## Required FlutterFlow Screens

- Welcome Screen
- Login Screen
- Onboarding Screen
- Home Dashboard
- Ask My PA Screen
- Request Type Menu
- Request Detail Form
- Voice or Text Input Screen
- Upload File Screen
- Task Tracker
- Task Detail Page
- Files / Deliverables Library
- Notifications Screen
- Profile / Preferences Screen
- Admin / Internal Settings Screen

## Bottom Navigation

- Home
- Ask
- Tasks
- Files
- Profile
```

---

## planning/sprints/005-local-repo-baseline-flutterflow-direction/blueprint.md

```markdown
# Sprint 005 Blueprint — Local Repo Baseline + FlutterFlow Direction

## Objective

Update the project documentation and sprint structure so the Builder knows the correct source of truth and the correct frontend strategy.

## Files to Inspect

- `AGENTS.md`
- `CODEX.md`
- `README.md`
- `package.json`
- `.gitignore`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/DATA_MODEL.md`
- `docs/VALIDATION.md`
- `architect-packs/`
- `planning/sprints/`

## Safe Commands

```bash
git status --branch --short
git remote -v
git branch --show-current
find planning -maxdepth 3 -type f | sort
find docs -maxdepth 2 -type f | sort
find architect-packs -maxdepth 1 -type f | sort
cat package.json
```

Do not print `.env.local` contents.

## Files to Create or Update

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
- `planning/sprints/005-local-repo-baseline-flutterflow-direction/handoff-prompt.md`

## Implementation Plan

1. Read current planning and docs.
2. Record the repo baseline without changing app code.
3. Merge this FlutterFlow-first direction into decisions and architecture.
4. Add Hermes API request schema to `docs/API.md`.
5. Add data collections to `docs/DATA_MODEL.md`.
6. Add QA checks to `docs/VALIDATION.md`.
7. Update `planning/STATE.md` with next action.
8. Report changed files and any uncertainty.

## Build Rule

No production app code should be changed in this sprint.
```

---

## planning/sprints/005-local-repo-baseline-flutterflow-direction/acceptance.md

```markdown
# Sprint 005 Acceptance Criteria

Sprint 005 is complete when:

- Local repo baseline is documented.
- Git remote is documented.
- Existing app stack is documented.
- FlutterFlow-first client mobile decision is recorded in `planning/DECISIONS.md`.
- Hermes backend request schema exists in `docs/API.md`.
- Planned data collections exist in `docs/DATA_MODEL.md`.
- FlutterFlow QA criteria exist in `docs/VALIDATION.md`.
- Existing React/Vite app is clearly distinguished from planned FlutterFlow frontend.
- No app code is changed.
- No files are deleted, moved, renamed, staged, committed, or pushed.
- `.env.local` is not printed or exposed.
- `planning/STATE.md` clearly identifies the next action.
```

---

## planning/sprints/005-local-repo-baseline-flutterflow-direction/handoff-prompt.md

```markdown
# Sprint 005 Builder Handoff Prompt

You are the Builder Layer for the Trina local app project.

Working directory:

`/Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice`

This sprint is documentation and baseline alignment only.

Do not write application code.
Do not delete files.
Do not move files.
Do not rename files.
Do not overwrite useful existing content.
Do not run `git add`.
Do not run `git commit`.
Do not run `git push`.
Do not print `.env.local` or secrets.

Read first:

1. `AGENTS.md`
2. `CODEX.md`
3. `planning/STATE.md`
4. `planning/DECISIONS.md`
5. `planning/RISKS.md`
6. `planning/QUESTIONS.md`
7. `docs/ARCHITECTURE.md`
8. `docs/API.md`
9. `docs/DATA_MODEL.md`
10. `docs/VALIDATION.md`
11. `planning/sprints/005-local-repo-baseline-flutterflow-direction/requirements.md`
12. `planning/sprints/005-local-repo-baseline-flutterflow-direction/blueprint.md`
13. `planning/sprints/005-local-repo-baseline-flutterflow-direction/acceptance.md`

Before making changes, summarize:

1. What this sprint is supposed to accomplish.
2. Which files you expect to modify.
3. What validation checks you will run.
4. Any blockers or ambiguities.

Wait for approval before modifying files.

After approval, apply the Sprint 005 documentation updates only.

At closeout, report:

1. Files changed.
2. Files intentionally not changed.
3. Validation run.
4. Whether acceptance criteria are met.
5. Recommended next sprint.
```

---

# Project Launch Package

## Task Type

Mobile-first client app launch package and architecture alignment.

## Assigned Agent

Architect Layer now. Codex Builder for repo documentation alignment. FlutterFlow Builder for frontend build.

## Project Summary

Personal Assistant Mobile App is a polished mobile app that lets clients submit assistant requests, upload files, track tasks, review deliverables, approve work, and manage preferences. The business goal is to provide a premium client-facing AI assistant experience while hiding internal AI tools and workflows.

## Drive Destination

```text
AI Hub / Client Projects / Personal Assistant Mobile App /
```

## Recommended Folder Structure

```text
AI Hub / Client Projects / Personal Assistant Mobile App /
├── 00. Intake – Drop Files Here/
├── 01. Source Materials/
├── 02. Strategy/
├── 03. Agent Builder/
├── 04. FlutterFlow Frontend/
├── 05. Hermes Backend/
├── 06. Client Themes/
│   ├── Client A - Barbie Ken Theme/
│   ├── Client B - Blue Skies Theme/
│   └── Client C - Neutral Premium Theme/
├── 07. API and Integrations/
├── 08. QA/
├── 09. Client Review/
├── 10. Final Handoffs/
└── 11. Archive/
```

## File Naming Rules

Pattern:

```text
[Project Name] - [Asset Type] - [Client or Theme] - [Version]
```

Examples:

```text
Personal Assistant Mobile App - FlutterFlow Build Brief - Client A - v1
Personal Assistant Mobile App - Hermes API Handoff - Global - v1
Dream PA - UI Theme Guide - Client A - v1
Sky PA - UI Theme Guide - Client B - v1
```

## Status Labels

- Not Started
- In Progress
- Completed Draft
- Approved with Edits
- Approved
- Revision Required
- Blocked
- Ready for Build
- Ready for QA
- Ready for Client Review
- Ready for Deployment
- Archived

## Build Sequence

1. Project folder setup
2. Source materials intake
3. Visual theme guide
4. FlutterFlow screen map
5. FlutterFlow frontend prototype
6. Mock data setup
7. Request form structure
8. Task tracker
9. Hermes API placeholder
10. Client review
11. QA
12. Hermes backend integration
13. Reskin for other clients

## Screen Map

- Welcome Screen
- Login Screen
- Onboarding Screen
- Home Dashboard
- Ask My PA Screen
- Request Type Menu
- Request Detail Form
- Voice or Text Input Screen
- Upload File Screen
- Task Tracker
- Task Detail Page
- Files / Deliverables Library
- Notifications Screen
- Profile / Preferences Screen
- Admin / Internal Settings Screen

## Bottom Navigation

- Home
- Ask
- Tasks
- Files
- Profile

## Screen-by-Screen UX

### Welcome Screen

- Purpose: Introduce the assistant app.
- Components: Logo/app name, short promise, start button.
- Actions: Continue to login or onboarding.
- Data captured: None.
- Next: Login or Onboarding.
- Backend: None for V1.

### Login Screen

- Purpose: Entry point for client access.
- Components: Email field, password/magic link placeholder, login button.
- Actions: Login placeholder.
- Data captured: Email.
- Next: Home Dashboard.
- Backend: Auth placeholder in V1.

### Onboarding Screen

- Purpose: Collect basic preferences.
- Components: Name, preferred communication style, notification preference.
- Actions: Save preferences.
- Data captured: Preferences.
- Next: Home Dashboard.
- Backend: settings/users later.

### Home Dashboard

- Purpose: Show the client’s assistant hub.
- Components: Greeting, quick ask button, active task count, recent deliverables, notifications preview.
- Actions: Start request, open task, open file.
- Data captured: None.
- Next: Ask, Tasks, Files.
- Backend: requests/tasks/deliverables.

### Ask My PA Screen

- Purpose: Central request entry.
- Components: Request type cards, text/voice/upload shortcuts.
- Actions: Choose request method.
- Data captured: Request intent.
- Next: Request Type Menu or Voice/Text Input.
- Backend: request draft.

### Request Type Menu

- Purpose: Categorize request.
- Components: Category list.
- Actions: Select request type.
- Data captured: request_type.
- Next: Request Detail Form.
- Backend: requests.

### Request Detail Form

- Purpose: Capture structured request.
- Components: Title, description, priority, due date, output format.
- Actions: Submit request.
- Data captured: request_title, request_text, priority, due_date, output_format.
- Next: Task Detail or confirmation.
- Backend: Hermes request object.

### Voice or Text Input Screen

- Purpose: Let client speak or type.
- Components: Text box, voice note placeholder, submit button.
- Actions: Submit text or voice note.
- Data captured: request_text, voice_note_url later.
- Next: Request Detail or confirmation.
- Backend: storage/API later.

### Upload File Screen

- Purpose: Add screenshots or files.
- Components: Upload placeholder, notes field, attach to request.
- Actions: Upload/attach.
- Data captured: uploaded_file_url later, notes.
- Next: Request Detail Form.
- Backend: file storage later.

### Task Tracker

- Purpose: Show active and completed work.
- Components: Task cards, status chips, filters.
- Actions: Open task.
- Data captured: None.
- Next: Task Detail.
- Backend: tasks/requests.

### Task Detail Page

- Purpose: Show request/task progress.
- Components: Status, request details, messages, deliverables, approval buttons.
- Actions: Approve, request changes, add info.
- Data captured: approval_status, response_notes.
- Next: Task Tracker or Deliverables.
- Backend: tasks/approvals/messages.

### Files / Deliverables Library

- Purpose: Let client view outputs.
- Components: File cards, category filters, status labels.
- Actions: Open file, approve, request revision.
- Data captured: approval actions.
- Next: File detail or task detail.
- Backend: deliverables/files.

### Notifications Screen

- Purpose: Show updates.
- Components: Notification list, read/unread status.
- Actions: Open related task.
- Data captured: read_status.
- Next: Task Detail.
- Backend: notifications.

### Profile / Preferences Screen

- Purpose: Manage client settings.
- Components: Contact info, theme indicator, preferences, notification settings.
- Actions: Update preferences.
- Data captured: settings.
- Next: Home.
- Backend: users/settings.

### Admin / Internal Settings Screen

- Purpose: Internal configuration placeholder.
- Components: Client theme, app mode, API placeholder settings.
- Actions: Internal setup only.
- Data captured: app configuration.
- Next: Admin only.
- Backend: settings/themes.

## Theme System

### Theme 1: Barbie / Ken Inspired

Original pink glam and luxury pop aesthetic. Do not use official Barbie branding, logos, names, marks, or protected assets in the app UI.

Colors:

- Hot pink
- Soft pink
- White
- Cream
- Gold accents

UI:

- Rounded cards
- Glossy buttons
- Soft shadows
- Friendly icons
- Playful premium feel

### Theme 2: Blue Skies Inspired

Colors:

- Sky blue
- Soft white
- Cloud gray
- Light navy
- Sunlight yellow accents

UI:

- Soft gradients
- Clean cards
- Cloud-like spacing
- Relaxed typography
- Light and peaceful feel

### Theme 3: Neutral Premium

Colors:

- Black
- White
- Soft gray
- Navy
- Silver or muted gold accents

UI:

- Clean dashboard
- Premium cards
- Simple buttons
- High-trust layout

## FlutterFlow Build Brief

Build a mobile-first Personal Assistant app using one reusable FlutterFlow template with theme variables. The app should feel like a polished phone app, not a chatbot dashboard. Include all required screens, bottom navigation, mock data, request forms, task tracker, deliverables library, profile/preferences, and backend API placeholders.

MVP boundaries:

- Use mock data first.
- Use login placeholder first.
- Do not expose internal AI tools.
- Do not add payment system.
- Do not add complex permissions.
- Do not build full calendar sync.
- Do not build advanced analytics.
- Keep backend integration as a structured API placeholder until UI is approved.

## Hermes Backend Handoff

Hermes receives structured request objects from FlutterFlow. See `docs/API.md` for schema.

Hermes should classify each request, assign or route workflow, update task status, and return status/result/deliverable updates to the app.

## MVP Features

- Login placeholder
- Home dashboard
- Ask My PA
- Request form
- File upload placeholder
- Task tracker
- Task detail
- Deliverables library
- Profile/preferences
- Theme-ready UI
- Mock data
- Backend API placeholder for Hermes

## Delayed Features

- Full payment system
- Advanced automation
- App store deployment
- Complex role permissions
- Multi-language support
- Full calendar sync
- Real-time chat if too complex
- Advanced analytics
- Deep CRM integration

## Agent Ownership

- One20 App Agent: project launch, folder structure, file routing, build package
- Agent Builder: app logic, prompts, workflows, Hermes handoff, QA checklist
- Content Agent: client-facing copy, button labels, onboarding copy, notification text
- FlutterFlow Builder: actual frontend app build
- Hermes Backend: backend AI brain and task processing
- Orchestrator: final routing, QA, and next action

## Recommended Path

Choose C first.

C. Have Agent Builder create a more detailed FlutterFlow prompt first.

Then use A.

A. Give the FlutterFlow build prompt to FlutterFlow or a FlutterFlow builder.

Do not choose D yet. Codex/custom app comes later only if FlutterFlow becomes too limited.

## Next Agent

Codex Builder for Sprint 005 documentation alignment.

## Next Action

Give Codex the Sprint 005 handoff prompt. Codex should summarize the sprint plan and wait for approval before editing files.
