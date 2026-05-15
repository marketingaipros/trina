export enum AppMode {
  DASHBOARD = 'DASHBOARD',
  TASKS = 'TASKS',
  FINANCE = 'FINANCE',
  BRAIN_DUMP = 'BRAIN_DUMP',
  CALENDAR = 'CALENDAR',
  KNOWLEDGE_BASE = 'KNOWLEDGE_BASE',
  WEEKLY_RESET = 'WEEKLY_RESET',
  NOTIFICATIONS = 'NOTIFICATIONS',
}

export enum Priority {
  HIGH = 'High',
  MEDIUM = 'Medium',
  LOW = 'Low',
}

export enum TaskStatus {
  TODO = 'Todo',
  DONE = 'Done',
}

export interface Task {
  id: string;
  title: string;
  priority: Priority;
  deadline?: string;
  status: TaskStatus;
  delegatable: boolean;
  createdAt: number;
}

export enum TransactionType {
  INCOME = 'Income',
  EXPENSE = 'Expense',
}

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  category: string;
  description: string;
  date: string;
  createdAt: number;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time?: string;
  endTime?: string;
  description?: string;
  category: 'meeting' | 'deadline' | 'reminder' | 'personal' | 'parent' | 'staff';
  recurring?: 'none' | 'daily' | 'weekly' | 'monthly';
  notifyBefore?: number;
  createdAt: number;
}

export interface BrainDumpResult {
  tasks: Partial<Task>[];
  transactions: Partial<Transaction>[];
  analysis: string;
}

export interface WeeklyResetResult {
  summary: string;
  priorities: string[];
}
