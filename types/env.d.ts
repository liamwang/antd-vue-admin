/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_PORT: number
  readonly VITE_BASE_API_URL: string
  readonly VITE_APP_NAME: string
  readonly VITE_APP_CORP_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
