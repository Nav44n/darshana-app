import React from 'react';
import Svg, { Defs, Marker, Path, Rect, Text as SvgText, Line } from 'react-native-svg';
import { useTheme } from '../../theme/useTheme';
import { fonts } from '../../theme/tokens';

export default function ShodashaPadarthaTree() {
  const { colors, mode } = useTheme();
  
  // Adapted slightly for dark mode visibility while preserving the generated artistic colors
  const strokeColor = mode === 'dark' ? '#C2A381' : '#8A7A68';
  const titleColor = mode === 'dark' ? '#EBD7D6' : '#2C2420';

  return (
    <Svg viewBox="0 0 760 460" width="100%" height={300} preserveAspectRatio="xMidYMid meet">
      <Defs>
        <Marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <Path d="M1 1L9 5L1 9" fill="none" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </Marker>
      </Defs>

      {/* Title */}
      <SvgText x="380" y="32" textAnchor="middle" fontSize="19" fontWeight="600" fill={titleColor} fontFamily={fonts.display}>
        Ṣoḍaśa-padārtha — the sixteen categories
      </SvgText>

      {/* Root Node */}
      <Rect x="290" y="55" width="180" height="44" rx="8" fill="#EBD7D6" stroke="#7A2E2E" strokeWidth="1.2"/>
      <SvgText x="380" y="70" textAnchor="middle" alignmentBaseline="middle" fontSize="15" fontWeight="600" fill="#5C2222" fontFamily={fonts.display}>
        Mokṣa via 16
      </SvgText>
      <SvgText x="380" y="88" textAnchor="middle" alignmentBaseline="middle" fontSize="12" fill="#6B5F52" fontFamily={fonts.serif}>
        categories
      </SvgText>

      {/* Lines & Arrows */}
      {[
        { x: 132.5, y: 150 }, { x: 297.5, y: 150 }, { x: 462.5, y: 150 }, { x: 627.5, y: 150 },
        { x: 132.5, y: 214 }, { x: 297.5, y: 214 }, { x: 462.5, y: 214 }, { x: 627.5, y: 214 },
        { x: 132.5, y: 278 }, { x: 297.5, y: 278 }, { x: 462.5, y: 278 }, { x: 627.5, y: 278 },
        { x: 132.5, y: 342 }, { x: 297.5, y: 342 }, { x: 462.5, y: 342 }, { x: 627.5, y: 342 }
      ].map((pos, idx) => (
        <Line 
          key={`line-${idx}`} 
          x1="380" y1="99" 
          x2={pos.x} y2={pos.y} 
          stroke={strokeColor} 
          strokeWidth="1.4" 
          strokeDasharray="4 3" 
          markerEnd="url(#arrow)"
        />
      ))}

      {/* The 16 Categories (4x4 Grid) */}
      {[
        { x: 57.5, y: 150, tX: 132.5, tY: 173, label: 'Pramāṇa' },
        { x: 222.5, y: 150, tX: 297.5, tY: 173, label: 'Prameya' },
        { x: 387.5, y: 150, tX: 462.5, tY: 173, label: 'Saṃśaya' },
        { x: 552.5, y: 150, tX: 627.5, tY: 173, label: 'Prayojana' },

        { x: 57.5, y: 214, tX: 132.5, tY: 237, label: 'Dṛṣṭānta' },
        { x: 222.5, y: 214, tX: 297.5, tY: 237, label: 'Siddhānta' },
        { x: 387.5, y: 214, tX: 462.5, tY: 237, label: 'Avayava' },
        { x: 552.5, y: 214, tX: 627.5, tY: 237, label: 'Tarka' },

        { x: 57.5, y: 278, tX: 132.5, tY: 301, label: 'Nirṇaya' },
        { x: 222.5, y: 278, tX: 297.5, tY: 301, label: 'Vāda' },
        { x: 387.5, y: 278, tX: 462.5, tY: 301, label: 'Jalpa' },
        { x: 552.5, y: 278, tX: 627.5, tY: 301, label: 'Vitaṇḍā' },

        { x: 57.5, y: 342, tX: 132.5, tY: 365, label: 'Hetvābhāsa' },
        { x: 222.5, y: 342, tX: 297.5, tY: 365, label: 'Chhala' },
        { x: 387.5, y: 342, tX: 462.5, tY: 365, label: 'Jāti' },
        { x: 552.5, y: 342, tX: 627.5, tY: 365, label: 'Nigrahasthāna' },
      ].map((node, idx) => (
        <React.Fragment key={`node-${idx}`}>
          <Rect x={node.x} y={node.y} width="150" height="46" rx="8" fill="#F4DCC0" stroke="#B5651D" strokeWidth="1.2"/>
          <SvgText x={node.tX} y={node.tY} textAnchor="middle" alignmentBaseline="middle" fontSize="15" fontWeight="600" fill="#7A3E0D" fontFamily={fonts.display}>
            {node.label}
          </SvgText>
        </React.Fragment>
      ))}
    </Svg>
  );
}
