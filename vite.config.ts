import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import type { ConfigEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import styleImport from './build/styleImport'

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, __dirname) as ImportMetaEnv
  return {
    server: {
      port: parseInt(env.VITE_PORT),
    },
    plugins: [vue(), vueJsx(), styleImport()],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          // additionalData: `@import "./src/styles/variables";`,
        },
      },
    },
    resolve: {
      alias: [
        { find: '$/', replacement: `${resolve(__dirname, '.')}/` },
        { find: '@/', replacement: `${resolve(__dirname, 'src')}/` },
      ],
    },
    build: {
      chunkSizeWarningLimit: 1000,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            layout: ['./src/layout/Layout.vue'],
          },
        },
      },
    },
    optimizeDeps: {
      include: ['ant-design-vue', 'ant-design-vue/es', 'ant-design-vue/es/locale/zh_CN'],
    },
  }
})
