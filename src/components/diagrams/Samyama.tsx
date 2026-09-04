import React from 'react';
import Svg, { Rect, Line, Path, Defs, Marker, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function Samyama() {
  const { colors } = useTheme();

  const inputs = ['Dhāraṇā', 'Dhyāna', 'Samādhi'];

  return (
    <Svg width="100%" viewBox="0 0 680 260">
      <Defs>
        <Marker id="arrowSY" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <Path d="M2 1L8 5L2 9" fill="none" stroke={colors.teal} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Marker>
      </Defs>

      {inputs.map((label, i) => {
        const x = 30 + i * 150;
        return (
          <React.Fragment key={label}>
            <Rect x={x} y="20" width="130" height="56" rx="8" fill={colors.avyakta2} stroke={colors.teal} strokeWidth="0.5"/>
            <SvgText x={x + 65} y="48" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="13" fontWeight="500" fill={colors.ink}>{label}</SvgText>
            <Line x1={x + 65} y1="76" x2="340" y2="130" stroke={colors.teal} strokeWidth="1" markerEnd="url(#arrowSY)"/>
          </React.Fragment>
        );
      })}

      <Rect x="260" y="140" width="160" height="56" rx="8" fill={colors.avyakta2} stroke={colors.purusha} strokeWidth="0.8"/>
      <SvgText x="340" y="168" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Saṃyama</SvgText>

      <Line x1="420" y1="168" x2="500" y2="168" stroke={colors.amber} strokeWidth="1" markerEnd="url(#arrowSY)"/>

      <Rect x="506" y="140" width="150" height="56" rx="8" fill={colors.avyakta2} stroke={colors.amber} strokeWidth="0.5"/>
      <SvgText x="581" y="162" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="13" fontWeight="500" fill={colors.ink}>Insight & Siddhis</SvgText>
      <SvgText x="581" y="180" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="10.5" fill={colors.amberDim}>extraordinary powers</SvgText>

      <SvgText x="340" y="230" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill={colors.tamas}>Yet these very powers are warned to be obstacles to final Kaivalya</SvgText>
    </Svg>
  );
}

