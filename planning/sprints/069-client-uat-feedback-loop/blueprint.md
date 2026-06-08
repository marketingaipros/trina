# Sprint 069 Blueprint - Client UAT Feedback Loop

## Build Type

Docs/planning only.

Do not change runtime/source files during this sprint unless the owner creates a separate approved sprint or explicitly changes scope.

## Step 1 - Inspect Current Repo State

Run:

```bash
git status --branch --short
```

Confirm:

- Sprint 068 is committed and pushed.
- Sprint 064 files remain untracked.
- No unexpected runtime/source changes are present.

## Step 2 - Update Planning State

Update `planning/STATE.md` to show Sprint 069 as active and the current app as approved for limited client return-to-use.

Include the live URL:

```text
https://barbie-92edc.web.app/
```

## Step 3 - Update Risks

Update `planning/RISKS.md` with risks around:

- voice expectation
- app talk-back expectation
- push notification expectation
- unstructured feedback
- accidental staging of Sprint 064 files

## Step 4 - Update Questions

Update `planning/QUESTIONS.md` with the UAT questions:

- first tester
- device/browser
- typed-only acceptance
- talk-back need
- push need
- feedback format
- final go/no-go approver

## Step 5 - Update Validation

Update `docs/VALIDATION.md` with Sprint 069 UAT validation:

- approved URL
- tested flows
- known follow-ups
- feedback format
- UAT closeout evidence

## Step 6 - Create Sprint Folder

Create:

```text
planning/sprints/069-client-uat-feedback-loop/
```

with:

- `requirements.md`
- `blueprint.md`
- `acceptance.md`
- `handoff-prompt.md`

## Step 7 - Validate Docs-Only Work

Run:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
git status --branch --short
```

## Protected Files

Do not edit:

- runtime/source files
- Firebase settings
- Firebase Functions
- Firestore rules
- FlutterFlow files
- native build files
- credentials
- CEO Briefing files
- `docs/API.md`
- `docs/ARCHITECTURE.md`
- Sprint 064 untracked files
