# Sprint 067 Requirements - Customer Return-to-Use Proof

## Goal

Prove whether the customer can safely use the current app again for the core jobs she cares about:

1. Open the app.
2. Ask questions.
3. Receive useful app/model answers.
4. Create reminders or events.
5. Receive due reminder notification behavior, or document the exact limitation.
6. Use voice input if it exists in the current path.
7. Report problems through a clear feedback path.

## Current Status

Sprint 067 starts from:

```text
HOLD - Client UAT / V1 Beta not approved
```

Sprint 067 may recommend customer return-to-use only if the proof passes and owner approval is recorded.

Sprint 067 proof closeout result:

```text
HOLD - fix only the blockers preventing return-to-use
```

The deployed path passed typed backend/model answering and in-app reminder proof, but return-to-use approval remains blocked by deployed/local asset mismatch, missing feedback path, denied browser notification permission, denied microphone permission, missing first tester, missing owner/go-live approval, and unresolved owner-approved UAT/production auth posture.

## Outcome Options

The final recommendation must be exactly one of:

```text
APPROVE - give current app back to client
HOLD - fix only the blockers preventing return-to-use
```

No softer middle state is approved.

## Scope

Sprint 067 is a customer return-to-use proof sprint. It may include validation, evidence capture, and documentation. Runtime/source, deploy, Firebase, FlutterFlow, native, credential, CEO Briefing, and API documentation changes remain out of scope unless a separate explicit implementation request approves them.

## Required Proof

- Exact customer URL/path is identified.
- Current deployed app is compared against the intended current repo behavior.
- Login/access path is confirmed.
- Typed question answering is tested through the real customer path.
- Reminder creation is tested through the real customer path.
- Due reminder notification behavior is tested or classified as a blocker/approved limitation.
- Live voice input is tested if present and accessible.
- Feedback path for client issues is confirmed.
- First tester and owner/go-live approver are recorded.
- Owner approval is recorded before any `APPROVE` recommendation.

## Must Not Happen

- Do not modify runtime/source files without explicit implementation approval.
- Do not deploy.
- Do not modify Firebase settings.
- Do not modify FlutterFlow files.
- Do not modify native build files.
- Do not modify credentials.
- Do not create or modify CEO Briefing files.
- Do not modify `docs/API.md` unless a real API/interface documentation need is approved.
- Do not touch Sprint 064 untracked files.
- Do not stage, commit, push, or run implementation.
