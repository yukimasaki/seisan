import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'
import {faker} from '@faker-js/faker'

const useAuth = () => {
  const { createProfile, readProfile } = useProfile()

  const getUser = async (uid) => {
  }

  const googleSignUp = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth()
      const googleUser = await signInWithPopup(auth, provider)
      const user = googleUser.user.uid
      if (user) {
        console.log(`すでにユーザー登録されています。`)
        navigateTo('/login')
      } else {
        console.log(googleUser)
        const values = {
          uid: faker.datatype.uuid().substring(0, 16),
          display_name: 'Test Urofile',
          email: 'test@example.com',
          avatar_url: 'https://hogehoge.example.com/test.png'
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
