import React from 'react';
import Svg, { Rect, Circle, Line, Path, Defs, Marker, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function VaisesikaAtman() {
  const { colors } = useTheme();

  return (
    <Svg width="100%" viewBox="0 0 680 240">
    <Circle cx="200" cy="130" r="90" fill={colors.avyakta2} stroke={colors.purusha} strokeWidth="0.5"/>
    <SvgText x="200" y="120" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Atma</SvgText>
    <SvgText x="200" y="142" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="12" fill={colors.purusha}>Eternal, inert alone</SvgText>
    <Circle cx="330" cy="130" r="18" fill={colors.sattvaGlow} stroke={colors.sattva} strokeWidth="0.5"/>
    <SvgText x="330" y="130" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="11" fill={colors.ink}>Manas</SvgText>
    <SvgText x="470" y="70" fontFamily="sans-serif" fontSize="12" fill={colors.sattvaDim}>At contact, temporary</SvgText>
    <SvgText x="470" y="90" fontFamily="sans-serif" fontSize="12" fill={colors.sattvaDim}>gunas arise:</SvgText>
    <SvgText x="470" y="120" fontFamily="sans-serif" fontSize="12" fill={colors.sattvaDim}>Cognition</SvgText>
    <SvgText x="470" y="145" fontFamily="sans-serif" fontSize="12" fill={colors.sattvaDim}>Pleasure, pain</SvgText>
    <SvgText x="470" y="170" fontFamily="sans-serif" fontSize="12" fill={colors.sattvaDim}>Desire, aversion</SvgText>
    <Line x1="410" y1="105" x2="345" y2="120" stroke={colors.sattvaDim} strokeWidth="0.5" strokeDasharray="3 3"/>
    </Svg>
  );
}