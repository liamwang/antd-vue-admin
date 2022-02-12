const cache: Record<string, any> = {}

const getItem = <T>(key: string, isPrimitive = false): T | null => {
  if (cache[key]) {
    return cache[key]
  }
  const text = localStorage.getItem(key)
  if (text) {
    cache[key] = (isPrimitive ? text : JSON.parse(text)) as T
    return cache[key]
  }
  return null
}

const setItem = <T>(key: string, item: T, isPrimitive = false) => {
  if (!item) {
    cache[key] = undefined
    localStorage.removeItem(key)
    return
  }
  cache[key] = item
  localStorage.setItem(key, isPrimitive ? String(item) : JSON.stringify(item))
}

export const clear = () => {
  Object.keys(cache).forEach((key) => (cache[key] = undefined))
  localStorage.clear()
}

const AUTH_KEY = '__AUTH_KEY__'
export const getAuthData = () => getItem<AuthData>(AUTH_KEY)
export const setAuthData = (data: AuthData | unknown) => setItem(AUTH_KEY, data)
