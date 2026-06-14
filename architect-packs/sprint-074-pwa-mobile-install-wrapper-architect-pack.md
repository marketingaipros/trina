# Sprint 074 Architect Pack — PWA Mobile Install Wrapper

**Project:** Trina / Barbie Voice App
**Sprint:** 074 — PWA Mobile Install Wrapper
**Date:** 2026-06-14
**Architect Layer:** ChatGPT
**Builder Layer:** Codex
**Status:** Architect Pack ready for Builder application
**Primary goal:** Make the current working Barbie web app installable on a phone as a PWA without rebuilding in Flutter or changing core app behavior.

---

## Operating Decision

The current working web app remains the source of truth.

Sprint 073 restored the functional browser experience:
- Typed questions return visible Barbie answers.
- Barbie audible talk-back works.
- Spoken answer matches visible answer.
- Stop/cancel works.
- Reminder create/appear/dismiss works.

Sprint 074 should not rebuild this in Flutter.

The fastest, lowest-risk path is to add Progressive Web App install support to the existing web app first.

Flutter / FlutterFlow remains deferred unless PWA is not enough for the client.

---

## Files This Architect Pack Should Create or Update

Codex should apply this Architect Pack by creating or updating only the planning/docs files listed below first.

### Update

- `planning/STATE.md`
- `planning/DECISIONS.md`
- `planning/RISKS.md`
- `planning/QUESTIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`, only if app shell/public asset routes or install-related contracts are documented there
- `docs/VALIDATION.md`

### Create

- `planning/sprints/074-pwa-mobile-install-wrapper/requirements.md`
- `planning/sprints/074-pwa-mobile-install-wrapper/blueprint.md`
- `planning/sprints/074-pwa-mobile-install-wrapper/acceptance.md`
- `planning/sprints/074-pwa-mobile-install-wrapper/handoff-prompt.md`

### Do Not Touch During Architect Pack Application

- Runtime/source files
- Firebase settings
- Firebase deploy config
- Firestore rules
- Cloud Functions
- FlutterFlow files
- Native packaging folders
- App Store / Play Store configuration
- Credentials
- CEO Briefing files
- Sprint 064 files
- Sprint 072 files

---

# File: `planning/STATE.md`

```markdown
# Project State

## Current Sprint

Sprint 074 — PWA Mobile Install Wrapper

## Current Status

Sprint 073 is complete and pushed to `origin/main`.

Sprint 073 result: PASS.

Confirmed working:
- Typed Barbie Q&A in Chrome.
- Visible Barbie answer.
- Audible Barbie talk-back.
- Spoken text matches visible answer.
- Stop/cancel works or speech ends cleanly.
- Reminder create/appear/dismiss works.

Sprint 074 is now planned as a PWA/mobile install wrapper sprint.

## Current Goal

Make the existing working Barbie web app installable on a client phone as a PWA.

This sprint should preserve the working web app behavior and add only the mobile install layer needed for home-screen use.

## Next Action

Apply the Sprint 074 Architect Pack as docs/planning only.

After the pack is applied, Codex must read the Sprint 074 files and summarize the implementation plan before making runtime/source changes.

## Known Constraints

- Do not rebuild the app in Flutter during Sprint 074.
- Do not start native app packaging.
- Do not touch FlutterFlow.
- Do not change Firebase settings unless a later approved deploy sprint requires it.
- Do not touch Sprint 064 or Sprint 072 untracked files.
- Do not create or modify CEO Briefing artifacts.
```

---

# File: `planning/DECISIONS.md`

```markdown
# Decisions

## Sprint 074 Decisions

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-06-14 | Use PWA/mobile install support before Flutter/native packaging. | The current web app is already working and passed browser UAT. PWA is faster and lower risk than restarting the mobile path in Flutter. | Sprint 074 will add installability to the existing web app instead of rebuilding it. |
| 2026-06-14 | The working web app remains the source of truth. | Sprint 073 restored the core app behavior. | PWA work must preserve current typed Q&A, audible talk-back, Stop, and reminder behavior. |
| 2026-06-14 | Flutter / FlutterFlow remains deferred. | Native/mobile rebuild is not required for the immediate client return-to-use goal. | No FlutterFlow, native packaging, App Store, or Play Store work should occur in Sprint 074. |
| 2026-06-14 | Sprint 074 should support home-screen install first. | The client needs phone access quickly. | Acceptance should focus on iPhone/Android browser install behavior and mobile UAT. |
```

