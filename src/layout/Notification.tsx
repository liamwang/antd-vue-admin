import { Empty, Popover } from 'ant-design-vue'
import { BellOutlined } from '@ant-design/icons-vue'

export default () => {
  const content = <Empty description="暂无通知" />
  return (
    <Popover content={content} trigger="click" placement="bottomRight">
      <span class="app-layout-action">
        <BellOutlined />
      </span>
    </Popover>
  )
}
