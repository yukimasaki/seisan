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

  const setProfile = () => {
    const storeProfile = useStoreProfile()

    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        storeProfile.setProfile(user)
      }
    })
  }

  const requiresAuth = () => {
    const auth = getAuth()
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          useRouter().push('/login')
          resolve(user)
        } else {
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
          resolve(user)
        } else {
          useRouter().push('/')
          resolve(user)
        }
      })
    })
  }

  return { getUser, googleSignUp, googleSignIn, requiresAuth, redirectToTop, setProfile }
}

export default useAuth
