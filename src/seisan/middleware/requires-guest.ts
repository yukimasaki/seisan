export default defineNuxtRouteMiddleware(async () => {
  const { requiresGuest } = useAuth()
  await requiresGuest()
})
