import React from 'react';
import { LayoutDashboard, CheckSquare, DollarSign, BrainCircuit, CalendarDays, RotateCw } from 'lucide-react';
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
    { mode: AppMode.BRAIN_DUMP, icon: BrainCircuit, label: 'Brain Dump' },
    { mode: AppMode.CALENDAR, icon: CalendarDays, label: 'Calendar' },
    { mode: AppMode.WEEKLY_RESET, icon: RotateCw, label: 'Reset' },
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
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
                isActive ? 'text-pink-600' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
