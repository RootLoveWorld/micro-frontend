<template>
  <div class="home">
    <h1>Vue 3 Features Demo</h1>
    <p>Welcome to the Vue 3 sub-application showcasing core features</p>
    
    <div class="navigation">
      <h2>Explore Vue 3 Features:</h2>
      <ul>
        <li><router-link to="/composition-api">Composition API</router-link></li>
        <li><router-link to="/reactivity">Reactivity System</router-link></li>
        <li><router-link to="/teleport">Teleport Component</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// This is the home page component
</script>

<style scoped>
.home {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.navigation ul {
  list-style-type: none;
  padding: 0;
}

.navigation li {
  margin: 10px 0;
}

.navigation a {
  display: inline-block;
  padding: 10px 20px;
  background-color: #42b883;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.navigation a:hover {
  background-color: #359c6d;
}
</style>