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
import { defineComponent, ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

export default defineComponent({
  name: 'ParentComponent',
  components: {
    ChildComponent
  },
  setup() {
    // Reactive data
    const parentCounter = ref(0)
    const showChild = ref(true)

    // Methods
    const incrementParentCounter = () => {
      parentCounter.value++
      console.log('Parent: incrementParentCounter method called')
    }

    const toggleChild = () => {
      showChild.value = !showChild.value
      console.log('Parent: toggleChild method called, showChild:', showChild.value)
    }

    // Lifecycle hooks
    console.log('Parent: setup() function called')

    return {
      parentCounter,
      showChild,
      incrementParentCounter,
      toggleChild
    }
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
  beforeUnmount() {
    console.log('Parent: beforeUnmount hook called')
  },
  unmounted() {
    console.log('Parent: unmounted hook called')
  }
})
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