import React from 'react';
import Svg, { Rect, Circle, Line, Path, Defs, Marker, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function VaisesikaAsatkaryavada() {
  const { colors } = useTheme();

  return (
    <Svg  width="100%" viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" role="img">
<Defs>
<Marker id="arrow4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<Path d="M2 1L8 5L2 9" fill="none" stroke={colors.rajas} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Marker>
</Defs>
<Rect x="60" y="70" width="180" height="80" rx="8" fill={colors.avyakta2} stroke={colors.tamas} strokeWidth="0.5"/>
<SvgText x="150" y="102" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Threads</SvgText>
<SvgText x="150" y="124" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="12" fill={colors.tamas}>The cause, pre-existing</SvgText>
<Line x1="240" y1="110" x2="420" y2="110" stroke={colors.rajas} strokeWidth="1" markerEnd="url(#arrow4)"/>
<SvgText x="330" y="94" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill={colors.rajasDim}>conjunction</SvgText>
<Rect x="430" y="60" width="190" height="100" rx="8" fill={colors.avyakta2} stroke={colors.rajas} strokeWidth="1"/>
<SvgText x="525" y="94" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Cloth</SvgText>
<SvgText x="525" y="118" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="12" fill={colors.rajasDim}>A wholly new entity</SvgText>
<SvgText x="525" y="138" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="12" fill={colors.rajasDim}>not hidden in the threads</SvgText>
</Svg>
  );
}
