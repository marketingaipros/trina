# Sprint 074 Blueprint - PWA Mobile Install Wrapper

## Implementation Strategy

Add installability to the existing web app with minimal app-shell changes.

Do not rebuild the app.

Do not create a Flutter/native branch.

## Step 1 - Inspect Current App Shell

Codex should inspect:

- Package scripts.
- App entry HTML or framework app shell.
- Existing public/static asset folder.
- Existing icons or branding assets.
- Any existing service worker or manifest.
- Current Vite/build setup.

No source changes during inspection unless approved after the sprint-start summary.

## Step 2 - Add PWA Manifest

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

## Step 3 - Wire Manifest and Mobile Metadata

Update the HTML/app shell to reference:

- Manifest file.
- Theme color.
- Apple mobile web app capable metadata, if appropriate.
- Apple touch icon, if available.
- Viewport metadata only if missing or broken.

## Step 4 - Service Worker Decision

Default: avoid aggressive caching.

If the app already has a service worker or the framework requires one for installability, keep it minimal and conservative.

Do not cache API/chat/reminder responses in a way that can serve stale Barbie answers or stale reminders.

If service worker work becomes complex, stop and report.

## Step 5 - Mobile Instructions

Create or update documentation with practical install instructions:

- iPhone Safari: open URL, Share, Add to Home Screen.
- Android Chrome: open URL, install prompt or menu, Add to Home screen / Install app.

Documentation can live in `docs/VALIDATION.md`, Sprint 074 acceptance, or a small `docs/PWA.md` if the repo already supports separate docs.

## Step 6 - Regression Validation

Run full Sprint 073 behavior checks after PWA changes:

- Typed Q&A.
- Visible answer.
- Audible Play.
- Spoken text match.
- Stop/cancel.
- Reminder create/appear/dismiss.

## Step 7 - PWA Validation

Validate:

- Manifest reachable.
- Icons reachable.
- Browser recognizes installability where supported.
- Mobile add/install path works or limitations are documented.
- Home-screen launch works.
- Installed launch does not break voice/reminders.
