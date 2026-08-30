import React from 'react';
import Svg, { Ellipse, Path, Text as SvgText, Line } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';
import { fonts } from '../../theme/tokens';

export default function NyayaLampAnalogy() {
  const { mode } = useTheme();

  // Adapted slightly for dark mode visibility
  const titleColor = mode === 'dark' ? '#EBD7D6' : '#2C2420';
  const subTextColor = mode === 'dark' ? '#D6C8B8' : '#6B5F52';
  const lampBaseFill = mode === 'dark' ? '#3B3530' : '#E7E3DC';
  const lampBaseStroke = mode === 'dark' ? '#C2A381' : '#8A7A68';

  const rays = [
    { x1: 285.0, y1: 160.0, x2: 325.0, y2: 160.0 },
    { x1: 277.6, y1: 176.5, x2: 312.3, y2: 188.5 },
    { x1: 257.5, y1: 188.6, x2: 277.5, y2: 209.4 },
    { x1: 230.0, y1: 193.0, x2: 230.0, y2: 217.0 },
    { x1: 202.5, y1: 188.6, x2: 182.5, y2: 209.4 },
    { x1: 182.4, y1: 176.5, x2: 147.7, y2: 188.5 },
    { x1: 175.0, y1: 160.0, x2: 135.0, y2: 160.0 },
    { x1: 182.4, y1: 143.5, x2: 147.7, y2: 131.5 },
    { x1: 202.5, y1: 131.4, x2: 182.5, y2: 110.6 },
    { x1: 230.0, y1: 127.0, x2: 230.0, y2: 103.0 },
    { x1: 257.5, y1: 131.4, x2: 277.5, y2: 110.6 },
    { x1: 277.6, y1: 143.5, x2: 312.3, y2: 131.5 },
  ];

  return (
    <Svg viewBox="0 0 460 340" width="100%" height={260} preserveAspectRatio="xMidYMid meet">
      {/* Title */}
      <SvgText x="230" y="32" textAnchor="middle" fontSize="19" fontWeight="600" fill={titleColor} fontFamily={fonts.display}>
        A lamp needs no second lamp
      </SvgText>

      {/* Subtitle */}
      <SvgText x="230" y="60" textAnchor="middle" fontSize="14" fontWeight="600" fill={titleColor} fontFamily={fonts.display}>
        Valid cognition reveals its object and its own validity at once
      </SvgText>

      {/* Lamp Base */}
      <Ellipse cx="230" cy="230" rx="46" ry="10" fill={lampBaseFill} stroke={lampBaseStroke} strokeWidth="1.2"/>
      
      {/* Lamp Body */}
      <Path d="M200 230 L216 180 L244 180 L260 230 Z" fill="#F4DCC0" stroke="#B5651D" strokeWidth="1.2"/>
      
      {/* Flame */}
      <Path d="M224 180 Q230 135 236 180 Q230 165 224 180 Z" fill="#E8A33D" stroke="#B5651D" strokeWidth="1"/>

      {/* Light Rays */}
      {rays.map((ray, idx) => (
        <Line 
          key={`ray-${idx}`} 
          x1={ray.x1} y1={ray.y1} 
          x2={ray.x2} y2={ray.y2} 
          stroke="#D9A441" 
          strokeWidth="1.5" 
          opacity="0.6"
        />
      ))}

      {/* Footer Text */}
      <SvgText x="230" y="265" textAnchor="middle" fontSize="13" fontWeight="400" fill={subTextColor} fontFamily={fonts.serif}>
        the lamp illuminates the room
      </SvgText>
      <SvgText x="230" y="285" textAnchor="middle" fontSize="13" fontWeight="400" fill={subTextColor} fontFamily={fonts.serif}>
        — and, in the same act, itself
      </SvgText>
    </Svg>
  );
}
