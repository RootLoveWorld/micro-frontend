<template>
  <div class="pinia-example">
    <h2>Pinia Store Example</h2>
    <p>Name: {{ counterStore.name }}</p>
    <p>Count: {{ counterStore.count }}</p>
    <p>Double Count: {{ counterStore.doubleCount }}</p>
    <button @click="counterStore.increment">Increment</button>
    <button @click="counterStore.decrement">Decrement</button>
    <button @click="changeName">Change Name</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'

const counterStore = useCounterStore()

function changeName() {
  counterStore.name = 'Pinia User'
}
</script>

<style scoped>
.pinia-example {
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
</style>