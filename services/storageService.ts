import { Task, Transaction, CalendarEvent, TaskStatus, TransactionType, Priority } from '../types';
import { getLocalISODate } from '../utils/dateUtils';

const STORAGE_KEYS = {
  TASKS: 'trinaos_tasks',
  TRANSACTIONS: 'trinaos_transactions',
  EVENTS: 'trinaos_events',
  INITIALIZED: 'trinaos_initialized',
};

// ── Initial Seed Data ───────────────────────────────────────────
const INITIAL_TASKS: Task[] = [
  {
    id: '1',
    title: 'Renew daycare license',
    priority: Priority.HIGH,
    status: TaskStatus.TODO,
    delegatable: false,
    deadline: getLocalISODate(new Date(Date.now() + 86400000 * 2)),
    createdAt: Date.now(),
  },
  {
    id: '2',
    title: 'Order art supplies',
    priority: Priority.MEDIUM,
    status: TaskStatus.TODO,
    delegatable: true,
    createdAt: Date.now(),
  },
  {
    id: '3',
    title: 'Staff payroll review',
    priority: Priority.HIGH,
    status: TaskStatus.DONE,
    delegatable: false,
    createdAt: Date.now() - 86400000,
  },
];

const INITIAL_TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    type: TransactionType.INCOME,
    amount: 4500,
    category: 'Tuition',
    description: 'Weekly Tuition Batch 1',
    date: getLocalISODate(),
    createdAt: Date.now(),
  },
  {
    id: '2',
    type: TransactionType.EXPENSE,
    amount: 1200,
    category: 'Rent',
    description: 'Monthly Facility Rent Partial',
    date: getLocalISODate(),
    createdAt: Date.now(),
  },
  {
    id: '3',
    type: TransactionType.EXPENSE,
    amount: 300,
    category: 'Food',
    description: 'Weekly Snacks',
    date: getLocalISODate(new Date(Date.now() - 86400000)),
    createdAt: Date.now(),
  },
];

const INITIAL_EVENTS: CalendarEvent[] = [
  {
    id: '1',
    title: 'Parent Meeting',
    date: getNextDayOfWeek(2),
    time: '15:00',
    endTime: '16:00',
    description: 'Weekly parent check-in',
    category: 'parent',
    recurring: 'weekly',
    createdAt: Date.now(),
  },
  {
    id: '2',
    title: 'Staff Meeting',
    date: getNextDayOfWeek(5),
    time: '09:00',
    endTime: '10:00',
    description: 'Weekly staff sync',
    category: 'staff',
    recurring: 'weekly',
    createdAt: Date.now(),
  },
];

function getNextDayOfWeek(dayOfWeek: number): string {
  const today = new Date();
  const diff = (dayOfWeek - today.getDay() + 7) % 7;
  const next = new Date(today);
  next.setDate(today.getDate() + (diff === 0 ? 7 : diff));
  return getLocalISODate(next);
}

// ── Safe write with storage limit handling ──────────────────────
function safeWrite(key: string, data: any): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (e) {
    console.error("Storage write failed (possibly full):", e);
    return false;
  }
}

// ── Seed only on first ever load ────────────────────────────────
function ensureInitialized(): void {
  if (localStorage.getItem(STORAGE_KEYS.INITIALIZED)) return;
  localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(INITIAL_TASKS));
  localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(INITIAL_TRANSACTIONS));
  localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(INITIAL_EVENTS));
  localStorage.setItem(STORAGE_KEYS.INITIALIZED, 'true');
}

// ── Tasks ───────────────────────────────────────────────────────
export const getTasks = (): Task[] => {
  ensureInitialized();
  const stored = localStorage.getItem(STORAGE_KEYS.TASKS);
  return stored ? JSON.parse(stored) : [];
};

export const saveTasks = (tasks: Task[]) => {
  safeWrite(STORAGE_KEYS.TASKS, tasks);
};

export const addTask = (task: Omit<Task, 'id' | 'createdAt'>): Task => {
  const tasks = getTasks();
  const newTask: Task = {
    ...task,
    id: crypto.randomUUID(),
    createdAt: Date.now(),
  };
  saveTasks([...tasks, newTask]);
  return newTask;
};

export const updateTask = (updatedTask: Task) => {
  const tasks = getTasks();
  saveTasks(tasks.map(t => t.id === updatedTask.id ? updatedTask : t));
};

export const deleteTask = (taskId: string) => {
  const tasks = getTasks();
  saveTasks(tasks.filter(t => t.id !== taskId));
};

// ── Transactions ────────────────────────────────────────────────
export const getTransactions = (): Transaction[] => {
  ensureInitialized();
  const stored = localStorage.getItem(STORAGE_KEYS.TRANSACTIONS);
  return stored ? JSON.parse(stored) : [];
};

export const saveTransactions = (transactions: Transaction[]) => {
  safeWrite(STORAGE_KEYS.TRANSACTIONS, transactions);
};

export const addTransaction = (transaction: Omit<Transaction, 'id' | 'createdAt'>): Transaction => {
  const transactions = getTransactions();
  const newTransaction: Transaction = {
    ...transaction,
    id: crypto.randomUUID(),
    createdAt: Date.now(),
  };
  saveTransactions([...transactions, newTransaction]);
  return newTransaction;
};

export const deleteTransaction = (transactionId: string) => {
  const transactions = getTransactions();
  saveTransactions(transactions.filter(t => t.id !== transactionId));
};

// ── Calendar Events ─────────────────────────────────────────────
export const getEvents = (): CalendarEvent[] => {
  ensureInitialized();
  const stored = localStorage.getItem(STORAGE_KEYS.EVENTS);
  return stored ? JSON.parse(stored) : [];
};

export const saveEvents = (events: CalendarEvent[]) => {
  safeWrite(STORAGE_KEYS.EVENTS, events);
};

export const addEvent = (event: Omit<CalendarEvent, 'id' | 'createdAt'>): CalendarEvent => {
  const events = getEvents();
  const newEvent: CalendarEvent = {
    ...event,
    id: crypto.randomUUID(),
    createdAt: Date.now(),
  };
  saveEvents([...events, newEvent]);
  return newEvent;
};

export const updateEvent = (updatedEvent: CalendarEvent) => {
  const events = getEvents();
  saveEvents(events.map(e => e.id === updatedEvent.id ? updatedEvent : e));
};

export const deleteEvent = (eventId: string) => {
  const events = getEvents();
  saveEvents(events.filter(e => e.id !== eventId));
};

export const getEventsForDate = (date: string): CalendarEvent[] => {
  return getEvents().filter(e => e.date === date);
};

export const getUpcomingEvents = (days: number = 7): CalendarEvent[] => {
  const events = getEvents();
  const today = new Date();
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + days);
  const todayStr = getLocalISODate(today);
  const futureStr = getLocalISODate(futureDate);
  return events
    .filter(e => e.date >= todayStr && e.date <= futureStr)
    .sort((a, b) => a.date.localeCompare(b.date) || (a.time || '').localeCompare(b.time || ''));
};
