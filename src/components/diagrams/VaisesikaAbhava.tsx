import React from 'react';
import Svg, { Rect, Circle, Line, Path, Defs, Marker, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function VaisesikaAbhava() {
  const { colors } = useTheme();

  return (
    <Svg  width="100%" viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg" role="img">
<Rect x="20" y="50" width="150" height="100" rx="8" fill={colors.avyakta2} stroke={colors.tamas} strokeWidth="0.5"/>
<SvgText x="95" y="86" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="13" fontWeight="500" fill={colors.ink}>Prior</SvgText>
<SvgText x="95" y="114" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="12" fill={colors.tamas}>Pot not yet made</SvgText>
<Rect x="185" y="50" width="150" height="100" rx="8" fill={colors.avyakta2} stroke={colors.tamas} strokeWidth="0.5"/>
<SvgText x="260" y="86" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="13" fontWeight="500" fill={colors.ink}>Posterior</SvgText>
<SvgText x="260" y="114" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="12" fill={colors.tamas}>Pot now smashed</SvgText>
<Rect x="350" y="50" width="150" height="100" rx="8" fill={colors.avyakta2} stroke={colors.tamas} strokeWidth="0.5"/>
<SvgText x="425" y="86" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="13" fontWeight="500" fill={colors.ink}>Absolute</SvgText>
<SvgText x="425" y="114" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="12" fill={colors.tamas}>No fire in a lake</SvgText>
<Rect x="515" y="50" width="150" height="100" rx="8" fill={colors.avyakta2} stroke={colors.tamas} strokeWidth="0.5"/>
<SvgText x="590" y="86" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="13" fontWeight="500" fill={colors.ink}>Mutual</SvgText>
<SvgText x="590" y="114" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="12" fill={colors.tamas}>A pot is not cloth</SvgText>
</Svg>
  );
}
