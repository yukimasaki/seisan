/** 認証が必要なページ(コンポーネント)に読み込ませるミドルウェア
 *  ユーザーがログインしていない場合は、ログインページにリダイレクトする。
 */
export default defineNuxtRouteMiddleware((to, _from) => {
  const user = useSupabaseUser()

  /** ISSUE: ユーザー登録後のマジックリンクをクリックしてアクセスすると、
   *  user.value == nullと判定され/loginへリダイレクトされてしまう。
   *  現状、解決策が見つけられない…。
   *  https://github.com/nuxt-modules/supabase/issues/28
   */
  if (!user.value) {
    return navigateTo('/login')
  }
})
