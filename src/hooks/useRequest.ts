import { ref } from 'vue'

const useRequest = () => {
  const loading = ref(false)
  const result = ref<any>()
  const run = async (promise: Promise<any>, map?: (res: any) => any) => {
    loading.value = true
    try {
      let data = await promise
      if (map) {
        data = map(data)
      }
      result.value = data
      return result
    } catch (e) {
      return new Promise(() => {})
    } finally {
      loading.value = false
    }
  }
  return { run, loading, result }
}

export default useRequest
