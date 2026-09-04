import React from 'react';
import Svg, { Rect, Circle, Line, Path, Defs, Marker, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function VaisesikaDharma() {
  const { colors } = useTheme();

  return (
    <Svg  width="100%" viewBox="0 0 680 260">
<Defs>
<Marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<Path d="M2 1L8 5L2 9" fill="none" stroke={colors.purusha} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Marker>
</Defs>
<Rect x="60" y="102" width="160" height="56" rx="8" fill={colors.avyakta2} stroke={colors.purusha} strokeWidth="0.5"/>
<SvgText x="140" y="130" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Dharma</SvgText>
<Line x1="220" y1="118" x2="452" y2="70" stroke={colors.purusha} strokeWidth="1" markerEnd="url(#arrow)"/>
<Line x1="220" y1="142" x2="452" y2="190" stroke={colors.purusha} strokeWidth="1" markerEnd="url(#arrow)"/>
<Rect x="460" y="42" width="180" height="56" rx="8" fill={colors.avyakta2} stroke={colors.teal} strokeWidth="0.5"/>
<SvgText x="550" y="62" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Abhyudaya</SvgText>
<SvgText x="550" y="82" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="12" fill={colors.tealDim}>Worldly prosperity</SvgText>
<Rect x="460" y="162" width="180" height="56" rx="8" fill={colors.avyakta2} stroke={colors.rajas} strokeWidth="0.5"/>
<SvgText x="550" y="182" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Nihsreyasa</SvgText>
<SvgText x="550" y="202" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="12" fill={colors.rajasDim}>Final liberation</SvgText>
</Svg>
  );
}
