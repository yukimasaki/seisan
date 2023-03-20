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
              label="表示名"
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
          <v-btn
            variant="elevated"
            elevation="1"
            color="primary"
            class="white-text"
            @click="register"
            :loading="loading"
          >
            Googleで登録
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
  const register = () => {
    const { googleSignUp } = useAuth()
    googleSignUp()
  }
</script>
