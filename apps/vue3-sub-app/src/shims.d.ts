declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue-router' {
  import type { RouteRecordRaw, Router } from 'vue-router'
  export const createRouter: (options: any) => Router
  export const createWebHistory: (base?: string) => any
  export const createWebHashHistory: (base?: string) => any
}

// Declare qiankun global variables
interface Window {
  __POWERED_BY_QIANKUN__: boolean;
  __INJECTED_PUBLIC_PATH_BY_QIANKUN__: string;
}