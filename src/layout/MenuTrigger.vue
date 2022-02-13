<script lang="ts" setup>
  import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
  import NavItem from './NavItem.vue'

  defineProps<{
    collapsed: boolean
  }>()

  const emit = defineEmits<{
    (e: 'update:collapsed', v: boolean): void
  }>()
</script>

<template>
  <NavItem class="trigger" @click="emit('update:collapsed', !collapsed)">
    <MenuUnfoldOutlined v-if="collapsed" />
    <MenuFoldOutlined v-else />
  </NavItem>
</template>

<style lang="less" scoped></style>
