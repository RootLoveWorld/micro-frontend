import React from 'react'
import Navigation from '../components/Navigation'

const MicroFrontendPage: React.FC = () => {
  return (
    <div>
      <h1>Micro Frontend Integration</h1>
      <Navigation />
      
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h2>Qiankun Micro Frontend Example</h2>
        <p>This example demonstrates how to integrate multiple frontend applications using Qiankun.</p>
        
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', margin: '20px 0' }}>
          <h3>Micro Applications</h3>
          <p>Below are the integrated micro applications:</p>
          
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
            <div style={{ flex: 1, minWidth: '200px', padding: '20px', border: '1px solid #42b883', borderRadius: '8px' }}>
              <h4>Vue 2 App</h4>
              <p>Integrated at /vue2 route</p>
              <a href="/vue2" style={{ color: '#42b883', fontWeight: 'bold' }}>Visit Vue 2 App</a>
            </div>
            
            <div style={{ flex: 1, minWidth: '200px', padding: '20px', border: '1px solid #4fc08d', borderRadius: '8px' }}>
              <h4>Vue 3 App</h4>
              <p>Integrated at /vue3 route</p>
              <a href="/vue3" style={{ color: '#4fc08d', fontWeight: 'bold' }}>Visit Vue 3 App</a>
            </div>
            
            <div style={{ flex: 1, minWidth: '200px', padding: '20px', border: '1px solid #ff3e00', borderRadius: '8px' }}>
              <h4>Svelte App</h4>
              <p>Integrated at /svelte route</p>
              <a href="/svelte" style={{ color: '#ff3e00', fontWeight: 'bold' }}>Visit Svelte App</a>
            </div>
          </div>
          
          <div style={{ marginTop: '30px', padding: '20px', border: '1px dashed #ccc', borderRadius: '8px' }}>
            <h4>Vue 2 Sub Application</h4>
            <div id="vue2-container" style={{ minHeight: '200px' }}></div>
            <hr></hr>
            <h4>Vue 3 Sub Application</h4>
            <div id="vue3-container" style={{ minHeight: '200px' }}></div>
            <hr></hr>
            <h4>Svelte Sub Application</h4>
            <div id="svelte-container" style={{ minHeight: '200px' }}></div>
          </div>
          
          <div style={{ marginTop: '20px', textAlign: 'left' }}>
            <h4>Key Concepts:</h4>
            <ul>
              <li><strong>Qiankun</strong>: A micro frontend framework that enables seamless integration</li>
              <li><strong>registerMicroApps</strong>: Registers micro applications with their configurations</li>
              <li><strong>start</strong>: Starts the Qiankun micro frontend system</li>
              <li><strong>Sandbox</strong>: Isolates micro applications to prevent style and script conflicts</li>
              <li><strong>Lifecycle</strong>: Manages the loading, mounting, and unmounting of micro applications</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MicroFrontendPage