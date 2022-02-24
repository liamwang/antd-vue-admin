import type { Ref, UnwrapNestedRefs, UnwrapRef } from 'vue'
import { isRef, ref } from 'vue'

export type Target<T> = Ref<UnwrapRef<T>> | UnwrapNestedRefs<T>

const useAsync = () => {
  const loading = ref(false)
  const run = async <T = any>(
    promise: Promise<T>,
    target?: Target<T>,
    map?: (res: any) => Target<T>,
  ) => {
    loading.value = true
    try {
      let data: any = await promise
      if (map) data = map(data)
      if (!target) return data
      if (Array.isArray(target)) {
        target.length = 0
        target.push(data)
      } else if (isRef(target)) {
        target.value = data
      } else if (typeof target == 'object') {
        Object.assign(target, data)
      } else {
        throw new TypeError('The target type is not supported.')
      }
      return data
    } catch (e) {
      return new Promise(() => {})
    } finally {
      loading.value = false
    }
  }
  return { run, loading }
}

export default useAsync
