import React from 'react';
import Svg, { Rect, Circle, Line, Path, Defs, Marker, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function VaisesikaMoksha() {
  const { colors } = useTheme();

  return (
    <Svg  width="100%" viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg" role="img">
<Defs>
<Marker id="arrow5" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<Path d="M2 1L8 5L2 9" fill="none" stroke={colors.tamas} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Marker>
</Defs>
<SvgText x="140" y="34" textAnchor="middle" fontFamily="sans-serif" fontSize="13" fontWeight="500" fill={colors.ink}>Bound state</SvgText>
<Circle cx="110" cy="120" r="70" fill={colors.avyakta2} stroke={colors.purusha} strokeWidth="0.5"/>
<SvgText x="110" y="112" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="13" fontWeight="500" fill={colors.ink}>Atma</SvgText>
<Circle cx="195" cy="120" r="16" fill={colors.avyakta2} stroke={colors.amber} strokeWidth="0.5"/>
<SvgText x="195" y="120" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="10" fill={colors.ink}>Manas</SvgText>
<SvgText x="140" y="200" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill={colors.tamas}>Cognition, pain present</SvgText>
<Line x1="280" y1="120" x2="400" y2="120" stroke={colors.tamas} strokeWidth="1" markerEnd="url(#arrow5)"/>
<SvgText x="340" y="100" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill={colors.tamas}>true knowledge</SvgText>
<SvgText x="540" y="34" textAnchor="middle" fontFamily="sans-serif" fontSize="13" fontWeight="500" fill={colors.ink}>Liberated state</SvgText>
<Circle cx="540" cy="120" r="70" fill={colors.avyakta2} stroke={colors.teal} strokeWidth="0.5"/>
<SvgText x="540" y="112" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="13" fontWeight="500" fill={colors.ink}>Atma</SvgText>
<SvgText x="540" y="132" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="11" fill={colors.tealDim}>alone</SvgText>
<Circle cx="620" cy="120" r="16" fill="none" stroke={colors.tamas} strokeWidth="0.5" strokeDasharray="2 2"/>
<SvgText x="540" y="200" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill={colors.tamas}>Manas detached — pure stillness</SvgText>
</Svg>
  );
}
