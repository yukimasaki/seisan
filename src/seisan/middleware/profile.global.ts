export default defineNuxtRouteMiddleware(async () => {
  const { setProfile } = useAuth()
  await setProfile()
})
