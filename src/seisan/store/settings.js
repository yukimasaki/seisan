export const state = () => ({
  appName: 'すごいあぷり'
})

export const getters = {
  getAppName (state) {
    return state.appName
  }
}
