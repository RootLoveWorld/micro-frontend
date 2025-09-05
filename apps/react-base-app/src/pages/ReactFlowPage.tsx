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
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import Navigation from '../components/Navigation';

// Define custom node types if needed
const nodeTypes = {} satisfies NodeTypes;

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
    position: { x: 0, y: 100 },
    data: { label: 'Default Node' },
  },
  {
    id: '3',
    type: 'output',
    position: { x: 0, y: 200 },
    data: { label: 'Output Node' },
  },
];

// Initial edges
const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
];

const ReactFlowPage: React.FC = () => {
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
      position: { x: Math.random() * 300, y: Math.random() * 300 },
      data: { label: `Node ${newNodeId}` },
    };
    setNodes((nds) => nds.concat(newNode));
  }, [nodes.length, setNodes]);

  return (
    <div>
      <h1>React Flow Example</h1>
      <Navigation />
      
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2>Interactive Diagram with React Flow</h2>
        <p>React Flow is a library for building node-based applications. You can drag nodes, connect them, and interact with the diagram.</p>
        
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
            Add Node
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
            fitView
          >
            <Controls />
            <MiniMap />
            <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
          </ReactFlow>
        </div>
        
        <div style={{ marginTop: '30px' }}>
          <h3>How to use React Flow</h3>
          <ol>
            <li>Drag nodes to reposition them</li>
            <li>Click and drag from a node handle to create connections</li>
            <li>Use the controls in the bottom left to zoom and pan</li>
            <li>Click the "Add Node" button to add new nodes to the diagram</li>
          </ol>
          
          <h3>Example Code</h3>
          <pre style={{ 
            backgroundColor: '#f4f4f4', 
            padding: '15px', 
            borderRadius: '5px',
            overflowX: 'auto'
          }}>
            {`import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    position: { x: 0, y: 0 },
    data: { label: 'Input Node' },
  },
  {
    id: '2',
    position: { x: 0, y: 100 },
    data: { label: 'Default Node' },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
];

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <Controls />
      <Background />
    </ReactFlow>
  );
}`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ReactFlowPage;