<script lang="ts">
  import { onMount } from 'svelte';
  import { formatMessage, getCurrentTime, incrementCounter, decrementCounter } from './lib/utils';
  import TodoList from './lib/TodoList.svelte';
  import DataFetching from './lib/DataFetching.svelte';
  import ComponentCommunication from './lib/ComponentCommunication.svelte';
  import ReactiveComputations from './lib/ReactiveComputations.svelte';
  
  let count = $state(0);
  let message = $state('Hello from Svelte Sub-App!');
  let currentTime = $state(getCurrentTime());
  let activeDemo = $state('home'); // home, todo, data, communication, reactive
  let formattedMessage = $derived(formatMessage(message));
  
  function increment() {
    count = incrementCounter(count);
  }
  
  function decrement() {
    count = decrementCounter(count);
  }
  
  function updateCurrentTime() {
    currentTime = getCurrentTime();
  }
  
  function setActiveDemo(demo: string) {
    activeDemo = demo;
  }
  
  onMount(() => {
    console.log('Svelte app component mounted');
    // Update time every second
    const interval = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(interval);
  });
</script>

<main>
  <div class="container">
    <h1>{formattedMessage}</h1>
    
    <!-- Navigation Tabs -->
    <div class="tabs">
      <button class:active={activeDemo === 'home'} onclick={() => setActiveDemo('home')}>Home</button>
      <button class:active={activeDemo === 'todo'} onclick={() => setActiveDemo('todo')}>Todo List</button>
      <button class:active={activeDemo === 'data'} onclick={() => setActiveDemo('data')}>Data Fetching</button>
      <button class:active={activeDemo === 'communication'} onclick={() => setActiveDemo('communication')}>Component Communication</button>
      <button class:active={activeDemo === 'reactive'} onclick={() => setActiveDemo('reactive')}>Reactive Computations</button>
    </div>
    
    <!-- Home Content -->
    {#if activeDemo === 'home'}
      <div class="counter">
        <button onclick={decrement}>-</button>
        <span class="count">{count}</span>
        <button onclick={increment}>+</button>
      </div>
      <p>This is a Svelte micro-frontend application integrated with Qiankun.</p>
      <p>Current count: {count}</p>
      <p>Current time: {currentTime}</p>
      
      <div class="demo-intro">
        <h2>Svelte Core Features Demo</h2>
        <p>Use the tabs above to explore different Svelte framework features:</p>
        <ul>
          <li><strong>Todo List</strong>: State management and list rendering</li>
          <li><strong>Data Fetching</strong>: Async operations and lifecycle methods</li>
          <li><strong>Component Communication</strong>: Parent-child interaction</li>
          <li><strong>Reactive Computations</strong>: Svelte's reactivity system</li>
        </ul>
      </div>
    {/if}
    
    <!-- Todo List Demo -->
    {#if activeDemo === 'todo'}
      <TodoList />
    {/if}
    
    <!-- Data Fetching Demo -->
    {#if activeDemo === 'data'}
      <DataFetching />
    {/if}
    
    <!-- Component Communication Demo -->
    {#if activeDemo === 'communication'}
      <ComponentCommunication />
    {/if}
    
    <!-- Reactive Computations Demo -->
    {#if activeDemo === 'reactive'}
      <ReactiveComputations />
    {/if}
  </div>
</main>

<style>
  .container {
    text-align: center;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  h1 {
    color: #ff3e00;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .tabs {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin: 20px 0;
    flex-wrap: wrap;
  }
  
  .tabs button {
    background-color: #f0f0f0;
    color: #333;
    border: 1px solid #ddd;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  .tabs button:hover {
    background-color: #e0e0e0;
  }
  
  .tabs button.active {
    background-color: #ff3e00;
    color: white;
    border-color: #ff3e00;
  }
  
  .counter {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 2rem 0;
  }
  
  button {
    background-color: #ff3e00;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #ff5c29;
  }
  
  .count {
    font-size: 2rem;
    font-weight: bold;
    min-width: 3rem;
    display: inline-block;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
  }
  
  .demo-intro {
    margin-top: 30px;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    text-align: left;
  }
  
  .demo-intro h2 {
    color: #333;
    text-align: center;
  }
  
  .demo-intro ul {
    text-align: left;
    margin-top: 15px;
  }
  
  .demo-intro li {
    margin-bottom: 10px;
  }
</style>