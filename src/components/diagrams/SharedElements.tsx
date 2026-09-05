import React from 'react';
import Svg, { Rect, Text as SvgText, Path, G, Defs, Marker } from 'react-native-svg';

interface LabeledNodeProps {
  x: number;
  y: number;
  width?: number;
  height?: number;
  label: string;
  sublabel?: string;
  fill?: string;
  stroke?: string;
  textColor?: string;
}

export function LabeledNode({
  x,
  y,
  width = 120,
  height = 40,
  label,
  sublabel,
  fill = '#1a1d29',
  stroke = '#2c2f45',
  textColor = '#eae7de'
}: LabeledNodeProps) {
  const midX = x + width / 2;
  const textY = sublabel ? y + height / 2 - 6 : y + height / 2 + 4;

  return (
    <G>
      <Rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={6}
        fill={fill}
        stroke={stroke}
        strokeWidth={1}
      />
      <SvgText
        x={midX}
        y={textY}
        fill={textColor}
        fontSize="12"
        fontFamily="Inter_500Medium"
        textAnchor="middle"
      >
        {label}
      </SvgText>
      {!!sublabel && (
        <SvgText
          x={midX}
          y={textY + 14}
          fill={textColor}
          opacity={0.7}
          fontSize="10"
          fontFamily="NotoSerifDevanagari_400Regular"
          textAnchor="middle"
        >
          {sublabel}
        </SvgText>
      )}
    </G>
  );
}

interface DirectedEdgeProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  stroke?: string;
  dashed?: boolean;
}

export function DirectedEdge({ x1, y1, x2, y2, stroke = '#5b5f72', dashed = false }: DirectedEdgeProps) {
  return (
    <G>
      <Defs>
        <Marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <Path d="M 0 0 L 10 5 L 0 10 z" fill={stroke} />
        </Marker>
      </Defs>
      <Path
        d={`M ${x1} ${y1} L ${x2} ${y2}`}
        stroke={stroke}
        strokeWidth={1.5}
        strokeDasharray={dashed ? '4,4' : undefined}
        markerEnd="url(#arrow)"
      />
    </G>
  );
}
