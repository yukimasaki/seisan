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

  const { auth } = useSupabaseAuthClient()
  const router = useRouter()

  const email = ref('')
  const password = ref('')
  const errorMsg = ref('')
  const loading = ref(false)

  const login = async () => {
    try {
      const { error } = await auth.signInWithPassword({
        email: email.value,
        password: password.value
      })
      if (error) throw error
      loading.value = true
      let user = {
        value: null
      }
      do {
        user = await useSupabaseUser()
        setInterval(async () => {}, 1000)
      } while (user.value == null)
      loading.value = false
      router.push('/')
    } catch (error) {
      errorMsg.value = error.message
      alert(errorMsg.value)
      setTimeout(() => { errorMsg.value = '' }, 3000)
    }
  }
</script>
