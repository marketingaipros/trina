# Sprint 039 Blueprint - Forward State and Next Runtime Priority Selection

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
planning/sprints/038-core-app-smoke-test-and-forward-runtime-polish/handoff-prompt.md
planning/sprints/039-forward-state-and-next-runtime-priority-selection/requirements.md
planning/sprints/039-forward-state-and-next-runtime-priority-selection/blueprint.md
planning/sprints/039-forward-state-and-next-runtime-priority-selection/acceptance.md
```

### Step 2 - Confirm Repo State

Run:

```bash
git status --branch --short
git diff --name-only
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
```

### Step 3 - Review Candidate Next Runtime Priorities

Review the current state and recent sprint history.

Candidate Sprint 040 directions may include:

1. A focused runtime polish sprint for a specific view.
2. A task/reminder flow hardening sprint.
3. A mobile layout/accessibility hardening sprint.
4. A validation-only checkpoint if no safe runtime target is ready.

The Builder should not invent product scope. It should recommend from evidence already present in the planning files.

### Step 4 - Document Recommendation

Update `planning/STATE.md` with:

- Sprint 039 checkpoint status.
- Clean baseline confirmation.
- Recommended Sprint 040 direction.
- Any blocker or ambiguity.

Update `docs/VALIDATION.md` with:

- Sprint 039 validation command results.
- Protected-file confirmation.
- Whether runtime files changed.

### Step 5 - Stop Before Implementation

Do not implement Sprint 040.

Report the recommendation to the operator for Architect approval.
