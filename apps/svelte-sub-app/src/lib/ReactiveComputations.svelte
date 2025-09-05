<script lang="ts">
  // Basic reactive variables
  let firstName = $state('John');
  let lastName = $state('Doe');
  
  // Reactive statement - automatically updates when firstName or lastName changes
  $effect(() => {
    console.log(`Name changed to: ${firstName} ${lastName}`);
  });
  
  // Derived value - automatically recomputed when dependencies change
  let fullName = $derived(`${firstName} ${lastName}`);
  
  // Another derived value with more complex logic
  let initials = $derived(
    `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`
  );
  
  // Reactive variable with validation
  let age = $state(25);
  
  // Reactive statement with side effects
  $effect(() => {
    if (age < 0) {
      age = 0;
    } else if (age > 150) {
      age = 150;
    }
  });
  
  // Computed property based on multiple values
  let profileSummary = $derived(
    `${fullName} (${age} years old) - Initials: ${initials}`
  );
  
  // Define type for user data
  type UserData = {
    id: number;
    name: string;
    age: number;
    email: string;
  };
  
  // Async reactive example
  let userData = $state<{ status: 'idle' | 'loading' | 'success' | 'error'; data: UserData | null }>({ 
    status: 'idle', 
    data: null 
  });
  
  async function fetchUserData() {
    userData = { status: 'loading', data: null };
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      userData = {
        status: 'success',
        data: {
          id: 1,
          name: fullName,
          age: age,
          email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`
        }
      };
    } catch (error) {
      userData = { status: 'error', data: null };
    }
  }
  
  // Reactive statement that depends on multiple values
  $effect(() => {
    // This will run whenever firstName, lastName, or age changes
    console.log(`User info updated: ${fullName}, Age: ${age}`);
  });
  
  function updateFirstName(name: string) {
    firstName = name;
  }
  
  function updateLastName(name: string) {
    lastName = name;
  }
  
  function updateAge(newAge: number) {
    age = newAge;
  }
</script>

<div class="reactive-demo">
  <h2>Reactive Computations Demo</h2>
  
  <div class="form-section">
    <div class="input-group">
      <label for="firstName">First Name:</label>
      <input 
        id="firstName"
        type="text" 
        bind:value={firstName} 
        placeholder="First Name"
      />
    </div>
    
    <div class="input-group">
      <label for="lastName">Last Name:</label>
      <input 
        id="lastName"
        type="text" 
        bind:value={lastName} 
        placeholder="Last Name"
      />
    </div>
    
    <div class="input-group">
      <label for="age">Age:</label>
      <input 
        id="age"
        type="number" 
        bind:value={age} 
        min="0"
        max="150"
      />
    </div>
  </div>
  
  <div class="results-section">
    <h3>Reactive Results</h3>
    <p><strong>Full Name:</strong> {fullName}</p>
    <p><strong>Initials:</strong> {initials}</p>
    <p><strong>Profile Summary:</strong> {profileSummary}</p>
    
    <div class="async-section">
      <button onclick={fetchUserData} disabled={userData.status === 'loading'}>
        {userData.status === 'loading' ? 'Loading...' : 'Fetch User Data'}
      </button>
      
      {#if userData.status === 'loading'}
        <p>Loading user data...</p>
      {:else if userData.status === 'success' && userData.data}
        <div class="user-data">
          <h4>User Data:</h4>
          <p>ID: {userData.data.id}</p>
          <p>Name: {userData.data.name}</p>
          <p>Age: {userData.data.age}</p>
          <p>Email: {userData.data.email}</p>
        </div>
      {:else if userData.status === 'error'}
        <p class="error">Failed to load user data</p>
      {/if}
    </div>
  </div>
</div>

<style>
  .reactive-demo {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  h2, h3, h4 {
    color: #333;
  }
  
  .form-section {
    margin-bottom: 20px;
  }
  
  .input-group {
    margin-bottom: 15px;
  }
  
  .input-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .input-group input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  .results-section {
    padding: 15px;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #eee;
  }
  
  .results-section p {
    margin: 10px 0;
  }
  
  .async-section {
    margin-top: 20px;
    padding-top: 15px;
    border-top: 1px solid #eee;
  }
  
  .user-data {
    margin-top: 15px;
    padding: 10px;
    background-color: #e8f5e9;
    border-radius: 4px;
  }
  
  .user-data p {
    margin: 5px 0;
  }
  
  .error {
    color: #dc3545;
  }
</style>