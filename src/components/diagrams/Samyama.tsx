import React from 'react';
import Svg, { Circle, Path, Text as SvgText } from 'react-native-svg';
import { colors } from '../../theme/tokens';

export default function Samyama() {
  return (
    <Svg viewBox="0 0 320 170" width="100%" height={160}>
      <Circle cx={70} cy={85} r={26} fill="none" stroke={colors.tamas} strokeWidth={1.5} />
      <SvgText x={70} y={82} fontSize={9} fill={colors.ink} textAnchor="middle">
        dhāraṇā
      </SvgText>
      <SvgText x={70} y={93} fontSize={7.5} fill={colors.inkDim} textAnchor="middle">
        fixed on one point
      </SvgText>
      <Path d="M100,85 L140,85 L132,79 M140,85 L132,91" stroke={colors.hair} strokeWidth={1.2} fill="none" />
      <Circle cx={175} cy={85} r={26} fill="none" stroke={colors.rajas} strokeWidth={1.5} />
      <SvgText x={175} y={82} fontSize={9} fill={colors.ink} textAnchor="middle">
        dhyāna
      </SvgText>
      <SvgText x={175} y={93} fontSize={7.5} fill={colors.inkDim} textAnchor="middle">
        unbroken flow
      </SvgText>
      <Path d="M205,85 L245,85 L237,79 M245,85 L237,91" stroke={colors.hair} strokeWidth={1.2} fill="none" />
      <Circle cx={272} cy={85} r={28} fill={colors.sattva} opacity={0.9} />
      <SvgText x={272} y={82} fontSize={9} fill={colors.avyakta} textAnchor="middle">
        samādhi
      </SvgText>
      <SvgText x={272} y={94} fontSize={7.5} fill={colors.avyakta} textAnchor="middle">
        absorption
      </SvgText>
      <SvgText x={160} y={145} fontSize={10} fontStyle="italic" fill={colors.inkDim} textAnchor="middle">
        together, on one object: saṃyama
      </SvgText>
    </Svg>
  );
}
