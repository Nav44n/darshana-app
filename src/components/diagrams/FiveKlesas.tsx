import React from 'react';
import Svg, { Rect, Line, Path, Defs, Marker, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function FiveKlesas() {
  const { colors } = useTheme();

  const items = [
    { title: 'Asmitā', sub: 'ego', x: 20 },
    { title: 'Rāga', sub: 'attachment', x: 180 },
    { title: 'Dveṣa', sub: 'aversion', x: 340 },
    { title: 'Abhiniveśa', sub: 'fear of death', x: 500 },
  ];

  return (
    <Svg width="100%" viewBox="0 0 680 260">
      <Defs>
        <Marker id="arrowFK" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <Path d="M2 1L8 5L2 9" fill="none" stroke={colors.tamas} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Marker>
      </Defs>

      <Rect x="260" y="20" width="160" height="56" rx="8" fill={colors.avyakta2} stroke={colors.tamas} strokeWidth="0.5"/>
      <SvgText x="340" y="42" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Avidyā</SvgText>
      <SvgText x="340" y="62" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="11" fill={colors.tamas}>root ignorance</SvgText>

      {items.map((it, idx) => (
        <React.Fragment key={it.title}>
          <Line
            x1={340}
            y1={76}
            x2={it.x + 80}
            y2={150}
            stroke={colors.tamas}
            strokeWidth="1"
            strokeDasharray="3 3"
            markerEnd="url(#arrowFK)"
          />
          <Rect x={it.x} y="150" width="160" height="72" rx="8" fill={colors.avyakta2} stroke={colors.rajas} strokeWidth="0.5"/>
          <SvgText x={it.x + 80} y="180" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>{it.title}</SvgText>
          <SvgText x={it.x + 80} y="200" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="11" fill={colors.rajasDim}>{it.sub}</SvgText>
        </React.Fragment>
      ))}
    </Svg>
  );
}

