
import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, BrainCircuit, Activity, Timer as TimerIcon, MapPin, ShieldCheck, Mail, CheckCircle, Sparkles, Loader2, Volume2, Square } from 'lucide-react';
import { getSmartBriefing } from '../services/geminiService';
import { Task, CalendarEvent } from '../types';
import { askBarbie } from '../src/lib/barbieAI.js';

interface VoiceDashboardProps {
  isConnected: boolean;
  isSpeaking: boolean;
  volume: number;
  micError?: string | null;
  onToggle: () => void;
  timer: number | null;
  initialTimerValue: number | null;
  notificationCount: number;
  isGmailConnected: boolean;
  onConnectGmail: () => void;
  tasks: Task[];
  events: CalendarEvent[];
  onAssistantCapture: (message: string, source: 'typed' | 'voice') => Task | null;
  onTestAlertSound: () => void;
}

const shouldUseSprint42StateFixture = (fixture: string) =>
  process.env.NODE_ENV !== 'production' &&
  typeof window !== 'undefined' &&
  new URLSearchParams(window.location.search)
    .get('trinaStateFixture')
    ?.split(',')
    .map((value) => value.trim())
    .includes(fixture);

const SPOKEN_NUMBER_WORDS: Record<string, string> = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
  ten: '10',
  eleven: '11',
  twelve: '12',
  fifteen: '15',
  twenty: '20',
  thirty: '30',
};

const REMINDER_TIME_PATTERN = '(\\d{1,4})\\s*(min|mins|minute|minutes|hr|hrs|hour|hours)';

const looksLikeReminderRequest = (message: string) =>
  /\b(remind me|set\s+(a\s+)?reminder|set\s+(a\s+)?timer|timer\s+(for\s+)?\d+|timer\s+(for\s+)?[a-z]+|notify me|in\s+\w+\s+(minutes?|hours?),?\s+remind me|in\s+\w+\s+(minutes?|hours?)\s+to\s+|in\s+\w+\s+(minutes?|hours?)\s+\w+|\w+\s+(minutes?|hours?)\s+to\s+|\w+\s+(minutes?|hours?)\s+\w+)\b/i.test(message);

const normalizeReminderRequest = (message: string) => {
  const cleanMessage = message.trim();
  if (!looksLikeReminderRequest(cleanMessage)) return cleanMessage;

  let normalized = cleanMessage
    .replace(/\b(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|fifteen|twenty|thirty)\b/gi, (match) => {
      return SPOKEN_NUMBER_WORDS[match.toLowerCase()] || match;
    })
    .replace(/\bin\s+(\d{1,4})\s+(minutes?|mins?|hours?|hrs?),?\s+remind me\s+to\s+/i, 'Remind me in $1 $2 to ')
    .replace(/\bin\s+(\d{1,4})\s+(minutes?|mins?|hours?|hrs?),?\s+remind me\s+/i, 'Remind me in $1 $2 to ');

  const bareInTimeWithTask = normalized.match(new RegExp(`^\\s*in\\s+${REMINDER_TIME_PATTERN}\\s+(?:to\\s+)?(.+?)\\s*[.!?]?\\s*$`, 'i'));
  if (bareInTimeWithTask) {
    const [, amount, unit, task] = bareInTimeWithTask;
    normalized = `Remind me in ${amount} ${unit} to ${task.trim()}`;
  }

  const bareTimeWithTask = normalized.match(new RegExp(`^\\s*${REMINDER_TIME_PATTERN}\\s+(?:to\\s+)?(.+?)\\s*[.!?]?\\s*$`, 'i'));
  if (bareTimeWithTask) {
    const [, amount, unit, task] = bareTimeWithTask;
    normalized = `Remind me in ${amount} ${unit} to ${task.trim()}`;
  }

  const timerMatch = normalized.match(/^\s*set\s+(?:a\s+)?timer\s+(?:for\s+)?(\d{1,4})\s*(min|mins|minute|minutes|hr|hrs|hour|hours)\s*$/i);
  if (timerMatch) {
    const [, amount, unit] = timerMatch;
    normalized = `Set a reminder in ${amount} ${unit} to timer done`;
  }

  return normalized;
};

