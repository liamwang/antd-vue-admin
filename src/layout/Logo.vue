<script setup lang="ts">
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
    <img src="/logo.svg" alt="Logo" />
    <h1 v-if="!collapsed">{{ appName }}</h1>
  </div>
</template>