---

# File: `planning/RISKS.md`

```markdown
# Risks

## Sprint 074 Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| iOS PWA behavior differs from Android PWA behavior. | High | Medium | Provide separate iPhone Safari and Android Chrome install instructions and test separately where possible. | Open |
| Web Speech API behavior may differ inside installed PWA mode. | Medium | High | Require post-install UAT for visible answer, audible talk-back, spoken-text match, and Stop behavior. | Open |
| Reminder behavior may differ when the app is launched from home screen. | Medium | High | Require reminder create/appear/dismiss regression after PWA install. | Open |
| Service worker caching could serve stale app code. | Medium | Medium | Keep caching conservative in MVP or document refresh/update behavior clearly. | Open |
| Adding PWA files could accidentally change core app behavior. | Medium | High | Keep implementation scoped to manifest/icons/install metadata and minimal app shell changes. Run Sprint 073 regression checks. | Open |
| Existing untracked Sprint 064 and Sprint 072 files could be staged accidentally. | Medium | Medium | Explicitly stage only Sprint 074 files when committing. Verify with `git diff --cached --name-only`. | Open |
```

---

# File: `planning/QUESTIONS.md`

```markdown
# Questions

## Sprint 074 Questions

| Question | Owner | Status | Notes |
|---|---|---|---|
| What exact live URL should the client install from? | Operator | Open | Required for final client instructions and UAT. |
| Is the client primarily using iPhone or Android? | Operator | Open | Sprint should support both if practical, but final UAT should happen on the client's actual phone. |
| What app name should appear on the phone home screen? | Operator | Proposed | Proposed: `Barbie`. |
| What icon should be used for the PWA? | Operator / Builder | Open | MVP can use an existing safe app icon or simple generated placeholder if no final brand asset exists. |
| Should the PWA support offline loading? | Architect | Proposed | Proposed: no offline-first behavior in MVP. Avoid risky caching. |
```

---

# File: `docs/ARCHITECTURE.md`

```markdown
# Architecture Notes — Sprint 074 PWA Mobile Install Wrapper

## Current Architecture Position

The current Barbie app is a working web app.

Sprint 073 restored core browser functionality:
- Typed Q&A.
- Visible Barbie responses.
- Audible talk-back.
- Stop/cancel.
- Reminder create/appear/dismiss.

Sprint 074 adds a Progressive Web App install layer around the existing web app.

## PWA Layer

The PWA layer should be treated as an app-shell enhancement, not a rewrite.

Expected implementation areas may include:

- Web app manifest.
- App icon assets.
- Theme/background color metadata.
- Mobile viewport metadata, if missing or incorrect.
- Apple mobile web app metadata, if needed.
- Service worker only if the app already has a safe pattern or if implementation can keep caching conservative.

## Out of Scope

Sprint 074 does not include:

- Flutter implementation.
- FlutterFlow export/import.
- Native iOS packaging.
- Native Android packaging.
- App Store submission.
- Play Store submission.
- Background push notification rebuild.
- Firebase settings changes.
- Backend behavior changes unless strictly required for PWA loading.
- Redesign of the Barbie dashboard.

## Architecture Rule

The PWA must launch the same working Barbie web app and preserve Sprint 073 behavior.

Installed mode must not become a separate code path with different answer, speech, Stop, or reminder behavior.
```

---

# File: `docs/API.md`

```markdown
# API Notes — Sprint 074 PWA Mobile Install Wrapper

## API Impact

Sprint 074 is expected to have no backend API contract changes.

The sprint should not change:

- Barbie chat request/response contracts.
- Reminder creation behavior.
- Reminder due display/dismiss behavior.
- Firebase Functions endpoints.
- Firestore rules.
- Authentication behavior.
- Environment variables.

## Public Asset / App Shell Impact

Sprint 074 may add or update public app shell assets such as:

- `manifest.webmanifest` or equivalent.
- PWA icons.
- Apple touch icon.
- Metadata references in the HTML/app shell.
- Optional service worker registration only if safe and scoped.

## API Acceptance Rule

If any API, Firebase, Cloud Functions, or reminder contract change appears necessary, stop and report it before implementation.

PWA install support should not require backend changes.
```