const VoiceDashboard: React.FC<VoiceDashboardProps> = ({ 
  isConnected, 
  isSpeaking, 
  volume, 
  micError,
  onToggle,
  timer,
  initialTimerValue,
  notificationCount,
  isGmailConnected,
  onConnectGmail,
  tasks,
  events,
  onAssistantCapture,
  onTestAlertSound
}) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [briefing, setBriefing] = useState<string | null>(null);
  const [isBriefingLoading, setIsBriefingLoading] = useState(false);
  const [briefingError, setBriefingError] = useState<string | null>(null);
  const [isBriefingSpeaking, setIsBriefingSpeaking] = useState(false);
  const [typedMessage, setTypedMessage] = useState('');
  const [typedReply, setTypedReply] = useState<string | null>(null);
  const [typedError, setTypedError] = useState<string | null>(null);
  const [isTypingLoading, setIsTypingLoading] = useState(false);
  const [micSupportMessage, setMicSupportMessage] = useState<string | null>(null);
  const [isSpeechListening, setIsSpeechListening] = useState(false);
  const [isTalkBackEnabled, setIsTalkBackEnabled] = useState(false);
  const [isReplySpeaking, setIsReplySpeaking] = useState(false);
  const [talkBackMessage, setTalkBackMessage] = useState<string | null>(null);
  
  const prevIsConnected = useRef(isConnected);
  const prevIsSpeaking = useRef(isSpeaking);
  const synthRef = useRef<SpeechSynthesis | null>(typeof window !== 'undefined' ? window.speechSynthesis : null);
  const latestVisibleReplyRef = useRef<string | null>(null);
  const recognitionRef = useRef<any>(null);
  const micStreamRef = useRef<MediaStream | null>(null);
  const recognitionTimeoutRef = useRef<number | null>(null);
  const recognitionReceivedSpeechRef = useRef(false);

  const cleanupSpeechRecognition = () => {
    if (recognitionTimeoutRef.current) {
      window.clearTimeout(recognitionTimeoutRef.current);
      recognitionTimeoutRef.current = null;
    }

    if (recognitionRef.current) {
      recognitionRef.current.onresult = null;
      recognitionRef.current.onerror = null;
      recognitionRef.current.onend = null;
      try { recognitionRef.current.stop(); } catch (e) {}
      recognitionRef.current = null;
    }

    if (micStreamRef.current) {
      micStreamRef.current.getTracks().forEach(track => track.stop());
      micStreamRef.current = null;
    }
  };

  // Audio Synthesis Helper for UI sounds
  const playSound = (type: 'click' | 'connect' | 'disconnect' | 'success') => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === 'connect') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.15); // C6
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      } else if (type === 'disconnect') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1046.50, now); // C6
        osc.frequency.exponentialRampToValueAtTime(523.25, now + 0.15); // C5
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      } else if (type === 'success') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(659.25, now); // E5
        osc.frequency.setValueAtTime(880, now + 0.08); // A5
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      }
    } catch (e) {
      console.warn("Sound feedback failed:", e);
    }
  };

  useEffect(() => {
    const clock = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(clock);
  }, []);

  useEffect(() => {
    latestVisibleReplyRef.current = typedReply?.trim() || null;
  }, [typedReply]);

  useEffect(() => {
    const supportsSpeechRecognition = Boolean((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);
    const supportsMicCapture = Boolean(navigator.mediaDevices?.getUserMedia);

    if (!supportsSpeechRecognition || !supportsMicCapture) {
      setMicSupportMessage("Microphone is unavailable. Please type your message below.");
      return;
    }

    if (navigator.permissions?.query) {
      navigator.permissions
        .query({ name: 'microphone' as PermissionName })
        .then((status) => {
          if (status.state === 'denied') {
            setMicSupportMessage("Microphone permission was denied. Please enable it in browser settings or type your reminder below.");
          }

          status.onchange = () => {
            setMicSupportMessage(status.state === 'denied' ? "Microphone permission was denied. Please enable it in browser settings or type your reminder below." : null);
          };
        })
        .catch(() => {
          setMicSupportMessage(null);
        });
    }

    return () => {
      cleanupSpeechRecognition();

      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  // Sound triggers for state changes
  useEffect(() => {
    if (isConnected !== prevIsConnected.current) {
      if (isConnected) playSound('connect');
      else playSound('disconnect');
      prevIsConnected.current = isConnected;
    }
  }, [isConnected]);

  useEffect(() => {
    if (isSpeaking && !prevIsSpeaking.current) {
      playSound('success');
    }
    prevIsSpeaking.current = isSpeaking;
  }, [isSpeaking]);

  const rippleScale = 1 + Math.min(volume * 5, 0.9);
  const coreScale = 1 + Math.min(volume * 2, 0.2);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const louisvilleTime = currentTime.toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  const timerProgress = (timer !== null && initialTimerValue) 
    ? (timer / initialTimerValue) * 100 
    : 100;

  const captureLocalTask = (message: string, source: 'typed' | 'voice') => {
    const cleanMessage = message.trim();
    if (!cleanMessage || isTypingLoading) return;

    const capturedTask = onAssistantCapture(cleanMessage, source);
    if (!capturedTask) return;

    setTypedReply(`Saved "${capturedTask.title}" as a local task.`);
    setTypedError(null);
    setTypedMessage('');
  };

  const sendMessageToBarbie = async (message: string) => {
    const cleanMessage = message.trim();
    if (!cleanMessage || isTypingLoading) return;
    const barbieMessage = normalizeReminderRequest(cleanMessage);

    console.log("text submitted", cleanMessage);
    console.log("message sent", barbieMessage);
    setIsTypingLoading(true);
    setTypedError(null);
    setTypedReply(null);
    setMicSupportMessage(null);
    stopBarbieReply(null);

    try {
      const timeout = new Promise<never>((_, reject) => {
        window.setTimeout(() => {
          reject(new Error("Barbie took too long to respond. Please try again."));
        }, 30000);
      });

      const result = await Promise.race([
        askBarbie(barbieMessage),
        timeout,
      ]) as { reply?: string };

      const replyText = result?.reply || "Barbie responded, but no reply text came back.";

      setTypedReply(replyText);
      setTypedMessage('');
      setTalkBackMessage("Barbie's answer is ready. Press Play to hear the visible answer.");
    } catch (error: any) {
      console.error("callable error", error);
      setTypedError(error?.message || "Firebase Function call failed. Please try again.");
    } finally {
      setIsTypingLoading(false);
      console.log("loading reset");
    }
  };

  const handleToggleWithSound = async () => {
    console.log("mic clicked");
    playSound('click');

    if (isSpeechListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsSpeechListening(false);
      setMicSupportMessage("Voice input stopped. You can tap the mic to try again or type below.");
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setMicSupportMessage("Voice input is not supported in this browser. Please type your reminder below.");
      return;
    }

    if (!navigator.mediaDevices?.getUserMedia) {
      setMicSupportMessage("Microphone access is unavailable here. Please type your reminder below.");
      return;
    }

    try {
      cleanupSpeechRecognition();
      setMicSupportMessage("Requesting microphone permission...");
      setTypedError(null);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      micStreamRef.current = stream;
      recognitionReceivedSpeechRef.current = false;

      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        console.log("recognition started");
        setMicSupportMessage("Listening now. Say your reminder, then pause.");
        setTypedError(null);
        setIsSpeechListening(true);
        recognitionTimeoutRef.current = window.setTimeout(() => {
          if (!recognitionReceivedSpeechRef.current && recognitionRef.current) {
            setMicSupportMessage("No speech detected yet. Please try the mic again or type your reminder below.");
            try { recognitionRef.current.stop(); } catch (e) {}
          }
        }, 10000);
      };

      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0]?.transcript || '')
          .join(' ')
          .trim();

        console.log("transcript received", transcript);
        const normalizedTranscript = normalizeReminderRequest(transcript);
        console.log("mic transcript normalized", { raw: transcript, normalized: normalizedTranscript });
        recognitionReceivedSpeechRef.current = Boolean(transcript);
        if (recognitionTimeoutRef.current) {
          window.clearTimeout(recognitionTimeoutRef.current);
          recognitionTimeoutRef.current = null;
        }
        setIsSpeechListening(false);

        if (transcript) {
          setTypedMessage(normalizedTranscript);
          setMicSupportMessage("Voice captured. Sending it to Barbie now.");
          void sendMessageToBarbie(normalizedTranscript);
        } else {
          setMicSupportMessage("I did not catch any words. Please try the mic again or type your reminder below.");
        }
      };

      recognition.onerror = (event: any) => {
        console.log("recognition error", event);
        if (recognitionTimeoutRef.current) {
          window.clearTimeout(recognitionTimeoutRef.current);
          recognitionTimeoutRef.current = null;
        }
        setIsSpeechListening(false);

        if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
          setMicSupportMessage("Microphone permission was denied. Please enable it in browser settings or type your reminder below.");
        } else if (event.error === 'no-speech') {
          setMicSupportMessage("I did not hear anything. Please try again or type your reminder below.");
        } else if (event.error === 'audio-capture') {
          setMicSupportMessage("Microphone capture failed in the installed app. Open Barbie in your phone browser and try the mic there, or type the reminder. Typed reminders are working.");
        } else if (event.error === 'network') {
          setMicSupportMessage("Voice recognition had a network problem. Please try again or type your reminder below.");
        } else if (event.error === 'aborted') {
          setMicSupportMessage("Voice input stopped. You can tap the mic to try again or type below.");
        } else {
          setMicSupportMessage(`Voice input failed (${event.error || 'unknown error'}). Please try again or type your reminder below.`);
        }
      };

      recognition.onend = () => {
        if (recognitionTimeoutRef.current) {
          window.clearTimeout(recognitionTimeoutRef.current);
          recognitionTimeoutRef.current = null;
        }
        setIsSpeechListening(false);
        if (micStreamRef.current) {
          micStreamRef.current.getTracks().forEach(track => track.stop());
          micStreamRef.current = null;
        }

        if (!recognitionReceivedSpeechRef.current) {
          setMicSupportMessage((currentMessage) => currentMessage || "Voice input ended without speech. Please try again or type your reminder below.");
        }
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (error: any) {
      console.log("recognition error", error);
      setIsSpeechListening(false);

      if (error?.name === 'NotAllowedError' || error?.name === 'PermissionDeniedError') {
        setMicSupportMessage("Microphone permission was denied. Please enable it in browser settings or type your reminder below.");
      } else if (error?.name === 'NotFoundError') {
        setMicSupportMessage("No microphone was found. Please type your reminder below.");
      } else if (error?.name === 'NotReadableError') {
        setMicSupportMessage("The microphone is busy or unavailable. Please close other audio apps, retry, or type below.");
      } else {
        setMicSupportMessage("Microphone is unavailable. Please try again or type your reminder below.");
      }
    }
  };

  const handleGmailWithSound = () => {
    if (!isGmailConnected) {
      playSound('click');
      onConnectGmail();
    }
  };

  const handleSmartBriefing = async () => {
    if (isBriefingLoading) return;
    playSound('click');
    setIsBriefingLoading(true);
    setBriefing(null);
    setBriefingError(null);
    
    try {
      if (shouldUseSprint42StateFixture('ai-failure')) {
        throw new Error('Sprint 042 Daily Snapshot fixture');
      }

      const text = await getSmartBriefing(tasks, events);
      setBriefing(text);
      speakBriefing(text);
    } catch (e) {
      console.error("Briefing failed:", e);
      setBriefingError("Daily Snapshot is unavailable right now. Your tasks and schedule are still saved here.");
    } finally {
      setIsBriefingLoading(false);
    }
  };

  const speakBriefing = (text: string) => {
    if (!synthRef.current) return;
    synthRef.current.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = synthRef.current.getVoices();
    const barbieVoice = voices.find(v => v.name.includes('Google US English') || v.name.includes('Female')) || voices[0];
    
    if (barbieVoice) utterance.voice = barbieVoice;
    utterance.pitch = 1.1;
    utterance.rate = 1.0;
    
    utterance.onstart = () => setIsBriefingSpeaking(true);
    utterance.onend = () => setIsBriefingSpeaking(false);
    utterance.onerror = () => setIsBriefingSpeaking(false);
    
    synthRef.current.speak(utterance);
  };

  const stopBriefing = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsBriefingSpeaking(false);
    }
  };

  const speakBarbieReply = () => {
    const cleanText = latestVisibleReplyRef.current?.trim() || '';

    if (!cleanText || cleanText !== typedReply?.trim()) {
      setTalkBackMessage("Play is available after Barbie's final visible answer appears.");
      setIsReplySpeaking(false);
      return;
    }

    if (!synthRef.current || typeof SpeechSynthesisUtterance === 'undefined') {
      setTalkBackMessage("Talk-back is unavailable in this browser.");
      setIsReplySpeaking(false);
      return;
    }

    setTalkBackMessage(null);
    synthRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    const voices = synthRef.current.getVoices();
    const barbieVoice = voices.find(v => v.name.includes('Google US English') || v.name.includes('Female')) || voices[0];

    if (barbieVoice) utterance.voice = barbieVoice;
    utterance.pitch = 1.1;
    utterance.rate = 1.0;

    utterance.onstart = () => {
      setIsReplySpeaking(true);
      setTalkBackMessage("Barbie is speaking the visible answer.");
    };
    utterance.onend = () => {
      setIsReplySpeaking(false);
      setTalkBackMessage("Barbie finished speaking the visible answer.");
    };
    utterance.onerror = () => {
      setIsReplySpeaking(false);
      setTalkBackMessage("Talk-back could not play. You can still read Barbie's answer here.");
    };

    synthRef.current.speak(utterance);
    setIsReplySpeaking(true);
    setTalkBackMessage("Barbie is speaking the visible answer.");
  };

  const stopBarbieReply = (statusMessage: string | null = "Barbie audio stopped.") => {
    if (synthRef.current) {
      synthRef.current.cancel();
    }

    setIsReplySpeaking(false);
    setTalkBackMessage(statusMessage);
  };

  const toggleTalkBack = () => {
    const nextEnabled = !isTalkBackEnabled;

    setIsTalkBackEnabled(nextEnabled);
    setTalkBackMessage(nextEnabled ? "Talk-back is on. Press Play to hear Barbie's visible answer." : "Talk-back is off.");

    if (!nextEnabled) {
      stopBarbieReply();
    }
  };

  const handleTypedSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    await sendMessageToBarbie(typedMessage);
  };

  const handleCaptureSubmit = (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    captureLocalTask(typedMessage, 'typed');
  };

  return (
    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden bg-[#fff5f7] pb-20">
      <style>{`
        @keyframes subtle-breath {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        .animate-breath { animation: subtle-breath 4s ease-in-out infinite; }
        .pink-shadow { box-shadow: 0 10px 40px -10px rgba(244, 114, 182, 0.3); }
        .progress-ring { transform: rotate(-90deg); transform-origin: 50% 50%; }
        .transition-fast { transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1); }
        @media (max-width: 380px) and (max-height: 760px) {
          .home-avatar-section { padding-top: 1rem; }
          .home-orb-shell { width: 16rem; height: 16rem; margin-bottom: 0.5rem; }
          .home-orb-ring-outer { width: 17rem; height: 17rem; }
          .home-orb-ring-inner { width: 14rem; height: 14rem; }
          .home-orb-ripple { width: 10rem; height: 10rem; }
          .home-orb-speaking { width: 9rem; height: 9rem; }
          .home-orb-core { width: 9rem; height: 9rem; }
          .home-brain-icon { width: 5rem; height: 5rem; }
          .home-hero-copy { height: 4rem; margin-bottom: 1rem; }
          .home-primary-mic { padding: 2rem; }
          .home-primary-mic svg { width: 2.5rem; height: 2.5rem; }
          .home-typed-form { margin-top: 1rem; }
        }
      `}</style>
      
      {/* Location & Clock Top-Left */}
      <div className="absolute top-8 left-8 z-20 flex flex-col items-start gap-1">
        <div className="flex items-center gap-1.5 text-pink-400 font-bold text-[10px] uppercase tracking-[0.2em]">
          <MapPin size={10} />
          <span>EST • Louisville HQ</span>
        </div>
        <div className="text-3xl font-black text-gray-900 tracking-tighter tabular-nums leading-none">
          {louisvilleTime}
        </div>
        
        <div className="flex gap-2 mt-2">
          {/* Gmail Status */}
          <button 
            onClick={handleGmailWithSound}
            aria-label={isGmailConnected ? 'Gmail is connected' : 'Connect Gmail'}
            title={isGmailConnected ? 'Gmail is connected' : 'Connect Gmail'}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest transition-fast
              ${isGmailConnected 
                ? 'bg-green-50 text-green-600 border border-green-100 cursor-default shadow-sm' 
                : 'bg-pink-100 text-pink-500 border border-pink-200 hover:bg-pink-200 active:scale-95'}
            `}
          >
            {isGmailConnected ? <CheckCircle size={8} /> : <Mail size={8} />}
            <span>{isGmailConnected ? 'Gmail Active' : 'Connect Gmail'}</span>
          </button>
        </div>
      </div>

      {/* Strategic Status Top-Center */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="flex items-center gap-1.5 px-4 py-2 bg-white/80 backdrop-blur rounded-2xl border border-pink-50 shadow-sm text-green-500 text-[10px] font-black tracking-[0.2em]">
          <ShieldCheck size={12} />
          <span>STRATEGIC ADVISOR MODE</span>
        </div>
        
        <button 
          onClick={handleSmartBriefing}
          disabled={isBriefingLoading}
          aria-label="Create Daily Snapshot"
          title={isBriefingLoading ? 'Daily Snapshot is loading' : 'Create Daily Snapshot'}
          className="min-h-11 flex items-center gap-2 px-4 py-2 bg-pink-500 text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-lg shadow-pink-200 hover:bg-pink-600 active:scale-95 transition-all disabled:opacity-50"
        >
          {isBriefingLoading ? <Loader2 size={12} className="animate-spin" /> : <Sparkles size={12} />}
          <span>Daily Snapshot</span>
        </button>
      </div>

      {/* Briefing Overlay */}
      {briefing && (
        <div className="absolute top-32 left-1/2 -translate-x-1/2 z-30 w-full max-w-md px-6 animate-fade-in">
          <div className="bg-white p-6 rounded-[2rem] shadow-2xl border border-pink-100 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-pink-500" />
            <div className="flex justify-between items-start mb-3">
              <p className="text-[10px] font-black text-pink-500 uppercase tracking-[0.2em]">Daily Snapshot</p>
              <div className="flex gap-2">
                {isBriefingSpeaking ? (
                  <button onClick={stopBriefing} aria-label="Stop Daily Snapshot audio" title="Stop audio" className="w-11 h-11 flex items-center justify-center text-pink-500 bg-pink-50 rounded-lg hover:bg-pink-100">
                    <Square size={14} fill="currentColor" />
                  </button>
                ) : (
                  <button onClick={() => speakBriefing(briefing)} aria-label="Play Daily Snapshot audio" title="Play audio" className="w-11 h-11 flex items-center justify-center text-gray-400 hover:text-pink-500 bg-gray-50 hover:bg-pink-50 rounded-lg transition-colors">
                    <Volume2 size={14} />
                  </button>
                )}
                <button onClick={() => { setBriefing(null); stopBriefing(); }} aria-label="Close Daily Snapshot" title="Close" className="w-11 h-11 flex items-center justify-center text-gray-300 hover:text-gray-500 bg-gray-50 rounded-lg">
                  <Square size={14} className="rotate-45" />
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-800 font-medium leading-relaxed italic">"{briefing}"</p>
          </div>
        </div>
      )}

      {briefingError && (
        <div className="absolute top-32 left-1/2 -translate-x-1/2 z-30 w-full max-w-md px-6 animate-fade-in">
          <div className="bg-red-50 p-4 rounded-2xl shadow-xl border border-red-100 flex items-start gap-3">
            <p className="flex-1 text-sm text-red-700 font-semibold leading-relaxed">{briefingError}</p>
            <button
              type="button"
              onClick={() => setBriefingError(null)}
              aria-label="Dismiss Daily Snapshot error"
              title="Dismiss error"
              className="w-11 h-11 flex items-center justify-center text-red-400 hover:text-red-600 rounded-lg hover:bg-red-100"
            >
              <Square size={14} className="rotate-45" />
            </button>
          </div>
        </div>
      )}

      {/* Timer Display Top-Right */}
      {timer !== null && (
        <div className="absolute top-8 right-8 z-20 flex items-center gap-4 bg-white px-5 py-3 rounded-2xl shadow-xl border border-pink-100 animate-fade-in group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <svg className="progress-ring w-full h-full">
              <circle className="text-pink-50" strokeWidth="4" stroke="currentColor" fill="transparent" r="18" cx="20" cy="20" />
              <circle 
                className="text-pink-500 transition-all duration-1000" 
                strokeWidth="4" 
                strokeDasharray={113.1} 
                strokeDashoffset={113.1 - (113.1 * timerProgress) / 100}
                strokeLinecap="round" 
                stroke="currentColor" 
                fill="transparent" 
                r="18" cx="20" cy="20" 
              />
            </svg>
            <TimerIcon size={14} className="absolute text-pink-500 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Active Timer</span>
            <span className="text-xl font-black text-gray-900 tabular-nums">{formatTime(timer)}</span>
          </div>
        </div>
      )}

      {/* Main Avatar Section */}
      <div className="home-avatar-section flex-1 flex flex-col items-center justify-center w-full max-w-sm z-10 pt-10">
        
        <div className="home-orb-shell relative w-80 h-80 flex items-center justify-center mb-3">
          {/* Design Rings */}
          <div className="home-orb-ring-outer absolute inset-0 m-auto w-[340px] h-[340px] rounded-full bg-pink-100/20 border border-pink-100/30" />
          <div className="home-orb-ring-inner absolute inset-0 m-auto w-[280px] h-[280px] rounded-full bg-white border border-pink-100/50 shadow-sm" />
          
          {/* Reactive Ripples */}
          {(isConnected || isSpeechListening) && !isSpeaking && (
            <div 
              className="home-orb-ripple absolute inset-0 m-auto w-[200px] h-[200px] rounded-full bg-pink-200/40 transition-fast"
              style={{ transform: `scale(${isSpeechListening ? 1.25 : rippleScale})`, opacity: isSpeechListening || volume > 0.01 ? 1 : 0 }}
            />
          )}
          {isConnected && isSpeaking && (
            <div className="home-orb-speaking absolute inset-0 m-auto w-[180px] h-[180px] rounded-full bg-pink-400/20 animate-ping" />
          )}

          {/* Core Orb */}
          <div 
            className={`
              home-orb-core relative z-20 w-44 h-44 rounded-full flex items-center justify-center transition-fast
              ${isConnected || isSpeechListening
                ? 'bg-white border-4 border-pink-100 shadow-2xl scale-100' 
                : 'bg-white border border-pink-50 animate-breath pink-shadow'}
            `}
            style={{ 
              transform: (isConnected || isSpeechListening) && !isSpeaking ? `scale(${isSpeechListening ? 1.08 : coreScale})` : 'scale(1)',
              boxShadow: isConnected && volume > 0.02 ? `0 0 ${40 + volume * 200}px rgba(236, 72, 153, 0.4)` : ''
            }}
          >
            {isConnected && isSpeaking ? (
              <Activity className="text-pink-500 w-16 h-16 animate-pulse" />
            ) : (
              <div className="relative">
                <BrainCircuit 
                  className={`home-brain-icon w-24 h-24 transition-fast ${isConnected && volume > 0.01 ? 'text-pink-500 scale-110' : 'text-pink-100'}`}
                  strokeWidth={1.2} 
                />
                {!isConnected && (
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-pink-400 rounded-full animate-pulse border-4 border-white" />
                )}
              </div>
            )}
          </div>
        </div>

        {/* Hero Text */}
        <div className="home-hero-copy text-center mb-6 h-24 px-6">
           {!isConnected && !isSpeechListening ? (
             <div className="animate-fade-in">
                <h1 className="text-4xl font-black text-gray-900 tracking-tighter">HI I'M BARBIE!</h1>
             </div>
           ) : isConnected ? (
             <div className="animate-fade-in">
                <p className="text-2xl font-black text-gray-900 tracking-tight transition-fast">
                   {isSpeaking ? 'Barbie Active...' : 'Listening...'}
                </p>
                <div className="flex gap-1.5 justify-center mt-6 h-8 items-center">
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                    <div 
                      key={i} 
                      className={`w-2 rounded-full transition-fast bg-pink-400`}
                      style={{ height: isSpeaking ? '32px' : `${10 + (Math.random() * volume * 300)}%`, minHeight: '8px' }}
                    />
                  ))}
                </div>
             </div>
           ) : null}
           {isSpeechListening && !isConnected && (
             <div className="animate-fade-in">
                <p className="text-2xl font-black text-gray-900 tracking-tight transition-fast">Listening...</p>
             </div>
           )}
        </div>

        <div className="home-alert-test w-full px-6 mb-4 z-30">
          <div className="rounded-2xl border border-pink-100 bg-white/90 p-3 shadow-sm">
            <button
              type="button"
              onClick={onTestAlertSound}
              aria-label="Test Alert Sound"
              title="Test Alert Sound"
              className="min-h-11 w-full flex items-center justify-center gap-2 rounded-xl bg-pink-500 px-4 py-3 text-xs font-black uppercase tracking-widest text-white shadow-md shadow-pink-100 hover:bg-pink-600 active:scale-95 transition-all"
            >
              <Volume2 size={16} />
              <span>Test Alert Sound</span>
            </button>
            <p className="mt-2 text-center text-[11px] font-bold text-gray-500 leading-relaxed">
              Works best with Barbie open, volume on, and silent mode off. iPhone may block sound during calls or locked/background use.
            </p>
          </div>
        </div>

        {/* Large Mic Button */}
        <button
          onClick={handleToggleWithSound}
          aria-label={isConnected || isSpeechListening ? 'Stop voice ask' : 'Ask Barbie by voice'}
          title={isConnected || isSpeechListening ? 'Stop voice ask' : 'Ask Barbie by voice'}
          className={`
            home-primary-mic p-12 rounded-full shadow-[0_20px_60px_-15px_rgba(244,114,182,0.5)] transition-all duration-500 transform active:scale-90 z-30 group relative
            ${isConnected || isSpeechListening
              ? 'bg-white border-[3px] border-pink-500 text-pink-500' 
              : 'bg-gradient-to-br from-pink-400 via-rose-500 to-pink-600 text-white hover:scale-105'
            }
          `}
        >
          {isConnected || isSpeechListening ? <MicOff size={48} strokeWidth={2.5} /> : <Mic size={48} strokeWidth={2.5} />}
          <div className="absolute -inset-4 bg-pink-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>

        {(micError || micSupportMessage) && !isConnected && (
          <p className="mt-5 px-6 text-center text-xs font-bold text-pink-500 uppercase tracking-widest">
            {micError || micSupportMessage}
          </p>
        )}

        <form onSubmit={handleTypedSubmit} className="home-typed-form w-full mt-6 px-6 space-y-3">
          <div className="flex items-center gap-2 bg-white border border-pink-100 rounded-2xl shadow-lg p-2">
            <input
              value={typedMessage}
              onChange={(e) => setTypedMessage(e.target.value)}
              disabled={isTypingLoading}
              placeholder="Ask Barbie, or type Capture task: ..."
              className="flex-1 min-w-0 px-4 py-3 bg-transparent text-sm font-semibold text-gray-800 placeholder:text-pink-200 outline-none disabled:opacity-60"
            />
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCaptureSubmit}
                disabled={!typedMessage.trim() || isTypingLoading}
                aria-label="Capture typed message as a task"
                title="Capture Task saves this text to Task Tracker"
                className="min-h-11 px-4 py-3 rounded-xl bg-gray-900 text-white text-xs font-black uppercase tracking-widest shadow-md hover:bg-gray-800 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                Capture Task
              </button>
              <button
                type="submit"
                disabled={!typedMessage.trim() || isTypingLoading}
                aria-label="Send typed message to Barbie"
                title="Send message"
                className="min-h-11 px-5 py-3 rounded-xl bg-pink-500 text-white text-xs font-black uppercase tracking-widest shadow-md shadow-pink-100 hover:bg-pink-600 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                Send
              </button>
            </div>
          </div>

          <p className="px-2 text-[11px] font-bold text-pink-400 leading-relaxed">
            Send asks Barbie. Capture Task saves an explicit task to Task Tracker.
          </p>

          <p className="px-2 text-[11px] font-bold text-gray-500 leading-relaxed">
            Need to report a problem? Email feedback to{' '}
            <a className="text-pink-500 underline underline-offset-2" href="mailto:learnandgrowcc@gmail.com">
              learnandgrowcc@gmail.com
            </a>
            .
          </p>

          {isTypingLoading && (
            <p className="text-center text-xs font-black text-pink-400 uppercase tracking-widest">
              Barbie is thinking...
            </p>
          )}

          {typedError && (
            <div className="bg-red-50 border border-red-100 text-red-600 text-sm font-semibold rounded-2xl p-4 shadow-sm">
              {typedError}
            </div>
          )}

          {typedReply && (
            <div className="bg-white border border-pink-100 rounded-2xl p-4 shadow-lg text-sm font-medium text-gray-800 leading-relaxed">
              <div className="flex items-start justify-between gap-3 mb-3">
                <p className="text-[10px] font-black text-pink-500 uppercase tracking-[0.2em]">Barbie Answer</p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={toggleTalkBack}
                    aria-pressed={isTalkBackEnabled}
                    aria-label={isTalkBackEnabled ? 'Disable Barbie talk-back' : 'Enable Barbie talk-back'}
                    title={isTalkBackEnabled ? 'Disable talk-back' : 'Enable talk-back'}
                    className={`min-h-11 px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-colors ${
                      isTalkBackEnabled
                        ? 'bg-pink-500 text-white shadow-sm shadow-pink-100 hover:bg-pink-600'
                        : 'bg-pink-50 text-pink-500 hover:bg-pink-100'
                    }`}
                  >
                    {isTalkBackEnabled ? 'Talk On' : 'Talk Off'}
                  </button>
                  {isReplySpeaking ? (
                    <button
                      type="button"
                      onClick={() => stopBarbieReply()}
                      aria-label="Stop Barbie answer audio"
                      title="Stop answer audio"
                      className="w-11 h-11 flex items-center justify-center text-pink-500 bg-pink-50 rounded-lg hover:bg-pink-100"
                    >
                      <Square size={14} fill="currentColor" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={speakBarbieReply}
                      aria-label="Play Barbie answer audio"
                      title="Play answer audio"
                      className="w-11 h-11 flex items-center justify-center text-gray-400 hover:text-pink-500 bg-gray-50 hover:bg-pink-50 rounded-lg transition-colors"
                    >
                      <Volume2 size={14} />
                    </button>
                  )}
                </div>
              </div>
              <p aria-label="Barbie visible answer">{typedReply}</p>
              {talkBackMessage && (
                <p className="mt-3 text-[11px] font-bold text-pink-400 leading-relaxed">
                  {talkBackMessage}
                </p>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default VoiceDashboard;
