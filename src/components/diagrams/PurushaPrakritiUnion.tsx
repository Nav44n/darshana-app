import React from 'react';
import Svg, { Circle, Line, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function PurushaPrakritiUnion() {
  const { colors } = useTheme();
  return (
    <Svg viewBox="0 0 320 170" width="100%" height={160}>
      <Circle cx={110} cy={60} r={20} fill={colors.sattva} />
      <SvgText x={110} y={40} fontSize={10} fontWeight="600" fill={colors.ink} textAnchor="middle">
        Puruṣa
      </SvgText>
      <SvgText x={110} y={65} fontSize={8.5} fill={colors.avyakta} textAnchor="middle">
        sees
      </SvgText>
      <SvgText x={110} y={98} fontSize={8.5} fill={colors.inkDim} textAnchor="middle">
        (the blind one — sight, no legs)
      </SvgText>
      <Circle cx={210} cy={60} r={20} fill={colors.rajas} />
      <SvgText x={210} y={40} fontSize={10} fontWeight="600" fill={colors.ink} textAnchor="middle">
        Prakṛti
      </SvgText>
      <SvgText x={210} y={65} fontSize={8.5} fill={colors.ink} textAnchor="middle">
        carries
      </SvgText>
      <SvgText x={210} y={98} fontSize={8.5} fill={colors.inkDim} textAnchor="middle">
        (the lame one — legs, no sight)
      </SvgText>
      <Line x1={130} y1={60} x2={190} y2={60} stroke={colors.hair} strokeWidth={1.5} strokeDasharray="4 3" />
      <SvgText x={160} y={130} fontSize={10} fontStyle="italic" fill={colors.inkDim} textAnchor="middle">
        travel together, part at the destination
      </SvgText>
    </Svg>
  );
}
