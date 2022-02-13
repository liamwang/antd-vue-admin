import { Breadcrumb } from 'ant-design-vue'
import menu from '@/config/menu'
import { useRoute, RouterLink } from 'vue-router'
import { homePath } from './../config/const'

const getPathNameMap = (menuItems: MenuItem[]) => {
  let result: Record<string, string> = {}
  for (const item of menuItems) {
    result[item.path] = item.name
    if (item.children) {
      result = { ...result, ...getPathNameMap(item.children) }
    }
  }
  return result
}

const PagePath = () => {
  const { path } = useRoute()
  const pathNameMap = getPathNameMap(menu)
  const segments = path.split('/').filter((i) => i)

  let breadcrumbItems = segments.map((_, index) => {
    const url = `/${segments.slice(0, index + 1).join('/')}`
    return (
      <Breadcrumb.Item key={url}>
        <RouterLink to={url}>{pathNameMap[url]}</RouterLink>
      </Breadcrumb.Item>
    )
  })

  breadcrumbItems = [
    <Breadcrumb.Item key={homePath}>
      <RouterLink to={homePath}>首页</RouterLink>
    </Breadcrumb.Item>,
  ].concat(breadcrumbItems)

  return <Breadcrumb>{breadcrumbItems}</Breadcrumb>
}

export default PagePath
