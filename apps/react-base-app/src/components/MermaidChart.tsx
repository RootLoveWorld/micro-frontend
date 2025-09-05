import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import './MermaidChart.css';

interface MermaidChartProps {
  chart: string;
  id?: string;
}

const MermaidChart: React.FC<MermaidChartProps> = ({ chart, id = 'mermaid-chart' }) => {
  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize mermaid with configuration
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
      },
      fontFamily: 'inherit',
    });

    // Render the chart
    if (mermaidRef.current) {
      mermaidRef.current.innerHTML = '';
      
      // Add a small delay to ensure mermaid is fully initialized
      setTimeout(() => {
        mermaid.render(id, chart).then(({ svg, bindFunctions }) => {
          if (mermaidRef.current) {
            mermaidRef.current.innerHTML = svg;
            if (bindFunctions) {
              bindFunctions(mermaidRef.current);
            }
          }
        }).catch((error) => {
          console.error('Error rendering Mermaid chart:', error);
          console.error('Chart content:', chart);
          if (mermaidRef.current) {
            mermaidRef.current.innerHTML = `<div class="error">Error rendering chart: ${error.message}</div>
            <details>
              <summary>Chart content</summary>
              <pre>${chart}</pre>
            </details>`;
          }
        });
      }, 0);
    }
  }, [chart, id]);

  return (
    <div className="mermaid-chart-container">
      <div ref={mermaidRef}></div>
    </div>
  );
};

export default MermaidChart;