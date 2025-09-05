# React Flow Integration Guide

## Overview

This guide explains how to use React Flow in your React application. React Flow is a library for building node-based applications and interactive diagrams.

## Installation

React Flow is already installed in your project. The required dependencies are:

```json
{
  "dependencies": {
    "@xyflow/react": "12.8.4"
  }
}
```

## Basic Usage

### 1. Import Required Components

```tsx
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
```

### 2. Define Initial Nodes and Edges

```tsx
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
```

### 3. Implement the Component

```tsx
function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  return (
    <div style={{ width: '100%', height: '500px' }}>
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
    </div>
  );
}
```

## Advanced Features

### Custom Nodes

Create custom node components:

```tsx
const CustomNode = ({ data }) => {
  return (
    <div style={{ padding: '10px', background: '#ffc107' }}>
      {data.label}
    </div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

// In ReactFlow component:
<ReactFlow
  // ... other props
  nodeTypes={nodeTypes}
/>
```

### Custom Edges

Create custom edge components:

```tsx
const CustomEdge = ({ id, sourceX, sourceY, targetX, targetY }) => {
  return (
    <path
      id={id}
      style={{ stroke: '#ff0073', strokeWidth: 2 }}
      className="react-flow__edge-path"
      d={`M ${sourceX} ${sourceY} C ${sourceX + 100} ${sourceY} ${targetX - 100} ${targetY} ${targetX} ${targetY}`}
    />
  );
};

const edgeTypes = {
  custom: CustomEdge,
};

// In ReactFlow component:
<ReactFlow
  // ... other props
  edgeTypes={edgeTypes}
/>
```

### Animated Edges

Add animation to edges:

```tsx
const animatedEdge = {
  id: 'e1-2',
  source: '1',
  target: '2',
  animated: true,
};
```

### Edge Labels

Add labels to edges:

```tsx
const edgeWithLabel = {
  id: 'e1-2',
  source: '1',
  target: '2',
  label: 'connection',
};
```

## Available Components

1. **ReactFlow** - Main component
2. **Controls** - Zoom and pan controls
3. **MiniMap** - Overview of the flow
4. **Background** - Dots or lines background
5. **Panel** - UI panel component

## Node Types

1. **input** - Node with connection only on the right
2. **default** - Node with connections on both sides
3. **output** - Node with connection only on the left
4. **custom** - User-defined node types

## Examples in This Project

1. **Basic Example** - [ReactFlowPage.tsx](../apps/react-base-app/src/pages/ReactFlowPage.tsx)
2. **Advanced Example** - [AdvancedReactFlowPage.tsx](../apps/react-base-app/src/pages/AdvancedReactFlowPage.tsx)

## Best Practices

1. **Performance**: Use `useNodesState` and `useEdgesState` hooks for better performance
2. **Styling**: Import the default CSS file for basic styling
3. **Customization**: Use custom node and edge components for advanced styling
4. **Accessibility**: Ensure your custom components are accessible
5. **Responsiveness**: Make sure your flow container has defined dimensions

## Common Patterns

### Adding Nodes Dynamically

```tsx
const onAddNode = useCallback(() => {
  const newNode = {
    id: `${nodes.length + 1}`,
    position: { x: Math.random() * 300, y: Math.random() * 300 },
    data: { label: `Node ${nodes.length + 1}` },
  };
  setNodes((nds) => nds.concat(newNode));
}, [nodes.length, setNodes]);
```

### Connecting Nodes

```tsx
const onConnect = useCallback(
  (params) => setEdges((eds) => addEdge(params, eds)),
  [setEdges],
);
```

### Updating Node Data

```tsx
const updateNodeData = useCallback((id, data) => {
  setNodes((nds) =>
    nds.map((node) => (node.id === id ? { ...node, data } : node))
  );
}, []);
```

## Troubleshooting

### Nodes Not Visible

1. Ensure the ReactFlow container has defined dimensions
2. Check that nodes have valid positions
3. Verify that the CSS is imported

### Edges Not Connecting

1. Ensure source and target node IDs exist
2. Check that onConnect handler is properly implemented
3. Verify that edge IDs are unique

### Performance Issues

1. Use `useCallback` for event handlers
2. Limit the number of nodes and edges
3. Use virtualization for large graphs

## Resources

- [React Flow Documentation](https://reactflow.dev/)
- [Examples](https://reactflow.dev/examples)
- [API Reference](https://reactflow.dev/api)