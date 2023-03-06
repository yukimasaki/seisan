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
              label="ユーザー名"
              v-model="username"
            />
            <v-text-field
              label="パスワード"
              v-model="password"
              type="password"
            />
            <v-text-field
              label="パスワード(再入力)"
              v-model="passwordRepeat"
              type="password"
            />
          </v-form>
        </v-card-text>

        <v-card-actions class="justify-center">
          <v-btn @click="register">登録</v-btn>
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
    const username = ref('')
    const password = ref('')
    const passwordRepeat = ref('')

    const register = async () => {
      const client = useSupabaseAuthClient()

      const session = await client.auth.signUp({
        email: email.value,
        password: password.value
      })

      await client
      .from('profiles')
      .insert({
        id: session.user.id,
        username: username.value,
      })
    }

    return { email, username, password, passwordRepeat, register }
  }
})
</script>
