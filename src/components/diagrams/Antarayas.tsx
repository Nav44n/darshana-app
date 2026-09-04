import React from 'react';
import Svg, { Rect, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function Antarayas() {
  const { colors } = useTheme();

  const items = [
    'Vyādhi — disease', 'Styāna — dullness', 'Saṃśaya — doubt',
    'Pramāda — carelessness', 'Ālasya — laziness', 'Avirati — worldly craving',
    'Bhrāntidarśana — illusion', 'Alabdhabhūmikatva — missing the point', 'Anavasthitatva — instability',
  ];

  return (
    <Svg width="100%" viewBox="0 0 680 300">
      {items.map((label, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 20 + col * 220;
        const y = 20 + row * 92;
        const [title, sub] = label.split(' — ');
        return (
          <React.Fragment key={label}>
            <Rect x={x} y={y} width="200" height="72" rx="8" fill={colors.avyakta2} stroke={colors.tamas} strokeWidth="0.5"/>
            <SvgText x={x + 100} y={y + 30} textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>{title}</SvgText>
            <SvgText x={x + 100} y={y + 50} textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="11" fill={colors.tamas}>{sub}</SvgText>
          </React.Fragment>
        );
      })}
    </Svg>
  );
}

