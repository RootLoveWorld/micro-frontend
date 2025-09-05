# Mermaid Component Examples

This directory contains examples demonstrating how to use the MermaidChart component in various scenarios.

## Files

- [mermaid-examples.tsx](mermaid-examples.tsx) - Comprehensive examples of different chart types

## Chart Types Demonstrated

1. Flowcharts
2. Sequence Diagrams
3. Class Diagrams
4. Pie Charts

## How to Use

To run these examples:

1. Make sure you have the dependencies installed:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Navigate to the Mermaid Charts page in your browser

## Integration Notes

The MermaidChart component can be easily integrated into any React application:

```jsx
import MermaidChart from '../apps/react-base-app/src/components/MermaidChart';

const MyComponent = () => {
  const chartDefinition = `graph TD
    A[Start] --> B[End]`;

  return <MermaidChart chart={chartDefinition} />;
};
```

## Customization

You can customize the appearance of charts by modifying the CSS in:
`apps/react-base-app/src/components/MermaidChart.css`