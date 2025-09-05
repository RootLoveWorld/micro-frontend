<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  let { message } = $props();
  
  const dispatch = createEventDispatcher<{
    message: string;
    count: number;
  }>();
  
  let childMessage = $state('Hello from Child!');
  let count = $state(0);
  
  function sendMessageToParent() {
    dispatch('message', childMessage);
  }
  
  function incrementCount() {
    count++;
    dispatch('count', count);
  }
  
  function resetCount() {
    count = 0;
    dispatch('count', count);
  }
</script>

<div class="child-component">
  <h3>Child Component</h3>
  <p><strong>Message from Parent:</strong> {message}</p>
  
  <div class="child-controls">
    <input 
      type="text" 
      bind:value={childMessage} 
      placeholder="Enter message to send to parent"
    />
    <button onclick={sendMessageToParent}>Send to Parent</button>
  </div>
  
  <div class="counter-section">
    <p>Child Counter: {count}</p>
    <button onclick={incrementCount}>Increment</button>
    <button onclick={resetCount}>Reset</button>
  </div>
</div>

<style>
  .child-component {
    padding: 15px;
    border: 1px solid #007bff;
    border-radius: 8px;
    background-color: #e3f2fd;
    margin-top: 20px;
  }
  
  .child-controls {
    display: flex;
    gap: 10px;
    margin: 15px 0;
  }
  
  .child-controls input {
    flex: 1;
    padding: 8px;
  }
  
  .counter-section {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
  }
  
  .counter-section p {
    margin: 0;
    font-weight: bold;
  }
</style>