<template>
  <div class="parent-component">
    <h2>Parent Component</h2>
    <p>Parent Counter: {{ parentCounter }}</p>
    <button @click="incrementParentCounter">Increment Parent Counter</button>
    <button @click="toggleChild">Toggle Child Component</button>
    
    <!-- Conditionally render the child component -->
    <ChildComponent v-if="showChild" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'

export default {
  name: 'ParentComponent',
  components: {
    ChildComponent
  },
  data() {
    return {
      parentCounter: 0,
      showChild: true
    }
  },
  methods: {
    incrementParentCounter() {
      this.parentCounter++
      console.log('Parent: incrementParentCounter method called')
    },
    toggleChild() {
      this.showChild = !this.showChild
      console.log('Parent: toggleChild method called, showChild:', this.showChild)
    }
  },
  // Lifecycle hooks
  beforeCreate() {
    console.log('Parent: beforeCreate hook called')
  },
  created() {
    console.log('Parent: created hook called')
  },
  beforeMount() {
    console.log('Parent: beforeMount hook called')
  },
  mounted() {
    console.log('Parent: mounted hook called')
  },
  beforeUpdate() {
    console.log('Parent: beforeUpdate hook called')
  },
  updated() {
    console.log('Parent: updated hook called')
  },
  beforeDestroy() {
    console.log('Parent: beforeDestroy hook called')
  },
  destroyed() {
    console.log('Parent: destroyed hook called')
  }
}
</script>

<style scoped>
.parent-component {
  border: 2px solid #3498db;
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
  background-color: #fff8dc;
}
</style>