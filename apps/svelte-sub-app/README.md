# Svelte Sub-Application

This is a Svelte micro-frontend application integrated with Qiankun.

## Features

- Svelte 5 with TypeScript
- Vite build system
- Qiankun micro-frontend compatibility
- Standalone development mode

## Project Structure

```
svelte-sub-app/
├── src/
│   ├── App.svelte          # Main application component
│   ├── main.ts             # Application entry point
│   └── public-path.js      # Qiankun public path configuration
├── public/
│   └── svelte.svg          # Svelte logo
├── index.html              # HTML entry point
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tsconfig.node.json      # Node TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## Development

### Standalone Development

```bash
npm run dev
```

The application will be available at http://localhost:3004

### Micro-Frontend Mode

When integrated with the main React application via Qiankun, this app will be available at `/svelte` route.

## Build

```bash
npm run build
```

## Qiankun Integration

This application implements the required Qiankun lifecycle functions:

- `bootstrap()` - Called when the app is bootstrapped
- `mount(props)` - Called when the app is mounted
- `unmount()` - Called when the app is unmounted

## Key Files

### main.ts
The entry point that handles both standalone and Qiankun modes. Uses Svelte 5's new mount API instead of the deprecated `new App()` constructor.

### public-path.js
Configures the public path for assets when running in Qiankun.

### vite.config.ts
Vite configuration with Qiankun-compatible settings.