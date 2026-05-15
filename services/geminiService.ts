
import { Task, Transaction, Priority, TaskStatus, TransactionType, CalendarEvent } from '../types';
import { getLocalISODate } from '../utils/dateUtils';
import { generateAIText } from '../src/lib/barbieAI.js';

async function generateText(systemInstruction: string, prompt: string, responseMimeType = "text/plain"): Promise<string> {
  const result = await generateAIText({ systemInstruction, prompt, responseMimeType }) as { text?: string };
  return result.text || "";
}

const BRAIN_DUMP_SYSTEM_PROMPT = `
# ROLE: Strategic Business Partner (CFO/COO)
You are TrinaOS (Barbie), a high-level strategic partner for a daycare CEO.
The user has provided a set of "Brain Dump" entries.

Your goal is to parse these entries with a "Strategic Lens":
1. **Strategic Capture**: Identify high-leverage ideas and strategic initiatives.
2. **Operational Efficiency**: Convert "Tasks" into structured objects, identifying potential for delegation or automation.
3. **Financial Intelligence**: Extract financial data, looking for trends or anomalies (Supplies, Tuition, Rent, Payroll, etc.).
4. **Executive Summary**: Provide a concise strategic executive summary (Barbie/CFO persona) that highlights "Leverage Points" and "Strategic Risks."

Output a JSON object with:
- tasks: Array of structured task objects.
- transactions: Array of structured transaction objects.
- analysis: A high-level CFO/COO summary of the strategic implications of these thoughts.
`;

export const processBrainDump = async (entries: { text: string; category: string; imageData?: string }[]): Promise<{
  tasks: any[];
  transactions: any[];
  analysis: string;
}> => {
  try {
    const textContext = entries
      .map(e => `[CATEGORY: ${e.category}] ${e.imageData ? "Image attachment present; ask Trina to describe it in text for now." : e.text}`)
      .join('\n---\n');

    const jsonText = await generateText(
      `${BRAIN_DUMP_SYSTEM_PROMPT}\nReturn only valid JSON with keys: tasks, transactions, analysis.`,
      textContext || "No entries provided.",
      "application/json",
    );
    const json = JSON.parse(jsonText || '{}');
    return json;
  } catch (error) {
    console.error("Gemini Brain Dump Error:", error);
    throw new Error("Failed to organize brain dump.");
  }
};

const WEEKLY_RESET_SYSTEM_PROMPT = `
# ROLE: Strategic Board Review (CFO/CEO)
You are TrinaOS. Perform a "Weekly CEO Board Review" for the daycare business.
Analyze the financial data and operational throughput (tasks).

Generate a high-level executive report in Markdown:
1. **🏆 Strategic Wins**: High-impact achievements.
2. **💰 CFO Financial Analysis**: Revenue vs. Expenses, Net Margin, and Burn Rate analysis. Provide one "Profit Optimization" recommendation.
3. **📈 Growth & Scalability**: Opportunities to expand or improve efficiency.
4. **🎯 CEO Directives**: The top 3 strategic priorities for the coming week to drive the business forward.
`;

export const generateWeeklyReset = async (
  completedTasks: Task[],
  pendingTasks: Task[],
  transactions: Transaction[]
): Promise<string> => {
  try {
    // Calculate simple financials
    const income = transactions
      .filter(t => t.type === TransactionType.INCOME)
      .reduce((sum, t) => sum + t.amount, 0);
    const expenses = transactions
      .filter(t => t.type === TransactionType.EXPENSE)
      .reduce((sum, t) => sum + t.amount, 0);

    const context = `
      Data for this week:
      Completed Tasks (${completedTasks.length}): ${completedTasks.map(t => t.title).join(', ')}
      Pending High Priority Tasks (${pendingTasks.filter(t => t.priority === Priority.HIGH).length}): ${pendingTasks.filter(t => t.priority === Priority.HIGH).map(t => t.title).join(', ')}
      
      Financials:
      Total Income: $${income}
      Total Expenses: $${expenses}
      Recent Transactions: ${transactions.slice(0, 5).map(t => `${t.type}: $${t.amount} (${t.category})`).join(', ')}
    `;

    return await generateText(WEEKLY_RESET_SYSTEM_PROMPT, context) || "Could not generate report.";
  } catch (error) {
    console.error("Gemini Weekly Reset Error:", error);
    return "Failed to generate weekly reset. Please try again.";
  }
};

