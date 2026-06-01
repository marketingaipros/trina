# Sprint 032 Acceptance Criteria

## Required Completion Criteria

Sprint 032 is complete only if all applicable criteria below are satisfied or honestly marked blocked with a reason.

### Automated Validation

- `npm run lint` passes.
- `npm run build` passes or only known existing Vite warnings remain.
- `git diff --check` passes.
- `git status --branch --short` is reported.
- `git diff --name-only` is reported.
- `git diff --cached --name-only` is reported.
- `test ! -f references/flutterflow/sprint-009/ceo-briefing.png` passes.

### Core Browser Smoke

- Dashboard/Home was checked.
- Bottom navigation was checked.
- Assistant / Voice Entry reachability was checked.
- Tasks reachability was checked.
- Notifications reachability was checked.
- Calendar reachability was checked.
- Finance reachability was checked.
- Knowledge Base reachability was checked.
- No blank core screen or broken core route was found, or any issue was documented.

### Task Flow

- Typed Assistant capture to Tasks was tested or inspected.
- Empty Assistant input behavior was tested or inspected.
- Created task visibility in Tasks was tested or inspected.
- Task toggle usability was tested or inspected.
- No task capture logic was rewritten without approval.

### Speech Capture

- Speech capture was live-tested if microphone permission was available.
- If live testing was blocked, the blocker was documented clearly.
- Speech capture code path was preserved.
- No speech capture rewrite occurred without approval.

### Accessibility / Touch

- Sprint 031 accessible labels/titles were checked in practical use or code inspection.
- Icon-only controls were reviewed.
- Calendar date button labeling was reviewed.
- Audio controls were reviewed.
- Form open/close/cancel controls were reviewed.
- Touch/mobile usability was checked if possible.
- Any confirmed usability gaps were listed as Sprint 033 candidates unless explicitly approved for Sprint 032 fixes.

### Protected Scope

- CEO Briefing was not touched.
- `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.
- No FlutterFlow export files were changed.
- No Firebase files were changed.
- No Hermes files were changed.
- No backend/auth/database/live AI files were changed.
- No package/dependency files were changed.
- No native/build/release/deployment files were changed.
