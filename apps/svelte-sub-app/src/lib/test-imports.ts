// Test file to verify component imports
import TodoList from './TodoList.svelte';
import DataFetching from './DataFetching.svelte';
import ComponentCommunication from './ComponentCommunication.svelte';
import ChildComponent from './ChildComponent.svelte';
import ReactiveComputations from './ReactiveComputations.svelte';

// Export all components to verify they can be imported
export {
  TodoList,
  DataFetching,
  ComponentCommunication,
  ChildComponent,
  ReactiveComputations
};

console.log('All components imported successfully');