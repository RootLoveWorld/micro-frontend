import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    port: 3004,
    cors: true,
    origin: 'http://localhost:3004',
    // Ensure proper headers for ES modules
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  build: {
    rollupOptions: {
      output: {
        // Set the base path for Qiankun compatibility
        assetFileNames: 'assets/[name].[ext]',
        chunkFileNames: 'assets/[name].js',
        entryFileNames: 'assets/[name].js',
        // Ensure proper format for ES modules
        format: 'es'
      }
    }
  },
  define: {
    // Define global variables for Qiankun
    __POWERED_BY_QIANKUN__: JSON.stringify(false)
  }
});