import { ref, watchEffect } from 'vue'
import { Menu, Layout } from 'ant-design-vue'
import type { MenuTheme } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import menu from '@/config/menu'
import Logo from './Logo'

interface SiderMenuProps {
  theme: MenuTheme
  collapsed: boolean
}

export default (props: SiderMenuProps) => {
  const openKeys = ref<string[]>([])
  const selectedKey = ref('')

  const router = useRouter()

  const subMenuKeys = getSubMenuKeys(menu)

  watchEffect(() => {
    selectedKey.value = router.currentRoute.value.path
    !props.collapsed && setOpenKeysByPath(selectedKey.value)
  })

  function setOpenKeysByPath(path: string) {
    openKeys.value = subMenuKeys.filter((x) => path.startsWith(x))
  }

  function getSubMenuKeys(items: MenuItem[]) {
    let result: string[] = []
    for (const item of items.filter((x) => x.children)) {
      result.push(item.path)
      result = result.concat(getSubMenuKeys(item.children ?? []))
    }
    return result
  }

  function onOpenChange(keys: string[]) {
    const lastOpenKey = keys.find((k) => openKeys.value.indexOf(k) === -1)
    openKeys.value = lastOpenKey
      ? subMenuKeys.filter((x) => lastOpenKey.startsWith(x))
      : keys
  }

  function onSelect({ key }: { key: string }) {
    selectedKey.value = key
    router.push(key)
  }

  function renderMenu(items: MenuItem[]) {
    const menuItems = items.filter((item) => !item.hide)
    return menuItems.map((item) => {
      return item.children ? (
        <Menu.SubMenu key={item.path} title={item.name} icon={item.icon}>
          {renderMenu(item.children)}
        </Menu.SubMenu>
      ) : (
        <Menu.Item key={item.path} icon={item.icon}>
          {item.name}
        </Menu.Item>
      )
    })
  }

  return (
    <Layout.Sider
      theme={props.theme}
      collapsible
      collapsed={props.collapsed}
      trigger={null}
      width={210}
      collapsedWidth={48}
    >
      <Logo collapsed={props.collapsed} />
      <Menu
        mode="inline"
        theme={props.theme}
        inlineIndent={16}
        openKeys={openKeys.value}
        // @ts-ignore
        onOpenChange={onOpenChange}
        selectedKeys={[selectedKey]}
        // @ts-ignore
        onSelect={onSelect}
      >
        {renderMenu(menu)}
      </Menu>
    </Layout.Sider>
  )
}
