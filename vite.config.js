import { defineConfig } from 'vite'
import vue from '@vite/plugin-vue'

export default defineConfig({
  base: '/deploying-vite-project-example/',
  plugins: [vue()]
})
