import { CopyrightOutlined, GithubOutlined } from '@ant-design/icons-vue'

const corpName = import.meta.env.VITE_APP_CORP_NAME
const copyright = `${new Date().getFullYear()} ${corpName}`

export default () => (
  <div class="footer">
    <span>
      <CopyrightOutlined /> {copyright}
    </span>
    <a target="_blank" href="https://github.com/liamwang/antd-vue-admin">
      <GithubOutlined />
    </a>
  </div>
)
