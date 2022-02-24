<script lang="ts" setup>
  import { defineAsyncComponent } from 'vue'
  import type { AsyncComponentLoader } from 'vue'
  import Fallback from './Fallback.vue'

  const props = defineProps<{ loader: AsyncComponentLoader }>()

  const AsyncComponent = defineAsyncComponent({
    // loader: async() => {
    //   await new Promise(resolve => setTimeout(resolve, 2000))
    //   return await props.loader()
    // },
    loader: props.loader,
    loadingComponent: Fallback,
  })
</script>

<template>
  <AsyncComponent />
</template>
