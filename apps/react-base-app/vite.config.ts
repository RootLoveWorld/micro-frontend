import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: false,
    host: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  build: {
    rollupOptions: {
      // Remove externalization of React dependencies for micro-frontend compatibility
      // external: ['react', 'react-dom'],
      output: {
        // Remove globals configuration since we're not externalizing React
        // globals: {
        //   react: 'React',
        //   'react-dom': 'ReactDOM'
        // }
      }
    }
  }
})