import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth'
const useAuth = () => {
  const { createProfile, readProfileAny } = useProfile()

  const getUser = async (uid) => {
    return await readProfileAny({ targetId: uid })
  }

  const googleSignUp = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth()
      const googleUser = await signInWithPopup(auth, provider)

      console.log(googleUser)

      /** TOOD: getUser(uid)に置き換える */
      const user = await getUser(googleUser.user.uid)

      if (user) {
        /** TOOD: メッセージを実装 */
        alert(`すでにユーザー登録されています。`)
        navigateTo('/login')
      } else {
        console.log(googleUser)
        const values = {
          uid: googleUser.user.uid,
          display_name: googleUser.user.displayName,
          email: googleUser.user.email,
          avatar_url: googleUser.user.photoURL
        }
        await createProfile({ ...values })
        /** TOOD: メッセージを実装 */
        alert(`ユーザー登録が完了しました。`)
        navigateTo('/')
      }
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider()
    const auth = getAuth()
    const { user } = await signInWithPopup(auth, provider)
    console.log(user)
  }

  const checkAuthState = async () => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(`authenticated`)
        /** TODO: 下記コメントはデバッグのために使用しているので、開発完了後に削除する */
        console.log(user)
        navigateTo('/')
      } else {
        console.log(`not authenticated`)
        navigateTo('/login')
      }
    })
  }

  return { getUser, googleSignUp, googleSignIn, checkAuthState }
}

export default useAuth
