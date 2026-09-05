import React from 'react';
import { Text, TextStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { linkifyReferences } from '../utils/crossref';
import { useTheme } from '../theme/useTheme';

function LinkedText({ style, children }: { style?: TextStyle | TextStyle[]; children: string }) {
  const nav = useNavigation<any>();
  const { colors } = useTheme();
  const segments = React.useMemo(() => linkifyReferences(children), [children]);

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

export default React.memo(LinkedText);
