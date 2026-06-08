# Sprint 068 Blueprint - Customer Return-to-Use Blocker Fixes

## Builder Workflow

### Step 1 - Read Before Changing

Read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/068-customer-return-to-use-blocker-fixes/requirements.md`
- `planning/sprints/068-customer-return-to-use-blocker-fixes/blueprint.md`
- `planning/sprints/068-customer-return-to-use-blocker-fixes/acceptance.md`

Then summarize the implementation plan before making changes.

Do not implement until owner approves the summary.

### Step 2 - Establish Current Repo State

Run:

```bash
git status --branch --short
```

Confirm:

- Sprint 067 is pushed.
- Sprint 064 untracked files remain untouched.
- Working tree status is understood before changes.

### Step 3 - Prove Official URL and Deployed Version

Check deployed customer URLs:

- `https://barbie-92edc.web.app/`
- `https://barbie-92edc.firebaseapp.com/`

Record:

- HTTP status.
- Deployed JS/CSS asset names.
- Local `dist` JS/CSS asset names.
- Whether deployed matches local.

If mismatch remains, propose one of these options before deploy:

1. Deploy current local build to Firebase Hosting.
2. Keep current deployed app if owner approves it despite hash mismatch.
3. Hold release because deployed/current version cannot be proven.

Do not deploy without explicit approval.

### Step 4 - Validate Access/Login Posture

Check current deployed login/access behavior.

Record:

- Whether anonymous auth is used.
- Whether client can access without credentials.
- Any visible login requirements.
- Whether owner approves this path for limited return-to-use.

If owner approval is not available, keep status HOLD.

### Step 5 - Re-run Core Customer Workflow Smoke

Use the owner-approved customer URL.

Validate:

1. App loads.
2. Typed question reaches backend/model.
3. Non-mocked answer appears.
4. Reminder creation works.
5. In-app due reminder appears.
6. Dismiss and/or snooze behavior works if available.

Record evidence in `docs/VALIDATION.md` and Sprint 068 acceptance notes.

### Step 6 - Resolve Reminder Notification Expectation

Check browser notification permission and native/browser push behavior.

If push cannot be proven, ask owner to approve one of these positions:

- Return-to-use is allowed with in-app due reminders only.
- Return-to-use is blocked until browser/native push works.

Record the decision or unresolved question.

### Step 7 - Resolve Voice Expectation

Test mic/voice path where possible.

If mic permission is denied, document:

- Browser.
- Permission state.
- Whether permission can be reset locally.
- Whether voice should be included in return-to-use or marked not ready.

Do not block typed question/reminder return-to-use on voice unless owner requires voice for go-live.

### Step 8 - Add or Confirm Feedback Path

Preferred minimal options:

- Visible in-app feedback link/button/instruction, if small runtime change is approved.
- Owner-approved external path such as email/text form, if no code change is desired.

Record exact client instruction.

Do not build a full feedback system.

### Step 9 - Record First Tester and Owner Approval

Record:

- First tester name or role.
- Go-live approver name or role.
- Approval status.
- Date.

If owner approval is missing, final recommendation must remain HOLD.

### Step 10 - Closeout

Update:

- `planning/STATE.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- Sprint 068 files as needed

Run required validation:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

If runtime/source changes were approved, also run relevant build/smoke checks and document them.

## Expected File Touches

Likely docs/planning files:

- `planning/STATE.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- Sprint 068 files

Possible runtime/source files only if explicitly approved after summary:

- Minimal feedback path files, if an in-app feedback link is chosen.
- Deployment/build files only if needed and approved for deployed version mismatch.

## Do Not Touch

- Sprint 064 untracked files.
- FlutterFlow files.
- Native build files.
- Credentials.
- CEO Briefing files.
- Broad runtime/source unrelated to blockers.
