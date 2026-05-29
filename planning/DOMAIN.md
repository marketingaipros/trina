# Domain

## Product
Barbie / TrinaOS Voice is a personal assistant app for a daycare owner.

## Primary User
The primary user is the daycare owner/operator.

## Core Jobs
- Capture reminders quickly.
- Show reminders when due.
- Support text fallback when voice/mic is unavailable.
- Maintain assistant memory/message history in Firestore.
- Provide lightweight dashboard views for tasks, calendar, finance, brain dump, notifications, and knowledge base.
- Provide future channels such as Telegram and mobile push.

## Launch Priority
V1 should prioritize reliability over broad integrations. Chat, reminders, auth, Firestore, and notification popups matter more than Gmail send.

## Business Rules Not Yet Confirmed
- Who besides the owner may use the assistant.
- Whether Telegram should map to a Firebase Auth user or remain `telegram:{id}`.
- Which calendar should be source of truth.
- Reminder timezone expectations for every channel.
