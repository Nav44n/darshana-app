import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fonts, ColorPalette } from '../theme/tokens';
import { useTheme } from '../theme/useTheme';

export default function NotFoundState({ label = 'That text or verse' }: { label?: string }) {
  const nav = useNavigation<any>();
  const { colors } = useTheme();
  const s = makeStyles(colors);
  return (
    <View style={s.screen}>
      <Text style={s.title}>Not found</Text>
      <Text style={s.message}>{label} isn't in the library. It may have been removed or the link was off.</Text>
      <Pressable
        style={s.btn}
        onPress={() => (nav.canGoBack() ? nav.goBack() : nav.navigate('Home'))}
        accessibilityRole="button"
        accessibilityLabel="Go back"
      >
        <Text style={s.btnText}>Go back</Text>
      </Pressable>
    </View>
  );
}

const makeStyles = (colors: ColorPalette) =>
  StyleSheet.create({
    screen: { flex: 1, backgroundColor: colors.avyakta, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32 },
    title: { fontFamily: fonts.display, fontSize: 22, color: colors.ink, marginBottom: 10 },
    message: { fontFamily: fonts.serif, fontSize: 15, color: colors.inkDim, textAlign: 'center', marginBottom: 24 },
    btn: { backgroundColor: colors.rajas, borderRadius: 12, paddingVertical: 12, paddingHorizontal: 24 },
    btnText: { fontFamily: fonts.sansBold, fontSize: 13, color: '#fff' },
  });
