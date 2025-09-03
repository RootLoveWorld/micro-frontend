<template>
  <div id="app">
    <div>
      <h1>Vue 2 Sub Application</h1>
    </div>
    <p>{{ message }}</p>
    <button @click="increment">Count: {{ count }}</button>
    
    <!-- Adding our ParentComponent -->
    <ParentComponent />
  </div>
</template>

<script>
import ParentComponent from './components/ParentComponent.vue'

export default {
  name: 'App',
  components: {
    ParentComponent
  },
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