import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ColorPalette } from '../theme/tokens';
import { useTheme } from '../theme/useTheme';
import GunaRule from './GunaRule';

export default function NotFoundState({ label = 'That text or verse' }: { label?: string }) {
  const nav = useNavigation<any>();
  const { colors, type } = useTheme();
  const s = makeStyles(colors);
  return (
    <View style={s.screen}>
      <Text style={[type.display2, { color: colors.ink, marginBottom: 8 }]}>Not found</Text>
      <GunaRule style={{ width: 40, marginBottom: 12 }} />
      <Text style={[type.body, { color: colors.inkDim, textAlign: 'center', marginBottom: 24 }]}>{label} isn't in the library. It may have been removed or the link was off.</Text>
      <Pressable
        style={({ pressed }) => [s.btn, pressed && { opacity: 0.85, transform: [{ scale: 0.97 }] }]}
        onPress={() => (nav.canGoBack() ? nav.goBack() : nav.navigate('Home'))}
        accessibilityRole="button"
        accessibilityLabel="Go back"
      >
        <Text style={[type.label, { color: '#fff' }]}>Go back</Text>
      </Pressable>
    </View>
  );
}

const makeStyles = (colors: ColorPalette) =>
  StyleSheet.create({
    screen: { flex: 1, backgroundColor: colors.avyakta, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32 },
    btn: { backgroundColor: colors.rajas, borderRadius: 12, paddingVertical: 12, paddingHorizontal: 24 },
  });
