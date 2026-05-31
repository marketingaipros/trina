# Sprint 018 Blueprint - FlutterFlow Final Prototype Evidence Capture

## Objective

Apply the Sprint 018 Architect Pack as a docs/planning-only final prototype evidence capture checkpoint.

## Files to Read First

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `references/flutterflow/sprint-009/click-path-notes.md`
- `planning/sprints/017-flutterflow-final-prototype-evidence-readiness/requirements.md`
- `planning/sprints/017-flutterflow-final-prototype-evidence-readiness/blueprint.md`
- `planning/sprints/017-flutterflow-final-prototype-evidence-readiness/acceptance.md`
- `architect-packs/trina-018-flutterflow-final-prototype-evidence-capture-architect-pack.md`

## Files Created

- `planning/sprints/018-flutterflow-final-prototype-evidence-capture/requirements.md`
- `planning/sprints/018-flutterflow-final-prototype-evidence-capture/blueprint.md`
- `planning/sprints/018-flutterflow-final-prototype-evidence-capture/acceptance.md`
- `planning/sprints/018-flutterflow-final-prototype-evidence-capture/handoff-prompt.md`

## Files Updated

Update only planning/docs/evidence-note files:

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/FLUTTERFLOW_BUILD_HANDOFF.md`
- `docs/VALIDATION.md`
- `references/flutterflow/sprint-009/click-path-notes.md`

## Manual Evidence Capture Plan

1. Open the current Trina FlutterFlow prototype.
2. Confirm the app still preserves `trina-barbie-v1`.
3. Capture only real FlutterFlow Designer or Preview screenshots.
4. Store final prototype screenshots in an approved evidence folder.
5. Do not create any placeholder image.
6. Document the source, capture date, screen name, and status for each screenshot.
7. Keep CEO Briefing deferred unless the real screenshot exists at `references/flutterflow/sprint-009/ceo-briefing.png`.

## Protected Areas

Do not modify:

- `src/`
- `components/`
- `services/`
- `functions/`
- `firebase.json`
- `firestore.rules`
- `package.json`
- lockfiles
- `android/`
- `ios/`
- `dist/`
- `.env`
- `.env.*`

Do not export generated FlutterFlow code.

## Validation Commands

Run and report:

```bash
git diff --check
git status --branch --short
git diff --name-only
git diff --stat
test ! -f references/flutterflow/sprint-009/ceo-briefing.png || echo "CEO briefing screenshot exists"
```

## Pack Note

The Sprint 018 Architect Pack is corrected to `018-flutterflow-final-prototype-evidence-capture`. Sprint 018 does not reopen or complete CEO Briefing evidence unless the real screenshot exists.
