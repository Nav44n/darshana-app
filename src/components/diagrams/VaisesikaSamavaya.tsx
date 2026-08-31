import React from 'react';
import Svg, { Rect, Circle, Line, Path, Defs, Marker, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function VaisesikaSamavaya() {
  const { colors } = useTheme();

  return (
    <Svg  width="100%" viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg" role="img">
<Rect x="40" y="30" width="260" height="170" rx="16" fill={colors.avyakta2} stroke={colors.tamas} strokeWidth="0.5"/>
<SvgText x="170" y="56" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Samavaya — inherence</SvgText>
<Line x1="80" y1="90" x2="260" y2="90" stroke={colors.sattva} strokeWidth="4" strokeLinecap="round"/>
<Line x1="80" y1="115" x2="260" y2="115" stroke={colors.sattva} strokeWidth="4" strokeLinecap="round"/>
<Line x1="80" y1="140" x2="260" y2="140" stroke={colors.sattva} strokeWidth="4" strokeLinecap="round"/>
<SvgText x="170" y="175" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill={colors.sattvaDim}>Threads inseparable from cloth</SvgText>
<Rect x="380" y="30" width="260" height="170" rx="16" fill={colors.avyakta2} stroke={colors.rajas} strokeWidth="0.5"/>
<SvgText x="510" y="56" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Samyoga — mere contact</SvgText>
<Circle cx="460" cy="120" r="30" fill={colors.avyakta2} stroke={colors.rajas} strokeWidth="0.5"/>
<SvgText x="460" y="120" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="12" fill={colors.ink}>hand</SvgText>
<Rect x="510" y="100" width="90" height="40" rx="6" fill={colors.avyakta2} stroke={colors.rajas} strokeWidth="0.5"/>
<SvgText x="555" y="120" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="12" fill={colors.ink}>table</SvgText>
<SvgText x="510" y="175" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill={colors.rajasDim}>Separable, temporary touch</SvgText>
</Svg>
  );
}
