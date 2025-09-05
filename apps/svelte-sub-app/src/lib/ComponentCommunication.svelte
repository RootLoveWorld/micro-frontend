<script lang="ts">
  import ChildComponent from './ChildComponent.svelte';
  
  let parentMessage = $state('Hello from Parent!');
  let childMessage = $state('');
  let childCount = $state(0);
  
  function handleChildMessage(event: CustomEvent<string>) {
    childMessage = event.detail;
  }
  
  function handleChildCount(event: CustomEvent<number>) {
    childCount = event.detail;
  }
  
  function updateParentMessage() {
    parentMessage = `Parent message updated at ${new Date().toLocaleTimeString()}`;
  }
</script>

<div class="communication-demo">
  <h2>Component Communication Demo</h2>
  
  <div class="parent-section">
    <h3>Parent Component</h3>
    <p><strong>Parent Message:</strong> {parentMessage}</p>
    <button onclick={updateParentMessage}>Update Parent Message</button>
    
    <div class="child-response">
      <p><strong>Message from Child:</strong> {childMessage || 'No message yet'}</p>
      <p><strong>Child Count:</strong> {childCount}</p>
    </div>
  </div>
  
  <div class="child-section">
    <ChildComponent 
      message={parentMessage}
      on:message={handleChildMessage}
      on:count={handleChildCount}
    />
  </div>
</div>