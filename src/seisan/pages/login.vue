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
            variant="elevated"
            elevation="1"
            color="primary"
            class="white-text"
            @click="login"
            :loading="loading"
          >
            ログイン
          </v-btn>
        </v-card-actions>
        <v-card-text>
          <p><nuxt-link to="/register">ユーザー登録</nuxt-link></p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
</script>
