import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'
import { createStyleImportPlugin } from 'vite-plugin-style-import'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname) as ImportMetaEnv
  return {
    server: {
      port: env.VITE_PORT,
    },
    plugins: [
      vue(),
      vueJsx(),
      createStyleImportPlugin({
        libs: [
          {
            libraryName: 'ant-design-vue',
            esModule: true,
            resolveStyle: (name) => {
              return `ant-design-vue/es/${name}/style`
            },
          },
        ],
      }),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: true,
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: `@import "./src/styles/variables";`,
        },
      },
    },
    resolve: {
      alias: [
        // fix less import by: @import ~
        // { find: /^~/, replacement: '' },
        { find: '$/', replacement: resolve(__dirname, '.') + '/' },
        { find: '@/', replacement: resolve(__dirname, 'src') + '/' },
      ],
    },
  }
})
