import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { registerMicroApps, start, RegistrableApp, addGlobalUncaughtErrorHandler } from 'qiankun'

// Register micro apps
const apps: RegistrableApp<any>[] = [
  {
    name: 'vue2-sub-app',
    entry: '//localhost:3002',
    container: '#vue2-container',
    activeRule: '/vue2',
    props: {
      sourcePath: '//localhost:3002'
    }
  },
  {
    name: 'vue3-sub-app',
    entry: '//localhost:3003',
    container: '#vue3-container',
    activeRule: '/vue3',
  },
]

registerMicroApps(apps, {
  beforeLoad: [
    app => {
      console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      return Promise.resolve();
    },
  ],
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      return Promise.resolve();
    },
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      return Promise.resolve();
    },
  ],
});

// Start qiankun with configuration
start({
  prefetch: 'all',
  sandbox: {
    strictStyleIsolation: false,
    experimentalStyleIsolation: false,
  },
  singular: false,
  excludeAssetFilter: (assetUrl) => {
    // Don't exclude any assets for better compatibility
    return false;
  }
});

// Enhanced error handling
addGlobalUncaughtErrorHandler((event: Event | string, source?: string, lineno?: number, colno?: number, error?: Error) => {
  console.error('Module Error:', event);
  
  // Handle different types of error events
  if (typeof event === 'string') {
    console.error('Error message:', event);
    console.error('Error source:', source);
    console.error('Error line number:', lineno);
    console.error('Error column number:', colno);
    if (error?.stack) {
      console.error('Error stack:', error.stack);
    }
  } else if (event instanceof ErrorEvent) {
    console.error('Error message:', event.message);
    console.error('Error stack:', event.error?.stack);
    
    // Handle specific errors
    if (event.error?.message?.includes('import statement outside a module')) {
      console.error('This error typically occurs when there are issues with module loading in micro-frontend setup.');
      console.error('Please check that all sub-applications are properly configured with type="module" in their index.html files.');
    }
  } else {
    console.error('Unknown error event:', event);
  }
});

// For webpack compatibility
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Export for module systems
export default root;