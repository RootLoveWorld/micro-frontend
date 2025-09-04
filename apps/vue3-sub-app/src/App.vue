<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/composition-api">Composition API</router-link> |
      <router-link to="/reactivity">Reactivity</router-link> |
      <router-link to="/teleport">Teleport</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
// Main app component - routing is handled by router-view
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b883;
}
</style>