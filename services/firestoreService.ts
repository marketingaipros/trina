import { getLocalISODate } from '../utils/dateUtils';
import { CalendarEvent } from '../types';

const CHAT_URL = "https://chat-opmfzmkfmq-uc.a.run.app";
const MEMORY_URL = "https://memory-opmfzmkfmq-uc.a.run.app";
const KB_URL = "https://us-central1-barbie-92edc.cloudfunctions.net/knowledgebase";
const KB_UPLOAD_URL = "https://knowledgeupload-opmfzmkfmq-uc.a.run.app";
const FIREBASE_PROJECT_ID = "barbie-92edc";
const FIRESTORE_BASE_URL = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents`;

let authToken: string | null = null;
let currentUid: string | null = null;

export function setAuth(token: string, uid: string) {
  authToken = token;
  currentUid = uid;
}

export function getUid(): string | null {
  return currentUid;
}

export function getToken(): string | null {
  return authToken;
}

export function isAuthenticated(): boolean {
  return authToken !== null && authToken !== "";
}

async function authFetch(url: string, options: RequestInit = {}): Promise<Response> {
  if (!authToken) throw new Error("Not authenticated. Please log in.");

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${authToken}`,
      ...options.headers,
    },
  });

  if (response.status === 401) {
    console.warn("Auth token expired, attempting re-auth...");
    try {
      const { ensureCloudAuth } = await import('./authService');
      const { token, uid } = await ensureCloudAuth();
      setAuth(token, uid);
      return fetch(url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
          ...options.headers,
        },
      });
    } catch (e) {
      console.error("Re-auth failed:", e);
      setAuth("", "");
      throw new Error("Session expired. Please restart the app.");
    }
  }

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.error?.message || errorBody.error || `Request failed with status ${response.status}`);
  }

  return response;
}

type FirestoreValue =
  | { stringValue: string }
  | { integerValue: string }
  | { doubleValue: number }
  | { booleanValue: boolean }
  | { nullValue: null };

function toFirestoreValue(value: unknown): FirestoreValue {
  if (value === undefined || value === null) return { nullValue: null };
  if (typeof value === "boolean") return { booleanValue: value };
  if (typeof value === "number") {
    return Number.isInteger(value) ? { integerValue: String(value) } : { doubleValue: value };
  }
  return { stringValue: String(value) };
}

function fromFirestoreValue(value: FirestoreValue | undefined): any {
  if (!value) return undefined;
  if ("stringValue" in value) return value.stringValue;
  if ("integerValue" in value) return Number(value.integerValue);
  if ("doubleValue" in value) return value.doubleValue;
  if ("booleanValue" in value) return value.booleanValue;
  return null;
}

function eventCollectionPath(): string {
  if (!currentUid) throw new Error("Not authenticated. Please log in.");
  return `${FIRESTORE_BASE_URL}/users/${encodeURIComponent(currentUid)}/calendarEvents`;
}

function eventDocumentPath(eventId: string): string {
  return `${eventCollectionPath()}/${encodeURIComponent(eventId)}`;
}

function eventToFirestoreFields(event: CalendarEvent): Record<string, FirestoreValue> {
  return {
    id: toFirestoreValue(event.id),
    title: toFirestoreValue(event.title),
    date: toFirestoreValue(event.date),
    time: toFirestoreValue(event.time || ""),
    endTime: toFirestoreValue(event.endTime || ""),
    description: toFirestoreValue(event.description || ""),
    category: toFirestoreValue(event.category),
    recurring: toFirestoreValue(event.recurring || "none"),
    notifyBefore: toFirestoreValue(event.notifyBefore ?? 15),
    createdAt: toFirestoreValue(event.createdAt),
    updatedAt: toFirestoreValue(Date.now()),
  };
}

function eventFromFirestoreDocument(doc: any): CalendarEvent {
  const fields = doc.fields || {};
  const id = fromFirestoreValue(fields.id) || String(doc.name || "").split("/").pop();
  return {
    id,
    title: fromFirestoreValue(fields.title) || "Untitled event",
    date: fromFirestoreValue(fields.date) || getLocalISODate(),
    time: fromFirestoreValue(fields.time) || undefined,
    endTime: fromFirestoreValue(fields.endTime) || undefined,
    description: fromFirestoreValue(fields.description) || "",
    category: fromFirestoreValue(fields.category) || "meeting",
    recurring: fromFirestoreValue(fields.recurring) || "none",
    notifyBefore: fromFirestoreValue(fields.notifyBefore) ?? 15,
    createdAt: fromFirestoreValue(fields.createdAt) || Date.now(),
  };
}

