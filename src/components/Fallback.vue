<script lang="ts" setup>
  import { Spin as ASpin } from 'ant-design-vue'
</script>

<template>
  <div class="fallback">
    <ASpin size="large" />
  </div>
</template>

<style scoped>
  .fallback {
    height: 100%;
    padding-bottom: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
