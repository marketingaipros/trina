# Sprint 050 Blueprint - Mobile Runtime Regression Sweep and Release Readiness

## Implementation Strategy

Sprint 050 is a regression and release-readiness sweep.

Start with read-first inspection and validation. Do not patch runtime files unless a direct mobile/runtime regression is confirmed during the approved implementation phase.

If a fix is needed, keep it small, local, and reversible. Prefer view-level spacing, wrapping, padding, or min-size corrections over shared abstractions or behavior changes.

## Step 1 - Read Current Planning

Read:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/requirements.md`
- `planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/blueprint.md`
- `planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/acceptance.md`
- `planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/handoff-prompt.md`

Then summarize before implementation:

- Sprint goal.
- Views and files to inspect.
- Expected validation commands and mobile viewport checks.
- Guardrails and protected paths.
- Any blockers or ambiguities.

## Step 2 - Inspect Core Runtime Surfaces

Inspect likely owners:

- `App.tsx`
- `components/VoiceDashboard.tsx`
- `components/CalendarView.tsx`
- `components/TasksView.tsx`
- `components/FinanceView.tsx`
- `components/KnowledgeBaseView.tsx`
- `components/NotificationsView.tsx`

Check for:

- Narrow mobile overflow.
- Short-height clipping.
- Fixed bottom-nav overlap.
- Primary action/input reachability.
- Empty, loading, error, disabled, and fallback state readability where existing fixtures allow.
- Calendar and Tasks compact control sizing after Sprint 049.
- Preserved labels and handlers.

## Step 3 - Run Baseline Validation

Before runtime edits, run:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git status --branch --short
```

If lint/build fails because of an existing unrelated issue, document the failure and do not broaden scope without approval.

## Step 4 - Browser/Mobile Smoke Validation

Use the local app workflow already documented in `docs/VALIDATION.md`.

Validate at minimum:

- `390x844`
- `360x740`

Check:

- Home / Dashboard
- Calendar
- Tasks
- Finance
- Knowledge Base
- Notifications/reminders, if present/reachable
- Bottom navigation

For each validated view, confirm:

- No horizontal overflow.
- Primary actions remain reachable.
- Fixed bottom nav does not hide important controls.
- Text remains readable.
- Scroll behavior works on short mobile height.
- Calendar and Tasks controls still meet or intentionally approximate the `44px` touch-target standard.

## Step 5 - Apply Small Fixes Only If Needed

If a defect is confirmed:

- Make the smallest possible targeted runtime change.
- Preserve existing behavior and handlers.
- Preserve the current visual system.
- Avoid fixed widths that create overflow.
- Do not change routing or data flow.
- Do not touch backend, Firebase, auth, packages, dependencies, native config, release, deployment, or CEO Briefing paths.

If no defect is confirmed, keep runtime files untouched and close out as a validated no-op.

## Step 6 - Update Docs

After implementation and validation, update:

- `planning/STATE.md`
- `planning/RISKS.md`
- `docs/VALIDATION.md`
- `planning/sprints/050-mobile-runtime-regression-sweep-and-release-readiness/acceptance.md`

Update `planning/QUESTIONS.md` only if Sprint 050 introduces a direct open question.

## Step 7 - Final Validation

Run:

```bash
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
npm run lint
npm run build
git diff --name-only
git status --branch --short
git diff --cached --name-only
```

No staging, commit, or push during implementation unless explicitly requested later.

## Runtime Guardrails

- Do not touch CEO Briefing.
- Do not create or restore `references/flutterflow/sprint-009/ceo-briefing.png`.
- Do not modify Firebase, backend, package/dependency, routing, native config, auth, release, deployment, or data model files.
- Do not stage, commit, or push.
- Keep the existing pink/white Barbie UI unless a future approved sprint explicitly changes design direction.
