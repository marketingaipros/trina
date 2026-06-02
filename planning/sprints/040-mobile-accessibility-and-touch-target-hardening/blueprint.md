# Sprint 040 Blueprint - Mobile Accessibility and Touch Target Hardening

## Builder Plan

### Step 1 - Read Required Files

Read:

```text
AGENTS.md
planning/STATE.md
planning/DECISIONS.md
planning/DOMAIN.md
planning/RISKS.md
planning/QUESTIONS.md
docs/VALIDATION.md
planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/requirements.md
planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/blueprint.md
planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/acceptance.md
planning/sprints/039-forward-state-and-next-runtime-priority-selection/requirements.md
planning/sprints/039-forward-state-and-next-runtime-priority-selection/blueprint.md
planning/sprints/039-forward-state-and-next-runtime-priority-selection/acceptance.md
planning/sprints/040-mobile-accessibility-and-touch-target-hardening/requirements.md
planning/sprints/040-mobile-accessibility-and-touch-target-hardening/blueprint.md
planning/sprints/040-mobile-accessibility-and-touch-target-hardening/acceptance.md
```

### Step 2 - Confirm Repo State and Protected Scope

Run:

```bash
git status --branch --short
git diff --name-only
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

Confirm no unexpected runtime, backend, Firebase, package, native, build, release, deployment, evidence, or CEO Briefing files are already in the sprint change set.

### Step 3 - Inspect Approved Runtime Surfaces

Inspect these files before proposing edits:

```text
App.tsx
components/Navigation.tsx
components/Dashboard.tsx
components/VoiceDashboard.tsx
components/TasksView.tsx
components/NotificationsView.tsx
components/CalendarView.tsx
components/FinanceView.tsx
components/KnowledgeBaseView.tsx
```

`App.tsx` is inspect-only unless later explicit operator approval is granted.

### Step 4 - Produce Builder Summary Before Implementation

Summarize:

- Likely issue set, if any.
- Exact runtime files that would need changes.
- Whether a no-op outcome appears acceptable.
- Validation plan.
- Any browser, keyboard, focus, or permission blockers.
- Confirmation that CEO Briefing and protected files remain untouched.

Stop for operator approval before editing runtime code.

### Step 5 - Apply Only Approved Small Fixes

If implementation is approved and concrete issues are found, keep changes inside:

```text
components/Navigation.tsx
components/Dashboard.tsx
components/VoiceDashboard.tsx
components/TasksView.tsx
components/NotificationsView.tsx
components/CalendarView.tsx
components/FinanceView.tsx
components/KnowledgeBaseView.tsx
```

Possible fix categories:

- Add or correct accessible names, labels, or titles.
- Increase or preserve touch target usability for existing controls.
- Improve keyboard/focus visibility or logical focus behavior.
- Prevent mobile overflow or fixed-bottom-nav overlap.
- Keep task controls visible and usable on touch devices.
- Keep notification states readable on mobile.

Do not add features, dependencies, architecture, backend behavior, or new screens.

### Step 6 - Validate and Record Results

Required commands after any approved implementation:

```bash
npm run lint
npm run build
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git status --branch --short
```

Manual/browser validation should cover mobile viewport around `390x844` and the acceptance criteria in `acceptance.md` where practical.

Record what was live-tested, what was verified by code inspection only, and what was blocked.
