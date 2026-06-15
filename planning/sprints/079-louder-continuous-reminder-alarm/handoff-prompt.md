# Sprint 079 Handoff Prompt - Louder Continuous Reminder Alarm

Sprint 079 planning files are ready.

Read these files before making changes:

- `AGENTS.md`
- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/DOMAIN.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/VALIDATION.md`
- `docs/PWA.md`
- `planning/sprints/079-louder-continuous-reminder-alarm/requirements.md`
- `planning/sprints/079-louder-continuous-reminder-alarm/blueprint.md`
- `planning/sprints/079-louder-continuous-reminder-alarm/acceptance.md`
- `planning/sprints/079-louder-continuous-reminder-alarm/handoff-prompt.md`

Then inspect:

- `App.tsx`

Do not modify files yet.

Summarize:

1. What Sprint 079 is supposed to accomplish.
2. Which files you expect to modify.
3. The exact alarm behavior you plan to implement.
4. How you will make the alarm louder or more noticeable.
5. How you will make it continuous until Dismiss or Snooze.
6. How you will prevent stacked or overlapping loops.
7. What validation commands you will run.
8. Any blockers or ambiguities.

Do not start implementation until I approve your summary.

Goal:

Make due reminders harder to miss on the installed iPhone PWA by changing the current bounded reminder alarm into a louder, more persistent in-app alarm that continues until the user chooses Dismiss or Snooze.

Implementation requirements:

- Preserve typed reminder setup.
- Preserve reminder popup behavior.
- Preserve Dismiss behavior.
- Preserve Snooze behavior.
- Keep `Test Alert Sound` available as a single alert unless clearly relabeled.
- Add or revise reminder-specific alarm helpers in `App.tsx`.
- Remove or bypass the Sprint 078 30-second auto-stop behavior for active reminders.
- Stop on Dismiss, Snooze, active reminder clear, cleanup/unmount, and before starting a new alarm.
- Prevent overlapping alarm loops.
- Keep unsupported vibration non-fatal.
- Keep iPhone/PWA guidance honest. Do not claim guaranteed sound.
- Do not touch mic behavior.
- Do not touch FlutterFlow, native packaging, Firebase rules, credentials, CEO Briefing, or unrelated sprint files.

Expected implementation file:

- `App.tsx`

Possible only if a direct blocker is found:

- `components/Dashboard.tsx`
- `components/VoiceDashboard.tsx`
- `src/lib/reminderNotifications.js`

Stop and explain before editing any possible file outside `App.tsx`.

After approved implementation, run:

1. `git status --branch --short`
2. `git diff --check`
3. `test ! -f references/flutterflow/sprint-009/ceo-briefing.png`
4. `node ./node_modules/typescript/bin/tsc --noEmit`
5. `node ./node_modules/vite/bin/vite.js build`

Then report:

1. Files changed.
2. Exact alarm behavior added.
3. How the alarm starts.
4. How the alarm stops.
5. How overlapping loops are prevented.
6. Validation results.
7. Any warnings.
8. What still requires real iPhone installed-PWA UAT.

Do not mark Sprint 079 PASS until real iPhone installed-PWA UAT confirms the alarm is noticeable enough, continuous until Dismiss/Snooze, and stops correctly.
