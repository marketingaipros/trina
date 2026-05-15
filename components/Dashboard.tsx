import React from 'react';
import { AppMode } from '../types';
import VoiceDashboard from './VoiceDashboard';
import { DollarSign, CheckSquare, Bell, BrainCircuit, BookOpen, CalendarDays } from 'lucide-react';

interface DashboardProps {
  onNavigate: (mode: AppMode) => void;
  isConnected: boolean;
  isSpeaking: boolean;
  volume: number;
  micError?: string | null;
  onToggleVoice: () => void;
  timer: number | null;
  initialTimerValue: number | null;
  notificationCount: number;
  isGmailConnected: boolean;
  onConnectGmail: () => void;
  tasks: any[];
  events: any[];
}

const Dashboard: React.FC<DashboardProps> = ({ 
  onNavigate,
  isConnected,
  isSpeaking,
  volume,
  micError,
  onToggleVoice,
  timer,
  initialTimerValue,
  notificationCount,
  isGmailConnected,
  onConnectGmail,
  tasks,
  events
}) => {
  const NavButton = ({ icon: Icon, mode, label }: { icon: any, mode: AppMode, label: string }) => (
    <button 
      onClick={() => onNavigate(mode)}
      className="w-14 h-14 flex items-center justify-center bg-white border border-pink-100 rounded-2xl shadow-md text-pink-300 hover:text-pink-500 hover:border-pink-200 transition-all active:scale-90 relative group"
    >
      <Icon size={24} />
      {mode === AppMode.NOTIFICATIONS && notificationCount > 0 && (
        <span className="absolute -top-1 -right-1 w-6 h-6 bg-pink-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
          {notificationCount}
        </span>
      )}
      <div className="absolute left-16 px-3 py-1 bg-gray-900 text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap uppercase tracking-widest">
        {label}
      </div>
    </button>
  );

  return (
    <div className="h-full flex flex-col bg-[#fff5f7] relative">
      <div className="absolute top-48 left-8 z-20 flex flex-col gap-4">
          <NavButton icon={DollarSign} mode={AppMode.FINANCE} label="Finance" />
          <NavButton icon={CheckSquare} mode={AppMode.TASKS} label="Tasks" />
          <NavButton icon={BrainCircuit} mode={AppMode.BRAIN_DUMP} label="Brain Dump" />
          <NavButton icon={CalendarDays} mode={AppMode.CALENDAR} label="Calendar" />
          <NavButton icon={BookOpen} mode={AppMode.KNOWLEDGE_BASE} label="Knowledge Base" />
          <NavButton icon={Bell} mode={AppMode.NOTIFICATIONS} label="Notifications" />
      </div>

      <div className="flex-1">
         <VoiceDashboard 
           isConnected={isConnected}
           isSpeaking={isSpeaking}
           volume={volume}
           micError={micError}
           onToggle={onToggleVoice}
           timer={timer}
           initialTimerValue={initialTimerValue}
           notificationCount={notificationCount}
           isGmailConnected={isGmailConnected}
           onConnectGmail={onConnectGmail}
           tasks={tasks}
           events={events}
         />
      </div>
    </div>
  );
};

export default Dashboard;
