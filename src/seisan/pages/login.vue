<template>
  <v-row justify="center">
    <v-col cols="12" sm="12" md="4">
      <v-card>
        <v-card-title class="justify-center" mb-3>
          <h1 class="display-1">
            ログイン
          </h1>
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
            <nuxt-link to="/register">
              ユーザー登録
            </nuxt-link>
          </v-form>
        </v-card-text>

        <v-card-actions class="justify-center">
          <v-btn @click="login">
            ログイン
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'LoginPage',

  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    async login () {

    }
  }
}
</script>
