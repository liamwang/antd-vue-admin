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

<style>
#app {
  height: 100%;
}
</style>
