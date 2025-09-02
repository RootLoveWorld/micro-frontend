import Vue from 'vue'
import App from './App.vue'
import './index.css'

let instance: Vue | null = null

// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  // 独立运行
  instance = new Vue({
    render: (h) => h(App),
  }).$mount('#app')
}

// @ts-ignore
export async function bootstrap() {
  console.log('vue2 app bootstraped')
}

// @ts-ignore
export async function mount(props: any) {
  console.log('props from main app', props)
  instance = new Vue({
    render: (h) => h(App),
  }).$mount(props.container ? props.container.querySelector('#app') : '#app')
}

// @ts-ignore
export async function unmount() {
  instance && instance.$destroy()
  instance = null
}