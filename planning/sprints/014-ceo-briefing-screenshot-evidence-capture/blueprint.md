# Sprint 014 Blueprint - CEO Briefing Screenshot Evidence Capture

## Objective

Close the deferred Sprint 013 CEO Briefing evidence gap by validating the manual FlutterFlow prototype and saving a real screenshot in the existing evidence folder.

## Files to Read First

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `references/flutterflow/sprint-009/click-path-notes.md`
- `planning/sprints/013-flutterflow-ceo-briefing-evidence-capture/requirements.md`
- `planning/sprints/013-flutterflow-ceo-briefing-evidence-capture/blueprint.md`
- `planning/sprints/013-flutterflow-ceo-briefing-evidence-capture/acceptance.md`

## Files to Create

- `planning/sprints/014-ceo-briefing-screenshot-evidence-capture/requirements.md`
- `planning/sprints/014-ceo-briefing-screenshot-evidence-capture/blueprint.md`
- `planning/sprints/014-ceo-briefing-screenshot-evidence-capture/acceptance.md`
- `planning/sprints/014-ceo-briefing-screenshot-evidence-capture/handoff-prompt.md`

## Files to Update

Update only as needed after real evidence exists:

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `references/flutterflow/sprint-009/click-path-notes.md`

## Manual FlutterFlow Validation Plan

1. Open the clean Trina FlutterFlow prototype project.
2. Confirm the app still preserves the `trina-barbie-v1` visual direction.
3. Locate the CEO Briefing page or explicitly documented briefing equivalent.
4. Confirm visible content is briefing-specific, not placeholder-only.
5. Test these prototype paths:

```text
Dashboard -> CEO Briefing
CEO Briefing -> Dashboard
CEO Briefing -> Ask Trina to Prioritize -> Assistant
```

6. Record any path that is missing, renamed, or untestable.
7. Capture the CEO Briefing screen from FlutterFlow Preview/Test/Run or the FlutterFlow designer preview.
8. Save the screenshot as:

```text
references/flutterflow/sprint-009/ceo-briefing.png
```

Do not save alternate placeholder names such as:

```text
ceo-briefing-pending.png
ceo-briefing-placeholder.png
ceo-briefing-draft.png
```

## Planning/Docs Update Plan

After the real screenshot exists:

1. Update `references/flutterflow/sprint-009/click-path-notes.md`.
   - Mark `ceo-briefing.png` as present.
   - Record the manual validation date.
   - Record tested navigation paths.
   - Record any path that remains untested or missing.
   - Distinguish the new Sprint 014 evidence from the prior Sprint 013 deferred state.
2. Update `docs/FLUTTERFLOW_BUILD_HANDOFF.md`.
   - Replace deferred CEO Briefing evidence language with present evidence language only after the screenshot exists.
   - Preserve historical notes that the gap was deferred before Sprint 014.
3. Update `planning/STATE.md`.
   - Mark Sprint 014 as the current evidence-capture checkpoint.
   - State that the Sprint 013 deferred evidence gap is closed only if the screenshot exists.
4. Update `docs/VALIDATION.md`.
   - Add or update validation commands for CEO Briefing screenshot evidence capture.
5. Update `planning/DECISIONS.md`, `planning/RISKS.md`, and `planning/QUESTIONS.md` only if the evidence status changes a durable decision, risk, or open question.

## Validation Commands

Run and report:

```bash
git status --branch --short
find references/flutterflow/sprint-009 -maxdepth 1 -type f | sort
test -f references/flutterflow/sprint-009/ceo-briefing.png && echo "ceo briefing evidence exists"
file references/flutterflow/sprint-009/ceo-briefing.png
git diff --name-only
git diff --stat
git diff --check
```

If the screenshot has not yet been captured, skip the `file` command and report that the evidence file is still missing.

## Protected Areas

Do not modify:

- Runtime app code.
- React/Vite files.
- FlutterFlow generated exports.
- Firebase files.
- Hermes/API/backend files.
- Package files.
- Native folders.
- Release files.
- Secrets or `.env` files.
