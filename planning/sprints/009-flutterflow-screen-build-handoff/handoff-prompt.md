# Sprint 009 Builder Handoff Prompt

You are the Builder for the Trina project.

Apply Sprint 009 Architect Pack only:

`architect-packs/trina-009-flutterflow-screen-build-handoff-architect-pack.md`

## Goal

Create the Builder-ready FlutterFlow screen build handoff for Trina's first mobile visual prototype.

## First: Dry Run

Before making changes, do a dry run and report:

1. Files you would create.
2. Files you would update.
3. Files you would not touch.
4. Any conflicts or risks.
5. Whether the changes are docs/planning only.

Do not proceed until the dry run looks safe.

## Then Apply the Pack

If safe, create or update only:

```text
planning/sprints/009-flutterflow-screen-build-handoff/requirements.md
planning/sprints/009-flutterflow-screen-build-handoff/blueprint.md
planning/sprints/009-flutterflow-screen-build-handoff/acceptance.md
planning/sprints/009-flutterflow-screen-build-handoff/handoff-prompt.md
planning/STATE.md
planning/DECISIONS.md
planning/RISKS.md
planning/QUESTIONS.md
docs/FLUTTERFLOW_BUILD_HANDOFF.md
docs/VALIDATION.md
docs/API.md
```

## Do Not Touch

```text
src/
React/Vite runtime code
Firebase files
Hermes/API implementation files
package files
native folders
release files
generated FlutterFlow exports
.env files
secret files
```

## Validation

Run:

```bash
git status --branch --short
find planning/sprints/009-flutterflow-screen-build-handoff -maxdepth 1 -type f | sort
test -f docs/FLUTTERFLOW_BUILD_HANDOFF.md && echo "handoff doc exists"
rg -n "009-flutterflow-screen-build-handoff|Dashboard|Assistant|Strategic Advisor Mode|CEO Briefing|Finance|Settings|mockStartDemoSession|mockSendAssistantMessage|mockMicListeningState|mockLoadCEOBriefing|mockLoadFinanceSnapshot|references/flutterflow/sprint-009|FlutterFlow only|No local React/Vite runtime code" planning docs
git diff --name-only
git diff --stat
```

## Report Back

After applying and validating, report:

1. Acceptance criteria status.
2. Files created.
3. Files updated.
4. Validation commands run and results.
5. Whether any runtime/non-doc files changed.
6. Risks or open questions.
7. Final git status.
8. Whether the docs are safe to stage.

## Stop

Do not stage, commit, push, build FlutterFlow screens, or implement code.
