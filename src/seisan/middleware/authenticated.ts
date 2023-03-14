/** 認証済みユーザーが登録・ログインページにアクセスした場合に、
 *  指定したページにリダイレクトさせるミドルウェア
 */
export default defineNuxtRouteMiddleware((to, _from) => {
  const route = useRoute()
  const user = useSupabaseUser()

  const rules = [
    route.path == '/register' ? true : false,
    route.path == '/login' ? true : false
  ]

  if (user.value) {
    rules.some(v => {
      if (v == true) return navigateTo('/')
    })
  }
})
