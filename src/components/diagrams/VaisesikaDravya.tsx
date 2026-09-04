import React from 'react';
import Svg, { Rect, Circle, Line, Path, Defs, Marker, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function VaisesikaDravya() {
  const { colors } = useTheme();

  return (
    <Svg  width="100%" viewBox="0 0 680 300">
<Rect x="20" y="20" width="200" height="72" rx="8" fill={colors.avyakta2} stroke={colors.sattva} strokeWidth="0.5"/>
<SvgText x="120" y="56" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Prthivi — Earth</SvgText>
<Rect x="240" y="20" width="200" height="72" rx="8" fill={colors.avyakta2} stroke={colors.sattva} strokeWidth="0.5"/>
<SvgText x="340" y="56" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Apa — Water</SvgText>
<Rect x="460" y="20" width="200" height="72" rx="8" fill={colors.avyakta2} stroke={colors.rajas} strokeWidth="0.5"/>
<SvgText x="560" y="56" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Teja — Fire</SvgText>
<Rect x="20" y="112" width="200" height="72" rx="8" fill={colors.avyakta2} stroke={colors.tamas} strokeWidth="0.5"/>
<SvgText x="120" y="148" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Vayu — Air</SvgText>
<Rect x="240" y="112" width="200" height="72" rx="8" fill={colors.avyakta2} stroke={colors.tamas} strokeWidth="0.5"/>
<SvgText x="340" y="148" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Akasa — Ether</SvgText>
<Rect x="460" y="112" width="200" height="72" rx="8" fill={colors.avyakta2} stroke={colors.rajas} strokeWidth="0.5"/>
<SvgText x="560" y="148" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Kala — Time</SvgText>
<Rect x="20" y="204" width="200" height="72" rx="8" fill={colors.avyakta2} stroke={colors.rajas} strokeWidth="0.5"/>
<SvgText x="120" y="240" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Dik — Direction</SvgText>
<Rect x="240" y="204" width="200" height="72" rx="8" fill={colors.avyakta2} stroke={colors.purusha} strokeWidth="0.5"/>
<SvgText x="340" y="240" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Atma — Self</SvgText>
<Rect x="460" y="204" width="200" height="72" rx="8" fill={colors.avyakta2} stroke={colors.purusha} strokeWidth="0.5"/>
<SvgText x="560" y="240" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Manas — Mind</SvgText>
</Svg>
  );
}
