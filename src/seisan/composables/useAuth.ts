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
        useRouter().push('/login')
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
        useRouter().push('/')
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

  const requiresAuth = () => {
    const auth = getAuth()
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          console.log(`not authenticated`)
          useRouter().push('/login')
        } else {
          /** TODO: 下記コメントはデバッグのために使用しているので、開発完了後に削除する */
          console.log(user)

          console.log(`authenticated`)
          resolve(user)
        }
      })
    })
  }

  const redirectToTop = () => {
    const auth = getAuth()
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          console.log(`not authenticated`)
          useRouter().push('/login')
        } else {
          /** TODO: 下記コメントはデバッグのために使用しているので、開発完了後に削除する */
          console.log(user)

          console.log(`authenticated`)
          useRouter().push('/')
          resolve(user)
        }
      })
    })
  }

  return { getUser, googleSignUp, googleSignIn, requiresAuth, redirectToTop }
}

export default useAuth
