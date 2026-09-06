import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { darkColors, fonts } from '../theme/tokens';

type Props = { children: React.ReactNode };
type State = { error: Error | null };

// Deliberately does not use useTheme() — an error here must render even if
// ReadingPrefsProvider itself is what threw, so it falls back to the fixed
// dark palette rather than depending on the context it's meant to guard.
export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Darśana app crashed:', error, info.componentStack);
  }

  reset = () => this.setState({ error: null });

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <View style={s.screen}>
        <Text style={s.eyebrow}>Something went wrong</Text>
        <Text style={s.title}>This screen hit an error</Text>
        <Text style={s.message}>{this.state.error.message}</Text>
        <Pressable style={s.btn} onPress={this.reset} accessibilityRole="button" accessibilityLabel="Try again">
          <Text style={s.btnText}>Try again</Text>
        </Pressable>
      </View>
    );
  }
}

const s = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: darkColors.avyakta,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  eyebrow: {
    fontFamily: fonts.sansBold,
    fontSize: 11,
    letterSpacing: 1.6,
    textTransform: 'uppercase',
    color: darkColors.rajas,
    marginBottom: 10,
  },
  title: { fontFamily: fonts.display, fontSize: 22, color: darkColors.ink, marginBottom: 10, textAlign: 'center' },
  message: { fontFamily: fonts.serif, fontSize: 15, color: darkColors.inkDim, textAlign: 'center', marginBottom: 24 },
  btn: { backgroundColor: darkColors.rajas, borderRadius: 12, paddingVertical: 12, paddingHorizontal: 24 },
  btnText: { fontFamily: fonts.sansBold, fontSize: 13, color: '#fff' },
});
