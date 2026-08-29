import React from 'react';
import Svg, { Rect, Text as SvgText, Polygon } from 'react-native-svg';
import { colors } from '../../theme/tokens';

export default function Samprajnata() {
  return (
    <Svg viewBox="0 0 320 280" width="100%" height={260}>
      <SvgText x="160" y="30" fontSize="11" fontWeight="600" fill={colors.ink} textAnchor="middle">
        SAMPRAJÑĀTA SAMĀDHI
      </SvgText>

      {/* Downward Funnel/Arrow background */}
      <Polygon points="80,50 240,50 200,230 120,230" fill={colors.avyakta3} opacity={0.5} />

      <Rect x="100" y="60" width="120" height="30" rx="4" fill={colors.tamas} />
      <SvgText x="160" y="79" fontSize="10" fontWeight="600" fill="#fff" textAnchor="middle">VITARKA (Gross)</SvgText>

      <Rect x="110" y="110" width="100" height="30" rx="4" fill={colors.rajas} />
      <SvgText x="160" y="129" fontSize="10" fontWeight="600" fill="#fff" textAnchor="middle">VICĀRA (Subtle)</SvgText>

      <Rect x="120" y="160" width="80" height="30" rx="4" fill={colors.sattvaDim} />
      <SvgText x="160" y="179" fontSize="10" fontWeight="600" fill={colors.ink} textAnchor="middle">ĀNANDA (Bliss)</SvgText>

      <Rect x="130" y="210" width="60" height="30" rx="4" fill={colors.sattva} />
      <SvgText x="160" y="229" fontSize="10" fontWeight="600" fill={colors.avyakta} textAnchor="middle">ASMITĀ</SvgText>

      <SvgText x="160" y="255" fontSize="9" fontStyle="italic" fill={colors.inkDim} textAnchor="middle">
        (Pure 'I-am-ness')
      </SvgText>
    </Svg>
  );
}
