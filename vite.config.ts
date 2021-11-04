import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  styleImport({
    libs: [
      {
        libraryName: '@fect-ui/vue',
        esModule: true,
        resolveStyle: (name) => `@fect-ui/vue/es/${name}/index.css`,
      },
    ],
  }),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3333
  },
})