const SMART_BRIEFING_SYSTEM_PROMPT = `
# ROLE: CEO Morning Briefing
You are Barbie, Trina's Strategic Partner. Provide a sharp, high-level morning briefing.
Focus on "High-Leverage Actions" for today.
Identify the "One Thing" that will move the needle most.
Tone: Authoritative, executive, and supportive. Under 100 words.
`;

export const getSmartBriefing = async (
  tasks: Task[],
  events: CalendarEvent[]
): Promise<string> => {
  try {
    const context = `
      Today's Date: ${getLocalISODate()}
      Tasks (${tasks.length}): ${tasks.filter(t => t.status !== TaskStatus.DONE).map(t => `${t.title} (${t.priority})`).join(', ')}
      Calendar Events (${events.length}): ${events.map(e => `${e.title} at ${e.time}`).join(', ')}
    `;

    return await generateText(SMART_BRIEFING_SYSTEM_PROMPT, context) || "Good morning Trina! Your system is online and ready.";
  } catch (error) {
    console.error("Gemini Smart Briefing Error:", error);
    return "Good morning Trina! I'm ready to help you conquer the day.";
  }
};

const FINANCE_INSIGHTS_SYSTEM_PROMPT = `
# ROLE: CFO Strategic Analysis
You are Barbie, the CFO. Analyze the daycare's financial health.
Focus on: Profit Margins, Cash Flow Optimization, and ROI.
Identify "Financial Leaks" or "Revenue Opportunities."
Tone: Sharp, data-driven, executive.
Format: Markdown.
`;

export const getFinanceInsights = async (
  transactions: Transaction[]
): Promise<string> => {
  try {
    const income = transactions
      .filter(t => t.type === TransactionType.INCOME)
      .reduce((sum, t) => sum + t.amount, 0);
    const expenses = transactions
      .filter(t => t.type === TransactionType.EXPENSE)
      .reduce((sum, t) => sum + t.amount, 0);

    const context = `
      Current Financials:
      Total Income: $${income}
      Total Expenses: $${expenses}
      Net Profit: $${income - expenses}
      
      Transactions:
      ${transactions.map(t => `${t.date} | ${t.type} | $${t.amount} | ${t.category}`).join('\n')}
    `;

    return await generateText(FINANCE_INSIGHTS_SYSTEM_PROMPT, context) || "I've reviewed your ledger. Everything looks stable, but I'll keep monitoring for optimization opportunities.";
  } catch (error) {
    console.error("Gemini Finance Insights Error:", error);
    return "I'm having trouble analyzing the ledger right now. Let's look at the raw numbers together.";
  }
};

const TASK_PRIORITIZATION_SYSTEM_PROMPT = `
# ROLE: Strategic Throughput Analysis
You are Barbie, the COO. Apply the 80/20 rule (Pareto Principle) to this task list.
Differentiate between "Strategic Initiatives" (Growth) and "Operational Maintenance" (Noise).
Suggest what to Delegate, Automate, or Eliminate.
Tone: Executive, direct, efficiency-focused.
Format: Markdown.
`;

export const getTaskPrioritization = async (
  tasks: Task[]
): Promise<string> => {
  try {
    const pendingTasks = tasks.filter(t => t.status !== TaskStatus.DONE);
    
    const context = `
      Current Pending Tasks:
      ${pendingTasks.map(t => `- [${t.priority}] ${t.title} ${t.deadline ? `(Deadline: ${t.deadline})` : ''}`).join('\n')}
    `;

    return await generateText(TASK_PRIORITIZATION_SYSTEM_PROMPT, context) || "I've reviewed your task list. Your current priorities look solid, but let's focus on the high-impact items first.";
  } catch (error) {
    console.error("Gemini Task Prioritization Error:", error);
    return "I'm having trouble analyzing your tasks right now. Let's just focus on the most urgent item on your list.";
  }
};


