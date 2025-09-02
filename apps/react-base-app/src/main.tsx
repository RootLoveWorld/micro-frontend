import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { registerMicroApps, start } from 'qiankun'

// Register micro apps
registerMicroApps([
  {
    name: 'vue2-sub-app',
    entry: '//localhost:3002',
    container: '#vue2-container',
    activeRule: '/vue2',
  },
  {
    name: 'vue3-sub-app',
    entry: '//localhost:3003',
    container: '#vue3-container',
    activeRule: '/vue3',
  },
])

// Start qiankun
start()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)