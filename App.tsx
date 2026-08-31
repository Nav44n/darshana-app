import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { Fraunces_500Medium } from '@expo-google-fonts/fraunces';
import {
  CormorantGaramond_400Regular,
  CormorantGaramond_400Regular_Italic,
} from '@expo-google-fonts/cormorant-garamond';
import { NotoSerifDevanagari_400Regular } from '@expo-google-fonts/noto-serif-devanagari';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter';
import RootNavigator from './src/navigation/RootNavigator';
import { ReadingPrefsProvider } from './src/state/ReadingPrefs';
import ErrorBoundary from './src/components/ErrorBoundary';
import { useTheme } from './src/theme/useTheme';

SplashScreen.preventAutoHideAsync().catch(() => {});

function AppShell() {
  const { colors, mode } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: colors.avyakta }}>
      <StatusBar style={mode === 'dark' ? 'light' : 'dark'} />
      <RootNavigator />
    </View>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Fraunces_500Medium,
    CormorantGaramond_400Regular,
    CormorantGaramond_400Regular_Italic,
    NotoSerifDevanagari_400Regular,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    if (fontsLoaded) {
      setAppIsReady(true);
      SplashScreen.hideAsync().catch(() => {});
    } else {
      const timer = setTimeout(() => {
        setAppIsReady(true);
        SplashScreen.hideAsync().catch(() => {});
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [fontsLoaded]);

  if (!appIsReady) return null;

  return (
    <SafeAreaProvider>
      <ErrorBoundary>
        <ReadingPrefsProvider>
          <AppShell />
        </ReadingPrefsProvider>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}