// ── Chat with Firestore context ─────────────────────────────────
export async function chatWithContext(message: string, sessionId?: string): Promise<string> {
  const res = await authFetch(CHAT_URL, {
    method: "POST",
    body: JSON.stringify({ message, sessionId }),
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error);
  return data.reply;
}

// ── Memory operations ───────────────────────────────────────────
export async function saveMemory(text: string, tags: string[] = []): Promise<string> {
  const res = await authFetch(MEMORY_URL, {
    method: "POST",
    body: JSON.stringify({ text, tags }),
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error);
  return data.id;
}

export async function getMemories(limit: number = 20): Promise<any[]> {
  const res = await authFetch(`${MEMORY_URL}?limit=${limit}`, {
    method: "GET",
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error);
  return data.memories || [];
}

export async function deleteMemory(memoryId: string): Promise<void> {
  await authFetch(`${MEMORY_URL}?memoryId=${memoryId}`, {
    method: "DELETE",
  });
}

// ── Self-Learning / Preferences ────────────────────────────────
export async function savePreference(text: string, category: string = 'general'): Promise<string> {
  return saveMemory(`[PREFERENCE: ${category}] ${text}`, ["preference", category]);
}

export async function getPreferences(): Promise<any[]> {
  const memories = await getMemories(50);
  return memories.filter(m => m.tags?.includes('preference'));
}

// ── Data sync (structured, no LLM round-trip) ───────────────────
export async function syncDataToFirestore(tasks: any[], transactions: any[], events: CalendarEvent[] = []): Promise<string> {
  // Save a structured summary as a memory entry instead of routing through chat
  const taskSummary = tasks.slice(0, 20).map(t => `${t.title} [${t.priority}/${t.status}]`).join("; ");
  const txSummary = transactions.slice(0, 10).map(t => `${t.type}: $${t.amount} ${t.category}`).join("; ");
  const eventSummary = events.slice(0, 20).map(e => `${e.title} on ${e.date}${e.time ? ` at ${e.time}` : ""}`).join("; ");

  const syncText = `Data sync ${getLocalISODate()}: Tasks(${tasks.length}): ${taskSummary}. Transactions(${transactions.length}): ${txSummary}. Events(${events.length}): ${eventSummary}`;

  await saveMemory(syncText, ["system-sync", "auto"]);
  return "Data synced to cloud memory.";
}

// ── Calendar operations (Firebase source of truth) ──────────────
export async function listCalendarEvents(): Promise<CalendarEvent[]> {
  const res = await authFetch(eventCollectionPath(), { method: "GET" });
  const data = await res.json();
  return (data.documents || [])
    .map(eventFromFirestoreDocument)
    .sort((a: CalendarEvent, b: CalendarEvent) => a.date.localeCompare(b.date) || (a.time || "").localeCompare(b.time || ""));
}

export async function saveCalendarEvent(event: CalendarEvent): Promise<CalendarEvent> {
  await authFetch(eventDocumentPath(event.id), {
    method: "PATCH",
    body: JSON.stringify({ fields: eventToFirestoreFields(event) }),
  });
  return event;
}

export async function deleteCalendarEvent(eventId: string): Promise<void> {
  await authFetch(eventDocumentPath(eventId), { method: "DELETE" });
}

// ── Knowledge Base operations ───────────────────────────────────
export async function listKnowledgeDocuments(): Promise<any[]> {
  const res = await authFetch(KB_URL, { method: "GET" });
  const data = await res.json();
  return data.documents || [];
}

export async function deleteKnowledgeDocument(docId: string): Promise<void> {
  await authFetch(KB_URL, {
    method: "DELETE",
    body: JSON.stringify({ docId }),
  });
}

export async function uploadKnowledgeDocument(fileName: string, fileContent: string, mimeType: string): Promise<any> {
  const res = await authFetch(KB_UPLOAD_URL, {
    method: "POST",
    body: JSON.stringify({ fileName, fileContent, mimeType }),
  });
  const data = await res.json();
  if (data.error) throw new Error(data.detail || data.error);
  return data;
}
