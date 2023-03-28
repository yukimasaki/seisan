export default defineNuxtRouteMiddleware(async () => {
  const { redirectToTop } = useAuth()
  await redirectToTop()
})
