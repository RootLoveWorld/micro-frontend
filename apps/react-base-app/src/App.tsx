import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Base App</h1>
      
      {/* Navigation links */}
      <div className="navigation" style={{ margin: '20px 0' }}>
        <a href="/" style={{ margin: '0 10px', padding: '8px 16px', backgroundColor: '#f0f0f0', borderRadius: '4px', textDecoration: 'none', color: '#333' }}>Home</a>
        <a href="/vue2" style={{ margin: '0 10px', padding: '8px 16px', backgroundColor: '#42b883', borderRadius: '4px', textDecoration: 'none', color: 'white' }}>Vue 2 App</a>
        <a href="/vue3" style={{ margin: '0 10px', padding: '8px 16px', backgroundColor: '#4fc08d', borderRadius: '4px', textDecoration: 'none', color: 'white' }}>Vue 3 App</a>
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      
      {/* Micro-frontend containers */}
      <div style={{ marginTop: '30px', padding: '20px', border: '1px dashed #ccc', borderRadius: '8px' }}>
        <hr></hr>
        <h2>Vue 2 Sub Application</h2>
        <div id="vue2-container" style={{ minHeight: '200px' }}></div>
        <hr></hr>
        <h2>Vue 3 Sub Application</h2>
        <div id="vue3-container" style={{ minHeight: '200px' }}></div>
        <hr></hr>
      </div>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