---

# File: `docs/VALIDATION.md`

```markdown
# Validation — Sprint 074 PWA Mobile Install Wrapper

## Required Pre-Implementation Checks

- `git status --branch --short`
- Confirm latest commit is Sprint 073:
  - `4f947cf fix: close sprint 073 audible voice recovery pass`
- Confirm Sprint 064 and Sprint 072 untracked files remain untouched.

## Required Build Checks

- `git diff --check`
- `npm run lint`
- `npm run build`
- `test ! -f references/flutterflow/sprint-009/ceo-briefing.png`

## Required Browser Regression

On the working web app URL:

1. Typed Q&A returns visible Barbie answer.
2. Play speaks the visible answer.
3. Spoken text matches visible answer.
4. Stop/cancel works or speech ends cleanly.
5. Reminder can be created.
6. Due reminder appears.
7. Dismiss clears reminder.

## Required PWA Checks

Desktop/browser inspection:

- Manifest is reachable.
- Manifest has valid app name.
- Manifest has start URL.
- Manifest has display mode appropriate for app-like launch.
- Required icons are present and reachable.
- Browser install prompt/indicator appears where supported.

Mobile checks:

- iPhone Safari can add to home screen, or limitation is documented.
- Android Chrome can install/add to home screen, or limitation is documented.
- App launches from home-screen icon.
- App opens to the expected Barbie experience.
- No major layout break blocks typing, Play, Stop, or reminders.

## Required Installed-PWA UAT

After launching from the phone home-screen icon:

- Typed Barbie Q&A works.
- Visible answer appears.
- Audible Play works.
- Spoken text matches visible answer.
- Stop/cancel works or speech ends cleanly.
- Reminder create/appear/dismiss works.

## PASS Standard

Sprint 074 may be marked PASS only when:

- PWA install support is implemented.
- The app can be installed or added to home screen on the target phone/browser path.
- Installed/home-screen launch opens the working Barbie app.
- Sprint 073 core behavior still passes.
- Reminder regression passes.
- Build/lint validation passes.

## HOLD Conditions

Mark HOLD if:

- App cannot be installed or added to home screen on the target phone path.
- Installed launch opens a blank, stale, broken, or wrong app.
- Audio talk-back fails after installed launch.
- Spoken text does not match visible answer.
- Reminder flow regresses.
- The work requires Flutter, native packaging, Firebase settings, or backend changes not approved for this sprint.
```

---

# File: `planning/sprints/074-pwa-mobile-install-wrapper/requirements.md`

```markdown
# Sprint 074 Requirements — PWA Mobile Install Wrapper

## Goal

Make the current working Barbie web app installable on the client’s phone as a PWA/home-screen app.

## Business Reason

The client needs a fast path to use the working Barbie app from her phone without waiting for Flutter, native packaging, App Store approval, or Play Store approval.

## Current Working Baseline

Sprint 073 is PASS.

Confirmed:
- Typed Q&A works.
- Visible Barbie answer appears.
- Barbie speaks audibly.
- Spoken text matches visible answer.
- Stop/cancel works or speech ends cleanly.
- Reminder create/appear/dismiss works.

## Required Outcome

The user should be able to open the web app on a phone and add/install it to the home screen.

When launched from the home-screen icon, the app should behave like the same working Barbie web app.

## In Scope

- PWA manifest.
- App name and short name.
- App icons / install icons.
- Theme/background metadata.
- Mobile install metadata.
- Apple touch icon / mobile web app metadata if needed.
- Conservative service worker only if safe and necessary.
- Mobile layout smoke checks.
- PWA install instructions for iPhone and Android.
- Installed-PWA UAT checklist.

## Out of Scope

- Flutter.
- FlutterFlow.
- Native iOS build.
- Native Android build.
- App Store submission.
- Play Store submission.
- New dashboard redesign.
- Authentication changes.
- Firebase settings changes.
- Cloud Functions changes.
- Firestore rules changes.
- Reminder backend redesign.
- Push notification rebuild.
- CEO Briefing work.
- Sprint 064 or Sprint 072 cleanup.

## Non-Negotiables

- Do not break Sprint 073 behavior.
- Do not introduce stale answer speech.
- Do not auto-speak new answers.
- Play must speak the final visible answer only.
- Stop must work or speech must end cleanly.
- Reminder flow must still work.
- Keep scope boring and local to PWA/install support.
```

