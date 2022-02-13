<script lang="ts" setup>
  import { CopyrightOutlined, GithubOutlined } from '@ant-design/icons-vue'

  const corpName = import.meta.env.VITE_APP_CORP_NAME
  const copyright = `${new Date().getFullYear()} ${corpName}`
</script>

<template>
  <div id="footer">
    <span> <CopyrightOutlined /> {{ copyright }} </span>
    <a target="_blank" href="https://github.com/liamwang/antd-vue-admin">
      <GithubOutlined />
    </a>
  </div>
</template>

<style lang="less">
  #footer {
    display: flex;
    gap: 10px;
    font-size: 14px;
    text-align: center;
    justify-content: center;
    margin: 48px 0 24px;
    color: rgba(0, 0, 0, 0.45);
    > a {
      color: inherit;
    }
  }
</style>
