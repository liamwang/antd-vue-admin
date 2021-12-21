import type Menu from '../models/Menu'

import {
  UserOutlined,
  MenuOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons-vue'

const Noop = () => import('../pages/home/noop.vue')

export const homeMenu: Menu = {
  name: '首页',
  path: '/home',
  icon: <UserOutlined />,
  component: () => import('../pages/home/index.vue'),
}

const menu: Menu[] = [
  homeMenu,
  {
    name: '多级菜单',
    path: '/menu',
    icon: <MenuOutlined />,
    children: [
      {
        name: '菜单一',
        path: '/menu-1',
        component: Noop,
      },
      {
        name: '子菜单',
        path: '/menu-1-menu',
        children: [
          {
            name: '菜单一',
            path: '/menu-1-menu-1',
            component: Noop,
          },
          {
            name: '菜单二',
            path: '/menu-1-menu-2',
            component: Noop,
          },
        ],
      },
    ],
  },
  {
    name: '关于',
    path: '/home2',
    icon: <InfoCircleOutlined />,
    component: () => import('../pages/about/index.vue'),
  },
]

export default menu
