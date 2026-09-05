import React from 'react';
import Svg, { Circle, Polygon, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function GunaLamp() {
  const { colors } = useTheme();
  return (
    <Svg viewBox="0 0 320 200" width="100%" height={190}>
      <Polygon points="160,30 260,175 60,175" fill="none" stroke={colors.hair} strokeWidth={1.5} />
      <Circle cx={160} cy={40} r={16} fill={colors.sattva} />
      <SvgText x={160} y={20} fontSize={10} fontWeight="600" fill={colors.ink} textAnchor="middle">
        SATTVA
      </SvgText>
      <SvgText x={160} y={65} fontSize={8.5} fill={colors.inkDim} textAnchor="middle">
        illumines
      </SvgText>
      <Circle cx={255} cy={175} r={16} fill={colors.rajas} />
      <SvgText x={278} y={172} fontSize={10} fontWeight="600" fill={colors.ink}>
        RAJAS
      </SvgText>
      <SvgText x={278} y={184} fontSize={8.5} fill={colors.inkDim}>
        moves
      </SvgText>
      <Circle cx={65} cy={175} r={16} fill={colors.tamas} />
      <SvgText x={42} y={172} fontSize={10} fontWeight="600" fill={colors.ink} textAnchor="end">
        TAMAS
      </SvgText>
      <SvgText x={42} y={184} fontSize={8.5} fill={colors.inkDim} textAnchor="end">
        restrains
      </SvgText>
      <SvgText x={160} y={130} fontSize={9.5} fontStyle="italic" fill={colors.inkDim} textAnchor="middle">
        one flame, three strands
      </SvgText>
    </Svg>
  );
}
