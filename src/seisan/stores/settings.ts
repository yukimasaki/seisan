import { defineStore } from 'pinia'

export const useStoreSettings = defineStore({
  id: 'settings',
  state: () => ({
    appName: 'Nuxt3 App'
  }),
})
