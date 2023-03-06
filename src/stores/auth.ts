import { defineStore } from 'pinia'

type authType = {
  user: object | null,
}

export const useStoreAuth = defineStore<string, authType>({
  id: 'auth',
  state: () => ({
    user: null,
  }),
  getters: {
    isLoggedIn: (state) => state.user,
  },
  actions: {
    setUser(user: object) {
      this.user = user
    },
    clearUser() {
      this.user = null
    },
  },
});
