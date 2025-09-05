<script lang="ts">
  import { onMount } from 'svelte';
  import { formatMessage, getCurrentTime, incrementCounter, decrementCounter } from './lib/utils';
  
  let count = $state(0);
  let message = $state('Hello from Svelte Sub-App!');
  let currentTime = $state(getCurrentTime());
  
  function increment() {
    count = incrementCounter(count);
  }
  
  function decrement() {
    count = decrementCounter(count);
  }
  
  function updateCurrentTime() {
    currentTime = getCurrentTime();
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
    <h1>{formatMessage(message)}</h1>
    <div class="counter">
      <button onclick={decrement}>-</button>
      <span class="count">{count}</span>
      <button onclick={increment}>+</button>
    </div>
    <p>This is a Svelte micro-frontend application integrated with Qiankun.</p>
    <p>Current count: {count}</p>
    <p>Current time: {currentTime}</p>
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
</style>