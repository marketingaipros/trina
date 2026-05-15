import React from 'react';
import { ArrowLeft, Bell, Clock, Calendar } from 'lucide-react';

interface Notification {
  id: string;
  type: string;
  title: string;
  message: string;
  date: string;
  time?: string;
  isPast?: boolean;
}

interface NotificationsViewProps {
  notifications: Notification[];
  onBack: () => void;
}

const NotificationsView: React.FC<NotificationsViewProps> = ({ notifications, onBack }) => {
  return (
    <div className="h-full flex flex-col bg-gray-50">
      <header className="flex items-center justify-between p-4 bg-white border-b border-gray-100">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 -ml-2 text-gray-400 hover:text-gray-900 rounded-full hover:bg-gray-100">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold text-gray-900">Notifications</h1>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <Bell size={48} className="mb-4 opacity-20" />
            <p className="text-sm">No active notifications</p>
            <p className="text-xs mt-1">We'll alert you 15 minutes before your events.</p>
          </div>
        ) : (
          notifications.map((notif) => (
            <div 
              key={notif.id} 
              className={`p-4 rounded-2xl border bg-white shadow-sm flex items-start gap-4 animate-fade-in ${
                notif.isPast ? 'border-pink-100 bg-pink-50/30' : 'border-gray-100'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                notif.isPast ? 'bg-pink-100 text-pink-500' : 'bg-indigo-50 text-indigo-500'
              }`}>
                <Bell size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900">{notif.title}</h3>
                <p className="text-sm text-gray-600 mt-0.5">{notif.message}</p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    <Calendar size={10} />
                    {notif.date}
                  </div>
                  {notif.time && (
                    <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      <Clock size={10} />
                      {notif.time}
                    </div>
                  )}
                </div>
              </div>
              {notif.isPast && (
                <div className="px-2 py-0.5 bg-pink-500 text-white text-[8px] font-black uppercase rounded-full tracking-tighter">
                  Active
                </div>
              )}
            </div>
          ))
        )}
      </div>
      
      <div className="p-6 text-center">
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
          MAOS v3 Notification Engine
        </p>
      </div>
    </div>
  );
};

export default NotificationsView;
