export default defineNuxtRouteMiddleware(async () => {
  const { checkAuthState } = useAuth()
  await checkAuthState()
})
