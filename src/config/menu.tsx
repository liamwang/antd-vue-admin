import { HomeOutlined, CrownOutlined, TabletOutlined } from '@ant-design/icons-vue'
import { homePath } from './const'

const menu: MenuItem[] = [
  {
    name: '首页',
    path: homePath,
    icon: <HomeOutlined />,
    page: () => import('@/pages/home/index.vue'),
  },
  {
    name: '示例页面一',
    path: '/demo1',
    icon: <CrownOutlined />,
    page: () => import('@/pages/home/noop.vue'),
  },
  {
    name: '菜单一',
    path: '/menu1',
    icon: <TabletOutlined />,
    page: () => import('@/pages/home/noop.vue'),
    children: [
      {
        name: '页面三',
        path: '/menu1/page3',
        page: () => import('@/pages/home/noop.vue'),
      },
    ],
  },
  {
    name: '菜单二',
    path: '/menu2',
    icon: <TabletOutlined />,
    children: [
      {
        name: '子菜单',
        path: '/menu2/submenu',
        children: [
          {
            name: '页面五',
            path: '/menu2/submenu/page5',
            page: () => import('@/pages/home/noop.vue'),
          },
        ],
      },
      {
        name: '页面四',
        path: '/menu2/page4',
        page: () => import('@/pages/home/noop.vue'),
      },
    ],
  },
]

export default menu
