# Codex Builder Notes

## Repo Scope
Real app path:

```text
/Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice
```

Do not use old test app folders.

## Current Source Areas
- Frontend shell: `App.tsx`
- Voice/text UI: `components/VoiceDashboard.tsx`
- Firebase client/callables: `src/lib/barbieAI.js`
- Reminder listener: `src/lib/reminderNotifications.js`
- Mobile push helper: `src/lib/mobilePush.ts`
- Firebase Functions: `functions/index.js`
- Firestore rules: `firestore.rules`
- Hosting/functions config: `firebase.json`
- Capacitor config: `capacitor.config.ts`

## Safe Validation
Use:

```bash
npm run lint
npm run build
node --check functions/index.js
```

Use deployment commands only when explicitly requested:

```bash
firebase deploy --only functions
firebase deploy --only hosting
firebase deploy --only firestore:rules
```

## Secret Handling
Never commit `.env.local` or any token. Required runtime secrets are managed by Firebase Functions Secret Manager:
- `OPENROUTER_API_KEY`
- `GOOGLE_CLIENT_SECRET`
- `TELEGRAM_BOT_TOKEN`
