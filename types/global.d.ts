import type {
  ComponentPublicInstance,
  FunctionalComponent,
  VNodeChild,
  PropType as VuePropType,
} from 'vue'

import type { RouteComponent } from 'vue-router'

declare global {
  type PropType<T> = VuePropType<T>
  type VueNode = VNodeChild | JSX.Element
  type Lazy<T> = () => Promise<T>

  interface MenuItem {
    name: string
    path: string
    icon?: VueNode
    page?: Lazy<RouteComponent>
    roles?: number[]
    hidden?: boolean
    children?: MenuItem[]
  }

  interface AuthData {
    accessToken: string
    expiresAt: number
    refreshToken: string
    userInfo: UserInfo
  }

  interface UserInfo {
    id: number
    name: string
    avatar: string
    deptId: number
    roles: number[]
  }

  interface PageQuery {
    page: number
    size: number
    keyword?: string
  }

  interface PageResult<T = any> {
    page: number
    size: number
    total: number
    items: T[]
  }
}

declare module 'vue' {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>

  export interface GlobalUseComponents {
    RouterView: typeof import('vue-router')['RouterView']
  }
}
