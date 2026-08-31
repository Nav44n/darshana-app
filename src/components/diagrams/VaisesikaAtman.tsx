import React from 'react';
import Svg, { Rect, Circle, Line, Path, Defs, Marker, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function VaisesikaAtman() {
  const { colors } = useTheme();

  return (
    <Svg width="100%" viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg" role="img">
    <Circle cx="200" cy="130" r="90" fill={colors.avyakta2} stroke={colors.purusha} strokeWidth="0.5"/>
    <SvgText x="200" y="120" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Atma</SvgText>
    <SvgText x="200" y="142" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="12" fill={colors.purusha}>Eternal, inert alone</SvgText>
    <Circle cx="330" cy="130" r="18" fill={colors.amberLight} stroke={colors.amber} strokeWidth="0.5"/>
    <SvgText x="330" y="130" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="11" fill={colors.ink}>Manas</SvgText>
    <SvgText x="470" y="70" fontFamily="sans-serif" fontSize="12" fill={colors.amber}>At contact, temporary</SvgText>
    <SvgText x="470" y="90" fontFamily="sans-serif" fontSize="12" fill={colors.amber}>gunas arise:</SvgText>
    <SvgText x="470" y="120" fontFamily="sans-serif" fontSize="12" fill={colors.amber}>Cognition</SvgText>
    <SvgText x="470" y="145" fontFamily="sans-serif" fontSize="12" fill={colors.amber}>Pleasure, pain</SvgText>
    <SvgText x="470" y="170" fontFamily="sans-serif" fontSize="12" fill={colors.amber}>Desire, aversion</SvgText>
    <Line x1="410" y1="105" x2="345" y2="120" stroke={colors.amber} strokeWidth="0.5" strokeDasharray="3 3"/>
    </Svg>
  );
}