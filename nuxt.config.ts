// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        style: 'filter: invert(1)'
      }
    }
  },
  nitro: {
    storage: {
      jokes: {
        driver: 'fs-lite',
        base: './'
      }
    }
  }
})
