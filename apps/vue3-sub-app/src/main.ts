import './public-path.js'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'
import './index.css'

let app: any = null
let root: any = null

// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  // 独立运行
  app = createApp(App)
  app.use(createPinia())
  app.use(router)
  app.mount('#app')
}

// @ts-ignore
export async function bootstrap() {
  console.log('vue3 app bootstraped')
}

// @ts-ignore
export async function mount(props: any) {
  console.log('props from main app', props)
  
  // Use the container provided by qiankun
  const container = props.container ? props.container : document.getElementById('app')
  
  // If no container exists, create one
  if (!container) {
    const div = document.createElement('div')
    div.id = 'app'
    document.body.appendChild(div)
  }
  
  app = createApp(App)
  app.use(createPinia())
  app.use(router)
  
  // Store the root instance for proper unmounting
  root = app.mount(container || '#app')
}

// @ts-ignore
export async function unmount() {
  if (app && root) {
    app.unmount()
  }
  app = null
  root = null
}

// For webpack module export
export default app