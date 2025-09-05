#!/bin/bash

# Script to install Mermaid component dependencies
echo "Installing Mermaid component dependencies..."

# Navigate to the React base app directory
cd apps/react-base-app

# Install the dependencies
npm install

# Or if using yarn
# yarn install

# Or if using pnpm
# pnpm install

echo "Dependencies installed successfully!"

echo "To run the development server, use:"
echo "npm run dev"

echo "To run tests, use:"
echo "npm test"