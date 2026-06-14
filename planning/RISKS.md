# Risks

## Active Risks

| Risk | Likelihood | Impact | Mitigation | Status |
|---|---:|---:|---|---|
| iOS PWA behavior differs from Android PWA behavior. | High | Medium | Provide separate iPhone Safari and Android Chrome install instructions and test separately where possible. | Open |
| Mobile browser speech recognition may be inconsistent in installed PWA mode. | Medium | Medium | Provide typed fallback, clear error states, and phone-specific UAT. | Active |
| Installed-phone PWA microphone capture may fail with `audio-capture` before any transcript is available. | High | High | Sprint 075 added fallback guidance; later real-phone installed PWA UAT passed after Hosting redeploy. | Mitigated |
| Mic-transcribed reminder text may miss the reminder parser and return wording/help text instead of creating a reminder. | High | High | Sprint 075 normalized spoken reminder transcripts and routed them through the same reminder path as typed Send. Real-phone installed PWA UAT passed after Hosting redeploy. | Mitigated |
| Reminder parsing may fall through to generic assistant response. | Medium | High | Route reminder intents before generic Q&A fallback. | Active |
| Reminder behavior may differ between browser tab and home-screen installed mode. | Medium | High | Validate from installed home-screen icon on real phone. | Active |
| Web Speech API behavior may differ inside installed PWA mode. | Medium | High | Require post-install UAT for visible answer, audible talk-back, spoken-text match, and Stop behavior. | Open |
| Reminder behavior may differ when the app is launched from home screen. | Medium | High | Require reminder create/appear/dismiss regression after PWA install. | Open |
| Service worker caching could serve stale app code. | Medium | Medium | Keep caching conservative in MVP or document refresh/update behavior clearly. | Open |
| Adding PWA files could accidentally change core app behavior. | Medium | High | Keep implementation scoped to manifest/icons/install metadata and minimal app shell changes. Run Sprint 073 regression checks. | Open |
| Existing untracked Sprint 064 and Sprint 072 files could be staged accidentally. | Medium | Medium | Explicitly stage only Sprint 074 files when committing. Verify with `git diff --cached --name-only`. | Open |
| The app may appear to pass automated browser checks while still failing for a real client because audio output is not heard. | Medium | High | Sprint 073 operator UAT in Chrome physically confirmed Barbie was heard speaking. | Mitigated |
| Browser speech output may fail because of autoplay restrictions, missing user gesture, disabled speech synthesis, missing voice availability, or muted audio output. | Medium | High | Sprint 073 uses user-triggered Play and operator UAT in Chrome confirmed audible output. | Mitigated |
| Barbie may speak stale text, placeholder text, partial text, or a different response than the visible answer. | Medium | High | Sprint 073 binds playback to the latest final visible answer and operator UAT confirmed spoken text matched the visible answer. | Mitigated |
| Deployed URL does not include the latest local/browser voice behavior. | Medium | High | Sprint 072 confirmed deploy drift and ran a Hosting-only deploy; fresh deployed assets now expose the local talk controls. | Mitigated |
| Browser speech synthesis may require a user gesture before playback. | High | Medium | Provide an explicit visible Talk/Play button instead of relying only on automatic speech. | Active |
| Voice playback may speak stale text, partial text, or internal/system text instead of the final visible Barbie answer. | Medium | High | Bind playback to the final visible assistant answer only and verify spoken text matches. | Active |
| Stop/disable behavior may not cancel active speech. | Medium | Medium | Sprint 073 local validation showed Stop returned to Play and operator UAT confirmed Stop/cancel worked or audio ended cleanly. | Mitigated |
| Fix could disturb typed Q&A or reminder behavior. | Medium | High | Sprint 072 deployed UAT passed typed Q&A, reminder acknowledgement, due reminder, dismiss, and feedback visibility. | Mitigated |
| Sprint 064 untracked files could be accidentally staged. | Medium | Medium | Check `git status --branch --short` before staging and stage only approved Sprint 072 files. | Active |
| Sprint 071 real audible voice may fail on the selected browser/device even though Sprint 070 proved speech synthesis text routing. | Medium | High | Sprint 071 stopped at HOLD because the deployed client URL did not expose talk-back controls and real audible output could not be verified. | Active |
| Sprint 071 deployed/current client URL may be stale or unconfirmed. | Medium | High | Sprint 071 tested `https://barbie-92edc.web.app/`; deployed talk-back behavior did not match the required Sprint 071 proof, so return-to-use is held. | Active |
| Sprint 071 could be mistaken for a Flutter/mobile packaging or deploy sprint. | Medium | High | Keep Sprint 071 UAT-only and create a separate sprint for deploy, Flutter, native/mobile packaging, or audio compatibility fixes. | Active |
| In-app reminders may require the browser/app to stay open. | Medium | Medium | Test reminder create/display/dismiss during Sprint 071 and disclose the limitation if it applies. | Active |
| Browser speech synthesis may require user interaction before audio can play. | Medium | Medium | Sprint 070 added explicit talk-back play/stop controls and optional enable behavior. | Mitigated |
| Client expects full voice conversation, but Sprint 070 only restores talk-back after typed/model answers. | Medium | Medium | Keep scope documented as talk-back response only, not full speech-to-text or phone-style voice agent. | Active |
| Talk-back code could replay stale answers or speak internal/system text. | Low | Medium | Sprint 070 routes only the final visible `typedReply` answer to speech synthesis. | Mitigated |
| Voice changes could break typed Q&A or reminders. | Low | High | Sprint 070 validation proved typed Q&A and reminder create/display/dismiss still work. | Mitigated |
| Different browsers/devices may have different available voices or audible output behavior. | Medium | Low | Use browser-native defaults and run real device/browser audible validation as a follow-up check. | Active |
| Adding paid TTS provider could introduce credentials, latency, and scope creep. | Low | Medium | Sprint 070 used browser speech synthesis and did not add paid TTS or credentials. | Mitigated |
| Deployed app may drift from current repo output in future sprints. | Medium | Medium | Compare deployed and local bundle hashes during release gates. | Follow-up |
| Client URL/path may be unclear. | Low | Medium | Use verified Firebase Hosting URLs for Sprint 068 limited return-to-use; record any future custom URL separately. | Follow-up |
| Anonymous auth posture may be inappropriate beyond limited return-to-use. | Medium | High | Treat anonymous/current access as limited return-to-use only and document production auth as follow-up. | Active |
| Reminder proof covers in-app due reminders, not browser/native push. | Medium | High | Use in-app reminders for Sprint 069 UAT; keep browser/native push as follow-up until proven. | Follow-up |
| Mic/voice is blocked by permission. | High | Medium | Use typed fallback for Sprint 069 UAT; keep voice permission/reliability as follow-up. | Follow-up |
| Feedback path is minimal email-only guidance. | Medium | Medium | Use `learnandgrowcc@gmail.com` and ask for structured feedback details during Sprint 069 UAT. | Follow-up |
| Sprint may expand into redesign, Flutter migration, or native packaging. | Medium | High | Sprint 069 closed from limited UAT feedback only; keep future packaging or migration in separate sprints. | Follow-up |
| Client may expect voice input to work immediately. | High | Medium | UAT checklist passed for typed usage; voice remains follow-up if desired. | Follow-up |
| Client may expect the app to speak answers out loud. | Medium | Medium | Talk-back/text-to-speech was not validated in Sprint 069; record as a future sprint if still desired. | Follow-up |
| Client may expect reminders to notify when the app is closed. | Medium | High | Sprint 069 validated in-app reminder behavior only; browser/native push remains follow-up if desired. | Follow-up |
| Client feedback may arrive through email without structured details. | Medium | Medium | Sprint 069 feedback was sufficient for first limited UAT closeout; use structured details for future issue reports. | Follow-up |
| Sprint 064 untracked files could be accidentally staged in later commits. | Medium | Medium | Builder must explicitly avoid staging Sprint 064 files unless separately approved. | Active |

