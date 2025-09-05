import React from 'react';
import Navigation from '../components/Navigation';
import MermaidChart from '../components/MermaidChart';

const MermaidTestPage: React.FC = () => {
  const simpleFlowchart = `graph TD
    A[Start] --> B[End]`;

  const complexFlowchart = `graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Action 1]
    B -->|No| D[Action 2]
    C --> E[End]
    D --> E`;

  return (
    <div>
      <h1>Mermaid Chart Test</h1>
      <Navigation />
      
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2>Simple Flowchart Test</h2>
        <div style={{ 
          border: '1px solid #ddd', 
          borderRadius: '8px', 
          padding: '20px', 
          backgroundColor: '#f9f9f9',
          minHeight: '100px',
          marginBottom: '30px'
        }}>
          <MermaidChart chart={simpleFlowchart} id="simple-flowchart" />
        </div>
        
        <h2>Complex Flowchart Test</h2>
        <div style={{ 
          border: '1px solid #ddd', 
          borderRadius: '8px', 
          padding: '20px', 
          backgroundColor: '#f9f9f9',
          minHeight: '200px'
        }}>
          <MermaidChart chart={complexFlowchart} id="complex-flowchart" />
        </div>
      </div>
    </div>
  );
};

export default MermaidTestPage;