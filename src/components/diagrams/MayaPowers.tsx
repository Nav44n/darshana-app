import React from 'react';
import Svg, { Rect, Line, Path, Defs, Marker, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function MayaPowers() {
  const { colors } = useTheme();

  return (
    <Svg width="100%" viewBox="0 0 640 260">
      <Defs>
        <Marker id="arrowMP" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <Path d="M2 1L8 5L2 9" fill="none" stroke={colors.tamas} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Marker>
      </Defs>

      <Rect x="230" y="16" width="180" height="56" rx="8" fill={colors.avyakta2} stroke={colors.purusha} strokeWidth="0.6"/>
      <SvgText x="320" y="38" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="15" fontWeight="500" fill={colors.ink}>Māyā</SvgText>
      <SvgText x="320" y="56" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="11" fill={colors.purushaDim}>Brahman's inexplicable power</SvgText>

      <Line x1="270" y1="72" x2="180" y2="120" stroke={colors.tamas} strokeWidth="1" markerEnd="url(#arrowMP)"/>
      <Line x1="370" y1="72" x2="460" y2="120" stroke={colors.tamas} strokeWidth="1" markerEnd="url(#arrowMP)"/>

      <Rect x="40" y="130" width="220" height="100" rx="8" fill={colors.avyakta2} stroke={colors.rajas} strokeWidth="0.6"/>
      <SvgText x="150" y="158" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Āvaraṇa</SvgText>
      <SvgText x="150" y="178" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="11" fill={colors.rajasDim}>the veiling power —</SvgText>
      <SvgText x="150" y="196" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="11" fill={colors.rajasDim}>conceals non-dual Brahman</SvgText>

      <Rect x="380" y="130" width="220" height="100" rx="8" fill={colors.avyakta2} stroke={colors.amber} strokeWidth="0.6"/>
      <SvgText x="490" y="158" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Vikṣepa</SvgText>
      <SvgText x="490" y="178" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="11" fill={colors.amberDim}>the projecting power —</SvgText>
      <SvgText x="490" y="196" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="11" fill={colors.amberDim}>throws up the manifold universe</SvgText>

      <SvgText x="320" y="248" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill={colors.tamas}>Neither absolutely real nor entirely unreal</SvgText>
    </Svg>
  );
}
