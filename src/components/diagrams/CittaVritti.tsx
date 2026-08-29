import React from 'react';
import Svg, { Circle, Path, Text as SvgText } from 'react-native-svg';
import { colors } from '../../theme/tokens';

const ripples = [
  { cx: 90, cy: 55, r: 14 },
  { cx: 150, cy: 40, r: 10 },
  { cx: 200, cy: 70, r: 16 },
  { cx: 120, cy: 95, r: 11 },
  { cx: 230, cy: 110, r: 9 },
];

export default function CittaVritti() {
  return (
    <Svg viewBox="0 0 320 190" width="100%" height={180}>
      <Circle cx={160} cy={75} r={62} fill="none" stroke={colors.hair} strokeWidth={1} strokeDasharray="3 4" />
      {ripples.map((r, i) => (
        <Circle key={i} cx={r.cx} cy={r.cy} r={r.r} fill={colors.rajas} opacity={0.5} />
      ))}
      <SvgText x={160} y={80} fontSize={10} fill={colors.inkDim} textAnchor="middle" fontStyle="italic">
        citta — restless
      </SvgText>
      <Path d="M160,145 L160,160" stroke={colors.hair} strokeWidth={1} />
      <Circle cx={160} cy={172} r={5} fill={colors.sattva} />
      <SvgText x={175} y={176} fontSize={9.5} fill={colors.sattva} textAnchor="start">
        nirodha — vṛttis stilled
      </SvgText>
    </Svg>
  );
}
