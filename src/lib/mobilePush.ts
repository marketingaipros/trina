import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';
import { registerDeviceToken } from './barbieAI.js';

export async function registerMobilePushNotifications() {
  if (!Capacitor.isNativePlatform()) {
    return { registered: false, reason: 'not-native' };
  }

  let permission = await PushNotifications.checkPermissions();
  if (permission.receive === 'prompt') {
    permission = await PushNotifications.requestPermissions();
  }

  if (permission.receive !== 'granted') {
    return { registered: false, reason: 'permission-denied' };
  }

  await PushNotifications.removeAllListeners();

  PushNotifications.addListener('registration', async (token) => {
    try {
      await registerDeviceToken({
        token: token.value,
        platform: Capacitor.getPlatform(),
      });
    } catch (error) {
      console.warn('Push token registration failed:', error);
    }
  });

  PushNotifications.addListener('registrationError', (error) => {
    console.warn('Push registration error:', error);
  });

  PushNotifications.addListener('pushNotificationActionPerformed', (event) => {
    const notificationId = event.notification.data?.notificationId;
    if (notificationId) {
      window.localStorage.setItem('barbie_last_opened_notification_id', notificationId);
    }
  });

  await PushNotifications.register();
  return { registered: true };
}
