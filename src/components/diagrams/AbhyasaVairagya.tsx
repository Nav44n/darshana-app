import React from 'react';
import Svg, { Rect, Line, Path, Defs, Marker, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function AbhyasaVairagya() {
  const { colors } = useTheme();

  return (
    <Svg width="100%" viewBox="0 0 680 260">
      <Defs>
        <Marker id="arrowAV" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <Path d="M2 1L8 5L2 9" fill="none" stroke={colors.purusha} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Marker>
      </Defs>

      <Rect x="260" y="20" width="160" height="56" rx="8" fill={colors.avyakta2} stroke={colors.purusha} strokeWidth="0.5"/>
      <SvgText x="340" y="42" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Citta-vṛtti-nirodha</SvgText>
      <SvgText x="340" y="62" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="11" fill={colors.purushaDim}>the mind steadied</SvgText>

      <Line x1="200" y1="120" x2="300" y2="78" stroke={colors.purusha} strokeWidth="1" markerEnd="url(#arrowAV)"/>
      <Line x1="480" y1="120" x2="380" y2="78" stroke={colors.purusha} strokeWidth="1" markerEnd="url(#arrowAV)"/>

      <Rect x="80" y="120" width="160" height="100" rx="8" fill={colors.avyakta2} stroke={colors.amber} strokeWidth="0.5"/>
      <SvgText x="160" y="150" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Abhyāsa</SvgText>
      <SvgText x="160" y="172" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="12" fill={colors.amberDim}>sustained, devoted</SvgText>
      <SvgText x="160" y="190" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="12" fill={colors.amberDim}>practice</SvgText>

      <Rect x="440" y="120" width="160" height="100" rx="8" fill={colors.avyakta2} stroke={colors.teal} strokeWidth="0.5"/>
      <SvgText x="520" y="150" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Vairāgya</SvgText>
      <SvgText x="520" y="172" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="12" fill={colors.tealDim}>freedom from</SvgText>
      <SvgText x="520" y="190" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="12" fill={colors.tealDim}>craving</SvgText>

      <SvgText x="340" y="245" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill={colors.tamas}>Practice without dispassion breeds new attachment; either alone is not enough</SvgText>
    </Svg>
  );
}

