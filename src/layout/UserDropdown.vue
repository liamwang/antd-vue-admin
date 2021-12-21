<template>
  <Dropdown placement="bottomLeft" overlayClassName="UserDropdown-overlay">
    <span class="action UserDropdown-trigger">
      <img class="avatar" :src="userInfo.avatar || defaultAvatar" />
      <span>{{userInfo.displayName}}</span>
    </span>
    <template #overlay>
      <Menu>
        <MenuItem>
        <KeyOutlined /><span>修改密码</span>
        </MenuItem>
        <MenuDivider />
        <MenuItem>
        <PoweroffOutlined /><span>退出系统</span>
        </MenuItem>
      </Menu>
    </template>
  </Dropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Dropdown, Menu } from 'ant-design-vue'
import { PoweroffOutlined, KeyOutlined } from '@ant-design/icons-vue'

import { userInfo } from '../store/app'
import defaultAvatar from '../assets/avatar.png'

export default defineComponent({
  components: {
    Dropdown,
    Menu,
    MenuItem: Menu.Item,
    MenuDivider: Menu.Divider,
    PoweroffOutlined,
    KeyOutlined,
  },
  setup() {
    return {
      userInfo,
      defaultAvatar,
    }
  },
})
</script>

<style lang="less">
.UserDropdown-trigger {
  .avatar {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    border-radius: 50%;
  }
}
.UserDropdown-overlay {
  min-width: 142px;
  .ant-dropdown-menu-item {
    display: flex;
    align-items: center;
  }
  .anticon {
    margin-right: 10px;
  }
}
</style>
