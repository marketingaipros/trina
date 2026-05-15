import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.learnandgrow.barbie',
  appName: 'Barbie',
  webDir: 'dist',
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
    },
    StatusBar: {
      style: 'LIGHT',
      backgroundColor: '#fff5f7',
    },
  },
};

export default config;
