import React from 'react';
import Svg, { Circle, Line, Path, Defs, Marker, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function CittaVritti() {
  const { colors } = useTheme();

  return (
    <Svg width="100%" viewBox="0 0 680 240">
      <Defs>
        <Marker id="arrowCV" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <Path d="M2 1L8 5L2 9" fill="none" stroke={colors.tamas} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Marker>
      </Defs>

      <Circle cx="170" cy="120" r="88" fill={colors.avyakta2} stroke={colors.rajas} strokeWidth="0.5"/>
      <SvgText x="170" y="90" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Citta</SvgText>
      <SvgText x="170" y="112" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="11" fill={colors.rajasDim}>vṛttis fluctuating</SvgText>
      <Path d="M115,145 Q135,133 155,145 T195,145 T235,145" fill="none" stroke={colors.rajas} strokeWidth="1.2" opacity="0.7"/>
      <Path d="M115,163 Q135,151 155,163 T195,163 T235,163" fill="none" stroke={colors.rajas} strokeWidth="1.2" opacity="0.45"/>

      <Line x1="262" y1="120" x2="400" y2="120" stroke={colors.tamas} strokeWidth="1" markerEnd="url(#arrowCV)"/>
      <SvgText x="331" y="104" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill={colors.tamas}>nirodha</SvgText>
      <SvgText x="331" y="138" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fill={colors.tamas}>(the stilling)</SvgText>

      <Circle cx="500" cy="120" r="88" fill={colors.avyakta2} stroke={colors.purusha} strokeWidth="0.5"/>
      <SvgText x="500" y="110" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Puruṣa</SvgText>
      <SvgText x="500" y="132" textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="11" fill={colors.purushaDim}>rests in own nature</SvgText>
      <Line x1="455" y1="152" x2="545" y2="152" stroke={colors.purusha} strokeWidth="0.75" opacity="0.5"/>
    </Svg>
  );
}

