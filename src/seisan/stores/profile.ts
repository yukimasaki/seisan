import { defineStore } from 'pinia'

export const useStoreProfile = defineStore({
  id: 'profile',
  state: () => ({
    profile: null
  }),

  actions: {
    setProfile (profile) {
      this.profile = profile
    }
  },
})
