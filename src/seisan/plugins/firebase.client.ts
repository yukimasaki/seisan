import { initializeApp } from 'firebase/app'

export default defineNuxtPlugin(() => {
  useState('firebaseApp', () => {
    const config = useRuntimeConfig()
    const firebaseConfig = {
      apiKey: config.FIREBASE_API_KEY,
      authDomain: config.FIREBASE_AUTH_DOMAIN,
      projectId: config.FIREBASE_PROJECT_ID,
    }
    return initializeApp(firebaseConfig)
  })
})
