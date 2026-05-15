import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  query,
  serverTimestamp,
  Timestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import {firebaseApp} from "./barbieAI.js";

const db = getFirestore(firebaseApp);

export function subscribePendingReminders(userId, onChange, onError) {
  if (!userId) {
    onChange([]);
    return () => {};
  }

  const remindersQuery = query(
    collection(db, "notifications"),
    where("userId", "==", userId),
    where("status", "==", "pending"),
    where("type", "==", "reminder"),
  );

  return onSnapshot(
    remindersQuery,
    (snapshot) => {
      const reminders = snapshot.docs.map((snap) => ({
        id: snap.id,
        ...snap.data(),
      }));
      onChange(reminders);
    },
    (error) => {
      if (onError) onError(error);
    },
  );
}

export function getReminderTime(reminder) {
  if (!reminder?.remindAt) return null;
  if (typeof reminder.remindAt.toDate === "function") return reminder.remindAt.toDate();
  if (reminder.remindAt instanceof Date) return reminder.remindAt;
  return new Date(reminder.remindAt);
}

export function isReminderDue(reminder, now = new Date()) {
  const remindAt = getReminderTime(reminder);
  return remindAt instanceof Date && !Number.isNaN(remindAt.getTime()) && remindAt.getTime() <= now.getTime();
}

export async function completeReminder(reminderId) {
  await updateDoc(doc(db, "notifications", reminderId), {
    status: "completed",
    completedAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

export async function snoozeReminder(reminderId, minutes = 5) {
  const snoozedUntil = new Date(Date.now() + minutes * 60 * 1000);
  await updateDoc(doc(db, "notifications", reminderId), {
    remindAt: Timestamp.fromDate(snoozedUntil),
    status: "pending",
    snoozedAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}
