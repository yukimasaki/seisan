<template>
  <v-row justify="center">
    <v-col cols="12" sm="12" md="4">
      <v-card>
        <v-card-title class="justify-center" mb-3>
          <h1 class="display-1">ログイン</h1>
        </v-card-title>

        <v-card-text>
          <v-form>
            <v-text-field
              label="メールアドレス"
              v-model="email"
            />
            <v-text-field
              label="パスワード"
              v-model="password"
              type="password"
            />
          </v-form>
        </v-card-text>

        <v-card-actions class="justify-center">
          <v-btn @click="login">ログイン</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent ({
  setup () {
    const email = ref('')
    const password = ref('')

    const login = async () => {
      const client = useSupabaseAuthClient()

      const error = await client.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      })

      if (!error) return router.push('/')

      console.log(error)
    }

    watchEffect (async () => {
      const router = useRouter()
      const user = useSupabaseUser()

      if (user.value) {
        await router.push('/')
      }
    })

    return { email, password, login }
  }
})
</script>
