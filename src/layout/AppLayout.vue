<script lang="ts" setup>
  import { ref } from 'vue'
  import { Layout } from 'ant-design-vue'
  import SiderMenu from './SiderMenu'
  import MenuTrigger from './MenuTrigger.vue'
  import PagePath from './PagePath'
  import UserActions from './UserActions'

  const menuCollapsed = ref(false)
</script>

<template>
  <Layout class="AppLayout">
    <SiderMenu theme="dark" :collapsed="menuCollapsed" />
    <Layout>
      <Layout.Header>
        <MenuTrigger v-model:collapsed="menuCollapsed" />
        <PagePath />
        <UserActions />
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
  @headerHeight: 48px;
  .AppLayout {
    height: 100vh;
    background: #f5f7f9;
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

      .logo {
        display: flex;
        align-items: center;
        height: 60px;
        padding: 0 8px;
        cursor: pointer;
        overflow: hidden;
        white-space: nowrap;
        &.collapsed {
          padding: 0;
          justify-content: center;
        }
        img {
          height: 28px;
          margin-right: 8px;
        }
        h1 {
          margin: 0;
          font-size: 18px;
          color: #fff;
        }
      }

      .ant-menu {
        .anticon {
          min-width: 16px;
          font-size: 16px;
          margin-top: -1px;
        }
        .ant-menu-item {
          height: 46px;
          line-height: 46px;
        }
        .ant-menu-title-content {
          margin-left: 10px;
        }
      }
    }

    .ant-layout-header {
      display: flex;
      align-items: center;
      height: @headerHeight;
      padding: 0 8px 0 0;
      color: inherit;
      background: #fff;
      border-bottom: 1px solid #eee;

      .nav-item {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 15px;
        &:hover {
          cursor: pointer;
          background: #f5f7f9;
        }
        .anticon {
          font-size: 16px;
          color: rgba(0, 0, 0, 0.8);
        }
      }

      .ant-breadcrumb {
        margin: 0 6px;
        flex: 1;
      }
    }

    &-page {
      height: calc(100vh - @headerHeight);
      overflow: auto;
    }
  }
</style>
