import React, { useState } from 'react';
import { Task, Transaction, TaskStatus } from '../types';
import { generateWeeklyReset } from '../services/geminiService';
import { RotateCw, Sparkles, Loader2, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface WeeklyResetViewProps {
  tasks: Task[];
  transactions: Transaction[];
  onBack: () => void;
}

const WeeklyResetView: React.FC<WeeklyResetViewProps> = ({ tasks, transactions, onBack }) => {
  const [report, setReport] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    setLoading(true);
    const completed = tasks.filter(t => t.status === TaskStatus.DONE);
    const pending = tasks.filter(t => t.status === TaskStatus.TODO);
    const recentTx = transactions; 

    try {
      const result = await generateWeeklyReset(completed, pending, recentTx);
      setReport(result);
    } catch (e) {
      alert("Error generating report.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col bg-gray-50">
      <header className="flex items-center justify-between p-4 bg-white border-b border-gray-100">
        <div className="flex items-center gap-3">
            <button 
                onClick={onBack}
                className="p-2 -ml-2 text-gray-400 hover:text-gray-900 rounded-full hover:bg-gray-100"
            >
                <ArrowLeft size={24} />
            </button>
            <h1 className="text-xl font-bold text-gray-900">Weekly CEO Reset</h1>
        </div>
      </header>

      {!report && (
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 p-4">
           <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-4">
             <Sparkles size={40} className="text-indigo-600" />
           </div>
           <div>
             <h3 className="text-lg font-semibold text-gray-900">Ready to wrap up?</h3>
             <p className="text-gray-500 text-sm max-w-xs mx-auto mt-2">
               I will analyze your completed tasks and finances to generate a concise executive summary.
             </p>
           </div>
           <button
            onClick={handleReset}
            disabled={loading}
            className="px-8 py-3 bg-gray-900 text-white font-bold rounded-xl shadow-lg flex items-center gap-2 hover:bg-gray-800 disabled:opacity-70 transition-all"
           >
             {loading ? <Loader2 className="animate-spin" /> : 'Run CEO Reset'}
           </button>
        </div>
      )}

      {report && (
        <div className="flex-1 overflow-y-auto no-scrollbar bg-white p-6">
          <article className="prose prose-sm prose-indigo max-w-none">
            <ReactMarkdown>{report}</ReactMarkdown>
          </article>
          <div className="mt-8 flex justify-center pb-8">
            <button 
              onClick={() => setReport(null)}
              className="text-gray-500 text-sm hover:text-gray-900 underline"
            >
              Close Report
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeeklyResetView;