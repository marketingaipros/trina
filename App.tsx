
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import Dashboard from './components/Dashboard';
import TasksView from './components/TasksView';
import FinanceView from './components/FinanceView';
import WeeklyResetView from './components/WeeklyResetView';
import NotificationsView from './components/NotificationsView';
import BrainDumpView from './components/BrainDumpView';
import CalendarView from './components/CalendarView';
import KnowledgeBaseView from './components/KnowledgeBaseView';
import * as Knowledge from './services/knowledgeService';
import { AppMode, Task, Transaction, CalendarEvent, BrainDumpResult } from './types';
import * as Storage from './services/storageService';
import { useLive } from './hooks/useLive';
import { BrainCircuit, Activity, X, Info, Bell } from 'lucide-react';
import * as Gmail from './services/gmailService';
import * as Firestore from './services/firestoreService';
import * as Auth from './services/authService';
import { getLocalISODate } from './utils/dateUtils';
import {
  completeReminder,
  isReminderDue,
  snoozeReminder,
  subscribePendingReminders,
} from './src/lib/reminderNotifications.js';
import { registerMobilePushNotifications } from './src/lib/mobilePush';
import { firebaseAuth } from './src/lib/barbieAI.js';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || 'PLACEHOLDER_GOOGLE_OAUTH_CLIENT_ID.apps.googleusercontent.com';

type ReminderNotification = {
  id: string;
  title?: string;
  message?: string;
  remindAt?: any;
  status?: string;
  type?: string;
};

