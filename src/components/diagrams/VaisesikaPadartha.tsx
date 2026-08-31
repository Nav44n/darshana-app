import React from 'react';
import Svg, { Rect, Circle, Line, Path, Defs, Marker, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function VaisesikaPadartha() {
  const { colors } = useTheme();

  return (
    <Svg  width="100%" viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg" role="img">
<Rect x="20" y="60" width="100" height="80" rx="8" fill={colors.avyakta2} stroke={colors.purusha} strokeWidth="0.5"/>
<SvgText x="70" y="92" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Dravya</SvgText>
<SvgText x="70" y="112" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="12" fill={colors.purushaDim}>Substance</SvgText>
<Rect x="132" y="60" width="100" height="80" rx="8" fill={colors.avyakta2} stroke={colors.teal} strokeWidth="0.5"/>
<SvgText x="182" y="92" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Guna</SvgText>
<SvgText x="182" y="112" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="12" fill={colors.tealDim}>Attribute</SvgText>
<Rect x="244" y="60" width="100" height="80" rx="8" fill={colors.avyakta2} stroke={colors.rajas} strokeWidth="0.5"/>
<SvgText x="294" y="92" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Karma</SvgText>
<SvgText x="294" y="112" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="12" fill={colors.rajasDim}>Action</SvgText>
<Rect x="356" y="60" width="100" height="80" rx="8" fill={colors.avyakta2} stroke={colors.sattva} strokeWidth="0.5"/>
<SvgText x="406" y="92" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Samanya</SvgText>
<SvgText x="406" y="112" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="12" fill={colors.sattvaDim}>Generality</SvgText>
<Rect x="468" y="60" width="100" height="80" rx="8" fill={colors.avyakta2} stroke={colors.amber} strokeWidth="0.5"/>
<SvgText x="518" y="92" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Visesa</SvgText>
<SvgText x="518" y="112" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="12" fill={colors.amberDim}>Particularity</SvgText>
<Rect x="580" y="60" width="80" height="80" rx="8" fill={colors.avyakta2} stroke={colors.tamas} strokeWidth="0.5"/>
<SvgText x="620" y="92" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="13" fontWeight="500" fill={colors.ink}>Samavaya</SvgText>
<SvgText x="620" y="112" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="12" fill={colors.tamas}>Inherence</SvgText>
</Svg>
  );
}
