# Mermaid Chart Component

This component allows you to render Mermaid diagrams in your React application.

## Installation

Mermaid is already included in the project dependencies. If you need to install it separately:

```bash
npm install mermaid
```

## Usage

```jsx
import MermaidChart from './MermaidChart';

const MyComponent = () => {
  const chartDefinition = `graph TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]`;

  return <MermaidChart chart={chartDefinition} />;
};
```

## Props

| Prop | Type   | Required | Default         | Description                          |
|------|--------|----------|-----------------|--------------------------------------|
| chart| string | Yes      | -               | The Mermaid chart definition         |
| id   | string | No       | 'mermaid-chart' | Unique ID for the chart container    |

## Supported Chart Types

1. Flowcharts
2. Sequence Diagrams
3. Class Diagrams
4. State Diagrams
5. Pie Charts
6. Gantt Charts

## Example Charts

### Flowchart
```
graph TD
  A[Start] --> B{Is it working?}
  B -->|Yes| C[Great!]
  B -->|No| D[Debug]
```

### Sequence Diagram
```
sequenceDiagram
  participant U as User
  participant A as Application
  participant S as Server
  
  U->>A: User action
  A->>S: API request
  S-->>A: Response
  A-->>U: Update UI
```

### Class Diagram
```
classDiagram
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
  }
```