<template>
  <div class="teleport">
    <h1>Teleport Component Example</h1>
    <p>Teleport allows you to render a component's template to a DOM node that exists outside the DOM hierarchy of the parent component.</p>
    
    <div class="example">
      <h2>Modal Example</h2>
      <button @click="openModal = true">Open Modal</button>
      
      <Teleport to="body" v-if="openModal">
        <div class="modal">
          <div class="modal-content">
            <span class="close" @click="openModal = false">&times;</span>
            <h2>Modal Title</h2>
            <p>This modal is teleported to the body element!</p>
            <p>Check the DOM structure - this element is not a child of the current component.</p>
            <button @click="openModal = false">Close</button>
          </div>
        </div>
      </Teleport>
    </div>
    
    <div class="example">
      <h2>Teleport to Specific Element</h2>
      <button @click="showMessage = true">Show Message</button>
      
      <!-- Only teleport if the target exists -->
      <Teleport to="#teleport-target" v-if="showMessage && teleportTargetExists">
        <div class="message">
          <p>This message is teleported to a specific target element!</p>
          <button @click="showMessage = false">Hide</button>
        </div>
      </Teleport>
      
      <!-- Fallback: show message in place if target doesn't exist -->
      <div v-if="showMessage && !teleportTargetExists" class="message">
        <p>This message would be teleported, but the target element doesn't exist.</p>
        <button @click="showMessage = false">Hide</button>
      </div>
    </div>
    
    <!-- Target element for teleport -->
    <div id="teleport-target" class="teleport-target">
      <p>Teleport target area:</p>
    </div>
    
    <div class="navigation">
      <router-link to="/">&larr; Back to Home</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const openModal = ref(false)
const showMessage = ref(false)
const teleportTargetExists = ref(false)

// Check if teleport target exists
onMounted(() => {
  teleportTargetExists.value = !!document.getElementById('teleport-target')
})

// Clean up teleport components when navigating away
onBeforeUnmount(() => {
  // Close any open teleport components to ensure proper cleanup
  openModal.value = false
  showMessage.value = false
  
  // Allow time for the DOM to update before leaving
  setTimeout(() => {
    // Any additional cleanup can go here if needed
  }, 0)
})
</script>

<style scoped>
.teleport {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.example {
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

/* Modal styles */
.modal {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
  border-radius: 4px;
  position: relative;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 0;
}

.close:hover {
  color: black;
}

/* Teleport target styles */
.teleport-target {
  margin: 20px 0;
  padding: 15px;
  border: 2px dashed #42b883;
  border-radius: 4px;
  min-height: 100px;
}

.message {
  margin: 10px 0;
  padding: 10px;
  background-color: #e8f5e9;
  border: 1px solid #42b883;
  border-radius: 4px;
}

.navigation {
  margin-top: 30px;
}

.navigation a {
  color: #42b883;
  text-decoration: none;
}
</style>