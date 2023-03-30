import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut
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
      const dbuser = await getUser(googleUser.user.uid)

      if (dbuser) {
        /** TODO: メッセージを実装 */
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
        /** TODO: メッセージを実装 */
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
    const googleUser = await signInWithPopup(auth, provider)
    const dbuser = await getUser(googleUser.user.uid)

    if (!dbuser) {
      alert(`ユーザー登録をしてください。`)
      useRouter().push('/register')
    } else {
      setProfile()
    }
  }

  const setProfile = () => {
    const storeProfile = useStoreProfile()
    const auth = getAuth()

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const dbuser = await getUser(user.uid)
        if (dbuser) {
          storeProfile.setProfile(user)
        }
      }
    })
  }

  const requiresAuth = () => {
    const auth = getAuth()
    /** TODO: 一瞬、遷移前のページが表示されてしまう対策としてPromiseで囲っているが、
     *  Promiseを.thenに置き換えるとどうなるか試したい。
     */
    return new Promise((resolve) => {
      onAuthStateChanged(auth, async (user) => {
        if (!user) {
          useRouter().push('/login')
          resolve(user)
        }
        if (user) {
          const dbuser = await getUser(user.uid)
          if (!dbuser) {
            useRouter().push('/login')
            resolve(user)
          } else {
            resolve(user)
          }
        }
      })
    })
  }

  const requiresGuest = () => {
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

  const googleSignOut = async () => {
    const auth = getAuth()
    await signOut(auth)
    .then(() => {
      const storeProfile = useStoreProfile()
      storeProfile.clearProfile()
      useRouter().push('/login')
    })
    .catch((error) => {
      /** TODO: メッセージを実装 */
      alert(error)
    })
  }

  return { getUser, googleSignUp, googleSignIn, setProfile, requiresAuth, requiresGuest, googleSignOut }
}

export default useAuth
