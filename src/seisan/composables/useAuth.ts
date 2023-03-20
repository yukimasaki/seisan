import {
  Auth,
  User,
  UserCredential,
  onAuthStateChanged,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import {faker} from '@faker-js/faker'

const useAuth = () => {
  const googleSignUp = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth()
      const googleUser = await signInWithPopup(auth, provider)
      const user = null /** 新規登録を想定してnullで宣言 */
      if (user) {
        console.log(`すでにユーザー登録されています。`)
        navigateTo('/login')
      } else {
        console.log(googleUser)
        const { createUser } = useUser()
        const values = {
          uid: faker.datatype.uuid().substring(0, 16),
          display_name: 'Test User',
        }
        await createUser({ ...values })
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
