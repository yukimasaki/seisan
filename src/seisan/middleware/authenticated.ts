/** 認証済みユーザーが登録・ログインページにアクセスした場合に、
 *  指定したページにリダイレクトさせるミドルウェア
 */
export default defineNuxtRouteMiddleware((to, _from) => {
  const user = useSupabaseUser()
  const route = useRoute()

  /** 認証済みユーザーが登録ページにアクセスした場合 */


  /** 認証済みユーザーがログインページにアクセスした場合 */

})
