# Svelte Sub-Application Integration

## Overview

This document describes the integration of a Svelte sub-application into the existing micro-frontend architecture using Qiankun.

## Project Structure

```
apps/
└── svelte-sub-app/
    ├── src/
    │   ├── App.svelte          # Main application component
    │   ├── main.ts             # Application entry point with Qiankun lifecycle functions
    │   └── public-path.js      # Qiankun public path configuration
    ├── public/
    │   └── svelte.svg          # Svelte logo
    ├── index.html              # HTML entry point
    ├── package.json            # Project dependencies and scripts
    ├── tsconfig.json           # TypeScript configuration
    ├── tsconfig.node.json      # Node TypeScript configuration
    └── vite.config.ts          # Vite configuration
```

## Key Integration Points

### 1. Qiankun Lifecycle Functions

The Svelte application implements the required Qiankun lifecycle functions in `src/main.ts`:

```typescript
export async function bootstrap() {
  console.log('Svelte app bootstraped');
}

export async function mount(props: any) {
  console.log('Svelte app mounted');
  // Mount the Svelte app to the container provided by Qiankun
}

export async function unmount() {
  console.log('Svelte app unmounted');
  // Clean up the Svelte app instance
}
```

### 2. Public Path Configuration

The `src/public-path.js` file configures the public path for assets when running in Qiankun:

```javascript
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
```

### 3. Vite Configuration

The `vite.config.ts` file includes Qiankun-compatible settings:

```typescript
export default defineConfig({
  server: {
    port: 3004,
    cors: true,
    origin: 'http://localhost:3004'
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]',
        chunkFileNames: 'assets/[name].js',
        entryFileNames: 'assets/[name].js'
      }
    }
  }
});
```

### 4. Main Application Integration

The React base application is configured to register the Svelte sub-application in `src/main.tsx`:

```typescript
const apps: RegistrableApp<any>[] = [
  // ... other apps
  {
    name: 'svelte-sub-app',
    entry: '//localhost:3004',
    container: '#svelte-container',
    activeRule: '/svelte',
  },
]
```

## Development Workflow

### Standalone Development

To develop the Svelte application independently:

```bash
cd apps/svelte-sub-app
npm run dev
```

The application will be available at http://localhost:3004

### Micro-Frontend Mode

When integrated with the main React application via Qiankun, this app will be available at `/svelte` route.

## Key Features

1. **TypeScript Support**: Full TypeScript support with proper type definitions
2. **Qiankun Compatibility**: Implements all required lifecycle functions
3. **Standalone Mode**: Can run independently or as part of the micro-frontend
4. **Vite Build System**: Uses Vite for fast development and optimized builds
5. **Svelte 4**: Latest Svelte version with improved performance

## Container Integration

The Svelte application is integrated into the main application through a container element:

```html
<div id="svelte-container" style={{ minHeight: '200px' }}></div>
```

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure the Vite server is configured with `cors: true`
2. **Asset Loading**: Verify the public path configuration is correct
3. **Lifecycle Errors**: Check that all lifecycle functions are properly implemented
4. **Port Conflicts**: Ensure the Svelte app is running on a unique port (3004)

### Debugging

Enable verbose logging by checking the browser console for Qiankun lifecycle messages:

```
[LifeCycle] before load svelte-sub-app
[LifeCycle] before mount svelte-sub-app
[LifeCycle] after unmount svelte-sub-app
```

## Future Enhancements

1. Add routing capabilities within the Svelte app
2. Implement state management (if needed)
3. Add more complex components and examples
4. Integrate with the main application's state management system
5. Add unit tests for the Svelte components