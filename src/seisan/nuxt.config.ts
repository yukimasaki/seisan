// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.css"],
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/supabase'
  ],
  imports: {
    dirs: ['stores']
  }
})
