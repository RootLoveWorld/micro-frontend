@echo off
REM Script to install Mermaid component dependencies

echo Installing Mermaid component dependencies...

REM Navigate to the React base app directory
cd apps\react-base-app

REM Install the dependencies
npm install

REM Or if using yarn
REM yarn install

REM Or if using pnpm
REM pnpm install

echo Dependencies installed successfully!

echo To run the development server, use:
echo npm run dev

echo To run tests, use:
echo npm test

pause