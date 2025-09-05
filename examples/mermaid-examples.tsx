// Example usage of the MermaidChart component
import React from 'react';
import ReactDOM from 'react-dom/client';
import MermaidChart from '../apps/react-base-app/src/components/MermaidChart';

// Example 1: Simple Flowchart
const FlowchartExample = () => {
  const flowchart = `graph TD
    A[Start] --> B[Process]
    B --> C{Decision}
    C -->|Yes| D[Action 1]
    C -->|No| E[Action 2]
    D --> F[End]
    E --> F`;

  return (
    <div>
      <h2>Flowchart Example</h2>
      <MermaidChart chart={flowchart} />
    </div>
  );
};

// Example 2: Sequence Diagram
const SequenceDiagramExample = () => {
  const sequenceDiagram = `sequenceDiagram
    participant U as User
    participant A as Application
    participant S as Server
    participant D as Database

    U->>A: Submit Form
    A->>S: API Request
    S->>D: Query Data
    D-->>S: Data Response
    S-->>A: API Response
    A-->>U: Update UI`;

  return (
    <div>
      <h2>Sequence Diagram Example</h2>
      <MermaidChart chart={sequenceDiagram} />
    </div>
  );
};

// Example 3: Class Diagram
const ClassDiagramExample = () => {
  const classDiagram = `classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    
    class Duck{
      +String beakColor
      +swim()
      +quack()
    }
    
    class Fish{
      -int sizeInFeet
      -canEat()
    }
    
    class Zebra{
      +bool is_wild
      +run()
    }`;

  return (
    <div>
      <h2>Class Diagram Example</h2>
      <MermaidChart chart={classDiagram} />
    </div>
  );
};

// Example 4: Pie Chart
const PieChartExample = () => {
  const pieChart = `pie title Pets adopted by volunteers
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15`;

  return (
    <div>
      <h2>Pie Chart Example</h2>
      <MermaidChart chart={pieChart} />
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Mermaid Chart Component Examples</h1>
      <p>These examples demonstrate how to use the MermaidChart component in different scenarios.</p>
      
      <FlowchartExample />
      <SequenceDiagramExample />
      <ClassDiagramExample />
      <PieChartExample />
    </div>
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export {
  FlowchartExample,
  SequenceDiagramExample,
  ClassDiagramExample,
  PieChartExample,
  App
};