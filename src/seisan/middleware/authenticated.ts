/** 認証済みユーザーが登録・ログインページにアクセスした場合に、
 *  指定したページにリダイレクトさせるミドルウェア
 */
export default defineNuxtRouteMiddleware((to, _from) => {
  const user = useSupabaseUser()
  const route = useRoute()

  const rules = [
    route.path == '/register' ? true : false,
    route.path == '/login' ? true : false
  ]

  /** ISSUE: ログイン後にrules記載のURLでリロードすると
   *  下記処理が正当に評価されているにもかかわらずトップページへリダイレクトされない
   */
  if (user.value != null) {
    rules.some(v => {
      if (v == true) {
        return navigateTo('/')
      }
    })
  }
})
