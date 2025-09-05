import React from 'react'
import { Link } from 'react-router-dom'

const Navigation: React.FC = () => {
  return (
    <nav style={{ margin: '20px 0', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '8px' }} data-testid="navigation">
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center', gap: '20px', margin: 0, padding: 0, flexWrap: 'wrap' }}>
        <li>
          <Link 
            to="/" 
            style={{ padding: '8px 16px', backgroundColor: '#007bff', borderRadius: '4px', textDecoration: 'none', color: 'white' }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/state-management" 
            style={{ padding: '8px 16px', backgroundColor: '#28a745', borderRadius: '4px', textDecoration: 'none', color: 'white' }}
          >
            State Management
          </Link>
        </li>
        <li>
          <Link 
            to="/routing" 
            style={{ padding: '8px 16px', backgroundColor: '#ffc107', borderRadius: '4px', textDecoration: 'none', color: 'black' }}
          >
            Routing
          </Link>
        </li>
        <li>
          <Link 
            to="/micro-frontend" 
            style={{ padding: '8px 16px', backgroundColor: '#dc3545', borderRadius: '4px', textDecoration: 'none', color: 'white' }}
          >
            Micro Frontend
          </Link>
        </li>
        <li>
          <Link 
            to="/mermaid" 
            style={{ padding: '8px 16px', backgroundColor: '#6f42c1', borderRadius: '4px', textDecoration: 'none', color: 'white' }}
          >
            Mermaid Charts
          </Link>
        </li>
        <li>
          <Link 
            to="/mermaid-test" 
            style={{ padding: '8px 16px', backgroundColor: '#20c997', borderRadius: '4px', textDecoration: 'none', color: 'white' }}
          >
            Mermaid Test
          </Link>
        </li>
        <li>
          <Link 
            to="/react-flow" 
            style={{ padding: '8px 16px', backgroundColor: '#fd7e14', borderRadius: '4px', textDecoration: 'none', color: 'white' }}
          >
            React Flow
          </Link>
        </li>
        <li>
          <Link 
            to="/react-flow-advanced" 
            style={{ padding: '8px 16px', backgroundColor: '#e83e8c', borderRadius: '4px', textDecoration: 'none', color: 'white' }}
          >
            Advanced React Flow
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation