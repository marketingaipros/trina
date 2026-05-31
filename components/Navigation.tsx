import React from 'react';
import { LayoutDashboard, CheckSquare, DollarSign, Bell, CalendarDays, BookOpen } from 'lucide-react';
import { AppMode } from '../types';

interface NavigationProps {
  currentMode: AppMode;
  onNavigate: (mode: AppMode) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentMode, onNavigate }) => {
  const navItems = [
    { mode: AppMode.DASHBOARD, icon: LayoutDashboard, label: 'Home' },
    { mode: AppMode.TASKS, icon: CheckSquare, label: 'Tasks' },
    { mode: AppMode.FINANCE, icon: DollarSign, label: 'Finance' },
    { mode: AppMode.CALENDAR, icon: CalendarDays, label: 'Calendar' },
    { mode: AppMode.NOTIFICATIONS, icon: Bell, label: 'Alerts' },
    { mode: AppMode.KNOWLEDGE_BASE, icon: BookOpen, label: 'Context' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg pb-safe z-50">
      <div className="flex justify-around items-center h-16 max-w-2xl mx-auto px-2">
        {navItems.map((item) => {
          const isActive = currentMode === item.mode;
          return (
            <button
              key={item.mode}
              onClick={() => onNavigate(item.mode)}
              aria-current={isActive ? 'page' : undefined}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 rounded-2xl transition-colors ${
                isActive ? 'bg-pink-50 text-pink-600' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
              }`}
            >
              <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium leading-none text-center">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
