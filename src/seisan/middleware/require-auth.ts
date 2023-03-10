/** 認証が必要なページ(コンポーネント)に読み込ませるミドルウェア
 *  ユーザーがログインしていない場合は、ログインページにリダイレクトする。
 */
export default defineNuxtRouteMiddleware((to, _from) => {
  const user = useSupabaseUser()

  if (!user.value) {
    return navigateTo('/login')
  }
})
