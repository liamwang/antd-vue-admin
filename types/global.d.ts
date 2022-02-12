import type {
  VNode,
  VNodeChild,
  Component,
  FunctionalComponent,
  ComponentPublicInstance,
  PropType as VuePropType,
} from 'vue'

declare global {
  type PropType<T> = VuePropType<T>
  type VueNode = VNodeChild | JSX.Element

  type Lazy<T> = () => Promise<T>

  interface MenuItem {
    name: string
    path: string
    icon?: VueNode
    page?: Lazy<Component>
    hide?: boolean
    children?: MenuItem[]
  }

  interface AuthData {
    accessToken: string
    expiresAt: number
    refreshToken: string
    userInfo: UserInfo
  }

  interface UserInfo {
    id: number | string
    name: string
    avatar: string
  }

  interface LoginForm {
    username: string
    password: string
  }
}

declare module 'vue' {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>
}
