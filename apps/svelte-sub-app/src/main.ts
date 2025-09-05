import './public-path.js';
import App from './App.svelte';
import './global.d.ts';
import { mount as svelteMount } from 'svelte';

let app: any = null;
let root: HTMLElement | null = null;

// For Qiankun compatibility
export async function bootstrap() {
  console.log('Svelte app bootstraped');
}

export async function mount(props: any) {
  console.log('Svelte app mounted');
  // Use the container provided by Qiankun directly
  root = props.container ? props.container.querySelector('#app') : document.getElementById('app');
  
  if (root) {
    app = svelteMount(App, {
      target: root,
    });
  }
  return app;
}

export async function unmount() {
  console.log('Svelte app unmounted');
  if (app && typeof app.$destroy === 'function') {
    app.$destroy();
    app = null;
  }
  root = null;
}

// For standalone development
if (!(window as any).__POWERED_BY_QIANKUN__) {
  const appRoot = document.getElementById('app');
  if (appRoot) {
    app = svelteMount(App, {
      target: appRoot,
    });
  }
}

export { app };