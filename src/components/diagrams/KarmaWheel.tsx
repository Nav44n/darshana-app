import React from 'react';
import Svg, { Rect, Text as SvgText, Path, Circle } from 'react-native-svg';
import { colors } from '../../theme/tokens';

export default function KarmaWheel() {
  return (
    <Svg viewBox="0 0 320 280" width="100%" height={260}>
      <Circle cx="160" cy="140" r="80" fill="none" stroke={colors.hair} strokeWidth={2} strokeDasharray="4,4" />
      
      {/* Klesas Top */}
      <Rect x="120" y="40" width="80" height="30" rx="4" fill={colors.tamas} />
      <SvgText x="160" y="59" fontSize="10" fontWeight="600" fill="#fff" textAnchor="middle">KLEŚAS</SvgText>

      {/* Karma Right */}
      <Rect x="230" y="125" width="80" height="30" rx="4" fill={colors.rajas} />
      <SvgText x="270" y="144" fontSize="10" fontWeight="600" fill="#fff" textAnchor="middle">KARMA</SvgText>

      {/* Samskara Bottom */}
      <Rect x="110" y="210" width="100" height="30" rx="4" fill={colors.avyakta3} />
      <SvgText x="160" y="229" fontSize="10" fontWeight="600" fill={colors.ink} textAnchor="middle">SAṂSKĀRAS</SvgText>

      {/* Birth/Experience Left */}
      <Rect x="10" y="125" width="80" height="30" rx="4" fill={colors.sattva} />
      <SvgText x="50" y="144" fontSize="10" fontWeight="600" fill={colors.avyakta} textAnchor="middle">BIRTH</SvgText>

      {/* Arrows / Indicators (using text for simplicity) */}
      <SvgText x="220" y="90" fontSize="16" fill={colors.inkDim} textAnchor="middle">↻</SvgText>
      <SvgText x="220" y="200" fontSize="16" fill={colors.inkDim} textAnchor="middle">↻</SvgText>
      <SvgText x="100" y="200" fontSize="16" fill={colors.inkDim} textAnchor="middle">↻</SvgText>
      <SvgText x="100" y="90" fontSize="16" fill={colors.inkDim} textAnchor="middle">↻</SvgText>
    </Svg>
  );
}
