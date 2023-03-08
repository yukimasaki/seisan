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
  const email = ref('')
  const password = ref('')

  const login = () => {
    console.log(`email: `)
    console.log(email.value)
    console.log(`password: `)
    console.log(password.value)
  }
</script>