---

# File: `planning/sprints/074-pwa-mobile-install-wrapper/blueprint.md`

```markdown
# Sprint 074 Blueprint — PWA Mobile Install Wrapper

## Implementation Strategy

Add installability to the existing web app with minimal app-shell changes.

Do not rebuild the app.

Do not create a Flutter/native branch.

## Step 1 — Inspect Current App Shell

Codex should inspect:

- Package scripts.
- App entry HTML or framework app shell.
- Existing public/static asset folder.
- Existing icons or branding assets.
- Any existing service worker or manifest.
- Current Vite/build setup.

No source changes during inspection unless approved after the sprint-start summary.

## Step 2 — Add PWA Manifest

Add a manifest file in the appropriate public/static location.

Recommended manifest fields:

- `name`: `Barbie`
- `short_name`: `Barbie`
- `start_url`: `/`
- `scope`: `/`
- `display`: `standalone`
- `background_color`: match current app background or safe neutral
- `theme_color`: match current app theme or safe neutral
- `icons`: include at least install-appropriate sizes if assets are available

If final icon assets are not available, use an existing safe app icon or create a simple placeholder only if acceptable and tracked.

## Step 3 — Wire Manifest and Mobile Metadata

Update the HTML/app shell to reference:

- Manifest file.
- Theme color.
- Apple mobile web app capable metadata, if appropriate.
- Apple touch icon, if available.
- Viewport metadata only if missing or broken.

## Step 4 — Service Worker Decision

Default: avoid aggressive caching.

If the app already has a service worker or the framework requires one for installability, keep it minimal and conservative.

Do not cache API/chat/reminder responses in a way that can serve stale Barbie answers or stale reminders.

If service worker work becomes complex, stop and report.

## Step 5 — Mobile Instructions

Create or update documentation with practical install instructions:

- iPhone Safari: open URL, Share, Add to Home Screen.
- Android Chrome: open URL, install prompt or menu, Add to Home screen / Install app.

Documentation can live in `docs/VALIDATION.md`, Sprint 074 acceptance, or a small `docs/PWA.md` if the repo already supports separate docs.

## Step 6 — Regression Validation

Run full Sprint 073 behavior checks after PWA changes:

- Typed Q&A.
- Visible answer.
- Audible Play.
- Spoken text match.
- Stop/cancel.
- Reminder create/appear/dismiss.

## Step 7 — PWA Validation

Validate:

- Manifest reachable.
- Icons reachable.
- Browser recognizes installability where supported.
- Mobile add/install path works or limitations are documented.
- Home-screen launch works.
- Installed launch does not break voice/reminders.

## Expected Files That May Change

Likely:

- Public/static manifest file.
- Public/static icon files.
- App shell HTML file.
- Docs/planning files for Sprint 074 status and validation.

Possible:

- Minimal service worker file if needed.
- Minimal registration code if already consistent with project structure.

Avoid unless proven necessary:

- `components/VoiceDashboard.tsx`
- Backend/API files
- Firebase config
- FlutterFlow files
- Native folders
```

---

# File: `planning/sprints/074-pwa-mobile-install-wrapper/acceptance.md`

