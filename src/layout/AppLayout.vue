<script lang="ts" setup>
import { ref } from 'vue'
import { Layout } from 'ant-design-vue'
import SiderMenu from './SiderMenu'
import MenuTrigger from './MenuTrigger.vue'

const menuCollapsed = ref(false)
</script>

<template>
  <Layout class="AppLayout">
    <SiderMenu theme="dark" :collapsed="menuCollapsed" />
    <Layout>
      <Layout.Header>
        <MenuTrigger v-model:collapsed="menuCollapsed" />
      </Layout.Header>
      <div class="AppLayout-page">
        <RouterView v-slot="{ Component, route }">
          <transition name="fade" mode="out-in" appear>
            <component :is="Component" :key="route.fullPath" />
          </transition>
        </RouterView>
      </div>
    </Layout>
  </Layout>
</template>

<style lang="less">
.AppLayout {
  height: 100vh;
  .ant-layout-sider {
    height: 100vh;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background: hsla(0, 0%, 100%, 0.2);
      border-radius: 2px;
      box-shadow: inset 0 0 5px hsl(0deg 0% 100% / 5%);
    }
    &::-webkit-scrollbar-track {
      background: hsla(0, 0%, 100%, 0.15);
      box-shadow: inset 0 0 5px rgb(37 37 37 / 5%);
    }
  }
  .ant-layout-header {
    height: 50px;
    line-height: 50px;
    padding: 0;
    color: inherit;
    background: #fff;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  }
  &-page {
    height: calc(100vh - 50px);
    overflow: auto;
  }
}
</style>
