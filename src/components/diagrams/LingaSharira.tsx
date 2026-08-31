import React from 'react';
import Svg, { Rect, Text as SvgText, Circle } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function LingaSharira() {
  const { colors } = useTheme();
  return (
    <Svg viewBox="0 0 320 220" width="100%" height={220}>
      <Rect x="40" y="20" width="240" height="180" rx="20" fill="none" stroke={colors.sattva} strokeWidth="2" strokeDasharray="6,6" />
      <SvgText x="160" y="45" fontSize="12" fontWeight="600" fill={colors.ink} textAnchor="middle">
        LIṄGA-ŚARĪRA (Subtle Body)
      </SvgText>

      <Rect x="60" y="60" width="60" height="30" rx="4" fill={colors.sattva} />
      <SvgText x="90" y="79" fontSize="9" fontWeight="600" fill={colors.avyakta} textAnchor="middle">
        BUDDHI
      </SvgText>

      <Rect x="130" y="60" width="60" height="30" rx="4" fill={colors.rajas} />
      <SvgText x="160" y="79" fontSize="9" fontWeight="600" fill="#fff" textAnchor="middle">
        AHAṂKĀRA
      </SvgText>

      <Rect x="200" y="60" width="60" height="30" rx="4" fill={colors.tamas} />
      <SvgText x="230" y="79" fontSize="9" fontWeight="600" fill="#fff" textAnchor="middle">
        MANAS
      </SvgText>

      <Rect x="60" y="110" width="95" height="70" rx="6" fill={colors.avyakta3} />
      <SvgText x="107" y="130" fontSize="10" fontWeight="600" fill={colors.ink} textAnchor="middle">
        10 ORGANS
      </SvgText>
      <SvgText x="107" y="150" fontSize="8" fill={colors.inkDim} textAnchor="middle">
        (Cognition & Action)
      </SvgText>

      <Rect x="165" y="110" width="95" height="70" rx="6" fill={colors.avyakta3} />
      <SvgText x="212" y="130" fontSize="10" fontWeight="600" fill={colors.ink} textAnchor="middle">
        5 TANMĀTRAS
      </SvgText>
      <SvgText x="212" y="150" fontSize="8" fill={colors.inkDim} textAnchor="middle">
        (Subtle Elements)
      </SvgText>
    </Svg>
  );
}
