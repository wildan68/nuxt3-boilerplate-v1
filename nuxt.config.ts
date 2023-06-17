// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  css: [
    '@/assets/css/base.css',
  ],
  imports: {
    dirs: ['stores'],
  },
  modules: [
    '@pinia/nuxt',
    'nuxt-icon',
  ],
  plugins: [
    {
      src: '@/plugins/webfontloader',
      ssr: false,
      mode: 'client',
    },
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
})
