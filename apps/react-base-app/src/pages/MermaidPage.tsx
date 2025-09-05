import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import MermaidChart from '../components/MermaidChart';

const MermaidPage: React.FC = () => {
  const [chartType, setChartType] = useState('flowchart');
  
  const flowchartExample = `graph TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    D --> E[Fix issue]
    E --> B
    C --> F[End]`;
  
  const flowchartExample1 = `graph TD
    A[Initiate resource request] --> B{Does cache exist?}
    B -- No --> C[Request directly from server]
    C --> D[Server returns resource<br>200 OK]
    D --> E[Store resource in cache]

    B -- Yes --> F{Check if strong cache has expired?<br>(Cache-Control/Max-Age)}
    F -- Not expired --> G[Use cache directly<br>200 OK (from disk cache)]
    F -- Expired --> H[Request server with cache identifier<br>(ETag/Last-Modified)]

    H --> I{Does server validate cache is still valid?}
    I -- Valid --> J[Return 304 Not Modified]
    J --> K[Update cache validity period and use cache]
    I -- Invalid --> L[Return new resource<br>200 OK]
    L --> M[Update cache]`;
  
  const sequenceDiagramExample = `sequenceDiagram
    participant U as User
    participant A as Application
    participant S as Server
    
    U->>A: User action
    A->>S: API request
    S-->>A: Response
    A-->>U: Update UI`;
  
  const classDiagramExample = `classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal: +int age
    Animal: +String gender
    Animal: +isMammal()
    Animal: +mate()
    
    class Duck {
      +String beakColor
      +swim()
      +quack()
    }
    
    class Fish {
      -int sizeInFeet
      -canEat()
    }`;
  
  const stateDiagramExample = `stateDiagram-v2
    [*] --> Still
    Still --> [*]
    
    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]`;
  
  const pieChartExample = `pie title Favorite Fruits
    "Apples" : 35
    "Oranges" : 28
    "Bananas" : 20
    "Grapes" : 17`;
  
  const ganttChartExample = `gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2023-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2023-01-12  , 12d
    another task      : 24d`;

  const getChartExample = () => {
    switch (chartType) {
      case 'flowchart':
        return flowchartExample;
      case 'flowchart1':
        return flowchartExample1;
      case 'sequence':
        return sequenceDiagramExample;
      case 'class':
        return classDiagramExample;
      case 'state':
        return stateDiagramExample;
      case 'pie':
        return pieChartExample;
      case 'gantt':
        return ganttChartExample;
      default:
        return flowchartExample;
    }
  };

  return (
    <div>
      <h1>Mermaid Chart Examples</h1>
      <Navigation />
      
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2>Interactive Mermaid Chart Demo</h2>
        <p>Mermaid is a JavaScript-based diagramming and charting tool that renders Markdown-inspired text definitions to create and modify diagrams dynamically.</p>
        
        <div style={{ margin: '20px 0' }}>
          <label htmlFor="chart-type">Select Chart Type: </label>
          <select 
            id="chart-type" 
            value={chartType} 
            onChange={(e) => setChartType(e.target.value)}
            style={{ padding: '5px', marginLeft: '10px' }}
          >
            <option value="flowchart">Flowchart</option>           
            <option value="flowchart1">Flowchart1</option>
            <option value="sequence">Sequence Diagram</option>
            <option value="class">Class Diagram</option>
            <option value="state">State Diagram</option>
            <option value="pie">Pie Chart</option>
            <option value="gantt">Gantt Chart</option>
          </select>
        </div>
        
        <div style={{ 
          border: '1px solid #ddd', 
          borderRadius: '8px', 
          padding: '20px', 
          backgroundColor: '#f9f9f9',
          minHeight: '300px'
        }}>
          <MermaidChart chart={getChartExample()} id={`mermaid-${chartType}`} />
        </div>
        
        <div style={{ marginTop: '30px' }}>
          <h3>How to use Mermaid Charts</h3>
          <ol>
            <li>Create a MermaidChart component with your chart definition</li>
            <li>Pass the chart definition as a string prop</li>
            <li>The component will render the SVG diagram</li>
          </ol>
          
          <h3>Example Code</h3>
          <pre style={{ 
            backgroundColor: '#f4f4f4', 
            padding: '15px', 
            borderRadius: '5px',
            overflowX: 'auto'
          }}>
            {`import MermaidChart from '../components/MermaidChart';

const MyComponent = () => {
  const chartDefinition = \`graph TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]\`;
    
  return <MermaidChart chart={chartDefinition} />;
};`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default MermaidPage;