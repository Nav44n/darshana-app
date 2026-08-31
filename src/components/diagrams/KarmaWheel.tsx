import React from 'react';
import Svg, { Rect, Path, Defs, Marker, Text as SvgText } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';

export default function KarmaWheel() {
  const { colors } = useTheme();

  return (
    <Svg width="100%" viewBox="0 0 620 380" xmlns="http://www.w3.org/2000/svg" role="img">
      <Defs>
        <Marker id="arrowKW" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <Path d="M2 1L8 5L2 9" fill="none" stroke={colors.tamas} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Marker>
      </Defs>

      <Rect x="230" y="20" width="160" height="56" rx="8" fill={colors.avyakta2} stroke={colors.tamas} strokeWidth="0.6"/>
      <SvgText x="310" y="48" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Kleśa</SvgText>
      <SvgText x="310" y="66" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="10.5" fill={colors.tamas}>affliction</SvgText>

      <Path d="M370,76 Q470,110 470,150" fill="none" stroke={colors.tamas} strokeWidth="1" markerEnd="url(#arrowKW)"/>
      <Rect x="420" y="150" width="160" height="56" rx="8" fill={colors.avyakta2} stroke={colors.rajas} strokeWidth="0.6"/>
      <SvgText x="500" y="178" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Karma</SvgText>
      <SvgText x="500" y="196" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="10.5" fill={colors.rajasDim}>action</SvgText>

      <Path d="M420,206 Q310,240 310,280" fill="none" stroke={colors.tamas} strokeWidth="1" markerEnd="url(#arrowKW)"/>
      <Rect x="230" y="280" width="160" height="56" rx="8" fill={colors.avyakta2} stroke={colors.rajas} strokeWidth="0.6"/>
      <SvgText x="310" y="303" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Saṃskāra</SvgText>
      <SvgText x="310" y="321" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="10.5" fill={colors.rajasDim}>latent impression</SvgText>

      <Path d="M230,306 Q150,240 150,150" fill="none" stroke={colors.tamas} strokeWidth="1" markerEnd="url(#arrowKW)"/>
      <Rect x="40" y="150" width="160" height="56" rx="8" fill={colors.avyakta2} stroke={colors.tamas} strokeWidth="0.6"/>
      <SvgText x="120" y="173" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="14" fontWeight="500" fill={colors.ink}>Phala</SvgText>
      <SvgText x="120" y="191" textAnchor="middle" dominantBaseline="central" fontFamily="sans-serif" fontSize="10.5" fill={colors.tamas}>birth, lifespan, experience</SvgText>

      <Path d="M120,150 Q120,100 230,60" fill="none" stroke={colors.tamas} strokeWidth="1" markerEnd="url(#arrowKW)"/>

      <SvgText x="310" y="360" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill={colors.tamas}>Yoga is the practice of roasting these seeds so they cannot sprout again</SvgText>
    </Svg>
  );
}
