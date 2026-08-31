import React from 'react';
import Svg, { Circle, Line, Path, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

const chain = [
  { x: 40, label: 'seed' },
  { x: 130, label: 'cause' },
  { x: 220, label: 'effect' },
  { x: 280, label: 'oil' },
];

export default function SatkaryavadaChain() {
  const { colors } = useTheme();
  return (
    <Svg viewBox="0 0 320 160" width="100%" height={150}>
      <Line x1={30} y1={70} x2={290} y2={70} stroke={colors.hair} strokeWidth={1} />
      <Circle cx={60} cy={70} r={22} fill={colors.tamas} opacity={0.85} />
      <SvgText x={60} y={75} fontSize={9} fill={colors.ink} textAnchor="middle">
        seed
      </SvgText>
      <Path d="M90,70 L120,70 L112,64 M120,70 L112,76" stroke={colors.rajas} strokeWidth={1.5} fill="none" />
      <Circle cx={160} cy={70} r={26} fill={colors.rajas} opacity={0.9} />
      <SvgText x={160} y={68} fontSize={9} fill={colors.ink} textAnchor="middle">
        latent
      </SvgText>
      <SvgText x={160} y={80} fontSize={9} fill={colors.ink} textAnchor="middle">
        within cause
      </SvgText>
      <Path d="M195,70 L225,70 L217,64 M225,70 L217,76" stroke={colors.rajas} strokeWidth={1.5} fill="none" />
      <Circle cx={255} cy={70} r={22} fill={colors.sattva} opacity={0.9} />
      <SvgText x={255} y={75} fontSize={9} fill={colors.avyakta} textAnchor="middle">
        oil
      </SvgText>
      <SvgText x={160} y={120} fontSize={10} fontStyle="italic" fill={colors.inkDim} textAnchor="middle">
        the effect pre-exists in its cause
      </SvgText>
    </Svg>
  );
}
