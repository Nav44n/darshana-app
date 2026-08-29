import React from 'react';
import { Text, TextStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { linkifyReferences } from '../utils/crossref';
import { useTheme } from '../theme/useTheme';

export default function LinkedText({ style, children }: { style?: TextStyle | TextStyle[]; children: string }) {
  const nav = useNavigation<any>();
  const { colors } = useTheme();
  const segments = linkifyReferences(children);

  if (segments.every((s) => !s.link)) {
    return <Text style={style}>{children}</Text>;
  }

  return (
    <Text style={style}>
      {segments.map((seg, i) =>
        seg.link ? (
          <Text
            key={i}
            style={{ color: colors.rajas, textDecorationLine: 'underline' }}
            onPress={() => nav.navigate('VerseDetail', { ...seg.link })}
          >
            {seg.text}
          </Text>
        ) : (
          <Text key={i}>{seg.text}</Text>
        )
      )}
    </Text>
  );
}
