export default defineNuxtRouteMiddleware(async () => {
  const { requiresAuth } = useAuth()
  await requiresAuth()
})
