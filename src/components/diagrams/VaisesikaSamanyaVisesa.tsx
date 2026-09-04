import React from 'react';
import Svg, { Rect, Circle, Line, Path, Defs, Marker, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function VaisesikaSamanyaVisesa() {
  const { colors } = useTheme();

  return (
    <Svg  width="100%" viewBox="0 0 680 280">
<Circle cx="260" cy="140" r="120" fill={colors.avyakta2} stroke={colors.sattva} strokeWidth="0.5"/>
<SvgText x="260" y="45" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Samanya — cowhood</SvgText>
<Circle cx="190" cy="120" r="14" fill={colors.sattva}/>
<Circle cx="290" cy="100" r="14" fill={colors.sattva}/>
<Circle cx="230" cy="180" r="14" fill={colors.sattva}/>
<Circle cx="320" cy="180" r="14" fill={colors.sattva}/>
<SvgText x="500" y="90" fontFamily="sans-serif" fontSize="13" fill={colors.sattvaDim}>Each dot: one</SvgText>
<SvgText x="500" y="110" fontFamily="sans-serif" fontSize="13" fill={colors.sattvaDim}>particular cow,</SvgText>
<SvgText x="500" y="130" fontFamily="sans-serif" fontSize="13" fill={colors.sattvaDim}>unique by Visesa</SvgText>
<Line x1="330" y1="180" x2="480" y2="112" stroke={colors.sattva} strokeWidth="0.5" strokeDasharray="3 3"/>
<SvgText x="260" y="250" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill={colors.sattvaDim}>One universal, many unrepeatable particulars</SvgText>
</Svg>
  );
}
