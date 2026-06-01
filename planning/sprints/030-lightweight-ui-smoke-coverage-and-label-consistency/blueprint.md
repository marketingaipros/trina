# Sprint 030 Blueprint

## Implementation Approach

Keep this sprint narrow.

Start by inspecting the repo to determine whether lightweight UI smoke coverage already has a natural place.

Do not add a heavy test framework unless the repo already includes it or the change is extremely small and justified.

## Step 1 - Inspect Existing Structure

Review:

```text
package.json
App.tsx
components/Navigation.tsx
components/Dashboard.tsx
components/VoiceDashboard.tsx
components/TasksView.tsx
components/NotificationsView.tsx
components/CalendarView.tsx
components/FinanceView.tsx
components/KnowledgeBaseView.tsx
docs/VALIDATION.md
planning/STATE.md
```

Look for:

- existing test scripts
- existing browser/UI smoke tooling
- existing component test setup
- current labels for Knowledge Base / Knowledge / Context
- current Assistant capture path
- current speech transcript capture path

## Step 2 - Choose the Lightest Validation Path

Use the first valid option:

### Option A - Existing UI Test Tooling Exists

If the repo already has a test framework suitable for browser/component smoke checks:

- Add narrow tests for navigation reachability.
- Add narrow tests for typed Assistant capture if practical.
- Avoid brittle visual assertions.
- Do not expand into full E2E coverage.

### Option B - No Suitable Test Tooling Exists

Create or update a lightweight manual smoke checklist in `docs/VALIDATION.md`.

Only add a simple script if it uses existing dependencies and does not alter package config.

### Option C - Minimal DOM/Unit Test Is Already Supported

If unit/component tests already run without adding tooling:

- Add tests that assert visible labels and route/view changes where practical.
- Keep coverage focused on Sprint 030 acceptance only.

## Step 3 - Label Consistency

Search for user-facing occurrences of:

```text
Knowledge Base
Knowledge
Context
Alerts
Notifications
```

Apply these rules:

- Full feature name: `Knowledge Base`
- Compact nav label: `Knowledge`
- Avoid `Context` as user-facing label for this feature.
- Use `Notifications` instead of `Alerts` unless the code has internal identifiers that should not be renamed.

Do not rename internal enums or state keys unless necessary and safe.

Prefer copy-level consistency over risky refactors.

## Step 4 - Assistant Capture Verification

Confirm:

- Dashboard still reaches Assistant / Voice Entry.
- Typed Assistant input can create a task.
- After capture, the app routes to Tasks or otherwise makes the captured task visible.
- Existing local task capture function remains intact.

Do not rewrite capture architecture.

## Step 5 - Speech Capture Verification

Inspect `components/VoiceDashboard.tsx`.

If microphone permission can be granted locally:

- Live-test speech capture.
- Confirm transcript capture path still calls the task capture function.

If permission is denied:

- Do not force workaround.
- Do not rewrite speech capture.
- Document that speech capture path was preserved by inspection and live testing was blocked by browser permission.

## Step 6 - Update Docs/State

Update:

```text
planning/STATE.md
docs/VALIDATION.md
```

Update `planning/DECISIONS.md`, `planning/RISKS.md`, and `planning/QUESTIONS.md` only if the Architect Pack has not already been applied or if implementation reveals new durable facts.

## Expected Runtime Files

Only modify runtime files if implementation actually needs label or smoke support changes.

Likely candidates:

```text
components/Navigation.tsx
components/Dashboard.tsx
components/KnowledgeBaseView.tsx
components/VoiceDashboard.tsx
components/TasksView.tsx
components/NotificationsView.tsx
components/CalendarView.tsx
components/FinanceView.tsx
App.tsx
```

Do not modify all of them by default.

## Expected Docs/Planning Files

```text
docs/VALIDATION.md
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
```

## Validation Commands

Run:

```bash
npm run lint
npm run build
git diff --check
git status --branch --short
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Run any existing test command only if present and appropriate.

## Implementation Guardrails

- No CEO Briefing work.
- No screenshot evidence creation.
- No backend/Firebase/Hermes/package/native/build/release changes.
- No broad refactor.
- No large test dependency additions.
- No staging, commit, or push until completion review is approved.
