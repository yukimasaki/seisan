/** 認証が必要なページ(コンポーネント)に読み込ませるミドルウェア
 *  ユーザーがログインしていない場合は、ログインページにリダイレクトする。
 */
export default defineNuxtRouteMiddleware(async (to, _from) => {
  const user = await useSupabaseUser()
  const router = useRouter()

  if (user.value == null) {
    console.log(user.value)
    return router.push('/login')
  }
})
