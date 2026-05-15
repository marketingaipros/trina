import { ensureBarbieAuth, firebaseAuth } from '../src/lib/barbieAI.js';

const FIREBASE_API_KEY = (import.meta as any).env?.VITE_FIREBASE_API_KEY || "";
const BASE_URL = "https://identitytoolkit.googleapis.com/v1";

interface AuthResponse {
  token: string;
  uid: string;
  refreshToken: string;
}

function getFirebaseApiKey(): string {
  if (!FIREBASE_API_KEY) {
    throw new Error("Missing VITE_FIREBASE_API_KEY.");
  }
  return FIREBASE_API_KEY;
}

export async function signIn(email: string, password: string): Promise<AuthResponse> {
  if (!email || !email.includes('@')) throw new Error("INVALID_EMAIL");

  const res = await fetch(`${BASE_URL}/accounts:signInWithPassword?key=${getFirebaseApiKey()}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, returnSecureToken: true }),
  });

  const data = await res.json();
  if (data.error) throw new Error(data.error.message);

  return {
    token: data.idToken,
    uid: data.localId,
    refreshToken: data.refreshToken,
  };
}

export async function signUp(email: string, password: string): Promise<AuthResponse> {
  if (!email || !email.includes('@')) throw new Error("INVALID_EMAIL");

  const res = await fetch(`${BASE_URL}/accounts:signUp?key=${getFirebaseApiKey()}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, returnSecureToken: true }),
  });

  const data = await res.json();
  if (data.error) throw new Error(data.error.message);

  return {
    token: data.idToken,
    uid: data.localId,
    refreshToken: data.refreshToken,
  };
}

export function mapAuthError(error: string): string {
  switch (error) {
    case "EMAIL_NOT_FOUND": return "No account found with this email.";
    case "INVALID_PASSWORD": return "Incorrect password. Please try again.";
    case "USER_DISABLED": return "This account has been suspended.";
    case "INVALID_EMAIL": return "Please enter a valid email address.";
    default: return "An unexpected login error occurred.";
  }
}
let cachedRefreshToken: string | null = null;

export function setRefreshToken(rt: string) {
  cachedRefreshToken = rt;
}

export async function refreshAuthToken(): Promise<AuthResponse> {
  if (firebaseAuth.currentUser) {
    const token = await firebaseAuth.currentUser.getIdToken(true);
    return {
      token,
      uid: firebaseAuth.currentUser.uid,
      refreshToken: cachedRefreshToken || "",
    };
  }

  if (!cachedRefreshToken) throw new Error("No refresh token available");
  const res = await fetch(
    `https://securetoken.googleapis.com/v1/token?key=${getFirebaseApiKey()}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        grant_type: "refresh_token",
        refresh_token: cachedRefreshToken,
      }),
    }
  );
  const data = await res.json();
  if (data.error) throw new Error(data.error.message);
  cachedRefreshToken = data.refresh_token;
  return {
    token: data.id_token,
    uid: data.user_id,
    refreshToken: data.refresh_token,
  };
}

export async function ensureCloudAuth(): Promise<AuthResponse> {
  const { token, uid } = await ensureBarbieAuth({ allowGooglePopup: false });
  return {
    token,
    uid,
    refreshToken: cachedRefreshToken || "",
  };
}
