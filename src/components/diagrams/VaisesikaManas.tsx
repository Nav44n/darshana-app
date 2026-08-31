import React from 'react';
import Svg, { Rect, Circle, Line, Path, Defs, Marker, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function VaisesikaManas() {
  const { colors } = useTheme();

  return (
    <Svg  width="100%" viewBox="0 0 680 160" xmlns="http://www.w3.org/2000/svg" role="img">
<Defs>
<Marker id="arrow3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<Path d="M2 1L8 5L2 9" fill="none" stroke={colors.tamas} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Marker>
</Defs>
<Rect x="20" y="52" width="110" height="56" rx="8" fill={colors.avyakta2} stroke={colors.purusha} strokeWidth="0.5"/>
<SvgText x="75" y="80" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="13" fontWeight="500" fill={colors.ink}>Atma</SvgText>
<Line x1="130" y1="80" x2="170" y2="80" stroke={colors.tamas} strokeWidth="1" markerEnd="url(#arrow3)"/>
<Rect x="176" y="52" width="110" height="56" rx="8" fill={colors.avyakta2} stroke={colors.purusha} strokeWidth="0.5"/>
<SvgText x="231" y="80" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="13" fontWeight="500" fill={colors.ink}>Manas</SvgText>
<Line x1="286" y1="80" x2="326" y2="80" stroke={colors.tamas} strokeWidth="1" markerEnd="url(#arrow3)"/>
<Rect x="332" y="52" width="110" height="56" rx="8" fill={colors.avyakta2} stroke={colors.teal} strokeWidth="0.5"/>
<SvgText x="387" y="80" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="13" fontWeight="500" fill={colors.ink}>Indriya</SvgText>
<Line x1="442" y1="80" x2="482" y2="80" stroke={colors.tamas} strokeWidth="1" markerEnd="url(#arrow3)"/>
<Rect x="488" y="52" width="90" height="56" rx="8" fill={colors.avyakta2} stroke={colors.teal} strokeWidth="0.5"/>
<SvgText x="533" y="80" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="13" fontWeight="500" fill={colors.ink}>Artha</SvgText>
<SvgText x="340" y="130" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill={colors.tamas}>Only one chain completes at a time — thought is sequential</SvgText>
</Svg>
  );
}
