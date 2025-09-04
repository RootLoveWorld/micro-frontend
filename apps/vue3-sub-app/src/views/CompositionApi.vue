<template>
  <div class="composition-api">
    <h1>Composition API Example</h1>
    <p>The Composition API is a set of additive, function-based APIs that allow flexible composition of component logic.</p>
    
    <div class="example">
      <h2>Counter Example (Local State)</h2>
      <p>Count: {{ count }}</p>
      <p>Double Count: {{ doubleCount }}</p>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
    </div>
    
    <div class="example">
      <h2>Reactive Object Example</h2>
      <p>Name: {{ user.name }}</p>
      <p>Age: {{ user.age }}</p>
      <button @click="updateUser">Update User</button>
    </div>
    
    <PiniaExample />
    
    <div class="navigation">
      <router-link to="/">&larr; Back to Home</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import PiniaExample from '../components/PiniaExample.vue'

// Ref example
const count = ref(0)
const doubleCount = computed(() => count.value * 2)

function increment() {
  count.value++
}

function decrement() {
  count.value--
}

// Reactive object example
const user = reactive({
  name: 'Vue 3 User',
  age: 25
})

function updateUser() {
  user.name = 'Updated User'
  user.age = 30
}
</script>

<style scoped>
.composition-api {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.example {
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  margin: 5px;
  padding: 8px 16px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #359c6d;
}

.navigation {
  margin-top: 30px;
}

.navigation a {
  color: #42b883;
  text-decoration: none;
}
</style>