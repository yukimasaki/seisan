/** 認証済みユーザーが登録・ログインページにアクセスした場合に、
 *  指定したページにリダイレクトさせるミドルウェア
 */
export default defineNuxtRouteMiddleware((to, _from) => {
  const storeAuth = useStoreAuth()
  const route = useRoute()
  const router = useRouter()

  const user = useSupabaseUser()
  storeAuth.setUser(user.value)

  const rules = [
    storeAuth.isLoggedIn != null && route.path == '/register' ? true : false,
    storeAuth.isLoggedIn != null && route.path == '/login' ? true : false
  ]

  rules.some(v => {
    if (v == true) return router.push('/')
  })

})
