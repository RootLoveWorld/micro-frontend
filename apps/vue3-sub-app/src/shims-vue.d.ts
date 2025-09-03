declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Ensure Vue types are properly recognized
declare module 'vue' {
  import type { DefineComponent } from 'vue'
  export const createApp: (rootComponent: any, rootProps?: any) => any
  export const defineComponent: (options: any) => DefineComponent
  export const ref: <T>(value: T) => { value: T }
  export const reactive: <T extends object>(target: T) => T
  // Add other Vue exports as needed
}