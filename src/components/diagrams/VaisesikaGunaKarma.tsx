import React from 'react';
import Svg, { Rect, Circle, Line, Path, Defs, Marker, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function VaisesikaGunaKarma() {
  const { colors } = useTheme();

  return (
    <Svg  width="100%" viewBox="0 0 680 300">
<Rect x="40" y="30" width="280" height="240" rx="16" fill={colors.avyakta2} stroke={colors.teal} strokeWidth="0.5"/>
<SvgText x="180" y="62" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="16" fontWeight="500" fill={colors.ink}>Guna — attributes</SvgText>
<SvgText x="70" y="100" fontFamily="sans-serif" fontSize="13" fill="#085041">Colour, taste, smell, touch</SvgText>
<SvgText x="70" y="130" fontFamily="sans-serif" fontSize="13" fill="#085041">Number, magnitude</SvgText>
<SvgText x="70" y="160" fontFamily="sans-serif" fontSize="13" fill="#085041">Conjunction, disjunction</SvgText>
<SvgText x="70" y="190" fontFamily="sans-serif" fontSize="13" fill="#085041">Pleasure, pain, desire</SvgText>
<SvgText x="70" y="220" fontFamily="sans-serif" fontSize="13" fill="#085041">Cognition, effort</SvgText>
<SvgText x="70" y="248" fontFamily="sans-serif" fontSize="12" fill={colors.tealDim}>Static — reside in substance</SvgText>
<Rect x="360" y="30" width="280" height="240" rx="16" fill={colors.avyakta2} stroke={colors.rajas} strokeWidth="0.5"/>
<SvgText x="500" y="62" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="16" fontWeight="500" fill={colors.ink}>Karma — actions</SvgText>
<SvgText x="390" y="100" fontFamily="sans-serif" fontSize="13" fill={colors.rajasDim}>Throwing upward</SvgText>
<SvgText x="390" y="130" fontFamily="sans-serif" fontSize="13" fill={colors.rajasDim}>Throwing downward</SvgText>
<SvgText x="390" y="160" fontFamily="sans-serif" fontSize="13" fill={colors.rajasDim}>Contracting</SvgText>
<SvgText x="390" y="190" fontFamily="sans-serif" fontSize="13" fill={colors.rajasDim}>Expanding</SvgText>
<SvgText x="390" y="220" fontFamily="sans-serif" fontSize="13" fill={colors.rajasDim}>Going</SvgText>
<SvgText x="390" y="248" fontFamily="sans-serif" fontSize="12" fill={colors.rajasDim}>Dynamic — motion in substance</SvgText>
</Svg>
  );
}
