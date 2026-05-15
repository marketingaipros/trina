
const KB_URL = "https://us-central1-barbie-92edc.cloudfunctions.net/knowledgebase";
const KB_UPLOAD_URL = "https://knowledgeupload-opmfzmkfmq-uc.a.run.app";
const KB_QUERY_URL = "https://us-central1-barbie-92edc.cloudfunctions.net/knowledgequery";

let authToken: string | null = null;
let currentUid: string | null = null;

export function setKnowledgeAuth(token: string, uid: string) {
  authToken = token;
  currentUid = uid;
}

async function authFetch(url: string, options: RequestInit = {}): Promise<Response> {
  if (!authToken) throw new Error("Not authenticated");
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${authToken}`,
      ...options.headers,
    },
  });
  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}));
    throw new Error(errorBody.detail || errorBody.error || `Request failed with status ${res.status}`);
  }
  return res;
}

export async function uploadDocument(file: File): Promise<{ name: string; displayName: string }> {
  const arrayBuffer = await file.arrayBuffer();
  const bytes = new Uint8Array(arrayBuffer);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  const base64Content = btoa(binary);

  const res = await authFetch(KB_UPLOAD_URL, {
    method: "POST",
    body: JSON.stringify({
      fileName: file.name,
      fileContent: base64Content,
      mimeType: file.type || "application/pdf",
    }),
  });

  const data = await res.json();
  return { name: data.name, displayName: data.displayName };
}

export async function listDocuments(): Promise<
  Array<{ id?: string; name: string; displayName: string; uploadedAt?: string; fileType?: string }>
> {
  try {
    const res = await authFetch(KB_URL, { method: "GET" });
    const data = await res.json();
    if (data.documents && data.documents.length > 0) {
      return data.documents.map((doc: any) => ({
        id: doc.id,
        name: doc.geminiFileName || doc.id,
        displayName: doc.displayName,
        uploadedAt: doc.uploadedAt,
        fileType: doc.fileType,
      }));
    }
    return [];
  } catch (e) {
    console.warn("Failed to list documents:", e);
    return [];
  }
}

export async function deleteDocument(documentName: string, docId?: string): Promise<void> {
  if (!docId) {
    throw new Error("Missing document ID for deletion");
  }
  await authFetch(KB_URL, {
    method: "DELETE",
    body: JSON.stringify({ docId }),
  });
}

export async function queryKnowledgeBase(question: string): Promise<string> {
  try {
    const res = await authFetch(KB_QUERY_URL, {
      method: "POST",
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    return data.answer || "No relevant information found.";
  } catch (e: any) {
    console.warn("Knowledge query failed:", e);
    return `Failed to search knowledge base: ${e.message}`;
  }
}

export function getStoreName(): string {
  return "fileSearchStores/trinaknowledgebase-i1iettfateu3";
}
