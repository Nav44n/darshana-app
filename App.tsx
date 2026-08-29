import React, { useCallback } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts as useFraunces, Fraunces_500Medium } from '@expo-google-fonts/fraunces';
import {
  useFonts as useCormorant,
  CormorantGaramond_400Regular,
  CormorantGaramond_400Regular_Italic,
} from '@expo-google-fonts/cormorant-garamond';
import { useFonts as useDevanagari, NotoSerifDevanagari_400Regular } from '@expo-google-fonts/noto-serif-devanagari';
import { useFonts as useInter, Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter';
import RootNavigator from './src/navigation/RootNavigator';
import { ReadingPrefsProvider } from './src/state/ReadingPrefs';
import ErrorBoundary from './src/components/ErrorBoundary';
import { useTheme } from './src/theme/useTheme';

SplashScreen.preventAutoHideAsync();

function AppShell({ onLayout }: { onLayout: () => void }) {
  const { colors, mode } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: colors.avyakta }} onLayout={onLayout}>
      <StatusBar style={mode === 'dark' ? 'light' : 'dark'} />
      <RootNavigator />
    </View>
  );
}

export default function App() {
  const [f1] = useFraunces({ Fraunces_500Medium });
  const [f2] = useCormorant({ CormorantGaramond_400Regular, CormorantGaramond_400Regular_Italic });
  const [f3] = useDevanagari({ NotoSerifDevanagari_400Regular });
  const [f4] = useInter({ Inter_400Regular, Inter_500Medium, Inter_600SemiBold });
  const ready = f1 && f2 && f3 && f4;

  const onLayout = useCallback(async () => {
    if (ready) await SplashScreen.hideAsync();
  }, [ready]);

  if (!ready) return null;

  return (
    <ErrorBoundary>
      <ReadingPrefsProvider>
        <AppShell onLayout={onLayout} />
      </ReadingPrefsProvider>
    </ErrorBoundary>
  );
}
