# Sprint 032 Acceptance Criteria

## Required Completion Criteria

Sprint 032 is complete only if all applicable criteria below are satisfied or honestly marked blocked with a reason.

### Automated Validation

- [x] `npm run lint` passes.
- [x] `npm run build` passes or only known existing Vite warnings remain.
- [x] `git diff --check` passes.
- [x] `git status --branch --short` is reported.
- [x] `git diff --name-only` is reported.
- [x] `git diff --cached --name-only` is reported.
- [x] `test ! -f references/flutterflow/sprint-009/ceo-briefing.png` passes.

### Core Browser Smoke

- [x] Dashboard/Home was checked.
- [x] Bottom navigation was checked.
- [x] Assistant / Voice Entry reachability was checked.
- [x] Tasks reachability was checked.
- [x] Notifications reachability was checked.
- [x] Calendar reachability was checked.
- [x] Finance reachability was checked.
- [x] Knowledge Base reachability was checked.
- [x] No blank core screen or broken core route was found, or any issue was documented.

### Task Flow

- [x] Typed Assistant capture to Tasks was tested or inspected.
- [x] Empty Assistant input behavior was tested or inspected.
- [x] Created task visibility in Tasks was tested or inspected.
- [x] Task toggle usability was tested or inspected.
- [x] No task capture logic was rewritten without approval.
- [ ] Task edit/delete usability is satisfied.

Result: task edit/delete controls are missing from the current Tasks UI. `components/TasksView.tsx` renders task toggle, title, priority, and deadline, but no edit/delete controls. Props expose `onAddTask` and `onUpdateTask`; no delete handler appears available. No runtime fix was made.

### Speech Capture

- Speech capture was live-tested if microphone permission was available.
- If live testing was blocked, the blocker was documented clearly.
- Speech capture code path was preserved.
- No speech capture rewrite occurred without approval.

### Accessibility / Touch

- [x] Sprint 031 accessible labels/titles were checked in practical use or code inspection.
- [x] Icon-only controls were reviewed.
- [x] Calendar date button labeling was reviewed.
- [x] Audio controls were reviewed.
- [x] Form open/close/cancel controls were reviewed.
- [x] Touch/mobile usability was checked if possible.
- [x] Any confirmed usability gaps were listed as Sprint 033 candidates unless explicitly approved for Sprint 032 fixes.

Sprint 033 candidate: add explicit accessible task edit/delete controls, add or confirm delete plumbing from parent state, preserve typed Assistant task capture, preserve task toggle behavior, preserve existing task display, and keep CEO Briefing untouched.

### Protected Scope

- [x] CEO Briefing was not touched.
- [x] `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- [x] No FlutterFlow export files were changed.
- [x] No Firebase files were changed.
- [x] No Hermes files were changed.
- [x] No backend/auth/database/live AI files were changed.
- [x] No package/dependency files were changed.
- [x] No native/build/release/deployment files were changed.
