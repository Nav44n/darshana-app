import React from 'react';
import Svg, { Rect, Text as SvgText, Line } from 'react-native-svg';
import { colors } from '../../theme/tokens';

const limbs = ['yama', 'niyama', 'āsana', 'prāṇāyāma', 'pratyāhāra', 'dhāraṇā', 'dhyāna', 'samādhi'];

export default function Ashtanga() {
  const rowH = 21;
  const top = 8;
  return (
    <Svg viewBox="0 0 320 190" width="100%" height={185}>
      <Line x1={30} y1={top} x2={30} y2={top + rowH * 8} stroke={colors.hair} strokeWidth={1} />
      {limbs.map((l, i) => {
        const y = top + i * rowH;
        const external = i < 5;
        const w = 60 + i * 22;
        return (
          <React.Fragment key={l}>
            <Rect
              x={34}
              y={y}
              width={w}
              height={rowH - 5}
              rx={4}
              fill={external ? colors.tamas : colors.rajas}
              opacity={0.8}
            />
            <SvgText x={40} y={y + 12} fontSize={9.5} fill={colors.ink}>
              {l}
            </SvgText>
          </React.Fragment>
        );
      })}
      <SvgText x={34} y={182} fontSize={8.5} fill={colors.inkDim} fontStyle="italic">
        external (1–5) → internal (6–8, saṃyama)
      </SvgText>
    </Svg>
  );
}
