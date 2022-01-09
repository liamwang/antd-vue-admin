import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import styleImport from 'vite-plugin-style-import'

const stylePlugin = styleImport({
  libs: [
    {
      libraryName: 'ant-design-vue',
      esModule: true,
      resolveStyle: (name) => {
        return `ant-design-vue/es/${name}/style`
      },
    },
  ],
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), stylePlugin],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "./src/styles/variables";`,
      },
    },
  },
})
