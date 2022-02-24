import { reactive, ref, Ref } from 'vue'
import type { Target } from './useAsync'
import useAsync from './useAsync'

export type Service<TData, TParams extends any[]> = (...args: TParams) => Promise<TData>

export interface Result<TData, TParams extends any[]> {
  run: (...args: TParams) => Promise<TData>
  loading: Ref<boolean>
  params: Ref<TParams>
  data: Ref<TData>
}

function useRequest<TData extends object, TParams extends any[]>(
  service: Service<TData, TParams>,
  initial: TData,
  map?: (res: any) => Target<TData>,
) {
  const { run: runAsync, loading } = useAsync()
  const data = reactive(initial)
  const params = ref()
  function run(...args: Parameters<typeof service>) {
    params.value = args
    return runAsync(service(...args), data, map)
  }
  return { run, loading, params, data } as Result<TData, TParams>
}

export default useRequest
