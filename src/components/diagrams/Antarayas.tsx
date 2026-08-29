import React from 'react';
import Svg, { Rect, Text as SvgText, Line, Circle } from 'react-native-svg';
import { colors } from '../../theme/tokens';

export default function Antarayas() {
  return (
    <Svg viewBox="0 0 320 280" width="100%" height={260}>
      <Circle cx="160" cy="140" r="30" fill={colors.sattva} />
      <SvgText x="160" y="143" fontSize="10" fontWeight="bold" fill={colors.avyakta} textAnchor="middle">CITTA</SvgText>

      {/* Scattering Lines */}
      {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 160 + Math.cos(rad) * 35;
        const y1 = 140 + Math.sin(rad) * 35;
        const x2 = 160 + Math.cos(rad) * 80;
        const y2 = 140 + Math.sin(rad) * 80;
        return <Line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={colors.tamas} strokeWidth={1.5} strokeDasharray="4,4" />;
      })}

      {/* The 9 Obstacles around it */}
      <SvgText x="160" y="45" fontSize="9" fontWeight="600" fill={colors.ink} textAnchor="middle">Disease (Vyādhi)</SvgText>
      <SvgText x="250" y="70" fontSize="9" fontWeight="600" fill={colors.ink} textAnchor="middle">Dullness (Styāna)</SvgText>
      <SvgText x="270" y="143" fontSize="9" fontWeight="600" fill={colors.ink} textAnchor="middle">Doubt</SvgText>
      <SvgText x="250" y="220" fontSize="9" fontWeight="600" fill={colors.ink} textAnchor="middle">Carelessness</SvgText>
      <SvgText x="160" y="245" fontSize="9" fontWeight="600" fill={colors.ink} textAnchor="middle">Laziness (Ālasya)</SvgText>
      <SvgText x="70" y="220" fontSize="9" fontWeight="600" fill={colors.ink} textAnchor="middle">Worldly-minded</SvgText>
      <SvgText x="50" y="143" fontSize="9" fontWeight="600" fill={colors.ink} textAnchor="middle">Illusion</SvgText>
      <SvgText x="70" y="70" fontSize="9" fontWeight="600" fill={colors.ink} textAnchor="middle">Missing the point</SvgText>

      <Rect x="100" y="260" width="120" height="20" rx="4" fill={colors.rajas} />
      <SvgText x="160" y="273" fontSize="8" fontWeight="600" fill="#fff" textAnchor="middle">Accompanied by Pain & Despair</SvgText>
    </Svg>
  );
}
