# Architecture

## Overview
Barbie / TrinaOS Voice is a Vite React app backed by Firebase. The browser app provides the assistant UI, reminder popup handling, local task/calendar/finance views, and Firebase callable access. Secret-backed AI, Gmail, Telegram, and push-notification operations live in Firebase Functions.

## Frontend
- Framework: React 19 with Vite.
- Styling: Tailwind CSS plus component-level class styling.
- Main entry: `index.tsx`.
- Root component: `App.tsx`.
- Main assistant UI: `components/VoiceDashboard.tsx`.
- Dashboard navigation: `components/Dashboard.tsx`.
- Feature views: tasks, finance, weekly reset, notifications, brain dump, calendar, knowledge base.

## Backend
- Firebase Functions v2 in `functions/index.js`.
- Runtime: Node 24.
- Admin SDK initializes once and writes to Firestore.
- Callable functions require Firebase Auth through `request.auth`.
- Telegram webhook is an HTTPS function using a secret token.

## Firebase Services
- Firebase Auth for user identity.
- Firestore for messages, reminders, user calendar events, connection records, and debug logs.
- Firebase Functions for AI, Gmail, Telegram, device token registration, and scheduled pushes.
- Firebase Hosting serves `dist`.
- Firebase Cloud Messaging is partially wired for mobile push notifications.

## Mobile
- Capacitor app exists for iOS and Android.
- App ID: `com.learnandgrow.barbie`.
- App name: `Barbie`.
- Web directory: `dist`.
- Native Firebase mobile config files are not part of the repo and must not be committed.

## Deployment
- Hosting public directory: `dist`.
- SPA fallback rewrite points to `/index.html`.
- Firestore rules file: `firestore.rules`.
- Functions codebase: `trinaosvoice`.

## Sprint 002 Launch Readiness Notes
- Trina / Barbie / TrinaOS Voice V1 should be validated before adding features.
- V1 launch-critical paths are auth, chat, reminders, reminder popups, Firestore rules, Firebase Functions readiness, Hosting build output, and Telegram readiness.
- Gmail send is a V2 boundary and should remain disabled during Sprint 002.
- Telegram is not considered live until `TELEGRAM_BOT_TOKEN` exists and webhook setup is confirmed.
- Mobile packaging exists through Capacitor, but native mobile behavior requires platform config and device/emulator validation.

## Sprint 003 Production Release Readiness Notes
- Sprint 003 prepares a controlled V1 go-live decision and should not expand product scope.
- Deployment readiness must distinguish local validation from approved production deploys.
- Gmail send remains V2-disabled in chat behavior; the existing backend callable needs a documented launch recommendation.
- Telegram remains blocked until secret and webhook setup are confirmed.
- Mobile readiness depends on platform scope, native Firebase config files, and device/emulator validation.
- Debug logging policy must be decided before long-term production usage because debug records may include raw user message text.

## Sprint 004 Controlled Web Deploy Notes
- Sprint 004 is a deploy-readiness and controlled release sprint for web V1 only.
- Expected Firebase project target remains `barbie-92edc`.
- Deploy scope must be explicitly approved before any Firebase deploy command is run.
- Telegram, Android, iOS, and Gmail send remain outside the required V1 web launch path unless separately approved and validated.
- Post-deploy smoke testing should verify the live hosted app, auth, chat, reminders, Gmail V2-disabled behavior, and documented blocked channels.
