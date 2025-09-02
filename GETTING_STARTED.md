# Getting Started with Micro-Frontend Project

## Prerequisites

- Node.js (version 16 or higher)
- pnpm (version 7 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd micro-frontend
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

## Running the Applications

### Development Mode

To start all applications in development mode:
```bash
pnpm dev
```

This will start:
- React base app on http://localhost:3000
- Vue 2 sub-app on http://localhost:3002
- Vue 3 sub-app on http://localhost:3003

**Note**: The applications must be started together using `pnpm dev` from the root directory, as they depend on each other for the micro-frontend integration to work properly.

### Building for Production

To build all applications for production:
```bash
pnpm build
```

### Running Tests

To run tests for all applications:
```bash
pnpm test
```

## Project Structure

```
micro-frontend/
├── apps/
│   ├── react-base-app/     # React base application
│   ├── vue2-sub-app/       # Vue 2 sub-application
│   └── vue3-sub-app/       # Vue 3 sub-application
├── packages/
│   └── main-react-app/     # Original CRA project (archived)
├── package.json            # Root package.json
└── pnpm-workspace.yaml     # pnpm workspace configuration
```

## Accessing the Applications

1. Run `pnpm dev` from the root directory
2. Open your browser and navigate to http://localhost:3000
3. The React base application will be displayed
4. The Vue sub-applications will be loaded within the base application:
   - Vue 2 app will appear when navigating to the Vue 2 section
   - Vue 3 app will appear when navigating to the Vue 3 section

## Troubleshooting

### Common Issues

1. **Port conflicts**: If any of the default ports are in use, update the port numbers in the respective `vite.config.ts` files.

2. **Dependency installation errors**: Make sure you're using pnpm version 7 or higher. You can update pnpm with:
   ```bash
   npm install -g pnpm
   ```

3. **Qiankun integration issues**: Ensure all lifecycle methods are properly exported in sub-applications.

4. **Applications not loading**: Make sure to start all applications together using `pnpm dev` from the root directory, not individually.

### Need Help?

Check the [README.md](README.md) for more detailed information about the project architecture and implementation.