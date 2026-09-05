import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ColorPalette } from '../theme/tokens';
import { useTheme } from '../theme/useTheme';
import { useDisplayPrefs } from '../state/ReadingPrefs';
import GunaRule from './GunaRule';

export function Eyebrow({ children }: { children: React.ReactNode }) {
  const { colors, type } = useTheme();
  return <Text style={[type.eyebrow, { color: colors.sattvaDim, marginBottom: 6 }]}>{children}</Text>;
}

export function PageTitle({ children, withRule = false }: { children: React.ReactNode; withRule?: boolean }) {
  const { colors, type } = useTheme();
  return (
    <View style={{ marginBottom: 4 }}>
      <Text style={[type.display1, { color: colors.ink }]}>{children}</Text>
      {withRule && <GunaRule style={{ marginTop: 8 }} />}
    </View>
  );
}

export function Subtitle({ children }: { children: React.ReactNode }) {
  const { colors, type } = useTheme();
  return <Text style={[type.subtitle, { color: colors.inkDim, marginBottom: 18, marginTop: 4 }]}>{children}</Text>;
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  const { colors, type } = useTheme();
  return <Text style={[type.label, { color: colors.inkDim, marginTop: 22, marginBottom: 10 }]}>{children}</Text>;
}

export function Card({
  children,
  onPress,
  accessibilityLabel,
  withRule = false,
}: {
  children: React.ReactNode;
  onPress?: () => void;
  accessibilityLabel?: string;
  withRule?: boolean;
}) {
  const { colors, elevation } = useTheme();
  
  const content = (
    <LinearGradient
      colors={[colors.avyakta2, colors.avyakta3]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1.5 }}
      style={[s.card, elevation(1)]}
    >
      {withRule && <GunaRule weight="bold" style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />}
      {children}
    </LinearGradient>
  );

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        style={({ pressed }) => [pressed && { opacity: 0.85, transform: [{ scale: 0.99 }] }]}
      >
        {content}
      </Pressable>
    );
  }
  
  return <View>{content}</View>;
}

export function LanguageToggle() {
  const { appLanguage, toggleLanguage } = useDisplayPrefs();
  const { colors, type } = useTheme();
  return (
    <Pressable
      style={({ pressed }) => [s.themeToggle, pressed && s.themeTogglePressed]}
      onPress={toggleLanguage}
      accessibilityRole="button"
      accessibilityLabel={appLanguage === 'en' ? 'Switch to Malayalam' : 'Switch to English'}
    >
      <Text style={[type.caption, { color: colors.sattva }]}>{appLanguage === 'en' ? 'EN' : 'മല'}</Text>
    </Pressable>
  );
}

export function ThemeToggle() {
  return null;
}

export function DiagramFrame({ children, caption }: { children: React.ReactNode; caption?: string }) {
  const { colors, elevation, type } = useTheme();
  return (
    <LinearGradient
      colors={[colors.avyakta2, colors.avyakta3]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1.5 }}
      style={[s.diagramFrame, elevation(1)]}
    >
      {children}
      {caption ? <Text style={[type.caption, { color: colors.inkDim, textAlign: 'center', marginTop: 12 }]}>{caption}</Text> : null}
    </LinearGradient>
  );
}

import { colors as darkColors } from '../theme/tokens';

const s = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: darkColors.hair,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    overflow: 'hidden',
  },
  diagramFrame: {
    borderWidth: 1,
    borderColor: darkColors.hair,
    borderRadius: 16,
    padding: 16,
    marginVertical: 16,
  },
  themeToggle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: darkColors.hair,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: darkColors.avyakta2,
  },
  themeTogglePressed: {
    opacity: 0.7,
    backgroundColor: darkColors.avyakta3,
  },
});
