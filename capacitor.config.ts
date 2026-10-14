import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mentalmath.trainer',
  appName: 'Mental Math',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
