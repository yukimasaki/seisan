/** 認証が必要なページ(コンポーネント)に読み込ませるミドルウェア
 *  ユーザーがログインしていない場合は、ログインページにリダイレクトする。
 */
export default defineNuxtRouteMiddleware((to, _from) => {
  const storeAuth = useStoreAuth()
  const router = useRouter()

  const user = useSupabaseUser()
  storeAuth.setUser(user.value)

  if (storeAuth.isLoggedIn == null) {
    return router.push('/login')
  }
})
