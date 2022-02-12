type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'

interface RequestConfig {
  method?: HttpMethod
  data?: object
  params?: object
  silent?: boolean
}

interface IHttp {
  request: <D>(path: string, config: RequestConfig) => Promise<D | undefined>
  get: <D>(path: string, params?: object) => Promise<D | undefined>
  post: <D>(path: string, data: object) => Promise<D | undefined>
  put: <D>(path: string, data: object) => Promise<D | undefined>
  patch: <D>(path: string, data: object) => Promise<D | undefined>
  delete: <D>(path: string, params?: object) => Promise<D | undefined>
}

interface ApiResult<D> {
  code: number
  data: D | undefined
  message: string | undefined
}

interface AsyncState<T> {
  loading: boolean
  result?: T
  error?: Error
}

type AsyncResult<D> = Omit<AsyncState<D>, 'loading'>
