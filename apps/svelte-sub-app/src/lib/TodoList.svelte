<script lang="ts">
  let newTodo = $state('');
  let todos = $state([
    { id: 1, text: 'Learn Svelte', completed: true },
    { id: 2, text: 'Build Micro Frontend', completed: false }
  ]);

  function addTodo() {
    if (newTodo.trim()) {
      todos = [...todos, {
        id: Date.now(),
        text: newTodo,
        completed: false
      }];
      newTodo = '';
    }
  }

  function toggleTodo(id: number) {
    todos = todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  function removeTodo(id: number) {
    todos = todos.filter(todo => todo.id !== id);
  }
</script>

<div class="todo-demo">
  <h2>Todo List Demo</h2>
  <div class="add-todo">
    <input 
      type="text" 
      bind:value={newTodo} 
      placeholder="Add a new todo..."
      onkeydown={(e) => e.key === 'Enter' && addTodo()}
    />
    <button onclick={addTodo}>Add</button>
  </div>
  
  <ul class="todo-list">
    {#each todos as todo (todo.id)}
      <li class:completed={todo.completed}>
        <input 
          type="checkbox" 
          checked={todo.completed} 
          onchange={() => toggleTodo(todo.id)}
        />
        <span>{todo.text}</span>
        <button class="remove-btn" onclick={() => removeTodo(todo.id)}>×</button>
      </li>
    {/each}
  </ul>
  
  <p class="todo-stats">Total: {todos.length} todos</p>
</div>

<style>
  .todo-demo {
    max-width: 500px;
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
  
  .add-todo {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  input[type="text"] {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .todo-list {
    list-style: none;
    padding: 0;
  }
  
  .todo-list li {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
    gap: 10px;
  }
  
  .todo-list li.completed {
    opacity: 0.6;
  }
  
  .todo-list li.completed span {
    text-decoration: line-through;
  }
  
  .remove-btn {
    margin-left: auto;
    background-color: #dc3545;
    padding: 2px 8px;
  }
  
  .remove-btn:hover {
    background-color: #c82333;
  }
  
  .todo-stats {
    text-align: center;
    margin-top: 15px;
    color: #666;
  }
</style>