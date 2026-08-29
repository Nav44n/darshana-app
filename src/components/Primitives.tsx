import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { fonts, ColorPalette } from '../theme/tokens';
import { useTheme } from '../theme/useTheme';
import { useReadingPrefs } from '../state/ReadingPrefs';

export function Eyebrow({ children }: { children: React.ReactNode }) {
  const { colors } = useTheme();
  return <Text style={makeStyles(colors).eyebrow}>{children}</Text>;
}

export function PageTitle({ children }: { children: React.ReactNode }) {
  const { colors } = useTheme();
  return <Text style={makeStyles(colors).pageTitle}>{children}</Text>;
}

export function Subtitle({ children }: { children: React.ReactNode }) {
  const { colors } = useTheme();
  return <Text style={makeStyles(colors).subtitle}>{children}</Text>;
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  const { colors } = useTheme();
  return <Text style={makeStyles(colors).sectionLabel}>{children}</Text>;
}

export function Card({
  children,
  onPress,
  accessibilityLabel,
}: {
  children: React.ReactNode;
  onPress?: () => void;
  accessibilityLabel?: string;
}) {
  const { colors } = useTheme();
  const s = makeStyles(colors);
  if (onPress) {
    return (
      <Pressable style={s.card} onPress={onPress} accessibilityRole="button" accessibilityLabel={accessibilityLabel}>
        {children}
      </Pressable>
    );
  }
  return <View style={s.card}>{children}</View>;
}

export function LanguageToggle() {
  const { appLanguage, toggleLanguage } = useReadingPrefs();
  const { colors } = useTheme();
  const s = makeStyles(colors);
  return (
    <Pressable
      style={s.themeToggle}
      onPress={toggleLanguage}
      accessibilityRole="button"
      accessibilityLabel={appLanguage === 'en' ? 'Switch to Malayalam' : 'Switch to English'}
    >
      <Text style={s.themeToggleText}>{appLanguage === 'en' ? 'EN' : 'അ'}</Text>
    </Pressable>
  );
}

// Dark/light switch — self-contained so every screen can drop it into its
// own header row without redeclaring the button style. Was previously only
// on HomeScreen, so it was invisible (not inoperative — theme state is
// global) from every other screen.
export function ThemeToggle() {
  const { colors, mode, toggleThemeMode } = useTheme();
  const s = makeStyles(colors);
  return (
    <Pressable
      style={s.themeToggle}
      onPress={toggleThemeMode}
      accessibilityRole="button"
      accessibilityLabel={mode === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <Text style={s.themeToggleText}>{mode === 'dark' ? '☾' : '☀'}</Text>
    </Pressable>
  );
}

export function DiagramFrame({ children, caption }: { children: React.ReactNode; caption?: string }) {
  const { colors } = useTheme();
  const s = makeStyles(colors);
  return (
    <View style={s.diagramFrame}>
      {children}
      {caption ? <Text style={s.diagramCaption}>{caption}</Text> : null}
    </View>
  );
}

const makeStyles = (colors: ColorPalette) =>
  StyleSheet.create({
    eyebrow: {
      fontFamily: fonts.sansBold,
      fontSize: 10.5,
      letterSpacing: 2,
      textTransform: 'uppercase',
      color: colors.sattvaDim,
      marginBottom: 6,
    },
    pageTitle: {
      fontFamily: fonts.display,
      fontSize: 30,
      color: colors.ink,
      lineHeight: 34,
      marginBottom: 4,
    },
    subtitle: {
      fontFamily: fonts.serifItalic,
      fontSize: 16,
      color: colors.inkDim,
      marginBottom: 18,
    },
    sectionLabel: {
      fontFamily: fonts.sansBold,
      fontSize: 11,
      letterSpacing: 1.4,
      textTransform: 'uppercase',
      color: colors.inkDim,
      marginTop: 22,
      marginBottom: 10,
    },
    card: {
      backgroundColor: colors.avyakta2,
      borderWidth: 1,
      borderColor: colors.hair,
      borderRadius: 16,
      padding: 16,
      marginBottom: 12,
    },
    diagramFrame: {
      backgroundColor: colors.avyakta2,
      borderWidth: 1,
      borderColor: colors.hair,
      borderRadius: 16,
      padding: 16,
      marginVertical: 16,
    },
    diagramCaption: {
      fontFamily: fonts.serifItalic,
      fontSize: 11,
      color: colors.inkDim,
      textAlign: 'center',
      marginTop: 8,
    },
    themeToggle: {
      width: 34,
      height: 34,
      borderRadius: 17,
      borderWidth: 1,
      borderColor: colors.hair,
      alignItems: 'center',
      justifyContent: 'center',
    },
    themeToggleText: { fontSize: 16, color: colors.sattva },
  });
