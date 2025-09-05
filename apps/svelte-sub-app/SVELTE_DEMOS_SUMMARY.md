# Svelte Core Framework Feature Demos

This document summarizes the core framework feature demos that have been added to the Svelte sub-application.

## Demos Implemented

### 1. Todo List Demo
**File:** `src/lib/TodoList.svelte`

Demonstrates:
- State management with `$state`
- List rendering with `#each` block
- Conditional styling with `class:directive`
- Event handling with `onclick` syntax (Svelte 5)
- Form input binding with `bind:value`

### 2. Data Fetching Demo
**File:** `src/lib/DataFetching.svelte`

Demonstrates:
- Async operations with `fetch`
- Lifecycle methods (`onMount`, `onDestroy`)
- Error handling
- Loading states
- Interval-based data refreshing

### 3. Component Communication Demo
**Files:** 
- `src/lib/ComponentCommunication.svelte` (Parent)
- `src/lib/ChildComponent.svelte` (Child)

Demonstrates:
- Parent to child data passing via props
- Child to parent communication via events (`createEventDispatcher`)
- Event handling with `on:eventName` syntax for custom events
- State management across components

### 4. Reactive Computations Demo
**File:** `src/lib/ReactiveComputations.svelte`

Demonstrates:
- Reactive variables with `$state`
- Derived values with `$derived`
- Reactive statements with `$effect`
- Reactive validation
- Async reactive operations

### 5. Main Application Integration
**File:** `src/App.svelte`

Demonstrates:
- Tab-based navigation between demos
- Conditional rendering with `#if` blocks
- Component composition
- Event handling with `onclick` syntax (Svelte 5)
- Styling and layout management

## Key Svelte 5 Features Used

1. **New Reactivity Syntax:**
   - `$state` for reactive variables
   - `$derived` for computed values
   - `$effect` for side effects

2. **New Event Handling Syntax:**
   - `onclick` instead of `on:click`
   - `onchange` instead of `on:change`
   - `onkeydown` for keyboard events

3. **Component Properties:**
   - `$props()` for accessing component props

4. **Lifecycle Functions:**
   - `onMount` for component initialization
   - `onDestroy` for cleanup

## How to Use

1. The main application (`App.svelte`) serves as the entry point
2. Use the tab navigation to switch between different demos
3. Each demo showcases different aspects of Svelte's capabilities
4. All demos are self-contained and can be viewed independently

## Compatibility

- Built with Svelte 5
- Compatible with Qiankun micro-frontend architecture
- Uses Webpack for bundling
- TypeScript support enabled