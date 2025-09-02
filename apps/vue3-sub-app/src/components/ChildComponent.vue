<template>
  <div class="child-component">
    <h3>Child Component</h3>
    <p>Child Counter: {{ childCounter }}</p>
    <button @click="incrementChildCounter">Increment Child Counter</button>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ChildComponent',
  setup() {
    // Reactive data
    const childCounter = ref(0)

    // Methods
    const incrementChildCounter = () => {
      childCounter.value++
      console.log('Child: incrementChildCounter method called')
    }

    // Lifecycle hooks
    console.log('Child: setup() function called')

    return {
      childCounter,
      incrementChildCounter
    }
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
  beforeUnmount() {
    console.log('Child: beforeUnmount hook called')
  },
  unmounted() {
    console.log('Child: unmounted hook called')
  }
})
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