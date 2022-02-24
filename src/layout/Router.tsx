import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { homePath, loginPath } from '@/config/const'
import Async from '@/components/Async.vue'
import menu from '@/config/menu'

const Login = () => import('@/pages/login/index.vue')
const Layout = () => import('@/layout/Layout.vue')

const menuRoutes: RouteRecordRaw[] = []

const mapRoute = (menuItem: MenuItem) => {
  if (menuItem.children) {
    menuRoutes.push({
      path: menuItem.path,
      redirect: menuItem.children[0].path,
    })
    for (const item of menuItem.children) mapRoute(item)
  } else if (menuItem.page) {
    menuRoutes.push({
      path: menuItem.path,
      component: <Async loader={menuItem.page} />,
    })
  }
}

menu.forEach(mapRoute)

const routes: RouteRecordRaw[] = [
  {
    path: loginPath,
    meta: { outerKey: 'login' },
    component: <Async loader={Login} />,
  },
  {
    path: homePath,
    meta: { outerKey: 'layout' },
    component: <Async loader={Layout} />,
    children: menuRoutes,
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router
