import { getInstance } from '@/utils/http'

const http = getInstance(import.meta.env.VITE_BASE_API_URL)

export const login = (data: { username: string; password: string }) => {
  return http.post('token', { ...data, grantType: 'password' })
}

export const refreshToken = (data: { refreshToken: string }) => {
  return http.post('token', { ...data, grantType: 'refresh_token' })
}

export const getUserById = (id: number) => http.get<any>(`users/${id}`)
