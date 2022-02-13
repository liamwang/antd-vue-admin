<script lang="ts" setup>
  import { onBeforeMount } from 'vue'
  import { ConfigProvider } from 'ant-design-vue'
  import zhCN from 'ant-design-vue/es/locale/zh_CN'
  import useAuth from '@/hooks/useAuth'

  onBeforeMount(() => {
    const { validate } = useAuth()
    validate()
  })
</script>

<template>
  <ConfigProvider :locale="zhCN">
    <RouterView />
  </ConfigProvider>
</template>

<style lang="less">
  #app {
    height: 100%;
  }

  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.15);
    border-radius: 0;
    box-shadow: inset 0 0 5px rgb(0 21 41 / 5%);
  }
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 0 5px rgb(0 21 41 / 5%);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.25s ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
