import React, { useState } from 'react';
import { Task, TaskStatus, Priority, CalendarEvent } from '../types';
import { Plus, Check, Clock, ArrowLeft, CalendarDays, Sparkles, Loader2, X, Pencil, Trash2 } from 'lucide-react';
import { getLocalISODate } from '../utils/dateUtils';
import { getTaskPrioritization } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

interface TasksViewProps {
  tasks: Task[];
  events: CalendarEvent[];
  onAddTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  onUpdateTask: (task: Task) => void;
  onDeleteTask: (taskId: string) => void;
  onBack: () => void;
}

const shouldUseSprint42StateFixture = (fixture: string) =>
  process.env.NODE_ENV !== 'production' &&
  typeof window !== 'undefined' &&
  new URLSearchParams(window.location.search)
    .get('trinaStateFixture')
    ?.split(',')
    .map((value) => value.trim())
    .includes(fixture);

const TasksView: React.FC<TasksViewProps> = ({ tasks, events, onAddTask, onUpdateTask, onDeleteTask, onBack }) => {
  const [filter, setFilter] = useState<'all' | 'high' | 'todo'>('todo');
  const [isAdding, setIsAdding] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState<Priority>(Priority.MEDIUM);
  const [newTaskDeadline, setNewTaskDeadline] = useState('');
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [insights, setInsights] = useState<string | null>(null);
  const [insightsError, setInsightsError] = useState<string | null>(null);
  const [isLoadingInsights, setIsLoadingInsights] = useState(false);
  const fixtureEmpty = shouldUseSprint42StateFixture('empty');
  const fixtureAiFailure = shouldUseSprint42StateFixture('ai-failure');
  const visibleTasks = fixtureEmpty ? [] : tasks;
  const visibleEvents = fixtureEmpty ? [] : events;

  const today = getLocalISODate();

  // Get today's and upcoming events to show alongside tasks
  const upcomingEvents = visibleEvents
    .filter(e => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date) || (a.time || '').localeCompare(b.time || ''))
    .slice(0, 5);

  const filteredTasks = visibleTasks
    .filter(t => {
      if (filter === 'all') return true;
      if (filter === 'todo') return t.status === TaskStatus.TODO;
      if (filter === 'high') return t.priority === Priority.HIGH && t.status === TaskStatus.TODO;
      return true;
    })
    .sort((a, b) => {
      if (a.status !== b.status) return a.status === TaskStatus.TODO ? -1 : 1;
      const prioOrder = { [Priority.HIGH]: 0, [Priority.MEDIUM]: 1, [Priority.LOW]: 2 };
      return prioOrder[a.priority] - prioOrder[b.priority];
    });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    onAddTask({
      title: newTaskTitle,
      priority: newTaskPriority,
      status: TaskStatus.TODO,
      delegatable: false,
      deadline: newTaskDeadline || undefined,
    });
    setNewTaskTitle('');
    setNewTaskDeadline('');
    setIsAdding(false);
  };

  const toggleStatus = (task: Task) => {
    onUpdateTask({
      ...task,
      status: task.status === TaskStatus.TODO ? TaskStatus.DONE : TaskStatus.TODO
    });
  };

  const startEditing = (task: Task) => {
    setEditingTaskId(task.id);
    setEditingTitle(task.title);
  };

  const cancelEditing = () => {
    setEditingTaskId(null);
    setEditingTitle('');
  };

  const saveEditing = (task: Task) => {
    const title = editingTitle.trim();
    if (!title) return;
    onUpdateTask({
      ...task,
      title,
    });
    cancelEditing();
  };

  const deleteTask = (task: Task) => {
    const shouldDelete = window.confirm(`Delete task "${task.title}"?`);
    if (!shouldDelete) return;
    if (editingTaskId === task.id) {
      cancelEditing();
    }
    onDeleteTask(task.id);
  };

  const formatTime = (time?: string) => {
    if (!time) return '';
    const [h, m] = time.split(':');
    const hour = parseInt(h);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const display = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${display}:${m} ${ampm}`;
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + 'T00:00:00');
    if (dateStr === today) return 'Today';
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    if (dateStr === getLocalISODate(tomorrow)) return 'Tomorrow';
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  const isOverdue = (deadline?: string) => {
    if (!deadline) return false;
    return deadline < today;
  };

  const handleGetInsights = async () => {
    setIsLoadingInsights(true);
    setInsights(null);
    setInsightsError(null);
    try {
      if (fixtureAiFailure) {
        throw new Error('Sprint 042 Strategic Review fixture');
      }

      const result = await getTaskPrioritization(visibleTasks);
      setInsights(result);
    } catch (e) {
      console.error("Failed to get insights:", e);
      setInsightsError("Strategic Review is unavailable right now. Your task list is still usable.");
    } finally {
      setIsLoadingInsights(false);
    }
  };

  return (
    <div className="h-full flex flex-col bg-gray-50">
      <header className="flex items-center justify-between p-4 bg-white border-b border-gray-100">
        <div className="flex items-center gap-3">
            <button 
                onClick={onBack}
                aria-label="Return to Home"
                title="Return to Home"
                className="flex items-center gap-1 p-2 -ml-2 text-gray-400 hover:text-gray-900 rounded-full hover:bg-gray-100"
            >
                <ArrowLeft size={24} />
                <span className="sr-only">Home</span>
            </button>
            <h1 className="text-xl font-bold text-gray-900">Task Tracker</h1>
        </div>
        <div className="flex items-center gap-2">
            <button 
              onClick={handleGetInsights}
              disabled={isLoadingInsights || visibleTasks.length === 0}
              aria-label="Get Barbie's Strategic Review"
              className="p-2 bg-pink-50 text-pink-500 rounded-full hover:bg-pink-100 disabled:opacity-50 transition-all"
              title={visibleTasks.length === 0 ? "Add a task before requesting Strategic Review" : "Barbie's Strategic Review"}
            >
              {isLoadingInsights ? <Loader2 size={24} className="animate-spin" /> : <Sparkles size={24} />}
            </button>
            <button 
              onClick={() => setIsAdding(!isAdding)}
              aria-label={isAdding ? 'Close new task form' : 'Add task'}
              title={isAdding ? 'Close new task form' : 'Add task'}
              className="p-2 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100"
            >
              <Plus size={24} />
            </button>
        </div>
      </header>

      {/* AI Insights Display */}
      {insights && (
        <div className="p-4 pb-0">
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-pink-100 animate-fade-in relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-pink-500" />
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-pink-500" />
                <p className="text-[10px] font-black text-pink-500 uppercase tracking-[0.2em]">Barbie's Strategic Review</p>
              </div>
              <button 
                onClick={() => setInsights(null)}
                aria-label="Close strategic review"
                title="Close strategic review"
                className="text-gray-300 hover:text-gray-500 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
            <div className="prose prose-sm prose-pink max-w-none text-gray-800 font-medium leading-relaxed">
              <ReactMarkdown>{insights}</ReactMarkdown>
            </div>
          </div>
        </div>
      )}

      {insightsError && (
        <div className="p-4 pb-0">
          <div className="bg-red-50 p-4 rounded-2xl border border-red-100 shadow-sm animate-fade-in flex items-start gap-3">
            <p className="flex-1 text-sm text-red-700 font-semibold leading-relaxed">{insightsError}</p>
            <button
              type="button"
              onClick={() => setInsightsError(null)}
              aria-label="Dismiss strategic review error"
              title="Dismiss error"
              className="w-8 h-8 flex items-center justify-center text-red-400 hover:text-red-600 rounded-lg hover:bg-red-100"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Add Task Quick Form */}
      {isAdding && (
        <div className="p-4 bg-white border-b border-gray-100">
            <form onSubmit={handleAdd} className="animate-fade-in-down">
            <input
                type="text"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="What needs to be done?"
                className="w-full text-lg font-medium text-gray-900 placeholder-gray-400 border-none focus:ring-0 p-0 mb-3"
                autoFocus
            />
            <div className="flex items-center gap-2 mb-3">
              <CalendarDays size={14} className="text-gray-400" />
              <input
                type="date"
                value={newTaskDeadline}
                onChange={(e) => setNewTaskDeadline(e.target.value)}
                className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-700"
                placeholder="Deadline"
              />
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-2">
                {(Object.values(Priority) as Priority[]).map((p) => (
                    <button
                    key={p}
                    type="button"
                    onClick={() => setNewTaskPriority(p)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        newTaskPriority === p
                        ? 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                        : 'bg-gray-100 text-gray-500 border border-transparent'
                    }`}
                    >
                    {p}
                    </button>
                ))}
                </div>
                <button
                type="submit"
                disabled={!newTaskTitle.trim()}
                className="px-4 py-1.5 bg-indigo-600 text-white text-sm font-semibold rounded-lg disabled:opacity-50"
                >
                Add
                </button>
            </div>
            </form>
        </div>
      )}

      {/* Upcoming Events Banner */}
      {upcomingEvents.length > 0 && (
        <div className="p-4 pb-2">
          <h3 className="text-[10px] font-bold text-pink-500 uppercase tracking-widest mb-2 flex items-center gap-1">
            <CalendarDays size={10} /> Upcoming Schedule
          </h3>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex-shrink-0 px-3 py-2 bg-pink-50 border border-pink-100 rounded-xl min-w-[140px]">
                <p className="text-xs font-bold text-gray-900 truncate">{event.title}</p>
                <p className="text-[10px] text-pink-500 mt-0.5">
                  {formatDate(event.date)}{event.time ? ` • ${formatTime(event.time)}` : ''}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="p-4 pb-0">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {[
            { id: 'todo', label: 'To Do' },
            { id: 'high', label: 'High Priority' },
            { id: 'all', label: 'All Tasks' },
            ].map((f) => (
            <button
                key={f.id}
                onClick={() => setFilter(f.id as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                filter === f.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-600 border border-gray-200'
                }`}
            >
                {f.label}
            </button>
            ))}
        </div>
      </div>

      {/* Task List */}
      <div className="flex-1 space-y-3 overflow-y-auto px-4 pt-4 pb-24 no-scrollbar">
        {filteredTasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 px-8">
            <p className="font-bold text-gray-500">
              {visibleTasks.length === 0 ? 'No tasks yet.' : 'No tasks match this filter.'}
            </p>
            <p className="text-sm mt-2">
              {visibleTasks.length === 0
                ? 'Use the plus button here, or return Home and capture a task from the Assistant.'
                : 'Switch to All Tasks, or return Home and capture a new item from the Assistant.'}
            </p>
            <button
              onClick={onBack}
              aria-label="Return to Home"
              title="Return to Home"
              className="mt-5 px-4 py-2 bg-pink-50 text-pink-600 text-xs font-black uppercase tracking-widest rounded-xl border border-pink-100 hover:bg-pink-100 transition-colors"
            >
              Back Home
            </button>
          </div>
        ) : (
          filteredTasks.map((task) => {
            const isEditing = editingTaskId === task.id;

            return (
            <div
              key={task.id}
              className={`group flex items-start p-4 bg-white rounded-xl border transition-all ${
                task.status === TaskStatus.DONE
                  ? 'border-gray-100 opacity-60'
                  : isOverdue(task.deadline)
                  ? 'border-red-200 shadow-sm bg-red-50/30'
                  : 'border-gray-100 shadow-sm'
              }`}
            >
              <button
                onClick={() => toggleStatus(task)}
                aria-label={task.status === TaskStatus.DONE ? `Mark ${task.title} as to do` : `Mark ${task.title} done`}
                title={task.status === TaskStatus.DONE ? 'Mark as to do' : 'Mark done'}
                className={`flex-shrink-0 w-11 h-11 rounded-full border-2 flex items-center justify-center mr-3 transition-colors ${
                  task.status === TaskStatus.DONE
                    ? 'bg-green-500 border-green-500 text-white'
                    : 'border-gray-300 text-transparent hover:border-indigo-400'
                }`}
              >
                <Check size={14} strokeWidth={3} />
              </button>
              
              <div className="flex-1 min-w-0">
                {isEditing ? (
                  <div className="space-y-3">
                    <label htmlFor={`edit-task-title-${task.id}`} className="sr-only">
                      Edit task title
                    </label>
                    <input
                      id={`edit-task-title-${task.id}`}
                      type="text"
                      value={editingTitle}
                      onChange={(e) => setEditingTitle(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') saveEditing(task);
                        if (e.key === 'Escape') cancelEditing();
                      }}
                      className="w-full px-3 py-2 border border-indigo-200 rounded-lg text-base font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                      autoFocus
                    />
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => saveEditing(task)}
                        disabled={!editingTitle.trim()}
                        aria-label={`Save edits to task: ${task.title}`}
                        className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg disabled:opacity-50"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={cancelEditing}
                        aria-label={`Cancel editing task: ${task.title}`}
                        className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-bold rounded-lg"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className={`text-base font-medium truncate ${
                    task.status === TaskStatus.DONE ? 'text-gray-500 line-through' : 'text-gray-900'
                  }`}>
                    {task.title}
                  </p>
                )}
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase ${
                    task.priority === Priority.HIGH ? 'bg-red-100 text-red-600' :
                    task.priority === Priority.MEDIUM ? 'bg-yellow-100 text-yellow-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    {task.priority}
                  </span>
                  {task.deadline && (
                    <span className={`text-xs flex items-center gap-1 ${
                      isOverdue(task.deadline) && task.status !== TaskStatus.DONE
                        ? 'text-red-500 font-semibold'
                        : 'text-gray-400'
                    }`}>
                      <Clock size={10} />
                      {isOverdue(task.deadline) && task.status !== TaskStatus.DONE ? 'Overdue • ' : ''}
                      {formatDate(task.deadline)}
                    </span>
                  )}
                </div>
              </div>
              <div className="ml-3 flex flex-shrink-0 items-center gap-1">
                <button
                  type="button"
                  onClick={() => startEditing(task)}
                  aria-label={`Edit task: ${task.title}`}
                  title={`Edit task: ${task.title}`}
                  className="w-11 h-11 flex items-center justify-center text-gray-400 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                >
                  <Pencil size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => deleteTask(task)}
                  aria-label={`Delete task: ${task.title}`}
                  title={`Delete task: ${task.title}`}
                  className="w-11 h-11 flex items-center justify-center text-gray-400 rounded-lg hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-200"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TasksView;
