import { defineStore } from 'pinia'

export const useStoreAuth = defineStore({
  id: 'auth',

  state: () => ({
    user: null,
  }),

  getters: {
    isLoggedIn: (state) => state.user,
  },

  actions: {
    setUser(user) {
      console.log(`実行されている`)
      this.user = user
      console.log(this.user)
    },
    clearUser() {
      this.user = null
    },
  },
})