```markdown
# Sprint 074 Acceptance — PWA Mobile Install Wrapper

## Required Acceptance Criteria

### A. Scope Control

- [ ] No Flutter implementation was done.
- [ ] No FlutterFlow files were modified.
- [ ] No native iOS/Android packaging was done.
- [ ] No App Store or Play Store work was done.
- [ ] No Firebase settings, Cloud Functions, Firestore rules, credentials, CEO Briefing, Sprint 064, or Sprint 072 files were touched.

### B. PWA Metadata

- [ ] App manifest exists and is reachable.
- [ ] Manifest includes app name.
- [ ] Manifest includes short name.
- [ ] Manifest includes start URL.
- [ ] Manifest includes standalone display mode or equivalent app-like display mode.
- [ ] Manifest includes valid icon references.
- [ ] Referenced icons are reachable.
- [ ] App shell references the manifest.
- [ ] Theme/mobile metadata is present where needed.

### C. Build Validation

- [ ] `git status --branch --short` was run.
- [ ] `git diff --check` passed.
- [ ] `npm run lint` passed.
- [ ] `npm run build` passed, with only known baseline warnings if any.
- [ ] `test ! -f references/flutterflow/sprint-009/ceo-briefing.png` passed.
- [ ] `git diff --name-only` was reviewed.

### D. Browser Regression

- [ ] Typed Q&A returns visible Barbie answer.
- [ ] Play speaks the final visible answer.
- [ ] Spoken text matches the visible answer.
- [ ] Stop/cancel works or speech ends cleanly.
- [ ] Reminder can be created.
- [ ] Due reminder appears.
- [ ] Dismiss clears reminder.

### E. Mobile / Installed PWA UAT

- [ ] App can be added/installed to phone home screen on the target phone/browser path.
- [ ] Home-screen icon opens the Barbie app.
- [ ] Installed/home-screen app opens the correct URL/app shell.
- [ ] Installed/home-screen app allows typed Q&A.
- [ ] Installed/home-screen app shows visible answer.
- [ ] Installed/home-screen app supports audible Play or limitation is clearly documented.
- [ ] Spoken text matches visible answer in installed/home-screen mode.
- [ ] Stop/cancel works or speech ends cleanly in installed/home-screen mode.
- [ ] Reminder create/appear/dismiss works in installed/home-screen mode.

## PASS Standard

Sprint 074 is PASS only if the app can be installed or added to the home screen on the target phone path and the installed/home-screen launch preserves the core Sprint 073 behavior.

## HOLD Standard

Sprint 074 remains HOLD if:

- Install/add-to-home-screen cannot be completed on the target path.
- Installed launch opens the wrong app, stale app, blank page, or broken page.
- Voice fails in installed/home-screen mode.
- Spoken text does not match visible answer.
- Reminder flow fails.
- The work requires Flutter/native/Firebase changes outside approved scope.
```

---

# File: `planning/sprints/074-pwa-mobile-install-wrapper/handoff-prompt.md`

```markdown
# Sprint 074 Handoff Prompt — PWA Mobile Install Wrapper

Use this prompt with Codex after the Sprint 074 Architect Pack has been applied as docs/planning only.

```text
Read these files before making runtime/source changes:

- AGENTS.md
- planning/STATE.md
- planning/DECISIONS.md
- planning/DOMAIN.md, if present
- planning/RISKS.md
- planning/QUESTIONS.md
- docs/ARCHITECTURE.md
- docs/API.md
- docs/VALIDATION.md
- planning/sprints/074-pwa-mobile-install-wrapper/requirements.md
- planning/sprints/074-pwa-mobile-install-wrapper/blueprint.md
- planning/sprints/074-pwa-mobile-install-wrapper/acceptance.md

Then summarize:

1. What Sprint 074 is supposed to accomplish.
2. Which files you expect to modify.
3. Whether the repo already has a manifest, icons, service worker, or PWA setup.
4. What tests or validation steps you will run.
5. Any blockers or ambiguities.
6. How you will avoid touching FlutterFlow, native packaging, Firebase settings, credentials, CEO Briefing, Sprint 064, Sprint 072, or unrelated files.

Do not implement yet.
Do not modify runtime/source files yet.
Do not stage, commit, push, or deploy.

Wait for approval after your summary.
```
```

---

## Builder Application Prompt

Use this first, before implementation:

```text
Apply the Sprint 074 Architect Pack as docs/planning only.

Create or update only the files listed in the Architect Pack.

Do not modify runtime/source files.
Do not implement PWA code yet.
Do not stage, commit, push, or deploy.
Do not touch Sprint 064 or Sprint 072 files.
Do not touch Firebase settings, FlutterFlow files, native packaging, credentials, or CEO Briefing files.

After applying the pack, run:

- git status --branch --short
- git diff --check
- test ! -f references/flutterflow/sprint-009/ceo-briefing.png

Then report:

1. Files created.
2. Files updated.
3. Files skipped and why.
4. Validation results.
5. Final git status.
```

---

## Architect Notes

This sprint is intentionally small.

The goal is not to make a perfect mobile product.

The goal is to make the working app installable on the client phone quickly while preserving the working browser behavior.
