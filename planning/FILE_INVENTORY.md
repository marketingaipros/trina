# File Inventory

## Root
- `App.tsx` - root React app state, reminder popup handling, routing between views.
- `index.tsx` - React entrypoint.
- `index.html` - Vite HTML entry.
- `index.css` - Tailwind CSS entry.
- `package.json` - scripts and dependencies.
- `vite.config.ts` - Vite config, env mappings, dev server.
- `firebase.json` - Firebase Functions, Firestore rules, Hosting config.
- `firestore.rules` - Firestore security rules.
- `capacitor.config.ts` - Capacitor app ID/name/webDir.

## Components
- `components/VoiceDashboard.tsx` - main Barbie voice/text interface.
- `components/Dashboard.tsx` - dashboard wrapper and navigation buttons.
- `components/CalendarView.tsx` - local/app calendar UI.
- `components/TasksView.tsx` - task tracker UI.
- `components/FinanceView.tsx` - finance snapshot UI.
- `components/BrainDumpView.tsx` - brain dump capture/AI organization UI.
- `components/NotificationsView.tsx` - notifications list UI.
- `components/KnowledgeBaseView.tsx` - knowledge base upload/search UI.
- `components/WeeklyResetView.tsx` - weekly reset UI.
- `components/Navigation.tsx` - navigation component.

## Services
- `services/authService.ts` - Firebase Auth token handling.
- `services/firestoreService.ts` - Firestore REST-backed memory/calendar operations.
- `services/gmailService.ts` - Google OAuth/Gmail/Calendar client helpers.
- `services/geminiService.ts` - AI feature wrappers using backend text generation.
- `services/storageService.ts` - localStorage-backed app data.
- `services/knowledgeService.ts` - knowledge base service calls.
- `services/audioUtils.ts` - audio utilities.

## Firebase Client Helpers
- `src/lib/barbieAI.js` - Firebase app init, Auth, callable wrappers.
- `src/lib/reminderNotifications.js` - Firestore reminder subscription and reminder updates.
- `src/lib/mobilePush.ts` - Capacitor push notification registration.

## Backend
- `functions/index.js` - Firebase Functions for chat, AI text generation, Google connection, Gmail backend, Telegram webhook, push scheduling.
- `functions/package.json` - Functions dependencies and scripts.

## Mobile
- `ios/` - Capacitor iOS project.
- `android/` - Capacitor Android project.

## Existing Docs
- `docs/assistant-architecture.md`
- `docs/google-telegram-setup.md`
- `docs/telegram-v1-deployment.md`

## Planning
- `planning/STATE.md` - current sprint state, baseline, known blockers, and next actions.
- `planning/DECISIONS.md` - durable project decisions, including FlutterFlow-first client mobile direction.
- `planning/RISKS.md` - open project and launch risks.
- `planning/QUESTIONS.md` - open owner, architect, and builder questions.
- `planning/sprints/001-existing-app-audit/` - existing app audit sprint.
- `planning/sprints/002-v1-stability-validation/` - V1 stability validation sprint.
- `planning/sprints/003-production-release-readiness/` - production release readiness sprint.
- `planning/sprints/004-controlled-web-v1-deploy/` - controlled web V1 deploy sprint, prepared but not run.
- `planning/sprints/005-local-repo-baseline-flutterflow-direction/` - FlutterFlow direction alignment sprint.

## Architect Packs
- `architect-packs/trina-002-v1-stability-validation.md`
- `architect-packs/trina-003-production-release-readiness.md`
- `architect-packs/trina-004-controlled-web-v1-deploy.md`
- `architect-packs/trina-005-flutterflow-direction-architect-pack.md`

## Sprint 005 Baseline
- Current branch: `main`.
- Git remote: `https://github.com/marketingaipros/trina.git`.
- Stack from `package.json`: Vite, React 19, Firebase, Tailwind CSS, Capacitor, TypeScript.
- Sprint 005 changed documentation only. App/runtime source files remain preserved.