const App: React.FC = () => {
  const [currentMode, setCurrentMode] = useState<AppMode>(AppMode.DASHBOARD);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [timerSeconds, setTimerSeconds] = useState<number | null>(null);
  const [initialTimerValue, setInitialTimerValue] = useState<number | null>(null);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [isGmailConnected, setIsGmailConnected] = useState(false);
  const [isCloudConnected, setIsCloudConnected] = useState(false);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [authUid, setAuthUid] = useState<string | null>(null);
  const [activeToast, setActiveToast] = useState<{ id: string; title: string; message: string; type: 'event' | 'timer' | 'info' } | null>(null);
  const [pendingReminders, setPendingReminders] = useState<ReminderNotification[]>([]);
  const [activeReminder, setActiveReminder] = useState<ReminderNotification | null>(null);

  const timerIntervalRef = useRef<number | null>(null);
  const refreshTokenIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastNotifiedRef = useRef<Set<string>>(new Set());
  const browserNotifiedRef = useRef<Set<string>>(new Set());
  const suppressedReminderUntilRef = useRef<Map<string, number>>(new Map());

  const playNotificationSound = useCallback(() => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime); // A5
      osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.5); // A4
      
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } catch (e) {
      console.warn("Could not play notification sound:", e);
    }
  }, []);

  useEffect(() => {
    if (!("Notification" in window)) return;
    if (Notification.permission === "default") {
      Notification.requestPermission().catch(() => {});
    }
  }, []);

  useEffect(() => {
    return onAuthStateChanged(firebaseAuth, async (user) => {
      if (!user) {
        setAuthUid(null);
        setAuthToken(null);
        setIsCloudConnected(false);
        return;
      }

      try {
        const token = await user.getIdToken();
        Firestore.setAuth(token, user.uid);
        Knowledge.setKnowledgeAuth(token, user.uid);
        setAuthToken(token);
        setAuthUid(user.uid);
        setIsCloudConnected(true);
        window.localStorage.setItem('barbie_firebase_uid', user.uid);
      } catch (error) {
        console.warn("Auth state token refresh failed:", error);
      }
    });
  }, []);

  useEffect(() => {
    if (!authUid) {
      setPendingReminders([]);
      return () => {};
    }

    return subscribePendingReminders(
      authUid,
      (reminders: ReminderNotification[]) => {
        setPendingReminders(reminders);
      },
      (error: any) => {
        console.warn("Reminder listener failed:", error);
      },
    );
  }, [authUid]);

  useEffect(() => {
    const checkDueReminders = () => {
      if (activeReminder) return;

      const dueReminder = pendingReminders
        .filter((reminder) => reminder.status === "pending" && reminder.type === "reminder")
        .find((reminder) => {
          const suppressedUntil = suppressedReminderUntilRef.current.get(reminder.id);
          if (suppressedUntil && suppressedUntil > Date.now()) return false;
          if (suppressedUntil && suppressedUntil <= Date.now()) {
            suppressedReminderUntilRef.current.delete(reminder.id);
          }
          return isReminderDue(reminder);
        });

      if (!dueReminder) return;

      setActiveReminder(dueReminder);
      playNotificationSound();

      if ("Notification" in window && Notification.permission === "granted" && !browserNotifiedRef.current.has(dueReminder.id)) {
        new Notification("Reminder", {
          body: dueReminder.title || dueReminder.message || "You have a reminder.",
        });
        browserNotifiedRef.current.add(dueReminder.id);
      }
    };

    checkDueReminders();
    const interval = setInterval(checkDueReminders, 5000);
    return () => clearInterval(interval);
  }, [activeReminder, pendingReminders, playNotificationSound]);

  // ── Initialize storage, Gmail, and Cloud Auth ─────────────────
  useEffect(() => {
    let checkTokenInterval: ReturnType<typeof setInterval>;

    try {
      setTasks(Storage.getTasks());
      setTransactions(Storage.getTransactions());
      setEvents(Storage.getEvents());
    } catch (e) {
      console.error("Database initialization error:", e);
    }

    Gmail.initGmailAuth(GOOGLE_CLIENT_ID).catch(console.error);

    checkTokenInterval = setInterval(() => {
      if (Gmail.getAccessToken()) {
        setIsGmailConnected(true);
        clearInterval(checkTokenInterval);
      }
    }, 1000);

    Auth.ensureCloudAuth()
      .then(({ token, uid, refreshToken }) => {
        Firestore.setAuth(token, uid);
        Knowledge.setKnowledgeAuth(token, uid);
        if (refreshToken) Auth.setRefreshToken(refreshToken);
        setAuthToken(token);
        setAuthUid(uid);
        window.localStorage.setItem('barbie_firebase_uid', uid);
        setIsCloudConnected(true);
        console.log('Cloud connected, UID:', uid);
        registerMobilePushNotifications().catch((pushErr) => {
          console.warn('Mobile push setup skipped or failed:', pushErr);
        });

        refreshTokenIntervalRef.current = setInterval(async () => {
          try {
            const fresh = await Auth.refreshAuthToken();
            Firestore.setAuth(fresh.token, fresh.uid);
            Knowledge.setKnowledgeAuth(fresh.token, fresh.uid);
            if (fresh.refreshToken) Auth.setRefreshToken(fresh.refreshToken);
            setAuthToken(fresh.token);
            setAuthUid(fresh.uid);
            window.localStorage.setItem('barbie_firebase_uid', fresh.uid);
            console.log('Auth token refreshed');
          } catch (e) {
            console.warn('Token refresh failed:', e);
          }
        }, 50 * 60 * 1000);

        Firestore.listCalendarEvents()
          .then(cloudEvents => {
            if (cloudEvents.length > 0) {
              Storage.saveEvents(cloudEvents);
              setEvents(cloudEvents);
            } else {
              const localEvents = Storage.getEvents();
              Promise.allSettled(localEvents.map(event => Firestore.saveCalendarEvent(event)))
                .catch(syncErr => console.warn('Calendar seed sync failed:', syncErr));
            }
          })
          .catch(syncErr => {
            console.warn('Calendar cloud load failed, using local events:', syncErr);
          });
      })
      .catch(err => {
        console.warn('Cloud auth failed:', err);
        setIsCloudConnected(false);
      });

    return () => {
      if (checkTokenInterval) clearInterval(checkTokenInterval);
      if (refreshTokenIntervalRef.current) clearInterval(refreshTokenIntervalRef.current);
    };
  }, []);

  // ── Notification checker for upcoming events ──────────────────
  useEffect(() => {
    const checkNotifications = () => {
      const now = new Date();
      
      const upcoming = events.filter(e => {
        if (!e.time) return false;
        
        const eventDate = new Date(`${e.date}T${e.time}:00`);
        if (isNaN(eventDate.getTime())) return false;

        const diffMs = eventDate.getTime() - now.getTime();
        const diffMins = diffMs / (1000 * 60);

        // Notify from 15 mins before until 15 mins after it starts
        const isDue = diffMins >= -15 && diffMins <= 15;
        
        // Trigger toast if it's exactly starting or just about to (within 1 min)
        // and we haven't notified for this event in this window yet
        if (isDue && diffMins >= -1 && diffMins <= 1 && !lastNotifiedRef.current.has(e.id)) {
          setActiveToast({
            id: e.id,
            title: e.title,
            message: `Event starting now: ${e.time}`,
            type: 'event'
          });
          lastNotifiedRef.current.add(e.id);
          playNotificationSound();
          
          console.log(`NOTIFICATION: ${e.title} is starting.`);
        }

        return isDue;
      });

      // Cleanup lastNotifiedRef for events that are no longer in the window
      const upcomingIds = new Set(upcoming.map(e => e.id));
      lastNotifiedRef.current.forEach(id => {
        if (!upcomingIds.has(id)) {
          lastNotifiedRef.current.delete(id);
        }
      });

      setNotifications(upcoming.map(e => {
        const eventDate = new Date(`${e.date}T${e.time}:00`);
        const diffMins = (eventDate.getTime() - now.getTime()) / (1000 * 60);
        return {
          id: e.id,
          type: 'event',
          title: e.title,
          message: diffMins < 0 ? `Started at ${e.time}` : `Coming up at ${e.time}`,
          date: e.date,
          time: e.time,
          isPast: diffMins < 0
        };
      }));
    };

    const interval = setInterval(checkNotifications, 10000); // Check every 10s for better responsiveness
    checkNotifications();
    return () => clearInterval(interval);
  }, [events]);

  // ── Timer countdown ───────────────────────────────────────────
  useEffect(() => {
    if (timerSeconds !== null && timerSeconds > 0) {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = window.setInterval(() => {
        setTimerSeconds(prev => (prev !== null && prev > 0) ? prev - 1 : 0);
      }, 1000);
    } else if (timerSeconds === 0) {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      setTimerSeconds(null);
      setInitialTimerValue(null);
      playNotificationSound();
      setActiveToast({
        id: 'timer-expired',
        title: 'Timer Expired',
        message: 'Trina, your countdown has finished.',
        type: 'timer'
      });
    }
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [timerSeconds]);

  // ── Gmail connect handler ─────────────────────────────────────
  const handleGmailConnect = () => {
    Gmail.requestGmailToken();
  };

  const handleDismissReminder = async () => {
    if (!activeReminder) return;
    const reminderId = activeReminder.id;
    suppressedReminderUntilRef.current.set(reminderId, Number.MAX_SAFE_INTEGER);
    setPendingReminders(prev => prev.filter(reminder => reminder.id !== reminderId));
    setActiveReminder(null);

    try {
      await completeReminder(reminderId);
    } catch (e) {
      console.warn("Failed to complete reminder:", e);
      setActiveToast({
        id: `reminder-error-${reminderId}`,
        title: "Reminder Error",
        message: "Could not dismiss reminder. Please try again.",
        type: "info",
      });
    }
  };

  const handleSnoozeReminder = async () => {
    if (!activeReminder) return;
    const reminderId = activeReminder.id;
    const snoozedUntil = Date.now() + 5 * 60 * 1000;
    suppressedReminderUntilRef.current.set(reminderId, snoozedUntil);
    setPendingReminders(prev => prev.filter(reminder => reminder.id !== reminderId));
    setActiveReminder(null);
    browserNotifiedRef.current.delete(reminderId);

    try {
      await snoozeReminder(reminderId, 5);
    } catch (e) {
      console.warn("Failed to snooze reminder:", e);
      setActiveToast({
        id: `reminder-error-${reminderId}`,
        title: "Reminder Error",
        message: "Could not snooze reminder. Please try again.",
        type: "info",
      });
    }
  };

  const addCalendarEvent = useCallback(async (event: Omit<CalendarEvent, 'id' | 'createdAt'>) => {
    const newEvent = Storage.addEvent(event);
    setEvents(prev => [...prev, newEvent]);

    if (isCloudConnected) {
      try {
        await Firestore.saveCalendarEvent(newEvent);
      } catch (e) {
        console.warn('Cloud calendar save failed; event kept locally:', e);
      }
    }

    return newEvent;
  }, [isCloudConnected]);

  const updateCalendarEvent = useCallback(async (event: CalendarEvent) => {
    Storage.updateEvent(event);
    setEvents(Storage.getEvents());

    if (isCloudConnected) {
      try {
        await Firestore.saveCalendarEvent(event);
      } catch (e) {
        console.warn('Cloud calendar update failed; local event updated:', e);
      }
    }
  }, [isCloudConnected]);

  const deleteCalendarEvent = useCallback(async (eventId: string) => {
    Storage.deleteEvent(eventId);
    setEvents(Storage.getEvents());

    if (isCloudConnected) {
      try {
        await Firestore.deleteCalendarEvent(eventId);
      } catch (e) {
        console.warn('Cloud calendar delete failed; local event deleted:', e);
      }
    }
  }, [isCloudConnected]);

  // ── Tool call handler for voice assistant ─────────────────────
  const handleToolCall = useCallback(async (name: string, args: any) => {
    if (name === 'changeView') {
      const mode = args.view as AppMode;
      if (mode) setCurrentMode(mode);
      return { success: true };
    }

    if (name === 'setTimer') {
      const secs = Math.round(args.minutes * 60);
      setTimerSeconds(secs);
      setInitialTimerValue(secs);
      return { success: true, message: `Timer set for ${args.minutes} minutes` };
    }

    if (name === 'stopTimer') {
      setTimerSeconds(null);
      setInitialTimerValue(null);
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      return { success: true, message: "Timer stopped and cleared." };
    }

    if (name === 'list_emails') {
      if (!isGmailConnected) return { error: "Gmail not connected. Please ask Trina to tap 'Connect Gmail'." };
      try {
        const emails = await Gmail.listMessages(args.count || 5);
        return { emails, status: `Retrieved unread emails from ${Gmail.getDaycareGoogleAccount()}.` };
      } catch (e: any) {
        return { error: e.message };
      }
    }

    if (name === 'draft_email_reply') {
      if (!isGmailConnected) return { error: "Google Workspace not connected. Please ask Trina to tap 'Connect Gmail'." };
      try {
        const draft = await Gmail.draftReplyToEmail(args.threadId, args.to, args.subject, args.body);
        return { success: true, draft, message: "Draft created for review." };
      } catch (e: any) {
        return { error: e.message };
      }
    }

    if (name === 'reply_to_email') {
      if (!isGmailConnected) return { error: "Gmail not connected." };
      try {
        await Gmail.replyToEmail(args.threadId, args.to, args.subject, args.body);
        return { success: true, message: "Reply sent successfully." };
      } catch (e: any) {
        return { error: e.message };
      }
    }

    if (name === 'archive_email') {
      try {
        await Gmail.archiveMessage(args.id);
        return { success: true, message: "Email archived." };
      } catch (e: any) {
        return { error: e.message };
      }
    }

    if (name === 'addTask') {
      const newTask = Storage.addTask({
        title: args.title,
        priority: (args.priority as any) || 'Medium',
        status: 'Todo' as any,
        delegatable: false,
        deadline: args.deadline,
      });
      setTasks(prev => [...prev, newTask]);
      return { success: true, task: newTask };
    }

    if (name === 'addEvent') {
      const newEvent = await addCalendarEvent({
        title: args.title,
        date: args.date || getLocalISODate(),
        time: args.time,
        endTime: args.endTime,
        description: args.description || '',
        category: args.category || 'meeting',
        recurring: args.recurring || 'none',
      });
      return { success: true, event: newEvent };
    }

    if (name === 'getEvents') {
      const days = args.days || 7;
      const upcoming = Storage.getUpcomingEvents(days);
      return { events: upcoming, count: upcoming.length };
    }

    if (name === 'list_google_calendar_events') {
      if (!isGmailConnected) return { error: "Google Calendar not connected. Please ask Trina to tap 'Connect Gmail'." };
      try {
        const googleEvents = await Gmail.listCalendarEvents(args.days || 7);
        return { events: googleEvents, count: googleEvents.length };
      } catch (e: any) {
        return { error: e.message };
      }
    }

    if (name === 'create_google_calendar_event') {
      if (!isGmailConnected) return { error: "Google Calendar not connected. Please ask Trina to tap 'Connect Gmail'." };
      try {
        const googleEvent = await Gmail.createCalendarEvent({
          title: args.title,
          date: args.date || getLocalISODate(),
          time: args.time,
          endTime: args.endTime,
          description: args.description || '',
          reminders: args.reminderMinutes ? [args.reminderMinutes] : [15],
        });

        await addCalendarEvent({
          title: args.title,
          date: args.date || getLocalISODate(),
          time: args.time,
          endTime: args.endTime,
          description: `${args.description || ''}${googleEvent.htmlLink ? `\nGoogle Calendar: ${googleEvent.htmlLink}` : ''}`.trim(),
          category: args.category || 'reminder',
          recurring: args.recurring || 'none',
          notifyBefore: args.reminderMinutes || 15,
        });

        return { success: true, event: googleEvent, message: "Google Calendar event created with reminder." };
      } catch (e: any) {
        return { error: e.message };
      }
    }

    if (name === 'update_google_calendar_event') {
      if (!isGmailConnected) return { error: "Google Calendar not connected." };
      try {
        const googleEvent = await Gmail.updateCalendarEvent(args.googleEventId, {
          title: args.title,
          date: args.date,
          time: args.time,
          endTime: args.endTime,
          description: args.description || '',
          reminders: args.reminderMinutes ? [args.reminderMinutes] : [15],
        });
        return { success: true, event: googleEvent };
      } catch (e: any) {
        return { error: e.message };
      }
    }

    if (name === 'delete_google_calendar_event') {
      if (!isGmailConnected) return { error: "Google Calendar not connected." };
      try {
        await Gmail.deleteCalendarEvent(args.googleEventId);
        return { success: true, message: "Google Calendar event deleted." };
      } catch (e: any) {
        return { error: e.message };
      }
    }

    if (name === 'deleteEvent') {
      await deleteCalendarEvent(args.eventId);
      return { success: true, message: "Event deleted." };
    }

    if (name === 'updateEvent') {
      const existing = events.find(e => e.id === args.eventId);
      if (!existing) return { error: "Event not found." };
      
      const updated = {
        ...existing,
        title: args.title || existing.title,
        date: args.date || existing.date,
        time: args.time || existing.time,
        endTime: args.endTime || existing.endTime,
        description: args.description || existing.description,
        category: args.category || existing.category,
        recurring: args.recurring || existing.recurring,
      };
      
      await updateCalendarEvent(updated);
      return { success: true, event: updated, message: "Event updated successfully." };
    }

    if (name === 'check_database_health') {
      return { status: "Online", healthy: true, cloudStatus: isCloudConnected ? "Connected" : "Disconnected" };
    }

    if (name === 'getData') {
      return {
        tasks: Storage.getTasks(),
        finance: Storage.getTransactions(),
        events: Storage.getUpcomingEvents(7),
        timeZone: "America/New_York",
        gmailStatus: isGmailConnected ? "Connected" : "Disconnected",
      };
    }

    if (name === 'save_memory') {
      if (!isCloudConnected) return { error: "Cloud not connected." };
      try {
        const id = await Firestore.saveMemory(args.text, args.tags || ["voice"]);
        return { success: true, memoryId: id };
      } catch (e: any) {
        return { error: e.message };
      }
    }

    if (name === 'recall_memories') {
      if (!isCloudConnected) return { error: "Cloud not connected." };
      try {
        const memories = await Firestore.getMemories(args.count || 10);
        return { memories, count: memories.length };
      } catch (e: any) {
        return { error: e.message };
      }
    }

    if (name === 'learn_preference') {
      if (!isCloudConnected) return { error: "Cloud not connected." };
      try {
        const id = await Firestore.savePreference(args.text, args.category || 'general');
        return { success: true, preferenceId: id, message: "Learned and saved to my core operating preferences." };
      } catch (e: any) {
        return { error: e.message };
      }
    }

    if (name === 'recall_preferences') {
      if (!isCloudConnected) return { error: "Cloud not connected." };
      try {
        const preferences = await Firestore.getPreferences();
        return { preferences, count: preferences.length };
      } catch (e: any) {
        return { error: e.message };
      }
    }

    if (name === 'search_knowledge') {
      try {
        const answer = await Knowledge.queryKnowledgeBase(args.question);
        return { answer, source: "knowledge_base" };
      } catch (e: any) {
        return { error: e.message };
      }
    }

    if (name === 'sync_to_cloud') {
      if (!isCloudConnected) return { error: "Cloud not connected." };
      try {
        await Firestore.syncDataToFirestore(tasks, transactions, events);
        return { success: true, message: "Synced." };
      } catch (e: any) {
        return { error: e.message };
      }
    }

    return { success: false };
  }, [isGmailConnected, isCloudConnected, tasks, transactions, events, addCalendarEvent, updateCalendarEvent, deleteCalendarEvent]);

  // ── Voice assistant hook ──────────────────────────────────────
  const { connect, disconnect, isConnected, isSpeaking, volume, micError } = useLive({
    onToolCall: handleToolCall,
  });

  // ── Brain dump result handler ─────────────────────────────────
  const handleProcessBrainDumpResults = (result: BrainDumpResult) => {
    result.tasks.forEach(t => {
      if (t.title) {
        const nt = Storage.addTask({
          title: t.title,
          priority: (t.priority as any) || 'Medium',
          status: 'Todo' as any,
          delegatable: t.delegatable || false,
          deadline: t.deadline,
        });
        setTasks(prev => [...prev, nt]);
      }
    });

    result.transactions.forEach(tx => {
      if (tx.amount && tx.category) {
        const ntx = Storage.addTransaction({
          type: (tx.type as any) || 'Expense',
          amount: tx.amount,
          category: tx.category,
          description: tx.description || tx.category,
          date: tx.date || getLocalISODate(),
        });
        setTransactions(prev => [...prev, ntx]);
      }
    });
  };

  // ── Render content based on current mode ──────────────────────
  const renderContent = () => {
    switch (currentMode) {
      case AppMode.TASKS:
        return (
          <TasksView
            tasks={tasks}
            events={events}
            onAddTask={(t) => setTasks(prev => [...prev, Storage.addTask(t)])}
            onUpdateTask={(t) => { Storage.updateTask(t); setTasks(Storage.getTasks()); }}
            onBack={() => setCurrentMode(AppMode.DASHBOARD)}
          />
        );
      case AppMode.FINANCE:
        return (
          <FinanceView
            transactions={transactions}
            onAddTransaction={(tx) => setTransactions(prev => [...prev, Storage.addTransaction(tx)])}
            onBack={() => setCurrentMode(AppMode.DASHBOARD)}
          />
        );
      case AppMode.WEEKLY_RESET:
        return (
          <WeeklyResetView
            tasks={tasks}
            transactions={transactions}
            onBack={() => setCurrentMode(AppMode.DASHBOARD)}
          />
        );
      case AppMode.BRAIN_DUMP:
        return (
          <BrainDumpView
            onProcessResults={handleProcessBrainDumpResults}
            onBack={() => setCurrentMode(AppMode.DASHBOARD)}
          />
        );
      case AppMode.CALENDAR:
        return (
          <CalendarView
            events={events}
            onAddEvent={(e) => { void addCalendarEvent(e); }}
            onUpdateEvent={(e) => { void updateCalendarEvent(e); }}
            onDeleteEvent={(id) => { void deleteCalendarEvent(id); }}
            onBack={() => setCurrentMode(AppMode.DASHBOARD)}
          />
        );
      case AppMode.KNOWLEDGE_BASE:
        return (
          <KnowledgeBaseView
            onBack={() => setCurrentMode(AppMode.DASHBOARD)}
            authToken={authToken}
            authUid={authUid}
          />
        );
      case AppMode.NOTIFICATIONS:
        return (
          <NotificationsView
            notifications={notifications}
            onBack={() => setCurrentMode(AppMode.DASHBOARD)}
          />
        );
      default:
        return (
          <Dashboard
            onNavigate={setCurrentMode}
            isConnected={isConnected}
            isSpeaking={isSpeaking}
            volume={volume}
            micError={micError}
            onToggleVoice={() => isConnected ? disconnect() : connect()}
            timer={timerSeconds}
            initialTimerValue={initialTimerValue}
            notificationCount={notifications.length}
            isGmailConnected={isGmailConnected}
            onConnectGmail={handleGmailConnect}
            tasks={tasks}
            events={events}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#fff5f7] flex flex-col mx-auto max-w-2xl shadow-2xl overflow-hidden relative border-x border-pink-100">
      <main className="flex-1 overflow-hidden relative">
        {renderContent()}
      </main>

      {/* Toast Notification */}
      {activeToast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md animate-in slide-in-from-top duration-300">
          <div className={`p-4 rounded-2xl shadow-2xl border-2 flex items-start gap-4 ${
            activeToast.type === 'timer' ? 'bg-red-600 border-red-400 text-white' : 
            activeToast.type === 'event' ? 'bg-pink-600 border-pink-400 text-white' : 
            'bg-gray-900 border-gray-700 text-white'
          }`}>
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              {activeToast.type === 'timer' ? <Info size={20} /> : <Bell size={20} />}
            </div>
            <div className="flex-1">
              <h4 className="font-black uppercase tracking-tighter text-lg">{activeToast.title}</h4>
              <p className="text-sm opacity-90 font-medium">{activeToast.message}</p>
            </div>
            <button 
              onClick={() => setActiveToast(null)}
              className="p-1 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      {activeReminder && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[110] w-[90%] max-w-md animate-in slide-in-from-top duration-300">
          <div className="p-4 rounded-2xl shadow-2xl border-2 flex items-start gap-4 bg-pink-600 border-pink-400 text-white">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <Bell size={20} />
            </div>
            <div className="flex-1">
              <h4 className="font-black uppercase tracking-tighter text-lg">Reminder</h4>
              <p className="text-sm opacity-90 font-medium">{activeReminder.title || activeReminder.message || "You have a reminder."}</p>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={handleDismissReminder}
                  className="px-4 py-2 rounded-xl bg-white text-pink-600 text-xs font-black uppercase tracking-widest hover:bg-pink-50 active:scale-95 transition-all"
                >
                  Dismiss
                </button>
                <button
                  onClick={handleSnoozeReminder}
                  className="px-4 py-2 rounded-xl bg-white/15 text-white border border-white/30 text-xs font-black uppercase tracking-widest hover:bg-white/25 active:scale-95 transition-all"
                >
                  Snooze 5 minutes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentMode !== AppMode.DASHBOARD && isConnected && (
        <div
          className="fixed bottom-10 right-10 z-50 cursor-pointer animate-float"
          onClick={() => setCurrentMode(AppMode.DASHBOARD)}
        >
          <div className={`w-24 h-24 rounded-full flex items-center justify-center shadow-[0_15px_40px_-5px_rgba(244,114,182,0.6)] border-4 border-white ${isSpeaking ? 'bg-pink-600' : 'bg-pink-500'}`}>
            {isSpeaking ? <Activity className="text-white w-12 h-12" /> : <BrainCircuit className="text-white w-12 h-12" />}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
