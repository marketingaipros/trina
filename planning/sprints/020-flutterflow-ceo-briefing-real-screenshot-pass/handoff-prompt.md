# Sprint 020 Handoff Prompt - FlutterFlow CEO Briefing Real Screenshot Pass

Use this prompt with the FlutterFlow operator or Builder.

```text
You are verifying the real FlutterFlow prototype for Trina.

Open the real FlutterFlow project in Designer or Preview.

Scope:
- FlutterFlow Designer / Preview only.
- Do not export generated FlutterFlow code.
- Do not modify runtime repo code.
- Do not modify Firebase, Hermes/backend, package, native, build, release, deploy, auth, live AI, real financial data, secrets, or .env files.
- Do not create placeholder screenshot evidence.

Required checks:
1. Confirm Dashboard / Home is visible.
2. Confirm CEO Briefing exists, or document the actual renamed briefing screen label.
3. Test Dashboard -> CEO Briefing.
4. Confirm CEO Briefing renders correctly with briefing-specific content.
5. Test CEO Briefing -> Dashboard.
6. Test CEO Briefing -> Ask Trina to Prioritize -> Assistant.

Record each path as Pass, Fail, Blocked, Deferred, Not present, Renamed, or Untested.

If the screen and click paths pass, capture a real screenshot from FlutterFlow Designer or Preview and save it exactly as:

references/flutterflow/sprint-009/ceo-briefing.png

If any check cannot be completed, do not create ceo-briefing.png. Report the blocker or deferred reason honestly.

Report:
1. Whether CEO Briefing exists.
2. Actual screen label.
3. Whether the screen renders correctly.
4. Click-path results.
5. Screenshot path status.
6. Any mismatch, blocker, rename, or follow-up.
```
