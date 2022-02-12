import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'

export default ({
  collapsed = false,
  setCollapsed,
}: {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}) => {
  return (
    <div onClick={() => setCollapsed(!collapsed)}>
      {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </div>
  )
}
