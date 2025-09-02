<template>
  <div class="child-component">
    <h3>Child Component</h3>
    <p>Child Counter: {{ childCounter }}</p>
    <button @click="incrementChildCounter">Increment Child Counter</button>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  data() {
    return {
      childCounter: 0
    }
  },
  methods: {
    incrementChildCounter() {
      this.childCounter++
      console.log('Child: incrementChildCounter method called')
    }
  },
  // Lifecycle hooks
  beforeCreate() {
    console.log('Child: beforeCreate hook called')
  },
  created() {
    console.log('Child: created hook called')
  },
  beforeMount() {
    console.log('Child: beforeMount hook called')
  },
  mounted() {
    console.log('Child: mounted hook called')
  },
  beforeUpdate() {
    console.log('Child: beforeUpdate hook called')
  },
  updated() {
    console.log('Child: updated hook called')
  },
  beforeDestroy() {
    console.log('Child: beforeDestroy hook called')
  },
  destroyed() {
    console.log('Child: destroyed hook called')
  }
}
</script>

<style scoped>
.child-component {
  border: 2px solid #42b883;
  border-radius: 5px;
  padding: 15px;
  margin: 10px;
  background-color: #f0f8ff;
}
</style>