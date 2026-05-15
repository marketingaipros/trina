# Barbie V1 Telegram Deployment

## Set the Telegram bot token secret

```bash
cd /Users/Dmoney/Documents/development/apps/trinaos/trinaos-voice
firebase functions:secrets:set TELEGRAM_BOT_TOKEN
```

Paste the Telegram bot token from BotFather when prompted.

## Deploy Functions

```bash
firebase deploy --only functions
```

## Set the Telegram webhook

Use the deployed function URL:

```text
https://us-central1-barbie-92edc.cloudfunctions.net/telegramWebhook
```

Set the webhook with the bot token as the validation token:

```bash
curl -X POST "https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/setWebhook" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://us-central1-barbie-92edc.cloudfunctions.net/telegramWebhook?token='"$TELEGRAM_BOT_TOKEN"'"
  }'
```

The webhook rejects requests without the matching token.
