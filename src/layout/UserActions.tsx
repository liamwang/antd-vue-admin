import { Menu, Dropdown } from 'ant-design-vue'
import { KeyOutlined, PoweroffOutlined } from '@ant-design/icons-vue'
import useAuth from '@/hooks/useAuth'
import Notification from './Notification'
import NavItem from './NavItem.vue'

export default () => {
  const { auth, logout } = useAuth()

  const handleMenuClick = ({ key }: any) => {
    if (key === 'logout') {
      logout()
    }
  }

  const menu = (
    <Menu style={{ minWidth: '135px' }} onClick={handleMenuClick}>
      <Menu.Item key="changepwd">
        <KeyOutlined /> 修改密码
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">
        <PoweroffOutlined /> 退出系统
      </Menu.Item>
    </Menu>
  )

  return (
    <>
      <Notification />
      <Dropdown overlay={menu} placement="bottomRight">
        <NavItem>
          <img
            style={{ width: '24px', height: '24px' }}
            src="/assets/avatar.png"
          />
          <span style={{ marginLeft: '10px' }}>{auth?.userInfo?.name}</span>
        </NavItem>
      </Dropdown>
    </>
  )
}
