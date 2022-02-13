<script setup lang="ts">
  import { homePath } from '@/config/const'

  defineProps<{
    collapsed: boolean
  }>()

  const appName = import.meta.env.VITE_APP_NAME

  const onClick = () => {
    location.href = homePath
  }
</script>

<template>
  <div :class="['logo', collapsed ? 'collapsed' : '']" @click="onClick">
    <img src="/logo.svg" alt="Logo" />
    <h1 v-if="!collapsed">{{ appName }}</h1>
  </div>
</template>
