<template>
  <v-row justify="center">
    <v-col cols="12" md="6" xs="12">
      <v-card>
        <v-card-title>
          ユーザー登録
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="email"
              label="メールアドレス"
            />
            <v-text-field
              v-model="username"
              label="ユーザー名"
            />
            <v-text-field
              v-model="password"
              label="パスワード"
              type="password"
            />
            <v-text-field
              v-model="passwordRepeat"
              label="パスワード(確認)"
              type="password"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="register">
            登録
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
  definePageMeta({
    middleware: 'authenticated'
  })

  const user = useSupabaseUser()
  const { auth } = useSupabaseAuthClient()

  const email = ref('')
  const username = ref('')
  const password = ref('')
  const passwordRepeat = ref('')
  const errorMsg = ref('')

  const register = async () => {
    if (password.value !== passwordRepeat.value) {
      errorMsg.value = 'パスワードが一致しません'
      password.value = ''
      passwordRepeat.value = ''

      setTimeout(() => {
        errorMsg.value = ''
      }, 3000)
      return
    }

    try {
      const { data, error } = await auth.signUp({
        email: email.value,
        password: password.value,
        options: {
          data: {
            username: username.value,
            email: email.value
          }
        }
      })

      email.value = ''
      password.value = ''
      passwordRepeat.value = ''

      if (error) throw error
    } catch (error) {
      errorMsg.value = error.message
      alert(errorMsg.value)
      setTimeout(() => {
        errorMsg.value = ''
      }, 3000)
    }
  }

  /** 現状は、watchEffectでナビゲーションガードを実装している
   *  TODO: router側で統一的に処理するようにする
   */
  // watchEffect(() => {
  //   if (user.value) {
  //     return navigateTo('/')
  //   }
  // })
</script>
