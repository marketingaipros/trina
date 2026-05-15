import {initializeApp, getApps} from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInAnonymously,
  signInWithPopup,
} from "firebase/auth";
import {getFunctions, httpsCallable} from "firebase/functions";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const auth = getAuth(app);
const functions = getFunctions(app, "us-central1");
const chatWithBarbie = httpsCallable(functions, "chatWithBarbie");
const connectGoogleAccountCallable = httpsCallable(functions, "connectGoogleAccount");
const sendGmailEmailCallable = httpsCallable(functions, "sendGmailEmail");
const generateAITextCallable = httpsCallable(functions, "generateAIText");
const registerDeviceTokenCallable = httpsCallable(functions, "registerDeviceToken");

export {app as firebaseApp};

export {auth as firebaseAuth};

function getStoredUid() {
  if (typeof window === "undefined") return "";
  return window.localStorage.getItem("barbie_firebase_uid") || "";
}

function isAnonymousDisabled(error) {
  const code = String(error?.code || error?.message || "");
  return code.includes("admin-restricted-operation") || code.includes("operation-not-allowed");
}

async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    login_hint: "learnandgrowcc@gmail.com",
    prompt: "select_account",
  });

  const credential = await signInWithPopup(auth, provider);
  return credential.user;
}

export async function ensureBarbieAuth(options = {}) {
  const {allowGooglePopup = true} = options;

  if (auth.currentUser) {
    const token = await auth.currentUser.getIdToken();
    if (typeof window !== "undefined") {
      window.localStorage.setItem("barbie_firebase_uid", auth.currentUser.uid);
    }
    return {uid: auth.currentUser.uid, token};
  }

  await new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });

  if (!auth.currentUser) {
    try {
      await signInAnonymously(auth);
    } catch (error) {
      if (!isAnonymousDisabled(error)) throw error;

      if (!allowGooglePopup) {
        throw new Error("Firebase Anonymous sign-in is disabled. Please sign in with Google before using Barbie reminders.");
      }

      try {
        await signInWithGoogle();
      } catch (googleError) {
        throw new Error(
          "Firebase Anonymous sign-in is disabled. Please enable Anonymous sign-in in Firebase Auth or sign in with Google to use Barbie reminders.",
        );
      }
    }
  }

  const token = await auth.currentUser.getIdToken();
  if (typeof window !== "undefined") {
    window.localStorage.setItem("barbie_firebase_uid", auth.currentUser.uid);
  }
  return {uid: auth.currentUser.uid, token};
}

export async function askBarbie(message) {
  const cleanMessage = String(message || "").trim();

  if (!cleanMessage) {
    throw new Error("Message is required.");
  }

  try {
    await ensureBarbieAuth();
    console.log("askBarbie called", cleanMessage);
    console.log("function called", {name: "chatWithBarbie", message: cleanMessage});
    const result = await chatWithBarbie({message: cleanMessage});
    console.log("callable returned", result.data);
    console.log("function success", {name: "chatWithBarbie"});
    return result.data;
  } catch (error) {
    console.error("callable error", error);
    console.error("function error", {name: "chatWithBarbie", error});
    throw error;
  }
}

export async function connectGoogleAccount({code, clientId, email, scopes}) {
  await ensureBarbieAuth();
  const result = await connectGoogleAccountCallable({
    code,
    clientId,
    email,
    scopes,
  });
  return result.data;
}

export async function sendGmailEmail({to, subject, body}) {
  await ensureBarbieAuth();
  const result = await sendGmailEmailCallable({
    to,
    subject,
    body,
  });
  return result.data;
}

export async function generateAIText({systemInstruction, prompt, responseMimeType = "text/plain"}) {
  await ensureBarbieAuth();
  const result = await generateAITextCallable({
    systemInstruction,
    prompt,
    responseMimeType,
  });
  return result.data;
}

export async function registerDeviceToken({token, platform}) {
  await ensureBarbieAuth();
  const result = await registerDeviceTokenCallable({token, platform});
  return result.data;
}
