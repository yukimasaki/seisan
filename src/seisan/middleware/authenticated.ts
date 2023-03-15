/** 認証済みユーザーが登録・ログインページにアクセスした場合に、
 *  指定したページにリダイレクトさせるミドルウェア
 */
export default defineNuxtRouteMiddleware((to, _from) => {
  const user = useSupabaseUser()
  const route = useRoute()

  if (user.value) {
    if (route.path == '/register' || route.path == '/login') {
      return navigateTo('/')
    }
  }
})
