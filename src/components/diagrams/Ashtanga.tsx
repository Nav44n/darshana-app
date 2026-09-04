import React from 'react';
import Svg, { Rect, Line, Path, Defs, Marker, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function Ashtanga() {
  const { colors } = useTheme();

  const outer = ['Yama', 'Niyama', 'Āsana', 'Prāṇāyāma', 'Pratyāhāra'];
  const inner = ['Dhāraṇā', 'Dhyāna', 'Samādhi'];
  const bw = 120, gap = 10;

  return (
    <Svg width="100%" viewBox="0 0 680 260">
      <Defs>
        <Marker id="arrowAS" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <Path d="M2 1L8 5L2 9" fill="none" stroke={colors.tamas} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Marker>
      </Defs>

      <SvgText x="340" y="20" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill={colors.amberDim}>Bahiraṅga — the outer limbs</SvgText>
      {outer.map((label, i) => {
        const x = 10 + i * (bw + gap);
        return (
          <React.Fragment key={label}>
            <Rect x={x} y="34" width={bw} height="60" rx="8" fill={colors.avyakta2} stroke={colors.amber} strokeWidth="0.5"/>
            <SvgText x={x + bw / 2} y="64" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="13" fontWeight="500" fill={colors.ink}>{label}</SvgText>
            {i < outer.length - 1 && (
              <Line x1={x + bw} y1="64" x2={x + bw + gap} y2="64" stroke={colors.tamas} strokeWidth="1" markerEnd="url(#arrowAS)"/>
            )}
          </React.Fragment>
        );
      })}

      <Path
        d={`M${10 + 4 * (bw + gap) + bw / 2} 94 L${10 + 4 * (bw + gap) + bw / 2} 130 L${145 + bw / 2} 130 L${145 + bw / 2} 158`}
        fill="none"
        stroke={colors.tamas}
        strokeWidth="1"
        markerEnd="url(#arrowAS)"
      />

      <SvgText x="340" y="146" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill={colors.tealDim}>Antaraṅga — Saṃyama, the inner limbs</SvgText>
      {inner.map((label, i) => {
        const x = 145 + i * (bw + gap);
        return (
          <React.Fragment key={label}>
            <Rect x={x} y="160" width={bw} height="60" rx="8" fill={colors.avyakta2} stroke={colors.teal} strokeWidth="0.5"/>
            <SvgText x={x + bw / 2} y="190" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="13" fontWeight="500" fill={colors.ink}>{label}</SvgText>
            {i < inner.length - 1 && (
              <Line x1={x + bw} y1="190" x2={x + bw + gap} y2="190" stroke={colors.tamas} strokeWidth="1" markerEnd="url(#arrowAS)"/>
            )}
          </React.Fragment>
        );
      })}

      <SvgText x="340" y="245" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill={colors.tamas}>Outer discipline of body and world gives way to inner discipline of mind</SvgText>
    </Svg>
  );
}

