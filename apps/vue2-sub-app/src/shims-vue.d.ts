declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

// Ensure Vue types are properly recognized
declare module 'vue' {
  import Vue from 'vue'
  export default Vue
  export const createApp: (options: any) => any
}