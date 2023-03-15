/** 認証済みユーザーが登録・ログインページにアクセスした場合に、
 *  指定したページにリダイレクトさせるミドルウェア
 */
export default defineNuxtRouteMiddleware((to, _from) => {
  const user = useSupabaseUser()
  const route = useRoute()
  const router = useRouter()

  const rules = [
    route.path == '/register' ? true : false,
    route.path == '/login' ? true : false
  ]

  if (user.value != null) {
    rules.some(v => {
      if (v == true) {
        return router.push('/')
      }
    })
  }
})
