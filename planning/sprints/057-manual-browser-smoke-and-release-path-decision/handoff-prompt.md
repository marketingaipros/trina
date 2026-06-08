# Sprint 057 Handoff Prompt - Manual Browser Smoke and Release Path Decision

Read these files before making changes:

```text
AGENTS.md
planning/STATE.md
planning/DECISIONS.md
planning/DOMAIN.md
planning/RISKS.md
planning/QUESTIONS.md
docs/ARCHITECTURE.md
docs/API.md
docs/VALIDATION.md
planning/sprints/057-manual-browser-smoke-and-release-path-decision/requirements.md
planning/sprints/057-manual-browser-smoke-and-release-path-decision/blueprint.md
planning/sprints/057-manual-browser-smoke-and-release-path-decision/acceptance.md
```

Then summarize:

1. What Sprint 057 is supposed to accomplish.
2. Which files you expect to modify.
3. What validation steps you will run.
4. What manual browser smoke steps you need the operator to perform or confirm.
5. Any blockers, ambiguities, or risks.
6. Whether the sprint is safe to perform as validation-only.

Do not implement yet.

After approval, perform Sprint 057 as validation-only.

Scope:

- Validate app launch.
- Validate manual browser UI behavior.
- Test typed assistant input.
- Confirm whether Barbie brain/model path responds.
- Test reminder/core workflow.
- Test voice/mic or typed fallback.
- Decide release path.
- Update docs/planning closeout.

Rules:

- Do not modify runtime/source files unless a blocking defect is found and the operator approves a separate implementation change.
- Do not deploy.
- Do not run native builds.
- Do not package iOS.
- Do not perform FlutterFlow rebuild/migration.
- Do not touch credentials.
- Do not stage anything.
- Do not commit anything.
- Do not push anything.
- Do not create, restore, stage, or commit CEO Briefing files.
- Confirm `references/flutterflow/sprint-009/ceo-briefing.png` remains absent.

Required baseline commands:

```bash
git status --branch --short
git diff --check
test ! -f references/flutterflow/sprint-009/ceo-briefing.png
node --check functions/index.js
npm run lint
npm run build
npm run dev -- --host 127.0.0.1
curl -I http://127.0.0.1:3000/
```

Required manual browser smoke:

1. Open `http://127.0.0.1:3000/` in Chrome.
2. Confirm Barbie UI renders.
3. Open browser console and check for errors.
4. Type: `What should I focus on today?`
5. Click send/capture.
6. Record whether Barbie responds.
7. Check whether backend/function logs show the assistant request.
8. Test reminder/core workflow.
9. Test mic/voice if available.
10. If voice is unavailable, test typed fallback.
11. Recommend one release path:
    - Web app
    - PWA/home-screen app
    - Wrapped iPhone app as a future sprint
    - FlutterFlow/native as a future sprint
12. Close with `HOLD` or `CLIENT UAT CANDIDATE`.

When finished, report:

1. Validation commands run and results.
2. Manual browser smoke results.
3. Assistant brain/model status.
4. Reminder/core workflow status.
5. Voice/fallback status.
6. Release-path recommendation.
7. Final recommendation: `HOLD` or `CLIENT UAT CANDIDATE`.
8. Files changed.
9. Final `git status --branch --short`.
10. Confirmation that CEO Briefing remains absent.
11. Confirmation that no runtime/source files, deploys, native builds, credentials, iOS packaging, FlutterFlow migration, or CEO Briefing files were touched.
