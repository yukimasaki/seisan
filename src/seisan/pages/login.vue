<template>
  <v-row justify="center">
    <v-col cols="12" md="6" xs="12">
      <v-card>
        <v-card-title>
          ログイン
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="email"
              label="メールアドレス"
            />
            <v-text-field
              v-model="password"
              label="パスワード"
              type="password"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="login">
            ログイン
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
  const { auth } = useSupabaseAuthClient()

  const email = ref('')
  const password = ref('')
  const errorMsg = ref('')

  const login = async () => {
    try {
      const { data, error } = await auth.signInWithPassword({
        email: email.value,
        password: password.value
      })
      console.log(data)
      if (error) throw error
      if (data) navigateTo('/')
    } catch (error) {
      errorMsg.value = error.message
      alert(errorMsg.value)
      setTimeout(() => {
        errorMsg.value = ''
      }, 3000)
    }
  }
</script>
