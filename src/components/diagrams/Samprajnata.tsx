import React from 'react';
import Svg, { Rect, Line, Path, Defs, Marker, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function Samprajnata() {
  const { colors } = useTheme();

  const stages = [
    { title: 'Vitarka', sub: 'gross inquiry', stroke: colors.rajas, dim: colors.rajasDim },
    { title: 'Vicāra', sub: 'subtle inquiry', stroke: colors.amber, dim: colors.amberDim },
    { title: 'Ānanda', sub: 'bliss', stroke: colors.teal, dim: colors.tealDim },
    { title: 'Asmitā', sub: 'pure I-am-ness', stroke: colors.purusha, dim: colors.purushaDim },
  ];

  return (
    <Svg width="100%" viewBox="0 0 420 400">
      <Defs>
        <Marker id="arrowSP" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <Path d="M2 1L8 5L2 9" fill="none" stroke={colors.tamas} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Marker>
      </Defs>

      {stages.map((s, i) => {
        const y = 20 + i * 90;
        return (
          <React.Fragment key={s.title}>
            <Rect x="110" y={y} width="200" height="60" rx="8" fill={colors.avyakta2} stroke={s.stroke} strokeWidth="0.6"/>
            <SvgText x="210" y={y + 24} textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>{s.title}</SvgText>
            <SvgText x="210" y={y + 42} textAnchor="middle" alignmentBaseline="middle" fontFamily="sans-serif" fontSize="11" fill={s.dim}>{s.sub}</SvgText>
            {i < stages.length - 1 && (
              <Line x1="210" y1={y + 60} x2="210" y2={y + 88} stroke={colors.tamas} strokeWidth="1" markerEnd="url(#arrowSP)"/>
            )}
          </React.Fragment>
        );
      })}
      <SvgText x="210" y="380" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill={colors.tamas}>Each stage drops a layer, moving toward the bare sense of "I am"</SvgText>
    </Svg>
  );
}

