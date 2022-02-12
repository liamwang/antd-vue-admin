<script setup lang="ts">
import logo from '@/assets/logo.png'

defineProps<{
  collapsed: boolean
}>()

const appName = import.meta.env.VITE_APP_NAME
</script>

<template>
  <div
    :class="['logo', collapsed ? 'collapsed' : '']"
    @click="() => (location.href = '/')"
  >
    <img :src="logo" alt="Logo" />
    <span v-if="!collapsed">{{ appName }}</span>
  </div>
</template>

<style scoped lang="less">
.logo {
  display: flex;
  align-items: center;
  color: #fff;
  height: 60px;
  padding: 0 12px;
  font-size: 17px;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  &.collapsed {
    padding: 0;
    justify-content: center;
  }
  img {
    height: 32px;
    margin-right: 5px;
  }
}
</style>
