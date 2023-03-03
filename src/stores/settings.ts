import { defineStore } from "pinia";

export const useStoreSettings = defineStore(
  'settings',
  {
    state: () => ({
      appName: 'せいさんあぷり'
    }),
  })
