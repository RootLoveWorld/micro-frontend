<template>
  <div class="reactivity">
    <h1>Reactivity System Example</h1>
    <p>Vue 3's reactivity system is based on ES2015 Proxy, making it more efficient and powerful than Vue 2's Object.defineProperty approach.</p>
    
    <div class="example">
      <h2>Reactive vs Ref</h2>
      <p>Reactive Object: {{ state.count }}</p>
      <p>Ref Value: {{ count }}</p>
      <button @click="incrementBoth">Increment Both</button>
    </div>
    
    <div class="example">
      <h2>Computed Properties</h2>
      <p>First Name: <input v-model="firstName" /></p>
      <p>Last Name: <input v-model="lastName" /></p>
      <p>Full Name (computed): {{ fullName }}</p>
    </div>
    
    <div class="example">
      <h2>Watchers</h2>
      <p>Watched Value: {{ watchedValue }}</p>
      <button @click="changeWatchedValue">Change Value</button>
      <p>Watcher Message: {{ watcherMessage }}</p>
    </div>
    
    <div class="navigation">
      <router-link to="/">&larr; Back to Home</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'

// Reactive object
const state = reactive({ count: 0 })

// Ref
const count = ref(0)

function incrementBoth() {
  state.count++
  count.value++
}

// Computed properties
const firstName = ref('John')
const lastName = ref('Doe')
const fullName = computed(() => `${firstName.value} ${lastName.value}`)

// Watchers
const watchedValue = ref(0)
const watcherMessage = ref('')
watch(watchedValue, (newVal, oldVal) => {
  watcherMessage.value = `Value changed from ${oldVal} to ${newVal}`
})

function changeWatchedValue() {
  watchedValue.value++
}
</script>

<style scoped>
.reactivity {
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

input {
  padding: 8px;
  margin: 5px;
  border: 1px solid #ccc;
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