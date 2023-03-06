<template>
  <v-row justify="center">
    <v-col cols="12" sm="12" md="4">
      <v-card>
        <v-card-title class="justify-center" mb-3>
          <h1 class="display-1">
            ユーザー登録
          </h1>
        </v-card-title>

        <v-card-text>
          <v-form>
            <v-text-field
              v-model="credentials.email"
              label="メールアドレス"
            />
            <v-text-field
              v-model="credentials.username"
              label="ユーザー名"
            />
            <v-text-field
              v-model="credentials.password"
              label="パスワード"
              type="password"
            />
            <v-text-field
              v-model="credentials.passwordRepeat"
              label="パスワード(再入力)"
              type="password"
            />
          </v-form>
        </v-card-text>

        <v-card-actions class="justify-center">
          <v-btn @click="register">
            登録
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'RegisterPage',

  data () {
    return {
      credentials: {
        email: '',
        password: '',
        passwordRepeat: '',
        username: ''
      }
    }
  },

  methods: {
    async register (credentials) {
      await this.$db.auth.signUp({
        email: credentials.email,
        password: credentials.password,
        options: {
          data: {
            email: credentials.email,
            username: credentials.username
          }
        }
      })
    }
  }
}
</script>
