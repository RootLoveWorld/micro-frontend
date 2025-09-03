import './public-path.js'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

let app: any = null

// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  // 独立运行
  app = createApp(App)
  app.mount('#app')
}

// @ts-ignore
export async function bootstrap() {
  console.log('vue3 app bootstraped')
}

// @ts-ignore
export async function mount(props: any) {
  console.log('props from main app', props)
  
  // Use the container provided by qiankun or fallback to #app
  const container = props.container ? props.container : document.querySelector('#app')
  
  // Create app element if it doesn't exist in the container
  let appElement = container.querySelector('#app')
  if (!appElement) {
    appElement = document.createElement('div')
    appElement.id = 'app'
    container.appendChild(appElement)
  }
  
  // Mount the Vue instance to the app element
  app = createApp(App)
  app.mount(appElement)
}

// @ts-ignore
export async function unmount() {
  app && app.unmount()
  app = null
}

// For webpack module export
export default app