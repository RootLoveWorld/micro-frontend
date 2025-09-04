import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Navigation from '../components/Navigation'

const RoutingPage: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const goToHome = () => {
    navigate('/')
  }

  const goToStateManagement = () => {
    navigate('/state-management')
  }

  return (
    <div>
      <h1>Routing with React Router</h1>
      <Navigation />
      
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h2>Navigation Example</h2>
        <p>This example demonstrates how to implement client-side routing in React applications.</p>
        
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', margin: '20px 0' }}>
          <h3>Current Location: {location.pathname}</h3>
          
          <div style={{ margin: '20px 0' }}>
            <button 
              onClick={goToHome}
              style={{ margin: '0 10px', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Go to Home
            </button>
            
            <button 
              onClick={goToStateManagement}
              style={{ margin: '0 10px', padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Go to State Management
            </button>
          </div>
          
          <div style={{ marginTop: '20px', textAlign: 'left' }}>
            <h4>Key Concepts:</h4>
            <ul>
              <li><strong>BrowserRouter</strong>: Provides routing context to your app</li>
              <li><strong>Routes & Route</strong>: Define the routing configuration</li>
              <li><strong>Link & NavLink</strong>: Create navigation links</li>
              <li><strong>useNavigate</strong>: Programmatically navigate between routes</li>
              <li><strong>useLocation</strong>: Access current location information</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoutingPage