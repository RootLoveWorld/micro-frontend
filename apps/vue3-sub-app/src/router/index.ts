import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CompositionApi from '../views/CompositionApi.vue'
import Reactivity from '../views/Reactivity.vue'
import Teleport from '../views/Teleport.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/composition-api', component: CompositionApi },
  { path: '/reactivity', component: Reactivity },
  { path: '/teleport', component: Teleport }
]

// Use a dynamic base path for micro-frontend compatibility
const basePath = window.__POWERED_BY_QIANKUN__ ? '/vue3' : '/'

const router = createRouter({
  history: createWebHistory(basePath),
  routes
})

// Handle router navigation in micro-frontend context
router.beforeEach((to: any, from: any, next: any) => {
  // In qiankun context, we might need to adjust the path
  if (window.__POWERED_BY_QIANKUN__) {
    console.log('Navigating in qiankun context:', to.path)
  }
  next()
})

export default router