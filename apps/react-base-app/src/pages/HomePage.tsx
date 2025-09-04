import React from 'react'
import Navigation from '../components/Navigation'

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>React Base App - Knowledge Points</h1>
      <Navigation />
      
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h2>Welcome to the React Knowledge Base</h2>
        <p>This application demonstrates core React concepts through practical examples:</p>
        
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px', marginTop: '30px' }}>
          <div style={{ flex: 1, minWidth: '200px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h3>State Management</h3>
            <p>Learn how to manage application state using Redux Toolkit</p>
          </div>
          
          <div style={{ flex: 1, minWidth: '200px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h3>Routing</h3>
            <p>Understand how to implement navigation with React Router</p>
          </div>
          
          <div style={{ flex: 1, minWidth: '200px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h3>Micro Frontend</h3>
            <p>See how to integrate multiple frontend applications using Qiankun</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage