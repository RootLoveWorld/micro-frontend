import './public-path.js'
import Vue from 'vue'
import App from './App.vue'
import './index.css'

let instance: Vue | null = null

// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  // 独立运行
  instance = new Vue({
    render: (h: any) => h(App),
  }).$mount('#app')
}

// @ts-ignore
export async function bootstrap(props: any) {
  console.log('[vue2] bootstrap', props)
  return Promise.resolve()
}

// @ts-ignore
export async function mount(props: any) {
  console.log('[vue2] mount', props)
  
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
  instance = new Vue({
    render: (h: any) => h(App),
  }).$mount(appElement)
  
  return Promise.resolve()
}

// @ts-ignore
export async function unmount(props: any) {
  console.log('[vue2] unmount', props)
  if (instance) {
    instance.$destroy()
    instance.$el.innerHTML = ''
    instance = null
  }
  return Promise.resolve()
}

// For webpack module export
export default instance