## Sprint 073 Risk Control Rule

Sprint 073 is a narrow real audible voice recovery and physical device verification sprint.

Do not introduce Flutter, FlutterFlow migration, native/mobile packaging, Firebase settings changes without explicit approval, Firestore rule changes, credential changes, CEO Briefing work, UI redesign, backend/model redesign, new voice provider integration, speech-to-text, wake word, closed-app push implementation, or broad app cleanup into this sprint.

Sprint 073 may recommend client return-to-use only after a physical device/browser test proves typed Q&A, real audible talk-back, spoken-text match, Stop/cancel or clean speech end behavior, reminder create/due/dismiss, and feedback-link visibility.

## Sprint 072 Risk Control Rule

Sprint 072 is a narrow deployed talk-controls and audible voice UAT fix.

Do not introduce Flutter, FlutterFlow migration, native/mobile packaging, Firebase settings changes, Firestore rule changes, credential changes, CEO Briefing work, UI redesign, backend/model redesign, speech-to-text, wake word, closed-app push implementation, or broad app cleanup into this sprint.

Sprint 072 may recommend client return-to-use only after deployed UAT proves typed Q&A, real audible talk-back, spoken-text match, Stop/disable behavior, reminder create/due/dismiss, and feedback-link visibility.

Sprint 072 Hosting-only deploy restored deployed Talk/Play controls, but return-to-use remains held until real audible browser/device output and Stop/cancel behavior are physically verified.

## Sprint 071 Risk Control Rule

Sprint 071 is a client return-to-use UAT gate with a real audible voice check.

Do not introduce Flutter, FlutterFlow, native/mobile packaging, deploys, Firebase changes, Firestore rule changes, credential changes, CEO Briefing work, UI redesign, backend/model redesign, speech-to-text, wake word, closed-app push implementation, or broad app cleanup into this sprint.

Sprint 071 may record only evidence-backed `PASS`, `PASS WITH CAVEAT`, or `HOLD` recommendations after the approved UAT path is run.

Sprint 071 UAT evidence recorded `HOLD - client return-to-use blocked` because the deployed client URL did not expose visible Talk/Play/Stop/disable controls after a successful Barbie/model answer, and real audible browser/device speaker output could not be physically verified.

## Sprint 070 Risk Control Rule

Sprint 070 preserved the limited return-to-use boundary while restoring browser talk-back response only.

Do not introduce Flutter, native packaging, dashboard redesign, CRM features, voice input recovery, closed-app push implementation, paid TTS provider integration, credential changes, deploys, or broad app cleanup into this sprint.

## Prior Risk Control Rule

Sprint 069 should preserve the limited return-to-use boundary and avoid expanding client UAT into feature recovery or release hardening.

Do not introduce Flutter, native packaging, dashboard redesign, CRM features, voice recovery, talk-back, push implementation, or broad app cleanup into this sprint.
