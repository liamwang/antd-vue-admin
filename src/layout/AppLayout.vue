<script lang="ts" setup>
import { ref } from 'vue'
import { Layout } from 'ant-design-vue'
import SiderMenu from './SiderMenu2'

const menuCollapsed = ref(false)
</script>

<template>
  <Layout class="AppLayout">
    <SiderMenu theme="dark" :collapsed="menuCollapsed" />
    <Layout>
      <Layout.Header />
      <RouterView v-slot="{ Component, route }">
        <transition name="fade" mode="out-in" appear>
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </RouterView>
    </Layout>
  </Layout>
</template>

<style lang="less">
.AppLayout {
  height: 100vh;
}
</style>
