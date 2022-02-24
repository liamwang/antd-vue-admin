import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/token',
    method: 'post',
    timeout: 2000,
    response: (req: any) => {
      const { username, password } = req.body
      if (!username || !password || username.toLowerCase() !== 'admin' || password != 'admin') {
        return {
          code: 400,
          message: '用户名或密码错误',
        }
      }
      return {
        code: 0,
        data: {
          accessToken: 'fjkdslajfdskalfjkdsafjdksla',
          expiresAt: Date.now() + 3600,
          refreshToken: '',
          userInfo: {
            id: 1,
            name: 'Admin',
            roles: ['admin'],
            avatar: '',
          },
        },
      }
    },
  },

  {
    url: '/api/user',
    method: 'get',
    response: {
      code: 0,
      data: {
        id: 1,
        name: 'Admin',
        roles: ['admin'],
        avatar: '',
      },
    },
  },

  {
    url: '/api/users/1',
    method: 'get',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        id: 1,
        name: 'Admin',
        roles: ['admin'],
        avatar: '',
      },
    },
  },

  {
    url: '/api/err1',
    method: 'get',
    response: {
      code: 400,
      message: '来自服务端的错误消息',
    },
  },

  {
    url: '/api/err2',
    method: 'get',
    rawResponse: async (req, res) => {
      res.statusCode = 404
      res.end(`hello`)
    },
  },
] as MockMethod[]
