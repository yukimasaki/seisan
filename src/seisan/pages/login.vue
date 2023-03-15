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
          <v-btn
            @click="login"
            :loading="loading"
          >
            ログイン
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

  const client = useSupabaseAuthClient()
  const user = useSupabaseUser()
  const router = useRouter()

  const email = ref('')
  const password = ref('')
  const errorMsg = ref('')
  const loading = ref(false)

  const login = async () => {
    try {
      loading.value = true
      const { data, error } = await client.auth.signInWithPassword({
        email: email.value,
        password: password.value
      })

      if (error) throw error

      if (data) {
        const timer = setInterval(() => {
          if (user && user.value) {
            clearInterval(timer)
            router.push('/')
          }
        }, 100)
      }
    } catch (error) {
      errorMsg.value = error.message
      alert(errorMsg.value)
      setTimeout(() => { errorMsg.value = '' }, 3000)
    } finally {
      loading.value = false
    }
  }
</script>
