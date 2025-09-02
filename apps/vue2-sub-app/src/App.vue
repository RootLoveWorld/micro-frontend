<template>
  <div id="app">
    <div>
      <img alt="Vue logo" src="./assets/logo.png" width="100">
    </div>
    <h1>Vue 2 Sub Application</h1>
    <p>{{ message }}</p>
    <button @click="increment">Count: {{ count }}</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  data() {
    return {
      message: 'Hello Vue 2 + TypeScript + Vite 5!',
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
})
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