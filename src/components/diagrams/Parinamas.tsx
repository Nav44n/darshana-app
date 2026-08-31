import React from 'react';
import Svg, { Rect, Line, Path, Defs, Marker, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function Parinamas() {
  const { colors } = useTheme();

  const stages = [
    { title: 'Nirodha-pariṇāma', sub: 'the moment of restriction' },
    { title: 'Samādhi-pariṇāma', sub: 'distraction shrinks, focus rises' },
    { title: 'Ekāgratā-pariṇāma', sub: 'continuous one-pointed flow' },
  ];

  const bw = 180, gap = 20;

  return (
    <Svg width="100%" viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg" role="img">
      <Defs>
        <Marker id="arrowPZ" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <Path d="M2 1L8 5L2 9" fill="none" stroke={colors.tamas} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Marker>
      </Defs>

      {stages.map((s, i) => {
        const x = 20 + i * (bw + gap);
        return (
          <React.Fragment key={s.title}>
            <Rect x={x} y="50" width={bw} height="70" rx="8" fill={colors.avyakta2} stroke={colors.purusha} strokeWidth="0.6"/>
            <SvgText x={x + bw / 2} y="78" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="13.5" fontWeight="500" fill={colors.ink}>{s.title}</SvgText>
            <SvgText x={x + bw / 2} y="100" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="10.5" fill={colors.purushaDim}>{s.sub}</SvgText>
            {i < stages.length - 1 && (
              <Line x1={x + bw} y1="85" x2={x + bw + gap} y2="85" stroke={colors.tamas} strokeWidth="1" markerEnd="url(#arrowPZ)"/>
            )}
          </React.Fragment>
        );
      })}

      <SvgText x="340" y="160" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill={colors.tamas}>Deepening Saṃyama reshapes how the mind relates to time itself</SvgText>
    </Svg>
  );
}

