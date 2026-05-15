import React, { useState } from 'react';
import { CalendarEvent } from '../types';
import { ArrowLeft, Plus, ChevronLeft, ChevronRight, Clock, Trash2, Users, Briefcase, Bell, Heart, Star, Edit2 } from 'lucide-react';
import { getLocalISODate } from '../utils/dateUtils';

interface CalendarViewProps {
  events: CalendarEvent[];
  onAddEvent: (event: Omit<CalendarEvent, 'id' | 'createdAt'>) => void;
  onUpdateEvent: (event: CalendarEvent) => void;
  onDeleteEvent: (eventId: string) => void;
  onBack: () => void;
}

const CATEGORY_CONFIG: Record<string, { color: string; bg: string; icon: any }> = {
  meeting: { color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200', icon: Briefcase },
  deadline: { color: 'text-red-600', bg: 'bg-red-50 border-red-200', icon: Bell },
  reminder: { color: 'text-yellow-600', bg: 'bg-yellow-50 border-yellow-200', icon: Star },
  personal: { color: 'text-purple-600', bg: 'bg-purple-50 border-purple-200', icon: Heart },
  parent: { color: 'text-pink-600', bg: 'bg-pink-50 border-pink-200', icon: Users },
  staff: { color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200', icon: Users },
};

const CalendarView: React.FC<CalendarViewProps> = ({ events, onAddEvent, onUpdateEvent, onDeleteEvent, onBack }) => {
  const today = new Date();
  const todayStr = getLocalISODate(today);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<string>(todayStr);
  const [isAdding, setIsAdding] = useState(false);
  const [editingEventId, setEditingEventId] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState(selectedDate);
  const [newTime, setNewTime] = useState('09:00');
  const [newEndTime, setNewEndTime] = useState('10:00');
  const [newCategory, setNewCategory] = useState<CalendarEvent['category']>('meeting');
  const [newRecurring, setNewRecurring] = useState<CalendarEvent['recurring']>('none');
  const [newDescription, setNewDescription] = useState('');

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const monthName = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });

  const prevMonth = () => {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1); }
    else setCurrentMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1); }
    else setCurrentMonth(m => m + 1);
  };

  const getDateStr = (day: number): string => {
    return `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const getEventsForDay = (day: number): CalendarEvent[] => {
    const dateStr = getDateStr(day);
    return events.filter(e => e.date === dateStr);
  };

  const selectedEvents = events
    .filter(e => e.date === selectedDate)
    .sort((a, b) => (a.time || '').localeCompare(b.time || ''));

  const handleAddOrUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    if (editingEventId) {
      const originalEvent = events.find(ev => ev.id === editingEventId);
      if (originalEvent) {
        onUpdateEvent({
          ...originalEvent,
          title: newTitle,
          date: newDate,
          time: newTime,
          endTime: newEndTime,
          description: newDescription,
          category: newCategory,
          recurring: newRecurring,
        });
      }
    } else {
      onAddEvent({
        title: newTitle,
        date: newDate,
        time: newTime,
        endTime: newEndTime,
        description: newDescription,
        category: newCategory,
        recurring: newRecurring,
      });
    }
    
    resetForm();
  };

  const resetForm = () => {
    setNewTitle('');
    setNewDescription('');
    setNewTime('09:00');
    setNewEndTime('10:00');
    setNewCategory('meeting');
    setNewRecurring('none');
    setIsAdding(false);
    setEditingEventId(null);
  };

  const startEdit = (event: CalendarEvent) => {
    setEditingEventId(event.id);
    setNewTitle(event.title);
    setNewDescription(event.description || '');
    setNewDate(event.date);
    setNewTime(event.time || '09:00');
    setNewEndTime(event.endTime || '10:00');
    setNewCategory(event.category);
    setNewRecurring(event.recurring || 'none');
    setIsAdding(true);
  };

  const formatTime = (time?: string) => {
    if (!time) return '';
    const [h, m] = time.split(':');
    const hour = parseInt(h);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const display = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${display}:${m} ${ampm}`;
  };

  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white border-b border-gray-100">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 -ml-2 text-gray-400 hover:text-gray-900 rounded-full hover:bg-gray-100">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold text-gray-900">Calendar</h1>
        </div>
        <button onClick={() => { setIsAdding(!isAdding); setNewDate(selectedDate); }} className="p-2 bg-pink-50 text-pink-600 rounded-full hover:bg-pink-100">
          <Plus size={24} />
        </button>
      </header>

      {/* Add/Edit Event Form */}
      {isAdding && (
        <div className="p-4 bg-white border-b border-gray-100 animate-in slide-in-from-top duration-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
              {editingEventId ? 'Edit Event' : 'New Event'}
            </h3>
            <button onClick={resetForm} className="text-xs text-gray-400 hover:text-gray-600">Cancel</button>
          </div>
          <form onSubmit={handleAddOrUpdate} className="space-y-3">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Event title..."
              className="w-full text-lg font-medium text-gray-900 placeholder-gray-400 border-none focus:ring-0 p-0"
              autoFocus
            />
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="Description (optional)"
              className="w-full text-sm text-gray-600 placeholder-gray-400 border-none focus:ring-0 p-0"
            />
            <div className="flex gap-2">
              <input type="date" value={newDate} onChange={(e) => setNewDate(e.target.value)} className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm" />
              <input type="time" value={newTime} onChange={(e) => setNewTime(e.target.value)} className="px-3 py-2 border border-gray-200 rounded-lg text-sm" />
              <input type="time" value={newEndTime} onChange={(e) => setNewEndTime(e.target.value)} className="px-3 py-2 border border-gray-200 rounded-lg text-sm" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {(Object.keys(CATEGORY_CONFIG) as CalendarEvent['category'][]).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setNewCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold capitalize border ${
                    newCategory === cat ? CATEGORY_CONFIG[cat].bg + ' ' + CATEGORY_CONFIG[cat].color : 'bg-gray-100 text-gray-500 border-transparent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                {(['none', 'daily', 'weekly', 'monthly'] as const).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setNewRecurring(r)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                      newRecurring === r ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
              <button type="submit" disabled={!newTitle.trim()} className="px-4 py-1.5 bg-pink-600 text-white text-sm font-semibold rounded-lg disabled:opacity-50">
                {editingEventId ? 'Update' : 'Add'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Month Navigation */}
      <div className="flex items-center justify-between px-4 py-3 bg-white">
        <button onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded-full"><ChevronLeft size={20} /></button>
        <h2 className="text-lg font-bold text-gray-900">{monthName} {currentYear}</h2>
        <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-full"><ChevronRight size={20} /></button>
      </div>

      {/* Calendar Grid */}
      <div className="px-4 pb-2 bg-white border-b border-gray-100">
        <div className="grid grid-cols-7 gap-1 mb-1">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
            <div key={i} className="text-center text-[10px] font-bold text-gray-400 uppercase py-1">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`} className="h-10" />
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const dateStr = getDateStr(day);
            const dayEvents = getEventsForDay(day);
            const isToday = dateStr === todayStr;
            const isSelected = dateStr === selectedDate;

            return (
              <button
                key={day}
                onClick={() => setSelectedDate(dateStr)}
                className={`h-10 rounded-xl text-sm font-medium relative flex flex-col items-center justify-center transition-all
                  ${isSelected ? 'bg-pink-500 text-white shadow-lg scale-105' : ''}
                  ${isToday && !isSelected ? 'bg-pink-50 text-pink-600 font-bold' : ''}
                  ${!isSelected && !isToday ? 'text-gray-700 hover:bg-gray-100' : ''}
                `}
              >
                {day}
                {dayEvents.length > 0 && (
                  <div className="flex gap-0.5 absolute -bottom-0.5">
                    {dayEvents.slice(0, 3).map((ev, idx) => (
                      <div key={idx} className={`w-1 h-1 rounded-full ${isSelected ? 'bg-white' : 'bg-pink-400'}`} />
                    ))}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Events for Selected Date */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest">
          {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
        </h3>

        {selectedEvents.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-gray-400">
            <p className="text-sm">No events scheduled</p>
          </div>
        ) : (
          selectedEvents.map((event) => {
            const config = CATEGORY_CONFIG[event.category] || CATEGORY_CONFIG.meeting;
            const Icon = config.icon;
            return (
              <div key={event.id} className={`p-4 rounded-xl border ${config.bg} flex items-start gap-3 group`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${config.color} bg-white/60 flex-shrink-0`}>
                  <Icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 truncate">{event.title}</p>
                  {event.time && (
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                      <Clock size={10} />
                      {formatTime(event.time)}{event.endTime ? ` — ${formatTime(event.endTime)}` : ''}
                    </p>
                  )}
                  {event.description && (
                    <p className="text-xs text-gray-400 mt-1 truncate">{event.description}</p>
                  )}
                  {event.recurring && event.recurring !== 'none' && (
                    <span className="inline-block mt-1 px-2 py-0.5 bg-white/80 rounded-full text-[10px] font-bold text-gray-500 uppercase">
                      {event.recurring}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => startEdit(event)}
                    className="p-1.5 text-gray-300 hover:text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Edit2 size={14} />
                    <span className="sr-only">Edit</span>
                  </button>
                  <button
                    onClick={() => onDeleteEvent(event.id)}
                    className="p-1.5 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 size={14} />
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

export default CalendarView;
