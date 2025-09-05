<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  
  let users = $state<any[]>([]);
  let loading = $state(false);
  let error = $state<string | null>(null);
  let intervalId: any = null;

  async function fetchUsers() {
    try {
      loading = true;
      error = null;
      
      // Using a mock API for demonstration
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      users = await response.json();
    } catch (err: any) {
      error = err.message || 'Failed to fetch users';
      console.error('Fetch error:', err);
    } finally {
      loading = false;
    }
  }

  function refreshData() {
    fetchUsers();
  }

  onMount(() => {
    fetchUsers();
    
    // Refresh data every 30 seconds
    intervalId = setInterval(fetchUsers, 30000);
    
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  });

  onDestroy(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  });
</script>

<div class="data-fetching-demo">
  <h2>Data Fetching Demo</h2>
  
  <div class="controls">
    <button onclick={refreshData} disabled={loading}>
      {loading ? 'Loading...' : 'Refresh Data'}
    </button>
  </div>
  
  {#if error}
    <div class="error">
      Error: {error}
      <button onclick={fetchUsers}>Retry</button>
    </div>
  {:else if loading}
    <div class="loading">Loading users...</div>
  {:else}
    <div class="user-list">
      <h3>Users ({users.length})</h3>
      <ul>
        {#each users as user (user.id)}
          <li>
            <strong>{user.name}</strong> - {user.email}
            <br />
            <small>{user.phone} | {user.website}</small>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style>
  .data-fetching-demo {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  h2 {
    text-align: center;
    color: #333;
  }
  
  .controls {
    text-align: center;
    margin-bottom: 20px;
  }
  
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  .loading, .error {
    text-align: center;
    padding: 20px;
  }
  
  .error {
    color: #dc3545;
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .user-list h3 {
    margin-top: 0;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }
  
  .user-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .user-list li {
    padding: 15px;
    border-bottom: 1px solid #eee;
  }
  
  .user-list li:last-child {
    border-bottom: none;
  }
  
  .user-list strong {
    color: #007bff;
  }
  
  .user-list small {
    color: #666;
  }
</style>