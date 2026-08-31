import React from 'react';
import Svg, { Rect, Circle, Line, Path, Defs, Marker, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function VaisesikaParamanu() {
  const { colors } = useTheme();

  return (
    <Svg  width="100%" viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" role="img">
<Defs>
<Marker id="arrow2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<Path d="M2 1L8 5L2 9" fill="none" stroke={colors.tamas} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Marker>
</Defs>
<Circle cx="80" cy="60" r="26" fill={colors.avyakta2} stroke={colors.rajas} strokeWidth="0.5"/>
<SvgText x="80" y="60" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="12" fill={colors.ink}>Fire</SvgText>
<Circle cx="80" cy="130" r="26" fill={colors.avyakta2} stroke={colors.sattva} strokeWidth="0.5"/>
<SvgText x="80" y="130" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="12" fill={colors.ink}>Water</SvgText>
<Circle cx="80" cy="200" r="26" fill={colors.avyakta2} stroke={colors.sattva} strokeWidth="0.5"/>
<SvgText x="80" y="200" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="12" fill={colors.ink}>Earth</SvgText>
<Circle cx="160" cy="165" r="26" fill={colors.avyakta2} stroke={colors.tamas} strokeWidth="0.5"/>
<SvgText x="160" y="165" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="12" fill={colors.ink}>Air</SvgText>
<Line x1="112" y1="70" x2="380" y2="120" stroke={colors.tamas} strokeWidth="0.75" markerEnd="url(#arrow2)"/>
<Line x1="112" y1="130" x2="380" y2="128" stroke={colors.tamas} strokeWidth="0.75" markerEnd="url(#arrow2)"/>
<Path d="M106,207 L106,228 L380,150" fill="none" stroke={colors.tamas} strokeWidth="0.75" markerEnd="url(#arrow2)"/>
<Line x1="188" y1="160" x2="380" y2="135" stroke={colors.tamas} strokeWidth="0.75" markerEnd="url(#arrow2)"/>
<SvgText x="240" y="90" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill={colors.tamas}>conjunction</SvgText>
<Circle cx="470" cy="130" r="90" fill={colors.avyakta2} stroke={colors.purusha} strokeWidth="0.5"/>
<SvgText x="470" y="120" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Composite substance</SvgText>
<SvgText x="470" y="142" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="12" fill={colors.purushaDim}>e.g. a jar, a body</SvgText>
</Svg>
  );
}
