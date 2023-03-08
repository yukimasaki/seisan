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
  const email = ref('')
  const username = ref('')
  const password = ref('')
  const passwordRepeat = ref('')

  const register = () => {
    console.log(`email: ${email.value}`)
    console.log(`username: ${username.value}`)
    console.log(`password: ${password.value}`)
    console.log(`passwordRepeat: ${passwordRepeat.value}`)
  }
</script>
