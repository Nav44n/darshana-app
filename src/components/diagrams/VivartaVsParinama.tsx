import React from 'react';
import Svg, { Rect, Line, Path, Defs, Marker, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function VivartaVsParinama() {
  const { colors } = useTheme();

  return (
    <Svg width="100%" viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" role="img">
      <Defs>
        <Marker id="arrowVP" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <Path d="M2 1L8 5L2 9" fill="none" stroke={colors.tamas} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Marker>
      </Defs>

      <SvgText x="340" y="24" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill={colors.rajasDim}>Pariṇāmavāda — real transformation (Sāṃkhya)</SvgText>
      <Rect x="60" y="36" width="180" height="60" rx="8" fill={colors.avyakta2} stroke={colors.rajas} strokeWidth="0.6"/>
      <SvgText x="150" y="60" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="13" fontWeight="500" fill={colors.ink}>Milk</SvgText>
      <SvgText x="150" y="78" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="10.5" fill={colors.rajasDim}>the cause, really changes</SvgText>
      <Line x1="240" y1="66" x2="380" y2="66" stroke={colors.tamas} strokeWidth="1" markerEnd="url(#arrowVP)"/>
      <Rect x="390" y="36" width="180" height="60" rx="8" fill={colors.avyakta2} stroke={colors.rajas} strokeWidth="0.6"/>
      <SvgText x="480" y="60" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="13" fontWeight="500" fill={colors.ink}>Curd</SvgText>
      <SvgText x="480" y="78" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="10.5" fill={colors.rajasDim}>a genuinely new substance</SvgText>

      <SvgText x="340" y="140" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill={colors.tealDim}>Vivartavāda — apparent manifestation (Vedānta)</SvgText>
      <Rect x="60" y="152" width="180" height="60" rx="8" fill={colors.avyakta2} stroke={colors.teal} strokeWidth="0.6"/>
      <SvgText x="150" y="176" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="13" fontWeight="500" fill={colors.ink}>Rope</SvgText>
      <SvgText x="150" y="194" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="10.5" fill={colors.tealDim}>Brahman, unchanged</SvgText>
      <Line x1="240" y1="182" x2="380" y2="182" stroke={colors.tamas} strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#arrowVP)"/>
      <Rect x="390" y="152" width="180" height="60" rx="8" fill={colors.avyakta2} stroke={colors.teal} strokeWidth="0.6"/>
      <SvgText x="480" y="176" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="13" fontWeight="500" fill={colors.ink}>Snake</SvgText>
      <SvgText x="480" y="194" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="10.5" fill={colors.tealDim}>the universe, a superimposition</SvgText>

      <SvgText x="340" y="240" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill={colors.tamas}>In twilight the rope never became a snake — it only appeared to</SvgText>
    </Svg>
  );
}
