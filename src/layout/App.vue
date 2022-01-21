<template>
  <ConfigProvider :locale="locale">
    <RouterView />
  </ConfigProvider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'

export default defineComponent({
  name: 'App',
  components: { ConfigProvider },
  setup() {
    return {
      locale: zhCN,
    }
  },
})
</script>

<style>
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
</style>
