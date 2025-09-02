<template>
  <div id="app">
    <div>
      <img alt="Vue logo" src="./assets/logo.png" width="100">
    </div>
    <h1>Vue 3 Sub Application</h1>
    <p>{{ message }}</p>
    <button @click="increment">Count: {{ count }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref('Hello Vue 3 + TypeScript + Vite 7!')
const count = ref(0)

function increment() {
  count.value++
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #f8f8f8;
  cursor: pointer;
}
</style>