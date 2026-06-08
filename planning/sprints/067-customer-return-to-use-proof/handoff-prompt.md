# Sprint 067 Handoff Prompt - Customer Return-to-Use Proof

Read first:

- `AGENTS.md`
- `architect-packs/sprint-067-customer-return-to-use-proof-architect-pack.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `planning/sprints/067-customer-return-to-use-proof/requirements.md`
- `planning/sprints/067-customer-return-to-use-proof/blueprint.md`
- `planning/sprints/067-customer-return-to-use-proof/acceptance.md`

Before implementation or runtime changes, summarize:

1. What Sprint 067 must prove.
2. The exact protected surfaces.
3. The current blockers.
4. The validation path you will use.
5. How you will avoid touching Sprint 064 untracked files.

Do not modify runtime/source files, deploy, Firebase settings, FlutterFlow files, native build files, credentials, CEO Briefing files, `docs/API.md`, or Sprint 064 untracked files without explicit approval.

Sprint 067 final recommendation must be exactly one:

```text
APPROVE - give current app back to client
HOLD - fix only the blockers preventing return-to-use
```

Sprint 067 proof closeout recommendation:

```text
HOLD - fix only the blockers preventing return-to-use
```

Use the next pass to fix or owner-accept the remaining blockers before any customer handoff: deployed/local version alignment, feedback path, browser/native notification posture, voice permission/client-device proof or typed fallback approval, first tester, owner/go-live approval, and UAT/production auth posture.

Report:

1. Exact customer URL/path tested.
2. Whether deployed app matches intended current repo behavior.
3. Login/access result.
4. Typed question result.
5. Reminder creation result.
6. Reminder notification result.
7. Voice input result.
8. Feedback path result.
9. First tester and owner approval status.
10. Final recommendation.
11. Files changed.
12. Validation commands run.
13. Confirmation that protected surfaces and Sprint 064 untracked files were not touched.
