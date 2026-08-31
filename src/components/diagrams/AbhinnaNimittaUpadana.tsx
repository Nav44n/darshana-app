import React from 'react';
import Svg, { Rect, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function AbhinnaNimittaUpadana() {
  const { colors } = useTheme();

  const cols = [
    {
      title: 'Sāṃkhya', stroke: colors.rajas, dim: colors.rajasDim,
      nimitta: 'Puruṣa (soul)', upadana: 'Pradhāna (matter)', note: 'two separate principles',
    },
    {
      title: 'Nyāya-Vaiśeṣika', stroke: colors.amber, dim: colors.amberDim,
      nimitta: 'Īśvara (designer)', upadana: 'Atoms (material)', note: 'God shapes, does not become',
    },
    {
      title: 'Vedānta', stroke: colors.teal, dim: colors.tealDim,
      nimitta: 'Brahman', upadana: 'Brahman', note: 'one reality, both roles at once',
    },
  ];

  return (
    <Svg width="100%" viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" role="img">
      {cols.map((c, i) => {
        const x = 20 + i * 220;
        return (
          <React.Fragment key={c.title}>
            <Rect x={x} y="20" width="200" height="220" rx="10" fill={colors.avyakta2} stroke={c.stroke} strokeWidth="0.7"/>
            <SvgText x={x + 100} y="48" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="15" fontWeight="500" fill={colors.ink}>{c.title}</SvgText>
            <SvgText x={x + 100} y="86" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="11" fill={colors.tamas}>Nimitta (intelligent cause)</SvgText>
            <SvgText x={x + 100} y="104" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="12.5" fontWeight="500" fill={c.dim}>{c.nimitta}</SvgText>
            <SvgText x={x + 100} y="140" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="11" fill={colors.tamas}>Upādāna (material cause)</SvgText>
            <SvgText x={x + 100} y="158" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="12.5" fontWeight="500" fill={c.dim}>{c.upadana}</SvgText>
            <SvgText x={x + 100} y="205" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="11" fill={colors.tamas}>{c.note}</SvgText>
          </React.Fragment>
        );
      })}
    </Svg>
  );
}
