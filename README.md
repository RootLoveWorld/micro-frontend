# Micro-Frontend Monorepo with Qiankun

This project demonstrates a micro-frontend architecture using Qiankun with a React base application and Vue sub-applications.

## Project Structure

```
micro-frontend/
├── apps/
│   ├── react-base-app/     # React 18 base application with TypeScript and Vite
│   ├── vue2-sub-app/       # Vue 2 sub-application with TypeScript and Vite
│   └── vue3-sub-app/       # Vue 3 sub-application with TypeScript and Vite
├── packages/
│   └── main-react-app/     # Original Create React App project
├── examples/               # Example implementations
├── docs/                   # Documentation files
├── package.json            # Root package.json for monorepo
└── pnpm-workspace.yaml     # pnpm workspace configuration
```

## Technologies Used

- **Base Application**: React 18 + TypeScript + Vite
- **Sub-applications**: 
  - Vue 2 + TypeScript + Vite
  - Vue 3 + TypeScript + Vite
- **Micro-frontend Framework**: Qiankun
- **Visualization**: Mermaid.js for diagram rendering
- **Package Manager**: pnpm

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start all applications in development mode:
   ```bash
   pnpm dev
   ```

3. Access the applications:
   - Base React app: http://localhost:3000
   - Vue 2 sub-app: http://localhost:3002
   - Vue 3 sub-app: http://localhost:3003

## How It Works

The React base application acts as the main container that loads the Vue sub-applications using Qiankun. Each sub-application can be developed and deployed independently while being integrated into the main application at runtime.

## Available Scripts

- `pnpm dev` - Start all applications in development mode
- `pnpm build` - Build all applications for production
- `pnpm test` - Run tests for all applications
- `pnpm lint` - Lint all applications

## Architecture

- **Base Application**: Contains the main layout and navigation
- **Vue 2 Sub-application**: Loaded at `/vue2` route
- **Vue 3 Sub-application**: Loaded at `/vue3` route
- **Mermaid Charts**: Integrated visualization component for diagrams

Each application is independently deployable and can be developed by separate teams.

## Mermaid Chart Component

This project includes a custom Mermaid chart component that allows you to render diagrams and charts using Mermaid.js syntax within your React applications.

### Features

- Supports all major Mermaid chart types
- Responsive design that works on all screen sizes
- Error handling for invalid chart definitions
- Easy to integrate with existing React applications

### Usage

```jsx
import MermaidChart from './components/MermaidChart';

const MyComponent = () => {
  const chartDefinition = `graph TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]`;

  return <MermaidChart chart={chartDefinition} />;
};
```

### Examples

Visit the "Mermaid Charts" link in the navigation to see examples of:
- Flowcharts
- Sequence Diagrams
- Class Diagrams
- State Diagrams
- Pie Charts
- Gantt Charts

## Recent Fixes

- Added missing index.html files to all applications
- Fixed asset paths in all applications
- Corrected base paths in Vite configuration files
- Added proper SVG logos for all applications
- Integrated Mermaid.js chart component with examples