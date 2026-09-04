import React from 'react';
import Svg, { Rect, Line, Path, Defs, Marker, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function BrahmanJivaIshvara() {
  const { colors } = useTheme();

  return (
    <Svg width="100%" viewBox="0 0 680 280">
      <Defs>
        <Marker id="arrowBJI" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <Path d="M2 1L8 5L2 9" fill="none" stroke={colors.purusha} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Marker>
      </Defs>

      <Rect x="260" y="20" width="160" height="60" rx="8" fill={colors.avyakta2} stroke={colors.purusha} strokeWidth="0.6"/>
      <SvgText x="340" y="42" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="15" fontWeight="500" fill={colors.ink}>Brahman</SvgText>
      <SvgText x="340" y="62" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="11" fill={colors.purushaDim}>the one, undivided reality</SvgText>

      <Line x1="290" y1="80" x2="190" y2="150" stroke={colors.purusha} strokeWidth="1" markerEnd="url(#arrowBJI)"/>
      <Line x1="390" y1="80" x2="490" y2="150" stroke={colors.purusha} strokeWidth="1" markerEnd="url(#arrowBJI)"/>

      <SvgText x="220" y="110" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fill={colors.tealDim}>through cosmic Māyā</SvgText>
      <SvgText x="460" y="110" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fill={colors.amberDim}>through individual Upādhi</SvgText>

      <Rect x="90" y="160" width="200" height="90" rx="8" fill={colors.avyakta2} stroke={colors.teal} strokeWidth="0.6"/>
      <SvgText x="190" y="188" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Īśvara</SvgText>
      <SvgText x="190" y="208" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="11" fill={colors.tealDim}>Saguṇa Brahman —</SvgText>
      <SvgText x="190" y="224" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="11" fill={colors.tealDim}>creator of the universe</SvgText>

      <Rect x="390" y="160" width="200" height="90" rx="8" fill={colors.avyakta2} stroke={colors.amber} strokeWidth="0.6"/>
      <SvgText x="490" y="188" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Jīva</SvgText>
      <SvgText x="490" y="208" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="11" fill={colors.amberDim}>the empirical self —</SvgText>
      <SvgText x="490" y="224" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="11" fill={colors.amberDim}>bound by mind and ignorance</SvgText>

      <SvgText x="340" y="270" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill={colors.tamas}>One sun, reflected whole in the ocean and fragmented in a puddle</SvgText>
    </Svg>
  );
}
