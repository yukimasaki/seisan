/** 認証済みユーザーが登録・ログインページにアクセスした場合に、
 *  指定したページにリダイレクトさせるミドルウェア
 */
export default defineNuxtRouteMiddleware((to, _from) => {
  const user = useSupabaseUser()
  const route = useRoute()
  const router = useRouter()

  const rules = [
    user.value != null && route.path == '/register' ? true : false,
    user.value != null && route.path == '/login' ? true : false
  ]

  rules.some(v => {
    if (v == true) return router.push('/')
  })

})
