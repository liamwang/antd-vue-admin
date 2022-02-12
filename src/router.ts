import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import menu from '@/config/menu'
import { homePath, loginPath } from './config/const'

const Layout = () => import('@/layout/AppLayout.vue')
const Login = () => import('@/pages/login/index.vue')

const menuRoutes: RouteRecordRaw[] = []

const mapRoute = (menuItem: MenuItem) => {
  if (menuItem.children) {
    menuRoutes.push({
      path: menuItem.path,
      redirect: menuItem.children[0].path,
    })
    for (const item of menuItem.children) {
      mapRoute(item)
    }
  } else {
    menuRoutes.push({
      path: menuItem.path,
      component: menuItem.page!,
    })
  }
}

menu.forEach(mapRoute)

const routes: RouteRecordRaw[] = [
  {
    path: loginPath,
    component: Login,
  },
  {
    path: homePath,
    component: Layout,
    children: menuRoutes,
  },
]

const router = createRouter({
  history: createWebHashHistory('/'),
  routes: routes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router
