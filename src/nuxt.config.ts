// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    ssr: false,
    css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.css"],
    build: {
      transpile: ["vuetify"],
    },
    vite: {
      define: {
        "process.env.DEBUG": false,
      },
    },
    modules: [
      '@nuxtjs/supabase',
      '@pinia/nuxt',
    ],
})
