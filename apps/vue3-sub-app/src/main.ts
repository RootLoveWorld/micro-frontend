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
  app = createApp(App)
  app.mount(props.container ? props.container.querySelector('#app') : '#app')
}

// @ts-ignore
export async function unmount() {
  app && app.unmount()
  app = null
}