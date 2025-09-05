// Type definitions for Qiankun global variables
export {};

declare global {
  interface Window {
    __POWERED_BY_QIANKUN__: boolean;
    __INJECTED_PUBLIC_PATH_BY_QIANKUN__: string;
  }
}

// Type definitions for Svelte component
declare module '*.svelte' {
  import type { SvelteComponent } from 'svelte';
  const component: typeof SvelteComponent;
  export default component;
}