import { useRouter, useRoute } from 'vue-router'
import { clear, getAuthData, setAuthData } from '@/store/local'
import { homePath, loginPath } from '@/config/const'
import { userService } from '@/service'

export default () => {
  const router = useRouter()
  const route = useRoute()
  const auth = getAuthData()

  const login = async (form: LoginForm) => {
    const authData = await userService.login(form)
    setAuthData(authData)
    router.replace(homePath)
  }

  const logout = () => {
    clear()
    router.replace(loginPath)
  }

  const validate = () => {
    const authenticated = auth && auth.expiresAt <= Date.now()
    if (!authenticated && !route.path.startsWith(loginPath)) {
      logout()
    }
  }

  return {
    auth,
    login,
    logout,
    validate,
  }
}
