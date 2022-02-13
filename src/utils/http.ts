import { message as Message } from 'ant-design-vue'
import { trimRight, queryString } from './string'
import { getAuthData, clear } from '@/store/local'

const errorMap: Record<string, string> = {
  '400': '错误请求',
  '401': '请重新登录',
  '403': '权限不足，禁止访问',
  '404': '资源不存在',
  '500': '服务器异常',
  default: '网络异常',
}

export class RequestError extends Error {
  code: number
  handled: boolean
  constructor(code: number, message?: string) {
    super(message || errorMap[code] || errorMap['default'])
    this.name = 'RequestError'
    this.code = code
    this.handled = false
  }

  handleErrorDefault(silent = false) {
    if (this.code === 401) {
      clear()
      location.reload()
    }
    !silent && Message.error(this.message)
    this.handled = true
  }
}

class Http implements IHttp {
  private baseUrl: string
  private constructor(baseUrl: string) {
    this.baseUrl = trimRight(baseUrl, '/')
  }

  private static container: Record<string, Http> = {}

  static getInstance(baseUrl: string): Http {
    if (!this.container[baseUrl]) {
      this.container[baseUrl] = new Http(baseUrl)
    }
    return this.container[baseUrl]
  }

  async request<D>(url: string, config: RequestConfig = {}): Promise<D | undefined> {
    let fullUrl = /^((https?:)|\/)/.test(url) ? url : `${this.baseUrl}/${url}`
    if (config.params && Object.keys(config.params).length > 0) {
      fullUrl += '?' + queryString(config.params)
    }
    const { accessToken } = getAuthData() || {}
    try {
      const res = await fetch(fullUrl, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
        body: config.data ? JSON.stringify(config.data) : undefined,
        ...config,
      })
      if (!res.ok) {
        throw new RequestError(res.status)
      }
      const result: ApiResult<D> = await res.json()
      if (result.code === 0 || result.code === 200) {
        return result.data
      }
      throw new RequestError(result.code, result.message)
    } catch (err) {
      if (err instanceof RequestError) {
        err.handleErrorDefault(config.silent)
      } else {
        Message.error(`请求出错`)
      }
      throw err
    }
  }

  get<D>(url: string, params?: object) {
    return this.request<D>(url, { method: 'get', params })
  }

  post<D>(url: string, data: object) {
    return this.request<D>(url, { method: 'post', data })
  }

  put<D>(url: string, data: object) {
    return this.request<D>(url, { method: 'put', data })
  }

  patch<D>(url: string, data: object) {
    return this.request<D>(url, { method: 'patch', data })
  }

  delete<D>(url: string, params?: object) {
    return this.request<D>(url, { method: 'delete', params })
  }
}

export default Http

export const getInstance = (baseUrl: string) => Http.getInstance(baseUrl)
