import React from 'react';
import Svg, { Rect, Text as SvgText } from 'react-native-svg';
import { colors } from '../../theme/tokens';

export default function ThreeWorlds() {
  return (
    <Svg viewBox="0 0 320 200" width="100%" height={200}>
      <Rect x="80" y="10" width="160" height="50" rx="8" fill={colors.sattva} />
      <SvgText x="160" y="30" fontSize="11" fontWeight="600" fill={colors.avyakta} textAnchor="middle">
        DIVINE (8 realms)
      </SvgText>
      <SvgText x="160" y="48" fontSize="9" fill={colors.avyakta} opacity="0.8" textAnchor="middle">
        Sattva-dominant (Light)
      </SvgText>

      <Rect x="80" y="75" width="160" height="50" rx="8" fill={colors.rajas} />
      <SvgText x="160" y="95" fontSize="11" fontWeight="600" fill="#fff" textAnchor="middle">
        HUMAN (1 realm)
      </SvgText>
      <SvgText x="160" y="113" fontSize="9" fill="#fff" opacity="0.8" textAnchor="middle">
        Rajas-dominant (Pain)
      </SvgText>

      <Rect x="80" y="140" width="160" height="50" rx="8" fill={colors.tamas} />
      <SvgText x="160" y="160" fontSize="11" fontWeight="600" fill="#fff" textAnchor="middle">
        SUB-HUMAN (5 realms)
      </SvgText>
      <SvgText x="160" y="178" fontSize="9" fill="#fff" opacity="0.8" textAnchor="middle">
        Tamas-dominant (Darkness)
      </SvgText>
    </Svg>
  );
}
