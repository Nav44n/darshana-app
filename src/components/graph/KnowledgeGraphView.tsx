import React, { useEffect, useState, useRef } from 'react';
import { View, PanResponder, StyleSheet, Animated } from 'react-native';
import Svg, { Circle, Line, Text as SvgText, G } from 'react-native-svg';
import { forceSimulation, forceLink, forceManyBody, forceCenter, forceCollide, SimulationNodeDatum, SimulationLinkDatum } from 'd3-force';
import { useTheme } from '../../theme/useTheme';
import { ColorPalette } from '../../theme/tokens';
const graphData = require('../../knowledge/darshana-knowledge-graph.json');

interface NodeData extends SimulationNodeDatum {
  id: string;
  label: string;
  type: string;
  properties: any;
}

interface LinkData extends SimulationLinkDatum<NodeData> {
  relation: string;
}

export default function KnowledgeGraphView({ 
  systemFilter = 'Both',
  onNodePress,
  selectedNodeId,
}: { 
  systemFilter?: 'Sāṃkhya' | 'Yoga' | 'Nyāya' | 'Both';
  onNodePress?: (node: NodeData) => void;
  selectedNodeId?: string | null;
}) {
  const { colors, type } = useTheme();
  const s = React.useMemo(() => makeStyles(colors), [colors]);

  const pan = useRef(new Animated.ValueXY()).current;
  const [layout, setLayout] = useState({ width: 0, height: 0 });
  const [graph, setGraph] = useState<{ nodes: NodeData[], links: LinkData[] }>({ nodes: [], links: [] });

  useEffect(() => {
    if (layout.width === 0 || layout.height === 0) return;

    const timer = setTimeout(() => {
      let rawNodes = graphData.nodes as any[];
      if (systemFilter !== 'Both') {
         rawNodes = rawNodes.filter((n: any) => !n.properties.system || n.properties.system === systemFilter || n.properties.system === 'Both');
      }
      const nodeIds = new Set(rawNodes.map(n => n.id));
      const rawEdges = (graphData.edges as any[]).filter((e: any) => nodeIds.has(e.source) && nodeIds.has(e.target));

      const nodesData: NodeData[] = rawNodes.map(n => ({ ...n }));
      const linksData: LinkData[] = rawEdges.map(e => ({ ...e, source: e.source, target: e.target }));

      const simulation = forceSimulation(nodesData)
        .force('charge', forceManyBody().strength(-300))
        .force('link', forceLink(linksData).id((d: any) => d.id).distance(100))
        .force('center', forceCenter(layout.width / 2, layout.height / 3))
        .force('collide', forceCollide().radius(40))
        .stop();

      for (let i = 0; i < 300; i++) simulation.tick();

      setGraph({ nodes: nodesData, links: linksData });
    }, 10);

    return () => clearTimeout(timer);
  }, [systemFilter, layout.width, layout.height]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: pan.x, dy: pan.y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        pan.extractOffset();
      }
    })
  ).current;

  const handleNodePress = (node: NodeData) => {
    if (onNodePress) onNodePress(node);
  };

  const getNodeColor = (node: NodeData) => {
    if (node.type === 'Tattva') return colors.sattva;
    if (node.type === 'Concept') return colors.rajas;
    if (node.type === 'Guna') return colors.tamas;
    return colors.inkDim;
  };

  const isHighlighted = (nodeId: string) => {
    if (!selectedNodeId) return true;
    if (nodeId === selectedNodeId) return true;
    return graph.links.some(l => 
      ((l.source as any).id === selectedNodeId && (l.target as any).id === nodeId) ||
      ((l.target as any).id === selectedNodeId && (l.source as any).id === nodeId)
    );
  };

  return (
    <View 
      style={s.container} 
      onLayout={(e) => setLayout({ width: e.nativeEvent.layout.width, height: e.nativeEvent.layout.height })}
      {...panResponder.panHandlers}
    >
      <Animated.View style={[StyleSheet.absoluteFill, { transform: pan.getTranslateTransform() }]}>
        <Svg width="100%" height="100%">
          {graph.links.map((link, i) => {
            const source = link.source as unknown as NodeData;
            const target = link.target as unknown as NodeData;
            const active = isHighlighted(source.id) && isHighlighted(target.id);
            return (
              <G key={`link-${i}`}>
                <Line
                  x1={source.x}
                  y1={source.y}
                  x2={target.x}
                  y2={target.y}
                  stroke={colors.inkDim}
                  strokeWidth={active ? 2 : 0.5}
                  opacity={active ? 0.8 : 0.2}
                />
              </G>
            );
          })}

          {graph.nodes.map(node => {
            const active = isHighlighted(node.id);
            return (
              <G key={node.id} x={node.x} y={node.y} onPress={() => handleNodePress(node)}>
                <Circle
                  r={20}
                  fill={getNodeColor(node)}
                  opacity={active ? 1 : 0.3}
                  stroke={selectedNodeId === node.id ? colors.ink : 'none'}
                  strokeWidth={2}
                />
                <SvgText
                  y={35}
                  fontFamily={type.caption.fontFamily}
                  fontSize={type.caption.fontSize}
                  fill={colors.ink}
                  textAnchor="middle"
                  opacity={active ? 1 : 0.3}
                >
                  {node.label}
                </SvgText>
              </G>
            );
          })}
        </Svg>
      </Animated.View>
    </View>
  );
}

const makeStyles = (colors: ColorPalette) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.avyakta2,
    overflow: 'hidden'
  }
});
