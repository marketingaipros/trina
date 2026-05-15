import React, { useState } from 'react';
import { Transaction, TransactionType, AppMode } from '../types';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Plus, DollarSign, TrendingUp, TrendingDown, ArrowLeft, Sparkles, Loader2, X } from 'lucide-react';
import { getLocalISODate } from '../utils/dateUtils';
import { getFinanceInsights } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

interface FinanceViewProps {
  transactions: Transaction[];
  onAddTransaction: (transaction: Omit<Transaction, 'id' | 'createdAt'>) => void;
  onBack: () => void;
}

const FinanceView: React.FC<FinanceViewProps> = ({ transactions, onAddTransaction, onBack }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState<TransactionType>(TransactionType.EXPENSE);
  const [insights, setInsights] = useState<string | null>(null);
  const [isLoadingInsights, setIsLoadingInsights] = useState(false);

  const income = transactions
    .filter(t => t.type === TransactionType.INCOME)
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === TransactionType.EXPENSE)
    .reduce((sum, t) => sum + t.amount, 0);

  const net = income - expense;

  // Data for chart
  const expenseByCategory = transactions
    .filter(t => t.type === TransactionType.EXPENSE)
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {} as Record<string, number>);

  const chartData = Object.keys(expenseByCategory).map(key => ({
    name: key,
    value: expenseByCategory[key]
  }));

  const COLORS = ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !category) return;
    onAddTransaction({
      amount: parseFloat(amount),
      category,
      type,
      description: category,
      date: getLocalISODate(),
    });
    setAmount('');
    setCategory('');
    setIsAdding(false);
  };

  const handleGetInsights = async () => {
    setIsLoadingInsights(true);
    setInsights(null);
    try {
      const result = await getFinanceInsights(transactions);
      setInsights(result);
    } catch (e) {
      console.error("Failed to get insights:", e);
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
                className="p-2 -ml-2 text-gray-400 hover:text-gray-900 rounded-full hover:bg-gray-100"
            >
                <ArrowLeft size={24} />
            </button>
            <h1 className="text-xl font-bold text-gray-900">Financial Snapshot</h1>
        </div>
        <div className="flex items-center gap-2">
            <button 
              onClick={handleGetInsights}
              disabled={isLoadingInsights || transactions.length === 0}
              className="p-2 bg-pink-50 text-pink-500 rounded-full hover:bg-pink-100 disabled:opacity-50 transition-all"
              title="Get AI Insights"
            >
              {isLoadingInsights ? <Loader2 size={24} className="animate-spin" /> : <Sparkles size={24} />}
            </button>
            <button 
              onClick={() => setIsAdding(!isAdding)}
              className="p-2 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100"
            >
              <Plus size={24} />
            </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-6">
          {insights && (
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-pink-100 animate-fade-in relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-pink-500" />
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-pink-500" />
                  <p className="text-[10px] font-black text-pink-500 uppercase tracking-[0.2em]">Barbie's Financial Analysis</p>
                </div>
                <button 
                  onClick={() => setInsights(null)}
                  className="text-gray-300 hover:text-gray-500 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="prose prose-sm prose-pink max-w-none text-gray-800 font-medium leading-relaxed">
                <ReactMarkdown>{insights}</ReactMarkdown>
              </div>
            </div>
          )}

          {/* Key Metrics */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-center mb-6">
                  <p className="text-sm text-gray-500 font-medium mb-1">Net Profit</p>
                  <h2 className={`text-4xl font-bold ${net >= 0 ? 'text-indigo-600' : 'text-red-600'}`}>
                      ${net.toLocaleString()}
                  </h2>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
                <div className="text-center">
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Revenue</p>
                    <p className="text-xl font-bold text-green-600">+${income.toLocaleString()}</p>
                </div>
                <div className="text-center border-l border-gray-100">
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Expenses</p>
                    <p className="text-xl font-bold text-red-600">-${expense.toLocaleString()}</p>
                </div>
              </div>
          </div>

          {isAdding && (
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow-md border border-indigo-100 animate-fade-in-down">
            <div className="flex gap-2 mb-3">
                <button
                type="button"
                onClick={() => setType(TransactionType.EXPENSE)}
                className={`flex-1 py-2 text-sm font-semibold rounded-lg ${type === TransactionType.EXPENSE ? 'bg-red-100 text-red-600 ring-1 ring-red-200' : 'bg-gray-100 text-gray-500'}`}
                >
                Expense
                </button>
                <button
                type="button"
                onClick={() => setType(TransactionType.INCOME)}
                className={`flex-1 py-2 text-sm font-semibold rounded-lg ${type === TransactionType.INCOME ? 'bg-green-100 text-green-600 ring-1 ring-green-200' : 'bg-gray-100 text-gray-500'}`}
                >
                Income
                </button>
            </div>
            <div className="space-y-3">
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                    placeholder="Amount"
                    required
                />
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                    placeholder="Category"
                    required
                />
                <button type="submit" className="w-full py-2 bg-gray-900 text-white font-semibold rounded-lg">
                Save
                </button>
            </div>
            </form>
        )}

        {/* Expense Chart */}
        {chartData.length > 0 && (
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">Breakdown</h3>
            <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                    >
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => `$${value}`} contentStyle={{ borderRadius: '8px', border: 'none' }} />
                    <Legend iconSize={8} wrapperStyle={{ fontSize: '10px' }} />
                </PieChart>
                </ResponsiveContainer>
            </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default FinanceView;