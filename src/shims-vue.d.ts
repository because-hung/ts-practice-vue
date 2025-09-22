// src/shims-vue.d.ts
// TypeScript 需要型別宣告才能 import .vue
// 這告訴 TypeScript：所有 .vue 檔案都是 DefineComponent
// 這樣 TS 就能正確 import .vue 檔案

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}