import React, { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  addEdge,
  type Node,
  type Edge,
  type Connection,
  type NodeTypes,
  type EdgeTypes,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import Navigation from '../components/Navigation';

// Custom node component
const CustomNode = ({ data }: { data: { label: string } }) => {
  return (
    <div style={{ 
      padding: '10px', 
      background: '#ffc107', 
      border: '1px solid #ffc107', 
      borderRadius: '5px',
      textAlign: 'center',
      width: '150px'
    }}>
      <div style={{ fontWeight: 'bold' }}>{data.label}</div>
      <div>Custom Node</div>
    </div>
  );
};

// Custom edge component
const CustomEdge = ({ id, sourceX, sourceY, targetX, targetY }: any) => {
  return (
    <>
      <path
        id={id}
        style={{ 
          stroke: '#ff0073', 
          strokeWidth: 2,
          fill: 'none' 
        }}
        className="react-flow__edge-path"
        d={`M ${sourceX} ${sourceY} C ${sourceX + 100} ${sourceY} ${targetX - 100} ${targetY} ${targetX} ${targetY}`}
      />
    </>
  );
};

// Define custom node types
const nodeTypes = {
  custom: CustomNode,
} satisfies NodeTypes;

// Define custom edge types
const edgeTypes = {
  custom: CustomEdge,
} satisfies EdgeTypes;

// Initial nodes
const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    position: { x: 0, y: 0 },
    data: { label: 'Input Node' },
  },
  {
    id: '2',
    type: 'custom',
    position: { x: 300, y: 0 },
    data: { label: 'Custom Node' },
  },
  {
    id: '3',
    type: 'output',
    position: { x: 600, y: 0 },
    data: { label: 'Output Node' },
  },
  {
    id: '4',
    position: { x: 150, y: 150 },
    data: { label: 'Default Node' },
  },
];

// Initial edges
const initialEdges: Edge[] = [
  { 
    id: 'e1-2', 
    source: '1', 
    target: '2',
    animated: true,
    label: 'animated edge'
  },
  { 
    id: 'e2-3', 
    source: '2', 
    target: '3',
    type: 'custom'
  },
  { 
    id: 'e1-4', 
    source: '1', 
    target: '4',
    style: { stroke: 'orange' },
    label: 'orange edge'
  },
];

const AdvancedReactFlowPage: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onAddNode = useCallback(() => {
    const newNodeId = `${nodes.length + 1}`;
    const newNode: Node = {
      id: newNodeId,
      type: Math.random() > 0.5 ? 'default' : 'custom',
      position: { x: Math.random() * 500, y: Math.random() * 300 },
      data: { label: `Node ${newNodeId}` },
    };
    setNodes((nds) => nds.concat(newNode));
  }, [nodes.length, setNodes]);

  return (
    <div>
      <h1>Advanced React Flow Example</h1>
      <Navigation />
      
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2>Advanced Features with React Flow</h2>
        <p>This example demonstrates custom nodes, custom edges, animations, and labels.</p>
        
        <div style={{ margin: '20px 0' }}>
          <button 
            onClick={onAddNode}
            style={{ 
              padding: '8px 16px', 
              backgroundColor: '#007bff', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer' 
            }}
          >
            Add Random Node
          </button>
        </div>
        
        <div style={{ width: '100%', height: '500px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            fitView
          >
            <Controls />
            <MiniMap />
            <Background variant={BackgroundVariant.Lines} gap={20} size={1} />
          </ReactFlow>
        </div>
        
        <div style={{ marginTop: '30px' }}>
          <h3>Advanced React Flow Features</h3>
          <ul>
            <li><strong>Custom Nodes</strong> - Nodes with custom styling and components</li>
            <li><strong>Custom Edges</strong> - Edges with custom paths and styling</li>
            <li><strong>Animated Edges</strong> - Edges with animation effects</li>
            <li><strong>Edge Labels</strong> - Text labels on edges</li>
            <li><strong>MiniMap</strong> - Overview of the entire flow</li>
            <li><strong>Controls</strong> - Zoom and pan controls</li>
          </ul>
          
          <h3>Example Code</h3>
          <pre style={{ 
            backgroundColor: '#f4f4f4', 
            padding: '15px', 
            borderRadius: '5px',
            overflowX: 'auto'
          }}>
            {`// Custom Node Component
const CustomNode = ({ data }) => {
  return (
    <div style={{ 
      padding: '10px', 
      background: '#ffc107', 
      border: '1px solid #ffc107', 
      borderRadius: '5px'
    }}>
      <div>{data.label}</div>
    </div>
  );
};

// Custom Edge Component
const CustomEdge = ({ id, sourceX, sourceY, targetX, targetY }) => {
  return (
    <path
      id={id}
      style={{ stroke: '#ff0073', strokeWidth: 2 }}
      className="react-flow__edge-path"
      d={\`M \${sourceX} \${sourceY} C \${sourceX + 100} \${sourceY} \${targetX - 100} \${targetY} \${targetX} \${targetY}\`}
    />
  );
};

// Define custom types
const nodeTypes = { custom: CustomNode };
const edgeTypes = { custom: CustomEdge };

// Use in ReactFlow component
<ReactFlow
  nodes={nodes}
  edges={edges}
  nodeTypes={nodeTypes}
  edgeTypes={edgeTypes}
  // ... other props
/>`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default AdvancedReactFlowPage;