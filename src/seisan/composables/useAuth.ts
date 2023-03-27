import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'
const useAuth = () => {
  const { createProfile, readProfileAny } = useProfile()

  const getUser = async (uid) => {
  }

  const googleSignUp = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth()
      const googleUser = await signInWithPopup(auth, provider)

      console.log(googleUser)

      /** todo: getUser(uid)に置き換える */
      const user = null

      if (user) {
        /** TOOD: メッセージを実装 */
        console.log(`すでにユーザー登録されています。`)
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
        alert(`ユーザー登録が完了しました。`)
      }
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  return { googleSignUp }
}

export default useAuth
