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
