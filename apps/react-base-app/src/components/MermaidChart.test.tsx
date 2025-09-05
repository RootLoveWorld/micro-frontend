import React from 'react';
import { render, screen } from '@testing-library/react';
import MermaidChart from './MermaidChart';

// Mock the mermaid library
jest.mock('mermaid', () => ({
  initialize: jest.fn(),
  render: jest.fn().mockResolvedValue({
    svg: '<svg>Test SVG</svg>',
    bindFunctions: null
  })
}));

describe('MermaidChart', () => {
  const mockChart = `graph TD
    A[Start] --> B[End]`;

  it('renders without crashing', () => {
    render(<MermaidChart chart={mockChart} />);
    expect(screen.getByRole('generic')).toBeInTheDocument();
  });

  it('displays error message when rendering fails', async () => {
    const errorMessage = 'Rendering error';
    jest.requireMock('mermaid').render.mockRejectedValueOnce(new Error(errorMessage));
    
    render(<MermaidChart chart={mockChart} />);
    
    // Wait for the error to be displayed
    expect(await screen.findByText(`Error rendering chart: ${errorMessage}`)).toBeInTheDocument();
  });
});